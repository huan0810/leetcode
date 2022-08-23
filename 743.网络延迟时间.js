/*
 * @lc app=leetcode.cn id=743 lang=javascript
 *
 * [743] 网络延迟时间
 */

// @lc code=start
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // 单源最短路径，Dijkstra算法

  // 先用一个矩阵存储所有有向边的权重，方便查找.下标0-(n-1)对应节点1-n
  let distance = new Array(n).fill(0).map(() => new Array(n).fill(Infinity))
  for (let i = 0; i < times.length; i++) {
    distance[times[i][0] - 1][times[i][1] - 1] = times[i][2]
  }
  // distK记录顶点k-1到其他顶点的当前最短路径
  let distK = distance[k - 1]
  distK[k - 1] = 0 //节点k-1到自己的距离是0
  let s = [k - 1] //表示已经选中的节点
  for (let i = 0; i < n - 1; i++) {
    // 循环n-1次
    let min = Infinity
    let node = 0 //本轮循环要考虑的节点
    // 找当前distK中的最小距离对应的下标
    for (let j = 0; j < distK.length; j++) {
      if (!s.includes(j) && distK[j] <= min) {
        min = distK[j]
        node = j
      }
    }
    s.push(node)
    // 考虑新加入的node节点，更新distK
    for (let q = 0; q < distK.length; q++) {
      distK[q] = Math.min(distK[q], distK[node] + distance[node][q])
    }
  }

  // 现在distK的中存放的是，节点k到其他顶点的最短距离值,k到k的距离是0
  let ans = Math.max(...distK)
  return ans == Infinity ? -1 : ans
}
// @lc code=end
