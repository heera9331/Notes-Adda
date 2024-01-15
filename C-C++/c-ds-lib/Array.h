#include <iostream>

class Array {
private:
    int idx;
    int capacity;
    int *ptr;

public:
    Array() {
        // Prompt the user to provide the size or initialize with a default size
        throw std::runtime_error("Provide size of an array during initialization");
    }

    Array(int capacity) {
        this->idx = -1;
        this->capacity = capacity;
        this->ptr = new int[capacity];
    }

    ~Array() {
        // Add destructor to free allocated memory
        delete[] ptr;
    }

    bool isEmpty() {
        return this->idx == -1;
    }

    bool isFull() {
        if (!this->ptr) throw std::runtime_error("Array is not initialized");
        return this->idx == this->capacity - 1;
    }

    int size() {
        if (!this->ptr) throw std::runtime_error("Array is not initialized");
        return this->idx + 1; // Return the actual number of elements
    }

    int get(int idx) {
        if (this->idx < idx || idx > this->capacity - 1) {
            throw std::runtime_error("Index out of bound");
        }
        return this->ptr[idx];
    }

    void insertAt(int value, int index) {
        // index validation
        if (this->capacity - 1 < index || index < 0) {
            throw std::runtime_error("Index out of bound");
            return;
        }

        // Shifting
        for (int iter = this->idx; iter >= index; iter--) {
            this->ptr[iter + 1] = this->ptr[iter];
        }
        this->ptr[index] = value;
        this->idx++;
    }

    bool append(int value) {
        if (this->isFull()) {
            throw std::runtime_error("Array is full");
        }

        // insert value at the current idx
        this->ptr[++this->idx] = value;
    }

    void deleteAt(int index) {
        if (this->isEmpty()) {
            throw std::runtime_error("Array is not initialized");
        }

        if (index > this->idx || 0 > index) {
            throw std::runtime_error("Index out of bound error");
            return;
        }

        for (int i = index; i < this->idx; i++) {
            this->ptr[i] = this->ptr[i + 1];
        }
        this->idx--;
    }

    void display() {
        if (this->isEmpty()) {
            std::cout << "Array is not initialized" << std::endl;
            return;
        }

        for (int iter = 0; iter <= idx; iter++) {
            std::cout << this->ptr[iter] << " ";
        }
        std::cout << std::endl;
    }
};