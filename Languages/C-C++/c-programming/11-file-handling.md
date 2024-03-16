# File Handling

- File - In the file handling we deal with files, and perform operation on files like read, write and append.
- there are mainly three of modes of opening a file.

1. read -> r (return null when file not exists)
2. write -> w (create new file if not exists)
3. append -> a (create new file if not exists)

> r+ - reading and writing

**Dealing with binary files**

> rb -> read binary and rw -> write binary

**Write**

```c

#include <stdio.h>

FILE *fptr = NULL;

int main()
{
    /**
     * w - mode
     * input.txt - input file
     */

    fptr = fopen("input.txt", "w");

    if (!fptr)
    {
        printf("file can't created or opened\n");
        return -1;
    }
    fprintf(fptr, "%s", "Hello this is fprintf function1\n");
    fprintf(fptr, "%s", "Hello this is fprintf function2\n");
    fputs("this content is writted by fputs function\n", fptr); 
    fputc(65, fptr);
    fputc('\n', fptr);  
    return 0;
}
```

**Reading a File**
 
