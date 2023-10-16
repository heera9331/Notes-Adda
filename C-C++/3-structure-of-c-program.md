The program that is entered into the file is known as the source program because it represents the original form of the program expressed in the C language.

There are 6 sections in a C Program that are Documentation, Preprocessor Section, Definition, Global Declaration, Main() Function, and Sub Programs.

**Documentation.**

The documentation section is optional, but it is good practice to include it in case you or someone else needs to understand your program later on. The documentation section can include a brief overview of the program, what it does, and how to use it.

**Link definition.**

The link definition section is also optional. It is used to specify any libraries that your program needs to run.

**Global declaration.**

The global declaration section declares all the variables and functions that are used throughout the program.

**Main() function.**

The main() function is the entry point for all C programs. It is where the execution of the program begins. The main() function must return an int value.

**Subprograms.**

The subprograms are the individual functions that are used by the main() function.

```java
// Documentation
/**
 * file: sum.c
 * author: you
 * description: program to find sum.
 */

// Link
#include <stdio.h>

// Definition
#define X 20

// Global Declaration
int sum(int y);

// Main() Function
int main(void)
{
    int y = 55;
    printf("Sum: %d", sum(y));
    return 0;
}

// Subprogram
int sum(int y)
{
    return y + X;
}
```