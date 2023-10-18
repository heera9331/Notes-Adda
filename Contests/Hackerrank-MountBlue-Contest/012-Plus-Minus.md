# Plus Minus

## Solution

```python
def plusMinus(arr):
    pos=0
    neg=0
    zero=0
    
    for val in arr:
        if val > 0:
            pos+=1
        elif val < 0:
            neg+=1
            
        else:
            zero+=1

    n = len(arr)
    
    print(round(pos/n,6))
    print(round(neg/n,6))
    print(round(zero/n,6))
    
    
```

