function solution(n, lost, reserve) {
    let count = 0;
    
    const map = new Map();
    for (let i=1; i<=n; i++) {
        map.set(i, 1);
    }
    
    for (let r of reserve) {
        map.set(r, map.get(r)+1);
    }
    
    for (let l of lost) {
        map.set(l, map.get(l)-1);
    }
    
    for (let [key, value] of map) {
        if (value===0) {
            if (map.get(key-1)===2) {
                map.set(key-1, 1);
                map.set(key, 1);
                continue;
            } else if (map.get(key+1)===2) {
                map.set(key+1, 1);
                map.set(key, 1);
                continue;
            } else {
                count++;
            }
        }
    }
    
    return n-count;
}