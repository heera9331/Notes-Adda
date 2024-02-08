
# Dictionary
- Dictionary is a data structure in python, which is used to
- Store data in the form of ordered key-value pairs
- Pairs must be unique

```python
obj = {
    "fname": "Heera",
    "lname": "Singh",
    "age": 21,
}
print(obj)
print(obj.get("fname")) # is key is not present in the dictionary and it will return None
print(obj.get("school")) # None
print(obj.get("x")) # x is not present in the dictionary, throws error
```

- we can't add dictionary directly using `+` operator

```python

d1 = {
    "fname": "Heera"
}

d2 = {
    "lname": "Kumar"
}

print(d1+d2) # Error
```

- update method combine to two dictionary
- update take take of both dictionary
- if one key is present first dictionary is updated by second dictionary (if key same present in second dictionary)

```python

d1 = {
    "fname": "Heera",
    "lname": "Singh"
}

d2 = {
    "lname": "Kumar"
}

d1.update(d2)

print(d1)

```