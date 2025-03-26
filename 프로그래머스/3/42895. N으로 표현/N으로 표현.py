def solution(N, number):
    sets = [set() for x in range(8)]
    
    for i,x in enumerate(sets,start=1):
        x.add(int(str(N)*i))
        
    answer = -1
    for i in range(len(sets)):
        for j in range(i):
            for op1 in sets[j]:
                for op2 in sets[i-j-1]:
                    sets[i].add(op1+op2)
                    sets[i].add(op1-op2)
                    sets[i].add(op1*op2)
                    if op2!=0 and op1%op2==0:
                        sets[i].add(op1//op2)
        if number in sets[i]:
            answer = i+1
            break
    return answer