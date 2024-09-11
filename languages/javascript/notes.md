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