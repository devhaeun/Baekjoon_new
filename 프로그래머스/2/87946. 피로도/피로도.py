from collections import deque
import copy

def solution(k, dungeons):
    max_cnt = 0
    
    # BFS로 탐색 후 max_cnt 업데이트
    visited = [0]*len(dungeons)
    queue = deque()
    queue.append((0,k,visited))
    while queue:
        cnt,hp,visit = queue.popleft()
        
        if 0 not in visit:
            max_cnt = max(max_cnt, cnt)
        
        flag = False
        for i in range(len(visit)):
            if visit[i]==0 and hp>=dungeons[i][0]:
                if flag==False:
                    flag = True
                arr = copy.deepcopy(visit)
                arr[i]=1
                queue.append((cnt+1, hp-dungeons[i][1],arr))
        if flag==False:
            max_cnt = max(cnt, max_cnt)
    return max_cnt