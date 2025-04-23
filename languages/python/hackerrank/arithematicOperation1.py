'''
Taks

The provided code stub reads two integers from STDIN, a and b. Add code to print three lines where:
1. The first line contains the sums of the two numbers.
2. The second line contains the difference of the two numbers (first - second).
3. The third line contains the product of the two numbers.

Example 
a = 3
b = 5

Print the following
8
-2
15
'''

'''
SPUEDO CODE:

START
    READ integer input and STORE in variable a
    READ integer input and STORE in variable b
    CALCULATE sum = a + b
    CALCULATE difference = a - b
    CALCULATE product = a * b
    DISPLAY sum
    DISPLAY difference
    DISPLAY product
STOP
'''

if __name__ == '__main__':
    a = int(input("Enter value of a"))
    b = int(input("Enter value of b"))
    print(a+b)
    print(a-b)
    print(a*b)