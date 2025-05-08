def solution(sizes):
    min_ = 0
    max_ = 0
    
    for w,h in sizes:
        if w>h:
            max_ = max(max_, w)
            min_ = max(min_, h)
        else:
            max_ = max(max_, h)
            min_ = max(min_, w)
            
    return max_*min_