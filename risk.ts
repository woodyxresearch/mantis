import type { Launch } from "../types/launch.js";
export function scoreRisk(launch: Launch): number {
  let risk = 20;
  if (launch.deployerAgeDays < 30) risk += 25;
  if (launch.liquidityEth < 5) risk += 20;
  if (launch.holderCount < 75) risk += 15;
  risk += Math.round(launch.suspiciousWalletShare * 50);
  return Math.max(0, Math.min(100, risk));
}
