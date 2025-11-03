function solution(N, number) {
    const arr = Array.from(new Array(9), () => new Set());
    
    if (N===number) return 1;
    
    arr.forEach((el, i) => {
        if (i!==0) el.add(Number(String(N).repeat(i)));
    });
    
    for (let i=1; i<9; i++) {
        for (let j=1; j<i; j++) {
            for (let first of arr[j]) {
                for (let second of arr[i-j]) {
                    arr[i].add(first+second);
                    arr[i].add(first-second);
                    arr[i].add(first*second);
                    arr[i].add(Math.floor(first/second));
                }
            }
        }
        if (arr[i].has(number)) return i;
    }
    
    return -1;
}