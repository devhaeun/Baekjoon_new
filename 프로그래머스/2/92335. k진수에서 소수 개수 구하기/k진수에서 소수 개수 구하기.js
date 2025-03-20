function solution(n, k) {
    // 1) n을 k진수로 변환
    let knum = n.toString(k);
    
    // 2) 0을 기준으로 split
    knum = knum.split("0").filter(v=>v!=='');
    console.log(knum);
    
    // 3) 소수 개수
    let cnt = 0;
    knum.forEach(v => {
        v = parseInt(v);
        let isPrime = true;
        // 소수 판별
        if (v===1) isPrime=false;
        else {
            for (let i=3; i<=Math.sqrt(v); i++) {
                if (v%i===0) {
                    isPrime = false;
                    break;
                }
            };
        }
        
        if (isPrime) cnt++
    });
    
    return cnt;
}