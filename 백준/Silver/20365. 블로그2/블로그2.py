n = int(input())
colors = input()

if colors[0]=='R':
    print(colors.count('RB')+1)
else:
    print(colors.count('BR')+1)