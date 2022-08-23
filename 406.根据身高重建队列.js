/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 官方思路：按照hi为第一关键字降序，ki为第二关键字升序进行排序。
  // 对排序后数组的每一个元素，插入到数组queue，
  // 这样在插入时，前面的每一个人都是身高大于等于当前元素的
  // 对于当前元素只用找到插入位置ki即可

  // 排序
  people.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0]
    } else {
      return a[1] - b[1]
    }
  })

  let queue = []
  for (let item of people) {
    queue.splice(item[1], 0, item)
  }
  return queue
}
// @lc code=end
