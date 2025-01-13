arr=[[] for _ in range(15)]
for i in range(5):
    temp = input()
    for j in range(len(temp)):
        arr[j].append(temp[j])
        
for i in range(15):
    if len(arr[i])==0:
        break
    for j in range(len(arr[i])):
        print(arr[i][j], end='')