def solution(n, times):
    start, end = 1, max(times)*n
    answer = 0
    while start<=end:
        mid = (start+end)//2
        people = 0
        for time in times:
            people += mid//time
            if people>=n:
                break
        if people>=n:
            answer = mid
            end = mid-1
        else:
            start = mid+1
    return answer