function solution(polynomial) {
    // 1. 띄어쓰기 단위로 나누어 배열로 변환
    const arr = polynomial.split(" ");
    // 2. x가 없으면 Number로 변환 후 덧셈
    // 3. x가 있으면 x를 제외한 숫자를 따로 덧셈
    let sumx = 0;
    let sum_ = 0;
    for (let i=0; i<arr.length; i+=2) {
        arr[i].includes('x')
        ? (
            arr[i]==='x'
            ? sumx += 1
            : sumx += Number(arr[i].slice(0,-1))
        )
        : sum_ += Number(arr[i])
    }
    // 4. `${String(sum_x)x + ${sum_}`
    let answer = ''
    if (sumx===0) answer = `${sum_}`;
    else if (sumx===1) answer += 'x'
    else answer += `${sumx}x`
    if (sum_!=0 && sumx!=0) answer += ` + ${sum_}`
    return answer;
}