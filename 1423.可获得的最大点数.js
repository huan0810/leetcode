/*
 * @lc app=leetcode.cn id=1423 lang=javascript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  // 理解题意：使中间剩余点数和最小
  // 滑动窗口
  let m = cardPoints.length - k
  let left = 0,
    right = m - 1
  let sum = 0 //所有元素总和
  let sumM = 0 //剩余m个元素之和
  let min = Infinity
  for (let i = 0; i < cardPoints.length; i++) {
    sum += cardPoints[i]
    if (i == right) {
      sumM = sum
      min = Math.min(min, sumM)
    }
  }
  for (let i = right + 1; i < cardPoints.length; i++) {
    sumM -= cardPoints[i - m]
    sumM += cardPoints[i]
    min = Math.min(min, sumM)
  }
  return sum - min
}
// @lc code=end
