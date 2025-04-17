from collections import deque
def solution(maps):
    n = len(maps)
    m = len(maps[0])
    
    q = deque()
    q.append(([0,0],1))
    maps[0][0] = 0
    # 우하좌상
    dir = [[0,1], [1,0], [0,-1], [-1,0]]
    
    while q:
        [r,c], cnt = q.popleft()
        if r==n-1 and c==m-1:
            return cnt
        for i in range(4):
            dr = r+dir[i][0]
            dc = c+dir[i][1]
            if dr<0 or dr>=n or dc<0 or dc>=m or maps[dr][dc]==0:
                continue
            else:
                q.append(([dr,dc], cnt+1))
                maps[dr][dc]=0
    return -1