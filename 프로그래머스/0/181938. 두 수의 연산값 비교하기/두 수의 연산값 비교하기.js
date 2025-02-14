function solution(a, b) {
    const ans1 = parseInt(`${a}${b}`);
    const ans2 = 2*a*b;
    
    console.log(ans1, ans2);
    return ans1>=ans2 ? ans1 : ans2
}