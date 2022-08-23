/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  // 计算前缀和
  let prefix = [0]
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i]
  }
  let ans = prefix[prefix.length - 1] //初始值为所有长度为1的子数组的和
  for (let odd = 3; odd <= arr.length; odd += 2) {
    for (let j = 0; j + odd < prefix.length; j++) {
      ans += prefix[j + odd] - prefix[j]
    }
  }
  return ans
}
// @lc code=end
