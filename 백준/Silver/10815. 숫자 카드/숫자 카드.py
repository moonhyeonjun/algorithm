n = int(input())
n_list = list(map(int, input().split()))
m = int(input())
m_list = list(map(int, input().split()))

n_list.sort()
result = []

for i in m_list:
    start = 0
    end = n - 1
    while start <= end:
        mid = (start + end) // 2
        if n_list[mid] == i:
            result.append(1)
            break
        elif n_list[mid] < i:
            start = mid + 1
        else:
            end = mid - 1
    else:
        result.append(0)

print(' '.join(map(str, result)))