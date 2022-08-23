/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  // 先用左右对撞指针
  // low寻找第一个值为2的元素，high寻找第一个值不为2的元素，交换
  // 这样保证所有0，1都在2前面
  // 对前面的0，1再次使用对撞指针

  let len = nums.length
  let low = 0
  let high = len - 1
  while (low <= high) {
    while (low < len && nums[low] !== 2) {
      low++
    }
    while (high >= 0 && nums[high] == 2) {
      high--
    }
    if (low < high) {
      let temp = nums[low]
      nums[low] = nums[high]
      nums[high] = temp
    }
  }
  // 最后low的位置就是第一个2的位置
  let low1 = 0
  let high1 = low - 1
  while (low1 <= high1) {
    while (low1 < low && nums[low1] == 0) {
      low1++
    }
    while (high1 >= 0 && nums[high1] == 1) {
      high1--
    }
    if (low1 < high1) {
      let temp = nums[low1]
      nums[low1] = nums[high1]
      nums[high1] = temp
    }
  }
  return nums
}
// @lc code=end
