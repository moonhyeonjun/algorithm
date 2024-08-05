def fibonacci(n):
    if n == 0:
        return 0, 1
    elif n == 1:
        return 1, 0
    else:
        zero, one = fibonacci(n-1)
        return zero + one, zero
    
for _ in range(int(input())):
    zero, one = fibonacci(int(input()))
    print(one, zero)