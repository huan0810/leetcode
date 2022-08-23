/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let p = l1,
    q = l2
  let tail = null //要输出的链表
  let head = tail
  let carry = 0 //进位
  while (p || q) {
    let num1 = p ? p.val : 0
    let num2 = q ? q.val : 0
    let num = (num1 + num2 + carry) % 10
    carry = Math.floor((num1 + num2 + carry) / 10)

    if (!head) {
      head = tail = new ListNode(num)
    } else {
      tail.next = new ListNode(num)
      tail = tail.next
    }

    if (p) p = p.next
    if (q) q = q.next
  }
  if (carry) {
    tail.next = new ListNode(carry)
  }
  return head
}
// @lc code=end
