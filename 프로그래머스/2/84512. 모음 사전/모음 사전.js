function solution(word) {
    let count = 0;
    let flag = false;
    const vowels = ["A", "E", "I", "O", "U"];
    
    const dfs = (cur) => {
        if (cur.length > 5 || flag) return;
        
        if (cur===word) {
            flag = true;
            return;
        }
        
        count++;
        for (let i=0; i<5; i++) {
            dfs(cur + vowels[i]);
        }
    }
    
    dfs("");
    return count;
}