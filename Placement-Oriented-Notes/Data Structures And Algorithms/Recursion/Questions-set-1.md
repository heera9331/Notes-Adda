Question 1

Print numbers in decreasing order

```cpp
static void printDec(int n) {
    if(n == 0) {
        return;
    }
    System.out.println(n);
    printDec(n-1);
}
```

Question 2

Print number in increasing order

```cpp
static void printIncre(int n, int c) {
    // base case
    if(n==c)  {
        System.out.println(c);
        return;
    }
    System.out.println(c);
    printIncre(n, c+1);   
}
```

Question 3

Factorial of a number

```java
static int factorial(int n) {
    if(n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
```

Question 4

nth Fibonacci

```cpp
 
static int fib(int n) {
    if(n == 0 || n == 1) { 
        return n;
    }
    int ans = fib(n-1) + fib(n-2);
    return ans;
} 
```

**Print binary string with no consecutive one’s**

```java
static void printBinaryString(int n, int lastPlace, String str) {
    if(n == 0) {
        System.out.println(str);
        return;
    }

    printBinaryString(n-1, 0, str+"0");
    if(lastPlace == 0) {
        printBinaryString(n-1, 1, str+"1");
    }
}
// n = 5
//00000
// 00001
// 00010
// 00100
// 00101
// 01000
// 01001
// 01010
// 10000
// 10001
// 10010
// 10100
// 10101
```

## POWER FUNCTION

→ Time complexity - O(N)

→ Space complexity - O(N)

```java
static int pow(int x, int n) {
    if(n == 0) {
        return 1;
    }
    return x * pow(x,n-1);
}
```

→ Time complexity - O(log n)

→ Space complexity - O(N)

```java
static int pow(int x, int n) {
    if(n == 0) return 1;

    if (n % 2 == 0) {
        return  pow(x, n/2) * pow(x, n/2);
    } else {
        return x * pow(x, n/2) * pow(x, n/2);
    }
}
```

## FRIENDS PAIRING

```java
static int friendsPairing(int n) {
    if(n == 1 || n == 2) {
        return n;
    }

    // choice 
    // single
    int fnm1 = friendsPairing(n-1);

    // pair
    int fnm2 = friendsPairing(n - 2);
    int pairWays = (n-1) * fnm2;

    // total ways
    int totalWays = fnm1+pairWays;
    return totalWays;

		// sort way
		// return friendsPairing(n-1) + (n-1) * friendsPairing(n-2);
}
```

## Remove Duplicates String

```java
static void removeDuplicates(String str, int idx, StringBuilder newStr, boolean map[]) {
        if(idx == str.length()) {
            System.out.println(newStr);
            return;
        }
        char currChar = str.charAt(idx);
        // false mean current character not contain new string
        if (map[currChar - 'a'] == false) {
            // append current character into new string
            newStr.append(currChar);

            // marked -> inserted into string builder
            map[currChar-'a'] = true;
            removeDuplicates(str, idx+1, newStr, map);
        } else {
            // if new string contain current character mean current skip
            removeDuplicates(str, idx+1, newStr, map);
        }
    }

// function call

removeDuplicates("apnnacollege", 0, new StringBuilder(""), new boolean[26]);
```

## Tiling Problem

```java
static int tilingPro(int n) {
    // length = n ,width = 2
    if(n == 0 || n == 1) return 1;
    // vertical choice
    int fnm1 = tilingPro(n-1);

    // horizontal choice 
    int fnm2 = tilingPro(n-2);

    int totalWays = fnm1 + fnm2;

    return totalWays;
}
```