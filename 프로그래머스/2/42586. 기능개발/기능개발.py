from collections import deque
import math
def solution(progresses, speeds):
    q = deque()
    for i in range(len(progresses)):
        q.append(math.ceil((100-progresses[i])/speeds[i]))
    
    cnt = 0
    standard = q[0]
    answer = []
    
    while q:
        num = q.popleft()
        if num>standard:
            answer.append(cnt)
            standard = num
            cnt = 1
        else:
            cnt+=1
    answer.append(cnt)
    
    return answer