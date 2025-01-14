n,k = map(int, input().split())
arr = [0] + [i+1 for i in range(n)]
now = k
result = []

while len(arr)>1:
    if now < len(arr):
        result.append(arr.pop(now))
        now += k-1
    else:
        now -= len(arr)-1
        
print('<', end='')
for i in range(len(result)):
    if i+1<len(result):
        print(f'{result[i]},', end=' ')
    else:
        print(f'{result[i]}>')