function solution(n, wires) {
    let answer = Infinity;
    
    const graph = Array.from({ length: n+1 }, () => []);
    
    wires.forEach(([v1,v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    function countNodes(v, visited) {
        visited[v] = true;
        let count = 1;
        for (let next of graph[v]) {
            if (!visited[next]) {
                count += countNodes(next, visited);
            }
        }
        return count;
    }
    
    for (let [v1,v2] of wires) {
        const visited = Array(n+1).fill(false);
        
        visited[v2] = true;
        const subtreeSize = countNodes(v1, visited);
        
        const diff = Math.abs(subtreeSize-(n-subtreeSize));
        answer = Math.min(answer, diff);
    }
    
    return answer;
}