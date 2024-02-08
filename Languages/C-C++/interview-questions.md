# C++ Top Interview Questions and answers

**1. What is C++ and how does it differ from C?**
**Answer:** C++ is an extension of the C programming language that includes features for object-oriented programming (OOP). Unlike C, C++ supports classes, objects, inheritance, polymorphism, and other OOP concepts.


**2. Explain the difference between a class and an object in C++.**
Answer: A class is a blueprint or template for creating objects, while an object is an instance of a class. Classes define the structure and behavior, and objects are actual instances with their own data and state.

**What is the difference between malloc and new in C++?**
Answer: malloc is a C library function for dynamic memory allocation, while new is an operator in C++ for both memory allocation and object instantiation. new also calls constructors, making it more suitable for C++ objects.

**Explain the concept of polymorphism in C++.**
Answer: Polymorphism allows objects of different classes to be treated as objects of a common base class. It is achieved through function overriding and virtual functions in C++, enabling dynamic method resolution.

**What is the difference between overloading and overriding?**
Answer: Overloading refers to defining multiple functions with the same name but different parameters in the same scope (e.g., function overloading). Overriding occurs when a derived class provides a specific implementation of a function that is already defined in its base class.

**What is a constructor and a destructor in C++?**
Answer: Constructors are special member functions used to initialize objects of a class, while destructors are used to clean up resources when an object goes out of scope. Constructors have the same name as the class and no return type, while destructors have the same name with a tilde (~) in front of it.

**What is the difference between const and volatile in C++?**
Answer: const is used to indicate that a variable's value cannot be modified, while volatile indicates that a variable's value can be changed by external factors, such as hardware.

**Explain the concept of a smart pointer in C++**.
Answer: Smart pointers are objects that manage the memory of dynamically allocated objects. They automatically release memory when it's no longer needed, helping to prevent memory leaks. Examples include std::shared_ptr, std::unique_ptr, and std::weak_ptr.

**What is the Standard Template Library (STL) in C++?**
Answer: The STL is a collection of C++ template classes and functions that provide common data structures (like vectors, lists, and maps) and algorithms (like sorting and searching) to simplify programming tasks.

**Explain RAII (Resource Acquisition Is Initialization) in C++.**
Answer: RAII is a C++ programming technique where resource management (e.g., memory allocation and deallocation) is tied to the lifetime of an object. Resources are acquired in the constructor and released in the destructor of an object, ensuring proper cleanup.

**What is the difference between public, private, and protected access specifiers in a class?**
Answer:
public: Members declared as public can be accessed from anywhere.
private: Members declared as private can only be accessed within the class.
protected: Members declared as protected can be accessed within the class and its derived classes.

**Explain the concept of operator overloading in C++.**
Answer: Operator overloading allows you to define new behaviors for C++ operators when used with user-defined data types. For example, you can overload the + operator to perform custom addition for class objects.

**What is the purpose of the friend keyword in C++?**
Answer: The friend keyword allows a non-member function or external class to access private and protected members of a class. It is often used when implementing operator overloads or providing external functions access to class internals.

**What is a virtual function in C++?**
Answer: A virtual function is a member function declared in a base class with the virtual keyword. It allows derived classes to provide their own implementation of the function, enabling dynamic binding or late binding.

**What is the difference between delete and delete[] in C++?**
Answer: delete is used to deallocate memory allocated with new for a single object, while delete[] is used to deallocate memory allocated with new[] for arrays of objects.

**What is the purpose of the const member function in C++?**
Answer: A const member function is a function that promises not to modify the object's data members. It is used to ensure that the object remains unchanged when the function is called on a const object.

**Explain the concept of multiple inheritance in C++.**
Answer: Multiple inheritance is a feature that allows a class to inherit from more than one base class. This can lead to the "diamond problem," which is resolved in C++ through virtual inheritance.

**What is a reference variable in C++?**
Answer: A reference is an alias for an existing variable. It allows you to work with the original variable through a different name. References are defined using the & symbol.

**What is the const_cast operator in C++?**
Answer: const_cast is used to remove the const qualifier from a pointer or reference, allowing you to modify a const object.

**Explain the difference between shallow copy and deep copy in C++.**
Answer: Shallow copy copies the references to objects, so changes in the copied object affect the original. Deep copy creates entirely new copies of objects, ensuring that changes in one do not affect the other.


**What is a template in C++?**
Answer: A template is a C++ feature that allows you to create generic classes and functions that work with different data types without code duplication. It is implemented using the template keyword.

**What is the purpose of the try, catch, and throw keywords in C++?**
Answer: try is used to enclose code that might throw an exception, catch is used to handle exceptions when they occur, and throw is used to manually throw an exception.

**What is the difference between a pointer and a reference in C++?**
Answer: A pointer is an object that holds the memory address of another object and can be reassigned. A reference is an alias for an existing object and cannot be reassigned after initialization.

**Explain the concept of typecasting in C++.**
Answer: Typecasting is the process of converting one data type into another. It can be done implicitly by the compiler or explicitly by the programmer using casting operators like static_cast, dynamic_cast, reinterpret_cast, and const_cast.

**What are the C++ Standard Library containers, and give an example of each?**
Answer: C++ Standard Library containers include std::vector (dynamic array), std::list (linked list), std::map (associative array), std::set (sorted set), std::queue (queue), std::stack (stack), and more. Provide examples of usage for each container.

**What is the purpose of the sizeof operator in C++?**
Answer: The sizeof operator is used to determine the size, in bytes, of a data type or object. It is often used when working with arrays, memory allocation, and ensuring proper memory alignment.

**Explain the difference between static and non-static member variables and functions in a class.**
Answer: static member variables and functions belong to the class itself rather than instances of the class. They are shared among all instances and can be accessed without creating objects. Non-static members are specific to individual objects.

**What is a lambda expression in C++?**
Answer: A lambda expression is an anonymous function that can be defined inline. It allows you to create small, disposable functions without needing to declare them separately. Lambda expressions are often used in conjunction with algorithms from the C++ Standard Library.
**What is the purpose of the const qualifier when declaring a pointer in C++?**

Answer: The const qualifier in a pointer declaration indicates that the pointer itself is constant and cannot be used to modify the pointed-to object. For example, const int* ptr means that ptr cannot be used to modify the integer it points to.
```
#include <stdio.h>

int main() {
  int var = 4;
  const int *ptr = &var;
  (*ptr)++;
  printf("%d\n", *ptr);
  printf("%d\n", var);
}

/**
 * main.c: In function 'main':
main.c:108:9: error: increment of read-only location '*ptr'
   (*ptr)++;
         ^~
*/
```


**What is the difference between deep copy and shallow copy of an object in C++?**
Answer: Deep copy involves creating a new object and copying the contents of the original object, including any dynamically allocated memory. Shallow copy involves copying the references to the original object's data, potentially leading to shared data.

**What are inline functions in C++?**
Answer: An inline function is a function that the compiler may expand inline at the point of call rather than generating a function call. It is used to reduce the overhead of function calls for small and frequently used functions.