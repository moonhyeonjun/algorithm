def z(n, x, y):
    if n == 1:
        return 2*x + y
    n //= 2
    for i in range(2):
        for j in range(2):
            if x < n*(i+1) and y < n*(j+1):
                return z(n, x-n*i, y-n*j) + n*n*(2*i+j)
            
N, r, c = map(int, input().split())
print(z(2**N, r, c))