'''
Task
The provided code stub reads an integer, n, from STDIN. For all non-negative integers i < n, print i square.
Example
n = 3
The list of non-negative integers that are less than n = 3 is [0, 1, 2]. Print the square of each number on a separate line.
0
1
4

SPUEDO CODE:
START
    READ integer input and STORE in variable n
    FOR i in range from 0 to n-1
        CALCULATE square = i * i
        DISPLAY square
STOP
'''

if __name__ == '__main__':
    n = int(input("Enter value of n"))
    for i in range(n):
        print(i*i, end="\n")