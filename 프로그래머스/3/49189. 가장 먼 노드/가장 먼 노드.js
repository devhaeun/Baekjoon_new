function solution(n, edge) {
    const visited = new Array(n+1).fill(false);
    const level = new Array(n+1).fill(0);
    const queue = [1];
    visited[1] = true;
    
    while (queue.length>0) {
        const head = queue.shift();
        const lev = level[head] + 1;
        
        for (let e of edge) {
            if (e[0]===head && !visited[e[1]]) {
                queue.push(e[1]);
                visited[e[1]] = true;
                level[e[1]] = lev;
            } else if (e[1]===head && !visited[e[0]]) {
                queue.push(e[0]);
                visited[e[0]] = true;
                level[e[0]] = lev;
            }
        }
    }
    
    const maxLevel = level.reduce((a,b) => Math.max(a,b), -Infinity);
    return level.filter(i => i===maxLevel).length;
}