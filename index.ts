import "dotenv/config";
import { mockLaunchFeed } from "./chain/mockFeed.js";
import { scoreOnChain } from "./agents/onchain.js";
import { scoreNarrative } from "./agents/narrative.js";
import { scoreRisk } from "./agents/risk.js";
import { decide } from "./trading/decision.js";
import { PaperTrader } from "./trading/paper.js";

const trader = new PaperTrader(Number(process.env.PAPER_START_BALANCE ?? "1"));

console.log("MANTIS v0.1");
console.log("Mode: PAPER TRADING");
console.log(`Paper balance: ${trader.getBalance().toFixed(2)} ETH`);
console.log("Watching launches...\n");

for await (const launch of mockLaunchFeed()) {
  const onChain = scoreOnChain(launch);
  const narrative = await scoreNarrative(launch);
  const risk = scoreRisk(launch);
  const decision = decide(onChain, narrative, risk);

  console.log(`$${launch.symbol} — ${launch.name}`);
  console.log(`On-chain:  ${onChain}/100`);
  console.log(`Narrative: ${narrative}/100`);
  console.log(`Risk:      ${risk}/100`);
  console.log(`Decision:  ${decision}`);

  if (decision === "BUY") {
    const trade = trader.buy(launch.symbol, 0.05);
    console.log(`Paper allocation: ${trade.allocationEth.toFixed(2)} ETH`);
    console.log(`Paper balance:    ${trade.remainingEth.toFixed(2)} ETH`);
  }
  console.log("");
}
