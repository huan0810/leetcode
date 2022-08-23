/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let ans = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && i + 1 < s.length && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      ans += map[s[i + 1]] - map[s[i]]
      i++
    } else if (s[i] === 'X' && i + 1 < s.length && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
      ans += map[s[i + 1]] - map[s[i]]
      i++
    } else if (s[i] === 'C' && i + 1 < s.length && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
      ans += map[s[i + 1]] - map[s[i]]
      i++
    } else {
      ans += map[s[i]]
    }
  }
  return ans
}
// @lc code=end
