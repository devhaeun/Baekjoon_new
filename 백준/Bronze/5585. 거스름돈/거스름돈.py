# 타로가 지불할 돈
cash = 1000-int(input())

# 잔돈 매수 계산
count = 0
changes = [500, 100, 50, 10, 5, 1]

for i in range(len(changes)):
    count += cash//changes[i]
    cash%=changes[i]
    if cash==0:
        break

print(count)