#include <iostream>

/**
 * fixed length array implementation of class and build-in 
 * methods that provide way to communicate array
*/

class Array {
    private:

    int idx;
    int capacity;
    int *ptr;

    public:
    Array() {
        throw std::runtime_error("Provide size of an array during initialization");
    }

    Array(int capacity) {
        this->idx=-1;
        this->capacity=capacity;
        this->ptr = new int[capacity];
    }
 
    bool isEmpty() {
        return this->idx == -1;
        // or
        // if(!this->ptr) {
        //     return true;
        // }
        // return false;
    }

    bool isFull() {
        if(!this->ptr) throw std::runtime_error("Array is not initialized");
              
        return this->idx == this->capacity-1;
    }

    int size() {
        if(!this->ptr) throw std::runtime_error("Array is not initialized");  
        return this->capacity;
    }

    int get(int idx) {
        if(this->idx>idx || idx>this->capacity-1) {
            throw std::runtime_error("Index out of bound");
        }
        return this->ptr[idx]; 
    }

    void insertAt(int value, int index) {
        // index validation
        if(this->capacity-1<idx || idx<0) {
            throw std::runtime_error("Index out of bound");
            return;
        }
 
        // indexs 0 1 2 3 4
        // ptr = [1,2,3, 0, 0]
        // value = 10
        // index = 2
        // shifting
        // ptr = [1,2, 10, 3, 0]
        for(int iter=this->capacity-1; iter>=index; iter--) {
            this->ptr[iter]=this->ptr[iter-1];
        }
        this->ptr[index] = value;
    }

    bool append(int value) {
        if(this->isFull()) {
            throw std::runtime_error("Array if full");
        }

        // insert value at the current idx
        this->ptr[++this->idx] = value; 
    }
    void deleteAt(int index) {
        if(this->isEmpty()) {
            std::runtime_error("Array is not initialized");
        }

        if(index > this->idx || 0 > index) {
            std::runtime_error("Index out of bound error");
            return;
        }

        for(int i=index; i<this->idx; i++) {
            this->ptr[i] = this->ptr[i+1];
        }
        this->capacity--;
    }


    void display() {
        if(this->isEmpty()) {
            std::cout << "Array is not initialized" << std::endl;
            return;
        }

        for(int iter=0; iter<=idx; iter++) {
            std::cout << this->ptr[iter] << " ";
        }
        std::cout << std::endl;
    }

}; 
 

 

 