function solution(k, dungeons) {
    let answer = 0;
    const visited = Array.from({ length: dungeons.legnth}, () => false);
    
    const DFS = (hp, L) => {
        for (let i=0; i<dungeons.length; i++) {
            // 방문X, 최소 필요 피로도 만족
            if (!visited[i] && hp>=dungeons[i][0]) {
                visited[i] = true;
                DFS(hp-dungeons[i][1], L+1);
                visited[i] = false;
            }
        };
        answer = Math.max(answer, L);
    };
    DFS(k, 0);
    return answer;
}