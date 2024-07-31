from collections import deque

def bfs(x, y):
    queue = deque()
    queue.append((x, y))
    visited[x][y] = 1
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and visited[nx][ny] == 0 and maze[nx][ny] == 1:
                queue.append((nx, ny))
                visited[nx][ny] = visited[x][y] + 1

N, M = map(int, input().split())
maze = [list(map(int, input().strip())) for _ in range(N)]
visited = [[0] * M for _ in range(N)]
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

bfs(0, 0)
print(visited[N - 1][M - 1])