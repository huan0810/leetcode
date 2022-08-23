/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  // 官方思路：桶排序
  // t+1个桶，同一个桶必然是符合条件的。相邻桶需要判断是否符合条件
  // 如果两个元素既不属于同一个桶，也不属于相邻桶，那么这两个元素必然不符合条件。
  // 由于一个桶至多放一个元素，所以借助map作为桶
  // 最后，在进入下一轮遍历之前，把即将超出下标范围的i-k对应元素删除
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    let id = getId(num, t + 1)
    if (map.has(id)) return true //同一个桶
    // 相邻桶
    if (map.has(id - 1) && Math.abs(num - map.get(id - 1)) <= t) return true
    if (map.has(id + 1) && Math.abs(num - map.get(id + 1)) <= t) return true
    // 当前元素加入桶
    map.set(id, num)
    // 删除即将超出下标的元素
    if (i >= k) {
      map.delete(getId(nums[i - k], t + 1))
    }
  }
  return false
}

var getId = (num, w) => {
  return num < 0 ? Math.floor((num + 1) / w) - 1 : Math.floor(num / w)
}
// @lc code=end
