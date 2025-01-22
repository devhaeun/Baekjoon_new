function solution(array, commands) {
    const answer = [];
    for ([i,j,k] of commands) {
        const arrS = array.slice(i-1,j);
        arrS.sort((a,b)=>a-b);
        // console.log(arrS);
        answer.push(arrS[k-1])
    };
    return answer
}