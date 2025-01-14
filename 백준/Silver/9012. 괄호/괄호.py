import sys
T = int(sys.stdin.readline())

for _ in range(T):
    ps = sys.stdin.readline().strip()
    stack = []
    tf = 'YES'
    
    for i in ps:
        if i == '(':
            stack.append(1)
        else:
            if not stack:
                tf = 'NO'
                break
            stack.pop()
    if stack:
        tf = 'NO'
    print(tf)