# Array

Array is a variable, which stores multiple values of similar data types of data on contiguous fashion
(manner)

- Array indexing starts with 0. means first value of zero at 0 index, and second value at 1 index
  and same as last value of n size array at n-1 index.
- If you declare an array of size n, values are automatically filled by java, every element is
  initially 0.

`declaration of array`

```java
data_type[] arr_var = new data_type[size];
// or
data_type arr_var[] = new data_type[size];
```

```java

public class Main {
  public static void main(String[] args) {
    // declaration of an array
    int n = 5;
    int[] arr = new int[n];
    arr[0] = 5;
    arr[1] = 2; // 34
    arr[2] = 4;
    arr[3] = 6;
    arr[4] = 7;
    for (int i = 0; i < n; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
    for (int elm : arr) {
      System.out.print(elm + " ");
    }
    System.out.println();
  }
}
```

## Arrays

Arrays class provide lots of method to manipulate array.

```java
public class Main {
  public static void main(String[] args) {
    int arr[] = { 3, 2, 4, 1 };
    int arr2[] = { 3, 2, 4, 1 };
    /*
     * String str = Arrays.toString(arr) -> [3, 2, 4, 1]
     * str.charAt(0) -> [
     */
    System.out.println(Arrays.toString(arr));

    // compare to array object
    System.out.println(Arrays.equals(arr, arr2));

    // array of list
    List<int[]> list = new ArrayList<>(Arrays.asList(arr));
    list.add(new int[]{3,4});
    System.out.println(list); // reference of arrays
    System.out.println(list.get(0)); // reference of array 0
    System.out.println(list.get(0)[2]); // 0th array in list, 0th array, 3rd element of that array

    /**
     * apply binary search algorithm, pre-defined algo provide by Arrays class
     */
    Arrays.binarySearch(arr2, 0, 0, 0);
  }

}



public class Main {

  public static void main(String[] args) {
    int arr[] = { 3, 4, 5 };

    // resize array
    arr = Arrays.copyOf(arr, 4);
    System.out.println(arr[3]);

    // sort asc
    Arrays.sort(arr);
  }
}

```

## Arrays class

**Array Equality**

```java

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int a[] = { 1, 2, 3 };
        int b[] = { 1, 2, 3 };

        System.out.println(a.equals(b)); // false, because it check the reference of an object
        System.out.println(Arrays.equals(a, b)); // true
    }
}

```

**Multi-Dimensional-Array-Comparison**

```java

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int m1[][] = {
            {1,2}
        };
        int m2[][] = {
            {1,2}
        };

        System.out.println(Arrays.equals(m1, m2)); // not useful when array is multi-dimensional

        System.out.println(Arrays.deepEquals(m1, m2)); // true

    }
}

```
