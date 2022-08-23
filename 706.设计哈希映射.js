/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function () {
  this.map = []
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i][0] === key) {
      this.map[i][1] = value
      return
    }
  }
  this.map.push([key, value])
}

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i][0] === key) {
      return this.map[i][1]
    }
  }
  return -1
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  for (let i = 0; i < this.map.length; i++) {
    if (this.map[i][0] === key) {
      this.map.splice(i, 1)
      return
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
