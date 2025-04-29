def solution(genres, plays):
    total = {}
    dic = {}
    for i,(g,p) in enumerate(zip(genres, plays)):
        if g in total:
            total[g]+=p
        else:
            total[g]=p
        if g in dic:
            dic[g].append((i,p))
        else:
            dic[g] = [(i,p)]
    
    answer = []
    for (k,v) in sorted(total.items(), key=lambda x:-x[1]):
        for (i,p) in sorted(dic[k], key=lambda x:(-x[1], x[0]))[:2]:
            answer.append(i)
    
    return answer