/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  // 官方思路：向量叉乘结果不为0，表示这些点 各不相同 且 不在一条直线上
  let v1 = [points[1][0] - points[0][0], points[1][1] - points[0][1]]
  let v2 = [points[2][0] - points[0][0], points[2][1] - points[0][1]]
  return v1[0] * v2[1] - v1[1] * v2[0] !== 0

  // // 先判断是否有相同的点
  // if (points[1][1] == points[0][1] && points[1][0] == points[0][0]) return false
  // if (points[2][1] == points[0][1] && points[2][0] == points[0][0]) return false
  // if (points[2][1] == points[1][1] && points[2][0] == points[1][0]) return false
  // // 判断三点是否在一条竖线上
  // if (points[0][0] == points[1][0] && points[1][0] == points[2][0]) return false
  // // 计算两对斜率是否相等
  // let k1 = (points[1][1] - points[0][1]) / (points[1][0] - points[0][0])
  // let k2 = (points[2][1] - points[0][1]) / (points[2][0] - points[0][0])
  // if (k1 === k2) return false
  // return true
}
// @lc code=end
