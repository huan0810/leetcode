/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  // 官方思路2：动态规划
  // dp[i][j]记录nums1[i:]和nums2[j:]的最长公共前缀
  let n = nums1.length
  let m = nums2.length
  let ans = 0
  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i + 1][j + 1] + 1 : 0
      ans = Math.max(ans, dp[i][j])
    }
  }
  return ans

  // 官方思路1：暴力法 超时了
  // let ans = 0
  // for (let i = 0; i < nums1.length; i++) {
  //   for (let j = 0; j < nums2.length; j++) {
  //     let k = 0
  //     while (nums1[i + k] === nums2[j + k]) {
  //       k++
  //     }
  //     ans = Math.max(ans, k)
  //   }
  // }
  // return ans
}
// @lc code=end
