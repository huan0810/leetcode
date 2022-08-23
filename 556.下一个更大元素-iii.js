/*
 * @lc app=leetcode.cn id=556 lang=javascript
 *
 * [556] 下一个更大元素 III
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  // 我的思路：单调栈
  // 数组arr从右往左（下标为i）开始，
  // 对每一个元素寻找下一个更大元素(下标为k)，
  // 若找到当前元素i在右侧有更大元素，表明只用改动下标i之后的元素即可
  // 把i之后大于arr[i]的最小元素，与位置i元素交换。这样<=i位置的元素确定
  // 再对i之后元素升序排序即可，输出结果，结束循环

  let arr = n.toString().split('')
  let len = arr.length
  let stack = [] //栈用来记录下一个更大元素
  for (let i = len - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop()
    }
    // 栈不为空，说明当前元素arr[i]有下一个更大元素
    if (stack.length) {
      // 从i+1开始，寻找>arr[i]的最小元素
      let bigger = stack[stack.length - 1]
      let k //最终找到的>arr[i]的最小元素的坐标
      for (let j = i + 1; j < len; j++) {
        if (arr[j] > arr[i] && arr[j] <= bigger) {
          bigger = arr[j]
          k = j
        }
      }
      let t = arr[i]
      arr[i] = arr[k]
      arr[k] = t
      // 把下标i之后的元素升序排列
      let arr2 = arr.slice(i + 1).sort((a, b) => a - b)
      arr.splice(i + 1, len, ...arr2)
      let max = Math.pow(2, 31) - 1
      return parseInt(arr.join('')) <= max ? arr.join('') : -1
    }
    stack.push(arr[i])
  }
  return -1
}
// @lc code=end
