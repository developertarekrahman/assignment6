1) What is the difference between var, let, and const?

Answer: 
Var:  Var is a method of declaring variables, var declared variables are function scoped, which means their scope is constrained to the function in which they
are specified.

Let:  Let is also a method of declaring variables, let declarations limit variables to the block where they are specified. It is especially helpful for 
preventing unintentional variable hoisting and lowering the possibility of scope-related errors.

Const:  Const is a method of declaring variables where the initial value of the variables can not change.


2) What is the difference between map(), forEach(), and filter()?

Answer:

forEach():  forEach() used to iterate over array elements, perform a specified function for each element of the array and doesn't return anything.

map(): map() is also used to iterate over array elements and creates a new array by applying specified function and return the new array. 

filter():  filter() creates an array containing the elements which satisfy the specified conditon. It returns an array of elements which only 
satisfy the condition, if no elements match the conditon it returns a empty array.


3) What are arrow functions in ES6?

Answer:

Arrow functions are a feature introduced in ECMAScript 6 (ES6) that provide a more concise syntax for writing function expressions in JavaScript.
They also have different behavior regarding the this keyword compared to traditional function expressions.

4) How does destructuring assignment work in ES6?

Answer:

Destructuring in JavaScript allows you to extract values from arrays or objects and assign them to variables in a concise and readable way. 
It simplifies code, making it shorter and easier to understand.
How it works:
1) It lets you easily grab values from an array and assign them to variables.
2) making your code easier to read and understand.
3) You can set a backup value for variables while destructuring. If something is missing or undefined, the default will be used instead.
4) In arrays, you can choose to ignore certain values while destructuring, focusing only on the ones you need.

5) Explain template literals in ES6. How are they different from string concatenation?

Answer:

Template literals are string literals that allow embedded expressions (variables) into your code. They are enclosed by backticks (`) 
instead of single (') or double (") quotes.

There have many reason that make difference between template literals and string concatenation :
Syntax: In template literals it enclosed by backticks  and use ${} for embedding expressions.On the other hand concatenation use + operator
to join the strings.
Readability: In template literals its more readable, especially for strings with embedded variables or expressions. But in case of concatenation
Can become less readable when dealing with many variables or complex expressions.
Multiline Strings: In template literals accept multiline strings natively without the need for special characters.But in concatenation requires 
explicit newline characters (\n) or separate string literals to create multiline strings.


