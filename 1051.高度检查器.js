/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let result = 0;
    // heights复杂数据类型,指针指向堆，所以后面给heights排序也会改变heightsOld
    // 这里要借助JSON
    var heightsOld = JSON.parse(JSON.stringify(heights));
    var expected = heights.sort(function(a, b) { return a - b; });

    for (let i = 0; i < heightsOld.length; i++) {
        if (heightsOld[i] !== expected[i]) { result++ };
    }
    return result;
};
// @lc code=end