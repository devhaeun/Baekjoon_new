t = int(input())

def func():
    n = int(input())  # 편의점 개수
    hx, hy = map(int, input().split())

    stores = [list(map(int, input().split())) for _ in range(n)]
    visited = [0] * n
    fx, fy = map(int, input().split())

    result = False

    def DFS(cx, cy):
        nonlocal result
        if abs(cx - fx) + abs(cy - fy) <= 1000:
            result = True
            return

        for i in range(n):
            if not visited[i]:
                nx, ny = stores[i]
                if abs(cx - nx) + abs(cy - ny) <= 1000:
                    visited[i] = 1
                    DFS(nx, ny)

    DFS(hx, hy)
    print("happy" if result else "sad")

for _ in range(t):
    func()
