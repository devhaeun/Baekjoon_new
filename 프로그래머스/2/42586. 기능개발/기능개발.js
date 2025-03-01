function solution(progresses, speeds) {
    const days = [];
    progresses.map((v,i) =>
        days.push(Math.ceil((100-v)/speeds[i]))
    );
    console.log(days);
    
    const ans = [];
    let count = 0;
    let stdday = 0;
    const pl = progresses.length;
    for (let i=0; i<pl; i++) {
        if (i==0) {
            stdday = days[i];
            count ++;
            continue;
        }
        if (days[i]>stdday) {
            ans.push(count);
            count = 1;
            stdday = days[i];
        }
        else count++;
        if (i==pl-1) ans.push(count);
    }
    return ans;
}