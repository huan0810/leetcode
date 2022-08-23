/*
 * @lc app=leetcode.cn id=1400 lang=javascript
 *
 * [1400] 构造 K 个回文字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) {
    return false
  } else if (s.length === k) {
    return true
  }
  // 最多接受k个落单的字符，其他字符必须成对出现
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.delete(s[i])
    } else {
      map.set(s[i], 1)
    }
  }
  if (map.size > k) {
    return false
  } else {
    return true
  }
}
// @lc code=end
