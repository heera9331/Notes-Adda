# Subarray Division

`Function Description`

Complete the birthday function in the editor below.

birthday has the following parameter(s):

int s[n]: the numbers on each of the squares of chocolate
int d: Ron's birth day
int m: Ron's birth month

`Returns`

int: the number of ways the bar can be divided

    Sample Input 0

    5
    1 2 1 3 2
    3 2
    
    Sample Output 0

    2
    Explanation 0

## Solution

```python
def birthday(arr, d, m):
    # Get the length of the chocolate bar
    n = len(arr)
    
    # Set the initial count to 0
    cnt = 0

    # Iterate over the chocolate bar
    for i in range(n - m + 1):
        s = 0
        for j in range(i, i + m):
            s += arr[j]
        
        if s == d:
            cnt += 1
            
    return cnt

```