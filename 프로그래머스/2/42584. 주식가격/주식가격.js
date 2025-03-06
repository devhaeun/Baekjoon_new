function solution(prices) {
    const answer = [];
    pl = prices.length;
    
    for (let i=0; i<pl; i++) {
        let count=0;
        for (let j=i+1; j<pl; j++) {
            count++;
            if (prices[i]>prices[j]) break;
        }
        answer.push(count);
    }
    return answer;
}