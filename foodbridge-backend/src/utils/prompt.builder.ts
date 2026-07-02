// ─── System context prefix (embedded in every user prompt for Gemma 4) ────────
const CTX = `You are FoodBridge AI, a food safety coordinator for a surplus food redistribution platform in India. You ALWAYS respond with ONLY a valid JSON object — no markdown, no code fences, no explanation. The first character must be { and the last must be }.

`;

// ─── 1. Food Analysis User Prompt ─────────────────────────────────────────────
export const buildFoodAnalysisUserPrompt = (donation: {
  name: string;
  category: string;
  quantity: string;
  description?: string;
  cookedAt?: string;
}): string => {
  return `${CTX}Analyse this donated food item. If an image is provided alongside this text, inspect it carefully to verify the food's visual condition and safety:

Food: ${donation.name}
Category: ${donation.category}
Quantity: ${donation.quantity}
Description: ${donation.description || 'Not provided'}
Prepared at: ${donation.cookedAt || 'Unknown time'}

Return ONLY this JSON (no other text):
{
  "summary": "2-3 sentence description for recipient organizations",
  "urgencyLevel": "low|medium|high|critical",
  "estimatedServings": <integer>,
  "recommendedCategories": ["food_bank"|"community_kitchen"|"shelter"|"school"],
  "safeToConsume": true|false,
  "storageAdvice": "Brief handling advice"
}

Urgency: critical=cooked <2hrs, high=cooked 2-6hrs, medium=baked 6-24hrs, low=shelf-stable`;
};

// ─── 2. Organization Matching User Prompt ─────────────────────────────────────
export const buildOrgMatchingUserPrompt = (
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
    .map((o, i) => `${i + 1}. id=${o.id} name="${o.name}" type=${o.type} accepts=[${o.acceptedFoodTypes.join(',')}] capacity=${o.capacity}/day`)
    .join('\n');

  return `Match this food donation to the best recipient organizations and score each one.

Donation:
- Food: ${donation.name}
- Category: ${donation.category}
- Quantity: ${donation.quantity}
- Urgency: ${donation.urgencyLevel}

Organizations:
${orgList}

Return exactly this JSON (no markdown, no text outside the JSON):
{
  "matches": [
    {"organizationId": "<id>", "organizationName": "<name>", "score": <0-100>, "explanation": "<one sentence>"}
  ],
  "topMatch": {"organizationId": "<best id>", "organizationName": "<name>", "score": <score>, "explanation": "<detailed reason>"},
  "reasoningSummary": "<one paragraph summary of matching decision>"
}

Sort matches by score descending.`;
};

// ─── 3. Multilingual Notification User Prompt ─────────────────────────────────
export const buildNotificationUserPrompt = (
  donation: { name: string; quantity: string; pickupWindow: string; address: string },
  organization: { name: string; contactName?: string },
  language: 'english' | 'bengali' | 'hindi'
): string => {
  const langMap = { english: 'English', bengali: 'Bengali (বাংলা)', hindi: 'Hindi (हिंदी)' };

  return `Generate a food pickup notification in ${langMap[language]}.

Donation: ${donation.name} (${donation.quantity})
Pickup Window: ${donation.pickupWindow}
Pickup Address: ${donation.address}
Recipient: ${organization.name} (contact: ${organization.contactName || 'Coordinator'})

Return exactly this JSON (no markdown, no text outside the JSON):
{
  "subject": "<short notification subject line in ${langMap[language]}>",
  "message": "<3-4 sentence warm professional message in ${langMap[language]} with food details, address, time, and thank-you>",
  "smsVersion": "<under 160 character SMS version in ${langMap[language]}>"
}`;
};

// ─── Legacy aliases (keep backward compatibility) ─────────────────────────────
export const buildFoodAnalysisPrompt = buildFoodAnalysisUserPrompt;
export const buildOrgMatchingPrompt = buildOrgMatchingUserPrompt;
export const buildNotificationPrompt = buildNotificationUserPrompt;
