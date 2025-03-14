function solution(game_board, table) {
    let answer = 0;
    const length = table.length;
    // spaces: 게임판 빈 칸 리스트
    // puzzles: 테이블 퍼즐 리스트
    let spaces = [], puzzles = [];
    
    for (let y=0; y<length; y++) {
        for (let x=0; x<length; x++) {
            // game_board 빈칸(0)인 경우
            if (game_board[y][x]===0) {
                let space = [];
                dfs(game_board, x, y, space, 0);
                space = rearrange(space);
                space = rotate(space);
                spaces.push(space);
            }
            
            // table 칸 블록(1)
            if (table[y][x]===1) {
                let puzzle=[];
                dfs(table, x, y, puzzle, 1);
                puzzle = rearrange(puzzle);
                puzzle = rotate(puzzle);
                puzzles.push(puzzle);
            }
        }
    }
    
    for (let space of spaces) {
        for (let i=0; i<puzzles.length; i++) {
            if (JSON.stringify(space)===JSON.stringify(puzzles[i])) {
                answer += puzzles[i].length;
                puzzles = puzzles.map((p,idx) => idx===i ? [] : p);
                break;
            }
        }
    }
    
    return answer;
}

const dfs = (table, x, y, list, find) => {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const stack = [[x, y]];
    const len = table.length;
    list.push([x,y]);
    
    while (stack.length) {
        let [a, b] = stack.pop();
        table[y][x] = -1;
        
        for (let i=0; i<4; i++) {
            const moveX = a+dx[i];
            const moveY = b+dy[i];
            
            // 이동한 좌표가 테이블에서 벗어난 경우 제외
            if (moveX<0 || moveX>=len) continue;
            if (moveY<0 || moveY>=len) continue;
            
            // 이동한 좌표값이 찾고자 하는 값과 일치하면
            // stack과 list에 push
            // 다녀갔다는 표시 (-1 처리)
            if (table[moveY][moveX]===find) {
                table[moveY][moveX] = -1;
                stack.push([moveX, moveY]);
                list.push([moveX, moveY]);
            }
        }
    }
};

// 블록or빈칸을 (0,0)으로 이동시켜 반환
const rearrange = (list) => {
    const minX = Math.min(...list.map(c=>c[0]));
    const minY = Math.min(...list.map(c=>c[1]));
    return list.map(c => [c[0]-minX, c[1]-minY]).sort();
}

// 회전
const rotate = (list) => {
    if (list.length===1) return list;
    let result = [];
    let shape = list.map(l => l);
    let width = Math.max(...shape.map(s=>s[1]))-Math.min(...shape.map(s=>s[1]));
    let height = Math.max(...shape.map(s=>s[0]))-Math.min(...shape.map(s=>s[0]));
    
    for (let i=0; i<4; i++) {
        let temp = rearrange(shape.map(c=>[c[1], width-c[0]]));
        shape = temp;
        result.push(shape);
        let w = width;
        width = height;
        height = w;
    }
    
    return result.sort()[0];
}