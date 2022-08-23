/*
 * @lc app=leetcode.cn id=1491 lang=javascript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = Math.min(...salary); //最低工资
    let max = Math.max(...salary); //最高工资
    let sum = 0;
    for (let k of salary) {
        sum += k;
    }
    return (sum - min - max) / (salary.length - 2)
};
// @lc code=end