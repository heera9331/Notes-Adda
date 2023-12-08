

#include <iostream>
using namespace std;

class Super {
    public:

    virtual void display() {
        cout << "Super class display" << endl;
    }
};

class Sub : public Super {
    public:

    void display() {
        cout << "Sub class display" << endl;
    }
};

int main() {
    // Super *su = new Super();
    // Sub *sub=new Sub();

    // su->display();
    // sub->display();

    // Sub sub();

    // Super *su = &sub;
    
    // su->display();
    Sub sub;
    // sub.display();
    Super *su = &sub;
    su->display();
    return 0;
}