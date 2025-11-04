function solution(maps) {
    // 우하좌상
    const dr = [0, 1, 0, -1];
    const dc = [1, 0, -1, 0];
    
    const mrows = maps.length;
    const mcols = maps[0].length;
    
    const queue = [[[0, 0], 1]];
    maps[0][0] = 0;
    
    while (queue.length>0) {
        const [[r, c], cnt] = queue.shift();
        
        if (r===mrows-1 && c===mcols-1) return cnt;
        
        for (let i=0; i<4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (nr>=0 && nr<mrows && nc>=0 && nc<mcols && maps[nr][nc]) {
                queue.push([[nr, nc], cnt+1]);
                maps[nr][nc] = 0;
            }
        }
    }
    
    return -1;
}