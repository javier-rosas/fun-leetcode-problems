let matrix = [  [1,2,3], 
                [4,5,6], 
                [7,8,9]
             ]

             // [ 7, 4, 1 ], 
             // [ 8, 5, 2 ], 
             // [ 9, 6, 3 ] 
            
             // [1, 2, 3], [4, 5, 6], [7, 8, 9]   ==> [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ]

function rotateMatrix(matrix)
{

    let n = matrix.length 

    for (let i = 0; i < n / 2; i++)
    {
        let first = i
        let last = n - 1 - i

        for (let j = first; j < last; j++)
        {
            // 
            let offset = i - first
            let top = matrix[first][i]

            // 
            console.log(top)

        }
    }
}

console.log(rotateMatrix(matrix))
