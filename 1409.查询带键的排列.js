/*
 * @lc app=leetcode.cn id=1409 lang=javascript
 *
 * [1409] 查询带键的排列
 */

// @lc code=start
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let ans = []
  let P = new Array(m).fill(0).map((item, index) => (item = index + 1))
  for (let num of queries) {
    let i = P.indexOf(num)
    ans.push(i)
    P.splice(i, 1)
    P.unshift(num)
  }
  return ans
}
// @lc code=end
