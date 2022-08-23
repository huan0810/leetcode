/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    // 快慢指针 
    let m = 0; //记录能种m颗花
    let low = flowerbed.indexOf(1);
    let high = flowerbed.indexOf(1, low + 1);
    if (low > 0) {
        m += Math.floor(low / 2);
    } else if (low == -1) {
        m += Math.ceil(flowerbed.length / 2);
    }
    while (high !== -1) {
        m += Math.ceil((high - low - 1) / 2 - 1);
        low = high;
        high = flowerbed.indexOf(1, low + 1);
    }
    if (low !== -1 && low < flowerbed.length - 1) {
        m += Math.floor((flowerbed.length - 1 - low) / 2);
    }
    return m >= n;
};
// @lc code=end