class Student {
    String name;
    int age;
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void printInfo() {
        System.out.println("Student name is : " + this.name);
        System.out.println("Student age is : " + this.age);
    }
    public static void main(String[] args) {}
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Heera", 33);
        s1.printInfo();
    }
}