# String
- A character array terminated by ‘\0’.
- null character denotes string termination,
- → %s is used as string format specifier.
- → string → array → pointer.

```c
char name[] = {'H', 'e', 'e', 'r', 'a', '\0'};
// same as
// char name[] = "Heera";

char *str = "Heera"; // can be reinitialized
char str[] = "Heera"; // cannot be reinitialized
```

**Q1. - Take a string input from the user using %c.**

```c
char str[100];
char ch;
int i=0;
while (ch != '\n') {
    scanf("%c", &ch);
    str[i++]=ch;
}
str[i]='\0';
```

a string is a sequence of characters stored in a contiguous block of memory and terminated by a special character called the null character. 

Strings are used to represent text and are an important data type in C.

**Declaring a String**

To declare a string in C, you can use the **`char`** data type and an array of characters. The syntax for declaring a string is:

```c
char string_name[size];
```

For example, to declare a string called **`str`** with a size of 10 characters, you can use the following code:

```c

char str[10];
```

Initializing a String

You can initialize a string by assigning a string literal to it. A string literal is a sequence of characters enclosed in double quotes. The syntax for initializing a string is:

```c

char string_name[size] = "string literal";

```

For example, to declare and initialize a string called **`str`** with the value "Hello, world!", you can use the following code:

```c

char str[15] = "Hello, world!";

```

It is important to note that the size of the array should be large enough to hold the string literal, including the null character that marks the end of the string.

Accessing String Elements

You can access the elements of a string using their indices, just like with an array. The indices of the elements start at 0 and go up to **`size - 1`**, where **`size`** is the size of the array.

For example, to access the third character of the string **`str`** declared above, you can use the following code:

```c

char c = str[2];

```

This will assign the value of the third character of the string (which is 'l') to the variable **`c`**.

**String Functions**

C provides a number of functions in the **`string.h`** library for manipulating strings. Some of the most commonly used string functions are:

- **`strlen`**: This function returns the length of a string, not including the null character.
- **`strcpy`**: This function copies a string from one location to another.
- **`strcat`**: This function concatenates (joins) two strings.
- **`strcmp`**: This function compares two strings and returns a value

Here's an example of `strcpy`:

```c
#include <stdio.h>
#include <string.h>

int main() {
    char str1[50] = "Hello";
    char str2[50];

    strcpy(str2, str1); // copy str1 to str2

    printf("str1: %s\\n", str1); // output: str1: Hello
    printf("str2: %s\\n", str2); // output: str2: Hello

    return 0;
}

```

This program declares two character arrays, `str1` and `str2`. It initializes `str1` to the string "Hello" and then uses `strcpy` to copy `str1` to `str2`. The `printf` statements then output the contents of `str1` and `str2`.