/*
 * @lc app=leetcode.cn id=1128 lang=javascript
 *
 * [1128] 等价多米诺骨牌对的数量
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  // 暴力
  let len = dominoes.length
  let ans = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (dominoes[i][0] == dominoes[j][0] && dominoes[i][1] == dominoes[j][1]) {
        ans++
      } else if (dominoes[i][0] == dominoes[j][1] && dominoes[i][1] == dominoes[j][0]) {
        ans++
      }
    }
  }
  return ans
}
// @lc code=end
