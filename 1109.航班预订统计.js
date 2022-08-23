/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  // 差分数组+前缀和
  // 差分数组diff[i]表示i相对于i-1的座位变化
  let diff = new Array(n + 2).fill(0)
  let answer = []
  for (let [f, l, seat] of bookings) {
    diff[f] += seat
    diff[l + 1] -= seat
  }
  // 前缀和
  let curr = 0
  for (let i = 1; i <= n; i++) {
    curr += diff[i]
    answer.push(curr)
  }
  return answer
}
// @lc code=end
