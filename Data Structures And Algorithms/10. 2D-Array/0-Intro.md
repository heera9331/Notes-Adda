**Declaration of 2D Arrays**

```java
int[][] matrix = new [row][column];

// input 2d arrays elements
for(int i=0; i<n; i++){
	for(int j=0; j<m; j++) {
		matrix[i][j] = sc.nextInt();
	}
}

// display 2d arrays elements
for(int i=0; i<n; i++){
	for(int j=0; j<m; j++) {
		System.out.println(matrix[i][j]);
	}
}

// calculate number of rows in a matrix
int rows = matrix.length;
// calculate number of columns in a matrix
int columns = matrix[0].length;
```

**2D Arrays Memory**

- In 2D arrays is not store in contiguous memory location, it may be at a time stores contiguous memory location (rare case).
- 2D arrays stored in memory - individually, not contiguous.