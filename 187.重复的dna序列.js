/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length <= 10) return []
  let ans = []
  let map = new Map()
  for (let j = 10; j <= s.length; j++) {
    let temp = s.slice(j - 10, j)
    if (map.has(temp)) {
      let k = map.get(temp)
      map.set(temp, ++k)
    } else {
      map.set(temp, 1)
    }
  }
  for (let [key, val] of map.entries()) {
    if (val > 1) {
      ans.push(key)
    }
  }
  return ans
}
// @lc code=end
