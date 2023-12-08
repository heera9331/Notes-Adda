# Interview Questions (Revision)

- Python was developed by Guido van Rossum and was released first on February 20, 1991.
- Typing refers to type-checking in programming languages. In a strongly-typed language,

**_Type-checking can be done at two stages -_**

Static - Data Types are checked before execution.
Dynamic - Data Types are checked during execution.

Python is an interpreted language, executes each statement line by line and thus type-checking is done on the fly, during execution.

- Python is dynamically typed language.

**_PEP8_**

PEP stands for Python Enhancement Proposal. A PEP is an official design document providing information to the Python community, or describing a new feature for Python or its processes.

- PEP 8 is especially important since it documents the style guidelines for Python Code.
- Python open-source community requires you to follow these style guidelines sincerely and strictly.

**_What is scope?_**

A scope refers to the region of a program where a particular variable can be accessed or modified.

Python has two main types of scopes:

1. Local scope
2. Global scope

**_Using the nonlocal Keyword:_**

If you have nested functions and want to modify a variable in the outer (non-global) scope, you can use the nonlocal keyword.

```python
def fn():
    var = 5

    def fnx():
        nonlocal var
        var = var + 5
        print(var)

    fnx()

fn();

```

**_Using the global Keyword:_**

If you want to modify a global variable from within a function, you need to use the global keyword.

```python
var = 5

def fn():
    global var
    var += 4

    print(var)

fn()
```

**_What are lists and tuples? What is the key difference between the two?_**

Lists and Tuples are both sequence data types that can store a collection of objects in Python.

Lists are represented with square brackets ['sara', 6, 0.19], while tuples are represented with parantheses ('ansh', 5, 0.97)

The key difference between the two is that while lists are mutable, tuples on the other hand are immutable objects.

This means that lists can be modified, appended or sliced on the go but tuples remain constant and cannot be modified in any manner.

**_What are the common built-in data types in Python?_**

```markdown
1. None Type

- None - represent null values

2. Numeric Type

- int
- float
- complex
- bool

3. Sequence Type

- list
- tuple
- str
- range

4. Mapping Type

- dictionary

5. Set Type

- set
- frozenset
```

**_What is pass in Python?_**

The pass keyword represents a null operation in Python.

- Allows you to write empty block of code.

**_What are modules and packages in Python?_**

Modules, in general, are simply Python files with a .py extension and can have a set of functions, classes, or variables defined and implemented.

A package is a way of organizing related modules into a single directory hierarchy. A package can contain subpackages, modules, and even other packages.

**_Package structure_**

```mypackage/
├── __init__.py
├── module1.py
├── module2.py
└── mysubpackage/
    ├── __init__.py
    └── submodule1.py
```

**_What is the use of self in Python?_**

- Self is used to represent the instance of the class.
- With this keyword, you can access the attributes and methods of the class in
  python.
- It binds the attributes with the given arguments.
- self is not a keyword in python

**_What is **init**?_**

__init__ is a contructor method in Python and is automatically called when a new object/instance is created. 


