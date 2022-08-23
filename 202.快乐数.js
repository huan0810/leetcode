/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  // false的情况，某一次计算结果在之前的计算中出现过，陷入无限循环
  let map = new Map()
  map.set(n, 1)
  while (n !== 1) {
    let temp = 0
    while (n / 10 !== 0) {
      temp += Math.pow(n % 10, 2)
      n = Math.floor(n / 10)
    }
    if (map.has(temp)) return false
    n = temp
    map.set(n, 1)
  }
  return true
}
// @lc code=end
