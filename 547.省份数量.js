/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 方法2：官方思路。并查集
  // 计算连通分量数的另一个方法是使用并查集。
  // 初始时，每个城市都属于不同的连通分量。遍历矩阵isConnected，
  // 如果两个城市之间有相连关系，则它们属于同一个连通分量，对它们进行合并。
  // 遍历矩阵isConnected的全部元素之后，计算连通分量的总数，即为省份的总数。
  let ans = 0
  let n = isConnected.length
  // 初始化并查集，每个元素都是一个单个元素的子集合，值与下标相等时表示是根，
  let parent = new Array(n).fill(0).map((ele, index) => index)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isConnected[i][j] == 1) {
        union(i, j)
      }
    }
  }
  // 值与下标相等时表示是根,子集合的个数就是省份数量
  parent.forEach((ele, index) => {
    if (ele == index) ans++
  })

  // 合并两个子集合
  function union(index1, index2) {
    parent[find(index2)] = find(index1)
  }
  // 查找某个元素所在集合的根
  function find(index) {
    while (parent[index] !== index) {
      index = parent[index]
    }
    return index
  }

  return ans

  // 方法1：非连通图的dfs,计算有几个连通分量，自己ac
  // const n = isConnected.length
  // // 辅助矩阵，0表示此顶点未访问过，访问过置为1
  // const tagArr = new Array(n).fill(0)
  // let ans = 0
  // for (let i = 0; i < n; i++) {
  //   if (tagArr[i] == 0) {
  //     ans++
  //     dfs(i)
  //   }
  // }
  // function dfs(i) {
  //   tagArr[i] = 1 //访问过
  //   for (let j = 0; j < n; j++) {
  //     if (isConnected[i][j] == 1 && tagArr[j] == 0) {
  //       dfs(j)
  //     }
  //   }
  // }
  // return ans
}
// @lc code=end
