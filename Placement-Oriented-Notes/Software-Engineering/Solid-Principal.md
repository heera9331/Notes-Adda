# Solid Principle

The SOLID principles of software architecture consist of a collection of guidelines that can help programmers build better software. 

**What are SOLID Principles of Software Architecture?**

1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle

**Banefits fo solid principle**

- **More robust systems**: By following solid principles, developers can create systems that are more resistant to change and less likely to break when modifications are made.
- **Better Reusability**: By adhering to these principles, you can build reusable components.
- **Easier maintenance**: Solid principle-based systems are typically easier to maintain and understand, making them less time-consuming and expensive to keep up-to-date.
- **Better scalability**: Another advantage of using solid principles is that systems designed this way are often more scalable, meaning they can be extended over time if needed.

## The Single Responsibility Principle

Per the Single Responsibility Principle, every class should not have more than one responsibility, (i.e., it should have one and only one purpose).

## The Open Closed Principle

According to the Open Closed Principle, classes should be open for extension,but closed for modification, developers can extend the functionality of a class without having to modify the existing code in that class. 


Here are the benefits of the Open Closed Principle at a glance:

- You can add new features without changing existing code
- Your application will be more flexible because it can evolve - over time
- It reduces the time and effort required to add new features to an application
- It increases the maintainability of the source code



## Liskov Substitution Principle

The Liskov Substitution Principle, or LSP, is a design principle that states that replaceable and interchangeable types should behave similarly. 

The Liskov Substitution Principle, or LSP, is a design principle that states that replaceable and interchangeable types should behave similarly. 

## The Interface Segregation Principle

The Interface Segregation Principle is a design principle that says you should “write client-specific interfaces, and make sure clients don’t depend on methods of other interfaces.” This means that, if you want to use an alternative implementation, you can do so without having to change any client code.

## Dependency Inversion Principle

The Dependency Inversion Principle, high-level modules in an application should not rely on their low-level modules. Instead, both should rely on abstractions. While details should depend on abstractions, the reverse is not implied. The Dependency Inversion Principle recommends abstractions over concretions.

Here are several benefits to the Dependency Inversion Principle:

- It makes code more flexible, reusable, modular, and easier to change
- It makes code more testable since high-level modules can be mocked or stubbed out when testing low-level modules
- It can make code more flexible since new low-level modules can be easily plugged in without having to make changes to high-level modules.