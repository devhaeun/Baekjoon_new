n = int(input())
arr = [[0 for i in range(101)] for j in range(101)]

for _ in range(n):
    l,b = map(int, input().split())
    for i in range(l, l+10):
        for j in range(b, b+10):
            arr[j][i] = 1

ans = 0
for i in arr:
    ans += sum(i)
print(ans)