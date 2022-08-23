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
  // 法1：用map，见另一个文件
  // 法2：官方思路：链表的归并排序
  // 找链表的中点：可以使用快慢指针的做法，快指针每次移动2步，慢指针每次移动1步，
  // 当快指针到达链表末尾时，慢指针指向的链表节点即为链表的中点。

  return mergeSort(head, null)
}

// 递归地进行归并排序
var mergeSort = function (low, high) {
  if (low == null) return low
  if (low.next == high) {
    low.next = null
    return low
  }
  // 寻找链表的中点mid:快慢指针
  let mid = low //慢指针，找中点
  let tail = low //快指针，找尾结点
  while (tail !== high) {
    mid = mid.next
    tail = tail.next
    if (tail !== high) {
      tail = tail.next
    }
  }
  // if (tail !== high) tail = tail.next
  let list1 = mergeSort(low, mid)
  let list2 = mergeSort(mid, high)
  let sorted = merge(list1, list2)
  return sorted
}

// 合并两个有序链表，原地合并
var merge = function (list1, list2) {
  let pre = new ListNode(-1) //哑结点
  let p = pre
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      p.next = list1
      list1 = list1.next
    } else {
      p.next = list2
      list2 = list2.next
    }
    p = p.next
  }
  if (list1 !== null) p.next = list1
  if (list2 !== null) p.next = list2
  return pre.next
}
// @lc code=end
