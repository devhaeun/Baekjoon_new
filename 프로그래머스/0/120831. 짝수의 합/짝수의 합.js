function solution(n) {
    let answer = 0;
    for (let i=2; i<n+1; i+=2) {
        answer += i
    };
    return answer;
}