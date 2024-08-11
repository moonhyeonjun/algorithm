import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass

def dfs(start, depth):
    if depth == M:
        print(' '.join(map(str, result)))
        return
    for i in range(start, N+1):
        result.append(i)
        dfs(i+1, depth+1)
        result.pop()

N, M = map(int, input().split())
result = []
dfs(1, 0)