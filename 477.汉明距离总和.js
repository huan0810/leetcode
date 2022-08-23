/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  // nums中所有数的二进制最低位，若有x个0，y个1，那么最低位上不同的个数有x*y
  // 计算所有二进制位上不同的个数，求和就是答案
  let ans = 0
  for (let i = 0; i < 32; i++) {
    let x = 0 //nums中所有数,在当前位i上为0的个数
    let y = 0 //nums中所有数,在当前位i上为1的个数
    for (let num of nums) {
      if ((num >> i) & 1) {
        y++
      } else {
        x++
      }
    }
    ans += x * y
  }
  return ans
  // 下面的方法超时
  // let ans = 0
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     let temp = nums[i] ^ nums[j]
  //     let n = temp.toString(2).split('0').join('').length
  //     ans += n
  //   }
  // }
  // return ans
}
// @lc code=end
