/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 官方思路：位运算，异或
  // a⊕0=a   a⊕a=0
  // 数组中的全部元素的异或运算结果即为数组中只出现一次的数字。
  let ans = 0
  for (let num of nums) {
    ans ^= num
  }
  return ans

  // 我的key，用map
  // let map = new Map()
  // for (let num of nums) {
  //   if (map.has(num)) {
  //     map.delete(num)
  //   } else {
  //     map.set(num, 1)
  //   }
  // }
  // for (let ans of map.keys()) return ans
}
// @lc code=end
