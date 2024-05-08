#include <stdio.h>
#include <stdlib.h>

typedef struct Student
{
    const char *name;
    int age;

    struct Student *(*init)(const char *name, int age);
    int (*getAge)(struct Student *s);
    const char *(*getName)(struct Student *s);
} Student;

int getAge(Student *s)
{
    return s->age;
}

const char *getName(Student *s)
{
    return s->name;
}

Student *init(const char *name, int age)
{
    Student *s = (Student *)malloc(sizeof(Student)); // Allocate memory for Student, not student
    s->age = age;
    s->name = name;
    s->init = init; // Assign function pointers properly
    s->getAge = getAge;
    s->getName = getName;
    return s;
}

int main()
{
    Student *s1 = init("Heera", 21);
    printf("%s\n", s1->getName(s1));
    printf("%d\n", s1->getAge(s1));
    free(s1); // Don't forget to free allocated memory
    return 0;
}
