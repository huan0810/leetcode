/**
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
    // 把单词作为哈希表的key，频次作为值
    this.map = new Map()
    for(let word of book){
        if(!this.map.has(word)){
            this.map.set(word,1)
        }else{
            let temp = this.map.get(word)
            this.map.set(word, ++temp)
        }
    }
};

/** 
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
    return this.map.get(word) || 0
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */