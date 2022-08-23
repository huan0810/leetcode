/*
 * @lc app=leetcode.cn id=2000 lang=javascript
 *
 * [2000] 反转单词前缀
 */

// @lc code=start
/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch)
  if (index > 0) {
    // 对撞指针
    let low = 0
    let high = index
    let arr = word.split('')
    while (low < high) {
      let temp = arr[low]
      arr[low] = arr[high]
      arr[high] = temp
      low++
      high--
    }
    word = arr.join('')
  }
  return word
}
// @lc code=end
