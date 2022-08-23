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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // 先中序遍历二叉树，把节点按升序放入数组中
    var arr = []
    var inOrder =  function(root){
        if(root){
            inOrder(root.left)
            arr.push(root.val)
            inOrder(root.right)
        }
    }
    inOrder(root)
    // 对撞指针遍历数组
    let l = 0,r = arr.length-1
    while(l<r){
        let temp = k - arr[l]
        while(arr[r] > temp){
            r--
        }
        if(r > l && arr[r] === temp) return true
        l++
    }
    return false
};