function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach(name => {
        map.set(name, map.has(name) ? map.get(name)+1 : 1);
    });
    completion.forEach(name => {
        map.set(name, map.get(name)-1);
    });
    
    for ([key, value] of map) {
        if (value>0) return key;
    }
}