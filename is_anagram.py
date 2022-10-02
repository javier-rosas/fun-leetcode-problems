def isAnagram(s: str, t: str) -> bool:
    
    counts_length = ord('z') - ord('a') + 1
    counts = [0] * counts_length
            
    for char in s: 
        counts[ord(char) - ord('a') + 1] += 1
        
    
    for char in t:
        counts[ord(char) - ord('a') + 1] -= 1

    for num in counts: 
        if num != 0: 
            return False

    return True


print( isAnagram("anagram", "nagaram") )
