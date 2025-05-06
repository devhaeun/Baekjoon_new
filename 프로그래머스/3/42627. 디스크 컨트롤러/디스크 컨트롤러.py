import heapq
def solution(jobs):
    answer = 0
    idx = 0
    now = 0
    final = -1
    heap = []
    
    while idx<len(jobs):
        for job in jobs:
            if final<job[0]<=now:
                heapq.heappush(heap, (job[1], job[0]))
        
        if heap:
            t,r = heapq.heappop(heap)
            final = now
            now += t
            answer += now-r
            idx+=1
        else:
            now+=1
            
    return answer//len(jobs)