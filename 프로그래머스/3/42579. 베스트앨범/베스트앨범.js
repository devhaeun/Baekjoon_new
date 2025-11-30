function solution(genres, plays) {
    const n = genres.length;
    
    // 1. 장르 별 재생횟수 구하기
    const genreMap = new Map();
    for (let i=0; i<n; i++) {
        genreMap.set(genres[i], (genreMap.get(genres[i])||0)+plays[i]);
    }
    
    const genreOrder = [];
    for (let [key, val] of genreMap) {
        genreOrder.push({genre: key, count: val});
    }
    genreOrder.sort((a,b) => b.count - a.count);
    
    // 2. 곡 별 재생횟수 구하기
    const playsOrder = [];
    for (let i=0; i<n; i++) {
        playsOrder.push({number: i, plays: plays[i]});
    }
    playsOrder.sort((a,b) => b.plays - a.plays);
    
    // 3. 전체 정렬
    const answer = [];
    for (let g of genreOrder) {
        let cnt = 0;
        for (let p of playsOrder) {
            if (genres[p.number]===g.genre) {
                answer.push(p.number);
                cnt++;
            }
            if (cnt >= 2) break;
        }
    }
    
    return answer;
}