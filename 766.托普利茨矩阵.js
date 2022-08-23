/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // 方法(1):自己想的，分开检查上下三角区域
    // 检查下三角区域的对角线
    // for (let i = 0; i < matrix.length; i++) {
    //     let num = matrix[i][0];
    //     let m = i + 1;
    //     let n = 1;
    //     while (m < matrix.length && n < matrix[i].length) {
    //         if (matrix[m][n] == num) {
    //             m++;
    //             n++;
    //         } else {
    //             return false;
    //         }
    //     }
    // }
    // // 检查上三角区域的对角线
    // for (let i = 0; i < matrix[0].length; i++) {
    //     let num = matrix[0][i];
    //     let m = 1;
    //     let n = i + 1;
    //     while (m < matrix.length && n < matrix[0].length) {
    //         if (matrix[m][n] == num) {
    //             m++;
    //             n++;
    //         } else {
    //             return false;
    //         }
    //     }
    // }
    // return true;

    // 方法(2):官方答案，直接从第二行第二列元素开始，
    // 检查每一个元素是否与左上角元素(一定存在)相等。
    const m = matrix.length,
        n = matrix[0].length;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end