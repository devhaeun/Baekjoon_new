function solution(s) {
    const answer = s.slice(2,-2).split('},{')
        .map(v=>v.split(',').map(i=>Number(i)))
        .sort((arr1,arr2)=>arr1.length-arr2.length)
        .reduce((acc,cur) => [...acc, ...cur.filter(v=>!acc.includes(v))],[]);
    return answer;
}