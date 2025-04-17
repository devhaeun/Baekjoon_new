def solution(N, road, K):
    # 연결 리스트
    list = [[] for _ in range(N+1)]
    for x in road:
        list[x[0]].append((x[1], x[2]))
        list[x[1]].append((x[0], x[2]))
    
    dist = [500001 for _ in range(N+1)]
    dist[1] = 0
    visited = [0, 1] + [0 for _ in range(N-1)]
    
    # DFS
    def dfs(node, cur):
        for x in list[node]:
            if visited[x[0]]==1:
                continue
            if cur+x[1]<dist[x[0]]:
                visited[x[0]] = 1
                dist[x[0]] = cur+x[1]
                dfs(x[0], cur+x[1])
                visited[x[0]] = 0
    dfs(1, 0)
    
    cnt = 0
    for i in range(1,N+1):
        if dist[i]<=K:
            cnt+=1
    print(dist)
    return cnt