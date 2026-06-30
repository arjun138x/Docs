## [1. Introduction](#1-introduction-1)

- What is Node.js?
- V8 Engine
- Single-threaded architecture
- Non-blocking I/O
- Event-driven architecture
- Installing Node.js
- REPL

---

## [2. JavaScript Runtime](#2-javascript-runtime-1)

- Global objects
- `global`
- `process`
- `__dirname`
- `__filename`
- Timers
  - `setTimeout`
  - `setInterval`
  - `setImmediate`

- `queueMicrotask()`
- `process.nextTick()`

---

## [3. Modules](#3-modules-1)

- CommonJS
- ES Modules (ESM)
- Import/Export
- Module Wrapper
- Module Caching
- Core Modules
- Custom Modules
- Package exports

---

## [4. npm](#4-npm-1)

- package.json
- package-lock.json
- npm install
- Local vs Global packages
- Semantic Versioning
- npm scripts
- npx

---

## [5. File System (`fs`)](#5-file-system-fs-1)

- Read files
- Write files
- Append
- Delete
- Rename
- Copy
- Directories
- Async vs Sync
- Promises API

---

## [6. Path Module](#6-path-module-1)

- join()
- resolve()
- basename()
- dirname()
- extname()
- normalize()
- parse()
- format()

---

## [7. OS Module](#7-os-module-1)

- CPU
- Memory
- Hostname
- Platform
- Architecture
- Uptime

---

## [8. Events](#8-events-1)

- EventEmitter
- Custom events
- Event listeners
- Removing listeners
- Once listeners

---

## [9. Buffers](#9-buffers-1)

- Creating buffers
- Encoding
- Decoding
- Reading/Writing
- Binary data

---

## [10. Streams](#10-streams-1)

- Readable
- Writable
- Duplex
- Transform
- Pipe
- Backpressure
- Stream events

---

## [11. HTTP Module](#11-http-module-1)

- HTTP Server
- Request
- Response
- Headers
- Status codes
- Routing
- Serving files
- JSON responses

---

## [12. URL Module](#12-url-module-1)

- URL parsing
- Query parameters
- URLSearchParams

---

## [13. DNS Module](#13-dns-module-1)

- DNS lookup
- Resolve records

---

## [14. Crypto Module](#14-crypto-module-1)

- Hashing
- Random bytes
- Encryption basics
- Password hashing concepts

---

## [15. Zlib Module](#15-zlib-module-1)

- Compression
- Decompression
- Gzip

---

## [16. Child Processes](#16-child-processes-1)

- `exec()`
- `spawn()`
- `fork()`
- `execFile()`

---

## [17. Cluster Module](#17-cluster-module-1)

- Multi-core processing
- Worker processes
- Load distribution

---

## [18. Worker Threads](#18-worker-threads-1)

- CPU-intensive tasks
- Message passing
- Shared memory basics

---

## [19. Timers & Event Loop](#19-timers--event-loop-1)

- Event Loop phases
- Callback Queue
- Microtask Queue
- `setImmediate()`
- `process.nextTick()`
- Promises in the event loop

---

## [20. Asynchronous Programming](#20-asynchronous-programming-1)

- Callbacks
- Callback Hell
- Promises
- Async/Await
- Error handling
- `Promise.all()`
- `Promise.allSettled()`
- `Promise.race()`
- `Promise.any()`

---

## [21. Error Handling](#21-error-handling-1)

- Synchronous errors
- Asynchronous errors
- Custom errors
- Uncaught exceptions
- Unhandled promise rejections

---

## [22. Environment Variables](#22-environment-variables-1)

- `process.env`
- `.env` files
- Configuration management

---

## [23. Networking](#23-networking-1)

- TCP (`net` module)
- UDP (`dgram` module)
- TLS basics

---

## [24. Debugging](#24-debugging-1)

- Node Inspector
- Chrome DevTools
- VS Code Debugger
- Logging

---

## [25. Performance](#25-performance-1)

- Memory leaks
- Garbage Collection
- Profiling
- Performance hooks

---

## [26. Process Management](#26-process-management-1)

- Signals (`SIGINT`, `SIGTERM`)
- Exit codes
- Graceful shutdown
- Process lifecycle

---

## [27. Testing](#27-testing-1)

- Node test runner
- Unit testing basics
- Mocking

---

## [28. Security](#28-security-1)

- Input validation
- CORS concepts
- Helmet (with Express)
- Rate limiting concepts
- Secure environment variables

---

# 1. Introduction

గ్రేట్! మొదటి చాప్టర్ లోని టాపిక్స్ అన్నీ Node.js కి అత్యంత ముఖ్యమైన పునాది (Foundation). వీటిని మనం ఒక్కొక్కటిగా, ఇన్-డెప్త్ గా మరియు రియల్-వరల్డ్ ఎగ్జాంపుల్స్ తో తెలుగులో నేర్చుకుందాం.

---

## 1. What is Node.js? (Node.js అంటే ఏమిటి?)

సాధారణంగా JavaScript అనేది కేవలం బ్రౌజర్ (Chrome, Firefox) లో మాత్రమే రన్ అవుతుంది. కానీ, JavaScript ని బ్రౌజర్ దాటించి, మన కంప్యూటర్ లేదా సర్వర్‌లో కూడా రన్ అయ్యేలా చేసిన ఒక **Runtime Environment** యే ఈ Node.js.

- **హిస్టరీ:** 2009 లో **Ryan Dahl** అనే డెవలపర్, గూగుల్ క్రోమ్ లోని V8 Engine ని విడదీసి, దానికి C++ కోడ్ ని జోడించి Node.js ని తయారుచేశారు.
- **ఉపయోగం:** దీనివల్ల మనం JavaScript ని ఉపయోగించి బ్యాకెండ్ సర్వర్లు (Backend Servers), API లు, మరియు డెస్క్‌టాప్ యాప్స్ కూడా బిల్డ్ చేయగలుగుతున్నాం.

---

## 2. V8 Engine (V8 ఇంజిన్ అంటే ఏమిటి?)

V8 అనేది గూగుల్ క్రోమ్ బ్రౌజర్ కోసం తయారు చేసిన ఒక **Open-Source High-Performance JavaScript Engine**.

- **ఇది ఏం చేస్తుంది?:** మనం రాసే JavaScript కోడ్ కంప్యూటర్‌కు నేరుగా అర్థం కాదు. V8 ఇంజిన్ మన JavaScript కోడ్‌ని తీసుకుని, దానిని కంప్యూటర్ కి అర్థమయ్యే **Machine Code (0s and 1s)** లోకి మారుస్తుంది.
- **Just-In-Time (JIT) Compilation:** V8 ఇంజిన్ కోడ్‌ని రన్ చేసేటప్పుడే చాలా వేగంగా కంపైల్ చేస్తుంది. అందుకే Node.js ఇంత ఫాస్ట్ గా పనిచేస్తుంది.

---

## 3. Single-threaded Architecture (సింగిల్-థ్రెడెడ్ ఆర్కిటెక్చర్)

ఒక **Thread** అంటే ఒక పనిని పూర్తి చేయడానికి కంప్యూటర్ ఉపయోగించే ఒక చిన్న దారి లేదా వర్కర్ (Worker) లాంటిది.

- Java లేదా PHP వంటి లాంగ్వేజెస్ **Multi-threaded**. అంటే సర్వర్‌కి 100 రిక్వెస్ట్‌లు వస్తే, 100 మంది వర్కర్లు (Threads) పని చేయాలి.
- కానీ **Node.js ఒక Single-threaded** ఆర్కిటెక్చర్. దీనికి కేవలం **ఒక్కడే వర్కర్ (Main Thread)** ఉంటాడు. వచ్చిన రిక్వెస్ట్‌లన్నింటినీ ఆ ఒక్కడే మేనేజ్ చేస్తాడు.

> 💡 **డౌట్ రావచ్చు:** ఒక్కడే వర్కర్ ఉంటే సర్వర్ స్లో అయిపోదా? దానికి సమాధానమే తర్వాతి టాపిక్!

---

## 4. Non-blocking I/O (నాన్-బ్లాకింగ్ I/O)

**I/O అంటే Input/Output** (డేటాబేస్ నుండి డేటా తేవడం, ఫైల్స్ రీడ్ చేయడం, నెట్‌వర్క్ రిక్వెస్ట్‌లు).

- **Blocking I/O (ఇతర లాంగ్వేజెస్):** ఒక హోటల్‌లో వెయిటర్ ఆర్డర్ తీసుకుని, కిచెన్‌ కి వెళ్లి, వంట పూర్తి అయ్యేదాకా అక్కడే నిలబడి, ఆ వంటకాన్ని తెచ్చి కస్టమర్‌కి ఇచ్చాకే... తర్వాతి కస్టమర్ ఆర్డర్ తీసుకుంటాడు. దీనివల్ల టైమ్ వేస్ట్ అవుతుంది.
- **Non-blocking I/O (Node.js):** వెయిటర్ ఒకరి ఆర్డర్ తీసుకుని కిచెన్‌కి పంపేసి, వెంటనే ఖాళీగా ఉండకుండా తర్వాతి కస్టమర్ ఆర్డర్ తీసుకోవడానికి వెళ్ళిపోతాడు. వంట పూర్తి కాగానే వేరే వాళ్ళు (Callback) తెచ్చి ఇస్తారు.

Node.js లో కూడా మెయిన్ థ్రెడ్ టైమ్ వేస్ట్ చేయకుండా, టైమ్ పడుతుంది (Database Query లాంటివి) అనుకున్న పనులను బ్యాక్‌గ్రౌండ్‌కి పంపేసి, తర్వాతి లైన్ కోడ్‌ని రన్ చేసుకుంటూ వెళ్ళిపోతుంది.

---

## 5. Event-driven Architecture (ఈవెంట్-డ్రివెన్ ఆర్కిటెక్చర్)

Node.js లో జరిగే ప్రతి పనీ ఒక **Event** ఆధారంగా జరుగుతుంది.

- "ఒక ఫైల్ రీడ్ అవ్వడం పూర్తయింది" అనేది ఒక ఈవెంట్.
- "ఒక యూజర్ బటన్ క్లిక్ చేశాడు" లేదా "సర్వర్‌కి రిక్వెస్ట్ వచ్చింది" అనేది ఒక ఈవెంట్.

బ్యాక్‌గ్రౌండ్‌లో ఒక పని పూర్తి కాగానే, ఒక ఈవెంట్ ట్రిగ్గర్ అవుతుంది. ఆ ఈవెంట్ కి లింక్ అయి ఉన్న **Callback Function** రన్ అవుతుంది. దీనంతటినీ మేనేజ్ చేయడానికి Node.js లో **Event Loop** అనే ఒక మెకానిజం ఉంటుంది (దీని గురించి ముందు ముందు ఇన్-డెప్త్ గా నేర్చుకుందాం).

---

## 6. Installing Node.js (ఇన్‌స్టాలేషన్)

Node.js ని ఇన్‌స్టాల్ చేయడం చాలా సులువు:

1. అధికారిక వెబ్‌సైట్ [nodejs.org](https://nodejs.org/) కి వెళ్ళండి.
2. అక్కడ మీకు రెండు ఆప్షన్లు కనిపిస్తాయి: **LTS (Long Term Support)** మరియు **Current**. ఎల్లప్పుడూ **LTS** వర్షన్‌నే డౌన్లోడ్ చేసుకోండి (ఇది స్టేబుల్ గా ఉంటుంది).
3. డౌన్లోడ్ అయిన `.exe` లేదా `.pkg` ఫైల్ ని నెక్స్ట్, నెక్స్ట్ నొక్కుతూ ఇన్‌స్టాల్ చేయండి.
4. ఇన్‌స్టాల్ అయిందో లేదో చెక్ చేయడానికి మీ Terminal లేదా Command Prompt (CMD) ఓపెన్ చేసి ఈ క్రింది కమాండ్స్ టైప్ చేయండి:

```bash
node -v
npm -v

```

(ఇవి మీకు Node మరియు NPM వర్షన్ నంబర్లను చూపిస్తాయి).

---

## 7. REPL అంటే ఏమిటి?

REPL అంటే **R**ead, **E**val (Evaluate), **P**rint, **L**oop. ఇది ఒక క్విక్ ప్లేగ్రౌండ్ లాంటిది. మనం ఫైల్స్ క్రియేట్ చేయకుండానే చిన్న చిన్న JavaScript కోడ్ ముక్కలను టెస్ట్ చేసుకోవడానికి ఇది ఉపయోగపడుతుంది.

- **దీన్ని ఎలా వాడాలి?:** మీ CMD/Terminal ఓపెన్ చేసి జస్ట్ `node` అని టైప్ చేసి ఎంటర్ కొట్టండి.
- **పనిచేసే విధానం:**

1. **Read:** మీరు ఇచ్చే కోడ్‌ను రీడ్ చేస్తుంది.
2. **Eval:** ఆ కోడ్‌ని ఎగ్జిక్యూట్ (Evaluate) చేస్తుంది.
3. **Print:** వచ్చిన రిజల్ట్‌ని స్క్రీన్ పై ప్రింట్ చేస్తుంది.
4. **Loop:** మళ్ళీ తర్వాతి కోడ్ కోసం వెయిట్ చేస్తుంది (Loop).

- **ఎగ్జిట్ అవ్వడానికి:** `.exit` అని టైప్ చేయండి లేదా రెండు సార్లు `Ctrl + C` నొక్కండి.

### REPL కోడ్ ఎగ్జాంపుల్:

```javascript
$ node
> const a = 10;
undefined
> const b = 20;
undefined
> a + b
30
> console.log("Hello Telugu Devs!");
Hello Telugu Devs!
undefined

```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: Node.js అనేది ఒక Programming Language ఆ లేదా Framework ఆ?**
>
> - **Answer:** రెండూ కాదు! Node.js అనేది ఒక **Runtime Environment**. ఇది JavaScript కోడ్‌ని బ్రౌజర్ బయట రన్ చేయడానికి సహాయపడే ఒక ప్లాట్‌ఫారమ్.

> **Q2: Node.js Single-threaded అంటున్నారు కదా, మరి Heavy CPU-intensive పనులు (ఉదాహరణకు: Video Processing లేదా Big Calculations) వస్తే Node.js హ్యాండిల్ చేయగలదా?**
>
> - **Answer:** సాధారణంగా Node.js దీనికి సెట్ అవ్వదు. ఎందుకంటే Heavy Calculation వస్తే ఆ ఒక్క థ్రెడ్ బ్లాక్ అయిపోతుంది, మిగతా రిక్వెస్ట్‌లు ఆగాల్సి వస్తుంది. అయితే, దీనిని సాల్వ్ చేయడానికి Node.js లో **Worker Threads** మరియు **Cluster Module** అనే కాన్సెప్ట్స్ ఉన్నాయి (వీటిని ముందు ముందు నేర్చుకుంటాం).

---

# 2. JavaScript Runtime

రెండూ చాప్టర్‌లోకి స్వాగతం! ఈ చాప్టర్ Node.js యొక్క **Core Runtime** మరియు **Asynchronous Execution Order (టాస్క్‌లు ఏ ఆర్డర్‌లో రన్ అవుతాయి)** ని అర్థం చేసుకోవడానికి చాలా చాలా ముఖ్యం. ఇంటర్వ్యూలలో కన్ఫ్యూజ్ చేయడానికి ఎక్కువగా అడిగే టాపిక్స్ ఇవే.

వీటన్నింటినీ సులువుగా, ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Global Objects (గ్లోబల్ ఆబ్జెక్ట్స్)

బ్రౌజర్‌లో మనకు `window` ఆబ్జెక్ట్ ఎలాగో, Node.js లో `global` ఆబ్జెక్ట్ అలాగ. మనం ఏ ఫైల్‌లోనైనా `require()` లేదా `import` చేయకుండానే నేరుగా వాడుకోగలిగే వాటిని గ్లోబల్ ఆబ్జెక్ట్స్ అంటారు.

### 1.1 `global`

ఇది Node.js లో టాప్-లెవెల్ గ్లోబల్ స్కోప్ ఆబ్జెక్ట్.

- **ఉపయోగం:** మీరు ఒక వేరియబుల్‌ని అప్లికేషన్ మొత్తం ఎక్కడైనా వాడుకోవాలి అనుకుంటే దీనికి యాడ్ చేయవచ్చు (కానీ రియల్-టైమ్‌లో దీన్ని ఎక్కువగా వాడకూడదు, కోడ్ కన్ఫ్యూజ్ అవుతుంది).
- **ఉదాహరణ:** `global.myAppName = "My Node App";` అని ఇస్తే, ఏ ఫైల్ నుండి అయినా `myAppName` ని యాక్సెస్ చేయొచ్చు.

### 1.2 `process`

ఇది అత్యంత ముఖ్యమైన గ్లోబల్ ఆబ్జెక్ట్. ఇది ప్రస్తుతం రన్ అవుతున్న Node.js ప్రాసెస్ కి సంబంధించిన సమాచారాన్ని ఇస్తుంది మరియు దాన్ని కంట్రోల్ చేయడానికి వాడుతాం.

- `process.env`: మన అప్లికేషన్ యొక్క Environment Variables (API Keys, Database Credentials) ని రీడ్ చేయడానికి.
- `process.argv`: కమాండ్ లైన్ ద్వారా మనం పాస్ చేసే ఆర్గుమెంట్లను (Arguments) తీసుకోవడానికి.
- `process.exit()`: రన్ అవుతున్న Node.js అప్లికేషన్‌ను బలవంతంగా ఆపేయడానికి (Exit).

### 1.3 `__dirname`

ప్రస్తుతం మీరు కోడ్ రాస్తున్న ఫైల్ ఏ **ఫోల్డర్ (Directory)** లో ఉందో ఆ ఫోల్డర్ యొక్క Absolute Path ని ఇది ఇస్తుంది.

### 1.4 `__filename`

ప్రస్తుతం రన్ అవుతున్న **ఫైల్ యొక్క పూర్తి పేరుతో (File Name)** కూడిన Absolute Path ని ఇది ఇస్తుంది.

```javascript
// Example:
console.log("Folder Path: ", __dirname); // Output: /Users/project/src
console.log("File Path: ", __filename); // Output: /Users/project/src/app.js
```

---

## 2. Timers & Microtasks (టాస్క్ ఎగ్జిక్యూషన్ ఆర్డర్)

ఇక్కడే చాలా మంది డెవలపర్స్ కన్ఫ్యూజ్ అవుతారు. Node.js లో కోడ్ రన్ అవ్వడానికి ఒక ప్రత్యేకమైన ఆర్డర్ ఉంటుంది. దీనిని మనం **Event Loop Phases** అంటాం.

కింది ఫంక్షన్లన్నీ వేర్వేరు సమయాల్లో ఎగ్జిక్యూట్ అవుతాయి:

### 2.1 `setTimeout` & `setInterval`

- `setTimeout(callback, delay)`: ఇచ్చిన మిల్లీసెకన్ల (ms) సమయం ముగిసిన తర్వాత **ఒక్కసారి మాత్రమే** కాల్‌బ్యాక్ రన్ అవుతుంది.
- `setInterval(callback, delay)`: ప్రతి ఇచ్చిన మిల్లీసెకన్ల వ్యవధిలో **పదే పదే (Repeatedly)** కాల్‌బ్యాక్ రన్ అవుతూనే ఉంటుంది.

### 2.2 `setImmediate`

ఇది Node.js కి మాత్రమే ప్రత్యేకం (బ్రౌజర్‌లో ఉండదు). ప్రస్తుతం ఉన్న Event Loop ఫేజ్ లోని కోడ్ అంతా అయిపోయాక, **తర్వాతి చెక్ (Check) ఫేజ్ లో** వెంటనే రన్ అవ్వడానికి దీన్ని వాడుతాం.

### 2.3 `process.nextTick()`

ఇది చాలా పవర్‌ఫుల్. ప్రస్తుతం రన్ అవుతున్న ఆపరేషన్ ముగిసిన వెంటనే (Event Loop తర్వాతి ఫేజ్ కి వెళ్ళక ముందే) ఈ కాల్‌బ్యాక్ రన్ అయిపోవాలి అని Node.js కి చెప్తుంది. **దీనికి అన్నింటికంటే ఎక్కువ ప్రయారిటీ (Highest Priority) ఉంటుంది.**

### 2.4 `queueMicrotask()`

ఇది JavaScript ప్రామిసెస్ (`Promise.resolve()`) లాంటిది. ఇది కూడా `process.nextTick()` లాగే మైక్రోటాస్క్ క్యూ (Microtask Queue) లోకి వెళ్తుంది. అయితే `process.nextTick()` రన్ అయిన తర్వాత మాత్రమే `queueMicrotask()` రన్ అవుతుంది.

---

## 🏎️ దేనికి ఎంత ప్రయారిటీ ఉంటుంది? (Execution Order)

Node.js లో సింక్రోనస్ (Synchronous - మామూలు లైన్ బై లైన్ కోడ్) అంతా రన్ అయిపోయాక, అసింక్రోనస్ కోడ్ ఈ క్రింది ఆర్డర్‌లో రన్ అవుతుంది:

1. **`process.nextTick()`** (అత్యంత వేగంగా రన్ అవుతుంది - Top Priority)
2. **`queueMicrotask()`** / Promises
3. **`setTimeout` / `setInterval**` (Timers)
4. **`setImmediate`** (Check Phase)

### 💻 ప్రాక్టికల్ కోడ్ ఎగ్జాంపుల్:

ఈ క్రింది కోడ్ రాసి రన్ చేస్తే అవుట్‌పుట్ ఏ ఆర్డర్‌లో వస్తుందో గమనించండి:

```javascript
console.log("1. Synchronous - Start");

setTimeout(() => {
  console.log("2. setTimeout (Timer)");
}, 0);

setImmediate(() => {
  console.log("3. setImmediate");
});

queueMicrotask(() => {
  console.log("4. queueMicrotask");
});

process.nextTick(() => {
  console.log("5. process.nextTick");
});

console.log("6. Synchronous - End");
```

### 📋 Output (అవుట్‌పుట్):

```text
1. Synchronous - Start
6. Synchronous - End
5. process.nextTick
4. queueMicrotask
2. setTimeout (Timer)
3. setImmediate

```

_గమనిక:_ `setTimeout(..., 0)` మరియు `setImmediate` ల ఆర్డర్ కొన్నిసార్లు అవి పిలిచే సందర్భాన్ని బట్టి (I/O Cycle లో ఉన్నాయా లేదా అనేదానిపై) మారవచ్చు, కానీ `nextTick` ఎప్పుడూ ముందే ఉంటుంది.

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `process.nextTick()` కి మరియు `setImmediate()` కి మధ్య తేడా ఏంటి?**
>
> - **Answer:** `process.nextTick()` అనేది ప్రస్తుత ఆపరేషన్ పూర్తయిన వెంటనే, ఈవెంట్ లూప్ తర్వాతి ఫేజ్‌కి వెళ్ళకముందే రన్ అవుతుంది (Fastest). `setImmediate()` అనేది ఈవెంట్ లూప్ యొక్క తర్వాతి రౌండ్ (Check Phase) లో రన్ అవుతుంది.

> **Q2: `process.nextTick()` ని విచ్చలవిడిగా వాడితే ఏమవుతుంది?**
>
> - **Answer:** `process.nextTick()` కి హైయెస్ట్ ప్రయారిటీ ఉంటుంది కాబట్టి, మనం ఒకదాని వెనుక ఒకటి లూప్‌లో `nextTick` ని పిలుస్తూనే ఉంటే, ఈవెంట్ లూప్ తర్వాతి ఫేజ్ కి వెళ్ళలేదు. దీనివల్ల I/O ఆపరేషన్లు ఆగిపోయి సర్వర్ స్తంభించిపోతుంది (దీన్నే **I/O Starvation** అంటారు).

---

# 3. Modules

చాప్టర్ 3 కి స్వాగతం! Node.js లో **Modules (మొడ్యూల్స్)** అనేవి బిల్డింగ్ బ్లాక్స్ లాంటివి. ఒక పెద్ద ప్రాజెక్ట్ రాసేటప్పుడు కోడ్ అంతా ఒకే ఫైల్‌లో రాస్తే మెయింటైన్ చేయడం కష్టం. అందుకే కోడ్‌ని చిన్న చిన్న ముక్కలుగా (Files) విడదీసి, ఒక ఫైల్ కోడ్‌ని ఇంకో ఫైల్‌లో వాడుకోవడానికి Modules సిస్టమ్ ఉపయోగపడుతుంది.

ఈ చాప్టర్‌ను చాలా క్లియర్ గా, ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. CommonJS vs ES Modules (ESM)

Node.js లో ప్రధానంగా రెండు రకాల మొడ్యూల్ సిస్టమ్స్ ఉన్నాయి:

| ఫీచర్ (Feature)        | CommonJS (CJS)                                    | ES Modules (ESM)                                             |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| **పరిచయం**             | ఇది Node.js కి మొదటి నుండి ఉన్న డెఫాల్ట్ సిస్టమ్. | ఇది మోడరన్ JavaScript (ES6) స్టాండర్డ్ సిస్టమ్.              |
| **సింటాక్స్**          | `require()` మరియు `module.exports` వాడతాం.        | `import` మరియు `export` వాడతాం.                              |
| **కోడ్ లోడింగ్**       | Synchronous (లైన్ బై లైన్ లోడ్ అవుతుంది).         | Asynchronous (పారలల్ గా లోడ్ అవుతుంది).                      |
| **ఫైల్ ఎక్స్‌టెన్షన్** | `.js` లేదా `.cjs`                                 | `.mjs` (లేదా `package.json` లో `"type": "module"` పెట్టాలి). |

---

## 2. Import / Export ఎలా చేయాలి?

### 💻 2.1 CommonJS (CJS) విధానం:

```javascript
// math.js (Export చేయడం)
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

module.exports = { add, sub };

// app.js (Import చేయడం)
const { add, sub } = require("./math.js");
console.log(add(5, 3)); // 8
```

### 💻 2.2 ES Modules (ESM) విధానం:

_(గమనిక: దీన్ని వాడాలంటే మీ `package.json` లో `"type": "module"` అని రాయాలి)_

```javascript
// math.js (Export చేయడం)
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// app.js (Import చేయడం)
import { add, sub } = from './math.js';
console.log(add(5, 3)); // 8

```

---

## 3. Module Wrapper (మొడ్యూల్ వ్రాపర్) - Very Important In-depth Concept!

మీరు CommonJS లో కోడ్ రాసేటప్పుడు, Node.js మీ కోడ్‌ని నేరుగా రన్ చేయదు. బ్యాక్‌గ్రౌండ్‌లో మీ కోడ్ చుట్టూ ఒక సీక్రెట్ ఫంక్షన్ వ్రాపర్ (Wrapper) ని ఉంచుతుంది.

మీరు రాసే కోడ్ ఇలా ఉందనుకుందాం:

```javascript
console.log("Hello");
```

కానీ Node.js దాన్ని రన్ చేసేటప్పుడు ఇలా మారుస్తుంది:

```javascript
(function (exports, require, module, __filename, __dirname) {
  // మీ కోడ్ ఇక్కడికి వస్తుంది
  console.log("Hello");
});
```

- **దీనివల్ల లాభం ఏంటి?:** చాప్టర్ 2 లో మనం నేర్చుకున్న `__dirname`, `__filename`, `require` ఆబ్జెక్ట్స్ అన్నీ గ్లోబల్ అనుకుంటాం, కానీ నిజానికి అవి ఈ వ్రాపర్ ఫంక్షన్ యొక్క ఆర్గుమెంట్లు! దీనివల్ల ఒక ఫైల్‌లోని వేరియబుల్స్ ఇంకో ఫైల్‌లోకి కలవవు (Scoping ప్రైవేట్ గా ఉంటుంది).

---

## 4. Module Caching (మొడ్యూల్ క్యాషింగ్)

Node.js లో మీరు ఒక ఫైల్‌ని `require()` ద్వారా ఒకసారి లోడ్ చేస్తే, అది మెమొరీలో **Cache (సేవ్)** అయిపోతుంది.

- **ఎందుకు?:** మీరు అదే ఫైల్‌ని రెండోసారి, మూడోసారి `require` చేసినప్పుడు Node.js ఆ ఫైల్‌ని మళ్ళీ రీడ్ చేయదు. క్యాష్ లో ఉన్న డేటానే ఇచ్చేస్తుంది. దీనివల్ల అప్లికేషన్ పర్ఫార్మెన్స్ పెరుగుతుంది.
- **ఉదాహరణ:** ఒక డేటాబేస్ కనెక్షన్ ఫైల్ ఉందనుకోండి, దాన్ని ఎన్నిసార్లు ఇంపోర్ట్ చేసినా ఒకే కనెక్షన్ పూల్ వాడుకుంటుంది, కొత్తది క్రియేట్ అవ్వదు.

---

## 5. Types of Modules (మొడ్యూల్స్ రకాలు)

Node.js లో మూడు రకాల మొడ్యూల్స్ ఉంటాయి:

1. **Core Modules (ఇన్‌బిల్ట్ మొడ్యూల్స్):** Node.js ఇన్‌స్టాల్ చేసినప్పుడే ఇవి వచ్చేస్తాయి. మనం వీటిని డౌన్లోడ్ చేయనవసరం లేదు.

- ఉదాహరణకు: `fs` (File System), `path`, `http`, `os`.
- `const fs = require('fs');`

2. **Custom Modules (మనం రాసేవి):** మన అప్లికేషన్ కోసం మనం సొంతంగా క్రియేట్ చేసుకునే ఫైల్స్ (ఉదాహరణకు పైన చూసిన `math.js`).
3. **Third-Party Modules (బయటి మొడ్యూల్స్):** వేరే డెవలపర్స్ రాసినవి, మనం **NPM (Node Package Manager)** ద్వారా ఇన్‌స్టాల్ చేసుకుంటాం.

- ఉదాహరణకు: `express`, `mongoose`, `lodash`.

---

## 6. Package Exports (ప్యాకేజీ ఎక్స్‌పోర్ట్స్)

ఇది మోడరన్ Node.js ఫీచర్. మీరు ఒక NPM ప్యాకేజ్ లేదా పెద్ద లైబ్రరీని క్రియేట్ చేస్తున్నప్పుడు, బయటి వాళ్ళు మీ ప్యాకేజీలో ఏ ఫైల్స్ ని యాక్సెస్ చేయాలి, ఏవి చేయకూడదు అనేది `package.json` లోని `"exports"` ఫీల్డ్ ద్వారా కంట్రోల్ చేయవచ్చు.

```json
// package.json
{
  "name": "my-cool-library",
  "exports": {
    ".": "./src/main.js",
    "./feature": "./src/feature.js"
  }
}
```

ఇలా పెట్టడం వల్ల, యూజర్ `require('my-cool-library/feature')` అని మాత్రమే వాడగలరు. మీ ఇంటర్నల్ ఫైల్స్ స్ట్రక్చర్ బయటపడకుండా ఇది ఒక సెక్యూరిటీ లేయర్ లా పనిచేస్తుంది.

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: ES Modules (import) లోపల CommonJS (require) ని వాడొచ్చా?**
>
> - **Answer:** కుదరదు! మీరు `package.json` లో `"type": "module"` అని పెడితే, ఆ ప్రాజెక్ట్ లో `require()` వాడితే ఎర్రర్ (`ReferenceError: require is not defined`) వస్తుంది. అయితే, CommonJS ఫైల్స్ లోపల అసింక్రోనస్ గా `import()` (Dynamic Import) ని వాడవచ్చు.

> **Q2: Module Wrapper అంటే ఏంటి? అది ఎందుకు అవసరం?**
>
> - **Answer:** Node.js ప్రతి ఫైల్ కోడ్‌ని రన్ చేసేముందు ఒక ఇంటర్నల్ ఫంక్షన్ తో ర్యాప్ చేస్తుంది. దీనివల్ల ఆ ఫైల్ లోని వేరియబుల్స్ కి లోకల్ స్కోప్ లభిస్తుంది, మరియు `require`, `module`, `__dirname` వంటి ముఖ్యమైన ఆబ్జెక్ట్స్ ఆ ఫైల్‌కి అందుబాటులోకి వస్తాయి.

---

# 4. npm

చాప్టర్ 4 కి స్వాగతం! **NPM (Node Package Manager)** అనేది Node.js డెవలప్‌మెంట్‌లో ఒక గుండెకాయ లాంటిది. వేరే డెవలపర్స్ రాసిన కోడ్‌ను (Packages/Libraries) మన ప్రాజెక్ట్‌లో వాడుకోవడానికి, అలాగే మన ప్రాజెక్ట్ మేనేజ్‌మెంట్‌కు NPM చాలా ముఖ్యం.

దీనిలోని ప్రతి టాపిక్‌ను ఇన్-డెప్త్ గా మరియు ప్రాక్టికల్ గా అర్థం చేసుకుందాం.

---

## 1. package.json vs package-lock.json

ఈ రెండింటి మధ్య తేడా ఇంటర్వ్యూలలో కచ్చితంగా అడిగే ప్రశ్న.

### `package.json` (ప్రాజెక్ట్ మేనిఫెస్టో)

ఇది మీ ప్రాజెక్ట్ యొక్క ఐడెంటిటీ కార్డ్ లాంటిది. మీరు `npm init` అని టైప్ చేసినప్పుడు ఈ ఫైల్ క్రియేట్ అవుతుంది.

- **ఏముంటుంది?:** ప్రాజెక్ట్ పేరు, వర్షన్, డిస్క్రిప్షన్, మనం వాడే ప్యాకేజీల లిస్ట్ (`dependencies`), మరియు రన్ చేసే కమాండ్స్ (`scripts`).
- ఇందులో వర్షన్ నంబర్లు సుమారుగా ఉంటాయి (ఉదాహరణకు: `^1.2.3`).

### `package-lock.json` (ఖచ్చితమైన రికార్డ్)

మీరు మొదటి ప్యాకేజీని ఇన్‌స్టాల్ చేసినప్పుడు ఇది ఆటోమేటిక్‌గా జనరేట్ అవుతుంది.

- **ఏముంటుంది?:** మీ ప్రాజెక్ట్‌లో ఇన్‌స్టాల్ అయిన ప్రతి ప్యాకేజ్ మరియు వాటి సబ్-ప్యాకేజీల యొక్క **ఖచ్చితమైన (Exact) వర్షన్**, అవి ఎక్కడి నుండి డౌన్లోడ్ అయ్యాయి (URL), మరియు వాటి Integrity Hash ఉంటాయి.
- **ఎందుకు?:** మీ టీమ్‌లోని ఇంకొక డెవలపర్ లేదా ప్రొడక్షన్ సర్వర్‌లో `npm install` కొట్టినప్పుడు, అందరికీ 100% ఒకే రకమైన వర్షన్స్ ఇన్‌స్టాల్ అవ్వడానికి ఇది గ్యారెంటీ ఇస్తుంది. (దీన్ని మనం మాన్యువల్‌గా ఎప్పుడూ ఎడిట్ చేయకూడదు).

---

## 2. npm install (డిపెండెన్సీల రకాలు)

మనం ఒక ప్యాకేజీని ఇన్‌స్టాల్ చేసే విధానాన్ని బట్టి అది `package.json` లో వేర్వేరు చోట్లకు వెళ్తుంది:

- **`npm install <package-name>` (లేదా `-S` / `--save`):** ఇది డెఫాల్ట్ డిపెండెన్సీ. అప్లికేషన్ రన్ అవ్వడానికి ఇది కచ్చితంగా కావాలి (ఉదాహరణకు: `express`, `mongoose`). ఇవి `dependencies` లోకి వెళ్తాయి.
- **`npm install <package-name> --save-dev` (లేదా `-D`):** ఇవి కేవలం డెవలప్‌మెంట్ చేసేటప్పుడు (కోడ్ రాసేటప్పుడు) మాత్రమే అవసరం, ప్రొడక్షన్ సర్వర్‌లో అవసరం లేదు (ఉదాహరణకు: టెస్టింగ్ టూల్స్ `jest`, కోడ్ ఫార్మేటర్స్ `prettier`, లేదా `nodemon`). ఇవి `devDependencies` లోకి వెళ్తాయి.

---

## 3. Local vs Global Packages

| ఫీచర్                   | Local Packages (లోకల్)                                          | Global Packages (గ్లోబల్)                                                   |
| ----------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **ఇన్‌స్టాలేషన్**       | `npm install express`                                           | `npm install -g nodemon` (వీటికి `-g` వాడతాం).                              |
| **ఎక్కడ సేవ్ అవుతాయి?** | ప్రస్తుత ప్రాజెక్ట్ ఫోల్డర్‌లోని `node_modules` లో.             | మీ కంప్యూటర్ యొక్క మెయిన్ సిస్టమ్ డైరెక్టరీలో.                              |
| **ఎవరు వాడగలరు?**       | కేవలం ఆ ప్రాజెక్ట్ లోపల మాత్రమే `require` లేదా `import` చేయగలం. | మీ కంప్యూటర్ లోని ఏ ప్రాజెక్ట్ నుండి అయినా, Terminal నుండి నేరుగా వాడవచ్చు. |

---

## 4. Semantic Versioning (SemVer) - వెరీ ఇంపార్టెంట్!

NPM ప్యాకేజీల వర్షన్ నంబర్లు ఎప్పుడూ 3 అంకెలుగా ఉంటాయి. ఉదాహరణకు: `1.2.3`. దీని వెనుక ఒక పెద్ద అర్థం ఉంది:

$$\text{Version} = \text{MAJOR} . \text{MINOR} . \text{PATCH}$$

1. **PATCH (3):** బగ్స్ ఫిక్స్ చేసినప్పుడు (Bug Fixes) ఈ నంబర్ మారుస్తారు. మీ పాత కోడ్‌కి ఎలాంటి ఇబ్బంది ఉండదు.
2. **MINOR (2):** కొత్త ఫీచర్స్ యాడ్ చేసినప్పుడు, కానీ పాత కోడ్ యథావిధిగా పనిచేస్తుంది (Backward Compatible).
3. **MAJOR (1):** కోడ్‌ని పూర్తిగా మార్చేసినప్పుడు (Breaking Changes). పాత కోడ్ బ్రేక్ అయ్యే అవకాశం ఉంటుంది.

### `package.json` లో సింబల్స్ అర్థం:

- **Caret (`^1.2.3`):** "నాకు మేజర్ వర్షన్ `1` మారకూడదు, కానీ లేటెస్ట్ మైనర్/పాచ్ వర్షన్స్ ఇన్‌స్టాల్ చేసుకో" అని అర్థం (అంటే `1.5.0` వరకు వెళ్ళచ్చు).
- **Tilde (`~1.2.3`):** "నాకు మేజర్, మైనర్ మారకూడదు, కేవలం లేటెస్ట్ పాచ్ వర్షన్స్ మాత్రమే ఇన్‌స్టాల్ చేసుకో" అని అర్థం (అంటే `1.2.9` వరకు వెళ్ళచ్చు).

---

## 5. npm scripts

మన ప్రాజెక్ట్‌ను రన్ చేయడానికి లేదా బిల్డ్ చేయడానికి వాడే పెద్ద పెద్ద కమాండ్లను చిన్న షార్ట్‌కట్‌లుగా మార్చుకోవడానికి `package.json` లోని `"scripts"` బ్లాక్ ఉపయోగపడుతుంది.

```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}

```

- **రన్ చేయడం ఎలా?:** టెర్మినల్‌లో `npm run dev` లేదా `npm start` (start కి `run` అని టైప్ చేయకపోయినా నడుస్తుంది) అని ఇస్తే చాలు, ఆ స్క్రిప్ట్ రన్ అయిపోతుంది.

---

## 6. npx అంటే ఏమిటి? (npm vs npx)

npx అంటే **Node Package Execute**. ఇది NPM తో పాటే ఇన్-బిల్ట్ గా వస్తుంది.

- **సమస్య:** పూర్వం ఒక ప్యాకేజీని (ఉదాహరణకు `create-react-app`) రన్ చేయాలంటే, దాన్ని మన కంప్యూటర్ లో గ్లోబల్ గా ఇన్‌స్టాల్ చేయాల్సి వచ్చేది. అది మెమొరీని వేస్ట్ చేస్తుంది, పాత వర్షన్ లో ఉండిపోతుంది.
- **పరిష్కారం (npx):** `npx` ఏం చేస్తుందంటే, ఆ ప్యాకేజీని మీ కంప్యూటర్ లో పర్మనెంట్ గా ఇన్‌స్టాల్ చేయకుండా... క్లౌడ్ నుండి లేటెస్ట్ వర్షన్‌ను తాత్కాలికంగా డౌన్లోడ్ చేసి, ఎగ్జిక్యూట్ చేసి, ఆ తర్వాత డిలీట్ చేసేస్తుంది.
- **ఉదాహరణ:** `npx create-react-app my-app`

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: నా దగ్గర `package.json` ఉంది కానీ `node_modules` ఫోల్డర్ లేదు, నా అప్లికేషన్ రన్ అవుతుందా? నేను ఏం చేయాలి?**
>
> - **Answer:** రన్ అవ్వదు! ఎందుకంటే లైబ్రరీస్ అన్నీ `node_modules` లోనే ఉంటాయి. మీరు జస్ట్ టెర్మినల్ లో `npm install` (లేదా `npm i`) అని టైప్ చేస్తే, `package.json` ని చూసి NPM ఆటోమేటిక్ గా అన్ని ప్యాకేజీలను మళ్ళీ డౌన్లోడ్ చేస్తుంది.

> **Q2: `dependencies` కి మరియు `devDependencies` కి మధ్య ముఖ్యమైన తేడా ఏంటి?**
>
> - **Answer:** `dependencies` లో ఉన్న ప్యాకేజీలు అప్లికేషన్ లైవ్ (Production) లో రన్ అవ్వడానికి అవసరం. `devDependencies` లో ఉన్నవి కేవలం డెవలపర్ కోడ్ రాసేటప్పుడు, టెస్ట్ చేసేటప్పుడు మాత్రమే అవసరం (సర్వర్ లో ఇవి లోడ్ అవ్వవు, స్పేస్ సేవ్ అవుతుంది).

---

# 5. File System (fs)

చాప్టర్ 5 కి స్వాగతం! బ్యాకెండ్ డెవలప్‌మెంట్‌లో **File System (fs)** చాలా ముఖ్యమైన కాన్సెప్ట్. సర్వర్‌లో ఉన్న ఫైల్స్‌ను చదవడం (Read), రాయడం (Write), డిలీట్ చేయడం వంటి పనులన్నీ ఈ `fs` మొడ్యూల్ ద్వారానే చేస్తాం.

Node.js లో ఈ పనులను 3 రకాలుగా చేయవచ్చు:

1. **Sync (సింక్రోనస్ - Blocking)**
2. **Async (అసింక్రోనస్ - Non-blocking - Callbacksలతో)**
3. **Promises API (అసింక్రోనస్ - Modern `async/await`తో)**

ఇంటర్వ్యూల పరంగా మరియు రియల్-టైమ్ కోడింగ్ పరంగా **Promises API** ని వాడటం ఉత్తమం. మనం వాటన్నింటినీ ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Async vs Sync (తేడా ఏంటి?)

- **Sync (e.g., `readFileSync`):** ఒక ఫైల్ 1GB ఉందనుకుంటే, అది పూర్తిగా రీడ్ అయ్యేదాకా కోడ్ అక్కడే ఆగిపోతుంది (Block అవుతుంది). దీనివల్ల సర్వర్‌కి వచ్చే మిగతా రిక్వెస్ట్‌లు ఆగిపోతాయి. అందుకే దీన్ని రియల్-టైమ్‌లో వాడకూడదు.
- **Async (e.g., `readFile` / Promises):** ఫైల్ రీడ్ అయ్యే పనిని బ్యాక్‌గ్రౌండ్‌కి అప్పజెప్పి, కింద ఉన్న కోడ్‌ని రన్ చేసుకుంటూ వెళ్ళిపోతుంది. ఫైల్ రీడ్ అవ్వడం పూర్తి కాగానే రిజల్ట్ ఇస్తుంది.

---

## 2. Promises API తో ఫైల్ ఆపరేషన్స్ (Modern & Recommended Approach)

ఈ పద్ధతిలో కోడ్ క్లీన్ గా ఉంటుంది. దీన్ని వాడాలంటే `node:fs/promises` ని ఇంపోర్ట్ చేసుకోవాలి.

### 2.1 Read Files (ఫైల్ చదవడం)

ఫైల్ లోని డేటాని చదవడానికి `readFile()` వాడుతాం. ఇందులో రెండో ఆర్గుమెంట్‌గా `'utf8'` ఇవ్వడం ముఖ్యం, లేదంటే డేటా మనుషులకు అర్థంకాని **Buffer (Binary)** ఫార్మాట్‌లో వస్తుంది.

```javascript
import fs from "node:fs/promises";

async function readFileExample() {
  try {
    const data = await fs.readFile("sample.txt", "utf8");
    console.log("File Data:", data);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}
readFileExample();
```

### 2.2 Write, Append & Delete (రాయడం, యాడ్ చేయడం, డిలీట్ చేయడం)

- **`writeFile()`**: కొత్త ఫైల్ క్రియేట్ చేసి డేటా రాస్తుంది. ఒకవేళ ఆ ఫైల్ ముందే ఉంటే, పాత డేటాని తీసేసి (Overwrite) కొత్త డేటా రాస్తుంది.
- **`appendFile()`**: పాత డేటాని అలాగే ఉంచి, చివర్లో కొత్త డేటాని యాడ్ చేస్తుంది.
- **`unlink()`**: ఫైల్‌ను డిలీట్ చేయడానికి దీన్ని వాడుతాం.

```javascript
async function fileOperations() {
  try {
    // 1. Write
    await fs.writeFile("log.txt", "Hello World!\n");

    // 2. Append
    await fs.appendFile("log.txt", "New Log Line Added.\n");

    // 3. Delete (టెస్ట్ చేయాలంటే కింద లైన్ అన్‌కమెంట్ చేయండి)
    // await fs.unlink('log.txt');

    console.log("Operations completed successfully!");
  } catch (err) {
    console.error(err);
  }
}
fileOperations();
```

### 2.3 Rename & Copy (పేరు మార్చడం, కాపీ చేయడం)

- **`rename(oldPath, newPath)`**: ఫైల్ పేరు మార్చడానికి లేదా ఒక ఫోల్డర్ నుండి ఇంకో ఫోల్డర్ లోకి మూవ్ (Move) చేయడానికి వాడుతాం.
- **`copyFile(source, destination)`**: ఫైల్‌ను కాపీ చేయడానికి.

```javascript
async function moveAndCopy() {
  try {
    await fs.rename("log.txt", "archive-log.txt"); // Rename
    await fs.copyFile("archive-log.txt", "backup.txt"); // Copy
    console.log("Rename & Copy Done!");
  } catch (err) {
    console.error(err);
  }
}
```

---

## 3. Directories (ఫోల్డర్స్ క్రియేట్ చేయడం & చదవడం)

- **`mkdir()`**: కొత్త ఫోల్డర్ క్రియేట్ చేయడానికి. ఒకవేళ ఫోల్డర్ లోపల ఇంకో ఫోల్డర్ ఒకేసారి క్రియేట్ చేయాలంటె `{ recursive: true }` పెట్టాలి.
- **`readdir()`**: ఒక ఫోల్డర్ లోపల ఏమేం ఫైల్స్ ఉన్నాయో లిస్ట్ చూడటానికి.

```javascript
async function directoryOperations() {
  try {
    // Create folder structure: myFolder/subFolder
    await fs.mkdir("myFolder/subFolder", { recursive: true });

    // Read folder contents
    const files = await fs.readdir("myFolder");
    console.log("Files inside myFolder:", files); // Output: ['subFolder']
  } catch (err) {
    console.error(err);
  }
}
directoryOperations();
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `fs.readFile('file.txt')` అని పిలిచినప్పుడు `'utf8'` ఇవ్వకపోతే ఏమవుతుంది?**
>
> - **Answer:** Node.js డేటాని ఒక **Buffer Object** (Raw Binary Data) లాగా రిటర్న్ చేస్తుంది. మనకు టెక్స్ట్ ఫార్మాట్‌లో కావాలి కాబట్టి ఆ బైనరీ డేటాని క్యారెక్టర్స్ లా మార్చడానికి `'utf8'` ఎన్‌కోడింగ్ ఖచ్చితంగా ఇవ్వాలి. లేదా వచ్చిన రిజల్ట్‌ని `.toString()` చేయాలి.

> **Q2: ఒక పెద్ద ఫైల్ (ఉదాహరణకు 5GB File) ని చదవడానికి `fs.readFile()` వాడటం మంచిదేనా?**
>
> - **Answer:** అస్సలు మంచిది కాదు! ఎందుకంటే `fs.readFile()` ఆ 5GB డేటాను పూర్తిగా సర్వర్ యొక్క RAM (Memory) లోకి లోడ్ చేయడానికి ప్రయత్నిస్తుంది. దీనివల్ల RAM సరిపోక సర్వర్ క్రాష్ అయిపోతుంది (`V8 heap out of memory` ఎర్రర్ వస్తుంది). ఇలాంటి పెద్ద ఫైల్స్ కోసం మనం **Streams (`fs.createReadStream`)** వాడాలి (దీని గురించి ముందు ముందు నేర్చుకుంటాం).

---

# 6. Path Module

చాప్టర్ 6 కి స్వాగతం! Node.js లో **Path Module** అనేది చాలా సింపుల్, కానీ అంతే ముఖ్యమైన కోర్ మొడ్యూల్.

**ఎందుకు వాడతాం?:** విండోస్ (Windows) ఆపరేటింగ్ సిస్టమ్‌లో ఫోల్డర్ల దారులు బ్యాక్‌స్లాష్ (`\`) తో ఉంటాయి (e.g., `C:\users\projects`), అదే లైనక్స్ (Linux) లేదా మ్యాక్ (macOS) లో ఫార్వర్డ్ స్లాష్ (`/`) తో ఉంటాయి (e.g., `usr/projects`). మన అప్లికేషన్ అన్ని కంప్యూటర్లలో సరిగ్గా పని చేయాలంటే, ఫైల్ పాత్‌లను మాన్యువల్‌గా కాకుండా ఈ `path` మొడ్యూల్ ఉపయోగించి హ్యాండిల్ చేయాలి.

దీనిలోని ముఖ్యమైన ఫంక్షన్లను ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. `path.join()` vs `path.resolve()` (ఇంటర్వ్యూలలో కచ్చితంగా అడిగే ప్రశ్న)

ఈ రెండూ పాత్‌లను కలపడానికి ఉపయోగపడతాయి, కానీ వీటి మధ్య ఒక పెద్ద తేడా ఉంది:

### `path.join(...paths)`

ఇది కేవలం మీరు ఇచ్చిన ముక్కలన్నింటినీ తీసుకుని, మీ ఆపరేటింగ్ సిస్టమ్‌కి తగ్గట్టుగా స్లాష్‌లు పెట్టి **జస్ట్ ఒక పాత్‌లా కలుపుకుంటూ వెళ్తుంది**.

```javascript
import path from "node:path";

const result1 = path.join("users", "local", "config.json");
console.log("join:", result1);
// Output (on Mac/Linux): users/local/config.json
// Output (on Windows): users\local\config.json
```

### `path.resolve(...paths)`

ఇది చాలా ఇంటెలిజెంట్. ఇది మీరు ఇచ్చిన ముక్కలను కలుపుకుంటూ... ప్రస్తుత మీ ప్రాజెక్ట్ రూట్ ఫోల్డర్ (Current Working Directory) ని బేస్ చేసుకుని ఒక **Absolute Path (పూర్తి చిరునామా - Root నుండి ఉండే పాత్)** ని క్రియేట్ చేస్తుంది.

```javascript
const result2 = path.resolve("users", "local", "config.json");
console.log("resolve:", result2);
// Output: /Users/username/my-project/users/local/config.json (పూర్తి పాత్ వస్తుంది)
```

---

## 2. ఫైల్ మరియు ఫోల్డర్ వివరాలు తెలుసుకోవడం

మీ దగ్గర ఒక పెద్ద పాత్ ఉందనుకోండి: `/users/admin/docs/resume.pdf`

### 2.1 `path.basename(path)`

ఆ పాత్ చివర్లో ఉన్న **ఫైల్ పేరును** మాత్రమే ఇస్తుంది.

```javascript
console.log(path.basename("/users/admin/docs/resume.pdf"));
// Output: resume.pdf
```

### 2.2 `path.dirname(path)`

ఆ ఫైల్ ఏ **ఫోల్డర్ లో ఉందో** ఆ ఫోల్డర్ పాత్ ని ఇస్తుంది.

```javascript
console.log(path.dirname("/users/admin/docs/resume.pdf"));
// Output: /users/admin/docs
```

### 2.3 `path.extname(path)`

ఆ ఫైల్ యొక్క **ఎక్స్‌టెన్షన్ (Extension)** ని మాత్రమే ఇస్తుంది.

```javascript
console.log(path.extname("/users/admin/docs/resume.pdf"));
// Output: .pdf
```

---

## 3. క్లీనప్ మరియు కన్వర్షన్స్

### 3.1 `path.normalize(path)`

కొన్నిసార్లు మనం పాత్‌లు రాసేటప్పుడు తెలియకుండా ఎక్కువ స్లాష్‌లు లేదా `..` (డబుల్ డాట్స్) పెడుతుంటాం. వాటిని సరిచేసి (Normalize) క్లీన్ పాత్‌ను ఇది ఇస్తుంది.

```javascript
const dirtyPath = "/users/admin//docs/../photos";
console.log(path.normalize(dirtyPath));
// Output: /users/admin/photos (ఇది 'docs' లోపలికి వెళ్లి మళ్ళీ '..' వల్ల వెనక్కి వచ్చి క్లీన్ గా మార్చింది)
```

### 3.2 `path.parse(path)` & `path.format(pathObject)`

- **`parse()`:** ఒక పాత్ స్ట్రింగ్‌ను తీసుకుని, దాని ముక్కలన్నింటినీ (root, dir, base, ext, name) ఒక **Object** లాగా విడగొట్టి ఇస్తుంది.
- **`format()`:** `parse()` కి రివర్స్. ఒక Object ని తీసుకుని మళ్ళీ **String Path** లాగా మారుస్తుంది.

```javascript
const myPath = "/users/admin/docs/resume.pdf";

// String to Object
const parsed = path.parse(myPath);
console.log(parsed);
/* Output:
{
  root: '/',
  dir: '/users/admin/docs',
  base: 'resume.pdf',
  ext: '.pdf',
  name: 'resume'
}
*/

// Object to String
const formatted = path.format(parsed);
console.log(formatted); // Output: /users/admin/docs/resume.pdf
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `path.join()` కి మరియు `path.resolve()` కి మధ్య ఉన్న ముఖ్యమైన తేడా ఏంటి?**
>
> - **Answer:** `path.join()` అనేది మనం ఇచ్చిన పాత్ ముక్కలను కేవలం ఒకదానికొకటి జాయిన్ చేస్తుంది (Relative Path ఇవ్వొచ్చు). కానీ `path.resolve()` ఎల్లప్పుడూ మన ప్రస్తుత వర్కింగ్ డైరెక్టరీ (`process.cwd()`) ని బేస్ చేసుకుని ఒక పూర్తి రూట్ డైరెక్టరీతో కూడిన Absolute Path ని మాత్రమే రిటర్న్ చేస్తుంది.

> **Q2: విండోస్ లో రాసిన నా కోడ్ లైనక్స్ సర్వర్ లో రన్ చేసినప్పుడు పాత్ స్లాష్‌ల వల్ల ఎర్రర్ రాకుండా ఉండాలంటే ఏం చేయాలి?**
>
> - **Answer:** మనం ఎక్కడా కూడా స్ట్రింగ్స్ రూపంలో `'/src/files'` అని స్లాష్‌లను హార్డ్ కోడ్ చేయకూడదు. ఎల్లప్పుడూ `path.join(__dirname, 'src', 'files')` లాంటి పద్ధతినే వాడాలి. ఇలా చేస్తే Node.js ఏ ఆపరేటింగ్ సిస్టమ్ ఉంటే దానికి తగ్గట్టుగా స్లాష్‌లను ఆటోమేటిక్‌గా మార్చుకుంటుంది.

---

# 7. OS Module

చాప్టర్ 7 కి స్వాగతం! **OS (Operating System) Module** అనేది Node.js లోని మరొక పవర్‌ఫుల్ కోర్ మొడ్యూల్.

**ఎందుకు వాడతాం?:** మన Node.js అప్లికేషన్ రన్ అవుతున్న కంప్యూటర్ లేదా సర్వర్ (Windows, Linux, or Mac) యొక్క హార్డ్‌వేర్ వివరాలను తెలుసుకోవడానికి ఇది ఉపయోగపడుతుంది. ఉదాహరణకు: సర్వర్‌లో ఎంత RAM ఖాళీగా ఉంది? CPU సామర్థ్యం ఎంత? సర్వర్ ఎన్ని గంటల నుండి ఆన్ లో ఉంది? వంటి లైవ్ వివరాలను మనం ఈ మొడ్యూల్ ద్వారా ట్రాక్ చేయవచ్చు.

దీనిలోని ముఖ్యమైన ఫంక్షన్లను ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. OS Module యొక్క ముఖ్యమైన ఫంక్షన్స్

దీన్ని వాడటానికి మనం `node:os` మొడ్యూల్‌ని ఇంపోర్ట్ చేసుకోవాలి.

### 1.1 CPU Details (`os.cpus()`)

ఇది మీ కంప్యూటర్‌లో ఉన్న CPU కోర్స్ (Cores) ఎన్ని ఉన్నాయో, వాటి మోడల్ ఏంటి, మరియు అవి ఎంత స్పీడ్ (Clock Speed) తో రన్ అవుతున్నాయో ఒక Array ఆఫ్ Objects రూపంలో ఇస్తుంది.

```javascript
import os from "node:os";

const cpus = os.cpus();
console.log(`Total CPU Cores: ${cpus.length}`);
console.log("CPU Model:", cpus[0].model);
```

### 1.2 Memory Details (`os.totalmem()` & `os.freemem()`)

సర్వర్ యొక్క రామ్ (RAM) వివరాలను తెలుసుకోవడానికి ఇవి ఉపయోగపడతాయి. ఇవి ఇచ్చే వాల్యూస్ **Bytes** లలో ఉంటాయి. మనకు అర్థం కావడానికి వీటిని **GB** లేదా **MB** లలోకి మార్చుకోవాలి.

- `os.totalmem()`: కంప్యూటర్ లోని మొత్తం RAM సైజ్.
- `os.freemem()`: ప్రస్తుతం ఖాళీగా (Available) ఉన్న RAM సైజ్.

```javascript
const totalMemory = os.totalmem() / (1024 * 1024 * 1024); // Bytes to GB
const freeMemory = os.freemem() / (1024 * 1024 * 1024); // Bytes to GB

console.log(`Total RAM: ${totalMemory.toFixed(2)} GB`);
console.log(`Free RAM: ${freeMemory.toFixed(2)} GB`);
```

### 1.3 Hostname (`os.hostname()`)

ఆపరేటింగ్ సిస్టమ్ లేదా ఆ సర్వర్ యొక్క నెట్‌వర్క్ పేరు (Hostname) ని ఇది రిటర్న్ చేస్తుంది.

```javascript
console.log("Server Hostname:", os.hostname()); // e.g., "My-MacBook-Pro"
```

### 1.4 Platform & Architecture (`os.platform()` & `os.arch()`)

- `os.platform()`: ఆపరేటింగ్ సిస్టమ్ బేస్ ఏంటో చెప్తుంది. (e.g., Windows కి `win32`, Mac కి `darwin`, Linux కి `linux`).
- `os.arch()`: CPU యొక్క ఆర్కిటెక్చర్ ని చెప్తుంది (e.g., `x64` లేదా `arm64`).

```javascript
console.log("OS Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
```

### 1.5 Uptime (`os.uptime()`)

మీ కంప్యూటర్ లేదా సర్వర్ ఆన్ చేసినప్పటి నుండి ఇప్పటివరకు **ఎన్ని సెకన్లు** నిరంతరాయంగా రన్ అవుతుందో (Uptime) ఆ సమయాన్ని ఇది ఇస్తుంది.

```javascript
const uptimeInHours = os.uptime() / 3600; // Seconds to Hours
console.log(`Server Uptime: ${uptimeInHours.toFixed(2)} hours`);
```

---

## 💻 పూర్తి కోడ్ ఎగ్జాంపుల్ (Dashboard Metrics):

రియల్-టైమ్‌లో సర్వర్ హెల్త్ చెక్ చేయడానికి ఈ కోడ్ ముక్కను వాడుతుంటారు:

```javascript
import os from "node:os";

function checkServerHealth() {
  const freeRAMPercentage = (os.freemem() / os.totalmem()) * 100;

  console.log("--- SERVER HEALTH DASHBOARD ---");
  console.log(`OS: ${os.type()} (${os.platform()})`);
  console.log(`Available RAM: ${freeRAMPercentage.toFixed(2)}%`);

  if (freeRAMPercentage < 10) {
    console.log("⚠️ WARNING: Server is running low on memory!");
  } else {
    console.log("✅ Server memory state is healthy.");
  }
}

checkServerHealth();
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: Node.js లో `os` మొడ్యూల్ రియల్-టైమ్ ప్రాజెక్ట్స్‌లో ఎక్కడైనా వాడతారా?**
>
> - **Answer:** ఖచ్చితంగా వాడతారు! ముఖ్యంగా **"Server Monitoring Dashboard"** లు తయారు చేయడానికి, లేదా మీ సిస్టమ్ లోని CPU కోర్స్ సంఖ్యను బట్టి లోడ్‌ని డివైడ్ చేయడానికి (Node.js Cluster Module వాడేటప్పుడు `os.cpus().length` ని బట్టి అన్ని చైల్డ్ ప్రాసెస్‌లను క్రియేట్ చేస్తారు).

> **Q2: `os.freemem()` కి మరియు `os.totalmem()` కి వచ్చే అవుట్‌పుట్ యూనిట్స్ ఏంటి?**
>
> - **Answer:** ఇవి ఇచ్చే అవుట్‌పుట్ ఎల్లప్పుడూ **Bytes** లలోనే ఉంటుంది. దాన్ని కిలోబైట్స్ (KB), మెగాబైట్స్ (MB), లేదా గిగాబైట్స్ (GB) లోకి మార్చడానికి మనం `1024` తో భాగించాల్సి ఉంటుంది.

---

# 8. Events

చాప్టర్ 8 కి స్వాగతం! Node.js యొక్క అసలైన బలం **Event-driven Architecture** లోనే ఉంది. ఒక వెబ్‌సైట్‌లో యూజర్ బటన్ క్లిక్ చేసినప్పుడు ఒక యాక్షన్ జరిగినట్టే, బ్యాకెండ్‌లో కూడా "ఒక పని జరిగింది" అని సిగ్నల్ ఇవ్వడానికి, దానికి రెస్పాండ్ అవ్వడానికి ఈ **Events** కాన్సెప్ట్ ఉపయోగపడుతుంది.

Node.js లో దీనికోసం ఇన్‌బిల్ట్ గా **`events`** అనే మొడ్యూల్ మరియు **`EventEmitter`** అనే ఒక క్లాస్ ఉన్నాయి. వీటి గురించి ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. EventEmitter అంటే ఏమిటి?

`EventEmitter` అనేది ఒక క్లాస్. దీని ద్వారా మనం సొంతంగా ఈవెంట్లను సృష్టించవచ్చు (**Emit**), మరియు ఆ ఈవెంట్ జరిగినప్పుడు ఏం చేయాలో కూడా రాయవచ్చు (**Listen**).

- **Emit (ట్రిగ్గర్ చేయడం):** ఒక సంఘటన జరిగింది అని అనౌన్స్ చేయడం (ఉదాహరణకు: "డబ్బులు ట్రాన్స్‌ఫర్ అయ్యాయి").
- **Listen (వినడం/రెస్పాండ్ అవ్వడం):** ఆ సంఘటన జరిగినప్పుడు ఒక పని చేయడం (ఉదాహరణకు: "యూజర్‌కి ఎస్సెమ్మెస్ పంపడం").

---

## 2. Custom Events & Event Listeners (ఎలా క్రియేట్ చేయాలి?)

కస్టమ్ ఈవెంట్‌ను క్రియేట్ చేయడానికి `on()` మరియు `emit()` అనే రెండు ముఖ్యమైన మెథడ్స్ వాడతాం.

```javascript
import { EventEmitter } from "node:events";

// 1. EventEmitter ఆబ్జెక్ట్‌ని క్రియేట్ చేయాలి
const myEmitter = new EventEmitter();

// 2. Event Listener ని సెట్ చేయాలి (on వాడి)
// 'userRegistration' అనేది మన కస్టమ్ ఈవెంట్ పేరు
myEmitter.on("userRegistration", (username) => {
  console.log(`📩 Sending welcome email to ${username}...`);
});

myEmitter.on("userRegistration", (username) => {
  console.log(`📊 Updating analytics: ${username} just joined!`);
});

// 3. Event ని ట్రిగ్గర్ చేయాలి (emit వాడి)
console.log("Starting registration process...");
myEmitter.emit("userRegistration", "Rahul");
```

### 📋 Output:

```text
Starting registration process...
📩 Sending welcome email to Rahul...
📊 Updating analytics: Rahul just joined!

```

> 💡 **గమనిక:** ఒకే ఈవెంట్‌కి మనం ఎన్ని లిజనర్స్ (Listeners) అయినా రాసుకోవచ్చు. `emit()` చేసినప్పుడు అవన్నీ ఒకదాని తర్వాత ఒకటి వరుసగా (Synchronously) రన్ అవుతాయి.

---

## 3. `once()` Listeners (ఒక్కసారి మాత్రమే వినేవి)

సాధారణంగా `on()` పెడితే, మీరు ఎన్నిసార్లు `emit()` చేస్తే అన్నిసార్లు ఆ కోడ్ రన్ అవుతుంది. కానీ, ఒక ఈవెంట్ **మొదటిసారి జరిగినప్పుడు మాత్రమే** కోడ్ రన్ అవ్వాలి, రెండోసారి `emit` చేస్తే పట్టించుకోకూడదు అనుకుంటే **`once()`** వాడాలి.

```javascript
const paymentEmitter = new EventEmitter();

paymentEmitter.once("couponApplied", () => {
  console.log("🎟️ 50% Discount Applied! (Only once per session)");
});

// ట్రిగ్గర్ చేస్తున్నాం
paymentEmitter.emit("couponApplied"); // రన్ అవుతుంది
paymentEmitter.emit("couponApplied"); // రన్ అవ్వదు (ఇగ్నోర్ అవుతుంది)
```

---

## 4. Removing Listeners (లిజనర్లను తీసేయడం)

కొన్నిసార్లు ఒక ఈవెంట్ వినడం ఇక చాలు అనుకున్నప్పుడు మెమొరీ వేస్ట్ అవ్వకుండా ఉండటానికి ఆ లిజనర్‌ను తీసేయవచ్చు (**`removeListener`** లేదా **`off`** వాడి).

> ⚠️ **ముఖ్యమైన నియమం:** ఒక లిజనర్‌ను తీసేయాలంటే, మనం `on()` లో రాసే కాల్‌బ్యాక్ ఫంక్షన్‌కు ఒక పేరు ఉండాలి (Anonymous function అయితే తీసేయడం కుదరదు).

```javascript
const chatEmitter = new EventEmitter();

// ఫంక్షన్‌కి పేరు పెట్టాం
function logMessage(msg) {
  console.log(`New Message: ${msg}`);
}

// లిజనర్ యాడ్ చేశాం
chatEmitter.on("message", logMessage);

chatEmitter.emit("message", "Hello!"); // ప్రింట్ అవుతుంది

// ఇప్పుడు లిజనర్ తీసేస్తున్నాం
chatEmitter.off("message", logMessage);

chatEmitter.emit("message", "How are you?"); // ఇది ప్రింట్ అవ్వదు, ఎందుకంటే లిజనర్ డిలీట్ అయిపోయింది!
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: Node.js లో ఒక ఈవెంట్‌కి మాక్సిమం ఎన్ని లిజనర్స్ యాడ్ చేయవచ్చు? ఒకవేళ ఆ లిమిట్ దాటితే ఏమవుతుంది?**
>
> - **Answer:** డెఫాల్ట్‌గా ఒక ఈవెంట్‌కి **10 లిజనర్స్** మాత్రమే యాడ్ చేయవచ్చు. ఆ లిమిట్ దాటితే Node.js ఒక వోర్నింగ్ (`MaxListenersExceededWarning`) ఇస్తుంది (మెమొరీ లీక్ అవ్వకుండా చూడటానికి). ఒకవేళ మనకు అంతకంటే ఎక్కువ కావాలంటే `myEmitter.setMaxListeners(20)` అని లిమిట్ పెంచుకోవచ్చు.

> **Q2: Node.js లో 'error' అనే ఈవెంట్ కి ఉన్న ప్రత్యేకత ఏంటి?**
>
> - **Answer:** `EventEmitter` లో `error` అనేది ఒక స్పెషల్ ఈవెంట్. మీ అప్లికేషన్‌లో ఏదైనా ఎర్రర్ వచ్చి మీరు `emit('error', new Error('Something went wrong'))` అని అన్నప్పుడు... దానికి కనుక `on('error', ...)` లిజనర్ లేకపోతే, **Node.js అప్లికేషన్ అక్కడికక్కడే క్రాష్ (Exit) అయిపోతుంది**. అందుకే ప్రతి ఈవెంట్ ఎమిటర్‌కి ఎర్రర్ హ్యాండ్లింగ్ లిజనర్ కచ్చితంగా రాయాలి.

---

# 9. Buffers

చాప్టర్ 9 కి స్వాగతం! **Buffers (బఫర్స్)** అనేది Node.js లో చాలా లోతైన (Low-level) మరియు అత్యంత ముఖ్యమైన కాన్సెప్ట్. సాధారణంగా JavaScript కి బైనరీ డేటా (Binary Data - 0s and 1s) తో నేరుగా డీల్ చేయడం తెలియదు. కానీ సర్వర్ లెవెల్‌లో మనం ఇమేజ్ ఫైల్స్, ఆడియో ఫైల్స్ చదివినా, లేదా నెట్‌వర్క్ ద్వారా డేటా పంపినా అదంతా బైనరీ రూపంలోనే ఉంటుంది.

ఆ బైనరీ డేటాను స్టోర్ చేయడానికి మరియు మేనేజ్ చేయడానికి Node.js లో ఉపయోగించే ప్రత్యేకమైన మెమొరీ లేయర్ యే ఈ **Buffer**.

---

## 1. Creating Buffers (బఫర్లను ఎలా క్రియేట్ చేయాలి?)

బఫర్‌ను క్రియేట్ చేయడానికి మనం ఏ మొడ్యూల్‌ని ఇంపోర్ట్ చేయనవసరం లేదు, ఇది గ్లోబల్ ఆబ్జెక్ట్. దీని కోసం ప్రధానంగా 3 మెథడ్స్ ఉన్నాయి:

### 1.1 `Buffer.alloc(size)`

ఇది ఇచ్చిన సైజ్ (Bytes లో) తో ఒక ఖాళీ బఫర్‌ను క్రియేట్ చేస్తుంది. ఇది చాలా సేఫ్, ఎందుకంటే పాత డేటా ఏదీ లేకుండా మొత్తం జీరోస్ (`00`) తో క్లీన్ చేసి ఇస్తుంది.

```javascript
// 5 Bytes సైజ్ ఉన్న బఫర్
const buf1 = Buffer.alloc(5);
console.log(buf1); // Output: <Buffer 00 00 00 00 00> (Hexadecimal ఫార్మాట్ లో చూపిస్తుంది)
```

### 1.2 `Buffer.allocUnsafe(size)`

ఇది కూడా ఖాళీ బఫర్‌ను ఇస్తుంది, కానీ మెమొరీని జీరోస్‌తో క్లీన్ చేయదు. రామ్‌ (RAM) లో అప్పటికప్పుడు ఖాళీగా ఉన్న స్పేస్‌ని ఇచ్చేస్తుంది.

- **లాభం:** `Buffer.alloc()` కంటే ఇది చాలా ఫాస్ట్.
- **నష్టం:** ఆ మెమొరీ ముక్కలో పాత సాఫ్ట్‌వేర్ల తాలూకు సీక్రెట్ డేటా (Garbage Data) ఉండే అవకాశం ఉంది. అందుకే దీన్ని వాడేటప్పుడు వెంటనే కొత్త డేటాతో ఓవర్‌రైట్ చేయాలి.

### 1.3 `Buffer.from(data)`

మన దగ్గర ఆల్రెడీ ఉన్న ఒక స్ట్రింగ్ లేదా అర్రే (Array) ని బైనరీ బఫర్ లాగా మార్చడానికి దీన్ని వాడుతాం.

```javascript
const buf2 = Buffer.from("Hello");
console.log(buf2); // Output: <Buffer 48 65 6c 6c 6f>
// ఇక్కడ 48 అంటే 'H' యొక్క ASCII/Hex వాల్యూ, 65 అంటే 'e'... అలా అన్నమాట.
```

---

## 2. Reading & Writing Buffers (రాయడం మరియు చదవడం)

### Writing (రాయడం):

ఒక బఫర్ లోపలికి కొత్త డేటాని `write()` మెథడ్ ద్వారా రాయవచ్చు.

```javascript
const buf = Buffer.alloc(10); // 10 బైట్ల ఖాళీ స్పేస్
buf.write("Nodejs");
console.log(buf); // <Buffer 4e 6f 64 65 6a 73 00 00 00 00>
```

### Reading (చదవడం):

బఫర్ లోని డేటాని మనం నార్మల్ అర్రే లాగే ఇండెక్స్ `[0]` బట్టి చదవవచ్చు. అలా చదివినప్పుడు అది మనకు **Decimal Number (0-255 లోపు)** ఇస్తుంది.

```javascript
const myBuf = Buffer.from("ABC");
console.log(myBuf[0]); // Output: 65 ('A' యొక్క డెసిమల్/ASCII వాల్యూ)
```

---

## 3. Encoding & Decoding (ఎన్‌కోడింగ్ మరియు డీకోడింగ్)

బైనరీ డేటాను మనుషులకు అర్థమయ్యే టెక్స్ట్ లాగా మార్చడాన్ని **Decoding** అంటారు, టెక్స్ట్‌ని బైనరీగా మార్చడాన్ని **Encoding** అంటారు.

Node.js లో రకరకాల ఎన్‌కోడింగ్స్ ఉన్నాయి. వాటిలో ముఖ్యమైనవి:

- `utf8`: నార్మల్ ఇంగ్లీష్/టెక్స్ట్ ఫార్మాట్.
- `hex`: హెక్సాడెసిమల్ రూపం (0-9, a-f).
- `base64`: ఇమేజ్ డీటాని టెక్స్ట్ రూపంలో మార్చడానికి ఎక్కువగా వాడుతుంటారు (e.g., Email Attachments).

```javascript
const secret = Buffer.from("Telugu Devs", "utf8"); // Encoding to Binary

// Decoding into different formats
console.log(secret.toString("utf8")); // Output: Telugu Devs
console.log(secret.toString("base64")); // Output: VGVsdWd1IERldnM=
console.log(secret.toString("hex")); // Output: 54656c7567752044657673
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `Buffer.alloc()` కి మరియు `Buffer.allocUnsafe()` కి మధ్య తేడా ఏంటి? ఎప్పుడు దేన్ని వాడాలి?**
>
> - **Answer:** `Buffer.alloc()` మెమొరీని జీరోస్‌తో క్లీన్ చేసి ఇస్తుంది కాబట్టి ఇది చాలా సేఫ్, కానీ కొంచెం స్లో. `Buffer.allocUnsafe()` మెమొరీని క్లీన్ చేయకుండా పాత గార్బేజ్ డేటాతోనే ఇచ్చేస్తుంది కాబట్టి చాలా ఫాస్ట్, కానీ సెక్యూరిటీ పరంగా రిస్క్. మీకు పర్ఫార్మెన్స్ చాలా ముఖ్యం అనుకుని, బఫర్ క్రియేట్ చేసిన వెంటనే కొత్త డేటాతో ఓవర్‌రైట్ చేస్తుంటే `allocUnsafe` వాడవచ్చు.

> **Q2: బఫర్ల సైజ్ ని రన్ టైమ్‌లో పెంచవచ్చా (Resizable)?**
>
> - **Answer:** కుదరదు! బఫర్లు **Fixed-size memory** ని కలిగి ఉంటాయి. ఒకసారి మీరు `Buffer.alloc(10)` అని 10 బైట్ల సైజ్ ఫిక్స్ చేస్తే, దాన్ని రన్ టైమ్‌లో 15 బైట్లు చేయలేరు. ఒకవేళ ఎక్కువ డేటా వస్తే, కొత్త పెద్ద బఫర్‌ని క్రియేట్ చేసి పాత బఫర్ డేటాని అందులోకి కాపీ చేసుకోవాల్సిందే.

---

# 10. Streams

చాప్టర్ 10 కి స్వాగతం! Node.js లో **Streams (స్ట్రీమ్స్)** అనేది అత్యంత పవర్‌ఫుల్ మరియు అడ్వాన్స్‌డ్ కాన్సెప్ట్. లార్జ్-స్కేల్ అప్లికేషన్ల పర్ఫార్మెన్స్ అంతా ఈ స్ట్రీమ్స్ పైనే ఆధారపడి ఉంటుంది.

- **సమస్య:** ఒకవేళ సర్వర్‌లో 2GB సైజ్ ఉన్న ఒక పెద్ద వీడియో ఫైల్ ఉందనుకోండి. `fs.readFile()` వాడితే, ఆ 2GB డేటా మొత్తం ఒకేసారి RAM లోకి లోడ్ అవుతుంది. 10 మంది ఒకేసారి ఆ వీడియో చూస్తే $10 \times 2\text{GB} = 20\text{GB}$ RAM కావాలి. సర్వర్ వెంటనే క్రాష్ అయిపోతుంది!
- **పరిష్కారం (Streams):** స్ట్రీమ్స్ ఏం చేస్తాయంటే, ఆ పెద్ద డేటాను ఒకేసారి కాకుండా చిన్న చిన్న ముక్కలుగా (**Chunks**) విడగొట్టి, ఒక పైప్ ద్వారా నీళ్లు వచ్చినట్టుగా నిరంతరాయంగా పంపిస్తూ ఉంటాయి (ఉదాహరణకు: YouTube, Netflix లలో వీడియో స్ట్రీమింగ్ లాగా). దీనివల్ల RAM పై అస్సలు భారం పడదు.

---

## 1. Types of Streams (స్ట్రీమ్స్ లో రకాలు)

Node.js లో ప్రధానంగా 4 రకాల స్ట్రీమ్స్ ఉంటాయి:

1. **Readable Stream:** డేటాను కేవలం చదవడానికి (Read) మాత్రమే వాడతాం. (ఉదాహరణకు: `fs.createReadStream()`).
2. **Writable Stream:** డేటాను రాయడానికి (Write) మాత్రమే వాడతాం. (ఉదాహరణకు: `fs.createWriteStream()`).
3. **Duplex Stream:** ఒకే సమయంలో డేటాను చదవవచ్చు మరియు రాయవచ్చు (Readable & Writable). (ఉదాహరణకు: Network Sockets - `net.Socket`).
4. **Transform Stream:** ఇది ఒక రకమైన Duplex స్ట్రీమ్. కానీ ఇది డేటాను చదివి, దాన్ని మధ్యలో వేరే రూపంలోకి మార్చి (Modify/Transform) ఆ తర్వాత బయటకి పంపుతుంది. (ఉదాహరణకు: Zlib compression - ఫైల్‌ను జిప్ ఫార్మాట్‌లోకి మార్చడం).

---

## 2. Stream Events (స్ట్రీమ్ ఈవెంట్స్)

స్ట్రీమ్స్ అన్నీ `EventEmitter` క్లాస్ నుండి వస్తాయి, కాబట్టి ఇవి ఈవెంట్స్ ఆధారంగా పనిచేస్తాయి. ముఖ్యమైన ఈవెంట్స్:

- `data`: Readable స్ట్రీమ్ నుండి ఒక కొత్త చంక్ (Buffer ముక్క) రాగానే ఈ ఈవెంట్ ఫైర్ అవుతుంది.
- `end`: Readable స్ట్రీమ్‌లో డేటా మొత్తం చదవడం అయిపోగానే వస్తుంది.
- `error`: స్ట్రీమింగ్ జరిగేటప్పుడు ఏదైనా ప్రాబ్లం వస్తే (ఫైల్ లేకపోవడం లాంటివి) వస్తుంది.
- `finish`: Writable స్ట్రీమ్‌లోకి డేటా మొత్తం పూర్తిగా రాసేసాక ట్రిగ్గర్ అవుతుంది.

### 💻 Readable & Writable ఎగ్జాంపుల్:

```javascript
import fs from "node:fs";

// 1. Readable Stream క్రియేట్ చేసాం
const readableStream = fs.createReadStream("large_input.txt", {
  encoding: "utf8",
  highWaterMark: 64 * 1024, // ఒక్కో చంక్ సైజ్ (64 KB)
});

// 2. Writable Stream క్రియేట్ చేసాం
const writableStream = fs.createWriteStream("output.txt");

// 3. ఈవెంట్స్ ద్వారా డేటాను ముక్కలు ముక్కలుగా బదిలీ చేయడం
readableStream.on("data", (chunk) => {
  console.log(`📦 Received ${chunk.length} bytes of data.`);
  writableStream.write(chunk); // వచ్చిన ముక్కను వెంటనే రాస్తున్నాం
});

readableStream.on("end", () => {
  console.log("✅ File streaming completely finished!");
});

readableStream.on("error", (err) => {
  console.error("❌ Error occurred:", err.message);
});
```

---

## 3. Pipe (పైప్) అంటే ఏమిటి?

పైన మనం రాసిన `data` మరియు `end` ఈవెంట్స్ కోడ్‌ని ఇంకా సింప్లిఫై చేయడానికి Node.js మనకు **`pipe()`** అనే మెథడ్‌ను ఇచ్చింది. ఇది ఒక Readable స్ట్రీమ్ నుండి వచ్చే అవుట్‌పుట్‌ను నేరుగా ఒక Writable స్ట్రీమ్‌కి కనెక్ట్ చేస్తుంది.

```javascript
import fs from "node:fs";

const src = fs.createReadStream("input.txt");
const dest = fs.createWriteStream("output.txt");

// జస్ట్ ఈ ఒక్క లైన్ చాలు! డేటా ఆటోమేటిక్‌గా ఫ్లో అవుతుంది.
src.pipe(dest);
```

---

## 4. Backpressure (బ్యాక్‌ప్రెషర్) - Advanced Concept

ఇది ఇంటర్వ్యూలలో సీనియర్ డెవలపర్లను అడిగే అత్యంత ముఖ్యమైన టాపిక్.

- **సమస్య:** Readable స్ట్రీమ్ చాలా ఫాస్ట్ గా డేటాను పంపుతోంది (ఉదాహరణకు $100\text{MB/s}$ వేగంతో చదువుతోంది), కానీ Writable స్ట్రీమ్ చాలా స్లోగా డేటాను రాస్తోంది (ఉదాహరణకు $20\text{MB/s}$ వేగంతో మాత్రమే రాయగలదు).
- **ఏమవుతుంది?:** ఆ మిగిలిపోయిన $80\text{MB}$ డేటా అంతా రామ్‌ (RAM) లో పేరుకుపోతుంది. దీన్నే **Backpressure** అంటారు.
- **పరిహారం:** `pipe()` మెథడ్‌ను వాడితే Node.js బ్యాక్‌ప్రెషర్‌ను ఆటోమేటిక్‌గా మేనేజ్ చేస్తుంది. Writable స్ట్రీమ్ నిండిపోగానే, Readable స్ట్రీమ్‌ను కాసేపు ఆగమని (`pause`) చెప్తుంది. Writable స్ట్రీమ్ మళ్ళీ ఖాళీ అవ్వగానే, Readable స్ట్రీమ్‌ను మళ్ళీ స్టార్ట్ (`resume`) చేయిస్తుంది.

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `fs.readFile()` కి మరియు `fs.createReadStream()` కి మధ్య ఉన్న ముఖ్యమైన తేడా ఏంటి?**
>
> - **Answer:** `fs.readFile()` అనేది ఫైల్ డేటా మొత్తాన్ని ఒకేసారి పూర్తిగా మెమొరీ (RAM) లోకి లోడ్ చేస్తుంది. ఇది చిన్న ఫైల్స్ కి ఓకే. కానీ `fs.createReadStream()` డేటాను చిన్న చిన్న ముక్కలుగా (Chunks) బఫర్ రూపంలో స్ట్రీమ్ చేస్తుంది. ఇది పెద్ద ఫైల్స్ చదవడానికి మెమొరీ పరంగా అత్యంత సేఫ్ మరియు ఫాస్ట్.

> **Q2: `highWaterMark` అంటే ఏమిటి?**
>
> - **Answer:** ఒక స్ట్రీమ్ తన అంతర్గత బఫర్ (Internal Buffer) లో ఒకేసారి గరిష్టంగా ఎంత డేటాను స్టోర్ ఉంచుకోగలదో చెప్పే పరిమిత సైజ్ నే `highWaterMark` అంటారు. Readable స్ట్రీమ్‌కి ఇది డెఫాల్ట్‌గా `64 KB` ఉంటుంది. మన అవసరానికి తగ్గట్టు దీన్ని మార్చుకోవచ్చు.

---

# 11. HTTP Module

చాప్టర్ 11 కి స్వాగతం! Node.js లో **HTTP Module** అనేది అత్యంత కీలకమైన చాప్టర్. ఎందుకంటే, వెబ్ అప్లికేషన్లు లేదా API లు (Express.js వంటి ఫ్రేమ్‌వర్క్‌లు సైతం) బ్యాక్‌గ్రౌండ్‌లో ఈ HTTP మొడ్యూల్ సహాయంతోనే రన్ అవుతాయి.

దీని ద్వారా మనం ఒక సొంత **Web Server** ని ఎలా క్రియేట్ చేయాలో, రిక్వెస్ట్ మరియు రెస్పాన్స్‌లను ఎలా హ్యాండిల్ చేయాలో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. HTTP Server, Request & Response

Node.js లో వెబ్ సర్వర్ క్రియేట్ చేయడానికి `http.createServer()` ని వాడుతాం. ఇందులో మనకు ఒక కాల్‌బ్యాక్ ఫంక్షన్ ఉంటుంది, దానికి రెండు ముఖ్యమైన ఆబ్జెక్ట్స్ అందుతాయి:

1. **`req` (IncomingMessage):** క్లయింట్ (Browser/Postman) నుండి వచ్చే డేటా, URL, హెడర్స్ అన్నీ ఇందులో ఉంటాయి.
2. **`res` (ServerResponse):** మన సర్వర్ నుండి క్లయింట్‌కి పంపించాల్సిన డేటా, స్టేటస్ కోడ్స్ అన్నీ దీని ద్వారా పంపుతాం.

---

## 2. Headers & Status Codes

- **Headers (హెడర్స్):** సర్వర్ పంపే డేటా ఎలాంటిది (టెక్స్టా, హెచ్‌టిఎమ్‌ఎల్ ఆ, లేదా జేసన్ ఆ) అని బ్రౌజర్‌కి చెప్పడానికి `Content-Type` హెడర్ వాడుతాం.
- **Status Codes (స్టేటస్ కోడ్స్):** రిక్వెస్ట్ సక్సెస్ అయిందా లేదా అని చెప్పే నంబర్లు.
- `200`: OK (సక్సెస్)
- `201`: Created (కొత్త డేటా క్రియేట్ అయింది)
- `404`: Not Found (పేజీ లేదా డేటా లేదు)
- `500`: Internal Server Error (సర్వర్‌లో ఏదో తప్పు జరిగింది)

---

## 3. Routing & JSON Responses (ప్రాక్టికల్ ఎగ్జాంపుల్)

రియల్-టైమ్‌లో వేర్వేరు URL లకి (`/`, `/api/users`) వేర్వేరు రెస్పాన్స్‌లు ఇవ్వడాన్నే **Routing** అంటారు. అలాగే మొబైల్ ఆప్స్ లేదా మోడరన్ వెబ్‌సైట్స్ కోసం డేటాని **JSON ఫార్మాట్** లో పంపడం చాలా ముఖ్యం.

### 💻 API Server కోడ్ ఎగ్జాంపుల్:

```javascript
import http from "node:http";

const server = http.createServer((req, res) => {
  // 1. URL మరియు HTTP Method ని తీసుకోవడం
  const { url, method } = req;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Node.js HTTP Server in Telugu!</h1>");
  }

  // 2. JSON Response API Route
  else if (url === "/api/users" && method === "GET") {
    const users = [
      { id: 1, name: "Rahul", role: "Backend Developer" },
      { id: 2, name: "Sita", role: "DevOps Engineer" },
    ];

    // JSON పంపుతున్నాం కాబట్టి Content-Type మార్చాలి
    res.writeHead(200, { "Content-Type": "application/json" });

    // Object ని String లా మార్చి పంపాలి (res.end ఎప్పుడూ టెక్స్ట్ లేదా బఫర్ నే తీసుకుంటుంది)
    res.end(JSON.stringify(users));
  }

  // 3. 404 Route (ఏ రూట్ మ్యాచ్ కాకపోతే)
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found!" }));
  }
});

// సర్వర్‌ని 3000 పోర్ట్ పై రన్ చేస్తున్నాం
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
```

---

## 4. Serving Files (ఫైల్స్ సర్వ్ చేయడం)

సర్వర్ నుండి కేవలం టెక్స్ట్ మాత్రమే కాకుండా ఒక పూర్తి `index.html` ఫైల్‌ను బ్రౌజర్‌కి పంపించాలంటే మనం చాప్టర్ 5 లో నేర్చుకున్న `fs` మొడ్యూల్ మరియు చాప్టర్ 10 లో నేర్చుకున్న **Streams** ని ఉపయోగించవచ్చు.

```javascript
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const fileServer = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });

    // Streams వాడి ఫైల్‌ను నేరుగా Response కి పైప్ (pipe) చేస్తున్నాం (High Performance!)
    const readStream = fs.createReadStream("./index.html");
    readStream.pipe(res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

fileServer.listen(3001);
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `res.end()` కి మరియు `res.write()` కి మధ్య తేడా ఏంటి?**
>
> - **Answer:** `res.write()` ని ఉపయోగించి మనం క్లయింట్‌కి ముక్కలు ముక్కలుగా (Chunks) ఎంత డేటా అయినా పంపవచ్చు (కనెక్షన్ ఓపెన్ లోనే ఉంటుంది). కానీ `res.end()` అనేది "ఇక సర్వర్ నుండి డేటా పంపడం పూర్తయింది, ఈ రిక్వెస్ట్‌ని క్లోజ్ చెయ్" అని చెప్పడానికి వాడతాం. `res.end()` పిలవకపోతే బ్రౌజర్ లోడ్ అవుతూనే ఉంటుంది (Timeout అవుతుంది).

> **Q2: `res.writeHead()` కి మరియు `res.setHeader()` కి మధ్య తేడా ఏంటి?**
>
> - **Answer:** `res.writeHead(statusCode, headers)` అనేది ఒకేసారి స్టేటస్ కోడ్ మరియు హెడర్స్ రెండింటినీ సెట్ చేస్తుంది, ఇది పిలిచాక మళ్ళీ హెడర్స్ మార్చలేము. కానీ `res.setHeader(name, value)` అనేది కేవలం ఒక సింగిల్ హెడర్‌ని మాత్రమే సెట్ చేస్తుంది (ఇది పిలిచాక కూడా స్టేటస్ కోడ్ మార్చుకోవచ్చు).

---

చాప్టర్ 12 మరియు 13 కి స్వాగతం! ఈ రెండు చాప్టర్లు నెట్‌వర్కింగ్ మరియు వెబ్ రిక్వెస్ట్‌లను హ్యాండిల్ చేయడానికి చాలా ఉపయోగపడతాయి. మనం బ్రౌజర్‌లో టైప్ చేసే లింక్స్ (URLs) ని Node.js ఎలా అర్థం చేసుకుంటుంది, అలాగే ఒక డొమైన్ పేరును (ఉదాహరణకు google.com) ఐపీ అడ్రస్ (IP Address) గా ఎలా మారుస్తుంది అనేది ఈ చాప్టర్లలో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

# 12. URL Module

URL మొడ్యూల్ ద్వారా మనం ఒక పెద్ద వెబ్ లింక్‌ని ముక్కలు ముక్కలుగా విడగొట్టి, అందులో ఉన్న ప్రోటోకాల్, డొమైన్, పోర్ట్, మరియు క్వెరీ పారామీటర్లను (Query Parameters) ఈజీగా యాక్సెస్ చేయవచ్చు. మోడరన్ Node.js లో దీని కోసం ఇన్-బిల్ట్ **WHATWG URL API** (గ్లోబల్ `URL` క్లాస్) ని వాడుతాం.

### 1. URL Parsing (URL ని విడగొట్టడం)

ఒక URL ని పాస్ చేసినప్పుడు అది ఎలా విడిపోతుందో ఈ క్రింది ఎగ్జాంపుల్ లో చూడండి:

```javascript
// గ్లోబల్ URL క్లాస్ కాబట్టి ఇంపోర్ట్ చేయనవసరం లేదు
const myUrl = new URL(
  "https://example.com:8080/search?item=laptop&brand=dell#top",
);

console.log("Protocol:", myUrl.protocol); // https:
console.log("Host (with port):", myUrl.host); // example.com:8080
console.log("Hostname:", myUrl.hostname); // example.com
console.log("Pathname:", myUrl.pathname); // /search
console.log("Hash:", myUrl.hash); // #top
console.log("Search (Query String):", myUrl.search); // ?item=laptop&brand=dell
```

### 2. Query Parameters & URLSearchParams

యూజర్ బ్రౌజర్ నుండి పంపే క్వెరీ పారామీటర్లను (ఉదాహరణకు: `?item=laptop&brand=dell`) రీడ్ చేయడానికి `myUrl.searchParams` ఆబ్జెక్ట్ ఉపయోగపడుతుంది. ఇది **`URLSearchParams`** అనే ప్రత్యేకమైన క్లాస్ యొక్క ఇన్‌స్టాన్స్.

```javascript
const params = myUrl.searchParams;

// 1. ఒక నిర్దిష్టమైన వాల్యూని పొందడం (get)
console.log("Item:", params.get("item")); // Output: laptop
console.log("Brand:", params.get("brand")); // Output: dell

// 2. ఒక పారామీటర్ ఉందో లేదో చెక్ చేయడం (has)
console.log("Has page?:", params.has("page")); // Output: false

// 3. కొత్త పారామీటర్లను యాడ్ చేయడం (append) లేదా మార్చడం (set)
params.append("page", "2");
console.log("Updated URL:", myUrl.toString());
// Output: https://example.com:8080/search?item=laptop&brand=dell&page=2#top
```

---

# 13. DNS Module

DNS అంటే **Domain Name System**. మనుషులకు `google.com` లేదా `github.com` లాంటి పేర్లు గుర్తుంటాయి, కానీ కంప్యూటర్లకి `142.250.190.46` లాంటి IP అడ్రస్‌లు మాత్రమే అర్థమవుతాయి. ఈ పేర్లను IP అడ్రస్‌లుగా మార్చే పనిని **`node:dns`** మొడ్యూల్ చేస్తుంది.

### 1. `dns.lookup()` vs `dns.resolve()` (ఇంటర్వ్యూలలో అడిగే ముఖ్యమైన తేడా)

ఈ మొడ్యూల్ లో రెండు రకాల పద్ధతులు ఉన్నాయి:

#### A) `dns.lookup(hostname, callback)`

ఇది మీ ఆపరేటింగ్ సిస్టమ్ (OS) యొక్క నెట్‌వర్కింగ్ కాన్ఫిగరేషన్‌ను (ఉదాహరణకు `hosts` ఫైల్) వాడుకుని IP అడ్రస్‌ని వెతుకుతుంది. ఇది **సింక్రోనస్‌గా (Blocking)** పని చేస్తుంది ఎందుకంటే ఇది లోపల `getaddrinfo` అనే సిస్టమ్ కాల్‌ని వాడుతుంది (ఇది Event Loop లో కాకుండా Thread Pool లో రన్ అవుతుంది).

```javascript
import dns from "node:dns";

dns.lookup("google.com", (err, address, family) => {
  if (err) throw err;
  console.log(`lookup: IP Address: ${address}, IPv${family}`);
  // Output: IP Address: 142.250.183.238, IPv4
});
```

#### B) `dns.resolve(hostname, rrtype, callback)`

ఇది మీ OS ఫైల్స్ ని కాకుండా, నేరుగా ఇంటర్నెట్‌లోని **DNS సర్వర్ నెట్‌వర్క్‌కి** కనెక్ట్ అయ్యి రికార్డులను తెస్తుంది. ఇది పూర్తిగా **అసింక్రోనస్ (Non-blocking)** గా పనిచేస్తుంది.

దీని ద్వారా మనం రకరకాల DNS రికార్డులను (`rrtype`) పొందవచ్చు:

- `'A'`: IPv4 అడ్రస్‌లు
- `'AAAA'`: IPv6 అడ్రస్‌లు
- `'MX'`: మెయిల్ సర్వర్ రికార్డులు (Mail Exchange)

```javascript
import dns from "node:dns/promises"; // Promises API వాడుతున్నాం

async function getDnsRecords() {
  try {
    // 1. Resolve IPv4 Addresses ('A' Record)
    const ipAddresses = await dns.resolve("github.com", "A");
    console.log("GitHub IPs:", ipAddresses);

    // 2. Resolve Mail Servers ('MX' Record)
    const mxRecords = await dns.resolve("gmail.com", "MX");
    console.log("Gmail MX Records:", mxRecords);
  } catch (err) {
    console.error(err);
  }
}
getDnsRecords();
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ల నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `dns.lookup()` కి మరియు `dns.resolve()` కి మధ్య ఉన్న వ్యత్యాసం ఏంటి? ఎప్పుడు దేన్ని వాడాలి?**
>
> - **Answer:** `dns.lookup()` అనేది OS నెట్‌వర్కింగ్ పై ఆధారపడుతుంది మరియు లోపల Thread Pool ని వాడుతుంది (ఇది కొంచెం బ్లాకింగ్ స్వభావం కలది). `dns.resolve()` అనేది OS ని దాటించి నేరుగా నెట్‌వర్క్ ద్వారా DNS క్వెరీ చేస్తుంది, ఇది పూర్తిగా నాన్-బ్లాకింగ్. మీరు కేవలం ఒక డొమైన్ ఐపీ తెలుసుకోవాలంటే `lookup` వాడొచ్చు, కానీ అప్లికేషన్ చాలా ఫాస్ట్ గా ఉండాలన్నా లేదా MX, TXT వంటి నిర్దిష్ట రికార్డులు కావాలన్నా `resolve` నే వాడాలి.

> **Q2: ఒక URL లో ఉండే Query Parameters ని మేనేజ్ చేయడానికి `URLSearchParams` వాడటం వల్ల లాభం ఏంటి?**
>
> - **Answer:** పాత రోజుల్లో `querystring` మొడ్యూల్ వాడేవాళ్ళం లేదా స్ట్రింగ్‌ని మాన్యువల్‌గా స్ప్లిట్ (`.split('&')`) చేసేవాళ్ళం. కానీ `URLSearchParams` అనేది మోడరన్ వెబ్ స్టాండర్డ్ API. ఇది పారామీటర్లను సులువుగా యాడ్ (`append`), అప్‌డేట్ (`set`), డిలీట్ (`delete`) చేయడానికి ఇన్-బిల్ట్ మెథడ్స్ ఇస్తుంది మరియు స్పేస్ లేదా స్పెషల్ క్యారెక్టర్స్ వస్తే ఆటోమేటిక్‌గా URL Encoding (e.g., స్పేస్ ని `%20` గా మార్చడం) చేస్తుంది.

---

చాప్టర్ 14 మరియు 15 కి స్వాగతం! ఈ రెండు అధ్యాయాలు Node.js లో **సెక్యూరిటీ (Security)** మరియు **పర్ఫార్మెన్స్ ఆప్టిమైజేషన్ (Performance Optimization)** లకి అత్యంత కీలకమైనవి.

పాస్‌వర్డ్‌లను ఎలా దాచాలి, డేటాను ఎలా ఎన్‌క్రిప్ట్ చేయాలి, అలాగే పెద్ద ఫైల్స్ సైజును తగ్గించి (Compress) సర్వర్ స్పేస్‌ని ఎలా ఆదా చేయాలి అనేది ఈ చాప్టర్లలో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

# 14. Crypto Module

డేటాను భద్రపరచడానికి, పాస్‌వర్డ్‌లను సెక్యూర్ చేయడానికి మరియు ఎన్‌క్రిప్షన్ (Encryption) చేయడానికి `node:crypto` మొడ్యూల్ ఉపయోగపడుతుంది.

### 1. Hashing (హాషింగ్)

హాషింగ్ అంటే ఒక టెక్స్ట్‌ని ఒక ఫిక్స్‌డ్ సైజ్ ఉన్న విచిత్రమైన కోడ్‌గా మార్చడం. **ఇది వన్-వే (One-Way) ప్రాసెస్.** అంటే, హాష్ కోడ్ నుండి మళ్ళీ ఒరిజినల్ టెక్స్ట్‌ని తిరిగి తీసుకురాలేము. దీనికోసం `sha256` లేదా `sha512` ఆల్గారిథమ్స్ వాడుతాం.

```javascript
import crypto from "node:crypto";

const text = "TeluguDevs123";
// SHA-256 ఆల్గారిథమ్ తో హాష్ క్రియేట్ చేస్తున్నాం
const hash = crypto.createHash("sha256").update(text).digest("hex");

console.log("Original:", text);
console.log("SHA-256 Hash:", hash);
// Output: 3a28c3... (64 క్యారెక్టర్ల ఒక ఫిక్స్డ్ స్ట్రింగ్ వస్తుంది)
```

### 2. Random Bytes (రాండమ్ బైట్స్)

సెక్యూరిటీలో టోకెన్లు, ఓటీపీలు (OTP) లేదా పాస్‌వర్డ్ సాల్ట్స్ (Salts) క్రియేట్ చేయడానికి మనుషులు/కంప్యూటర్లు ఊహించలేని విధంగా ఉండే క్రిప్టోగ్రాఫికల్లీ స్ట్రాంగ్ రాండమ్ డేటా కావాలి. దానికోసం `randomBytes` వాడతాం.

```javascript
// 16 బైట్ల రాండమ్ డేటాని జనరేట్ చేసి, హెక్స్ స్ట్రింగ్ లా మారుస్తున్నాం
const secureToken = crypto.randomBytes(16).toString("hex");
console.log("Secure Token:", secureToken);
```

### 3. Password Hashing Concepts (`pbkdf2`)

ఇంటర్వ్యూలలో కచ్చితంగా అడిగే కాన్సెప్ట్ ఇది. సాధారణ హాషింగ్ (`sha256`) ని హ్యాకర్లు "Rainbow Tables" లేదా బ్రూట్-ఫోర్స్ ద్వారా ఈజీగా బ్రేక్ చేయగలరు. అందుకే పాస్‌వర్డ్‌లను దాచడానికి **Salt** (రాండమ్ టెక్స్ట్) మరియు **Iterations** (పదే పదే హాష్ చేయడం) కలిపి ఉండే **PBKDF2** (Password-Based Key Derivation Function 2) ని వాడాలి.

```javascript
const password = "mySuperSecretPassword";
const salt = crypto.randomBytes(16).toString("hex"); // ప్రతి యూజర్ కి ఒక కొత్త సాల్ట్

// pbkdf2(password, salt, iterations, keylen, digest, callback)
crypto.pbkdf2(password, salt, 100000, 64, "sha512", (err, derivedKey) => {
  if (err) throw err;
  console.log("Secure Password Hash:", derivedKey.toString("hex"));
});
```

_(గమనిక: రియల్-టైమ్ ప్రొడక్షన్ లో దీనికంటే అడ్వాన్స్డ్ అయిన `bcrypt` లేదా `argon2` అనే థర్డ్-పార్టీ ప్యాకేజీలను ఎక్కువగా వాడుతుంటారు)._

---

# 15. Zlib Module

`node:zlib` మొడ్యూల్ డేటాను కంప్రెస్ (కుదించడం/సైజ్ తగ్గించడం) మరియు డీకంప్రెస్ (మళ్ళీ పెద్దదిగా చేయడం) చేయడానికి ఉపయోగపడుతుంది. ఇది బ్యాక్‌గ్రౌండ్‌లో **Gzip** లేదా **Deflate** ఆల్గారిథమ్స్ వాడుతుంది.

చాప్టర్ 10 లో మనం నేర్చుకున్న **Streams (స్ట్రీమ్స్)** తో కలిపి దీన్ని వాడితే పర్ఫార్మెన్స్ అద్భుతంగా ఉంటుంది.

### 1. Compression & Gzip (ఫైల్ సైజ్ తగ్గించడం)

ఒక పెద్ద టెక్స్ట్ ఫైల్‌ను `.gz` (Gzip) ఫార్మాట్‌లోకి కంప్రెస్ చేయడానికి `createGzip()` అనే **Transform Stream** ని వాడుతాం.

```javascript
import fs from "node:fs";
import zlib from "node:zlib";

const source = fs.createReadStream("large_input.txt");
const destination = fs.createWriteStream("large_input.txt.gz");
const gzip = zlib.createGzip();

// Stream Pipe లైన్: Read -> Compress (Transform) -> Write
source.pipe(gzip).pipe(destination);

destination.on("finish", () => {
  console.log("🤐 File successfully compressed using Gzip!");
});
```

### 2. Decompression (మళ్ళీ పాత రూపంలోకి తేవడం)

కంప్రెస్ అయిన `.gz` ఫైల్ నుండి తిరిగి ఒరిజినల్ ఫైల్‌ను పొందడానికి `createGunzip()` ని వాడుతాం.

```javascript
const compressedSource = fs.createReadStream("large_input.txt.gz");
const uncompressedDest = fs.createWriteStream("restored_input.txt");
const gunzip = zlib.createGunzip();

// Stream Pipe లైన్: Read Compressed -> Decompress -> Write Original
compressedSource.pipe(gunzip).pipe(uncompressedDest);

uncompressedDest.on("finish", () => {
  console.log("🔓 File successfully decompressed!");
});
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ల నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: పాస్‌వర్డ్‌లను సేవ్ చేయడానికి నార్మల్ `createHash('sha256')` ఎందుకు వాడకూడదు?**
>
> - **Answer:** నార్మల్ `sha256` అనేది చాలా వేగంగా పనిచేస్తుంది. హ్యాకర్లు కోట్లాది పాస్‌వర్డ్‌ల హాష్ విలువలను ముందే లెక్కగట్టి ఉంచుకుంటారు (Rainbow Tables). ఒకవేళ మీ డేటాబేస్ హ్యాక్ అయితే, వారు చాలా సులువుగా పాస్‌వర్డ్‌లను కనుక్కోగలరు. అందుకే పాస్‌వర్డ్‌ల కోసం `pbkdf2` లేదా `bcrypt` వంటి స్లో హాషింగ్ అల్గారిథమ్స్‌ని **Salt** తో కలిపి వాడాలి. దీనివల్ల హ్యాకింగ్ చేయడం అసాధ్యం అవుతుంది.

> **Q2: వెబ్ సర్వర్లలో `zlib` మొడ్యూల్ ఎక్కడ ఉపయోగపడుతుంది?**
>
> - **Answer:** మనం ఒక వెబ్‌సైట్ ఓపెన్ చేసినప్పుడు సర్వర్ నుండి పెద్ద మొత్తంలో HTML, CSS, లేదా JSON డేటా బ్రౌజర్‌కి వెళ్తుంది. సర్వర్ ఆ డేటాను `zlib` ద్వారా కంప్రెస్ చేసి బ్రౌజర్‌కి పంపితే నెట్‌వర్క్ బ్యాండ్‌విడ్త్ ఆదా అవుతుంది, వెబ్‌సైట్ చాలా వేగంగా లోడ్ అవుతుంది. బ్రౌజర్ ఆ డేటాను రిసీవ్ చేసుకొని ఆటోమేటిక్‌గా డీకంప్రెస్ చేసుకుంటుంది (దీన్నే HTTP `Content-Encoding: gzip` అంటారు).

---

# 16. Child Processes

చాప్టర్ 16 కి స్వాగతం! Node.js లో **Child Processes (చైల్డ్ ప్రాసెస్)** అనేది చాలా అడ్వాన్స్‌డ్ మరియు పవర్‌ఫుల్ కాన్సెప్ట్.

**ఎందుకు వాడతాం?:** చాప్టర్ 1 లో మనం నేర్చుకున్నాం—Node.js అనేది **Single-threaded**. ఒకవేళ మీ అప్లికేషన్‌లో ఏదైనా ఒక హెవీ పని (ఉదాహరణకు: ఒక పెద్ద కమాండ్ రన్ చేయడం, ఒక వీడియోని కంప్రెస్ చేయడం, లేదా భారీ కాలిక్యులేషన్స్) వస్తే, మెయిన్ థ్రెడ్ బ్లాక్ అయిపోతుంది. మిగతా యూజర్ల రిక్వెస్ట్‌లు ఆగిపోతాయి.

ఈ సమస్యను సాల్వ్ చేయడానికి Node.js మన కంప్యూటర్‌లో **కొత్త సబ్-ప్రాసెస్‌లను (Child Processes)** క్రియేట్ చేసి, ఆ హెవీ పనులను వాటికి అప్పజెప్పడానికి `node:child_process` మొడ్యూల్‌ను ఇస్తుంది. ఇందులో 4 ముఖ్యమైన మెథడ్స్ ఉన్నాయి. వాటిని చిన్న కోడ్ ఎగ్జాంపుల్స్‌తో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. `exec()`

ఇది ఒక కొత్త షెల్ (Terminal) ని ఓపెన్ చేసి, మనం ఇచ్చిన కమాండ్‌ను రన్ చేస్తుంది. కమాండ్ రన్ అయిపోయాక వచ్చే అవుట్‌పుట్ మొత్తాన్ని ఒకేసారి **Buffer/Memory** లో దాచి మనకు ఇస్తుంది.

- **ఎప్పుడు వాడాలి?:** చిన్న చిన్న కమాండ్స్ రన్ చేసి, అవుట్‌పుట్ తక్కువగా వస్తుంది అనుకున్నప్పుడు (e.g., ఫోల్డర్ లోని ఫైల్స్ లిస్ట్ చూడటం).

```javascript
import { exec } from "node:child_process";

// 'ls -lh' (Mac/Linux) లేదా 'dir' (Windows) కమాండ్ రన్ చేస్తున్నాం
exec("ls -lh", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`--- Terminal Output --- \n${stdout}`);
});
```

---

## 2. `spawn()`

ఇది కూడా కమాండ్స్ రన్ చేయడానికే, కానీ `exec()` లాగా అవుట్‌పుట్ మొత్తం అయిపోయేదాకా వెయిట్ చేయదు. ఇది చాప్టర్ 10 లో మనం నేర్చుకున్న **Streams** ని వాడుతుంది. కమాండ్ రన్ అవుతున్నప్పుడే డేటాను ముక్కలు ముక్కలుగా (Chunks) రియల్-టైమ్‌లో పంపిస్తూ ఉంటుంది.

- **ఎప్పుడు వాడాలి?:** అవుట్‌పుట్ చాలా పెద్దగా ఉన్నప్పుడు లేదా ఎక్కువ సమయం తీసుకునే పనులు (e.g., Image/Video Processing) చేసేటప్పుడు.

```javascript
import { spawn } from "node:child_process";

// 'ping google.com' కమాండ్ ని రన్ చేస్తున్నాం (ఇది నిరంతరాయంగా డేటా ఇస్తుంది)
const child = spawn("ping", ["google.com"]);

// Readable Stream లాగా రియల్-టైమ్ లో డేటా వస్తుంది
child.stdout.on("data", (data) => {
  console.log(`Live Data: ${data}`);
});

child.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});
```

---

## 3. `fork()`

ఇది చాలా స్పెషల్. ఇది ఒక కొత్త **Node.js ప్రాసెస్** ని క్రియేట్ చేస్తుంది (అంటే ఒక Node.js ఫైల్ నుండి ఇంకొక Node.js ఫైల్‌ని సబ్-ప్రాసెస్ లా రన్ చేస్తుంది). వీటికి మధ్య ఒక సీక్రెట్ కమ్యూనికేషన్ ఛానల్ ఏర్పడుతుంది, దాని ద్వారా `send()` మరియు `on('message')` వాడుకొని డేటా పంపుకోవచ్చు.

- **ఎప్పుడు వాడాలి?:** Heavy CPU-intensive JavaScript పనులు (e.g., కోట్లాది లూప్‌లు తిప్పడం, పెద్ద క్యాలిక్యులేషన్స్) చేయడానికి.

```javascript
// 💻 main.js (మెయిన్ ఫైల్)
import { fork } from "node:child_process";

const child = fork("./heavyTask.js");

// చైల్డ్ ప్రాసెస్ కి పని చెప్తున్నాం
child.send({ task: "start_calculation" });

// చైల్డ్ ప్రాసెస్ నుండి రిజల్ట్ ని తీసుకుంటున్నాం
child.on("message", (result) => {
  console.log(`Result received from child: ${result.total}`);
  child.kill(); // పని అయిపోయాక చైల్డ్ ని ఆపేయాలి
});

// 💻 heavyTask.js (చైల్డ్ ఫైల్)
process.on("message", (msg) => {
  if (msg.task === "start_calculation") {
    // ఇక్కడ ఎంత పెద్ద లూప్ తిరిగినా మెయిన్ సర్వర్ కి ఇబ్బంది ఉండదు
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }

    // రిజల్ట్ ని తిరిగి మెయిన్ ఫైల్ కి పంపుతున్నాం
    process.send({ total });
  }
});
```

---

## 4. `execFile()`

ఇది `exec()` లాంటిదే, కానీ ఇది ఒక కొత్త షెల్ (Terminal/Bash) ని ఓపెన్ చేయదు. నేరుగా ఒక ఎగ్జిక్యూటబుల్ ఫైల్‌ని (ఉదాహరణకు `.sh` స్క్రిప్ట్ లేదా `.exe` ఫైల్) రన్ చేస్తుంది.

- **ఎప్పుడు వాడాలి?:** కేవలం స్క్రిప్ట్ ఫైల్స్ రన్ చేయడానికి. ఇది `exec()` కంటే ఎక్కువ సేఫ్ మరియు ఫాస్ట్ (షెల్ ఓపెన్ చేయదు కాబట్టి "Shell Injection" హ్యాకింగ్ జరగదు).

```javascript
import { execFile } from "node:child_process";

// ఒక షెల్ స్క్రిప్ట్ ని నేరుగా రన్ చేస్తున్నాం
execFile("./my_script.sh", (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`Script Output: ${stdout}`);
});
```

---

## 🏎️ తేడాలు ఒక్క ముక్కలో (Quick Comparison)

| మెథడ్            | షెల్ ఓపెన్ చేస్తుందా? | డేటా ఎలా ఇస్తుంది?                 | ముఖ్యమైన ఉపయోగం                                          |
| ---------------- | --------------------- | ---------------------------------- | -------------------------------------------------------- |
| **`exec()`**     | అవును (Shell)         | Buffer (మొత్తం ఒకేసారి)            | చిన్న చిన్న CLI కమాండ్స్ కోసం.                           |
| **`spawn()`**    | లేదు                  | Stream (ముక్కలు ముక్కలుగా లైవ్ లో) | పెద్ద అవుట్‌పుట్ లేదా లాంగ్-రన్నింగ్ పనుల కోసం.          |
| **`fork()`**     | లేదు                  | IPC Channel (Messages)             | వేరే Node.js ఫైల్ లో CPU-heavy పనులు చేయడానికి.          |
| **`execFile()`** | లేదు                  | Buffer (మొత్తం ఒకేసారి)            | షెల్ లేకుండా నేరుగా ఎగ్జిక్యూటబుల్ ఫైల్స్ రన్ చేయడానికి. |

---

## 🎯 In-depth Interview Question (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్న)

> **Q: `exec()` కి మరియు `spawn()` కి మధ్య ఉన్న ముఖ్యమైన తేడా ఏంటి? ఒకవేళ `exec()` లో ఒక 5GB ఫైల్ కి సంబంధించిన కమాండ్ రన్ చేస్తే ఏమవుతుంది?**
>
> - **Answer:** `exec()` అవుట్‌పుట్ మొత్తాన్ని RAM లో ఒక బఫర్ లా దాస్తుంది. డెఫాల్ట్‌గా దీని లిమిట్ `1024 * 1024` బైట్లు (1MB) మాత్రమే ఉంటుంది. ఒకవేళ మీరు 5GB ఫైల్ అవుట్‌పుట్ వచ్చే కమాండ్ ఇస్తే, ఆ లిమిట్ దాటిపోయి అప్లికేషన్ వెంటనే `maxBuffer exceeded` ఎర్రర్‌తో క్రాష్ అయిపోతుంది. అదే `spawn()` అయితే స్ట్రీమ్స్ వాడుతుంది కాబట్టి ఎంత పెద్ద డేటా వచ్చినా రామ్ (RAM) నిండదు, సేఫ్ గా రన్ అవుతుంది.

---

# 17. Cluster Module

చాప్టర్ 17 కి స్వాగతం! **Cluster Module (క్లస్టర్ మొడ్యూల్)** అనేది Node.js ని లార్జ్-స్కేల్ ప్రొడక్షన్ సర్వర్లలో (Production Servers) వాడేటప్పుడు అత్యంత కీలకమైన అడ్వాన్స్‌డ్ కాన్సెప్ట్.

చాప్టర్ 1 మరియు 16 లలో మనం నేర్చుకున్నాం—Node.js అనేది **Single-threaded** మరియు ఒకే ఒక CPU కోర్ (Core) ని మాత్రమే వాడుకోగలదు. కానీ నేటి తరం కంప్యూటర్లు/సర్వర్లలో 4, 8, 16 లేదా 32 CPU కోర్స్ (Multi-core Processors) ఉంటున్నాయి.

- **సమస్య:** మనం నార్మల్ గా Node.js యాప్ రన్ చేస్తే, అది కేవలం **ఒక్క CPU కోర్** ని మాత్రమే వాడుకుంటుంది. మిగతా కోర్స్ అన్నీ ఖాళీగా ఉంటాయి. సర్వర్‌కి ఒకేసారి లక్షలాది రిక్వెస్ట్‌లు వస్తే ఆ ఒక్క కోర్ తట్టుకోలేదు.
- **పరిహారం (Cluster Module):** ఇది ఏం చేస్తుందంటే, మీ కంప్యూటర్‌లో ఎన్ని CPU కోర్స్ ఉన్నాయో... అన్ని Node.js సబ్-ప్రాసెస్లను (**Worker Processes**) క్రియేట్ చేస్తుంది. వీటన్నింటినీ ఒక యజమాని లాగా కంట్రోల్ చేయడానికి ఒక **Primary/Master Process** ఉంటుంది.

---

## 1. Cluster Module ఎలా పనిచేస్తుంది? (Architecture)

1. **Primary Process (మాస్టర్):** ఇది నేరుగా రిక్వెస్ట్‌లను హ్యాండిల్ చేయదు. ఇది కేవలం కంప్యూటర్ లోని CPU కోర్స్ ని చూసి, అన్ని వర్కర్ ప్రాసెస్‌లను పుట్టిస్తుంది (`cluster.fork()`).
2. **Worker Processes (వర్కర్స్):** ఇవన్నీ ఒరిజినల్ Node.js అప్లికేషన్ లాగే పనిచేస్తాయి. ఇవన్నీ ఒకే పోర్ట్ (ఉదాహరణకు: Port 3000) ని షేర్ చేసుకుంటాయి.
3. **Load Distribution (లోడ్ బ్యాలెన్సింగ్):** బయట నుండి రిక్వెస్ట్‌లు రాగానే Primary ప్రాసెస్ వాటన్నింటినీ **Round-Robin ఆల్గారిథమ్** ద్వారా వర్కర్లందరికీ సమానంగా పంచుతుంది (అంటే 1వ రిక్వెస్ట్ 1వ వర్కర్‌కి, 2వ రిక్వెస్ట్ 2వ వర్కర్‌కి... అలా).

---

## 💻 ప్రాక్టికల్ కోడ్ ఎగ్జాంపుల్:

దీనికోసం మనం `node:cluster`, `node:os`, మరియు `node:http` మొడ్యూల్స్ వాడుతాం.

```javascript
import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

// 1. మన కంప్యూటర్ లో ఉన్న మొత్తం CPU కోర్స్ సంఖ్యను తెలుసుకుంటున్నాం
const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`👑 Primary Process ${process.pid} is running.`);
  console.log(`Total CPU Cores available: ${numCPUs}. Forking workers...`);

  // 2. ప్రతి CPU కోర్ కి ఒక వర్కర్ ని క్రియేట్ చేస్తున్నాం
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork(); // ఇది ఒక కొత్త వర్కర్ ప్రాసెస్ ని పుట్టిస్తుంది
  }

  // ఒకవేళ ఏదైనా వర్కర్ ప్రాసెస్ మధ్యలో క్రాష్ అయితే, కొత్త దాన్ని పుట్టించడం
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `⚠️ Worker ${worker.process.pid} died. Starting a new worker...`,
    );
    cluster.fork();
  });
} else {
  // 3. వర్కర్ ప్రాసెస్ లు రన్ చేసే కోడ్ (ఇవి HTTP సర్వర్ ని రన్ చేస్తాయి)
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Hello from Worker Process ID: ${process.pid}\n`);
    })
    .listen(3000);

  console.log(
    `👷 Worker Process ${process.pid} started and listening on Port 3000.`,
  );
}
```

### 📋 అవుట్‌పుట్ గమనించండి (4 Core CPU అనుకుంటే):

```text
👑 Primary Process 1234 is running.
Total CPU Cores available: 4. Forking workers...
👷 Worker Process 1235 started and listening on Port 3000.
👷 Worker Process 1236 started and listening on Port 3000.
👷 Worker Process 1237 started and listening on Port 3000.
👷 Worker Process 1238 started and listening on Port 3000.

```

ఇప్పుడు మీరు బ్రౌజర్‌లో `http://localhost:3000` ని రిఫ్రెష్ చేస్తూ ఉంటే, ఒక్కోసారి ఒక్కో Worker Process ID తో రెస్పాన్స్ వస్తుంది. అంటే లోడ్ అందరికీ డిస్ట్రిబ్యూట్ అవుతోంది!

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: క్లస్టర్ మొడ్యూల్ వాడేటప్పుడు వర్కర్లందరూ ఒకే పోర్ట్ (Port 3000) ని ఎలా షేర్ చేసుకోగలరు? 'Port already in use' ఎర్రర్ రాదా?**
>
> - **Answer:** నార్మల్ గా అయితే ఎర్రర్ వస్తుంది. కానీ క్లస్టర్ మొడ్యూల్‌లో వింత ఏంటంటే—వర్కర్లు నేరుగా పోర్ట్ ని ఓపెన్ చేయరు. కేవలం Primary (Master) ప్రాసెస్ మాత్రమే Port 3000 ని ఓపెన్ చేసి ఉంచుతుంది. నెట్‌వర్క్ కనెక్షన్ రాగానే Primary ప్రాసెస్ ఆ సాకెట్‌ను (Socket) ఇంటర్నల్ గా వర్కర్లకి పాస్ చేస్తుంది. అందుకే ఎలాంటి ఎర్రర్ రాదు.

> **Q2: రియల్-టైమ్ ప్రాజెక్ట్స్‌లో మనం సొంతంగా ఈ క్లస్టర్ కోడ్ రాస్తామా?**
>
> - **Answer:** రాయవచ్చు, కానీ రియల్-టైమ్ ప్రొడక్షన్ లో డెవలపర్స్ దీనికంటే అడ్వాన్స్డ్ అయిన **PM2 (Process Manager 2)** అనే థర్డ్-పార్టీ టూల్‌ని ఎక్కువగా వాడుతుంటారు. PM2 అనేది మన కోడ్‌ని మార్చకుండానే బ్యాక్‌గ్రౌండ్‌లో క్లస్టర్ మోడ్‌ని (`pm2 start app.js -i max`) ఆటోమేటిక్‌గా మేనేజ్ చేస్తుంది మరియు సర్వర్ డౌన్ అవ్వకుండా చూసుకుంటుంది.

---

# 18. Worker Threads

చాప్టర్ 18 కి స్వాగతం! ఇది Node.js లో ఉండే మరొక అద్భుతమైన మరియు అడ్వాన్స్‌డ్ కాన్సెప్ట్.

చాలా మంది డెవలపర్స్ చాప్టర్ 17 లోని **Cluster** కి మరియు ఈ చాప్టర్ లోని **Worker Threads** కి మధ్య కన్ఫ్యూజ్ అవుతుంటారు. ఇంటర్వ్యూలలో కూడా వీటి మధ్య తేడాలనే ఎక్కువగా అడుగుతారు.

- **Cluster Module (చాప్టర్ 17):** ఇది పూర్తి కొత్త ప్రాసెస్‌లను (Multiple Processes) క్రియేట్ చేస్తుంది. ఒక్కో ప్రాసెస్‌కి విడివిడిగా మెమొరీ (Isolated Memory) ఉంటుంది.
- **Worker Threads (ఈ చాప్టర్):** ఇది ఒకే ప్రాసెస్ లోపల సబ్-థ్రెడ్‌లను (Multiple Threads) క్రియేట్ చేస్తుంది. వీటన్నింటికీ ఒకే మెమొరీ (**Shared Memory**) ఉంటుంది.

---

## 1. CPU-intensive Tasks & Worker Threads

Node.js లో మామూలుగా అసింక్రోనస్ పనులు (I/O, Database Queries) అన్నీ బ్యాక్‌గ్రౌండ్ థ్రెడ్ పూల్ (Libuv) ద్వారా చాలా ఫాస్ట్ గా జరిగిపోతాయి. కానీ ఒక పెద్ద **Mathematical Calculation, Image Manipulation, లేదా Video Processing** వంటి CPU-heavy పనులు వస్తే మాత్రం మెయిన్ థ్రెడ్ స్తంభించిపోతుంది.

ఇలాంటి పనులను మెయిన్ థ్రెడ్ నుండి విడదీసి, పారలల్ గా రన్ చేయడానికి `node:worker_threads` మొడ్యూల్ ఉపయోగపడుతుంది.

---

## 2. Message Passing (కమ్యూనికేషన్ ఎలా జరుగుతుంది?)

మెయిన్ థ్రెడ్ (Parent) మరియు వర్కర్ థ్రెడ్ (Worker) ఒకదానితో ఒకటి మాట్లాడుకోవడానికి **Message Passing (`postMessage` మరియు `on('message')`)** విధానాన్ని వాడుకుంటాయి.

### 💻 ప్రాక్టికల్ కోడ్ ఎగ్జాంపుల్:

మనం ఒకే ఫైల్‌లో మెయిన్ థ్రెడ్ కోడ్ మరియు వర్కర్ థ్రెడ్ కోడ్ రెండింటినీ రాయవచ్చు. దానికోసం `isMainThread` అనే ప్రాపర్టీని వాడుతాం.

```javascript
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

if (isMainThread) {
  // === 👑 ఇది MAIN THREAD లో రన్ అవుతుంది ===
  console.log(
    "Main Thread: Starting a heavy calculation in a worker thread...",
  );

  // కొత్త వర్కర్ థ్రెడ్‌ని క్రియేట్ చేస్తున్నాం మరియు దానికి 'workerData' ద్వారా డేటా పంపుతున్నాం
  const worker = new Worker(__filename, {
    workerData: { limit: 1000000000 },
  });

  // వర్కర్ నుండి రిజల్ట్ రాగానే రిసీవ్ చేసుకుంటున్నాం
  worker.on("message", (result) => {
    console.log(`Main Thread: Success! Calculation Result = ${result}`);
  });

  worker.on("error", (err) => console.error(err));
  worker.on("exit", (code) =>
    console.log(`Worker stopped with exit code ${code}`),
  );

  console.log(
    "Main Thread: I am free! I can handle other users' requests now.",
  );
} else {
  // === 👷 ఇది WORKER THREAD లో రన్ అవుతుంది ===
  console.log(
    `Worker Thread: Received limit = ${workerData.limit}. Calculating...`,
  );

  // Heavy CPU-intensive task (భారీ లూప్)
  let count = 0;
  for (let i = 0; i < workerData.limit; i++) {
    count++;
  }

  // వచ్చిన రిజల్ట్‌ని తిరిగి మెయిన్ థ్రెడ్‌కి పంపుతున్నాం
  parentPort.postMessage(count);
}
```

### 📋 అవుట్‌పుట్ గమనించండి:

```text
Main Thread: Starting a heavy calculation in a worker thread...
Main Thread: I am free! I can handle other users' requests now.
Worker Thread: Received limit = 1000000000. Calculating...
Main Thread: Success! Calculation Result = 1000000000

```

గమనించారా? మెయిన్ థ్రెడ్ వర్కర్ ని స్టార్ట్ చేసి, లూప్ పూర్తి అయ్యేదాకా ఆగకుండా తర్వాతి లైన్ రన్ చేసుకుంటూ వెళ్ళిపోయింది ("I am free..."). వర్కర్ తన పని పూర్తి చేసాక రిజల్ట్ పంపించాడు.

---

## 3. Shared Memory Basics (మెమొరీని షేర్ చేసుకోవడం)

పైన చూసిన `postMessage` ద్వారా డేటా పంపినప్పుడు, Node.js ఆ డేటాను కాపీ చేసి (Clone) పంపుతుంది. ఒకవేళ డేటా చాలా పెద్దగా (ఉదాహరణకు 1GB Array) ఉంటే, దాన్ని కాపీ చేయడం వల్ల టైమ్ వేస్ట్ అవుతుంది.

దీన్ని సాల్వ్ చేయడానికి **Shared Memory** కాన్సెప్ట్ ఉంది. దీని కోసం JavaScript లో `SharedArrayBuffer` ని వాడుతాం. దీనివల్ల మెయిన్ థ్రెడ్ మరియు వర్కర్ థ్రెడ్ ఇద్దరూ ఒకే మెమొరీ ముక్కని నేరుగా యాక్సెస్ చేయగలరు, కాపీ చేయాల్సిన అవసరం లేదు.

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: Cluster Module కి మరియు Worker Threads కి మధ్య ఉన్న ప్రధాన వ్యత్యాసం ఏంటి?**
>
> - **Answer:** > \* **Cluster:** ఇది మల్టిపుల్ **Processes** ని క్రియేట్ చేస్తుంది. ప్రతి ప్రాసెస్‌కి విడివిడిగా ఓన్ మెమొరీ, ఓన్ V8 ఇంజిన్ ఇన్‌స్టాన్స్ ఉంటాయి. ఇది సాధారణంగా నెట్‌వర్క్ లోడ్‌ని బ్యాలెన్స్ (HTTP Load Balancing) చేయడానికి వాడతారు.
> - **Worker Threads:** ఇది ఒకే ప్రాసెస్ లోపల మల్టిపుల్ **Threads** ని క్రియేట్ చేస్తుంది. ఇవన్నీ ఒకే మెమొరీని షేర్ చేసుకుంటాయి. ఇది కేవలం CPU-intensive (భారీ క్యాలిక్యులేషన్స్) పనుల కోసం వాడతారు.

> **Q2: Node.js లో ఒకేసారి వందల సంఖ్యలో Worker Threads ని క్రియేట్ చేయవచ్చా?**
>
> - **Answer:** చేయకూడదు! థ్రెడ్‌లను క్రియేట్ చేయడం మరియు వాటిని మేనేజ్ చేయడానికి CPU పై చాలా భారం పడుతుంది (Thread overhead). ఒకవేళ మీ కంప్యూటర్‌లో 4 CPU కోర్స్ ఉంటే, 4 లేదా 5 థ్రెడ్‌ల వరకు క్రియేట్ చేయడం కరెక్ట్. అంతకంటే ఎక్కువ భారీ టాస్క్‌లు వస్తే **Worker Pool** (థ్రెడ్‌లను ముందే క్రియేట్ చేసి ఉంచి, ఒకదాని తర్వాత ఒకటి టాస్క్‌లు ఇవ్వడం) కాన్సెప్ట్‌ని వాడాలి.

---

# 19. Timers & Event Loop

చాప్టర్ 19 కి స్వాగతం! ఇది Node.js లోనే అత్యంత అడ్వాన్స్‌డ్ మరియు ఇంటర్వ్యూలలో కచ్చితంగా డెవలపర్స్ యొక్క నాలెడ్జ్ ని టెస్ట్ చేసే **అల్టిమేట్ కాన్సెప్ట్ — Event Loop (ఈవెంట్ లూప్)**.

చాప్టర్ 2 లో మనం కొన్ని టైమర్స్ గురించి బ్రీఫ్ గా తెలుసుకున్నాం, కానీ ఈ చాప్టర్‌లో అవి బ్యాక్‌గ్రౌండ్‌లో ఏ ఆర్డర్‌లో రన్ అవుతాయో, ఈవెంట్ లూప్ లోపల అసలు ఏం జరుగుతుందో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Event Loop అంటే ఏమిటి?

Node.js అనేది Single-threaded (ఒక్కడే వర్కర్ ఉంటాడు) అని మనకు తెలుసు. మరి డేటాబేస్ క్వెరీలు, నెట్‌వర్క్ రిక్వెస్ట్‌లు, ఫైల్ రీడింగ్స్ లాంటి వందలాది అసింక్రోనస్ పనులను ఆ ఒక్క థ్రెడ్ ఎలా మేనేజ్ చేయగలుగుతుంది?

దీనికి సమాధానమే **Event Loop**. ఇది నిరంతరాయంగా తిరిగే ఒక లూప్. ఇది బ్యాక్‌గ్రౌండ్ (Libuv/OS) లో పూర్తయిన అసింక్రోనస్ పనుల యొక్క కాల్‌బ్యాక్‌లను (Callbacks) తీసుకుని, మెయిన్ థ్రెడ్ ఖాళీగా ఉన్నప్పుడు ఎగ్జిక్యూట్ చేస్తూ ఉంటుంది.

---

## 2. Event Loop Phases (ఈవెంట్ లూప్ యొక్క దశలు)

ఈవెంట్ లూప్ ఒక రౌండ్ తిరిగినప్పుడు (దీన్ని ఒక **Tick** అంటారు), అది వరుసగా 6 ముఖ్యమైన ఫేజెస్ (Phases) గుండా వెళ్తుంది. ప్రతి ఫేజ్ కి ఒక ప్రత్యేకమైన **Callback Queue** (క్యూ) ఉంటుంది:

```text
   ┌───────────────────────────┐
┌─>│          Timers           │ ──> setTimeout(), setInterval()
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │     Pending Callbacks     │ ──> OS ఎర్రర్స్ (e.g. TCP error)
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │       Idle, Prepare       │ ──> ఇంటర్నల్ గా Node.js వాడుకుంటుంది
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │           Poll            │ ──> కొత్త I/O ఈవెంట్స్, డేటాబేస్, ఫైల్స్ రీడ్
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  │           Check           │ ──> setImmediate()
│  └─────────────┬─────────────┘
│  ┌─────────────▼─────────────┐
│  └───  Close Callbacks   ────┘ ──> socket.on('close')
└──────────────────────────────┘

```

1. **Timers Phase:** `setTimeout()` మరియు `setInterval()` ల సమయం ముగిసిన తర్వాత వాటి కాల్‌బ్యాక్‌లు ఇక్కడ రన్ అవుతాయి.
2. **Pending Callbacks Phase:** కొన్ని సిస్టమ్ ఆపరేషన్ల కాల్‌బ్యాక్‌లు (ఉదాహరణకు TCP ఎర్రర్స్) ఇక్కడ ఎగ్జిక్యూట్ అవుతాయి.
3. **Idle, Prepare Phase:** ఇది కేవలం Node.js తన ఇంటర్నల్ పనుల కోసం వాడుకుంటుంది.
4. **Poll Phase:** అత్యంత ముఖ్యమైన దశ. కొత్తగా వచ్చే I/O రిక్వెస్ట్‌లు (ఫైల్స్, నెట్‌వర్క్, డేటాబేస్) ఇక్కడే స్వీకరించబడతాయి. ఒకవేళ టైమర్స్ ఏవీ లేకపోతే ఈవెంట్ లూప్ ఇక్కడే కాసేపు ఆగి (Wait చేసి) కొత్త ఈవెంట్స్ కోసం చూస్తుంది.
5. **Check Phase:** `setImmediate()` యొక్క కాల్‌బ్యాక్‌లు కచ్చితంగా ఇక్కడే రన్ అవుతాయి.
6. **Close Callbacks Phase:** క్లోజ్ అయిన ఈవెంట్స్ (ఉదాహరణకు: `socket.on('close', ...)`) ఇక్కడ రన్ అవుతాయి.

---

## 3. Microtask Queue & `process.nextTick()` (ది సీక్రెట్ లేయర్స్)

పైన చూసిన 6 ఫేజెస్ కాకుండా, వీటికంటే అత్యంత పవర్‌ఫుల్ అయిన రెండు క్యూలు (Queues) బ్యాక్‌గ్రౌండ్‌లో ఉంటాయి. ఇవి ఈవెంట్ లూప్ లో భాగం కాదు, కానీ ఈవెంట్ లూప్ ఒక ఫేజ్ నుండి ఇంకో ఫేజ్ కి మారేటప్పుడు (లేదా ఒక టాస్క్ అవ్వగానే) వీటిని చెక్ చేస్తుంది:

1. **`process.nextTick()` Queue:** దీనికి అన్నింటికంటే హయ్యెస్ట్ ప్రయారిటీ ఉంటుంది.
2. **Microtask Queue (Promises):** `Promise.resolve().then()` మరియు `queueMicrotask()` ల కాల్‌బ్యాక్‌లు ఇందులో ఉంటాయి.

> 🏎️ **ఎగ్జిక్యూషన్ రూల్:** `process.nextTick()` క్యూ ఖాళీ అయ్యాకనే Microtask Queue (Promises) రన్ అవుతాయి. ఇవి రెండు పూర్తిగా ఖాళీ అయ్యాకనే ఈవెంట్ లూప్ తన నెక్స్ట్ ఫేజ్ లోని టాస్క్ కి వెళ్తుంది.

---

## 💻 ప్రాక్టికల్ కోడ్ ఎగ్జాంపుల్ (ఆర్డర్ తెలుసుకోవడం):

ఈ క్రింది కోడ్‌ని రన్ చేస్తే ఈవెంట్ లూప్ ఎలా పనిచేస్తుందో క్లియర్ గా అర్థమవుతుంది:

```javascript
import fs from "node:fs";

// 1. I/O ఆపరేషన్ (Poll Phase లోకి వెళ్ళడానికి)
fs.readFile(__filename, () => {
  console.log("--- Inside I/O Callback (Poll Phase) ---");

  setTimeout(() => {
    console.log("⏱️ setTimeout inside I/O");
  }, 0);

  setImmediate(() => {
    console.log("🏃 setImmediate inside I/O");
  });

  process.nextTick(() => {
    console.log("🔥 process.nextTick inside I/O");
  });

  Promise.resolve().then(() => {
    console.log("💎 Promise inside I/O");
  });
});

console.log("🚀 Synchronous Code - Start");
```

### 📋 అవుట్‌పుట్ (Output):

```text
🚀 Synchronous Code - Start
--- Inside I/O Callback (Poll Phase) ---
🔥 process.nextTick inside I/O
💎 Promise inside I/O
🏃 setImmediate inside I/O
⏱️ setTimeout inside I/O

```

### 🧠 ఎందుకు ఈ ఆర్డర్ వచ్చింది? (In-depth Reason):

1. మొదట `Synchronous Code` రన్ అయింది.
2. ఫైల్ రీడ్ అవ్వగానే ఈవెంట్ లూప్ **Poll Phase** లో ఉంది.
3. Poll Phase లో ఉన్న ఆపరేషన్ ముగియగానే, ఈవెంట్ లూప్ తదుపరి అడుగు వేసేలోపు అన్నింటికంటే ముందే `process.nextTick()` ని, ఆ వెంటనే `Promise` ని రన్ చేసింది.
4. ఇప్పుడు Poll Phase దాటి ఈవెంట్ లూప్ తర్వాతి ఫేజ్ అయిన **Check Phase** కి వెళ్తుంది. Check Phase లో `setImmediate()` ఉంది కాబట్టి అది రన్ అయింది.
5. ఆ తర్వాత లూప్ మళ్ళీ మొదటి నుండి తిరిగి వచ్చేటప్పుడు **Timers Phase** లో `setTimeout()` ని రన్ చేసింది.
   _(గమనిక: అందుకే I/O కాల్‌బ్యాక్ లోపల ఎప్పుడూ `setImmediate`, `setTimeout` కంటే ముందే రన్ అవుతుంది)._

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `setTimeout(..., 0)` కి మరియు `setImmediate()` కి తేడా ఏంటి?**
>
> - **Answer:** మీరు నార్మల్ కోడ్‌లో (I/O బయట) రాస్తే, ఈ రెండింటిలో ఏది ముందు రన్ అవుతుంది అనేది కంప్యూటర్ పర్ఫార్మెన్స్ బట్టి మారుతుంది (Non-deterministic). కానీ, మీరు ఒక ఫైల్ రీడ్ లేదా నెట్‌వర్క్ కాల్‌బ్యాక్ (I/O Cycle) లోపల రాస్తే మాత్రం, **`setImmediate()` ఎల్లప్పుడూ `setTimeout` కంటే ముందే రన్ అవుతుంది**, ఎందుకంటే Poll Phase తర్వాత వెంటనే వచ్చేది Check Phase (`setImmediate`).

> **Q2: ఒకవేళ `process.nextTick()` లోపల పదే పదే మళ్ళీ `process.nextTick()` ని లూప్ లా పిలిస్తే ఏమవుతుంది?**
>
> - **Answer:** `process.nextTick()` క్యూ పూర్తిగా ఖాళీ అయ్యేదాకా ఈవెంట్ లూప్ తన తర్వాతి ఫేజ్‌కి వెళ్ళలేదు. కాబట్టి మనం లూప్‌లో దాన్ని పిలిస్తే ఈవెంట్ లూప్ అక్కడే స్తంభించిపోతుంది. దీనివల్ల మిగతా ఏ I/O లేదా టైమర్ పనులు జరగవు. దీన్నే **I/O Starvation** అంటారు.

---

# 20. Asynchronous Programming

చాప్టర్ 20 కి స్వాగతం! Node.js లో **Asynchronous Programming** అనేది బ్యాకెండ్ డెవలప్‌మెంట్‌కు అత్యంత ప్రాణాధారమైనది. డేటాబేస్ నుండి డేటా తేవడం లేదా ఫైల్స్ చదవడం లాంటి టైమ్ పట్టే పనుల వల్ల సర్వర్ ఆగిపోకుండా (Block అవ్వకుండా) ఉండటానికి ఈ అసింక్రోనస్ పద్ధతులు వాడతాం.

కాలక్రమేణా JavaScript లో ఈ అసింక్రోనస్ కోడ్ రాసే విధానం ఎలా మారిందో, మరియు మోడరన్ డెవలప్‌మెంట్‌లో వాడే పద్ధతులను ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Callbacks & Callback Hell

**Callback:** ఒక పని పూర్తయిన తర్వాత రన్ అవ్వాలని మనం పాస్ చేసే ఫంక్షనే కాల్‌బ్యాక్.

**Callback Hell (కాల్‌బ్యాక్ హెల్):** ఒకదానిపై ఒకటి ఆధారపడి ఉన్న అసింక్రోనస్ పనులు ఎక్కువైనప్పుడు, కాల్‌బ్యాక్ లోపల ఇంకో కాల్‌బ్యాక్, దాని లోపల మరో కాల్‌బ్యాక్ రాయాల్సి వస్తుంది. దీనివల్ల కోడ్ పక్కకు సాగిపోతూ పిరమిడ్ ఆకారంలో తయారవుతుంది. దీన్నే **Callback Hell** లేదా **Pyramid of Doom** అంటారు. ఈ కోడ్‌ని చదవడం, మెయింటైన్ చేయడం చాలా నరకం.

```javascript
// ❌ Callback Hell ఎగ్జాంపుల్:
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getPaymentDetails(orders[0].id, (payment) => {
      console.log(payment);
      // ఇలా రాసుకుంటూ వెళ్తే కోడ్ కన్ఫ్యూజ్ అయిపోతుంది
    });
  });
});
```

---

## 2. Promises & Async/Await (ఆధునిక పరిష్కారం)

کాల్‌బ్యాక్ హెల్ సమస్యను తీర్చడానికి **Promises** వచ్చాయి. ప్రామిస్ అంటే "నేను భవిష్యత్తులో నీకు డేటా ఇస్తాను (Resolve), లేదా ఫెయిల్ అయితే ఎర్రర్ ఇస్తాను (Reject)" అని చెప్పే ఒక ఆబ్జెక్ట్.

దీన్ని ఇంకా సులువుగా మార్చడానికి **`async/await`** వచ్చింది. దీనివల్ల అసింక్రోనస్ కోడ్ కూడా చూడటానికి నార్మల్ సింక్రోనస్ (లైన్ బై లైన్) కోడ్ లాగే క్లీన్ గా కనిపిస్తుంది.

```javascript
// ✅ Async/Await & Error Handling (try-catch) తో క్లీన్ కోడ్:
async function getUserPaymentFlow() {
  try {
    const user = await getUser(userId);
    const orders = await getOrders(user.id);
    const payment = await getPaymentDetails(orders[0].id);
    console.log(payment);
  } catch (error) {
    console.error("❌ ఏదో తప్పు జరిగింది:", error.message);
  }
}
```

---

## 3. Promise Combinators (మల్టిపుల్ ప్రామిసెస్ హ్యాండ్లింగ్)

రియల్-టైమ్‌లో ఒకేసారి 3 లేదా 4 API ల నుండి పారలల్ గా (Parallel) డేటా తేవాల్సి వచ్చినప్పుడు ఈ క్రింది 4 మెథడ్స్ వాడతాం. వీటి మధ్య తేడాలు ఇంటర్వ్యూలలో 100% అడుగుతారు.

### 3.1 `Promise.all([p1, p2, p3])`

- **విధానం:** అన్ని ప్రామిసెస్ సక్సెస్ అవ్వాలి.
- **రిజల్ట్:** ఒక్క ప్రామిస్ ఫెయిల్ (Reject) అయినా, ఇది వెంటనే మిగతా వాటిని వదిలేసి ఎర్రర్ ఇచ్చేస్తుంది (**All or Nothing**).
- **ఎప్పుడు వాడాలి?:** ఒక పని జరగడానికి అన్ని వివరాలు కచ్చితంగా కావాలనుకున్నప్పుడు.

### 3.2 `Promise.allSettled([p1, p2, p3])`

- **విధానం:** ఏది సక్సెస్ అయినా, ఫెయిల్ అయినా అన్ని ప్రామిసెస్ ముగిసేవరకు ఆగుతుంది.
- **రిజల్ట్:** ప్రతి ప్రామిస్ యొక్క స్టేటస్ (`fulfilled` లేదా `rejected`) మరియు వాల్యూని ఒక అర్రే (Array) రూపంలో ఇస్తుంది. ఇది ఎప్పటికీ ఫెయిల్ అవ్వదు.
- **ఎప్పుడు వాడాలి?:** ఒకదానితో ఒకటి సంబంధం లేని పనులు ఉన్నప్పుడు (ఉదాహరణకు: 3 వేర్వేరు అకౌంట్ల నుండి డేటా తెస్తున్నప్పుడు, ఒకటి ఫెయిల్ అయినా మిగతా రెండు డేటా మనకు కావాలి).

### 3.3 `Promise.race([p1, p2, p3])`

- **విధానం:** పందెం (Race) లాంటిది.
- **రిజల్ట్:** అందరికంటే ముందే ఏ ప్రామిస్ ముగిస్తే (అది సక్సెస్ అయినా సరే, ఫెయిల్ అయినా సరే) దాని రిజల్ట్‌ని ఇచ్చేస్తుంది.
- **ఎప్పుడు వాడాలి?:** ఏదైనా ఒక టాస్క్‌కు టైమౌట్ (Timeout) సెట్ చేయాలనుకున్నప్పుడు.

### 3.4 `Promise.any([p1, p2, p3])`

- **విధానం:** అందరికంటే ముందు **సక్సెస్** అయ్యే దాని కోసం చూస్తుంది.
- **రిజల్ట్:** మొదటిసారి ఏ ప్రామిస్ అయితే సక్సెస్ (Resolve) అవుతుందో దాని వాల్యూ ఇస్తుంది. ఒకవేళ అన్ని ప్రామిసెస్ ఫెయిల్ అయితేనే ఇది ఎర్రర్ (`AggregateError`) ఇస్తుంది.
- **ఎప్పుడు వాడాలి?:** ఒకే డేటా కోసం రెండు వేర్వేరు సర్వర్లకి రిక్వెస్ట్ పంపినప్పుడు, ఏ సర్వర్ ముందుగా రెస్పాన్స్ ఇస్తే ఆ డేటా వాడుకోవడానికి.

---

## 💻 ప్రాక్టికల్ కోడ్ ఎగ్జాంపుల్:

```javascript
const makePromise = (data, delay, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldFail
        ? reject(`❌ Error from ${data}`)
        : resolve(`✅ Success from ${data}`);
    }, delay);
  });
};

const p1 = makePromise("Server A", 1000);
const p2 = makePromise("Server B", 2000, true); // ఇది ఫెయిల్ అవుతుంది
const p3 = makePromise("Server C", 1500);

// 1. Promise.all -> p2 ఫెయిల్ కాబట్టి మొత్తం ఫెయిల్ అవుతుంది
Promise.all([p1, p2, p3])
  .then((res) => console.log("all:", res))
  .catch((err) => console.log("all catch:", err)); // ఇక్కడికి వస్తుంది

// 2. Promise.allSettled -> సక్సెస్, ఫెయిల్ రెండింటి లిస్ట్ ఇస్తుంది
Promise.allSettled([p1, p2, p3]).then((res) => console.log("allSettled:", res));

// 3. Promise.any -> మొదటి సక్సెస్ (Server A) ని ఇస్తుంది
Promise.any([p1, p2, p3]).then((res) => console.log("any:", res)); // Server A
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `Promise.all()` కి మరియు `Promise.allSettled()` కి మధ్య ఉన్న ముఖ్యమైన తేడా ఏంటి?**
>
> - **Answer:** `Promise.all()` లో ఏ ఒక్క ప్రామిస్ రిజెక్ట్ అయినా, అది మిగతా సక్సెస్ అయిన వాటి డేటాని కూడా ఇవ్వకుండా వెంటనే క్యాచ్ (`catch`) బ్లాక్ లోకి వెళ్ళిపోతుంది. కానీ `Promise.allSettled()` అన్ని ప్రామిసెస్ ముగిసేవరకు (సక్సెస్ లేదా ఫెయిల్) ఆగి, ప్రతి దాని రిజల్ట్‌ను విడివిడిగా చూపిస్తుంది, ఇది ఎప్పటికీ రిజెక్ట్ అవ్వదు.

> **Q2: `async/await` వాడేటప్పుడు ఎర్రర్ హ్యాండ్లింగ్ (Error Handling) చేయడం మర్చిపోతే ఏమవుతుంది?**
>
> - **Answer:** ఒకవేళ అసింక్రోనస్ ఆపరేషన్ ఫెయిల్ అయితే, అది `UnhandledPromiseRejection` ఎర్రర్‌కు దారితీస్తుంది. మోడరన్ Node.js వర్షన్లలో ఇలా అన్‌హ్యాండిల్డ్ ప్రామిస్ ఎర్రర్ వస్తే అప్లికేషన్ అక్కడికక్కడే క్రాష్ (Exit) అయిపోతుంది. అందుకే `async/await` తో పాటు కచ్చితంగా `try-catch` బ్లాక్ వాడాలి.

---

# 21. Error Handling

చాప్టర్ 21 కి స్వాగతం! ప్రొడక్షన్ లెవెల్ బ్యాకెండ్ డెవలప్‌మెంట్‌లో **Error Handling (ఎర్రర్ హ్యాండ్లింగ్)** అనేది ఒక అప్లికేషన్ యొక్క స్థిరత్వాన్ని (Stability) నిర్ణయించే అత్యంత కీలకమైన భాగం. సరిగ్గా ఎర్రర్ హ్యాండ్లింగ్ చేయకపోతే, చిన్న తప్పు జరిగినా మీ సర్వర్ మొత్తం క్రాష్ అయిపోయి వెబ్‌సైట్ డౌన్ అయిపోతుంది.

Node.js లో విభిన్న రకాల ఎర్రర్స్ మరియు వాటిని ఎలా హ్యాండిల్ చేయాలో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Synchronous vs Asynchronous Errors

కోడ్ రన్ అయ్యే విధానాన్ని బట్టి ఎర్రర్స్ రెండు రకాలుగా వస్తాయి:

### 1.1 Synchronous Errors

లైన్ బై లైన్ రన్ అయ్యే నార్మల్ కోడ్‌లో వచ్చే ఎర్రర్స్‌ని ఇవి అంటారు. వీటిని మనం చాలా ఈజీగా **`try-catch`** బ్లాక్ వాడి ఆపవచ్చు.

```javascript
function syncExample() {
  try {
    const user = JSON.parse("{ invalid json }"); // ఎర్రర్ వస్తుంది
  } catch (error) {
    console.error("❌ Sync Error caught:", error.message);
  }
}
syncExample();
```

### 1.2 Asynchronous Errors

`setTimeout`, Callbacks, లేదా Promises వంటి బ్యాక్‌గ్రౌండ్ ఆపరేషన్లలో వచ్చే ఎర్రర్స్. **గుర్తుంచుకోవాల్సిన ముఖ్యమైన విషయం: అసింక్రోనస్ కాల్‌బ్యాక్ లోపల వచ్చే ఎర్రర్‌ని బయట ఉన్న నార్మల్ `try-catch` పట్టుకోలేదు!**

```javascript
// ❌ తప్పుడు విధానం (Error పట్టుకోలేదు, సర్వర్ క్రాష్ అవుతుంది):
try {
    setTimeout(() => {
        throw new Error("Async failure");
    }, 1000);
} catch (err) {
    console.log("Caught?", err); // ఇది రన్ అవ్వదు!
}

// ✅ సరైన విధానం (Promises/Async-Await వాడితే try-catch పనిచేస్తుంది):
const fetchData = () => Promise.reject(new Error("Async failure"));

async function asyncExample() {
    try {
        await fetchData();
    } catch (error) {
        console.error("✅ Async Error caught:", error.message); // ఇక్కడ దొరుకుతుంది
    }
}
async functionExample();

```

---

## 2. Custom Errors (సొంత ఎర్రర్ క్లాస్ క్రియేట్ చేయడం)

రియల్-టైమ్ ప్రాజెక్ట్స్‌లో కేవలం నార్మల్ ఎర్రర్స్ కాకుండా, ఎర్రర్ ఎందుకు వచ్చింది అని చెప్పడానికి (ఉదాహరణకు: Database Error, Validation Error, Authentication Error) మనం సొంతంగా ఎర్రర్ క్లాస్ రాసుకుంటాం. దీనివల్ల క్లయింట్‌కి సరైన **HTTP Status Code** పంపడం సులువవుతుంది.

```javascript
// 1. Custom Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // ఇది మనం ఊహించిన ఎర్రర్ అని చెప్పడానికి
  }
}

// 2. వాడకం (Usage)
function checkAge(age) {
  if (age < 18) {
    throw new AppError("🔞 యుక్తవయస్సు లేని వారికి అనుమతి లేదు!", 400);
  }
  return "Welcome!";
}

try {
  checkAge(15);
} catch (err) {
  console.error(
    `Status: ${err.status} | Code: ${err.statusCode} | Msg: ${err.message}`,
  );
}
```

---

## 3. Uncaught Exceptions & Unhandled Rejections (సర్వర్ క్రాష్ అవ్వకుండా కాపాడేవి)

మనం కోడ్‌లో ఎక్కడైనా `try-catch` పెట్టడం మర్చిపోతే, వచ్చే ఎర్రర్స్ వల్ల సర్వర్ ఆగిపోతుంది. అలాంటప్పుడు ఈ క్రింది రెండు గ్లోబల్ ఈవెంట్స్ సర్వర్‌ని కాపాడుతాయి:

### 3.1 Uncaught Exceptions

సింక్రోనస్ కోడ్‌లో ఎక్కడైనా ఎర్రర్ వచ్చి, దాన్ని ఎవరూ క్యాచ్ చేయకపోతే (`Uncaught Exception`) ఈ ఈవెంట్ ట్రిగ్గర్ అవుతుంది.

### 3.2 Unhandled Promise Rejections

ప్రామిస్ రిజెక్ట్ అయి, దానికి `.catch()` లేదా `try-catch` లేకపోతే (`Unhandled Rejection`) ఈ ఈవెంట్ ట్రిగ్గర్ అవుతుంది.

```javascript
import process from "node:process";

// 🚨 1. హ్యాండిల్ చేయని ప్రామిస్ ఎర్రర్స్ కోసం
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ UNHANDLED REJECTION! Shutting down gracefully...");
  console.error(reason);
  // సర్వర్‌ని క్లోజ్ చేసి, ఆ తర్వాత ప్రాసెస్ ని ఎగ్జిట్ చేయాలి
  // server.close(() => process.exit(1));
});

// 🚨 2. హ్యాండిల్ చేయని నార్మల్ ఎర్రర్స్ కోసం
process.on("uncaughtException", (err) => {
  console.error("💥 UNCAUGHT EXCEPTION! Shutting down...");
  console.error(err.message);
  process.exit(1); // దీనికి కచ్చితంగా ఎగ్జిట్ చేయాలి, ఎందుకంటే సిస్టమ్ స్టేట్ పాడవుతుంది
});

// --- టెస్టింగ్ కోసం ఎర్రర్స్ క్రియేట్ చేద్దాం ---
// ఎక్కడా catch లేని ప్రామిస్
Promise.reject(new Error("Database connection lost!"));

// ఎక్కడా catch లేని నార్మల్ కోడ్
// console.log(someUndefinedVariable);
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `uncaughtException` వచ్చినప్పుడు `process.exit(1)` చేయకుండా సర్వర్‌ని అలాగే రన్ అవ్వనివ్వవచ్చా?**
>
> - **Answer:** అస్సలు చేయకూడదు! `uncaughtException` వచ్చింది అంటే మీ అప్లికేషన్‌లో మీరు ఊహించని పెద్ద తప్పు జరిగిందని అర్థం (ఉదాహరణకు మెమొరీ లీక్ అవ్వడం లేదా ఒక ముఖ్యమైన ఆబ్జెక్ట్ డిలీట్ అవ్వడం). సర్వర్‌ని అలాగే రన్ చేస్తే అది సరిగ్గా పనిచేయదు, వేరే యూజర్ల డేటా మిక్స్ అయిపోయే ప్రమాదం ఉంది. అందుకే ఎర్రర్‌ని లాగ్ (Log) చేసి, సర్వర్‌ని రీస్టార్ట్ చేయడమే కరెక్ట్ పద్ధతి.

> **Q2: `Operational Errors` కి మరియు `Programmer Errors` కి మధ్య తేడా ఏంటి?**
>
> - **Answer:** > \* **Operational Errors:** ఇవి మనం ముందే ఊహించగల ఎర్రర్స్ (ఉదాహరణకు: యూజర్ తప్పుడు పాస్‌వర్డ్ ఇవ్వడం, ఫైల్ లేకపోవడం, నెట్‌వర్క్ స్లోగా ఉండటం). వీటిని `try-catch` లేదా కస్టమ్ ఎర్రర్ క్లాస్ వాడి హ్యాండిల్ చేస్తాం.
> - **Programmer Errors:** ఇవి డెవలపర్ రాసిన తప్పుడు కోడ్ వల్ల వచ్చే బగ్స్ (ఉదాహరణకు: `undefined` ప్రాపర్టీని రీడ్ చేయడం, సింటాక్స్ తప్పులు). ఇవి `uncaughtException` కి దారితీస్తాయి.

---

# 22. Environment Variables

చాప్టర్ 22 కి స్వాగతం! బ్యాకెండ్ అప్లికేషన్ సెక్యూరిటీ మరియు డిప్లాయ్‌మెంట్ (Deployment) లో **Environment Variables (ఎన్విరాన్‌మెంట్ వేరియబుల్స్)** అనేవి అత్యంత ముఖ్యమైన కాన్సెప్ట్.

- **సమస్య:** మీ డేటాబేస్ పాస్‌వర్డ్, సీక్రెట్ API కీలు (JWT Secret, Stripe Key వంటివి) మరియు పోర్ట్ నంబర్లను నేరుగా కోడ్‌లో రాస్తే (Hardcoding)... ఆ కోడ్‌ని GitHub లో పుష్ చేసినప్పుడు మీ రహస్యాలన్నీ బయటపడిపోతాయి. ఎవరైనా మీ డేటాని హ్యాక్ చేయవచ్చు.
- **పరిహారం:** ఈ సీక్రెట్స్ మరియు కాన్ఫిగరేషన్లను కోడ్‌లో కాకుండా సర్వర్ యొక్క సిస్టమ్ ఎన్విరాన్‌మెంట్‌లో దాచాలి. దీన్నే Environment Variables అంటారు.

దీనిని మోడరన్ Node.js లో ఎలా మేనేజ్ చేయాలో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. `process.env` అంటే ఏమిటి?

Node.js రన్ అవుతున్నప్పుడు, ఆ సిస్టమ్ యొక్క ఎన్విరాన్‌మెంట్ వేరియబుల్స్ అన్నింటినీ మనం గ్లోబల్ ఆబ్జెక్ట్ అయిన **`process.env`** ద్వారా యాక్సెస్ చేయవచ్చు.

```javascript
// టెర్మినల్ లో ముందే సెట్ చేసిన PORT వాల్యూ ని రీడ్ చేయడం
const PORT = process.env.PORT || 3000; // ఒకవేళ లేకపోతే డెఫాల్ట్ గా 3000 వాడుకుంటుంది

console.log(`Server will run on port: ${PORT}`);
```

---

## 2. `.env` Files (రహస్యాలను దాచే ఫైల్)

ప్రాజెక్ట్ డెవలప్‌మెంట్ చేసేటప్పుడు ప్రతి వేరియబుల్‌ని టెర్మినల్‌లో టైప్ చేయడం కష్టం కాబట్టి, మన ప్రాజెక్ట్ రూట్ ఫోల్డర్‌లో **`.env`** అనే ఒక ఫైల్‌ని క్రియేట్ చేసి మన సీక్రెట్స్ అన్నింటినీ అందులో భద్రపరుస్తాం.

### 📋 `.env` ఫైల్ స్ట్రక్చర్:

```text
PORT=5000
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=my_super_secret_key_123
NODE_ENV=development

```

> ⚠️ **ముఖ్య గమనిక:** మీ `.env` ఫైల్‌ను ఎప్పుడూ GitHub కి పుష్ చేయకూడదు! దీనికోసం **`.gitignore`** ఫైల్‌లో కచ్చితంగా `.env` అని రాయాలి. టీమ్ మెంబర్స్ కోసం `.env.example` అనే ఫైల్ క్రియేట్ చేసి అందులో పాస్‌వర్డ్స్ లేకుండా కేవలం వేరియబుల్స్ పేర్లు మాత్రమే రాసి ఉంచాలి.

---

## 3. మోడరన్ Node.js లో `.env` ని లోడ్ చేయడం ఎలా?

పూర్వం మనం దీనికోసం `dotenv` అనే థర్డ్-పార్టీ ప్యాకేజీని ఇన్‌స్టాల్ చేసుకునేవాళ్ళం. కానీ, మోడరన్ Node.js లో ఈ ఫీచర్ **ఇన్-బిల్ట్** గా వచ్చేసింది! మనం ఎలాంటి ప్యాకేజ్ ఇన్‌స్టాల్ చేయనవసరం లేదు.

### 💻 రన్ చేసే విధానం (Node.js Built-in Flag):

మీ అప్లికేషన్‌ను రన్ చేసేటప్పుడు టెర్మినల్‌లో `--env-file` అనే ఫ్లాగ్ ఇస్తే చాలు:

```bash
node --env-file=.env app.js

```

### 💻 కోడ్ ఎగ్జాంపుల్ (`app.js`):

```javascript
import process from "node:process";

// .env లోని వేరియబుల్స్ ని నేరుగా వాడుకోవచ్చు
const dbUrl = process.env.DATABASE_URL;
const jwtKey = process.env.JWT_SECRET;
const environment = process.env.NODE_ENV;

console.log(`Environment: ${environment}`);
console.log(`Database Connected to: ${dbUrl}`);

if (!jwtKey) {
  console.error("🚨 FATAL ERROR: JWT_SECRET is not defined!");
  process.exit(1);
}
```

---

## 4. Configuration Management (క్రాస్-ఎన్విరాన్‌మెంట్ మేనేజ్‌మెంట్)

రియల్-టైమ్ ప్రాజెక్ట్స్‌లో మనకు వేర్వేరు స్టేజీలు ఉంటాయి:

1. **Development (లోకల్ కంప్యూటర్):** ఇక్కడ లోకల్ డేటాబేస్ వాడుతాం.
2. **Production (లైవ్ సర్వర్):** ఇక్కడ మెయిన్ పవర్‌ఫుల్ డేటాబేస్ మరియు ఎక్కువ సెక్యూరిటీ వాడుతాం.

వీటిని మేనేజ్ చేయడానికి మనం `config.js` అనే ఒక సెంట్రలైజ్డ్ ఫైల్‌ని క్రియేట్ చేసుకోవడం బెస్ట్ ప్రాక్టీస్:

```javascript
// config.js
import process from "node:process";

export const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DATABASE_URL,
  isProd: process.env.NODE_ENV === "production",
  emailApiKey: process.env.EMAIL_API_KEY,
};

// వేరే ఫైల్ లో వాడకం:
// import { config } from './config.js';
// if (config.isProd) { ... }
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: నా కోడ్‌లో `.env` లోని వేరియబుల్స్ `undefined` అని వస్తున్నాయి, సమస్య ఏమై ఉంటుంది?**
>
> - **Answer:** దీనికి రెండు కారణాలు ఉండవచ్చు:
>
> 1. మీరు అప్లికేషన్ రన్ చేసేటప్పుడు `--env-file=.env` ఫ్లాగ్‌ని ఇవ్వడం మర్చిపోయి ఉండవచ్చు (లేదా పాత వర్షన్లలో `dotenv.config()` ని పిలవకపోవడం).
> 2. మీ `.env` ఫైల్‌లో కీ-వాల్యూ మధ్య స్పేస్‌లు ఇవ్వడం (e.g., `PORT = 5000` అని రాయకూడదు, `PORT=5000` అని మాత్రమే రాయాలి).

> **Q2: `process.env.NODE_ENV` కి ఉన్న ప్రాముఖ్యత ఏంటి?**
>
> - **Answer:** ఇది మీ అప్లికేషన్ ప్రస్తుతం ఏ ఎన్విరాన్‌మెంట్‌లో (Development ఆ లేక Production ఆ) రన్ అవుతుందో చెప్తుంది. దీని ఆధారంగా మనం కోడ్‌లో కండిషన్స్ రాసుకోవచ్చు. ఉదాహరణకు—డెవలప్‌మెంట్‌లో ఉన్నప్పుడు ఎర్రర్ యొక్క పూర్తి వివరాలను (Error Stack) స్క్రీన్ పై చూపించవచ్చు, కానీ ప్రొడక్షన్‌లోకి వెళ్ళాక సెక్యూరిటీ పరంగా ఆ స్టాక్ ట్రేస్‌ని దాచి కేవలం సింపుల్ మెసేజ్ మాత్రమే చూపిస్తాం.

---

# 23. Networking

చాప్టర్ 23 కి స్వాగతం! Node.js లో **Networking (నెట్‌వర్కింగ్)** అనేది చాలా లోతైన (Low-level) మరియు అద్భుతమైన కాన్సెప్ట్. మనం ఇప్పటివరకు నేర్చుకున్న HTTP గానీ, లేదా వెబ్‌సాకెట్స్ (WebSockets) గానీ బ్యాక్‌గ్రౌండ్‌లో ఈ నెట్‌వర్కింగ్ లేయర్స్ పైనే నిర్మించబడ్డాయి.

Node.js లో కంప్యూటర్ల మధ్య డేటాను బదిలీ చేయడానికి ఉపయోగపడే **TCP, UDP మరియు TLS** ప్రోటోకాల్స్ గురించి ఇన్-డెప్త్ గా మరియు చిన్న కోడ్ ఎగ్జాంపుల్స్‌తో నేర్చుకుందాం.

---

## 1. TCP (`net` module)

**TCP (Transmission Control Protocol)** అనేది అత్యంత నమ్మకమైన (Reliable) ప్రోటోకాల్. ఇది రెండు కంప్యూటర్ల మధ్య ఒక కనెక్షన్‌ని ఏర్పరిచి (**Handshake**), డేటా ఏమాత్రం మిస్ అవ్వకుండా, ఏ ఆర్డర్‌లో పంపితే అదే ఆర్డర్‌లో అవతలి వ్యక్తికి చేరేలా చూస్తుంది.

- **ఉపయోగాలు:** HTTP, FTP, SMTP, SSH, మరియు Database connections (MySQL, MongoDB).

Node.js లో దీనికోసం **`node:net`** మొడ్యూల్ ఉంది.

### 💻 TCP Server & Client ఎగ్జాంపుల్:

```javascript
// --- Server Code ---
import net from "node:net";

const server = net.createServer((socket) => {
  console.log("🤝 Client connected to TCP server!");

  // క్లయింట్ నుండి డేటా రాగానే (ఇది బఫర్ రూపంలో వస్తుంది)
  socket.on("data", (data) => {
    console.log(`📩 Client says: ${data.toString()}`);
    socket.write("👋 Hello from TCP Server!"); // రిప్లై పంపుతున్నాం
  });

  socket.on("end", () => console.log("👋 Client disconnected."));
});

server.listen(4000, () => console.log("🚀 TCP Server running on port 4000"));

// --- Client Code (వేరే ఫైల్ లో రన్ చేయవచ్చు) ---
// const client = net.createConnection({ port: 4000 }, () => {
//     client.write('Hello Server!');
// });
// client.on('data', (data) => console.log(data.toString()));
```

---

## 2. UDP (`dgram` module)

**UDP (User Datagram Protocol)** అనేది TCP కి పూర్తిగా రివర్స్. ఇది ఎలాంటి కనెక్షన్ ఏర్పరచుకోదు (**Connectionless**). అవతలి కంప్యూటర్ ఆన్ లో ఉందో లేదో కూడా చెక్ చేయదు, బ్లైండ్ గా డేటా ప్యాకెట్లను (Datagrams) విసిరేస్తూ ఉంటుంది. డేటా మధ్యలో మిస్ అయినా ఇది పట్టించుకోదు, కానీ ఇది **TCP కంటే చాలా ఫాస్ట్**.

- **ఉపయోగాలు:** Live Video Streaming, Online Gaming, Voice Calls (VoIP), మరియు DNS lookups.

Node.js లో దీనికోసం **`node:dgram`** మొడ్యూల్ ఉంది.

### 💻 UDP Server (Receiver) ఎగ్జాంపుльный:

```javascript
import dgram from "node:dgram";

// 'udp4' అంటే IPv4 అని అర్థం
const server = dgram.createSocket("udp4");

server.on("message", (msg, rinfo) => {
  console.log(
    `📩 Received UDP Packet: "${msg}" from ${rinfo.address}:${rinfo.port}`,
  );
});

server.on("listening", () => {
  const address = server.address();
  console.log(`🚀 UDP Server listening on ${address.address}:${address.port}`);
});

server.bind(5000);

// --- UDP Sender Code (ప్యాకెట్ పంపడానికి) ---
// const client = dgram.createSocket('udp4');
// const message = Buffer.from('Fast UDP Data!');
// client.send(message, 5000, 'localhost', () => client.close());
```

---

## 3. TLS Basics

**TLS (Transport Layer Security)** అనేది పైన మనం నేర్చుకున్న TCP కి ఒక **సెక్యూరిటీ కవచం (Encryption)** లాంటిది. పూర్వం దీనిని **SSL** అనేవాళ్ళు.

నార్మల్ TCP లో డేటా ప్లెయిన్ టెక్స్ట్ రూపంలో వెళ్తుంది, కాబట్టి వైఫై (Wi-Fi) హాక్ చేసిన ఎవరైనా మీ పాస్‌వర్డ్‌లను దొంగిలించవచ్చు. కానీ TCP కి TLS తోడితే, డేటా మొత్తం ఎన్‌క్రిప్ట్ అయిపోతుంది. దీనివల్ల మధ్యలో ఎవరైనా డేటాను దొంగిలించినా అది అర్థం కాదు.

- **ఉపయోగం:** HTTPS (Secure Web), మరియు సురక్షితమైన డేటాబేస్ కనెక్షన్స్.

Node.js లో దీనికోసం **`node:tls`** మొడ్యూల్ ఉంది. దీన్ని రన్ చేయడానికి మనకు **Private Key** మరియు **SSL Certificate** (crt ફાઇલ) అవసరం అవుతాయి.

```javascript
import tls from "node:tls";
import fs from "node:fs";

// SSL సర్టిఫికెట్ వివరాలు ఇవ్వాలి
const options = {
  key: fs.readFileSync("server-key.pem"),
  cert: fs.readFileSync("server-cert.pem"),
};

const secureServer = tls.createServer(options, (socket) => {
  console.log("🔒 Secure TLS connection established!");
  socket.write("Welcome to the secure world!\n");
  socket.pipe(socket); // Echo back data securely
});

secureServer.listen(6000, () =>
  console.log("🚀 Secure TLS Server running on port 6000"),
);
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: TCP కి మరియు UDP కి మధ్య ఉన్న ప్రధాన వ్యత్యాసాలు ఏంటి? ఎప్పుడు దేన్ని ఎంచుకోవాలి?**
>
> - **Answer:** > \* **TCP:** ఇది కనెక్షన్-ఓరియెంటెడ్, నమ్మకమైనది (Reliable - డేటా పోదు), డేటా ఆర్డర్ మిస్ అవ్వదు, కానీ కొంచెం స్లో. మీకు డేటా కచ్చితత్వం ముఖ్యమైనప్పుడు (ఉదాహరణకు: Bank Transactions, Login, Web Pages) TCP వాడాలి.
> - **UDP:** ఇది కనెక్షన్-లెస్, అన్-రిలయబుల్ (డేటా ప్యాకెట్స్ మిస్ అవ్వచ్చు), కానీ అత్యంత వేగవంతమైనది. మీకు స్పీడ్ ముఖ్యం, ఒకటి రెండు ఫ్రేమ్‌లు మిస్ అయినా పర్లేదు అనుకున్నప్పుడు (ఉదాహరణకు: PubG లాంటి లైవ్ గేమ్స్, Zoom వీడియో కాల్స్) UDP వాడాలి.

> **Q2: HTTP కి మరియు TCP కి సంబంధం ఏంటి?**
>
> - **Answer:** HTTP అనేది **Application Layer** ప్రోటోకాల్, కానీ అది సొంతంగా డేటాను ఒక కంప్యూటర్ నుండి ఇంకో కంప్యూటర్ కి పంపలేదు. అది బ్యాక్‌గ్రౌండ్‌లో **Transport Layer** లో ఉన్న TCP ప్రోటోకాల్ సహాయంతోనే కనెక్షన్‌ని ఏర్పరచుకుని డేటాని బదిలీ చేస్తుంది. అంటే ప్రతి HTTP రిక్వెస్ట్ కింద ఒక TCP కనెక్షన్ దాగి ఉంటుంది.

---

# 24. Debugging

చాప్టర్ 24 కి స్వాగతం! బ్యాకెండ్ డెవలప్‌మెంట్‌లో **Debugging (డీబగ్గింగ్)** అనేది అత్యంత విలువైన నైపుణ్యం (Skill). కోడ్‌లో బగ్స్ లేదా ఎర్రర్స్ వచ్చినప్పుడు కేవలం `console.log()` లపై మాత్రమే ఆధారపడకుండా, సమస్య ఎక్కడ ఉందో లైవ్ గా పట్టుకోవడానికి Node.js మనకు అద్భుతమైన టూల్స్‌ను అందిస్తుంది.

Node.js లో ప్రొఫెషనల్స్ వాడే ముఖ్యమైన డీబగ్గింగ్ పద్ధతులు మరియు టూల్స్ గురించి ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Node Inspector & Chrome DevTools

Node.js లో ఒక ఇన్‌బిల్ట్ **V8 Inspector** ఉంటుంది. దీని సహాయంతో మనం మన బ్యాకెండ్ కోడ్‌ను నేరుగా మన గూగుల్ క్రోమ్ బ్రౌజర్ (Chrome DevTools) లోపల ఓపెన్ చేసి, ఫ్రంటెండ్ కోడ్‌ని డీబగ్ చేసినట్టే లైన్-బై-лайн చెక్ చేయవచ్చు.

### 💻 దీన్ని ఎలా వాడాలి?:

మీ అప్లికేషన్‌ను రన్ చేసేటప్పుడు `node` పక్కన `--inspect` లేదా `--inspect-brk` అనే ఫ్లాగ్స్ ఇవ్వాలి.

```bash
# 1. నార్మల్ ఇన్‌స్పెక్టర్ ఆన్ చేయడం
node --inspect app.js

# 2. కోడ్ మొదటి లైన్ లోనే ఆగి (Pause అయి) మనం డీబగ్ స్టార్ట్ చేసేలా చేయడం (Highly Recommended)
node --inspect-brk app.js

```

### 🔍 క్రోమ్ బ్రౌజర్‌లో ఓపెన్ చేయడం ఎలా?:

1. పైన ఉన్న కమాండ్ రన్ చేయగానే టెర్మినల్‌లో ఒక లింక్ (`ws://127.0.0.1:9229/...`) వస్తుంది.
2. ఇప్పుడు మీ Chrome Browser ఓపెన్ చేసి, URL బార్‌లో **`chrome://inspect`** అని టైప్ చేసి ఎంటర్ కొట్టండి.
3. అక్కడ "Remote Target" కింద మీ Node.js ఫైల్ కనిపిస్తుంది. దాని పక్కన ఉన్న **"inspect"** బటన్ క్లిక్ చేయండి.
4. ఒక కొత్త విండో ఓపెన్ అవుతుంది. అక్కడ మీరు **Breakpoints** పెట్టుకోవచ్చు, వేరియబుల్స్ లోపల ఏ వాల్యూస్ ఉన్నాయో లైవ్ గా చూడవచ్చు.

---

## 2. VS Code Debugger (అత్యంత సులువైన పద్ధతి)

రియల్-టైమ్ డెవలప్‌మెంట్‌లో బ్రౌజర్‌కి వెళ్ళకుండా, మనం కోడ్ రాసే **VS Code ఎడిటర్ లోపలే** డీబగ్ చేయడం చాలా ఈజీ.

### 🛠️ సెటప్ చేసే విధానం:

1. VS Code లో ఎడమ వైపు ఉన్న **Run and Debug** ఐకాన్ (Play బటన్ లా ఉండి పక్కన ఒక పురుగు గుర్తు ఉంటుంది) పై క్లిక్ చేయండి.
2. అక్కడ **"create a launch.json file"** అనే లింక్ పై క్利క్ చేసి, **Node.js** ఎంచుకోండి.
3. మీ ప్రాజెక్ట్ లో `.vscode/launch.json` అనే ఫైల్ క్రియేట్ అవుతుంది. అందులో కాన్ఫిగరేషన్ ఇలా ఉంటుంది:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/app.js" // మీ మెయిన్ ఫైల్ పేరు
    }
  ]
}
```

4. ఇప్పుడు మీ కోడ్ ఫైల్‌లోకి వచ్చి, ఏ లైన్ లో అయితే కోడ్ ఆగాలో ఆ లైన్ నంబర్ పక్కన క్లిక్ చేస్తే ఒక **ఎర్రటి చుక్క (Breakpoint)** పడుతుంది.
5. `F5` ప్రెస్ చేస్తే డీబగ్గింగ్ స్టార్ట్ అవుతుంది. కోడ్ ఆ ఎర్రటి చుక్క దగ్గరకు రాగానే ఆగిపోతుంది. అక్కడ మీరు వేరియబుల్స్ స్టేట్ ని చెక్ చేసుకోవచ్చు.

---

## 3. Advanced Logging (కేవలం `console.log` సరిపోదు!)

ప్రొడక్షన్ సర్వర్లలో (Live Servers) మనం క్రోమ్ డీబగ్గర్ లేదా VS Code వాడలేము. ఎందుకంటే అక్కడ కోడ్ లైవ్ లో రన్ అవుతూ ఉంటుంది. అలాంటప్పుడు సర్వర్‌లో ఏం జరుగుతుందో తెలుసుకోవడానికి **Logging (లాగింగ్)** ఏకైక మార్గం.

కానీ `console.log()` వాడటం వల్ల కొన్ని నష్టాలు ఉన్నాయి (అది అసింక్రోనస్ కాదు, ఫైల్స్ లోకి సేవ్ చేయలేదు). అందుకే రియల్-టైమ్‌లో **Winston** లేదా **Pino** వంటి ప్రొఫెషనల్ లాగింగ్ లైబ్రరీస్ వాడుతుంటారు.

### 📋 Log Levels (లాగ్ స్థాయిలు):

మనం రాసే లాగ్స్ ని వాటి తీవ్రతను బట్టి విడగొట్టాలి:

- `error`: అప్లికేషన్ క్రాష్ లేదా డేటాబేస్ ఫెయిల్యూర్స్ (వెంటనే యాక్షన్ తీసుకోవాలి).
- `warn`: ఏదైనా తప్పు జరగొచ్చు అని అలర్ట్ చేయడం (e.g., Memory నిండిపోవస్తుండటం).
- `info`: జనరల్ విషయాలు (e.g., Server started on port 3000, Database connected).
- `debug`: డెవలప్‌మెంట్‌లో మాత్రమే చూసే లోతైన వివరాలు.

### 💻 Winston తో ఒక చిన్న కాన్ఫిగరేషన్ ఎగ్జాంపుల్:

_(రియల్ ప్రాజెక్ట్స్ లో `npm i winston` చేసి వాడుకుంటారు)_

```javascript
// ఒక ప్రొఫెషనల్ లాగర్ ఉదాహరణ (Concept)
import fs from "node:fs";

function AppLogger(level, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}\n`;

  // 1. కన్సోల్ లో చూపిస్తున్నాం
  console.log(logMessage.trim());

  // 2. ప్రొడక్షన్ లో అయితే దీన్ని ఒక ఫైల్ లోకి రాస్తాం (తర్వాత చెక్ చేసుకోవడానికి)
  fs.appendFile("server.log", logMessage, () => {});
}

// వాడకం:
AppLogger("info", "Database connected successfully.");
AppLogger("error", "Failed to send welcome email - API Timeout.");
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `--inspect` కి మరియు `--inspect-brk` కి మధ్య ఉన్న వ్యత్యాసం ఏంటి?**
>
> - **Answer:** మీరు `node --inspect app.js` అని రన్ చేస్తే, కోడ్ నార్మల్ గా రన్ అయిపోతుంది. మీరు బ్రౌజర్ ఓపెన్ చేసేలోపే కొన్ని లైన్లు ఎగ్జిక్యూట్ అయిపోవచ్చు. అదే `node --inspect-brk app.js` అని రన్ చేస్తే, కోడ్ మొదటి లైన్ లోనే బ్రేక్ (Pause) అయి ఆగిపోతుంది. మీరు బ్రౌజర్ ఓపెన్ చేసి "Play" బటన్ నొక్కితేనే కోడ్ ముందుకు వెళ్తుంది. కాబట్టి అప్లికేషన్ స్టార్టప్ లో వచ్చే బగ్స్ ని పట్టుకోవడానికి `---inspect-brk` బెస్ట్.

> **Q2: ప్రొడక్షన్ సర్వర్లలో `console.log()` ఎందుకు వాడకూడదు?**
>
> - **Answer:** దీనికి రెండు ముఖ్య కారణాలు ఉన్నాయి:
>
> 1. **Performance:** `console.log` అనేది సింక్రోనస్ (Blocking) ఆపరేషన్. లూప్ లలో లేదా ఎక్కువ రిక్వెస్ట్‌లు వచ్చే రూట్లలో విపరీతంగా `console.log` వాడితే సర్వర్ స్లో అయిపోతుంది.
> 2. **Management:** `console.log` లో టైమ్‌స్టాంప్స్ (ఏ సమయానికి వచ్చింది) లేదా ఎర్రర్ లెవెల్స్ ఉండవు. అలాగే సర్వర్ రీస్టార్ట్ అయితే పాత లాగ్స్ అన్నీ పోతాయి. అందుకే ఫైల్స్ లోకి అసింక్రోనస్ గా రాసే `winston` లేదా `pino` లాంటి లాగర్స్ వాడాలి.

---

# 25. Performance

చాప్టర్ 25 కి స్వాగతం! మన Node.js కోర్ సిరీస్‌లో ఇది చివరి మరియు అత్యంత అడ్వాన్స్‌డ్ చాప్టర్. ప్రొడక్షన్ (Live Server) లో మీ అప్లికేషన్ కొన్ని రోజుల పాటు నిరంతరాయంగా రన్ అవుతున్నప్పుడు, అది స్లో అవ్వకుండా మరియు క్రాష్ అవ్వకుండా ఉండటానికి **Performance Optimization** చాలా ముఖ్యం.

మెమొరీ లీక్స్ అంటే ఏమిటి, లోపల గార్బేజ్ కలెక్షన్ ఎలా పనిచేస్తుంది మరియు Node.js ప్రొఫైలింగ్ ఎలా చేయాలో ఈ చాప్టర్ లో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Memory Leaks & Garbage Collection (GC)

### Garbage Collection (గార్బేజ్ కలెక్షన్)

Node.js లోపల ఉండే **V8 Engine** మెమొరీని ఆటోమేటిక్‌గా మేనేజ్ చేస్తుంది. మనం ఒక ఆబ్జెక్ట్ లేదా వేరియబుల్‌ని క్రియేట్ చేసినప్పుడు దానికి RAM లో కొంత స్పేస్ దొరుకుతుంది. ఆ వేరియబుల్ తో పని అయిపోయాక (అంటే దానికి ఎలాంటి రిఫరెన్స్ లేనప్పుడు), V8 Engine లోని **Garbage Collector** దాన్ని గుర్తించి RAM నుండి డిలీట్ చేస్తుంది.

### Memory Leaks (మెమొరీ లీక్స్)

పని అయిపోయినప్పటికీ, కొన్ని తప్పుడు కోడింగ్ పద్ధతుల వల్ల కొన్ని ఆబ్జెక్ట్స్ కి రిఫరెన్స్ అలాగే ఉండిపోతుంది. దీనివల్ల గార్బేజ్ కలెక్టర్ వాటిని డిలీట్ చేయలేదు. సర్వర్ రన్ అవుతున్న కొద్దీ RAM సైజ్ పెరుగుతూ పోయి, చివరకు `$V8\text{ heap out of memory}$` ఎర్రర్‌తో సర్వర్ క్రాష్ అయిపోతుంది. దీన్నే **Memory Leak** అంటారు.

#### ❌ మెమొరీ లీక్ కి ఒక ముఖ్యమైన కారణం (Global Variables / Closures):

```javascript
const leakedData = []; // గ్లోబల్ అర్రే

function handleRequest(user) {
  // ప్రతి రిక్వెస్ట్ కి డేటాని పుష్ చేస్తున్నాం, కానీ ఎప్పటికీ క్లియర్ చేయడం లేదు
  leakedData.push(user);
}
// సర్వర్‌కి లక్షల రిక్వెస్ట్‌లు వస్తే leakedData అర్రే విపరీతంగా పెరిగిపోయి RAM నిండిపోతుంది.
```

---

## 2. Performance Hooks Module (`node:perf_hooks`)

మన కోడ్‌లో ఏ ఫంక్షన్ లేదా ఏ బ్లాక్ ఆఫ్ కోడ్ రన్ అవ్వడానికి ఎంత సమయం (Millisecond లలో) పడుతుందో కచ్చితంగా లెక్కించడానికి Node.js లో **Performance Hooks** మొడ్యూల్ ఉంది. `Date.now()` కంటే ఇది చాలా ఖచ్చితమైన (High-resolution) సమయాన్ని ఇస్తుంది.

```javascript
import { performance, PerformanceObserver } from "node:perf_hooks";

// 1. పర్ఫార్మెన్స్ మార్కులను గమనించడానికి ఒక అబ్జర్వర్‌ని సెట్ చేస్తున్నాం
const obs = new PerformanceObserver((items) => {
  const entry = items.getEntries()[0];
  console.log(
    `⏱️ Code Block '${entry.name}' took: ${entry.duration.toFixed(4)} ms`,
  );
});
obs.observe({ entryTypes: ["measure"] });

// 2. టైమ్ కొలవడం స్టార్ట్ చేద్దాం
performance.mark("A"); // Start Mark

// ఏదైనా ఒక హెవీ పని (టెస్టింగ్ కోసం లూప్)
let sum = 0;
for (let i = 0; i < 1e7; i++) {
  sum += i;
}

performance.mark("B"); // End Mark

// 3. 'A' నుండి 'B' కి మధ్య ఎంత సమయం పట్టిందో కొలవాలి
performance.measure("Heavy Loop Test", "A", "B");
```

---

## 3. Profiling (ప్రొఫైలింగ్ - బగ్‌లను వెతకడం)

మీ అప్లికేషన్‌లో ఎక్కడో మెమొరీ లీక్ ఉందని లేదా CPU ఎక్కువ వాడుతుందని మీకు అనుమానం వస్తే, దాన్ని కనిపెట్టడానికి **Profiling** చేయాలి.

### A) CPU Profiling (ఇన్‌బిల్ట్ `--prof` ఫ్లాగ్)

మీ కోడ్‌లో ఏ ఫంక్షన్ ఎక్కువ CPU టైమ్ తింటుందో తెలుసుకోవడానికి Node.js లో ఒక ఇన్‌బిల్ట్ టూల్ ఉంది:

```bash
# 1. ప్రొఫైలర్ ఆన్ చేసి యాప్ రన్ చేయండి
node --prof app.js

# (ఇలా రన్ చేసాక ప్రాజెక్ట్ ఫోల్డర్ లో 'isolate-0x...-v8.log' అనే ఒక పెద్ద ఫైల్ క్రియేట్ అవుతుంది)

# 2. ఆ ఫైల్ మనుషులకు అర్థం కాదు, కాబట్టి దాన్ని రీడబుల్ టెక్స్ట్ గా మార్చాలి
node --prof-process isolate-0x104000000-v8.log > processed_profile.txt

```

ఇప్పుడు `processed_profile.txt` ఫైల్ ఓపెన్ చేస్తే, ఏ జావాస్క్రిప్ట్ ఫంక్షన్ ఎంత శాతం CPU ని వాడుకుందో ఒక క్లియర్ టేబుల్ రూపంలో కనిపిస్తుంది.

### B) Memory Leak Profiling (Heap Snapshot)

మెమొరీ లీక్స్ పట్టుకోవడానికి బెస్ట్ పద్ధతి చాప్టర్ 24 లో మనం నేర్చుకున్న **Chrome DevTools** వాడటం.

1. `node --inspect app.js` అని రన్ చేసి `chrome://inspect` ఓపెన్ చేయండి.
2. అక్కడ **Memory** ట్యాబ్ లోకి వెళ్ళండి.
3. **"Take Heap Snapshot"** బటన్ క్లిక్ చేయండి (ఇది మీ రామ్ లో ఉన్న ఆబ్జెక్ట్స్ అన్నింటినీ ఫోటో తీసి ఉంచుతుంది).
4. కాసేపు సర్వర్‌ని వాడాక, మళ్ళీ 2వ సారి Snapshot తీసుకోండి.
5. ఈ రెండు స్నాప్‌షాట్‌లను కంపేర్ (`Comparison` వ్యూ లో) చేస్తే, ఏ ఆబ్జెక్ట్స్ డిలీట్ అవ్వకుండా RAM లో పేరుకుపోతున్నాయో క్లియర్ గా తెలిసిపోతుంది.

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: Node.js లో మెమొరీ లీక్స్ రాకుండా డెవలపర్స్ ఎలాంటి జాగ్రత్తలు తీసుకోవాలి?**
>
> - **Answer:** ప్రధానంగా 3 జాగ్రత్తలు తీసుకోవాలి:
>
> 1. **Avoid Global Variables:** గ్లోబల్ వేరియబుల్స్ కి అటాచ్ అయిన డేటా ఎప్పటికీ డిలీట్ అవ్వదు. కాబట్టి వాటిని వాడకూడదు.
> 2. **Clear Timers:** `setInterval()` లేదా `setTimeout()` వాడినప్పుడు, పని ముగియగానే `clearInterval()` లేదా `clearTimeout()` కచ్చితంగా చేయాలి. లేదంటే ఆ కాల్‌బ్యాక్ లోపల ఉన్న మెమొరీ అలాగే ఉండిపోతుంది.
> 3. **Remove Event Listeners:** ఒక ఈవెంట్‌కి యాడ్ చేసిన లిజనర్స్ (`emitter.on`) ఇక అవసరం లేదు అనుకున్నప్పుడు `emitter.off()` వాడి రిమూవ్ చేయాలి.

> **Q2: `Date.now()` లేదా `console.time()` ఉండగా `perf_hooks` ఎందుకు వాడాలి?**
>
> - **Answer:** `Date.now()` అనేది మిల్లీసెకన్లలో మాత్రమే సమయాన్ని ఇస్తుంది మరియు ఇది సిస్టమ్ క్లాక్ పై ఆధారపడుతుంది (ఒకవేళ సిస్టమ్ టైమ్ మారితే ఇది తప్పు వాల్యూ ఇస్తుంది). కానీ `perf_hooks` లోని `performance.now()` అనేది **High-resolution time** (Microseconds - మిల్లీసెకన్ లోని వెయ్యో వంతు ఖచ్చితత్వంతో) ఇస్తుంది. ఇది సిస్టమ్ టైమ్ తో సంబంధం లేకుండా కేవలం Node.js ప్రాసెస్ స్టార్ట్ అయినప్పటి నుండి సమయాన్ని లెక్కిస్తుంది, కాబట్టి బెంచ్‌మార్కింగ్ (Benchmarking) కి ఇది చాలా అక్యూరేట్.

---

# 26. Process Management

చాప్టర్ 26 కి స్వాగతం! మన Node.js ప్రయాణంలో **Process Management (ప్రాసెస్ మేనేజ్‌మెంట్)** అనేది ప్రొడక్షన్ సర్వర్లను మెయింటైన్ చేయడానికి అత్యంత ముఖ్యమైన లైఫ్-సేవింగ్ కాన్సెప్ట్.

**ఎందుకు వాడతాం?:** మీ బ్యాకెండ్ అప్లికేషన్ లైవ్ సర్వర్‌లో రన్ అవుతున్నప్పుడు, దాన్ని రీస్టార్ట్ చేయాల్సి రావచ్చు లేదా క్లౌడ్ సర్వర్లు (AWS, Docker, Kubernetes వంటివి) మీ యాప్‌ను ఆపేయమని సిగ్నల్ ఇవ్వవచ్చు. అలాంటప్పుడు డేటాబేస్ కనెక్షన్లు సగం లోనే క్రాష్ అవ్వకుండా, ప్రస్తుతం నడుస్తున్న యూజర్ రిక్వెస్ట్‌లు సేఫ్ గా పూర్తయ్యాక సర్వర్‌ని ఎలా క్లోజ్ చేయాలో (**Graceful Shutdown**) ఈ చాప్టర్ లో ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Process Lifecycle & Exit Codes

ఒక Node.js అప్లికేషన్ రన్ అవ్వడం స్టార్ట్ అయినప్పటి నుండి క్లోజ్ అయ్యే వరకు ఉండే దశలను **Process Lifecycle** అంటారు. ఈవెంట్ లూప్ లో ఎలాంటి పనులు (Timers, I/O, Listeners) మిగిలి లేనప్పుడు Node.js ప్రాసెస్ ఆటోమేటిక్‌గా ముగుస్తుంది.

ప్రాసెస్ ముగిసేటప్పుడు అది ఆపరేటింగ్ సిస్టమ్ (OS) కి ఒక నంబర్‌ను ఇస్తుంది, దాన్నే **Exit Code** అంటారు.

- **`0` (Success):** అప్లికేషన్ ఎలాంటి ఎర్రర్స్ లేకుండా ప్రశాంతంగా తన పని ముగించుకుని ఆగిపోయిందని అర్థం.
- **`1` (Uncaught Fatal Exception):** కోడ్‌లో ఏదో పెద్ద ఎర్రర్ వచ్చి, దాన్ని ఎక్కడా క్యాచ్ చేయకపోవడం వల్ల యాప్ క్రాష్ అయిందని అర్థం.
- **`130` (Terminated by Ctrl+C):** యూజర్ మాన్యువల్‌గా ప్రాసెస్‌ను ఆపేశారని అర్థం.

```javascript
import process from "node:process";

// మనం మాన్యువల్‌గా ఎగ్జిట్ కోడ్ సెట్ చేయవచ్చు
if (somethingWentWrong) {
  process.exit(1); // 1 తో ఎగ్జిట్ అయితే రీస్టార్ట్ చేయమని PM2/Docker కి తెలుస్తుంది
}
```

---

## 2. Signals (SIGINT, SIGTERM)

ఆపరేటింగ్ సిస్టమ్ (OS) ఒక రన్నింగ్ ప్రాసెస్‌తో మాట్లాడటానికి **Signals (సిగ్నల్స్)** ని వాడుతుంది. Node.js లో `process` ఆబ్జెక్ట్ ద్వారా ఈ సిగ్నల్స్‌ను వినవచ్చు (Listen చేయవచ్చు).

- **`SIGINT` (Signal Interrupt):** మీరు టెర్మినల్‌లో రన్ అవుతున్న యాప్‌ను **Ctrl + C** నొక్కి ఆపినప్పుడు ఈ సిగ్నల్ జనరేట్ అవుతుంది.
- **`SIGTERM` (Signal Terminate):** క్లౌడ్ సర్వర్లు (AWS, Kubernetes) లేదా PM2 మీ అప్లికేషన్‌ను క్లోజ్ చేయాలనుకున్నప్పుడు పంపే అఫీషియల్ సిగ్నల్ ఇది. ఇది "దయచేసి నీ పనులు ముగించుకుని సేఫ్ గా ఆగిపో" అని చెప్పే పద్ధతి గల సిగ్నల్.
- **`SIGKILL`:** ఇది అత్యంత ప్రమాదకరమైనది. యాప్ వినకపోతే ఫోర్స్ గా చంపేయడానికి (Force Close) దీన్ని వాడుతారు. దీన్ని మనం కోడ్ ద్వారా ఆపలేము.

---

## 3. Graceful Shutdown (పద్ధతిగా సర్వర్‌ను ఆపడం)

రియల్-టైమ్ ప్రొడక్షన్‌లో `SIGTERM` లేదా `SIGINT` రాగానే `process.exit(0)` అని వెంటనే ఆపేయకూడదు. ఎందుకంటే ఆ సమయంలో ఎవరో ఒక యూజర్ పేమెంట్ చేస్తూ ఉండవచ్చు, లేదా డేటాబేస్ లో డేటా సేవ్ అవుతూ ఉండవచ్చు. వెంటనే ఆపితే డేటా కరప్ట్ అవుతుంది.

### 💻 ప్రొఫెషనల్ Graceful Shutdown కోడ్ ఎగ్జాంపుల్:

```javascript
import http from "node:http";
import process from "node:process";

// 1. ఒక సింపుల్ HTTP సర్వర్
const server = http.createServer((req, res) => {
  setTimeout(() => {
    res.end("Transaction Successful!\n");
  }, 5000); // 5 సెకన్లు పట్టే ఒక హెవీ రిక్వెస్ట్ అనుకుందాం
});

server.listen(3000, () => console.log("🚀 Server running on port 3000"));

// 2. Graceful Shutdown ఫంక్షన్
function shutdown(signal) {
  console.log(`\n🛑 Received ${signal}. Starting Graceful Shutdown...`);

  // కొత్త రిక్వెస్ట్‌లను రాకుండా సర్వర్‌ని స్టాప్ చేస్తుంది
  // కానీ ఆల్రెడీ లోపల నడుస్తున్న రిక్వెస్ట్‌లు (In-flight requests) పూర్తయ్యేదాకా ఆగుతుంది
  server.close(() => {
    console.log("✅ All active web requests finished.");

    // ఇక్కడ మీ డేటాబేస్ కనెక్షన్లను క్లోజ్ చేయాలి
    // db.disconnect().then(() => { ... })

    console.log("🔒 Database connections closed successfully.");
    console.log("👋 Process exited cleanly.");
    process.exit(0); // ఇప్పుడు సేఫ్ గా ఎగ్జిట్ అవ్వాలి
  });

  // ఒకవేళ సర్వర్ క్లోజ్ అవ్వడానికి చాలా టైమ్ పడితే (Forced Timeout)
  setTimeout(() => {
    console.error("⚠️ Could not close connections in time, forcing shutdown!");
    process.exit(1);
  }, 10000); // 10 సెకన్ల టైమౌట్
}

// 3. OS సిగ్నల్స్ ని వినడం
process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: `process.exit()` ని మీ నార్మల్ ఎక్స్‌ప్రెస్/HTTP రూట్ ల లోపల వాడవచ్చా?**
>
> - **Answer:** అస్సలు వాడకూడదు! ఒకవేళ మీరు ఒక రూట్ లోపల `process.exit()` అని రాస్తే, ఎవరైనా ఆ URL ని హిట్ చేయగానే మీ పూర్తి Node.js అప్లికేషనే షట్‌డౌన్ అయిపోతుంది. దానివల్ల మిగతా యూజర్లందరికీ సర్వర్ డౌన్ అయిపోతుంది. కేవలం అప్లికేషన్ స్టార్టప్ లో ఏదైనా పెద్ద ఎర్రర్ వస్తేనే (e.g., DB కనెక్ట్ అవ్వకపోతే) దీన్ని వాడాలి.

> **Q2: `SIGKILL` సిగ్నల్‌ను మనం `process.on('SIGKILL', ...)` ద్వారా క్యాచ్ చేసి గ్రేస్‌ఫుల్ షట్‌డౌన్ చేయవచ్చా?**
>
> - **Answer:** కుదరదు! `SIGKILL` అనేది ఆపరేటింగ్ సిస్టమ్ డైరెక్ట్ గా ప్రాసెస్‌ని అక్కడికక్కడే మెమొరీ నుండి తుడిచేసే కమాండ్ (Kill Process). దీనికి ఎలాంటి కాల్‌బ్యాక్ ఈవెంట్స్ రన్ అవ్వవు, కోడ్ ద్వారా దీన్ని అడ్డుకోవడం లేదా వినడం అసాధ్యం. అందుకే OS మొదట `SIGTERM` ఇస్తుంది, వినకపోతేనే `SIGKILL` వాడుతుంది.

---

# 27. Testing

చాప్టర్ 27 కి స్వాగతం! మోడరన్ సాఫ్ట్‌వేర్ డెవలప్‌మెంట్‌లో **Testing (టెస్టింగ్)** అనేది అత్యంత కీలకమైన భాగం. మనం రాసిన కోడ్ కరెక్ట్‌గా పనిచేస్తుందా లేదా, భవిష్యత్తులో వేరే కోడ్ మార్చినప్పుడు పాత ఫీచర్స్ ఏమైనా బ్రేక్ అవుతున్నాయా అని ప్రతిసారీ మాన్యువల్‌గా చెక్ చేయకుండా ఆటోమేటిక్‌గా టెస్ట్ చేయడానికి ఇది ఉపయోగపడుతుంది.

గతంలో Node.js లో టెస్టింగ్ కోసం Jest లేదా Mocha వంటి థర్డ్-పార్టీ లైబ్రరీలపై ఆధారపడేవాళ్ళం. కానీ, మోడరన్ Node.js లో అద్భుతమైన **ఇన్-బిల్ట్ టెస్ట్ రన్నర్ (Native Test Runner)** వచ్చేసింది! దీని గురించి ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Unit Testing Basics (యూనిట్ టెస్టింగ్ అంటే ఏమిటి?)

మన అప్లికేషన్‌లోని అతి చిన్న భాగాన్ని (సాధారణంగా ఒక సింగిల్ ఫంక్షన్ లేదా మెథడ్) విడిగా లాగి, అది మనం అనుకున్న అవుట్‌పుట్ ఇస్తుందో లేదో టెస్ట్ చేయడాన్నే **Unit Testing** అంటారు.

దీనికోసం Node.js లో `node:test` (టెస్ట్ రన్నర్) మరియు `node:assert` (మనకు కావలసిన రిజల్ట్ వచ్చిందో లేదో వెరిఫై చేసే మొడ్యూల్) వాడుతాం.

### 💻 మనం టెస్ట్ చేయాల్సిన మెయిన్ కోడ్ (`math.js`):

```javascript
// ఒక సింపుల్ ఫంక్షన్
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

### 💻 టెస్ట్ ఫైల్ కోడ్ (`math.test.js`):

```javascript
import { test } from "node:test";
import assert from "node:assert";
import { add, subtract } from "./math.js";

// 'test' ఫంక్షన్ లోపల మన టెస్ట్ కేస్ రాస్తాం
test("➕ add function adds two numbers correctly", () => {
  const result = add(2, 3);

  // assert.strictEqual(వచ్చిన_రిజల్ట్, రావలసిన_రిజల్ట్)
  assert.strictEqual(result, 5);
});

test("➖ subtract function works correctly", () => {
  assert.strictEqual(subtract(5, 2), 3);
});
```

### 🏃 టెస్ట్ రన్ చేసే విధానం:

టెర్మినల్‌లో ఈ కింది కమాండ్ రన్ చేస్తే Node.js ఆటోమేటిక్‌గా టెస్ట్ ఫైల్స్ ని వెతికి రన్ చేస్తుంది:

```bash
node --test

```

**అవుట్‌పుట్:** అన్ని టెస్ట్‌లు పాస్ అయితే గ్రీన్ కలర్ లో `▶ add function adds two numbers correctly (0.421ms)` అని వస్తుంది.

---

## 2. Mocking (మాకింగ్ అంటే ఏమిటి?)

రియల్-టైమ్ ప్రాజెక్ట్స్‌లో కొన్ని ఫంక్షన్స్ డేటాబేస్ కనెక్షన్స్ పై లేదా థర్డ్-పార్టీ API లపై (ఉదాహరణకు: Payment Gateway, Email API) ఆధారపడి ఉంటాయి. టెస్టింగ్ చేసేటప్పుడు ప్రతిసారీ నిజంగా పేమెంట్ గేట్‌వేని హిట్ చేయలేము లేదా డేటాబేస్ లో డేటాని మార్చలేము.

అలాంటి సమయాల్లో ఆ ఒరిజినల్ ఫంక్షన్స్ స్థానంలో డమ్మీ (Duplicate) ఫంక్షన్స్ పెట్టి, అవి నిజంగా రన్ అయినట్టు నటించడాన్నే **Mocking** అంటారు. మోడరన్ Node.js మనకు **`mock`** ఆబ్జెక్ట్ ని ఇన్-బిల్ట్ గా ఇస్తుంది.

### 💻 Mocking ఎగ్జాంపుల్:

ఒక యూజర్ రిజిస్టర్ అయినప్పుడు ఈమెయిల్ పంపే సర్వీస్ ఉందనుకుందాం. దాన్ని ఎలా మాక్ చేయా漏ో చూడండి:

```javascript
import { test, mock } from "node:test";
import assert from "node:assert";

// 1. ఒరిజినల్ ఈమెయిల్ సర్వీస్ ఆబ్జెక్ట్ (రియల్ టైమ్ లో ఇది నిజంగా ఈమెయిల్ పంపుతుంది)
const emailService = {
  sendWelcomeEmail: (email) => {
    console.log(`Sending real email to ${email}...`);
    return true;
  },
};

test("📧 user registration should call email service", () => {
  // 2. ఒరిజినల్ ఫంక్షన్ ని 'mock.method' ద్వారా డమ్మీగా మారుస్తున్నాం
  // ఇది నిజమైన ఈమెయిల్ ని పంపదు, కానీ మనం ఇచ్చిన వాల్యూ ని రిటర్న్ చేస్తుంది
  const mockedSend = mock.method(emailService, "sendWelcomeEmail", (email) => {
    return { success: true, mocked: true };
  });

  // 3. ఫంక్షన్ ని కాల్ చేస్తున్నాం
  const res = emailService.sendWelcomeEmail("test@user.com");

  // 4. వెరిఫికేషన్ (Assertions)
  assert.strictEqual(res.mocked, true); // మాక్ ఫంక్షనే రన్ అయిందని కన్ఫర్మ్ చేస్తున్నాం
  assert.strictEqual(mockedSend.mock.calls.length, 1); // ఫంక్షన్ కరెక్ట్ గా ఒక్కసారే కాల్ అయిందా లేదా?

  console.log("✅ Mock test passed without sending real email!");
});
```

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: Node.js ఇన్-బిల్ట్ టెస్ట్ రన్నర్ ఉండగా, ఇంకా Jest లేదా Vitest లాంటి థర్డ్-పార్టీ లైబ్రరీస్ ఎందుకు వాడుతుంటారు?**
>
> - **Answer:** Node.js నేటివ్ టెస్ట్ రన్నర్ చాలా లైట్-వెయిట్, ఫాస్ట్ మరియు ఎలాంటి ఎక్స్‌ట్రా సెటప్ లేకుండా పనిచేస్తుంది. చిన్న మరియు మీడియం ప్రాజెక్ట్స్ కి ఇది సూపర్. కానీ Jest, Vitest లలో ఇన్-బిల్ట్ గా కోడ్ కవరేజ్ రిపోర్ట్స్ (Code Coverage), UI టెస్టింగ్ టూల్స్, రిచ్ ఎకోసిస్టమ్ మరియు ఆటోమేటిక్ వాచ్ మోడ్ (`--watch`) ఫీచర్స్ చాలా అడ్వాన్స్‌డ్ గా ఉంటాయి. అందుకే పెద్ద పెద్ద ఎంటర్‌ప్రైజ్ అప్లికేషన్లలో ఇప్పటికీ వాటిని వాడుతుంటారు.

> **Q2: `assert.equal()` కి మరియు `assert.strictEqual()` కి మధ్య తేడా ఏంటి?**
>
> - **Answer:** ఇది జావాస్క్రిప్ట్ లోని `==` మరియు `===` లాంటిదే. `assert.equal(5, '5')` అని రాస్తే అది డేటా టైప్ ని పట్టించుకోకుండా కేవలం వాల్యూస్ సేమ్ ఉన్నాయని పాస్ చేసేస్తుంది. కానీ `assert.strictEqual(5, '5')` అని రాస్తే అది డేటా టైప్ ని కూడా చెక్ చేస్తుంది (ఒకటి Number, ఇంకొకటి String కాబట్టి) ఎర్రర్ ఇస్తుంది. టెస్టింగ్ లో ఎల్లప్పుడూ `strictEqual` వాడటమే సేఫ్ ప్రాక్టీస్.

---

# 28. Security

చాప్టర్ 28 కి స్వాగతం! ఒక బ్యాకెండ్ డెవలపర్‌గా కోడ్ రాయడం ఎంత ముఖ్యమో, మన అప్లికేషన్‌ను హ్యాకర్ల బారిన పడకుండా రక్షించడం (**Security**) అంతకంటే ముఖ్యం. సెక్యూరిటీ సరిగ్గా లేకపోతే డేటాబేస్ లీక్ అవ్వడం, సర్వర్లు క్రాష్ అవ్వడం వంటి పెద్ద ప్రమాదాలు జరుగుతాయి.

Node.js/Express.js అప్లికేషన్‌ను సెక్యూర్ చేయడానికి ప్రతీ డెవలపర్ కచ్చితంగా పాటించాల్సిన 5 ముఖ్యమైన సెక్యూరిటీ కాన్సెప్ట్స్ గురించి ఇన్-డెప్త్ గా నేర్చుకుందాం.

---

## 1. Input Validation (ఇన్‌పుట్ వాలిడేషన్)

హ్యాకర్లు మీ అప్లికేషన్‌పై దాడి చేయడానికి ఉపయోగించే ప్రధాన మార్గం—**Form Inputs లేదా API Request Body**. యూజర్ పంపే డేటాను బ్లైండ్ గా నమ్మకూడదు (Never trust user input).

- **సమస్య:** యూజర్ ఇమెయిల్ ఐడి ఇచ్చే చోట డేటాబేస్ కమాండ్స్ రాస్తే **SQL/NoSQL Injection** జరిగి డేటా మొత్తం డిలీట్ అయిపోయే ప్రమాదం ఉంది.
- **పరిష్కారం:** డేటాను డేటాబేస్‌కు పంపే ముందే అది సరైన ఫార్మాట్‌లో ఉందో లేదో చెక్ చేయాలి. రియల్-టైమ్‌లో దీనికోసం **Zod** లేదా **Joi** వంటి లైబ్రరీలను వాడుతాం.

```javascript
// Zod తో ఒక చిన్న వాలిడేషన్ కాన్సెప్ట్ (Concept)
import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  age: z.number().int().positive(),
});

// వాడకం:
const result = UserSchema.safeParse({ username: "ra", email: "invalid-email" });
if (!result.success) {
  console.log("🚨 Input Validation Failed:", result.error.errors);
}
```

---

## 2. CORS Concepts (Cross-Origin Resource Sharing)

CORS అనేది ఒక బ్రౌజర్ సెక్యూరిటీ ఫీచర్.

- **సమస్య:** మీ Node.js API `http://api.mysite.com` పై రన్ అవుతోంది. మీ అనుమతి లేకుండా వేరే ఎవరో ఒక హ్యాకర్ తన సొంత వెబ్‌సైట్ `http://hackersite.com` నుండి జావాస్క్రిప్ట్ (Fetch/Axios) ద్వారా మీ API కి రిక్వెస్ట్స్ పంపి డేటాను దొంగిలించడానికి ట్రై చేయవచ్చు.
- **పరిష్కారం:** మీ API ని ఏ ఫ్రంటెండ్ వెబ్‌సైట్లు మాత్రమే యాక్సెస్ చేయాలో నియంత్రించడాన్నే CORS అంటారు. ఎక్స్‌ప్రెస్‌లో దీనికోసం `cors` మిడిల్‌వేర్ వాడుతాం.

```javascript
import express from "express";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://www.mytrustedfrontend.com", // ఈ వెబ్‌సైట్‌కి మాత్రమే అనుమతి ఉంటుంది
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
```

---

## 3. Helmet (with Express)

**Helmet** అనేది ఎక్స్‌ప్రెస్ అప్లికేషన్ల కోసం ఉండే ఒక అత్యద్భుతమైన మిడిల్‌వేర్ ప్యాకేజ్. ఇది ఏం చేస్తుందంటే, సర్వర్ నుండి బ్రౌజర్‌కి వెళ్లే **HTTP Response Headers** ని సెక్యూర్ చేస్తుంది.

- **ఎందుకు?:** బై-డిఫాల్ట్‌గా ఎక్స్‌ప్రెస్ సర్వర్ తన రెస్పాన్స్ హెడర్స్‌లో `X-Powered-By: Express` అని పంపుతుంది. దీనివల్ల హ్యాకర్లకి "ఈ వెబ్‌సైట్ ఎక్స్‌ప్రెస్ వాడుతోంది" అని తెలిసిపోయి, ఆ వెర్షన్‌లో ఉన్న లోపాలను వాడుకుని దాడి చేస్తారు. Helmet ఇలాంటి 15 కి పైగా అనవసరపు/ప్రమాదకరమైన హెడర్లను తీసేస్తుంది లేదా సెక్యూర్ చేస్తుంది.

```javascript
import express from "express";
import helmet from "helmet";

const app = express();

// మీ మిడిల్‌వేర్స్ అన్నింటికంటే పైన దీన్ని పెట్టాలి
app.use(helmet());
```

---

## 4. Rate Limiting Concepts (రేట్ లిమిటింగ్)

- **సమస్య (DDoS / Brute Force Attack):** ఒక హ్యాకర్ ఒక లూప్ రాసి మీ లాగిన్ API కి ఒకే సెకనులో 10 లక్షల రిక్వెస్ట్‌లు పంపితే, మీ సర్వర్ లోడ్ తట్టుకోలేక క్రాష్ అయిపోతుంది. లేదా ఒకే అకౌంట్‌పై వేర్వేరు పాస్‌వర్డ్‌లను ట్రై చేస్తూనే ఉంటాడు.
- **పరిష్కారం:** ఒక నిర్దిష్ట ఐపీ అడ్రస్ (IP Address) నుండి ఒక నిమిషానికి ఇన్ని రిక్వెస్ట్‌లు మాత్రమే రావాలి అని లిమిట్ పెట్టడాన్నే **Rate Limiting** అంటారు. దీనికోసం `express-rate-limit` ప్యాకేజ్ వాడుతాం.

```javascript
// రేట్ లిమిట్ కాన్సెప్ట్ (Concept)
const limiter = {
  windowMs: 15 * 60 * 1000, // 15 నిమిషాలు
  max: 100, // ఒక IP నుండి గరిష్టంగా 100 రిక్వెస్ట్‌లు మాత్రమే
  message: "Too many requests from this IP, please try again later.",
};
```

---

## 5. Secure Environment Variables

చాప్టర్ 22 లో మనం నేర్చుకున్నాం—సీక్రెట్ కీలను `.env` లో దాచాలి అని. కానీ సెక్యూరిటీ పరంగా ఇంకా కొన్ని అడ్వాన్స్‌డ్ రూల్స్ పాటించాలి:

1. **Never commit `.env`:** పొరపాటున కూడా గిట్‌హబ్‌కి వెళ్ళకూడదు.
2. **Inject at runtime:** ప్రొడక్షన్ సర్వర్లలో (AWS/Render/Vercel) ఫైల్స్ రూపంలో కాకుండా, ఆ ప్లాట్‌ఫారమ్ యొక్క డాష్‌బోర్డ్ సెట్టింగ్స్ లోపల ఎన్విరాన్‌మెంట్ వేరియబుల్స్‌ని డైరెక్ట్ గా ఇంజెక్ట్ చేయాలి.
3. **Validate Env variables:** అప్లికేషన్ స్టార్ట్ అయ్యే ముందే `.env` లో ఉండాల్సిన కీస్ అన్ని ఉన్నాయో లేదో వాలిడేట్ చేయాలి (లేకపోతే యాప్‌ని క్రాష్/స్టాప్ చేయాలి).

---

## 🎯 In-depth Interview Questions (ఈ చాప్టర్ నుండి ఇంటర్వ్యూ ప్రశ్నలు)

> **Q1: CORS అనేది కేవలం బ్రౌజర్ సెక్యూరిటీ ఫీచర్ మాత్రమే ఎందుకు అంటారు? మనం Postman ద్వారా రిక్వెస్ట్ పంపితే CORS ఆపగలదా?**
>
> - **Answer:** ఆపలేదు! CORS రూల్స్ ని కేవలం వెబ్ బ్రౌజర్లు (Chrome, Safari, Firefox) మాత్రమే గౌరవిస్తాయి. బ్రౌజర్ ఒక వెబ్‌సైట్ నుండి ఇంకో వెబ్‌సైట్‌కి రిక్వెస్ట్ వెళ్ళినప్పుడు హెడర్స్ మ్యాచ్ అవ్వకపోతే డేటాను బ్లాక్ చేస్తుంది. కానీ Postman, cURL, లేదా బ్యాకెండ్ కోడ్ నుండి నేరుగా రిక్వెస్ట్ పంపితే CORS అడ్డుకోలేదు. అందుకే కేవలం CORS పైనే నమ్మకం పెట్టుకోకుండా API Authentication (Tokens/Keys) కూడా వాడాలి.

> **Q2: XSS (Cross-Site Scripting) అంటే ఏమిటి? దీన్ని ఆపడానికి Input Validation ఎలా ఉపయోగపడుతుంది?**
>
> - **Answer:** XSS అంటే హ్యాకర్ మీ వెబ్‌సైట్ కామెంట్ బాక్స్ లేదా ఇన్‌పుట్ ఫీల్డ్‌లో ఒక తప్పుడు జావాస్క్రిప్ట్ కోడ్‌ని (`<script>steal_cookies()</script>`) రాసి సబ్మిట్ చేయడం. ఆ డేటా డేటాబేస్‌లో సేవ్ అయి, వేరే యూజర్ ఆ పేజీ ఓపెన్ చేసినప్పుడు ఆ స్క్రిప్ట్ రన్ అయి వారి అకౌంట్ హ్యాక్ అవుతుంది. మనం ఇన్‌పుట్ వాలిడేషన్ చేసి, ఇలాంటి HTML ట్యాగ్స్ వస్తే వాటిని క్లీన్ (Sanitize) చేయడం ద్వారా XSS దాడిని పూర్తిగా అడ్డుకోవచ్చు.

---
