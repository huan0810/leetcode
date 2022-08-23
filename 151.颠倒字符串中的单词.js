/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 去除多余空格，再把字符串按空格(正则)分割成数组，翻转数组并输出字符串
  s = s.trim() //去除两端空格
  if (s.length <= 1) return s
  return s.split(/\s+/).reverse().join(' ')
}
// @lc code=end
