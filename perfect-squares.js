var numSquares = function(n) {
    
    function isPerfectSquare(number){
        return Math.sqrt(number) === Math.floor(Math.sqrt(number))
    }

    let squareRoots = []
    for (let i = Math.floor(Math.sqrt(n)) + 1; i >= 0; i--){
        if (isPerfectSquare(i)){
            squareRoots.push(i)
        }
    }

    let dp = new Array(n+1).fill(Number.MAX_SAFE_INTEGER)
    dp[0] = 0

    for (let i = 1; i < n+1; i++){
        for (let j = 0; j < squareRoots.length; j++){
            if (i < squareRoots[j]) break
            dp[i] = Math.min(dp[i], dp[i - squareRoots[j]] + 1)
        }
    }
    
    return dp[dp.length - 1]
    
}; 

console.log( numSquares(12) )