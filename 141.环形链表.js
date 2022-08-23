/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 官方思路1：真正的快慢指针
  // 慢指针每次移动一步，快指针每次移动两步，如果两指针重合，说明有环;否则快指针先到达终点
  // if (head == null || head.next == null) {
  //   return false
  // }
  // // 设想两个指针从一个哑节点开始移动，slow移动一步到head，fast移动两步到head.next
  // let slow = head
  // let fast = head.next
  // while (slow !== fast) {
  //   if (fast == null || fast.next == null) return false
  //   slow = slow.next
  //   fast = fast.next.next
  // }
  // return true
  // 官方思路2：哈希表存储每个结点是否被访问过
  let map = new Map()
  while (head) {
    if (map.has(head)) {
      return true
    } else {
      map.set(head, 1)
      head = head.next
    }
  }
  return false
}
// @lc code=end
