

function oneAway(str1, str2)
{
    if (str1.length === str2.length) return replacement(str1, str2)
    else if (str1.length + 1 === str2.length) return removal(str2, str1)
    else if (str1.length === str2.length + 1) return removal(str1, str2)
    return false
}


function replacement(str1, str2)
{
    
    // pale , bale -> true 

    let countDiff = 0 
    for (let i = 0; i < str1.length; i++)
    {
        if (str1[i] !== str2[i])
        {
            countDiff += 1
        }
    }

    if (countDiff > 1)
    {
        return false 
    }
    else
    {
        return true
    }
}

function removal(str1, str2)
{
    // pales , pale -> true 
    let longestString = null
    let shortestString = null

    if (str1.length > str2.length)
    {
        longestString = str1
        shortestString = str2
    }
    else
    {
        longestString = str2 
        shortestString = str1
    }

    

    for (let i = 1; i < longestString.length + 1; i++)
    {
        const substr = longestString.substring(0, i - 1) + longestString.substring(i, longestString.length)
        if (substr === shortestString)
        {
            return true
        }
    }
    return false
}


console.log(oneAway("pale", "ple"))
console.log(oneAway("pales", "pale"))
console.log(oneAway("pale", "bale"))
console.log(oneAway("pale", "bake"))