function solution(rsp) {
    let ans = {
        '0':'5',
        '2':'0',
        '5':'2'
    };
    return [...rsp].map(v=>ans[v]).join('');
}