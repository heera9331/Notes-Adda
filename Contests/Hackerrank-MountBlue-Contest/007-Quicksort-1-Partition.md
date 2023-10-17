# Quicksort 1 - Partition

## Solution

```java
public static List<Integer> quickSort(List<Integer> arr) {
// Write your code here
        if (arr == null || arr.size() <= 1) {
        return arr;
    }

    List<Integer> less = new ArrayList<>();
    List<Integer> equal = new ArrayList<>();
    List<Integer> greater = new ArrayList<>();

    int pivot = arr.get(arr.size() / 2);

    for (int num : arr) {
        if (num < pivot) {
            less.add(num);
        } else if (num > pivot) {
            greater.add(num);
        } else {
            equal.add(num);
        }
    }

    List<Integer> sorted = new ArrayList<>();
    sorted.addAll(quickSort(less));
    sorted.addAll(equal);
    sorted.addAll(quickSort(greater));

    return sorted;
}
```