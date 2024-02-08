# Class
<hr>

Object-oriented programming is a type of programming which is based on objects rather than functions and procedures. 
In OOPs, everything treated as object. 

**Features of oops/characteristics** –

- Encapsulation 
- Abstraction 
- Polymorphism 
- Inheritance

`Programming Language`
Programming language is a way to communicate with computer system, just we communicate to each other using Hindi or English language.

`There are two type of programming languages`

→ 1. Function oriented programming languages
Example – C Programming

→ 2. Object-Oriented programming language

- 2.1. Object based – C++, Java, Python
- 2.2 Object-Oriented – Visual Basic, 
- 2.3 Pure object-oriented programming 
- language only one have – SMALLTALK.


## OOP vs POP

| OOP | POP |
| ---------- | --- |
| OOP stands for Object-oriented programming. | POP stands for procedural oriented programming. |
| Program is divided into parts called objects. | Program is divided into small parts called function. |
| It follows bottom-up approach. | It follows top-down approach. |
| It has access specifiers names as public, protected and private. | It has no access specifier. |
| It is secure than POP. | It is lesser secure than OOP. |
| Overloading is possible in the form of function overloading and operator overloading.
| Overloading is not possible | Example of Object-Oriented Programming languages are: C++, Java, Python, VB.NET, C#.NET, JavaScript | Example of Procedure Oriented Programming languages are: C, FORTRAN, Pascal.|


## Class

A class is a blueprint or template that defines the structure, behavior, and attributes of objects. It is a conceptual representation of a real-world entity or a logical entity in a program. A class acts as a blueprint from which objects, also known as instances, can be created.

- Class is a user-defined data type
- Class is an abstract data type
- Class is a keyword in Java

```java

class Student {
  
}

```

```cpp

Syntax:
class Class_Name       // class - keyword , ClassName - user-defined name
{
    access specifier         // can be private, public or protected
    Data member           // variable to be used
    Member Function() {}  // method to access data member
};                             // class name ends with a semicolon

// real world example
#include <bits/stdc++.h>
using namespace std;

class Student {
    // private and public are access specifier/modifier
    // data member
    private:
    int age;
    public:
    string name;
    string gender;

    // constructor initialize member of class
      public:
Student(string name, string gender, int age) {
        this->name = name;
        this->gender = gender;
        this->age = age;
    }

    // public member method used to display information of student
    void displayInfo() {
        cout << "Name of student is : "<< name << endl;
        cout << "Gender of student is: " << gender << endl;
        cout << "Age if student is: " << age << endl;
    }
};

int main() {
    // here s1 is object of Student class
    Student s1("Heera Singh Lodhi", "Male", 20);
    s1.displayInfo();
    return 0;
}

/*
Output
Name of student is : Heera Singh Lodhi
Gender of student is: Male
Age if student is: 20

*/
```

## Object 


An object is an instance of a class. It represents a specific entity in the real world, and it encapsulates both data (properties or attributes) and behaviour (methods). 

- Object is a run time entity.
- Object is a physical entity.
- Object is real world entity.
- Object is a collection of member variable.
- Object stored into heap area.
- Heap is a part of main memory (RAM).


