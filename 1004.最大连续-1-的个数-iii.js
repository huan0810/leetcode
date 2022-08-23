/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 *
 * [1004] 最大连续1的个数 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // 滑动窗口
  let left = 0,
    right = 0
  let num0 = 0 //记录0的个数
  let ans = 0
  for (right; right < nums.length; right++) {
    if (nums[right] === 0) {
      num0++
      if (num0 > k) {
        while (nums[left] !== 0) {
          left++
        }
        left++
      }
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
}
// @lc code=end
