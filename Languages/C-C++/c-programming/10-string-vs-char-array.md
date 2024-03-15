## String:
- In C, a string is typically defined as an array of characters terminated by a null character ('\0'). This null character marks the end of the string.
- Strings are represented using the char data type.
C provides various string manipulation functions in the standard library, such as strlen(), strcpy(), strcat(), strcmp(), etc., which can operate on strings.
- String literals in C are enclosed in double quotes, and the compiler automatically appends a null character to the end of the string.

```c
char str[] = "Hello"; // Declares and initializes a string

```

## Character Array:
- A character array in C is simply an array of characters without the null termination.
- Character arrays can be manipulated using standard array operations such as indexing, iteration, assignment, etc.
- They are not automatically treated as strings by the standard library functions, so you need to handle null termination manually if you want to treat them as strings.

Example of defining and using a character array in C:

```c
char arr[] = {'H', 'e', 'l', 'l', 'o'}; // Declares and initializes a character array 

```
