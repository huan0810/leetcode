/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(a, b) { return a - b; });
    s.sort(function(a, b) { return a - b; });
    let gindex = 0; //数组g的指针
    let sindex = 0; //数组s的指针
    let result = 0; //结果

    while (sindex < s.length && gindex < g.length) {
        if (s[sindex] >= g[gindex]) {
            result++;
            sindex++;
            gindex++;
        } else {
            sindex++;
        }
    }
    return result;
};
// @lc code=end