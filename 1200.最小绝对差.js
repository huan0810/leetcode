/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  // 排序、找最小绝对差，找数对
  let low = 0,
    high = arr.length - 1
  quickSort(arr, low, high) // 快排
  let ans = []
  let min = Infinity //记录最小绝对差
  let i = 0,
    j = 1
  for (j; j < arr.length; j++) {
    min = Math.min(min, arr[j] - arr[i])
    i++
  }
  let m = 0,
    n = 1
  for (n; n < arr.length; n++) {
    if (arr[n] - arr[m] === min) {
      ans.push([arr[m], arr[n]])
    }
    m++
  }
  return ans
}

var quickSort = function (arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high)
    quickSort(arr, low, pivot - 1)
    quickSort(arr, pivot + 1, high)
  }
}

var partition = function (arr, low, high) {
  let i = Math.floor(Math.random() * (high - low + 1)) + low //随机选取一个枢轴元素
  // 把枢轴元素换到low位置
  let temp = arr[low]
  arr[low] = arr[i]
  arr[i] = temp
  let key = arr[low] //枢轴元素值
  while (low < high) {
    while (low < high && arr[high] >= key) high--
    arr[low] = arr[high]
    while (low < high && arr[low] <= key) low++
    arr[high] = arr[low]
  }
  arr[low] = key //枢轴元素放到最终位置
  return low
}
// @lc code=end
