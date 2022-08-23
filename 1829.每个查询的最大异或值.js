/*
 * @lc app=leetcode.cn id=1829 lang=javascript
 *
 * [1829] 每个查询的最大异或值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  // 从nums的第一个数字开始异或,每次插入ans结果数组尾部,最后翻转数组
  // 要想异或出最大值,k值=把数组元素的异或结果的后maximumBit位取非

  let ans = []
  let temp = 0 //记录每次查询,数组中元素的异或结果
  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i]
    // 数组元素的异或结果的后maximumBit位
    let tail = temp & ((1 << maximumBit) - 1)
    // 对tail取非,得到k值,注意只保留后maximumBit位
    let k = ~tail & ((1 << maximumBit) - 1)
    ans.push(k)
  }
  return ans.reverse()
}
// @lc code=end
