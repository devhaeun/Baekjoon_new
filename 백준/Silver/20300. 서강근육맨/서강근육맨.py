import sys
input = sys.stdin.readline

n = int(input())
t = list(map(int, input().split()))
t.sort()
maxt = -1
if n%2==1:
    maxt = t.pop()
for i in range(n//2):
    maxt = max(maxt, t[i]+t[len(t)-i-1])
print(maxt)