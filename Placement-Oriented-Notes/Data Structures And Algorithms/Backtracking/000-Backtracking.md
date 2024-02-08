# Backtracking

Backtracking is a problem-solving algorithmic technique that is used to find all possible solutions to a problem by exploring all possible paths or options and backtracking to find the correct solution. It is commonly used in constraint satisfaction problems, combinatorial optimization problems, and puzzles.

The technique involves starting with an initial solution and then incrementally modifying it by exploring all possible paths or options. At each step, the algorithm checks whether the current solution is a valid solution. If it is not, the algorithm backtracks to the previous step and tries another path or option until a valid solution is found or all paths have been explored.

**Types of Backtracking**

1. Decision
2. Optimization
3. Enumeration

Arrays Backtracking

```java
class Main {
    static void changeArray(int[] arr, int idx, int val) {
        if(arr.length == idx) {
            return;
        }
        arr[idx]=val;
        changeArray(arr, idx+1, val+1); // fnx call stack
        arr[idx]=arr[idx]-2; // backtracking step
    }
    public static void main(String[] args) {
        int[] arr = new int[5];
        changeArray(arr, 0, 1);

        for(int elm : arr) {
            System.out.print(elm+ " ");
        }
        System.out.println();
    }
}
```
