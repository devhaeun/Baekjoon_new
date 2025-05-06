import heapq
def solution(operations):
    heap = []
    for operation in operations:
        op, n = operation.split()
        if op=="I":
            heapq.heappush(heap, int(n))
        else:
            if len(heap)==0:
                continue
            if n=="1":
                heap.pop(heap.index(max(heap)))
            else:
                heapq.heappop(heap)
        
    if heap:
        return [heap[heap.index(max(heap))], heap[0]]
    else:
        return [0,0]