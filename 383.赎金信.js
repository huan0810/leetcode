/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 把magazine存储在哈希map中
  let map = new Map()
  for (let ch of magazine) {
    map.set(ch, (map.get(ch) || 0) + 1)
  }
  for (let ch of ransomNote) {
    if (map.has(ch) && map.get(ch) > 0) {
      let t = map.get(ch)
      map.set(ch, --t)
    } else {
      return false
    }
  }
  return true
}
// @lc code=end
