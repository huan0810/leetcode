/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0]; //最长公共前缀
    for (let i = 1; i < strs.length; i++) {
        let temp = '';
        for (let j = 0; j < result.length; j++) {
            if (result[j] == strs[i][j]) {
                temp += result[j];
            } else {
                break;
            }
        }
        result = temp;
    }
    return result;
};
// @lc code=end