/*
 * @lc app=leetcode.cn id=532 lang=javascript
 *
 * [532] 数组中的 k-diff 数对
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  // 哈希表
  let visited = new Set() //当前下标j之前，已访问过的元素
  let ans = new Set() //存放找到的数对中的较小值，有去重效果
  for (let num of nums) {
    if (visited.has(num - k)) {
      ans.add(num - k)
    }
    if (visited.has(num + k)) {
      ans.add(num)
    }
    visited.add(num)
  }
  return ans.size
}
// @lc code=end
