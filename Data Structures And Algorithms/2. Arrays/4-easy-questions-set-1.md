# SET - 1

Q.1 Find minimum element in an Array.

Q2. Find maximum element in an Array.


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

**`
1 <= nums.length <= 105
`**

**`
-109 <= nums[i] <= 109
`**

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