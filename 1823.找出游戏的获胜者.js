/*
 * @lc app=leetcode.cn id=1823 lang=javascript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // 法1：自己ac
  // 数组arr中存放1 - n，表示1-n小伙伴
  // let arr = new Array(n).fill(0).map((x, i) => (x = i + 1))
  // let out = 0 //定义本轮游戏出局的小伙伴的下标
  // while (arr.length > 1) {
  //   out = (out + k - 1) % arr.length
  //   arr.splice(out, 1)
  // }
  // return arr[0]

  // 法2：官方，不好理解，这是一个约瑟夫环问题，递归求解
  if (n == 1) return 1 //出口
  //获胜者是除去第k个人后，剩下n-1个人继续游戏的获胜者，
  // 以此类推，递归下去，直到最后剩余一个人
  let ans = findTheWinner(n - 1, k) + k
  return ans % n == 0 ? n : ans % n
}
// @lc code=end
