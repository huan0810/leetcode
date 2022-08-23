/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const arr = sentence.split(' ')
  const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i = 0; i < arr.length; i++) {
    if (vowel.includes(arr[i][0])) {
      arr[i] += 'ma'
    } else {
      let temp = arr[i].slice(0, 1) //取第一个字符
      arr[i] = arr[i] + temp + 'ma'
      arr[i] = arr[i].substring(1) //去掉第一个字符
    }
    for (let j = 0; j < i + 1; j++) {
      arr[i] += 'a'
    }
  }
  return arr.join(' ')
}
// @lc code=end
