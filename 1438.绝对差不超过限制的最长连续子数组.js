/*
 * @lc app=leetcode.cn id=1438 lang=javascript
 *
 * [1438] 绝对差不超过限制的最长连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // 官方思路:滑动窗口+两个单调队列
  // 枚举每一个位置作为右端点，找到其对应的最靠左的左端点，
  // 满足区间中最大值与最小值的差不超过limit。
  // 随着右端点向右移动，左端点也将向右移动，因此用滑动窗口

  // 要统计当前窗口内的最大值与最小值，故使用两个单调队列。
  // 单调递增队列维护区间最小值，单调递减队列维护区间最大值，队首元素就是对应的最大值/最小值

  // 以上可是官方答案啊，超时了T_T。
  // 考虑到shift()操作需要移位，时间复杂度是o(n),
  // 因此维护指向单调队列队首的指针headMax和headMin，避免shift()操作
  // 判断队列是否为空：queueMax.length - 1 >= headMax
  // 取队首元素用queueMax[headMax]

  const queueMax = [] // 单调递减队列
  const queueMin = [] // 单调递增队列
  // 为了不进行shift()操作
  let headMax = 0 // 维护单调递减队列的队首
  let headMin = 0 // 维护单调递增队列的队首
  const n = nums.length
  let ans = 0 // 输出结果
  let left = 0 // 滑动窗口的左边界
  let right = 0 // 滑动窗口的右边界

  while (right < n) {
    while (queueMax.length - 1 >= headMax && queueMax[queueMax.length - 1] < nums[right]) {
      queueMax.pop()
    }
    while (queueMin.length - 1 >= headMin && queueMin[queueMin.length - 1] > nums[right]) {
      queueMin.pop()
    }
    queueMax.push(nums[right])
    queueMin.push(nums[right])
    while (queueMax[headMax] - queueMin[headMin] > limit) {
      if (queueMax[headMax] === nums[left]) {
        // queueMax.shift() //队首出队
        headMax++
      }
      if (queueMin[headMin] === nums[left]) {
        // queueMin.shift()
        headMin++
      }
      left++
    }
    ans = Math.max(ans, right - left + 1)
    right++
  }
  return ans
}
// @lc code=end
