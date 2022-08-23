/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  // 官方思路：动态规划
  // 有arr[k]+arr[j]=arr[i]，
  // dp[j][i]表示以arr[j]和arr[i]作为最后两个数字的斐波那契子序列的最大长度

  let map = new Map()
  let n = arr.length
  for (let i = 0; i < n; i++) {
    map.set(arr[i], i)
  }
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] * 2 <= arr[i]) {
        break
      }
      if (map.has(arr[i] - arr[j])) {
        let k = map.get(arr[i] - arr[j])
        dp[j][i] = Math.max(dp[k][j] + 1, 3)
        ans = Math.max(ans, dp[j][i])
      }
    }
  }
  return ans
}
// @lc code=end
