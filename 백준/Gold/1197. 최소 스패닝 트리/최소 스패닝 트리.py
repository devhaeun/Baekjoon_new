import sys
sys.setrecursionlimit(10**5)
input = sys.stdin.readline

v, e = map(int, input().split())
edges = []
for _ in range(e):
    a,b,c = map(int, input().strip().split())
    edges.append((a,b,c))
edges.sort(key=lambda x:x[2])

parent = [i for i in range(v+1)]

def get_parent(a):
    if parent[a]==a:
        return a
    parent[a] = get_parent(parent[a])
    return parent[a]

def same_parent(a,b):
    return get_parent(a) == get_parent(b)

def union_parent(a,b):
    a = get_parent(a)
    b = get_parent(b)
    if a<b:
        parent[b] = a
    else:
        parent[a] = b

cost = 0
for a, b, c in edges:
    if not same_parent(a,b):
        union_parent(a,b)
        cost += c
        
print(cost)