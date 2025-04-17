from collections import defaultdict
N = int(input())
tot = int(input())
arr = list(map(int, input().split()))

seq = []
dict = defaultdict(int)
for i in range(len(arr)):
    if arr[i] in seq:
        dict[arr[i]]+=1
    else:
        if len(seq)<N:
            seq.append(arr[i])
            dict[arr[i]] = 1
        else:
            # 추천수 가장 적고 오래된 사람 찾기
            delete = seq[0]
            for s in seq:
                if dict[s]<dict[delete]:
                    delete = s
            dict[delete]=0
            seq.remove(delete)
            seq.append(arr[i])
            dict[arr[i]] = 1
            
print(*sorted(seq))
        