import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass
input = sys.stdin.readline

from collections import deque

def bfs(v):
    q = deque([v])
    visited[v] = True
    while q:
        v = q.popleft()
        for e in adj[v]:
            if not visited[e]:
                visited[e] = True
                q.append(e)

n, m = map(int, input().split())
adj = [[] for _ in range(n+1)]
visited = [False] * (n+1)
count = 0

for _ in range(m):
    u, v = map(int, input().split())
    adj[u].append(v)
    adj[v].append(u)

for i in range(1, n+1):
    if not visited[i]:
        count += 1
        bfs(i)

print(count)