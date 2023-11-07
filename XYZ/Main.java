// import java.util.ArrayList;

// public class Main {
//     public static void main(String args[]) {
//         // System.out.printf("%ld", 1/2);

//         int nums[] = { 0, 0, 1, 1, 1, 2, 3, 4, 4 };
//         ArrayList<Integer> a = new ArrayList<>();

//         for (int i = 0; i < nums.length; i++) {

//             while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
//                 i++;
//             }
//             a.add(nums[i]);
//         }

//         System.out.println(a);
//     }
// }

// public class Main {
//     public static void main(String args[]) {
//         String str = "";
//         str += Integer.valueOf(45);
//         System.out.println(str);

//         Integer val = Integer.valueOf(str);
//         StringBuilder sb = new StringBuilder("34");
//         // System.out.println(val);

//         System.out.println(val);
//     }
// }

// public class Main {
//   public static void main(String[] args) {
//     System.out.println("heera\singh");
//   }
// }

/**
 * Main
 */
// public class Main {

//   public static void main(String[] args) {
// Integer s = 4;
// Object o = new Object();
// System.out.println(o.getClass());
// Integer var = 34;
// System.out.println(var.getClass());
// Integer $var = (int)'3';
// System.out.println($var);
// int var;
// var = 4;
// System.out/.println(var);

// int var;

// System.out.println(var);

//   }
// }

// System.out.println(3 + ' ' + 4);
// System.out.println(3 + " " + 4);
/**
 * Main
 */

// public class Main {

// public static void main(String[] args) {

// int var = 4;
// var--;
// System.out.println(var);
// }
// }

// Output ?

// import java.io.Console;

// /**
// * Main
// */
// public class Main {

// public static void main(String[] args) {
// Console con = System.console();
// System.out.println(con.readPassword());

// }
// }

// import java.util.PriorityQueue;

// /**
// * Main
// */
// public class Main {

// public static void main(String[] args) {
// PriorityQueue<Integer> pq = new PriorityQueue<>((a,b)->(a.intValue() -
// b.intValue()));
// pq.add(1);
// pq.add(3);
// pq.add(4);
// // System.out.println(pq.peek());
// // if (pq.isEmpty() != false) {
// // System.out.println("not ");
// // }
// // else {
// // System.out.println("Equal");
// // }
// }
// }

// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.List;

// /**
//  * Main
//  */
// public class Main {
//   public static void main(String[] args) {
//     int arr[] = { 3, 2, 4, 1 };
//     int arr2[] = { 3, 2, 4, 1 };
//     /*
//      * String str = Arrays.toString(arr) -> [3, 2, 4, 1]
//      * str.charAt(0) -> [
//      */
//     System.out.println(Arrays.toString(arr));

//     // compare to array object
//     System.out.println(Arrays.equals(arr, arr2));

//     // array of list
//     List<int[]> list = new ArrayList<>(Arrays.asList(arr));
//     list.add(new int[]{3,4});
//     System.out.println(list); // reference of arrays
//     System.out.println(list.get(0)); // reference of array 0
//     System.out.println(list.get(0)[2]); // 0th array in list, 0th array, 3rd element of that array

//     /**
//      * apply binary search algorithm, pre-defined algo provide by Arrays class
//      */
//     Arrays.binarySearch(arr2, 0, 0, 0);
//   }

// }

// import java.util.Arrays;
// import java.util.Collections;
// import java.util.Comparator;

// /**
//  * Main
//  */
// public class Main {

//   public static void main(String[] args) {
//     int arr[] = { 3, 4, 5 };

//     // resize array
//     arr = Arrays.copyOf(arr, 4);
//     System.out.println(arr[3]);

//     // sort asc
//     Arrays.sort(arr); 
//   }
// }

/**
 * Main
 */

// public class Main {

// public static void main(String[] args) {
// String str = "heera";
// str.concat("singh");
// StringBuilder sb = new StringBuilder("heera");
// sb.append("singh");
// System.out.println(str);
// System.out.println(sb);
// }
// }

// public class Main {
// static <T> void print(T arg) {
// System.out.println(arg);
// }

// public static void main(String[] args) {

// String str = "Heera Singh Lodhi";
// print(str);
// }
// }

// class Parent {
// public Parent() {
// System.out.println("parent executed");
// }

// public void meth1(int x) {
// System.out.println("method1 from parent");
// }
// }

// class Child extends Parent {
// public Child() {
// System.out.println("child executed");
// }

// public void meth1(float x) {
// System.out.println("meth1 child from child");
// }
// }

// public class Main {
// public static void main(String[] args) {
// Child ch1 = new Child();
// ch1.meth1(4.0f);
// }
// }

// class X {
//     int x = 1;
// }

// class Y extends X {
//     public Y() {
//         System.out.println(x);
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         // System.out.println(4 + 6 + 3 + 1 + 3 + "" + 8);

//         Y y1 = new Y();

//     }
// }

// public class Main {
//     static void print(int x) {
//         System.out.println(x);
//     }

//     static void print(int x, int y=3) {
//         System.out.println(x+" "+y);
//     }
// }

// import java.util.ArrayList;

import java.util.ArrayList;

/**
 * Main
 */
// public class Main {
// static abstract class X {
// public X(){}

// void print() {
// System.out.println("Try");
// }
// }

// static class Y extends X {

// }

// public static void main(String[] args) {
// Y y1 = new Y();
// y1.print();
// }
// }

// public class Main {
// static int largest2(ArrayList<Integer> arr) {
// int mx1 = arr.get(0);
// int mx2 = arr.get(0);
// for (int val : arr) {

// if (mx1 < val) {
// mx2 = mx1;
// mx1 = val;
// }
// }

// return mx2;
// }

// public static void main(String[] args) {
// ArrayList<Integer> arr = new ArrayList<>();
// arr.add(1);
// arr.add(6);
// arr.add(2);
// arr.add(4);
// arr.add(5);
// arr.add(7);

// System.out.println(largest2(arr));
// }
// }

// public class Main {
// public static void main(String[] args) {
// int bitMask = 1 << 0;

// System.out.println(bitMask);
// }
// }

// import java.util.ArrayList;
// import java.util.Collections;

// /**
// * Main
// */
// public class Main {
// static int countBit(int n) {
// return Integer.bitCount(n);
// }

// static class Pair {
// int num;
// int bits1;

// public Pair(int num, int bits1) {
// this.num = num;
// this.bits1 = bits1;
// }
// }

// static int[] fn(int arr[]) {
// ArrayList<Pair> ans = new ArrayList<>();
// for (int val : arr) {
// int cnt = countBit(val);
// ans.add(new Pair(val, cnt));
// }
// Collections.sort(ans, (a,b)->(a.bits1 - b.bits1));

// int fans[] = new int[ans.size()];
// int k=0;
// for(Pair p: ans) {
// fans[k++] = p.num;
// }

// return fans;
// }

// public static void main(String[] args) {

// }
// }

// import ja/va.util.ArrayDeque;
// import java.util.ArrayList;
// import java.util.LinkedList;
// import java.util.Queue;

// /**
// * Main
// */
// public class Main {
// static class Node {
// int val;
// Node left;
// Node right;

// public Node(int val) {
// this.val = val;
// this.left = this.right = null;
// }
// }

// static void preorder(Node root) {
// if (root == null) {
// return;
// }
// System.out.println(root.val);
// preorder(root.left);
// preorder(root.right);
// }

// static void bfs(Node root) {
// ArrayList<ArrayList<Node>> levelOrder = new ArrayList<>();

// ArrayList<Node> currLevel = new ArrayList<>();
// ArrayList<Node> tmp = new ArrayList<>();

// currLevel.add(root);

// levelOrder.add(currLevel);

// for(Node e: currLevel) {
// if(e!=null)
// tmp.add(e);

// tmp.add(e.right);
// }
// }

// public static void main(String[] args) {
// Node root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);

// root.left.left = new Node(4);
// root.left.right = new Node(5);

// root.right.left = new Node(6);
// root.right.right = new Node(7);
// preorder(root);
// }
// }

// public class Main {
// public static void main(String args[]) {
// int n = 5;
// for (int i = 0; i < n; i++) {
// int j = 0;
// for (j = 1; j <= i; j++) {
// }
// }
// }
// }

// import java.util.HashMap;

// public class Main {
// public static void main(String args[]) {
// // ArrayList<Integer> list = new ArrayList<>();
// // list.add(4);
// // System.out.println(list.remove(list.size()-1));

// HashMap<Integer, Integer> map = new HashMap<>();

// map.put(3, 2);
// map.put(2, 1);

// }
// }

// public class Main {
//     public static void main(String[] args) {

//         float num1 = 1.1;
//         double num2 = 1.1;

//         if (num1 == num2) {
//             System.out.println("Yes");
//         } else {
//             System.out.println("No");
//         }
//     }
// }