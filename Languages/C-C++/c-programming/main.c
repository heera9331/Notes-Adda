
#include <stdio.h>
#include <string.h>

int main()
{
    FILE *fptr = NULL;
    fptr = fopen("input.txt", "a");

    if (fptr == NULL)
    {
        printf("file is not open\n");
    }
    else
    {
        printf("file is opened\n");
    }
    return 0;
}