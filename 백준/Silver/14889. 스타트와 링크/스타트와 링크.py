from itertools import combinations

N = int(input())
S = [list(map(int, input().split())) for _ in range(N)]
members = [i for i in range(N)]
teams = list(combinations(members, N//2) )
min_ability = 100*20*20

for team in teams:
    start_team = team
    link_team = tuple(set(members) - set(team))
    start_ability = 0
    link_ability = 0
    for i in range(N//2):
        for j in range(i+1, N//2):
            start_ability += S[start_team[i]][start_team[j]] + S[start_team[j]][start_team[i]]
            link_ability += S[link_team[i]][link_team[j]] + S[link_team[j]][link_team[i]]
    min_ability = min(min_ability, abs(start_ability - link_ability))
    
print(min_ability)