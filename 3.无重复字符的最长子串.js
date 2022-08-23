/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 法1：双指针，双层循环
    // 由于indexOf的复杂度为O(n)，故总时间复杂度为O(n^3)
    // var maxLength = 0; //无重复子串最长长度
    // var low = 0;
    // var high = 0;
    // var newStr = [];
    // for (low; low < s.length; low++) { //对每一个字符向后查找它的无重复子串
    //     high = low;
    //     newStr = [];
    //     while (newStr.indexOf(s[high]) == -1 && high < s.length) {
    //         newStr.push(s[high]);
    //         high++;
    //     }
    //     maxLength = maxLength < newStr.length ? newStr.length : maxLength;
    // }
    // return maxLength;


    // 法2：使用双指针配合HashMap。虽然使用了额外的空间。但是可以将时间复杂度降为O(n)
    var maxLength = 0; //无重复子串最长长度
    var low = 0;
    var high = 0;
    var hashMap = new Map();
    while (high < s.length) {
        if (!hashMap.has(s[high])) {
            hashMap.set(s[high], 1);
            high++;
            maxLength = Math.max(maxLength, hashMap.size);
        } else {
            hashMap.delete(s[low]);
            low++;
        }
    }
    return maxLength;
};
// @lc code=end