

```cpp

#include <iostream>
using namespace std;

class Num
{
public:
    int n;

    Num(int n)
    {
        this->n = n;
    }

    Num &operator++()
    {
        ++n;
        return *this;
    }

    int getNum()
    {
        return n;
    }
};

int main()
{
    Num n1(5);

    cout << n1.getNum() << endl;
    ++n1;

    cout << n1.getNum() << endl;
    return 0;
}

// overloading + operator


#include <iostream>
using namespace std;

class MyNumber {
private:
    int value;

public:
    MyNumber(int val) : value(val) {}

    // Overloading the + operator
    MyNumber *operator+(const MyNumber& other) {
        MyNumber *result = new MyNumber(this->value + other.value);
        return result;
    }

    // Getter method for value
    int getValue() const {
        return value;
    }
};

int main() {
    MyNumber num1(5);
    MyNumber num2(10);

    // Using the overloaded + operator
    MyNumber *sum = num1 + num2;

    cout << "Sum: " << sum->getValue() << endl;

    return 0;
}


```



