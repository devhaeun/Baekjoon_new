function solution(strings, n) {
    const answer = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    alphabet.forEach(a => {
        const arr = [];
        strings.forEach(s => {
            if (s[n]===a) arr.push(s);
        });
        if (arr.length===0) return;
        arr.length>1
        ? answer.push(...arr.sort())
        : answer.push(...arr);
    });
    
    return answer;
}