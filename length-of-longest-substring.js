let s = "pwwkew"

var lengthOfLongestSubstring = function(s) {
    
    let map = {}
    
    let start = 0 
    
    let result = 0 
    
    for (let end = 0; end < s.length; end++){
        if ( ( s[end] in map ) ) {
            
            
            result = Math.max(result, end - start)
            start = map[s[end]] + 1

            for (let num in map ){
                if (map[num] < start){
                    delete map[num]
                }
            }
            
            
        }
            
        map[s[end]] = end
    }
    
    return Math.max(result, s.length - start)
    
};

console.log(lengthOfLongestSubstring(s))