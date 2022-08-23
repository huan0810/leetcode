/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    // 思路：把arr1填入Map(),相同数据value值加1。
    // 按照arr2顺序输出map中对应数据，并删除该项数据
    // 剩下的map中数据扩展成数组，排序输出
    let hashMap = new Map();
    let result = []; //输出结果
    for (let k of arr1) {
        if (hashMap.has(k)) {
            let value1 = hashMap.get(k);
            hashMap.set(k, ++value1);
        } else {
            hashMap.set(k, 1);
        }
    }
    for (let k of arr2) {
        let value2 = hashMap.get(k)
        for (let i = 0; i < value2; i++) {
            result.push(k);
        }
        hashMap.delete(k);
    }
    // hashMap剩余数据排序后填入临时数组tempArr（没考虑重复数据），
    // 考虑重复数据后push进result
    let tempArr = [...hashMap.keys()].sort(function(a, b) { return a - b; });
    for (let k of tempArr) {
        for (let i = 0; i < hashMap.get(k); i++) {
            result.push(k);
        }
    }
    return result;
};
// @lc code=end