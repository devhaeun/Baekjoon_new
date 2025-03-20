function solution(operations) {
    const answer = [];
    operations.map(v => {
        v = v.split(" ");
        
        if (v[0]==='I') answer.push(parseInt(v[1]));
        if (v[0]==='D') {
            if (v[1]==='1') answer.splice(answer.indexOf(Math.max(...answer)), 1);
            else answer.splice(answer.indexOf(Math.min(...answer)),1);
        }
    });
    
    return answer.length===0 ? [0,0] : [Math.max(...answer),Math.min(...answer)];
}