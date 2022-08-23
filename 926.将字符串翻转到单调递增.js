/*
 * @lc app=leetcode.cn id=926 lang=javascript
 *
 * [926] 将字符串翻转到单调递增
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  // 官方思路：动态规划
  // dp0,dp1分别表示下标i处的字符为0和1的情况下使得s[0..i]单调递增的最小翻转次数
  // 下标i处的字符为0时，i-1处必须为0
  // 下标i处的字符为1时，i-1处为0或1均可
  // 递推到s最后一个字符时，dp0,dp1的最小值就是答案
  let dp0 = 0,
    dp1 = 0
  for (let i = 0; i < s.length; i++) {
    let newDp0 = dp0,
      newDp1 = Math.min(dp0, dp1)
    if (s[i] === '1') {
      // 翻转为0
      newDp0++
    } else {
      // 翻转为1
      newDp1++
    }
    dp0 = newDp0
    dp1 = newDp1
  }
  return Math.min(dp0, dp1)
}
// @lc code=end
