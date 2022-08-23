/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  // 先递归遍历两颗数，得出两个升序数组，再合并两个数组
  let ans = []
  let arr1 = []
  let arr2 = []
  ldr(root1, arr1)
  ldr(root2, arr2)
  let i = 0
  let j = 0
  let k = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      ans[k++] = arr1[i++]
    } else {
      ans[k++] = arr2[j++]
    }
  }
  while (i < arr1.length) ans[k++] = arr1[i++]
  while (j < arr2.length) ans[k++] = arr2[j++]
  return ans
}

var ldr = function (root, arr) {
  if (root) {
    ldr(root.left, arr)
    arr.push(root.val)
    ldr(root.right, arr)
  }
}
// @lc code=end
