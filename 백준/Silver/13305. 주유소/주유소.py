import sys
input = sys.stdin.readline

n = int(input())
roads = list(map(int, input().split())) # N-1개
costs = list(map(int, input().split())) # N개

cost = costs[0]
total = cost*roads[0]
for i in range(1,n-1):
    cost = min(cost, costs[i])
    total += cost*roads[i]
print(total)