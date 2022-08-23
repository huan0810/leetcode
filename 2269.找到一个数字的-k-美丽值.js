/*
 * @lc app=leetcode.cn id=2269 lang=javascript
 *
 * [2269] 找到一个数字的 K 美丽值
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let ans = 0
  let str = num.toString()
  let len = str.length
  for (let i = 0; i <= len - k; i++) {
    let t = ''
    for (let j = i; j < i + k; j++) {
      t += str[j]
    }
    if (t && num % t === 0) ans++
  }
  return ans
}
// @lc code=end
