# Birthday Cake Candles

## Solution

### Approach 1
```python
def birthdayCakeCandles(candles):
    hashMap = {}
    
    for val in candles:
        if hashMap.get(val)!=None:
            hashMap[val] = hashMap.get(val)+1
        else:
            hashMap[val] = 1
    
    # get tallest candle
    maxKey = max(hashMap)
    
    # return tallest candle frequency
    return hashMap[maxKey]

```

### Approach 2

efficient than previous
```python
def birthdayCakeCandles(candles):
    mx = max(candles)
    return candles.count(mx)

```