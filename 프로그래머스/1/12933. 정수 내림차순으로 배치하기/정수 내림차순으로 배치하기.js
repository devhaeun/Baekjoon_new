function solution(n) {
    const arr = String(n).split('');
    arr.sort((a,b)=>b-a);
    const answer = arr.join('');
    return Math.floor(answer);
}