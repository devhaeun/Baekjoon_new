function solution(progresses, speeds) {
    const days = [];
    progresses.map((v,i) =>
        days.push(Math.ceil((100-v)/speeds[i]))
    );
    console.log(days);
    
    const ans = [0];
    let count = 0;
    let stdday = days[0];
    const pl = progresses.length;
    for (let i=0, j=0; i<pl; i++) {
        if (days[i]<=stdday) {
            ans[j]+=1;
        }
        else {
            ans[++j]=1;
            stdday = days[i];
        }
    }
    return ans;
}