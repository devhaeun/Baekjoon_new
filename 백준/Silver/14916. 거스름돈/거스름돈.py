left = int(input())
coin = 0

while True:
    if left%5==0:
        coin+=left//5
        break
    else:
        left-=2
        coin+=1
    if left<0:
        coin = -1
        break
print(coin)