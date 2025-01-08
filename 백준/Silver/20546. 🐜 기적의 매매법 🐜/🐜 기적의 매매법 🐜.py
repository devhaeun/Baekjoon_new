cash = int(input())
stock = list(map(int, input().split()))
jh = [cash, 0]
sm = [cash, 0]

# 준현
for i in range(14):
    t = jh[0]//stock[i]
    jh[1] += t
    jh[0] -= t*stock[i]

# 성민
for i in range(3,14):
    if stock[i-3]<stock[i-2] and stock[i-2]<stock[i-1] and stock[i-1]<stock[i]:
        sm[0] += sm[1]*stock[i]
        sm[1] = 0
    elif stock[i-3]>stock[i-2] and stock[i-2]>stock[i-1] and stock[i-1]>stock[i]:
        t = sm[0]//stock[i]
        sm[1] += t
        sm[0] -= t*stock[i]
        
jh_result = jh[0] + jh[1]*stock[-1]
sm_result = sm[0] + sm[1]*stock[-1]
#print("jh: ", jh_result)
#print("sm: ", sm_result)

if jh_result>sm_result:
    print("BNP")
elif jh_result<sm_result:
    print("TIMING")
else:
    print("SAMESAME")
