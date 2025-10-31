function solution(phone_book) {
    phone_book.sort();
    
    for (let i=0; i<phone_book.length-1; i++) {
        const phone_len = phone_book[i].length;
        if (phone_book[i+1].length>phone_len && phone_book[i] === phone_book[i+1].slice(0, phone_len)) {
            return false;
        }
    }
    return true;
}