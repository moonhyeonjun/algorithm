# 입력 받기
short_men = [int(input()) for _ in range(9)]
seven_short_temp = [ ]  

# 깊이 우선 탐색 함수
def dfs(depth, start):
    if depth == 7:  
        if sum(seven_short_temp) == 100:  
            for j in sorted(seven_short_temp):  
                print(j)
            exit()  
        else:  
            return  

    for i in range(start, len(short_men)): 
        seven_short_temp.append(short_men[i])  
        dfs(depth + 1, i + 1)  
        seven_short_temp.pop() 

# 깊이 우선 탐색 실행
dfs(0, 0)