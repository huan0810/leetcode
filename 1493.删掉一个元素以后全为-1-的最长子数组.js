/*
 * @lc app=leetcode.cn id=1493 lang=javascript
 *
 * [1493] 删掉一个元素以后全为 1 的最长子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  // 滑动窗口：左窗口是上一个删除的0后面第一个1
  // 右窗口是下一个即将删除的0
  if (nums.indexOf(0) === -1) return nums.length - 1
  let left = -1
  let right = 0
  let pre = 0 //记录上一段纯1子数组的长度
  let ans = 0 //删除一个元素之后，最长子数组长度
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      right = i
      let curr = right - left - 1 //当前纯1子数组的长度
      let temp = pre + curr
      ans = Math.max(ans, temp)
      left = i
      pre = curr
    } else if (i == nums.length - 1) {
      right = i
      let curr = right - left //当前纯1子数组的长度
      let temp = pre + curr
      ans = Math.max(ans, temp)
    }
  }
  return ans
}
// @lc code=end
