from itertools import combinations
N,M = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
combi = combinations(arr, M)

for c in combi:
    for num in c:
        print(num, end=' ')
    print()