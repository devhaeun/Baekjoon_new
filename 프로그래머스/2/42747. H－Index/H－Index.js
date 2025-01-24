function solution(citations) {
    citations.sort((a,b)=>a-b);
    
    const map = new Map();
    citations.map(v => {
        if (map.has(v)) map.set(v, map.get(v)+1);
        else map.set(v, 1);
    });
    // console.log(map)
    
    let len = citations.length;
    let maxh = 0;
    for (let i=0; i<citations[citations.length-1]; i++) {
        if (len>=i) {
            // console.log('실행');
            if (map.has(i)) len-=map.get(i);
            maxh = i;
            // console.log('maxh', maxh);
        } else break;
    }
    return maxh;
}