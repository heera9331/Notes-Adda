# Evaluate Reverse Polish Notation

`Link`

https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

`Description`

- Evoluate postfix expression
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.

`Testcase`

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22

## Constraints

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

## Approach

- Using stack
- iterate over string char-by-char
- if str[i] if operator then check what type of operator `{+,-,*,/}` then pop two top element from stack and apply operation and again push into stack
- if str[i] is not operator then we directly push str[i] into with type casted into int so -> int(str[i])

## Complexity

`Time Complexity - O(N)`

`Space Complexity - O(n)`

## Solution

```java

class Solution {
    public int evalRPN(String[] tokens) {
        Stack < Integer > stack = new Stack < > ();
        int a, b;
        for (String str: tokens) {
            switch (str) {
                case "+":
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b + a);
                    break;
                case "-":
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b - a);
                    break;
                case "*":
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b * a);
                    break;
                case "/":
                    a = stack.pop();
                    b = stack.pop();
                    stack.push(b / a);
                    break;
                default:
                    stack.push(Integer.parseInt(str));
            }
        }
        // System.out.print(stack);
        return stack.pop();
    }
}

```


```python
class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for ch in tokens:
            
            # checking operator
            if ch == "+":
                op1 = stack.pop(-1)
                op2 = stack.pop(-1)
                stack.append(op2 + op1)
            
            elif ch == "-":
                op1 = stack.pop(-1)
                op2 = stack.pop(-1)
                stack.append(op2 - op1)
            
            elif ch == "*":
                op1 = stack.pop(-1)
                op2 = stack.pop(-1)
                stack.append(op2 * op1)
            
            elif ch == "/":
                op1 = stack.pop(-1)
                op2 = stack.pop(-1)
                stack.append(int(op2 / op1))
        
            # ch is operand
            else:
                stack.append(int(ch))

        return int(stack.pop())

```