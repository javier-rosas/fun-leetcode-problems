/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    
    let map = {")" : "(", "]" : "[", "}" : "{"}
    
    let stack = []
    
    for (let i = 0; i < s.length; i++)
    {
        
        let char = s[i]
        
        if (char === "(" || char === "[" || char === "{")
        {
            stack.push(char)
        }
        if (char === ")" || char == "]" || char === "}")
        {
            if (map[char] === stack[stack.length - 1])
            {
                stack.pop()
            }
            else
            {
                stack.push(char)
            }
        }
        
    }
    return stack.length === 0
    
};


console.log(  isValid("(]")  )