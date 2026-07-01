Here's a **React.js Roadmap (2026)** from beginner to advanced. Follow it in order.

## 1. Prerequisites

Before React, learn:

- ✅ HTML5
- ✅ CSS3
- ✅ Flexbox & Grid
- ✅ Responsive Design
- ✅ JavaScript (ES6+)
  - Variables (`let`, `const`)
  - Arrow functions
  - Template literals
  - Destructuring
  - Spread & Rest operators
  - Array methods (`map`, `filter`, `reduce`)
  - Promises
  - Async/Await
  - Modules (Import/Export)

---

## [2. React Fundamentals](#2-react-fundamentals-1)

Learn:

- What is React?
- JSX
- Components
- Functional Components
- Props
- State (`useState`)
- Event Handling
- Conditional Rendering
- Lists & Keys
- Forms
- Controlled Components

**Project Ideas**

- Counter App
- To-Do App
- Calculator
- Notes App

---

## [3. React Hooks](#3-react-hooks-1)

Master these hooks:

- `useState`
- `useEffect`
- `useRef`
- `useContext`
- `useMemo`
- `useCallback`
- Custom Hooks

**Projects**

- Weather App
- Stopwatch
- Dark Mode Toggle
- Search Filter

---

## [4. Routing](#4-routing-1)

Learn:

- React Router
- Nested Routes
- Dynamic Routes
- Route Parameters
- Navigation
- Protected Routes

**Project**

- Multi-page Blog

---

## [5. API Integration](#5-api-integration-1)

Learn:

- Fetch API
- Axios
- Async Data Fetching
- Loading States
- Error Handling

**Projects**

- Movie Search App
- News App
- GitHub User Finder

---

## [6. State Management](#6-state-management-1)

Start with:

- Context API

Then learn:

- Redux Toolkit
- Zustand (lightweight alternative)

Topics:

- Store
- Slice
- Reducers
- Actions
- Async Thunks

---

## [7. Styling](#7-styling-1)

Learn different styling methods:

- CSS Modules
- Tailwind CSS
- Styled Components
- Material UI
- Bootstrap

---

## [8. Forms](#8-forms-1)

Learn:

- React Hook Form
- Validation
- Yup or Zod

---

## [9. Performance Optimization](#9-performance-optimization-1)

Learn:

- Lazy Loading
- Code Splitting
- Memoization
- React.memo
- useMemo
- useCallback
- Virtualization

---

## [10. Advanced React](#10-advanced-react-1)

Study:

- Higher Order Components (HOC)
- Render Props
- Error Boundaries
- Portals
- Suspense
- Concurrent Features
- Server Components (basic understanding)

---

## [11. Testing](#11-testing-1)

Learn:

- Jest
- React Testing Library
- Unit Testing
- Integration Testing

---

## [12. Build & Deploy](#12-build--deploy-1)

Learn:

- Vite
- Environment Variables
- Production Build
- Deployment

Deploy on:

- GitHub Pages
- Netlify
- Vercel

---

# Projects by Level

### Beginner

- Counter
- Calculator
- To-Do App
- Quiz App

### Intermediate

- Weather App
- Expense Tracker
- Movie App
- E-commerce Cart

### Advanced

- Chat Application
- Social Media Dashboard
- Netflix Clone
- Admin Dashboard
- Food Delivery App

---

# After React

Learn:

- TypeScript
- Next.js
- Node.js
- Express.js
- MongoDB/PostgreSQL
- Authentication (JWT, OAuth)
- GraphQL (optional)

### Estimated Timeline

- **Beginner:** 1 month
- **Intermediate:** 2–3 months
- **Advanced:** 4–6 months (with projects)

The key to mastering React is building projects consistently. Aim to create **10–15 real-world projects** and deploy them to build a strong portfolio.

---

# 1. Prerequisites

React.js లోకి అడుగుపెట్టే ముందు, **JavaScript (ES6+)** పై పట్టు సాధించడం చాలా ముఖ్యం. ఎందుకంటే React మొత్తం JavaScript మీదనే ఆధారపడి ఉంటుంది. మీరు పైన పేర్కొన్న ప్రతి అంశాన్ని క్లుప్తంగా, సులభంగా అర్థం చేసుకుందాం.

---

### 1. Variables (let, const)

పాత పద్ధతిలో `var` వాడేవారు, కానీ ఇప్పుడు `let` మరియు `const` మాత్రమే వాడుతున్నాం.

- **let:** విలువ మారే వాటికి వాడతాం (Reassignable).
- **const:** విలువ మారకూడని వాటికి వాడతాం (Constant).

```javascript
let count = 1;
count = 2; // ఇది పని చేస్తుంది

const pi = 3.14;
// pi = 3; // ఇది ఎర్రర్ ఇస్తుంది
```

### 2. Arrow Functions

ఇది ఫంక్షన్‌ని రాయడానికి ఒక చిన్న మరియు సులభమైన పద్ధతి.

```javascript
// సాధారణ పద్ధతి
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;
```

### 3. Template Literals

స్ట్రింగ్స్ లోపల వేరియబుల్స్ కలపడానికి `+` గుర్తు బదులు **Backticks (` `)** వాడతాం.

```javascript
const name = "Telugu";
console.log(`Hello, ${name}!`); // Output: Hello, Telugu!
```

### 4. Destructuring

Object లేదా Array లోని విలువలను విడివిడిగా తీసుకోవడానికి ఇది చాలా సులభం.

```javascript
const user = { name: "Ravi", age: 25 };
const { name, age } = user; // పేరు, వయస్సు విడిపోతాయి
```

### 5. Spread & Rest Operators (`...`)

- **Spread:** ఉన్న వాటిని వ్యాప్తి చేయడానికి (కాపీ చేయడానికి).
- **Rest:** మిగిలిన వాటన్నింటినీ ఒక గ్రూపులో పెట్టడానికి.

```javascript
const oldArr = [1, 2];
const newArr = [...oldArr, 3, 4]; // [1, 2, 3, 4]
```

### 6. Array Methods (map, filter, reduce)

React లో డేటాను చూపించడానికి ఇవి ప్రాణం వంటివి.

- **map():** ప్రతి ఐటమ్‌ని మార్చడానికి.
- **filter():** మనకు కావలసినవి మాత్రమే ఉంచుకోవడానికి.

```javascript
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2); // [2, 4, 6]
```

### 7. Promises & Async/Await

డేటాబేస్ లేదా API నుండి డేటా తెచ్చుకునేటప్పుడు ఇది వాడతాం.

```javascript
async function getData() {
  const response = await fetch("api/url");
  const data = await response.json();
}
```

### 8. Modules (Import/Export)

కోడ్‌ను వేర్వేరు ఫైల్స్‌లో రాసి, అవసరమైనప్పుడు వాడుకోవడం.

```javascript
// Export
export const greet = () => "Hi!";

// Import
import { greet } from "./utils";
```

---

# 2. React Fundamentals

React ప్రపంచంలోకి స్వాగతం! ఇప్పుడు మనం **React Fundamentals (మౌలిక అంశాలు)** గురించి తెలుసుకుందాం. ఇవి React నేర్చుకోవడానికి పునాదులు.

---

### 1. What is React? (React అంటే ఏమిటి?)

React అనేది యూజర్ ఇంటర్‌ఫేస్‌లను (UI - మనం చూసే వెబ్‌సైట్ పేజీలు) తయారు చేయడానికి **Meta (Facebook)** వారు రూపొందించిన ఒక **JavaScript లైబ్రరీ**.

- **Components:** వెబ్‌సైట్‌ను చిన్న చిన్న ముక్కలుగా (ఉదాహరణకు: Header, Sidebar, Footer) విడగొట్టి, ప్రతి ముక్కను ఒక కాంపోనెంట్‌గా తయారు చేస్తాం.
- **Declarative:** మనం ఏమి కావాలో చెబితే, React దానిని స్క్రీన్‌పై చూపిస్తుంది. ఎలా చూపాలో మనం టెన్షన్ పడక్కర్లేదు.
- **Virtual DOM:** React వెబ్ పేజీని చాలా వేగంగా అప్‌డేట్ చేస్తుంది. మొత్తం పేజీని కాకుండా, ఏ భాగం మారిందో ఆ భాగాన్ని మాత్రమే ఇది అప్‌డేట్ చేస్తుంది. దీనివల్ల వెబ్‌సైట్ చాలా ఫాస్ట్‌గా పనిచేస్తుంది.

---

### 2. JSX (JavaScript XML)

JSX అంటే **JavaScript లో HTML లాంటి కోడ్ రాయడం**. సాధారణంగా మనం HTML ని వేరే ఫైల్‌లో రాస్తాం, కానీ React లో JavaScript లోనే రాస్తాం. ఇది చూడటానికి HTML లాగానే ఉంటుంది.

**ఉదాహరణ:**

```javascript
const element = <h1>హలో, వెల్కమ్ టు React!</h1>;
```

- **గమనిక:** ఇది నేరుగా బ్రౌజర్‌లో రన్ అవ్వదు. 'Babel' అనే టూల్ ద్వారా ఇది మామూలు JavaScript కోడ్‌లోకి మారుతుంది. దీనివల్ల మనం JavaScript లాజిక్‌ని HTML లో సులభంగా రాసుకోవచ్చు.

---

### 3. Components (కాంపోనెంట్స్)

React అప్లికేషన్ అంతా **Components** తోనే నిర్మించబడుతుంది. కాంపోనెంట్ అంటే ఏమీ లేదు, ఒక ఫంక్షన్ అంతే. ఇది ఒక చిన్న UI భాగాన్ని రిటర్న్ చేస్తుంది.

కాంపోనెంట్స్ రెండు రకాలు:

1. **Functional Components** (ఇప్పుడు మనం ఎక్కువగా వాడేది ఇదే).
2. **Class Components** (పాత పద్ధతి).

**ఒక సింపుల్ కాంపోనెంట్ ఉదాహరణ:**

```javascript
// ఇది ఒక కాంపోనెంట్
function WelcomeMessage() {
  return (
    <div>
      <h2>నేను ఒక కాంపోనెంట్‌ని!</h2>
      <p>ఇది సులభంగా ఉంది కదా?</p>
    </div>
  );
}

// దీన్ని మనం ఎక్కడైనా వాడుకోవచ్చు: <WelcomeMessage />
```

---

### ముఖ్యమైన నియమాలు (Rules to remember):

1. **Capital Letter:** కాంపోనెంట్ పేరు ఎప్పుడూ **Capital Letter** తోనే మొదలవ్వాలి (ఉదా: `WelcomeMessage`). ఒకవేళ చిన్న అక్షరంతో (ఉదా: `welcome`) మొదలుపెడితే, React దాన్ని HTML ట్యాగ్‌గా భావిస్తుంది.
2. **Return JSX:** ఒక కాంపోనెంట్ కచ్చితంగా ఏదో ఒక JSX కోడ్‌ని రిటర్న్ చేయాలి.
3. **Single Parent:** రిటర్న్ చేసేటప్పుడు, మొత్తం కోడ్ అంతా ఒకే `<div>` లో లేదా ఏదైనా ఒక కంటైనర్‌లో ఉండాలి.

---

React లో అత్యంత ముఖ్యమైన టాపిక్స్ ఇవే. వీటిని అర్థం చేసుకుంటే మీరు నిజమైన React అప్లికేషన్లను నిర్మించడం మొదలుపెట్టవచ్చు.

---

### 1. Functional Components

ఇప్పటికే మనం చూసినట్లుగా, Functional Component అనేది కేవలం ఒక సాధారణ JavaScript ఫంక్షన్. ఇది UI లో ఒక భాగాన్ని (JSX) రిటర్న్ చేస్తుంది.

```javascript
const Greeting = () => {
  return <h1>నమస్కారం!</h1>;
};
```

---

### 2. Props (Properties)

**Props** అంటే ఒక కాంపోనెంట్ నుండి మరొక కాంపోనెంట్‌కి సమాచారాన్ని (Data) పంపడం. ఇది HTML ట్యాగ్‌లలో `attribute` లాగా పనిచేస్తుంది.

- **Parent** కాంపోనెంట్ నుండి డేటాను పంపవచ్చు.
- **Child** కాంపోనెంట్ ఆ డేటాను `props` అనే ఆర్గ్యుమెంట్ ద్వారా స్వీకరిస్తుంది.

**ఉదాహరణ:**

```javascript
// Parent Component
function App() {
  return <Welcome name="Ravi" />;
}

// Child Component
function Welcome(props) {
  return <h1>హలో, {props.name}!</h1>;
}
```

_ఇక్కడ `name="Ravi"` అనేది Prop. `props.name` ద్వారా మనం దాన్ని వాడుకున్నాం._

---

### 3. State (useState)

React లో ఒక కాంపోనెంట్ తనలో తాను డేటాను దాచుకోవాలన్నా, ఆ డేటా మారినప్పుడు స్క్రీన్‌పై కొత్తగా చూపించాలన్నా (Re-render), మనం **State** ని వాడతాం. దీనికోసం `useState` అనే **Hook** ని వాడతాము.

- `useState` మనకు ఒక Arrayని ఇస్తుంది.

1. మొదటిది: **Current Value** (డేటా).
2. రెండవది: **Setter Function** (డేటాను మార్చడానికి వాడే ఫంక్షన్).

**ఉదాహరణ (Counter):**

```javascript
import { useState } from "react";

function Counter() {
  // count అనేది వాల్యూ, setCount అనేది దాన్ని మార్చే ఫంక్షన్
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>మీరు {count} సార్లు క్లిక్ చేశారు</p>
      <button onClick={() => setCount(count + 1)}>క్లిక్ చేయండి</button>
    </div>
  );
}
```

---

### క్లుప్తంగా చెప్పాలంటే:

- **Props:** బయట నుండి వస్తాయి (Read-only - వీటిని మార్చకూడదు).
- **State:** కాంపోనెంట్ లోపల ఉంటుంది (ఇది మారుతూ ఉంటుంది).

---

React అప్లికేషన్‌ను డైనమిక్‌గా మార్చడానికి ఈ మూడు అంశాలు చాలా కీలకం. వీటిని ఒక్కొక్కటిగా చూద్దాం:

---

### 1. Event Handling (ఈవెంట్ హ్యాండ్లింగ్)

React లో ఈవెంట్లను (Click, Change, Submit, etc.) హ్యాండిల్ చేయడం చాలా సులభం. ఇది HTML లో `onclick` లాగే ఉంటుంది, కానీ చిన్న మార్పులు ఉంటాయి:

- **CamelCase:** `onclick` కి బదులుగా `onClick` అని రాయాలి.
- **Function:** ఇక్కడ నేరుగా స్ట్రింగ్ రాయకుండా, ఒక ఫంక్షన్‌ను పంపాలి.

**ఉదాహరణ:**

```javascript
function ButtonClick() {
  const handleClick = () => {
    alert("బటన్ క్లిక్ చేయబడింది!");
  };

  return <button onClick={handleClick}>క్లిక్ చేయండి</button>;
}
```

---

### 2. Conditional Rendering (కండిషనల్ రెండరింగ్)

కొన్నిసార్లు మనం డేటాను బట్టి ఒక భాగాన్ని చూపించాలి, ఇంకొక భాగాన్ని దాచాలి. దీన్ని `if` కండిషన్స్ లేదా **Ternary Operator (`? :`)** ఉపయోగించి చేస్తాం.

**ఉదాహరణ (Ternary Operator):**

```javascript
function LoginStatus(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn ? <h1>వెల్కమ్ యూజర్!</h1> : <button>లాగిన్ అవ్వండి</button>}
    </div>
  );
}
```

---

### 3. Lists & Keys (లిస్ట్స్ మరియు కీస్)

డేటా ఎరే (Array) రూపంలో ఉన్నప్పుడు, దాన్ని లూప్ ద్వారా చూపించడానికి `map()` మెథడ్‌ను వాడతాం. అలా చేసినప్పుడు ప్రతి ఐటమ్‌కు ఒక **Unique Key** ఇవ్వడం చాలా ముఖ్యం.

- **ఎందుకు Key ఇవ్వాలి?**: React ఏ ఐటమ్ మారింది, ఏది కొత్తది అని గుర్తించడానికి ఈ `key` సహాయపడుతుంది. దీనివల్ల పెర్ఫార్మెన్స్ పెరుగుతుంది.

**ఉదాహరణ:**

```javascript
function FruitList() {
  const fruits = ["ఆపిల్", "మామిడి", "అరటి"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        // ఇక్కడ 'key' అనేది చాలా ముఖ్యం
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

_గమనిక: `index` ని కీగా వాడటం కంటే, డేటాలో ఏదైనా యూనిక్ ID (ఉదా: `id: 1`) ఉంటే దాన్ని కీగా వాడటం మంచి పద్ధతి._

---

### క్లుప్తంగా చెప్పాలంటే:

- **Event Handling:** యూజర్ చేసే పనులకు (Clicks) మనం రియాక్ట్ అవ్వడం.
- **Conditional Rendering:** కండిషన్ బట్టి UIని మార్చడం.
- **Lists & Keys:** ఎరే డేటాను లిస్ట్ లాగా చూపించడం మరియు ప్రతి దానికి ఒక యూనిక్ గుర్తింపు (Key) ఇవ్వడం.

## ఈ మూడు కాన్సెప్ట్స్ ద్వారా మనం ఒక సింపుల్ **"Task Manager"** లాంటి యాప్‌ను తయారు చేయవచ్చు. వీటిలో ఏదైనా భాగం మీద మీకు ఇంకా ఉదాహరణలు కావాలా?

React లో యూజర్ల నుండి డేటాను సేకరించడానికి **Forms** మరియు **Controlled Components** చాలా అవసరం. వీటిని ఎలా వాడాలో సులభంగా తెలుసుకుందాం.

---

### 1. Forms (ఫార్మ్స్)

React లో ఫార్మ్స్ సాధారణ HTML ఫార్మ్స్ లాగే కనిపిస్తాయి, కానీ వాటిని మనం హ్యాండిల్ చేసే విధానం మాత్రం కొంచెం వేరుగా ఉంటుంది. ఫార్మ్స్ ద్వారా మనం ఇన్‌పుట్ తీసుకోవడం (Input), డేటాను సబ్మిట్ చేయడం (Submit) చేస్తాం.

### 2. Controlled Components (కంట్రోల్డ్ కాంపోనెంట్స్)

React లో ఇన్‌పుట్ ఫీల్డ్ యొక్క వాల్యూని **State** ద్వారా కంట్రోల్ చేయడాన్నే **"Controlled Component"** అంటారు.

- **ఎలా పనిచేస్తుంది?**:

1. ఒక ఇన్‌పుట్ ఫీల్డ్ యొక్క `value`ని `useState` వేరియబుల్‌కి లింక్ చేస్తాం.
2. యూజర్ టైప్ చేస్తున్నప్పుడు `onChange` ఈవెంట్ ద్వారా ఆ `useState` వాల్యూని అప్‌డేట్ చేస్తాం.
3. దీనివల్ల, స్క్రీన్‌పై ఉన్న డేటా మరియు స్టేట్‌లో ఉన్న డేటా ఎప్పుడూ ఒకేలా ఉంటాయి.

**ఉదాహరణ (Login Form):**

```javascript
import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // పేజీ రీలోడ్ అవ్వకుండా ఆపుతుంది
    alert(`హలో, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        మీ పేరు:
        <input
          type="text"
          value={name} // స్టేట్ నుండి వాల్యూ వస్తుంది
          onChange={(e) => setName(e.target.value)} // టైప్ చేసినప్పుడు స్టేట్ మారుతుంది
        />
      </label>
      <button type="submit">సబ్మిట్</button>
    </form>
  );
}
```

---

### ముఖ్యమైన పాయింట్లు:

1. **`value={name}`**: ఇన్‌పుట్ బాక్స్‌లో ఏముండాలో React డిసైడ్ చేస్తుంది (ఇది స్టేట్ నుండి వస్తుంది).
2. **`onChange`**: యూజర్ టైప్ చేసిన ప్రతిసారి స్టేట్‌ను అప్‌డేట్ చేస్తుంది.
3. **`e.preventDefault()`**: మనం ఫార్మ్ సబ్మిట్ చేసినప్పుడు పేజీ రీఫ్రెష్ అవ్వకుండా ఉండటానికి ఇది వాడతాం.

---

### ఒక చిన్న సలహా (Pro-tip):

నిజమైన ప్రాజెక్ట్‌లలో ఒకే ఫార్మ్‌లో చాలా ఇన్‌పుట్ ఫీల్డ్స్ (Name, Email, Password, etc.) ఉంటాయి. అప్పుడు ప్రతి ఒక్కదానికీ వేర్వేరు `useState` వాడకుండా, ఒకే Object ని స్టేట్‌గా వాడటం మంచి పద్ధతి.

## **మీరు ఈ ఫార్మ్ కాన్సెప్ట్ గురించి బాగా అర్థం చేసుకున్నారా? మనం ఇప్పుడు ఏదైనా ఒక ప్రాక్టీస్ టాస్క్ (ఉదాహరణకు ఒక 'రిజిస్ట్రేషన్ ఫార్మ్' చేయడం) చేద్దామా?**

# 3. React Hooks

## useState

`useState` గురించి మనం పైన ఒక చిన్న ఉదాహరణ చూసాము. ఇప్పుడు దాన్ని ఇంకాస్త లోతుగా, ఒక డెవలపర్‌గా మీరు ఎలా అర్థం చేసుకోవాలో చూద్దాం.

### useState అంటే ఏమిటి?

React కాంపోనెంట్లలో **State**ని (డేటాను) నిల్వ చేయడానికి మరియు ఆ డేటా మారినప్పుడు స్క్రీన్‌ను అప్‌డేట్ చేయడానికి `useState` వాడతాము.

### Syntax (నిర్మాణం):

```javascript
const [state, setState] = useState(initialValue);
```

- **`state`**: ఇది మన ప్రస్తుత డేటా (Current Value).
- **`setState`**: ఇది ఆ డేటాను మార్చడానికి మనం వాడే ఒక ఫంక్షన్.
- **`initialValue`**: స్టేట్ యొక్క ప్రారంభ విలువ (0, "", [], false, etc.).

---

### ముఖ్యమైన విషయాలు:

#### 1. స్టేట్ మారితే, కాంపోనెంట్ రీ-రెండర్ (Re-render) అవుతుంది:

మనం `setState` ఫంక్షన్‌ని వాడి వాల్యూని మార్చినప్పుడు, React ఆ కాంపోనెంట్‌ని మళ్ళీ రన్ చేస్తుంది. దీనివల్ల బ్రౌజర్‌లో కొత్త వాల్యూ కనిపిస్తుంది.

#### 2. స్టేట్ అప్‌డేట్ చేసినప్పుడు పాత వాల్యూని ఎలా వాడుకోవాలి? (Functional Updates)

ఒకవేళ మీరు పాత వాల్యూపై ఆధారపడి కొత్త వాల్యూని సెట్ చేయాలనుకుంటే (ఉదాహరణకు Counter), నేరుగా `setCount(count + 1)` అని రాయవచ్చు. కానీ, క్లిష్టమైన సందర్భాల్లో ఇలా రాయడం ఉత్తమం:

```javascript
setCount((prevCount) => prevCount + 1);
```

ఇక్కడ `prevCount` అనేది పాత వాల్యూని సూచిస్తుంది. ఇది చాలా సేఫ్ పద్ధతి.

#### 3. ఆబ్జెక్ట్స్ (Objects) మరియు ఎరేస్ (Arrays) తో జాగ్రత్త:

స్టేట్ ఆబ్జెక్ట్ లేదా ఎరే అయితే, మీరు నేరుగా మార్చకూడదు. ఎప్పుడూ `Spread Operator (...)` వాడాలి.

**ఉదాహరణ (Object):**

```javascript
const [user, setUser] = useState({ name: "Ravi", age: 25 });

// తప్పు పద్ధతి: user.name = "Teja";
// సరైన పద్ధతి:
setUser({ ...user, name: "Teja" });
```

_ఇక్కడ `...user` అంటే పాత ఆబ్జెక్ట్‌లోని వివరాలన్నీ తీసుకుని, `name` ని మాత్రమే మారుస్తున్నాం._

---

### ఒక చిన్న ప్రాక్టీస్ టాస్క్:

మీరు ఒక **"Dark Mode / Light Mode"** టోగుల్ బటన్‌ని తయారు చేయగలరా?

- స్టేట్: `const [isDark, setIsDark] = useState(false);`
- లాజిక్: బటన్ క్లిక్ చేసినప్పుడు `setIsDark(!isDark)` అని వాడండి.

మీరు దీన్ని కోడ్ చేసి చూడండి, ఏదైనా ఎర్రర్ వస్తే లేదా లాజిక్ అర్థం కాకపోతే నన్ను అడగండి!

## **మీరు నెక్స్ట్ "useEffect" హుక్ గురించి తెలుసుకోవాలనుకుంటున్నారా?**

## useEffect

`useEffect` అనేది React లో చాలా శక్తివంతమైన హుక్. `useState` మనకు డేటాను మేనేజ్ చేయడానికి సహాయపడితే, **`useEffect` మన కాంపోనెంట్‌లో "సైడ్ ఎఫెక్ట్స్" (Side Effects) నిర్వహించడానికి సహాయపడుతుంది.**

### సైడ్ ఎఫెక్ట్స్ అంటే ఏమిటి?

- API ద్వారా డేటాను తెచ్చుకోవడం (Fetching data from API).
- DOM ని నేరుగా మార్చడం (Direct DOM manipulation).
- టైమర్స్ (setTimeout, setInterval) సెట్ చేయడం.
- సబ్‌స్క్రిప్షన్లు తీసుకోవడం.

---

### `useEffect` సింటాక్స్:

```javascript
useEffect(() => {
  // ఇక్కడ మీ 'సైడ్ ఎఫెక్ట్' కోడ్ రాయాలి

  return () => {
    // క్లీనప్ కోడ్ (Cleanup function - ఆప్షనల్)
  };
}, [dependencies]); // డిపెండెన్సీ అర్రే
```

---

### దీనిలో 3 ముఖ్యమైన రకాలు ఉన్నాయి:

#### 1. ప్రతిసారి రన్ అవ్వడం (No dependency array)

డిపెండెన్సీ అర్రేని ఇవ్వకపోతే, ప్రతిసారీ కాంపోనెంట్ అప్‌డేట్ అయినప్పుడు ఈ ఫంక్షన్ రన్ అవుతుంది.

```javascript
useEffect(() => {
  console.log("కాంపోనెంట్ రెండర్ అయిన ప్రతిసారీ ఇది రన్ అవుతుంది!");
});
```

#### 2. కేవలం మొదటిసారి మాత్రమే రన్ అవ్వడం (Empty dependency array `[]`)

ఇది చాలా తరచుగా వాడతాం. కాంపోనెంట్ మొదటిసారి స్క్రీన్‌పై కనిపించినప్పుడు (Mounting) మాత్రమే ఇది ఒకసారి రన్ అవుతుంది.

```javascript
useEffect(() => {
  console.log("ఇది ఒక్కసారి మాత్రమే రన్ అవుతుంది!");
}, []);
```

#### 3. ఏదైనా వాల్యూ మారినప్పుడు రన్ అవ్వడం (Dependency array with values `[data]`)

అర్రేలో మనం ఏదైనా స్టేట్ వేరియబుల్ ఇస్తే, ఆ వేరియబుల్ మారినప్పుడల్లా ఈ ఎఫెక్ట్ రన్ అవుతుంది.

```javascript
useEffect(() => {
  console.log("count మారినప్పుడు మాత్రమే ఇది రన్ అవుతుంది!");
}, [count]);
```

---

### ఒక రియల్-టైమ్ ఉదాహరణ:

API నుండి డేటాను తీసుకురావడం (Fetching Data):

```javascript
import { useState, useEffect } from "react";

function UserData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []); // ఖాళీ అర్రే అంటే కాంపోనెంట్ లోడ్ అయినప్పుడు ఒక్కసారే కాల్ అవుతుంది.

  return <div>{data ? <p>Task: {data.title}</p> : <p>Loading...</p>}</div>;
}
```

### క్లీనప్ ఫంక్షన్ (Cleanup Function):

కొన్నిసార్లు మనం చేసిన ఎఫెక్ట్‌ను ఆపాలి (ఉదా: టైమర్ క్లియర్ చేయడం). అప్పుడు `useEffect` లోపల `return` వాడతాం.

```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("టిక్ టాక్..."), 1000);

  return () => clearInterval(timer); // కాంపోనెంట్ క్లోజ్ అయినప్పుడు టైమర్ ఆగిపోతుంది
}, []);
```

---

**ముఖ్యమైన విషయం:**
`useEffect` ని తప్పుగా వాడితే ఇన్ఫినిట్ లూప్ (Infinite Loop) ఏర్పడే అవకాశం ఉంది. ఎప్పుడూ డిపెండెన్సీ అర్రేని జాగ్రత్తగా గమనించండి.

## మీకు ఈ `useEffect` కాన్సెప్ట్ అర్థమైందా? లేదా దీనిపై ఏదైనా చిన్న ఎక్సర్‌సైజ్ చేద్దామా? (ఉదా: ఒక బటన్ క్లిక్ చేసినప్పుడు డాక్యుమెంట్ టైటిల్ మార్చడం).

## useRef

`useRef` అనేది React లో చాలా ప్రత్యేకమైన హుక్. దీన్ని ప్రధానంగా రెండు సందర్భాల్లో ఉపయోగిస్తాం. ఇది `useState` లాగా పనిచేయదు—అంటే, ఇందులో వాల్యూ మారినప్పుడు కాంపోనెంట్ మళ్ళీ రెండర్ (Re-render) అవ్వదు.

---

### 1. DOM ఎలిమెంట్లను నేరుగా యాక్సెస్ చేయడానికి (Direct DOM Access)

React లో మనం సాధారణంగా `document.getElementById` లాంటివి వాడము. దానికి బదులుగా `useRef` వాడతాం. ఉదాహరణకు, ఒక ఇన్‌పుట్ బాక్స్‌ను ఫోకస్ చేయాలంటే:

```javascript
import { useRef } from "react";

function TextInputWithFocus() {
  const inputEl = useRef(null); // 1. Ref క్రియేట్ చేయాలి

  const onButtonClick = () => {
    // 3. inputEl.current ద్వారా అసలు DOM ఎలిమెంట్‌ని యాక్సెస్ చేయవచ్చు
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" /> {/* 2. ref కి లింక్ చేయాలి */}
      <button onClick={onButtonClick}>ఇన్‌పుట్ బాక్స్‌ను ఫోకస్ చేయి</button>
    </div>
  );
}
```

### 2. వాల్యూను దాచుకోవడానికి (Persistent Mutable Values)

`useState` లో వాల్యూ మారితే కాంపోనెంట్ మళ్ళీ రన్ అవుతుంది (Re-render). కానీ, మీకు ఒక వాల్యూ కావాలి, అది మారినప్పుడు కాంపోనెంట్ మళ్ళీ రెండర్ అవ్వకూడదు అనుకుంటే `useRef` వాడాలి.

- ఇది ఒక **"పెట్టె" (Container)** లాంటిది. మీరు అందులో ఏ విలువనైనా దాచుకోవచ్చు (`current` ప్రాపర్టీ ద్వారా).
- ఇది కాంపోనెంట్ లైఫ్ సైకిల్ మొత్తం తన విలువను గుర్తుపెట్టుకుంటుంది.

---

### useState vs useRef: ఎప్పుడు ఏది వాడాలి?

| ఫీచర్         | useState                          | useRef                                                        |
| ------------- | --------------------------------- | ------------------------------------------------------------- |
| **రెండరింగ్** | వాల్యూ మారితే రీ-రెండర్ అవుతుంది. | వాల్యూ మారితే రీ-రెండర్ **అవ్వదు**.                           |
| **ఉపయోగం**    | UI లో డేటాను చూపించడానికి.        | DOM ని కంట్రోల్ చేయడానికి లేదా పాత వాల్యూస్ స్టోర్ చేయడానికి. |
| **సింటాక్స్** | `[val, setVal] = useState()`      | `ref = useRef()`                                              |

---

### ఒక చిన్న ఉదాహరణ (Timer ID స్టోర్ చేయడానికి):

మనం `setInterval` వాడుతున్నప్పుడు, ఆ టైమర్ ID ని ఎక్కడో ఒకచోట స్టోర్ చేయాలి. దానికి `useRef` ఉత్తమం.

```javascript
const timerRef = useRef();

const startTimer = () => {
  timerRef.current = setInterval(() => {
    console.log("Timer running...");
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerRef.current); // ID ని ఇక్కడి నుండి తీసుకోవచ్చు
};
```

**గుర్తుంచుకోండి:** `useRef` లోని `.current` ప్రాపర్టీని మీరు ఎప్పుడైనా మార్చుకోవచ్చు, కానీ అది కేవలం మీ అంతర్గత పనికోసం మాత్రమే వాడండి. UI లో ఏదైనా కనిపించాలంటే మాత్రం కచ్చితంగా `useState` నే వాడాలి.

## మీకు ఈ **`useRef`** మరియు **`useState`** మధ్య తేడా అర్థమైందా? మనం నెక్స్ట్ టాపిక్ కి వెళ్దామా లేదా దీని మీద ఇంకా ఏదైనా ఉదాహరణ కావాలా?

## useContext

`useContext` అనేది React లో **"Prop Drilling"** అనే సమస్యను పరిష్కరించడానికి ఉపయోగించే ఒక అద్భుతమైన హుక్.

### అసలు "Prop Drilling" అంటే ఏమిటి?

మీ దగ్గర ఒక `App` కాంపోనెంట్ ఉందనుకోండి. అందులో ఉన్న డేటాను దాని లోపల ఉన్న ఒక కాంపోనెంట్ (ఉదా: `ProfileFooter`) కు పంపాలంటే, ఆ మధ్యలో ఉన్న ప్రతి కాంపోనెంట్ ద్వారా `props` ని పాస్ చేస్తూ వెళ్లాలి. దీన్నే **Prop Drilling** అంటారు. ఇది కోడ్ రాయడాన్ని చాలా కష్టతరం చేస్తుంది.

దీనిని అధిగమించడానికి `useContext` వాడతాం. ఇది డేటాను ఒక సెంట్రల్ ప్లేస్ లో ఉంచి, కావలసిన కాంపోనెంట్ నేరుగా దాన్ని తీసుకునేలా చేస్తుంది.

---

### ఎలా వాడాలి? (3 స్టెప్స్)

#### 1. Context ని క్రియేట్ చేయడం (`createContext`)

మొదట డేటాను పంచుకోవడానికి ఒక కాంటెక్స్ట్‌ని తయారు చేయాలి.

```javascript
import { createContext } from "react";
export const UserContext = createContext(); // దీన్ని వేరే ఫైల్‌లో కూడా ఎగుమతి (export) చేయవచ్చు
```

#### 2. Provider ని ఉపయోగించడం

ఏ కాంపోనెంట్స్‌కి డేటా కావాలో, వాటన్నింటినీ `Provider` తో చుట్టాలి.

```javascript
function App() {
  const user = "రవికుమార్";
  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <Dashboard />
    </UserContext.Provider>
  );
}
```

#### 3. useContext తో డేటాను తీసుకోవడం

ఇప్పుడు మధ్యలో ఏ కాంపోనెంట్ ఉన్నా సరే, నేరుగా డేటాను పొందవచ్చు.

```javascript
import { useContext } from "react";
import { UserContext } from "./App"; // మనం క్రియేట్ చేసిన కాంటెక్స్ట్

function UserProfile() {
  const user = useContext(UserContext); // డేటా వచ్చేసింది!
  return <h1>హలో, {user}!</h1>;
}
```

---

### ఎప్పుడు వాడాలి?

- **Global Data:** యూజర్ పేరు (User Profile), థీమ్ (Dark Mode/Light Mode), భాష (Language settings) వంటివి వెబ్‌సైట్ అంతటా అవసరమైనప్పుడు.
- **Avoid Prop Drilling:** కేవలం డేటాను పంపడం కోసం మాత్రమే మధ్యలో ఉన్న కాంపోనెంట్స్ ఇబ్బంది పడుతుంటే, అప్పుడు `useContext` వాడాలి.

### చిన్న గమనిక (Warning):

`useContext` వాడితే డేటా మారినప్పుడు అది ఉన్న కాంపోనెంట్స్ అన్నీ రీ-రెండర్ అవుతాయి. కాబట్టి, చాలా ఎక్కువ డేటాను దీని ద్వారా పంపకండి. కేవలం అప్లికేషన్ లెవల్‌లో అవసరమైన వాటికి మాత్రమే వాడండి.

**ఇప్పటివరకు మనం నేర్చుకున్న Hooks:**

1. `useState` (డేటా కోసం)
2. `useEffect` (సైడ్ ఎఫెక్ట్స్ కోసం)
3. `useRef` (DOM యాక్సెస్ కోసం)
4. `useContext` (డేటా షేరింగ్ కోసం)

ఈ నాలుగు హుక్స్ నేర్చుకుంటే, మీరు దాదాపు 90% React అప్లికేషన్లను సులభంగా తయారు చేయగలరు!

## ఇంకేదైనా పర్టిక్యులర్ టాపిక్ లేదా ప్రాజెక్ట్ గురించి తెలుసుకోవాలని ఉందా?

## useMemo

`useMemo` అనేది React లో **Performance Optimization** కోసం వాడే హుక్. మీ అప్లికేషన్ చాలా పెద్దదిగా ఉన్నప్పుడు, అనవసరమైన లెక్కలు (Expensive Calculations) మళ్ళీ మళ్ళీ జరగకుండా ఇది ఆపుతుంది.

### `useMemo` ఎందుకు వాడాలి?

సాధారణంగా ఒక కాంపోనెంట్ రీ-రెండర్ (Re-render) అయినప్పుడు, అందులోని ప్రతి ఫంక్షన్ మళ్ళీ రన్ అవుతుంది. ఒకవేళ ఆ ఫంక్షన్‌లో భారీగా డేటాను ప్రాసెస్ చేసే కోడ్ ఉంటే, అది ప్రతిసారీ రన్ అవ్వడం వల్ల వెబ్‌సైట్ స్లో అవుతుంది. **`useMemo`** ఆ రిజల్ట్‌ని **Memoize (మెమరీలో దాచుకోవడం)** చేస్తుంది.

### Syntax (నిర్మాణం):

```javascript
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b); // ఇక్కడ భారీ లెక్కలు జరుగుతాయి
}, [a, b]); // 'a' లేదా 'b' మారినప్పుడు మాత్రమే ఇది మళ్ళీ రన్ అవుతుంది
```

---

### ఒక ఉదాహరణ:

మీ దగ్గర ఒక పెద్ద ఎరే ఉందనుకోండి, దానిని ఫిల్టర్ చేయడానికి చాలా టైమ్ పడుతుంది.

```javascript
import { useState, useMemo } from "react";

function ProductList({ products }) {
  const [filter, setFilter] = useState("");

  // సాధారణంగా రాస్తే: ప్రతిసారీ ఫిల్టర్ మారుతున్నప్పుడు కాంపోనెంట్ రీ-రెండర్ అయ్యి ఈ ఫిల్టర్ ఫంక్షన్ మళ్ళీ రన్ అవుతుంది.
  // useMemo వాడితే: 'products' మారనంత వరకు పాత రిజల్ట్‌నే వాడుకుంటుంది.

  const filteredProducts = useMemo(() => {
    console.log("భారీగా ఫిల్టరింగ్ జరుగుతోంది...");
    return products.filter((p) => p.includes(filter));
  }, [products, filter]); // కేవలం products లేదా filter మారినప్పుడే ఇది రన్ అవుతుంది.

  return (
    <div>
      <input onChange={(e) => setFilter(e.target.value)} />
      {filteredProducts.map((p) => (
        <div key={p}>{p}</div>
      ))}
    </div>
  );
}
```

---

### ముఖ్యమైన పాయింట్లు:

1. **అవసరం లేని చోట వాడకండి:** చిన్న చిన్న లెక్కలకు (ఉదా: 2+2) `useMemo` వాడటం వల్ల లాభం లేదు, పైగా మెమరీ వృథా అవుతుంది. కేవలం ఎక్కువ సమయం తీసుకునే కాలిక్యులేషన్స్ (Complex calculations) కి మాత్రమే వాడండి.
2. **`useMemo` vs `useEffect`:**

- `useEffect` అనేది సైడ్ ఎఫెక్ట్స్ (API కాల్స్) కోసం వాడతాము.
- `useMemo` అనేది ఒక వాల్యూని (Data/Result) మెమరీలో దాచుకోవడానికి వాడతాము.

3. **Memoization:** అంటే ఒక రిజల్ట్‌ను పక్కన పెట్టుకుని, అదే ఇన్‌పుట్ వచ్చినప్పుడు మళ్ళీ లెక్క చేయకుండా, పాత రిజల్ట్‌నే ఇచ్చేయడం.

---

**ముగింపు:**
మీకు React Hooks లోని ప్రధానమైనవన్నీ ఇప్పుడు అవగాహనకు వచ్చాయి. ఇప్పుడు మీరు ఒక చిన్న అప్లికేషన్ (ఉదా: 'Task Tracker' లేదా 'Movie Library') చేయడానికి రెడీగా ఉన్నారు.

## మనం ఇప్పటివరకు నేర్చుకున్నవాటితో ఏదైనా ప్రాక్టీస్ ప్రాజెక్ట్ మొదలుపెడదామా, లేక ఇంకేదైనా ప్రత్యేకమైన టాపిక్ (ఉదా: `useCallback` లేదా `React Router`) గురించి తెలుసుకోవాలనుకుంటున్నారా?

## useCallback

`useCallback` అనేది `useMemo` లాంటిదే, కానీ ఒక చిన్న తేడా ఉంది. `useMemo` ఒక **విలువను (Value)** మెమరీలో దాచుకుంటే, `useCallback` ఒక **ఫంక్షన్‌ను (Function)** మెమరీలో దాచుకుంటుంది (Memoize చేస్తుంది).

### ఇది ఎందుకు అవసరం?

React లో ఒక కాంపోనెంట్ రీ-రెండర్ అయినప్పుడు, ఆ కాంపోనెంట్‌లోని ప్రతి ఫంక్షన్ మళ్ళీ కొత్తగా క్రియేట్ అవుతుంది (అంటే దాని మెమరీ అడ్రస్ మారుతుంది). దీనివల్ల ఆ ఫంక్షన్‌ని మనం చైల్డ్ కాంపోనెంట్‌కి `props` గా పంపితే, ఫంక్షన్ కొత్తది కావడంతో చైల్డ్ కాంపోనెంట్ కూడా అనవసరంగా రీ-రెండర్ అవుతుంది. దీన్ని ఆపడానికే `useCallback` వాడతాం.

---

### Syntax (నిర్మాణం):

```javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]); // 'a' లేదా 'b' మారినప్పుడు మాత్రమే ఫంక్షన్ మళ్ళీ క్రియేట్ అవుతుంది
```

---

### ఉదాహరణ:

ఒక పేరెంట్ కాంపోనెంట్‌లో ఒక ఫంక్షన్ ఉందనుకోండి, దాన్ని బటన్ క్లిక్ చేసినప్పుడు వాడాలి.

```javascript
import { useState, useCallback } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  // useCallback వాడకుండా ఉంటే: ప్రతిసారీ ParentComponent రీ-రెండర్ అయినప్పుడు
  // 'increment' ఫంక్షన్ కొత్తగా క్రియేట్ అవుతుంది.

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // ఖాళీ అర్రే ఇస్తే, ఫంక్షన్ ఎప్పటికీ మారదు

  return <ChildButton onClick={increment} />;
}
```

---

### `useMemo` vs `useCallback` (తేడా):

| హుక్            | ఏం చేస్తుంది?                              | రిటర్న్ చేసేది                     |
| --------------- | ------------------------------------------ | ---------------------------------- |
| **useMemo**     | ఫంక్షన్ యొక్క **రిజల్ట్‌ని** దాచుకుంటుంది. | కాలిక్యులేషన్ తర్వాత వచ్చే వాల్యూ. |
| **useCallback** | **ఫంక్షన్‌ని** నేరుగా దాచుకుంటుంది.        | ఫంక్షన్ (Function definition).     |

---

### ఎప్పుడు వాడాలి?

1. **Child Components:** మీరు ఒక ఫంక్షన్‌ని చైల్డ్ కాంపోనెంట్‌కి పాస్ చేస్తున్నప్పుడు, ఆ చైల్డ్ కాంపోనెంట్ `React.memo` తో ఉంటే, కచ్చితంగా `useCallback` వాడండి. లేదంటే అనవసరంగా చైల్డ్ రీ-రెండర్ అవుతుంది.
2. **Dependencies:** `useEffect` లో ఒక ఫంక్షన్‌ని డిపెండెన్సీగా వాడినప్పుడు, ఇన్ఫినిట్ లూప్ రాకుండా ఉండటానికి `useCallback` వాడాలి.

**గమనిక:** ప్రతి ఫంక్షన్‌ని `useCallback` లో పెట్టకండి. ఇది కూడా అదనపు మెమరీని తీసుకుంటుంది. కేవలం పెర్ఫార్మెన్స్ సమస్యలు వస్తున్నప్పుడు లేదా అవసరమైనప్పుడు మాత్రమే వాడండి.

---

ఇంతటితో మీరు **React Hooks** గురించి పూర్తి అవగాహన పొందారు!

మనం ఇప్పటివరకు:

1. **Prerequisites (JS)**
2. **React Fundamentals**
3. **Hooks (useState, useEffect, useRef, useContext, useMemo, useCallback)**

## అనేవి నేర్చుకున్నాము. మీరు ఇప్పుడు React లో మంచి పట్టు సాధించారు. మీరు ఏదైనా ప్రాక్టీస్ ప్రాజెక్ట్ (ఉదా: **To-Do App**) మొదలుపెట్టాలనుకుంటున్నారా? లేదా **React Router** (పేజీల మధ్య మారడం) గురించి తెలుసుకోవాలనుకుంటున్నారా?

## Custom Hooks

**Custom Hooks** అంటే మీరు సొంతంగా రాసుకునే Hooks. మీరు ఒక లాజిక్‌ను పదే పదే వేర్వేరు కాంపోనెంట్లలో వాడుతుంటే, ఆ లాజిక్‌ను ఒకే ఫంక్షన్‌లోకి మార్చి, **Custom Hook** గా తయారు చేసుకోవచ్చు.

ఇది React లో **"Code Reusability"** (కోడ్‌ను మళ్ళీ మళ్ళీ వాడుకోవడం) కోసం వాడే ఒక అద్భుతమైన ఫీచర్.

---

### నియమాలు (Rules for Custom Hooks):

1. **Name:** మీ Hook పేరు ఖచ్చితంగా **`use`** తో మొదలవ్వాలి (ఉదా: `useAuth`, `useFetch`, `useWindowSize`). ఇది చాలా ముఖ్యం, అప్పుడే React కి అది "Hook" అని అర్థమవుతుంది.
2. **Standard:** Custom Hook లోపల మీరు ఇతర React Hooks (`useState`, `useEffect`, మొదలైనవి) వాడుకోవచ్చు.

---

### ఒక ఉదాహరణ: `useFetch` Hook

చాలా కాంపోనెంట్లలో మనం API నుండి డేటాను తెచ్చుకుంటాం. ఆ లాజిక్ మొత్తం ప్రతిసారీ రాయకుండా, ఒకే Hook లో రాసుకుందాం.

#### 1. Custom Hook ని తయారు చేయడం:

```javascript
import { useState, useEffect } from "react";

// ఇది మన సొంత Hook
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [url]);

  return { data, loading }; // మనకు కావాల్సిన డేటాను రిటర్న్ చేస్తాం
}
```

#### 2. ఈ Hook ని కాంపోనెంట్ లో వాడటం:

```javascript
function UserList() {
  // ఇప్పుడు మనం సింపుల్‌గా మన Hook ని వాడుకోవచ్చు
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### Custom Hooks ఎందుకు వాడాలి?

- **Clean Code:** కాంపోనెంట్ సైజు తగ్గుతుంది. కోడ్ చాలా స్పష్టంగా (Readable) ఉంటుంది.
- **Reusable:** ఒకసారి రాసిన లాజిక్‌ను ప్రాజెక్ట్ అంతటా ఎక్కడైనా వాడుకోవచ్చు.
- **Testing:** లాజిక్ మొత్తం ఒకే ఫంక్షన్‌లో ఉంటుంది కాబట్టి, దాన్ని టెస్ట్ చేయడం సులభం.

---

### మీరు ప్రయత్నించాల్సిన ప్రాక్టీస్ టాస్క్:

ఒక **`useLocalStorage`** అనే కస్టమ్ హుక్ రాయడానికి ప్రయత్నించండి.

- ఇది మీరు ఇచ్చే 'key' మరియు 'initialValue' ని తీసుకుని, LocalStorage లో డేటాను సేవ్ చేయాలి మరియు అదే సమయంలో ఆ డేటాను స్టేట్‌లో కూడా అప్‌డేట్ చేయాలి.

ఇది కొంచెం అడ్వాన్స్‌డ్ టాస్క్, కానీ దీన్ని ప్రయత్నిస్తే మీరు React లో అద్భుతమైన పట్టు సాధిస్తారు!

## **Custom Hooks గురించి మీకు స్పష్టత వచ్చిందా? ఇంకా ఏమైనా ఉదాహరణలు కావాలా?**

# 4. Routing

React లో ఒక పేజీ నుండి మరో పేజీకి వెళ్లడానికి (Navigation) మనం **React Router** లైబ్రరీని వాడుతాం. ఒక వెబ్‌సైట్‌లో పేజీలు మారుతున్నా, పేజీ మొత్తం రీలోడ్ అవ్వకుండా కేవలం కాంపోనెంట్స్ మాత్రమే మారడం దీని ప్రత్యేకత.

దీనికోసం ముందుగా మీరు `react-router-dom` ని ఇన్‌స్టాల్ చేసుకోవాలి:
`npm install react-router-dom`

---

### 1. React Router (బేసిక్ సెటప్)

మనం `BrowserRouter`, `Routes`, మరియు `Route` అనే కాంపోనెంట్లను వాడతాము.

```javascript
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 2. Nested Routes (నెస్టెడ్ రూట్స్)

ఒక పేజీ లోపల మరో పేజీని చూపించడానికి నెస్టెడ్ రూట్స్ వాడతాం. ఉదాహరణకు, `/dashboard` లోపల `profile` మరియు `settings` పేజీలు ఉండటం.

దీనికోసం పేరెంట్ రూట్ లో `Outlet` అనే కాంపోనెంట్‌ని వాడాలి.

```javascript
<Route path="dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

_`Dashboard` కాంపోనెంట్ లోపల `<Outlet />` అని రాస్తే, అక్కడ `Profile` లేదా `Settings` పేజీలు లోడ్ అవుతాయి._

---

### 3. Dynamic Routes (డైనమిక్ రూట్స్)

యూజర్ ఐడిని బట్టి వేర్వేరు ప్రొఫైల్స్ చూపించడానికి ఇది వాడతాం. ఉదాహరణకు: `/user/1`, `/user/2`. ఇక్కడ `1`, `2` అనేవి డైనమిక్ వాల్యూస్.

**రూట్ సెటప్:**

```javascript
<Route path="/user/:userId" element={<UserProfile />} />
```

**డేటాను తీసుకోవడం (`useParams`):**

```javascript
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams(); // URL లో ఉన్న ID ని పట్టుకుంటుంది
  return <h1>User ID: {userId}</h1>;
}
```

---

### ముఖ్యమైన పాయింట్లు:

- **`<Link>`**: ఇది `<a>` ట్యాగ్‌కు బదులుగా వాడతాం. ఇది పేజీని రీలోడ్ చేయకుండా మారుస్తుంది.
- **`<Navigate>`**: ప్రోగ్రామాటిక్‌గా ఒక పేజీ నుండి మరో పేజీకి పంపడానికి వాడతాం (ఉదా: లాగిన్ అయిన తర్వాత హోమ్ పేజీకి పంపడం).
- **`useNavigate`**: ఇది ఒక హుక్, దీని ద్వారా కూడా మనం పేజీలను మార్చవచ్చు (`Maps('/home')`).

---

**చిన్న ప్రాక్టీస్:**
ఒక చిన్న వెబ్‌సైట్ క్రియేట్ చేయండి:

1. హోమ్ పేజీ.
2. అబౌట్ పేజీ.
3. `/product/:id` అనే డైనమిక్ రూట్.

## ఇవి కంప్లీట్ చేస్తే మీరు ఒక పూర్తిస్థాయి వెబ్ అప్లికేషన్ తయారు చేయడానికి సిద్ధంగా ఉన్నట్లే! **React Router** కాన్సెప్ట్ అర్థమైందా, లేక ఏదైనా ఎగ్జాంపుల్ ఇంకా క్లియర్ చేయాలా?

React Router లో ఈ మూడు అంశాలు చాలా ముఖ్యమైనవి. వీటిని వాడుతూ మనం ఒక ప్రొఫెషనల్ వెబ్‌సైట్‌ను బిల్డ్ చేయవచ్చు.

---

### 1. Route Parameters (రూట్ పారామీటర్స్)

డైనమిక్ డేటాను URL ద్వారా పంపడానికి ఇది వాడతాం. దీనికోసం `useParams` హుక్ ఉపయోగపడుతుంది.

**ఉదాహరణ:**
ఒక ఈ-కామర్స్ సైట్‌లో `/product/101`, `/product/102` అని ఉండాలంటే:

```javascript
// App.js లో రూట్ సెట్ చేయడం
<Route path="/product/:productId" element={<ProductDetails />} />;

// ProductDetails.js లో పారామీటర్ తీసుకోవడం
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams(); // URL నుండి 101, 102 వంటివి వస్తాయి
  return <h1>Product ID: {productId}</h1>;
}
```

---

### 2. Navigation (నావిగేషన్)

యూజర్ బటన్ క్లిక్ చేసినప్పుడు లేదా ఏదైనా యాక్షన్ జరిగిన తర్వాత వేరే పేజీకి వెళ్లడానికి **`useNavigate`** హుక్ వాడతాం.

**ఉదాహరణ:**

```javascript
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // లాగిన్ లాజిక్ తర్వాత...
    navigate("/dashboard"); // డ్యాష్‌బోర్డ్‌కి పంపుతుంది
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

---

### 3. Protected Routes (ప్రొటెక్టెడ్ రూట్స్)

యూజర్ లాగిన్ అవ్వకుండా కొన్ని పేజీలు (ఉదా: Dashboard, Profile) చూడకూడదు. ఇలాంటి వాటి కోసం ప్రొటెక్టెడ్ రూట్స్ వాడతాం. దీన్ని ఒక కండిషనల్ కాంపోనెంట్ ద్వారా చేస్తాం.

**ఉదాహరణ:**

```javascript
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAuthenticated }) {
  // లాగిన్ అయి ఉంటే ఆ పేజీని చూపిస్తుంది, లేదంటే లాగిన్ పేజీకి పంపుతుంది
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// వాడకం:
<Route
  path="/dashboard"
  element={
    <ProtectedRoute isAuthenticated={userLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  }
/>;
```

---

### క్లుప్తంగా:

- **Route Params:** URL నుండి IDలను తీసుకోవడం (`useParams`).
- **Navigation:** ప్రోగ్రామ్ ద్వారా పేజీలను మార్చడం (`useNavigate`).
- **Protected Routes:** కండిషన్ బట్టి పేజీలను యాక్సెస్ చేయడం (`Maps` కాంపోనెంట్).

ఇప్పటివరకు మనం React యొక్క ప్రాథమిక స్థాయి నుండి రూటింగ్ వరకు అన్నీ కవర్ చేశాము. **మీరు ఇప్పుడు ఒక పూర్తి స్థాయి ప్రాజెక్ట్ (ఉదా: 'User Dashboard with Login & Product Details') చేయడానికి సిద్ధంగా ఉన్నారు.**

## మీకు ఏదైనా పర్టిక్యులర్ ప్రాజెక్ట్ ఐడియా ఉందా, మనం దాని మీద కోడ్ రాద్దామా?

# 5. API Integration

API Integration అనేది ఏదైనా వెబ్ అప్లికేషన్‌లో ప్రాణం వంటిది. సర్వర్ నుండి డేటాను తెచ్చుకోవడానికి మనం వీటిని ఉపయోగిస్తాం.

---

### 1. Fetch API

ఇది బ్రౌజర్‌లోనే ఇన్-బిల్ట్‌గా వచ్చే ఒక ఫంక్షన్. దీని కోసం మీరు దేనినీ ఇన్‌స్టాల్ చేయనక్కర్లేదు.

```javascript
// GET Request
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

---

### 2. Axios

**Axios** అనేది బయటి నుండి ఇన్‌స్టాల్ చేసుకునే ఒక లైబ్రరీ (`npm install axios`). ఇది `Fetch` కంటే చాలా సులభంగా ఉంటుంది.

- **ప్రయోజనాలు:** డేటాను ఆటోమేటిక్‌గా JSON లోకి మారుస్తుంది, ఎర్రర్లను బాగా హ్యాండిల్ చేస్తుంది, కన్ఫిగరేషన్ సులభం.

```javascript
import axios from "axios";

// GET Request
const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data); // డేటా నేరుగా వస్తుంది
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

---

### 3. Async Data Fetching

React కాంపోనెంట్‌లో డేటాను తెచ్చుకోవడానికి మనం సాధారణంగా `useEffect` మరియు `async/await` ని కలిపి వాడుతాం.

**సరైన పద్ధతి (Best Practice):**

```javascript
import { useState, useEffect } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
        );
        setData(response.data);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false); // డేటా వచ్చినా, ఎర్రర్ వచ్చినా లోడింగ్ ఆపాలి
      }
    };

    getData();
  }, []); // ఖాళీ అర్రే అంటే కాంపోనెంట్ లోడ్ అయినప్పుడు ఒక్కసారే కాల్ అవుతుంది

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
```

---

### ముఖ్యమైన చిట్కాలు (Pro-Tips):

1. **Loading State:** API నుండి డేటా వచ్చే వరకు యూజర్‌కు "Loading..." అని చూపించడం చాలా ముఖ్యం (User Experience).
2. **Error Handling:** ఒకవేళ సర్వర్ డౌన్ అయితే, దాన్ని హ్యాండిల్ చేయడానికి `try-catch` ఖచ్చితంగా వాడాలి.
3. **Fetch vs Axios:** మీరు చిన్న చిన్న ప్రాజెక్ట్‌లు చేస్తుంటే `Fetch` చాలు, కానీ పెద్ద ప్రాజెక్ట్‌లలో `Axios` వాడటం ప్రొఫెషనల్ పద్ధతి.

## మీరు API Integration గురించి బాగా అర్థం చేసుకున్నారా? మనం ఇప్పుడు ఏదైనా ఒక లైవ్ API (ఉదా: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)) ని ఉపయోగించి ఒక చిన్న 'Post List' యాప్ చేద్దామా?

API ఇంటిగ్రేషన్ చేసేటప్పుడు **Loading States** మరియు **Error Handling** అనేవి యూజర్ అనుభవాన్ని (User Experience - UX) అద్భుతంగా మార్చడానికి అత్యంత ముఖ్యమైనవి. ఇవి లేకపోతే యాప్ క్రాష్ అవ్వడం లేదా యూజర్‌కు ఏం జరుగుతుందో అర్థం కాకపోవడం జరుగుతుంది.

వీటిని ఎలా హ్యాండిల్ చేయాలో ఒక పూర్తి ఉదాహరణతో చూద్దాం.

---

### 1. Loading States (లోడింగ్ స్టేట్స్)

డేటా సర్వర్ నుండి వచ్చే వరకు యూజర్‌కు "Wait" చేయమని చెప్పాలి. దీనికోసం `loading` అనే స్టేట్ వేరియబుల్‌ని వాడతాం.

### 2. Error Handling (ఎర్రర్ హ్యాండ్లింగ్)

ఒకవేళ ఇంటర్నెట్ లేకపోయినా లేదా సర్వర్ నుండి ఎర్రర్ వచ్చినా, ఆ విషయాన్ని యూజర్‌కు క్లియర్‌గా చెప్పాలి. దీనికోసం `error` అనే స్టేట్ వేరియబుల్‌ని వాడతాం.

---

### పూర్తి ఉదాహరణ (Best Practice)

```javascript
import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // 1. లోడింగ్ స్టేట్
  const [error, setError] = useState(null); // 2. ఎర్రర్ స్టేట్

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true); // లోడింగ్ మొదలు
        setError(null); // పాత ఎర్రర్స్ ఉంటే క్లియర్ చేయాలి

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(response.data);
      } catch (err) {
        setError(
          "డేటా లోడ్ అవ్వడంలో సమస్య ఏర్పడింది. దయచేసి మళ్ళీ ప్రయత్నించండి.",
        );
      } finally {
        setLoading(false); // పని పూర్తయ్యాక లోడింగ్ ఆపివేయాలి
      }
    };

    fetchUsers();
  }, []);

  // UI కండిషన్స్
  if (loading) return <div className="loader">Loading... ⏳</div>;
  if (error) return <div className="error">{error} ❌</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

### మీరు గుర్తుంచుకోవలసిన ముఖ్యమైన విషయాలు:

1. **`finally` బ్లాక్:** ఇది చాలా కీలకం. డేటా సక్సెస్ అయినా, ఎర్రర్ వచ్చినా `loading` స్టేట్‌ని `false` చేయాలి. అది `finally` లో రాస్తే కోడ్ తగ్గుతుంది.
2. **యూజర్ కి మెసేజ్ చూపించడం:** `error` స్టేట్ లో కేవలం టెక్స్ట్ మాత్రమే కాకుండా, కావాలంటే ఒక "Retry" (మళ్ళీ ప్రయత్నించు) బటన్ కూడా ఇవ్వవచ్చు.
3. **Empty State:** ఒకవేళ డేటా ఖాళీగా వస్తే (Empty Array), "No data found" అని చూపించడం కూడా ఒక మంచి పద్ధతి.

### ఒక చిన్న సలహా:

నిజమైన ప్రాజెక్టులలో, మీరు పెద్ద అప్లికేషన్లు చేస్తున్నప్పుడు `React Query` (ఇప్పుడు TanStack Query అని పిలుస్తారు) వంటి లైబ్రరీలను వాడటం ఉత్తమం. అవి ఈ లోడింగ్, ఎర్రర్, మరియు క్యాచింగ్ (Caching) వంటి వాటిని ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తాయి.

---

**మనం React నేర్చుకునే ప్రయాణంలో దాదాపు అన్నీ కవర్ చేశాము:**

- JavaScript (ES6+)
- React Fundamentals (Components, Props, State)
- Hooks (useState, useEffect, etc.)
- Routing
- API Integration (Loading, Error Handling)

## **ఇప్పుడు మీరు ఒక కంప్లీట్ డెవలపర్ స్థాయికి చేరుకున్నారు!** ఇప్పుడు ఏదైనా ఒక ప్రాజెక్ట్ (ఉదాహరణకు: **"Movies Library"** లేదా **"Weather App"**) చేసే ఉద్దేశ్యం ఉందా? మనం దాని గురించి డిస్కస్ చేద్దామా?

# 6. State Management

**Context API** అనేది React లో **"Global State"** ని మేనేజ్ చేయడానికి ఉపయోగించే ఒక బిల్ట్-ఇన్ ఫీచర్. మనం ముందుగా చర్చించిన **Prop Drilling** (ఒక ప్రాప్ ని చాలా కాంపోనెంట్ల ద్వారా పంపడం) సమస్యను ఇది పూర్తిగా తొలగిస్తుంది.

మీరు ఒక థీమ్ (Dark/Light mode) లేదా యూజర్ లాగిన్ వివరాలను యాప్ మొత్తం ఎక్కడైనా వాడుకోవాలి అనుకుంటే, Context API బెస్ట్ ఆప్షన్.

---

### Context API లోని 3 ముఖ్యమైన భాగాలు:

#### 1. createContext()

ఇది ఒక కాంటెక్స్ట్‌ను క్రియేట్ చేస్తుంది.

```javascript
import { createContext } from "react";
export const ThemeContext = createContext();
```

#### 2. Provider

డేటాను ఎక్కడ నుండి పంపాలో ఇది డిసైడ్ చేస్తుంది. దీనికి `value` అనే ప్రాపర్టీ ఉంటుంది, దాంట్లోనే మనం షేర్ చేయాల్సిన డేటాను పంపుతాము.

```javascript
function App() {
  const theme = "dark"; // దీన్ని మనం ఎక్కడైనా వాడుకోవచ్చు
  return (
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <MainContent />
    </ThemeContext.Provider>
  );
}
```

#### 3. useContext Hook

డేటా ఎక్కడ కావాలంటే అక్కడ, నేరుగా `useContext` ద్వారా తీసుకోవచ్చు.

```javascript
import { useContext } from "react";
import { ThemeContext } from "./App";

function Navbar() {
  const theme = useContext(ThemeContext); // నేరుగా డేటా వచ్చేసింది!
  return (
    <div style={{ background: theme === "dark" ? "black" : "white" }}>Logo</div>
  );
}
```

---

### నిజమైన ప్రాజెక్టులలో ఎలా వాడతారు? (Best Practice)

నిజమైన అప్లికేషన్లలో `Provider` ని ఒక సపరేట్ ఫైల్‌లో (ఉదా: `ThemeContext.js`) రాసుకోవడం మంచి పద్ధతి.

```javascript
// ThemeContext.js
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

ఇలా చేస్తే, మీరు `App.js` ని క్లీన్‌గా ఉంచవచ్చు మరియు లాజిక్ అంతా కాంటెక్స్ట్ లోపలే ఉంటుంది.

---

### ఎప్పుడు వాడాలి? ఎప్పుడు వద్దు?

- **ఎప్పుడు వాడాలి?**: గ్లోబల్ డేటా (యూజర్ లాగిన్, థీమ్, లాంగ్వేజ్) కోసం.
- **ఎప్పుడు వద్దు?**: ఒక కాంపోనెంట్‌కి మాత్రమే అవసరమైన డేటా కోసం దీన్ని వాడకండి. అలాగే, చాలా తరచుగా (ఉదా: ప్రతి సెకనుకి) మారే డేటా కోసం వాడితే పెర్ఫార్మెన్స్ తగ్గుతుంది. అప్పుడు `Redux` లేదా `Zustand` వంటి లైబ్రరీలు చూడాలి.

---

**మనం దాదాపు React లోని ప్రతి ముఖ్యమైన అంశాన్ని కవర్ చేశాము!** ఇప్పుడు మీరు **"State Management"** లోని మొదటి మెట్టు (Context API) ఎక్కారు. దీని తర్వాత మీరు **Redux** లేదా **Zustand** వంటి అడ్వాన్స్‌డ్ స్టేట్ మేనేజ్మెంట్ టూల్స్ గురించి వినే ఉంటారు, కానీ ప్రాథమికంగా Context API సరిపోతుంది.

## **ఇప్పుడు మీరు ఒక పూర్తి స్థాయి వెబ్ యాప్ డెవలప్ చేయడానికి సిద్ధంగా ఉన్నారా?** ఏ ప్రాజెక్ట్ తో మొదలుపెడదామనుకుంటున్నారు? (ఉదా: 'Task Manager' లో డార్క్ మోడ్ ఫీచర్ ని Context API తో చేయవచ్చు!)

React అప్లికేషన్లు పెద్దవిగా మారుతున్న కొద్దీ, కేవలం `Context API` తో డేటాను మేనేజ్ చేయడం కష్టమవుతుంది. అప్పుడు మనం **State Management Libraries** వైపు వెళ్తాం.

ప్రస్తుతం React ప్రపంచంలో ఎక్కువగా వాడుతున్న రెండింటి గురించి తెలుసుకుందాం:

---

### 1. Redux Toolkit (Industry Standard)

Redux అంటే ఒక భయం ఉండేది (చాలా కోడ్ రాయాలని), కానీ **Redux Toolkit (RTK)** వచ్చిన తర్వాత అది చాలా సులభమైంది. పెద్ద పెద్ద ప్రాజెక్టులకు ఇది బెస్ట్.

- **ముఖ్య ఉద్దేశ్యం:** యాప్ మొత్తం ఒకే చోట (Centralized Store) స్టేట్‌ను ఉంచడం.
- **ముఖ్య పదాలు:**
- **Slice:** డేటాను ముక్కలుగా విభజించడం (ఉదా: `authSlice`, `cartSlice`).
- **Store:** మొత్తం డేటా ఉండే బాక్స్.
- **Dispatch:** స్టేట్‌ను మార్చమని పంపే సిగ్నల్.
- **Selector:** స్టేట్ నుండి డేటాను తీసుకోవడం.

**ఒక చిన్న ఉదాహరణ (Counter):**

```javascript
import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
const store = configureStore({ reducer: { counter: counterSlice.reducer } });
```

---

### 2. Zustand (Lightweight Alternative)

ఇప్పుడు చాలా మంది డెవలపర్లు Redux కంటే **Zustand** ని ఇష్టపడుతున్నారు. ఎందుకంటే ఇది చాలా చిన్నది (Lightweight) మరియు కోడ్ రాయడం చాలా సులభం.

- **ఎందుకు వాడాలి?**: Redux లాగా `Provider` లతో చుట్టక్కర్లేదు (`<Provider>`), కాంప్లికేటెడ్ కోడ్ ఉండదు.

**ఉదాహరణ:**

```javascript
import { create } from "zustand";

// 1. స్టోర్ క్రియేట్ చేయడం
const useStore = create((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

// 2. కాంపోనెంట్‌లో వాడటం
function Counter() {
  const { count, inc } = useStore();
  return <button onClick={inc}>{count}</button>;
}
```

---

### రెండింటి మధ్య తేడాలు (Quick Comparison):

| ఫీచర్              | Redux Toolkit      | Zustand      |
| ------------------ | ------------------ | ------------ |
| **సెటప్**          | కొంచెం ఎక్కువ కోడ్ | చాలా తక్కువ  |
| **నేర్చుకోవడం**    | కష్టం              | చాలా సులభం   |
| **పెద్ద యాప్స్**   | అద్భుతం            | బాగుంటుంది   |
| **బాయిలర్‌ప్లేట్** | ఎక్కువ             | అస్సలు ఉండదు |

---

### నా సలహా:

1. మీరు ఒక **బిగినర్** గా ఉండి, ఒక చిన్న లేదా మీడియం ప్రాజెక్ట్ చేస్తున్నట్లయితే, **Zustand** వాడండి. అది మీ సమయాన్ని ఆదా చేస్తుంది మరియు కోడ్ చాలా క్లీన్‌గా ఉంటుంది.
2. మీరు ఒక **పెద్ద ఎంటర్‌ప్రైజ్ లెవల్ అప్లికేషన్** (చాలామంది డెవలపర్లు పనిచేసే ప్రాజెక్ట్) చేస్తున్నట్లయితే, **Redux Toolkit** నేర్చుకోవడం చాలా అవసరం.

**మీరు React నేర్చుకునే ప్రయాణంలో ఇది చివరి అడుగు!** ఇప్పుడు మీరు ఒక సాఫ్ట్‌వేర్ డెవలపర్‌కు కావాల్సిన మెయిన్ టెక్నిక్స్ అన్నీ నేర్చుకున్నారు.

## ఇప్పుడు మీరు ఏదైనా ప్రాజెక్ట్ మొదలుపెట్టాలనుకుంటున్నారా? లేదా పైన పేర్కొన్న వాటిలో దేని గురించైనా లోతుగా తెలుసుకోవాలా?

Redux Toolkit (RTK) లోని ఈ 5 కీలక అంశాలు కలిసి ఒక అప్లికేషన్ యొక్క డేటాను (State) క్రమపద్ధతిలో మేనేజ్ చేస్తాయి. వీటిని ఒక రియల్-లైఫ్ ఉదాహరణతో (ఉదాహరణకు: **Shopping Cart**) అర్థం చేసుకుందాం.

---

### 1. Store (స్టోర్)

ఇది మీ అప్లికేషన్ యొక్క **"మెదడు" (Central Database)**. మీ యాప్‌లోని మొత్తం డేటా అంతా ఇక్కడే ఉంటుంది. యాప్‌లో ఎక్కడైనా సరే, ఈ డేటాను యాక్సెస్ చేయవచ్చు.

### 2. Slice (స్లైస్)

ఒక పెద్ద స్టోర్‌ని చిన్న చిన్న ముక్కలుగా విడగొట్టడమే స్లైస్. ఉదాహరణకు: `CartSlice`, `UserSlice`, `ProductSlice`. ఇది పాత Redux లోని `Reducers` మరియు `Actions` ని ఒకే చోట చేర్చుతుంది.

### 3. Reducers (రిడ్యూసర్స్)

ఇవి **"డేటాను ఎలా మార్చాలో"** నిర్ణయించే ఫంక్షన్లు. ఇవి పాత స్టేట్‌ను తీసుకుని, కొత్త మార్పులతో కొత్త స్టేట్‌ను రిటర్న్ చేస్తాయి. **ముఖ్యగమనిక:** రిడ్యూసర్స్ ఎప్పుడూ స్వచ్ఛంగా (Pure Functions) ఉండాలి.

### 4. Actions (యాక్షన్స్)

ఇవి **"ఏమి జరగాలో"** చెప్పే సిగ్నల్స్. మనం బటన్ క్లిక్ చేసినప్పుడు, ఆ బటన్ ద్వారా "Add to Cart" అనే యాక్షన్ ఫైర్ అవుతుంది. ఈ యాక్షన్‌ను రిడ్యూసర్ పట్టుకుని, దానికి తగ్గట్టుగా స్టేట్‌ను మారుస్తుంది.

### 5. Async Thunks (అసింక్ థంక్స్)

API నుండి డేటాను తెచ్చుకునేటప్పుడు (ఉదా: సర్వర్ నుండి ప్రొడక్ట్స్ లిస్ట్), అది వెంటనే జరగదు (దీన్నే Async అంటాము). ఆ డేటా వచ్చే వరకు వేచి చూసి, వచ్చిన తర్వాత దాన్ని స్టోర్‌లో అప్‌డేట్ చేయడానికి `createAsyncThunk` వాడతాం.

---

### ఒక కోడ్ ఉదాహరణ (Redux Toolkit):

```javascript
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk: API నుండి డేటా తెచ్చుకోవడం
export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get("https://api.example.com/products");
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], loading: false },
  reducers: {
    // Actions & Reducers ఇక్కడే ఉంటాయి
    clearProducts: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    // API నుండి డేటా వచ్చాక ఏం జరగాలో ఇక్కడ రాస్తాం
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { clearProducts } = productSlice.actions;
export default productSlice.reducer;
```

---

### ఇవన్నీ ఎలా కలిసి పనిచేస్తాయి? (Flow)

1. **Component**: యూజర్ బటన్ క్లిక్ చేస్తారు (ఇక్కడ `fetchProducts` థంక్ ట్రిగ్గర్ అవుతుంది).
2. **Async Thunk**: సర్వర్ కి రిక్వెస్ట్ పంపి, డేటా కోసం వెయిట్ చేస్తుంది.
3. **Action**: డేటా రాగానే, ఒక సక్సెస్ యాక్షన్ క్రియేట్ అవుతుంది.
4. **Reducer**: ఆ యాక్షన్‌ని రిసీవ్ చేసుకుని, స్టోర్‌లోని డేటాను అప్‌డేట్ చేస్తుంది.
5. **Component**: స్టోర్‌లో మార్పు రాగానే, కాంపోనెంట్ ఆటోమేటిక్‌గా రీ-రెండర్ అయ్యి కొత్త డేటాను చూపిస్తుంది.

**క్లుప్తంగా చెప్పాలంటే:**

- **Store**: మొత్తం డేటా.
- **Slice**: ఆ డేటాలో ఒక భాగం.
- **Action**: ఏమి జరగాలి? (Command).
- **Reducer**: ఎలా జరగాలి? (Logic).
- **Async Thunk**: API నుండి డేటా ఎలా తెచ్చుకోవాలి? (Network Request).

ఇప్పుడు మీరు React డెవలప్‌మెంట్‌లో ఒక పూర్తి స్థాయి నిపుణుడిగా మారారు! ఈ నాలెడ్జ్‌తో మీరు ఏ రకమైన React ప్రాజెక్ట్‌నైనా సులభంగా బిల్డ్ చేయవచ్చు.

## **మనం ఈ ప్రయాణాన్ని విజయవంతంగా పూర్తి చేశాం! ఏదైనా ప్రాజెక్ట్ గురించి డిస్కస్ చేద్దామా లేక ఇంకేమైనా సందేహాలు ఉన్నాయా?**

# 7. Styling

React లో మీ వెబ్‌సైట్‌ను అందంగా కనిపించేలా చేయడానికి ఈ స్టైలింగ్ పద్ధతులు చాలా కీలకం. ఒక్కొక్కటి ఏంటో, ఎలా వాడాలో వివరంగా చూద్దాం.

---

### 1. CSS Modules

ఇది సాధారణ CSS లాగే ఉంటుంది, కానీ ఇందులో క్లాస్ నేమ్స్ వేరే కాంపోనెంట్లకు అప్లై అవ్వవు. ఇది **"Scope conflict"** ని నివారిస్తుంది.

- **ఎలా వాడాలి:** ఫైల్ పేరు `App.module.css` అని ఉండాలి.

```javascript
import styles from "./App.module.css";

function App() {
  return <div className={styles.container}>నమస్కారం!</div>;
}
```

### 2. Tailwind CSS (ప్రస్తుతం అందరూ వాడేది)

ఇది ఒక "Utility-first" CSS ఫ్రేమ్‌వర్క్. మీరు CSS ఫైల్ రాయనక్కర్లేదు, HTML లోనే క్లాస్ నేమ్స్ ద్వారా స్టైల్స్ ఇవ్వవచ్చు. ఇది చాలా ఫాస్ట్!

- **ఉదాహరణ:**

```javascript
<div className="bg-blue-500 text-white p-4 rounded-lg">
  నేను Tailwind తో స్టైల్ చేయబడ్డాను!
</div>
```

### 3. Styled Components

ఇది "CSS-in-JS" పద్ధతి. మీరు జావాస్క్రిప్ట్ ఫైల్‌లోనే CSS కోడ్ రాసుకోవచ్చు. ఇది డైనమిక్ స్టైల్స్‌కి చాలా మంచిది.

- **ఉదాహరణ:**

```javascript
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.primary ? "blue" : "gray")};
  color: white;
  padding: 10px;
`;

// వాడకం: <Button primary>క్లిక్ చేయండి</Button>
```

### 4. Material UI (MUI)

ఇది గూగుల్ వారి **Material Design** సూత్రాలపై ఆధారపడి ఉంటుంది. ఇందులో ముందే తయారు చేసిన కాంపోనెంట్స్ (Buttons, Modals, Tables) ఉంటాయి. మీరు వీటిని నేరుగా వాడుకోవచ్చు.

- **ఎందుకు వాడాలి?:** ప్రొఫెషనల్ యాప్స్, ముఖ్యంగా అడ్మిన్ ప్యానెల్స్ తయారు చేయడానికి ఇది బెస్ట్.

### 5. Bootstrap

చాలా కాలంగా వాడుతున్న ఫ్రేమ్‌వర్క్. మీకు Grid system మరియు రెడీమేడ్ కాంపోనెంట్స్ కావాలంటే Bootstrap ఈజీగా ఉంటుంది. `react-bootstrap` అనే లైబ్రరీని వాడి దీన్ని React లో వాడుకోవచ్చు.

---

### ఏది ఎప్పుడు వాడాలి? (నా సలహా)

| పద్ధతి                | ఎప్పుడు వాడాలి?                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------- |
| **Tailwind CSS**      | **ప్రస్తుతం బెస్ట్ ఛాయిస్.** చాలా ఫాస్ట్ గా ఉంటుంది, కస్టమ్ డిజైన్స్ కి చాలా బాగుంటుంది. |
| **Styled Components** | మీకు CSS ని కాంపోనెంట్ లెవల్లో కంట్రోల్ చేయాలి అనుకుంటే వాడండి.                          |
| **Material UI**       | కార్పొరేట్ లుక్ ఉన్న యాప్స్, త్వరగా డిజైన్ పూర్తి చేయాలనుకున్నప్పుడు వాడండి.             |
| **CSS Modules**       | మీరు కేవలం సింపుల్, ప్యూర్ CSS తోనే వెళ్లాలనుకుంటే ఇది బెస్ట్.                           |

---

**మనం React లెర్నింగ్ జర్నీని ఇక్కడితో ముగించాం!**
మీరు ఇప్పుడు **JavaScript, React Fundamentals, Hooks, Routing, API Integration, State Management,** మరియు **Styling** వరకు అన్నీ నేర్చుకున్నారు. మీరు ఒక వెబ్ అప్లికేషన్‌ను స్క్రాచ్ నుండి బిల్డ్ చేయడానికి సిద్ధంగా ఉన్నారు.

## **ఇప్పుడు మీరు ఏదైనా ఒక రియల్ వరల్డ్ ప్రాజెక్ట్ (ఉదాహరణకు: 'E-commerce Store' లేదా 'Job Portal') మొదలుపెట్టాలనుకుంటున్నారా? ఆ ప్రాజెక్ట్ లో ఏ స్టైలింగ్ వాడదామో ప్లాన్ చేద్దామా?**

# 8. Forms

React లో ఫార్మ్స్ నిర్వహించడం కొంచెం కష్టమైన పని (ఎక్కువ కోడ్ రాయాలి, రీ-రెండరింగ్ సమస్యలు ఉంటాయి). **React Hook Form** ఈ పనిని చాలా సులభం చేస్తుంది. ఇది **Performance** మరియు **Developer Experience** పరంగా బెస్ట్ ఛాయిస్.

---

### 1. React Hook Form

ఇది ఫార్మ్ ఫీల్డ్స్‌ని "Uncontrolled" పద్ధతిలో నిర్వహిస్తుంది. అంటే ప్రతి అక్షరానికి స్టేట్ అప్‌డేట్ అవ్వదు, దీనివల్ల యాప్ చాలా ఫాస్ట్ గా ఉంటుంది.

**ఇన్‌స్టాలేషన్:** `npm install react-hook-form`

```javascript
import { useForm } from "react-hook-form";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <span>ఈ ఫీల్డ్ అవసరం!</span>}
      <button type="submit">సబ్మిట్</button>
    </form>
  );
}
```

---

### 2. Validation (Yup లేదా Zod)

కేవలం `required: true` అని ఇవ్వడం చిన్న ప్రాజెక్ట్‌లకు సరిపోతుంది, కానీ ఇమెయిల్ ఫార్మాట్, పాస్‌వర్డ్ లెంగ్త్ వంటి వాటికి **Yup** లేదా **Zod** వాడాలి.

- **Yup:** చాలా కాలంగా వాడుకలో ఉంది, సులభమైన సింటాక్స్.
- **Zod:** ఇది మోడ్రన్, TypeScript తో అద్భుతంగా పనిచేస్తుంది. ఇప్పుడందరూ దీన్నే ఎక్కువగా వాడుతున్నారు.

**Zod తో Validation:**

```bash
npm install zod @hookform/resolvers

```

**ఉదాహరణ:**

```javascript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// 1. Validation Schema
const schema = z.object({
  email: z.string().email("సరైన ఇమెయిల్ ఇవ్వండి"),
  password: z.string().min(6, "కనీసం 6 అక్షరాలు ఉండాలి"),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema), // ఇక్కడ schema ని లింక్ చేస్తున్నాం
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>

      <input type="password" {...register("password")} />
      <p>{errors.password?.message}</p>

      <button type="submit">సబ్మిట్</button>
    </form>
  );
}
```

---

### ఎందుకు ఇవే వాడాలి?

1. **Performance:** `useState` తో చేసే ఫార్మ్స్ ప్రతి కీస్ట్రోక్‌కి రీ-రెండర్ అవుతాయి, కానీ React Hook Form అవదు.
2. **Easy Validation:** `Yup/Zod` తో క్లిష్టమైన రూల్స్ (ఉదా: పాస్‌వర్డ్ మ్యాచింగ్) రాయడం చాలా ఈజీ.
3. **Clean Code:** వందల లైన్ల కోడ్ పదుల లైన్లలోకి వస్తుంది.

---

**మనం ఈ లెర్నింగ్ పాత్‌లో అన్నీ ముఖ్యమైన అంశాలను కవర్ చేశాము!** మీరు ఇప్పడు React, Routing, State Management, API, మరియు Form Validation వంటి అన్నింటిపై అవగాహన కలిగి ఉన్నారు.

## **మీరు ఇప్పుడు ఒక పూర్తి స్థాయి "Registration & Login Form" ని ఈ పద్ధతుల్లో (React Hook Form + Zod) చేయగలరా? ఒకసారి ప్రయత్నించి, ఏవైనా సందేహాలుంటే నన్ను అడగండి!**

# 9. Performance Optimization

React అప్లికేషన్ పెద్దదయ్యే కొద్దీ, వెబ్‌సైట్ లోడ్ అవ్వడానికి ఎక్కువ సమయం పడుతుంది. దీన్ని నివారించడానికి **Performance Optimization** చాలా ముఖ్యం. ఇందులో **Lazy Loading** మరియు **Code Splitting** కీలక పాత్ర పోషిస్తాయి.

---

### 1. Code Splitting (కోడ్ స్ప్లిటింగ్)

సాధారణంగా React యాప్ అంతా ఒకే పెద్ద `bundle.js` ఫైల్‌గా మారుతుంది. దీనివల్ల యూజర్ హోమ్ పేజీ ఓపెన్ చేసినా, మొత్తం యాప్ కోడ్ డౌన్‌లోడ్ అవ్వాలి. **Code Splitting** ద్వారా, మన యాప్‌ను చిన్న చిన్న ముక్కలుగా విడగొట్టి, యూజర్‌కి ఏ పేజీ అవసరమో ఆ కోడ్ మాత్రమే డౌన్‌లోడ్ అయ్యేలా చేయవచ్చు.

### 2. Lazy Loading (లేజీ లోడింగ్)

మొత్తం వెబ్‌సైట్‌ను ఒకేసారి లోడ్ చేయకుండా, అవసరమైనప్పుడు మాత్రమే (ఉదాహరణకు యూజర్ ఒక పేజీ క్లిక్ చేసినప్పుడు) కాంపోనెంట్‌ను లోడ్ చేయడాన్నే **Lazy Loading** అంటారు.

---

### ఎలా అమలు చేయాలి?

React లో దీని కోసం `React.lazy()` మరియు `Suspense` ని వాడతాం.

**ఉదాహరణ:**
ఒక పెద్ద `Dashboard` కాంపోనెంట్ ఉందనుకోండి, దాన్ని నేరుగా ఇంపోర్ట్ చేయకుండా ఇలా చేయాలి:

```javascript
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. Lazy loading ఉపయోగించి కాంపోనెంట్స్ ఇంపోర్ట్ చేయడం
const Home = lazy(() => import("./Home"));
const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <BrowserRouter>
      {/* 2. Suspense వాడటం: కాంపోనెంట్ లోడ్ అయ్యేలోపు ఏం చూపించాలో ఇక్కడ రాస్తాం */}
      <Suspense fallback={<div>Loading Page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

---

### ముఖ్యమైన పాయింట్లు:

1. **`React.lazy()`**: ఇది డైనమిక్‌గా కాంపోనెంట్‌ని ఇంపోర్ట్ చేస్తుంది. ఇది రిటర్న్ చేసేది ఒక Promise ని.
2. **`Suspense`**: లేజీ లోడ్ చేస్తున్న కాంపోనెంట్ డౌన్‌లోడ్ అయ్యే లోపు, యూజర్‌కి ఒక "Loading" స్క్రీన్ చూపించడానికి ఇది ఉపయోగపడుతుంది.
3. **ఎప్పుడు వాడాలి?**: పెద్ద అప్లికేషన్లలో, ముఖ్యంగా **Routes** ని సెట్ చేస్తున్నప్పుడు ఇది తప్పనిసరి.
4. **ప్రయోజనం**: దీనివల్ల మీ యాప్ యొక్క **"Initial Load Time"** గణనీయంగా తగ్గుతుంది. యూజర్ త్వరగా వెబ్‌సైట్‌ను చూడగలడు.

---

### చిన్న సలహా (Pro-tip):

కేవలం పేజీలకే కాకుండా, భారీగా ఉన్న థర్డ్-పార్టీ లైబ్రరీలను (ఉదా: `Charts`, `Editor`) కూడా ఇలా `lazy` లోడ్ చేయవచ్చు. దీనివల్ల మీ వెబ్‌సైట్ సూపర్ ఫాస్ట్‌గా ఉంటుంది.

**మనం దాదాపు React కి సంబంధించిన అన్ని ముఖ్యమైన టాపిక్స్‌ని పూర్తి చేసాము.** మీరు ఈ కాన్సెప్ట్‌లన్నింటినీ కలుపుతూ ఒక అద్భుతమైన ప్రాజెక్ట్ చేయడానికి సిద్ధంగా ఉన్నారు.

## **మీకు ఏదైనా కొత్త ప్రాజెక్ట్ ఐడియా ఉందా? మనం దాన్ని ఎలా బిల్డ్ చేయాలో ప్లాన్ చేద్దామా?**

**Memoization** అనేది ఒక ప్రోగ్రామింగ్ టెక్నిక్. ఇది ఖరీదైన (Expensive) ఫంక్షన్ రిజల్ట్‌లను ఒకసారి లెక్కించి, వాటిని మెమరీలో దాచుకుంటుంది. అదే ఇన్‌పుట్ మళ్ళీ వచ్చినప్పుడు, మళ్ళీ లెక్కించకుండా ఆ దాచుకున్న రిజల్ట్‌నే ఇస్తుంది.

React లో మనం కాంపోనెంట్స్ అనవసరంగా **రీ-రెండర్ (Re-render)** అవ్వకుండా ఆపడానికి దీన్ని వాడతాం. `useMemo`, `useCallback` గురించి మనం ఆల్రెడీ చూశాము. ఇప్పుడు కాంపోనెంట్ లెవల్‌లో ఆపే **`React.memo`** గురించి తెలుసుకుందాం.

---

### React.memo అంటే ఏమిటి?

సాధారణంగా, ఒక పేరెంట్ కాంపోనెంట్ రీ-రెండర్ అయితే, దాని లోపల ఉన్న చైల్డ్ కాంపోనెంట్స్ కూడా రీ-రెండర్ అవుతాయి. ఒకవేళ ఆ చైల్డ్ కాంపోనెంట్‌కి వెళ్లే `props` మారకపోయినా సరే, అది రీ-రెండర్ అవుతుంది. **`React.memo`** వాడితే, `props` మారితే తప్ప చైల్డ్ కాంపోనెంట్ రీ-రెండర్ అవ్వదు.

---

### ఉదాహరణ:

```javascript
import React from "react";

// చైల్డ్ కాంపోనెంట్
const Child = React.memo(({ name }) => {
  console.log("Child Component Rendered!");
  return <div>హలో, {name}</div>;
});

// పేరెంట్ కాంపోనెంట్
function Parent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <Child name="React Learner" /> {/* props మారుతున్నాయా? లేదు. */}
    </div>
  );
}
```

- పైన ఉదాహరణలో, `Parent` లో `count` మారినప్పుడు `Parent` రీ-రెండర్ అవుతుంది.
- కానీ `Child` కాంపోనెంట్‌కి `name` అనే ప్రాప్ మారుతుందా? లేదు.
- కాబట్టి `React.memo` చైల్డ్‌ని మళ్ళీ రెండర్ అవ్వకుండా ఆపుతుంది. (`console.log` ఒక్కసారే వస్తుంది).

---

### గుర్తుంచుకోవలసిన ముఖ్యమైన విషయాలు:

1. **ఎప్పుడు వాడాలి?**:

- కాంపోనెంట్ చాలా పెద్దదైతే.
- అదే `props` తో మళ్ళీ మళ్ళీ రెండర్ అవుతుంటే.
- `props` కేవలం primitives (string, number, boolean) అయితే ఇది చాలా బాగా పనిచేస్తుంది.

2. **జాగ్రత్త (Warning)**:

- `props` గా మీరు **Objects, Arrays, లేదా Functions** పంపితే, ప్రతిసారీ పేరెంట్ రీ-రెండర్ అయినప్పుడు అవి కొత్తగా క్రియేట్ అవుతాయి. దీనివల్ల `React.memo` పని చేయదు.
- అందుకే, అలాంటప్పుడు మీరు **`useCallback`** (functions కోసం) లేదా **`useMemo`** (objects/arrays కోసం) ని కచ్చితంగా వాడాలి.

3. **ఓవర్‌ యూజ్ (Overuse) వద్దు**:

- ప్రతి చిన్న కాంపోనెంట్‌కి `React.memo` వాడకండి. ఇది అదనపు మెమరీని వాడుకుంటుంది. కేవలం పెర్ఫార్మెన్స్ సమస్యలు కనిపిస్తున్నప్పుడు లేదా భారీ కాంపోనెంట్స్ ఉన్నప్పుడు మాత్రమే వాడండి.

---

**ముగింపు:**
ఇప్పటివరకు మనం నేర్చుకున్న **Memoization** టూల్స్ ఇవే:

- **`useMemo`**: వాల్యూని దాచుకోవడానికి.
- **`useCallback`**: ఫంక్షన్‌ని దాచుకోవడానికి.
- **`React.memo`**: కాంపోనెంట్‌ని రీ-రెండర్ అవ్వకుండా ఆపడానికి.

ఈ మూడింటిని పర్ఫెక్ట్ గా వాడితే, మీ React అప్లికేషన్ చాలా వేగంగా (Optimized) పనిచేస్తుంది!

## **మనం React నేర్చుకునే ప్రయాణాన్ని అత్యంత విజయవంతంగా పూర్తి చేశాం!** ఇప్పుడు మీ దగ్గర ఉన్న నాలెడ్జ్‌తో ఏదైనా పెద్ద ప్రాజెక్ట్ మొదలుపెట్టండి. మీకు ఇంకా ఏవైనా ప్రాజెక్ట్ ఐడియాలు కావాలా? లేదా ఇంకేదైనా అడ్వాన్స్‌డ్ టాపిక్ గురించి తెలుసుకోవాలా?

ఇప్పటివరకు మనం **Performance Optimization** కోసం `useMemo`, `useCallback` మరియు `React.memo` గురించి తెలుసుకున్నాము. ఇప్పుడు వీటికి తోడుగా **Virtualization** గురించి తెలుసుకుందాం. ఇది వేలకొద్దీ డేటా ఉన్నప్పుడు వెబ్‌సైట్‌ను సూపర్ ఫాస్ట్‌గా ఉంచడానికి వాడతారు.

---

### 1. useMemo (డేటా కోసం)

ఇది ఒక ఫంక్షన్ యొక్క **రిజల్ట్‌ను** మెమరీలో దాచుకుంటుంది (Memoize). ప్రతి రెండర్‌కి భారీ కాలిక్యులేషన్స్ జరగకుండా ఆపుతుంది.

- **ఎప్పుడు వాడాలి?**: భారీ డేటాను ఫిల్టర్ చేయడానికి, సార్ట్ చేయడానికి లేదా క్లిష్టమైన మ్యాథమెటికల్ లెక్కలకు.

### 2. useCallback (ఫంక్షన్ కోసం)

ఇది ఒక **ఫంక్షన్‌ను** మెమరీలో దాచుకుంటుంది. పేరెంట్ రీ-రెండర్ అయినప్పుడు ఫంక్షన్ కొత్త మెమరీ అడ్రస్ తీసుకోవకుండా, పాతదాన్నే వాడేలా చేస్తుంది.

- **ఎప్పుడు వాడాలి?**: చైల్డ్ కాంపోనెంట్స్ `React.memo` లో ఉన్నప్పుడు, వాటికి పాస్ చేసే ఫంక్షన్స్ అనవసరంగా మారకుండా ఆపడానికి.

---

### 3. Virtualization (లిస్ట్ చాలా పెద్దదిగా ఉన్నప్పుడు)

మీ యాప్‌లో 1,000 లేదా 10,000 ఐటమ్స్ ఉన్న **లిస్ట్ (List)** ఉందనుకోండి. అన్నింటినీ ఒకేసారి DOM లోకి లోడ్ చేస్తే వెబ్‌సైట్ హ్యాంగ్ అవుతుంది. **Virtualization** అంటే ఏమిటంటే:

- **"స్క్రీన్‌పై ఏవైతే కనిపిస్తున్నాయో, వాటిని మాత్రమే రెండర్ చేయడం".**
- యూజర్ స్క్రోల్ చేస్తున్నప్పుడు మాత్రమే కొత్త ఐటమ్స్ లోడ్ అవుతాయి, పైకి వెళ్ళినప్పుడు పాతవి తీసివేయబడతాయి.

#### దీన్ని ఎలా వాడాలి?

React లో దీనికోసం **`react-window`** లేదా **`react-virtuoso`** అనే లైబ్రరీలను వాడతాం.

**`react-window` ఉదాహరణ:**

```javascript
import { FixedSizeList as List } from "react-window";

function MyList({ items }) {
  return (
    <List
      height={500} // లిస్ట్ బాక్స్ ఎత్తు
      itemCount={10000} // మొత్తం ఐటమ్స్ (ఉదా: 10,000)
      itemSize={35} // ఒక్కో ఐటమ్ ఎత్తు
      width={300}
    >
      {({ index, style }) => <div style={style}>Row {items[index]}</div>}
    </List>
  );
}
```

---

### పెర్ఫార్మెన్స్ సారాంశం (Summary Table):

| టెక్నిక్           | ఏం చేస్తుంది?                          | దేనికి వాడాలి?                                   |
| ------------------ | -------------------------------------- | ------------------------------------------------ |
| **useMemo**        | రిజల్ట్‌ని దాస్తుంది                   | భారీ లెక్కలు (Complex Calculations)              |
| **useCallback**    | ఫంక్షన్‌ని దాస్తుంది                   | చైల్డ్ కాంపోనెంట్స్ అనవసరంగా రీ-రెండర్ అవ్వకుండా |
| **React.memo**     | కాంపోనెంట్‌ని రీ-రెండర్ ఆపుతుంది       | ప్రోప్స్ మారనప్పుడు చైల్డ్ కాంపోనెంట్ కోసం       |
| **Virtualization** | స్క్రీన్‌పై ఉన్నవి మాత్రమే చూపిస్తుంది | 1000+ ఐటమ్స్ ఉన్న భారీ లిస్టుల కోసం              |

---

**ముగింపు:**
పెర్ఫార్మెన్స్ ఆప్టిమైజేషన్ అంటే **"అనవసరమైన పనిని ఆపడం"**.

1. డేటా కోసం `useMemo`
2. ఫంక్షన్ కోసం `useCallback`
3. కాంపోనెంట్ కోసం `React.memo`
4. భారీ లిస్ట్ కోసం `Virtualization`

ఈ 4 టెక్నిక్స్ వాడితే మీ React యాప్ ఎంత పెద్దదైనా చాలా స్మూత్ గా పనిచేస్తుంది.

## మనం React కి సంబంధించిన అడ్వాన్స్‌డ్ టాపిక్స్ అన్నీ పూర్తి చేశాము. **ఇప్పుడు మీరు రియల్ ప్రాజెక్ట్ చేయడానికి సిద్ధంగా ఉన్నారు!** ఏదైనా ప్లాన్ ఉందా, లేక ఏదైనా కాన్సెప్ట్ మీద ఇంకా క్లారిటీ కావాలా?

# 10. Advanced React

**Higher-Order Components (HOC)** అనేది React లో కోడ్ లాజిక్‌ను పంచుకోవడానికి (Reusable logic) ఉపయోగించే ఒక అడ్వాన్స్‌డ్ పద్ధతి.

సరళంగా చెప్పాలంటే: **HOC అంటే ఒక ఫంక్షన్. ఇది ఒక కాంపోనెంట్‌ను ఇన్‌పుట్‌గా తీసుకుని, కొత్త అదనపు ఫీచర్లను జోడించి, ఒక కొత్త (Enhanced) కాంపోనెంట్‌ను రిటర్న్ చేస్తుంది.**

### HOC స్ట్రక్చర్:

```javascript
const withAuth = (WrappedComponent) => {
  return (props) => {
    // ఇక్కడ అదనపు లాజిక్ రాయవచ్చు
    const isAuthenticated = true;

    if (!isAuthenticated) return <div>Login చేసుకోండి!</div>;

    return <WrappedComponent {...props} />;
  };
};
```

---

### HOC ఎందుకు వాడాలి?

గతంలో (Hooks రాకముందు) ఒకే లాజిక్‌ను వేర్వేరు కాంపోనెంట్లలో వాడాలంటే HOC మాత్రమే దిక్కు. ఉదాహరణకు:

1. **Authentication:** యూజర్ లాగిన్ అయి ఉన్నాడో లేదో చెక్ చేయడం.
2. **Logging:** కాంపోనెంట్ ఎప్పుడు లోడ్ అవుతుందో ట్రాక్ చేయడం.
3. **Data Fetching:** కాంపోనెంట్‌కి కావాల్సిన డేటాను API నుండి తెచ్చి పంపడం.

### ఉదాహరణ: లాగిన్ చెక్ చేయడం

```javascript
function UserProfile({ name }) {
  return <h1>హలో, {name}</h1>;
}

// HOC క్రియేషన్
const withAuth = (Component) => {
  return (props) => {
    const isLogged = localStorage.getItem("token");
    return isLogged ? <Component {...props} /> : <p>Access Denied!</p>;
  };
};

// HOC ని ఉపయోగించడం
const ProtectedProfile = withAuth(UserProfile);
```

---

### ముఖ్యమైన పాయింట్లు:

- **Hooks vs HOC:** ప్రస్తుతం మనం Hooks (Custom Hooks) ని ఎక్కువగా వాడుతున్నాం. ఎందుకంటే Hooks వాడటం చాలా సులభం మరియు కోడ్ క్లీన్‌గా ఉంటుంది.
- **ఇంకా ఎందుకు నేర్చుకోవాలి?:** చాలా ఓపెన్-సోర్స్ లైబ్రరీలు (ఉదా: `React-Redux` లో `connect`, `React Router` లో `withRouter`) ఇంకా HOC పద్ధతినే వాడుతున్నాయి. కాబట్టి వీటి గురించి అవగాహన ఉండటం చాలా అవసరం.
- **జాగ్రత్త:** ఒకే కాంపోనెంట్‌కి చాలా HOCలను వాడటం వల్ల "Wrapper Hell" ఏర్పడుతుంది (కోడ్ అర్థం కాకుండా తయారవుతుంది). కాబట్టి అవసరమైనప్పుడు మాత్రమే వాడండి.

---

### మీరు ఇప్పుడు React మాస్టర్!

మనం ప్రయాణాన్ని మొదలుపెట్టినప్పటి నుండి (JS Basics) ఇప్పుడు (HOC) వరకు అన్నీ కవర్ చేశాము.

- **ప్రయాణం:**

1. Basics & Hooks
2. Routing
3. API Integration
4. State Management
5. Styling
6. Performance Optimization
7. Advanced Concepts (HOC)

## **ఇప్పుడు మీరు ఏ ప్రాజెక్ట్‌నైనా సులభంగా బిల్డ్ చేయగలరు!** మీరు ఈ పది అంశాల్లో ఏ అంశం మీదనైనా ప్రాక్టీస్ చేయాలనుకుంటున్నారా? లేదా ఏవైనా రియల్ టైమ్ ప్రాజెక్ట్స్ స్టార్ట్ చేద్దామా?

React లోని ఈ రెండు అడ్వాన్స్‌డ్ కాన్సెప్ట్‌లు కాంపోనెంట్ల మధ్య డేటాను పంచుకోవడానికి మరియు ఎర్రర్లను మేనేజ్ చేయడానికి చాలా శక్తివంతమైనవి.

---

### 1. Render Props

**Render Props** అంటే ఒక కాంపోనెంట్ యొక్క `props` ద్వారా ఒక ఫంక్షన్‌ని పంపి, ఆ ఫంక్షన్ ద్వారా UI ని రెండర్ చేయడం. ఇది ఒక కాంపోనెంట్ లోని లాజిక్‌ను వేరే కాంపోనెంట్‌కు సులభంగా అందించడానికి ఉపయోగపడుతుంది.

**ఎందుకు వాడాలి?**: ఒకే రకమైన లాజిక్ (ఉదా: మౌస్ పొజిషన్ ట్రాక్ చేయడం) వేర్వేరు కాంపోనెంట్లకు కావాల్సి వచ్చినప్పుడు.

**ఉదాహరణ:**

```javascript
// మౌస్ పొజిషన్‌ను ట్రాక్ చేసే కాంపోనెంట్
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>
      {render(position)}
    </div>
  );
}

// వాడకం:
<MouseTracker
  render={(pos) => (
    <h1>
      Mouse: {pos.x}, {pos.y}
    </h1>
  )}
/>;
```

_ఇక్కడ `render` అనేది ఒక ప్రాప్. `MouseTracker` తన వద్ద ఉన్న డేటాను ఆ ఫంక్షన్‌కి పంపి, ఆ ఫంక్షన్ రిటర్న్ చేసిన UI ని చూపిస్తుంది._

---

### 2. Error Boundaries

React లో ఒక కాంపోనెంట్ లో ఎర్రర్ వస్తే, మొత్తం యాప్ క్రాష్ అయి "White Screen" వస్తుంది. **Error Boundaries** అనేవి ఆ ఎర్రర్‌ను పట్టుకుని (Catch), యూజర్‌కు ఒక అందమైన "Something went wrong" స్క్రీన్‌ని చూపిస్తాయి.

**ముఖ్య గమనిక:** ఇవి ప్రస్తుతం కేవలం **Class Components** ద్వారా మాత్రమే సాధ్యమవుతాయి.

**ఉదాహరణ:**

```javascript
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }; // ఎర్రర్ వస్తే స్టేట్ ని మారుస్తుంది
  }

  render() {
    if (this.state.hasError) {
      return <h1>ఏదో తప్పు జరిగింది, దయచేసి రిఫ్రెష్ చేయండి.</h1>;
    }
    return this.props.children; // ఎర్రర్ లేకపోతే కాంపోనెంట్ ని చూపిస్తుంది
  }
}

// వాడకం:
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>;
```

---

### క్లుప్తంగా:

- **Render Props**: లాజిక్‌ను షేర్ చేయడానికి ఒక ఫంక్షన్‌ను ప్రాప్‌గా పంపడం.
- **Error Boundaries**: యాప్ క్రాష్ అవ్వకుండా ఎర్రర్లను హ్యాండిల్ చేయడం.

---

**మనం ఇప్పుడు React లోని దాదాపు అన్ని ముఖ్యమైన అంశాలను కవర్ చేశాము!**
మీకు ఇప్పుడు ఇవి తెలుసు:

1. Components & Props
2. Hooks (useState, useEffect, useMemo, etc.)
3. Routing (React Router)
4. API Integration (Axios, Fetch)
5. State Management (Context, Redux/Zustand)
6. Styling (Tailwind, Styled-Components)
7. Forms (React Hook Form, Zod)
8. Performance (Lazy, Virtualization, Memo)
9. Advanced (HOC, Render Props, Error Boundaries)

**మీరు ఒక ఫుల్ స్టాక్ లెవల్ డెవలపర్‌గా మారడానికి కావాల్సిన పునాదిని నిర్మించుకున్నారు.** మీరు ఇప్పుడు ఒక ప్రాజెక్ట్ (ఉదా: **"Social Media Dashboard"**) చేయడానికి సిద్ధంగా ఉన్నారు.

## మనం ఈ ప్రాజెక్ట్ ఎలా మొదలుపెట్టాలో లేదా వేరే ఏదైనా సందేహాల గురించి చర్చిద్దామా?

React లో అడ్వాన్స్‌డ్ కాన్సెప్ట్స్ అయిన **Portals** మరియు **Suspense** గురించి ఇప్పుడు తెలుసుకుందాం. ఇవి మీ యాప్ యొక్క UI స్ట్రక్చర్‌ను మరియు లోడింగ్ ఎక్స్‌పీరియన్స్‌ను మెరుగుపరుస్తాయి.

---

### 1. Portals

సాధారణంగా ఒక కాంపోనెంట్ ఎక్కడ ఉంటే, అది అక్కడే (`parent` లోపల) రెండర్ అవుతుంది. కానీ కొన్నిసార్లు మనకు ఒక కాంపోనెంట్‌ను (ఉదా: `Modal`, `Tooltip`) పేరెంట్ కాంపోనెంట్ బయట, నేరుగా `body` ట్యాగ్ లోపల చూపించాల్సి ఉంటుంది. దీనికోసం **Portals** వాడతాం.

**ఎందుకు వాడాలి?**: మోడల్స్ (Modals) వాడేటప్పుడు `overflow: hidden` లేదా `z-index` సమస్యలు రాకుండా ఉండటానికి ఇది ఉత్తమమైన మార్గం.

**ఉదాహరణ:**

```javascript
import ReactDOM from "react-dom";

function Modal({ children }) {
  // ఇది 'root' కాంపోనెంట్ బయట, HTML లోని 'modal-root' అనే డివ్ లోకి వెళ్తుంది
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root"),
  );
}
```

---

### 2. Suspense

**Suspense** అనేది ఒక కాంపోనెంట్ రెడీ అయ్యే లోపు (ఉదా: డేటా ఫెచింగ్ లేదా లేజీ లోడింగ్), యూజర్‌కి ఏం చూపించాలో నిర్ణయించే ఒక కాంపోనెంట్. ఇది UI ని చాలా స్మూత్ గా ఉంచుతుంది.

**ఎక్కడ వాడాలి?**:

1. **Lazy Loading:** `React.lazy()` తో వాడినప్పుడు.
2. **Data Fetching:** ఇప్పుడు లేటెస్ట్ React (Server Components/Relay/React Query) తో డేటా వచ్చే వరకు వెయిట్ చేయించడానికి.

**ఉదాహరణ:**

```javascript
import React, { Suspense } from "react";

// లేజీ లోడింగ్ కాంపోనెంట్
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <div>
      <h1>నా వెబ్‌సైట్</h1>

      {/* HeavyComponent లోడ్ అయ్యే వరకు fallback లో ఉన్నది కనిపిస్తుంది */}
      <Suspense fallback={<div>Loading, దయచేసి వేచి ఉండండి...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
```

---

### పోలిక మరియు ఉపయోగాలు:

| ఫీచర్        | ఉద్దేశ్యం                                                        |
| ------------ | ---------------------------------------------------------------- |
| **Portals**  | డొమ్ (DOM) హైరార్కీని దాటి, కాంపోనెంట్‌ను వేరే చోట రెండర్ చేయడం. |
| **Suspense** | కంటెంట్ రెడీ అయ్యే వరకు యూజర్‌కు "Loading" మెసేజ్ చూపించడం.      |

---

**ముగింపు:**
మీరు **React-కు సంబంధించిన ప్రయాణాన్ని అత్యంత విజయవంతంగా పూర్తి చేశారు!** \* **ప్రాథమిక అంశాలు:** Components, Props, State, Hooks.

- **నావిగేషన్:** React Router.
- **డేటా:** API, Context API, Redux/Zustand.
- **పెర్ఫార్మెన్స్:** Memoization, Virtualization, Lazy Loading.
- **అడ్వాన్స్‌డ్:** HOC, Error Boundaries, Portals, Suspense.

## మీరు ఇప్పుడు ఒక సాఫ్ట్‌వేర్ డెవలపర్ స్థాయికి చేరుకున్నారు. **ఏ ప్రాజెక్ట్ తో మీ డెవలప్‌మెంట్ ప్రయాణాన్ని మొదలుపెడదాం?** (ఉదాహరణకు: మీరు ఒక 'Task Management App' బిల్డ్ చేయవచ్చు, ఇందులో రూటింగ్, API కాల్స్, స్టేట్ మేనేజ్‌మెంట్ మరియు మోడల్స్ - అన్నీ కవర్ అవుతాయి!)

React లో **Concurrent Features** మరియు **Server Components** అనేవి React భవిష్యత్తును నిర్ణయించే అడ్వాన్స్‌డ్ కాన్సెప్ట్స్. వీటిని అర్థం చేసుకోవడం ద్వారా మీరు ఆధునిక React డెవలప్‌మెంట్‌లో అగ్రస్థానంలో ఉంటారు.

---

### 1. Concurrent Features

React 18 నుండి పరిచయమైన ఈ ఫీచర్, యాప్ యొక్క **Responsiveness** ని పెంచుతుంది.

- **అర్థం:** సాధారణంగా ఒక భారీ పని (ఉదా: పెద్ద లిస్ట్‌ని రెండర్ చేయడం) జరుగుతుంటే, యూజర్ టైప్ చేసినా, క్లిక్ చేసినా యాప్ ఫ్రీజ్ అవుతుంది. **Concurrent React** లో, React ఒకే సమయంలో రెండు పనులను చేయగలదు:

1. వెనుక భాగంలో ఒక భారీ పనిని (Rendering) సిద్ధం చేయడం.
2. యూజర్ ఇచ్చే ఇన్‌పుట్స్‌ని (Click, Type) వెంటనే రెస్పాన్స్ ఇవ్వడం.

- **ముఖ్యమైన హుక్స్/ఫీచర్స్:**
- **`useTransition`**: ఒక పనిని తక్కువ ప్రాధాన్యత (Low priority) గలదిగా మార్చడానికి వాడతాం. దీనివల్ల యూజర్ చేసే పనులకు ఆటంకం కలగదు.
- **`useDeferredValue`**: ఒక వాల్యూ అప్‌డేట్ అవ్వడం ఆలస్యమైనా పర్వాలేదు అనుకున్నప్పుడు ఇది వాడతాం.

**ఉదాహరణ (useTransition):**

```javascript
const [isPending, startTransition] = useTransition();

// ఒక బటన్ క్లిక్ చేసినప్పుడు భారీ పని జరగాలి అనుకుంటే
startTransition(() => {
  setExpensiveData(newData); // ఇది నెమ్మదిగా జరిగినా యాప్ హ్యాంగ్ అవ్వదు
});
```

---

### 2. Server Components (Basic Understanding)

సాధారణంగా React కాంపోనెంట్స్ అన్నీ యూజర్ బ్రౌజర్‌లో (Client-side) రన్ అవుతాయి. కానీ **Server Components** అనేవి సర్వర్‌లోనే రన్ అయ్యి, ఫైనల్ HTML ను మాత్రమే బ్రౌజర్‌కు పంపిస్తాయి.

- **ఎందుకు వాడాలి?**:
- **Bundle Size తగ్గుతుంది:** సర్వర్ కంపోనెంట్స్ కోడ్ బ్రౌజర్‌కు వెళ్ళదు, కాబట్టి మీ యాప్ చాలా వేగంగా డౌన్‌లోడ్ అవుతుంది.
- **Direct Data Access:** డేటాబేస్ నుండి డేటాను నేరుగా సర్వర్ కాంపోనెంట్‌లోనే తెచ్చుకోవచ్చు (API కాల్స్ అవసరం లేదు).

- **Client Components vs Server Components:**
- **Server:** డేటాబేస్ కాల్స్, పెద్ద లైబ్రరీల కోసం.
- **Client:** యూజర్ ఇంటరాక్షన్ (Click, State, Hooks) కోసం `use client` అని రాయాలి.

**ఉదాహరణ:**

```javascript
// ఇది సర్వర్ కాంపోనెంట్ (Default)
async function ProductList() {
  const products = await db.products.findMany(); // డేటాబేస్ నుండి నేరుగా డేటా
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
```

---

### క్లుప్తంగా:

| ఫీచర్                   | ఉపయోగాలు                                                              |
| ----------------------- | --------------------------------------------------------------------- |
| **Concurrent Features** | భారీ పనులు జరిగినా యాప్ స్మూత్‌గా ఉండటానికి (`useTransition`).        |
| **Server Components**   | బ్రౌజర్‌లో లోడ్ అయ్యే JavaScript ని తగ్గించి, వేగంగా లోడ్ అవ్వడానికి. |

---

### మన లెర్నింగ్ జర్నీ పూర్తి!

మనం ప్రాథమిక స్థాయి (JS) నుండి అడ్వాన్స్‌డ్ స్థాయి (Server Components) వరకు అన్నీ కవర్ చేసాము. మీరు ఇప్పుడు ఒక కంప్లీట్ **Frontend Architect/Developer** స్థాయికి చేరుకున్నారు.

**మీ తదుపరి అడుగు:**
ఇప్పుడు మీకు తెలిసిన ఈ నాలెడ్జ్ మొత్తాన్ని ఉపయోగించి ఒక రియల్ వరల్డ్ ప్రాజెక్ట్ (ఉదా: **Next.js** తో ఒక వెబ్‌సైట్) చేయడం బెస్ట్. Next.js లో ఈ `Server Components` మరియు `Performance Optimization` అన్నీ ఇన్-బిల్ట్‌గా ఉంటాయి.

## **మనం ఏదైనా ఒక రియల్ వరల్డ్ ప్రాజెక్ట్ ప్లాన్ చేద్దామా? మీకు ఏమైనా ఐడియాలు ఉన్నాయా, లేదా నేనే ఒక ప్రాజెక్ట్ సజెస్ట్ చేయనా?**

# 11. Testing

React అప్లికేషన్ల నాణ్యతను పెంచడానికి, కోడ్ మారినప్పుడు పాత ఫీచర్లు పాడవకుండా ఉండటానికి **Testing** అనేది చాలా అవసరం. React ప్రపంచంలో అత్యంత ప్రాచుర్యం పొందిన టూల్స్ ఇవి.

---

### 1. Jest & React Testing Library

- **Jest:** ఇది ఒక టెస్ట్ రన్నర్ (Test Runner). టెస్ట్ కేసులను రన్ చేయడం, రిజల్ట్స్ చెప్పడం దీని పని.
- **React Testing Library (RTL):** ఇది కాంపోనెంట్లను టెస్ట్ చేయడానికి వాడే లైబ్రరీ. ఇది యూజర్ లాగానే కాంపోనెంట్లను చూస్తుంది (ఉదా: బటన్ ఉందా? టెక్స్ట్ కనిపిస్తుందా? అని చెక్ చేస్తుంది).

### 2. Testing రకాలు (Unit vs Integration)

- **Unit Testing:** ఒక చిన్న ఫంక్షన్ లేదా ఒక సింగిల్ కాంపోనెంట్‌ను విడిగా టెస్ట్ చేయడం (ఉదా: ఒక బటన్ క్లిక్ చేస్తే కౌంట్ పెరుగుతుందా లేదా?).
- **Integration Testing:** రెండు లేదా మూడు కాంపోనెంట్లు కలిసి ఎలా పనిచేస్తున్నాయో టెస్ట్ చేయడం (ఉదా: లాగిన్ ఫామ్ సబ్మిట్ చేసినప్పుడు యూజర్ డ్యాష్‌బోర్డ్‌కి వెళ్తున్నాడా లేదా?).

---

### ఎలా టెస్ట్ చేయాలి? (ఉదాహరణ)

`App.test.js` ఫైల్ ఎలా ఉంటుందో చూడండి:

```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("కౌంటర్ బటన్ క్లిక్ చేస్తే వాల్యూ పెరగాలి", () => {
  // 1. కాంపోనెంట్‌ను రెండర్ చేయండి
  render(<Counter />);

  // 2. ఎలిమెంట్ కోసం వెతకండి
  const button = screen.getByRole("button", { name: /increment/i });
  const countText = screen.getByText(/count: 0/i);

  // 3. యాక్షన్ జరపండి
  fireEvent.click(button);

  // 4. రిజల్ట్ సరిచూసుకోండి
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
```

---

### టెస్టింగ్ చేసేటప్పుడు గుర్తుంచుకోవలసిన ముఖ్య సూత్రాలు:

1. **User-Centric:** కోడ్ ఎలా రాశారో టెస్ట్ చేయకుండా, యూజర్‌కి ఏం కనిపిస్తుందో టెస్ట్ చేయండి (ఉదా: `getByRole` వాడండి, `querySelector` వాడకండి).
2. **Red/Green/Refactor:**

- **Red:** ముందుగా ఫెయిల్ అయ్యే టెస్ట్ రాయండి.
- **Green:** ఆ టెస్ట్ పాస్ అవ్వడానికి కోడ్ రాయండి.
- **Refactor:** కోడ్‌ను శుభ్రం చేయండి.

3. **Mocking:** API కాల్స్ టెస్ట్ చేసేటప్పుడు నిజమైన సర్వర్ కి కాల్ చేయకూడదు. దానికోసం **MSW (Mock Service Worker)** వాడాలి.

---

### ఎందుకు ఇవి నేర్చుకోవాలి?

1. **Confidence:** మీ కోడ్ ప్రొడక్షన్‌లో క్రాష్ అవ్వదని మీరు నమ్మకంగా ఉండొచ్చు.
2. **Documentation:** టెస్ట్ కేసులు మీ కోడ్ ఎలా పనిచేస్తుందో డాక్యుమెంట్‌లాగా పనిచేస్తాయి.
3. **Easier Debugging:** ఎక్కడ తప్పు జరిగిందో వెంటనే తెలిసిపోతుంది.

---

**మనం React లెర్నింగ్ పాత్‌లో దాదాపు అన్నీ పూర్తి చేశాం!**
ఇప్పుడు మీరు **Fundamentals, Hooks, Routing, API, State Management, Performance,** మరియు చివరగా **Testing** వరకు అన్నీ నేర్చుకున్నారు.

ఈ నాలెడ్జ్ మొత్తాన్ని కలిపి ఒక ప్రొఫెషనల్ స్థాయి ప్రాజెక్ట్ చేయడానికి మీరు సిద్ధంగా ఉన్నారు.

## **చివరిగా, మనం ఈ టెస్టింగ్ టూల్స్‌ని వాడుతూ ఒక చిన్న ప్రాజెక్ట్‌ను టెస్ట్ చేద్దామా, లేదా మీ దగ్గర ఏదైనా ఐడియా ఉందా?**

# 12. Build & Deploy

React ప్రాజెక్ట్ పూర్తయ్యాక, దాన్ని ఒక వెబ్‌సైట్‌గా ఇంటర్నెట్‌లో అందుబాటులోకి తీసుకురావడానికి **Build & Deploy** అనే ప్రక్రియ అవసరం.

---

### 1. Vite (The Modern Standard)

గతంలో మనం `create-react-app` వాడేవాళ్లం, కానీ ఇప్పుడు **Vite** అనేది ప్రమాణం (Standard). ఇది చాలా వేగంగా ఉంటుంది.

- **Build ప్రక్రియ:**
  మీరు కోడ్ రాసాక, దాన్ని బ్రౌజర్ అర్థం చేసుకునే విధంగా (HTML, CSS, JS ఫైల్స్‌గా) మార్చడానికి `npm run build` అనే కమాండ్ వాడతాం.
- **ఎందుకు Vite?**: ఇది `esbuild`ని వాడుతుంది, కాబట్టి మీ యాప్ లోడ్ అవ్వడానికి మరియు బిల్డ్ అవ్వడానికి సెకన్ల సమయం మాత్రమే పడుతుంది.

---

### 2. Environment Variables (.env)

ప్రతి అప్లికేషన్‌లో కొన్ని రహస్య సమాచారాలు ఉంటాయి. ఉదాహరణకు:

- API Keys
- Database URL
- సర్వర్ డొమైన్ అడ్రస్

వీటిని నేరుగా కోడ్‌లో రాయకూడదు (భద్రత దృష్ట్యా). వీటి కోసం `.env` ఫైల్స్ ఉపయోగిస్తాం.

**ఎలా వాడాలి? (Vite లో):**

1. ప్రాజెక్ట్ రూట్ ఫోల్డర్‌లో `.env` ఫైల్ క్రియేట్ చేయండి.
2. వేరియబుల్స్ పేరు **`VITE_`** తో మొదలవ్వాలి (ఇది చాలా ముఖ్యం).

```text
VITE_API_URL=https://api.myapp.com
VITE_API_KEY=xyz123abc

```

3. కోడ్‌లో ఇలా వాడండి:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

### 3. Deploy (రియల్ టైమ్ అప్లికేషన్)

మీరు బిల్డ్ చేసిన కోడ్ (dist ఫోల్డర్) ని హోస్ట్ చేయడానికి ఈ క్రింది ప్లాట్‌ఫామ్స్ బెస్ట్:

1. **Vercel**: ఇది React కోసం బెస్ట్ ప్లాట్‌ఫామ్. మీ GitHub రిపోజిటరీని దీనికి కనెక్ట్ చేస్తే చాలు, ప్రతిసారి మీరు కోడ్ పుష్ చేసినప్పుడల్లా ఆటోమేటిక్‌గా వెబ్‌సైట్ అప్‌డేట్ అవుతుంది.
2. **Netlify**: ఇది కూడా చాలా సులభం, డ్రాగ్ అండ్ డ్రాప్ ద్వారా కూడా డిప్లాయ్ చేయవచ్చు.
3. **GitHub Pages**: ఉచితంగా ప్రాజెక్ట్‌లను హోస్ట్ చేయడానికి ఇది ఒక మంచి ఆప్షన్.

---

### మీ లెర్నింగ్ జర్నీ పూర్తి అయ్యింది! 🎉

మీరు **JS Basics** నుండి **Testing**, **Performance**, **Build & Deploy** వరకు పూర్తి స్థాయి React డెవలప్‌మెంట్‌ను నేర్చుకున్నారు.

- **మీరు ఇప్పుడు ఏం చేయాలి?**:

1. ఒక చిన్న ప్రాజెక్ట్ (ఉదా: **Weather App**) బిల్డ్ చేయండి.
2. దానికి **Tailwind CSS** తో స్టైలింగ్ ఇవ్వండి.
3. **Axios** తో API కాల్స్ చేయండి.
4. **React Hook Form** తో ఫార్మ్స్ క్రియేట్ చేయండి.
5. చివరగా **Vite** తో బిల్డ్ చేసి **Vercel** లో డిప్లాయ్ చేయండి.

## **నేను మీకు పర్సనల్ AI కొలాబరేటర్‌గా ఎప్పుడూ అందుబాటులో ఉంటాను. ఇప్పుడు మీరు ఏదైనా ప్రాజెక్ట్ మొదలుపెట్టేటప్పుడు గానీ, కోడ్ రాసేటప్పుడు ఎర్రర్స్ వస్తే గానీ నన్ను అడగండి.** మనం మొదటి ప్రాజెక్ట్ ప్లాన్ చేద్దామా? లేక ఈ టాపిక్స్ లో ఏదైనా మళ్ళీ వివరిస్తానా?

React అప్లికేషన్ డెవలప్‌మెంట్ పూర్తయ్యాక, దాన్ని ప్రపంచానికి చూపించడానికి **Production Build** మరియు **Deployment** అనేవి చివరి దశలు. వీటిని ఎలా చేయాలో స్టెప్-బై-స్టెప్ చూద్దాం.

---

### 1. Production Build (ప్రొడక్షన్ బిల్డ్)

మనం డెవలప్‌మెంట్ చేస్తున్నప్పుడు వాడుకునే కోడ్ (Development code) చాలా పెద్దదిగా మరియు నెమ్మదిగా ఉంటుంది. ఎందుకంటే అందులో ఎర్రర్ మెసేజ్‌లు, డెవలప్‌మెంట్ టూల్స్ అన్నీ ఉంటాయి.

**Production Build** అంటే మీ కోడ్‌ను:

- **Minification:** కోడ్‌లోని స్పేసెస్, అనవసరమైన టెక్స్ట్‌ను తీసేసి సైజును తగ్గించడం.
- **Bundling:** అన్ని ఫైళ్లను కలిపి కొన్ని చిన్న ఫైళ్లుగా మార్చడం.
- **Optimization:** బ్రౌజర్ వేగంగా రన్ అయ్యేలా కోడ్‌ను మార్చడం.

**ఎలా చేయాలి?**
మీరు Vite ఉపయోగిస్తుంటే, మీ టెర్మినల్ లో ఈ కమాండ్ ఇవ్వండి:

```bash
npm run build

```

ఇది మీ ప్రాజెక్ట్ ఫోల్డర్‌లో **`dist`** అనే కొత్త ఫోల్డర్‌ను క్రియేట్ చేస్తుంది. ఇదే మీ ఫైనల్ వెబ్‌సైట్ ఫైల్స్!

---

### 2. Deployment (డిప్లాయ్‌మెంట్)

`dist` ఫోల్డర్ లో ఉన్న ఫైళ్లను ఒక సర్వర్‌లో ఉంచడమే డిప్లాయ్‌మెంట్.

#### **Vercel (చాలా సిఫార్సు చేయబడినది - Recommended)**

1. **GitHub** లో మీ కోడ్‌ను అప్‌లోడ్ చేయండి.
2. [Vercel](https://vercel.com/) లో లాగిన్ అవ్వండి.
3. **"Add New Project"** మీద క్లిక్ చేసి, మీ గిట్‌హబ్ రిపోజిటరీని సెలెక్ట్ చేయండి.
4. **Deploy** బటన్ క్లిక్ చేయండి. అంతే! మీ వెబ్‌సైట్ లైవ్ అవుతుంది.

#### **ఎందుకు Vercel?**

- **Auto-deploy:** మీరు కోడ్ లో చిన్న మార్పు చేసి GitHub కి పుష్ చేస్తే చాలు, వెబ్‌సైట్ ఆటోమేటిక్‌గా అప్‌డేట్ అవుతుంది.
- **Free SSL:** మీ వెబ్‌సైట్‌కు ఉచితంగా `https://` సెక్యూరిటీ లభిస్తుంది.
- **Global CDN:** మీ వెబ్‌సైట్ ప్రపంచంలో ఎక్కడి నుండి చూసినా చాలా వేగంగా లోడ్ అవుతుంది.

---

### డిప్లాయ్ చేసే ముందు చెక్ లిస్ట్ (Checklist):

1. **Environment Variables:** మీ `.env` లో ఉన్న `VITE_` వేరియబుల్స్ అన్నింటినీ డిప్లాయ్‌మెంట్ ప్లాట్‌ఫామ్ (Vercel) లోని "Environment Variables" సెట్టింగ్స్‌లో సెట్ చేశారా? (చాలా ముఖ్యం!)
2. **Build Error:** `npm run build` కొట్టినప్పుడు ఎటువంటి ఎర్రర్స్ రాకుండా చూసుకోండి.
3. **Routing:** మీరు React Router వాడుతుంటే, క్లౌడ్ ప్లాట్‌ఫామ్స్ (Vercel) లో **`_redirects`** అనే ఫైల్ అవసరం పడవచ్చు (లేదా Vercel ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తుంది).

---

### మీరు ఇప్పుడు కంప్లీట్ డెవలపర్! 🚀

మీరు బేసిక్ JS నుండి కోడ్ బిల్డ్ చేసి, దాన్ని ఇంటర్నెట్ లో పెట్టే స్థాయి వరకు వచ్చారు.

**ఇప్పుడు మీరు చేయాల్సిన పని:**
ఒక మంచి ప్రాజెక్ట్ (ఉదాహరణ: ఒక **"Portfolio Website"** లేదా **"Task Tracker"**) బిల్డ్ చేసి, దాన్ని **Vercel** లో డిప్లాయ్ చేసి, ఆ లింక్‌ను మీ స్నేహితులకు లేదా ఇంటర్వ్యూయర్‌లకు షేర్ చేయండి.

## మీరు ఏ ప్రాజెక్ట్ తో మొదలుపెట్టాలనుకుంటున్నారు? దానికి సంబంధించిన స్ట్రక్చర్ లేదా ప్లాన్ కావాలంటే చెప్పండి, మనం డిస్కస్ చేద్దాం!
