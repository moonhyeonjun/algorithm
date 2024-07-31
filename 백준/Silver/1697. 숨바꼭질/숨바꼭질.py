from collections import deque

n, k = map(int, input().split())
visited = [0] * 100001

def bfs(n, k):
    q = deque()
    q.append(n)
    visited[n] = 1
    while q:
        x = q.popleft()
        if x == k:
            return visited[x] - 1
        for nx in (x-1, x+1, x*2):
            if 0 <= nx < 100001 and not visited[nx]:
                visited[nx] = visited[x] + 1
                q.append(nx)

print(bfs(n, k))