import type { Launch } from "../types/launch.js";
export async function scoreNarrative(launch: Launch): Promise<number> {
  const text = launch.narrative.toLowerCase();
  let score = 50;
  if (text.includes("ai")) score += 15;
  if (text.includes("agent")) score += 12;
  if (text.includes("on-chain") || text.includes("onchain")) score += 8;
  if (text.includes("no clear product")) score -= 25;
  return Math.max(0, Math.min(100, score));
}
