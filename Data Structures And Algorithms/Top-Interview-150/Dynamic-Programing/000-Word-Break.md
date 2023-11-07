# Word Break

`Link`



`Description`



`Testcases`



## Constraints



## Approach 1

- we approach brute force to solve question.
- for iterate a word from [1 to n] and each iteration
- we break wordk into two part left=s[0: i] and right = s[i:] 
    if left part contains the dictionary than we check right if contains or not, if wordDict contains both left and right than we return true
    else
        nothing
    
    we recursively check the right part present into dictionary of not


## Complexity

`Time Complexity - O(n^2)`

`Space Complexity - O(n)`

## Solution

```java
class Solution {
    
    public boolean wordBreak(String s, List<String> wordDict) {
        if(wordDict.contains(s)) {
            return true;
        }

        for(int i=1; i<=s.length(); i++) {
            String l = s.substring(0, i);
            String r = s.substring(i);
            if(wordDict.contains(l) && wordBreak(r, wordDict)) {
                return true;
            }
        }

        return false;
    }
}
```

## Approach 2

- we approach brute force to solve question.
- for iterate a word from [1 to n] and each iteration
- we break wordk into two part left=s[0: i] and right = s[i:] 
    if left part contains the dictionary than we check right if contains or not, if wordDict contains both left and right than we return true
    else
        nothing
    
    we recursively check the right part present into dictionary of not
- we are checking repeatadly the word present or not in dictionary, so its
- time comsuming, so we make a hashtable to store previous result

## Complexity

`Time Complexity - O(n)`

`Space Complexity - O(n)`

## Solution

```java
class Solution {
    Map<String, Boolean>map = new HashMap();
    public boolean wordBreak(String s, List<String> wordDict) {
        if(wordDict.contains(s)) {
            return true;
        }
        if (map.containsKey(s)) {
            return map.get(s);
        }
        for(int i=1; i<=s.length(); i++) {
            String l = s.substring(0, i);
            String r = s.substring(i);
            if(wordDict.contains(l) && wordBreak(r, wordDict)) {
                map.put(s, true);
                return true;
            }
        }
        map.put(s, false);
        return false;
    }
}
```