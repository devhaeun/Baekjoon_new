N = int(input())
ropes = []
for _ in range(N):
    ropes.append(int(input()))
ropes.sort()
maxw = N*ropes[0]
for i in range(1,N):
    if maxw<ropes[i]*(N-i):
        maxw = ropes[i]*(N-i)
print(maxw)