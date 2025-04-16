def solution(routes):
    routes.sort(key=lambda x:x[0])
    # print(routes)
    cnt = 1
    # section 범위 내에 있으면 카메라 추가 설치 필요 X
    section = [-30000, -30000]
    
    for i in range(len(routes)-1):
        
        # 겹치지 않는 경우
        if routes[i][1]<routes[i+1][0]:
            cnt+=1
            # print('1번', routes[i+1], cnt, section)
        
        # 겹치는 경우
        elif routes[i+1][0]<=routes[i][1]:
            # routes[i]와 routes[i-1]이 겹치지 않은 경우
            if section[1]<routes[i][0]:
                section = [routes[i+1][0], min(routes[i][1], routes[i+1][1])]
                # print('2번', routes[i+1], cnt, section)
            else:
                # routes[i+1]도 section에 포함되는 경우
                if routes[i+1][0]<=section[1]:
                    section = [routes[i+1][0], min(routes[i+1][1], section[1])]
                    # print('3번', routes[i+1], cnt, section)
                # routes[i+1]은 포함되지 않는 경우
                else:
                    cnt+=1
                    section = [routes[i+1][0], routes[i+1][1]]
                    # print('4번', routes[i+1], cnt, section)
                    
    return cnt
                