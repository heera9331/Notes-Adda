**Que.1 -** For a given set of strings, print the largest string.

“apple”, “mango”, “banana”

(lexicographically largest)

```java
static void largestString(String str[]) {
    String largest = str[0];
    for(int i=0; i<str.length ; i++) {
        if(largest.compareToIgnoreCase(str[i]) < 0) {
            largest=str[i];
        }
    }
    System.out.println(largest);
}

```

**Que.2 -** Lowercase to uppercase (Each first latter of word)

```java
static String toUpperCase(String str) {
    StringBuilder sb = new StringBuilder("");
    sb.append(Character.toString(Character.toUpperCase(str.charAt(0))));
    for(int i=1; i<str.length(); i++) {
        if(str.charAt(i-1) == ' ') {
            sb.append(Character.toUpperCase(str.charAt(i)));
        } else {
            sb.append(str.charAt(i));
        }
    }

    return sb.toString();
}
```

Que. 3 - String compression

```java
static String compressStr(String str) {
    StringBuilder sb = new StringBuilder("");

    for(int i=0; i < str.length(); i++) {
        Integer counter=1;
        while ((i < str.length() - 1) && (str.charAt(i) == str.charAt(i+1))) {
            counter++;
            i++;
        }
        sb.append(str.charAt(i));
        if (counter > 1) {
            sb.append(Integer.toString(counter));
        }
    }
    return sb.toString();
}
```

**Que. 4 - Substring**

name = “Heera”

number of sub-stirng = 5\*6/2 ⇒ 15

```markdown
input: Heera
Output:

H
He
Hee
Heer
Heera
e
ee
eer
eera
e
er
era
r
ra
a
```

```python
def subString(str):
    for i in range(len(str)):
        for j in range(i, len(str)):
            substring = ""
            for k in range(i,j+1):
                substring+=str[k]
            print(substring)
subString("Heera")
```

**Q - Count word**

```python
def countWord(s):
    # space = s.count(" ")
    # return space+1

    if len(s) == 1 or len(s) ==0:
        return 0

    space = 1

    for i in range(len(s)-1):
        if s[i]==' ' and s[i+1] !=' ':
            space+=1
    return space

s = "I am a data a analyst"

print(countWord(s))

# another way
print(len("I am data a analyst".split())+1)
```

## Number of wish

Description

You are given an string of size N, of characters from 'a' to 'z'.

You need to print number of times you can make "wish", using characters from string. You can use a character only once from the string.

[Use Key-Value pair based data structure]

Input

First line contains T, no of test cases.

First line of each test case contains N, size of string

Second line of each test case contains string S.

**Constraints**

1 <= T <= 10

1 <= N <= 10^6

Output

For each test case, print number of times you can make "wish"

Sample Input 1

```
2
7
wishash
8
wishwish
```

```python
def solve(s,n):
    d={
        "w":0,
        "i":0,
        "s":0,
        "h":0
    }

    for ch in s:
        if ch not in d:
            d[ch] = 0
        d[ch] = d[ch]+1

    mn = min(d.values())
    print(mn)
# INPUT
t = int(input())
while t:
    n = int(input())
    s = input()
    solve(s, n)

    t-=1
```
