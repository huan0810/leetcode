/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let k = 0 //记录非0元素应该向前移动的位数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      k++
    } else {
      nums[i - k] = nums[i]
    }
  }
  while (k > 0) {
    nums[nums.length - k] = 0
    k--
  }
}
// @lc code=end
