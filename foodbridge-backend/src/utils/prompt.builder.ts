// ─── Prompt Builder ───────────────────────────────────────────────────────────
// All prompts instruct Gemma to respond ONLY with a valid JSON object.
// Low temperature is used at call sites to keep outputs deterministic.

// ─── 1. Food Analysis Prompt ──────────────────────────────────────────────────
export const buildFoodAnalysisPrompt = (donation: {
  name: string;
  category: string;
  quantity: string;
  description?: string;
  cookedAt?: string;
}): string => {
  return `You are FoodBridge AI, an expert food safety coordinator and logistics analyst for a surplus food redistribution platform in India.

Analyse the following donated food and respond with ONLY a valid JSON object — no markdown, no explanation, no code fences.

Food Details:
- Name: ${donation.name}
- Category: ${donation.category}
- Quantity: ${donation.quantity}
- Description: ${donation.description || 'Not provided'}
- Cooked/Prepared At: ${donation.cookedAt || 'Unknown'}

Return this exact JSON structure:
{
  "summary": "A 2-3 sentence plain-language summary of this donation for the recipient organization",
  "urgencyLevel": "low | medium | high | critical",
  "estimatedServings": <number of people this can feed>,
  "recommendedCategories": ["food_bank", "community_kitchen", ...],
  "safeToConsume": true | false,
  "storageAdvice": "Brief storage/handling advice for the recipient"
}

Urgency guide:
- critical: cooked food, expires in < 2 hours
- high: cooked food, expires in 2-6 hours  
- medium: baked goods or produce, expires in 6-24 hours
- low: packaged/dry goods, shelf-stable

Respond with ONLY the JSON object.`;
};

// ─── 2. Organization Matching Prompt ─────────────────────────────────────────
export const buildOrgMatchingPrompt = (
  donation: { name: string; category: string; quantity: string; urgencyLevel: string },
  organizations: Array<{
    id: string;
    name: string;
    type: string;
    city: string;
    acceptedFoodTypes: string[];
    capacity: number;
  }>
): string => {
  const orgList = organizations
    .map((o, i) => `${i + 1}. ID: ${o.id} | Name: ${o.name} | Type: ${o.type} | Accepts: ${o.acceptedFoodTypes.join(', ')} | Capacity: ${o.capacity} meals/day`)
    .join('\n');

  return `You are FoodBridge AI, responsible for matching surplus food donations to the most appropriate recipient organizations in India.

Donation to Match:
- Food: ${donation.name}
- Category: ${donation.category}
- Quantity: ${donation.quantity}
- Urgency: ${donation.urgencyLevel}

Available Organizations:
${orgList}

Score each organization (0-100) based on:
- Food type compatibility (does the org accept this category?)
- Capacity (can they handle this quantity?)
- Organization type suitability (e.g., cooked meals → community kitchen, dry goods → food bank)
- Urgency alignment (high urgency → orgs that can respond fast)

Respond with ONLY this JSON object, no markdown:
{
  "matches": [
    {
      "organizationId": "<id>",
      "organizationName": "<name>",
      "score": <0-100>,
      "explanation": "One sentence explaining why this org is a good match"
    }
  ],
  "topMatch": {
    "organizationId": "<id of highest scorer>",
    "organizationName": "<name>",
    "score": <score>,
    "explanation": "<detailed explanation for the donor>"
  },
  "reasoningSummary": "One paragraph explaining the overall matching decision"
}

Sort matches by score descending. Include all organizations. Respond with ONLY the JSON.`;
};

// ─── 3. Multilingual Notification Prompt ─────────────────────────────────────
export const buildNotificationPrompt = (
  donation: { name: string; quantity: string; pickupWindow: string; address: string },
  organization: { name: string; contactName?: string },
  language: 'english' | 'bengali' | 'hindi'
): string => {
  const langMap = {
    english: 'English',
    bengali: 'Bengali (বাংলা)',
    hindi: 'Hindi (हिंदी)',
  };

  return `You are FoodBridge AI, generating a pickup coordination message for a food donation.

Donation Details:
- Food: ${donation.name}
- Quantity: ${donation.quantity}
- Pickup Window: ${donation.pickupWindow}
- Pickup Address: ${donation.address}

Recipient Organization: ${organization.name}
Contact Person: ${organization.contactName || 'Coordinator'}

Generate a professional, warm, and clear pickup notification in ${langMap[language]}.

Respond with ONLY this JSON object, no markdown:
{
  "subject": "Short subject line for the notification",
  "message": "Full notification message (3-4 sentences, warm and professional tone)",
  "smsVersion": "Very short SMS-friendly version under 160 characters"
}

The message should include: the food available, quantity, pickup address, pickup time window, and a thank-you note.
Respond with ONLY the JSON.`;
};
