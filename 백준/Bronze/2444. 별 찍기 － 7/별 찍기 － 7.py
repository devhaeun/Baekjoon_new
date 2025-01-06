num = int(input())

for i in range(-num+1,num):
    print(' '*abs(i)+'*'*(2*(num-abs(i))-1))