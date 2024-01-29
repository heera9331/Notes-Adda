Question1:

For a given integer array of size  N. You have to find all the occurrences(indices) of a given element(Key) and print them. Use a recursive function to solve this problem. 

Sample Input: 

arr = {3, 2, 4, 5, 6, 2, 7, 2, 2},

key = 2

Sample Output: 1 5 7 8

```java
static void solve(int[] arr, int currentIdx, int key)  {
    if (arr.length == currentIdx) {
        return;
    }
    if (arr[currentIdx] == key) {
        System.out.println(currentIdx);
    }
    solve(arr, currentIdx+1, key);
}
```

Question 2 :

You are given a number (eg - 2019), convert it into a String of English like “two zero one nine”. Use a recursive function to solve this problem.

NOTE-The digits of the number will only be in the range 0-9 and the last digit of a number can’t be 0.

Sample Input: 1947

Sample Output: “one nine four seven”

```java
public static void printDigits(int number) {
    if(number==0) {
        return;
    }
    int lastDigit=number%10;
    printDigits(number/10);
    System.out.print(digits[lastDigit]+" ");
}
```

Question 3 :Write a program to find Length of a String using Recursion.

```java
public static int length(String str) {
    if(str.length() ==0) {
        return 0;
    }
    return length(str.substring(1)) +1;
}
```

 

Question 4:

We are given a string S, we need to find the count of all contiguous substrings starting and ending with the same character.

Sample Input 1: 

S = "abcab"

Sample Output 1: 7 

There are 15 substrings of "abcab" : a, ab, abc, abca, abcab, b, bc, bca, bcab, c, ca, cab, a, ab, b

Out of the above substrings, there are 7 substrings: a, abca, b, bcab, c, [a and b.So](http://aandb.so/),only 7 contiguous substrings start and end with the same character.

```cpp
public static int countSubstrs(String str,int i,int j,int n) {
	if(n==1) {
		return 1;
	}
	if(n<=0) {
		return 0;
	}
	int res=countSubstrs(str,i+1,j,n-1)+countSubstrs(str,i,j-1,n-1)-countSubstrs(str,i+1,j-1,n-2);
	if(str.charAt(i) ==str.charAt(j)) {
		res++;
	}
}
```

 

Question 5 : TOWER OF HANOI(Important!)

You have 3 towers and N disks of different sizes which can slide on to any tower. The puzzle starts with disks sorted in ascending order of size from to p to bottom (i.e., each disks its on top of an even larger one).

You have the following constraints:

```markdown
(1) Only one disk can be moved at a time.

(2) A disk is slid off the top of one tower onto another tower.

(3) A disk cannot be placed on top of a smaller disk. 

Write a program to move the disks from the first tower to the last using Stacks. 

Let rod 1 = 'A', rod 2 = 'B', rod 3 = 'C'.

An example with 2 disks i.e. N=2:

Step 1 : Shift the first disk from 'A' to 'B'.

Step 2 : Shift the second disk from 'A' to 'C'.

Step 3 : Shift the first disk from 'B' to 'C'.

An example with 3 disks i.e. N=3 :

Step 1 : Shift the first disk from 'A' to 'C'.

Step 2 : Shift second disk from 'A' to 'B'.

Step 3 : Shift the first disk from 'C' to 'B'.

Step 4 : Shift the third disk from 'A' to 'C'.

Step 5 : Shift the first disk from 'B' to 'A'.

Step 6 : Shift second disk from 'B' to 'C'.

Step 7 : Shift the first disk from 'A' to 'C'.
```

```java
public static void toh(int n, char src, char helper, char dst) {
    if(n == 0) {
        System.out.println("Transfer disk " + n + " from " + src + " to " + dst);
        return;
    }
    toh(n-1, src, dst, helper);
    System.out.println("Transfer disk " + n + " from " + src + " to " + dst);
    toh(n-1, helper, src, dst);
}
```