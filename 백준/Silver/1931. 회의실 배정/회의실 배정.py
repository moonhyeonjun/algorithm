n = int(input())
meetings = [list(map(int, input().split())) for _ in range(n)]
meetings.sort(key=lambda x: (x[1], x[0]))
    
end = 0
cnt = 0
for s, e in meetings:
    if s >= end:
        end = e
        cnt += 1
        
print(cnt)