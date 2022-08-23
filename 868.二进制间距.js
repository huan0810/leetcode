/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  // 法2：位运算
  // n & 1 获取n的最低位
  let last = -1 //记录上一个1的位置
  let max = 0
  for (let i = 0; n != 0; i++) {
    let s = n & 1 //获取n的最低位
    if (s == 1) {
      if (last !== -1) {
        max = Math.max(max, i - last)
      }
      last = i
    }
    n >>= 1 //右移一位
  }
  return max

  // 法1：动态规划  自己ac
  // let max = 0
  // let s = n.toString(2)
  // let index = s.indexOf(1) //记录每个1的索引
  // if (index == -1) return max
  // for (let i = index + 1; i < s.length; i++) {
  //   if (s[i] == 1) {
  //     max = max > i - index ? max : i - index
  //     index = i
  //   }
  // }
  // return max
}
// @lc code=end
