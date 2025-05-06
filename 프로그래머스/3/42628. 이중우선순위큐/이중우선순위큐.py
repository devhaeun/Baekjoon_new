import heapq
def solution(operations):
	answer = []
	
	min_heap = []
	max_heap = []
	num = {} # 숫자 개수 저장
	
	for oper in operations:
		t,n= oper.split()
		n = int(n)
		
		if t=="I":
			heapq.heappush(min_heap, n)
			heapq.heappush(max_heap, -n)
			if num.get(n):
				num[n]+=1
			else:
				num[n] = 1
				
		else:
			if n==1:
				if len(max_heap):
					add = -heapq.heappop(max_heap)
				else:
					continue
				while max_heap and num[add]<1:
					add = -heapq.heappop(max_heap)
				num[add] -= 1
				
			else:
				if len(min_heap):
					add = heapq.heappop(min_heap)
				else:
					continue
				while min_heap and num[add]<1:
					add = heapq.heappop(min_heap)
				num[add] -= 1
				
	while min_heap and num[min_heap[0]]<1:
		heapq.heappop(min_heap)
	min = min_heap[0] if len(min_heap) else 0
		
	while max_heap and num[-max_heap[0]]<1:
		heapq.heappop(max_heap)
	max = -max_heap[0] if len(max_heap) else 0
		
	return [max, min]