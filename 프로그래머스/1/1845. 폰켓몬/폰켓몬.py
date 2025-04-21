def solution(nums):
    set_nums = set(nums)
    n = len(nums)//2
    
    if len(set_nums)>=n:
        return n
    else:
        return len(set_nums)