/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 法1：map存储遍历过的元素
  // let map = new Map() //map中存放已经遍历过的元素
  // for (let i = 0; i < s.length; i++) {
  //   if (!map.has(s[i])) {
  //     //map中不存在，说明没遍历过
  //     if (s.indexOf(s[i], i + 1) == -1) return i
  //     map.set(s[i], 1)
  //   }
  // }
  // return -1

  // 法2：map存储频数，遍历两次字符串
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let temp = map.get(s[i])
      map.set(s[i], ++temp)
    } else {
      map.set(s[i], 1)
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) == 1) return i
  }

  return -1
}
// @lc code=end
