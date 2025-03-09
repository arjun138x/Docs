NestJS is a progressive Node.js framework used for building efficient, scalable, and maintainable server-side applications. It is built on top of Express (or optionally Fastify) and uses TypeScript by default. Here are the main topics in NestJS:

# 1. **Core Concepts**

- Introduction to NestJS
- Installation & Project Structure
- Understanding Modules, Controllers, and Services

---

### **Introduction to NestJS**

NestJS is a **progressive** and **scalable** Node.js framework built with TypeScript. It is inspired by Angular and follows a **modular architecture**, making it suitable for building efficient server-side applications.

#### **Why NestJS?**

- **TypeScript Support**: Ensures type safety and better developer experience.
- **Modular Structure**: Applications are divided into feature-based modules, making them easy to maintain.
- **Built-in Dependency Injection**: Encourages clean and reusable code.
- **Supports Express & Fastify**: You can choose between two powerful HTTP engines.
- **Built-in Support for Microservices**: Easily build scalable applications with gRPC, Kafka, RabbitMQ, etc.
- **Powerful CLI**: Automates code generation and project setup.
- **Supports REST & GraphQL**: Seamlessly integrates with APIs and databases.

---

## **Installation & Project Structure**

### **1. Installing NestJS**

To install NestJS, you need **Node.js** (v16+ recommended) installed.

1️⃣ **Install NestJS CLI globally**:

```sh
npm install -g @nestjs/cli
```

2️⃣ **Create a new NestJS project**:

```sh
nest new my-nest-app
```

🔹 Choose a package manager (npm, yarn, or pnpm).  
🔹 This command creates a folder **my-nest-app** with the boilerplate project.

3️⃣ **Navigate to the project and run it**:

```sh
cd my-nest-app
npm run start
```

By default, the server runs on **http://localhost:3000**.

---

### **2. Project Structure**

After creating a NestJS project, you’ll see the following structure:

```
my-nest-app
│── src/
│   ├── app.controller.ts      # Handles incoming HTTP requests
│   ├── app.controller.spec.ts # Unit tests for app.controller
│   ├── app.module.ts          # Root module (entry point)
│   ├── app.service.ts         # Handles business logic
│   └── main.ts                # Bootstrap file to start the app
│
│── test/                      # End-to-end testing files
│── node_modules/              # Dependencies
│── package.json               # Project configuration
│── tsconfig.json              # TypeScript configuration
│── .eslintrc.js               # Linter configuration
│── .prettierrc                # Code formatting config
```

📌 **Key Files:**

- **`main.ts`** → Entry point, starts the application.
- **`app.module.ts`** → Root module where all other modules are imported.
- **`app.controller.ts`** → Handles incoming HTTP requests.
- **`app.service.ts`** → Contains the business logic.

---

## **Understanding Modules, Controllers, and Services**

NestJS applications are structured around three key concepts:  
✅ **Modules** (Encapsulate Features)  
✅ **Controllers** (Handle Requests)  
✅ **Services** (Handle Business Logic)

---

### **1. Modules (`@Module`)**

Modules are the building blocks of a NestJS app. Every application must have at least one module (usually `AppModule`).

📌 **Example: Creating a User Module**

```ts
import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController], // Controllers for handling requests
  providers: [UsersService], // Services for business logic
})
export class UsersModule {}
```

---

### **2. Controllers (`@Controller`)**

Controllers handle HTTP requests and responses. Each route is defined inside a controller.

📌 **Example: Creating a Users Controller**

```ts
import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users") // Base route: /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Handles GET requests at /users
  findAll() {
    return this.usersService.getAllUsers();
  }
}
```

---

### **3. Services (`@Injectable`)**

Services handle business logic and are injected into controllers.

📌 **Example: Creating a Users Service**

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: "John Doe" }];

  getAllUsers() {
    return this.users;
  }
}
```

---

### **Connecting Everything**

To use the `UsersModule`, import it in `app.module.ts`:

```ts
import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [UsersModule], // Import the UsersModule
})
export class AppModule {}
```

Now, when you visit `http://localhost:3000/users`, it will return:

```json
[{ "id": 1, "name": "John Doe" }]
```

---

## **Summary**

✔ **NestJS is a modular, scalable, and TypeScript-based framework for Node.js.**  
✔ **Installation is simple using the NestJS CLI (`nest new my-app`).**  
✔ **Project structure follows a modular approach with controllers, services, and modules.**  
✔ **Controllers handle routes, services handle business logic, and modules encapsulate features.**

# 2. **Dependency Injection**

- Providers & Injectable Services
- Custom Providers
- UseFactory & UseClass Patterns

---

### **Providers & Injectable Services in NestJS**

**Providers** are fundamental building blocks in NestJS, responsible for handling business logic. They are usually **services**, **repositories**, or **helpers** that can be injected into controllers or other providers using **Dependency Injection (DI)**.

### **1. Providers & Injectable Services**

In NestJS, services are created as providers using the `@Injectable()` decorator.

📌 **Example: Creating a Basic Service**

```ts
import { Injectable } from "@nestjs/common";

@Injectable() // Marks this class as a provider
export class UsersService {
  private users = [{ id: 1, name: "Alice" }];

  getAllUsers() {
    return this.users;
  }
}
```

📌 **Injecting a Service into a Controller**

```ts
import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }
}
```

🔹 **How it Works?**

- NestJS **automatically injects** the `UsersService` into `UsersController`.
- The `@Injectable()` decorator makes the service available as a **provider**.
- Dependency Injection (DI) resolves the provider and passes it to the controller.

---

### **2. Custom Providers**

Sometimes, we may want to register a provider manually instead of relying on NestJS's automatic resolution. This is done inside the `providers` array of a module.

📌 **Manually Registering a Provider**

```ts
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";

@Module({
  providers: [UsersService], // Manually registering the service
  exports: [UsersService], // Making it available for other modules
})
export class UsersModule {}
```

📌 **Injecting Custom Providers**

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomLoggerService {
  log(message: string) {
    console.log(`[Custom Logger]: ${message}`);
  }
}
```

```ts
@Module({
  providers: [
    {
      provide: "LOGGER", // Custom provider token
      useClass: CustomLoggerService,
    },
  ],
  exports: ["LOGGER"],
})
export class LoggerModule {}
```

```ts
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class SomeService {
  constructor(@Inject("LOGGER") private readonly logger) {}

  doSomething() {
    this.logger.log("Doing something...");
  }
}
```

🔹 **Why Custom Providers?**

- Useful for **third-party services** that don't use NestJS.
- Helps in **mocking dependencies** during testing.
- Allows **fine-grained control** over how services are created.

---

### **3. `useClass`, `useValue`, `useFactory` Patterns**

NestJS provides multiple ways to define providers using `provide` and different strategies:

#### **🔹 `useClass` (Default Behavior)**

It allows replacing an existing provider with a different implementation.

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class DefaultLogger {
  log(msg: string) {
    console.log(`Default: ${msg}`);
  }
}

@Injectable()
export class AdvancedLogger {
  log(msg: string) {
    console.log(`Advanced: ${msg}`);
  }
}

@Module({
  providers: [
    { provide: DefaultLogger, useClass: AdvancedLogger }, // Replacing DefaultLogger with AdvancedLogger
  ],
})
export class AppModule {}
```

📌 **Now, injecting `DefaultLogger` will actually use `AdvancedLogger` instead!**

---

#### **🔹 `useValue` (Providing Constants or Simple Objects)**

This is useful when you want to inject a constant value instead of a class.

```ts
const API_CONFIG = { baseUrl: "https://api.example.com", timeout: 5000 };

@Module({
  providers: [{ provide: "API_CONFIG", useValue: API_CONFIG }],
  exports: ["API_CONFIG"],
})
export class ConfigModule {}
```

```ts
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class ApiService {
  constructor(@Inject("API_CONFIG") private config) {}

  getConfig() {
    return this.config;
  }
}
```

📌 **Now, `ApiService.getConfig()` returns `{ baseUrl: 'https://api.example.com', timeout: 5000 }`**

---

#### **🔹 `useFactory` (Dynamic Provider Creation)**

Use this pattern when a provider depends on runtime logic.

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class DynamicService {
  constructor(private readonly config: { mode: string }) {}

  printMode() {
    console.log(`App running in ${this.config.mode} mode`);
  }
}

@Module({
  providers: [
    {
      provide: DynamicService,
      useFactory: () =>
        new DynamicService({ mode: process.env.NODE_ENV || "development" }),
    },
  ],
})
export class AppModule {}
```

📌 **Key Benefits of `useFactory`:**

- Can inject **other providers** dynamically.
- Great for **asynchronous dependencies**.
- Allows **runtime-based configurations**.

Example with **Dependency Injection inside `useFactory`**:

```ts
@Module({
  providers: [
    {
      provide: "TOKEN_SERVICE",
      useFactory: (configService: ConfigService) => {
        return new TokenService(configService.getSecretKey());
      },
      inject: [ConfigService], // Injecting another provider
    },
  ],
})
export class AuthModule {}
```

---

### **Conclusion**

✔ **Providers** are the backbone of NestJS, allowing services to be injected into controllers and other services.  
✔ **Custom Providers** allow fine control over how dependencies are injected.  
✔ **Different Provider Strategies:**

- **`useClass`** → Replace default implementation.
- **`useValue`** → Inject a constant or object.
- **`useFactory`** → Dynamically generate a provider.

# 3. **Routing & Request Handling**

- Handling GET, POST, PUT, DELETE requests
- Route Parameters & Query Parameters
- Request & Response Objects

---

## **Handling GET, POST, PUT, DELETE Requests in NestJS**

NestJS uses **controllers** to handle HTTP requests. You can define different request methods (`GET`, `POST`, `PUT`, `DELETE`) using decorators like `@Get()`, `@Post()`, `@Put()`, and `@Delete()`.

### **1. Basic CRUD Operations**

📌 **Example: Users Controller Handling CRUD Operations**

```ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";

@Controller("users") // Base route: /users
export class UsersController {
  private users = [{ id: 1, name: "John Doe" }];

  // GET all users
  @Get()
  getAllUsers() {
    return this.users;
  }

  // GET a user by ID
  @Get(":id")
  getUserById(@Param("id") id: string) {
    return this.users.find((user) => user.id === parseInt(id));
  }

  // POST (Create a new user)
  @Post()
  createUser(@Body() newUser: { id: number; name: string }) {
    this.users.push(newUser);
    return newUser;
  }

  // PUT (Update an existing user)
  @Put(":id")
  updateUser(@Param("id") id: string, @Body() updatedUser: { name: string }) {
    const user = this.users.find((user) => user.id === parseInt(id));
    if (user) {
      user.name = updatedUser.name;
      return user;
    }
    return { message: "User not found" };
  }

  // DELETE (Remove a user)
  @Delete(":id")
  deleteUser(@Param("id") id: string) {
    this.users = this.users.filter((user) => user.id !== parseInt(id));
    return { message: `User with ID ${id} deleted` };
  }
}
```

### **How It Works?**

| Method     | Endpoint     | Description               |
| ---------- | ------------ | ------------------------- |
| **GET**    | `/users`     | Get all users             |
| **GET**    | `/users/:id` | Get a specific user by ID |
| **POST**   | `/users`     | Create a new user         |
| **PUT**    | `/users/:id` | Update user by ID         |
| **DELETE** | `/users/:id` | Delete user by ID         |

---

## **Route Parameters & Query Parameters**

### **1. Route Parameters (`@Param()`)**

Used to capture values from the URL.

📌 **Example: Handling Route Parameters**

```ts
@Get(':id')  // Accessing a specific user by ID
getUser(@Param('id') id: string) {
  return { userId: id };
}
```

**📌 Example Request:**  
`GET /users/5` → `{ "userId": "5" }`

---

### **2. Query Parameters (`@Query()`)**

Used to pass optional data in the URL (e.g., filters, sorting).

📌 **Example: Handling Query Parameters**

```ts
@Get()
getUsers(@Query('search') search: string) {
  if (search) {
    return { message: `Searching users by ${search}` };
  }
  return { message: 'Getting all users' };
}
```

**📌 Example Request:**  
`GET /users?search=John` → `{ "message": "Searching users by John" }`

---

## **Request & Response Objects**

NestJS provides access to the **Request (`req`)** and **Response (`res`)** objects from Express or Fastify.

📌 **Example: Using Request and Response Objects**

```ts
import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";

@Controller("users")
export class UsersController {
  @Get("custom")
  getCustomUser(@Req() req: Request, @Res() res: Response) {
    console.log("Headers:", req.headers);
    return res.status(200).json({ message: "Custom response" });
  }
}
```

- `@Req()` gives access to the request object (`req`).
- `@Res()` allows sending a custom response (`res`).

---

## **Summary**

✔ **NestJS supports RESTful API methods** (`GET`, `POST`, `PUT`, `DELETE`).  
✔ **Route parameters (`@Param()`)** extract values from the URL.  
✔ **Query parameters (`@Query()`)** filter or modify requests.  
✔ **Request & Response objects (`@Req()`, `@Res()`)** allow advanced handling.

# 4. **Middleware & Interceptors**

- Creating & Using Middleware
- Request & Response Transformation
- Logging & Performance Monitoring

---

## **Creating & Using Middleware in NestJS**

### **What is Middleware?**

Middleware is a function that runs **before** the request reaches the controller. It is useful for:  
✅ Logging requests  
✅ Validating authentication  
✅ Modifying request/response objects  
✅ Performance monitoring

---

### **1. Creating a Custom Middleware**

📌 **Example: Logging Middleware**

```ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[${req.method}] ${req.url}`);
    next(); // Pass the request to the next middleware/controller
  }
}
```

📌 **Applying Middleware in a Module**

```ts
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { LoggerMiddleware } from "./logger.middleware";

@Module({
  controllers: [UsersController],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(UsersController);
  }
}
```

✅ Now, every request to `UsersController` logs `[METHOD] /url` in the console.

---

### **2. Global Middleware (For All Routes)**

To apply middleware to all routes, use `app.use()` in `main.ts`.

📌 **Applying Global Middleware**

```ts
import { LoggerMiddleware } from "./logger.middleware";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerMiddleware); // Apply globally
  await app.listen(3000);
}
bootstrap();
```

✅ Now, all requests are logged, regardless of the route.

---

## **Request & Response Transformation**

NestJS provides built-in mechanisms to **modify requests before they reach the controller** and **format responses before sending them to the client**.

---

### **1. Request Transformation (DTOs & Pipes)**

**DTO (Data Transfer Object) + Validation Pipe** helps **validate and transform incoming data**.

📌 **Example: Validating a User DTO using `class-validator`**

```ts
import { IsString, IsInt, Min } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(18)
  age: number;
}
```

📌 **Applying DTO in Controller**

```ts
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  @Post()
  @UsePipes(new ValidationPipe()) // Apply validation
  createUser(@Body() userDto: CreateUserDto) {
    return { message: "User created", user: userDto };
  }
}
```

✅ Now, if the request body is invalid, NestJS returns an error response automatically.

---

### **2. Response Transformation (Interceptors)**

Interceptors modify the response **before** it is sent to the client.

📌 **Example: Response Interceptor to Add Extra Fields**

```ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      }))
    );
  }
}
```

📌 **Applying the Interceptor in a Controller**

```ts
import { UseInterceptors } from "@nestjs/common";
import { ResponseInterceptor } from "./response.interceptor";

@UseInterceptors(ResponseInterceptor)
@Controller("users")
export class UsersController {
  @Get()
  getUsers() {
    return [{ id: 1, name: "John Doe" }];
  }
}
```

✅ Now, every response is formatted like this:

```json
{
  "success": true,
  "data": [{ "id": 1, "name": "John Doe" }],
  "timestamp": "2025-03-09T10:00:00.000Z"
}
```

---

## **Logging & Performance Monitoring**

### **1. Using NestJS Built-in Logger**

NestJS provides a built-in `Logger` class for structured logging.

📌 **Basic Logging Example**

```ts
import { Logger } from "@nestjs/common";

export class MyService {
  private readonly logger = new Logger(MyService.name);

  fetchData() {
    this.logger.log("Fetching data..."); // Normal log
    this.logger.warn("This is a warning"); // Warning log
    this.logger.error("An error occurred", new Error().stack); // Error log
  }
}
```

✅ The logs will be visible in the console.

---

### **2. Monitoring API Performance (Middleware)**

To measure API execution time, use middleware:

📌 **Performance Monitoring Middleware**

```ts
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class PerformanceMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    res.on("finish", () => {
      const duration = Date.now() - start;
      console.log(`[${req.method}] ${req.url} - ${duration}ms`);
    });
    next();
  }
}
```

📌 **Applying Middleware in App Module**

```ts
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { PerformanceMiddleware } from "./performance.middleware";

@Module({})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PerformanceMiddleware).forRoutes("*"); // Apply globally
  }
}
```

✅ Now, every API request logs its execution time:

```
[GET] /users - 120ms
[POST] /users - 300ms
```

---

### **3. Using External Logging Tools (Winston, Pino)**

For advanced logging, integrate **Winston** or **Pino**.

📌 **Install Winston**

```sh
npm install nest-winston winston
```

📌 **Configure Winston Logger**

```ts
import { WinstonModule } from "nest-winston";
import * as winston from "winston";

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({ level: "info" }),
        new winston.transports.File({
          filename: "logs/error.log",
          level: "error",
        }),
      ],
    }),
  ],
})
export class AppModule {}
```

✅ Now, logs are stored in a file (`logs/error.log`).

---

## **Summary**

✔ **Middleware** allows executing code before controllers (e.g., logging, authentication).  
✔ **Request transformation** is done using DTOs & Pipes.  
✔ **Response transformation** can be done using **Interceptors**.  
✔ **Performance Monitoring** can be implemented using custom middleware.  
✔ **Advanced logging** can be done using **NestJS Logger** or **Winston/Pino**.

# 5. **Guards & Authentication**

- Custom Guards for Route Protection
- JWT Authentication with Passport
- Role-based & Permission-based Authorization

---

## **Custom Guards for Route Protection in NestJS**

### **1. What are Guards in NestJS?**

Guards are used to **protect routes** by determining whether a request is **allowed or denied**.

- They execute **before** reaching the controller.
- Use **@CanActivate** interface.

---

### **2. Creating a Custom Auth Guard**

📌 **Example: Protecting Routes Based on a Custom Header Token**

```ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers["authorization"];

    if (!authHeader || authHeader !== "Bearer my-secret-token") {
      throw new UnauthorizedException("Invalid or missing token");
    }

    return true; // Grant access
  }
}
```

📌 **Applying the Guard to a Controller**

```ts
import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "./auth.guard";

@Controller("protected")
export class ProtectedController {
  @Get()
  @UseGuards(AuthGuard)
  getProtectedData() {
    return { message: "You have access to this protected data!" };
  }
}
```

✅ Now, only requests with `Authorization: Bearer my-secret-token` can access this route.

---

## **JWT Authentication with Passport**

### **1. Install Required Packages**

```sh
npm install @nestjs/passport passport passport-jwt @nestjs/jwt
```

---

### **2. Configure JWT Authentication**

📌 **Create `jwt.strategy.ts` for Token Validation**

```ts
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "my-secret-key", // Store in env variable
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```

📌 **Create `auth.service.ts` for Login & Token Generation**

```ts
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
```

📌 **Create `auth.controller.ts` to Handle Login Requests**

```ts
import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  login(@Body() user: { username: string; password: string }) {
    return this.authService.login(user);
  }
}
```

✅ **Now, sending a `POST /auth/login` with username & password returns a JWT token.**

---

### **3. Protect Routes Using JWT Guard**

📌 **Create `jwt.guard.ts`**

```ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw new UnauthorizedException("Invalid Token");
    }
    return user;
  }
}
```

📌 **Use JWT Guard in a Controller**

```ts
import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "./jwt.guard";

@Controller("protected")
export class ProtectedController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getProtectedData() {
    return { message: "You have access!" };
  }
}
```

✅ Now, **only users with a valid JWT token can access the `/protected` route**.

---

## **Role-based & Permission-based Authorization**

### **1. Defining Roles**

Create an Enum for Roles:

```ts
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
```

---

### **2. Create a Role Guard**

📌 **Create `roles.guard.ts`**

```ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>(
      "roles",
      context.getHandler()
    );
    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException("Access Denied");
    }

    return true;
  }
}
```

---

### **3. Create a Decorator to Assign Roles**

📌 **Create `roles.decorator.ts`**

```ts
import { SetMetadata } from "@nestjs/common";

export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

---

### **4. Apply Role-based Authorization to Controllers**

📌 **Example: Protecting Routes Based on Roles**

```ts
import { Controller, Get, UseGuards } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { RolesGuard } from "./roles.guard";

@Controller("admin")
@UseGuards(RolesGuard) // Apply role-based guard
export class AdminController {
  @Get()
  @Roles("admin") // Only admins can access
  getAdminData() {
    return { message: "Welcome Admin!" };
  }
}
```

✅ **Now, only users with the `"admin"` role can access this route.**

---

## **Summary**

✔ **Custom Guards** allow flexible route protection.  
✔ **JWT Authentication** secures routes using `passport-jwt`.  
✔ **Role-based Authorization** ensures access control for different user types.

---

# 6. **Pipes & Validation**

- Built-in & Custom Pipes
- DTOs (Data Transfer Objects)
- Class-validator & class-transformer

---

## **Built-in & Custom Pipes in NestJS**

### **1. What are Pipes in NestJS?**

Pipes in NestJS **validate** and **transform** incoming data before it reaches the controller.

- They run **before** the request is processed.
- Useful for **data validation, type conversion, and sanitization**.

---

### **2. Built-in Pipes in NestJS**

NestJS provides built-in pipes such as:

| Pipe               | Description                                    |
| ------------------ | ---------------------------------------------- |
| `ValidationPipe`   | Validates request body using `class-validator` |
| `ParseIntPipe`     | Converts a value to an integer                 |
| `ParseBoolPipe`    | Converts a value to boolean (`true/false`)     |
| `ParseArrayPipe`   | Converts a string to an array                  |
| `DefaultValuePipe` | Assigns a default value if undefined           |

📌 **Example: Using `ParseIntPipe` for Route Parameters**

```ts
import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";

@Controller("users")
export class UsersController {
  @Get(":id")
  getUser(@Param("id", ParseIntPipe) id: number) {
    return { userId: id };
  }
}
```

✅ Now, `id` is always converted to a number.

---

### **3. Custom Pipes**

📌 **Example: Creating a `CustomUpperCasePipe`**

```ts
import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class UpperCasePipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value.toUpperCase();
  }
}
```

📌 **Using Custom Pipe in a Controller**

```ts
import { Controller, Get, Query, UsePipes } from "@nestjs/common";
import { UpperCasePipe } from "./uppercase.pipe";

@Controller("users")
export class UsersController {
  @Get()
  @UsePipes(UpperCasePipe)
  getUser(@Query("name") name: string) {
    return { transformedName: name };
  }
}
```

✅ Now, `?name=john` will return `{ "transformedName": "JOHN" }`.

---

## **DTOs (Data Transfer Objects) in NestJS**

### **1. What is a DTO?**

A DTO (Data Transfer Object) is a class that **defines the structure of request data**.

- Used to enforce **data validation and type safety**.
- Works with `class-validator` for validation.

📌 **Example: `CreateUserDto` DTO**

```ts
export class CreateUserDto {
  name: string;
  age: number;
}
```

📌 **Using DTO in a Controller**

```ts
import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  @Post()
  createUser(@Body() userDto: CreateUserDto) {
    return { message: "User created", user: userDto };
  }
}
```

✅ Now, only valid DTOs are accepted.

---

## **Class-validator & Class-transformer in NestJS**

### **1. Installing Class-validator & Class-transformer**

```sh
npm install class-validator class-transformer
```

---

### **2. Using `class-validator` for Validation**

📌 **Example: Adding Validation to DTO**

```ts
import { IsString, IsInt, Min, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MaxLength(30)
  name: string;

  @IsInt()
  @Min(18)
  age: number;
}
```

✅ Now, the API will return an error if:  
❌ `name` is not a string or too long  
❌ `age` is not a number or below 18

---

### **3. Using `ValidationPipe` for Automatic Validation**

📌 **Apply `ValidationPipe` in a Controller**

```ts
import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("users")
export class UsersController {
  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userDto: CreateUserDto) {
    return { message: "User created", user: userDto };
  }
}
```

✅ Now, invalid data **automatically returns a validation error.**

---

### **4. Using `class-transformer` for Data Transformation**

The `class-transformer` package is used to **convert plain objects to class instances** and **apply transformations**.

📌 **Example: Transforming Strings to Numbers (`@Transform`)**

```ts
import { IsInt, Min } from "class-validator";
import { Transform } from "class-transformer";

export class CreateUserDto {
  @Transform(({ value }) => parseInt(value)) // Convert string to number
  @IsInt()
  @Min(18)
  age: number;
}
```

✅ Now, if `age` is sent as a string (`"25"`), it is automatically converted to `25`.

---

## **Summary**

✔ **Pipes** validate and transform data before reaching controllers.  
✔ **DTOs** define the request data structure.  
✔ **`class-validator`** ensures request data is valid.  
✔ **`class-transformer`** helps convert and modify data.

---

# 7. **Database Integration**

- TypeORM & Prisma with NestJS
- Mongoose for MongoDB
- Repository & Service Patterns

---

## **Database Integration in NestJS**

NestJS supports multiple database options, including **TypeORM, Prisma, and Mongoose**.

- **TypeORM** → SQL Databases (PostgreSQL, MySQL, etc.)
- **Prisma** → Modern ORM with TypeScript support
- **Mongoose** → MongoDB

---

## **1️⃣ TypeORM with NestJS**

### **1. Install TypeORM and Database Driver**

For PostgreSQL:

```sh
npm install @nestjs/typeorm typeorm pg
```

For MySQL:

```sh
npm install @nestjs/typeorm typeorm mysql2
```

---

### **2. Configure TypeORM in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres", // Change to 'mysql' if using MySQL
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "password",
      database: "testdb",
      autoLoadEntities: true,
      synchronize: true, // Auto-create tables (use only in development)
    }),
  ],
})
export class AppModule {}
```

✅ Now, NestJS is connected to PostgreSQL/MySQL.

---

### **3. Define an Entity (`user.entity.ts`)**

```ts
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;
}
```

---

### **4. Create Repository & Service for User (`user.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async createUser(name: string, email: string) {
    const user = this.userRepository.create({ name, email });
    return this.userRepository.save(user);
  }

  async getUsers() {
    return this.userRepository.find();
  }
}
```

---

### **5. Create Controller (`user.controller.ts`)**

```ts
import { Controller, Get, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() body: { name: string; email: string }) {
    return this.userService.createUser(body.name, body.email);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
```

✅ Now,

- **POST `/users`** `{ "name": "John", "email": "john@example.com" }` creates a user.
- **GET `/users`** retrieves all users.

---

## **2️⃣ Prisma with NestJS**

### **1. Install Prisma and PostgreSQL Driver**

```sh
npm install @prisma/client
npx prisma init
```

---

### **2. Define Prisma Schema (`prisma/schema.prisma`)**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = "postgresql://postgres:password@localhost:5432/testdb"
}

model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

Run migration:

```sh
npx prisma migrate dev --name init
```

---

### **3. Create Prisma Service (`prisma.service.ts`)**

```ts
import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
```

---

### **4. Create User Service with Prisma (`user.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(name: string, email: string) {
    return this.prisma.user.create({
      data: { name, email },
    });
  }

  async getUsers() {
    return this.prisma.user.findMany();
  }
}
```

✅ Now, Prisma can be used just like TypeORM but with better TypeScript support.

---

# **3️⃣ Mongoose for MongoDB in NestJS**

### **1. Install Mongoose and MongoDB Driver**

```sh
npm install @nestjs/mongoose mongoose
```

---

### **2. Configure Mongoose in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/testdb")],
})
export class AppModule {}
```

---

### **3. Define Mongoose Schema & Model (`user.schema.ts`)**

```ts
import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
```

---

### **4. Create User Service with Mongoose (`user.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.schema";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(name: string, email: string) {
    const user = new this.userModel({ name, email });
    return user.save();
  }

  async getUsers() {
    return this.userModel.find().exec();
  }
}
```

✅ Now, MongoDB is fully integrated!

---

# **4️⃣ Repository & Service Patterns in NestJS**

### **What is the Repository Pattern?**

The Repository Pattern **separates database logic** from business logic.

- **Repositories** handle database interactions.
- **Services** handle business logic.

📌 **Example: Repository for Users (`user.repository.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async createUser(name: string, email: string) {
    const user = this.repo.create({ name, email });
    return this.repo.save(user);
  }

  async findAllUsers() {
    return this.repo.find();
  }
}
```

📌 **Using Repository in Service (`user.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async registerUser(name: string, email: string) {
    return this.userRepository.createUser(name, email);
  }

  async listUsers() {
    return this.userRepository.findAllUsers();
  }
}
```

✅ This keeps database logic **inside the repository** and business logic **inside the service**.

---

## **Summary**

✔ **TypeORM** → SQL-based ORM (PostgreSQL, MySQL, etc.)  
✔ **Prisma** → TypeScript ORM with better DX  
✔ **Mongoose** → MongoDB support  
✔ **Repository Pattern** → Separates database logic from business logic

---

# 8. **Microservices & Event-Driven Architecture**

- Message Queues (RabbitMQ, Kafka)
- gRPC & WebSockets
- NestJS Microservices Module

---

NestJS provides **scalable and high-performance** solutions for handling asynchronous communication, including:  
✅ **Message Queues** (RabbitMQ, Kafka)  
✅ **gRPC & WebSockets** for real-time communication  
✅ **Microservices Architecture**

---

# #**1️⃣ Message Queues in NestJS (RabbitMQ, Kafka)**

### **📌 Why Use Message Queues?**

- Asynchronous processing
- Decouple services for scalability
- Improve performance by handling background tasks

---

## **🐇 RabbitMQ with NestJS**

### **1. Install RabbitMQ Dependencies**

```sh
npm install amqplib @nestjs/microservices
```

---

### **2. Configure RabbitMQ in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "RABBITMQ_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ["amqp://localhost:5672"], // RabbitMQ URL
          queue: "notifications",
          queueOptions: { durable: false },
        },
      },
    ]),
  ],
})
export class AppModule {}
```

---

### **3. Publish Messages (Producer)**

```ts
import { Controller, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Inject } from "@nestjs/common";

@Controller("publish")
export class PublishController {
  constructor(@Inject("RABBITMQ_SERVICE") private client: ClientProxy) {}

  @Post()
  sendMessage() {
    return this.client.emit("message_created", { text: "Hello RabbitMQ" });
  }
}
```

---

### **4. Consume Messages (Consumer)**

```ts
import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class ConsumerController {
  @EventPattern("message_created")
  async handleMessage(data: any) {
    console.log("Received:", data);
  }
}
```

✅ Now, messages will be sent to the RabbitMQ queue and processed asynchronously.

---

## **🦜 Kafka with NestJS**

### **1. Install Kafka Dependencies**

```sh
npm install kafkajs @nestjs/microservices
```

---

### **2. Configure Kafka in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: { brokers: ["localhost:9092"] }, // Kafka broker
          consumer: { groupId: "my-group" },
        },
      },
    ]),
  ],
})
export class AppModule {}
```

---

### **3. Produce Messages (Kafka Producer)**

```ts
import { Controller, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Inject } from "@nestjs/common";

@Controller("publish")
export class PublishController {
  constructor(@Inject("KAFKA_SERVICE") private client: ClientProxy) {}

  @Post()
  sendMessage() {
    return this.client.emit("notification", { message: "Hello Kafka" });
  }
}
```

---

### **4. Consume Messages (Kafka Consumer)**

```ts
import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class ConsumerController {
  @EventPattern("notification")
  async handleNotification(data: any) {
    console.log("Kafka Received:", data);
  }
}
```

✅ Now, messages will be sent to the Kafka topic and consumed asynchronously.

---

## **2️⃣ gRPC & WebSockets in NestJS**

## **🔗 gRPC with NestJS**

### **1. Install gRPC Dependencies**

```sh
npm install @nestjs/microservices grpc @grpc/proto-loader
```

---

### **2. Define gRPC Proto File (`hello.proto`)**

```proto
syntax = "proto3";

service HelloService {
  rpc SayHello (HelloRequest) returns (HelloResponse);
}

message HelloRequest {
  string name = 1;
}

message HelloResponse {
  string message = 1;
}
```

---

### **3. Configure gRPC Server (`app.module.ts`)**

```ts
import { Module } from "@nestjs/common";
import { Transport, ClientsModule } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "HELLO_PACKAGE",
        transport: Transport.GRPC,
        options: {
          url: "localhost:50051",
          package: "hello",
          protoPath: "src/hello.proto",
        },
      },
    ]),
  ],
})
export class AppModule {}
```

---

### **4. Implement gRPC Service (`hello.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { HelloRequest, HelloResponse } from "./hello.interface";

@Injectable()
export class HelloService {
  sayHello(request: HelloRequest): HelloResponse {
    return { message: `Hello, ${request.name}!` };
  }
}
```

---

### **5. Create gRPC Controller (`hello.controller.ts`)**

```ts
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";

@Controller()
export class HelloController {
  @GrpcMethod("HelloService", "SayHello")
  sayHello(data: { name: string }) {
    return { message: `Hello, ${data.name}!` };
  }
}
```

✅ Now, you can call the gRPC service from a client.

---

## **📡 WebSockets with NestJS**

### **1. Install WebSocket Package**

```sh
npm install @nestjs/websockets @nestjs/platform-socket.io
```

---

### **2. Create WebSocket Gateway (`chat.gateway.ts`)**

```ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from "@nestjs/websockets";

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage("message")
  handleMessage(@MessageBody() data: string): string {
    return `Received: ${data}`;
  }
}
```

✅ Now, clients can connect via WebSockets and send messages in real time.

---

## **3️⃣ NestJS Microservices Module**

## **🔀 What are Microservices?**

Microservices allow **distributed** and **scalable** architectures by breaking applications into independent services.

### **1. Create a Microservice (Service A - `main.ts`)**

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: { host: "127.0.0.1", port: 3001 },
    }
  );
  await app.listen();
}
bootstrap();
```

---

### **2. Create a Microservice Client (Service B - `client.service.ts`)**

```ts
import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class ClientService {
  constructor(@Inject("MICROSERVICE") private client: ClientProxy) {}

  callMicroservice() {
    return this.client.send("get_data", {});
  }
}
```

✅ Now, **Service A** runs independently and **Service B** can call it.

---

## **Summary**

✔ **RabbitMQ & Kafka** → Message queues for async processing  
✔ **gRPC** → High-performance RPC communication  
✔ **WebSockets** → Real-time communication  
✔ **NestJS Microservices** → Distributed architecture

---

# 9. **GraphQL with NestJS**

- Setting up GraphQL with Apollo
- Queries, Mutations & Resolvers
- Code-first & Schema-first Approaches

---

## **GraphQL with NestJS** 🚀

NestJS provides built-in support for **GraphQL** through the `@nestjs/graphql` package. You can choose between **Code-First** and **Schema-First** approaches to define GraphQL schemas.

---

# **1️⃣ Setting Up GraphQL with Apollo**

### **📌 Why Use GraphQL?**

✅ Fetch only the required data (no over-fetching or under-fetching)  
✅ Strongly typed API  
✅ Single endpoint for multiple queries & mutations

---

### **📌 Install Required Dependencies**

```sh
npm install @nestjs/graphql @nestjs/apollo graphql graphql-tools
```

---

### **📌 Configure GraphQL in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql", // Code-first approach
      playground: true, // Enables GraphQL Playground
    }),
  ],
})
export class AppModule {}
```

✅ This sets up Apollo Server with **GraphQL Playground** at `http://localhost:3000/graphql`

---

# **2️⃣ Queries, Mutations & Resolvers**

## **📌 Define a GraphQL Object Type (`user.model.ts`)**

```ts
import { Field, ObjectType, Int } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true }) // Nullable field
  email?: string;
}
```

---

## **📌 Define a GraphQL Query (`user.resolver.ts`)**

```ts
import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./user.model";

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  getUser(): User {
    return { id: 1, name: "John Doe", email: "john@example.com" };
  }
}
```

✅ Now, you can run this **GraphQL query** in the Playground:

```graphql
query {
  getUser {
    id
    name
    email
  }
}
```

---

## **📌 Define a GraphQL Mutation (`user.resolver.ts`)**

```ts
import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { User } from "./user.model";

@Resolver(() => User)
export class UserResolver {
  private users: User[] = [];

  @Mutation(() => User)
  createUser(@Args("name") name: string, @Args("email") email: string): User {
    const newUser = { id: this.users.length + 1, name, email };
    this.users.push(newUser);
    return newUser;
  }
}
```

✅ Now, you can run this **GraphQL mutation**:

```graphql
mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
    email
  }
}
```

---

# **3️⃣ Code-First vs Schema-First Approach**

## **📌 Code-First Approach (Recommended) ✅**

- Uses TypeScript decorators
- Schema is generated automatically
- Easy to maintain

```ts
@ObjectType()
export class User {
  @Field()
  name: string;
}
```

---

## **📌 Schema-First Approach**

- Manually define GraphQL schema
- Requires writing `.graphql` files

### **1. Define Schema (`schema.graphql`)**

```graphql
type User {
  id: Int!
  name: String!
  email: String
}
type Query {
  getUser: User!
}
```

### **2. Load Schema in `app.module.ts`**

```ts
GraphQLModule.forRoot({
  typePaths: ["./**/*.graphql"], // Loads schema.graphql
});
```

✅ This approach is useful when integrating **GraphQL with external APIs**.

---

# **4️⃣ Connecting GraphQL with a Database (TypeORM & Prisma)**

### **📌 Example with TypeORM (`user.entity.ts`)**

```ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  email?: string;
}
```

---

### **📌 Querying Users from Database (`user.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
```

---

### **📌 Fetch Users via GraphQL Query (`user.resolver.ts`)**

```ts
@Query(() => [User])
async users(): Promise<User[]> {
  return this.userService.findAll();
}
```

✅ Now, run this GraphQL query:

```graphql
query {
  users {
    id
    name
    email
  }
}
```

---

# **🔥 Summary**

✔ **Apollo GraphQL Setup** in NestJS  
✔ **Queries & Mutations** with Resolvers  
✔ **Code-First vs Schema-First Approaches**  
✔ **Database Integration with TypeORM**

---

# 10. **WebSockets & Real-Time Communication**

- Using `@WebSocketGateway`
- Broadcasting Events & Subscriptions
- Integration with Redis for Scalability

---

NestJS provides built-in support for **WebSockets** using the `@WebSocketGateway` decorator. This allows real-time communication between clients and servers. We’ll cover:  
✅ **Setting up WebSockets with `@WebSocketGateway`**  
✅ **Broadcasting events & Subscriptions**  
✅ **Scaling WebSockets with Redis**

---

## **1️⃣ Setting Up WebSockets with `@WebSocketGateway`**

### **📌 Install Required Dependencies**

```sh
npm install @nestjs/websockets @nestjs/platform-socket.io socket.io
```

---

### **📌 Create a WebSocket Gateway (`chat.gateway.ts`)**

```ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway() // WebSocket server
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message")
  handleMessage(@MessageBody() data: string): string {
    return `Received: ${data}`;
  }
}
```

✅ Now, clients can **connect** and **send messages**.

---

### **📌 Connect from Frontend (Client-Side Example)**

```js
const socket = io("http://localhost:3000");

socket.emit("message", "Hello from client");

socket.on("message", (data) => {
  console.log("Received from server:", data);
});
```

---

## **2️⃣ Broadcasting Events & Subscriptions**

### **📌 Broadcasting Messages to All Clients**

```ts
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("message")
  handleMessage(@MessageBody() data: string): void {
    this.server.emit("message", data); // Broadcast to all clients
  }
}
```

✅ Now, when one client sends a message, **all connected clients** receive it.

---

### **📌 Sending Messages to a Specific Client**

```ts
import { ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@SubscribeMessage('privateMessage')
sendPrivateMessage(@MessageBody() data: string, @ConnectedSocket() client: Socket): void {
  client.emit('message', `Private: ${data}`); // Only the sender receives it
}
```

✅ This ensures only the sender receives the message.

---

### **📌 Handling Client Connection & Disconnection**

```ts
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
```

✅ The server logs when **clients connect or disconnect**.

---

## **3️⃣ Scaling WebSockets with Redis**

By default, WebSocket servers run on a **single instance**. If you scale your app with multiple instances, clients won’t be able to communicate across instances.  
✅ **Solution**: Use **Redis Pub/Sub** to sync WebSocket events across instances.

---

### **📌 Install Redis Dependencies**

```sh
npm install @nestjs/microservices ioredis
```

---

### **📌 Configure Redis Adapter in `main.ts`**

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { IoAdapter } from "@nestjs/platform-socket.io";
import { createAdapter } from "@socket.io/redis-adapter";
import { createClient } from "redis";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpServer = app.getHttpAdapter().getInstance();

  const pubClient = createClient({ url: "redis://localhost:6379" });
  const subClient = pubClient.duplicate();

  await Promise.all([pubClient.connect(), subClient.connect()]);

  const io = new IoAdapter(httpServer);
  io.useWebSocketAdapter(createAdapter(pubClient, subClient));

  await app.listen(3000);
}
bootstrap();
```

✅ Now, all instances share WebSocket events using **Redis**.

---

### **📌 Sending WebSocket Messages via Redis Pub/Sub**

```ts
import { Redis } from "ioredis";

const redis = new Redis();

// Publish a message
redis.publish("chat", JSON.stringify({ message: "Hello from Redis" }));

// Subscribe to messages
redis.subscribe("chat", (channel, message) => {
  console.log(`Received message from ${channel}:`, JSON.parse(message));
});
```

✅ Now, WebSocket events **sync across multiple instances**.

---

# **🔥 Summary**

✔ **Set up WebSockets with `@WebSocketGateway`**  
✔ **Broadcast events & handle subscriptions**  
✔ **Scale WebSockets using Redis Pub/Sub**

---

# 11. **Configuration & Environment Variables**

- Managing Configurations with `@nestjs/config`
- Using `.env` Files
- Handling Multi-Environment Configs

---

NestJS provides built-in support for managing configurations using the `@nestjs/config` package. This allows you to:  
✅ Load environment variables from `.env` files  
✅ Define configuration schemas  
✅ Manage multiple environments (development, production, etc.)

---

## **1️⃣ Installing & Setting Up `@nestjs/config`**

### **📌 Install Required Dependencies**

```sh
npm install @nestjs/config
```

---

### **📌 Load `.env` File in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {}
```

✅ Now, NestJS automatically **loads** variables from `.env`.

---

## **2️⃣ Using `.env` Files for Configuration**

### **📌 Create a `.env` File**

```env
PORT=3000
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=mysecretkey
```

---

### **📌 Access Environment Variables**

#### **Inside a Service (`config.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getDatabaseUrl(): string {
    return this.configService.get<string>("DATABASE_URL");
  }
}
```

✅ Now, you can access the `DATABASE_URL` from `.env`.

---

## **3️⃣ Handling Multi-Environment Configurations**

Different environments (e.g., **development, production, testing**) may have different configurations.

### **📌 Create Environment-Specific Files**

```
.env.development
.env.production
.env.testing
```

---

### **📌 Load Different Environments in `app.module.ts`**

```ts
ConfigModule.forRoot({
  envFilePath: `.env.${process.env.NODE_ENV || "development"}`,
});
```

✅ Now, NestJS loads `.env.production` if `NODE_ENV=production`.

---

### **📌 Define Configuration Schemas (`config.ts`)**

```ts
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
```

---

### **📌 Use Configuration in `app.module.ts`**

```ts
ConfigModule.forRoot({
  load: [config],
});
```

✅ Now, configurations are structured and **strongly typed**.

---

# **🔥 Summary**

✔ **Use `@nestjs/config` for managing configurations**  
✔ **Load environment variables from `.env` files**  
✔ **Support multiple environments dynamically**

---

# 12. **Testing in NestJS**

- Unit Testing with Jest
- Integration & End-to-End Testing
- Mocking Dependencies

---

NestJS supports **Jest** for unit, integration, and end-to-end (E2E) testing. Proper testing ensures:  
✅ Reliable code  
✅ Fewer regressions  
✅ Faster debugging

---

## **1️⃣ Unit Testing with Jest**

### **📌 Install Jest (If Not Installed)**

NestJS comes with Jest pre-configured, but if needed:

```sh
npm install --save-dev jest @nestjs/testing ts-jest @types/jest
```

---

### **📌 Example: Unit Test for a Service**

Let's test a **UserService** that fetches users.

#### **📌 `user.service.ts`**

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  getUsers(): string[] {
    return ["Alice", "Bob", "Charlie"];
  }
}
```

#### **📌 `user.service.spec.ts` (Unit Test)**

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should return users list", () => {
    expect(service.getUsers()).toEqual(["Alice", "Bob", "Charlie"]);
  });
});
```

✅ **Run the test:**

```sh
npm test
```

---

## **2️⃣ Integration & End-to-End (E2E) Testing**

### **📌 E2E Test: Testing API Endpoints**

E2E tests check if all parts (controller, service, database) work together.

#### **📌 `app.e2e-spec.ts` (E2E Test)**

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "./../src/app.module";

describe("AppController (E2E)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET) should return "Hello World"', () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World");
  });

  afterAll(async () => {
    await app.close();
  });
});
```

✅ **Run E2E tests:**

```sh
npm run test:e2e
```

---

## **3️⃣ Mocking Dependencies for Testing**

### **📌 Mocking Services in Tests**

If a service depends on a database or an external API, we mock it.

#### **📌 `user.service.ts` (Real Service)**

```ts
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  findUserById(id: number): string {
    return `User ${id}`;
  }
}
```

#### **📌 `user.service.spec.ts` (Mocking Service)**

```ts
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: { findUserById: jest.fn().mockReturnValue("Mocked User") },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should return a mocked user", () => {
    expect(service.findUserById(1)).toBe("Mocked User");
  });
});
```

✅ Now, tests run **without needing a real database**.

---

# **🔥 Summary**

✔ **Unit testing with Jest** for individual services  
✔ **Integration & E2E testing** for full application flow  
✔ **Mocking dependencies** to avoid external dependencies

---

# 13. **Task Scheduling & Background Jobs**

- Using `@nestjs/schedule` for Cron Jobs
- Worker Queues with Bull (Redis-based)

---

NestJS provides built-in scheduling capabilities with `@nestjs/schedule` and supports **worker queues** using **Bull (Redis-based)** for handling background tasks efficiently.

✅ **Scheduling tasks with `@nestjs/schedule`**  
✅ **Running Cron jobs at specific intervals**  
✅ **Handling worker queues with Bull (Redis-based)**

---

## **1️⃣ Using `@nestjs/schedule` for Cron Jobs**

### **📌 Install Required Dependencies**

```sh
npm install @nestjs/schedule
```

### **📌 Import `ScheduleModule` in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { TaskService } from "./task.service";

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TaskService],
})
export class AppModule {}
```

---

### **📌 Create a Scheduled Task (`task.service.ts`)**

NestJS provides three types of scheduling:

- **`@Cron`** – Runs at a specific time
- **`@Interval`** – Runs at fixed intervals
- **`@Timeout`** – Runs once after a delay

```ts
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression, Interval, Timeout } from "@nestjs/schedule";

@Injectable()
export class TaskService {
  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    console.log("Cron Job executed every 10 seconds");
  }

  @Interval(5000)
  handleInterval() {
    console.log("Runs every 5 seconds");
  }

  @Timeout(10000)
  handleTimeout() {
    console.log("Runs once after 10 seconds");
  }
}
```

✅ **Now, your tasks will execute automatically** at scheduled times.

---

## **2️⃣ Worker Queues with Bull (Redis-based)**

For **heavy tasks** like sending emails, image processing, or notifications, use **Bull**, which stores jobs in **Redis** for background processing.

### **📌 Install Bull and Redis Dependencies**

```sh
npm install @nestjs/bull bull ioredis
```

---

### **📌 Import `BullModule` in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { BullModule } from "@nestjs/bull";
import { QueueService } from "./queue.service";

@Module({
  imports: [
    BullModule.forRoot({
      redis: { host: "localhost", port: 6379 },
    }),
    BullModule.registerQueue({ name: "emailQueue" }),
  ],
  providers: [QueueService],
})
export class AppModule {}
```

✅ **Ensure Redis is running** before using Bull:

```sh
docker run -d -p 6379:6379 redis
```

---

### **📌 Add Jobs to the Queue (`queue.service.ts`)**

```ts
import { Injectable } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";

@Injectable()
export class QueueService {
  constructor(@InjectQueue("emailQueue") private emailQueue: Queue) {}

  async sendEmail(data: any) {
    await this.emailQueue.add(data, { delay: 5000 }); // Delay 5 seconds
    console.log("Email job added to queue");
  }
}
```

---

### **📌 Process Jobs (`email.processor.ts`)**

```ts
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor("emailQueue")
export class EmailProcessor {
  @Process()
  async handleEmailJob(job: Job) {
    console.log(`Processing email job: ${JSON.stringify(job.data)}`);
    // Simulate sending email
  }
}
```

✅ **Now, jobs run in the background without blocking the main thread.**

---

## **🔥 Summary**

✔ **Scheduled tasks with `@nestjs/schedule`** (`@Cron`, `@Interval`, `@Timeout`)  
✔ **Worker queues with Bull** (Redis-based job processing)

---

# 14. **Logging, Monitoring & Error Handling**

- Logging with `@nestjs/common` Logger
- Exception Filters & Global Error Handling
- Application Performance Monitoring (APM)

---

Effective **logging, error handling, and performance monitoring** are essential for maintaining a scalable NestJS application.

✅ **Built-in logging with `@nestjs/common` Logger**  
✅ **Custom exception filters & global error handling**  
✅ **Application Performance Monitoring (APM) using tools like Prometheus & OpenTelemetry**

---

## **1️⃣ Logging with `@nestjs/common` Logger**

NestJS provides a built-in `Logger` class to log messages at different levels.

### **📌 Basic Usage of Logger**

```ts
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  getHello(): string {
    this.logger.log("Hello World endpoint called"); // INFO
    this.logger.warn("This is a warning message"); // WARNING
    this.logger.error("An error occurred!"); // ERROR
    return "Hello World!";
  }
}
```

---

### **📌 Global Logging with `useLogger()` in `main.ts`**

```ts
import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global logger
  app.useLogger(new Logger());

  await app.listen(3000);
  Logger.log("Application is running on http://localhost:3000");
}
bootstrap();
```

---

## **2️⃣ Exception Filters & Global Error Handling**

Instead of manually handling errors in controllers, use **Exception Filters** to catch and process exceptions.

### **📌 Custom Exception Filter (`all-exceptions.filter.ts`)**

```ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from "@nestjs/common";
import { Response } from "express";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status =
      exception instanceof HttpException ? exception.getStatus() : 500;

    this.logger.error(`Exception: ${exception}`);

    response.status(status).json({
      statusCode: status,
      message:
        exception instanceof HttpException
          ? exception.getResponse()
          : "Internal Server Error",
    });
  }
}
```

---

### **📌 Apply the Exception Filter Globally (`main.ts`)**

```ts
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./all-exceptions.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Apply Global Exception Filter
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
}
bootstrap();
```

✅ **Now, all errors will be handled uniformly, improving debugging and logging.**

---

## **3️⃣ Application Performance Monitoring (APM) 🔥**

### **📌 Using Prometheus with NestJS for Metrics**

Prometheus helps monitor API performance, request counts, and system health.

#### **📌 Install Prometheus Module**

```sh
npm install @willsoto/nestjs-prometheus prom-client
```

#### **📌 Register Prometheus in `app.module.ts`**

```ts
import { Module } from "@nestjs/common";
import { PrometheusModule } from "@willsoto/nestjs-prometheus";

@Module({
  imports: [PrometheusModule.register()],
})
export class AppModule {}
```

✅ **Now, visit `http://localhost:3000/metrics` to see Prometheus data.**

---

### **📌 OpenTelemetry for Distributed Tracing**

**OpenTelemetry** helps trace API requests, latency, and errors.

#### **📌 Install OpenTelemetry**

```sh
npm install @nestjs/otel @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node
```

#### **📌 Configure OpenTelemetry in `otel.ts`**

```ts
import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";

const sdk = new NodeSDK({
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
```

✅ **Now, your NestJS app supports distributed tracing!**

---

# **🔥 Summary**

✔ **Logging with `@nestjs/common` Logger**  
✔ **Global Exception Filters for error handling**  
✔ **Application Performance Monitoring (APM) using Prometheus & OpenTelemetry**

---

# 15. **Deployment & Best Practices**

- Dockerizing a NestJS App
- CI/CD Pipelines for NestJS
- Scaling with Kubernetes & Load Balancers

---

To make a **NestJS app production-ready**, we need:  
✅ **Dockerization** – Run the app in containers  
✅ **CI/CD Pipelines** – Automate testing and deployment  
✅ **Scaling with Kubernetes & Load Balancers** – Handle high traffic

---

## **1️⃣ Dockerizing a NestJS App 🐳**

### **📌 Step 1: Create a `Dockerfile`**

This file tells Docker how to build the NestJS app.

```dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "dist/main.js"]
```

---

### **📌 Step 2: Create a `.dockerignore` File**

```plaintext
node_modules
dist
.env
```

---

### **📌 Step 3: Build and Run the Docker Container**

```sh
# Build the image
docker build -t my-nest-app .

# Run the container
docker run -p 3000:3000 my-nest-app
```

✅ **Now, your NestJS app runs in Docker!**

---

## **2️⃣ CI/CD Pipelines for NestJS ⚙️**

We can automate deployment using **GitHub Actions** or **Jenkins**.

### **📌 GitHub Actions CI/CD Pipeline**

Create `.github/workflows/deploy.yml`

```yaml
name: CI/CD for NestJS

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Build Application
        run: npm run build

      - name: Deploy to Server (Using SSH)
        uses: appleboy/ssh-action@v0.1.6
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          script: |
            cd /path/to/nestjs/app
            git pull origin main
            npm install
            npm run build
            pm2 restart nest-app
```

✅ **Now, every push to `main` triggers automatic deployment!**

---

## **3️⃣ Scaling with Kubernetes & Load Balancers 🚀**

To handle high traffic, use **Kubernetes (K8s)** for container orchestration.

### **📌 Step 1: Create a Kubernetes Deployment (`deployment.yaml`)**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nestjs-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nestjs-app
  template:
    metadata:
      labels:
        app: nestjs-app
    spec:
      containers:
        - name: nestjs-app
          image: my-nest-app:latest
          ports:
            - containerPort: 3000
```

---

### **📌 Step 2: Expose the Service (`service.yaml`)**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nestjs-service
spec:
  type: LoadBalancer
  selector:
    app: nestjs-app
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
```

---

### **📌 Step 3: Deploy to Kubernetes**

```sh
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

✅ **Now, your NestJS app is scaled across multiple replicas!**

---

# **🔥 Summary**

✔ **Dockerize a NestJS app for easy deployment**  
✔ **CI/CD pipeline automates testing & deployment**  
✔ **Scale with Kubernetes & Load Balancers**

---
