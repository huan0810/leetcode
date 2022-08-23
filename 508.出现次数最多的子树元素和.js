/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  // 官方思路：深度优先搜索+哈希map

  let map = new Map() //key表示子树元素和，value表示出现次数
  let maxCount = 0 //记录最大出现次数
  var dfs = node => {
    if (!node) return 0
    const sum = node.val + dfs(node.left) + dfs(node.right)
    map.set(sum, (map.get(sum) || 0) + 1)
    maxCount = Math.max(maxCount, map.get(sum))
    return sum
  }

  dfs(root)
  let list = []
  for (let [key, val] of map.entries()) {
    if (val === maxCount) {
      list.push(key)
    }
  }
  return list
}

// @lc code=end
