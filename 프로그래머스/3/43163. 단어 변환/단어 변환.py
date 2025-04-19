from collections import deque
def solution(begin, target, words):
    q = deque()
    visit = [0 for _ in range(len(words))]
    q.append((begin, 0, visit))
    answer = 0
    
    while q:
        word, cnt, v = q.popleft()
        
        if word==target:
            return cnt
        
        for i in range(len(words)):
            if v[i]==0:
                diff = 0
                for j in range(len(word)):
                    if words[i][j]!=word[j]:
                        diff+=1
                if diff==1:
                    q.append((words[i], cnt+1, v[:i]+[1]+v[i+1:]))
    return 0