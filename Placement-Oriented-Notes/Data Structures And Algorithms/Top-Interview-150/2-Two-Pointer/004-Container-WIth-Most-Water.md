
# Two Pointer New Aptimized approach

```java
class Solution {
    public int maxArea(int[] height) {
        int n = height.length;

        int start=0;
        int end=n-1;
        
        int mx=0;

        while(start<end) {
            int w = end-start;
            int h = Math.min(height[start], height[end]);
            int area = w * h;

            mx = Math.max(area, mx);

            while(start<end && height[start]<=h) {
                start++;
            }
            while(start<end && height[end]<=h) {
                end--;
            }
        }

        return mx;
    }
}


# TWO APPROACH

``````java
class Solution {
    public int maxArea(int[] arr) {
        int left=0;
        int right=arr.length-1;
        int water=0;
        while (left < right) {
            int mn = Math.min(arr[left], arr[right])*(right-left);
            if(water < mn){
                water=mn;
            }
            if(arr[left]<arr[right]) {
                left++;
            } else {
                right--;
            }
        }
        return water;
    }
}
```