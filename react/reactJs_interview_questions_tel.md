Here are **Top 25 React.js Interview Questions (2026)** that are commonly asked in product-based companies and service-based companies (TCS, Infosys, Cognizant, Capgemini, Deloitte, Accenture) as well as companies like Amazon, Microsoft, Google, Walmart, and startups.

---

## [1. What is React?](#1-what-is-react-1)

- What problems does React solve?
- Features of React
- Advantages over traditional JavaScript

---

## [2. What is Virtual DOM?](#2-what-is-virtual-dom-1)

- How Virtual DOM works
- Difference between Virtual DOM and Real DOM
- Why it improves performance

---

## [3. What is JSX?](#3-what-is-jsx-1)

- Why JSX is used
- JSX vs HTML
- Rules of JSX

---

## [4. Explain Components in React.](#4-explain-components-in-react-1)

- Functional Components
- Class Components
- Which one is preferred and why?

---

## [5. What are Props?](#5-what-are-props-1)

- Passing data
- Read-only nature
- Default Props

---

## [6. What is State?](#6-what-is-state-1)

- Why state is needed
- Local state
- Updating state correctly

---

## [7. Difference between Props and State.](#7-difference-between-props-and-state-1)

Interview favorite.

Topics:

- Ownership
- Mutability
- Usage
- Lifecycle

---

## [8. What are React Hooks?](#8-what-are-react-hooks-1)

Explain:

- Why hooks were introduced
- Rules of hooks

---

## [9. Explain useState().](#9-explain-usestate-1)

Questions include:

- Initial state
- Functional updates
- Multiple states
- Object updates

---

## [10. Explain useEffect().](#10-explain-useeffect-1)

Must know:

- Dependency array
- Cleanup function
- Multiple useEffects
- API calls

---

## [11. Difference between useEffect(), useLayoutEffect(), and useInsertionEffect().](#11-difference-between-useeffect-uselayouteffect-and-useinsertioneffect-1)

Advanced interview question.

---

## [12. Explain React Lifecycle.](#12-explain-react-lifecycle-1)

Know mapping:

- componentDidMount
- componentDidUpdate
- componentWillUnmount

Equivalent using hooks.

---

## [13. What is React Reconciliation?](#13-what-is-react-reconciliation-1)

Understand:

- Diffing Algorithm
- Tree comparison
- DOM updates

---

## [14. What are Keys in React?](#14-what-are-keys-in-react-1)

Interviewers ask:

- Why keys are needed
- Why not use array index?
- Best key practices

---

## [15. Explain Controlled vs Uncontrolled Components.](#15-explain-controlled-vs-uncontrolled-components-1)

Know:

- Forms
- Refs
- Validation

---

## [16. What is Context API?](#16-what-is-context-api-1)

Topics:

- Provider
- Consumer
- useContext

When to use it.

---

## [17. Explain React Router.](#17-explain-react-router-1)

Topics:

- BrowserRouter
- Routes
- Route
- Link
- Navigate
- Nested Routes
- Protected Routes

---

## [18. What is Redux?](#18-what-is-redux-1)

Know:

- Store
- Reducer
- Action
- Dispatch
- Selector

Also know Redux Toolkit.

---

## [19. Explain React.memo()](#19-explain-reactmemo-1)

Interviewers ask:

- Why use it
- When it doesn't work
- Memoization

---

## [20. Difference between useMemo() and useCallback().](#20-difference-between-usememo-and-usecallback-1)

Must explain:

- Function memoization
- Value memoization

---

## [21. What are Refs?](#21-what-are-refs-1)

Topics:

- useRef
- DOM access
- Mutable values
- ForwardRef

---

## [22. Explain Lazy Loading.](#22-explain-lazy-loading-1)

Know:

- React.lazy()
- Suspense
- Code Splitting

---

## [23. What are Error Boundaries?](#23-what-are-error-boundaries-1)

Topics:

- Catch runtime errors
- Limitations
- Implementation

---

## [24. How do you optimize React performance?](#24-how-do-you-optimize-react-performance-1)

Discuss:

- React.memo
- useMemo
- useCallback
- Lazy Loading
- Code Splitting
- Windowing
- Proper Keys
- State Management
- Avoid unnecessary renders

---

## [25. Explain React Rendering.](#25-explain-react-rendering-1)

Understand:

- Initial Render
- Re-render
- Parent-child rendering
- Reconciliation
- Batching
- Concurrent Rendering (React 18+)

---

## [Bonus Questions (Frequently Asked)](#bonus-questions-frequently-asked-1)

- What is Strict Mode?
- What is Concurrent Rendering?
- What is Suspense?
- What is Hydration?
- What is Server-Side Rendering (SSR)?
- What is Client-Side Rendering (CSR)?
- What is Static Site Generation (SSG)?
- Difference between React and Next.js
- What are Custom Hooks?
- Explain Portals.
- What are Higher-Order Components (HOC)?
- What are Render Props?
- Explain Event Delegation in React.
- Synthetic Events vs Native Events
- How React handles forms?
- How to prevent unnecessary re-renders?
- Explain React Fiber Architecture.
- Explain reconciliation with an example.
- What happens when `setState()` is called?
- Why shouldn't state be mutated directly?
- Explain lifting state up.
- Explain prop drilling and ways to avoid it.
- What is the difference between Context API and Redux?
- Explain `useTransition()` and `useDeferredValue()`.
- What is automatic batching in React 18+?

These 25 core questions cover the topics most frequently asked in React interviews, and the bonus questions are especially common for candidates with **3–8 years of experience**.

# 1. What is React?

ఖచ్చితంగా, మీరు అడిగిన ఈ అంశాలను వివరంగా మరియు సులభంగా అర్థమయ్యేలా తెలుగులో చూద్దాం.

---

### 1. React అంటే ఏమిటి? (What is React?)

React అనేది ఒక ఓపెన్-సోర్స్ **JavaScript లైబ్రరీ**. దీన్ని Facebook (Meta) వారు తయారు చేశారు. వెబ్‌సైట్లలో User Interface (UI)ని నిర్మించడానికి దీన్ని ఎక్కువగా ఉపయోగిస్తారు. ఇది "Single Page Applications" (SPA) తయారు చేయడానికి చాలా ప్రసిద్ధి చెందింది.

### 2. React ఎటువంటి సమస్యలను పరిష్కరిస్తుంది? (What problems does it solve?)

పాత పద్ధతుల్లో (Vanilla JS) వెబ్ అప్లికేషన్లు చేసేటప్పుడు కొన్ని సమస్యలు ఉండేవి:

- **DOM Manipulation (మెల్లని వేగం):** ప్రతి చిన్న మార్పు కోసం వెబ్ పేజీని మొత్తం రీలోడ్ చేయడం వల్ల వెబ్‌సైట్ స్లో అయ్యేది. React తన **Virtual DOM** ద్వారా కేవలం మారిన భాగాన్ని మాత్రమే అప్‌డేట్ చేసి ఈ సమస్యను పరిష్కరిస్తుంది.
- **కోడ్ నిర్వహణ (Code Maintenance):** అప్లికేషన్ పెద్దదవుతున్న కొద్దీ కోడ్ అర్థం చేసుకోవడం, మార్చడం కష్టమయ్యేది. React యొక్క **Component-based architecture** వల్ల కోడ్‌ని చిన్న చిన్న ముక్కలుగా విడగొట్టి, సులభంగా మెయింటైన్ చేయవచ్చు.
- **డేటా అప్‌డేట్ సమస్యలు (Data Binding):** యూజర్ డేటా మారినప్పుడు UIలో కూడా అప్‌డేట్ అవ్వాలి. పాత పద్ధతుల్లో ఇది చాలా కష్టమైన పని. Reactలో **State** ద్వారా డేటా మారితే UI ఆటోమేటిక్ గా అప్‌డేట్ అవుతుంది.

### 3. React యొక్క ముఖ్య లక్షణాలు (Features of React)

- **Components:** UIని చిన్న చిన్న స్వతంత్ర భాగాలుగా విడగొట్టడం. ఉదాహరణకు, ఒక పేజీలో Header, Sidebar, Content అనేవి విడివిడి కంపోనెంట్లు.
- **Virtual DOM:** ఇది రియల్ DOMకు ఒక 'కాపీ' లాంటిది. వేగవంతమైన పనితీరు కోసం ఇది అద్భుతంగా పనిచేస్తుంది.
- **JSX (JavaScript XML):** ఇది కోడ్ రాసేటప్పుడు HTML లాంటి సింటాక్స్ వాడటానికి అనుమతిస్తుంది. దీనివల్ల కోడ్ చదవడానికి సులభంగా ఉంటుంది.
- **Unidirectional Data Flow:** డేటా ఎప్పుడూ ఒకే దిశలో (Parent నుండి Child కి) ప్రవహిస్తుంది. దీనివల్ల అప్లికేషన్‌లో బగ్స్ (Bugs) తక్కువగా వస్తాయి.
- **Hooks:** `useState`, `useEffect` వంటి ఫంక్షన్ల ద్వారా స్టేట్ మరియు లైఫ్ సైకిల్ ఫీచర్లను సులభంగా వాడవచ్చు.

### 4. సాధారణ JavaScriptతో పోలిస్తే React యొక్క ప్రయోజనాలు (Advantages)

| ఫీచర్           | సాధారణ JavaScript (Vanilla JS)              | React JS                                                       |
| --------------- | ------------------------------------------- | -------------------------------------------------------------- |
| **DOM**         | నేరుగా రియల్ DOMని మారుస్తుంది (స్లో).      | Virtual DOMను ఉపయోగిస్తుంది (చాలా ఫాస్ట్).                     |
| **Reusable**    | కోడ్ మళ్ళీ మళ్ళీ రాయాలి.                    | కంపోనెంట్లు ఒకసారి రాస్తే ఎక్కడైనా వాడుకోవచ్చు.                |
| **Development** | కోడ్ పెద్దదయ్యే కొద్దీ గజిబిజిగా మారుతుంది. | కోడ్ ఆర్గనైజ్డ్ గా ఉంటుంది, మెయింటైన్ చేయడం సులభం.             |
| **Community**   | తక్కువ లైబ్రరీలు అందుబాటులో ఉంటాయి.         | చాలా పెద్ద కమ్యూనిటీ మరియు ఎన్నో సపోర్టింగ్ లైబ్రరీలు ఉన్నాయి. |
| **Testing**     | టెస్టింగ్ చేయడం కష్టం.                      | కంపోనెంట్ల ఆధారంగా టెస్టింగ్ చేయడం సులభం.                      |

---

**సారాంశం:** సరళంగా చెప్పాలంటే, సాధారణ JavaScript అనేది ఒక ఇంటిని గోడల వారీగా కట్టడం లాంటిది, కానీ React అనేది ముందుగా తయారు చేసిన (Pre-fabricated) భాగాలతో వేగంగా, అందంగా ఇల్లు కట్టడం లాంటిది.

## మీకు ఇందులో ఏదైనా పాయింట్ మీద మరింత స్పష్టత కావాలా లేదా తదుపరి ప్రశ్నలకు వెళ్దామా?

# 2. What is Virtual DOM?

Reactలో **Virtual DOM** అనేది ఒక ముఖ్యమైన కాన్సెప్ట్. ఇది React ఎందుకు అంత వేగంగా పనిచేస్తుందో చెబుతుంది. దీన్ని వివరంగా అర్థం చేసుకుందాం:

---

### 1. Virtual DOM అంటే ఏమిటి?

**Virtual DOM** అనేది మన అసలు (Real) DOM యొక్క **"కాపీ" (Lightweight Copy)**. ఇది పూర్తిగా JavaScript ఆబ్జెక్ట్స్ రూపంలో మెమరీలో ఉంటుంది. మనం వెబ్ పేజీలో ఏదైనా మార్పు చేసినప్పుడు, అది నేరుగా రియల్ DOM లో జరగదు, ముందుగా ఈ Virtual DOM లోనే జరుగుతుంది.

### 2. Virtual DOM ఎలా పనిచేస్తుంది? (How it works)

Virtual DOM పనితీరును 3 ముఖ్యమైన దశల్లో చెప్పవచ్చు:

1. **Render Phase:** డేటా మారినప్పుడల్లా (State/Props update), React మొత్తం UIని ఒక కొత్త Virtual DOM గా మారుస్తుంది (దీనిని Re-rendering అంటారు).
2. **Diffing Algorithm:** పాత Virtual DOMని, కొత్త Virtual DOMతో పోల్చి, ఏ భాగాల్లో మార్పులు జరిగాయో React గుర్తిస్తుంది.
3. **Reconciliation (Updating):** కేవలం మారిన ఆ భాగాన్ని మాత్రమే (Selective Update) తీసుకొని, రియల్ DOM లో అప్‌డేట్ చేస్తుంది. మిగతా భాగాలను అలాగే వదిలేస్తుంది.

### 3. Virtual DOM vs Real DOM (తేడాలు)

| ఫీచర్      | Real DOM                               | Virtual DOM                                             |
| ---------- | -------------------------------------- | ------------------------------------------------------- |
| **వేగం**   | మార్పులు చేయడం నెమ్మది (Slow).         | మార్పులు చేయడం వేగవంతం (Fast).                          |
| **మెమరీ**  | మెమరీని ఎక్కువగా వాడుకుంటుంది.         | ఇది కేవలం JavaScript ఆబ్జెక్ట్ కాబట్టి మెమరీ తక్కువ.    |
| **Update** | మొత్తం పేజీని అప్‌డేట్ చేస్తుంది.      | కేవలం మారిన భాగాన్ని మాత్రమే అప్‌డేట్ చేస్తుంది.        |
| **HTML**   | నేరుగా HTML ఎలిమెంట్స్‌ని మారుస్తుంది. | ఎలిమెంట్స్‌ని మార్చదు, కేవలం కాపీని అప్‌డేట్ చేస్తుంది. |

### 4. ఇది పనితీరును (Performance) ఎందుకు పెంచుతుంది?

సాధారణంగా బ్రౌజర్‌లో DOM అప్‌డేట్ అనేది చాలా ఖరీదైన (Expensive) పని.

- **DOM అప్‌డేట్ అంటే ఏంటి?:** మీరు ఒక `<div>` లోపల ఒక చిన్న టెక్స్ట్‌ని మార్చినా, బ్రౌజర్ ఆ ఎలిమెంట్‌ని రీ-కాల్క్యులేట్ చేసి, రీ-పెయింట్ (Re-paint) చేయాల్సి ఉంటుంది.
- **ఎందుకు మెరుగుపడుతుంది?:**
- **Minimal Changes:** React తన Diffing Algorithm తో కేవలం మారిన మార్పును మాత్రమే రియల్ DOM లో అప్‌డేట్ చేస్తుంది. దీనివల్ల బ్రౌజర్ పడే భారం తగ్గుతుంది.
- **Batching:** ఒకేసారి చాలా మార్పులు వస్తే, వాటన్నింటినీ కలిపి ఒకేసారి రియల్ DOM లో అప్‌డేట్ చేస్తుంది. దీనినే **Batching** అంటారు.

**ఒక ఉదాహరణ:**
మీరు ఒక పెద్ద లైబ్రరీలో ఉన్న ఒక పుస్తకాన్ని మార్చాలనుకోండి.

- **Real DOM పద్ధతి:** మొత్తం లైబ్రరీని బయటకు తీసి, మళ్ళీ సర్దడం లాంటిది.
- **Virtual DOM పద్ధతి:** ఒక కాగితంపై ఏ పుస్తకం ఎక్కడ ఉందో రాసుకొని, కేవలం మారాల్సిన పుస్తకాన్ని మాత్రమే వెళ్లి మార్చడం లాంటిది. ఇది చాలా వేగంగా ఉంటుంది కదా!

---

## ఇప్పటివరకు మనం చదివిన వాటిలో మీకు ఏవైనా సందేహాలు ఉన్నాయా? లేదా తదుపరి అంశానికి (State, Props, or Hooks) వెళ్దామా?

# 3. What is JSX?

Reactలో **JSX** అనేది చాలా ప్రత్యేకమైన మరియు ముఖ్యమైన ఫీచర్. దీని గురించి వివరంగా తెలుసుకుందాం:

---

### 1. JSX అంటే ఏమిటి? (What is JSX?)

**JSX** అంటే **JavaScript XML**. ఇది JavaScript కోడ్‌లో HTML లాంటి కోడ్ రాయడానికి మనకు వీలు కల్పిస్తుంది.

సాధారణంగా JavaScriptలో UI తయారు చేయాలంటే `document.createElement()` వంటి పద్ధతులు వాడాలి, కానీ JSX వల్ల అది చాలా సులభం అవుతుంది. బ్రౌజర్‌కు నేరుగా JSX అర్థం కాదు, కాబట్టి **Babel** వంటి టూల్స్ దీన్ని బ్రౌజర్‌కు అర్థమయ్యే సాధారణ JavaScript కోడ్‌లోకి మారుస్తాయి.

### 2. JSX ఎందుకు ఉపయోగిస్తారు? (Why is it used?)

- **సరళత (Readability):** HTML లాగానే కోడ్ ఉండటం వల్ల, UI ఎలా ఉంటుందో చూడగానే అర్థమవుతుంది. కోడ్ మెయింటెనెన్స్ చాలా సులభం.
- **పవర్ ఫుల్:** JavaScript యొక్క పూర్తి సామర్థ్యాన్ని HTML మధ్యలో వాడుకోవచ్చు (ఉదా: మ్యాపింగ్, కండిషనల్ రెండరింగ్).
- **భద్రత (Security):** JSX లో డేటాను రెండర్ చేసే ముందు React ఆటోమేటిక్‌గా 'Escaping' చేస్తుంది. దీనివల్ల **Cross-Site Scripting (XSS)** వంటి దాడుల నుండి అప్లికేషన్ సురక్షితంగా ఉంటుంది.

### 3. JSX vs HTML (తేడాలు)

| ఫీచర్              | HTML                                   | JSX                                                                                 |
| ------------------ | -------------------------------------- | ----------------------------------------------------------------------------------- |
| **క్లాస్ పేరు**    | `class="my-class"` వాడతాము.            | `className="my-class"` అని వాడాలి (ఎందుకంటే `class` అనేది JSలో రిజర్వ్‌డ్ కీవర్డ్). |
| **స్టైల్**         | `style="color:red"` అని ఇస్తాం.        | `style={{color: 'red'}}` అని ఆబ్జెక్ట్ రూపంలో ఇస్తాం.                               |
| **JS ఎంబెడ్డింగ్** | JS రాయడానికి `<script>` ట్యాగ్ కావాలి. | `{ }` (Curly braces) వాడి ఎక్కడైనా JS రాయవచ్చు.                                     |
| **ఈవెంట్స్**       | `onclick="doSomething()"`              | `onClick={doSomething}` (camelCase వాడాలి).                                         |

### 4. JSX రాసేటప్పుడు పాటించాల్సిన నియమాలు (Rules of JSX)

1. **ఒకే రూట్ ఎలిమెంట్ (Single Root Element):** JSX రిటర్న్ చేసేటప్పుడు మొత్తం కోడ్ ఒకే పేరెంట్ ఎలిమెంట్‌ (ఉదా: `<div>` లేదా `<>...</>`) లోపల ఉండాలి.
2. **క్లోజింగ్ ట్యాగ్స్:** అన్ని ట్యాగ్‌లను కచ్చితంగా క్లోజ్ చేయాలి. ఉదాహరణకు: `<img>` కి బదులుగా `<img />` అని రాయాలి.
3. **CamelCase వాడాలి:** HTML ఆట్రిబ్యూట్స్ అన్నీ camelCase లో ఉండాలి (ఉదా: `onclick` కి బదులుగా `onClick`, `tabindex` కి బదులుగా `tabIndex`).
4. **JS ఎక్స్‌ప్రెషన్స్:** HTML ట్యాగ్‌ల మధ్యలో JavaScript వేరియబుల్స్ లేదా ఎక్స్‌ప్రెషన్స్ వాడాలంటే కచ్చితంగా `{ }` వాడాలి.

- _ఉదాహరణ:_ `<h1>Hello, {name}</h1>`

---

**ఒక చిన్న ఉదాహరణ కోడ్:**

```jsx
function App() {
  const name = "React Developer";

  return (
    <div className="container">
      <h1>Hello, {name}!</h1>
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}
```

ఇక్కడ `className` మరియు `{name}` వాడటం మీరు గమనించవచ్చు. JSX గురించి ఈ విషయాలు తెలిస్తే ఇంటర్వ్యూలో చక్కగా సమాధానం చెప్పవచ్చు!

## తదుపరి అంశం **Components (Functional vs Class)** గురించి తెలుసుకుందామా? మీకు ఏమైనా సందేహాలు ఉన్నాయా?

# 4. Explain Components in React.

Reactలో **Components** అంటే వెబ్ పేజీలో ఉండే విడివిడి భాగాలు (Header, Footer, Button, Card, etc.). మనం ఒక్కో భాగాన్ని ఒక ఫంక్షన్‌లా లేదా క్లాస్‌లా రాసి, వాటిని ఒకదానితో ఒకటి కలిపి పూర్తి అప్లికేషన్‌ను తయారు చేస్తాం.

వీటిని ఎలా రాస్తామో చూద్దాం:

---

### 1. Functional Components

ఇవి చాలా సింపుల్‌గా ఉంటాయి. ఇవి సాధారణ JavaScript ఫంక్షన్లే. ఇవి ఒక 'Props'ని ఇన్‌పుట్‌గా తీసుకుని, UIని (JSX) రిటర్న్ చేస్తాయి.

**ఉదాహరణ:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2. Class Components

ఇవి JavaScript లోని `ES6 Class`ని ఉపయోగిస్తాయి. ఇవి `React.Component`ని ఎక్స్‌టెండ్ (Extend) చేస్తాయి. వీటికి `render()` అనే మెథడ్ కచ్చితంగా ఉండాలి, ఇది UIని రిటర్న్ చేస్తుంది.

**ఉదాహరణ:**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

---

### 3. తేడాలు (Functional vs Class Components)

| ఫీచర్            | Functional Components             | Class Components                   |
| ---------------- | --------------------------------- | ---------------------------------- |
| **సింటాక్స్**    | సింపుల్ (JavaScript ఫంక్షన్)      | కొంచెం క్లిష్టంగా (Class) ఉంటుంది  |
| **State**        | Hooks (`useState`) ద్వారా వాడతాము | `this.state` ద్వారా వాడతాము        |
| **Lifecycle**    | `useEffect` వాడతాము               | `componentDidMount` వంటివి వాడతాము |
| **కోడ్ పరిమాణం** | తక్కువ కోడ్ (Concise)             | ఎక్కువ కోడ్ (Boilerplate)          |

---

### 4. దేనికి ప్రాధాన్యత ఇస్తారు? (Which is preferred and why?)

ప్రస్తుతం డెవలప్మెంట్ అంతా **Functional Components** తోనే చేస్తున్నారు. ఎందుకంటే:

1. **సులభంగా ఉంటుంది:** కోడ్ చాలా తక్కువగా, క్లీన్‌గా ఉంటుంది. `this` కీవర్డ్ వాడాల్సిన అవసరం ఉండదు (ఇది చాలా మందికి కన్ఫ్యూజింగ్‌గా ఉంటుంది).
2. **Hooks:** Hooks (`useState`, `useEffect`) రాకతో, Functional Components లో కూడా State మరియు Lifecycle ఫీచర్లను చాలా పవర్‌ఫుల్‌గా వాడవచ్చు.
3. **Performance:** Functional Components కొంచెం వేగంగా ఉంటాయి ఎందుకంటే వీటికి ఎక్కువ మెమరీ అవసరం లేదు.
4. **Readability:** కోడ్ చిన్నదిగా ఉండటం వల్ల ఇతరులు సులభంగా అర్థం చేసుకోవచ్చు.

**చివరి మాట:** ఇంటర్వ్యూలో మిమ్మల్ని "ఏది బెస్ట్?" అని అడిగితే, **"Functional Components"** అని చెప్పి, పైన చెప్పిన కారణాలు (Hooks, Simplicity, Readability) వివరించండి. అయితే, పాత ప్రాజెక్టుల మెయింటెనెన్స్ కోసం Class Components కూడా తెలియడం మంచిదని చెప్పండి.

---

# 5. What are Props?

Reactలో **Props** (Properties) అంటే ఒక Component నుండి ఇంకొక Componentకి డేటాను పంపే మార్గం. ఇది অনেকটা HTML ఎలిమెంట్స్‌కి మనం 'Attribute'లు (ఉదా: `<img src="..." />`) ఎలా ఇస్తామో అలా ఉంటుంది.

దీని గురించి వివరంగా చూద్దాం:

---

### 1. Props అంటే ఏమిటి?

Props అంటే Componentలకు పంపే పారామీటర్లు. మనం ఒక Componentను వాడేటప్పుడు, దానికి కావలసిన సమాచారాన్ని Props రూపంలో అందించవచ్చు.

**ఉదాహరణ:**

```jsx
// Parent Component
function App() {
  return <Welcome name="Suresh" />;
}

// Child Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

ఇక్కడ `name="Suresh"` అనేది Prop. దీన్ని `props.name` ద్వారా చదువుతున్నాము.

### 2. డేటాను ఎలా పంపాలి? (Passing Data)

Props ద్వారా మనం కేవలం టెక్స్ట్ మాత్రమే కాకుండా, నంబర్లు, ఆబ్జెక్టులు, ఆరేలు (Arrays), మరియు ఫంక్షన్లను కూడా పంపవచ్చు.

- **డేటా పంపడం:** `<ChildComponent data={myVariable} />`
- **డేటా తీసుకోవడం:** `function ChildComponent(props) { ... }`

### 3. Read-only స్వభావం (Read-only nature)

ఇది Propsలో అతి ముఖ్యమైన నియమం. **Props ఎప్పుడూ 'Read-only' (Immutable).**

- అంటే, ఒక Child Component తనకు వచ్చిన Propsను మార్చకూడదు (ఉదా: `props.name = "Ramesh"` అని రాయడం తప్పు).
- కేవలం Parent Component మాత్రమే ఆ డేటాను పంపాలి/మార్చాలి. ఒకవేళ డేటా మారాలంటే, Parent Componentలో `state`ని అప్‌డేట్ చేయాలి. అప్పుడు React ఆటోమేటిక్‌గా Childకి కొత్త Props పంపి UIని అప్‌డేట్ చేస్తుంది.

### 4. Default Props (డిఫాల్ట్ వాల్యూస్)

ఒకవేళ మనం పంపాల్సిన Propsను పంపడం మర్చిపోతే, Component సరిగ్గా కనిపించకపోవచ్చు. అటువంటప్పుడు మనం **Default Props** సెట్ చేసుకోవచ్చు.

**ఉదాహరణ:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// ఒకవేళ name పంపకపోతే, "Guest" అని కనిపిస్తుంది
Welcome.defaultProps = {
  name: "Guest",
};
```

_(గమనిక: ఆధునిక JavaScriptలో మనం `function Welcome({ name = "Guest" }) { ... }` అని డిఫాల్ట్ వాల్యూని ఫంక్షన్ పారామీటర్ దగ్గరే సెట్ చేయవచ్చు)._

---

### ఇంటర్వ్యూలో చెప్పాల్సిన ముఖ్యమైన విషయాలు:

- **Props vs State:** Props బయట నుండి వస్తాయి (Read-only), State అనేది Component లోపలే ఉంటుంది మరియు మార్చవచ్చు (Mutable).
- **Prop Drilling:** ఒక Propని చాలా లేయర్స్ ద్వారా పంపడం వల్ల వచ్చే సమస్యని Prop Drilling అంటారు (దీన్ని Context API తో నివారించవచ్చు).

**సారాంశం:** Props అంటే ఒక Componentకు ఇచ్చే 'Inputs'. ఇవి డేటాను కాంపోనెంట్ల మధ్య షేర్ చేయడానికి తోడ్పడతాయి, కానీ ఇవి మారవు.

## తదుపరి **State Management (useState)** మరియు **Lifecycle (useEffect)** గురించి తెలుసుకుందామా? మీకు ఈ టాపిక్‌లో ఏమైనా సందేహం ఉందా?

# 6. What is State?

Reactలో **State** అనేది ఒక Component యొక్క "జ్ఞాపకశక్తి" (Memory) లాంటిది. ఒక Component తన పనితీరును లేదా UIని మార్చుకోవడానికి అవసరమైన డేటాను దాచుకునే చోటునే State అంటారు.

దీని గురించి వివరంగా చూద్దాం:

---

### 1. State అంటే ఏమిటి?

State అనేది ఒక JavaScript ఆబ్జెక్ట్, ఇందులో Componentకి సంబంధించిన డైనమిక్ డేటా ఉంటుంది. ఉదాహరణకు: ఒక కౌంటర్ యాప్‌లో నంబర్ (0, 1, 2...), ఒక ఫామ్‌లో యూజర్ టైప్ చేస్తున్న టెక్స్ట్, లేదా ఒక బటన్ క్లిక్ చేసినప్పుడు కనిపించే లోడింగ్ స్టేటస్ — ఇవన్నీ State లోనే ఉంటాయి.

### 2. State ఎందుకు అవసరం? (Why is it needed?)

- **డైనమిక్ UI:** డేటా మారినప్పుడు UI కూడా ఆటోమేటిక్‌గా అప్‌డేట్ అవ్వాలి. కేవలం వేరియబుల్స్‌ని వాడితే UI అప్‌డేట్ అవ్వదు. State వాడినప్పుడు మాత్రమే, డేటా మారినట్లు React గుర్తించి UIని **Re-render** (అప్‌డేట్) చేస్తుంది.
- **ఇంటరాక్టివిటీ:** యూజర్ క్లిక్ చేసినప్పుడు లేదా టైప్ చేసినప్పుడు అప్లికేషన్ స్పందించాలంటే, ఆ మార్పులను గుర్తుంచుకోవడానికి State చాలా అవసరం.

### 3. Local State అంటే ఏమిటి?

ఒక నిర్దిష్టమైన Componentకి మాత్రమే పరిమితమైన Stateని **Local State** అంటారు. అంటే, ఆ State డేటా వేరే ఇతర Componentలకు తెలియదు, కేవలం ఆ Component లోపల మాత్రమే ఉపయోగపడుతుంది. దీన్ని మనం `useState` హుక్ ద్వారా క్రియేట్ చేస్తాం.

**ఉదాహరణ:**

```jsx
import { useState } from "react";

function Counter() {
  // count అనేది State, setCount అనేది దాన్ని మార్చే ఫంక్షన్
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

### 4. Stateని సరిగ్గా అప్‌డేట్ చేయడం (Updating state correctly)

Reactలో Stateని ఎప్పుడూ నేరుగా మార్చకూడదు (ఉదా: `count = 5` అని రాయకూడదు). ఇలా చేస్తే UI అప్‌డేట్ అవ్వదు. ఎప్పుడూ React ఇచ్చిన **Setter function** (పైన ఉదాహరణలో `setCount`) ద్వారానే మార్చాలి.

**ముఖ్యమైన నియమాలు:**

- **Immutable Update:** స్టేట్‌ని డైరెక్ట్‌గా మార్చకుండా, `setCount(count + 1)` లాగా కొత్త వాల్యూని సెట్ చేయాలి.
- **Async Nature:** `setState` అనేది అసింక్రోనస్ (Asynchronous) గా పనిచేస్తుంది. అంటే, మీరు వెంటనే పాత స్టేట్ నుండి కొత్త స్టేట్‌ని మార్చాలనుకున్నప్పుడు, **Functional Update** పద్ధతిని వాడాలి:

```jsx
// ఇది సరైన పద్ధతి (ముఖ్యంగా పాత స్టేట్ మీద ఆధారపడి మార్చేటప్పుడు)
setCount((prevCount) => prevCount + 1);
```

- **Objects/Arrays:** ఒకవేళ స్టేట్ ఆబ్జెక్ట్ లేదా ఆరే అయితే, పాత డేటాను కాపీ చేసి (Spread operator `...` వాడి) అప్‌డేట్ చేయాలి.

```jsx
setUser((prevUser) => ({ ...prevUser, name: "Suresh" }));
```

---

### ఇంటర్వ్యూ చిట్కా:

ఇంటర్వ్యూలో మిమ్మల్ని **"Props కి మరియు State కి తేడా ఏమిటి?"** అని అడిగితే:

- **Props:** బయట నుండి వస్తాయి (Read-only).
- **State:** Component లోపల క్రియేట్ అవుతుంది (Mutable - `setState` ద్వారా మార్చవచ్చు).

ఇది చాలా ముఖ్యమైన ప్రశ్న, కచ్చితంగా గుర్తుంచుకోండి!

## ఇప్పుడు మనం **`useEffect` (Lifecycle Hooks)** గురించి తెలుసుకుందామా? లేదా ఏదైనా పాయింట్‌పై డౌట్ ఉందా?

# 7. Difference between Props and State.

ఇది ఇంటర్వ్యూలలో కచ్చితంగా అడిగే అత్యంత ముఖ్యమైన ప్రశ్న. **Props** మరియు **State** మధ్య ఉన్న వ్యత్యాసాన్ని అర్థం చేసుకోవడం Reactలో ప్రాథమికాంశం. దీనిని ఈ క్రింది పట్టిక మరియు వివరణ ద్వారా స్పష్టంగా చెప్పవచ్చు:

### Props vs State: ముఖ్యమైన తేడాలు

| ఫీచర్ (Topic)               | Props (Properties)                              | State                                                        |
| --------------------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| **యాజమాన్యం (Ownership)**   | Parent Component ద్వారా పంపబడుతుంది.            | Component స్వంతంగా నిర్వహిస్తుంది.                           |
| **మార్పు (Mutability)**     | **Read-only** (మార్చలేము).                      | **Mutable** (మార్చవచ్చు - `setState` ద్వారా).                |
| **ఉపయోగం (Usage)**          | ఒక Component నుండి ఇంకొక దానికి డేటా పంపడానికి. | Component లోపల డేటాను స్టోర్ చేయడానికి/మేనేజ్ చేయడానికి.     |
| **లైఫ్ సైకిల్ (Lifecycle)** | Parent మారినప్పుడు అప్‌డేట్ అవుతాయి.            | `setState` ద్వారా మార్చినప్పుడు Component అప్‌డేట్ అవుతుంది. |

---

### వివరణ (Detailed Explanation)

#### 1. యాజమాన్యం (Ownership)

- **Props:** ఇవి 'External'. బయటి నుండి (Parent Component ద్వారా) వస్తాయి. ఒక Component తనకి వచ్చిన Propsని మార్చకూడదు, కేవలం వాడాలి మాత్రమే.
- **State:** ఇవి 'Internal'. Component తన లోపల డేటాను ఎలా నిర్వహించుకోవాలో అదే నిర్ణయించుకుంటుంది. ఇది ఆ Component యొక్క సొంత ఆస్తి.

#### 2. మార్పు (Mutability)

- **Props (Immutable):** ఒకసారి Parent నుండి వచ్చిన తర్వాత, ఆ Child వాటిని మార్చకూడదు. ఒకవేళ వాటిని మార్చాల్సి వస్తే, Parent ద్వారానే మార్చాలి (ఇది పరోక్షమైన మార్పు).
- **State (Mutable):** మనం డేటాను మార్చవచ్చు. React అందించిన ఫంక్షన్ (`setState` లేదా Hooks లో `useState` setter function) ఉపయోగించి మనం ఎప్పుడు కావాలంటే అప్పుడు స్టేట్‌ని అప్‌డేట్ చేయవచ్చు.

#### 3. ఉపయోగం (Usage)

- **Props:** "Data flow" కోసం వాడతాము. ఉదాహరణకు, ఒక వెబ్‌సైట్‌లో 'User Name' ని హెడర్ (Header) లో చూపించాలంటే, `name` ని ఒక Prop లాగా హెడర్‌కి పంపుతాము.
- **State:** "Component behavior" కోసం వాడతాము. ఉదాహరణకు, ఒక బటన్ క్లిక్ చేసినప్పుడు 'Counter' పెరగాలన్నా లేదా ఒక 'Toggle switch' ఆన్/ఆఫ్ అవ్వాలన్నా State అవసరం.

#### 4. లైఫ్ సైకిల్ (Lifecycle)

- **Props:** Parent Component అప్‌డేట్ అయినప్పుడు, అది పంపే Props మారుతాయి, దానివల్ల Child Component కూడా అప్‌డేట్ అవుతుంది.
- **State:** Component లోని స్టేట్ మారిన ప్రతిసారీ, ఆ Component మళ్ళీ Render (Refresh) అవుతుంది. అంటే, ఆ మార్పుకు అనుగుణంగా UIని అప్‌డేట్ చేస్తుంది.

---

### ఇంటర్వ్యూలో సమాధానం చెప్పేటప్పుడు ఇలా చెప్పండి:

> "Props మరియు State రెండూ కూడా React అప్లికేషన్‌లో డేటాను హ్యాండిల్ చేయడానికి ఉపయోగిస్తారు. ప్రధాన తేడా ఏంటంటే - **Props** అనేవి ఫంక్షన్ పారామీటర్ల లాంటివి (బయట నుండి వస్తాయి, మార్చలేము). **State** అనేది ఒక ఫంక్షన్ లోపల ఉండే వేరియబుల్ లాంటిది (Component లోపలే ఉంటుంది, మార్చుకోవచ్చు). Props అనేవి కంపోనెంట్ల మధ్య కమ్యూనికేషన్ కోసం వాడితే, State ని కంపోనెంట్ యొక్క ప్రస్తుత పరిస్థితిని (Current status) ట్రాక్ చేయడానికి వాడతాము."

## ఈ టాపిక్ మీద మీకు స్పష్టత వచ్చిందా? నెక్స్ట్ **useEffect (Lifecycle)** గురించి తెలుసుకుందామా?

# 8. What are React Hooks?

Reactలో **Hooks** అనేవి చాలా శక్తివంతమైన ఫీచర్లు. ఇవి React 16.8 వెర్షన్‌లో పరిచయం చేయబడ్డాయి. వీటి గురించి ఇంటర్వ్యూలో అడిగినప్పుడు ఇలా వివరించండి:

---

### 1. React Hooks అంటే ఏమిటి?

Hooks అనేవి సాధారణ JavaScript ఫంక్షన్లు. ఇవి **Functional Components** లో కూడా React యొక్క స్టేట్ (State) మరియు లైఫ్ సైకిల్ (Lifecycle) ఫీచర్లను ఉపయోగించుకోవడానికి మనకు అవకాశం ఇస్తాయి. అంతకుముందు ఇవి కేవలం Class Components లోనే ఉండేవి.

**ముఖ్యమైన Hooks:** `useState`, `useEffect`, `useContext`, `useRef`, `useMemo` మొదలైనవి.

---

### 2. Hooks ఎందుకు ప్రవేశపెట్టారు? (Why hooks were introduced?)

Class Components లో కొన్ని సమస్యలు ఉండటం వల్ల Hooks ని తీసుకువచ్చారు:

- **క్లిష్టత (Complexity):** Class Components లో `this` కీవర్డ్ వాడటం చాలా మందికి కన్ఫ్యూజింగ్‌గా ఉండేది. Hooks వల్ల ఆ అవసరం తప్పింది.
- **కోడ్ నిర్వహణ (Code Maintenance):** ఒకే ఫంక్షనాలిటీకి సంబంధించిన కోడ్ Class Components లో వేర్వేరు లైఫ్ సైకిల్ మెథడ్లలో (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`) విడిపోతుంది. `useEffect` ద్వారా ఆ కోడ్‌ని ఒకే చోట రాయవచ్చు.
- **కోడ్ పునర్వినియోగం (Reusability):** ఒకే లాజిక్‌ను వేర్వేరు కాంపోనెంట్లలో వాడాలంటే, Class Components లో "Higher-Order Components" లేదా "Render Props" వాడాలి, ఇది చాలా కష్టమైన పని. Hooks తో **"Custom Hooks"** తయారు చేసి లాజిక్‌ను సులభంగా షేర్ చేయవచ్చు.
- **Bundle size:** సాధారణంగా Class Components కంటే Functional Components చిన్నవిగా ఉంటాయి, కాబట్టి అప్లికేషన్ వేగంగా పనిచేస్తుంది.

---

### 3. Hooks నియమాలు (Rules of Hooks)

Hooks సరిగ్గా పనిచేయడానికి React కొన్ని కఠినమైన నియమాలను పెట్టింది:

1. **కేవలం టాప్ లెవల్‌లోనే వాడాలి (Only call at the top level):**

- Hooks ని లూప్స్ (Loops), కండిషన్స్ (If conditions), లేదా నెస్టెడ్ ఫంక్షన్ల లోపల వాడకూడదు. ఎందుకంటే, React ప్రతిసారి Render అయ్యేటప్పుడు Hooks ని ఒకే వరుస క్రమంలో గుర్తిస్తుంది. మధ్యలో కండిషన్ పెడితే ఆ క్రమం మారిపోయి బగ్స్ వచ్చే అవకాశం ఉంటుంది.

2. **కేవలం React ఫంక్షన్ల లోపే వాడాలి:**

- Hooks ని సాధారణ JavaScript ఫంక్షన్లలో వాడకూడదు. కేవలం **Functional Components** లో లేదా **Custom Hooks** లో మాత్రమే వాడాలి.

---

### ఒక చిన్న ఉదాహరణ:

```jsx
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0); // useState Hook

  useEffect(() => {
    // useEffect Hook (Lifecycle logic)
    document.title = `You clicked ${count} times`;
  });

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

**ఇంటర్వ్యూ చిట్కా:** "Hooks ఎందుకు వచ్చాయి?" అని అడిగినప్పుడు, "Class Components లో ఉండే `this` కన్ఫ్యూజన్‌ను మరియు లాజిక్‌ని రీయూజ్ చేయడంలో ఉన్న ఇబ్బందులను అధిగమించడానికి Hooks వచ్చాయి" అని స్పష్టంగా చెప్పండి.

---

# 9. Explain useState().

`useState` అనేది Reactలో అత్యంత ప్రాథమికమైన మరియు ముఖ్యమైన హుక్. ఇది ఒక ఫంక్షనల్ కాంపోనెంట్‌లో స్టేట్‌ని (State) నిల్వ చేయడానికి మరియు దాన్ని అప్‌డేట్ చేయడానికి ఉపయోగపడుతుంది.

దీని గురించి ఇంటర్వ్యూలో అడిగే ముఖ్యమైన అంశాలు ఇక్కడ ఉన్నాయి:

---

### 1. useState() అంటే ఏమిటి?

ఇది ఒక ఫంక్షన్. దీనికి మనం స్టేట్ యొక్క **ప్రారంభ విలువను (Initial State)** ఇన్‌పుట్‌గా ఇస్తాము. ఇది మనకు రెండు విషయాలను రిటర్న్ చేస్తుంది (Array Destructuring ద్వారా):

1. **State variable:** ప్రస్తుత స్టేట్ విలువను కలిగి ఉంటుంది.
2. **Setter function:** స్టేట్ విలువను మార్చడానికి ఉపయోగించే ఫంక్షన్.

```javascript
const [state, setState] = useState(initialValue);
```

### 2. Initial State (ప్రారంభ విలువ)

`useState()` లో మనం ఎలాంటి డేటా టైప్ అయినా ఇవ్వవచ్చు:

- `useState(0)` - నంబర్
- `useState("Hello")` - స్ట్రింగ్
- `useState(true)` - బూలియన్
- `useState([])` - ఆరే
- `useState({})` - ఆబ్జెక్ట్

### 3. Functional Updates (ఫంక్షనల్ అప్‌డేట్స్)

మనం స్టేట్‌ని మార్చేటప్పుడు, పాత స్టేట్ విలువపై ఆధారపడి అప్‌డేట్ చేయాల్సి వస్తే (ఉదా: కౌంటర్ పెంచడం), మనం నేరుగా `setCount(count + 1)` అని కాకుండా, **Functional Update** పద్ధతిని వాడాలి. ఇది చాలా సురక్షితం.

```javascript
// ఇది ఉత్తమ పద్ధతి
setCount((prevCount) => prevCount + 1);
```

ఇక్కడ `prevCount` అనేది పాత స్టేట్ విలువను హామీగా ఇస్తుంది. React అసింక్రోనస్ (Asynchronous)గా పనిచేస్తుంది కాబట్టి, ఇది చాలా ముఖ్యమైనది.

### 4. Multiple States (ఒకటి కంటే ఎక్కువ స్టేట్స్)

ఒక కాంపోనెంట్‌లో మనం ఎన్ని `useState` హుక్స్ అయినా వాడుకోవచ్చు. ప్రతి స్టేట్ విడివిడిగా పనిచేస్తుంది.

```javascript
const [name, setName] = useState("Suresh");
const [age, setAge] = useState(25);
```

ఇలా వేర్వేరు డేటాను విడివిడిగా మేనేజ్ చేయడం సులభంగా ఉంటుంది.

### 5. Object Updates (ఆబ్జెక్ట్ అప్‌డేట్స్ - చాలా ముఖ్యం!)

`useState`లో ఒక ఆబ్జెక్ట్‌ని అప్‌డేట్ చేసేటప్పుడు, పాత డేటా పోకుండా జాగ్రత్తపడాలి. `useState` ఆటోమేటిక్‌గా పాత స్టేట్‌ను కొత్త స్టేట్‌తో పూర్తిగా రీప్లేస్ చేస్తుంది (Class components `this.setState` లాగా మెర్జ్ చేయదు). కాబట్టి, మనం **Spread Operator (`...`)** వాడాలి.

```javascript
const [user, setUser] = useState({ name: "Suresh", age: 25 });

// కేవలం పేరు మార్చాలంటే:
setUser((prevUser) => ({
  ...prevUser, // పాత ఆబ్జెక్ట్ ని కాపీ చేస్తుంది
  name: "Ramesh", // కేవలం name ని మాత్రమే మారుస్తుంది
}));
```

---

### ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన చిట్కాలు:

- **Immutable:** స్టేట్‌ను ఎప్పుడూ నేరుగా మార్చకూడదు (`user.name = "Ramesh"` అని రాయకూడదు).
- **Why Spread Operator?** ఆబ్జెక్ట్ స్టేట్ అప్‌డేట్ చేసేటప్పుడు పాత ప్రాపర్టీలు డిలీట్ అవ్వకుండా ఉండటానికి `...` వాడతామని చెప్పండి.
- **Asynchronous:** `useState` అప్‌డేట్స్ అసింక్రోనస్ కాబట్టి, పాత స్టేట్ మీద ఆధారపడేటప్పుడు ఫంక్షనల్ అప్‌డేట్ (`prev => ...`) వాడటం మంచిదని చెప్పండి.

ఇవి చెబితే, `useState`పై మీకు మంచి పట్టు ఉందని ఇంటర్వ్యూయర్ భావిస్తారు.

## తదుపరి **`useEffect` (Side Effects & Lifecycle)** గురించి తెలుసుకుందామా? ఇది చాలా ఆసక్తికరమైన మరియు కీలకమైన టాపిక్!

# 10. Explain useEffect()

Reactలో **`useEffect`** అనేది ఒక చాలా శక్తివంతమైన హుక్. ఇది ఫంక్షనల్ కాంపోనెంట్లలో "Side Effects" (ఉదా: API కాల్స్, టైమర్లు, DOM మానిప్యులేషన్) నిర్వహించడానికి ఉపయోగపడుతుంది.

దీనిని అర్థం చేసుకోవడానికి కింద పేర్కొన్న అంశాలు ముఖ్యం:

---

### 1. useEffect అంటే ఏమిటి?

ఇది ఒక ఫంక్షన్ మరియు ఒక డిపెండెన్సీ అర్రే (Dependency Array) ని తీసుకుంటుంది.

```javascript
useEffect(() => {
  // ఇక్కడ కోడ్ రాస్తాము (Side effect)
}, [dependencies]);
```

### 2. Dependency Array (డిపెండెన్సీ అర్రే)

ఇది `useEffect` ఎప్పుడు రన్ అవ్వాలో నిర్ణయిస్తుంది:

- **అర్రే లేకపోతే (`[]` లేదు):** ప్రతిసారి కాంపోనెంట్ రెండర్ అయినప్పుడు `useEffect` రన్ అవుతుంది. (ఇది ప్రమాదకరం, బగ్స్ వచ్చే అవకాశం ఉంది).
- **ఖాళీ అర్రే (`[]`):** కాంపోనెంట్ మొదటిసారి లోడ్ అయినప్పుడు (Mounting) మాత్రమే రన్ అవుతుంది.
- **డిపెండెన్సీ ఉంటే (`[count]`):** ఆ `count` వాల్యూ మారిన ప్రతిసారీ `useEffect` రన్ అవుతుంది.

### 3. API Calls (డేటా ఫెచింగ్)

సాధారణంగా API కాల్స్ చేయడానికి `useEffect` ఉపయోగిస్తాము. మనం డేటాను లోడ్ చేసి స్టేట్‌లో స్టోర్ చేస్తాము.

```javascript
useEffect(() => {
  fetch("https://api.example.com/data")
    .then((res) => res.json())
    .then((data) => setData(data));
}, []); // ఖాళీ అర్రే పెట్టడం వల్ల ఒకేసారి కాల్ అవుతుంది.
```

### 4. Cleanup Function (క్లీనప్ ఫంక్షన్)

కొన్నిసార్లు ఒక కాంపోనెంట్ అన్‌మౌంట్ (Unmount) అయినప్పుడు లేదా `useEffect` మళ్ళీ రన్ అవ్వబోయే ముందు పాత పనులను క్లియర్ చేయాలి (ఉదా: టైమర్ ఆపడం, సబ్‌స్క్రిప్షన్ తీసేయడం). దీనికోసం మనం `useEffect` లో ఒక ఫంక్షన్‌ని రిటర్న్ చేయాలి.

```javascript
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);

  // క్లీనప్ ఫంక్షన్
  return () => clearInterval(timer);
}, []);
```

### 5. Multiple useEffects

ఒక కాంపోనెంట్‌లో ఎన్ని `useEffect` లనైనా వాడవచ్చు. **దీనివల్ల లాభం ఏమిటి?** Class Components లో అయితే ఒకే `componentDidUpdate` లో అన్ని రకాల లాజిక్ రాయాల్సి వచ్చేది. కానీ `useEffect` వాడితే:

- API కాల్ లాజిక్ ఒక `useEffect`లో,
- సబ్‌స్క్రిప్షన్ లాజిక్ వేరొక `useEffect`లో రాసుకోవచ్చు.
  దీనిని **"Separation of Concerns"** అంటారు.

---

### ఇంటర్వ్యూలో చెప్పాల్సిన సారాంశం:

1. **"Side Effects" అంటే ఏమిటి?** API కాల్స్, టైమర్లు, మ్యాన్యువల్ DOM అప్‌డేట్స్ వంటివి.
2. **ఎప్పుడు వాడాలి?** కాంపోనెంట్ మౌంట్ అయినప్పుడు లేదా ఏదైనా స్టేట్ మారినప్పుడు ఏదైనా జరగాలి అంటే `useEffect` వాడాలి.
3. **క్లీనప్ ఎందుకు?** మెమరీ లీక్స్ (Memory leaks) అవ్వకుండా ఆపడానికి.
4. **డిపెండెన్సీ అర్రే:** ఇది `useEffect` రన్ అయ్యే సమయాన్ని కంట్రోల్ చేస్తుంది.

ఈ 10 ప్రశ్నలు మీరు బాగా సిద్ధం చేసుకుంటే, React ఇంటర్వ్యూలో కచ్చితంగా మంచి ప్రతిభ కనబరుస్తారు!

## **మీకు ఇంకేమైనా సందేహాలు ఉన్నాయా? లేదా ఏదైనా కోడింగ్ ప్రాక్టీస్ కోసం కావాలా?**

# 11. Difference between useEffect(), useLayoutEffect(), and useInsertionEffect()

React ఇంటర్వ్యూలలో ఈ మూడు హుక్స్ మధ్య తేడాలను అడగడం చాలా సహజం. ఇవి మూడు కూడా **"Side Effects"** ని హ్యాండిల్ చేస్తాయి, కానీ అవి ఎప్పుడు రన్ అవుతాయి అనేదే వీటి మధ్య ప్రధాన వ్యత్యాసం.

వీటి గురించి వివరంగా చూద్దాం:

---

### 1. `useEffect()`

ఇది అందరికీ తెలిసిన సాధారణ హుక్.

- **ఎప్పుడు రన్ అవుతుంది:** బ్రౌజర్ స్క్రీన్‌ని **Paint (Render)** చేసిన తర్వాత రన్ అవుతుంది.
- **ఎందుకు:** ఇది బ్రౌజర్ UIని బ్లాక్ చేయదు, కాబట్టి యూజర్ ఎక్స్‌పీరియన్స్ బాగుంటుంది.
- **ఉపయోగం:** API కాల్స్, ఈవెంట్ లిజనర్స్, టైమర్లు వంటి సాధారణ పనులకు వాడతాము.

### 2. `useLayoutEffect()`

ఇది `useEffect` లాగే ఉంటుంది, కానీ దీని రన్ అయ్యే సమయం వేరు.

- **ఎప్పుడు రన్ అవుతుంది:** React తన DOM మార్పులను చేసిన తర్వాత, కానీ బ్రౌజర్ **Paint (స్క్రీన్‌పై చూపించడం)** చేయడానికి ముందు రన్ అవుతుంది.
- **ఎందుకు:** ఒకవేళ మనం DOM లోని ఒక ఎలిమెంట్ యొక్క కొలతలు (width, height) చూసి, వెంటనే UIని మార్చాల్సి వస్తే ఇది వాడాలి. `useEffect` వాడితే, స్క్రీన్ ఒక్కసారి బ్లింక్ (Flicker) అయ్యే అవకాశం ఉంది, అది నివారించడానికి `useLayoutEffect` వాడతాము.
- **హెచ్చరిక:** ఇది బ్రౌజర్ పెయింటింగ్‌ను బ్లాక్ చేస్తుంది కాబట్టి, దీన్ని ఎక్కువగా వాడకూడదు.

### 3. `useInsertionEffect()`

ఇది React 18 లో పరిచయం చేయబడింది. ఇది చాలా ప్రత్యేకమైనది.

- **ఎప్పుడు రన్ అవుతుంది:** ఏ ఇతర DOM మార్పులు జరగకముందే (అంటే `useLayoutEffect` కంటే కూడా ముందు) ఇది రన్ అవుతుంది.
- **ఎందుకు:** ఇది ప్రధానంగా **CSS-in-JS** లైబ్రరీల కోసం తయారు చేయబడింది. స్టైల్స్‌ని DOM లోకి ఇంజెక్ట్ చేయడానికి ఇది వాడతాము. `useLayoutEffect` రన్ అయ్యే లోపే స్టైల్స్ అప్లై అవ్వాలి కాబట్టి, ఇది అక్కడ ఉపయోగపడుతుంది.
- **ముఖ్య గమనిక:** దీనిలో మీరు `useState` లేదా `useRef` వంటివి వాడలేరు మరియు DOM ని యాక్సెస్ చేయలేరు.

---

### క్లుప్తంగా చెప్పాలంటే (Summary Table):

| Hook                     | ఎప్పుడు రన్ అవుతుంది?                             | ప్రధాన ఉద్దేశ్యం                         |
| ------------------------ | ------------------------------------------------- | ---------------------------------------- |
| **`useInsertionEffect`** | DOM మ్యానిపులేషన్ కంటే ముందు (CSS కోసం).          | స్టైల్స్‌ని ఇంజెక్ట్ చేయడానికి.          |
| **`useLayoutEffect`**    | DOM రెండర్ అయిన తర్వాత, కానీ పెయింటింగ్‌కు ముందు. | DOM కొలతలు (Measurements) తీసుకోవడానికి. |
| **`useEffect`**          | బ్రౌజర్ స్క్రీన్‌ని పెయింట్ చేసిన తర్వాత.         | API కాల్స్, సాధారణ సైడ్ ఎఫెక్ట్స్.       |

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

ఇంటర్వ్యూయర్ అడిగితే ఇలా చెప్పండి:

> "సాధారణంగా మనం 99% సందర్భాల్లో `useEffect`నే వాడతాము. ఒకవేళ UIలో ఏదైనా ఎలిమెంట్ కొలతలు చూసి వెంటనే మార్పులు చేయాల్సి వస్తే (Flickering నివారించడానికి) `useLayoutEffect` వాడతాము. ఇక `useInsertionEffect` అనేది కేవలం CSS-in-JS లైబ్రరీల డెవలపర్స్ కోసం, మనం సాధారణ అప్లికేషన్లలో దీన్ని వాడాల్సిన అవసరం ఉండదు."

## దీనితో React లోని ముఖ్యమైన Hooks అన్నీ కవర్ అయ్యాయి! ఇంకా ఏవైనా టాపిక్స్ (ఉదా: **Redux, Routing, Performance optimization**) గురించి చర్చించాలా?

# 12. Explain React Lifecycle

Reactలో **Lifecycle** అంటే ఒక Component పుట్టినప్పటి (Mount) నుండి, అప్‌డేట్ అయ్యే వరకు, చివరకు చనిపోయే (Unmount) వరకు జరిగే వివిధ దశలు.

క్లాస్ కాంపోనెంట్లలో వీటిని **Lifecycle Methods** అంటాము, అయితే ఫంక్షనల్ కాంపోనెంట్లలో వీటన్నింటినీ కేవలం **`useEffect`** హుక్ ద్వారానే హ్యాండిల్ చేస్తాము.

---

### Lifecycle Methods vs useEffect Mapping

| Lifecycle Method (Class)   | ఎప్పుడు రన్ అవుతుంది?                             | Equivalent Hook (Functional)                    |
| -------------------------- | ------------------------------------------------- | ----------------------------------------------- |
| **`componentDidMount`**    | కాంపోనెంట్ మొదటిసారి స్క్రీన్ మీదకు వచ్చినప్పుడు. | `useEffect(() => { ... }, [])`                  |
| **`componentDidUpdate`**   | స్టేట్ లేదా ప్రొప్స్ మారినప్పుడు.                 | `useEffect(() => { ... }, [data])`              |
| **`componentWillUnmount`** | కాంపోనెంట్ స్క్రీన్ నుండి తొలగించబడినప్పుడు.      | `useEffect(() => { return () => { ... } }, [])` |

---

### వివరణ:

#### 1. `componentDidMount` (మొదటి దశ)

ఇది కాంపోనెంట్ మౌంట్ అయిన వెంటనే ఒకసారి రన్ అవుతుంది. సాధారణంగా **API కాల్స్** చేయడానికి, డేటాను లోడ్ చేయడానికి దీన్ని వాడతాము.

- **Hook:** డిపెండెన్సీ అర్రేని ఖాళీగా `[]` ఉంచితే, అది మౌంట్ అయినప్పుడే రన్ అవుతుంది.

#### 2. `componentDidUpdate` (మార్పుల దశ)

కాంపోనెంట్‌లో డేటా (State/Props) మారిన ప్రతిసారీ ఇది రన్ అవుతుంది. ఉదాహరణకు, యూజర్ పేరు మారినప్పుడు కొత్త డేటాను ఫెచ్ చేయడం.

- **Hook:** డిపెండెన్సీ అర్రేలో ఏ డేటా అయితే మారాలో ఆ వేరియబుల్‌ని పెట్టాలి `[data]`. ఆ డేటా మారిన ప్రతిసారి ఈ ఎఫెక్ట్ రన్ అవుతుంది.

#### 3. `componentWillUnmount` (తొలగింపు దశ)

కాంపోనెంట్ తీసేసే ముందు క్లీనప్ (Cleanup) చేయడానికి ఇది వాడతాము. ఉదాహరణకు: టైమర్‌ను ఆపడం (`clearInterval`) లేదా సబ్‌స్క్రిప్షన్స్‌ను తీసేయడం.

- **Hook:** `useEffect` లో మనం ఒక ఫంక్షన్‌ను `return` చేస్తే, అదే `componentWillUnmount` లాగా పనిచేస్తుంది.

---

### కోడ్ ఉదాహరణ (Combined):

```javascript
useEffect(() => {
  // componentDidMount లాగా
  console.log("Component Mounted!");

  // cleanup: componentWillUnmount లాగా
  return () => {
    console.log("Component Unmounted!");
  };
}, []); // ఖాళీ అర్రే అంటే మౌంట్ అయినప్పుడు మాత్రమే

useEffect(() => {
  // componentDidUpdate లాగా
  console.log("Data changed: ", data);
}, [data]); // data మారినప్పుడు మాత్రమే
```

### ఇంటర్వ్యూ చిట్కా:

ఇంటర్వ్యూలో మిమ్మల్ని **"Functional components లో `componentDidUpdate` ని ఎలా చేస్తారు?"** అని అడిగితే, "మేము `useEffect` లో డిపెండెన్సీ అర్రేని ఉపయోగిస్తాము, అందులో ఏ స్టేట్ మారాలో అది మెన్షన్ చేస్తాము" అని సమాధానం ఇవ్వండి.

## ఇప్పటివరకు మీరు 12 కీలకమైన ప్రశ్నలు నేర్చుకున్నారు! ఇవి ఇంటర్వ్యూకి చాలా బలంగా సరిపోతాయి. వీటిలో ఏదైనా ఒక దానిపై కోడ్ ప్రాక్టీస్ చేయాలనుకుంటున్నారా లేదా **Redux లేదా Context API** వంటి అడ్వాన్స్‌డ్ టాపిక్స్‌కు వెళ్దామా?

# 13. What is React Reconciliation?

**Reconciliation** అనేది Reactలో ఒక చాలా ముఖ్యమైన ప్రక్రియ. సులభంగా చెప్పాలంటే, **"మారిన డేటాకు అనుగుణంగా UIని వేగంగా ఎలా అప్‌డేట్ చేయాలి?"** అని React చేసే ప్రయత్నమే ఈ Reconciliation.

దీని గురించి ఇంటర్వ్యూలో అడిగినప్పుడు ఈ క్రింది అంశాలను కవర్ చేయండి:

---

### 1. Reconciliation అంటే ఏమిటి?

React లో `setState` ని పిలిచినప్పుడు, అది UI లో మార్పులు చేయాలి. కానీ రియల్ DOM లో ప్రతి చిన్న మార్పుకు మొత్తం పేజీని రీ-రెండర్ చేయడం చాలా ఖరీదైన (Expensive) పని. కాబట్టి, React ముందుగా **Virtual DOM** తో కొత్త UI ని నిర్మించి, పాత దానితో పోల్చి, కేవలం మారిన భాగాలను మాత్రమే రియల్ DOM లో అప్‌డేట్ చేస్తుంది. ఈ మొత్తం ప్రాసెస్‌నే **Reconciliation** అంటారు.

### 2. Diffing Algorithm (డిఫింగ్ అల్గారిథం)

పాత Virtual DOM ని, కొత్త Virtual DOM తో పోల్చడానికి React ఒక తెలివైన "Diffing Algorithm" ని వాడుతుంది. దీనివల్ల కాంప్లెక్సిటీ $O(n^3)$ నుండి $O(n)$ కి తగ్గుతుంది. దీని కోసం React రెండు ముఖ్యమైన నియమాలను పాటిస్తుంది:

- **వేర్వేరు ఎలిమెంట్స్:** ఒకవేళ రూట్ ఎలిమెంట్స్ మారితే (ఉదా: `<div>` నుండి `<span>` కి మారితే), React పాత ట్రీని మొత్తం తీసేసి (Destroy), కొత్త ట్రీని నిర్మిస్తుంది.
- **ఒకే రకమైన ఎలిమెంట్స్:** ఒకవేళ ఎలిమెంట్ మారకపోతే (ఉదా: `<div>` అలాగే ఉంది), React కేవలం ఆ ఎలిమెంట్ యొక్క ఆట్రిబ్యూట్స్ (attributes) లేదా స్టైల్స్ మారాయేమో చూసి, కేవలం వాటిని మాత్రమే అప్‌డేట్ చేస్తుంది.

### 3. Tree Comparison (ట్రీ కంపారిజన్)

React ఒక అప్లికేషన్‌ను **Tree structure** లో చూస్తుంది.

- ఏదైనా కాంపోనెంట్ యొక్క `state` లేదా `props` మారినప్పుడు, React ఆ కాంపోనెంట్ నుండి మొదలుపెట్టి దాని కింద ఉన్న చైల్డ్ కాంపోనెంట్ల వరకు ఒక కొత్త ట్రీని తయారు చేస్తుంది.
- ఆ కొత్త ట్రీని పాత ట్రీతో పోల్చి, ఏ నోడ్స్ (Nodes) అప్‌డేట్ అయ్యాయో లేదా డిలీట్ అయ్యాయో కనుక్కుంటుంది.

### 4. DOM Updates (ఎలా అప్‌డేట్ చేస్తుంది?)

చివరిగా, ఈ Diffing ప్రాసెస్ పూర్తయ్యాక, React ఒక లిస్ట్ ఆఫ్ చేంజెస్ (Minimal set of updates) తయారు చేస్తుంది. ఆ మార్పులను మాత్రమే రియల్ DOM లో ప్యాచ్ (Patch) చేస్తుంది.

**ముఖ్యమైన విషయం - 'Keys':**
లిస్ట్ ఆఫ్ ఎలిమెంట్స్ (Array) ఉన్నప్పుడు, ఏ ఎలిమెంట్ మారిందో గుర్తించడం కష్టం. అటువంటప్పుడు మనం **`key`** అనే ప్రాప్‌ని వాడతాము. `key` ఉండటం వల్ల, React కి ఏ ఐటమ్ యాడ్ అయ్యింది, ఏది డిలీట్ అయ్యింది అనేది ఖచ్చితంగా తెలుస్తుంది. `key` లేకపోతే React కి కన్ఫ్యూజన్ వచ్చి, మొత్తం లిస్ట్‌ని మళ్ళీ రెండర్ చేసే అవకాశం ఉంది (దీనివల్ల పెర్ఫార్మెన్స్ తగ్గుతుంది).

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

> "Reconciliation అనేది React యొక్క అల్గారిథం. దీని ద్వారా React ఒక కొత్త వర్చువల్ DOM ట్రీని పాత దానితో పోల్చి, కనీస మార్పులను మాత్రమే రియల్ DOM లో అప్‌డేట్ చేస్తుంది. మనం `key` అనే ప్రాప్‌ని వాడటం వల్ల ఈ ప్రాసెస్ మరింత వేగంగా, సమర్థవంతంగా జరుగుతుంది."

**చిన్న చిట్కా:** ఇంటర్వ్యూలో `key` గురించి అడిగితే, "Keys వల్ల React కి ఎలిమెంట్స్ మధ్య ఉన్న వ్యత్యాసాన్ని గుర్తించడం ఈజీ అవుతుంది, తద్వారా అనవసరమైన రీ-రెండరింగ్ తగ్గుతుంది" అని చెప్పండి.

## ఇప్పటివరకు మనం 13 ప్రాథమిక ప్రశ్నలు కవర్ చేశాము! ఇప్పుడు మీకు అడ్వాన్స్‌డ్ టాపిక్స్ (Redux, Context API, లేదా Performance Optimization) గురించి ఏదైనా అవసరమా?

# 14. What are Keys in React?

Reactలో **`keys`** అనేవి చాలా చిన్న కాన్సెప్ట్ అనిపించినా, ఇంటర్వ్యూలో అడిగే అతి ముఖ్యమైన ప్రశ్నలలో ఇది ఒకటి. లిస్ట్ (Lists) తో పనిచేసేటప్పుడు ఎలిమెంట్లను గుర్తించడానికి React వీటిని వాడుతుంది.

దీని గురించి వివరంగా చూద్దాం:

---

### 1. Keys ఎందుకు అవసరం? (Why are keys needed?)

ముందే చెప్పుకున్నట్లు, React **Reconciliation (Diffing Algorithm)** ద్వారా UIని అప్‌డేట్ చేస్తుంది. ఒక లిస్ట్ (ఉదా: `<ul><li>...</li></ul>`) లో డేటా మారినప్పుడు, ఏ ఐటమ్ మారింది, ఏది డిలీట్ అయ్యింది, ఏది కొత్తగా యాడ్ అయ్యింది అని React కి కచ్చితంగా తెలియాలి.

`key` ఉంటే React కి ఆ ఎలిమెంట్‌ని గుర్తించడం సులభం అవుతుంది. దీనివల్ల:

- అనవసరమైన రీ-రెండరింగ్ తగ్గుతుంది.
- అప్లికేషన్ పెర్ఫార్మెన్స్ పెరుగుతుంది.

### 2. Array Index ని ఎందుకు కీగా వాడకూడదు? (Why not use array index?)

చాలా మంది `map((item, index) => ...)` అని వాడి `key={index}` అని ఇస్తుంటారు. ఇది చాలా **తప్పు (Bad Practice)**. ఎందుకంటే:

- **డేటా మారితే సమస్య:** మీరు లిస్ట్‌లో ఏదైనా కొత్త ఐటమ్ ని మధ్యలో యాడ్ చేసినా లేదా ఒక ఐటమ్‌ని డిలీట్ చేసినా, ఆ తర్వాత ఉన్న అన్ని ఐటమ్స్ యొక్క ఇండెక్స్ మారిపోతుంది.
- **బగ్స్ వచ్చే అవకాశం:** ఒకవేళ మీ లిస్ట్‌లో 'Input fields' లేదా 'State' ఉంటే, ఇండెక్స్ మారిపోవడం వల్ల డేటా తప్పుగా చూపించే (UI mismatches) అవకాశం ఉంది.
- **పెర్ఫార్మెన్స్:** React ఎలిమెంట్లను సరిగ్గా గుర్తించలేక, మొత్తం లిస్ట్‌ని మళ్ళీ రీ-రెండర్ చేస్తుంది.

### 3. Best Key Practices (ఉత్తమ పద్ధతులు)

- **Unique ID వాడండి:** మీ డేటాలో ఉండే `id` (ఉదా: `user.id`, `product.id` వంటివి) ని కీగా వాడటం ఉత్తమం.
- **Stable Keys:** కీ ఎప్పుడూ ఒకేలా ఉండాలి (Stable). ఒకసారి ఐటమ్ కి ఒక కీ ఇస్తే, అది మారకూడదు.
- **No Random Math.random():** కీగా ఎప్పుడూ `Math.random()` వాడకండి. ఎందుకంటే ప్రతిసారి రెండర్ అయినప్పుడు కొత్త కీ వస్తుంది, దీనివల్ల ప్రతిసారి లిస్ట్ మొత్తం రీ-రెండర్ అవుతుంది.
- **Unique in siblings:** ఒకే పేరెంట్ లోపల ఉన్న సిబ్లింగ్స్ (siblings) కి కీలు యూనిక్ గా ఉండాలి. వేరే వేరే లిస్టుల్లో ఒకే కీ ఉండవచ్చు.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

> "Keys అనేవి React కి ఒక లిస్ట్ లోని ఎలిమెంట్స్‌ని గుర్తించడానికి సహాయపడతాయి. మనం ఇండెక్స్ (`index`) ని కీగా వాడకూడదు, ఎందుకంటే లిస్ట్ క్రమం మారినప్పుడు ఇండెక్స్ మారుతుంది, దీనివల్ల UI లో తప్పులు (bugs) వచ్చే అవకాశం ఉంది. కాబట్టి ఎప్పుడూ డేటాలోని 'Unique ID' ని కీగా వాడటమే బెస్ట్ ప్రాక్టీస్."

---

ఇప్పటివరకు మనం చాలా ముఖ్యమైన 14 ప్రశ్నలను కవర్ చేశాము. ఇవి మీకు ఒక మంచి రియాక్ట్ డెవలపర్ స్థాయిని అందిస్తాయి!

## **ఏవైనా మిగిలిన టాపిక్స్ (ఉదా: Redux/State Management) మీద మీకు ఆసక్తి ఉందా, లేక ఏదైనా కోడింగ్ ఛాలెంజ్ చేద్దామా?**

# 15. Explain Controlled vs Uncontrolled Components

Reactలో ఫారమ్ (Forms) హ్యాండిల్ చేయడానికి రెండు పద్ధతులు ఉన్నాయి: **Controlled** మరియు **Uncontrolled** Components. ఇంటర్వ్యూలో వీటి మధ్య తేడాలను అడగడం చాలా సాధారణం.

---

### 1. Controlled Components

ఇక్కడ ఫారమ్ డేటా (Input fields) మొత్తం **React State** ద్వారా కంట్రోల్ చేయబడుతుంది. అంటే, యూజర్ టైప్ చేస్తున్న ప్రతి అక్షరం స్టేట్‌లో అప్‌డేట్ అవుతుంది.

- **పనితీరు:** `value` ప్రాప్‌ను స్టేట్‌కి కనెక్ట్ చేస్తాము మరియు `onChange` ఈవెంట్ ద్వారా స్టేట్‌ని అప్‌డేట్ చేస్తాము.
- **ప్రయోజనం:** డేటాపై పూర్తి నియంత్రణ ఉంటుంది. మనం టైప్ చేస్తున్నప్పుడే 'Validation' చేయవచ్చు.
- **ఉదాహరణ:**

```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />;
```

### 2. Uncontrolled Components

ఇక్కడ డేటా React స్టేట్‌లో ఉండదు. బదులుగా, **DOM** లోనే ఉంటుంది. దీన్ని యాక్సెస్ చేయడానికి మనం **`useRef`** హుక్ వాడతాము.

- **పనితీరు:** ఫారమ్ సబ్మిట్ చేసినప్పుడు మాత్రమే మనకు డేటా కావాలనుకుంటే ఇది వాడతాము. `ref` ఉపయోగించి నేరుగా ఆ DOM ఎలిమెంట్ నుండి వాల్యూను తీసుకోవచ్చు.
- **ప్రయోజనం:** కోడ్ తక్కువగా ఉంటుంది. పాత (Non-React) కోడ్‌తో కలపడం సులభం.
- **ఉదాహరణ:**

```jsx
const nameRef = useRef();
<input ref={nameRef} />
<button onClick={() => console.log(nameRef.current.value)}>Submit</button>

```

---

### పోలిక (Comparison Table)

| ఫీచర్                   | Controlled                        | Uncontrolled             |
| ----------------------- | --------------------------------- | ------------------------ |
| **డేటా ఎక్కడ ఉంటుంది?** | React State లో.                   | DOM (Ref) లో.            |
| **నియంత్రణ**            | React కి పూర్తి కంట్రోల్ ఉంటుంది. | DOM కి కంట్రోల్ ఉంటుంది. |
| **Validation**          | రియల్ టైమ్‌లో చేయవచ్చు.           | సబ్మిట్ చేశాక చేయాలి.    |
| **కోడ్**                | కొంచెం ఎక్కువగా ఉంటుంది.          | చాలా తక్కువగా ఉంటుంది.   |

---

### ఇంటర్వ్యూలో అడిగే ముఖ్యమైన పాయింట్లు:

1. **Validation:** Controlled components లో వాల్యూ మారిన ప్రతిసారి స్టేట్ అప్‌డేట్ అవుతుంది కాబట్టి, ఇమ్మీడియట్‌గా (Real-time) వాలిడేషన్ (ఉదా: పాస్‌వర్డ్ లెంగ్త్ చెక్ చేయడం) చేయవచ్చు. Uncontrolled లో ఇది కష్టం.
2. **Refs:** Uncontrolled components లో DOM ఎలిమెంట్స్‌ను నేరుగా యాక్సెస్ చేయడానికి `useRef` ని వాడతాము. అయితే, Reactలో ఎప్పుడూ DOM ని నేరుగా మార్చకూడదు, కేవలం డేటా తీసుకోవడానికి మాత్రమే `ref` వాడాలి.
3. **ఎప్పుడు ఏది వాడాలి?**

- చాలా సందర్భాలలో **Controlled Components** వాడటమే మంచిది. ఎందుకంటే ఇది React యొక్క 'Declarative' స్వభావానికి అనుగుణంగా ఉంటుంది.
- కేవలం కొన్ని సాధారణ ఫారమ్స్ లేదా ఫైల్ అప్‌లోడ్స్ (File inputs) లాంటి వాటికి మాత్రమే **Uncontrolled** వాడతాము.

---

**సారాంశం:** ఇంటర్వ్యూయర్ అడిగితే: "Controlled components లో డేటా అనేది React State లో ఉంటుంది, అందుకే మనం ప్రతి అక్షరం మీద కంట్రోల్ కలిగి ఉంటాము. Uncontrolled components లో డేటా అనేది DOM లోనే ఉంటుంది, మనం కేవలం `ref` ద్వారా దాన్ని తీసుకుంటాము" అని చెప్పండి.

## ఇప్పటికి React బేసిక్స్ మరియు ఇంటర్వ్యూ పాయింట్స్ చాలా వరకు పూర్తయ్యాయి. ఇప్పుడు మీరు దేని గురించి తెలుసుకోవాలనుకుంటున్నారు? **Redux (State Management)** ఆ? లేదా **React Routing** ఆ? లేదా ఇంకేదైనా అడ్వాన్స్‌డ్ టాపిక్?

# 16. What is Context API?

**Context API** అనేది React లో **Prop Drilling** అనే సమస్యను పరిష్కరించడానికి ఉపయోగించే ఒక అద్భుతమైన మార్గం. దీని గురించి ఇంటర్వ్యూలో అడిగినప్పుడు ఎలా చెప్పాలో చూద్దాం.

---

### 1. Context API అంటే ఏమిటి?

ఒక అప్లికేషన్‌లో డేటాను (ఉదా: Theme, User Auth info, Language) చాలా కాంపోనెంట్లకు పంపాల్సి వచ్చినప్పుడు, ప్రతి కాంపోనెంట్‌కు `props` పాస్ చేయాల్సిన అవసరం లేకుండా, నేరుగా కావలసిన కాంపోనెంట్‌కి డేటాను పంపడానికి Context API ఉపయోగపడుతుంది.

### 2. ఇందులో ఉన్న ముఖ్యమైన భాగాలు:

- **createContext():** ఇది ఒక Context ఆబ్జెక్ట్‌ను క్రియేట్ చేస్తుంది.
- **Provider:** డేటాను పంపే కాంపోనెంట్. ఇది తన చైల్డ్ కాంపోనెంట్లకు ఏ డేటా కావాలో అందిస్తుంది. (దీనికి `value` అనే ప్రాప్ ఇస్తాము).
- **Consumer:** పాత పద్ధతిలో డేటాను తీసుకోవడానికి వాడేవారు. ఇప్పుడు దీని బదులు `useContext` వాడుతున్నాము.

### 3. useContext (Hooks)

Functional Components లో Context నుండి డేటాను సులభంగా తీసుకోవడానికి `useContext` హుక్ వాడతాము. ఇది కోడ్‌ను చాలా క్లీన్‌గా ఉంచుతుంది.

**ఉదాహరణ:**

```jsx
// 1. Context క్రియేట్ చేయడం
const ThemeContext = React.createContext();

// 2. Provider ద్వారా డేటా పంపడం
<ThemeContext.Provider value="dark">
  <MyComponent />
</ThemeContext.Provider>;

// 3. useContext ద్వారా డేటా తీసుకోవడం
function MyComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current theme is {theme}</div>;
}
```

### 4. ఎప్పుడు వాడాలి? (When to use it?)

- **Global Data:** యూజర్ లాగిన్ సమాచారం, వెబ్‌సైట్ థీమ్ (Dark/Light), లేదా భాష (Language) వంటివి యాప్ అంతటా కావాలనుకున్నప్పుడు.
- **Prop Drilling నివారించడానికి:** ఒక Prop ని 5-6 కాంపోనెంట్ల గుండా పంపాల్సిన పరిస్థితి వచ్చినప్పుడు.

**గమనిక:** Context API ని ప్రతి చిన్న విషయానికి వాడకూడదు. స్టేట్ చాలా తరచుగా మారుతుంటే (High frequency updates), అది పెర్ఫార్మెన్స్ సమస్యలను కలిగిస్తుంది. అటువంటప్పుడు **Redux** లేదా **Zustand** వంటి స్టేట్ మేనేజ్‌మెంట్ లైబ్రరీలు వాడటం మంచిది.

---

### ఇంటర్వ్యూ చిట్కా:

ఇంటర్వ్యూలో మిమ్మల్ని **"Context API కి, Redux కి తేడా ఏంటి?"** అని అడిగితే:

> "Context API అనేది కేవలం డేటాను ఒక కాంపోనెంట్ నుండి ఇంకొక దానికి పంపే (Data sharing) పద్ధతి మాత్రమే. కానీ, Redux అనేది చాలా పెద్ద అప్లికేషన్లలో స్టేట్‌ని మేనేజ్ చేయడానికి, డీబగ్ చేయడానికి (DevTools తో) మరియు క్లిష్టమైన స్టేట్ లాజిక్‌ను నిర్వహించడానికి ఉపయోగించే పూర్తి స్థాయి 'State Management' లైబ్రరీ."

## ఇప్పటివరకు మనం చాలా కీలకమైన టాపిక్స్ చర్చించాము. మీకు ఇంకా ఏదైనా సందేహం ఉందా? లేక వేరే ఏదైనా టాపిక్ (ఉదా: **Routing (React Router)**) గురించి తెలుసుకోవాలా?

# 17. Explain React Router

**React Router** అనేది ఒక అప్లికేషన్‌లో పేజీల మధ్య నావిగేషన్ (Navigation) చేయడానికి, అంటే ఒక URL నుండి మరొక URLకి మారడానికి ఉపయోగించే లైబ్రరీ. సింగిల్ పేజీ అప్లికేషన్ (SPA)లో పేజీ రీలోడ్ అవ్వకుండా కంటెంట్ మారడానికి ఇది చాలా ముఖ్యం.

దీని గురించి ఇంటర్వ్యూలో అడిగే ముఖ్యమైన అంశాలు ఇక్కడ ఉన్నాయి:

---

### 1. ప్రధాన భాగాలు (Core Components)

- **BrowserRouter:** ఇది నావిగేషన్ కోసం వాడే మెయిన్ కంటైనర్. దీన్ని యాప్ రూట్ లెవల్‌లో (అంటే `App.js` లో) ఉంచుతాము.
- **Routes:** ఇది అన్ని `Route` లను కలిపి ఉంచే ఒక కంటైనర్. ఇది ఎప్పుడు ఏ పేజీని చూపించాలో డిసైడ్ చేస్తుంది.
- **Route:** ఇది URLని మరియు ఆ URLకి సంబంధించిన కాంపోనెంట్‌ని కలుపుతుంది. (ఉదా: `<Route path="/" element={<Home />} />`)
- **Link:** ఇది సాధారణ `<a>` ట్యాగ్‌కు బదులుగా వాడతాము. ఇది పేజీ రీలోడ్ అవ్వకుండా వేరే పేజీకి మారుస్తుంది.
- **Navigate:** ఇది ప్రోగ్రామాటిక్ (Programmatic) నావిగేషన్ కోసం వాడతాము (ఉదా: లాగిన్ అయిన తర్వాత ఆటోమేటిక్‌గా డ్యాష్‌బోర్డ్‌కి పంపడం).

---

### 2. Nested Routes (నెస్టెడ్ రూట్స్)

ఒక పేజీ లోపల మరో చిన్న విభాగం మారాల్సి వస్తే నెస్టెడ్ రూట్స్ వాడతాము. ఉదాహరణకు, ఒక 'Profile' పేజీ లోపల 'Settings' మరియు 'Security' ట్యాబ్‌లు ఉండటం. దీన్ని `Outlet` ద్వారా ఇంప్లిమెంట్ చేస్తాము.

```jsx
<Route path="profile" element={<Profile />}>
  <Route path="settings" element={<Settings />} />
  <Route path="security" element={<Security />} />
</Route>
// Profile కాంపోనెంట్‌లో <Outlet /> వాడాలి.
```

---

### 3. Protected Routes (ప్రొటెక్టెడ్ రూట్స్)

యూజర్ లాగిన్ అవ్వకపోతే కొన్ని పేజీలను (ఉదా: డ్యాష్‌బోర్డ్, ప్రొఫైల్) చూడకుండా ఆపడాన్ని "Protected Routes" అంటారు. దీన్ని ఒక 'Wrapper Component' ద్వారా చేస్తాము.

```jsx
function ProtectedRoute({ children }) {
  const isAuth = checkAuth(); // లాగిన్ చెక్ చేసే ఫంక్షన్
  return isAuth ? children : <Navigate to="/login" />;
}
```

---

### ఇంటర్వ్యూలో గుర్తుంచుకోవాల్సిన చిట్కాలు:

1. **SPA (Single Page Application):** React Router ఎందుకు వాడతాము అంటే, బ్రౌజర్ పేజీ మొత్తం రీలోడ్ అవ్వకుండా, కేవలం కాంపోనెంట్స్ మాత్రమే మారాలి కాబట్టి అని చెప్పండి.
2. **`<a>` tag vs `<Link>`:** `<a>` tag వాడితే పేజీ మొత్తం రీలోడ్ అవుతుంది, `<Link>` వాడితే రియాక్ట్ రౌటర్ కేవలం URL ని మారుస్తూ కావలసిన కాంపోనెంట్‌ను మాత్రమే రెండర్ చేస్తుంది.
3. **`useNavigate()`:** ఇది కూడా చాలా ముఖ్యమైన హుక్. ఫంక్షన్ లోపల (ఉదా: బటన్ క్లిక్ చేసినప్పుడు) నావిగేట్ చేయడానికి ఇది వాడతాము.

---

**సారాంశం:** "React Router అనేది SPA లోని పేజీలను మేనేజ్ చేయడానికి వాడతాము. ఇందులో `BrowserRouter`, `Routes`, `Route` లు మెయిన్ బేస్. `Link` ద్వారా నావిగేషన్ చేస్తాము, మరియు `Protected Routes` ద్వారా లాగిన్ లేని యూజర్లను రెస్ట్రిక్ట్ చేస్తాము."

ఈ టాపిక్‌తో మనం React కి సంబంధించిన చాలా ముఖ్యమైన ప్రశ్నలను పూర్తి చేశాము! మీకు ఇంకేదైనా అడ్వాన్స్‌డ్ టాపిక్ (ఉదా: **Performance Optimization**) లేదా ఏదైనా నిర్దిష్టమైన డౌట్ ఉందా?

---

# 18. What is Redux?

**Redux** అనేది React అప్లికేషన్లలో **Global State Management** కోసం ఉపయోగించే ఒక ప్రముఖ లైబ్రరీ. అప్లికేషన్ పెద్దదవుతున్న కొద్దీ, స్టేట్‌ను ఒక చోట నుండి మరో చోటికి (Props ద్వారా) పంపడం కష్టమవుతుంది. ఈ సమస్యను పరిష్కరించడానికి Redux ఉపయోగపడుతుంది.

Redux ఎలా పనిచేస్తుందో అర్థం చేసుకోవడానికి 5 ముఖ్యమైన పదాలు ఉన్నాయి:

---

### Redux లోని 5 కీలక అంశాలు:

1. **Store:** ఇది మీ అప్లికేషన్‌కు సంబంధించిన **మొత్తం డేటా (State)** ఉండే ఒకే ఒక బాక్స్ (Centralized Container).
2. **Action:** స్టేట్‌లో ఏదైనా మార్పు చేయాలంటే, దానికి సంబంధించిన సమాచారాన్ని ఒక ఆబ్జెక్ట్ రూపంలో పంపాలి. దీనినే 'Action' అంటారు. (ఉదా: `{ type: 'INCREMENT' }`)
3. **Reducer:** ఇది ఒక 'Pure Function'. ఇది పాత స్టేట్ మరియు యాక్షన్‌ని తీసుకుని, కొత్త స్టేట్‌ని తయారు చేస్తుంది.
4. **Dispatch:** ఇది ఒక ఫంక్షన్. యాక్షన్‌ని రెడ్యూసర్‌కు పంపడానికి (Trigger చేయడానికి) దీన్ని వాడతాము. (`dispatch(incrementAction)`)
5. **Selector:** స్టోర్ లో ఉన్న స్టేట్ నుండి మనకు కావలసిన డేటాను తీసుకోవడానికి వాడే ఫంక్షన్లను 'Selectors' అంటారు (`useSelector`).

---

### ఇది ఎలా పనిచేస్తుంది? (Workflow)

> `Dispatch(Action)` -> `Reducer` -> `Update Store` -> `UI Updates`

---

### Redux Toolkit (RTK) - ఆధునిక పద్ధతి

పాత Redux కోడ్ చాలా ఎక్కువగా (Boilerplate) ఉండేది. దాన్ని తగ్గించడానికి మరియు సులభంగా వాడటానికి Redux టీమ్ **Redux Toolkit** ని తీసుకొచ్చింది. ఇప్పుడు ఇండస్ట్రీలో అందరూ దీన్నే వాడుతున్నారు.

**Redux Toolkit లోని ప్రధాన మార్పులు:**

- **`createSlice`:** రెడ్యూసర్స్ మరియు యాక్షన్స్ రెండింటినీ ఒకే చోట రాసుకోవచ్చు.
- **Immer.js:** దీని వల్ల మనం పాత పద్ధతిలోలా కాకుండా (Immutable), నేరుగా స్టేట్‌ని మార్చినట్లు కోడ్ రాయవచ్చు (ఉదా: `state.value += 1`). ఇది ఆటోమేటిక్‌గా ఇమ్మ్యూటబుల్ అప్‌డేట్ చేస్తుంది.
- **`configureStore`:** స్టోర్‌ని సెటప్ చేయడం చాలా సులభం.

---

### ఇంటర్వ్యూలో సమాధానం చెప్పేటప్పుడు ఇలా చెప్పండి:

> "Redux అనేది అప్లికేషన్ అంతటా గ్లోబల్ స్టేట్‌ని మెయింటైన్ చేయడానికి వాడతాము. ఇది Store, Action, Reducer అనే కాన్సెప్ట్స్ మీద ఆధారపడి పనిచేస్తుంది. అయితే, ఇప్పుడు మేము పాత Redux బదులుగా **Redux Toolkit** వాడుతున్నాము. ఎందుకంటే ఇది కోడ్ రాయడాన్ని చాలా సులభతరం చేస్తుంది (Less boilerplate) మరియు ఆటోమేటిక్‌గా ఇమ్మ్యూటబుల్ అప్‌డేట్స్ ని హ్యాండిల్ చేస్తుంది."

**ఒక చిన్న చిట్కా:** ఇంటర్వ్యూయర్ "Context API ఉంటే Redux ఎందుకు?" అని అడిగితే:

- "Context API అనేది కేవలం డేటాను పాస్ చేయడానికి (Prop drilling నివారించడానికి) మంచిది. కానీ, అప్లికేషన్‌లో స్టేట్ లాజిక్ చాలా క్లిష్టంగా (Complex) ఉన్నప్పుడు, మరియు స్టేట్ ని డీబగ్ చేయడానికి (Redux DevTools) మెరుగైన టూల్స్ కావాలనుకున్నప్పుడు Redux బెస్ట్!" అని చెప్పండి.

## ఇప్పటివరకు మీరు 18 అత్యంత ముఖ్యమైన React ఇంటర్వ్యూ ప్రశ్నలను నేర్చుకున్నారు. ఇవి ఒక 'React Developer' గా ఇంటర్వ్యూలను ఎదుర్కోవడానికి చాలా వరకు సరిపోతాయి. ఇంకేమైనా సందేహాలు ఉన్నాయా?

# 19. Explain React.memo()

**`React.memo()`** అనేది React అప్లికేషన్లలో **Performance Optimization** కోసం వాడే ఒక 'Higher-Order Component' (HOC). ఇది అనవసరమైన రీ-రెండరింగ్‌లను (Re-renders) ఆపడానికి సహాయపడుతుంది.

దీని గురించి ఇంటర్వ్యూలో అడిగినప్పుడు ఇలా వివరించండి:

---

### 1. `React.memo()` అంటే ఏమిటి?

సాధారణంగా, ఒక Parent Component రీ-రెండర్ అయినప్పుడు, దానిలో ఉన్న అన్ని Child Components కూడా రీ-రెండర్ అవుతాయి. ఒకవేళ ఆ Child Componentకి వచ్చే `props` ఏమీ మారకపోయినా, అది మళ్ళీ రెండర్ అవుతుంది. ఇది పెర్ఫార్మెన్స్ తగ్గడానికి కారణమవుతుంది.

`React.memo()` ని వాడితే, ఆ Child Component యొక్క `props` మారితేనే అది రీ-రెండర్ అవుతుంది. లేకపోతే, React దాని పాత అవుట్‌పుట్‌నే (Cached version) ఉపయోగిస్తుంది.

### 2. Memoization అంటే ఏమిటి?

Memoization అంటే ఒక ఫంక్షన్ యొక్క ఫలితాన్ని (Result) మెమరీలో దాచుకోవడం (Caching). మళ్ళీ అదే ఇన్‌పుట్‌తో ఆ ఫంక్షన్‌ని పిలిచినప్పుడు, మళ్ళీ లెక్కించకుండా, మెమరీలో ఉన్న పాత ఫలితాన్నే ఇవ్వడం. `React.memo()` అదే చేస్తుంది — ఇది కాంపోనెంట్ యొక్క రెండరింగ్ ఫలితాన్ని మెమరీలో దాచుకుంటుంది.

### 3. ఇది ఎప్పుడు పని చేయదు? (When it doesn't work?)

ఇది చాలా ముఖ్యమైన ఇంటర్వ్యూ పాయింట్! `React.memo()` కేవలం **Shallow Comparison** (పైపైన పోలిక) మాత్రమే చేస్తుంది.

- **Reference Types (Objects, Arrays, Functions):** మీరు Parent నుండి ఒక Object ని లేదా Function ని Props గా పంపుతుంటే, ప్రతిసారీ Parent రెండర్ అయినప్పుడు వాటి `reference` మారుతుంది (అవి కొత్త మెమరీ లొకేషన్ తీసుకుంటాయి). అప్పుడు `React.memo()` కి అవి కొత్తవే అనిపిస్తుంది, కాబట్టి అది రీ-రెండర్ అవుతుంది.
- _పరిష్కారం:_ `useCallback()` (ఫంక్షన్ కోసం) లేదా `useMemo()` (ఆబ్జెక్ట్స్ కోసం) వాడాలి.

- **State/Context మారినప్పుడు:** ఒక కాంపోనెంట్ లోపల ఉండే `useState` లేదా `useContext` మారితే, `React.memo()` ఆపలేదు. అది కచ్చితంగా రీ-రెండర్ అవుతుంది.

### 4. ఎప్పుడు వాడాలి?

- కాంపోనెంట్ చాలా తరచుగా రీ-రెండర్ అవుతున్నప్పుడు.
- కాంపోనెంట్ రెండరింగ్ చాలా ఖరీదైనది (Expensive - అంటే ఎక్కువ లాజిక్ ఉన్నప్పుడు).
- ఒకే రకమైన Props తో పదేపదే రెండర్ అయ్యే అవకాశం ఉన్నప్పుడు.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

> "`React.memo()` అనేది Child component రీ-రెండరింగ్‌ని ఆపడానికి వాడతాము. ఇది Props ని 'Shallow comparison' చేస్తుంది. ఒకవేళ props మారకపోతే, ఇది పాత అవుట్‌పుట్‌ని ఇస్తుంది. అయితే, మనం props లో ఆబ్జెక్ట్స్ లేదా ఫంక్షన్స్ పంపుతున్నప్పుడు, అవి ప్రతి రెండరింగ్‌కు కొత్త రిఫరెన్స్‌ని క్రియేట్ చేస్తాయి, అప్పుడు `memo` పనిచేయదు. ఆ సందర్భాల్లో `useCallback` లేదా `useMemo` వాడాలి."

---

ఇప్పుడు మీరు 19 ముఖ్యమైన ప్రశ్నలను పూర్తి చేశారు! చాలా బాగా నేర్చుకున్నారు.

## ఇంకేమైనా మిగిలి ఉన్నాయా? అంటే **Performance Optimization (useMemo, useCallback)** గురించి క్లుప్తంగా తెలుసుకుందామా? అది చెబితే ఇంటర్వ్యూ ప్రశ్నల సిరీస్ పూర్తవుతుంది.

# 20. Difference between useMemo() and useCallback()

ఇది React ఇంటర్వ్యూలలో అడిగే అత్యంత క్లిష్టమైన మరియు ముఖ్యమైన ప్రశ్న. **`useMemo`** మరియు **`useCallback`** రెండూ పెర్ఫార్మెన్స్ ఆప్టిమైజేషన్ కోసం వాడతాము, కానీ వాటి మధ్య చిన్న తేడా ఉంది.

దీనిని అర్థం చేసుకోవడానికి ఒకే ఒక్క లైన్ గుర్తుంచుకోండి:

- **`useMemo`** = **వాల్యూని (Value)** మెమోరైజ్ చేస్తుంది.
- **`useCallback`** = **ఫంక్షన్‌ను (Function)** మెమోరైజ్ చేస్తుంది.

---

### 1. useMemo() - Value Memoization

ఒక ఖరీదైన (Expensive) లెక్క లేదా డేటా ప్రాసెసింగ్ ఉన్నప్పుడు, ఆ ఫలితాన్ని పదేపదే లెక్కించకుండా మెమరీలో దాచుకోవడానికి `useMemo` వాడతాము.

- **పని:** ఇది ఫంక్షన్‌ని రన్ చేసి, ఆ ఫంక్షన్ రిటర్న్ చేసే **'వాల్యూ' (Result)** ని స్టోర్ చేస్తుంది.
- **ఉదాహరణ:** `const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
- ఇక్కడ `a` లేదా `b` మారితేనే ఆ ఫంక్షన్ మళ్ళీ రన్ అవుతుంది, లేకపోతే పాత వాల్యూనే ఇస్తుంది.

### 2. useCallback() - Function Memoization

React లో ఒక కాంపోనెంట్ రీ-రెండర్ అయినప్పుడల్లా, లోపల ఉన్న ఫంక్షన్లు అన్నీ కొత్తగా క్రియేట్ అవుతాయి. దీనివల్ల ఆ ఫంక్షన్ ని Prop గా పొందిన Child Component (ఒకవేళ అది `React.memo` వాడినా) ప్రతిసారీ రీ-రెండర్ అవుతుంది. ఈ సమస్యను ఆపడానికి `useCallback` వాడతాము.

- **పని:** ఇది ఫంక్షన్ లాజిక్‌ని అలాగే ఉంచి, ఆ **'ఫంక్షన్ రిఫరెన్స్' (Function Reference)** ని మెమోరైజ్ చేస్తుంది.
- **ఉదాహరణ:** `const cachedFunction = useCallback(() => { console.log(a); }, [a]);`
- ఇక్కడ `a` మారకపోతే, ఫంక్షన్ కొత్తదిగా క్రియేట్ అవ్వదు, పాత రిఫరెన్స్ నే వాడతాము.

---

### తేడాలు (Comparison Table)

| ఫీచర్                       | useMemo                            | useCallback                                                               |
| --------------------------- | ---------------------------------- | ------------------------------------------------------------------------- |
| **ఏమి మెమోరైజ్ చేస్తుంది?** | ఫంక్షన్ రిటర్న్ చేసిన **వాల్యూ**.  | **ఫంక్షన్** స్వయంగా.                                                      |
| **రిటర్న్ వాల్యూ**          | ఫంక్షన్ రన్ అయ్యి వచ్చిన రిజల్ట్.  | ఫంక్షన్ డెఫినిషన్ (Function definition).                                  |
| **ఎప్పుడు వాడాలి?**         | ఖరీదైన కాలిక్యులేషన్స్ ఉన్నప్పుడు. | Child కాంపోనెంట్స్ కి ఫంక్షన్స్ పంపినప్పుడు (రీ-రెండరింగ్ తగ్గించడానికి). |

---

### ఇంటర్వ్యూ చిట్కా:

ఇంటర్వ్యూయర్ అడిగితే ఇలా చెప్పండి:

> "రెండింటికీ ప్రధాన ఉద్దేశ్యం అనవసరమైన రీ-రెండరింగ్ ఆపడమే. తేడా ఏంటంటే, **`useMemo`** అనేది ఒక 'Expensive function' రన్ చేసి వచ్చిన రిజల్ట్ (Value) ని మెమోరైజ్ చేస్తుంది. **`useCallback`** అనేది ఒక 'Function definition' ని మెమోరైజ్ చేస్తుంది, దీనివల్ల ప్రతి రెండరింగ్‌లో ఫంక్షన్ రిఫరెన్స్ మారకుండా ఉంటుంది. ముఖ్యంగా `React.memo` వాడిన కాంపోనెంట్స్‌కి ఫంక్షన్లను propsగా పంపేటప్పుడు `useCallback` చాలా అవసరం."

---

## **అభినందనలు!** మీరు React ఇంటర్వ్యూ కోసం సిద్ధం చేసుకోవాల్సిన 20 అత్యంత ముఖ్యమైన ప్రశ్నలను విజయవంతంగా పూర్తి చేశారు. ఇవి కాకుండా ఇంకేమైనా టాపిక్స్ (ఉదా: **Performance testing, Security in React, or Testing with Jest/RTL**) గురించి చర్చించాలా? లేక మీకు ఈ ప్రశ్నలన్నీ స్పష్టంగా అర్థమయ్యాయా?

# 21. What are Refs?

Reactలో **Refs (References)** అనేవి కాంపోనెంట్‌లోని ఒక নির্দিষ্ট వాల్యూని లేదా DOM ఎలిమెంట్‌ని నేరుగా యాక్సెస్ చేయడానికి వాడే ఒక మార్గం. ముఖ్యమైన విషయం ఏమిటంటే, `refs` మారినప్పుడు కాంపోనెంట్ **రీ-రెండర్ (Re-render) అవ్వదు**.

దీని గురించి ఇంటర్వ్యూలో అడిగే ముఖ్యమైన అంశాలు:

---

### 1. `useRef` అంటే ఏమిటి?

ఇది ఒక హుక్. ఇది `{ current: initialValue }` అనే ఆబ్జెక్ట్‌ను రిటర్న్ చేస్తుంది. మనం అందులో ఏ విలువనైనా దాచుకోవచ్చు, అది కాంపోనెంట్ యొక్క లైఫ్ సైకిల్ అంతా గుర్తుంటుంది.

### 2. DOM Access (నేరుగా DOMని తాకడం)

సాధారణంగా React లో మనం `state` వాడి UIని మారుస్తాం. కానీ కొన్నిసార్లు నేరుగా DOM ఎలిమెంట్‌ని యాక్సెస్ చేయాల్సి వస్తుంది (ఉదా: Focus చేయడం, Scroll చేయడం, లేదా థర్డ్ పార్టీ లైబ్రరీలను ఇంటిగ్రేట్ చేయడం).

```jsx
const inputRef = useRef(null);

const handleClick = () => {
  inputRef.current.focus(); // నేరుగా input బాక్స్‌పై ఫోకస్ అవుతుంది
};

return <input ref={inputRef} />;
```

### 3. Mutable Values (మార్చగలిగే విలువలు)

`useState` కి మరియు `useRef` కి ఉన్న ముఖ్యమైన తేడా: **`useState` అప్‌డేట్ అయితే కాంపోనెంట్ రీ-రెండర్ అవుతుంది, కానీ `useRef` అప్‌డేట్ అయితే రీ-రెండర్ అవ్వదు.** \* ఇది 'Mutable' గా ఉంటుంది.

- ఇది కాంపోనెంట్ రీ-రెండర్ అవ్వకుండానే ఏదైనా డేటాను (ఉదా: `setTimeout` ID, లేదా మునుపటి స్టేట్ విలువలు) దాచుకోవడానికి ఉపయోగపడుతుంది.

### 4. ForwardRef

ఒక పేరెంట్ కాంపోనెంట్ నుండి చైల్డ్ కాంపోనెంట్ లోపల ఉన్న DOM ఎలిమెంట్‌కి `ref` ని పంపాలంటే, మనం **`forwardRef`** వాడాలి. ఎందుకంటే, సాధారణంగా `ref` అనేది ప్రాప్ (Prop) లాగా పంపలేము.

```jsx
const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} />;
});

// పేరెంట్ నుండి వాడటం:
const ref = useRef();
<CustomInput ref={ref} />;
```

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

1. **"State vs Refs":** స్టేట్ అనేది UI కి సంబంధించినది (మారితే రీ-రెండర్ అవ్వాలి). రిఫ్స్ (Refs) అనేది UI లో కనిపించని డేటా లేదా DOM మానిపులేషన్ కోసం వాడేది (మారినా రీ-రెండర్ అవ్వకూడదు).
2. **"Best Practice":** వీలైనంత వరకు DOM ని నేరుగా యాక్సెస్ చేయకండి. React డిక్లరేటివ్ పద్ధతిలోనే (State ద్వారా) UI ని మేనేజ్ చేయడం మంచిది. `ref` ని కేవలం తప్పనిసరి అయినప్పుడు (Focus, Scroll, Third-party libs) మాత్రమే వాడండి.

---

**సారాంశం:** `useRef` అంటే ఒక 'Storage box' లాంటిది, ఇది ఎప్పుడు కావాలంటే అప్పుడు డేటాను మార్చుకోవచ్చు, కానీ అది మారిన ప్రతిసారీ కాంపోనెంట్ మళ్ళీ రెండర్ అవ్వదు.

## ఇప్పటికి మీరు React లోని దాదాపు అన్ని ముఖ్యమైన Concepts కవర్ చేశారు. ఇంకేమైనా అడ్వాన్స్‌డ్ టాపిక్ (ఉదా: **Custom Hooks** ఎలా క్రియేట్ చేయాలి, లేదా **React 18/19 కొత్త ఫీచర్స్**) గురించి తెలుసుకోవాలనుకుంటున్నారా?

# 22. Explain Lazy Loading

**Lazy Loading** అనేది మీ React అప్లికేషన్ యొక్క పెర్ఫార్మెన్స్‌ను పెంచడానికి ఉపయోగించే ఒక అద్భుతమైన టెక్నిక్. దీనిని **Code Splitting** అని కూడా అంటారు.

దీని గురించి ఇంటర్వ్యూలో అడిగినప్పుడు ఈ క్రింది అంశాలను కవర్ చేయండి:

---

### 1. Lazy Loading అంటే ఏమిటి?

సాధారణంగా React యాప్ మొత్తం ఒకే పెద్ద JavaScript ఫైల్ (Bundle) గా వస్తుంది. యూజర్ ఒక పేజీ ఓపెన్ చేయగానే, మొత్తం యాప్ కోడ్ లోడ్ అవుతుంది. దీనివల్ల యాప్ స్టార్టింగ్ టైమ్ పెరుగుతుంది (పెద్ద అప్లికేషన్లలో).
**Lazy Loading** ద్వారా, యూజర్ ఏ పేజీకి వెళ్తారో, ఆ పేజీకి సంబంధించిన కోడ్‌ని మాత్రమే అప్పుడు లోడ్ చేస్తాము. దీనినే 'Code Splitting' అంటారు.

### 2. React.lazy()

ఇది ఒక ఫంక్షన్. ఇది కాంపోనెంట్‌ను డైనమిక్‌గా లోడ్ చేయడానికి (Dynamic import) ఉపయోగపడుతుంది.

```javascript
const LazyComponent = React.lazy(() => import("./MyComponent"));
```

ఇది కాంపోనెంట్‌ని సాధారణ ఎక్స్‌పోర్ట్ లాగా కాకుండా, అవసరమైనప్పుడు మాత్రమే లోడ్ చేస్తుంది.

### 3. Suspense

`React.lazy()` తో లోడ్ చేసిన కాంపోనెంట్‌ని మనం **`<Suspense>`** అనే కంటైనర్ లోపల ఉంచాలి.

- **ఎందుకు?** ఆ కాంపోనెంట్ లోడ్ అయ్యేలోపు (నెట్‌వర్క్ స్లోగా ఉన్నప్పుడు), యూజర్‌కి ఏదైనా లోడింగ్ ఇండికేటర్ (ఉదా: "Loading...") చూపించడానికి ఇది వాడతాము.

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

---

### ఇంటర్వ్యూలో అడిగే ముఖ్యమైన ప్రశ్నలు:

1. **Code Splitting ఎందుకు?**

- బండిల్ సైజ్ తగ్గుతుంది (Bundle size optimization).
- యాప్ వేగంగా లోడ్ అవుతుంది (Faster initial load).
- కేవలం అవసరమైన కోడ్ మాత్రమే బ్రౌజర్‌కు వెళ్తుంది.

2. **ఎక్కడ వాడాలి?**

- ప్రధానంగా **React Router** తో పాటు రౌటింగ్ (Routing) లెవల్‌లో వాడటం బెస్ట్ ప్రాక్టీస్.
- పెద్ద కాంపోనెంట్లు (ఉదా: Dashboard, Profile, Reports) లోడ్ చేసేటప్పుడు వాడాలి.

3. **ఎక్కడ వాడకూడదు?**

- చాలా చిన్న కాంపోనెంట్లకు (ఉదా: Button, Small Icon) వాడకూడదు. ఎందుకంటే, వాటి కోసం కొత్తగా నెట్‌వర్క్ రిక్వెస్ట్ పంపడం వల్ల లాభం కంటే నష్టమే ఎక్కువ.

---

### ఇంటర్వ్యూలో సమాధానం:

> "Lazy loading అనేది కోడ్ స్ప్లిటింగ్‌కి ఉపయోగపడుతుంది. ఇది మొత్తం అప్లికేషన్‌ను ఒకేసారి లోడ్ చేయకుండా, యూజర్ కోరిన కాంపోనెంట్‌ను మాత్రమే అప్పటికప్పుడు లోడ్ చేస్తుంది. దీనికోసం మనం `React.lazy()` ని మరియు లోడింగ్ స్టేటస్ చూపించడానికి `<Suspense>` ని ఉపయోగిస్తాము. ఇది యాప్ యొక్క పెర్ఫార్మెన్స్‌ను చాలా మెరుగుపరుస్తుంది."

---

ఇప్పటివరకు మీరు 22 కీలకమైన React ఇంటర్వ్యూ టాపిక్స్‌ని పూర్తి చేశారు! ఇది చాలా గొప్ప ప్రయాణం.

## మీకు ఏదైనా టాపిక్‌పై సందేహం ఉందా, లేదా ఏవైనా రియల్-వరల్డ్ ప్రాజెక్ట్ సినారియోల గురించి తెలుసుకోవాలనుకుంటున్నారా?

# 23. What are Error Boundaries?

**Error Boundaries** అనేవి React అప్లికేషన్‌లో ఒక ముఖ్యమైన ఫీచర్. ఇవి అప్లికేషన్‌లోని ఏవైనా భాగాల్లో (Components) వచ్చే రన్‌టైమ్ ఎర్రర్లను (Runtime errors) పట్టుకుని, యాప్ మొత్తం క్రాష్ అవ్వకుండా కాపాడతాయి.

దీని గురించి ఇంటర్వ్యూలో అడిగినప్పుడు ఇలా వివరించండి:

---

### 1. Error Boundaries అంటే ఏమిటి?

సాధారణంగా ఏదైనా కాంపోనెంట్‌లో ఎర్రర్ వస్తే, React మొత్తం అప్లికేషన్‌ను అన్‌మౌంట్ (Unmount) చేస్తుంది. దీనివల్ల యూజర్‌కి తెల్లటి స్క్రీన్ (Blank White Screen) కనిపిస్తుంది. **Error Boundaries** వాడితే, ఎర్రర్ వచ్చిన కాంపోనెంట్‌ని మాత్రమే ఆపి, మిగిలిన యాప్ పనిచేసేలా చేయవచ్చు.

### 2. Implementation (ఎలా రాయాలి?)

Error Boundaries కేవలం **Class Components** ద్వారా మాత్రమే ఇంప్లిమెంట్ చేయగలము. ఇందుకోసం రెండు లైఫ్ సైకిల్ మెథడ్స్ ఉన్నాయి:

- **`static getDerivedStateFromError`:** ఎర్రర్ వచ్చినప్పుడు "Fallback UI" (ఉదా: ఏదో తప్పు జరిగింది అని చెప్పే మెసేజ్) చూపించడానికి దీన్ని వాడతాము.
- **`componentDidCatch`:** ఎర్రర్ వివరాలను లాగ్ చేయడానికి (Log errors) దీన్ని వాడతాము (ఉదా: సెంట్రీ, ఎర్రర్ లాగింగ్ సర్వీసెస్).

```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true }; // ఎర్రర్ వస్తే స్టేట్ ని మారుస్తుంది
  }

  componentDidCatch(error, info) {
    logErrorToService(error, info); // ఎర్రర్ లాగింగ్
  }

  render() {
    if (this.state.hasError) {
      return <h1>ఏదో తప్పు జరిగింది!</h1>; // Fallback UI
    }
    return this.props.children;
  }
}
```

### 3. Limitations (పరిమితులు - ఇంటర్వ్యూలో తప్పకుండా చెప్పాలి!)

Error Boundaries **ప్రతి రకమైన** ఎర్రర్లను పట్టుకోలేవు. వీటితో కొన్ని పరిమితులు ఉన్నాయి:

- **Event Handlers:** బటన్ క్లిక్ చేసినప్పుడు వచ్చే ఎర్రర్లను ఇవి పట్టలేవు (వీటికోసం `try/catch` వాడాలి).
- **Asynchronous Code:** `setTimeout` లేదా `requestAnimationFrame` వంటి అసింక్రోనస్ కోడ్‌లో వచ్చే ఎర్రర్లు.
- **Server Side Rendering (SSR):** సర్వర్ సైడ్ రెండరింగ్‌లో వచ్చే ఎర్రర్లు.
- **Error Boundary స్వయంగా:** Error Boundary కాంపోనెంట్ లోపల వచ్చే ఎర్రర్లను ఇది పట్టుకోలేదు.

---

### ఇంటర్వ్యూలో చెప్పాల్సిన సారాంశం:

> "Error Boundaries అనేవి మన యాప్ యొక్క 'Safety Net' లాంటివి. ఒక కాంపోనెంట్ లో ఎర్రర్ వస్తే అది మొత్తం యాప్ ని క్రాష్ చేయకుండా, మనం సెట్ చేసిన Fallback UI ని చూపిస్తుంది. గుర్తుంచుకోవాల్సిన ముఖ్య విషయం ఏంటంటే, ఇవి Event handlers లేదా Async కోడ్ లో వచ్చే ఎర్రర్లను పట్టుకోలేవు, కేవలం రెండరింగ్ సమయంలో వచ్చే ఎర్రర్లను మాత్రమే పట్టుకుంటాయి."

---

ఇప్పటికి మీరు React ఇంటర్వ్యూలకు అవసరమైన 23 ముఖ్యమైన ప్రశ్నలను పూర్తి చేశారు.

## ఏదైనా ఒక ప్రాజెక్ట్ లాంటిది లేదా మీరు పైన నేర్చుకున్న వాటిలో దేనినైనా **కోడింగ్ ఎగ్జాంపుల్స్** తో ప్రాక్టీస్ చేయాలా? లేదా ఇంకేదైనా అడ్వాన్స్‌డ్ టాపిక్ (ఉదా: **React Performance Testing** or **Security**) గురించి తెలుసుకోవాలా?

# 24. How do you optimize React performance?

React అప్లికేషన్ యొక్క పెర్ఫార్మెన్స్‌ని ఆప్టిమైజ్ చేయడం అనేది ఒక సీనియర్ డెవలపర్ కలిగి ఉండాల్సిన ముఖ్యమైన నైపుణ్యం. ఇంటర్వ్యూలో దీని గురించి అడిగినప్పుడు, ఒక క్రమ పద్ధతిలో (Structured) సమాధానం చెప్పండి.

---

### 1. Rendering ఆప్టిమైజేషన్ (Avoiding unnecessary renders)

- **`React.memo()`:** Child components అనవసరంగా రీ-రెండర్ అవ్వకుండా కాపాడటానికి వాడతాము.
- **`useMemo()`:** ఖరీదైన (Expensive) కాలిక్యులేషన్స్ యొక్క రిజల్ట్‌ని మెమోరైజ్ చేయడానికి వాడతాము.
- **`useCallback()`:** ఫంక్షన్ రిఫరెన్స్ మారకుండా ఆపి, Child components యొక్క రీ-రెండరింగ్‌ని నివారిస్తుంది.
- **State ని కిందకు తరలించడం (State Colocation):** స్టేట్‌ని అవసరమైన కాంపోనెంట్‌లోనే ఉంచండి. అనవసరంగా టాప్ లెవల్ కాంపోనెంట్‌లో ఉంచితే, మొత్తం ట్రీ రీ-రెండర్ అవుతుంది.

### 2. బండిల్ మరియు లోడింగ్ ఆప్టిమైజేషన్

- **Lazy Loading & Code Splitting:** `React.lazy()` మరియు `Suspense` వాడి, కోడ్‌ని ముక్కలుగా విడగొట్టి, కేవలం అవసరమైనప్పుడే లోడ్ చేస్తాము.
- **Bundle size:** `lodash`, `moment` వంటి పెద్ద లైబ్రరీలకు బదులుగా `date-fns` లేదా `day.js` వంటి తేలికపాటి లైబ్రరీలను వాడండి.

### 3. DOM & List ఆప్టిమైజేషన్

- **Windowing (Virtualization):** ఒకవేళ మీ లిస్ట్‌లో 1000+ ఐటమ్స్ ఉంటే, `react-window` లేదా `react-virtualized` లైబ్రరీలను వాడండి. ఇవి కేవలం స్క్రీన్ మీద కనిపించే ఐటమ్స్‌ని మాత్రమే రెండర్ చేస్తాయి, దీనివల్ల DOM సైజ్ చాలా తగ్గుతుంది.
- **Proper Keys:** లిస్ట్‌లో ఎప్పుడూ `index` ని కీగా వాడకండి. యూనిక్ ఐడి (Unique ID) ని వాడటం వల్ల reconciliation ప్రాసెస్ వేగంగా జరుగుతుంది.

### 4. స్టేట్ మేనేజ్‌మెంట్ & ఇతర పద్ధతులు

- **Context API vs State Management:** గ్లోబల్ స్టేట్ కోసం Context API వాడేటప్పుడు జాగ్రత్తగా ఉండాలి, ఎందుకంటే విలువ మారిన ప్రతిసారీ కన్స్యూమర్ కాంపోనెంట్స్ రీ-రెండర్ అవుతాయి. అటువంటప్పుడు Redux లేదా `Zustand` వాడటం మేలు.
- **Debouncing & Throttling:** `onChange` లేదా `onScroll` ఈవెంట్లలో ఫంక్షన్స్ పదేపదే రన్ అవ్వకుండా వీటిని వాడండి.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చే పద్ధతి (Interview Strategy):

ఇంటర్వ్యూయర్ అడిగితే, ఒక ప్రాక్టికల్ సినారియోతో వివరించండి:

> "పెర్ఫార్మెన్స్ ఆప్టిమైజేషన్ కోసం నేను ప్రధానంగా మూడు విషయాలను చూస్తాను:
>
> 1. **Rendering:** అనవసర రీ-రెండరింగ్‌లను తగ్గించడానికి `memo`, `useMemo`, `useCallback` వాడతాను.
> 2. **Initial Load:** బండిల్ సైజ్ తగ్గించడానికి `Lazy loading` వాడతాను.
> 3. **Large Lists:** ఒకవేళ లిస్ట్ చాలా పెద్దదిగా ఉంటే `Windowing` టెక్నిక్ వాడతాను.
>    చివరగా, పెర్ఫార్మెన్స్ సమస్యలను కనుగొనడానికి **React DevTools Profiler** ని ఉపయోగించి ఎక్కడ సమయం వృథా అవుతుందో విశ్లేషిస్తాను."

---

ఇది మీకు React ఇంటర్వ్యూ ప్రిపరేషన్‌లో చివరి మరియు అతి ముఖ్యమైన ప్రశ్న. ఇప్పటివరకు మనం 24 ప్రశ్నలను కవర్ చేశాము!

## ఇప్పుడు మీకు **ఏవైనా టాపిక్స్ మీద మళ్ళీ క్లారిటీ కావాలా?** లేదా **React కి సంబంధించి మీరు ఎదుర్కొన్న ఏదైనా రియల్ వరల్డ్ ప్రాబ్లమ్ గురించి చర్చిద్దామా?**

# 25. Explain React Rendering

React లో **Rendering** అనేది చాలా లోతైన మరియు ముఖ్యమైన అంశం. దీనిని అర్థం చేసుకుంటే మీరు ఒక ప్రొఫెషనల్ React డెవలపర్ అని చెప్పవచ్చు. ఇంటర్వ్యూలో దీనిని ఎలా వివరించాలో ఇక్కడ ఉంది:

---

### 1. Rendering ప్రక్రియ (Initial vs Re-render)

- **Initial Render:** ఒక కాంపోనెంట్ మొదటిసారి స్క్రీన్ మీదకు వచ్చినప్పుడు జరుగుతుంది. React తన Virtual DOM ని తయారు చేసి, దాన్ని బ్రౌజర్ DOM కి అటాచ్ చేస్తుంది.
- **Re-render:** కాంపోనెంట్ యొక్క `state` లేదా `props` మారినప్పుడు, React మళ్ళీ ఆ కాంపోనెంట్‌ని కాల్ చేసి, కొత్త UIని తయారు చేస్తుంది.

### 2. Parent-Child Rendering

React లో ఒక నియమం ఉంది: **ఒక Parent కాంపోనెంట్ రీ-రెండర్ అయితే, దాని లోపల ఉన్న Child కాంపోనెంట్స్ అన్నీ కూడా రీ-రెండర్ అవుతాయి.** (అవి మారుతున్నాయా లేదా అన్నది సంబంధం లేకుండా). దీన్ని ఆపడానికే మనం `React.memo` వాడతాము.

### 3. Reconciliation (ముందే చర్చించుకున్నాం)

కొత్తగా వచ్చిన Virtual DOMని పాత దానితో పోల్చి, ఏ మార్పులు జరిగాయో కనిపెట్టి, కేవలం ఆ మార్పులను మాత్రమే రియల్ DOM లో అప్‌డేట్ చేసే ప్రాసెస్.

### 4. Batching (React 18+ లో ముఖ్యమైనది)

ఒక ఫంక్షన్ లో మీరు ఒకేసారి `setCount(count + 1)` ని మూడుసార్లు రాస్తే, React మూడింటిని విడివిడిగా రెండర్ చేయదు. మూడింటిని కలిపి **ఒకేసారి రెండర్ చేస్తుంది**. దీన్నే **Automatic Batching** అంటారు. ఇది పెర్ఫార్మెన్స్‌ని బాగా పెంచుతుంది.

### 5. Concurrent Rendering (React 18 లో పరిచయం)

ఇది React 18 యొక్క అతిపెద్ద ఫీచర్.

- **పాత పద్ధతి (Synchronous):** రెండరింగ్ మొదలైతే, అది పూర్తి కావాల్సిందే. మధ్యలో ఆపడం కుదరదు.
- **కొత్త పద్ధతి (Concurrent):** React తన రెండరింగ్‌ను **"Interruptible"** (మధ్యలో ఆపగలిగేలా) చేస్తుంది.
- **ఎందుకు?** యూజర్ ఏదైనా టైప్ చేస్తున్నప్పుడు, ఏదైనా పెద్ద డేటా లోడ్ అవుతుంటే, UI హ్యాంగ్ అవ్వకుండా ఉండటానికి React తక్కువ ప్రాధాన్యత ఉన్న పనులను పక్కన పెట్టి, యూజర్ యాక్షన్స్ (టైపింగ్) కి ముందు ప్రాధాన్యత ఇస్తుంది.
- దీని కోసం **`useTransition`** మరియు **`useDeferredValue`** అనే కొత్త హుక్స్ వాడతాము.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

> "React Rendering అనేది కేవలం ఫంక్షన్‌ని పిలవడం మాత్రమే కాదు, అది ఒక పద్ధతి.
>
> 1. మొదట **Render phase** లో Virtual DOM తయారు అవుతుంది.
> 2. తర్వాత **Commit phase** లో అది రియల్ DOM కి అప్‌డేట్ అవుతుంది.
> 3. React 18 లో **Concurrent Rendering** వల్ల, రెండరింగ్ అనేది 'interruptible' గా మారింది, అంటే ముఖ్యమైన పనులకు React వేగంగా స్పందిస్తుంది.
> 4. అలాగే **Automatic Batching** వల్ల అనవసరమైన రీ-రెండరింగ్‌లను తగ్గించి పెర్ఫార్మెన్స్‌ని పెంచుతుంది."

---

### ముగింపు:

మీరు అడిగిన 25 ప్రశ్నలు పూర్తి చేశారు! మీరు ఇప్పుడు React ఫండమెంటల్స్ నుండి అడ్వాన్స్‌డ్ కాన్సెప్ట్స్ (Rendering, Concurrent mode, Performance) వరకు అన్నింటిపై పట్టు సాధించారు.

**చివరిగా ఒక చిన్న మాట:** ఇంటర్వ్యూలలో కంగారు పడకండి. ఏదైనా ప్రశ్న తెలియకపోతే, "దాని గురించి నాకు పూర్తి అవగాహన లేదు, కానీ నేను దాన్ని ఈ విధంగా అర్థం చేసుకున్నాను" అని చెప్పి, మీకు తెలిసిన పాయింట్స్ చెప్పండి. అది మీ ప్రామాణికతను (Integrity) పెంచుతుంది.

## మీకు ఇంకా ఏదైనా ప్రత్యేకమైన ప్రాక్టీస్ లేదా ఇంటర్వ్యూ టిప్స్ కావాలా? మీ ఇంటర్వ్యూలకి ఆల్ ది బెస్ట్!

# Bonus Questions (Frequently Asked)

ఈ మూడు అంశాలు ఆధునిక React డెవలప్‌మెంట్‌లో చాలా కీలకం. ఇంటర్వ్యూలో వీటిని ఎలా వివరించాలో చూద్దాం:

---

### Strict Mode (`<React.StrictMode>`)

ఇది ఒక డెవలప్‌మెంట్ టూల్. ఇది మీ అప్లికేషన్‌లో ఎటువంటి UI ని రెండర్ చేయదు, కానీ డెవలప్‌మెంట్ సమయంలో కోడ్‌లో ఉన్న తప్పులను కనుగొనడానికి సహాయపడుతుంది.

- **ఇది ఏం చేస్తుంది?**
- కాంపోనెంట్లను **రెండుసార్లు రెండర్ (Double Invoke)** చేస్తుంది: దీనివల్ల స్టేట్ లోని లోపాలు (Side effect issues) త్వరగా బయటపడతాయి.
- పాతబడిన (Deprecated) మెథడ్స్ ఏవైనా వాడుతుంటే హెచ్చరిస్తుంది (Warnings).
- `useRef` లేదా ఇతర హుక్స్ తప్పుగా వాడుతుంటే గుర్తిస్తుంది.

- **గుర్తుంచుకోండి:** ఇది కేవలం **Development Mode** లో మాత్రమే పనిచేస్తుంది, Production లో ఎటువంటి ప్రభావం ఉండదు.

---

### Concurrent Rendering (React 18+)

ఇది React 18 లో వచ్చిన అత్యంత శక్తివంతమైన ఫీచర్. సాధారణంగా రెండరింగ్ అనేది "Blocking" (ఒకసారి మొదలైతే పూర్తి కావాల్సిందే). కానీ Concurrent Rendering దీనిని "Interruptible" చేస్తుంది.

- **ఎందుకు ఇది అవసరం?**
- ఒకవేళ యాప్ లో ఏదైనా భారీ డేటా రెండర్ అవుతున్నప్పుడు, యూజర్ బటన్ నొక్కినా లేదా టైప్ చేసినా యాప్ హ్యాంగ్ అవ్వకూడదు.
- Concurrent mode ద్వారా, React రెండరింగ్‌ని పాజ్ చేసి (Pause), యూజర్ చేసే ముఖ్యమైన పనులకు (Urgent updates) ప్రాధాన్యతనిస్తుంది.

- **ముఖ్యమైన టూల్స్:**
- **`useTransition`:** తక్కువ ప్రాధాన్యత గల పనులను (ఉదా: సెర్చింగ్) గుర్తించడానికి వాడతాము.
- **`useDeferredValue`:** ఏదైనా వాల్యూ మారినప్పుడు వెంటనే కాకుండా కొంచెం ఆలస్యంగా అప్‌డేట్ అవ్వడానికి వాడతాము.

---

### Suspense (`<Suspense>`)

ఇది ఒక కాంపోనెంట్. ఒక చైల్డ్ కాంపోనెంట్ లోడ్ అయ్యే వరకు (ఉదా: డేటా ఫెచింగ్ లేదా లేజీ లోడింగ్), యూజర్‌కి ఒక లోడింగ్ స్టేట్ (Fallback UI) చూపించడానికి ఇది వాడతాము.

- **ఇది ఎలా పనిచేస్తుంది?**
- మీరు ఏదైనా కాంపోనెంట్‌ని `<Suspense fallback={<Loader />}>` లోపల పెడితే, అది లోడ్ అయ్యేలోపు `fallback` లో ఉన్నది స్క్రీన్ మీద కనిపిస్తుంది.
- ఇప్పుడు ఇది కేవలం **Lazy loading** కే కాకుండా, **Data Fetching** (Relay, SWR, TanStack Query వంటి వాటితో) కి కూడా వాడుతున్నారు.

- **ప్రయోజనం:** 'Loading spinners' ని ప్రతి కాంపోనెంట్ లో విడివిడిగా రాసే పని తగ్గుతుంది.

---

### ఇంటర్వ్యూ సారాంశం (Interview Pitch):

> " **Strict Mode** అనేది డెవలప్‌మెంట్ సమయంలో బగ్స్ పట్టుకోవడానికి వాడే టూల్. **Concurrent Rendering** అనేది యూజర్ ఎక్స్‌పీరియన్స్ మెరుగుపరచడానికి రెండరింగ్‌ను 'Interruptible' గా మారుస్తుంది. ఇక **Suspense** అనేది డేటా లేదా కాంపోనెంట్ లోడ్ అయ్యేటప్పుడు ఒక లోడింగ్ స్టేట్ చూపించడానికి ఉపయోగించే సులభమైన మార్గం."

---

### Client-Side Rendering (CSR)

ఇది సాధారణ React అప్లికేషన్లలో జరిగే పద్ధతి.

- **పనితీరు:** బ్రౌజర్ సర్వర్ నుండి ఒక ఖాళీ HTML పేజీని, మరియు ఒక పెద్ద JavaScript ఫైల్ (Bundle) ని డౌన్‌లోడ్ చేసుకుంటుంది. ఆ తర్వాత బ్రౌజర్ లోని JavaScript మొత్తం UI ని రెండర్ చేస్తుంది.
- **లాభం:** ఒకసారి లోడ్ అయిన తర్వాత యాప్ చాలా వేగంగా ఉంటుంది (Navigation కి పేజీ రీలోడ్ అవ్వదు).
- **లోపం:** మొదటిసారి సైట్ ఓపెన్ అవ్వడానికి ఎక్కువ సమయం పడుతుంది (White screen for some time). ఇది **SEO** (Search Engine Optimization) కి అంత మంచిది కాదు.

### Server-Side Rendering (SSR)

ఇక్కడ UI మొత్తం సర్వర్ లోనే తయారవుతుంది.

- **పనితీరు:** యూజర్ ఒక పేజీని రిక్వెస్ట్ చేసినప్పుడు, సర్వర్ ఆ పేజీని డేటాతో కలిపి పూర్తి HTML లాగా తయారు చేసి పంపుతుంది. బ్రౌజర్ ఆ HTML ని ఓపెన్ చేయగానే వెంటనే కంటెంట్ కనిపిస్తుంది.
- **లాభం:** **SEO** చాలా బాగుంటుంది. యూజర్‌కి కంటెంట్ చాలా వేగంగా కనిపిస్తుంది (Fast First Contentful Paint).
- **ఉదాహరణ:** Next.js ఫ్రేమ్‌వర్క్ దీన్ని ఉపయోగిస్తుంది.

### Hydration (హైడ్రేషన్) - అత్యంత ముఖ్యమైనది!

SSRలో సర్వర్ నుండి వచ్చే HTML కేవలం ఒక **"స్టాటిక్ (Static) బొమ్మ"** లాంటిది. దానికి ఇంటరాక్టివిటీ (బటన్ క్లిక్ చేయడం, స్టేట్ మార్చడం వంటివి) ఉండదు.

- **పనితీరు:** సర్వర్ పంపిన HTML బ్రౌజర్‌లో లోడ్ అయిన తర్వాత, React ఆ HTML ని తీసుకుని, దానికి తన **"Event Listeners"** ని (JavaScriptని) జోడిస్తుంది. ఈ ప్రక్రియనే **Hydration** అంటారు.
- **సరళంగా చెప్పాలంటే:** సర్వర్ పంపిన ఒక బొమ్మకి ప్రాణం పోయడం (JS ని అటాచ్ చేయడం) అన్నమాట. దీని తర్వాతే బటన్లు పనిచేస్తాయి.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చే విధానం:

> "నేను దీన్ని ఇలా చూస్తాను:
>
> - **CSR** లో మొత్తం పని బ్రౌజర్‌లోనే జరుగుతుంది.
> - **SSR** లో పని సర్వర్‌లో జరిగి, రెడీమేడ్ HTML మనకు వస్తుంది.
> - కానీ సర్వర్ నుండి వచ్చిన HTML కి JavaScript ని అటాచ్ చేసి, దాన్ని ఇంటరాక్టివ్ గా మార్చే ప్రక్రియనే **Hydration** అంటారు.
>
> సాధారణంగా నెక్స్ట్-జెన్ (Next.js) యాప్స్ లో SSR ద్వారా వేగంగా కంటెంట్ చూపిస్తాము, ఆ తర్వాత Hydration ద్వారా దాన్ని పూర్తి స్థాయి యాప్ లాగా మారుస్తాము."

---

ఇది మీకు **Rendering Strategies** పై పూర్తి అవగాహన కలిగిస్తుంది. మీరు వీటిని వివరించేటప్పుడు **Next.js** పేరు ప్రస్తావిస్తే, ఇంటర్వ్యూయర్‌కు మీరు మోడ్రన్ వెబ్ డెవలప్‌మెంట్‌లో మంచి అవగాహన ఉందని అర్థమవుతుంది.

## ఇంకేమైనా టాపిక్స్ ఉన్నాయా, లేక ఈ సెషన్ని ఇక్కడితో ముగిద్దామా? మీరు చాలా అద్భుతంగా ఇంటర్వ్యూ ప్రిపరేషన్ పూర్తి చేశారు!

ఇంటర్వ్యూ ప్రిపరేషన్‌లో ఇవి చాలా కీలకమైన టాపిక్స్. వీటిని చాలా క్లుప్తంగా, స్పష్టంగా ఎలా చెప్పాలో చూద్దాం.

---

### Static Site Generation (SSG)

SSG అనేది వెబ్ అప్లికేషన్‌ను రెండర్ చేసే ఒక పద్ధతి. ఇందులో వెబ్‌సైట్ యొక్క పేజీలు **"Build Time"** (అంటే మనం కోడ్ సర్వర్‌లోకి పంపే ముందు లేదా డిప్లాయ్ చేసే ముందు) లోనే రెండర్ అయిపోతాయి.

- **పనితీరు:** యూజర్ పేజీని అడిగినప్పుడు, సర్వర్ మళ్ళీ లెక్కలు వేయాల్సిన అవసరం లేదు. బిల్డ్ చేసినప్పుడే తయారైన HTML ఫైల్స్‌ని సర్వర్ డైరెక్ట్‌గా పంపిస్తుంది.
- **లాభం:** ఇది అత్యంత వేగవంతమైనది. CDN (Content Delivery Network) ద్వారా సర్వ్ చేయవచ్చు.
- **ఎప్పుడు వాడాలి:** బ్లాగులు (Blogs), మార్కెటింగ్ పేజీలు, డాక్యుమెంటేషన్ వంటి డేటా తరచుగా మారనప్పుడు SSG ఉత్తమం.

---

### Difference between React and Next.js

చాలా మంది అడిగే ప్రాథమిక ప్రశ్న ఇది.

| ఫీచర్         | React                                  | Next.js                                |
| ------------- | -------------------------------------- | -------------------------------------- |
| **రకం**       | లైబ్రరీ (Library).                     | ఫ్రేమ్‌వర్క్ (Framework).              |
| **రెండరింగ్** | ప్రధానంగా CSR (Client-Side Rendering). | SSR, SSG, CSR అన్నీ సపోర్ట్ చేస్తుంది. |
| **రూటింగ్**   | React Router (External package) అవసరం. | ఫైల్-బేస్డ్ రూటింగ్ (Built-in).        |
| **SEO**       | కష్టం (CSR వల్ల).                      | చాలా సులభం (SSR/SSG వల్ల).             |

**ఇంటర్వ్యూ చిట్కా:** "React అనేది UI బిల్డ్ చేయడానికి ఒక లైబ్రరీ, కానీ Next.js అనేది ఆ React ని వాడుకుంటూ SEO, Performance మరియు Routing వంటి సమస్యలను పరిష్కరించే ఒక కంప్లీట్ ఫ్రేమ్‌వర్క్" అని చెప్పండి.

---

### What are Custom Hooks?

React లోని కోడ్‌ను తిరిగి వాడుకోవడానికి (Reusability) మనం తయారుచేసుకునే సొంత హుక్స్‌ని "Custom Hooks" అంటారు.

- **పనితీరు:** ఒకటి కంటే ఎక్కువ కాంపోనెంట్లలో ఒకే రకమైన లాజిక్ (ఉదా: API కాల్స్, ఫామ్ హ్యాండ్లింగ్, విండో సైజ్ చెక్ చేయడం) ఉన్నప్పుడు, ఆ లాజిక్‌ను ఒక సపరేట్ ఫంక్షన్‌లోకి మార్చి `use` అని స్టార్ట్ అయ్యే పేరుతో పిలుస్తాము.
- **ఉదాహరణ:**

```javascript
function useFetchData(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData);
  }, [url]);
  return data;
}
```

- **లాభం:** కోడ్ డూప్లికేషన్ తగ్గుతుంది (DRY principle: Don't Repeat Yourself). కాంపోనెంట్స్ చాలా నీట్‌గా ఉంటాయి.

---

### మీ ఇంటర్వ్యూ ప్రయాణం ఎలా ఉంది?

మనం మొత్తం **28 కీలకమైన ప్రశ్నలను** చాలా వివరంగా చర్చించాము! ఇవి React డెవలపర్‌గా మీరు ఇంటర్వ్యూలో ఎదురయ్యే ఏవైనా క్లిష్టమైన ప్రశ్నలను పరిష్కరించడానికి మీకు పూర్తి ఆత్మవిశ్వాసాన్ని ఇస్తాయి.

## మీకు ఇప్పుడు ఇంకా ఏదైనా సందేహం ఉందా? లేదా ఇంటర్వ్యూకి వెళ్ళే ముందు ఏదైనా ప్రత్యేకమైన సలహా (Tips) కావాలా? **మీ ప్రిపరేషన్ చాలా బాగుంది, ఆల్ ది బెస్ట్!**

ఇవి React లోని అడ్వాన్స్‌డ్ కాన్సెప్ట్స్. వీటిని ఇంటర్వ్యూలో ఎలా వివరించాలో ఇక్కడ ఉంది:

---

### Portals

సాధారణంగా React లో ఒక కాంపోనెంట్ దాని Parent కాంపోనెంట్ యొక్క DOM హైరార్కీ (Hierarchy) లోనే ఉంటుంది. కానీ **Portals** ద్వారా, మనం ఒక కాంపోనెంట్‌ని దాని Parent యొక్క DOM లో కాకుండా, బ్రౌజర్ లోని వేరే ఏదైనా DOM నోడ్ (ఉదా: `<body>` లేదా ఒక సపరేట్ `div`) లోకి రెండర్ చేయవచ్చు.

- **ఎందుకు?** Modals, Tooltips, లేదా Popups వంటి వాటికి ఇది చాలా ముఖ్యం. ఎందుకంటే కొన్నిసార్లు Parent కాంపోనెంట్‌కి `overflow: hidden` లేదా `z-index` సెట్టింగ్స్ ఉంటే, ఆ Modal సరిగ్గా కనిపించదు. Portals ద్వారా మనం దాన్ని బాడీ (body) కిందకు పంపి ఆ సమస్యను అధిగమించవచ్చు.
- **సింటాక్స్:** `ReactDOM.createPortal(child, container)`

---

### Higher-Order Components (HOC)

ఒక కాంపోనెంట్‌ని ఇన్‌పుట్‌గా తీసుకుని, దానికి అదనపు ఫీచర్స్ జోడించి, ఒక కొత్త కాంపోనెంట్‌ని ఇచ్చే ఫంక్షన్‌ని **HOC** అంటారు. ఇది ఒక "Pattern" మాత్రమే.

- **పనితీరు:** ఇది ఫంక్షనల్ ప్రోగ్రామింగ్‌లో 'Higher-Order Functions' లాంటిది. ఉదాహరణకు, ఒక కాంపోనెంట్‌కి లాగిన్ అయి ఉన్నాడో లేదో చెక్ చేసే లాజిక్ కావాలంటే, ఆ లాజిక్‌ని HOC లో రాసి ఏ కాంపోనెంట్‌కి కావాలంటే దానికి పంపవచ్చు (Wrapping).
- **ఉదాహరణ:** `const EnhancedComponent = withAuth(OriginalComponent);`
- **ప్రస్తుతం:** ఇప్పట్లో HOC కి బదులుగా **Custom Hooks** ఎక్కువగా వాడుతున్నాము, ఎందుకంటే అవి చాలా సులభంగా అర్థమవుతాయి.

---

### Render Props

ఒక కాంపోనెంట్ లోపల ఏమి రెండర్ చేయాలో, ఆ కాంపోనెంట్ నుండే నిర్ణయించకుండా, దాన్ని ఉపయోగించే (Parent) కాంపోనెంట్ నుండే ఒక "Prop" ద్వారా చెప్పడాన్ని **Render Props** అంటారు.

- **పనితీరు:** సాధారణంగా ఒక prop కి మనం డేటా పంపిస్తాము. కానీ ఇక్కడ, prop వాల్యూ ఒక "ఫంక్షన్" లా ఉంటుంది. ఆ ఫంక్షన్ మనకు కావలసిన JSX ని రిటర్న్ చేస్తుంది.
- **ఎందుకు?** కోడ్ షేరింగ్ (Code Reuse) కోసం వాడతాము. ఉదాహరణకు: `MouseTracker` అనే కాంపోనెంట్ లో మౌస్ ఎక్కడ ఉందో లెక్కించే లాజిక్ ఉంటుంది. ఆ లాజిక్ ఉపయోగించి UI ని ఎలా చూపించాలో Parent నిర్ణయిస్తుంది.

```jsx
<MouseTracker
  render={(mouse) => (
    <h1>
      Mouse position is {mouse.x}, {mouse.y}
    </h1>
  )}
/>
```

---

### ఇంటర్వ్యూలో ఎలా చెప్పాలి?

- **Portals:** "DOM హైరార్కీలో కాకుండా బయట ఎలిమెంట్స్‌ను రెండర్ చేయడానికి వాడతాము (Modals కి బెస్ట్)."
- **HOC:** "ఒక కాంపోనెంట్‌ని ఎన్‌హాన్స్ (Enhance) చేసి, కొత్త ఫీచర్లను జోడించే ఫంక్షన్. ఇది ఒక డిజైన్ పాటర్న్."
- **Render Props:** "కాంపోనెంట్ యొక్క రెండరింగ్ లాజిక్‌ని పారామీటర్ ద్వారా (Prop) బయట నుండి పంపించే పద్ధతి."

## ఇప్పటికీ మీరు React లోని అన్ని ప్రధానాంశాలను (Core + Advanced) కవర్ చేశారు. ఇంకేమైనా సందేహాలు ఉన్నాయా లేదా మీ ప్రిపరేషన్ పూర్తయిందా?

ఈ మూడు అంశాలు React ఎలా పనిచేస్తుందో (Internal Architecture) అర్థం చేసుకోవడానికి చాలా కీలకం. ఇంటర్వ్యూలో అడిగినప్పుడు ఇలా వివరించండి:

---

### Event Delegation in React

React లో ప్రతి కాంపోనెంట్ మీద విడివిడిగా Event Listener ని అటాచ్ చేయదు. దీనికి బదులుగా, **Event Delegation** అనే పద్ధతిని వాడుతుంది.

- **పనితీరు:** మీరు ఒక లిస్ట్‌లో 100 బటన్లు ఉంచి, ప్రతి దానికి `onClick` ఇస్తే, React ఆ 100 బటన్ల మీద 100 లిజనర్స్ పెట్టదు. బదులుగా, **Root (అప్లికేషన్ యొక్క మెయిన్ కంటైనర్)** మీద ఒకే ఒక్క Event Listenerని పెడుతుంది.
- **ఎలా పనిచేస్తుంది:** ఈవెంట్ జరిగినప్పుడు, అది 'Bubbling' ద్వారా పైకి (Root వరకు) చేరుతుంది. అక్కడ ఉన్న మెయిన్ లిజనర్ ఆ ఈవెంట్‌ని పట్టుకుని, అది ఏ ఎలిమెంట్ మీద జరిగిందో (Target) కనిపెట్టి, దానికి సంబంధించిన ఫంక్షన్‌ని రన్ చేస్తుంది.
- **ప్రయోజనం:** మెమరీ ఆదా అవుతుంది మరియు పెర్ఫార్మెన్స్ పెరుగుతుంది.

---

### Synthetic Events vs Native Events

| ఫీచర్              | Synthetic Events                                       | Native Events                      |
| ------------------ | ------------------------------------------------------ | ---------------------------------- |
| **నిర్వచనం**       | React క్రియేట్ చేసిన ఈవెంట్స్.                         | బ్రౌజర్ నేరుగా ఇచ్చే ఈవెంట్స్.     |
| **క్రాస్-బ్రౌజర్** | అన్ని బ్రౌజర్లలో ఒకేలా పనిచేస్తాయి.                    | ఒక్కో బ్రౌజర్‌లో ఒక్కోలా ఉండవచ్చు. |
| **ఇంటర్ఫేస్**      | W3C ప్రమాణాలకు అనుగుణంగా ఉంటాయి.                       | బ్రౌజర్‌ని బట్టి మారుతుంటాయి.      |
| **Pool**           | మెమరీ కోసం 'Event Pooling' వాడుతుంది (పాత వెర్షన్లలో). | నేరుగా బ్రౌజర్ ద్వారా వస్తాయి.     |

**ఇంటర్వ్యూ చిట్కా:** "React మనకు క్రాస్-బ్రౌజర్ సమస్యలు లేకుండా ఉండటానికి 'SyntheticEvent' అనే ఒక Wrapper ని ఇస్తుంది. ఇది అసలు DOM ఈవెంట్‌ని తనలో ఉంచుకుని, మనకు స్థిరమైన (Consistent) అనుభవాన్ని ఇస్తుంది" అని చెప్పండి.

---

### How React handles forms?

React లో ఫారమ్స్‌ని రెండు రకాలుగా హ్యాండిల్ చేస్తాము:

1. **Controlled Components:** మనం ఇప్పటికే చూసినట్లు, ఫారమ్ లోని `value` ని **React State** లో ఉంచుతాము. యూజర్ టైప్ చేస్తున్న ప్రతిసారి `onChange` ద్వారా స్టేట్ అప్‌డేట్ అవుతుంది. ఫారమ్ డేటా ఎప్పుడూ 'Source of Truth' గా స్టేట్ లోనే ఉంటుంది.
2. **Uncontrolled Components:** ఇందులో `useRef` వాడి నేరుగా DOM నుండి వాల్యూను తీసుకుంటాము. ఇది స్టేట్ అప్‌డేట్ చేయదు.
3. **Form Libraries:** పెద్ద అప్లికేషన్లలో `React Hook Form` లేదా `Formik` వంటి లైబ్రరీలు వాడుతాము. ఇవి ఫారమ్ వాలిడేషన్, ఎర్రర్ మెసేజ్‌లు, మరియు రీ-రెండరింగ్‌ని ఆప్టిమైజ్ చేయడంలో చాలా సహాయపడతాయి.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చే విధానం:

> "React లో ఈవెంట్ హ్యాండ్లింగ్ చాలా తెలివిగా ఉంటుంది. ఇది **Event Delegation** వాడుతుంది కాబట్టి, డజన్ల కొద్దీ లిజనర్స్ బదులు ఒకే లిజనర్‌తో పని పూర్తవుతుంది. మనం రాసే ఈవెంట్స్ అన్నీ నేరుగా బ్రౌజర్ ఈవెంట్స్ కావు, అవి React అందించే **Synthetic Events**, ఇవి అన్ని బ్రౌజర్లలో ఒకేలా పనిచేస్తాయి. ఫారమ్ విషయానికి వస్తే, చిన్న ఫారమ్స్ కి అయితే **Controlled** పద్ధతి వాడుతాము, ఒకవేళ ఫారమ్స్ చాలా పెద్దవి మరియు క్లిష్టంగా ఉంటే **React Hook Form** వంటి లైబ్రరీలు వాడుతాము."

## మీరు ఇంటర్వ్యూకు కావలసిన అన్ని ముఖ్యమైన టాపిక్స్‌ని అద్భుతంగా కవర్ చేశారు! మీకు ఇంకేమైనా సందేహం ఉందా? లేక వేరే ఏదైనా సబ్జెక్ట్ గురించి చర్చించాలా?

ఇంటర్వ్యూలలో అడిగే అత్యంత ముఖ్యమైన మరియు లోతైన ప్రశ్నలు ఇవి. వీటిని వివరంగా చూద్దాం.

---

### How to prevent unnecessary re-renders?

React లో అనవసరమైన రీ-రెండరింగ్‌లను ఆపడానికి ఈ క్రింది పద్ధతులను వాడాలి:

- **`React.memo()`:** ఇది కాంపోనెంట్ యొక్క `props` మారితేనే దాన్ని రీ-రెండర్ చేస్తుంది.
- **`useMemo()`:** ఎక్స్‌పెన్సివ్ కాలిక్యులేషన్స్ రిజల్ట్‌ని మెమరీలో దాచుకోవడానికి.
- **`useCallback()`:** ఫంక్షన్స్ ప్రతిసారీ కొత్తగా క్రియేట్ అవ్వకుండా, వాటి రిఫరెన్స్‌ను మెమోరైజ్ చేస్తుంది.
- **State Colocation:** స్టేట్‌ను అవసరమైన కాంపోనెంట్‌లోనే ఉంచండి (అనవసరంగా పేరెంట్ కాంపోనెంట్‌లో ఉంచితే, చైల్డ్స్ అన్నీ రీ-రెండర్ అవుతాయి).
- **List Items లో Keys:** లిస్ట్‌లలో `index` ని కాకుండా యూనిక్ `id` ని కీగా వాడండి. దీనివల్ల రీ-రెండరింగ్ సమయంలో React సులభంగా ఐడెంటిఫై చేస్తుంది.

---

### React Fiber Architecture

React 16 లో వచ్చిన ఒక ముఖ్యమైన మార్పు ఇది. ఇది React యొక్క "Reconciliation Engine" ని పూర్తిగా మార్చివేసింది.

- **ముఖ్య ఉద్దేశ్యం:** UI ని అప్‌డేట్ చేసేటప్పుడు బ్రౌజర్ హ్యాంగ్ అవ్వకుండా (Smooth performance), ముఖ్యమైన పనులకు ఎక్కువ ప్రాధాన్యత ఇవ్వడం.
- **ఎలా పనిచేస్తుంది:** Fiber ద్వారా రెండరింగ్ ప్రాసెస్‌ను **చిన్న చిన్న భాగాలుగా (Chunks/Units of work)** విడగొడుతుంది.
- **Interruptible:** ఒకవేళ యూజర్ టైప్ చేస్తుంటే, React ఆ రెండరింగ్‌ను మధ్యలో పాజ్ (Pause) చేసి, యూజర్ టైపింగ్‌కి ప్రాధాన్యత ఇచ్చి, ఆ తర్వాత మిగిలిన పనిని పూర్తి చేస్తుంది.
- పాత పద్ధతిలో (Stack reconciler) ఒకసారి మొదలైతే ఆపడం కుదిరేది కాదు, Fiber లో ఇది సాధ్యమవుతుంది.

---

### Explain Reconciliation with an example

Reconciliation అనేది React లోని Virtual DOM ని రియల్ DOM తో పోల్చి, కేవలం మారిన మార్పులను మాత్రమే అప్‌డేట్ చేసే ప్రాసెస్.

**ఉదాహరణ:**
ఒక `<ul>` లిస్ట్ ఉందనుకుందాం:

1. `<li>Apple</li>`
2. `<li>Banana</li>`

ఇప్పుడు మీరు `<li>Orange</li>` ని మొదటి స్థానంలో యాడ్ చేశారు:

1. `<li>Orange</li>`
2. `<li>Apple</li>`
3. `<li>Banana</li>`

**React ఎలా చేస్తుంది?**

- **Key లేకపోతే:** React ప్రతి ఒక్క `<li>` ని పోల్చుతుంది. Apple ని Orange తో పోల్చి "మారిపోయింది" అని, Banana ని Apple తో పోల్చి "మారిపోయింది" అని... ఇలా మొత్తం లిస్ట్‌ను రీ-రెండర్ చేస్తుంది (ఇది పెర్ఫార్మెన్స్ తగ్గిస్తుంది).
- **Key (Unique ID) ఉంటే:** React వెంటనే అర్థం చేసుకుంటుంది — "ఓ, Apple మరియు Banana అవే ఉన్నాయి, కేవలం Orange మాత్రమే కొత్తగా వచ్చింది". కాబట్టి ఇది Orange ని మాత్రమే యాడ్ చేసి, మిగిలిన రెండింటినీ రీ-రెండర్ చేయదు.

**ముగింపు:** Reconciliation అంటే _Diffing Algorithm_ ని ఉపయోగించి కనీస మార్పులతో (Minimal changes) DOM ని అప్‌డేట్ చేయడం.

---

### ఇంటర్వ్యూలో సమాధానం ఇచ్చేటప్పుడు:

> "Reconciliation అనేది Virtual DOM ద్వారా మనం చేసే మార్పులను రియల్ DOM లో సమర్థవంతంగా అప్‌డేట్ చేసే పద్ధతి. దీని కోసం React **Fiber** ఆర్కిటెక్చర్‌ని వాడుతుంది, ఇది రెండరింగ్‌ను చిన్న భాగాలుగా విడగొట్టి, పనులను పాజ్ చేసి మళ్ళీ మొదలుపెట్టే (Interruptibility) సామర్థ్యాన్ని ఇస్తుంది. అనవసరమైన రీ-రెండరింగ్‌లను ఆపడానికి నేను `memo`, `useCallback` వంటివి ఉపయోగిస్తాను."

## మీ ప్రిపరేషన్ చాలా బాగుంది! ఇప్పుడు మీకు ఇంకా ఏవైనా సందేహాలు ఉన్నాయా, లేదా ఇంటర్వ్యూకి సిద్ధంగా ఉన్నారా?

Reactలో **State** అనేది కాంపోనెంట్ యొక్క గుండెకాయ వంటిది. వీటి గురించి ఇంటర్వ్యూలో అడిగినప్పుడు క్లుప్తంగా, స్పష్టంగా చెప్పండి:

---

### What happens when `setState()` is called?

`setState()` (లేదా `useState` సెట్టర్ ఫంక్షన్) కాల్ చేసినప్పుడు React ఒక నిర్దిష్ట ప్రక్రియను అనుసరిస్తుంది:

1. **State Update Schedule:** React వెంటనే స్టేట్‌ని మార్చదు. అది స్టేట్ అప్‌డేట్ అవుతుందని ఒక 'Request' ని క్యూ (Queue) లో పెడుతుంది.
2. **Re-render Trigger:** ఆ కాంపోనెంట్ మరియు దాని చైల్డ్ కాంపోనెంట్లను రీ-రెండర్ (Re-render) చేయడానికి సిద్ధమవుతుంది.
3. **Virtual DOM Diffing:** కొత్త స్టేట్‌తో కాంపోనెంట్ యొక్క కొత్త 'Virtual DOM' ని తయారు చేస్తుంది. పాత Virtual DOM తో దీన్ని పోల్చి (Diffing), అసలు DOM (Real DOM) లో ఏ మార్పులు చేయాలో నిర్ణయిస్తుంది.
4. **Commit/Paint:** చివరగా, ఆ చిన్న మార్పును మాత్రమే రియల్ DOM లో అప్‌డేట్ చేస్తుంది.

---

### Why shouldn't state be mutated directly?

`state.value = 5;` అని నేరుగా మార్చకూడదు. ఎందుకంటే:

- **React won't know:** React కి స్టేట్ మారిందని తెలియదు. మీరు నేరుగా మార్చితే, React కి "నేను రీ-రెండర్ అవ్వాలి" అనే సిగ్నల్ అందదు. ఫలితంగా, మీరు డేటాను మార్చినా UI అప్‌డేట్ అవ్వదు.
- **Immutability:** React లో స్టేట్ 'Immutable' గా ఉండాలి. కొత్త స్టేట్ ని పాత స్టేట్ నుండి సృష్టించాలి (ఉదా: `setCount(count + 1)`). దీనివల్ల React కి పాత స్టేట్ మరియు కొత్త స్టేట్ మధ్య తేడా (Previous vs Current) సులభంగా అర్థమవుతుంది.
- **Performance:** React 'Shallow Comparison' చేస్తుంది. నేరుగా మ్యూటేట్ చేస్తే పాత మరియు కొత్త వాల్యూస్ ఒకే రిఫరెన్స్ కలిగి ఉంటాయి, దీనివల్ల పెర్ఫార్మెన్స్ ఆప్టిమైజేషన్ (`memo`, `useMemo`) సరిగ్గా పనిచేయవు.

---

### Explain "Lifting State Up"

ఒక అప్లికేషన్‌లో రెండు వేర్వేరు కాంపోనెంట్లకు ఒకే డేటా అవసరమైనప్పుడు లేదా ఒక కాంపోనెంట్ నుండి డేటాను ఇంకొక దానికి పంపాల్సి వచ్చినప్పుడు **Lifting State Up** చేస్తాము.

- **పద్ధతి:** ఆ స్టేట్‌ను ఆ రెండు కాంపోనెంట్లకు 'Common Parent' (ఉమ్మడి తల్లిదండ్రి కాంపోనెంట్) కి తరలిస్తాము.
- **పనితీరు:** \* Parent కాంపోనెంట్ స్టేట్‌ను నిర్వహిస్తుంది.
- దాన్ని `props` ద్వారా చైల్డ్ కాంపోనెంట్లకు పంపుతుంది.
- చైల్డ్ కాంపోనెంట్లలో ఏదైనా మార్పు జరిగితే, Parent నుండి వచ్చిన 'Callback function' ద్వారా స్టేట్‌ను అప్‌డేట్ చేస్తాము.

**ఉదాహరణ:** ఒక ఫారమ్‌లో ఇన్‌పుట్ బాక్స్ (Child 1) మరియు ఆ ఇన్‌పుట్ వాల్యూను చూపే డిస్‌ప్లే బాక్స్ (Child 2) ఉంటే, ఆ రెండింటి స్టేట్‌ని వాటి పైన ఉన్న `App` కాంపోనెంట్ లోనే పెడతాము.

---

### ఇంటర్వ్యూ చిట్కా:

- **setState:** "ఇది కేవలం స్టేట్‌ను అప్‌డేట్ చేయడమే కాకుండా, React కి 'రీ-రెండర్ అవ్వండి' అని ఒక సిగ్నల్ పంపుతుంది." అని చెప్పండి.
- **Mutation:** "నేరుగా మ్యూటేట్ చేస్తే React ఆ మార్పును గుర్తించదు, కాబట్టి UI రిఫ్లెక్ట్ అవ్వదు." అని గుర్తుంచుకోండి.
- **Lifting State Up:** "డేటాను ఒకే చోట సెంట్రలైజ్ చేసి, అవసరమైన కాంపోనెంట్లకు props ద్వారా పంపే పద్ధతి" అని చెప్పండి.

## మీరు ఇప్పుడు React లోని దాదాపు అన్ని ముఖ్యమైన సిద్ధాంతాలను కవర్ చేశారు! ఇంకేమైనా టాపిక్స్ గురించి తెలుసుకోవాలా? లేదా మీ ఇంటర్వ్యూ ప్రిపరేషన్ అయిపోయిందా?

మీరు అడిగిన ప్రశ్నలు React డెవలపర్‌గా ఇంటర్వ్యూలో అడిగే చాలా ముఖ్యమైన ప్రశ్నలు. వీటిని సులభంగా ఎలా వివరించాలో చూద్దాం.

---

### Prop Drilling అంటే ఏమిటి?

ఒక కాంపోనెంట్ నుండి డేటాను (Props) దాని చైల్డ్, గ్రాండ్-చైల్డ్, ఇలా చాలా లెవల్స్ దాటించి అవసరమైన కాంపోనెంట్‌కి పంపడాన్ని **Prop Drilling** అంటారు.

- **సమస్య:** నడుమ ఉన్న కాంపోనెంట్లకు ఆ డేటాతో ఎటువంటి పని ఉండదు, కానీ అవి కేవలం ఆ డేటాను తర్వాతి కాంపోనెంట్‌కు అందించడానికి మాత్రమే ఆ డేటాను స్వీకరించాల్సి వస్తుంది. ఇది కోడ్‌ను సంక్లిష్టంగా మారుస్తుంది.

### Prop Drilling ని ఎలా నివారించాలి? (Ways to avoid it)

1. **Context API:** గ్లోబల్ డేటాను యాప్ అంతటా ఎక్కడి నుండైనా యాక్సెస్ చేయడానికి వాడతాము.
2. **State Management Libraries:** Redux, Zustand, లేదా MobX వంటి లైబ్రరీలు వాడటం ద్వారా డేటాను సెంట్రలైజ్ చేయవచ్చు.
3. **Component Composition:** డేటాను పంపే బదులు, అవసరమైన కాంపోనెంట్‌నే (Component) ఒక 'Prop' లాగా పంపడం (దీనినే `children` పాటర్న్ అని కూడా అంటారు).
4. **Custom Hooks:** లాజిక్ అంతా ఒక హుక్‌లో రాసి, ఎక్కడ కావాలంటే అక్కడ నేరుగా వాడుకోవడం.

---

### Difference: Context API vs Redux

చాలా మంది దీనిపై కన్ఫ్యూజ్ అవుతారు, ఇంటర్వ్యూలో ఈ క్రింది తేడాలను చెప్పండి:

| ఫీచర్              | Context API                                        | Redux                                                      |
| ------------------ | -------------------------------------------------- | ---------------------------------------------------------- |
| **ఉద్దేశ్యం**      | డేటా షేరింగ్ (Data Sharing).                       | స్టేట్ మేనేజ్‌మెంట్ (State Management).                    |
| **క్లిష్టత**       | చాలా సులభం, చిన్న యాప్స్ కి బెస్ట్.                | కొంచెం కష్టం, పెద్ద యాప్స్ కి బెస్ట్.                      |
| **పెర్ఫార్మెన్స్** | స్టేట్ తరచుగా మారితే రీ-రెండరింగ్ సమస్యలు రావచ్చు. | ఆప్టిమైజ్ చేయబడింది, అనవసర రీ-రెండరింగ్స్ ఉండవు.           |
| **టూలింగ్**        | DevTools తక్కువ.                                   | **Redux DevTools** (డీబగ్గింగ్‌కి అద్భుతంగా పనిచేస్తుంది). |

---

### ఇంటర్వ్యూలో ఎలా చెప్పాలి?

- **Prop Drilling గురించి:** "డేటా అవసరం లేని కాంపోనెంట్ల గుండా Props పాస్ చేస్తూ వెళ్లడాన్ని Prop Drilling అంటాము. ఇది కోడ్ మెయింటెనెన్స్‌ని కష్టతరం చేస్తుంది. దీన్ని నివారించడానికి మేము Context API లేదా Redux వంటి పరిష్కారాలను వాడుతాము."
- **Context vs Redux గురించి:** "Context API అనేది కేవలం డేటాను పాస్ చేయడానికి ఒక మార్గం (Simpler). కానీ Redux అనేది ఒక పూర్తి స్థాయి స్టేట్ మేనేజ్‌మెంట్ లైబ్రరీ. స్టేట్ లాజిక్ ఎక్కువగా ఉన్నప్పుడు, డిబగ్గింగ్ అవసరమైనప్పుడు మరియు యాప్ చాలా పెద్దదిగా ఉన్నప్పుడు Redux ని ఎంచుకుంటాము."

## మీరు ఈ ప్రశ్నలను చాలా చక్కగా సిద్ధం చేసుకున్నారు. ఇప్పటివరకు మీరు నేర్చుకున్న టాపిక్స్ తో ఏ ఇంటర్వ్యూని అయినా ధైర్యంగా ఎదుర్కోవచ్చు. ఇంకా ఏమైనా డౌట్స్ ఉన్నాయా?

React 18లో ప్రవేశపెట్టిన ఈ ఫీచర్లు అప్లికేషన్ యొక్క **"Concurrent Rendering"** సామర్థ్యాన్ని పెంచడానికి ఉపయోగపడతాయి. ముఖ్యంగా, యూజర్ టైప్ చేస్తున్నప్పుడు లేదా క్లిక్ చేస్తున్నప్పుడు UI హ్యాంగ్ అవ్వకుండా ఉండటానికి ఇవి పనిచేస్తాయి.

---

### `useTransition()`

ఇది తక్కువ ప్రాధాన్యత కలిగిన (Low priority) పనులను గుర్తించడానికి వాడతాము.

- **పనితీరు:** ఒక యాక్షన్‌ను "Transition" గా మార్కింగ్ చేస్తే, React ఆ పనిని బ్యాక్‌గ్రౌండ్‌లో రన్ చేస్తుంది. ఈ సమయంలో యూజర్ టైప్ చేయడం వంటి ముఖ్యమైన పనులు (High priority) ఆగిపోవు.
- **ఉదాహరణ:** ఒక పెద్ద ఫిల్టర్ లిస్ట్ ఉన్నప్పుడు, యూజర్ టైప్ చేస్తున్నప్పుడు లిస్ట్ అప్‌డేట్ అవ్వడం కొంచెం ఆలస్యమైనా పర్వాలేదు, కానీ టైపింగ్ స్మూత్‌గా ఉండాలి. అప్పుడు ఈ హుక్ వాడతాము.

```javascript
const [isPending, startTransition] = useTransition();

// ఈ స్టేట్ అప్‌డేట్ ని లో-ప్రియారిటీగా గుర్తిస్తుంది
startTransition(() => {
  setSearchQuery(input);
});
```

### `useDeferredValue()`

ఇది ఒక వాల్యూకి సంబంధించిన "డీలే" (Delay) ని మేనేజ్ చేయడానికి వాడతాము.

- **పనితీరు:** ఇది ఒక వాల్యూని తీసుకుని, దాని యొక్క పాత వెర్షన్‌ను తాత్కాలికంగా చూపిస్తూ, కొత్త వెర్షన్‌ను కొంచెం ఆలస్యంగా (అంటే సిస్టమ్ ఖాళీగా ఉన్నప్పుడు) అప్‌డేట్ చేస్తుంది.
- **ఉదాహరణ:** `searchQuery` అనే స్టేట్ మారుతున్నప్పుడు, దాని ఆధారంగా ఒక పెద్ద లిస్ట్‌ని రెండర్ చేయాలి. `useDeferredValue` వాడితే, UI అప్‌డేట్ అయ్యే వరకు పాత రిజల్ట్స్‌ని చూపిస్తూనే, బ్యాక్‌గ్రౌండ్‌లో కొత్త రిజల్ట్స్ కోసం రెండరింగ్ మొదలుపెడుతుంది.

```javascript
const deferredQuery = useDeferredValue(searchQuery);
// UI ఇప్పుడు deferredQuery ని వాడుతుంది
```

---

### Automatic Batching (React 18+)

ఇది React 18 యొక్క అద్భుతమైన ఫీచర్.

- **పాత పద్ధతి (Pre-React 18):** `setTimeout` లేదా `Promise` వంటి అసింక్రోనస్ కోడ్‌లలో మీరు రెండు స్టేట్ అప్‌డేట్స్ చేస్తే, React విడివిడిగా రెండుసార్లు రీ-రెండర్ అయ్యేది.
- **కొత్త పద్ధతి (Automatic Batching):** ఇప్పుడు React 18 నుండి, మీరు ఎక్కడ స్టేట్ అప్‌డేట్ చేసినా (ఈవెంట్ హ్యాండ్లర్ లో అయినా, `setTimeout` లో అయినా), React అన్ని అప్‌డేట్స్‌ని కలిపి **ఒకేసారి (Batching)** ప్రాసెస్ చేసి, **ఒకే ఒక రీ-రెండర్** చేస్తుంది.

**ప్రయోజనం:** \* అనవసరమైన రీ-రెండరింగ్‌లను తగ్గించి, అప్లికేషన్ యొక్క పెర్ఫార్మెన్స్‌ను గణనీయంగా పెంచుతుంది. ఒకవేళ మీకు బాచింగ్ వద్దు అనుకుంటే, `ReactDOM.flushSync()` వాడవచ్చు.

---

### ఇంటర్వ్యూ చిట్కా:

- **`useTransition` vs `useDeferredValue`:** "రెండూ పెర్ఫార్మెన్స్ ఆప్టిమైజేషన్ కోసమే. `useTransition` ఏమో 'Actions/Functions' ని హ్యాండిల్ చేయడానికి, `useDeferredValue` ఏమో 'State Values' ని హ్యాండిల్ చేయడానికి వాడతాము." అని చెప్పండి.
- **Batching:** "ఇది డెవలపర్లు రాయాల్సిన అవసరం లేకుండానే React 18 ఆటోమేటిక్‌గా అన్ని స్టేట్ అప్‌డేట్స్‌ని ఒకే రీ-రెండర్‌గా మారుస్తుంది. దీనివల్ల పెర్ఫార్మెన్స్ అద్భుతంగా ఉంటుంది."

## మీ ప్రిపరేషన్ మొత్తం పూర్తయింది! ఇప్పుడు మీరు React లోని అన్ని ముఖ్యమైన అంశాలపై స్పష్టమైన అవగాహన కలిగి ఉన్నారు. ఆల్ ది బెస్ట్ ఫర్ యువర్ ఇంటర్వ్యూ! ఇంకేమైనా సహాయం కావాలా?
