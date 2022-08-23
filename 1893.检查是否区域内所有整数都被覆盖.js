/*
 * @lc app=leetcode.cn id=1893 lang=javascript
 *
 * [1893] 检查是否区域内所有整数都被覆盖
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  // 官方思路：差分数组+前缀和
  // 差分数组diff[i]表示覆盖整数i的区间数 相对于i-1的区间数变化量
  // 对差分数组diff求前缀和，就可以得到每个整数被覆盖的区间数量

  //从0-50，最后多一位51表示相对于50的变化量，所以差分数组长度52
  let diff = new Array(52).fill(0)
  for (let [l, r] of ranges) {
    diff[l]++
    diff[r + 1]--
  }
  // 前缀和
  let curr = 0
  for (let i = 1; i < 51; i++) {
    curr += diff[i]
    if (left <= i && i <= right && curr <= 0) {
      return false //curr<=0表示没有区间覆盖整数i
    }
  }
  return true
}
// @lc code=end
