/*
 * @lc app=leetcode.cn id=802 lang=javascript
 *
 * [802] 找到最终的安全状态
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  //官方题意理解1：若起始节点位于一个环内，或者能到达一个环，则该节点不是安全的。否则，该节点是安全的
  //官方题意理解2：若一个节点没有出边，则该节点是安全的；若一个节点出边相连的点都是安全的，则该节点也是安全的。

  // 解法：(官方) 反向图的拓扑排序

  // 根据官方的我的思路：是直接求逆拓扑序列(出度为0)
  // 拓扑排序是把入度为0的点存入拓扑序列，本题直接把出度为0的点存入序列，和反向图的拓扑排序一个道理
  let out = [] //记录节点的出度
  let stack = [] //栈，把出度为0的节点压入栈
  let ans = [] //结果数组，要求升序，所以最后才把out中出度为0的节点依次填入
  for (let i = 0; i < graph.length; i++) {
    out.push(graph[i].length)
  }
  for (let i = 0; i < out.length; i++) {
    if (out[i] == 0) stack.push(i)
  }
  while (stack.length) {
    let top = stack.pop() //栈顶出栈，与之相连的节点的出度-1
    for (let j = 0; j < graph.length; j++) {
      if (graph[j].includes(top)) {
        if (--out[j] == 0) {
          stack.push(j)
        }
      }
    }
  }
  for (let i = 0; i < out.length; i++) {
    if (out[i] == 0) ans.push(i)
  }
  return ans
}
// @lc code=end
