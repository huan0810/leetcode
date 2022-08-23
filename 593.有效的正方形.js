/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  // 注意还有斜着放的三角形哦
  // 官方思路：计算六条边（平方），最后检查四条相等的边，两条相等的对角线
  function dist(a, b) {
    return Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)
  }
  let arr = [dist(p1, p2), dist(p1, p3), dist(p1, p4), dist(p2, p3), dist(p2, p4), dist(p3, p4)]
  arr.sort((a, b) => a - b)
  return arr[0] && arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3] && arr[4] === arr[5]
}
// @lc code=end
