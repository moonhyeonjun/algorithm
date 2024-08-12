import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass

from collections import deque

input = sys.stdin.read
data = input().splitlines()

n = int(data[0])
q = deque()
output = []

for i in range(1, n + 1):
    cmd = data[i].split()
    
    if cmd[0] == 'push':
        q.append(cmd[1])
    elif cmd[0] == 'pop':
        output.append(q.popleft() if q else -1)
    elif cmd[0] == 'size':
        output.append(len(q))
    elif cmd[0] == 'empty':
        output.append(0 if q else 1)
    elif cmd[0] == 'front':
        output.append(q[0] if q else -1)
    elif cmd[0] == 'back':
        output.append(q[-1] if q else -1)

sys.stdout.write('\n'.join(map(str, output)) + '\n')