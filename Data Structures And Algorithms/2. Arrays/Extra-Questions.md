## **Merge Without Extra Space**

Given two sorted arrays **arr1[]** and **arr2[]** of \***\*sizes **n** and **m\*\* in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

**Example 1:**

```
Input:
n = 4, arr1[] = [1 3 5 7]
m = 5, arr2[] = [0 2 6 8 9]
Output:
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
Explanation:
After merging the two
non-decreasing arrays, we get,
0 1 2 3 5 6 7 8 9.
```

**Example 2:**

```
Input:
n = 2, arr1[] = [10, 12]
m = 3, arr2[] = [5 18 20]
Output:
arr1[] = [5 10]
arr2[] = [12 18 20]
Explanation:
After merging two sorted arrays
we get 5 10 12 18 20.

```

**Your Task:**You don't need to read input or print anything. You only need to complete the function **merge()** that takes arr1, arr2, n and m as input parameters and modifies them in-place so that they look like the sorted merged array when concatenated.

**Expected Time Complexity:**  O((n+m) log(n+m))

**Expected Auxilliary Space:** O(1)

```java
class Solution
{
    //Function to merge the arrays.
    public static void merge(long arr1[], long arr2[], int n, int m)
    {
         int j=n-1;

         for(int i=0; i<m && j>=0; i++) {
             if (arr1[j]>arr2[i]) {
                 long tmp = arr1[j];
                 arr1[j] = arr2[i];
                 arr2[i] = tmp;
                 j--;
             } else {
                 break;
             }
         }

         Arrays.sort(arr1);
         Arrays.sort(arr2);
    }
}
```

### **Good Stones**

Geek is in a geekland which have a river and some stones in it. Initially geek can step on any stone. Each stone has a number on it representing the value of exact step geek can move. If the number is +ve then geeks can move right and if the number is -ve then geeks can move left. Bad Stones are defined as the stones in which if geeks steps, will reach a never ending loop whereas good stones are the stones which are safe from never ending loops. Return the number of **good stones** in river.

Example 1:

```
Input: [2, 3, -1, 2, -2, 4, 1]
Output:3
Explanation:Index 3, 5 and 6 are safe only. As index 1, 4, 2 forms a cycle and from index 0 you can go to index 2 which is part of cycle.

```

!https://media.geeksforgeeks.org/img-practice/good_stones_png-1663740812.png

Example 2:

```
Input: [1, 0, -3, 0, -5, 0]
Output: 2
Explanation:Index 2 and 4 are safe only. As index 0, 1, 3, 5 form cycle.

```

**Your Task:**You don't need to read input or print anything. Your task is to complete the function badStones() which takes integer **n** and an array **arr** as input, and return an interger value as the number of good stones. Here n is the lenght of arr.

**Expected Time Complexity** : O(N), N is the number of stones**Expected Auxiliary Space** : O(N), N is the number of stones

```java


class Solution {
    public static int goodStones(int n, int[] arr) {
        int tmp[] = new int[n];

        // 0 - unvisited
        // 1 - visited but not devided
        // 2 - visited, good stone, goes to out of river

        int count=0;
        for(int i=0; i<n; i++) {
            if(tmp[i]==0) {
                helper(arr,tmp,i,n);
            }
            if(tmp[i]==2) {
                count++;
            }
        }
        return count;
    }
    static boolean helper(int arr[], int tmp[], int i, int n) {
        if(i<0 || i>=n || tmp[i]==2) {
            return true;
        }
        if(tmp[i]==1) {
            return false;
        }

        tmp[i]=1;
        boolean cc = helper(arr,tmp,i+arr[i],n);
        if(cc) {
            tmp[i]=2;
        }
        return cc;
    }
}
```

## **Single Element in a Sorted Array**

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return *the single element that appears only once*.

Your solution must run in `O(log n)` time and `O(1)` space.

**Example 1:**

```
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

```

**Example 2:**

```
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

```java
// O(n)
class Solution {
    public int  singleNonDuplicate(int[] arr) {
        int n = arr.length;
        if(n==1) {
            return arr[0];
        }

        for(int i=0; i<n; i++) {
            if(i==0) {
                if (arr[i]!=arr[i+1])
                    return arr[i];
            }
            else if(i==n-1 ) {
                if(arr[i-1]!=arr[i])
                    return arr[i];
            }
            else if(arr[i-1]!=arr[i] && arr[i]!=arr[i+1]) {
                return arr[i];
            }
        }
        return -1;
    }
}
```

## Rotate Array

https://leetcode.com/problems/rotate-array/submissions/749626604/

Given an unsorted array **arr[]** of size **N.** Rotate the array to the left (counter-clockwise direction) by **D** steps, where **D** is a positive integer.

**Example 1:**

```
Input:
N = 5, D = 2
arr[] = {1,2,3,4,5}
Output:3 4 5 1 2

Explanation:1 2 3 4 5  when rotated
by 2 elements, it becomes 3 4 5 1 2.
```

**Example 2:**

```
Input:
N = 10, D = 3
arr[] = {2,4,6,8,10,12,14,16,18,20}
Output:8 10 12 14 16 18 20 2 4 6
Explanation:2 4 6 8 10 12 14 16 18 20
when rotated by 3 elements, it becomes
8 10 12 14 16 18 20 2 4 6.
```

```java
static void reverse(int arr[], int start, int end) {
        while(start<end) {
            int t=arr[start];
            arr[start]=arr[end];
            arr[end]=t;
            start+=1;
            end-=1;
        }
    }
    //Function to rotate an array by d elements in counter-clockwise direction.
    static void rotateArr(int arr[], int d, int n)
    {
        d=d%n;
        reverse(arr,0,d-1);
        reverse(arr,d,n-1);
        reverse(arr,0,n-1);
    }
```

## **Add to Array-Form of Integer**

https://leetcode.com/problems/add-to-array-form-of-integer/description/

**Example 1:**

```
Input: num = [1,2,0,0], k = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234

```

**Example 2:**

```
Input: num = [2,7,4], k = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455

```

**Example 3:**

```
Input: num = [2,1,5], k = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
```

```python
class Solution {
    public List<Integer> addToArrayForm(int[] num, int k) {
        List<Integer> ans=new ArrayList<>();

        int n=num.length;

        int carry=0;
        for(int i=n-1; i>=0; i--){
            int lastdigit=k%10;
            int sum=num[i]+lastdigit+carry;

            ans.add(sum%10);
            carry=sum/10;
            k=k/10;
        }
        while(k!=0) {
            k+=carry;
            carry=0;
            ans.add(k%10);
            k/=10;
        }

        if (carry!=0)
            ans.add(carry);


        n=ans.size();

        for(int i=0; i<n/2; i++) {
            int front=ans.get(i);
            int last=ans.get(n-i-1);

            ans.set(i,last);
            ans.set(n-i-1,front);
        }

        return ans;
    }
}
```

## **Number of Zero-Filled Subarrays**

https://leetcode.com/problems/number-of-zero-filled-subarrays/

**Example 1:**

```
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation:
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
```

**Example 2:**

```
Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

```

**Example 3:**

```
Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.
```

```python
class Solution {
    public long zeroFilledSubarray(int[] nums) {
        long ans=0;
        int cnt=0;

        int n=nums.length;
        for(int i=0; i<n; i++) {
            if(nums[i]==0) {
                cnt++;
            } else {
                cnt=0;
            }
            ans+=cnt;
        }
        return ans;
    }
}
```

## **Remove Element**

https://leetcode.com/problems/remove-element/description/

```python
class Solution {
    public int removeElement(int[] arr, int val) {
        if (arr.length==0)
            return 0;
        int n = arr.length;
        for(int i=0; i<n; i++) {
            if(arr[i]==val) {
                arr[i]=Integer.MAX_VALUE;
            }
        }

        int iter=-1;
        for(int i=0; i<n;i++) {
            if(arr[i]==Integer.MAX_VALUE) {
                iter=i;
                break;
            }
        }
        if (iter==-1) {
            return arr.length;
        }
        for(int i=iter; i<n; i++) {
            if(arr[i]!=Integer.MAX_VALUE) {
                arr[iter++]=arr[i];
            }
        }
        arr[iter]=0;
        for(int i=0;i<arr.length; i++) {
            System.out.print(arr[i]+" ");
        }

        System.out.println();

        return iter;
    }
}
```
