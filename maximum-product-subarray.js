function maxProdSubArray(arr, i, j){
    if (arr.length <= 0) return 1

    console.log(arr)

    maxProdSubArray(arr.slice(i, j - 1))
    maxProdSubArray(arr.slice(i + 1, j))
    maxProdSubArray(arr.slice(i + 1, j - 1))

}

console.log(maxProdSubArray([2, 3, -2, 4], 0, 4))

