total = 0
totalSum = 0

for i in range(20):
    _, time, score = input().split()
    time = float(time)
    if score == 'P':
        continue
    total += time
    if score=='A+':
        totalSum += 4.5*time
    elif score == 'A0':
        totalSum += 4.0*time
    elif score == 'B+':
        totalSum += 3.5*time
    elif score == 'B0':
        totalSum += 3.0*time
    elif score == 'C+':
        totalSum += 2.5*time
    elif score == 'C0':
        totalSum += 2.0*time
    elif score == 'D+':
        totalSum += 1.5*time
    elif score == 'D0':
        totalSum += 1.0*time
        
print('%0.6f'%(totalSum/total))