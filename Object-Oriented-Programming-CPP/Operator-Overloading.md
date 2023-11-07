

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
```