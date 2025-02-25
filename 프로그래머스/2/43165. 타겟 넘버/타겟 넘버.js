function solution(numbers, target) {
    let count = 0;
    const dfs = (summ, num, idx) => {
        summ += num;
        if (idx===numbers.length-1) {
            summ===target ? count+=1 : count+=0;
        } else {
            dfs(summ, numbers[idx+1], idx+1);
            dfs(summ, -numbers[idx+1], idx+1);
        }
    }
    dfs(0, numbers[0], 0);
    dfs(0, -numbers[0], 0);
    
    return count;
}