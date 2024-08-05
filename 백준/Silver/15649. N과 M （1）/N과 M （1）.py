def dfs(depth, n, m):
    if depth == m:
        print(' '.join(map(str, result)))
        return
    for i in range(1, n+1):
        if i not in result:
            result.append(i)
            dfs(depth+1, n, m)
            result.pop()

n, m = map(int, input().split())
result = []
dfs(0, n, m)