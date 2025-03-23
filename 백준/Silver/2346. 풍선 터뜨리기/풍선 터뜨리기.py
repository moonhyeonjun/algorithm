import sys

input = sys.stdin.readline
N = int(input())

balloons = list(map(int, input().split()))
popped = [False] * N
result = []
current = 0

for i in range(N):
    result.append(current + 1)
    popped[current] = True

    if i == N - 1:
        break

    move = balloons[current]

    while move != 0:
        current = (current + (1 if move > 0 else -1) + N) % N
        if not popped[current]:
            move -= 1 if move > 0 else -1

print(' '.join(map(str, result)))