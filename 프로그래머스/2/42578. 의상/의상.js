function solution(clothes) {
    const coni = new Map();
    clothes.map(v => {
        if (coni.get(v[1])) coni.set(v[1], coni.get(v[1])+1);
        else coni.set(v[1], 1);
    });
    
    let result = 1;
    for (let v of coni.values()) {
        result *= v+1
    }
    return result-1;
}