function solution(answers) {
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    for (let i=0; i<answers.length; i++) {
        if (answers[i]==i%5+1) score[0]+=1;
        if (answers[i]==p2[i%8]) score[1]+=1;
        if (answers[i]==p3[i%10]) score[2]+=1;
    }
    // console.log(score);
    
    const max = Math.max(...score);
    const result = [];
    score.map((v,i) => {
        if (v===max) result.push(i+1);
        // console.log(i,v, max);
    })
    return result;
}