# Sales by Match

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example

    n = 7
    ar = [1,2,1,2,1,3,2]

There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is .

**Function Description**

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock

**Returns**

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains space-separated integers, , the colors of the socks in the pile.

Constraints
1 <= n <= 100
1 <= ar[i] <= where 0 <= i < n

Sample Input

    STDIN      |                 Function

    9                           n = 9
    10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    Sample Output

    3
    Explanation

![stock image](./images/stock.png)

There are three pairs of socks.

## Solution

```java
public static int sockMerchant(int n, List<Integer> socks) {
 // Write your code here
 Map<Integer, Integer> sockCounts = new HashMap<>();
 // Count the occurrences of each color in the ArrayList
 for (int sock : socks) {
 sockCounts.put(sock, sockCounts.getOrDefault(sock, 0) +
1);
 }
 int totalPairs = 0;
 for (int count : sockCounts.values()) {
 totalPairs += count / 2;
 }
 return totalPairs;
 }

```
