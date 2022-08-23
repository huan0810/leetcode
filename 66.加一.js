/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // 不能用转换成数字然后加了之后再转换成数组的想法哦，会溢出的
  // 从最后一位开始，找到第一个不为9的数字，加1，后面的9都变成0
  let len = digits.length
  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i] = digits[i] + 1
      return digits
    } else {
      digits[i] = 0
    }
  }
  // 所有位都是9，就在数组头部添加1
  digits[0] = 1
  digits[len] = 0
  for (let i = 1; i < len; i++) {
    digits[i] = 0
  }
  return digits
}
// @lc code=end
