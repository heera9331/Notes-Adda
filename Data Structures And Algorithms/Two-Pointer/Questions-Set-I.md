**\*\*\*\***Que.1 - Container with most water.**\*\*\*\***

```python
/**
 * Main
 * container with most water
 * brute force approach
 * TC - O(N^2)
 */
public class Main {
    static int storeWater(ArrayList<Integer> height) {
        int maxWater = 0;
        for(int i=0; i<height.size(); i++) {
            for(int j=i+1; j<height.size(); j++) {
                int width = j-i;
                int minHeight = Math.min(height.get(i), height.get(j));
                int currWater = minHeight*width;
                maxWater = Math.max(maxWater, currWater);
            }
        }

        return maxWater;
    }
    public static void main(String[] args) {
        // int height[] = {1,8,6,2,5,4,8,3,7};
        ArrayList<Integer> height = new ArrayList<>();
        height.add(1);
        height.add(8);
        height.add(6);
        height.add(2);
        height.add(5);
        height.add(4);
        height.add(8);
        height.add(3);
        height.add(7);
        int water = storeWater(height);
        System.out.println(water);
    }
}
```

```java
/**
 * Main
 * container with most water
 * brute force approach
 * TC - O(N)
 */
public class Main {

    static int storeWater(ArrayList<Integer> height) {
        int maxWater = 0;
        int left=0,right=height.size()-1;
        while(left < right) {
            int width = right-left;
            int minHeight = Math.min(height.get(left), height.get(right));
            int currWater = minHeight*width;
            maxWater = Math.max(currWater, maxWater);

            // update pointers
            if (height.get(left) > height.get(right)) {
                right--;
            } else {
                left++;
            }
        }

        return maxWater;
    }
    public static void main(String[] args) {
        // int height[] = {1,8,6,2,5,4,8,3,7};
        ArrayList<Integer> height = new ArrayList<>();
        height.add(1);
        height.add(8);
        height.add(6);
        height.add(2);
        height.add(5);
        height.add(4);
        height.add(8);
        height.add(3);
        height.add(7);
        int water = storeWater(height);
        System.out.println(water);
    }
}
```

\***\*\*\*\*\*\*\***Que2. Pair-I Sum\***\*\*\*\*\*\*\***

```java
/**
 * Main
 * Pair Sum - I
 * Brute Force approach
 * TC - O(N^2)
 */
public class Main {
    static boolean pairSum1(ArrayList<Integer> list, int target) {
        for(int i=0; i<list.size(); i++) {
            for(int j=i+1; j<list.size();j++) {
                if(list.get(i) + list.get(j) == target) {
                    return true;
                }
            }
        }
        return false;
    }
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        int target=5;
        System.out.println(pairSum1(list, target));
    }
}
```

![Screenshot (25).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3f542d56-34fb-4654-b019-691ca259938c/Screenshot_(25).png>)

```java
/**
 * Main
 * Pair Sum - I
 * 2 Pointer approach
 * TC - O(N)
 * Special case - Array is sorted
 */
public class Main {
    static boolean pairSum1(ArrayList<Integer> list, int target) {
        int left=0, right=list.size()-1;

        while(left != right) {
            int sum = list.get(left)+list.get(right);
            if(sum == target) {
                return true;
            }

            if(sum > target) {
                right--;
            } else {
                left++;
            }
        }
        return false;
    }
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        int target=5;
        System.out.println(pairSum1(list, target));
    }
}
```

****\*\*\*\*****\*\*\*\*****\*\*\*\*****Ques. 3 - Pair Sum - II****\*\*\*\*****\*\*\*\*****\*\*\*\*****

Find it any pair in a Sorted & Rotated ArrayList has a target sum

![Screenshot (26).png](<https://s3-us-west-2.amazonaws.com/secure.notion-static.com/037c5104-4d82-4f8e-82c3-f713a3d6a010/Screenshot_(26).png>)

```java
/**
 * Main
 * Two Pointer approach
 * TC - O(N)
 */
public class Main {
    public static boolean pairSum2(ArrayList<Integer> list, int target)  {
        int breakingPoint=-1;
        int n = list.size();
        for(int i=0; i<list.size(); i++) {
            if(list.get(i) > list.get(i+1)) {
                breakingPoint=i; break;
            }
        }

        // inialize pointer
        int left=breakingPoint+1; // smallest element
        int right=breakingPoint; // greatest elm

        while (left != right) {

            // case 1
            if(list.get(left) + list.get(right) == target) {
                return true;
            }

            // case 2
            if(list.get(left) + list.get(right) < target) {
                left=(left+1) % n;
            } else {
                // case 3
                right=(n+right-1) % n;
            }

        }
        return false;

    }
    public static void main(String[] args) {
                ArrayList<Integer> list = new ArrayList<>();
                list.add(11);
                list.add(15);
                list.add(6);
                list.add(8);
                list.add(9);
                list.add(10);
                int target=16;
                System.out.println(pairSum2(list, target));
            }
}
```
