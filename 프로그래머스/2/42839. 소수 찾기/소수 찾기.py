import math
def solution(numbers):
    primes = set()
    visited = [False]*len(numbers)
    
    # numbers 리스트화
    arr = []
    for n in numbers:
        arr.append(n)
        
    def isPrime(num):
        if num<=1: return False
        if num==2: return True
        for i in range(2, int(math.sqrt(num))+1):
            if num%i==0:
                return False
        return True
    
    def DFS(num):
        if False not in visited:
            return
        # 소수 판별 후 DFS 재귀함수
        for i in range(len(arr)):
            if visited[i]:
                continue
            if isPrime(int(num+arr[i])):
                # print(num+arr[i])
                primes.add(int(num+arr[i]))
            visited[i]=True
            DFS(num+arr[i])
            visited[i]=False
    DFS("")
    
    return len(primes)