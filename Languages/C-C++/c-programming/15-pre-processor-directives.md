# Pre-Processor Directive

Preprocessor directives are special instructions to the compiler that are executed before the code is compiled. These directives start with the # symbol and are processed by the preprocessor, a program that runs before the compiler.

The **C Preprocessor** is not a part of the compiler, but is a separate step in the compilation process. In simple terms, a C Preprocessor is just a text substitution tool and it instructs the compiler to do required pre-processing before the actual compilation. We'll refer to the C Preprocessor as CPP.

All preprocessor commands begin with a hash symbol (#).
 

1. **`#include`**: This directive is used to include a header file in the source code. The header file typically contains declarations for functions, constants, and other definitions that are needed in the program.

```java
#include <headerfile.h>

// include your own file
#include "myfile.c"
```

2 **`#ifdef`** and **`#ifndef`**: These directives are used to conditionally include or exclude code from the program based on whether a certain macro is defined. The **`#ifdef`** directive checks if a macro is defined, while the **`#ifndef`** directive checks if it is not defined.
.
```c
#define FOO

#ifdef FOO
  printf("FOO is defined\n");
#endif

#ifndef BAR
  printf("BAR is not defined\n");
#endif
```

3. **`#pragma`**: This directive is used to provide special instructions to the compiler or linker. For example, it can be used to control optimization settings, to disable warnings, or to link with a specific library.

```c
#pragma GCC optimize("O3")
int main() {
  // code
}
```

This code uses the **`#pragma`** directive to set the optimization level to **`O3`**, which is a high level of optimization. This will instruct the compiler to generate highly optimized code, which may result in faster execution times, but could also lead to larger executable file sizes or longer compilation times.

4. **`#define`**: This directive is used to define a macro, which is a piece of code that can be used repeatedly throughout the program. Macros are often used to simplify code or to make it more readable.

The **`#define`** directive is used to create a macro, which is a way to define a piece of code that can be used multiple times throughout a program.

```markdown
#define PI 3.14159
#define MIN(a, b) ((a) < (b) ? (a) : (b))

int x = 5, y = 10;
int min_val = MIN(x, y); // min_val = 5

// When the macro is expanded by the preprocessor, the code is transformed to:
int min_val = ((x) < (y) ? (x) : (y));
```