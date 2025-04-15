board = []
for _ in range(5):
    arr = list(map(int, input().split()))
    board.append(arr)
call = []
for _ in range(5):
    arr = list(map(int, input().split()))
    call.append(arr)

def solution(board, call):
    count = 0
    bingo = 0
    rows = {0:0, 1:0, 2:0, 3:0, 4:0}
    cols = {0:0, 1:0, 2:0, 3:0, 4:0}
    # 대각선 체크
    left_diag = 0
    right_diag = 0
    
    for i in range(5):
        for j in range(5):
            number = call[i][j]
            for k in range(5):
                if number in board[k]:
                    count+=1
                    col_idx = board[k].index(number)
                    rows[k]+=1
                    cols[col_idx]+=1
                    if rows[k]==5:
                        bingo+=1
                    if cols[col_idx]==5:
                        bingo+=1
                    if left_diag<5 and k==col_idx:
                        left_diag+=1
                        if left_diag==5:
                            bingo+=1
                    if right_diag<5 and k+col_idx==4:
                        right_diag+=1
                        if right_diag==5:
                            bingo+=1
                    break
            if bingo>=3:
                #print(count, number, bingo)
                return count

print(solution(board, call))
