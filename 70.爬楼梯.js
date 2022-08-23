/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 1.递归 超时！！！
    // if (n == 1 || n == 2) return n;
    // return climbStairs(n - 1) + climbStairs(n - 2);

    // 2.记忆化递归 时间o(n)

    // 3.动态规划
    let dp = new Array(n + 1); //记忆每阶楼梯的状态（爬梯子的方法）
    dp[1] = 1;
    dp[2] = 2;
    for (var i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};


// @lc code=end