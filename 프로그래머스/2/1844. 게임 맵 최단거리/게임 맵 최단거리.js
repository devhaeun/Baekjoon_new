function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dir = [[-1,0], [1,0], [0,-1], [0,1]];
    
    const bfs = () => {
        const queue = [[0,0,1]]; // 행, 열, 이동거리
        maps[0][0] = 0;
        
        while (queue.length>0) {
            const [row, col, dist] = queue.shift();
            
            if (row===n-1 && col===m-1) return dist;
            
            for (let [r,c] of dir) {
                const newRow = row+r;
                const newCol = col+c;
                
                if (newRow>=0 && newRow<n && newCol>=0 && newCol<m && maps[newRow][newCol]===1) {
                    queue.push([newRow, newCol, dist+1]);
                    maps[newRow][newCol] = 0;
                }
            }
        }
        return -1;
    };
    return bfs();
}