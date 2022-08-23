/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 先把两个数组合并到新数组temp，最后把temp复制到nums1中
  let temp = []
  let i = 0,
    j = 0,
    k = 0 //i指向nums1，j指向nums2，k指向temp
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      temp[k++] = nums1[i++]
    } else {
      temp[k++] = nums2[j++]
    }
  }
  while (i < m) temp[k++] = nums1[i++]
  while (j < n) temp[k++] = nums2[j++]
  for (let q = 0; q < m + n; q++) {
    nums1[q] = temp[q]
  }
}
// @lc code=end
