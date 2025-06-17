function solution(n, arr1, arr2) {
    // OR연산 -> 2진수 변환
    const map = [];
    for (let i=0; i<n; i++) {
        const result = arr1[i] | arr2[i];
        map.push(result.toString(2).padStart(n, '0').replaceAll('1','#').replaceAll('0',' '));
    }
    return map;
}