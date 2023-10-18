# Drawing Book

## Solution

```cpp
int pageCount(int n, int p) {
    int flip = p/2;  
    if(flip > n/4) flip = n/2 - flip; 
    return flip;
}

```