from collections import defaultdict
def solution(participant, completion):
    dict = defaultdict(int)
    for part in participant:
        dict[part]+=1
    for com in completion:
        dict[com]-=1
    
    for k,v in dict.items():
        if v>0:
            return(k)