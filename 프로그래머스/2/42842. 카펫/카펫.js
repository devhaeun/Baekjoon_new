function solution(brown, yellow) {
    let answer;
    for (let i=1; i<=Math.sqrt(yellow); i++) {
        if (yellow%i!==0) continue;
        if ((yellow/i+2+i)*2===brown) {
            answer = [yellow/i+2, i+2];
            break;
        }
    }
    return answer;
}