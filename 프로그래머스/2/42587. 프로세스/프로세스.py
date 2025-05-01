from collections import deque
def solution(priorities, location):
    q = deque()
    for i,n in enumerate(priorities):
        q.append((n,i))
        
    priorities.sort(reverse=True)
    
    curidx = 0
    while q:
        process = q.popleft()
        if process[0]==priorities[curidx]:
            if process[1]==location:
                return curidx+1
            curidx+=1
        else:
            q.append(process)
            