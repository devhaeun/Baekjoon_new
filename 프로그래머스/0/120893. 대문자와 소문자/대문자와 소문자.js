function solution(my_string) {
    let answer = '';
    for (s of my_string) {
        if (s===s.toUpperCase()) answer+=s.toLowerCase();
        else answer+=s.toUpperCase();
    }
    return answer;
}