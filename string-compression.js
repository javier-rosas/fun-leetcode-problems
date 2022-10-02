

let str = "aabcccccaaa" // returns a2b1c5a3 -- 
                                // a2b1c5a3
                                // 

function stringCompression(str)
{
    let newString = ""

    let count = 1

    for (let i = 0; i < str.length; i++)
    {
        
        if (str[i] !== str[i + 1])
        {
            newString +=  str[i] + count 
            count = 1
        }
        else
        {
            count += 1
        }

    }

    return newString

}

let resultArr = stringCompression(str) 


console.log( resultArr)

