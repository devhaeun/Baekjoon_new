def solution(nums):
    set_nums = set(nums)
    n = len(nums)//2
    
    return min(len(set_nums),n)