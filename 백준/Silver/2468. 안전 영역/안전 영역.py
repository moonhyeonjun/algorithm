from collections import deque

def bfs(x, y, h):
    q = deque()
    q.append((x, y))
    visited[x][y] = 1

    while q:
        x, y = q.popleft()
        for dx, dy in d:
            nx, ny = x + dx, y + dy
            if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and area[nx][ny] > h:
                visited[nx][ny] = 1
                q.append((nx, ny))

n = int(input())
area = [list(map(int, input().split())) for _ in range(n)]
d = [(1, 0), (-1, 0), (0, 1), (0, -1)]
max_h = max(map(max, area))
ans = 0

for h in range(max_h):
    visited = [[0] * n for _ in range(n)]
    cnt = 0
    for i in range(n):
        for j in range(n):
            if not visited[i][j] and area[i][j] > h:
                bfs(i, j, h)
                cnt += 1
    ans = max(ans, cnt)

print(ans)