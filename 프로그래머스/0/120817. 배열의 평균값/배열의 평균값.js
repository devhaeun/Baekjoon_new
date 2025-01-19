function solution(numbers) {
    let mean = 0;
    numbers.map(i => mean+=i);
    return mean/numbers.length
}