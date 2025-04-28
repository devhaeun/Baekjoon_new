def solution(clothes):
    hm = {}
    for cloth in clothes:
        if cloth[1] in hm:
            hm[cloth[1]]+=1
        else:
            hm[cloth[1]]=1
            
    answer = 1
    for h in hm.items():
        answer*=h[1]+1
    
    return answer-1