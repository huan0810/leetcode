/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  if (s.length === 1) return s
  let slow = 0
  let fast = 0
  let ans = ''
  while (fast < s.length) {
    while (fast < s.length && s[fast] !== ' ') {
      fast++
    }
    for (let i = fast - 1; i >= slow; i--) {
      ans = ans + s[i]
    }
    if (fast < s.length) {
      ans = ans + ' '
      fast++
      slow = fast
    }
  }
  return ans
}
// @lc code=end
