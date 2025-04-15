from collections import defaultdict
import sys
input = sys.stdin.readline

n = int(input())
ex_cnts = defaultdict(int)
ex_names = set()

for _ in range(n):
    ex = input().strip().split('.')[1]
    ex_cnts[ex]+=1
    ex_names.add(ex)

ex_names = sorted(list(ex_names))
for ex in ex_names:
    print(ex, ex_cnts[ex], sep=' ')