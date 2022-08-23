var MaxQueue = function() {
    this.queue = []
    this.max = -1//最大值
    this.maxCount = 0//最大值个数
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    // 入队，出队都要维护最大值
    return this.max
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    if(value > this.max){
        this.max = value
        this.maxCount = 1
    }else if(value == this.max){
        this.maxCount++
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(this.queue.length == 0){
        return -1
    } 
    let temp = this.queue.shift()
    if(temp == this.max){
        if(--this.maxCount == 0){
            this.max = -1
            this.maxCount = 0
            for(let i=0; i<this.queue.length; i++){
                if(this.queue[i] > this.max){
                    this.max = this.queue[i]
                    this.maxCount = 1
                }else if(this.queue[i] == this.max){
                    this.maxCount++
                }
            }
        }
       
    }
    return temp
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */