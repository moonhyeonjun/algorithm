import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass

s = input()
if s[1] == '0':
    print(10 + int(s[2:]))
else:
    print(int(s[0]) + int(s[1:]))    