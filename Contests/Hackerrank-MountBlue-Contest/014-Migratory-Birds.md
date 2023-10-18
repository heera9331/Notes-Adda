# Migratory Birds



## Solution

```python
def migratoryBirds(arr):
    n = len(arr)
    mp = [0]*(n+1)
    
    for val in arr:
        mp[val] += 1
    
    cnt=0;
    minVal=mp[0]
    
    for i in range(1, n+1):
        if cnt < mp[i]:
            minVal = i;
            cnt = mp[i]
    
    return minVal
```