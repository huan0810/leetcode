/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 暴力法，复杂度O(n^2)
    // for (var i = 0; i < nums.length - 1; i++) {
    //     for (var j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] == target) {
    //             return [i, j];
    //         }
    //     }
    // }


    // HashMap方法，复杂度O(2n)
    // 如果正向把数组加入hashMap
    // [3,3,2] target=6：hashMap方法输出[1,0]，期望输出[0,1]
    // 逆向把数组加入hashMap
    // [3,3,2] target=6：hashMap方法输出[0,1]，期望输出[0,1]
    let hashMap = new Map();
    // 把数组中数据不重复地存入hashMap，数据值作为key，数组下标作为value
    for (let i = nums.length - 1; i >= 0; i--) {
        if (!hashMap.has(nums[i])) {
            hashMap.set(nums[i], i);
        }
    }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (hashMap.has(diff) && hashMap.get(diff) !== i) {
            return [i, hashMap.get(diff)];
        }
    }
};
// @lc code=end