function solution(quiz) {
    const result = [];
    quiz.map(v => {
        const q = v.split(" ");
        const a = Number(q[0]);
        let b = Number(q[2]);
        const c = Number(q[4]);
        
        if (q[1]==='-') {
            b = -b;
        };
        a+b===c ? result.push("O") : result.push("X");
    });
    return result;
}