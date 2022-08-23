/*
 * @lc app=leetcode.cn id=1685 lang=javascript
 *
 * [1685] 有序数组中差绝对值之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
  // 前缀和+后缀和
  let len = nums.length
  let pre = new Array(len + 1).fill(0) //前缀和
  let suf = new Array(len + 1).fill(0) //后缀和
  for (let i = 0; i < len; i++) {
    pre[i + 1] = pre[i] + nums[i]
  }
  for (let i = len - 1; i >= 0; i--) {
    suf[i] = suf[i + 1] + nums[i]
  }
  let result = []
  for (let i = 0; i < len; i++) {
    result[i] = nums[i] * i - pre[i] + suf[i + 1] - nums[i] * (len - i - 1)
  }
  return result
}
// @lc code=end
