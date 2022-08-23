/*
 * @lc app=leetcode.cn id=1419 lang=javascript
 *
 * [1419] 数青蛙
 */

// @lc code=start
/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  // 票选答案
  if (croakOfFrogs.length % 5 !== 0) return -1
  let map = { c: 0, r: 1, o: 2, a: 3, k: 4 }
  //数组count记录croa四个字母的个数，k表示此鸣叫结束，不用记录
  let count = new Array(4).fill(0)
  let total = 0 //当前同时鸣叫的青蛙有几只
  let max = 0 //记录同时鸣叫青蛙数量的最大值

  for (let ch of croakOfFrogs) {
    let index = map[ch]
    if (index === 0) {
      count[index]++
      total++ //遇见c，表示增加一只正在鸣叫的青蛙
      max = Math.max(max, total) //记录最大值
    } else {
      if (count[index - 1] === 0) return -1 //当前字符前面出现中断，构不成croak
      count[index - 1]-- //匹配到当前字符了，前面字符数量-1
      if (index === 4) {
        total-- //遇到字符k，表示一只青蛙鸣叫结束
      } else {
        count[index]++
      }
    }
  }
  return max
}
// @lc code=end
