/*
 * @lc app=leetcode.cn id=1480 lang=javascript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  // 弱智
  let n = nums.length
  let prefix = [nums[0]]
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i]
  }
  return prefix
}
// @lc code=end
