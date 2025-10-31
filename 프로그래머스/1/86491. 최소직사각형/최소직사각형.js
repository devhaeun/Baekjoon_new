function solution(sizes) {
    let width=0, height=0;
    
    for (let size of sizes) {
        const w = Math.max(...size);
        const h = Math.min(...size);
        
        width = Math.max(w, width);
        height = Math.max(h, height);
    }
    
    return width*height;
}