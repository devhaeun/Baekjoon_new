def solution(want, number, discount):
    temp = len(discount)-9
    answer = 0
    for i in range(temp):
        arr = discount[i:i+10]
        flag = True
        for j in range(len(want)):
            if arr.count(want[j])!=number[j]:
                flag = False
                break
        if flag:
            answer+=1
    return answer