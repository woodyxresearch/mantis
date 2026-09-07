export class PaperTrader {
  private balance: number;
  constructor(startBalance = 1) { this.balance = startBalance; }
  buy(symbol: string, amountEth: number) {
    const allocation = Math.min(amountEth, this.balance);
    this.balance -= allocation;
    return { symbol, allocationEth: allocation, remainingEth: this.balance };
  }
  getBalance() { return this.balance; }
}
