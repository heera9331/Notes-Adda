# Staircase

Staircase detail

This is a staircase of size :

    n = 4

          #
        ##
      ###
    ####

## Solution

```java
public static void staircase(int n) {

    for(int i=1; i<=n; i++){
        for(int j=1; j<=n-i; j++){
            System.out.print(" ");            
        }
        for(int j=1; j<=i; j++) {
            System.out.print("#");
        }
        System.out.println();
    }
}
```