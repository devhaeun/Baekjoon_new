def solution(s):
    idx = len(s)//2
    return s[idx] if len(s)%2!=0 else s[idx-1]+s[idx]