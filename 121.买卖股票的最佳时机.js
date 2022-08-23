/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //动态规划
    var profitMax = 0; //定义最大利润
    var priceMin = prices[0]; //定义最小买入价格
    for (var i = 1; i < prices.length; i++) {
        profitMax = prices[i] - priceMin > profitMax ? prices[i] - priceMin : profitMax;
        priceMin = prices[i] < priceMin ? prices[i] : priceMin;
    }
    return profitMax;
};
// @lc code=end