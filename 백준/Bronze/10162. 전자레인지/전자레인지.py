import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass

T = int(input())
A = 300
B = 60
C = 10
a = T // A
T = T % A
b = T // B
T = T % B
c = T // C
T = T % C
if T == 0:
    print(a, b, c)
else:
    print(-1)