function solution(orders, course) {
    const answer = [];
    
    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber===1) return arr.map(el => [el]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index+1);
            const combinations = getCombinations(rest, selectNumber-1);
            const attached = combinations.map(el => [fixed, ...el]);
            results.push(...attached);
        });
        return results;
    }
    
    course.forEach(count => {
        const hashMap = new Map();
        orders.forEach(element => {
            element = element.split("");
            const divArr = getCombinations(element, count);
            for (let i=0; i<divArr.length; i++) {
                let word = divArr[i].sort().join("");
                hashMap.set(word, hashMap.has(word) ?
                           hashMap.get(word)+1 : 1);
            }
        });
        
        let maxValue = 0;
        for (let [key, val] of hashMap) {
            if (maxValue<val && key.length>=2 && val>=2) {
                maxValue = val;
            }
        }
        
        for (let [key, val] of hashMap) {
            if (maxValue===val) answer.push(key);
        }
        
        hashMap.clear();
    });
    
    return answer.sort();
}