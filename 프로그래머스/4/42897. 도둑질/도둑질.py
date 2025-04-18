def solution(money):
    # 마지막 집을 털지 않는 경우
    gains1 = [0 for _ in range(len(money)-1)]
    gains1[0] = money[0]
    gains1[1] = money[0]
    
    for i in range(2,len(money)-1):
        # gains1[i] = max(gains1[:i-1]) + money[i]
        if gains1[i-2]+money[i] < gains1[i-1]:
            gains1[i] = gains1[i-1]
        else:
            gains1[i] = gains1[i-2]+money[i]
    gain1 = gains1[-1]
        
    # 첫 번째 집을 털지 않는 경우
    gains2 = [0 for _ in range(len(money))]
    gains2[1] = money[1]
    for i in range(2, len(money)):
        # gains2[i] = max(gains2[:i-1]) + money[i]
        if gains2[i-2]+money[i] < gains2[i-1]:
            gains2[i] = gains2[i-1]
        else:
            gains2[i] = gains2[i-2]+money[i]
    gain2 = gains2[-1]
    
    return max(gain1, gain2)