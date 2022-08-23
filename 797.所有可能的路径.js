/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  // 官方思路：深度优先遍历

  let stack = []
  let ans = []

  var dfs = function (graph, start, end) {
    if (start === end) {
      // slice()返回原数组的浅拷贝，返回的是新的数组。原始数组不会被改变。
      ans.push(stack.slice())
      return //找到结束节点了，不需要进行下面的for循环
    }
    for (let node of graph[start]) {
      stack.push(node)
      dfs(graph, node, end)
      stack.pop()
    }
  }

  stack.push(0)
  dfs(graph, 0, graph.length - 1)
  return ans
}

// @lc code=end
