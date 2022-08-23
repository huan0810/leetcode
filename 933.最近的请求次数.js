/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function () {
  this.arr = new Array()
  this.tag = 0 //记录上次特定时间范围内的第一个请求的下标
}

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.arr.push([t])
  while (this.arr[this.tag] < t - 3000) {
    this.tag++
  }
  return this.arr.length - this.tag
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end
