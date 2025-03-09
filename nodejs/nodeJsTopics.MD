Node.js is a vast topic, covering backend development, server-side scripting, and performance optimization. Here’s a comprehensive list of all important Node.js topics:

---

# **1. Introduction to Node.js**

- What is Node.js?
- Features of Node.js
- How Node.js works (Single-threaded, Event Loop, Non-blocking I/O)
- Installing Node.js and npm
- Running your first Node.js script

### **What is Node.js?**

Node.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript outside the browser. It is built on Chrome's V8 JavaScript engine and is primarily used for building scalable network applications, web servers, and APIs.

---

### **Features of Node.js**

1. **Asynchronous & Non-blocking I/O** – Handles multiple requests without waiting for previous ones to complete.
2. **Single-threaded Event Loop** – Uses a single-threaded model with event-driven architecture to manage multiple connections efficiently.
3. **Fast Execution** – Runs on the V8 engine, making it highly performant.
4. **Scalability** – Suitable for handling a large number of concurrent connections.
5. **Cross-platform** – Works on Windows, macOS, and Linux.
6. **NPM (Node Package Manager)** – Provides a vast ecosystem of open-source libraries.
7. **Built-in Modules** – Includes modules like `http`, `fs`, `path`, etc., for web and file handling.

---

### **How Node.js Works?**

#### **1. Single-threaded Architecture**

Unlike traditional multi-threaded servers, Node.js operates on a single thread using an event loop.

#### **2. Event Loop**

- The event loop is at the core of Node.js, handling asynchronous tasks like I/O operations, timers, and API calls.
- Instead of creating multiple threads, Node.js registers callback functions and executes them when responses arrive.

#### **3. Non-blocking I/O**

- Traditional servers handle each request in a separate thread (blocking I/O).
- Node.js, however, uses **non-blocking I/O**, meaning it doesn’t wait for a task to complete before moving to the next one.
- Example: Instead of waiting for a file read operation to finish, Node.js continues executing other tasks and processes the result when it’s ready.

**Example of Blocking vs Non-blocking I/O:**

```js
// Blocking I/O (Synchronous)
const fs = require("fs");
const data = fs.readFileSync("file.txt", "utf8");
console.log(data); // Reads file first, then prints

// Non-blocking I/O (Asynchronous)
fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data); // Doesn't block execution
});
console.log("This runs before file reading completes.");
```

---

### **Installing Node.js and npm**

#### **1. Download & Install**

- Visit [Node.js Official Website](https://nodejs.org/)
- Download the LTS (Long Term Support) version for stability
- Install it (Node.js comes with npm - Node Package Manager)

#### **2. Verify Installation**

Open a terminal and run:

```sh
node -v   # Check Node.js version
npm -v    # Check npm version
```

---

### **Running Your First Node.js Script**

#### **1. Using Node.js in a File**

Create a new file `app.js` and write:

```js
console.log("Hello, Node.js!");
```

Run the script in the terminal:

```sh
node app.js
```

Output:

```
Hello, Node.js!
```

#### **2. Running Node.js in REPL (Interactive Mode)**

In the terminal, type:

```sh
node
```

You can now execute JavaScript directly:

```js
> console.log("Hello, World!");
Hello, World!
```

To exit, type `.exit` or press `Ctrl + D`.

---

# **2. Node.js Fundamentals**

- Node.js Global Objects (`__dirname`, `__filename`, `process`, `global`)
- Node.js Modules (`CommonJS`, `ES Modules`)
- Core Modules (`fs`, `path`, `http`, `os`, `crypto`, etc.)
- Importing & Exporting Modules
- Node.js REPL (Read-Eval-Print Loop)

## **Node.js Global Objects**

Global objects are available throughout a Node.js application without needing to import them explicitly.

### **1. `__dirname` (Directory Name)**

Returns the absolute path of the directory where the current script is located.

```js
console.log(__dirname);
```

Example Output:

```
/Users/yourname/project
```

---

### **2. `__filename` (File Name)**

Returns the absolute path of the current script file.

```js
console.log(__filename);
```

Example Output:

```
/Users/yourname/project/index.js
```

---

### **3. `process` (Process Object)**

Provides information and control over the Node.js process.

- Get environment variables:
  ```js
  console.log(process.env);
  ```
- Get process ID:
  ```js
  console.log(process.pid);
  ```
- Get Node.js version:
  ```js
  console.log(process.version);
  ```
- Exit the process:
  ```js
  process.exit(0);
  ```

---

### **4. `global` (Global Scope Object)**

Similar to `window` in the browser, it allows defining global variables.

```js
global.myVar = "Hello";
console.log(myVar); // Outputs: Hello
```

> ⚠️ Avoid using `global` for defining variables, as it may cause unexpected issues.

---

## **Node.js Modules**

Node.js has a modular architecture, allowing code to be organized into reusable pieces. There are two module systems:

### **1. CommonJS (Default in Node.js)**

- Uses `require()` to import modules
- Uses `module.exports` to export

#### **Importing CommonJS Module**

```js
const fs = require("fs"); // Import built-in fs module
```

#### **Exporting CommonJS Module**

**math.js**

```js
const add = (a, b) => a + b;
module.exports = add;
```

**app.js**

```js
const add = require("./math");
console.log(add(5, 3)); // 8
```

---

### **2. ES Modules (ECMAScript Modules - ESM)**

- Uses `import` and `export`
- Must enable `"type": "module"` in `package.json`

#### **Exporting ES Module**

**math.js**

```js
export const add = (a, b) => a + b;
```

#### **Importing ES Module**

**app.js**

```js
import { add } from "./math.js";
console.log(add(5, 3)); // 8
```

---

## **Core Modules**

Node.js provides built-in modules that can be used without installation.

### **1. `fs` (File System)**

```js
const fs = require("fs");

// Read a file
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### **2. `path` (File & Directory Paths)**

```js
const path = require("path");

console.log(path.join(__dirname, "test.txt")); // Concatenates paths correctly
console.log(path.extname("file.txt")); // .txt
```

### **3. `http` (Creating a Server)**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

### **4. `os` (Operating System Information)**

```js
const os = require("os");

console.log(os.platform()); // e.g., 'win32', 'linux'
console.log(os.freemem()); // Free memory in bytes
```

### **5. `crypto` (Hashing & Encryption)**

```js
const crypto = require("crypto");

const hash = crypto.createHash("sha256").update("password").digest("hex");
console.log(hash);
```

---

## **Importing & Exporting Modules**

### **Export Multiple Functions (CommonJS)**

**math.js**

```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
module.exports = { add, subtract };
```

**app.js**

```js
const math = require("./math");
console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2
```

---

## **Node.js REPL (Read-Eval-Print Loop)**

REPL allows interactive execution of JavaScript directly in the terminal.

### **Starting REPL**

```sh
node
```

### **Using REPL**

```sh
> 5 + 3
8
> let x = 10;
> x * 2
20
```

### **REPL Commands**

- **`.exit`** or **Ctrl + D** – Exit REPL
- **`.help`** – Show available commands
- **`.load filename.js`** – Load a file into REPL
- **`.save filename.js`** – Save current REPL session

---

This covers the basics of Node.js modules, global objects, and REPL. Let me know if you need more details! 🚀

---

# **3. File System (fs) Module**

- Reading & Writing Files (`fs.readFile`, `fs.writeFile`, `fs.appendFile`)
- Working with Directories (`fs.mkdir`, `fs.readdir`)
- File Streams (`fs.createReadStream`, `fs.createWriteStream`)
- File Permissions & Deleting Files (`fs.unlink`, `fs.rmdir`)

# **File System Module (`fs`) in Node.js**

The `fs` module in Node.js allows you to interact with the file system, including reading, writing, appending, and managing files and directories.

---

## **1. Reading & Writing Files**

### **🔹 Reading a File (`fs.readFile`)**

Reads a file asynchronously and returns the content.

```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data); // Prints file content
});
```

> **Note:** `"utf8"` ensures the content is read as text. Otherwise, it returns a buffer.

---

### **🔹 Writing to a File (`fs.writeFile`)**

Creates a new file (if it doesn’t exist) or replaces the content of an existing file.

```js
fs.writeFile("example.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully!");
});
```

> **Warning:** This **overwrites** the file content if it already exists.

---

### **🔹 Appending to a File (`fs.appendFile`)**

Adds new content to an existing file without overwriting it.

```js
fs.appendFile("example.txt", "\nAppended Text!", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Text appended successfully!");
});
```

> This is useful for logging or updating files dynamically.

---

## **2. Working with Directories**

### **🔹 Creating a Directory (`fs.mkdir`)**

Creates a new directory.

```js
fs.mkdir("newDir", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created!");
});
```

- To create **nested directories**, use `{ recursive: true }`:
  ```js
  fs.mkdir("parentDir/childDir", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Nested directories created!");
  });
  ```

---

### **🔹 Reading a Directory (`fs.readdir`)**

Lists all files and directories inside a given directory.

```js
fs.readdir(".", (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Files in directory:", files);
});
```

> `"."` refers to the current directory. Change it to a specific folder path as needed.

---

## **3. File Streams (Handling Large Files Efficiently)**

File streams are used for handling large files without loading them entirely into memory.

### **🔹 Reading a File Using Streams (`fs.createReadStream`)**

Useful for reading large files efficiently in chunks.

```js
const readStream = fs.createReadStream("largeFile.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("Finished reading file.");
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err);
});
```

---

### **🔹 Writing a File Using Streams (`fs.createWriteStream`)**

Writes data to a file efficiently in chunks.

```js
const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello, World!\n");
writeStream.write("This is another line.\n");
writeStream.end(); // Closes the stream

writeStream.on("finish", () => {
  console.log("File writing completed.");
});
```

---

### **🔹 Piping Streams (Efficient File Copying)**

Instead of manually reading and writing chunks, you can use **piping** to transfer data efficiently.

```js
const readStream = fs.createReadStream("source.txt");
const writeStream = fs.createWriteStream("destination.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied successfully!");
});
```

> This is much more efficient than reading and writing manually.

---

## **4. File Permissions & Deleting Files**

### **🔹 Deleting a File (`fs.unlink`)**

Deletes a file permanently.

```js
fs.unlink("example.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully!");
});
```

> **Warning:** This action **cannot be undone**, so use it carefully!

---

### **🔹 Removing a Directory (`fs.rmdir`)**

Deletes an **empty** directory.

```js
fs.rmdir("newDir", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory removed!");
});
```

- To remove **non-empty** directories, use `fs.rm()` with `{ recursive: true }`:
  ```js
  fs.rm("newDir", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Directory removed with all contents!");
  });
  ```

---

### **🔹 Changing File Permissions (`fs.chmod`)**

Used to change a file’s read/write/execute permissions.

```js
fs.chmod("example.txt", 0o777, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Permissions changed!");
});
```

- **`0o777`** = Full access (read, write, execute for all users).
- **`0o644`** = Read & write for the owner, read-only for others.

---

## **Summary**

| **Operation**           | **Function**           | **Example**                                        |
| ----------------------- | ---------------------- | -------------------------------------------------- |
| Read a file             | `fs.readFile`          | `fs.readFile('file.txt', 'utf8', callback)`        |
| Write a file            | `fs.writeFile`         | `fs.writeFile('file.txt', 'Hello', callback)`      |
| Append to a file        | `fs.appendFile`        | `fs.appendFile('file.txt', 'More data', callback)` |
| Create a directory      | `fs.mkdir`             | `fs.mkdir('folder', callback)`                     |
| Read a directory        | `fs.readdir`           | `fs.readdir('folder', callback)`                   |
| Read large files        | `fs.createReadStream`  | `fs.createReadStream('file.txt')`                  |
| Write large files       | `fs.createWriteStream` | `fs.createWriteStream('file.txt')`                 |
| Delete a file           | `fs.unlink`            | `fs.unlink('file.txt', callback)`                  |
| Remove a directory      | `fs.rmdir`             | `fs.rmdir('folder', callback)`                     |
| Change file permissions | `fs.chmod`             | `fs.chmod('file.txt', 0o777, callback)`            |

---

### **Final Thoughts**

The `fs` module is one of the most powerful tools in Node.js for working with files and directories. By using **asynchronous** methods, you ensure that your application remains efficient and non-blocking.

---

# **4. Asynchronous Programming in Node.js**

- Callbacks
- Promises & `Promise.all()`
- Async/Await
- Error Handling in Async Code
- Event Loop & Execution Flow

JavaScript (and Node.js) is **asynchronous** by nature, meaning operations like file handling, database calls, and API requests don’t block the execution of other code. Instead, Node.js uses **callbacks, promises, and async/await** to handle asynchronous tasks.

---

## **1. Callbacks**

A **callback function** is a function passed as an argument to another function and executed after an asynchronous operation is complete.

### **Example: Callback in `fs.readFile`**

```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
console.log("Reading file..."); // This prints first
```

### **Issues with Callbacks ("Callback Hell")**

When multiple callbacks are nested, it leads to **callback hell**, making code hard to read and maintain.

```js
fs.readFile("file1.txt", "utf8", (err, data1) => {
  if (err) return console.error(err);

  fs.readFile("file2.txt", "utf8", (err, data2) => {
    if (err) return console.error(err);

    fs.readFile("file3.txt", "utf8", (err, data3) => {
      if (err) return console.error(err);

      console.log(data1, data2, data3);
    });
  });
});
```

**Solution:** Use **Promises** or **Async/Await**.

---

## **2. Promises**

A **Promise** represents a value that will be available in the future. It has three states:

- **Pending** – Initial state
- **Fulfilled** – Operation completed successfully
- **Rejected** – Operation failed

### **Creating a Promise**

```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});

// Handling the promise
myPromise
  .then((result) => console.log(result)) // Executes on success
  .catch((error) => console.error(error)); // Executes on failure
```

---

### **Converting Callbacks to Promises**

Using `fs.promises` for cleaner, promise-based file operations:

```js
const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((data) => console.log("File content:", data))
  .catch((err) => console.error("Error:", err));
```

---

### **`Promise.all()` – Handling Multiple Promises**

`Promise.all()` runs multiple promises in **parallel** and resolves when all are completed.

```js
const p1 = fs.readFile("file1.txt", "utf8");
const p2 = fs.readFile("file2.txt", "utf8");
const p3 = fs.readFile("file3.txt", "utf8");

Promise.all([p1, p2, p3])
  .then(([data1, data2, data3]) => {
    console.log(data1, data2, data3);
  })
  .catch((err) => console.error("Error:", err));
```

> **Note:** If **any one** promise fails, `Promise.all()` **rejects all**.

---

## **3. Async/Await**

`async` and `await` provide a cleaner way to handle asynchronous operations without using `.then()` and `.catch()`.

### **Example: Using `async/await` for File Reading**

```js
const readFileAsync = async () => {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error:", err);
  }
};

readFileAsync();
```

> **Why Async/Await?**  
> ✅ **Easier to read**  
> ✅ **Avoids callback nesting**  
> ✅ **Handles errors using `try/catch`**

---

### **Using `Promise.all()` with Async/Await**

```js
const readFiles = async () => {
  try {
    const [data1, data2, data3] = await Promise.all([
      fs.readFile("file1.txt", "utf8"),
      fs.readFile("file2.txt", "utf8"),
      fs.readFile("file3.txt", "utf8"),
    ]);
    console.log(data1, data2, data3);
  } catch (err) {
    console.error("Error:", err);
  }
};

readFiles();
```

---

## **4. Error Handling in Async Code**

### **Handling Errors in Promises (`.catch()`)**

```js
fs.readFile("nonexistent.txt", "utf8")
  .then((data) => console.log(data))
  .catch((err) => console.error("File read error:", err));
```

### **Handling Errors in Async/Await (`try/catch`)**

```js
const readFileAsync = async () => {
  try {
    const data = await fs.readFile("nonexistent.txt", "utf8");
    console.log(data);
  } catch (err) {
    console.error("File read error:", err);
  }
};

readFileAsync();
```

---

## **5. Event Loop & Execution Flow**

The **event loop** is what makes Node.js **non-blocking** and **asynchronous**. It ensures that expensive operations (like file reads or database queries) do not block the execution of other code.

### **Event Loop Phases**

1. **Timers Phase** – Executes `setTimeout()` and `setInterval()` callbacks
2. **Pending Callbacks Phase** – Executes I/O callbacks
3. **Idle, Prepare Phase** – Internal use
4. **Poll Phase** – Retrieves new I/O events, executes them
5. **Check Phase** – Executes `setImmediate()` callbacks
6. **Close Callbacks Phase** – Executes close event callbacks (e.g., `socket.on('close', fn)`)

---

### **Example: Understanding the Event Loop Execution Order**

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

Promise.resolve().then(() => console.log("Promise"));

process.nextTick(() => console.log("Next Tick"));

console.log("End");
```

### **Expected Output Order**

```
Start
End
Next Tick
Promise
Immediate
Timeout
```

**Why?**

- `console.log('Start')` and `console.log('End')` execute **synchronously**.
- `process.nextTick()` executes **before the next event loop cycle**.
- `Promise.resolve().then()` executes in the **microtask queue**, before timers.
- `setImmediate()` runs **before timers** if in the same cycle.
- `setTimeout(0)` runs in the **next event loop cycle**.

---

## **Final Summary**

| Concept            | Description                                                | Example                                      |
| ------------------ | ---------------------------------------------------------- | -------------------------------------------- |
| **Callback**       | Function passed to another function                        | `fs.readFile('file.txt', cb)`                |
| **Promise**        | Handles async operations with `.then()` & `.catch()`       | `fs.promises.readFile('file.txt')`           |
| **Promise.all()**  | Runs multiple promises in parallel                         | `Promise.all([p1, p2, p3])`                  |
| **Async/Await**    | Cleaner way to handle async code                           | `await fs.readFile('file.txt')`              |
| **Error Handling** | Using `.catch()` in Promises or `try/catch` in Async/Await | `try { await fs.readFile() } catch(e) {}`    |
| **Event Loop**     | Controls async execution order                             | `setTimeout, setImmediate, process.nextTick` |

---

### **Conclusion**

- **Callbacks** work but can lead to callback hell.
- **Promises** improve code readability but still use `.then()`.
- **Async/Await** is the cleanest way to write asynchronous code.
- **Event Loop** determines execution order of async tasks.

---

# **5. Events and Event Emitter**

- Understanding the `events` module
- Creating and handling events
- Using `EventEmitter`

Node.js has a built-in **events** module that enables handling and emitting custom events. This is useful for implementing event-driven architectures, similar to how JavaScript handles events in the browser.

---

## **1. Understanding the `events` Module**

The `events` module provides the `EventEmitter` class, which allows us to:

- **Create an event** (`.emit()`)
- **Listen to an event** (`.on()` or `.addListener()`)
- **Remove event listeners** (`.off()` or `.removeListener()`)

---

## **2. Creating and Handling Events**

### **Basic Example**

```js
const EventEmitter = require("events");

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define an event listener for 'greet' event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
eventEmitter.emit("greet", "Alice"); // Output: Hello, Alice!
```

---

### **Handling Events with Multiple Listeners**

An event can have multiple listeners that execute when the event is emitted.

```js
eventEmitter.on("greet", (name) => {
  console.log(`${name} has been greeted.`);
});

eventEmitter.emit("greet", "Bob");

/* Output:
Hello, Bob!
Bob has been greeted.
*/
```

---

## **3. Using `EventEmitter` in a Custom Class**

You can extend `EventEmitter` in a class to create event-driven objects.

```js
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Event listener
myEmitter.on("dataReceived", (data) => {
  console.log(`Received: ${data}`);
});

// Emitting an event
myEmitter.emit("dataReceived", "Sample Data");
```

---

## **4. Removing Event Listeners**

### **Removing a Specific Listener (`off()` / `removeListener()`)**

```js
const listener = (message) => {
  console.log(`Message: ${message}`);
};

eventEmitter.on("log", listener);

// Removing the listener
eventEmitter.off("log", listener);
eventEmitter.emit("log", "This will not be logged.");
```

---

### **Removing All Listeners (`removeAllListeners()`)**

```js
eventEmitter.on("exit", () => console.log("Process is exiting..."));

eventEmitter.removeAllListeners("exit");
eventEmitter.emit("exit"); // No output
```

---

## **5. Using `once()` for One-Time Events**

The `.once()` method ensures that an event listener runs only once.

```js
eventEmitter.once("init", () => {
  console.log("Initialization event triggered.");
});

eventEmitter.emit("init"); // Output: Initialization event triggered.
eventEmitter.emit("init"); // No output
```

---

## **6. Built-in Node.js Events**

Many core Node.js modules use `EventEmitter`, including:

- `fs` (File System)
- `http` (HTTP requests & responses)
- `stream` (Readable & Writable streams)

### **Example: Using `EventEmitter` with HTTP Server**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, World!");
});

// Listening for a built-in event
server.on("request", (req, res) => {
  console.log(`Request received for: ${req.url}`);
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

---

## **7. EventEmitter Best Practices**

- **Avoid memory leaks**: If an event listener is not removed, it can cause memory leaks. Use `.removeListener()` or `.removeAllListeners()` when needed.
- **Use `once()` where applicable**: If an event should only fire once, use `.once()` instead of `.on()`.
- **Error handling**: Handle errors within event listeners to prevent crashes.

---

## **8. Summary Table**

| Method                                      | Description                                  |
| ------------------------------------------- | -------------------------------------------- |
| `on(event, listener)`                       | Adds an event listener                       |
| `once(event, listener)`                     | Adds a one-time listener                     |
| `emit(event, ...args)`                      | Triggers an event                            |
| `off(event, listener)` / `removeListener()` | Removes a specific listener                  |
| `removeAllListeners(event)`                 | Removes all listeners for an event           |
| `listenerCount(event)`                      | Returns the number of listeners for an event |

---

## **9. Conclusion**

The `events` module provides a powerful way to handle asynchronous operations in a structured, event-driven manner. It is widely used in core modules like `http` and `fs`, making it an essential concept in Node.js development.

---

# **6. HTTP Module & Web Servers**

- Creating an HTTP Server (`http.createServer()`)
- Handling Requests and Responses
- Working with Headers and Status Codes
- Routing in Node.js
- Serving Static Files

Node.js provides the built-in `http` module to create and manage HTTP servers. This allows us to handle requests, send responses, set headers, define routes, and serve static files.

---

## **1. Creating an HTTP Server (`http.createServer()`)**

The `http.createServer()` method creates a server that listens for incoming HTTP requests.

### **Basic HTTP Server Example**

```js
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
```

🔹 **How It Works:**

- The server listens on **port 3000**.
- When a request is received, it responds with `"Hello, World!"`.
- `res.writeHead(200, { 'Content-Type': 'text/plain' })` sets the response **status code** and **headers**.

---

## **2. Handling Requests and Responses**

The `req` (request) and `res` (response) objects provide access to incoming data and outgoing responses.

### **Reading the Request URL and Method**

```js
const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Check the console for request details!");
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

🔹 This logs the request **method** (GET, POST, etc.) and **URL**.

---

## **3. Working with Headers and Status Codes**

Headers and status codes provide important metadata about responses.

### **Setting Response Headers and Status Codes**

```js
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Custom-Header": "MyNodeServer",
  });

  res.end(JSON.stringify({ message: "Hello, JSON!" }));
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

🔹 **Key Points:**

- `Content-Type: application/json` tells the client to expect JSON data.
- `Custom-Header: MyNodeServer` sets a custom response header.

---

## **4. Routing in Node.js**

Routing determines how the server responds to different URLs.

### **Example: Basic Routing**

```js
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About us page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

🔹 **How It Works:**

- The server checks `req.url` and responds accordingly.
- **404 Not Found** is returned for undefined routes.

---

## **5. Serving Static Files**

For serving static files (e.g., HTML, CSS, images), we use the `fs` (File System) module.

### **Example: Serving an HTML File**

```js
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

🔹 **Key Points:**

- `fs.readFile('index.html', callback)` reads the file asynchronously.
- If successful, it sends the file content. Otherwise, it returns a **500 Internal Server Error**.

---

### **📌 Summary Table**

| Concept                              | Description                             |
| ------------------------------------ | --------------------------------------- |
| `http.createServer()`                | Creates an HTTP server                  |
| `res.writeHead(statusCode, headers)` | Sets response headers and status code   |
| `res.end(data)`                      | Ends the response and sends data        |
| `req.method`                         | Retrieves HTTP method (GET, POST, etc.) |
| `req.url`                            | Retrieves requested URL                 |
| `fs.readFile()`                      | Reads files for serving static content  |

---

### **🔹 Conclusion**

- The `http` module enables server creation in Node.js.
- Headers, status codes, and routing allow precise request handling.
- The `fs` module helps serve static files.

---

# **7. Express.js Framework**

- Introduction to Express
- Setting up an Express Server
- Middleware (Built-in, Third-party, Custom)
- Routing in Express
- Handling Forms & JSON Data (`express.json()`, `express.urlencoded()`)
- Error Handling in Express
- CORS in Express

## **1. What is Express.js?**

**Express.js** is a minimal and flexible **Node.js web framework** that simplifies building web applications and APIs. It provides powerful features like **routing, middleware, request handling, and error management**.

### **Why Use Express?**

✅ Simplifies building web servers  
✅ Supports middleware for processing requests  
✅ Provides a flexible routing system  
✅ Handles static files, form data, and JSON  
✅ Works seamlessly with databases (MongoDB, MySQL, PostgreSQL)

---

## **2. Setting Up an Express Server**

### **Installation**

First, install **Express** using `npm`:

```sh
npm init -y  # Initialize a Node.js project
npm install express  # Install Express.js
```

### **Basic Express Server**

Create `server.js`:

```js
const express = require("express");
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

✅ **Run the server** with:

```sh
node server.js
```

✅ Open `http://localhost:3000` in the browser.

---

## **3. Middleware in Express**

Middleware functions **modify the request and response objects** before passing control to the next handler.

### **Types of Middleware**

1. **Built-in Middleware**
2. **Third-party Middleware**
3. **Custom Middleware**

---

### **Built-in Middleware**

Express provides built-in middleware like `express.json()` and `express.urlencoded()`.

```js
app.use(express.json()); // Parses JSON payloads
app.use(express.urlencoded({ extended: true })); // Parses form data
```

---

### **Third-party Middleware**

Third-party middleware extends Express functionality.

#### **Example: `morgan` (Logging Middleware)**

Install it first:

```sh
npm install morgan
```

Use it in your app:

```js
const morgan = require("morgan");
app.use(morgan("dev")); // Logs incoming requests
```

---

### **Custom Middleware**

```js
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next(); // Pass control to the next middleware
});
```

---

## **4. Routing in Express**

Routes define how the server **responds** to different URLs.

### **Basic Routes**

```js
app.get("/home", (req, res) => {
  res.send("Welcome to Home Page!");
});

app.post("/submit", (req, res) => {
  res.send("Data received via POST request.");
});
```

### **Route Parameters**

```js
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

### **Query Parameters**

```js
app.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Search results for: ${query}`);
});
```

🔹 **Example URL:** `http://localhost:3000/search?q=Node.js`

---

## **5. Handling Forms & JSON Data**

Express provides `express.json()` and `express.urlencoded()` for handling **JSON and form data**.

### **Handling JSON Data**

```js
app.use(express.json());

app.post("/api/data", (req, res) => {
  res.json({ message: "Data received", data: req.body });
});
```

🔹 **Client sends JSON:**

```json
{ "name": "Alice", "age": 25 }
```

---

### **Handling Form Data**

```js
app.use(express.urlencoded({ extended: true }));

app.post("/submit-form", (req, res) => {
  res.send(`Received: ${req.body.name}`);
});
```

🔹 **HTML Form Example:**

```html
<form action="/submit-form" method="POST">
  <input type="text" name="name" />
  <button type="submit">Submit</button>
</form>
```

---

## **6. Error Handling in Express**

Express provides a middleware pattern for handling errors.

### **Custom Error Handler**

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});
```

### **Example: Throwing an Error**

```js
app.get("/error", (req, res, next) => {
  next(new Error("This is a forced error!"));
});
```

---

## **7. CORS in Express**

**CORS (Cross-Origin Resource Sharing)** allows requests from different origins.

### **Enable CORS with `cors` Middleware**

Install the package:

```sh
npm install cors
```

Use it in your app:

```js
const cors = require("cors");
app.use(cors()); // Enables CORS for all routes
```

### **Custom CORS Configuration**

```js
app.use(
  cors({
    origin: "http://example.com", // Allow specific origin
    methods: ["GET", "POST"], // Allow only certain HTTP methods
  })
);
```

---

## **🚀 Summary Table**

| Feature                                  | Description            |
| ---------------------------------------- | ---------------------- |
| `express()`                              | Creates an Express app |
| `app.listen(port, callback)`             | Starts the server      |
| `express.json()`                         | Parses JSON requests   |
| `express.urlencoded({ extended: true })` | Parses form data       |
| `app.use(middleware)`                    | Applies middleware     |
| `app.get('/path', handler)`              | Defines GET route      |
| `app.post('/path', handler)`             | Defines POST route     |
| `app.use(cors())`                        | Enables CORS           |
| `app.use(errorHandler)`                  | Handles errors         |

---

## **🔹 Conclusion**

- **Express.js** simplifies server development.
- **Middleware** enhances request handling.
- **Routing** makes URL handling flexible.
- **Error Handling** prevents app crashes.
- **CORS** manages cross-origin requests.

---

# **8. Template Engines**

- EJS (Embedded JavaScript)
- Handlebars
- Pug (Jade)

Template engines allow us to generate **dynamic HTML content** using JavaScript. In Node.js, three popular template engines are:

- **EJS (Embedded JavaScript)**
- **Handlebars**
- **Pug (formerly Jade)**

These engines allow embedding **variables, loops, and conditions** in HTML files.

---

## **1. EJS (Embedded JavaScript Templates)**

EJS allows embedding JavaScript inside HTML using `<%= %>` and `<% %>` syntax.

### **Installing EJS**

```sh
npm install ejs
```

### **Setting Up EJS with Express**

```js
const express = require("express");
const app = express();

app.set("view engine", "ejs"); // Set EJS as the template engine

app.get("/", (req, res) => {
  res.render("index", { title: "EJS Example", message: "Hello, EJS!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### **Creating an EJS Template (`views/index.ejs`)**

```html
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
  </head>
  <body>
    <h1><%= message %></h1>
  </body>
</html>
```

🔹 **Syntax Explanation:**

- `<%= variable %>` → Renders escaped HTML content.
- `<%- variable %>` → Renders unescaped HTML content.
- `<% JavaScript code %>` → Executes JavaScript logic.

### **Loop Example**

```html
<ul>
  <% users.forEach(user => { %>
  <li><%= user.name %></li>
  <% }); %>
</ul>
```

---

## **2. Handlebars (hbs)**

Handlebars is a **logic-less template engine** that provides **mustache-style syntax (`{{ }}`)**.

### **Installing Handlebars**

```sh
npm install express-handlebars
```

### **Setting Up Handlebars with Express**

```js
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    title: "Handlebars Example",
    message: "Hello, Handlebars!",
  });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### **Creating a Handlebars Template (`views/home.hbs`)**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>{{title}}</title>
  </head>
  <body>
    <h1>{{message}}</h1>
  </body>
</html>
```

🔹 **Syntax Explanation:**

- `{{variable}}` → Inserts a value.
- `{{#each users}}` → Loops through an array.

### **Loop Example**

```html
<ul>
  {{#each users}}
  <li>{{this.name}}</li>
  {{/each}}
</ul>
```

---

## **3. Pug (formerly Jade)**

Pug is a whitespace-sensitive template engine that uses **indentation-based syntax**.

### **Installing Pug**

```sh
npm install pug
```

### **Setting Up Pug with Express**

```js
const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Pug Example", message: "Hello, Pug!" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### **Creating a Pug Template (`views/index.pug`)**

```pug
doctype html
html
  head
    title= title
  body
    h1= message
```

🔹 **Syntax Explanation:**

- `title= title` → Inserts a value.
- `h1= message` → Displays dynamic data.

### **Loop Example**

```pug
ul
  each user in users
    li= user.name
```

---

## **🚀 Comparison Table**

| Feature         | **EJS**                | **Handlebars**      | **Pug** (Jade)       |
| --------------- | ---------------------- | ------------------- | -------------------- |
| **Syntax**      | HTML + JS (`<%= %>`)   | Mustache (`{{ }}`)  | Indentation-based    |
| **Logic**       | Supports JS logic      | Logic-less, minimal | Supports JS logic    |
| **Ease of Use** | Easy to learn          | Simple & readable   | Short & concise      |
| **Performance** | Fast                   | Moderate            | Fast                 |
| **Use Case**    | Dynamic content & APIs | Simple static pages | Short & clean syntax |

---

## **📌 Conclusion**

- **EJS** → Best for **familiar HTML-based templating**.
- **Handlebars** → Best for **logic-less, readable templates**.
- **Pug** → Best for **short, indentation-based syntax**.

---

# **9. Working with Databases**

# **SQL Databases (MySQL, PostgreSQL, etc.)**

---

- Connecting Node.js with MySQL/PostgreSQL
- Running Queries (CRUD Operations)
- Using `sequelize` ORM

Node.js supports SQL databases like **MySQL** and **PostgreSQL** using libraries like `mysql2` and `pg`. ORM (Object-Relational Mapping) tools like **Sequelize** simplify database interactions.

---

## **1. Connecting Node.js with MySQL**

### **Install MySQL Driver**

```sh
npm install mysql2
```

### **Create a MySQL Connection**

```js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL");
});
```

---

## **2. Running Queries (CRUD Operations in MySQL)**

### **Create a Table**

```js
connection.query(
  `CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(50), age INT)`,
  (err, results) => {
    if (err) throw err;
    console.log("Table created");
  }
);
```

### **Insert Data**

```js
connection.query(
  `INSERT INTO users (name, age) VALUES (?, ?)`,
  ["Alice", 25],
  (err, results) => {
    if (err) throw err;
    console.log("Data inserted:", results.insertId);
  }
);
```

### **Read Data**

```js
connection.query(`SELECT * FROM users`, (err, results) => {
  if (err) throw err;
  console.log("Users:", results);
});
```

### **Update Data**

```js
connection.query(
  `UPDATE users SET age = ? WHERE name = ?`,
  [30, "Alice"],
  (err, results) => {
    if (err) throw err;
    console.log("Data updated:", results.affectedRows);
  }
);
```

### **Delete Data**

```js
connection.query(
  `DELETE FROM users WHERE name = ?`,
  ["Alice"],
  (err, results) => {
    if (err) throw err;
    console.log("Data deleted:", results.affectedRows);
  }
);
```

---

## **3. Connecting Node.js with PostgreSQL**

### **Install PostgreSQL Driver**

```sh
npm install pg
```

### **Create a PostgreSQL Connection**

```js
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "password",
  database: "testdb",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err));
```

---

## **4. Running Queries (CRUD Operations in PostgreSQL)**

### **Create a Table**

```js
client.query(
  `CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(50), age INT)`,
  (err, res) => {
    if (err) throw err;
    console.log("Table created");
  }
);
```

### **Insert Data**

```js
client.query(
  `INSERT INTO users (name, age) VALUES ($1, $2) RETURNING id`,
  ["Bob", 28],
  (err, res) => {
    if (err) throw err;
    console.log("Inserted ID:", res.rows[0].id);
  }
);
```

### **Read Data**

```js
client.query(`SELECT * FROM users`, (err, res) => {
  if (err) throw err;
  console.log("Users:", res.rows);
});
```

### **Update Data**

```js
client.query(
  `UPDATE users SET age = $1 WHERE name = $2`,
  [35, "Bob"],
  (err, res) => {
    if (err) throw err;
    console.log("Data updated:", res.rowCount);
  }
);
```

### **Delete Data**

```js
client.query(`DELETE FROM users WHERE name = $1`, ["Bob"], (err, res) => {
  if (err) throw err;
  console.log("Data deleted:", res.rowCount);
});
```

---

## **5. Using `Sequelize` ORM (MySQL & PostgreSQL)**

`Sequelize` is an ORM that simplifies database interactions.

### **Install Sequelize & Database Driver**

```sh
npm install sequelize mysql2    # For MySQL
npm install sequelize pg        # For PostgreSQL
```

### **Setup Sequelize**

```js
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "password", {
  host: "localhost",
  dialect: "mysql", // Change to 'postgres' for PostgreSQL
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Connection error:", err));
```

---

### **Define a Model**

```js
const User = sequelize.define("User", {
  name: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.INTEGER },
});

sequelize.sync().then(() => console.log("Database & tables created!"));
```

---

### **CRUD Operations with Sequelize**

#### **Insert Data**

```js
User.create({ name: "Charlie", age: 27 }).then((user) => console.log(user.id));
```

#### **Read Data**

```js
User.findAll().then((users) => console.log(users));
```

#### **Update Data**

```js
User.update({ age: 29 }, { where: { name: "Charlie" } }).then(() =>
  console.log("Data updated")
);
```

#### **Delete Data**

```js
User.destroy({ where: { name: "Charlie" } }).then(() =>
  console.log("Data deleted")
);
```

---

## **🚀 Comparison Table**

| Feature              | **MySQL**      | **PostgreSQL** | **Sequelize ORM** |
| -------------------- | -------------- | -------------- | ----------------- |
| **Setup Complexity** | Easy           | Moderate       | Moderate          |
| **Performance**      | High           | High           | Moderate          |
| **Transactions**     | Basic Support  | Advanced       | Advanced          |
| **Raw Queries**      | Yes            | Yes            | Yes               |
| **ORM Support**      | Manual Queries | Manual Queries | Yes (Models)      |

---

## **📌 Conclusion**

- **MySQL** → Best for fast & scalable applications.
- **PostgreSQL** → Best for advanced queries & large data.
- **Sequelize** → Best for structured ORM-based development.

---

# **NoSQL Databases (MongoDB, Firebase, etc.)**

- Connecting Node.js with MongoDB (`mongoose` ORM)
- CRUD Operations in MongoDB
- Aggregation in MongoDB

NoSQL databases like **MongoDB** and **Firebase** store data in **JSON-like** format, making them flexible and scalable.

---

## **1. Connecting Node.js with MongoDB using `mongoose`**

`mongoose` is an **ODM (Object Data Modeling) library** for MongoDB, similar to ORM in SQL databases.

### **Install MongoDB & Mongoose**

```sh
npm install mongoose
```

### **Connect to MongoDB**

```js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));
```

> Replace `localhost:27017/testdb` with your **MongoDB Atlas URL** if using cloud MongoDB.

---

## **2. CRUD Operations in MongoDB (`mongoose`)**

### **Define a Schema & Model**

```js
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});

const User = model("User", userSchema);
```

---

### **Create (Insert Data)**

```js
const createUser = async () => {
  const user = new User({ name: "Alice", age: 25, email: "alice@example.com" });
  await user.save();
  console.log("User Created:", user);
};

createUser();
```

---

### **Read (Find Data)**

```js
const getUsers = async () => {
  const users = await User.find(); // Fetch all users
  console.log("Users:", users);
};

getUsers();
```

- **Find a Specific User**

```js
User.findOne({ name: "Alice" }).then((user) => console.log(user));
```

---

### **Update (Modify Data)**

```js
const updateUser = async () => {
  await User.updateOne({ name: "Alice" }, { age: 30 });
  console.log("User Updated");
};

updateUser();
```

- **Find & Update**

```js
User.findOneAndUpdate({ name: "Alice" }, { age: 32 }, { new: true }).then(
  (user) => console.log("Updated User:", user)
);
```

---

### **Delete (Remove Data)**

```js
const deleteUser = async () => {
  await User.deleteOne({ name: "Alice" });
  console.log("User Deleted");
};

deleteUser();
```

---

## **3. Aggregation in MongoDB (`mongoose`)**

Aggregation is used for **data processing, filtering, and calculations**.

### **Example: Group Users by Age**

```js
User.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]).then(
  (result) => console.log(result)
);
```

### **Example: Find Users Older Than 25**

```js
User.aggregate([{ $match: { age: { $gt: 25 } } }]).then((result) =>
  console.log(result)
);
```

### **Example: Sort Users by Age (Descending)**

```js
User.aggregate([{ $sort: { age: -1 } }]).then((result) => console.log(result));
```

---

## **4. Connecting Node.js with Firebase (Firestore)**

Firebase is a cloud-based **NoSQL database** by Google.

### **Install Firebase SDK**

```sh
npm install firebase-admin
```

### **Initialize Firebase**

```js
const admin = require("firebase-admin");
const serviceAccount = require("./path/to/serviceAccountKey.json"); // Download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-project.firebaseio.com",
});

const db = admin.firestore();
```

---

### **CRUD Operations in Firebase**

#### **Create (Insert Data)**

```js
db.collection("users")
  .add({ name: "Bob", age: 27 })
  .then((docRef) => console.log("User Created:", docRef.id));
```

---

#### **Read (Retrieve Data)**

```js
db.collection("users")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => console.log(doc.id, "=>", doc.data()));
  });
```

---

#### **Update Data**

```js
db.collection("users")
  .doc("USER_ID")
  .update({ age: 30 })
  .then(() => console.log("User Updated"));
```

---

#### **Delete Data**

```js
db.collection("users")
  .doc("USER_ID")
  .delete()
  .then(() => console.log("User Deleted"));
```

---

## **🚀 Comparison: MongoDB vs Firebase**

| Feature         | **MongoDB**         | **Firebase Firestore**    |
| --------------- | ------------------- | ------------------------- |
| **Data Type**   | JSON-like documents | JSON-like NoSQL DB        |
| **Hosting**     | Self-hosted / Cloud | Fully Managed (Google)    |
| **Schema**      | Flexible            | Flexible but structured   |
| **Performance** | High-speed queries  | Optimized for mobile apps |
| **Pricing**     | Free-tier available | Pay-as-you-go             |

---

## **📌 Conclusion**

- **MongoDB (`mongoose`)** → Best for **scalable web applications**.
- **Firebase (Firestore)** → Best for **real-time mobile apps**.
- **Aggregation in MongoDB** is useful for **data analytics**.

---

# **10. Authentication & Security**

- Authentication Strategies (Session, JWT, OAuth)
- Password Hashing (`bcrypt`)
- Role-Based Authentication
- Implementing Authentication in Express
- Preventing SQL Injection & XSS
- Helmet.js for Security

Authentication is crucial in web apps for **user verification and data security**. Here’s how to implement authentication strategies in **Express.js** while securing the application.

---

## **1. Authentication Strategies**

### **(a) Session-Based Authentication**

- Uses **cookies and sessions** to maintain user state.
- Stores session data **server-side**.

#### **Install `express-session`**

```sh
npm install express-session
```

#### **Example: Using Sessions in Express**

```js
const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to `true` if using HTTPS
  })
);

app.get("/", (req, res) => {
  req.session.user = "Alice"; // Store session data
  res.send("Session Set");
});

app.get("/profile", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user}`);
  } else {
    res.send("Access Denied");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **(b) JWT-Based Authentication**

- Uses **JSON Web Tokens (JWT)** to authenticate users.
- Stateless (does not store user sessions on the server).

#### **Install JWT Library**

```sh
npm install jsonwebtoken
```

#### **Generate & Verify JWT Token**

```js
const jwt = require("jsonwebtoken");

const secretKey = "your-secret-key";

// Generate Token
const token = jwt.sign({ userId: 123 }, secretKey, { expiresIn: "1h" });
console.log("JWT Token:", token);

// Verify Token
try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded:", decoded);
} catch (err) {
  console.error("Invalid Token");
}
```

#### **Middleware for JWT Authentication in Express**

```js
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "your-secret-key";

// Middleware to Verify Token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).send("Access Denied");

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(401).send("Invalid Token");
    req.user = decoded;
    next();
  });
};

app.get("/protected", verifyToken, (req, res) => {
  res.send(`Hello User ${req.user.userId}`);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

### **(c) OAuth Authentication (Google, GitHub, etc.)**

OAuth allows authentication via **third-party providers** like Google, GitHub.

#### **Install `passport` and Google Strategy**

```sh
npm install passport passport-google-oauth20 express-session
```

#### **Setup Google OAuth**

```js
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "GOOGLE_CLIENT_ID",
      clientSecret: "GOOGLE_CLIENT_SECRET",
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));
```

#### **Express Routes for Google Login**

```js
const express = require("express");
const session = require("express-session");

const app = express();
app.use(
  session({ secret: "your-secret", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => res.send("Login Successful")
);

app.listen(3000, () => console.log("Server running on port 3000"));
```

> Replace `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` with credentials from Google Developer Console.

---

## **2. Password Hashing (`bcrypt`)**

Passwords should never be stored in plain text. **`bcrypt`** is used for hashing.

### **Install `bcrypt`**

```sh
npm install bcrypt
```

### **Hash & Verify Password**

```js
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  console.log("Hashed Password:", hashed);
};

const verifyPassword = async (password, hash) => {
  const match = await bcrypt.compare(password, hash);
  console.log("Password Match:", match);
};

hashPassword("mySecurePassword");
```

---

## **3. Role-Based Authentication**

Role-based access control (RBAC) restricts actions based on **user roles**.

### **Middleware for Role Checking**

```js
const checkRole = (role) => (req, res, next) => {
  if (req.user.role !== role) return res.status(403).send("Access Denied");
  next();
};

app.get("/admin", verifyToken, checkRole("admin"), (req, res) => {
  res.send("Welcome Admin");
});
```

---

## **4. Implementing Authentication in Express**

1. Use `express-session` for session-based auth.
2. Use `jsonwebtoken` (JWT) for stateless authentication.
3. Use `passport` for **OAuth login (Google, GitHub, etc.)**.
4. Hash passwords with `bcrypt`.
5. Implement **Role-Based Authentication**.

---

## **5. Security in Node.js**

### **(a) Preventing SQL Injection & XSS**

- Use **parameterized queries** to prevent SQL injection.
- Sanitize user input using `express-validator` or `xss-clean`.

#### **Install Security Packages**

```sh
npm install express-validator xss-clean
```

#### **Example: Prevent SQL Injection**

```js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  /* DB Config */
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  connection.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) return res.status(500).send("Error");
      res.send(results);
    }
  );
});
```

> `?` prevents SQL injection.

#### **Example: Prevent XSS**

```js
const xss = require("xss-clean");

app.use(xss());
```

> `xss-clean` prevents malicious script injection.

---

### **(b) Helmet.js for Security**

`helmet` helps protect Express apps by setting HTTP security headers.

#### **Install Helmet**

```sh
npm install helmet
```

#### **Use Helmet in Express**

```js
const helmet = require("helmet");

app.use(helmet());
```

> This protects against **Clickjacking, XSS, and other vulnerabilities**.

---

## **🚀 Summary**

| Feature                      | Implementation                     |
| ---------------------------- | ---------------------------------- |
| **Session Auth**             | `express-session`                  |
| **JWT Auth**                 | `jsonwebtoken`                     |
| **OAuth (Google, GitHub)**   | `passport-google-oauth20`          |
| **Password Hashing**         | `bcrypt`                           |
| **Role-Based Access**        | Middleware (Check `req.user.role`) |
| **SQL Injection Prevention** | Parameterized Queries (`?` in SQL) |
| **XSS Prevention**           | `xss-clean`                        |
| **Security Headers**         | `helmet`                           |

---

## **📌 Conclusion**

- **For API authentication** → Use **JWT**.
- **For web authentication** → Use **sessions**.
- **For third-party login** → Use **OAuth**.
- **Secure passwords** → Use **bcrypt**.
- **Enhance security** → Use **Helmet.js, XSS prevention, and SQL injection protection**.

---

# **11. WebSockets & Real-time Communication**

- Introduction to WebSockets
- Using `socket.io` for Real-time Apps
- Broadcasting Messages

WebSockets enable **full-duplex, real-time communication** between a client and a server. In Node.js, `socket.io` is the most popular library for implementing WebSockets.

---

## **1. Introduction to WebSockets**

WebSockets allow:
✅ **Persistent connection** between client & server.  
✅ **Low-latency** real-time data exchange.  
✅ Used in **chat apps, notifications, live dashboards**, etc.

### **WebSockets vs HTTP**

| Feature        | WebSockets     | HTTP (REST API)  |
| -------------- | -------------- | ---------------- |
| **Connection** | Persistent     | Request-Response |
| **Direction**  | Bi-directional | Client → Server  |
| **Use Case**   | Real-time apps | CRUD operations  |

---

## **2. Using `socket.io` for Real-time Apps**

### **(a) Install `socket.io`**

```sh
npm install socket.io
```

### **(b) Create a Simple WebSocket Server**

```js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("Message received:", msg);
    socket.emit("response", `Server received: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
```

> **`io.on('connection')`** → Listens for new connections.  
> **`socket.on('message')`** → Handles incoming messages.  
> **`socket.emit('response')`** → Sends a message back to the client.

---

### **(c) Create a Client to Connect to WebSocket**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>WebSocket Client</title>
    <script src="https://cdn.socket.io/4.4.1/socket.io.min.js"></script>
  </head>
  <body>
    <h1>WebSocket Client</h1>
    <input id="messageInput" placeholder="Type a message" />
    <button onclick="sendMessage()">Send</button>
    <p id="response"></p>

    <script>
      const socket = io("http://localhost:3000");

      function sendMessage() {
        const msg = document.getElementById("messageInput").value;
        socket.emit("message", msg);
      }

      socket.on("response", (data) => {
        document.getElementById("response").innerText = data;
      });
    </script>
  </body>
</html>
```

> **This client:**  
> ✅ Connects to the WebSocket server.  
> ✅ Sends messages via `socket.emit()`.  
> ✅ Displays server responses.

---

## **3. Broadcasting Messages**

Broadcasting is when a server **sends messages to multiple clients**.

### **(a) Send Message to All Clients**

```js
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("message", (msg) => {
    io.emit("response", `Broadcast: ${msg}`);
  });
});
```

> **`io.emit()`** sends messages to **all connected clients**.

---

### **(b) Send Message to All Except Sender**

```js
socket.broadcast.emit("response", `User ${socket.id} says: ${msg}`);
```

> **`socket.broadcast.emit()`** sends a message to all clients **except the sender**.

---

### **(c) Send Message to a Specific Client**

```js
socket.to("specific-socket-id").emit("response", "Hello User!");
```

> **Replace `'specific-socket-id'`** with the target user’s `socket.id`.

---

## **4. Using Rooms for Group Chats**

Rooms allow grouping sockets for **private messaging**.

### **(a) Join a Room**

```js
socket.on("joinRoom", (room) => {
  socket.join(room);
  console.log(`User joined room: ${room}`);
});
```

### **(b) Send Message to Room**

```js
io.to("room1").emit("response", "Message to room1 users");
```

> Only users in **room1** will receive the message.

---

## **🚀 Summary**

✅ **WebSockets** provide **real-time** communication.  
✅ **`socket.io`** makes WebSockets easier to use.  
✅ **Broadcasting** allows sending messages to **multiple clients**.  
✅ **Rooms** help manage **group-based chats**.

---

# **12. API Development with Node.js**

- RESTful API Concepts
- Building a REST API with Express
- CRUD Operations with API
- Versioning APIs
- Rate Limiting (`express-rate-limit`)

# **Building a RESTful API with Node.js & Express**

A **RESTful API (Representational State Transfer)** follows principles that make web services scalable, stateless, and easy to use.

---

## **1. RESTful API Concepts**

### **Key Principles of REST APIs**

✅ **Stateless** → No client session is stored on the server.  
✅ **Client-Server Architecture** → Separation of frontend & backend.  
✅ **Resource-Based URLs** → Uses nouns (`/users`, `/products`).  
✅ **Uses HTTP Methods**:

| HTTP Method | Action | Example                         |
| ----------- | ------ | ------------------------------- |
| **GET**     | Read   | `GET /users` (Fetch users)      |
| **POST**    | Create | `POST /users` (Create user)     |
| **PUT**     | Update | `PUT /users/1` (Update user)    |
| **DELETE**  | Delete | `DELETE /users/1` (Remove user) |

---

## **2. Building a REST API with Express**

### **(a) Install Express**

```sh
npm install express
```

### **(b) Set Up an Express Server**

```js
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## **3. CRUD Operations in REST API**

### **(a) Create a Sample Data Store**

```js
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
```

### **(b) GET: Fetch All Users**

```js
app.get("/users", (req, res) => {
  res.json(users);
});
```

### **(c) GET: Fetch a User by ID**

```js
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});
```

### **(d) POST: Create a New User**

```js
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
});
```

### **(e) PUT: Update a User**

```js
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name;
  res.json(user);
});
```

### **(f) DELETE: Remove a User**

```js
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "User deleted" });
});
```

---

## **4. Versioning APIs**

Versioning allows smooth transitions between API updates.

### **Method 1: URL-Based Versioning**

```js
app.get("/api/v1/users", (req, res) => {
  res.json(users);
});
```

> Clients request `/api/v1/users` instead of `/users`.

### **Method 2: Header-Based Versioning**

```js
app.use((req, res, next) => {
  const version = req.headers["api-version"];
  if (version === "2") {
    res.json({ message: "API v2 is not implemented yet" });
  } else {
    next();
  }
});
```

> Clients send `api-version: 1` in the request header.

---

## **5. Rate Limiting (`express-rate-limit`)**

Prevents **API abuse** by limiting request frequency.

### **(a) Install Rate Limiting Package**

```sh
npm install express-rate-limit
```

### **(b) Apply Rate Limiting**

```js
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: "Too many requests, please try again later",
});

app.use("/api/", limiter); // Apply limiter to API routes
```

---

## **🚀 Summary**

| Feature             | Implementation                       |
| ------------------- | ------------------------------------ |
| **Express API**     | `express`                            |
| **CRUD Operations** | `GET, POST, PUT, DELETE`             |
| **API Versioning**  | URL-based (`/api/v1/`), Header-based |
| **Rate Limiting**   | `express-rate-limit`                 |

---

# **13. GraphQL with Node.js**

- Introduction to GraphQL
- Setting up GraphQL Server
- Queries & Mutations
- Apollo Server Integration

GraphQL is a **query language** for APIs that provides more flexibility than REST. Instead of multiple endpoints (`/users`, `/posts`), GraphQL has a **single endpoint** where clients specify exactly the data they need.

---

## **1. Introduction to GraphQL**

### **🌟 Why Use GraphQL?**

✅ **Single API Endpoint** (`/graphql`)  
✅ **Fetch Multiple Resources in One Request**  
✅ **Strongly Typed Schema** (Strict Data Structure)  
✅ **Prevents Over-fetching & Under-fetching**

### **🔄 GraphQL vs REST API**

| Feature            | REST API                       | GraphQL                      |
| ------------------ | ------------------------------ | ---------------------------- |
| **Endpoint**       | Multiple (`/users`, `/posts`)  | Single (`/graphql`)          |
| **Data Fetching**  | Fixed Response                 | Flexible Query               |
| **Over-fetching**  | Yes (Unwanted fields)          | No (Request specific fields) |
| **Under-fetching** | Yes (Multiple requests needed) | No (All data in one query)   |

---

## **2. Setting Up a GraphQL Server in Node.js**

### **(a) Install Dependencies**

```sh
npm install express graphql express-graphql
```

### **(b) Create a Simple GraphQL Server**

```js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

// Define GraphQL Schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Define Resolvers
const root = {
  hello: () => "Hello, GraphQL!",
};

// Set up GraphQL Endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enables GraphQL Playground
  })
);

app.listen(4000, () => console.log("GraphQL Server running on port 4000"));
```

### **🎯 Run the Server**

Start the server:

```sh
node server.js
```

Visit: [`http://localhost:4000/graphql`](http://localhost:4000/graphql)  
Run the query:

```graphql
{
  hello
}
```

Response:

```json
{
  "data": {
    "hello": "Hello, GraphQL!"
  }
}
```

---

## **3. Queries & Mutations**

### **(a) Define a Schema with a User Type**

```js
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int): User
  }
`);
```

### **(b) Sample Data**

```js
let users = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 30 },
];
```

### **(c) Create Resolvers**

```js
const root = {
  users: () => users,
  user: ({ id }) => users.find((user) => user.id === id),
  addUser: ({ name, age }) => {
    const newUser = { id: String(users.length + 1), name, age };
    users.push(newUser);
    return newUser;
  },
};
```

---

## **4. Testing GraphQL Queries & Mutations**

### **🔍 Query: Get All Users**

```graphql
{
  users {
    id
    name
    age
  }
}
```

**Response:**

```json
{
  "data": {
    "users": [
      { "id": "1", "name": "Alice", "age": 25 },
      { "id": "2", "name": "Bob", "age": 30 }
    ]
  }
}
```

### **🔍 Query: Get a User by ID**

```graphql
{
  user(id: "1") {
    name
    age
  }
}
```

### **➕ Mutation: Add a User**

```graphql
mutation {
  addUser(name: "Charlie", age: 28) {
    id
    name
  }
}
```

---

## **5. Apollo Server Integration**

### **(a) Install Apollo Server**

```sh
npm install apollo-server graphql
```

### **(b) Set Up Apollo Server**

```js
const { ApolloServer, gql } = require("apollo-server");

// Define Schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int): User
  }
`;

let users = [
  { id: "1", name: "Alice", age: 25 },
  { id: "2", name: "Bob", age: 30 },
];

// Define Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
  },
  Mutation: {
    addUser: (_, { name, age }) => {
      const newUser = { id: String(users.length + 1), name, age };
      users.push(newUser);
      return newUser;
    },
  },
};

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo Server ready at ${url}`);
});
```

### **🎯 Run the Apollo Server**

```sh
node server.js
```

Visit: [`http://localhost:4000`](http://localhost:4000)

---

## **🚀 Summary**

| Feature                | Implementation                           |
| ---------------------- | ---------------------------------------- |
| **GraphQL Server**     | `express-graphql` or `apollo-server`     |
| **Schema Definition**  | `typeDefs` (`User`, `Query`, `Mutation`) |
| **Resolvers**          | Handles Queries & Mutations              |
| **GraphQL Playground** | Test API Interactively                   |

---

# **14. Node.js and Microservices**

- Introduction to Microservices Architecture
- Building Microservices with Express
- Using RabbitMQ/Kafka for Messaging
- Containerization with Docker

Microservices architecture is a **modern approach** to building scalable applications by breaking them into smaller, independently deployable services.

---

## **1. Introduction to Microservices Architecture**

### **🌟 What are Microservices?**

Microservices are small, independent services that:  
✅ **Communicate via APIs** (REST/GraphQL/gRPC)  
✅ **Are loosely coupled** (Each service works independently)  
✅ **Are scalable** (Only scale required services)  
✅ **Can be developed & deployed separately**

### **🆚 Monolithic vs Microservices**

| Feature              | Monolithic              | Microservices                          |
| -------------------- | ----------------------- | -------------------------------------- |
| **Scalability**      | Hard (Scale everything) | Easy (Scale per service)               |
| **Technology Stack** | Single (e.g., Node.js)  | Multiple (Node.js, Python, Java, etc.) |
| **Deployment**       | One large unit          | Independent services                   |
| **Communication**    | Function Calls          | API, Message Queues                    |

**Example:**

- `User Service` (Manages users)
- `Order Service` (Handles orders)
- `Payment Service` (Processes payments)

---

## **2. Building Microservices with Express**

### **📌 Install Express**

```sh
npm install express dotenv axios cors
```

### **(a) Create `User Service` (user-service.js)**

```js
const express = require("express");
const app = express();
app.use(express.json());

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

app.listen(4001, () => console.log("User Service running on port 4001"));
```

### **(b) Create `Order Service` (order-service.js)**

```js
const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const orders = [{ id: 1, userId: 1, product: "Laptop" }];

app.get("/orders", (req, res) => {
  res.json(orders);
});

app.get("/orders/:id", async (req, res) => {
  const order = orders.find((o) => o.id === parseInt(req.params.id));
  if (!order) return res.status(404).json({ message: "Order not found" });

  const userResponse = await axios.get(
    `http://localhost:4001/users/${order.userId}`
  );
  res.json({ ...order, user: userResponse.data });
});

app.listen(4002, () => console.log("Order Service running on port 4002"));
```

### **(c) Run Services**

```sh
node user-service.js
node order-service.js
```

👉 Now, `Order Service` calls `User Service` to get user details.

---

## **3. Using RabbitMQ/Kafka for Messaging**

Message brokers like **RabbitMQ** and **Kafka** enable **asynchronous** communication between microservices.

### **(a) Install RabbitMQ in Node.js**

```sh
npm install amqplib
```

### **(b) Producer Service (Sends Message)**

```js
const amqp = require("amqplib");

async function sendMessage() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "order_queue";

  await channel.assertQueue(queue);
  channel.sendToQueue(
    queue,
    Buffer.from(JSON.stringify({ orderId: 1, status: "Created" }))
  );

  console.log("Message Sent");
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

sendMessage();
```

### **(c) Consumer Service (Receives Message)**

```js
const amqp = require("amqplib");

async function receiveMessage() {
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  const queue = "order_queue";

  await channel.assertQueue(queue);
  console.log("Waiting for messages...");

  channel.consume(queue, (msg) => {
    console.log("Received:", JSON.parse(msg.content.toString()));
    channel.ack(msg);
  });
}

receiveMessage();
```

Now, `Order Service` can send messages to `Payment Service` via RabbitMQ. 📨

---

## **4. Containerization with Docker**

### **(a) Install Docker**

[Download Docker](https://www.docker.com/get-started) and ensure it’s running.

### **(b) Create a `Dockerfile` for `User Service`**

```dockerfile
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["node", "user-service.js"]
EXPOSE 4001
```

### **(c) Build & Run Docker Container**

```sh
docker build -t user-service .
docker run -p 4001:4001 user-service
```

### **(d) Docker Compose for Multiple Microservices**

Create `docker-compose.yml`:

```yaml
version: "3"
services:
  user-service:
    build: .
    ports:
      - "4001:4001"
  order-service:
    build: .
    ports:
      - "4002:4002"
```

Run:

```sh
docker-compose up --build
```

---

## **🚀 Summary**

| Feature                         | Implementation                        |
| ------------------------------- | ------------------------------------- |
| **Microservices with Express**  | `user-service.js`, `order-service.js` |
| **Inter-Service Communication** | `axios` requests                      |
| **Messaging**                   | `RabbitMQ` (`amqplib`)                |
| **Containerization**            | `Docker` & `docker-compose`           |

---

# **15. Unit Testing in Node.js**

- Writing Tests with Jest/Mocha
- Testing API Endpoints (`supertest`)
- Mocking in Tests

---

# **16. Performance Optimization & Debugging**

- Profiling and Debugging with `node --inspect`
- Using `console.time()` for Performance Measurement
- Caching with Redis
- Optimizing Queries & Memory Usage

Optimizing and debugging Node.js applications is crucial for performance and scalability. Here’s a detailed breakdown of profiling, debugging, caching, and optimizing memory usage.

---

## **1️⃣ Profiling & Debugging with `node --inspect`**

### **🛠 Debugging with Chrome DevTools**

Node.js has a built-in debugger that works with Chrome DevTools.

### **🔍 Start Node.js Debugging**

Run your script with:

```sh
node --inspect server.js
```

or in breakpoint mode:

```sh
node --inspect-brk server.js
```

Now open **Chrome** and go to:

```
chrome://inspect
```

Click "Open dedicated DevTools for Node" to debug.

### **📌 Setting Breakpoints**

Add breakpoints in your code using:

```js
debugger;
```

### **📌 Debugging with `node inspect` (Terminal Mode)**

```sh
node inspect server.js
```

Commands:

- `c` → Continue execution
- `n` → Next line
- `s` → Step into function
- `o` → Step out

---

## **2️⃣ Using `console.time()` for Performance Measurement**

`console.time()` helps measure execution time.

### **Example: Measuring a Loop’s Performance**

```js
console.time("Loop Time");
for (let i = 0; i < 1e6; i++) {} // 1 million iterations
console.timeEnd("Loop Time");
```

Output:

```
Loop Time: 3.2ms
```

### **Example: Measuring API Response Time**

```js
console.time("API Call");
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then(() => console.timeEnd("API Call"));
```

---

## **3️⃣ Caching with Redis**

Redis is an in-memory database that speeds up data retrieval.

### **🔹 Install Redis & `redis` Package**

```sh
npm install redis
```

Ensure Redis is running:

```sh
redis-server
```

### **🔹 Connecting to Redis**

```js
const redis = require("redis");
const client = redis.createClient();

client.on("connect", () => console.log("Connected to Redis"));
client.on("error", (err) => console.error("Redis Error:", err));
```

### **🔹 Caching API Responses**

```js
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/posts", async (req, res) => {
  const cacheKey = "posts";

  client.get(cacheKey, async (err, cachedData) => {
    if (cachedData) {
      return res.json(JSON.parse(cachedData)); // Return cached data
    }

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    client.setex(cacheKey, 3600, JSON.stringify(data)); // Cache for 1 hour
    res.json(data);
  });
});

app.listen(4000, () => console.log("Server running on port 4000"));
```

### **🔹 Clearing Cache**

```sh
redis-cli FLUSHALL
```

---

## **4️⃣ Optimizing Queries & Memory Usage**

### **🔹 Using Indexes in Databases**

Indexes improve query speed.

```sql
CREATE INDEX idx_name ON users(name);
```

In MongoDB:

```js
db.users.createIndex({ name: 1 });
```

### **🔹 Using Pagination for Large Data**

Instead of:

```js
const users = await User.find(); // Bad for large datasets
```

Use:

```js
const page = 1,
  limit = 10;
const users = await User.find()
  .skip((page - 1) * limit)
  .limit(limit);
```

### **🔹 Stream Large Files Instead of Buffering**

```js
const fs = require("fs");
const readStream = fs.createReadStream("largefile.txt");
readStream.pipe(res);
```

---

## **🚀 Summary**

| Feature                     | Tool/Technique                    |
| --------------------------- | --------------------------------- |
| **Debugging**               | `node --inspect`, Chrome DevTools |
| **Performance Measurement** | `console.time()`                  |
| **Caching**                 | Redis (`redis` package)           |
| **Query Optimization**      | Indexing, Pagination              |
| **Memory Optimization**     | Streaming, Avoiding Large Buffers |

---

# **🚀 Load Testing Node.js Apps with Apache JMeter & Artillery**

Load testing helps measure **performance, scalability, and reliability** under heavy traffic. Two popular tools for this are **Apache JMeter** and **Artillery**.

---

## **1️⃣ Load Testing with Apache JMeter**

**Apache JMeter** is a GUI-based tool for simulating heavy loads on APIs, websites, and applications.

### **🔹 Install JMeter**

- **On Windows:** Download from [JMeter Official Site](https://jmeter.apache.org/download_jmeter.cgi)
- **On Ubuntu/Linux:**
  ```sh
  sudo apt install jmeter
  ```
- **On Mac (Homebrew):**
  ```sh
  brew install jmeter
  ```

### **🔹 Creating a Load Test**

1️⃣ **Open JMeter** and create a new test plan  
2️⃣ **Add a Thread Group** (Simulates multiple users)

- Right-click **Test Plan** → Add → Threads (Users) → **Thread Group**
- Set:
  - **Number of Threads (Users)** = `100`
  - **Ramp-up Period** = `10` (Users will start over 10 seconds)
  - **Loop Count** = `10` (How many times to repeat)

3️⃣ **Add an HTTP Request**

- Right-click **Thread Group** → Add → Sampler → **HTTP Request**
- Set:
  - **Server Name**: `localhost` or `your-server.com`
  - **Port**: `3000` (if your Node.js app runs on this)
  - **Method**: `GET`
  - **Path**: `/api/data` (API endpoint you want to test)

4️⃣ **Add Listeners (Results Display)**

- Right-click **Thread Group** → Add → Listener → **View Results Tree**

5️⃣ **Run the Test**

- Click **Start (▶️)** to begin testing
- View results in **"View Results Tree"**

---

## **2️⃣ Load Testing with Artillery**

[Artillery](https://www.artillery.io/) is a modern CLI-based tool for stress testing APIs and microservices.

### **🔹 Install Artillery**

```sh
npm install -g artillery
```

### **🔹 Running a Basic Load Test**

```sh
artillery quick --count 50 -n 20 http://localhost:3000/api/data
```

- **50 users** will send **20 requests each**
- Total requests: `50 x 20 = 1000`

---

## **3️⃣ Creating an Artillery Config File (`load-test.yml`)**

### **🔹 Example: Load Test for a REST API**

```yaml
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60 # Run test for 60 seconds
      arrivalRate: 10 # 10 new users per second

scenarios:
  - flow:
      - get:
          url: "/api/data"
      - post:
          url: "/api/upload"
          json:
            name: "Test User"
            email: "test@example.com"
```

### **🔹 Run the Test**

```sh
artillery run load-test.yml
```

---

## **4️⃣ Analyzing Results**

**JMeter Reports**

- Go to **"Summary Report"** or **"Aggregate Graph"**

**Artillery Reports**

- Artillery generates a `report.json`

```sh
artillery report report.json
```

- It provides **latency, response times, and error rates**

---

## **🚀 Summary**

| Tool          | Best For                             |
| ------------- | ------------------------------------ |
| **JMeter**    | GUI-based testing, complex scenarios |
| **Artillery** | CLI-based, fast API testing          |

---

# **17. Deploying Node.js Applications**

- Using PM2 for Process Management
- Deploying on AWS, Heroku, and DigitalOcean
- CI/CD with GitHub Actions

Managing and deploying a Node.js application efficiently is crucial for scalability and stability. Here’s a detailed breakdown of **PM2 for process management**, **deploying on AWS, Heroku, and DigitalOcean**, and **setting up CI/CD with GitHub Actions**.

---

## **1️⃣ Using PM2 for Process Management**

[PM2](https://pm2.keymetrics.io/) is a process manager that keeps Node.js applications alive, auto-restarts them on failure, and provides monitoring.

### **🔹 Install PM2**

```sh
npm install -g pm2
```

### **🔹 Start a Node.js App with PM2**

```sh
pm2 start server.js --name myapp
```

Check running processes:

```sh
pm2 list
```

### **🔹 Restart, Stop, and Delete Processes**

```sh
pm2 restart myapp      # Restart app
pm2 stop myapp         # Stop app
pm2 delete myapp       # Remove app
```

### **🔹 Auto-Restart on System Reboot**

Generate a startup script:

```sh
pm2 startup
pm2 save
```

### **🔹 Monitor Logs & Performance**

```sh
pm2 logs myapp         # View logs
pm2 monit              # Live process monitoring
```

---

## **2️⃣ Deploying Node.js Apps**

### **🔹 Deploying on AWS EC2**

1️⃣ **Launch an EC2 Instance** (Ubuntu)  
2️⃣ **Connect to EC2**

```sh
ssh -i your-key.pem ubuntu@your-ec2-ip
```

3️⃣ **Install Node.js & PM2**

```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g pm2
```

4️⃣ **Transfer Code & Start App**

```sh
scp -i your-key.pem -r myapp ubuntu@your-ec2-ip:~/
ssh ubuntu@your-ec2-ip
cd myapp
npm install
pm2 start server.js
```

5️⃣ **Expose to Internet via Nginx**

```sh
sudo apt install nginx -y
sudo nano /etc/nginx/sites-available/default
```

🔹 Add this:

```nginx
server {
    listen 80;
    server_name your-ec2-ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

🔹 Restart Nginx:

```sh
sudo systemctl restart nginx
```

---

### **🔹 Deploying on Heroku**

1️⃣ **Install Heroku CLI**

```sh
npm install -g heroku
```

2️⃣ **Login to Heroku**

```sh
heroku login
```

3️⃣ **Create a Heroku App & Deploy**

```sh
git init
heroku create myapp
git add .
git commit -m "Deploy"
git push heroku main
```

4️⃣ **Scale & View Logs**

```sh
heroku ps:scale web=1
heroku logs --tail
```

---

### **🔹 Deploying on DigitalOcean**

1️⃣ **Create a Droplet** (Ubuntu)  
2️⃣ **SSH into Server**

```sh
ssh root@your-droplet-ip
```

3️⃣ **Install Node.js, PM2 & Nginx**

```sh
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs nginx
npm install -g pm2
```

4️⃣ **Clone and Start the App**

```sh
git clone https://github.com/your-repo.git
cd your-repo
npm install
pm2 start server.js
```

5️⃣ **Configure Nginx (Same as AWS Steps Above)**

---

## **3️⃣ CI/CD with GitHub Actions**

GitHub Actions automates deployment on push.

### **🔹 Create a `.github/workflows/deploy.yml` File**

```yaml
name: Deploy Node.js App

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Deploy to Server
        uses: appleboy/ssh-action@v0.1.6
        with:
          host: ${{ secrets.SERVER_IP }}
          username: ubuntu
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /home/ubuntu/myapp
            git pull origin main
            npm install
            pm2 restart myapp
```

### **🔹 Steps to Use GitHub Actions**

1️⃣ **Add SSH Key to GitHub Secrets** (SERVER_IP, SSH_KEY)  
2️⃣ **Push Code to GitHub**

```sh
git add .
git commit -m "Automated Deployment"
git push origin main
```

3️⃣ **GitHub Automatically Deploys the App** 🎉

---

## **🚀 Summary**

| Feature                 | Tool                          |
| ----------------------- | ----------------------------- |
| **Process Management**  | PM2                           |
| **Deployment on Cloud** | AWS EC2, Heroku, DigitalOcean |
| **CI/CD Automation**    | GitHub Actions                |
