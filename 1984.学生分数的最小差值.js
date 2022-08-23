/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  // 在排好序后的数组中连续地进行选择
  let ans = Infinity
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - k + 1; i++) {
    ans = Math.min(ans, nums[i + k - 1] - nums[i])
  }
  return ans
}
// @lc code=end
