function timeToMin(time) {
    const [hh, mm] = time.split(':').map(Number);
    return hh*60 + mm;
}

function solution(plans) {
    const sortedPlans = plans.map(([sbj, time, count]) => [sbj, timeToMin(time), Number(count)])
    .sort((a,b) => a[1] - b[1]);
    // console.log(sortedPlans);
    
    const stack = [];
    
    while (sortedPlans.length) {
        const [subject, time, count] = sortedPlans.shift();
        
        stack.forEach((val, idx) => {
            if (time < val[1]) stack[idx][1] += count;
        });
        stack.push([subject, time+count]);
        // console.log(stack);
    }

    const answer = stack.sort((a,b) => a[1]-b[1]).map(v => v[0]);
    return answer;
}