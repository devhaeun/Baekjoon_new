# 테스트케이스 수
T = int(input())

# 각 동전 수
Q,D,N,P = 0,0,0,0

# 각 테스트케이스에 대한 동전 수
for _ in range(T):
    C = int(input())
    Q = C//25
    C%=25
    D = C//10
    C%=10
    N = C//5
    C%=5
    P = C
    print(f'{Q} {D} {N} {P}')