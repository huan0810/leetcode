/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  // this.nums = nums
  let n = nums.length
  this.sum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    this.sum[i + 1] = this.sum[i] + nums[i]
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  // 法2：官方思路：前缀和
  return this.sum[right + 1] - this.sum[left]

  // 法1：暴力循环法：如果检索次数较多，则会超出时间限制
  // let sum = 0
  // for (let i = left; i <= right; i++) {
  //   sum += this.nums[i]
  // }
  // return sum
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
