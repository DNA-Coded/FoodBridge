/**
 * Robustly extracts and parses a JSON object from Gemma's text output.
 * Gemma sometimes wraps JSON in markdown fences or adds extra text —
 * this handles all those cases.
 */
export function parseJsonFromGemma<T>(text: string): T {
  // 1. Strip markdown code fences if present
  let cleaned = text
    .replace(/```json\s*/gi, '')
    .replace(/```\s*/g, '')
    .trim();

  // 2. Extract the first { ... } block (handles extra trailing text)
  const start = cleaned.indexOf('{');
  const end = cleaned.lastIndexOf('}');

  if (start === -1 || end === -1) {
    throw new Error(`Gemma response did not contain a JSON object.\nRaw: ${text.slice(0, 300)}`);
  }

  const jsonStr = cleaned.slice(start, end + 1);

  try {
    return JSON.parse(jsonStr) as T;
  } catch (err) {
    throw new Error(`Failed to parse Gemma JSON response.\nRaw JSON: ${jsonStr.slice(0, 300)}\nError: ${err}`);
  }
}
