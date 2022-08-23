/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
  let mat = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let ans = 0
  for (let [row, col] of indices) {
    for (let i = 0; i < n; i++) {
      ++mat[row][i]
    }
    for (let j = 0; j < m; j++) {
      ++mat[j][col]
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] % 2 !== 0) ++ans
    }
  }
  return ans
}
// @lc code=end
