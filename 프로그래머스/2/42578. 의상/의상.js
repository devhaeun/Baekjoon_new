function solution(clothes) {
    const map = new Map();
    
    for (let cloth of clothes) {
        map.set(cloth[1], (map.get(cloth[1])||0)+1);
    }
    
    let count = 1;
    for (let value of map.values()) {
        count *= value+1;
    }
    
    return count-1;
}