import sys
try:
    sys.stdin = open('run/input.txt', 'r')
except FileNotFoundError:
    pass

from collections import Counter

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
find = list(map(int, input().split()))

cards = Counter(cards)

for f in find:
    print(cards[f], end=' ')
print()