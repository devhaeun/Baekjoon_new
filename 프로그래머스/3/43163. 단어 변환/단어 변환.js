function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const isConvertible = (w1, w2) => {
        let diff = 0;
        for (let i=0; i<w1.length; i++) {
            if (w1[i]!==w2[i]) diff++;
            if (diff>1) return false;
        }
        return diff === 1;
    };
    
    const queue = [[begin, 0]];
    const visited = new Set(); // 방문한 단어 저장
    
    while (queue.length>0) {
        const [current, count] = queue.shift();
        if (current===target) return count;
        
        for (const word of words) {
            if (!visited.has(word) && isConvertible(current, word)) {
                visited.add(word);
                queue.push([word, count+1]);
            }
        }
    }
    
    return 0; // 변환할 수 없는 경우
}