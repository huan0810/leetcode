/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  // x轴投影，求每一行的最大值
  let shadowX = 0
  for (const row of grid) {
    shadowX += Math.max(...row)
  }
  // y轴，求每一列的最大值
  let shadowY = 0
  let val0 = 0 //个数为0的格子
  // 遍历每一列
  for (let i = 0; i < grid.length; i++) {
    let max = grid[0][i]
    // 遍历当前列的每一行
    for (let j = 0; j < grid.length; j++) {
      max = Math.max(max, grid[j][i])
      if (grid[j][i] == 0) val0++
    }
    shadowY += max
  }
  // z轴,记得减去个数为0的格子
  let shadowZ = grid.length ** 2 - val0

  return shadowX + shadowY + shadowZ
}
// @lc code=end
