```c#

example 1.

class Student
{
    private String name = null;
    private int age = 0;

    public Student(String name, int age)
    {
        this.name = name;
        this.age = age;
    }

    public String GetName()
    {
        return this.name;
    }
    public int GetAge()
    {
        return this.age;
    }
}


class Program
{
    public static void Main(String[] args)
    {
        Student s1 = new Student("Heera", 22);
        Console.WriteLine(s1.GetName());
        Console.WriteLine(s1.GetAge());
    }
}

```

```c#
// example 2

// Student is a class
class Student
{
    // student id
    int Id;

    // default constructor
    public Student() { }

    // setter
    public void SetID(int id) {
        this.Id = id;
    }


    // getter
    public int GetID()
    {
        return this.Id;
    }
}

class Program
{
    public static void Main(string[] args)
    {
        // s1 is an object
        Student s1 = new Student();
        s1.SetID(1);
        Console.WriteLine(s1.GetID());
    }
}
```
