/*
 * @lc app=leetcode.cn id=890 lang=javascript
 *
 * [890] 查找和替换模式
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let ans = []
  for (let word of words) {
    let map = new Map()
    for (let i = 0; i < pattern.length; i++) {
      if (map.has(pattern[i])) {
        if (map.get(pattern[i]) !== word[i]) break
      } else {
        map.set(pattern[i], word[i])
      }
      if (i === pattern.length - 1) {
        let set = new Set()
        for (let ch of map.values()) {
          set.add(ch)
        }
        if (set.size === map.size) ans.push(word)
      }
    }
  }
  return ans
}
// @lc code=end
