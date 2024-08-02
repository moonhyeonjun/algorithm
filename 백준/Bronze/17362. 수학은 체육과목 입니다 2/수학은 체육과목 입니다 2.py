n = int(input())
finger = n % 8

if finger == 1:
    print(1)
elif finger in [2, 0]:
    print(2)
elif finger in [3, 7]:
    print(3)
elif finger in [4, 6]:
    print(4)
elif finger == 5:
    print(5)