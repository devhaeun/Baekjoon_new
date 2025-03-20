function solution(queue1, queue2) {
    let cnt = 0;
    let sum1 = queue1.reduce((acc,cur)=>acc+cur);
    let sum2 = queue2.reduce((acc,cur)=>acc+cur);
    const totalLen = queue1.length + queue2.length;
    let idx1 = 0, idx2 = 0;
    
    while (sum1!==sum2) {
        if (sum1>sum2) {
            sum1-=queue1[idx1];
            queue2.push(queue1[idx1]);
            sum2+=queue1[idx1++];
        } else {
            sum2-=queue2[idx2];
            queue1.push(queue2[idx2]);
            sum1+=queue2[idx2++];
        }
        cnt++;
        
        if (idx1>totalLen || idx2>totalLen) return -1;
    }
    return cnt;
}