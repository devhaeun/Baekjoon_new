function solution(n) {
    var answer = 0;
    var fact = 1;
    while (fact<=n) {
        answer+=1;
        fact*=answer;
    }
    return answer-1;
}