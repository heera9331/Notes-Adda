# Process Control

A process is an instance of a program that is executing. Process control refers to the management of processes, such as creating, deleting, suspending, and resuming processes.

There are several ways to control processes in Linux:

1. **`ps`** command: The **`ps`** command is used to display information about processes on the system. It can be used to list all processes, or to filter the processes based on various criteria such as the process ID or the user who owns the process.
2. **`top`** command: The **`top`** command is similar to the **`ps`** command, but it provides a continuously updated list of processes, with the ability to sort the processes based on various metrics such as CPU and memory usage.
3. **`kill`** command: The **`kill`** command is used to send a signal to a process to terminate it. The signal can be specified as an argument to the **`kill`** command, or it can be one of the default signals such as **`SIGTERM`** (terminate) or **`SIGKILL`** (kill).
4. **`killall`** command: The **`killall`** command is similar to the **`kill`** command, but it allows you to terminate multiple processes at once by specifying the name of the process.
5. **`pkill`** command: The **`pkill`** command is also similar to the **`kill`** command, but it allows you to terminate processes based on various criteria such as the process ID, the name of the process, or the user who owns the process.
6. **`bg`** and **`fg`** commands: The **`bg`** command is used to send a suspended process to the background, while the **`fg`** command is used to bring a background process to the foreground.
