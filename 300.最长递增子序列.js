/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 官方思路：动态规划
  // dp[i]为只考虑前i个元素的最长递增子序列
  let len = nums.length
  if (len == 0) {
    return 0
  }
  let ans = 1
  let dp = new Array(len).fill(1) //动态规划数组，初始值均为1
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      // 依次遍历dp[i]前面的所有元素，若nums[i]>nums[j],更新dp[i]的值
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    ans = Math.max(ans, dp[i])
  }
  return ans
}
// @lc code=end
