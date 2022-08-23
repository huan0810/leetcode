/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = Math.floor(nums.length / 2)
  let map = new Map()
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }
  for (let [key, val] of map) {
    if (val > count) return key
  }
}
// @lc code=end
