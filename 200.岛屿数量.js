/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // dfs，图的深度优先搜索
  let ans = 0
  let m = grid.length
  let n = grid[0].length
  let dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ]
  // 0表示未访问，1表示已访问
  let visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] == 0 && grid[i][j] == 1) {
        ans++
        dfs(i, j)
      }
    }
  }
  function dfs(i, j) {
    visited[i][j] = 1 //标记已访问
    for (const dir of dirs) {
      let newi = i + dir[0]
      let newj = j + dir[1]
      if (newi >= 0 && newi < m && newj >= 0 && newj < n && visited[newi][newj] == 0 && grid[newi][newj] == 1) {
        dfs(newi, newj)
      }
    }
  }
  return ans
}
// @lc code=end
