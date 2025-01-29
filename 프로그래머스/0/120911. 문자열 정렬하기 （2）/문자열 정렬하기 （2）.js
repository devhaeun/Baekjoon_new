function solution(my_string) {
    let result = [...my_string.toLowerCase()].sort();
    return result.join('');
}