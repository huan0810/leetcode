/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 左右对撞指针:
  // low向右寻找值等于val的元素
  // high向左寻找值不等于val的元素
  // 交换low，high对应的元素，把值为val的元素排在数组末尾

  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    while (low < nums.length && nums[low] !== val) {
      low++
    }
    while (high >= 0 && nums[high] == val) {
      high--
    }
    if (low < high) {
      let temp = nums[low]
      nums[low] = nums[high]
      nums[high] = temp
    }
  }
  return low
}
// @lc code=end
