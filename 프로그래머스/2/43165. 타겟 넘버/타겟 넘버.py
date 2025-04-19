def solution(numbers, target):
    global cnt
    cnt = 0
    
    def dfs(idx, tot):
        global cnt
        if idx==len(numbers)-1:
            if tot==target:
                cnt+=1
            
        else:
            dfs(idx+1, tot+numbers[idx+1])
            dfs(idx+1, tot-numbers[idx+1])
            
    dfs(-1,0)
    return cnt