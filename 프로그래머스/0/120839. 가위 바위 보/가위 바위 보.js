function solution(rsp) {
    let answer = [];
    rsp = [...rsp];
    rsp.map(i => {
        i === '0' ? answer.push('5') :
        i === '2' ? answer.push('0') :
        answer.push('2')
    });
    return answer.join('')
}