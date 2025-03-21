function solution(genres, plays) {
    const hash = [];
    for (let i=0; i<genres.length; i++) {
        hash.push({idx: i, genre: genres[i], play: plays[i]});
    };
    
    const genreCnt = [];
    hash.forEach(song => {
        const thisGenre = genreCnt.find(v => v.genre===song.genre);
        if (thisGenre) thisGenre.play += song.play;
        else genreCnt.push({genre: song.genre, play: song.play});
    });
    
    // 두 배열 내림차순 정렬
    hash.sort((a,b) => a.play===b.play ? a.idx-b.idx : b.play-a.play);
    genreCnt.sort((a,b) => b.play-a.play);
    
    console.log(hash);
    
    // 리턴
    const result = [];
    genreCnt.forEach(genre => {
        let cnt=0;
        hash.forEach(song => {
            if (song.genre===genre.genre && cnt<2) {
                result.push(song.idx);
                cnt++;
            }
        });
    });
    return result;
}