/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  // 由于是二叉搜索树，遍历出递增序列，计算序列相邻元素的最小差值
  let arr = []
  ldr(root, arr)
  let min = Infinity
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < min) {
      min = arr[i] - arr[i - 1]
    }
  }
  return min
}
var ldr = function (root, arr) {
  if (root) {
    ldr(root.left, arr)
    arr.push(root.val)
    ldr(root.right, arr)
  }
}
// @lc code=end
