function solution(array, height) {
    let count = 0;
    array.map(v => {
        if (v>height) count++
    })
    return count;
}