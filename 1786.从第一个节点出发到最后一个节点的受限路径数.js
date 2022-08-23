/*
 * @lc app=leetcode.cn id=1786 lang=javascript
 *
 * [1786] 从第一个节点出发到最后一个节点的受限路径数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countRestrictedPaths = function (n, edges) {
  // 辛辛苦苦敲的：Dijkstra算法+深度优先搜索。超时了妈的
  // 又用记忆化深度优先搜索，内存溢出了??? 踏马的踏马的
  // 不玩了！

  // 先用Dijkstra算法求出节点n到其他节点的最短路径
  // 先把所有边存储在distance矩阵中，方便查找
  let distance = new Array(n).fill(0).map(() => new Array(n).fill(Infinity))
  for (let i = 0; i < edges.length; i++) {
    distance[edges[i][0] - 1][edges[i][1] - 1] = distance[edges[i][1] - 1][edges[i][0] - 1] = edges[i][2]
  }

  let dist = distance[n - 1] //节点n(下标n-1)到其他节点的当前最短路径
  dist[n - 1] = 0 //节点n到自己的距离为0
  let s = [n - 1] //已经考虑过的节点
  for (let i = 0; i < n - 1; i++) {
    // 循环n-1次
    // 搜索当前dist距离最小的节点
    let k = 0
    let minDist = Infinity
    for (let j = 0; j < dist.length; j++) {
      if (!s.includes(j) && dist[j] <= minDist) {
        k = j
        minDist = dist[j]
      }
    }
    s.push(k)
    // 根据找到的节点k，更新dist数组
    for (let q = 0; q < dist.length; q++) {
      dist[q] = Math.min(dist[q], dist[k] + distance[k][q])
    }
  }
  // 现在dist中存放的就是节点1到其他顶点的最短路径了,求受限路径,深度优先搜索+记忆化递归
  // 内存溢出了。。。
  let memory = new Array(n).fill(-1)
  memory[n - 1] = 1
  function dfs(row) {
    if (memory[row] >= 0) return memory[row]
    let count = 0
    for (let i = 0; i < n; i++) {
      if (distance[row][i] < Infinity && dist[row] > dist[i]) {
        count = (count + dfs(i)) % 1000000007
      }
    }
    memory[row] = count % 1000000007
    return memory[row]
  }
  return dfs(0)

  // 直接dfs会超时
  // let ans = 0
  // dfs(0)
  // function dfs(row) {
  //   if (row == n - 1) {
  //     ans = (ans + 1) % (Math.pow(10, 9) + 7)
  //     return
  //   }
  //   for (let i = 0; i < n; i++) {
  //     if (distance[row][i] < Infinity && dist[row] > dist[i]) {
  //       dfs(i)
  //     }
  //   }
  // }
  // return ans
}
// @lc code=end
