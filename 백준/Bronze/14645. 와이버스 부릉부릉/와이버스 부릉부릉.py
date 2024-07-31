N, K = map(int, input().split())
bus = K

for i in range(N):
    A, B = map(int, input().split())
    bus += A
    bus -= B
    if bus < 0:
        print("비와이")
        break
else:
    print("비와이")