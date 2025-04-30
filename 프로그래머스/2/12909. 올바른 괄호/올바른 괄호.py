def solution(s):
    cnt = 0
    for p in s:
        if p=='(':
            cnt+=1
        else:
            cnt-=1
        if cnt<0:
            return False
    if cnt>0:
        return False
    return True