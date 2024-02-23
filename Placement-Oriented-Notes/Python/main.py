class Student:
    def __init__(self,name, age):
        self.name = name
        self.age = age

    def printInfo(self):
        print(self.name)
        print(self.age)

    def __add__(self, Student):
        other.name += self.name
        other.age += self.age

        return other

s1 = Student("Heera", 22)
s2 = Student("Heera", 22)
print(s1+s2)
