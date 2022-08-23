/*
 * @lc app=leetcode.cn id=1023 lang=javascript
 *
 * [1023] 驼峰式匹配
 */

// @lc code=start
/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  // 票选答案
  return queries.map(query => {
    let match = 0 //记录query中与pattern匹配的字母的个数
    for (let ch of query) {
      if (pattern[match] === ch) {
        match++
      } else if (ch === ch.toUpperCase()) {
        // 若当前字符ch不匹配，而且是大写字母，就返回false
        return false
      }
    }
    return match === pattern.length
  })
}
// @lc code=end
