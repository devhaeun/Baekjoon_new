function solution(arr) {
    const result = [];
    let current = -1;
    
    arr.forEach(v => {
        if (v!==current) {
            result.push(v);
            current = v;
        }
    });
    
    return result;
}