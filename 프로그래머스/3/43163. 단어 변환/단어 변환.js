function solution(begin, target, words) {
    const visited = new Array(words.length).fill(false);
    const wordLen = target.length;
    
    const queue = [[begin, 0]];
    
    while (queue.length>0) {
        const [word, cnt] = queue.shift();
        
        if (word===target) return cnt;
        
        for (let i=0; i<words.length; i++) {
            if (visited[i]) continue;
            
            let diff = 0;
            for (let j=0; j<wordLen; j++) {
                if (words[i][j] !== word[j]) {
                    diff++;
                    if (diff>1) break;
                }
            }
            
            if (diff===1) {
                queue.push([words[i], cnt+1]);
                visited[i] = true;
            }
        }
    }
    
    return 0;
}