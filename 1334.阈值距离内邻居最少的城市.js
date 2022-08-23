/*
 * @lc app=leetcode.cn id=1334 lang=javascript
 *
 * [1334] 阈值距离内邻居最少的城市
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  // (自己ac)floyd算法，求出任意两个城市之间的最短路径

  // 初始化一个n*n矩阵，距离都填充Infinity
  const distance = new Array(n).fill(0).map(() => new Array(n).fill(Infinity))
  for (let i = 0; i < edges.length; i++) {
    distance[edges[i][0]][edges[i][1]] = distance[edges[i][1]][edges[i][0]] = edges[i][2]
  }
  //节点数目
  for (let num = 0; num < n; num++) {
    //行
    for (let i = 0; i < n; i++) {
      //列
      for (let j = 0; j < n; j++) {
        // 这里是直接把城市到自己的距离设置为Infinity,beats 100 %
        if (i !== j) {
          distance[i][j] = Math.min(distance[i][j], distance[i][num] + distance[num][j])
        }
      }
    }
  }
  // 根据以上Floyd算法得出的矩阵，求阈值距离内的邻居城市数目最少的城市
  let minSum = n //记录到达其他城市的最少数目
  let ans = -1 //结果
  for (let i = 0; i < n; i++) {
    let count = 0
    for (let j = 0; j < n; j++) {
      if (distance[i][j] <= distanceThreshold) {
        count++
      }
    }
    if (count <= minSum) {
      minSum = count
      ans = i
    }
  }
  return ans
}
// @lc code=end
