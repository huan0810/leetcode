/*
 * @lc app=leetcode.cn id=1876 lang=javascript
 *
 * [1876] 长度为三且各字符不同的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  let ans = 0

  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] !== s[i + 1] && s[i] !== s[i + 2] && s[i + 1] !== s[i + 2]) {
      ans++
    }
  }

  return ans
}
// @lc code=end
