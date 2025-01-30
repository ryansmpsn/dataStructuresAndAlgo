function maxProfit(prices: number[]): number {
  let profit: number = 0;
  let low: number = prices[0];

  for (let i: number = 0; i < prices.length; i++) {
    const current = prices[i];
    const potentialProfit = current - low;

    if (current - low > profit) {
      profit = current - low;
    } else if (current < low) {
      low = current;
    }
  }

  return profit;
}
