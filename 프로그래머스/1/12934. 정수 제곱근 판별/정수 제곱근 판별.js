function solution(n) {
    const cand = Math.floor(Math.sqrt(n));
    return (cand)**2===n ? (cand+1)**2 : -1
}