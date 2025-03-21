function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const isConvertible = (w1, w2) => {
        let diff = 0;
        for (let i=0; i<w1.length; i++) {
            if (w1[i]!==w2[i]) diff++;
            if (diff>1) return false;
        }
        return diff===1;
    };
    
    const queue = [[begin, 0]];
    const visited = new Set();
    
    while (queue.length>0) {
        const [cur, cnt] = queue.shift();
        
        if (cur===target) return cnt;
        
        for (const word of words) {
            if (!visited.has(word) && isConvertible(cur,word)) {
                visited.add(word);
                queue.push([word, cnt+1]);
            }
        }
    }
    
    return 0;
}