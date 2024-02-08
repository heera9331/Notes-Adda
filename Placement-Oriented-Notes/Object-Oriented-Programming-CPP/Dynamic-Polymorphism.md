# Dynamic Polymorphism

Dynamic polymorphism is a type of polymorphism, In Dynamic Polymorphism when we have symbolic reference of any method at runtime called dynamic polymorphism.

## Virtual Function
- A virtual function is a member function declared within a base class (also called the parent class) and is marked with the virtual keyword.

- Derived classes (also called child classes) can override the virtual function by providing their own implementation.
When you call a virtual function on a base class pointer or reference that points to an object of a derived class, the appropriate derived class version of the function is executed. 
- This is known as dynamic binding or late binding.
Virtual functions are used to achieve runtime polymorphism.


```cpp
#include <iostream>
using namespace std;

class Base
{
public:
    virtual void print()
    {
        cout << "Base" << endl;
    }
};

class Derived : public Base
{
public:
    void print()
    {
        cout << "Derived" << endl;
    }
};

int main()
{
    Derived dobject;
    Base *boject = &dobject;

    boject->print(); // if virtual Derived, else Base

    return 0;
}
```



## Pure Virtual Function

- A pure virtual function is a special kind of virtual function that is declared in a base class but has no implementation in the base class.

- It is marked as pure virtual by appending = 0 to the function declaration. This means it must be overridden by any derived class, or the derived class will also become abstract.

- A class containing at least one pure virtual function becomes an abstract base class and cannot be instantiated. It's used as a blueprint for other classes to inherit from and implement the pure virtual function(s).

- Pure virtual functions are used to define an interface or a contract that derived classes must adhere to.

```cpp

#include <iostream>
using namespace std;

class AbstractClass
{
public:
    virtual void print() = 0;
};

class X : public AbstractClass
{
public:
    void print() override
    {
        cout << "I am implementated" << endl;        
    }
};

int main() {
    X x;

    x.print();

    return 0;
}

```