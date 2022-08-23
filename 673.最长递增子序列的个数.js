/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  // 动态规划：
  // dp[i]代表只考虑前i个元素，以第i个数字结尾的最长递增子序列的长度
  // 数组num中的num[i]表示使当前dp[i]达到最大值的子序列个数
  let len = nums.length
  if (len == 0) {
    return 0
  }
  let dp = new Array(len).fill(1)
  let max = 1 //最长最序列的长度，初始为1
  let ans = 1 //最长子序列的个数，初始为1
  let num = new Array(len).fill(1) //num[i]表示以nums[i]结尾的的最长递增序列的个数
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1
          num[i] = num[j]
        } else if (dp[j] + 1 == dp[i]) {
          num[i] = num[i] + num[j]
        }
        // dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > max) {
      max = dp[i]
      ans = num[i]
    } else if (dp[i] == max) {
      ans += num[i]
    }
  }
  return ans
}
// @lc code=end
