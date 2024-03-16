# File Handling

- File - In the file handling we deal with files, and perform operation on files like read, write and append.
- there are mainly three of modes of opening a file.

1. read -> r (return null when file not exists)
2. write -> w (create new file if not exists)
3. append -> a (create new file if not exists)

> r+ - reading and writing

**Dealing with binary files**

> rb -> read binary and rw -> write binary

**Opening a File**

```c
FILE *file_pointer = fopen("filename", "mode");
```

**Reading a File**

```c
fscanf(buffer, "%s", file_pointer);
```

For example, to open a file called "data.txt" for reading, you can use the following code:

```

FILE *fp;
fp = fopen("data.txt", "r");
```

To open a file for writing, you can use the following code:

```c
 
FILE *fp;
fp = fopen("data.txt", "w");
```

To open a file for reading and writing, you can use the following code:

```c
 
FILE *fp;
fp = fopen("data.txt", "r+");
```