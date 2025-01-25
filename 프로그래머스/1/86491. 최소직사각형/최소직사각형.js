function solution(sizes) {
    let maxw=0;
    let maxh=0;
    
    for (let i=0; i<sizes.length; i++) {
        sizes[i].sort((a,b)=>a-b);
        if (sizes[i][0]>maxw) maxw=sizes[i][0];
        if (sizes[i][1]>maxh) maxh=sizes[i][1];
    }
    return maxw*maxh
}