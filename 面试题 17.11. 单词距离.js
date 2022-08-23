/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function(words, word1, word2) {
    // 官方思路：
    // 遍历一次数组，当遇到word1时，就计算当前单词和已遍历的最后一个words2的距离
    // 同理，遇到word2，就计算其与最后一个word1的距离
    // 初始时，两个单词的索引都是-1，只有两索引都是非负数时才计算

    let index1 = index2 = -1
    let ans = Infinity
    for(let i=0;i<words.length;i++){
        if(words[i] === word1){
            index1 = i
        }else if(words[i] === word2){
            index2 = i
        }
        if(index1 >= 0 && index2 >= 0){
            ans = Math.min(ans, Math.abs(index2 - index1))
        }
    }
    return ans
};