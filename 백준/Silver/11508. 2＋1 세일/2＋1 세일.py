n = int(input())
arr = []
for _ in range(n):
    arr.append(int(input()))
arr.sort()

cost = sum(arr)
if n<=2:
    print(cost)
else:
    for i in range(-3,-n-1,-3):
        cost -= arr[i]
    print(cost)