function solution(numbers, target) {
    let answer = 0;
    function dfs(i, result) {
        if (i===numbers.length) {
            if (result===target) answer++;
            return;
        }
        else {
            dfs(i+1, result+numbers[i]);
            dfs(i+1, result-numbers[i]);
        }
    }
    dfs(0, 0);
    return answer;
}