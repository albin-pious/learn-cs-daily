'''
Task
The provided code stub reads two integers,  and , from STDIN.

Add logic to print two lines. The first line should contain the result of integer division,  // . The second line should contain the result of float division,  / .

No rounding or formatting is necessary.

Example

a = 3
b = 5

The result of the integer division 3 // 5 = 0.
The result of the float division is 3 / 5 = 0.6.
'''

'''
SPUEDO CODE:

START
    READ integer input and STORE in variable a
    READ integer input and STORE in variable b
    CALCULATE integer division = a // b
    CALCULATE float division = a / b
    DISPLAY integer division
    DISPLAY float division
STOP
'''

if __name__ == '__main__':
    a = int(input("Enter a value of a"))
    b = int(input("Enter a value of b"))
    print(a // b)
    print(a / b)

