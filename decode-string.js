/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    
    let stack = []
    
    for (let i = 0; i < s.length; i++){
        if (s[i] !== "]"){
            stack.push(s[i])
        }else{
            let str = ""
            while ( stack && stack[stack.length - 1] !== "[" ) {
                str = stack.pop() + str 
            }
            stack.pop()
            let k = ""
            while (stack && !isNaN(stack[stack.length - 1])){
                k = stack.pop() + k
            }
            if (!isNaN(k) && k !== ""){
                stack.push( str.repeat(parseInt(k)) )
            }
            
            
        }
    }
    return stack.join("")
    
    
};

console.log(decodeString("3[a]2[bc]") )