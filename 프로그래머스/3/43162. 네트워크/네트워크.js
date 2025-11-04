function solution(n, computers) {
    const connected = Array(n).fill(0);
    
    function dfs(idx, cnt) {
        if (connected[idx]) return;
        connected[idx] = cnt;
        
        for (let i=0; i<n; i++) {
            if (idx===i || connected[i]) continue;
            if (computers[idx][i]===1) {
                dfs(i, cnt);
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        dfs(i, i+1);
    }
    console.log(connected);
    return new Set(connected).size
}