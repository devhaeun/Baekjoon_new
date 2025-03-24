def solution(numbers):
    mySum = sum(range(0,10))
    for i in range(0,len(numbers)):
        mySum -= numbers[i]
    return mySum