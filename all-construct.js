function canSum(targetSum, numberArray)
{
    const table = Array(targetSum + 1).fill(null)
    table[0] = []

    for (let i = 0; i < targetSum; i++)
    {
        if (table[i] !== null)
        {
            for (let num of numberArray)
            {
                table[i + num] = [...table[i], num]
            }
        }
    } 

    return table[targetSum]

}

console.log(canSum(7, [2, 3]))