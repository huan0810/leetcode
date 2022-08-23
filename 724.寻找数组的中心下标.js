/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let n = nums.length
  // 计算前缀和
  let prefix = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }
  // 计算后缀和
  let suffix = new Array(n + 1).fill(0)
  for (let j = n - 1; j >= 0; j--) {
    suffix[j] = suffix[j + 1] + nums[j]
  }
  // 查看前后缀数组是否有相同的数
  for (let k = 0; k < n; k++) {
    if (prefix[k] === suffix[k + 1]) {
      return k
    }
  }
  return -1
}
// @lc code=end
