Q.1 - Push at Bottom of the stack

Time Complexity - O(N)

Space Complexity - O(1)

```java
// push at bottom of the stack
// my solution
public void pushAtBottom(int val) {
    if (isEmpty()) {
        push(val);
        return;
    }
    int n = pop();
    pushAtBottom(val);
    push(n);
}
```

```java
static void pushAtBottom(Stack<Integer> s, int data) {
    if(s.empty()) {
        s.push(data);
        return;
    }
    int top = s.pop();
    pushAtBottom(s, data);
    s.push(top);
}
```

```java
static void pushAtBottom(Stack<Integer> stack, int item) {
    if (stack.isEmpty()) {
        stack.push(item);
        return;
    }

    Stack<Integer> temp = new Stack<>();
    while (!stack.isEmpty())
        temp.push(stack.pop());

    stack.push(item);
    while (!temp.isEmpty())
        stack.push(temp.pop());
}
```

Q.2 - Reverse a String using stack

```java
public class Main {
    public static void main(String[] args) {
        Stack <Character> s = new Stack<>();
        String str = "heera";
        for(int i=0; i<str.length(); i++) {
            s.push(str.charAt(i));
        }

        while(!s.isEmpty()) {
            System.out.print(s.pop());
        }
        System.out.println();
    }
}
```

Q.3 - Reverse a Stack

```java
public class Main {
    s

    static void reverseStack(Stack<Integer> s) {
        if(s.isEmpty()) {
            return;
        }
        int top=s.pop();
        reverseStack(s);
        pushAtBottom(s,top);
    }
    public static void main(String[] args) {
        Stack<Integer> s = new Stack<>();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        reverseStack(s);
        while(!s.isEmpty()) {
            System.out.print(s.pop()+" ");
        }
        System.out.println();

    }
}
```

****************\*\*\*\*****************Stock span problem****************\*\*\*\*****************

span - max no of consecutive days for which price ≤ today’s price

```java

```

```java
import java.util.Stack;
/**
 * Main
 * Stock span problem
 */
public class Main {
    static void stockSpan(int stocks[], int span[]) {
        Stack<Integer> s = new Stack<>();
        span[0]=1;
        s.push(0);

        for(int i=1; i<stocks.length; i++) {
            int currPrice = stocks[i];
            while(!s.isEmpty() && currPrice>stocks[s.peek()])  {
                s.pop();
            }
            if(s.isEmpty()) {
                span[i]=i+1;
            } else {
                int prevHeight = s.peek();
                span[i]=i-prevHeight;
            }

            s.push(i);
        }
    }
    public static void main(String[] args) {
        int stocks[] = {100,80,60,70,60,85,100};
        int span[] = new int[stocks.length];
        stockSpan(stocks,span);

        for(int i=0; i<span.length; i++) {
            System.out.print(span[i]+" ");
        }
        System.out.println();
    }
}
```

************\*\*************Next greater element************\*\*************

```java
/**
 * Main
 * Next Greater Element
 * TC - O(N)^2
 * Bruteforce approach
 */
public class Main {
    static void nextGreaterElement(int arr[]){
        int ans[] = new int[arr.length];
        int c=0;
        boolean flag=false;
        for(int i=0; i<arr.length; i++) {
            for(int j=i+1; j<arr.length; j++) {
                if(arr[i]<arr[j]) {
                    ans[c]=arr[j];
                    c++;
                    flag=true;
                    break;
                }
            }
            if(! flag==true) {
                ans[c]=-1;
                c++;
            }
            flag=false;
        }

        for(int i=0; i<arr.length; i++) {
            System.out.print(ans[i]+" ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        int arr[] = {6,8,0,1,3};
        nextGreaterElement(arr);
    }
}
```

```java
import java.util.Stack;
/**
 * Main
 * Next Greater Element
 * TC - O(N)
 * SC - O(N)
 * Optimized approach
 */
public class Main {
    static void nextGreaterElement(int arr[]){
        Stack<Integer> s = new Stack<>();
        int nextGreater[] = new int[arr.length];
        for(int i=arr.length-1; i>=0; i--) {

            // 1. while
            while(!s.isEmpty() && arr[s.peek()] <= arr[i]) {
                s.pop();
            }

            // 2. if-else
            if(s.isEmpty()) {
                nextGreater[i]=-1;
            } else {
                nextGreater[i]=arr[s.peek()];
            }

            // 3. push in stock
            s.push(i);
        }

        for(int i=0; i<nextGreater.length; i++) {
            System.out.print(nextGreater[i]+" ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int arr[] = {6,8,0,1,3};
        nextGreaterElement(arr);

				// question forms
				// next greater left
				// next greater right
				// next smallest in the right side
				// next smallest in the left side
    }
}
```

********\*\*********Valid Parentheses********\*\*********

```java
/**
 * Main
 * TC - O(n)
 */
public class Main {
    static boolean isValidParenthesis(String str) {
        Stack<Character> s = new Stack<>();
        for(int i=0; i<str.length(); i++) {
            char ch = str.charAt(i);
            if(ch=='(' || ch=='{' || ch=='[') {
                // opining
                s.push(ch);
            } else {
                // closing
                if(s.isEmpty()) {
                    return false;
                }

                if(s.peek()=='('&&ch==')' || s.peek()=='{'&&ch=='}' || s.peek()=='['&&ch==']') {
                    s.pop();
                } else {
                    return false;
                }
            }
        }
        if(s.isEmpty()) {
            return true;
        } else {
            return false;
        }
    }
    public static void main(String[] args) {
        String str="()[]";
        System.out.println(isValidParenthesis(str));
        // char ch = '('+1;
        // System.out.println(ch);
    }
}
```

********************\*\*********************Duplicate parentheses********************\*\*********************

```java
/**
 * Main
 */
public class Main {
    static boolean duplicateParentheses(String str) {
        Stack<Character> s = new Stack<>();

        for(int i=0; i<str.length(); i++) {
            char ch = str.charAt(i);

            // closing
            if(ch == ')') {
                int count=0;
                while(s.peek() != '(') {
                    s.pop();
                    count++;
                }
                if (count<1) {
                    return true; // duplicate
                } else {
                    s.pop(); // opening pair
                }
            } else {
                // opening
                s.push(ch);
            }
        }
        return false;
    }
    public static void main(String[] args) {
        String str = "(a+b)"; // false
        String str1 = "((a+b))"; // true

        System.out.println(duplicateParentheses(str));
        System.out.println(duplicateParentheses(str1));
    }
}
```

**Max area in Histogram**

```java
/**
 * Main
 */
public class Main {
    static void maxArea(int heights[]) {
        int maxArea=0;
        int nsr[] = new int[heights.length];
        int nsl[] = new int[heights.length];

        // 1. Next smaller right
        Stack<Integer> s = new Stack<>();
        for(int i=heights.length-1; i>=0; i--)  {
            while(!s.isEmpty() && heights[s.peek()]>=heights[i]) {
                s.pop();
            }
            if(s.isEmpty()) {
                // -1;
                nsr[i]=heights.length;
            } else {
                //top
                nsr[i]=s.peek();
            }
            s.push(i);
        }
        // 2. Next smaller left
        s = new Stack<>();
        for(int i=0; i<heights.length; i++)  {
            while(!s.isEmpty() && heights[s.peek()]>=heights[i]) {
                s.pop();
            }
            if(s.isEmpty()) {
                // -1;
                nsl[i]=-1;
            } else {
                //top
                nsl[i]=s.peek();
            }
            s.push(i);
        }
        // Current area : width = j-i-1
        for(int i=0; i<heights.length; i++) {
            int height = heights[i];
            int width = nsr[i]-nsl[i]-1;
            int currArea = height*width;
            maxArea=Math.max(maxArea,currArea);
        }

        System.out.println("Maximum area in my histogram: "+maxArea);

    }
    public static void main(String[] args) {
        // int heights[] = {2,1,5,6,2,3};
        int heights[] = {2,4};
        maxArea(heights);
    }
}
```
