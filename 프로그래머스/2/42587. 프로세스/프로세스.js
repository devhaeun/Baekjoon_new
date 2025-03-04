function solution(priorities, location) {
    const idxs = Array(priorities.length).fill().map((v,i)=>i);
    let maxVal = Math.max(...priorities);
    let answer = 0;
    
    while (priorities.length !== 0) {
        if (priorities[0] < maxVal) {
            priorities.push(priorities.shift());
            idxs.push(idxs.shift());
        } else {
            answer++;
            priorities.shift();
            if (idxs.shift() === location) return answer;
            maxVal = Math.max(...priorities);
        }
    }
}