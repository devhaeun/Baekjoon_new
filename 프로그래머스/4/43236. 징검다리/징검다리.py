def solution(distance, rocks, n):
    start, end = 1, distance
    
    rocks.sort()
    rocks.append(distance)
    
    while start<=end:
        mid = (start+end)//2
        prev = 0
        cnt = 0
        
        for rock in rocks:
            if rock-prev<mid:
                cnt+=1
                if cnt>n:
                    break
            else:
                prev = rock
        
        if cnt>n:
            end = mid-1
        else:
            answer = mid
            start = mid+1
    return answer