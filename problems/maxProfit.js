/*
Problem: Best Time to Buy and Sell Stock
Description:
  You are given an array prices where prices[i] is the price of a stock on the i-th day.
  You want to maximize your profit by choosing a single day to buy one stock 
  and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve. If no profit is possible, return 0.

I: prices: number[]
O: number (max profit)
C: 1 <= prices.length <= 10^5
   0 <= prices[i] <= 10^4
E: 
  - prices always increasing → profit is last - first
  - prices always decreasing → profit = 0
  - single price → profit = 0

Approach (pseudocode):
1) Track the minimum price seen so far (start with Infinity).
2) Track the maximum profit (start with 0).
3) For each price:
   - update minPrice if current price < minPrice
   - calculate profit = price - minPrice
   - update maxProfit if profit > maxProfit
4) Return maxProfit.

Complexity:
  Time: O(n) (one pass through prices)
  Space: O(1)
*/

function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price; // found a new cheaper buy
    } else {
      let profit = price - minPrice; // profit if sold today
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

// Tests
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // 0 (prices decreasing)
console.log(maxProfit([2, 4, 1])); // 2 (buy at 2, sell at 4)
console.log(maxProfit([1])); // 0 (only one day)
