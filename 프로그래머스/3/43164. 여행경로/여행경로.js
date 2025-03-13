function solution(tickets) {
    const answer = [];
    const len = tickets.length;
    const visited = Array(len).fill(false);
    
    const dfs = (routes) => {
        if (routes.length === len+1) answer.push(routes);
        
        for (let i=0; i<len; i++) {
            const [start, end] = tickets[i];
            if (!visited[i] && routes.at(-1)===start) {
                visited[i] = true;
                dfs([...routes, end]);
                visited[i] = false;
            }
        }
    };
    
    dfs(["ICN"]);
    return answer.sort()[0];
}