n = int(input())
numbers = list(map(int, input().split()))
ops_cnt = list(map(int, input().split()))
ops = ['+', '-', '*', '//']
results = []

def dfs(idx, num):
    if idx==n-1:
        results.append(num)
        return
    for i in range(4):
        if ops_cnt[i]>0:
            if i==3 and num<0:
                new_num = - (-num // numbers[idx+1])
            else:
                new_num = eval(f'{num} {ops[i]} {numbers[idx+1]}')
            ops_cnt[i]-=1
            dfs(idx+1, new_num)
            ops_cnt[i]+=1

dfs(0, numbers[0])
# print(results)
print(max(results), min(results), sep='\n')
