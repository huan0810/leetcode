/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  // 法2：官方思路：链表的归并排序
  // 找链表的中点：可以使用快慢指针的做法，快指针每次移动2步，慢指针每次移动1步，
  // 当快指针到达链表末尾时，慢指针指向的链表节点即为链表的中点。

  // 法1：自己ac，把所有结点存入map，节点值作为key。
  // 对key排序，根据排序后得节点值顺序，从map中找到对应结点插入
  // 注意：链表中可能有值相同的结点
  let map = new Map() //存储结点,节点值
  while (head) {
    // 坑啊，如果有重复的结点，直接把重复结点插入已存在map的其他重复节点的链表头
    // 这样就可以用head.val作为key了
    let nextT = head.next
    if (map.has(head.val)) {
      head.next = map.get(head.val) //插入表头
    } else {
      head.next = null
    }
    map.set(head.val, head)
    head = nextT
  }
  let arr = [...map.keys()].sort((a, b) => a - b)
  let ans = new ListNode()
  let p = ans
  arr.forEach((val) => {
    p.next = map.get(val)
    // 此处循环使p指向最后一个结点，因为map中存的可能多于一个结点
    while (p.next !== null) {
      p = p.next
    }
  })
  return ans.next
}
// @lc code=end
