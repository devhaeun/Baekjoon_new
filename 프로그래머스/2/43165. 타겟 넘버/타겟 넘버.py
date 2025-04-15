def solution(numbers, target):
    global cnt
    cnt = 0
    n = len(numbers)
    
    def dfs(idx, summ):
        global cnt
        if idx==n-1:
            if summ==target:
                cnt+=1
        else:
            dfs(idx+1, summ+numbers[idx+1])
            dfs(idx+1, summ-numbers[idx+1])
    
    dfs(-1, 0)
    
    return cnt