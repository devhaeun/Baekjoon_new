def solution(citations):
    citations.sort()
    start=0
    end=citations[-1]
    answer = 0
    while start<=end:
        mid = (start+end)//2
        idx = -1
        for i in range(len(citations)):
            if citations[i]>=mid:
                idx = i
                break
        if len(citations)-idx>=mid:
            answer = max(answer,mid)
            start = mid+1
        else:
            end = mid-1
    return answer