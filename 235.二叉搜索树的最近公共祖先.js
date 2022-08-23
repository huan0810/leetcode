/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 先找出到达p、q的路径，在两条路径上找最近公共祖先
  let arrp = [] //存放到结点p的路径
  let arrq = []
  dfs(root, p, arrp)
  dfs(root, q, arrq)
  // 两个数组从前往后遍历，最后一个不相同的结点就是最近公共祖先
  // let i = 0
  // while (i < arrp.length && i < arrq.length) {
  //   if (arrp[i] == arrq[i]) {
  //     i++
  //   } else {
  //     return arrp[--i]
  //   }
  // }
  // return arrp[--i]
  // 也可以用for循环
  let ans = null
  for (let i = 0; i < arrp.length && i < arrq.length; i++) {
    if (arrp[i] == arrq[i]) {
      ans = arrp[i]
    } else {
      break
    }
  }
  return ans
}

var dfs = function (root, node, arr) {
  if (root) {
    // 最后输出的应该是结点，所以数组中存放结点而不是节点值
    arr.push(root)
  } else {
    return
  }
  if (node.val < root.val) {
    dfs(root.left, node, arr)
  } else if (node.val > root.val) {
    dfs(root.right, node, arr)
  } else {
    return
  }
}
// @lc code=end
