from collections import deque

def solution(n, edge):
    edge.sort()
    distance = [0] * (n+1)
    queue = deque()
    graph = [[] for _ in range(n+1)]
    
    # 인접리스트 생성
    for e in edge:
        graph[e[0]].append(e[1])
        graph[e[1]].append(e[0])
        
    queue.append(1)
    distance[1]=1
    
    while queue:
        current = queue.popleft()
        for node in graph[current]:
            if distance[node]==0:
                queue.append(node)
                distance[node] = distance[current]+1
                
    max_dist = max(distance)
    return distance.count(max_dist)