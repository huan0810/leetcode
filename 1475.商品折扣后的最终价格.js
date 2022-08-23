/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  // 法2：官方思路：单调栈，时间复杂度o(n)
  // 从右到左依次遍历数组，
  // 如果栈不空且栈顶元素值大于入栈元素，则把大于入栈元素的栈内元素依次出栈
  // 如果此时栈顶小于入栈元素，说明栈顶是满足条件的最下下标的元素，入栈元素减去栈顶元素，存入结果数组
  // 如果此时栈为空了，说明没有满足条件的j，直接把入栈元素存入结果数组即可
  // 最后还要把当前入栈元素入栈
  let stack = [] //栈
  let ans = [] //结果数组
  for (let i = prices.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    ans[i] = stack.length ? prices[i] - stack[stack.length - 1] : prices[i]
    stack.push(prices[i])
  }
  return ans

  // 法1：自己ac，双重for循环
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     if (prices[j] <= prices[i]) {
  //       prices[i] = prices[i] - prices[j]
  //       break
  //     }
  //   }
  // }
  // return prices
}
// @lc code=end
