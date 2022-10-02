/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    
    this.queue = new Array(k).fill(undefined)
    this.count = 0
    this.tail = 0 
    this.head = 0 
    this.size = k
    
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if ( this.isFull() ) return false 
    if ( this.isEmpty() ){
        this.tail = 0 
        this.head = 0
        this.queue[this.tail] = value
        this.count++
        return true
    }
    
    let newTailIndex = this.tail + 1 
    if (newTailIndex > this.size - 1) newTailIndex = newTailIndex % this.size
    this.queue[newTailIndex] = value
    this.tail = newTailIndex
    this.count++
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if ( this.isEmpty() ) return false 
    
    this.queue[this.head] = undefined
    let newHeadIndex = this.head + 1
    if (newHeadIndex > this.size - 1) newHeadIndex = newHeadIndex % this.size 
    this.head = newHeadIndex
    this.count-- 
    return true 
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1
    return this.queue[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if ( this.isEmpty() ) return -1
    return this.queue[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.size
};

let myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear());     // return 3
console.log(myCircularQueue.isFull());   // return True
console.log(myCircularQueue.deQueue());  // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear());     // return 4

