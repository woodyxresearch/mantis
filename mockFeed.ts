import type { Launch } from "../types/launch.js";

const launches: Launch[] = [
  { symbol:"NEON", name:"Neon Swarm", liquidityEth:12.5, holderCount:184, deployerAgeDays:420, suspiciousWalletShare:0.08, narrative:"AI agents coordinating on-chain trading" },
  { symbol:"FANG", name:"Fang Protocol", liquidityEth:3.1, holderCount:52, deployerAgeDays:8, suspiciousWalletShare:0.41, narrative:"Fast meme launch with no clear product" }
];

export async function* mockLaunchFeed(): AsyncGenerator<Launch> {
  for (const launch of launches) {
    await new Promise((r) => setTimeout(r, 900));
    yield launch;
  }
}
