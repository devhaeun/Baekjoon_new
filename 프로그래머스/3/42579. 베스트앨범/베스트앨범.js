function solution(genres, plays) {
    const hash = [];
    for (let i=0; i<genres.length; i++) {
        hash.push({idx: i, genre: genres[i], play: plays[i]});
    }
    
    // 장르별 재생 횟수 배열
    let genreCnt = [];
    hash.forEach(song => {
        let thisGenre = genreCnt.find(v => v.genre === song.genre);
        if (thisGenre) {
            thisGenre.play += song.play;
        } else {
            genreCnt.push({genre: song.genre, play: song.play});
        }
    });
    
    // 재생횟수 많은 순으로 노래와 장르 정렬
    hash.sort((a,b) => b.play - a.play);
    genreCnt.sort((a,b) => b.play - a.play);
    
    // 장르를 기준으로 배열 돌면서 노래 2개씩 넣어준다
    const answer = [];
    genreCnt.forEach(v => {
        let len = 0;
        hash.forEach(song => {
            if (v.genre===song.genre && len<2) {
                len++;
                answer.push(song.idx);
            }
        });
    });
    return answer;
}