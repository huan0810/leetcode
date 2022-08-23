/*
 * @lc app=leetcode.cn id=2017 lang=javascript
 *
 * [2017] 网格游戏
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function (grid) {
  // 没看懂题啊：第一个机器人的任务是使两条蓝线和(第一行的后缀和,第二行的前缀和)的最大值最小。
  let n = grid[0].length
  let suffix = [0] //第一行的后缀和
  let prefix = [0] //第二行的前缀和
  for (let i = 0; i < n; i++) {
    suffix[i + 1] = suffix[i] + grid[0][n - i - 1]
  }
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + grid[1][i]
  }
  // 第二个机器人每次选择最优路径(第一行的后缀和,第二行的前缀和的max),使最优路径的点数值最小
  let ans = Infinity
  for (let i = 0; i < n; i++) {
    // i表示下标为i时，第一个机器人向下走
    ans = Math.min(ans, Math.max(suffix[n - i - 1], prefix[i]))
  }
  return ans

  // 错误！！！错在第一个机器人的目的是打击对手，而不是单纯使自己的点数最大
  // 数组arr1中存放左上角到右下角的所有路径点数(第一行的前缀和+最后一行的后缀和)
  // 求出arr1最大值，为第一个机器人收集的点数。
  // 把对应前缀和、后缀和置为0，再次求arr2所有可能路径的点数，求最大值即为答案
  // let n = grid[0].length
  // let prefix = [grid[0][0]] //第一行的前缀和
  // let suffix = [grid[1][n - 1]] //第二行的后缀和
  // let arr1 = [] //第一个机器人所有路径的点数,n条路径
  // for (let i = 1; i < n; i++) {
  //   prefix[i] = prefix[i - 1] + grid[0][i]
  // }
  // for (let i = 1; i < n; i++) {
  //   suffix[i] = suffix[i - 1] + grid[1][n - i - 1]
  // }
  // // 计算第一个机器人所有可能路径的点数
  // for (let i = 0; i < n; i++) {
  //   arr1.push(prefix[i] + suffix[n - i - 1])
  // }
  // // 找出第一个机器人的最大路径
  // let max = arr1[0]
  // let k = 0
  // for (let i = 1; i < n; i++) {
  //   if (arr1[i] > max) {
  //     max = arr1[i]
  //     k = i
  //   }
  // }
  // // 修改被第一个机器人影响的前缀和，后缀和
  // for (let i = 0; i < n; i++) {
  //   if (i <= k) {
  //     prefix[i] = 0
  //   } else {
  //     prefix[i] = prefix[i - 1] + grid[0][i]
  //   }
  // }
  // for (let i = 0; i < n; i++) {
  //   if (i <= n - k - 1) {
  //     suffix[i] = 0
  //   } else {
  //     suffix[i] = suffix[i - 1] + grid[1][n - i - 1]
  //   }
  // }
  // // 计算第二个机器人所有可能路径的点数
  // let arr2 = []
  // for (let i = 0; i < n; i++) {
  //   arr2.push(prefix[i] + suffix[n - i - 1])
  // }
  // return Math.max(...arr2)
}
// @lc code=end
