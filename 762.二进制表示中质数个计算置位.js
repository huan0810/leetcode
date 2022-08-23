/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let ans = 0
  for (let i = left; i <= right; i++) {
    let n = i.toString(2).split('0').join('').length
    // while (i) {
    //   i &= i - 1
    //   n++
    // }
    // 若n为质数,则ans加1
    if (isPrime(n)) {
      ans++
    }
  }
  return ans
}

// 官方思路:判断是否为质数的方法(通用)
var isPrime = n => {
  // 2，3，5，7，11是质数,0,1不是质数
  if (n < 2) return false
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false
  }
  return true
}
// @lc code=end
