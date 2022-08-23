/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 对撞指针，可以将时间复杂度控制在O(n)
    var start = 0; //头指针
    var end = numbers.length - 1; //尾指针
    while (start < end) {
        var diff = target - numbers[start];
        while (numbers[end] > diff) {
            end--;
        }

        if (numbers[end] == diff) {
            return [start + 1, end + 1];
        } else {
            start++;
        }
    }
};
// @lc code=end