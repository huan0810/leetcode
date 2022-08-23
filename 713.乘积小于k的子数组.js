/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    let pro = nums[i]
    let temp = i
    while (pro < k) {
      ans++
      temp++
      if (temp < nums.length) {
        pro = pro * nums[temp]
      } else {
        break
      }
    }
  }
  return ans
}
// @lc code=end
