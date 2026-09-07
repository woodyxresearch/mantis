export type Decision = "BUY" | "HOLD" | "SKIP";
export function decide(onChain: number, narrative: number, risk: number): Decision {
  const conviction = onChain * 0.5 + narrative * 0.5;
  if (risk >= 65) return "SKIP";
  if (conviction >= 72 && risk <= 40) return "BUY";
  if (conviction >= 58) return "HOLD";
  return "SKIP";
}
