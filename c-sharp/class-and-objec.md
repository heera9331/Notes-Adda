```c#
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
