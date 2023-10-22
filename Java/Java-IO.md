# Java Input-Output

Input/Output is the one of the most essential part of every programming language, which is allows
you to interact with user's input and output.

In java there are many ways to take input from user and also provide many ways to display output.
But mainly Scanner class is used to take input from user, Scanner class contains different types of
methods to take different types of data from user.

```java
public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String input = sc.next(); // string input
    System.out.println(input);
  }
}

```


```java

public class Main {
  public static void main(String[] args) {
    try (Scanner sc = new Scanner(System.in)) {
      String s = sc.next();
      System.out.println(s);
      sc.close();
    }
  }
}

```


## INPUT-OUTPUT using files

Make sure you are already created two files, which is input.txt (for input) and output.txt (for output.txt)

```java

import java.io.File;
import java.io.PrintStream;
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    // System.out.println("Hello! World");
    File inputFile = new File("input.txt");
    File outputFile = new File("output.txt");
    try (Scanner sc = new Scanner(inputFile)) {
      System.setOut(new PrintStream(outputFile));
      System.out.println(sc.nextLine());
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }
}
```


One more example of reading inputfrom file

```java

public class Main {
  public static void main(String[] args) throws IOException {

    Scanner fileInput = new Scanner(Path.of("input.txt"),
        StandardCharsets.UTF_8);
    System.out.println(fileInput.nextLine());
  }
}

```


## Input/Output – BufferedReader and InputStreamReader


```java
public class Main {
  public static void main(String[] args) throws IOException {
    InputStreamReader isr = new InputStreamReader(System.in);
    BufferedReader brf = new BufferedReader(isr);
    System.out.println(brf.readLine()); // read line
    System.out.println(brf.read());// read input from input stream
  }
}

```

## I/O Formatting

Java has vast collection of I/O formatting method, to format output, as par you requirement.
printf() - method support all c programming formatting

```java

System.out.printf();

public class Main {
  public static void main(String[] args) {
    float PI = 3.1415f;
    System.out.println(PI); // 3.1415
    System.out.printf("%.3f", PI); // 3.141
  }
}

```

## Input Password

```java
import java.io.Console;
import java.io.IOException;
public class Main {
  public static void main(String[] args) throws IOException {
    Console console = System.console();
    System.out.println(console.readPassword());
  }
}

```