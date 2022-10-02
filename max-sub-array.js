var maxSubArray = function(nums, sum=0) {
    
    //if (nums === []) return 0 
    if (nums.length == 1) return nums[0]

    let newSum = nums.reduce((partialSum, a) => partialSum + a, 0)
    if (newSum > sum) sum = newSum

    maxSubArray(nums.slice(0, - 1))
    maxSubArray(nums.slice(1))
    
    return sum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))