function solution(n) {
    const cand = Math.floor(n**(1/2));
    return (cand)**2===n ? (cand+1)**2 : -1
}