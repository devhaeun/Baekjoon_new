n,m = map(int, input().split())
arr = [i for i in range(n+1)]

for _ in range(m):
    start, end = map(int, input().split())
    if end==n:
        arr = arr[:start] + arr[end:start-1:-1]
    else:
        arr = arr[:start]+arr[end:start-1:-1]+arr[end+1:]
    
for i in range(1,n+1):
    print(arr[i], end=' ')