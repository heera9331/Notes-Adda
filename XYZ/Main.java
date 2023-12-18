// import java.util.ArrayList;
// import java.util.HashSet;
// import java.util.Collections;

// public class Main {
//     public static void main(String[] args) {
//         // ArrayList<ArrayList<Integer>> arr = new ArrayList<>();
//         // HashSet<Integer> set = new HashSet<>();
//         // set.add(3);
//         // set.add(4);
//         // arr.add(new ArrayList<>(set));
//         // System.out.println(set);
//         // System.out.println(arr);
//         ArrayList<Integer> list1 = new ArrayList<>();
//         // ArrayList<I/nteger> list2 = new ArrayList<>();

//         // list1.add(2);
//         // list2.add(4);

//         // list1.addAll(list2);/
//         // list1.add(2);
//         // list1.add(3);
//         // System.out.println(list1);
//         // Collections.reverse(list1);
//         // System.out.println(list1);

//     }
// }.

// import java.util.ArrayList;

// public class Main {
//     public static void main(String[] args) {
//         ArrayList<Integer> list = new ArrayList<Integer>();
//         int arr[] = new int[5];

//     }
// }

// import java.util.Stack;
// import java.util.stream.Stream;
// import java.util.Collections;

// public class Main {

//     public static void main(String[] args) {
//         Stack<Character> stack = new Stack<>();
//         stack.add('3');
//         stack.add('f');

//         System.out.println(stack);

//     }
// }

// public class Main {

//     // main is method
//     // public access modifier 
//     public static void main(String[] args) {
//         System.out.println("Hello World!");
//     }
// }

// class Super {
//     public Super() {
//         System.out.println("Super class const");
//     }

//     void meth1() {
//         System.out.println("Meth1 super");
//     }
// }

// class Child extends Super {
//     @Override
//     void meth1() {
//         System.out.println("meth1 in child");
//     }
// }

// public class Main {
//     public static void main(String[] args) {
//         Child c1 = new Child();
//         c1.meth1();
//     }
// }

// class Super {
//     Super() {
//         System.out.println("Super const");
//     }

//     Super(int x) {
//         System.out.println("Super const x");
//     }
// }

// class Sub extends Super {
//     Sub() {

//         System.out.println("Sub const");
//     }

//     Sub(int x) {
//         this();
//         System.out.println("sub class const called");
//     }

// }

// public class Main {
//     public static void main(String[] args) {
//         Sub s1 = new Sub(5);
//     }
// }

// class Outer {
//     class Inner {
//         void display() {
//             System.out.println("inner display");
//         }
//     }

//     Inner inner = new Inner();
// };

// public class Main {
//     public static void main(String[] args) {
//         Outer out = new Outer();
//         out.inner.display();

//     }
// }

// import java.util.Hashtable;

// public class Main {
//     public static void main(String[] args) {
//         Hashtable<Integer, Integer> ht = new Hashtable<>();

//         ht.put(3,4);

//         System.out.println(ht);
//     }
// }

// import java.net.URI;

// public class Main {
//     public static void main(String[] args) {
//         try {
//             // Creating a URL object
//             URI url = new URI("www.google.com");

//             System.out.println(url.getHost());
//             System.out.println(url.getScheme());
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }
// }

// import java.net.ServerSocket;
// import java.net.Socket;
// import java.io.BufferedReader;
// import java.io.InputStreamReader;

// public class Main {
//     public static void main(String[] args) {
//         try {
//             // Create a server socket
//             ServerSocket serverSocket = new ServerSocket(8080);

//             System.out.println("Server is listening on port 8080...");

//             // Wait for client connection
//             Socket clientSocket = serverSocket.accept();

//             // Read data from the client
//             BufferedReader reader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
//             String clientMessage = reader.readLine();
//             System.out.println("Received from client: " + clientMessage);

//             // Close sockets
//             reader.close();
//             clientSocket.close();
//             serverSocket.close();
//         } catch (Exception e) {
//             e.printStackTrace();
//         }
//     }
// }

import java.net.URI;
import java.net.http.*;
import java.net.http.HttpClient.Version;
import java.time.Duration;
import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        HttpRequest httpRequest = new HttpRequest() {
            @Override
            public String method() {
                return "GET";
            }

            @Override
            public Optional<BodyPublisher> bodyPublisher() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'bodyPublisher'");
            }

            @Override
            public Optional<Duration> timeout() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'timeout'");
            }

            @Override
            public boolean expectContinue() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'expectContinue'");
            }

            @Override
            public URI uri() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'uri'");
            }

            @Override
            public Optional<Version> version() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'version'");
            }

            @Override
            public HttpHeaders headers() {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'headers'");
            }

             

        };
    }
}


