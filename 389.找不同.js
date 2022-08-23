/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 求出t，s的每个字母的ASCII码值之和，最后t的和减去s的和
  // 就是添加元素的ascii码值
  // let sSum = 0
  // let tSum = 0
  // for (let ch of s) {
  //   sSum += ch.charCodeAt()
  // }
  // for (let ch of t) {
  //   tSum += ch.charCodeAt()
  // }
  // // String.fromCharCode()根据ASCII码值得出对应字符
  // return String.fromCharCode(tSum - sSum)

  // 方法2：官方思路：位运算，异或
  // a⊕0=a   a⊕a=0
  // s,t中所有字符的ascii码值进行异或，由于其他字符都是奇数个，异或之后为0
  // 所以最终异或的结果是s和t中出现总次数为奇数次的字母的ascii码值
  let ans = 0
  for (let ch of s) {
    ans ^= ch.charCodeAt() //异或运算
  }
  for (let ch of t) {
    ans ^= ch.charCodeAt()
  }
  return String.fromCharCode(ans)
}
// @lc code=end
