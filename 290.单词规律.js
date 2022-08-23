/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let arrPat = pattern.split('')
  let arrStr = s.split(' ')
  if (arrPat.length !== arrStr.length) return false
  let map1 = new Map() //存储对应关系, pattern指向字符串s
  let map2 = new Map() //存储对应关系，字符产s指向 pattern
  for (let i = 0; i < arrPat.length; i++) {
    if (map1.has(arrPat[i]) || map2.has(arrStr[i])) {
      if (map1.get(arrPat[i]) !== arrStr[i]) return false
      if (map2.get(arrStr[i]) !== arrPat[i]) return false
    } else {
      map1.set(arrPat[i], arrStr[i])
      map2.set(arrStr[i], arrPat[i])
    }
  }
  return true
}
// @lc code=end
