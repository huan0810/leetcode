/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  // 官方思路：深度优先搜索，反向搜索
  // 如果直接以每个单元格作为起点模拟雨水的流动，
  // 则会重复遍历每个单元格，导致时间复杂度过高。
  // 为了降低时间复杂度，可以从矩阵的边界开始反向搜索寻找雨水流向边界的单元格，
  // 反向搜索时，每次只能移动到高度相同或更大的单元格。
  let m = heights.length
  let n = heights[0].length
  // pac,atl分别记录此单元格能否流入pacific海洋,atlantic海洋
  let pac = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let atl = new Array(m).fill(0).map(() => new Array(n).fill(0))

  // dir数组控制流动方向
  let dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]
  function dfs(i, j, ocean) {
    if (ocean[i][j]) return
    ocean[i][j] = true
    for (const dir of dirs) {
      let newi = i + dir[0]
      let newj = j + dir[1]
      if (newi >= 0 && newi < m && newj >= 0 && newj < n && heights[i][j] <= heights[newi][newj]) {
        dfs(newi, newj, ocean)
      }
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(0, i, pac)
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pac)
  }
  for (let i = 0; i < n; i++) {
    dfs(m - 1, i, atl)
  }
  for (let i = 0; i < m; i++) {
    dfs(i, n - 1, atl)
  }

  // 对所有单元格判断,若同时流入pac和atl,则加入结果数组
  let ans = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pac[i][j] && atl[i][j]) {
        ans.push([i, j])
      }
    }
  }
  return ans
}
// @lc code=end
