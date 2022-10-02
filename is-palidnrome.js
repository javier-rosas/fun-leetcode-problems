let num = 2112 

function isPalindrome(num)
{
    let reversedNum = 0

    while (num > reversedNum)
    {
        reversedNum = reversedNum * 10 + num % 10
        num = Math.floor(num / 10)
    }

    console.log(num, reversedNum)

}

isPalindrome(num)