const fact = (n) => {
    let ans = 1n;
    for (let i=1n; i<=n; i++) ans*=i;
    return ans;
}

function solution(balls, share) {
    balls = BigInt(balls);
    share = BigInt(share);
    return fact(balls)/(fact(balls-share)*fact(share));
}