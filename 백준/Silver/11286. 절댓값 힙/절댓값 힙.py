from sys import stdin
import heapq

heap = []

for _ in range(int(input())):
    x = int(stdin.readline())

    if x == 0:
        if heap:
            val, sgn = heapq.heappop(heap)
            print(val * sgn)
        else:
            print(0)
    else:
        heapq.heappush(heap, [abs(x), x//abs(x)])