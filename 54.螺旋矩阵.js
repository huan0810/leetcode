/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 递归。遍历一个圈为一个递归
    let order = (mat, result) => {
        // mat表示当前矩阵，result是输出结果
        // 输出一个圈中第一行、最后一行，右侧数据
        for (let i = 0; i < mat.length; i++) {
            if (mat[i].length) { //防止空数组输出undefined
                if (i == 0) {
                    result.push(...mat[i]);
                } else if (i == mat.length - 1) {
                    result.push(...mat[i].reverse());
                } else {
                    result.push(mat[i].pop()); //最后一个元素放result并删除
                }
            }
        }
        // 删除第一行和最后一行
        mat.pop();
        mat.shift();
        // 输出一个圈中左侧数据，从下往上
        for (let i = mat.length - 1; i >= 0; i--) {
            if (mat[i].length) { //防止空数组输出undefined
                result.push(mat[i].shift());
            }
        }
        if (mat.length) {
            return order(mat, result);
        } else {
            return result;
        }
    };
    // 传入初始矩阵，初始时result为一个空数组
    return order(matrix, []);
};
// @lc code=end