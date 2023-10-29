# Mutable Immutable Objects

Mutable means changeable, and immutable mean not change.

If we perform modifications on mutable object then it modifies original content, but immutable object create a new copy of itself and make modifications, return new object, every time creates new object.

Immutable object – String
Mutable - StringBuilder, StringBuffer

```java

public class Main {

  public static void main(String[] args) {
    // immutable -> not changeble
    String str = "heera";
    str.concat("singh");

    // mutable -> changeble
    StringBuilder sb = new StringBuilder("heera");
    sb.append("singh");
    System.out.println(str);
    System.out.println(sb);
  }
}




public class Main {
  // dynamic type print method
  static <T> void print(T arg) {
    System.out.println(arg);
  }

  public static void main(String[] args) {

    String str = "Heera Singh Lodhi";
    print(str);
  } 
}

```