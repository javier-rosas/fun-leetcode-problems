/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {boolean}
 */
 var openLock = function(deadends, target) {
    
    let count = 0
    let queue = []
    let set = new Set()
    let moves = {
        "0" : ["1", "9"],
        "1" : ["0", "2"],
        "2" : ["1", "3"],
        "3" : ["2", "4"],
        "4" : ["3", "5"],
        "5" : ["4", "6"],
        "6" : ["5", "7"],
        "7" : ["6", "8"],
        "8" : ["7", "9"],
        "9" : ["1", "8"]
    }
    
    queue.push("0000")

    while (queue.length > 0){
        let current = queue.shift()
        
        if (current === target){
            return true
        }
        
        if (!set.has(current)){
            
            
            set.add(current)
            // get all 8 combinations 
            for (let v = 0; v < 4; v++){
                let char = current[v]
                let move1 = moves[char][0]
                let move2 = moves[char][1]
                
                let str1 = current.split('')
                str1[v] = move1
                str1 = str1.join('');
                
                let str2 = current.split('')
                str2[v] = move2
                str2 = str2.join('')
                if (!deadends.includes(str1)) queue.push(str1)
                if (!deadends.includes(str2)) queue.push(str2)
                
            }

        }
    
    }
    return false

};

console.log( openLock( ["8887","8889","8878","8898","8788","8988","7888","9888"] , "8888") )