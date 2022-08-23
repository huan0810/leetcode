/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // 方法一：双指针:把不重复的k个元素移动到前k个位置(用时短)
  if (nums.length <= 1) return nums.length
  let slow = 0
  let fast = 1
  while (fast < nums.length) {
    if (nums[fast] === nums[slow]) {
      fast++
    } else {
      slow++
      nums[slow] = nums[fast]
    }
  }
  return slow + 1

  // 方法二：双指针，直接删除重复元素
  // if (nums.length <= 1) return nums.length
  // let slow = 0
  // let fast = 1
  // while (fast < nums.length) {
  //   if (nums[fast] !== nums[slow]) {
  //     slow++
  //     fast++
  //   } else {
  //     nums.splice(fast, 1)
  //   }
  // }

  // return nums.length
}
// @lc code=end
