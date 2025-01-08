num = int(input())
sw = [0] + list(map(int, input().split()))
stnum = int(input())
for _ in range(stnum):
    g,sn = map(int, input().split())
    s = 1
    
    if g==1:
        while sn*s < num+1:
            sw[sn*s] = abs(sw[sn*s]-1)
            s+=1
    else:
        sw[sn] = abs(sw[sn]-1)
        while sn-s>0 and sn+s<num+1 and sw[sn-s]==sw[sn+s]:
            sw[sn-s] = abs(sw[sn-s]-1)
            sw[sn+s] = abs(sw[sn+s]-1)
            s+=1
            
for i in range(1,num+1):
    print(sw[i], end=' ')
    if i%20==0:
        print()