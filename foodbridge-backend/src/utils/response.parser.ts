/**
 * Robustly extracts and parses a JSON object from Gemma's text output.
 * Gemma 4 is a thinking model — it may output reasoning before the JSON.
 * This parser finds the LAST complete { ... } block in the response,
 * which is always the actual JSON (thinking comes first).
 */
export function parseJsonFromGemma<T>(text: string): T {
  if (!text || text.trim().length === 0) {
    throw new Error(`Gemma response was empty.`);
  }

  // 1. Strip markdown code fences if present
  let cleaned = text
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim();

  // 2. Try to find the LAST { ... } block (handles thinking preamble before JSON)
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');

  if (start === -1 || end === -1 || end < start) {
    throw new Error(
      `Gemma response did not contain a JSON object.\nRaw: ${text.slice(0, 300)}`
    );
  }

  const jsonStr = cleaned.slice(start, end + 1);

  try {
    return JSON.parse(jsonStr) as T;
  } catch (err) {
    // 3. Try to find ANY valid JSON object in the text as final fallback
    const matches = cleaned.match(/\{[\s\S]*?\}/g);
    if (matches) {
      for (const m of matches.reverse()) { // try from end (most likely the actual response)
        try {
          return JSON.parse(m) as T;
        } catch (_) {}
      }
    }
    throw new Error(
      `Failed to parse Gemma JSON response.\nExtracted: ${jsonStr.slice(0, 400)}\nError: ${err}`
    );
  }
}
