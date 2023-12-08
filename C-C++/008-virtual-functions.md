# Virtual Function:

A virtual function is a member function of a base class that can be overridden by a derived class. When a base class has a virtual function, you can provide a specific implementation of that function in a derived class. The function to be called is determined at runtime based on the actual type of the object.

```cpp
// Normally
#include <iostream>

using namespace std;

class Base {
    public:
    void print() {
        cout << "base\n";
    }
};

class Derived : public Base {
    public:
    void print() {
        cout << "derived\n";
    }
};

int main() {
    Derived obj;
    Base *bobj = &obj;

    bobj->print();
    return 0;
}


```

```cpp
// using virtual
#include <iostream>
using namespace std;

class Base {
    public:
    virtual void print() {
        cout << "base\n";
    }
};

class Derived : public Base {
    public:
    void print() {
        cout << "derived\n";
    }
};

int main() {
    Derived obj;
    Base *bobj = &obj;

    bobj->print();
    return 0;
}

// output -> derived

```


# Pure Virtual Function

A pure virtual function is a virtual function in a base class that has no implementation in the base class and must be overridden by any derived class. 

-  A class containing a pure virtual function is called an abstract class, and it cannot be instantiated on its own.

