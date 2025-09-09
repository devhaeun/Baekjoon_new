from collections import deque

N,M = map(int, input().split())

miro = []
for i in range(N):
    miro.append(list(map(int, list(input()))))

visited = []
for i in range(N):
    temp = []
    for j in range(M):
        temp.append(miro[i][j])
    visited.append(temp)
    
dr = [0,1,0,-1]
dc = [1,0,-1,0]
store = deque()
store.append([[0,0], 1])

while (len(store)>0):
    [[r,c], cnt] = store.popleft()
    visited[r][c] = 0
    
    if (r==N-1 and c==M-1):
        print(cnt)
        break
    
    for i in range(4):
        nr = r+dr[i]
        nc = c+dc[i]
        if (nr<0 or nr>=N or nc<0 or nc>=M or visited[nr][nc]==0):
            continue
        store.append([[nr,nc], cnt+1])
        visited[nr][nc]=0
        