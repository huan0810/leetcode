/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  // 题意：找出包含最多两种元素的最长连续子数组，返回其长度
  // 滑动窗口
  let left = 0,
    right = 0
  let ans = 0
  // let pre = 1 //记录在上一组子数组中，关于下一组元素的左窗口
  let map = new Map()

  for (let i = 0; i < fruits.length; i++) {
    if (map.size == 2 && !map.has(fruits[i])) {
      right = i
      ans = Math.max(ans, right - left)
      let fruit1 = fruits[i - 1]
      let t = i - 2
      while (fruits[t] === fruit1) {
        t--
      }
      // 为下一组子数组铺垫
      left = t + 1
      map.delete(fruits[t])
      map.set(fruits[i], 1)
    } else if (i == fruits.length - 1) {
      ans = Math.max(ans, i - left + 1)
    } else if (map.size < 2 && !map.has(fruits[i])) {
      map.set(fruits[i], 1)
    }
  }
  return ans
}
// @lc code=end
