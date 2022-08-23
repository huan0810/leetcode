/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 官方思路：依次确定答案的每一个二进制位(最高32位)
  // 答案的第i个二进制位就是数组中所有元素的第i个二进制位之和除以3的余数。
  let ans = 0
  for (let i = 0; i < 32; i++) {
    let total = 0
    for (let num of nums) {
      // 取每一个num的第i位
      total += (num >> i) & 1
    }
    if (total % 3 !== 0) {
      // 取余不为0，表明答案的第i位为1
      ans |= 1 << i
    }
  }
  return ans

  // 所有不重复数字的三倍，减去nums中所有数字，再除以2，就是仅出现一次的那个元素
  // let set = new Set()
  // let sum = 0 //计算数组nums元素之和
  // for (let num of nums) {
  //   sum += num
  //   set.add(num)
  // }
  // let setSum = 0
  // for (let n of set) {
  //   setSum += 3 * n
  // }
  // return (setSum - sum) / 2
}
// @lc code=end
