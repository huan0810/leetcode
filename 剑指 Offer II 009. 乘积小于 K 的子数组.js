/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // 官方思路：滑动窗口
    // 枚举每一个最右下标，最左下标i向左移动，找到第一个i使得[i,j]子数组元素乘积<=k.
    // 那么[i,j]中符合条件的子数组有j−i+1个

    let ans = 0
    let prod = 1 // 乘积
    let i = 0 // 窗口左侧
    for(let j=0;j<nums.length;j++){
        prod *= nums[j]
        while(i<=j && prod>=k){
            prod /= nums[i]
            i++
        }
        ans += j-i+1
    }
    return ans
};