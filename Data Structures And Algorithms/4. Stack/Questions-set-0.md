## 1. Longest Valid Parenthesis

**Example 1:**

```
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

```

**Example 2:**

```
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

```

**Example 3:**

```
Input: s = ""
Output: 0
```

[Longest Valid Parentheses - LeetCode](https://leetcode.com/problems/longest-valid-parentheses/description/)

```java
class Solution {
    public int maxConseq1s(int[] nums) {
        int n=nums.length;
        int ans=0;
        int cnt=0;
        for(int i=0; i<n; i++) {
            if (nums[i]==1){
                cnt+=1;
            } else {
                if (ans<cnt) {
                    ans=cnt;
                }
                cnt=0;
            }
        }
        if (ans<cnt) {
            ans=cnt;
        }
        cnt=0;
        return ans;
    }
    public int longestValidParentheses(String s) {
        Stack<Character> stack = new Stack<>();
        int a[]=new int[s.length()];
        ArrayList<Integer> tmp=new ArrayList<>();
        for(int i=0; i<s.length(); i++) {
            char ch=s.charAt(i);
            if (ch==')' && stack.isEmpty()) {
                a[i]=0;
            }

            else if (ch==')' && stack.peek()=='(') {
                stack.pop();
                a[tmp.remove(tmp.size()-1)]=1;
                a[i]=1;
            }

            else if (ch=='(') {
                stack.push(ch);
                tmp.add(i);
            }
        }

        return maxConseq1s(a);
    }
}

```

## 2. BEST TIME TO BUY AND SELL STOCK

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

```

**Constraints:**

- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 104`

Sol - 1

```cpp
public class Main {
    static int maxProfit(int[] prices) {
        int profit=0;
        for(int i=0; i<prices.length; i++) {
            int currPrice=prices[i];
            for(int j=i+1; j<prices.length; j++) {
                if(currPrice<prices[j]) {
                    profit=Math.max(profit, prices[j]);
                }
            }
        }

        return profit;
    }
    public static void main(String[] args) {
        int prices[]={7,1,5,3,6,4}; // O(N^2)
        System.out.println(maxProfit(prices));
    }
}
```

Sol-2

```cpp
public class Main {
    static int maxProfit(int[] prices) {
        int[] aux = new int[prices.length];
        int n = prices.length;
        int mx = prices[n - 1];
        for (int i = n - 1; i >= 0; i--) {
            mx = Math.max(mx, prices[i]);
            aux[i] = mx;
        }

        mx = 0;
        for (int i = 0; i < n; i++) {
            if (prices[i] < aux[i]) {
                mx = Math.max(mx, aux[i] - prices[i]);
            }
        }
        return mx;
    }

    public static void main(String[] args) {
        int prices[] = { 7, 6, 4, 3, 1 };
				// O(N) and O(N)
        System.out.println(maxProfit(prices));
    }
}
```

Sol 3

```cpp
	public class Main {
    static int maxProfit(int[] prices) {
        int n = prices.length;
        int min_so_far = prices[0];
        int profit = 0;
        for (int i = 1; i < n; i++) {
            min_so_far=Math.min(min_so_far, prices[i]);
            profit=Math.max(profit, prices[i]-min_so_far);
        }

        return profit;
    }

    public static void main(String[] args) {
        int prices[] = { 7, 1, 5, 3, 6, 4 };
        System.out.println(maxProfit(prices));
    }
}
```

## 3. **Best Time to Buy and Sell Stock II**

https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

```cpp
class Solution {
    public int maxProfit(int[] prices) {
        int profit=0;
        for(int i=1; i<prices.length; i++) {
            if(prices[i-1]<prices[i]) {
                profit += (prices[i]-prices[i-1]);
            }
        }

        return profit;
    }
}

```

## 4. Merge interval

```markdown
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

```cpp
class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        sort(intervals.begin(),intervals.end());
        int n = intervals.size();
        vector<vector<int>> ans;
        ans.push_back(intervals[0]);
        int temp = intervals[0][1];
        for(int i = 1;i<n;i++){
            if(temp >= intervals[i][0])
            {
                temp = max(intervals[i][1],temp);
                ans.back()[1] = temp;
            }
            else{
                ans.push_back(intervals[i]);
                temp = intervals[i][1];
            }
        }
        return ans;
    }
};
```

## 5. Insert interval

```cpp
add new interval to given interval and return call to merge inverval function.
```