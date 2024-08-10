import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass

n, m = map(int, input().split())
board = [input() for _ in range(n)]
result = []

for i in range(n-7):
    for j in range(m-7):
        cnt1 = 0
        cnt2 = 0
        for x in range(i, i+8):
            for y in range(j, j+8):
                if (x+y) % 2 == 0:
                    if board[x][y] != 'W':
                        cnt1 += 1
                    if board[x][y] != 'B':
                        cnt2 += 1
                else:
                    if board[x][y] != 'B':
                        cnt1 += 1
                    if board[x][y] != 'W':
                        cnt2 += 1
        result.append(cnt1)
        result.append(cnt2)

print(min(result))