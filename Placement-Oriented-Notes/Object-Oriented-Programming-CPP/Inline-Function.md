# Inline Function

An inline function is a function that is expanded in place at the point of its call, rather than being called by a function call. 

- Inline functions are typically used to improve the performance of a program by reducing the overhead of calling a function.
- inline keyword used to make function inline or declare function inline 


```cpp
inline return_type function_name(parameters) {
    // function body
}


// example


#include <iostream>
using namespace std;

inline bool isEven(int num) {
    return num%2==0;
}

int main(int argc, const char *argv[]) {
    int n=1000,i;

    for(i=0; i<n; i++){
        if(isEven(i)) {
            cout << i << endl;
        }
    }

    return 0;
}

```



