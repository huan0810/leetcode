/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
  // 取奇数位，偶数位筹码的最小值
  let odd = 0,
    even = 0
  for (let i of position) {
    if (i % 2 === 0) {
      ++even
    } else {
      ++odd
    }
  }
  return Math.min(odd, even)
}
// @lc code=end
