Everything in Javascript happens inside an Execution Context.

Execution Context:
------------------
| Global Context  |
|----------------|
| Function A ()   |
|----------------|
| Function B ()   |
|----------------|
|                |
| Call Stack     |
------------------

Javascript is a synchronous single threaded language. Javascript only executes one command at a time in a specific order. So Javascript will go next line once the current line executed.


# JavaScript Execution Context

## How JavaScript Code is Executed

When we run JavaScript code, an execution context is created. Let's explore this concept with an example:

```javascript
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(2);
var square4 = square(4);
```

### Execution Context Phases

1. **Memory Creation Phase (First Phase)**
   - The execution context stores variables and functions.
   - Variables are initialized with the value `undefined`.
   - Functions are stored in their entirety.

2. **Code Execution Phase (Second Phase)**
   - JavaScript runs through the execution context line by line.
   - Values are allocated to variables.
   - When a function is invoked, a new execution context is created.
   - This new context also goes through the memory and code phases.

## JavaScript Engine and Call Stack

The JavaScript engine has its own call stack, which manages the creation, deletion, and execution of functions.

- The call stack is like a stack data structure.
- At the bottom of this stack is the global execution context.
- Whenever a JavaScript program runs, the global execution context is pushed onto the stack.
- When a function is invoked, its execution context is pushed onto the stack.
- The call stack maintains the order of execution of execution contexts.

### Alternative Names for Call Stack

1. Execution stack
2. Program stack
3. Control stack
4. Runtime stack
5. Machine stack
6. Program counter stack
7. Stack frame
8. Stack frame stack
9. System stack
10. Memory stack

The call stack is crucial for managing the flow of execution in JavaScript programs, ensuring that functions are executed in the correct order and that the program returns to the appropriate point after function calls are completed.