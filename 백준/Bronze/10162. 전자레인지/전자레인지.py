# 요리시간
T = int(input())

# 각 버튼 시간(초)
button = [300, 60, 10]
count = 0

# 3개 버튼으로 시간을 맞출 수 없는 경우
if T%10!=0:
    print(-1)
else:
    # 최소 버튼 조작 횟수 구하기
    for i in range(3):
        count=T//button[i]
        T%=button[i]
        print(count, end=' ')