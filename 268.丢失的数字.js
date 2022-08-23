/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length
  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  let k = 0
  for (let i = 0; i < n; i++) {
    k += nums[i]
  }
  return sum - k
}
// @lc code=end
