# 숫자 입력 받기
N = int(input())

# N! 계산하기
result = 1
for i in range(1,N):
    result*=i+1
    
print(result)