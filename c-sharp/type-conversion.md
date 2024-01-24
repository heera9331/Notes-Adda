# Type Conversion

Type conversion is nothing converting one type of data to another type.

```c#
class Program
{
    public static void Main(string[] args)
    {
        String num1 = "4";
        int num2 = 4;
        int addition = Convert.ToInt32(num1) + num2;
        Console.WriteLine(addition);
    }
}
```

```c#

class Program
{
    public static void Main(string[] args)
    {
        int a = 4;
        double b = Convert.ToDouble(a)  + 4.5;
        Console.WriteLine(b);

    }
}
```

## Types of type conversion

1. Implicit (Automatic type conversion) - automatic type conversion performed by compiler itself.

2. Explicit - In this type of conversion is performed by using build in functions

```c#
// implicit - automatic type conversion
class Program
{
    public static void Main(string[] args)
    {
        int a = 3;
        double b = 4.5;
        double ans = a + b;
        Console.WriteLine(ans);

    }
}
```

```c#
// explicit
class Program
{
    public static void Main(string[] args)
    {
        String num1 = "4";
        int num2 = 4;
        int addition = Convert.ToInt32(num1) + num2;
        Console.WriteLine(addition);
    }
}
```
