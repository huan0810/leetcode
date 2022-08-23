/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  // 票选答案的思路：
  // 先按字典顺序排序数组，然后遍历words数组
  // 若当前单词长度为1或除去最后一个字母之后存在于map中，就把当前单词加入map
  // 动态更新结果res，只有当前符合要求的单词长度大于res长度时，才更新res。
  // 保证输出结果时字典序最小的单词

  words.sort()
  let res = ''
  let map = new Map()
  for (let word of words) {
    if (word.length == 1 || map.has(word.slice(0, -1))) {
      map.set(word, 1)
      if (word.length > res.length) {
        res = word
      }
    }
  }
  return res
}
// @lc code=end
