# Bill Division

Function Description

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill
Input Format

The first line contains two space-separated integers  and , the number of items ordered and the -based index of the item that Anna did not eat.
The second line contains  space-separated integers  where .
The third line contains an integer, , the amount of money that Brian charged Anna for her share of the bill..

```java

public static void bonAppetit(List<Integer> bill, int k, int b) {
// Write your code here
    Integer tmp = bill.get(k);
    
    int s=0;
    for(Integer val : bill) {
        s += val;
    }
    s -= tmp;
    
    s /= 2;
    
    if (b - s > 0) {
        System.out.println(b-s);
    } else {
        System.out.println("Bon Appetit");
    }

}
```