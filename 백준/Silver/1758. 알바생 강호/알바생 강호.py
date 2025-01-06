N = int(input())
total = 0
tips = []
for i in range(N):
    tips.append(int(input()))
tips.sort(reverse=True)
for i in range(N):
    total+=max(tips[i]-i,0)
print(total)