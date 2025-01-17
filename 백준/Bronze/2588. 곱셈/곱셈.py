num1 = int(input())
num2 = input()

for i in range(3,0,-1):
	print(num1*int(num2[i-1]))

print(num1*int(num2))