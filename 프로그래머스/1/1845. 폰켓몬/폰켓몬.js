function solution(nums) {
    const n = Math.floor(nums.length/2);
    const ans = [];
    nums.map(i => {
        if (!(ans.includes(i))) ans.push(i);
    });
    // console.log(ans)
    if (ans.length<n) return ans.length
    else return n
}