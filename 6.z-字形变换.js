/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const num = 2 * numRows - 2;
    var newStr = [];
    for (var i = 0; i < numRows; i++) {
        var j = i;
        if (s[j]) {
            newStr[newStr.length] = s[j];
            j += num
        }
    }
    return newStr.join('');
    // 难题放弃！！
};
// @lc code=end