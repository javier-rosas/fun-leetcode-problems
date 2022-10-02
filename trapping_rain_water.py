from typing import *

def trap(height: List[int]) -> int:
    i = 0
    # iterate over every element
    while i < len(height):

        center = i 
        left = i 
        right = i 
        while (left - 1 >= 0 and 
               right + 1 < len(height) ):

            break_bool = True
            if height[right + 1] > height[right] : 
                right += 1
                break_bool = False

            if height[left - 1] > height[left] :
                left -= 1
                break_bool = False

            if break_bool : 
                break
            
            
        
        if right - left > 1: 
            print("left =", left, "center", i, "right", right)

        i += 1

    

trap( [0,1,0,2,1,0,1,3,2,1,2,1] )