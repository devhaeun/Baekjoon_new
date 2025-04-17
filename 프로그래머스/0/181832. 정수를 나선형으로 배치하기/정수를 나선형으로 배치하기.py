def solution(n):
    answer = [[0 for _ in range(n)] for _ in range(n)]
    # 우하좌상
    dr,dc = [0,1,0,-1], [1,0,-1,0]
    r,c = 0,-1
    number = 1
    k = n
    
    for i in range(n*2-1):
        temp = i%4
        if temp%2==1:
            k-=1
        for i in range(k):
            r+=dr[temp]
            c+=dc[temp]
            answer[r][c]=number
            number+=1
        
    return answer