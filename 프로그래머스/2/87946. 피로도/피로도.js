function solution(k, dungeons) {
    let max = 0;
    
    const func = (arr, idx, cnt, hp) => {
        const fixed = arr[idx];
        const rest = [...arr.slice(0,idx), ...arr.slice(idx+1)];
        hp -= fixed[1];
        
        // 모든 던전 돌았으면 리턴
        if (arr.length===1) {
            max = Math.max(max, cnt);
            return;
        }
        
        // 다음 던전 선택
        for (let i=0; i<rest.length; i++) {
            if (hp>=rest[i][0]) func(rest, i, cnt+1, hp);
            else max = Math.max(max, cnt);
        }
    };
    
    for (let i=0; i<dungeons.length; i++) {
        func(dungeons, i, 1, k);
    };
    
    return max;
}