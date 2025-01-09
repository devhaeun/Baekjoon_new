n,m = map(int, input().split())
arr = [[0]*m for _ in range(n)]

for _ in range(2):
    for i in range(n):
        row = list(map(int, input().split()))
        for j in range(m):
            arr[i][j] += row[j]
            
for i in range(n):
    for j in range(m):
        print(arr[i][j], end=' ')
    print()