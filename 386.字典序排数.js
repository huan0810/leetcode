/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  // 法2:官方思路：深度优先遍历
  let res = []
  let number = 1
  // 进行n次for循环，插入n个整数
  for (let i = 0; i < n; i++) {
    res.push(number)
    // 寻找下一个要插入的number(字典序)
    if (number * 10 <= n) {
      number *= 10
    } else {
      while (number % 10 === 9 || number === n) {
        number = Math.floor(number / 10)
      }
      number++
    }
  }
  return res

  // 法1：我的无耻jiefa
  // let res = []
  // for (let i = 1; i <= n; i++) {
  //   res.push(i)
  // }
  // return res.sort()
}
// @lc code=end
