/*
 * @lc app=leetcode.cn id=1732 lang=javascript
 *
 * [1732] 找到最高海拔
 */

// @lc code=start
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  // 前缀和
  let prefix = [0]
  for (let i = 0; i < gain.length; i++) {
    prefix[i + 1] = prefix[i] + gain[i]
  }
  return Math.max(...prefix)
}
// @lc code=end
