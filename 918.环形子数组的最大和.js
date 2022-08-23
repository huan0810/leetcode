/*
 * @lc app=leetcode.cn id=918 lang=javascript
 *
 * [918] 环形子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  // 关键在于是环形数组，不好处理边界情况
  // 高票选的js解法很巧妙:
  // 同时求最大子数组和,最小子数组和. 如果最大子数组和在数组中间段,那求出的最大子数组和就是答案
  // 如果最大子数组在数组两边,那说明最小子数组和一定在数组中间段,用总和-中间段最小子数组和就是答案
  // 还有一种特殊情况,若nums数组全为复数,那总和-最小子数组和==0,此时应该输出的是最大子数组和(最大的那个负数)
  let max, maxSum, min, minSum, total
  max = maxSum = min = minSum = total = nums[0]
  for (let i = 1; i < nums.length; i++) {
    total += nums[i]
    // max记录当前位置之前的最大子数组和
    max = Math.max(nums[i], nums[i] + max)
    // maxSum记录所有位置最大子数组和的最大值
    maxSum = Math.max(maxSum, max)
    // min记录当前位置之前的最小子数组和
    min = Math.min(nums[i], nums[i] + min)
    minSum = Math.min(minSum, min)
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum

  // 错误!!!动态规划,没有处理边界情况
  // let n = nums.length
  // let head = n - 1
  // let tail = 0
  // let temp = nums[n - 1] //记录当前位置为止的最大子数组的和
  // let max = nums[n - 1] //记录所有子数组的最大和
  // while (tail < head) {
  //   temp = Math.max(nums[tail], nums[tail] + temp)
  //   max = Math.max(max, temp)
  //   tail = (tail + 1) % n
  // }
  // return max
}
// @lc code=end
