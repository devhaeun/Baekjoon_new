def dfs(tickets, start, route):
    global visited, answer
    if 0 not in visited:
        answer.append(route)
    for i in range(len(tickets)):
        if tickets[i][0]==start and visited[i]==0:
            visited[i]=1
            dfs(tickets, tickets[i][1], [*route, tickets[i][1]])
            visited[i]=0
    
def solution(tickets):
    global visited, answer
    answer = []
    visited = [0 for _ in range(len(tickets))]
    stack = []
    dfs(tickets, "ICN", ["ICN"])
    return sorted(answer)[0]