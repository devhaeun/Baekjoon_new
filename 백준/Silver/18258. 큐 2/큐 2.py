import sys
from collections import deque

queue = deque()
n = int(sys.stdin.readline())

for _ in range(n):
    c = sys.stdin.readline().split()
    
    if c[0] == 'push':
        queue.append(int(c[1]))
        
    elif c[0] == 'pop':
        if not queue:
            print(-1)
        else:
            print(queue[0])
            queue.popleft()
            
    elif c[0] == 'size':
        print(len(queue))
        
    elif c[0] == 'empty':
        if len(queue) == 0:
            print(1)
        else:
            print(0)
         
    elif c[0] == 'front':
        if not queue:
            print(-1)
        else:
            print(queue[0])
            
    elif c[0] == 'back':
        if not queue:
            print(-1)
        else:
            print(queue[-1])