Que. 1 - Spiral Matrix

![Spiral Matrix - Google Chrome 25-11-2022 23_48_10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11f190b4-50b9-4b9f-abcd-020877d8f57a/Spiral_Matrix_-_Google_Chrome_25-11-2022_23_48_10.png)

```java
List<Integer> res = new ArrayList<Integer>();

  if (matrix.length == 0) {
      return res;
  }

  int rowBegin = 0;
  int rowEnd = matrix.length - 1;
  int colBegin = 0;
  int colEnd = matrix[0].length - 1;

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
      // Traverse Right
      for (int j = colBegin; j <= colEnd; j++) {
          res.add(matrix[rowBegin][j]);
      }
      rowBegin++;

      // Traverse Down
      for (int j = rowBegin; j <= rowEnd; j++) {
          res.add(matrix[j][colEnd]);
      }
      colEnd--;

      if (rowBegin <= rowEnd) {
          // Traverse Left
          for (int j = colEnd; j >= colBegin; j--) {
              res.add(matrix[rowEnd][j]);
          }
      }
      rowEnd--;

      if (colBegin <= colEnd) {
          // Traver Up
          for (int j = rowEnd; j >= rowBegin; j--) {
              res.add(matrix[j][colBegin]);
          }
      }
      colBegin++;
  }

  return res;
}
```

Que. 2 - Print Diagonal

```java
static void printDiagonal(int[][] matrix) {
    int n = matrix.length;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // if odd matrix
            if (n % 2 != 0) {
                if (i == j && !(i + j == n - 1)) {
                    System.out.println(matrix[i][j]);
                }
                if (i + j == n - 1) {
                    System.out.println(matrix[i][j]);
                }
            } else { // even matrix
                if (i == j) {
                    System.out.println(matrix[i][j]);
                }
                if (i + j == n - 1) {
                    System.out.println(matrix[i][j]); 
                }
            } 
        }
    }
}
```

Que. 2 - Diagonal Sum

- Diagonal sum always be calculated on rows == columns

![Spiral Matrix - Google Chrome 25-11-2022 23_52_19.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c3f5b741-5a93-4ace-a66f-4c904566bc64/Spiral_Matrix_-_Google_Chrome_25-11-2022_23_52_19.png)

Primary diagonal - i == j

Secondary diagonal - i + j == n - 1

![Spiral Matrix - Google Chrome 25-11-2022 23_59_15.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f8819fe-fadd-49a3-a4b8-76fdef68f377/Spiral_Matrix_-_Google_Chrome_25-11-2022_23_59_15.png)

**Brute force approach**

TC - O(n^2)

Space - O(1)

```java
static void printDiagonalSum(int[][] matrix) {
    int sum=0;
    int n = matrix.length;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // if odd matrix
            if (n % 2 != 0) {
                if (i == j && !(i + j == n - 1)) {
                    sum += matrix[i][j];
                }
                if (i + j == n - 1) {
                    sum += matrix[i][j];
                }
            } else { // even matrix
                if (i == j) {
                    sum += matrix[i][j];
                }
                if (i + j == n - 1) {
                    sum += matrix[i][j];
                }
            } 
        }
    }
    System.out.println(sum);
}
```

**Optimized approach**

TC - O(n)

Space - O(1)

```java
static int diagonalSum(int[][] matrix) {
    int sum=0;
    int n = matrix.length;
    for(int i=0; i<n; i++) {
        sum+=matrix[i][i];

        if (i != n-i-1)
            sum+=matrix[i][n-i-1];
    }

    return sum;
}
```

Que. 3 - Search in sorted matrix

https://leetcode.com/problems/search-a-2d-matrix-ii/

![Spiral Matrix - Google Chrome 26-11-2022 00_09_05.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c001ff85-20ab-4c0e-80dc-b1109dd1c9aa/Spiral_Matrix_-_Google_Chrome_26-11-2022_00_09_05.png)

**Brute force approach**

TC - O(n^2)

Space - O(1)

```java
static void searchSortedMatrix(int[][] matrix, int key) {
    int n = matrix.length;
    int m = matrix[0].length;

    for(int i=0; i<n; i++) {
        for(int j=0; j<m; j++) {
            if(matrix[i][j] == key) {
                System.out.print("Key found at index ("+i+" , "+j+")");
                System.out.println();
                return;
            }
        }
    }
    System.out.println("Key not found"); 
}
```

**Optimized approach**

TC - O(n)

Space - O(1)

**Base case**

if we reach 

i = 0 to n - 1

j = m - 1 to 0

key not found

traverse row wise - using binary search ( remember given sorted matrix)

(0, m-1)

key < cell value

LEFT

key > cell value

BOTTOM

traverse column wise - using binary search ( remember given sorted matrix)

(n-1, 0)

key < cell value

TOP

key > cell value

RIGHT

```java
public class Main {
    static boolean staircaseSearch(int[][] matrix, int key) {
        int row = 0;
        int col = matrix[0].length-1;

        // apply row wise binary search
        while (row < matrix.length && col >= 0 ) {
                if (matrix[row][col] == key) {
                        System.out.println("key found at index : ("+row+" "+col+")" );
                        return true;
                }

                if (matrix[row][col] > key) {
                        // left
                        col--;
                } else {
                        // bottom
                        row++;
                } 
        }

				// columns wise key search 
        // int col = 0;
        // int row = matrix[0].length - 1;

        // while (col < matrix.length && row >= 0) {
        //     if (matrix[row][col] == key) {
        //         System.out.println("key found at index : (" + row + " " + col + ")");
        //         return true;
        //     }

        //     if (matrix[row][col] < key) {
        //         col++;
        //     } else {
        //         row--;
        //     }
        // }  
        System.out.println("Key not found"); 
        return false;
    }

    public static void main(String[] args) {
        int[][] matrix = {
                {10,20,30,40},
                {15,25,35,45},
                {27,29,37,48},
                {32,33,39,50}
        };
        int key = 33;

        staircaseSearch(matrix, key);
    } 
}
```

### Z-Traversal

```markdown
Input
The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

Next N lines contains N space separated integers, denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000

Output
For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.

INPUT 1
1
3
1 2 3
4 5 6
7 8 9

OUTPUT 1
1 2 3 5 7 8 9
```

```python
def solve(n, mat):
    for i in range(n):
        for j in range(n):
            if i==0:
                print(mat[i][j],end=" ")
            elif i+j==n-1:
                print(mat[i][j],end=" ")
            elif i==n-1:
                print(mat[i][j],end=" ")
    print()
# input/output
t = int(input())
while t:
    n = int(input())
    mat = []
    for i in range(n):
        mat.append(list(map(int, input().split())))
    solve(n, mat)
    t-=1
```

**Go in Zig-Zag**

Description

Given a`matrix`with`N`rows and`M`columns. Print the matrix elements starting from the top right corner and follow a zig-zag pattern.

Look at the image for better understanding

!https://s3.amazonaws.com/hr-assets/0/1597145617-758e6f51c3-CapturedImage-11-08-202017-03-03.png

For example, for the above matrix, the required output would be as shown below.

`5 4 3 2 1 6 7 8 9 1 6 4 5 2 3 7 8 9 1 2`.

Input

**Input Format**

First line contains n and m

Next n line contains m space separated integers which describe each row of the 2d array

**Constraints**

n,m <=50

Output

Print all matrix elements in a single line separated by spaces.

Sample Input 1

```
5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5
```

Sample Output 1

```
7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
```

```python
def reverse(arr,n):
    for i in range(n//2):
        t=arr[i]
        arr[i]=arr[n-i-1]
        arr[n-i-1]=t

def solve(n,m,mat):
    ans = []
    for i in range(n):
        if i%2==0:
            currRow=mat[i]
            reverse(currRow, len(currRow))
            ans.append(currRow)
        else:
            ans.append(mat[i])
    
    for i in range(len(ans)):
        for j in range(len(ans[0])):
            print(ans[i][j],end=" ")

# INPUT
n,m = input().split()
n,m=int(n),int(m)
mat=[]
for i in range(n):
    mat.append(list(map(int, input().split())))

solve(n=n,m=m, mat=mat)
```

You are given a matrix of size n x n. Find the**N**traversal of the matrix. Refer the following figure for better understanding.

!https://prod-oj-files.s3.ap-south-1.amazonaws.com/upload/ee894391b8.png

Input

The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

Next N lines contain N space separated integers, denoting the values of the matrix.

**Constraints**

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000

Output

For each test case, print the N traversal of the matrix on a single line, on a new line.

Sample Input 1

```
1
3
1 2 3
4 5 6
7 8 9
```

Sample Output 1

```
7 4 1 5 9 6 3
```

```python
def reverse(arr, n):
    for i in range(0, n//2):
        t=arr[i]
        arr[i]=arr[n-i-1]
        arr[n-i-1]=t

def solve(n,m, mat):
    startcol=[]
    dia=[]
    endcol=[]
    for i in range(n):
        for j in range(m):
            if j==0:
                startcol.append(mat[i][j])
            elif j==n-1:
                endcol.append(mat[i][j])
            elif i==j:
                dia.append(mat[i][j])
    reverse(startcol, len(startcol))
    reverse(endcol, len(endcol))
    
    for i in range(len(startcol)):
        print(startcol[i],end=" ")
    
    for i in range(len(dia)):
        print(dia[i],end=" ")
    
    for i in range(len(endcol)):
        print(endcol[i],end=" ")
    print()
    
    
     
# INPUT

t = int(input())

while t:
    n = int(input())    
    mat=[]

    for i in range(n):
        mat.append(list(map(int, input().split()))) 

    solve(n,n,mat)
    t-=1
```

### Flip Matrix

 
**You can proceed to code only if you pass the Litmus Test -155:14:9**

Description

Given an n x n binary matrix, flip the matrix horizontally, then invert it, and print the resulting matrix.

To flip the matrix horizontally means that each row of the matrix is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].

To invert the matrix means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].

Input

**Input Format**

First-line contains integer n representing the number of rows and columns of the binary matrix arr.

Following n lines contains n-integers.

**Constraints**

1 <= n <= 100

0 <= arr[i][j] <= 1

Output

Print the required matrix, n lines containing n elements.

Sample Input 1

```
3
1 1 0
1 0 1
0 0 0
```

Sample Output 1

```
1 0 0
0 1 0
1 1 1
```

Hint

See we will firstly flip each row of the matrix,

So the resultant matrix is

0 1 11 0 10 0 0

Now we will invert each row.

Resultant matrix will be,

```markdown
1 0 0
0 1 0
1 1 1
```

```python
def reverse(arr, n):
    for i in range(n//2):
        t=arr[i]
        arr[i]=arr[n-i-1]
        arr[n-i-1]=t
        

def flipMatrix(mat, n):
    ans=[]
    for row in mat:
        reverse(row, len(row))
        ans.append(row)
        
    for i in range(n):
        for j in range(n):
            if ans[i][j]==0:
                print(1,end=" ")
            else:
                print(0, end=" ")
        print()

# INPUT
n = int(input())
mat=[]

for i in range(n):
    row= list(map(int,input().split()))
    mat.append(row)

flipMatrix(mat, n)
```

### **73. Set Matrix 0’s**

```java
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```

Given a matrix with dimensions **N** x **M**, entirely filled with zeroes except for one position at co-ordinates **X** and **Y** containing '1'. Find the minimum number of iterations in which the whole matrix can be filled with ones.**Note:** In one iteration, '1' can be filled in the 4 neighbouring elements of a cell containing '1'.

**Example 1:**

```
Input:
N = 2, M = 3
X = 2, Y = 3
Output: 3
Explanation: 3 is the minimum possible
number of iterations in which the
matrix can be filled.

```

[data:image/png;base64,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](data:image/png;base64,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)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8bdc133e-5ed7-499b-af4c-2e0fc36dbbea/Untitled.png)

**Example 2:**

```
Input:
N = 1, M = 1
X = 1, Y = 1
Output:0
Explanation: The whole matrix is
already filled with ones.
```

[data:image/png;base64,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](data:image/png;base64,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)

**Your Task:**  You don't need to read input or print anything. Your task is to complete the function **minIterations()** which takes the dimensions of the matrix N and M and the co-ordinates of the initial position of '1' ie X and Y ****as input parameters and returns the minimum number of iterations required to fill the matrix.

**Expected Time Complexity:** O(N*M)**Expected Auxiliary Space:** O(1)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28c71b4f-eefd-4c32-9945-d0f8366f77d3/Untitled.png)

```java
int minIteration(int n, int m, int x, int y){  
        int firstcorner=x-1+y-1;
        int secondcorner=x-1+m-y;
        int thirdcorner=n-x+y-1;
        int fourthcorner=n-x+m-y;
        return max(max(firstcorner,secondcorner),max(thirdcorner,fourthcorner));
    }
```

## Detect L

![d5ddca4286.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dd6d0713-8332-412b-96bd-ebc4052cfb91/d5ddca4286.png)

```cpp
def detectL(mat):
    n = len(mat)
    m = len(mat[0])

    row = 0
    col = 0
    while row < n and col < m:
        # print col
        for i in range(0, n-col):
            print(mat[i][col], end=' ')
        col += 1
        # print row
        for j in range(col, m):
            print(mat[n-row-1][j], end=' ')
        row += 1

    print()
T = int(input())
while T:
    mat = []
    n, m = map(int, input().split())
    for i in range(n):
        row = list(map(int, input().split()))
        mat.append(row)
    detectL(mat)
    T -= 1
```