# Introduction
<hr>

Python is a object-oriented programming, which is used in many fields
1. Education
2. Health-care
3. IoT
4. Security
5. Web Development
6. AI & ML
7. Data Science
8. Data Analysis
9. Clound
10. Business Analytics

## Key Points
* Designed by: Guido van Rossum
* Developer: Python Software Foundation
* Development by guido van rossum in 1991
* Multi-paradigm
* Object-oriented
* Dynamic 
* High-level language
* Interpreted language
* Automatic Garwage Collection
* Easy user friendly
* Cross-platform
* Platform dependent

<hr>

```markdown
if else statements

syntax:

if condition:
    # statement
else:
    # statement
```

```java
# number is positive or negative

num = int(input("Enter a nu;mber : "))

if (num>0):
    print("number is positive")
elif num<0:
    print("number is negative")
else:
    print("Number is zero")
```

```java
fname = "Ashish Kumar Vishwakarma"
fname = fname.title()

ans=""
for i in range(len(fname)):
    ch = fname[i]
    if ch >= 'A'  and ch <= 'Z':
        ans+=ch
```

# Set
<hr>

* Duplicate not allowed	
* Sets are immutable
* Once a set is created, you cannot change its items, but you can add new items.

```python
A set is a collection which is unordered, unchangeable*,
and unindexed.
* Note: Set items are unchangeable, but you can remove 
items and add new items.



Syntax:

# Empty list
s = set()

s.add(2)
s.add(5)
s.update([3,4])
s.remove(3)
print(s)

# Loop
for val in s:
    print(val)
```

``` python
# Methods in set

s.add() -> add element in set
s.update([iterable])
s.remove(ket) -> key removed from the set but if present
else they will give an error

s.discard(key) -> same as remove, but if element not
present than they do not show any error

s.union(s1) -> union of two s and s1
s.intersection(s1) -> intersection between s and s2
s.pop() -> remove random element from set

```

# Input/Output
<hr>
## Input

```python
input function is used to take input from console window,
input() read data from keyword as str, in the case of we
require to read number entered user, we need to type cast
str to int

# taking input
name = input("Message(this is optional)")

# read number
num = int(input("Message(optional)"))

# same we take float number
num1 = float(input())
```

## Output

```python
print function is used to display message to the 
console window, print function print output with new line,

# Example
print("Print something")

# without new line
print("Heera", end="")

print("Trim float values %.2f"%(10.2323))

deci = 10

# decimal octal conversion
print("%o"%(deci))
```

# IO Formatting
<hr>
print("three decimal places %.3f"%5.5) # 5.500


List

* List is a immutable collection of object/elements/variables.
* Support all feature of an array data type
* Advanced compare to array
* Negative/Positive both type of indexing is possbile in python list data type
* Lots of function available in python

```python
# creation of empty list
list = [] # one way
list = list() # list constructor or list function [anoher way]

list = [1,2,3,4,5]
print(list) # [1, 2, 3, 4, 5]

# append is used to add element at the last position
list.append(10)
print(list) # [1, 2, 3, 4, 5, 10]
```

```python
arr = [2,3,1,4]
t = list(arr)

arr.sort()

print(t)
print(arr)

# -----------------------------------------
arr = [2,3,1,4]
t = arr

arr.sort()

print(t)
print(arr)

# but not with same at the place of string
s = "heera"
t = s

s.replace("e", " ")

print(s)
print(t)
```

```python
The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.

# map method
Syntax:
map(function, iterable)

# calculate square of list of every element

def pow(a):
    return a**2

arr = [1,2,3,4]
obj = list(map(pow,  arr))
print(obj)
```

```

```

String module

* String are sequence of characters enclosed within double quotes.
* Strings are immutable in python & java.
* Substring is a continuous part of string.

## **String method**

```python
count()
find() -> return first occurance of give string [index]
    find("str", start, end)
    is not find then return -1
lower()
upper()
title()
capitalize()
strip() - function remove spacing in given string [left spacing & right spacing]
    strip("I") -> is string contain I at beginning and ending then remove
istitle()
isidentifier()
split(separator) -> return list
index(string or char) -> return index of specified string
isalpha() -> return if char is alphabet
replace("x", "y") -> replace x string with y
isdigit() -> return true if char is digit
isspace() -> return true if char is space
```

```python
des = "I am Heera Singh Lodhi"
des1 = "l"

print(des.count("a"))  # 2
print(des.find("e")) # 6
print(des.lower()) # i am heera singh lodhi
print(des.upper()) # I AM HEERA SINGH LODHI
print(des.title()) # I Am Heera Singh Lodhi
print(des.capitalize()) # I am heera singh lodhi
print(des.isalpha()) # False
print(des1.isalpha()) # True
print(des.split()) # ['I', 'am', 'Heera', 'Singh', 'Lodhi']
print(des.index("od")) # 18
```

→ in keyword check existence of a value in a sequence

 

```python
print(4 in [1,2,3,4]) # True

# -----------------------------
value = 1
sequence = [1,2,3,4,5] 
print(value in sequence) # True

# --------------------------------
print('h' in "heera") # True

# -----------------------------------
print(4 in (3,4,5,6)) # True

# ----------------------------------

```

→ The is keyword is **used to test if two variables refer to the same object**
.

```python
x = 4
y = 4

print(x is y) # True
print(x == y) # True

# ----------------------------------

list1= [1,2,3]
list2 = [1,2,3]

list3 = list1

print(list1 is list2) # False
print(list1 is list3) # True
```

→ Total 33 keywords in python programming.

→ Python support both negative and possitive indexing.
