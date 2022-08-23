/**
 * @param {number[]} birth
 * @param {number[]} death
 * @return {number}
 */
var maxAliveYear = function(birth, death) {
    // 差分数组+前缀和
    // 差分数组diff[i]表示i年比i-1年的人数变化
    let diff = new Array(102).fill(0)
    for(let i=0;i<birth.length;i++){
        diff[birth[i]-1900]++
    }
    for(let i=0;i<death.length;i++){
        diff[death[i]-1900+1]--
    }
    // 前缀和
    let prefix = 0 //前缀和
    let max = 0 //记录人数最多时的人数
    let year = 0 //记录人数最多时的年份
    for(let i=0;i<101;i++){
        prefix += diff[i]
        if(prefix > max){
            max = prefix
            year = i
        }
    }
    return year+1900
};