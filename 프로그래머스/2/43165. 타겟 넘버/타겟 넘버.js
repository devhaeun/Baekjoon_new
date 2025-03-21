function solution(numbers, target) {
    let cnt = 0;
    
    const DFS = (sum, idx) => {
        if (idx>=numbers.length) {
            if (sum===target) cnt++;
            return;
        }
        
        DFS(sum+numbers[idx], idx+1);
        DFS(sum-numbers[idx], idx+1);
    }
    DFS(0, 0);
    return cnt;
}