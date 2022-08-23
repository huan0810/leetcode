/*
 * @lc app=leetcode.cn id=1395 lang=javascript
 *
 * [1395] 统计作战单位数
 */

// @lc code=start
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  // 法2：官方思路：枚举中间点，时间复杂度O(n^2)
  // 出现在位置j左侧且比j评分低的士兵数量iless
  // 出现在位置j左侧且比j评分高的士兵数量imore
  // 出现在位置j右侧且比j评分低的士兵数量kless
  // 出现在位置j右侧且比j评分高的士兵数量kmore
  // 最后结果ans=iless*kmore + imore*kless

  let ans = 0
  for (let j = 1; j < rating.length - 1; j++) {
    let iless = (kmore = imore = kless = 0)
    // 遍历j左侧元素
    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) {
        iless++
      } else if (rating[i] > rating[j]) {
        imore++
      }
    }
    // 遍历j右侧元素
    for (let k = j + 1; k < rating.length; k++) {
      if (rating[j] < rating[k]) {
        kmore++
      } else if (rating[j] > rating[k]) {
        kless++
      }
    }
    ans += iless * kmore + imore * kless
  }
  return ans

  // 法1：自己ac，暴力法。时间复杂度O(n^3)
  // 即判断递增序列、递减序列一共多少个
  // let ans = 0
  // for (let i = 0; i < rating.length - 2; i++) {
  //   // 计算递增序列个数
  //   for (let j = i + 1; j < rating.length - 1; j++) {
  //     if (rating[j] > rating[i]) {
  //       for (let k = j + 1; k < rating.length; k++) {
  //         if (rating[k] > rating[j]) {
  //           ans++
  //         }
  //       }
  //     }
  //   }
  //   // 计算递减序列个数
  //   for (let j = i + 1; j < rating.length - 1; j++) {
  //     if (rating[j] < rating[i]) {
  //       for (let k = j + 1; k < rating.length; k++) {
  //         if (rating[k] < rating[j]) {
  //           ans++
  //         }
  //       }
  //     }
  //   }
  // }
  // return ans
}
// @lc code=end
