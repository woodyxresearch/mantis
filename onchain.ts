import type { Launch } from "../types/launch.js";
export function scoreOnChain(launch: Launch): number {
  let score = 50;
  score += Math.min(20, launch.liquidityEth);
  score += Math.min(15, launch.holderCount / 20);
  score += Math.min(15, launch.deployerAgeDays / 60);
  score -= launch.suspiciousWalletShare * 60;
  return Math.max(0, Math.min(100, Math.round(score)));
}
