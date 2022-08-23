/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  // 单调栈，自己ac
  let ans = [] //结果输出
  let stack = [] //单调栈,栈中记录的是结点序号，从0开始，跟ans下标对应
  let arr = [] //按原链表顺序记录每个结点的值
  let i = 0 //记录是第几个结点
  while (head) {
    arr.push(head.val)
    ans[i] = 0 //先填充0
    while (stack.length && head.val > arr[stack[stack.length - 1]]) {
      // 栈不空，且当前入栈结点值大于栈顶结点值时，
      // 那么当前入栈结点就是栈顶结点的下一个更大结点，把数据更新到ans数组
      ans[stack[stack.length - 1]] = head.val
      stack.pop()
    }
    stack.push(i)
    i++
    head = head.next
  }
  return ans
}
// @lc code=end
