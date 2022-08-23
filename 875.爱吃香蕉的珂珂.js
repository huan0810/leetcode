/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 二分查找法：找出能在h小时内吃完的最小速度
  // 查找下限是1：表示每小时至少吃一根香蕉
  // 查找上限是初始最多的那堆香蕉的数目

  let low = 1 //速度下限
  let high = Math.max(...piles) //速度上限
  let ans = high //记录最后的速度
  while (low < high) {
    // 此处不能用low <= high，因为循环体中没有退出条件，会造成死循环
    let speed = Math.floor((low + high) / 2) //中间速度
    let time = getTime(piles, speed)
    if (time <= h) {
      // 表示最终速度小于等于speed
      high = speed
      ans = speed
    } else {
      // 表示最终速度应该比当前速度大一些
      low = speed + 1
    }
  }
  return ans
}

// 计算以速度speed吃完所有香蕉需要的时间
var getTime = (piles, speed) => {
  let time = 0
  for (let pile of piles) {
    let current = Math.ceil(pile / speed)
    time += current
  }
  return time
}
// @lc code=end
