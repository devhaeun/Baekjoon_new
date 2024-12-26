# 수의 개수 입력 받기
N = int(input())

# 수열 받기
numbers = []
for _ in range(N):
    num = int(input())
    numbers.append(num)
    
# 오름차순 정렬하기
numbers.sort()

for i in range(N):
    print(numbers[i])