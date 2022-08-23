/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
  let ans = []
  let m = mat.length,
    n = mat[0].length
  let i = 0,
    j = 0
  while (ans.length < m * n) {
    ans.push(mat[i][j])
    if (i == 0 && j < n - 1 && j % 2 == 0) {
      j++
    } else if (i < m - 1 && i % 2 !== 0 && j == 0) {
      i++
    } else if (i == m - 1 && (i + j) % 2 !== 0) {
      j++
    } else if ((i + j) % 2 == 0 && j == n - 1) {
      i++
    } else if ((i + j) % 2 == 0) {
      i--
      j++
    } else if ((i + j) % 2 !== 0) {
      i++
      j--
    }
  }
  return ans
}
// @lc code=end
