n = int(input())
cows = [-1]*11
count = 0

for _ in range(n):
    num, dir = map(int, input().split())
    if cows[num] == -1:
        cows[num] = dir
    elif cows[num]!=dir:
        cows[num] = dir
        count += 1
        
print(count)