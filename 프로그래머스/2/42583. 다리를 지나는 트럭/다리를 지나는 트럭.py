from collections import deque
def solution(bridge_length, weight, truck_weights):
    q = deque() # (무게, 나가는 시간)
    q.append((0,0))
    time = 0
    total_w = 0
    idx = 0
    
    while q:
        flag = False
        # 나가는 트럭
        if q[0][1]==time:
            out = q.popleft()
            total_w -= out[0]
            flag = True
            
        # 들어가는 트럭
        if idx<len(truck_weights) and len(q)<bridge_length and total_w+truck_weights[idx]<=weight:
            q.append((truck_weights[idx], time+bridge_length))
            total_w+=truck_weights[idx]
            idx+=1
            flag = True
        
        # 나가거나 들어온 트럭 있는 경우 time+1
        # 그렇지 않은 경우 time skip
        if flag:
            time+=1
        else:
            time = q[0][1]
            
    return time
        