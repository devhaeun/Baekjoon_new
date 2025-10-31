function solution(participant, completion) {
    const map = new Map();
    
    for (let part of participant) {
        map.set(part, map.has(part) ? map.get(part)+1 : 1);
    }
    for (let com of completion) {
        map.set(com, map.get(com)-1);
    }
    
    for (let [key, value] of map) {
        if (value>0) return key;
    }
}