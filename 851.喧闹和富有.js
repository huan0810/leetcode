/*
 * @lc app=leetcode.cn id=851 lang=javascript
 *
 * [851] 喧闹和富有
 */

// @lc code=start
/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  // 拓扑序列,自己ac
  // 理解题目：拓扑排序。richer中存放的是有向边，quiet中存放的是每个顶点的值
  // 我们要输出的数组answer，answer[i]是i的所有前驱中值最小的那个
  // 思路:输出结点编号的拓扑序列,拓扑序列中前面的人比后面人更有钱
  // 然后用单调栈求当前结点的所有前驱中,安静值最小的那个结点

  // map记录每个顶点的入度
  let arr = new Array(quiet.length).fill(0) //arr[i]表示结点i的入度
  let stack = [] //入度为0的顶点,其序号入栈
  // let topo = [] //记录拓扑序列,记录其序号
  let ans = [] //结果数组

  for (let i = 0; i < richer.length; i++) {
    arr[richer[i][1]]++
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) stack.push(i) //入度为0的顶点,其序号入栈
    ans[i] = i
  }
  while (stack.length) {
    let top = stack.pop() //栈顶出栈
    // topo.push(top)

    // 把所有此顶点指向的顶点的入度-1,-1后若为0则入栈
    for (let j = 0; j < richer.length; j++) {
      //minQuiet记录当前结点及其所有前驱的安静值最小的结点的序号
      let minQuiet = top //每出栈一个元素,就记录minQuiet为当前出栈元素,然后更新它所能到达的顶点的minQuiet
      if (richer[j][0] == top) {
        if (--arr[richer[j][1]] == 0) {
          stack.push(richer[j][1])
        }
        // 每删去一条边,就更新这条边指向的顶点的minQuiet
        minQuiet = quiet[ans[richer[j][1]]] < quiet[ans[minQuiet]] ? ans[richer[j][1]] : ans[minQuiet]
        ans[richer[j][1]] = minQuiet
      }
    }
  }
  return ans

  // 以下错误,因为虽然是拓扑序列,但并不是所有排在拓扑序列前面的结点,都是后面的结点的前驱
  // let minQuiet = topo[0] //记录当前结点及其所有前驱的安静值最小的结点的序号
  // for (let i = 0; i < topo.length; i++) {
  //   minQuiet = quiet[topo[i]] < quiet[minQuiet] ? topo[i] : minQuiet
  //   if (!ans[topo[i]]) {
  //     ans[topo[i]] = minQuiet
  //   }
  // }
}
// @lc code=end
