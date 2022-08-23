/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 法2：关于链表边界节点的处理，引入了哑节点(哨兵)
  let prehead = new ListNode(-1) //定义哑节点，最后返回prehead.next即可
  let r = prehead
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      r.next = list1
      list1 = list1.next
    } else {
      r.next = list2
      list2 = list2.next
    }
    r = r.next
  }
  if (list1 !== null) r.next = list1
  if (list2 !== null) r.next = list2
  return prehead.next

  // 法1：此解法关于头节点的处理太繁琐，下一个解法利用官方给出的哑节点
  // 注意：新链表是拼接两个旧链表组成的
  //   if (list1 == null) {
  //     return list2
  //   } else if (list2 == null) {
  //     return list1
  //   }
  //   let p1 = list1
  //   let p2 = list2
  //   let head = new ListNode() //定义要输出的链表头
  //   if (p1.val <= p2.val) {
  //     head = p1
  //     p1 = p1.next
  //   } else {
  //     head = p2
  //     p2 = p2.next
  //   }
  //   let r = head
  //   while (p1 !== null && p2 !== null) {
  //     if (p1.val <= p2.val) {
  //       r.next = p1
  //       r = p1
  //       p1 = p1.next
  //     } else {
  //       r.next = p2
  //       r = p2
  //       p2 = p2.next
  //     }
  //   }
  //   if (p1 !== null) r.next = p1
  //   if (p2 !== null) r.next = p2
  //   return head
}
// @lc code=end
