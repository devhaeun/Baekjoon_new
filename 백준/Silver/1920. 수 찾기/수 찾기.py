n = int(input())
list_a = list(map(int, input().split()))
list_a.sort()
m = int(input())
tofind = list(map(int, input().split()))

def binary_search(arr, target, start, end):
    if start>end:
        return 0
    mid = (start + end) // 2
    if arr[mid] == target:
        return 1
    elif arr[mid] > target:
        return binary_search(arr, target, start, mid-1)
    else:
        return binary_search(arr, target, mid+1, end)

for num in tofind:
    print(binary_search(list_a,num,0,n-1))
    