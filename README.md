# Pokedex API

An API to manage your pokemons like pokedex

> ℹ️ Development status is Alpha

## Base URL 🔗

```
http://localhost:3000/
```

## Security 🔒

#### Use of Helmet

Helmet.js is middleware-based technology that improves security by safeguarding HTTP headers returned by a Node.js app

#### Helmet protections

- XSS attacks
- Content Security
- Policy vulnerabilities
- Other security issues.

## Endpoints ✨

### `GET /pokemons`

Description of what this endpoint does.

#### Request Example

```http
GET /api/v1/pokemons/
Host: http://localhost:3000
```

#### Response

```json
{
  "pokemons": [
    {
      "id": "5386324c-d611-436a-b76c-36ecce753a07",
      "name": "pidgeotto",
      "moves": [
        { "name": "razor-wind" },
        { "name": "gust" },
        { "name": "wing-attack" },
        { "name": "whirlwind" }
      ],
      "types": [{ "name": "normal" }, { "name": "flying" }]
    }
  ]
}
```

#### Response Codes

- `200 OK`: Request successful.
- `404 Not Found`: Resource not found.
- `500 Internal Server Error`: Internal error.

### `POST /pokemons`

This endpoint get the pokemon from PokeApi based on the name param to save it in database

#### Parameters

- `:name`: Pokemon name.

#### Request Example

```http
POST /api/v1/pokemons/pidgeotto HTTP/1.1
Host: http://localhost:3000
Content-Type: application/json
```

#### Response

```json
{
  "registeredPokemon": {
    "id": "5386324c-d611-436a-b76c-36ecce753a07",
    "name": "pidgeotto",
    "moves": [
      {
        "name": "razor-wind"
      },
      {
        "name": "gust"
      },
      {
        "name": "wing-attack"
      },
      {
        "name": "whirlwind"
      }
    ],
    "types": [
      {
        "name": "normal"
      },
      {
        "name": "flying"
      }
    ]
  }
}
```

#### Response Codes

- `201 Created`: Resource created successfully.
- `400 Bad Request`: Invalid request parameters.
- `500 Internal Server Error`: Server error.

### `DELETE /endpoint`

Deletes a pokemon from database based in the name or id param

#### Parameters

- `:identifier`: Can be name or id pokemon.

#### Request Example

```http
DELETE /api/v1/pokemons/pidgeotto HTTP/1.1
Host: api.example.com
Content-Type: application/json
```

#### Response

```json
{
  "deletedCount": 1
}
```

#### Response Codes

- `200 OK`: Request successful.
- `400 Bad Request`: Invalid request parameters.
- `500 Internal Server Error`: Server error.

## Running test ✅

In order to run automated tests execute this two steps:

```console
npm run start:test
```

Finally

```console
npm run test
```
You should get something like this:
```batch
➜ npm run test

> ai27-pokedex-api@0.0.1 test
> pnpm exec playwright test --project=Chromium


Running 8 tests using 8 workers
  8 passed (774ms)

To open last HTML report run:

  pnpm exec playwright show-report
```


## Build project ⚡

Build the project for production by the command:

```console
npm run start:prod
```

## Error Handling 🚧

Custom errors were creates to manage database, fetch, cors and PokeApi errors
Using custom errors in JavaScript can offer several benefits:

- **Clarity and Readability**: Custom errors allow you to create meaningful names for specific errors in your codebase. This enhances code readability and makes it easier to understand the intention of the error and where it originated.

- **Better Error Handling**: By defining custom errors, you can handle errors more effectively. Custom errors can carry additional information or context about the error, making it easier to diagnose and debug issues.

- **Granular Error Reporting**: Custom errors enable you to distinguish between different types of errors more precisely. This granularity allows for better error reporting, logging, and monitoring, which can streamline troubleshooting and maintenance.

- **Consistency Across Codebase**: Using custom errors ensures consistency in error handling throughout your codebase. Instead of relying on generic error types, custom errors provide a standardized approach to handling specific types of errors.

- **Encapsulation**: Custom errors allow you to encapsulate error logic within their respective classes or modules. This promotes cleaner code by separating error handling concerns from other parts of your application logic.

- **Enhanced Debugging**: Custom errors can include custom properties or methods to provide additional debugging information. This can include stack traces, error codes, or contextual data, which aids in pinpointing the root cause of errors during development and testing.

- **Improved Maintainability**: With custom errors, you can easily identify and manage errors specific to your application's domain or requirements. This improves the maintainability of your codebase by organizing error handling logic in a structured and systematic manner.

- **Facilitates Error Communication**: Custom errors can be designed to communicate errors effectively between different parts of your application or between server and client. This facilitates error communication in distributed systems or APIs, ensuring that error messages are meaningful and actionable.

- **Extensibility**: Custom errors can be extended or subclassed to create hierarchies of related error types. This allows for a more flexible and extensible error handling approach, accommodating evolving requirements and error scenarios.

- **Documentation and Self-Explanatory Code**: Well-defined custom errors serve as self-documenting elements of your code. They convey important information about potential errors and their contexts, making the codebase more understandable for developers who maintain or interact with it in the future.

#### Custom error example

```typescript
export class FetchError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "FetchError";
  }
}
```

## Versioning 📋

This api starts at version V1

```http
 /api/v1/pokemons/pidgeotto HTTP/1.1
```

## Dependencies 🌐

#### CORS

Middleware that manages `Cross-Origin-Resource-Sharing` sets a site origin list allowed to consume the API

#### dotenv

Loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code.

#### Express JS

Framework to serve API routes, Express.js is often chosen for its simplicity, flexibility, and performance, making it a popular choice for building web applications and APIs with Node.js.

#### express-validator

It allows you to combine them in many ways so that you can validate and sanitize your express requests, and offers tools to determine if the request is valid or not, which data was matched according to your validators, etc.

#### helmet

Helps enhance the security of web applications by setting various HTTP headers to mitigate common security vulnerabilities.

#### mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB, designed to work in an asynchronous environment. MongoDB is a NoSQL database that stores data in flexible, JSON-like documents

#### uuid

Generates uuid v4 in order to asign pokemon ids

## Architecture 👷‍♂️

Architecture used for this API is Clean Architecture
Clean architecture, popularized by Robert C. Martin (Uncle Bob), emphasizes structuring software applications in a way that promotes maintainability, testability, and scalability. Here's a list of benefits associated with adopting clean architecture:

- **Separation of Concerns**: Clean architecture divides the software into distinct layers, such as presentation, domain logic, and data storage, which helps in managing complexity and isolating concerns.

- **Testability**: By decoupling components and dependencies, clean architecture facilitates writing unit tests, integration tests, and end-to-end tests more effectively, leading to better test coverage and reliability.
- **Maintainability**: Clean architecture promotes code maintainability by organizing codebase into modules with clear boundaries, making it easier to understand, modify, and extend over time.
- **Flexibility and Adaptability**: The modular structure of clean architecture allows for easier adaptation to changes in requirements, technologies, or business rules without causing significant ripple effects across the system.
- **Scalability**: Clean architecture provides a scalable foundation for software systems by allowing them to grow and evolve without sacrificing stability or performance, as each component can be scaled independently.
- **Framework Independence**: Clean architecture reduces dependency on specific frameworks or libraries, making it easier to switch technologies or upgrade dependencies without rewriting large portions of the application.
- **Encapsulation of Business Rules**: The core business logic resides at the center of clean architecture, encapsulated within entities and use cases, ensuring that it remains independent of external factors and can be reused across different parts of the system.
- **Improved Collaboration**: Clean architecture fosters better collaboration among development teams by providing a common understanding of system architecture and design principles, leading to more consistent and cohesive codebase.
- **Reduced Technical Debt**: By promoting clean and modular code, clean architecture helps in reducing technical debt, as it discourages quick fixes and hacks that could compromise the integrity and maintainability of the system.

- **Enhanced Security**: Clear separation of concerns and well-defined boundaries between layers in clean architecture help in enforcing security measures more effectively, such as access control and data validation, thus reducing the risk of security vulnerabilities.

- **Better User Experience**: Clean architecture allows for more focused development efforts on user-facing features, leading to improved user experience as developers spend less time dealing with architectural complexities and more time implementing valuable functionality.

- **Easier Onboarding of New Developers**: Clean architecture provides a structured and organized codebase that is easier for new developers to understand and contribute to, thus reducing the learning curve and accelerating the onboarding process.

In summary, clean architecture offers numerous benefits that contribute to the long-term success and sustainability of software projects, including improved maintainability, testability, scalability, flexibility, and collaboration, among others.

## Design patterns👷

#### Repository

Repository pattern was used to concentrate methods in the pokemon repository class, the Repository Pattern is a design pattern commonly used in software development, particularly in applications that interact with databases or external data sources. It aims to abstract the data access logic from the rest of the application, providing a separation of concerns and promoting a more modular, maintainable codebase.
Key concepts and components of the Repository Pattern include:

- **Abstraction of Data Access Logic**: The primary goal of the Repository Pattern is to abstract the data access logic away from the business logic of the application. This separation allows developers to focus on implementing business rules and application features without worrying about the intricacies of data access and storage.

- **Single Responsibility Principle (SRP)**: The Repository Pattern follows the Single Responsibility Principle by assigning the responsibility of data access to specialized repository classes. Each repository is responsible for handling all interactions with a specific type of data entity or aggregate root.

- **Interface-based Design**: Repositories typically define interfaces that specify a set of methods for performing CRUD (Create, Read, Update, Delete) operations on data entities. This interface-based design enables flexibility and allows different implementations (e.g., for different data storage mechanisms) to adhere to a common contract.

- **Encapsulation of Data Access Logic**: Repositories encapsulate the details of how data is retrieved, stored, updated, and deleted. Clients of the repository interact with it through its well-defined interface, without needing to know the underlying data access mechanisms or implementation details.

- **Promotion of Testability**: The Repository Pattern promotes testability by facilitating the use of mock objects or test doubles during unit testing. Since data access logic is abstracted behind interfaces, it becomes easier to mock repository implementations and isolate business logic for testing.

- **Centralized Data Access**: By centralizing data access logic within repositories, the application can ensure consistency and enforce data access rules across different parts of the codebase. This avoids code duplication and reduces the likelihood of introducing bugs related to data access.

- **Flexibility and Scalability**: The use of the Repository Pattern allows for flexibility and scalability in the application architecture. Developers can easily swap out different repository implementations (e.g., for different database systems) or introduce caching and optimization strategies without impacting the rest of the application.

#### Interactor

Interactor pattern was used to encapsulate pokemon use cases, the Interactor Pattern is used to encapsulate and represent the application-specific business logic and use cases.

The Interactor Pattern, also known simply as the Interactor, is a design pattern commonly used in software development, particularly in applications that follow Clean Architecture or similar architectural styles. The Interactor Pattern is used to encapsulate and represent the application-specific business logic and use cases.

Key characteristics and components of the Interactor Pattern:

- **Encapsulation of Use Cases**: Interactors encapsulate the application's core business logic and use cases. Each Interactor represents a specific user interaction or system operation, such as creating a new user account, processing a payment, or generating a report.

- **Application-Specific Logic**: Interactors contain the logic necessary to coordinate the execution of domain objects, services, and data access operations to fulfill a particular use case. They encapsulate the rules, workflows, and behaviors that define how the application operates and interacts with its users or external systems.

- **Single Responsibility Principle (SRP)**: Interactors adhere to the Single Responsibility Principle by focusing on a single use case or business operation. They are responsible for orchestrating the interactions between different components of the system to achieve a specific goal, such as validating input, invoking domain logic, and coordinating data persistence.

- **Decoupling from External Concerns**: Interactors are designed to be independent of external concerns such as user interfaces, databases, or frameworks. They operate at a higher level of abstraction, interacting with domain objects and services through interfaces or abstractions, rather than directly coupling to implementation details.

- **Testability**: The Interactor Pattern promotes testability by isolating the application's business logic from external dependencies. Interactors can be easily unit tested in isolation, using mock objects or test doubles to simulate interactions with collaborators such as domain objects, repositories, or external services.

- **Promotion of Clean Architecture**: The Interactor Pattern is closely associated with Clean Architecture and similar architectural styles that emphasize separation of concerns and dependency inversion. Interactors serve as the bridge between the application's core business logic and the external world, ensuring that business rules are decoupled from infrastructure concerns and presentation details.

## Code refactor 🔁

Unit test code was refactored to improve legibility and maintenance by setting and getting constants in a centralized way

##### Before

```typescript
test.describe("Testing at pokemon routes", () => {
  test.describe("Testing POST endpoint", () => {
    test("Should respond status 201", async ({ request }) => {
      const response = await request.post(
        "http://localhost:3000/api/v1/pokemons/pidgeotto"
      );

      expect(response.status()).toBe(201);
    });
    test("Should return the created pokemon", async ({ request }) => {
      const response = await request.post(
        "http://localhost:3000/api/v1/pokemons/pidgeotto"
      );
      const json = await response.json();

      expect(json).toBeDefined();
      expect(json.registeredPokemon.name).toBe("pidgeotto");
    });
    test("Should respond status 404 width no pokemon name", async ({
      request,
    }) => {
      const response = await request.post(
        "http://localhost:3000/api/v1/pokemons/"
      );
      expect(response.status()).toBe(404);
    });
    test("Should respond status 400 width invalid pokemon name", async ({
      request,
    }) => {
      const response = await request.post(
        "http://localhost:3000/api/v1/pokemons/4568"
      );
      expect(response.status()).toBe(400);
    });
  });
  test.describe("Testing GET endpoint", () => {
    test("Should respond status 200", async ({ request }) => {
      const response = await request.get(
        "http://localhost:3000/api/v1/pokemons/"
      );
      expect(response.status()).toBe(200);
    });
    test("Should respond whit pokemons", async ({ request }) => {
      const response = await request.get(
        "http://localhost:3000/api/v1/pokemons/"
      );
      const json = await response.json();

      expect(json.pokemons).toBeDefined();
      expect(json.pokemons).toHaveLength(1);
    });
  });
});
```

#### After

```typescript
test.describe("Testing at pokemon routes", () => {
  test.describe("Testing POST endpoint", () => {
    test("Should respond status 201", async ({ request }) => {
      const response = await request.post(
        `${testConstant.endpoint.pokemons}${testConstant.pokemon.name}`
      );

      expect(response.status()).toBe(201);
    });
    test("Should return the created pokemon", async ({ request }) => {
      const response = await request.post(
        `${testConstant.endpoint.pokemons}${testConstant.pokemon.name}`
      );
      const json = await response.json();

      expect(json).toBeDefined();
      expect(json.registeredPokemon.name).toBe("pidgeotto");
    });
    test("Should respond status 404 width no pokemon name", async ({
      request,
    }) => {
      const response = await request.post(testConstant.endpoint.pokemons);
      expect(response.status()).toBe(404);
    });
    test("Should respond status 400 width invalid pokemon name", async ({
      request,
    }) => {
      const response = await request.post(
        `${testConstant.endpoint.pokemons}4568`
      );
      expect(response.status()).toBe(400);
    });
  });
  test.describe("Testing GET endpoint", () => {
    test("Should respond status 200", async ({ request }) => {
      const response = await request.get(testConstant.endpoint.pokemons);
      expect(response.status()).toBe(200);
    });
    test("Should respond whit pokemons", async ({ request }) => {
      const response = await request.get(testConstant.endpoint.pokemons);
      const json = await response.json();

      expect(json.pokemons).toBeDefined();
      expect(json.pokemons).toHaveLength(1);
    });
  });
});
```
