from typing import *
import collections 

def topKFrequent(nums: List[int], k: int) -> List[int]:
    
    # bucket sort: 
    #  0,    1,     2,   3   
    # [[2], [3,4], [5], [6]  ]
    # index = frequency, and store list of integers with that frequency 
    
    # 1) Find frequencies (dictionary?) 
    # 2) Create the "bucket sort" list 
    # 3) Traverse the "bucket sort" list
    
    # 1
    dictionary = collections.defaultdict(int)
    for num in nums: 
        dictionary[num] += 1

    
        
    # 2 
    bucket_sort_list = [[]] * (len(nums) + 1)
    print(bucket_sort_list)
    for num, freq in dictionary.items():
        print(num, freq)
        bucket_sort_list[freq].append(num)
        
    print(bucket_sort_list)
    # 3
    res = []
    for i in range(len(bucket_sort_list) -1, -1, -1):
        for num in bucket_sort_list[i]:
            res.append(num)
            if len(res) == k:
                return res



print( topKFrequent([3,0,1,0], 2) )