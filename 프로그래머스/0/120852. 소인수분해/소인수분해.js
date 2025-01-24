function solution(n) {
    var answer = [];
    let i=2;
    while (i<=n) {
        if (n%i===0) {
            if (answer.find(v=>v==i)==undefined) answer.push(i);
            n/=i;
        } else i++;
    }
    return answer;
}