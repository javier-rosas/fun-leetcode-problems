/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    
    let ans = new Array(temperatures.length).fill(0)
    for (let i = 0; i < temperatures.length; i++){
        for (let j = i + 1; j < temperatures.length; j++){
            if (temperatures[i] < temperatures[j]){
                ans[i] = (j - i)
                break
            }
        }
    }
    
    return ans
};

console.log( dailyTemperatures([73,74,75,71,69,72,76,73]) )

