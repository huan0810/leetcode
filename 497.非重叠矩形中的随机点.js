/*
 * @lc app=leetcode.cn id=497 lang=javascript
 *
 * [497] 非重叠矩形中的随机点
 */

// @lc code=start
/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  // 官方思路：前缀和+二分查找，下标的计算太绕了
  this.prefix = [0] //前缀和数组
  this.rects = rects
  for (let rect of rects) {
    const a = rect[0],
      b = rect[1],
      x = rect[2],
      y = rect[3]
    this.prefix.push(this.prefix[this.prefix.length - 1] + (x - a + 1) * (y - b + 1))
  }
}

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  let k = Math.floor(Math.random() * this.prefix[this.prefix.length - 1]) //随机数，下标从0开始
  // 二分查找确定随机整数所在矩阵的下标,数组prefix中随机整数是从1开始计算的
  let rectIndex = binarySearch(this.prefix, k + 1) - 1
  k -= this.prefix[rectIndex] //把随机整数转换成矩阵内的编号(下标从0开始)
  // 计算矩阵内编号，在此矩阵中对应的坐标
  const rect = this.rects[rectIndex]
  const a = rect[0],
    b = rect[1],
    y = rect[3]
  const row = y - b + 1 //此矩阵内有多少行
  const da = Math.floor(k / row) //相对左下角的x轴偏移
  const db = k - da * row //相对于左下角的y轴偏移
  return [a + da, b + db]
}

var binarySearch = (prefix, n) => {
  let low = 0
  let high = prefix.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (prefix[mid] === n) {
      return mid
    } else if (prefix[mid] < n) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return low
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end
