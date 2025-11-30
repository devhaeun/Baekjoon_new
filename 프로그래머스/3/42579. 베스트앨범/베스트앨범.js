function solution(genres, plays) {
    const n = genres.length;
    
    // 1. 장르별로 곡 정보 그룹화 + 총 재생횟수 계산
    const genreMap = new Map();
    
    for (let i = 0; i < n; i++) {
        if (!genreMap.has(genres[i])) {
            genreMap.set(genres[i], {
                totalPlays: 0,
                songs: []
            });
        }
        
        const genreInfo = genreMap.get(genres[i]);
        genreInfo.totalPlays += plays[i];
        genreInfo.songs.push({ number: i, plays: plays[i] });
    }
    
    // 2. 장르를 총 재생횟수 기준으로 정렬
    const genreOrder = [];
    for (let [genre, info] of genreMap) {
        genreOrder.push({ genre, totalPlays: info.totalPlays, songs: info.songs });
    }
    genreOrder.sort((a, b) => b.totalPlays - a.totalPlays);
    
    // 3. 각 장르 내에서 곡 정렬 후 상위 2곡 선택
    const answer = [];
    for (let genreInfo of genreOrder) {
        // 각 장르 내에서만 정렬
        genreInfo.songs.sort((a, b) => {
            if (b.plays !== a.plays) {
                return b.plays - a.plays;  // 재생횟수 내림차순
            }
            return a.number - b.number;     // 고유번호 오름차순
        });
        
        // 상위 2곡까지만 선택
        const limit = Math.min(2, genreInfo.songs.length);
        for (let i = 0; i < limit; i++) {
            answer.push(genreInfo.songs[i].number);
        }
    }
    
    return answer;
}