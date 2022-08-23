/*
 * @lc app=leetcode.cn id=1461 lang=javascript
 *
 * [1461] 检查一个字符串是否包含所有长度为 K 的二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
  // 官方思路：哈希map中存储所有长度为k的子串。
  // 在遍历完成后，只需要判断哈希map中是否有2^k项即可
  if (s.length < (1 << k) + k - 1) return false
  let map = new Map()
  for (let i = 0; i + k <= s.length; i++) {
    let temp = s.slice(i, i + k)
    if (!map.has(temp)) {
      map.set(temp, 1)
    }
  }
  return map.size == 1 << k
}
// @lc code=end
