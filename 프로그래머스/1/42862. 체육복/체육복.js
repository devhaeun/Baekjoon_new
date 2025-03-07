function solution(n, lost, reserve) {
    const students = Array(n).fill(1);
    lost.forEach(v=>students[v-1]-=1);
    reserve.forEach(v=>students[v-1]+=1);
    
    for (let i=0; i<n; i++) {
        if (students[i]===0) {
            if (i>0 && students[i-1]===2) {
                students[i-1]=1;
                students[i]=1;
            } else if (i<n-1 && students[i+1]===2) {
                students[i]=1;
                students[i+1]=1;
            }
        }
    }
    
    let count = n;
    students.map(v => {
        if (v===0) count--;
    });
    return count;
}