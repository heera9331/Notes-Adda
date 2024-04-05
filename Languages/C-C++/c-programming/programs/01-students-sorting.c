/**
 * @author: Heera Singh
 * @desc: In this program we sorting array of student on the bases of student age
 * @date: 05-04-2024
 */

#include <stdio.h>
#include <stdlib.h>

typedef struct Student
{
    char *name;
    char gender;
    int age;
} std;

// sort student on the bases of age
/**
 * @param arr => array of student
 * @param n => number of students
 *
 */

void bubble_sort(std arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n - 1; j++)
        {
            if (arr[i].age < arr[j].age)
            {
                // swap
                std curr_student = arr[i];
                arr[i] = arr[j];
                arr[j] = curr_student;
            }
        }
    }
}

/**
 * display students
 */
void print_student(std students[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("Name of student is - %s\n", students[i].name);
        printf("Age of student is - %d\n", students[i].age);
        printf("Gender of student is - %c\n", students[i].gender);
        printf("---------------------------\n");
    }
}

int main()
{
    int n = 4;
    std students[n];

    // name length is 16
    // first student
    students[0].name = (void *)malloc(4 * sizeof(int));
    students[0].name = "Heera";
    students[0].gender = 'M';
    students[0].age = 21;

    students[1].name = (void *)malloc(4 * sizeof(int));
    students[1].name = "Kamlesh";
    students[1].gender = 'F';
    students[1].age = 22;

    students[2].name = (void *)malloc(4 * sizeof(int));
    students[2].name = "Rahul";
    students[2].gender = 'F';
    students[2].age = 24;

    students[3].name = (void *)malloc(4 * sizeof(int));
    students[3].name = "Kamlesh";
    students[3].gender = 'F';
    students[3].age = 20;

    // print_student(students, 4);
    bubble_sort(students, n);
    print_student(students, n);

    // releasing memory
    for (int i = 0; i < n; i++)
    {
        free(students[i].name);
    }

    return 0;
}