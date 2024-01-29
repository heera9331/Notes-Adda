## 1. Rotate Matrix

https://www.codingninjas.com/codestudio/guided-paths/data-structures-algorithms/content/118821/offering/1381903?leftPanelTab=1

```python
import java.util.* ;
import java.io.*; 
public class Solution {
	static void rotaterow(int arr[]) {
		int n = arr.length;
		int insert = arr[n - 1];
		for (int i = n - 1; i > 0; i--) {
			arr[i] = arr[i - 1];
		}
		arr[0] = insert;
	}
	public static int[][] rotateMatRight(int[][] mat, int n, int m, int k) {
		// Write your code here.
		int rotate = k % m;
		while (rotate!=0) {
			for (int i = 0; i < n; i++) {
				rotaterow(mat[i]);
			}
			rotate--;
		}
		return mat;

	}
}
```

## 2. Rotate Image

You are given an `n x n` 2D `matrix` representing an image, rotate the image by **90** degrees (clockwise).

You have to rotate the image **[in-place](https://en.wikipedia.org/wiki/In-place_algorithm)**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

!https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

```

**Example 2:**

!https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg

```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

```

**Constraints:**

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `1000 <= matrix[i][j] <= 1000`

```python
class Solution {
    public void reverse(int arr[],int start,int end) {
        while(start<end) {
            int temp=arr[start];
            arr[start]=arr[end];
            arr[end]=temp;

            start++;
            end--;
        }
    }

    public void transpose(int A[][])
    {
        int N=A.length;
        for (int i = 0; i < N; i++)
            for (int j = i + 1; j < N; j++) {
                int temp = A[i][j];
                A[i][j] = A[j][i];
                A[j][i] = temp;
            }
    }

    public void rotate(int[][] matrix) {
        transpose(matrix);
        // reverse row

        for(int row[] : matrix) {
            reverse(row,0,row.length-1);
        }    
    }
}
```

## 3. **Reverse N Traversal**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b9706ada-3946-4ff5-9c56-8e5f264ce2ca/Untitled.png)

```python
def ntraversal(mat,n):
    # traverse first column 0 to n-1
    for i in range(0, n-1):
        print(mat[i][0],end=' ')
    
    # traversal right diagonal in opposite direction or reverse direction
    for i in range(n-1, -1,-1):
        for j in range(0, n):
            if n-i-1 == j:
                print(mat[i][j],end=' ')
            
    # traverse last column 1 to n-1
    for i in range(1,n):
        print(mat[i][n-1],end=' ')
    print()
T=int(input())
while T:
    n=int(input())
    mat=[]

    for i in range(n):
        arr=list(map(int,input().split()))
        mat.append(arr)
    ntraversal(mat,n)
    T-=1
```

## 4. LONGEST INCREASING PATH IN MATRIX

https://leetcode.com/problems/longest-increasing-path-in-a-matrix/

Given an `m x n` integers `matrix`, return *the length of the longest increasing path in* `matrix`.

From each cell, you can either move in four directions: left, right, up, or down. You **may not** move **diagonally** or move **outside the boundary** (i.e., wrap-around is not allowed).

**Example 1:**

!https://assets.leetcode.com/uploads/2021/01/05/grid1.jpg

```
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is[1, 2, 6, 9].
```

```
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation:The longest increasing path is[3, 4, 5, 6]. Moving diagonally is not allowed.

```

**Example 3:**

```
Input: matrix = [[1]]
Output: 1
```

```cpp
class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        
		//Base condition
        if(matrix.length==0)
            return 0;
        
		
        int dp[][] = new int[matrix.length][matrix[0].length];
        int max = 0;
        
        for(int i =0;i<matrix.length;i++){
            for(int j =0;j<matrix[0].length;j++){
                //result is not stored
                if(dp[i][j]==0){
                   dfs(matrix,i,j,Integer.MIN_VALUE,dp);
                   max = Math.max(dp[i][j],max); 
                }
            }
        }
        
        return max;
    }
    
    private int dfs(int[][] matrix,int i,int j,int pre,int[][] dp){
        //Dont fo beyond boundaries and next element should be greater for increasing path
        if(i<0 || j<0 ||i>=matrix.length || j>=matrix[0].length || pre>=matrix[i][j])
            return 0;
			
		//already explored
        else if(dp[i][j]!=0) return dp[i][j];
        
		//exploring all direction
        int down = dfs(matrix,i+1,j,matrix[i][j],dp);
        int up = dfs(matrix,i-1,j,matrix[i][j],dp);
        int left = dfs(matrix,i,j-1,matrix[i][j],dp);
        int right = dfs(matrix,i,j+1,matrix[i][j],dp);
        
		//finding the max path
        int maxOne = Math.max(left,right);
        int maxTwo = Math.max(up,down);
        
		//store maximum path on that index
        dp[i][j] = 1+Math.max(maxOne,maxTwo);
        
        return dp[i][j];
        
    }
}
```

## 2328. Number of Increasing path in a grid

You are given an `m x n` integer matrix `grid`, where you can move from a cell to any adjacent cell in all `4` directions.

Return *the number of **strictly** **increasing** paths in the grid such that you can start from **any** cell and end at **any** cell.* Since the answer may be very large, return it **modulo** `109 + 7`.

Two paths are considered different if they do not have exactly the same sequence of visited cells.

![griddrawio-4.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/91004e8c-d6bf-436c-80ff-052f09dbea61/griddrawio-4.png)

```
Input: grid = [[1,1],[3,4]]
Output: 8
Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [1], [3], [4].
- Paths with length 2: [1 -> 3], [1 -> 4], [3 -> 4].
- Paths with length 3: [1 -> 3 -> 4].
The total number of paths is 4 + 3 + 1 = 8.
```

https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/

```c
import java.util.Arrays;

class Solution {
    int mod = (int) Math.pow(10, 9) + 7;

    public int countPaths(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[][] dp = new int[rows][cols];
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (dp[i][j] == -1) {
                    helper(i, j, grid, dp, -1);
                }
            }
        }

        long pathSum = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                pathSum = (pathSum + dp[i][j]) % mod;
            }
        }
        return (int) pathSum;
    }

    public int helper(int row, int col, int[][] grid, int[][] dp, int parent) {
        int rows = grid.length;
        int cols = grid[0].length;

        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] <= parent) {
            return 0;
        }

        if (dp[row][col] != -1) {
            return dp[row][col];
        }

        int down = helper(row + 1, col, grid, dp, grid[row][col]) % mod;
        int up = helper(row - 1, col, grid, dp, grid[row][col]) % mod;
        int right = helper(row, col + 1, grid, dp, grid[row][col]) % mod;
        int left = helper(row, col - 1, grid, dp, grid[row][col]) % mod;

        return dp[row][col] = (down + up + right + left + 1) % mod;
    }
}
```