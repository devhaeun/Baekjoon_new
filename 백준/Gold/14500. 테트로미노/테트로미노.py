n,m = map(int, input().split())
table = [list(map(int, input().split())) for _ in range(n)]
mx = max(map(max, table))
v = [[0]*m for _ in range(n)]
ans = 0
dr, dc = [1, -1, 0, 0], [0, 0, 1, -1]

def dfs(cnt, tot, lst):
    global ans
    # 가지치기
    if tot + mx*(4-cnt) <= ans:
        return
    
    # 완료
    if cnt==4:
        ans = max(ans, tot)
        return
    
    for cr, cc in lst:
        for i in range(4):
            nr = cr + dr[i]
            nc = cc + dc[i]
            if 0<=nr<n and 0<=nc<m and v[nr][nc]==0:
                v[nr][nc]=1
                dfs(cnt+1, tot+table[nr][nc], lst+[(nr,nc)])
                v[nr][nc]=0
            
for i in range(n):
    for j in range(m):
        v[i][j]=1
        dfs(1, table[i][j], [(i,j)])
        
print(ans)
