/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  // localeCompare()用来比较一个字符串是否在另一个字符串排序顺序之前或之后或相同
  // 票选答案：关键在于自定义sort()里面的比较函数
  // 内容不同时按内容排序，内容相同时按标识符排序

  // 抽离日志的内容
  var body = function (str) {
    return str.slice(str.indexOf(' ') + 1)
  }

  // 定义比较函数
  var compare = function (a, b) {
    const bodya = body(a)
    const bodyb = body(b)
    if (bodya.localeCompare(bodyb) == 0) {
      return a.localeCompare(b)
    }
    return bodya.localeCompare(bodyb)
  }

  let str = []
  let num = []
  for (const log of logs) {
    if (!isNaN(body(log)[0])) {
      num.push(log)
    } else {
      str.push(log)
    }
  }
  return [...str.sort(compare), ...num]
}
// @lc code=end
