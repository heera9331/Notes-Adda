### 1. POSITIVE OR NEGATIVE NUMBER

```c
#include <stdio.h>

// return 0 mean negative
// return 1 means positive
int checkNum(int n) {
    if(n>=0) {
        return 1;
    }
    return 0;
}

int main() {
    int n=-6;
    if(checkNum(n)) {
        printf("Positive\n");
    } else {
        printf("Negative\n");
    }
}
```

### 2. EVEN OR ODD NUMBER

```c

```

### 3. SUM OF FIRST N NATURAL NUMBERS

```c
#include <stdio.h>
#include <math.h>

int nsum(int n) {
    return (int)n*(n+1)/2;
}

// using loop
int sum(int n) {
    int s=0;
    for(int it=1; it<=n; it++) {
        s+=it;
    }
    return s;
}

// using recursion
int recSum(int n,int s) {
    if(n==0){
        return s;
    }
    return recSum(n-1,s+=n);
}

int main() {
    printf("%d\n", nsum(10)); // 55
    printf("%d\n", sum(10)); // 55
    printf("%d\n",recSum(10,0));
    return 0;
}
```

### 4. SUM OF NUMBERS IN A GIVEN RANGE

```c
#include <stdio.h>
#include <math.h>

int nSum(int n) {
    return (int)n*(n+1)/2;
}

int rangeSum(int a,int b) {
    return nSum(b) - nSum(a);
}
  
int main() {
    int a=20,b=30;
    int ans = rangeSum(a,b);
    printf("%d\n",ans);
    return 0;
}
```

### 5. GREATEST OF TWO NUMBERS

```c
int max(int a, int b) {
    return a > b ? a : b;
}
```

### 6. GREATEST OF THREE NUMBERS

```c
int max(int a, int b) {
    return a > b ? a : b;
}

int maxThree(int a, int b, int c) {
    return max(a,max(b,c));
}

// max between three number
int maxThree(int a, int b, int c) { 
    return a > b && a > c ? a : b > c && b > a ? b : c;
}

// min between three

int minThree(int a, int b, int c) {
    return a < b && a < c ? a : b < a && b < c ? b : c;
}

```

### 7. LEAP YEAR OR NOT

```c
// if year is leap year then we return 1 else 0
int isLeapYear(int year) {
    if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0) {
        return 1;
    }

    return 0;
}
```

### 8. PRIME NUMBER

```markdown
1 is not composite and nor prime number
```

```c
int isPrime(int n) {
		if (n==0 || n==1){
				return 0;
		}
    for(int it=2; it<=(int)sqrt(n); it++) {
        if(n%it==0) {
            return 0;
        }
    }
    return 1;
}
```

### 9. PRIME NUMBER WITHIN A GIVEN RANGE

```c
#include <stdio.h>
#include <math.h>

int isPrime(int n) {
    if (n==0 || n==1){
				return 0;
	}
    for(int it=2; it<=(int)sqrt(n); it++) {
        if(n%it==0) {
            return 0;
        }
    }
    return 1;
}
void primeRange(int a, int b) {
    for(int i=a; i<=b; i++){
        if(isPrime(i)) {
            printf("%d ",i);
        }
    }
    printf("\n");
}

int main() {
    primeRange(1,10);
    return 0;
}
```

### 10. SUM OF DIGITS OF A NUMBER

```c
#include <stdio.h> 

int digitSum(int n) {
    int s=0;
    if(n<10) {
        return n;
    }
    while(n!=0) {
        s+=n%10;
        n/=10;
    }
    return s;

}

// digit sum
int digitSum(int n) {
    if (n==0)
        return 0;

    return n%10 + digitSum(n/10);
}

int main() {
    int ans = digitSum(12345);
    printf("%d\n",ans);
    return 0;
}

```

### 11. REVERSE OF A NUMBER

```c
#include <stdio.h>

// reverse number
int reverseNum(int n, int s) {
    if (n == 0) {
        return s;
    }
    return reverseNum(n/10, s*10+n%10);
}

int reverseNum(int n) {
    int s=0;
    if(n<10) {
        return n;
    }
    while(n!=0) {
        s=s*10+n%10;
        n/=10;
    }
    return s;

}
int main() {
    int ans = reverseNum(12345);
    printf("%d\n",ans);
    return 0;
}
```

### 12. PALINDROME OF A NUMBER

```c
#include <stdio.h>

int isPalindromeNo(int num) {
    int tmp=num;
    int res=0;
    while(num) {
        res = res*10 + num%10;
        num /= 10;
    }
    
    return tmp==res;
}

int main() {
    int n = 12321;
    if(isPalindromeNo(n)){
        printf("Yes");
    } else {
        printf("No");
    }

    return 0;
}
```

### 13. ARMSTRONG NUMBER

sum of every digit’s cube is equal to that number, this is know as arm strong number

```c
int isArmStrongNum(int n) {
    int t=n;
    int s=0;

    while(n!=0) {
        int r = n%10;
        s+=r*r*r;
        n /= 10;
    }
    if(t==s) {
        return 1;
    }
    return 0;
}
```

### 14. ARMSTRONG NUMBER IN GIVEN RANGE

```c
#include <stdio.h> 

int isArmStrongNum(int n) {
    int t=n;
    int s=0;

    while(n!=0) {
        int r = n%10;
        s+=r*r*r;
        n /= 10;
    }
    if(t==s) {
        return 1;
    }
    return 0;
}
int main() {
    int ans = isArmStrongNum(153);
    if(ans) {
        printf("Yes");
    } else {
        printf("No");
    }
    return 0;
}
```

### 15. FIBONACCI SEARIES UPTO NTH TERM

```c
#include <stdio.h>

void fibo(int n) {
    int n0=0;
    int n1=1;
    printf("%d %d ", n0,n1);

    int idx=2;
    while (idx<=n) {
        int n2=n0+n1;
        printf("%d ",n2);
        n0=n1;
        n1=n2;
        idx++;
    }

}

int main() {
    int n = 5;
    fibo(n);
    return 0;
}
```

### 16. FIND THE NTH TERM OF FIBONACCI SEARIES

```c
#include <stdio.h>

int fibo(int n,int dp[]) {
    if(n==0) {
        return 0;
    }
    else if(n==1) {
        return 1;
    }
    if(dp[n]!=-1) {
        return dp[n];
    }
    return dp[n]=fibo(n-1,dp)+fibo(n-2,dp);
    
}

int main() {
    int n = 5; // 5
		// n=6 => 8
    int dp[n+1];

    for(int i=0; i<=n; i++) {
        dp[i]=-1;
    }

    printf("%d\n",fibo(n,dp));
    return 0;
}

// recursion 
#include <stdio.h>

int recFib(int n) {
    if(n==0) {
        return 0;
    }

    if(n==1) {
        return 1;
    }

    return recFib(n-1)+recFib(n-2);
}

int main(int argc, char const *argv[])
{
    int n = 5;
    printf("%d\n", recFib(n));
    return 0;
}
```

### 17. FACTORIAL OF A NUMBER

```c
#include <stdio.h>

void fibo(int n) {
    int n0=0;
    int n1=1;
    printf("%d %d ", n0,n1);

    int idx=2;
    while (idx<=n) {
        int n2=n0+n1;
        printf("%d ",n2);
        n0=n1;
        n1=n2;
        idx++;
    }

}

int main() {
    int n = 5;
    fibo(n);
    return 0;
}

// factorial of a number

int fact(int n) {
    if(n==0) {
        return 1;
    }
    return n*fact(n-1);
}
```

### 18. POWER OF A NUMBER

```c
#include <stdio.h>

int power(int x, int y) {
    if(y==0) {
        return 1;
    }

    return x * power(x, y-1);
}

int main() {
    int x = 3;
    int y = 2;
    int ans = power(x, y);
    printf("%d\n",ans);
    return 0;
}

// optimized
#include <stdio.h>

int power(int x, int y) {
    if(y==0) {
        return 1;
    }
    if(y%2==0) {
        return power(x,y/2)*power(x,y/2);
    }
    return power(x,y/2)*power(x,y/2)*x;
}

int main() {
    int x = 3;
    int y = 3;
    int ans = power(x, y);
    printf("%d\n",ans);
    return 0;
}
```

### 19. FACTORS OF A NUMBER

```c
#include <stdio.h>

void factors(int n) {
    for(int i=1; i<=n; i++){
        if(n%i==0) {
            printf("%d ",i);
        }
    }
    printf("\n");
}

int main() {
    factors(10);
    return 0;
}
```

### 20. FINDING PRIME FACTORS OF A NUMBER

```c
#include <stdio.h>
#include <math.h>

int isPrime(int n) {
    for(int it=2; it<=(int)sqrt(n); it++) {
        if(n%it==0) {
            return 0;
        }
    }
    return 1;
}
void factors(int n) {
    for(int i=2; i<=n; i++){
        if(n%i==0 && isPrime(i)) {
            printf("%d ",i);
        }
    }
    printf("\n");
}

int main() {
    factors(10); // 2 5
    return 0;
}
```

### 21. STRONG NUMBER

Strong number is defined as - the sum of the factorial of the digit is equal to the number. is called strong number

1! + 4! + 5! ⇒ 145

```c
#include <stdio.h>

int fact(int n)  {
    if(n==0) {
        return 1;
    }

    return n*fact(n-1);
}

int isStrongNum(int n) {
    long res=0;
    int tmp = n;
    while(n) {
        int rem=n%10;
        res += fact(rem);
        n /= 10;
    }

    return res == tmp;
}

int main() {
    int n = 145;
    printf("%d\n", isStrongNum(n));

    return 0;
}
```

### 22. PERFECT NUMBER

A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself).

6%1   yes

6%2  yes

6%3 yes

6%4 no

6%5 no

1 + 2 + 3 ⇒ 6

```c
#include <stdio.h>

int isPerfect(int n) {
    int res=0; 
    int tmp=n;
    for(int i=1; i<n; i++) {
        if(n%i==0) {
            res+=i;
        }
    }

    return res==tmp;
}

int main() {
    int n = 6;
    printf("result : %d\n", isPerfect(n));
}
```

### 23. PERFECT SQUARE

4 ⇒ 2 (perfect)

5 ⇒ **2.236068 (not perfect)**

```c
int isPerfectSquare(int num) {
    return floor(sqrt(num)) == sqrt(num);
}
```

### 24. AUTOMORPHIC NUMBER

An automorphic number is a number whose square ends with the number itself. For example, 5 is an automorphic number, because 5*5=25, and 25 ends with 5. Another example is 76, since 76*76=5776, which ends with 76. In C, you can check if a number n is an automorphic number by squaring it, converting the result to a string, and checking if the last n digits of the string match n.

```c
#include <stdio.h>
#include <string.h>

int isAutomorphic(int n) {
    int square = n*n;
    char str[100];
    sprintf(str,"%d",square);
    int len = strlen(str);

    for(int i=0; i<len; i++) {
        if(str[len-1-i]-'0'!=n%10) {
            return 0;
        }
        n/=10;
    }
    return 1;
}

int main() {
    int n=5;
    if(isAutomorphic(n)) {
        printf("%d is an automorphic number\\n",n);
    } else {
        printf("%d is not an automorphic number\\n",n);
    }
    return 0;
}

```

```c

```

### 25. HARSHAD NUMBER

```c

```

### 26. ABUNDANT NUMBER

```c

```

### 27. FRIENDLY NUMBER

```c

```

### 28. HIGHEST COMMON FACTOR (HCF)

```c
#include <stdio.h>

// Function to find GCD using Euclid's algorithm
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("LCM of %d and %d is %d", a, b, lcm(a, b));
    return 0;
}
```

### 29. LOWEST COMMON MULTIPLE (LCM)

```c
#include <stdio.h>

// Function to find GCD using Euclid's algorithm
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

// Function to find LCM
int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}

int main() {
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("LCM of %d and %d is %d", a, b, lcm(a, b));
    return 0;
}
```

### 30. BINARY TO DECIMAL CONVERSION

```c

```

### 31. OCTAL TO DECIMAL CONVERSION

```c

```

### 32. HEXADECIMAL TO DECIMAL CONVERSION

```c

```

### 33. DECIMAL TO BINARY CONVERSION

```c

```

### 34. DECIMAL TO HEXADECIMAL CONVERSION

```c

```

### 35. DECIMAL TO OCTAL CONVERSION

```c

```

### 36. OCTAL TO BINARY CONVERSION

```c

```

### 37. QUADRANTS IN WHICH A GIVEN COORDINATE LIES

```c

```

### 38. PERMUTATIONS IN WHICH N PEOPLE CAN OCCUPY R SEATS IN A CLASSROOM

```c

```

### 39. MAXIMUM NUMBER OF HANDSHAKE

```c

```

### 40. ADDITION OF TWO FRACTIONS

```c

```

### 41. REPLACE ALL 0’S WITH 1 IN A GIVEN INTEGER

```c

```

### 42. CAN A NUMBER BE EXPRESSED AS A SUM OF TWO PRIME NUMBERS

```c

```

### 43. COUNT POSSIBLE DECODING OF A GIVEN DIGIT SEQUENCE

```c

```

### 44. CALCULATE AREA OF A CIRCLE

```c
// AC - Base, BC - Height
float circleArea(AC, BC) {
	return 0.5 * (AC) * (BC)
}
```

### 45. FIND THE PRIME NUMBERS BETWEEN 1 TO 100

```markdown
if prime then return 1 else 0

int isPrime(num) {
	if num is 1 or 2
		return 0
	end if
	
	for i=2 to less than or equal to sqrt(num)
		if num%i is divisible then
			return 0
		end if
	end for
	reutrn 1
}

printPrimeNumber() {
	for i=1 to i<=100
		if isPrime(i) is 1 then
			print(i)
		end if
	end for
}
```

```c

```

### 46. CALCULATE THE NUMBER OF DIGITS IN AN INTEGER

```c
int calcDigit(num) {
	cnt=0
	while (num != 0) {
		cnt=cnt+1
		num=num/10
	}

	return cnt
}
```

### 47. CONVERT DIGIT/NUMBER TO WORD

```c

```

### 48. COUNTING NUMBER OF DAYS IN A GIVEN MONTH OF A YEAR

```c

```

### 49. FINDING NUMBER OF TIMES X DIGIT OCCUR IN A GIVEN INPUT

```c

```

### 50. FINDING NUMBER OF INTEGERS WHICH HAS EXACTLY X DIVISORS

```c

```

### 51. FINDING ROOTS OF A QUADRATIC EQUATION

```c
#include <stdio.h>
#include <math.h>

int main() {
    float a, b, c, discriminant, root1, root2, real_part, imaginary_part;

    printf("Enter coefficients a, b and c: ");
    scanf("%f %f %f", &a, &b, &c);

    discriminant = b * b - 4 * a * c;

    // Real and different roots
    if (discriminant > 0) {
        root1 = (-b + sqrt(discriminant)) / (2 * a);
        root2 = (-b - sqrt(discriminant)) / (2 * a);
        printf("Roots are %.2f and %.2f", root1, root2);
    }
    // Real and equal roots
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        printf("Roots are %.2f and %.2f", root1, root2);
    }
    // Imaginary roots
    else {
        real_part = -b / (2 * a);
        imaginary_part = sqrt(-discriminant) / (2 * a);
        printf("Roots are %.2f+%.2fi and %.2f-%.2fi", real_part, imaginary_part, real_part, imaginary_part);
    }

    return 0;
}
```

### 52. PROGRAM TO CALCULATE LENGTH OF THE STRING USING RECURSION

```c

```

### 53. PRINT ALL PERMUTATIONS OF A STRING

```c

```

### 54. GIVEN A LIST OF ARR OF N INTEGERS, PRINT SUMS OF ALL SUBSETS IN IT

```c

```

### 55. LAST NON-ZERO DIGIT IN FACTORIAL

```c

```

### 56. GIVEN A POSITIVE INTEGER N, RETURN THE NTHE ROW OF PASCAL’S TRIANGLE.

```c
#include <stdio.h>

int main() {
    int row, coef = 1;
 
    scanf("%d", &row);
 
    for (int i = 0; i <= row; i++) {
        if (i == 0 || row == 0) {
            coef = 1;
        } else {
            coef = coef * (row - i + 1) / i;
        }
        printf("%d ", coef);
    }

    return 0;
}
```

Given an integer `numRows`, return the first numRows of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

![PascalTriangleAnimated2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/1df6f3b2-c793-4856-91a1-6a839cf6dbb9/7918aa5f-5d78-4d73-96e4-3b2f9631feac/PascalTriangleAnimated2.gif)

```c
Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
```

```python
# print pascal triangle

class Solution:
    def generate(self, n: int) -> List[List[int]]:
 
        if n == 0:
            return []
        elif n == 1:
            return [[1]]
        elif n == 2:
            return [[1], [1,1]]
 
        main = [[1], [1,1]]
        n -= 2

        while (n):
            tmp = [1]
            last_row = main[-1]
            for i in range(1, len(last_row)):
                tmp.append(last_row[i-1]+last_row[i])
            tmp.append(1)

            main.append(tmp)

            n-=1

        return main
```

### 57. GIVEN AN INTEGER N REPRESENTING THE NUMBER OF PAIRS OF PERENTHESES, THE TASK IS TO GENERATE OF COMBINATIONS OF WELL-FORMED(BALANCED) PARENTHESIS.

```c

```

### 58. FIND ALL POSIBLE PALINDROMIC PARITIONS OF THE GIVEN STRING

```c

```

### 59. FIND ALL THE N BIT BINARY NUMBERS HAVING MORE THAN OF EQUAL 1’S THAN 0’S

```c

```

### 60. GIVEN A SET OF POSITIVE INTEGERS, FIND ALL IS SUBSETS

```c

```

### 61. GIVEN A STRING S, REMOVE ALL ITS ADJACENT DUPLICATE CHARACTERS RECURSIVLY

```c

```

# ARRAYS

### 62. FIND LARGEST ELEMENT IN AN ARRAY

```c
int max(a[],n){
	mx=a[0]
	for i=1 to i<=n
		if mx<a[i]
			mx=a[i]
		end if
	end for

	reutrn mx
}
```

### 63. FIND SMALLEST ELEMENT IN AN ARRAY

```c
int min(a[],n){
	mn=a[0]
	for i=1 to i<=n
		if mn>a[i]
			mn=a[i]
		end if
	end for

	reutrn mn
}
```

### 64. FIND THE SMALLEST AND LARGEST ELEMENT IN AN ARRAY

```c
mn = a[0]
mx = a[0]

for(i = 1; to n-1) {
	if mn > a[i]
		mn = a[i]
	if mx < a[i]
		mx = a[i]
}

print "max is " mx
print "min is " mx
```

### 65. FIND SECOND SMALLEST ELEMENT IN ARRAY

```c
largest = max(arr)
s_l = a[0]
for (i=1 to n-1) {
	if a[i]>s_l and largest != a[i]
		s_l = a[i]
}

return s_l
```

### 66. CALCULATE THE SUM OF ELEMENTS IN AN ARRAY

```c
s = 0
for (i=0 to i=n-1)
	s = s + a[i]

return s
```

### 67. REVERSE AN ARRAY

```c
reversea(a[],n) {
	left=0
	right=n-1
	while (left < right) {
		t=a[left]
		a[left]=a[right]
		a[right]=t

		left=left+1
		right=right-1
	}
}
```

### 68. SORT FIRST HALF IN ASCENDING ORDER AND SECOND HALF IN DESCENDING ORDER

```c

```

### 69. SORT THE ELEMENTS OF AN ARRAY

```c
// bubble sort algorithm

swap(a[],i,j) {
	t=a[i]
	a[i]=a[j]
	a[j]=t	
}

sort(a[],n) {
	for i=0 to i<n
		for j=0 to j<n-i-1
			if a[j] smaller than a[j+1] then
				swap(a,i,j)
			end if
		end for
	end for
}

```

### 70. FINDING THE FREQUENCY OF ELEMENTS IN AN ARRAY

```c
cnt = 0
key : to be count

for (i=0 to n-1){
	if a[i]==key

		cnt++
}

return cnt
```

### 71. FINDING THE LONGEST PALINDROME IN AN ARRAY

```c

```

### 72. COUNTING DISTINCT ELEMENTS IN AN ARRAY

```c

```

### 73. FINDING REPEATING ELEMENTS IN AN ARRAY

```c

```

### 74. FINDING NON-REPEATING ELEMENTS IN ARRAY

```c

```

### 75. REMOVING DUPLICATES ELEMENTS FROM AN ARRAY

```c

```

### 76. FINDING MINIMUM SCALLER PRODUCT OF TWO VECTORS

```c

```

### 77. FINDING MAXIMUM SCALLER PRODUCT OF TWO VECTORS IN AN ARRAY

```c

```

### 78. COUNTING THE NUMBER OF EVEN AND ODD ELEMENTS IN AN ARRAY

```c

```

### 79. FIND ALL SYMMETRIC PAIRS IN AN ARRAY

```c

```

### 80. FIND MAXIMUM PRODUCT SUB-ARRAY IN A GIVEN ARRAY

```c

```

### 80. FINDING ARRAYS OF DISJOINT OR NOT

```c

```

### 81. DETERMINE ARRAY IS A SUBSET OF ANOTHER ARRAY OR NOT

```c

```

### 82. DETERMINE CAN ALL NUMBERS OF AN ARRAY MADE EQUAL

```c

```

### 83. FINDING MINIMUM SUM OF ABSOLUTE DIFFERENCE OF GIVEN ARRAY

```c

```

### 84. SORT AN ARRAY ACCORDING TO THE ORDER BY DEFINED BY ANOTHER ARRAY

```c

```

### 85. REPLACE EACH ELEMENT OF THE ARRAY BY ITS RANK IN THE ARRAY

```c

```

### 86. FINDING EQUILIBRIUM INDEX OF AN ARRAY

```c

```

### 87. ROTATION OF ELEMENTS OF ARRAY LEFT AND RIGHT

```c

```

### 88. BLOCK SWAP ALGORITHM FOR ARRAY ROTATION

```c

```

### 89. JUGGLING ALGORITHM FOR ARRAY ROTATION

```c

```

### 90. FINDING CIRCULAR ROTATION OF AN ARRAY BY K POSITIONS

```c

```

### 91. BALANCED PARENTHESIS PROBLEM

```c

```

### 92. GIVEN AN ARRAY WHICH CONSISTS OF ONLY 0, 1, 2. SORT THE ARRAY WITHOUT USING ANY ALGORITHM

```c

```

### 93. FIND THE KTH MAX AND MIN ELEMENT OF AN ARRAY

```c

```

### 94. MOVE ALL THE NEGATIVE ELEMENTS TO ONE SIDE OF THE ARRAY

```c

```

### 95. FIND THE UNION AND INTERSECTION OF THE TWO SORTED ARRAYS

```c

```

### 96. FIND LARGEST SUM CONTIGUOUS SUBARRAY

```c

```

### 97. MINIMIZ THE MAXIMUM DIFFERENCE BETWEEN HEIGHTS

```c

```

### 98. MINIMUM NO. OF JUMPS TO REACH THE END OF THE ARRAY

```c

```

### 99. FIND DUPLICATES IN AN ARRAY OF N+1 INTEGERS

```c

```

### 100. MERGE 2 SORTED ARRAYS WITHOUT USING EXTRA SPACE

```c

```

## 101. Add Digits

There are different ways to solve this problem . This problem is pretty straight forward , so in the **BRUTE FORCE** approach , you simply have to **implement what has been asked** in the question. You can do that using both **RECURSION and ITERATION**.

Following are the codes :

### **RECURSION :**

```java
class Solution {
public:
    int addDigits(int num) {
      int sum=0;
        while(num)
        {
            sum+=(num%10);
            num/=10;
        }
        if(sum<10)
            return sum;
        else
            return addDigits(sum);
    }
};
```

**ITERATION :**

```java
class Solution {
public:
    int addDigits(int num) {
      int sum=0;
        while(num>9)
        {
            while(num)
            {
                sum+=(num%10);
                num/=10;
            }
            num=sum;
            sum=0;
        }
        return num;
    }
};
```

The O(1) approach says :

1. Check if the number is 0 or not . If num==0 , return 0. Else do the following.
2. Check if (num%9)==0 . If it is true , return 9. Else return (num%9).

```java
class Solution {
public:
    int addDigits(int num) {
      if(num==0)
          return 0;
      else if(num%9==0)
          return 9;
      else
          return num%9;
    }
};
```

## 102. Power Function

```java
public class Main {
    // SC-O(n) and TC-O(n)
    static int power(int base, int expo) {
        if (expo==0){
            return 1;
        }
        int helfPower=power(base, expo/2);
        int helfPowerSq=helfPower*helfPower;

        if (expo%2 != 0){
            return base*helfPowerSq;
        }
        return helfPowerSq;
    }
    public static void main(String[] args) {
        System.out.println(power(3,3));
    }
}
```

## 103. Binary Modulo

You are given a binary **string s** and an **integer m**. You need to return an **integer r**. Where **r = k%m**, k is the binary equivalent of **string s**.

**Example 1:**

```
Input:s = "101"
m = 2
Output:1
Explanation: Here k=5 because (101)2 = (5)10.
Hence 5 mod 2 = 1.
```

**Example 2:**

```
Input:s = "1000"
m = 4
Output:0
Explanation: Here k=8 and m=4 hence
r = k mod m = 8 mod 4 = 0.
```

```java
Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)

Constraints:
1 <= len(s) <= 105
1 <= m <= 100
```

```java
int x = 0;
      for(int i=0;i<s.length();i++)
      {
          int temp = s.charAt(i)-'0';
          x = ((x<<1)+temp)%m;
      }
      return x;
}
```

## 104. MINIMAL NUMBER

```java
input:
3
4
2 1 0 0
4
1 4 2 3
4
5 2 3 2

output:
1002
1234
2235
```

```java
def make_integer(a: list[int]):
    a.sort()
    n=
len(a)
    if a[0]==0:
        vis=[False]*n
        num=0
        for i in range(n):
            val = a[i]
            if val!=0:
                num=val
                vis[i]=True
                break
        for i in range(n):
            if vis[i]==False:
                num = num*10 + a[i]

        print(num)
    else:
        num=0
        for val in a:
            num = num*10 + val

        print(num)

T=int(input())
while T:
    n=int(input())
    a=list(map(int,input().split()))
    make_integer(a)
    T-=1

```

## 106. Solid Rectangle

Note - Print any star pattern, the way is to think that is output window treated as an 2d matrix or table, print any pattern start with * and also - mixed, after successfully got logic of pattern then replace - with space.

```c
*----        *
**---        **
***--   ==>  ***  
****-        ****
*****        *****
```

```jsx
******
******
******
******
******
******
```

```jsx
#include <iostream>
using namespace std;

int main() {
    int n = 6;
    
    for(int i=0; i<n; i++) {
        for(int j=0;j<n; j++) {
            cout << "*";
        }    
        cout << endl;
    }
    return 0;
}
```

## 107. Hollow Rectangle

```jsx
******
*    *
*    *
*    *
*    *
******
```

```jsx
#include <iostream>
using namespace std;

int main() {
    int n = 6;
    
    for(int i=0; i<n; i++) {
        for(int j=0;j<n; j++) {
           if(i == 0 || j == 0 || i == n-1 || j == n-1) {
               cout << "*";
           } else {
               cout << " ";
           }
        }    
        cout << endl;
    }
    return 0;
}
```

## 108. Half Pyramid

```jsx
*
**
***
****
***** 
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = ;
    
    for(int i=0; i<n; i++) {
        for(int j=0;j<=i; j++) {
           cout << "*" ;
        }    
        cout << endl;
    }
    return 0;
}
```

## 109. Inverted Half Pyramid

```c

*****
****
***
**
*
```

```c
#include <iostream>
using namespace std;

int main() {
    int n =;
    
    for(int i=0; i<n; i++) {
        for(int j=0;j<n-i; j++) {
           cout << "*" ;
        }    
        cout << endl;
    }
    return 0;
}
```

## 110. Half Pyramid 180 Degree

```c
		  *
     **
    ***
   ****
  *****
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0; i<n; i++) {
        for(int j=0;j<n-i; j++) {
           cout << " " ;
        }    
        
        for(int j=0;j<=i; j++) {
           cout << "*" ;
        }   
        cout << endl;
    }
    return 0;
}
```

## 111. Half Pyramid 180 Degree Rotated

```c

 *****
  ****
   ***
    **
     *
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0; i<n; i++) {
        for(int j=0;j<=i; j++) {
           cout << " " ;
        }   
        for(int j=0;j<n-i; j++) {
           cout << "*" ;
        }    
        cout << endl;
    }
    return 0;
}
```

## 112. Diamond

```c
		*
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0; i<n; i++) { 
        for(int j=n-i-1; j>0; j--) {
            cout << " ";
        }
        for(int j=0; j<=2*i; j++) {
            cout << "*";
        }
         
        cout << endl;
    }
    for(int i=n-2; i>=0; i--) { 
        for(int j=n-i-1; j>0; j--) {
            cout << " ";
        }
        for(int j=0; j<=2*i; j++) {
            cout << "*";
        }
         
        cout << endl;
    }
    return 0;
}
```

## 113. Hollow Diamond

```c
		*
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0; i<n; i++) { 
        for(int j=n-i-1; j>0; j--) {
            cout << " ";
        }
        for(int j=0; j<=2*i; j++) {
            if (j==0 || j==2*i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
         
        cout << endl;
    }
    for(int i=n-2; i>=0; i--) { 
        for(int j=n-i-1; j>0; j--) {
            cout << " ";
        }
       for(int j=0; j<=2*i; j++) {
            if (j==0 || j==2*i) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
         
        cout << endl;
    }
    return 0;
}
```

## 114. Hollow Diamond Inscribed

```c
**** ****
***   ***
**     **
*       *
         
*       *
**     **
***   ***
**** ****
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0; i<n; i++) { 
        for(int j=n-i-1; j>0; j--) {
            cout << "*";
        }
        for(int j=0; j<=2*i; j++) {
            cout << " ";
        }
        for(int j=n-i-1; j>0; j--) {
            cout << "*";
        } 
        cout << endl;
    }
    for(int i=n-2; i>=0; i--) { 
        for(int j=n-i-1; j>0; j--) {
            cout << "*";
        }
        for(int j=0; j<=2*i; j++) {
            cout << " ";
        }
        for(int j=n-i-1; j>0; j--) {
            cout << "*";
        } 
        cout << endl;
    }
    return 0;
}
```

## 115. Rhombus

```c
		*****
   *****
  *****
 *****
*****
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0;i<n; i++) {
        for(int j=0; j<n-i-1; j++) {
            cout << " ";
        }
        for(int j=0; j<n; j++) {
            cout << "*";
        }
        cout << endl;
    }
}
```

## 116. Hollow Rhombus

```c
		*****
   *   *
  *   *
 *   *
*****

```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    for(int i=0;i<n; i++) {
        for(int j=0; j<n-i-1; j++) {
            cout << " ";
        }
        for(int j=0; j<n; j++) {
            if(i == 0 || j==0 || i==n-1 || j==n-1) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }
}
```

## 117. Butterfly

```c
*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    for(int i=0; i<n; i++) {
        for(int j=0; j<=i; j++) {
            cout << "*";
        }
        for(int j=0; j<2*(n-i-1); j++) {
            cout << " ";
        }
        for(int j=0; j<=i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    
    for(int i=n-2; i>=0; i--) {
        for(int j=0; j<=i; j++) {
            cout << "*";
        }
        for(int j=0; j<2*(n-i-1); j++) {
            cout << " ";
        }
        for(int j=0; j<=i; j++) {
            cout << "*";
        }
        cout << endl;
    }
    
}
```

## 118.  Hollow Diamond Inscribed

```c
**********
****  ****
***    ***
**      **
*        *
**      **
***    ***
****  ****
**********
```

```c
#include <iostream>
using namespace std;

int main() {
    int n = 5;
    
    
    for(int i=1; i<=n; i++) {
         
        for(int j=1;j<=n-i+1; j++) {
            cout << "*";
        }
        
        for(int j=1; j< 2*i-1; j++) {
            cout << " ";
        }
        for(int j=1;j<=n-i+1; j++) {
            cout << "*";
        }
        cout << endl; 
    }
     for(int i=n-1; i>=1; i--) {
         
        for(int j=1;j<=n-i+1; j++) {
            cout << "*";
        }
        
        for(int j=1; j< 2*i-1; j++) {
            cout << " ";
        }
        for(int j=1;j<=n-i+1; j++) {
            cout << "*";
        }
        cout << endl; 
    }
    
     
    
    return 0;
}
```

## 119.  Zig-Zag