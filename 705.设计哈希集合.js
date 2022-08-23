/*
 * @lc app=leetcode.cn id=705 lang=javascript
 *
 * [705] 设计哈希集合
 */

// @lc code=start

var MyHashSet = function () {
  this.map = []
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  // 不重复插入
  if (this.map.indexOf(key) === -1) {
    this.map.push(key)
  }
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i] === key) {
      this.map.splice(i, 1)
    }
  }
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i] === key) return true
  }
  return false
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end
