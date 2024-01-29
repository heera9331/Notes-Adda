Question 1 :

Print the number of 7’s that are in the 2d array.

Example :

Input - int[][] array = { {4,7,8},{8,8,7} };

Output - 2

```java
static void count7(int matrix[][], int key) {
    int n = matrix.length;
    int m = matrix[0].length;
    int count=0;

    for(int i=0; i<n; i++) {
        for(int j=0; j<m; j++) {
            if(matrix[i][j] == key) {
                count++;
            }
        }
    }
    System.out.println(key + "'s occures number of time " + count);
}
```

Question 2 :

Print out the sum of the numbers in the second row of the “nums” array.

Example :

Input - int[][] nums = { };

Output - 18

```java
static void secondRowSum(int[][] matrix) { 
    int m=matrix[0].length;
    int sum=0;

    for(int i=0; i<2; i++) {
        for(int j=0; j<m; j++) {
            if (i == 1)
                sum += matrix[i][j];
        }
    }
    System.out.println(sum);
}
```

Question 3 :

Write a program to Find Transpose of a Matrix. What is Transpose? Transpose of a matrix is the process of swapping the rows to columns. For a 2x3 matrix,

Matrix

a11 a12 a13

a21 a22 a23

Transposed Matrix

a11 a21

a12 a22

a13 a23

```java
public class Main {
    static void printMatrix(int[][] mat) {
        for(int i=0; i<mat.length; i++) {
            for(int j=0; j<mat[0].length; j++) {
                System.out.print(mat[i][j]+" ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        int[][] mat = {
            {1,2,3},
            {4,5,6}
        };

        // print original matrix
        printMatrix(mat);

        int row=mat.length;
        int col=mat[0].length;

        int transpose[][] = new int[col][row];

        for(int i=0; i<transpose.length; i++) {
            for(int j=0;j<transpose[0].length; j++) {
                transpose[i][j]=mat[j][i];
            }
        }
        // print transpose matrix
        printMatrix(transpose);

    }
    
}
```