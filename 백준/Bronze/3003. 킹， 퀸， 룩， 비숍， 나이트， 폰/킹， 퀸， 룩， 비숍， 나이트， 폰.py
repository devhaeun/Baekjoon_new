chess = [1, 1, 2, 2, 2, 8]

now = list(map(int, input().split()))

for i in range(len(chess)):
    chess[i] -= now[i]
    print(chess[i], end=' ')