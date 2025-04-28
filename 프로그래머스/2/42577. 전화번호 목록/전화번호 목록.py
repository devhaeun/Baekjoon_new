def solution(phone_book):
    hm = {}
    for phone_number in phone_book:
        hm[phone_number]=1
    for phone_number in phone_book:
        temp = ""
        for number in phone_number:
            temp+=number
            if temp in hm and temp!=phone_number:
                return False
    return True