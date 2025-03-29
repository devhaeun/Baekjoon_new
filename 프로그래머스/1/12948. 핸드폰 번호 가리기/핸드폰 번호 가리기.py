def solution(phone_number):
    replace = ''
    for i in range(len(phone_number)-4):
        replace+='*'
    answer = replace + phone_number[-4:]
    return answer