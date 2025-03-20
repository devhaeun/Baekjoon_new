function solution(survey, choices) {
    const score = [3,2,1,0];
    const type = {
        R: 0,
        T: 0,
        C: 0,
        F: 0,
        J: 0,
        M: 0,
        A: 0,
        N: 0
    }
    
    for (let i=0; i<choices.length; i++) {
        const [n,y] = survey[i].split('');
        if (choices[i]===4) continue;
        if (choices[i]<4) type[n]+=score[choices[i]-1];
        else type[y]+=score[7-choices[i]];
    }
    
    let answer = "";
    type["R"]>=type["T"] ? answer+="R" : answer+="T";
    type["C"]>=type["F"] ? answer+="C" : answer+="F";
    type["J"]>=type["M"] ? answer+="J" : answer+="M";
    type["A"]>=type["N"] ? answer+="A" : answer+="N";
    
    return answer;
}