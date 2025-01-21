function solution(n) {
    let count = 0;
    for (let i=1; i<=n**(1/2); i++) {
        if (n%i===0) {
            count += 2
            if (i===n/i) count-=1
        }
    }
    return count
}