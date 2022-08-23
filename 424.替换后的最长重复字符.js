/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // 滑动窗口(自己ac，牛逼！！)
  let map = new Map() //记录当前英文字母的种类数,应使其<=k+1
  let ans = 0
  let left = 0,
    right = 0
  for (right; right < s.length; right++) {
    map.set(s[right], (map.get(s[right]) || 0) + 1)
    // 计算当前需要替换的字母的最小数量
    let max = 0,
      sum = 0 //子字符串长度
    for (let val of map.values()) {
      max = Math.max(max, val)
      sum += val
    }
    let min = sum - max
    while (min > k) {
      let temp = map.get(s[left])
      if (temp === 1) {
        map.delete(s[left])
      } else {
        map.set(s[left], --temp)
      }
      left++
      sum--
      for (let val of map.values()) {
        max = Math.max(max, val)
      }
      min = sum - max
    }
    ans = Math.max(ans, sum)
  }
  return ans
}
// @lc code=end
