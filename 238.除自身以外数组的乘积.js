/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length
  let answer = new Array(n).fill(0)
  // 前缀乘积
  let prefix = new Array(n + 1).fill(1)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] * nums[i]
  }
  // 后缀乘积
  let suffix = new Array(n + 1).fill(1)
  for (let j = n - 1; j >= 0; j--) {
    suffix[j] = suffix[j + 1] * nums[j]
  }

  for (let k = 0; k < n; k++) {
    answer[k] = prefix[k] * suffix[k + 1]
  }
  return answer
}
// @lc code=end
