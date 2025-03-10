function solution(n, computers) {
    // 방문 여부 저장
    const visited = Array(n).fill(0);
    // 네트워크 수 저장
    let nets = 0;
    
    // 반복문 돌면서
    // 1. 방문 기록 있으면 continue
    // 2. 방문 기록 없으면 nets++ 후 DFS 탐색
    // DFS 탐색 중에는 nets++ 되지 않도록 조절
    const DFS = (i) => {
        if (visited[i]) return;
        visited[i]=1;
        
        for (let j=0; j<n; j++) {
            if (computers[i][j]===1 & !visited[j]) DFS(j);
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            nets++;
            DFS(i);
        }
    }
    return nets;
}