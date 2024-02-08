# Operators

Operator is nothing, but it is a symbol, that is used to perform operations. 
Example: - +, -, ^, %
C operators are symbols that are used to perform mathematical or logical manipulations.

**********************************Types of operators**********************************

- Arithmetic Operators
- Increment and Decrement Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Assignment Operators
- Conditional Operator
- Special Operators

## Arithmetic Operators

Arithmetic Operators are used for performing mathematical calculations like addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus (`%`).

| Operator | Description |
| --- | --- |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |

### 

## Increment/Decrement

Increment and Decrement operators are also called as unary operators.

| Operator | Description |
| --- | --- |
| ++ | Increment |
| −− | Decrement |

**************************************Types of unary operators**************************************

- pre-increment
- post-increment

```c
#include <stdio.h>

int main(int argc, char const *argv[]) {
    int a = 5;
    int b = a++; // post incre first use than increment
    printf("Value of b: %d\n", b);
    b = ++a; // pre incre first incre than use
    printf("Value of b: %d\n", b);
    return 0;
}

// Output
// Value of b: 5
// Value of b: 7
```

## Relational Operators

Relational operators are used to compare two quantities or values.

| Operator | Description |
| --- | --- |
| == | Is equal to |
| != | It is not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal to |
| <= | Less than or equal to |

## Logical Operators

C provides three logical operators when we test more than one condition to make decisions. These are: `&&` (meaning logical AND), `||` (meaning logical OR) and `!` (meaning logical NOT).

| Operator | Description |
| --- | --- |
| && | if all conditions are true than overall result true. |
| || | if any of one condition is true than overall result is true. |
| ! | Not operator. invert results. if true convert to false. if false convert to true. |

## Bitwise Operators

C provides a special operator for bit operation between two variables.

| Operator | Description |
| --- | --- |
| << | Binary Left Shift Operator |
| >> | Binary Right Shift Operator |
| ~ | Binary Ones Complement Operator |
| & | Binary AND Operator |
| ^ | Binary XOR Operator |
| | | Binary OR Operator |

## Assignment Operators

Assignment operators are used to assign/insert values into variables.

| Operator | Description |
| --- | --- |
| = | Assign |
| += | Increments then assign |
| -= | Decrements then assign |
| *= | Multiplies then assign |
| /= | Divides then assign |
| %= | Modulus then assign |
| <<= | Left shift and assign |
| >>= | Right shift and assign |
| &= | Bitwise AND assign |
| ^= | Bitwise exclusive OR and assign |
| |= | Bitwise inclusive OR and assign |

## Conditional Operators

C offers a ternary operator, which is the conditional operator (`?:` in combination), to construct conditional expressions.

| Operator | Description |
| --- | --- |
| ? : | Conditional Expression |

## Special Operators

C supports some special operators

| Operator | Description |
| --- | --- |
| sizeof() | Returns the size of a memory location. |
| & | Returns the address of a memory location. |
| * | Pointer to a variable. |