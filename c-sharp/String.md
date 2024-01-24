# String

String is a collection of characters

`Example`
any word or sentances are string

## String Manipulation

```c#
class Program
{
    public static void Main(string[] args)
    {
        String fname = "Heera";
        String lname = "Singh";
        String fullname = fname + " " + lname + " " +  "Lodhi";
        Console.Write(fullname);
    }
}
```

`String length`

```c#

class Program
{
    public static void Main(string[] args)
    {
        String str = "Heera Singh";

        // Length is property
        Console.WriteLine(str.Length);
    }
}
```

```c#

class Program
{
    public static void Main(string[] args)
    {
        String str = "Heera Singh";

        // string iteration
        for(int i=0; i<str.Length; i++)
        {
            Console.Write(str[i]);
        }
    }
}
```

```c#

class Program
{
    public static void Main(string[] args)
    {
        String str = "Heera Singh";

        // replace
        str = str.Replace("ee", "i");
        Console.WriteLine(str);
    }
}
```
