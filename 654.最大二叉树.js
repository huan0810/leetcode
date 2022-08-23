/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  // 递归+单调栈（自己ac）
  let root = createNode(nums, 0, nums.length - 1)
  return root
}
var createNode = function (nums, low, high) {
  if (low <= high) {
    // 用递增单调栈找出最大值
    let stack = []
    let maxInd = low //记录最大值的索引
    for (let i = low; i <= high; i++) {
      if (!stack.length || nums[i] > stack[stack.length - 1]) {
        maxInd = i
        stack.push(nums[i])
      }
    }
    let root = new TreeNode()
    root.val = stack[stack.length - 1]
    root.left = createNode(nums, low, maxInd - 1)
    root.right = createNode(nums, maxInd + 1, high)
    return root
  } else {
    return null
  }
}
// @lc code=end
