/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 异或运算:同为0，异为1
  // 计算异或运算之后，1的个数
  let z = x ^ y
  let dis = 0
  while (z) {
    z &= z - 1
    dis++
  }
  return dis
}
// @lc code=end
