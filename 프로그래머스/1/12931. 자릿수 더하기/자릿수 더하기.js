function solution(n)
{
    let answer = 0;
    for (let i=100000000; i>0; i/=10) {
        console.log(answer, n, i);
        answer += Math.floor(n/i);
        n%=i;
        if (n===0) break;
    }
    
    return answer;
}