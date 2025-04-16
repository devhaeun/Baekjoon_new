def solution(numbers):
    answer = []
    for number in numbers:
        n = format(number, 'b')
        cnt = 0
        for i in n[::-1]:
            if i=='1':
                cnt+=1
            else:
                break
        if cnt<2:
            answer.append(number+1)
        else:
            n = n[:-cnt-1]+'10'+'1'*(cnt-1)
            n = int(n, 2)
            answer.append(n)
    return answer