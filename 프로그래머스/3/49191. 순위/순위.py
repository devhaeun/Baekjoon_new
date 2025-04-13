from collections import defaultdict
def solution(n, results):
    win_graph = defaultdict(set)
    lose_graph = defaultdict(set)
    
    for w,l in results:
        win_graph[l].add(w)
        lose_graph[w].add(l)
        
    for i in range(1,n+1):
        for winner in win_graph[i]:
            # i에게 이김 -> i에게 진 사람들도 이김
            lose_graph[winner].update(lose_graph[i])
        for loser in lose_graph[i]:
            # i에게 짐 -> i를 이긴 사람들에게도 짐
            win_graph[loser].update(win_graph[i])
    
    answer=0
    for i in range(1,n+1):
        if len(win_graph[i])+len(lose_graph[i])==n-1:
            answer+=1
    
    return answer