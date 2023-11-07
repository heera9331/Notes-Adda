// #include <iostream>
// using namespace std;

// class Base
// {
// public:
//     virtual void print()
//     {
//         cout << "Base" << endl;
//     }
// };

// class Derived : public Base
// {
// public:
//     void print()
//     {
//         cout << "Derived" << endl;
//     }
// };

// int main()
// {
//     Derived dobject;
//     Base *boject = &dobject;

//     boject->print();

//     return 0;
// }

// #include <iostream>
// using namespace std;

// class AbstractClass
// {
// public:
//     virtual void print() = 0;
// };

// class X : public AbstractClass
// {
// public:
//     void print() override
//     {
//         cout << "I am implementated" << endl;
//     }
// };

// int main() {
//     X x;

//     x.print();

//     return 0;
// }

// #include <iostream>
// using namespace std;

// class Student
// {
// public:
//     string name;
//     int age;
//     Student(string name, int age)
//     {
//         this->name = name;
//         this->age = age;
//     }

//     Student(const Student &obj)
//     {
//         this->name = obj.name;
//         this->age = obj.age;
//     }

//     void printInfo()
//     {
//         cout << age << endl;
//         cout << name << endl;
//     }
// };

// int main()
// {
//     Student s1("rahul", 21);

//     Student s2(s1);
//     s2.age = 22;
//     s1.printInfo();
//     s2.printInfo();
//     return 0;
// }
// #include <iostream>
// #include <cstdlib>

// using namespace std;

// class Student
// {
// public:
//     int *marks;

//     Student(const int marks[])
//     {
//         this->marks = (int *)malloc(2 * sizeof(int));
//         this->marks[0] = marks[0];
//         this->marks[1] = marks[1];
//     }

//     // Deep copy constructor
//     Student(const Student &other)
//     {
//         this->marks = (int *)malloc(2 * sizeof(int));
//         this->marks[0] = other.marks[0];
//         this->marks[1] = other.marks[1];
//     }

//     ~Student()
//     {
//         free(marks);
//     }
// };

// int main()
// {
//     int marks[2] = {2, 3};

//     Student s1(marks);
//     Student s2(s1);

//     s1.marks[0] = 21;
//     cout << s1.marks[0] << endl;
//     cout << s2.marks[0] << endl;

//     return 0;
// }

// #include <iostream>
// using namespace std;

// class Student
// {
// public:
//     int age;
//     string name;

//     Student()
//     {
//         cout << "constructor called" << endl;
//     }
//     Student(string name, int age)
//     {
//         cout << "constructor called" << endl;
//         this->age = age;
//         this->name = name;
//     }

//     ~Student()
//     {
//         cout << "destructor called" << endl;
//     }
// };

// int main() {
//     Student s1("rahul", 21);

//     return 0;
// }

// #include <iostream>
// using namespace std;

// int main()
// {
// int arr[] = {4, 5, 6, 7};

// int *p = (arr + 1);
// cout << *arr + 9 << endl;
// return 0;

// int a = 10, b = 5, c = 3;
// b != !a;
// c = !!a;

// printf("%d %d\n", b, c);

//     float num1 = 1.1;
//     double num2 = 1.1;

//     if (num1 == num2)
//         cout << "Yes";
//     else
//         cout << "No";
//     return 0;
// }

// #include <iostream>
// using namespace std;

// class Employee
// {
// private:
//     int salary;

// public:
//     void setSalary(int _salary)
//     {
//         salary = _salary;
//     }

//     int getSalary()
//     {
//         return salary;
//     }
// };

// int main()
// {
//     Employee e1;
//     e1.setSalary(230000);
//     cout << e1.getSalary() << endl;
//     return 0;
// }

// by changing there number of parameters
// by changing there data type
// by changing there return type

// #include <iostream>
// using namespace std;

// class Calculator
// {
// public:
//     int sum(int a, int b)
//     {
//         return a + b;
//     }

//     string sum(string str1, string str2)
//     {
//         return str1 + str2;
//     }
// };

// int main()
// {
//     int a = 4;
//     int b = 5;

//     Calculator c1;
//     c1.sum(a, b);
//     cout << c1.sum("Rahul", "Singh") << endl;
//     return 0;
// }

// #include <iostream>
// using namespace std;

// class Num
// {
// public:
//     int n;

//     Num(int n)
//     {
//         this->n = n;
//     }

//     Num &operator++()
//     {
//         ++n;
//         return *this;
//     }

//     int getNum()
//     {
//         return n;
//     }
// };

// int main()
// {
//     Num n1(5);

//     cout << n1.getNum() << endl;
//     ++n1;

//     cout << n1.getNum() << endl;
//     return 0;
// }
 
// #include <iostream>
// using namespace std;

// class A {
//     public:
//     A() {
//         cout << "A's contructor called" << endl;
//     }
// };

// class B : virtual public A {
//     public:
//     B() {
//         cout << "B's constructor called" << endl;
//     }
// };

// class C : virtual public A {
//     public:
//     C() {
//         cout << "C's constructor called" << endl;
//     }
// };

// class D : public B, public C {
//     public:
//     D() {
//         cout << "D's constructor called" << endl;
//     }
// };

// int main() {
//     D *d1 = new D();

//     return 0;
// }

// A's contructor called
// B's constructor called
// A's contructor called
// C's constructor called
// D's constructor called

