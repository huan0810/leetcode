/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  // 丑数只能是正整数
  if (n <= 0) return false
  let disk = [2, 3, 5]
  for (let num of disk) {
    while (n % num === 0) {
      n /= num
    }
  }
  if (n === 1) {
    return true
  } else {
    return false
  }
}
// @lc code=end
