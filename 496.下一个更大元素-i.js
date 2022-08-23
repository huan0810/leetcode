/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 单调栈
  // 用单调栈求nums2中所有元素的下一个更大元素
  // 然后判断当前元素是否存在于nums1，若存在就加入结果数组对应位置
  let ans = [] //结果数组
  let stack = [] //单调栈
  for (let i = nums2.length - 1; i >= 0; i--) {
    // 若栈不空，且栈顶元素<=入栈元素，就依次弹出栈顶，直到栈顶元素大于入栈元素
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop()
    }
    // 判断当前入栈元素是否存在于nums1中
    let index = nums1.indexOf(nums2[i])
    if (index !== -1) {
      // 栈空，说明没有下一个更大元素
      ans[index] = stack.length ? stack[stack.length - 1] : -1
    }
    stack.push(nums2[i])
  }
  return ans
}
// @lc code=end
