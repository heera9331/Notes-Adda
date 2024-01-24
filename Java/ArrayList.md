# ArrayList Assignment

**\*\***Q1. Monotonic ArrayList**\*\***

```java
/**
 * Main
 */
public class Main {
    public static boolean isMonotonic(ArrayList<Integer>  list) {
        boolean incre=true;
        boolean decre=true;
        for(int i=0; i<list.size()-1; i++) {
            if(list.get(i) > list.get(i+1)) {
                incre=false;
            }

            if(list.get(i) < list.get(i+1)) {
                decre=false;
            }
        }

        return incre || decre;
    }
    public static void main(String[] args) {

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(2);
        list.add(4);
        System.out.println(isMonotonic(list));

    }
}
```

**\*\***Q2. Lonely Array List**\*\***

```java
public class Main {
    static boolean oneOccurance(ArrayList<Integer> list, int key) {
        int count=0;
        for(int elm : list) {
            if (elm == key) {
                count++;
            }
        }

        // if (count == 1) {
        //     return true;
        // }
        // return false;

        return count == 1 ? true : false;
    }
    static void lonalyList(ArrayList<Integer> list) {
        ArrayList<Integer> ans = new ArrayList<>();
        for(int i=0; i<list.size(); i++) {
            int currElm = list.get(i);
            if (i == 0) {
                if((currElm != list.get(i+1)+1) && (currElm != list.get(i+1)-1) ) {
                        if (oneOccurance(list, currElm))
                            ans.add(currElm);
                }
            } else if (i == list.size()-1) {
                if((currElm != list.get(i-1)+1) && currElm != list.get(i-1)-1) {
                    if (oneOccurance(list, currElm))
                        ans.add(currElm);
                }
            } else {
                int prevElm = list.get(i-1);
                int nextElm = list.get(i+1);
                if(currElm != prevElm-1 && currElm != prevElm+1 && currElm != nextElm+1 && currElm != nextElm-1) {
                    if (oneOccurance(list, currElm))
                        ans.add(currElm);
                }
            }
        }

        for(int elm : ans) {
            System.out.println(elm);
        }
    }
    public static void main(String[] args)  {
        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(3);
        list.add(5);
        list.add(3);

        lonalyList(list);
    }

}
```

**\*\*\*\***Q3. Most frequent**\*\*\*\***
