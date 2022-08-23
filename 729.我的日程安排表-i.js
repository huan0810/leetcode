/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function () {
  this.arr = [] //里面存放可以被添加的日程
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  // 1.暴力法
  for (let i = 0; i < this.arr.length; i++) {
    let l = this.arr[i][0]
    let r = this.arr[i][1]
    // r <=start || end <= l   时间不冲突
    if (r > start && end > l) {
      //时间冲突
      return false
    }
  }
  this.arr.push([start, end])
  return true
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end
