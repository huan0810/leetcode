/*
 * @lc app=leetcode.cn id=1418 lang=javascript
 *
 * [1418] 点菜展示表
 */

// @lc code=start
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let ans = [[]]
  let table = [] //记录桌号
  // 制作展示表的第一行
  for (let i = 0; i < orders.length; i++) {
    if (!ans[0].includes(orders[i][2])) {
      ans[0].push(orders[i][2])
    }
    if (!table.includes(orders[i][1])) {
      table.push(orders[i][1])
    }
  }
  ans[0].sort()
  ans[0].unshift('Table')
  table.sort((a, b) => a - b)

  // 制作展示表第一列的桌号
  for (let i = 0; i < table.length; i++) {
    ans.push(new Array(ans[0].length).fill('0'))
    ans[i + 1][0] = table[i]
  }

  // 填充展示表的数据
  for (let i = 0; i < orders.length; i++) {
    // 求出此项数据对应的行列，把此行此列的数值加1
    // 在数组table中找行号
    let row = table.indexOf(orders[i][1]) + 1
    let col = ans[0].indexOf(orders[i][2])
    ans[row][col] = (++ans[row][col]).toString() //转换成字符型
  }
  return ans
}
// @lc code=end
