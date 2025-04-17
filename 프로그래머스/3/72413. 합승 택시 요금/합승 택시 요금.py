import heapq, sys
def solution(n, s, a, b, fares):
    INF = sys.maxsize
    
    # 연결 리스트
    graph = [[] for _ in range(n+1)]
    for v,u,c in fares:
        graph[v].append((u,c))
        graph[u].append((v,c))
    
    def dijkstra(start):
        dist = [INF for _ in range(n+1)]
        dist[start]=0
        heap = [(0,start)]
        
        while heap:
            cost, node = heapq.heappop(heap)
            
            if cost > dist[node]:
                continue
            
            for next_node, next_cost in graph[node]:
                if dist[next_node] > cost + next_cost:
                    dist[next_node] = cost + next_cost
                    heapq.heappush(heap, (cost+next_cost, next_node))
        
        return dist
    
    D = [0] + [dijkstra(i) for i in range(1,n+1)]
    
    path = INF
    for i in range(1, n+1):
        path = min(path, D[s][i] + D[i][a] + D[i][b])
        
    return path