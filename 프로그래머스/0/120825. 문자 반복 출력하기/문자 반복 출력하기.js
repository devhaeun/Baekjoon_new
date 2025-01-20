function solution(my_string, n) {
    let answer = [...my_string].map(v=>v.repeat(n)).join('');
    return answer;
}