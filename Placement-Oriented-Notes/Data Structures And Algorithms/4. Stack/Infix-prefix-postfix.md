## **Why Postfix/Prefix Expressions are faster than Infix?**

For Infix Expression which is format A+B*C, if the compiler is reading left to right then it can’t evaluate A+B first until it has read whole expression and knows expression is actually A + (B*C) i.e. B \* C needs to be implemented first

Postfix for above infix is ABC\*+. Now, as soon as compiler sees two operands followed by operator it can implement it without caring for precedence.

- Assume ABC\*+
- ABC*+ (BC* is implemented as B\*C and result is put back)
- AX+ (Assuming X stores result of BC* i.e. B*C)
- Now finally AX+ can be implemented as A+X

## **********\*\*\*\***********Infix to Postfix**********\*\*\*\***********

- **Infix:** `a + b * c + d` can be written as `a + (b * c) + d`
- Now, for all + – / \* [associativity](https://prepinsta.com/c-plus-plus-theory/precedence-and-associativity/) is left to right we will write it as
- `(a + (b * c)) + d` and thus further `((a + (b * c)) + d)`
- Solving and converting innermost bracket to postfix
- Step 1 –`((a + bc*)+ d)`
- Step 2 – Consider `bc*` as separate operand `x` the innermost bracket now looks like `((a + x)+ d)`
  - Applying postfix it looks like – `(ax+ + d)`replacing x here `(abc*+ + d)`
- Step 3 – Considering`abc*+`as separate operand z, the final bracket looks like – `(z + d)`the result would be `zd+`
  - replacing z value = `abc*+d+`

```markdown

```

## Evoluate Postfix Expression

```markdown
1. scan the given expression and push character into stack
2. if we get an operator then we pop last two operands and evoluation expression and put
   on top of the stack.
3. repeat step 2, untill we reach the last
```

## Infix to Prefix

### **Problem (This is how to convert manually for MCQ Question in the exam)**

- **Infix:** `(a / b + c) - ( d + e * f)` can be written as `((a / b) + c) - ( d + (e * f))`
- Now, we have done the above according to [associativity](https://prepinsta.com/c-plus-plus-theory/precedence-and-associativity/)
- Solving and converting innermost bracket to prefix
- Step 1 –`(/ab + c) - ( d + *ef)`
- Step 2 – Consider `/ab` and `ef` as separate operand `x` and `y`
- the innermost bracket now looks like `(x + c) - (d + y)`
  - Applying prefix it looks like – `(+xc - +dy)`replacing x and y here `(+/abc - +d*ef)`
- Step 3 – Considering`+/abc` and`+d*ef`as separate operand z and w, the final bracket looks like – `(z - w)`the result would be `zw`
  - replacing z and w value = `+/abc+d*ef`

```markdown

```

## Implementation

```java
// convert a given infix expression to postfix expression
#include <stdio.h>
#include <string.h>

char stack[50];
int top=-1;

void infixToPostfix(char infix[]);
void push(char);
char pop();

void main() {
    char infix[25];
    printf("Enter the infix expression\n");
    fgets(infix,25,stdin);
    infixToPostfix(infix);

}

void push(char symb) {
    if(top>=49) {
        printf("stack overflow\n");
    } else {
        stack[++top]=symb;
    }
}

char pop() {
    char item;
    if (top==-1) {
        printf("stack empty\n");
        return(0);
    } else {
        item=stack[top--];
    }
    return item;
}

int preced(char ch) {
    if (ch==47) { // division -> /
        return(5);
    } else if (ch==42) { // multiplication -> *
        return(4);
    } else if (ch==43) { // addition -> +
        return(3);
    } else {
        return(2);
    }
}

void infixToPostfix(char infix[]) {
    int length;
    static int idx=0,pos=0;
    char symbol, temp;
    char postfix[40];
    length = strlen(infix);
    push('#');

    while(idx<length) {
        symbol=infix[idx];
        switch(symbol) {
            // if symbol is ( then push to the stack
            case '(':
                push(symbol);
                break;
            case ')':
                temp=pop();

            while(temp!='(') {
                postfix[pos]=temp;
                pos++;
                temp=pop();
            }
            break;

            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
            while(preced(stack[top])>=preced(symbol)) {
                temp=pop();
                postfix[pos]=temp;
                pos++;
            }
            push(symbol);
                break;
            default:
            postfix[pos++]=symbol;
                break;
        }
        idx++;
    }
    while(top>0) {
        temp=pop();
        postfix[pos++]=temp;
    }
    postfix[pos++]='\0';
    puts(postfix);
    return;
}
```
