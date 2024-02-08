/**
 * @author Heera Singh Lodhi
 * @desc - this project only for utilizing the knowledge of c program
 * @date 17-01-2024
 */

/**
 * desc - starting point of the project
 */

// importing required header files
// build-in header files
#include <stdio.h>
#include <string.h>
#include <math.h>

// user defined header files

// student schema - data structure
// we want to store new student, these fields are required
typedef struct Student
{
    int id;
    char *fname;
    char *lname;
    short age;
    char *enrollNo;
    char *category;
    char *branch;
} student;

student students[100];
int numberOfStudents = -1;

void addStudent()
{
    printf("Enter student detail in required format\n");
    printf("id-first name-last name-age-enroll no-category-branch\n");
}

FILE *fptr = NULL;

int main()
{
    // user promt
    printf("---Welcome to Student Management System---\n");
    printf("1. Add Student\n");
    printf("2. Remove Student\n");
    printf("3. Update Student\n");
    printf("4. Search Update by Id\n");
    printf("5. Display All Students\n");
    printf("6. Press 'q' to exit from software\n");

    char ch = '\0';
    scanf("%c", &ch);

    fgets(, "%s", );
    if (ch < '7' && ch > '0')
    {
        printf("Selected option is - %c\n", ch);
    }
    else if (ch == 'q')
    {
        printf("Exit option\n");
        printf("Thank you for using\n");
        return 0;
    }

    return 0;
}
