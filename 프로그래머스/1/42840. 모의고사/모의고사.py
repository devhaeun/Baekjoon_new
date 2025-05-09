def solution(answers):
    grades = [0,0,0]
    a1 = (1,2,3,4,5)
    a2 = (2,1,2,3,2,4,2,5)
    a3 = (3,3,1,1,2,2,4,4,5,5)
    
    for i in range(len(answers)):
        a = answers[i]
        if a==a1[i%5]:
            grades[0]+=1
        if a==a2[i%8]:
            grades[1]+=1
        if a==a3[i%10]:
            grades[2]+=1
    
    result = []
    max_ = max(grades)
    for i in range(3):
        if grades[i]==max_:
            result.append(i+1)
            
    return result
    