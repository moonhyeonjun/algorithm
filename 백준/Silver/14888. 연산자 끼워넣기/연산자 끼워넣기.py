def dfs(idx, result, add, sub, mul, div):
    global max_result, min_result
    if idx == n:
        max_result = max(result, max_result)
        min_result = min(result, min_result)
        return
    if add:
        dfs(idx + 1, result + nums[idx], add - 1, sub, mul, div)
    if sub:
        dfs(idx + 1, result - nums[idx], add, sub - 1, mul, div)
    if mul:
        dfs(idx + 1, result * nums[idx], add, sub, mul - 1, div)
    if div:
        dfs(idx + 1, int(result / nums[idx]), add, sub, mul, div - 1)

n = int(input())
nums = list(map(int, input().split()))
add, sub, mul, div = map(int, input().split())
max_result = -1e9
min_result = 1e9
dfs(1, nums[0], add, sub, mul, div)
print(max_result)
print(min_result)