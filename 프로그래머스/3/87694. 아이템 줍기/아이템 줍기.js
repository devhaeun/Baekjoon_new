function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 1) 좌표 2배로 늘린다
    characterX*=2;
    characterY*=2;
    itemX*=2;
    itemY*=2;
    let doubleRec = rectangle.map(rec => rec.map(point => point*2));
    
    // 2) 위-아래-우-좌 방향 설정
    const moveX = [1, -1, 0, 0];
    const moveY = [0, 0, 1, -1];
    
    // 3) 시작 위치를 최초의 큐에 담기
    const start = [characterX, characterY, 0];
    let queue = [start];
    
    // 4) 움직일 수 있는 좌표 -> 2차원 배열
    let range = Array.from({ length: 103 }, () => Array(103).fill(0));
    // 5) 테두리는 1, 테두리 내부는 2로 값 변경
    doubleRec.forEach(([x1, y1, x2, y2]) => {
        for (let i=x1; i<=x2; i++) {
            for (let j=y1; j<=y2; j++) {
                if (i===x1 || i===x2 || j===y1 || j===y2) {
                    if (range[i][j]===0) range[i][j]=1;
                } else range[i][j]=2;
            }
        }
    });
    
    // 6) 시작 위치 0으로 변경
    range[characterX][characterY] = 0;
    
    // 7) 큐에 담긴 값이 없을 때까지 반복
    while (queue.length>0) {
        // 8) 처음 값을 가져와 BFS 탐색
        let [x, y, cnt] = queue.shift();
        
        // 9) 현재 위치가 도착 위치에 도달하면 리턴
        if (x===itemX && y===itemY) return cnt/2;
        
        // 10) 도착하지 않았다면 움직일 수 있는 좌표값과 횟수 큐에 담기
        for (let i=0; i<4; i++) {
            let chX = x+moveX[i];
            let chY = y+moveY[i];
            if (range[chX][chY]===1) {
                queue.push([chX, chY, cnt+1]);
                range[chX][chY]=0;
            }
        }
    }
    return 0;
}