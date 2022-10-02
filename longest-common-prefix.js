function longestCommonPrefix(arr)
{
    let ans = ""
    let i = 0

    while ( (i + 1 <= arr.length  - 1 ) && ( arr[0][i] === arr[i+1][i] ) )
    {

        ans += arr[0][i]
        i += 1
    }

    return ans
}

let arr = ["flower", "flow", "flight"]

let arr2 = ["flew", "flewn", "flewrg"]

console.log(longestCommonPrefix(arr2))


