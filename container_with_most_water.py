from typing import *

def maxArea(height: List[int]) -> int:
    
    left = 0 
    right = len(height) - 1 
    
    area = 0
    while (left < right):
        curr_area = min(height[left], height[right]) * (right - left)
        area = max(area, curr_area)
        
        if height[left] >= height[right]:
            left += 1
        else: 
            right -= 1
            
    return area


print( maxArea( [1,1] ) ) 

