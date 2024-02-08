# SET - 1

Q.1 Find minimum element in an Array.

Q2. Find maximum element in an Array.

---

## Q3 - Second Largest Element in an Array.

`Approach 1`

- same approach like finding the largest element in an array
- first we declare two variables `mx1` and `mx2` 
- `mx1` start largest and `mx2` 2nd largest element.
- we find apply largest element if a[i] > mx1 then we store greater element first we replace value of `mx1` by `mx2` just before of `mx1`
- like this if (a[i] > mx1) then mx2 = mx1 and also mx1=a[i]

`Complexity`

- Time Complexity - O(N)
- Space Complexity - O(1)

`Solution`

```java

static int largest2(ArrayList<Integer> arr) {
    int mx1 = arr.get(0);
    int mx2 = arr.get(0);
    for (int val : arr) {

        if (mx1 < val) {
            mx2 = mx1;
            mx1 = val;
        }
    }

    return mx2;
}
```

`Approach 2`

- Sort array of element into asc order, and return (n-2)th element in an array
- we applying sorting so TC is `n log (n)`

`Complexity`

- Time Complexity - O(N log N)
- Space Complexity - O(1)

`Solution`

```java

static int largest2(ArrayList<Integer> arr) {
    int n = arr.size();
    if(n == 1) {
        -1;
    }
    Collections.sort(arr);
    return arr.size(n-2);
}
```

---

### Repeated Array Element

```markdown
RepeatedElement(int arr[]) {
	// finds the repeated element from a[1:n]
	while(true) do {
		i := random() mod n+1 and j := random() mod n+1;
		// i and j are random numbers in range [1,n]
			if (i!=n and arr[i]==arr[j]) then   return i;
	}
}
```

```markdown

```

## Contains Duplicate

https://leetcode.com/problems/contains-duplicate/description/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
```
Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
```


#### Constraints:

`
1 <= nums.length <= 105
`

`
-109 <= nums[i] <= 109
`

#### Solution

``` cpp
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        int n1 = nums.size();
        
        set<int>s;
        
        for(int i=0; i<n1; i++) {
            s.insert(nums[i]);
        }
        
        int n2 = s.size();
        
        if (n1 == n2) {
            return false;
        }
        return true;
    }
};
```