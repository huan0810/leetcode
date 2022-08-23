/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  // 理解题意：只有一个节点 （1）在b位置出现n-1次；（2）在a位置出现0次

  if (trust.length < n - 1) return -1
  let arrA = new Array(n + 1).fill(0) //记录1-n个人出现在a位置的次数
  let arrB = new Array(n + 1).fill(0) //记录1-n个人出现在b位置的次数
  for (const arr of trust) {
    arrA[arr[0]]++
    arrB[arr[1]]++
  }
  for (let i = 1; i < arrA.length; i++) {
    if (arrA[i] == 0 && arrB[i] == n - 1) return i
  }
  return -1
}
// @lc code=end
