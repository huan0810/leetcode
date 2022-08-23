/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */

var treeToDoublyList = function(root) {
    // 仿照二叉搜索树的线索化

    // 注意注意：此题中要把pre，head设置为全局变量，才能达到修改其值的效果哦
    // 因为js的函数参数传递一值是按值传递的。不可以修改变量本身，可以访问修改变量的属性和值。
    // 如果直接把指针pre当dfs函数的参数传递，就不可以修改pre的指向。
    // 如果想实现指针的用法，将指针封装到对象里面，这样参数传递后就可以修改对象的属性值了。
    if(!root) return null
    var head = null
    var pre = null
    dfs(root)
    head.left = pre
    pre.right = head
    return head

    function dfs(p){
        if(p){
            dfs(p.left)
            if(pre == null){
                head = p
            }else{
                pre.right = p
            }
            p.left = pre
            pre = p
            dfs(p.right)
        }
    }
};

