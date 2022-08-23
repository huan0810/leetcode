/*
 * @lc app=leetcode.cn id=1413 lang=javascript
 *
 * [1413] 逐步求和得到正数的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  // 先找出累加和中的最小数
  let prefix = [nums[0]]
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i]
  }
  let min = prefix[0]
  for (let j = 1; j < prefix.length; j++) {
    min = Math.min(min, prefix[j])
  }
  if (min <= 0) {
    return 1 - min
  } else {
    return 1
  }
}
// @lc code=end
