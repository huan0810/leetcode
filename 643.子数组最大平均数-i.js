/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // 滑动窗口
  let max = 0
  let sum = 0 //记录滑动窗口内，所有元素之和
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  max = sum
  for (let j = k; j < nums.length; j++) {
    sum -= nums[j - k]
    sum += nums[j]
    max = Math.max(max, sum)
  }
  return max / k
}
// @lc code=end
