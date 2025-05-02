import heapq
def solution(scoville, K):
    heap = []
    for s in scoville:
        heapq.heappush(heap, s)
        
    cnt=0
    
    while heap[0]<K:
        cnt+=1
        s1 = heapq.heappop(heap)
        s2 = heapq.heappop(heap)
        heapq.heappush(heap, s1+s2*2)
        if len(heap)==1:
            break
            
    if heap[0]<K:
        return -1
    else:
        return cnt