import sys
input = sys.stdin.readline

n = int(input())
colors = input()
s = 1
for i in range(1,n):
    if colors[i-1]!=colors[i]:
        s += 1
print(s//2+1)