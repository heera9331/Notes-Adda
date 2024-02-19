# DBMS Architecture


## Two-Tier Architecture:

In a two-tier architecture, there are two main components or tiers:

#### Client Tier (Presentation Tier):

- This tier represents the interface that interacts directly with the user.
- It's responsible for presenting information to the user and gathering input from the user.
- The client tier could be a desktop application, a web browser, or a mobile app.
Server Tier (Data Tier):

#### Server Tier
- This tier is responsible for managing data storage, processing, and retrieval.
- It typically consists of a database server where the data is stored and processed.
- The server handles all the database operations such as querying, updating, inserting, and deleting data.
- The client communicates directly with the database server to perform operations on the data.

**Advantages of Two-Tier Architecture:**

- Simple and easy to understand.
- Faster performance as there is a direct connection between the client and the database server.
- Disadvantages of Two-Tier Architecture:
- Scalability can be limited, especially for large-scale applications.
- Maintenance and updates can be challenging as business logic is often tightly coupled with the client application.

### Three-Tier Architecture:

In a three-tier architecture, the components are divided into three tiers:

Presentation Tier (Client Tier):

This tier is responsible for interacting with the user.
It handles user input, displays data, and manages user interactions.
It could be a web browser, mobile app, or desktop application.
Application Tier (Business Logic Tier):

Also known as the middle tier or logic tier.
It contains the application logic or business logic of the system.
This tier acts as an intermediary between the presentation tier and the data tier.
It processes requests from the client, performs the necessary operations, and interacts with the data tier for data retrieval and manipulation.
It may include application servers, middleware, and other components.
Data Tier (Data Storage Tier):

This tier is responsible for storing and managing data.
It includes database servers or other storage systems.
The data tier manages data storage, retrieval, and manipulation based on requests from the application tier.