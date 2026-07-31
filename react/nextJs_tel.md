Since you're already learning **React**, **Node.js**, **AWS**, **Prisma**, **NestJS**, **Jest**, **Microservices**, and preparing for **Node.js interviews**, the next logical step is mastering **Next.js**.

# Next.js Roadmap (2026)

> **Goal:** Become production-ready and crack Senior Frontend / Full Stack interviews.

---

# [1 — Next.js Fundamentals](#1--nextjs-fundamentals-1)

## 1. What is Next.js?

Learn

- Why Next.js?
- React vs Next.js
- SSR
- CSR
- SSG
- ISR
- Server Components
- Client Components
- Edge Runtime

Interview Questions

1. What is Next.js?
2. Why use Next.js over React?
3. What problems does Next.js solve?
4. Explain SSR.
5. Explain CSR.
6. Explain SSG.
7. Explain ISR.
8. Explain Server Components.
9. Explain Client Components.
10. When would you use each rendering strategy?

---

# [2 — Installation & Project Structure](#2--installation--project-structure-1)

Learn

```
npx create-next-app@latest
```

Project structure

```
app/
pages/
public/
components/
lib/
hooks/
styles/
middleware.ts
next.config.ts
```

Know

```
package.json
tsconfig.json
next.config.js
.env
```

Interview Questions

1. Explain Next.js folder structure.
2. Difference between app and pages router.
3. Why use app router?
4. What is public folder?
5. What belongs inside lib?

---

# [3 — Routing](#3--routing-1)

Learn

```
app/

page.tsx

about/page.tsx

blog/[id]/page.tsx

blog/[...slug]

blog/[[...slug]]
```

Nested Routes

Layouts

Groups

Parallel Routes

Intercepting Routes

Interview Questions

1. Explain File System Routing.
2. Dynamic Routes?
3. Catch-all routes?
4. Optional catch-all?
5. Route Groups?
6. Nested Layouts?
7. Parallel Routes?
8. Intercepting Routes?

---

# [4 — Layouts](#4--layouts-1)

Learn

```
layout.tsx

template.tsx

loading.tsx

error.tsx

not-found.tsx
```

Interview Questions

1. Difference between layout and template?
2. How loading.tsx works?
3. How error.tsx works?
4. When is not-found.tsx used?

---

# [5 — Components](#5--components-1)

Learn

Server Components

```
async function Products() {}
```

Client Components

```
"use client"
```

Interview Questions

1. Difference between Server and Client Components.
2. Why are Server Components faster?
3. Can Server Components use useState?
4. Can Client Components access DB?

---

# [6 — Data Fetching](#6--data-fetching-1)

Learn

```
fetch()

axios

cache

revalidate

force-cache

no-store
```

Interview Questions

1. How does fetch work in Next.js?
2. Explain cache.
3. Explain revalidate.
4. Difference between no-store and force-cache.
5. When use axios?

---

# [7 — Rendering](#7--rendering-1)

Master

SSR

```
dynamic rendering
```

SSG

```
build time
```

ISR

```
revalidate
```

Streaming

Partial Rendering

Interview Questions

1. SSR flow?
2. SSG flow?
3. ISR flow?
4. Streaming?
5. Partial Rendering?

---

# [8 — Server Actions](#8--server-actions-1)

Learn

```
"use server"
```

Forms

Mutations

Database updates

Interview Questions

1. What are Server Actions?
2. Why better than API routes?
3. Security advantages?
4. Can Server Actions access DB?

---

# [9 — API Routes](#9--api-routes-1)

Learn

```
app/api/users/route.ts
```

GET

POST

PUT

DELETE

PATCH

Interview Questions

1. How create API Route?
2. Explain route.ts.
3. Middleware?
4. Request and Response?

---

# [10 — Authentication](#10--authentication-1)

Learn

JWT

Cookies

Session

OAuth

Google Login

GitHub Login

Role Based Access

Libraries

- Auth.js (formerly NextAuth)
- Clerk
- Supabase Auth

Interview Questions

1. Authentication vs Authorization?
2. JWT flow?
3. Cookie vs LocalStorage?
4. Secure authentication?
5. Refresh tokens?

---

# [11 — Middleware](#11--middleware-1)

Learn

```
middleware.ts
```

Authentication

Redirect

Localization

Headers

Interview Questions

1. Middleware flow?
2. Runs before what?
3. Common use cases?
4. Performance considerations?

---

# [12 — Image Optimization](#12--image-optimization-1)

Learn

```
<Image />
```

Lazy Loading

Responsive Images

Blur Placeholder

Interview Questions

1. Why use Image component?
2. How lazy loading works?
3. Remote image configuration?

---

# 13 — Fonts

Learn

```
next/font/google
```

Interview Questions

1. Why next/font?
2. Benefits over CSS import?

---

# [14 — Metadata & SEO](#14--metadata--seo-1)

Learn

```
export const metadata
```

OpenGraph

Twitter Cards

robots.txt

sitemap.xml

Interview Questions

1. SEO in Next.js?
2. Metadata API?
3. Dynamic metadata?
4. Generate sitemap?

---

# 15 — Styling

Learn

CSS Modules

Tailwind CSS

SCSS

Styled Components

Emotion

Interview Questions

1. CSS Modules?
2. Tailwind advantages?
3. Global CSS?
4. CSS-in-JS?

---

# [16 — State Management](#16--state-management-1)

Learn

React Context

Redux Toolkit

Zustand

Jotai

TanStack Query

Interview Questions

1. When use Context?
2. Redux vs Zustand?
3. TanStack Query?
4. Server State vs Client State?

---

# [17 — Forms](#17--forms-1)

Learn

React Hook Form

Zod

Server Actions

Validation

Interview Questions

1. Why React Hook Form?
2. Zod?
3. Client validation?
4. Server validation?

---

# 18 — Database

Learn

Prisma

MongoDB

PostgreSQL

Neon

PlanetScale

Interview Questions

1. Prisma with Next.js?
2. Where instantiate Prisma?
3. Connection pooling?
4. Edge limitations?

---

# [19 — Caching](#19--caching-1)

Learn

Request Cache

Router Cache

Data Cache

Full Route Cache

React Cache

Interview Questions

1. Explain Next.js caching.
2. Cache invalidation?
3. Revalidation?
4. Router cache?

---

# [20 — Performance](#20--performance-1)

Learn

Streaming

Suspense

Code Splitting

Dynamic Imports

Prefetching

Bundle Analysis

Interview Questions

1. Dynamic imports?
2. Suspense?
3. Code splitting?
4. Bundle optimization?
5. Lazy loading?

---

# [21 — Deployment](#21--deployment-1)

Learn

Environment Variables

Build

Standalone Output

Docker

Vercel

AWS

Interview Questions

1. How deploy Next.js?
2. Environment variables?
3. Static export?
4. Docker deployment?
5. Vercel advantages?

---

# [22 — Testing](#22--testing-1)

Learn

Jest

React Testing Library

Playwright

Cypress

Interview Questions

1. Unit testing?
2. Integration testing?
3. E2E testing?
4. Mocking fetch?

---

# [23 — Advanced Topics](#23--advanced-topics-1)

Learn

- Edge Functions
- Edge Runtime
- Route Handlers
- Parallel Routes
- Intercepting Routes
- React Server Components Internals
- Turbopack
- Server Streaming
- Partial Prerendering (PPR)
- Webhooks
- Incremental Cache
- Image CDN
- Middleware Rewrites
- Internationalization (i18n)
- Multi-tenant Applications

Interview Questions

1. Explain Edge Runtime.
2. Node Runtime vs Edge Runtime?
3. How Server Components work internally?
4. Explain Partial Prerendering.
5. What is Streaming SSR?
6. How does hydration work?
7. What is React Flight?
8. What is Turbopack?
9. Explain Route Handlers.
10. Explain Middleware rewrites vs redirects.

---

# Full-Stack Project Ideas

Build these in order to reinforce the roadmap:

1. **Authentication System** (JWT/Auth.js + Prisma)
2. **E-commerce Store** (Cart, Checkout, Payments)
3. **Blog CMS** (Markdown, SEO, ISR)
4. **Netflix Clone** (Streaming UI, Dynamic Routes)
5. **Real-time Chat** (WebSockets/Socket.IO)
6. **Project Management App** (Kanban, RBAC)
7. **Social Media Clone** (Posts, Comments, Likes)
8. **Admin Dashboard** (Charts, Analytics)
9. **AI Chat App** (Streaming Responses, Server Actions)
10. **Multi-tenant SaaS** (Organizations, Billing, RBAC)

---

# [Top 50 Next.js Interview Questions](#top-50-nextjs-interview-questions-1)

### Beginner (1–10)

1. What is Next.js?
2. Why Next.js instead of React?
3. Explain App Router.
4. What is file-based routing?
5. What is `page.tsx`?
6. What is `layout.tsx`?
7. What is `loading.tsx`?
8. What is `error.tsx`?
9. What is `not-found.tsx`?
10. How do you create API routes?

### Intermediate (11–30)

11. SSR vs CSR?
12. SSG vs ISR?
13. Server vs Client Components?
14. Hydration?
15. Streaming?
16. Dynamic routing?
17. Middleware?
18. Route Handlers?
19. Server Actions?
20. Metadata API?
21. Image optimization?
22. Font optimization?
23. Caching strategies?
24. Dynamic imports?
25. Environment variables?
26. Authentication flow?
27. React Hook Form integration?
28. Prisma integration?
29. Deployment options?
30. SEO optimization?

### Advanced (31–50)

31. React Flight protocol?
32. Partial Prerendering (PPR)?
33. Edge Runtime vs Node Runtime?
34. Full Route Cache?
35. Router Cache?
36. Data Cache?
37. Revalidation tags?
38. `revalidatePath()` vs `revalidateTag()`?
39. Streaming SSR internals?
40. Server Actions security?
41. Middleware performance?
42. Parallel Routes?
43. Intercepting Routes?
44. Turbopack architecture?
45. Bundle optimization techniques?
46. Multi-region deployments?
47. Preventing hydration mismatches?
48. Optimizing Core Web Vitals in Next.js?
49. Building a scalable SaaS with the App Router?
50. How would you architect a production-grade Next.js application for millions of users?

---

## Suggested learning order

1. React fundamentals (hooks, context, routing)
2. Next.js App Router and layouts
3. Server vs Client Components
4. Routing and data fetching
5. Server Actions and Route Handlers
6. Authentication and authorization
7. Prisma and databases
8. Caching and rendering strategies
9. Performance optimization
10. Testing and deployment (Vercel, Docker, AWS)

Following this progression will prepare you for both modern Next.js development and interviews ranging from junior to senior full-stack roles.

---

# 1 — Next.js Fundamentals

### 1. What is Next.js?

Next.js అనేది React కోసం తయారు చేయబడిన ఒక **Framework**.

సాధారణంగా React అనేది ఒక **Library** మాత్రమే. మీరు Reactతో ఒక అప్లికేషన్ తయారు చేస్తున్నప్పుడు, Routing, Server-side rendering, SEO ఆప్టిమైజేషన్ వంటి పనుల కోసం వేరే ఇతర లైబ్రరీలను (libraries) వెతుక్కోవాలి. కానీ Next.js లో ఇవన్నీ "out-of-the-box" వస్తాయి. అంటే, అప్లికేషన్ క్రియేట్ చేసినప్పటి నుంచే ఇవన్నీ సెట్ అయి ఉంటాయి.

---

### 2. Why Next.js? (ఎందుకు వాడాలి?)

Next.js ఎందుకు పాపులర్ అంటే:

- **SEO (Search Engine Optimization):** React యాప్స్ సాధారణంగా Client-side rendering చేస్తాయి, దీనివల్ల గూగుల్ వంటి సెర్చ్ ఇంజన్లకు కంటెంట్ సరిగ్గా కనిపించదు. Next.js ఈ సమస్యను తీరుస్తుంది.
- **Performance:** ఇది వేగంగా లోడ్ అవుతుంది (Server-side rendering వల్ల).
- **Zero Config:** Routing కోసం `react-router-dom` లాంటివి మనం విడిగా కాన్ఫిగర్ చేయాల్సిన పనిలేదు. ఫైల్ సిస్టమ్ ద్వారానే రూటింగ్ జరుగుతుంది.
- **API Routes:** Backend కోడ్ రాయడానికి సపరేట్ సర్వర్ అవసరం లేకుండా, Next.js లోనే API ఎండ్‌పాయింట్స్ రాసుకోవచ్చు.

---

### 3. React vs Next.js

| Feature       | React                                  | Next.js                          |
| ------------- | -------------------------------------- | -------------------------------- |
| **Rendering** | Client-Side Rendering (CSR)            | SSR, SSG, CSR & ISR (Hybrid)     |
| **Routing**   | `react-router-dom` ఇన్‌స్టాల్ చేయాలి   | ఫైల్ సిస్టమ్ బేస్డ్ (Built-in)   |
| **Setup**     | Webpack/Vite కాన్ఫిగరేషన్ అవసరం        | Zero Configuration               |
| **SEO**       | కొంచెం కష్టం (Client side అవ్వడం వల్ల) | చాలా సులభం (Server side renders) |

---

### 4. CSR, SSR, SSG (Rendering Methods)

ఇవి నెక్స్ట్ జెఎస్‌లో చాలా ముఖ్యమైన కాన్సెప్ట్స్:

#### **CSR (Client-Side Rendering):**

- **ఏంటి?**: యూజర్ బ్రౌజర్‌కి రిక్వెస్ట్ పంపినప్పుడు, సర్వర్ ఒక ఖాళీ HTML పేజీని మరియు JavaScript ఫైల్‌ని పంపిస్తుంది. బ్రౌజర్ ఆ JS ఫైల్‌ని రన్ చేసి, డేటాను Fetch చేసి, పేజీని లోడ్ చేస్తుంది.
- **డ్రాబ్యాక్**: ఇనిషియల్ లోడ్ టైమ్ కొంచెం ఎక్కువ ఉంటుంది. SEO కి మంచిది కాదు.
- **ఉదాహరణ**: React లో మనం `useEffect` లో డేటా Fetch చేస్తాం కదా, అదే CSR.

#### **SSR (Server-Side Rendering):**

- **ఏంటి?**: ప్రతి రిక్వెస్ట్ వచ్చినప్పుడు, సర్వర్ ఆ పేజీని డేటాతో కలిపి రెండర్ చేసి, ఫైనల్ HTMLని బ్రౌజర్‌కి పంపిస్తుంది.
- **ప్రయోజనం**: పేజీ వెంటనే లోడ్ అవుతుంది. SEO కి చాలా మంచిది.
- **ఉదాహరణ**: యూజర్ ప్రొఫైల్ పేజీలు (ప్రతిసారి లేటెస్ట్ డేటా కావాలి).

#### **SSG (Static Site Generation):**

- **ఏంటి?**: అప్లికేషన్ బిల్డ్ చేసే టైమ్‌లోనే HTML పేజీలు జనరేట్ అవుతాయి. సర్వర్ ప్రతి రిక్వెస్ట్‌కి కష్టపడక్కర్లేదు, ముందే తయారైన ఫైల్స్‌ని ఇచ్చేస్తుంది.
- **ప్రయోజనం**: ఇది అత్యంత వేగవంతమైనది (Fastest loading).
- **ఉదాహరణ**: బ్లాగ్ పోస్ట్లు, మార్కెటింగ్ పేజీలు (డేటా మారదు).

---

**చిన్న సలహా:**
Next.js లో **App Router** అనే కొత్త కాన్సెప్ట్ వచ్చింది. మీరు నేర్చుకునేటప్పుడు `pages` డైరెక్టరీ కంటే `app` డైరెక్టరీ మీద ఫోకస్ చేయడం మంచిది, ఎందుకంటే ఇప్పుడు అదే స్టాండర్డ్.

---

ఖచ్చితంగా! నెక్స్ట్ జెఎస్‌లో మీరు అడిగిన ఈ నాలుగు అంశాలు చాలా ముఖ్యమైనవి. వీటిని సింపుల్ టెర్మినాలజీతో అర్థం చేసుకుందాం.

---

### 5. ISR (Incremental Static Regeneration)

ఇది **SSG**కి ఒక అప్‌గ్రేడెడ్ వెర్షన్.

- **ఎందుకు?**: SSG లో ఒకసారి పేజీని బిల్డ్ చేసిన తర్వాత, డేటా మారితే మళ్ళీ మొత్తం యాప్‌ని రీ-బిల్డ్ చేయాల్సి వచ్చేది. ఇది పెద్ద యాప్స్‌కి చాలా కష్టం.
- **ISR అంటే**: ఇది బ్యాక్‌గ్రౌండ్‌లో పేజీని రీ-జనరేట్ (Re-generate) చేయడానికి అనుమతిస్తుంది. మీరు ఒక `revalidate` టైమ్ (సెకన్లలో) సెట్ చేస్తే, ఆ టైమ్ తర్వాత ఎవరైనా యూజర్ పేజీని విజిట్ చేసినప్పుడు, నెక్స్ట్ జెఎస్ బ్యాక్‌గ్రౌండ్‌లో డేటాను అప్‌డేట్ చేసి కొత్త HTMLని రెడీ చేస్తుంది.
- **ప్రయోజనం**: మీకు మంచి పెర్ఫార్మెన్స్ ఉంటుంది, అలాగే డేటా కూడా తాజాగా ఉంటుంది.

---

### 6. Server Components vs. Client Components

Next.js లో ఇది చాలా కన్ఫ్యూజింగ్ కాన్సెప్ట్, కానీ సింపుల్!

| Feature                | Server Components                      | Client Components                |
| ---------------------- | -------------------------------------- | -------------------------------- |
| **ఎక్కడ రన్ అవుతాయి?** | సర్వర్ మీద (Server Side)               | బ్రౌజర్‌లో (Browser/Client Side) |
| **JavaScript**         | క్లయింట్‌కి పంపదు (Bundle size తక్కువ) | క్లయింట్‌కి పంపిస్తుంది          |
| **Hooks**              | `useState`, `useEffect` వాడలేము        | `useState`, `useEffect` వాడవచ్చు |
| **డేటా ఫెచింగ్**       | నేరుగా డేటాబేస్ కాల్స్ చేయవచ్చు        | API ద్వారా మాత్రమే చేయాలి        |

- **Server Components**: నెక్స్ట్ జెఎస్‌లో బై-డిఫాల్ట్ అన్నీ సర్వర్ కాంపోనెంట్లే. మీరు డేటాబేస్ నుండి డేటా తెచ్చుకోవాలన్నా లేదా సెక్యూరిటీ అవసరమైన పనులు చేయాలన్నా వీటిని వాడాలి.
- **Client Components**: ఎక్కడైతే యూజర్ ఇంటరాక్షన్ (Button clicks, `useState`, `useEffect`) ఉంటుందో, అక్కడ మీరు ఫైల్ పైన `'use client'` అని రాయాలి.

---

### 7. Edge Runtime

ఇది కోడ్ రన్ అయ్యే ఎన్విరాన్మెంట్.

- **సాధారణంగా (Node.js)**: మన సర్వర్ కోడ్ ఒకే చోట (ఉదాహరణకు US లోని ఒక డేటా సెంటర్‌లో) ఉంటుంది. ఇండియాలో ఉన్న యూజర్ రిక్వెస్ట్ పంపితే, అది US వరకు వెళ్లి రావాలి (Latancy ఎక్కువ).
- **Edge Runtime**: ఇది మీ కోడ్‌ని యూజర్‌కు దగ్గరగా ఉన్న సర్వర్లలో (CDN Edge locations - ప్రపంచవ్యాప్తంగా వందల కొద్దీ ఉంటాయి) రన్ చేస్తుంది.
- **ప్రయోజనం**: ఇది చాలా లైట్‌వెయిట్ (V8 ఇంజిన్ మీద రన్ అవుతుంది) మరియు సూపర్ ఫాస్ట్. చిన్న చిన్న పనులు (Middleware, simple API calls) కోసం ఇది బెస్ట్.

---

**ఒక చిన్న చిట్కా:**
నేర్చుకునేటప్పుడు **Server Components** ని ఎక్కువగా వాడటానికి ప్రయత్నించండి. మనకు నిజంగా అవసరమైనప్పుడు (Interactivity కోసం) మాత్రమే `'use client'` అని పెట్టి **Client Components** ని క్రియేట్ చేయండి. దీనివల్ల మీ అప్లికేషన్ చాలా ఫాస్ట్‌గా ఉంటుంది.

---

## Interview Questions

ఇంటర్వ్యూలో నెక్స్ట్ జెఎస్ (Next.js) గురించి అడిగినప్పుడు, మీరు పాయింట్-టు-పాయింట్ క్లియర్ గా సమాధానం చెప్పాలి. ఇక్కడ ఇంటర్వ్యూ స్టైల్ సమాధానాలు తెలుగులో ఉన్నాయి:

---

### 1. What is Next.js?

Next.js అనేది **React Framework**. ఇది React లైబ్రరీకి పైన తయారయ్యింది. వెబ్ అప్లికేషన్లను బిల్డ్ చేయడానికి అవసరమైన రూటింగ్ (Routing), సర్వర్-సైడ్ రెండరింగ్ (SSR), ఇమేజ్ ఆప్టిమైజేషన్ వంటి అన్ని ఫీచర్లను ఇది ఒకే చోట (out-of-the-box) అందిస్తుంది.

### 2. Why use Next.js over React?

React అనేది కేవలం UI ని బిల్డ్ చేసే లైబ్రరీ మాత్రమే. రూటింగ్, డేటా ఫెచింగ్ కోసం మనం అదనంగా లైబ్రరీలను వాడాలి. కానీ Next.js లో:

- **Zero Configuration**: రూటింగ్ కోసం ఫైల్ సిస్టమ్ బేస్డ్ అప్రోచ్ ఉంటుంది.
- **SEO**: సర్వర్-సైడ్ రెండరింగ్ వల్ల సెర్చ్ ఇంజిన్స్ మన కంటెంట్‌ను సులభంగా ఇండెక్స్ చేస్తాయి.
- **Performance**: ఇమేజ్ ఆప్టిమైజేషన్, ఫాంట్ ఆప్టిమైజేషన్ వంటివి ఇన్-బిల్ట్‌గా ఉంటాయి.

### 3. What problems does Next.js solve?

- **SEO సమస్య**: Client-side rendering వల్ల గూగుల్ బాట్స్ కంటెంట్‌ని సరిగ్గా చూడలేవు, Next.js దీన్ని సాల్వ్ చేస్తుంది.
- **Initial Load Time**: CSR లో బ్రౌజర్ మొత్తం బండిల్ డౌన్‌లోడ్ చేసే వరకు పేజీ ఖాళీగా ఉంటుంది. SSR ద్వారా ఫాస్ట్ లోడ్ అవుతుంది.
- **Complexity**: React లో మల్టిపుల్ లైబ్రరీల మేనేజ్మెంట్ కంటే, Next.js లో ఆ ఫీచర్లన్నీ నేరుగా ఉంటాయి.

---

### 4. Rendering Strategies (SSR, CSR, SSG, ISR)

- **SSR (Server-Side Rendering)**: ప్రతి రిక్వెస్ట్ వచ్చినప్పుడు సర్వర్ పేజీని రెండర్ చేస్తుంది. ఇది లేటెస్ట్ డేటా చూపించడానికి వాడతాము.
- **CSR (Client-Side Rendering)**: బ్రౌజర్ జావాస్క్రిప్ట్ డౌన్‌లోడ్ చేసి పేజీని రెండర్ చేస్తుంది. ఇది యూజర్ ఇంటరాక్షన్ ఎక్కువ ఉన్న యాప్స్ కి వాడతాము.
- **SSG (Static Site Generation)**: బిల్డ్ టైమ్ లోనే పేజీలు జనరేట్ అవుతాయి. ఇది కంటెంట్ మారనప్పుడు (ఉదా: About Us పేజీ) వాడతాము.
- **ISR (Incremental Static Regeneration)**: ఇది SSG లాగే ఉంటుంది, కానీ బ్యాక్‌గ్రౌండ్‌లో మనం సెట్ చేసిన టైమ్ ప్రకారం పేజీని అప్‌డేట్ చేస్తుంది.

### 5. Server vs. Client Components

- **Server Components**: ఇవి సర్వర్ మీద రన్ అవుతాయి. డేటాబేస్ కాల్స్ కి, సెక్యూరిటీ డేటాకి ఇవి బెస్ట్. ఇవి క్లయింట్ కి JS సైజుని తగ్గిస్తాయి.
- **Client Components**: ఇవి బ్రౌజర్ మీద రన్ అవుతాయి. బటన్ క్లిక్స్, `useState`, `useEffect` వంటి ఇంటరాక్టివిటీ కోసం వీటిని వాడాలి.

---

### 6. When would you use each? (ఇది ఇంపార్టెంట్!)

| Scenario                                                       | Strategy          |
| -------------------------------------------------------------- | ----------------- |
| **SEO చాలా ముఖ్యం (Blog, E-commerce)**                         | SSR లేదా SSG      |
| **డేటా ఎప్పుడూ మారుతూ ఉంటుంది (Stock Market, User Dashboard)** | SSR               |
| **కంటెంట్ మారదు (Landing page, Terms & Conditions)**           | SSG               |
| **డేటా అప్పుడప్పుడు మారుతుంది (Blog posts)**                   | ISR               |
| **యూజర్ ఇంటరాక్షన్ ఎక్కువ ఉంటే (Form, Chat app)**              | Client Components |

---

**ఇంటర్వ్యూ టిప్:**
ఎప్పుడైనా సమాధానం చెప్పేటప్పుడు, ఒకే పద్ధతిని వాడకూడదు అని చెప్పండి. Next.js లోని **"Hybrid Approach"** (అంటే అవసరానికి తగ్గట్టుగా SSR, SSG, CSR లను కలిపి వాడటం) గురించి చెప్తే ఇంటర్వ్యూయర్ చాలా ఇంప్రెస్ అవుతారు.

---

# 2 — Installation & Project Structure

Next.js ప్రాజెక్ట్ స్టార్ట్ చేయడం మరియు అందులోని ఫోల్డర్ స్ట్రక్చర్ అర్థం చేసుకోవడం చాలా ముఖ్యం. ఎందుకంటే Next.js ప్రాజెక్ట్ అంతా ఒక క్రమపద్ధతిలో ఉంటుంది.

---

### 1. Installation: `npx create-next-app@latest`

ఇది Next.js ప్రాజెక్ట్‌ను స్టార్ట్ చేయడానికి కావాల్సిన కమాండ్.

- **ఎలా చేయాలి?**: మీ టెర్మినల్ (terminal) లో ఈ కమాండ్ టైప్ చేయండి.
- **ఏం జరుగుతుంది?**: ఇది మిమ్మల్ని కొన్ని ప్రశ్నలు అడుగుతుంది (TypeScript కావాలా?, Tailwind CSS కావాలా?, `app` router వాడాలా? అని). మీరు 'Yes' అని సెలెక్ట్ చేసుకుంటే, ప్రాజెక్ట్‌కు కావలసిన అన్ని ఫైల్స్ మరియు కాన్ఫిగరేషన్స్‌ని ఇది ఆటోమేటిక్‌గా సెట్ చేస్తుంది.

---

### 2. Project Structure (ఫోల్డర్ స్ట్రక్చర్)

ప్రస్తుతం ఉన్న లేటెస్ట్ Next.js వెర్షన్లలో ఈ క్రింది విధంగా ఫోల్డర్స్ ఉంటాయి:

| Folder/File       | ఉద్దేశ్యం (Purpose)                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`app/`**        | ఇది మీ అప్లికేషన్ యొక్క హృదయం. Routing, Layouts, మరియు Pages అన్నీ ఇక్కడే ఉంటాయి. (ఇదే మోడ్రన్ అప్రోచ్).                                                  |
| **`pages/`**      | ఇది పాత (Legacy) పద్ధతి. ఒకవేళ మీరు పాత ప్రాజెక్ట్స్ మీద పనిచేస్తుంటే ఇది కనిపిస్తుంది. కొత్త ప్రాజెక్ట్స్‌లో `app/` డైరెక్టరీ ఉంటే `pages/` అవసరం ఉండదు. |
| **`public/`**     | ఇక్కడ మీరు ఇమేజెస్ (images), ఫాంట్స్ (fonts) వంటి స్టాటిక్ ఫైల్స్‌ను సేవ్ చేస్తారు. వీటిని బ్రౌజర్ నేరుగా యాక్సెస్ చేయగలదు.                               |
| **`components/`** | రీ-యూజబుల్ UI ముక్కలు (Button, Navbar, Sidebar) అన్నీ ఇక్కడ ఉంటాయి.                                                                                       |
| **`lib/`**        | డేటాబేస్ కనెక్షన్స్, API ఫంక్షన్స్ లేదా కామన్ లాజిక్ (Utilities) రాసుకోవడానికి వాడతాం.                                                                    |
| **`hooks/`**      | మీ ప్రాజెక్ట్‌కి కావాల్సిన కస్టమ్ React Hooks ఇక్కడ రాస్తారు.                                                                                             |
| **`styles/`**     | గ్లోబల్ CSS ఫైల్స్ లేదా Tailwind CSS కాన్ఫిగరేషన్ ఇక్కడ ఉంటుంది.                                                                                          |

---

### 3. Special Files

ఇవి ప్రాజెక్ట్ లో చాలా కీలకమైన ఫైల్స్:

#### **`middleware.ts`**

- **ఏంటి?**: ఇది ఒక "Gatekeeper" లాంటిది. యూజర్ ఒక పేజీని చూడకముందే, మీరు ఈ ఫైల్‌లో ఏదైనా చెక్ చేయవచ్చు.
- **ఉదాహరణ**: యూజర్ లాగిన్ అయ్యాడా లేదా అని చెక్ చేసి, లేకపోతే లాగిన్ పేజీకి రీడైరెక్ట్ (Redirect) చేయడం లేదా అథెంటికేషన్ (Authentication) కీలను వెరిఫై చేయడం.

#### **`next.config.ts`**

- **ఏంటి?**: ఇది Next.js అప్లికేషన్ యొక్క మెయిన్ కాన్ఫిగరేషన్ ఫైల్.
- **ఏం చేస్తాం?**: Environment Variables, Redirects, Rewrites, లేదా ఇమేజ్ డొమైన్స్ వంటి సెట్టింగ్స్ మార్చడానికి దీన్ని వాడతాం.

---

### ఒక చిన్న సలహా (Pro-tip for Developers):

మీరు ప్రాజెక్ట్ మొదలుపెట్టేటప్పుడు **`app/`** డైరెక్టరీనే వాడండి. ఒకప్పుడు `pages/` వాడేవారు, కానీ ఇప్పుడు Next.js టీమ్ కూడా **App Router** ని రికమెండ్ చేస్తోంది. ఇది సర్వర్ కాంపోనెంట్స్, లేవుట్స్ (Layouts) మరియు పెర్ఫార్మెన్స్ పరంగా చాలా అడ్వాన్స్‌డ్.

## Interview Questions

Next.js ప్రాజెక్ట్ స్ట్రక్చర్ మరియు Router ల గురించి మీరు అడిగిన ప్రశ్నలు చాలా ఇంపార్టెంట్. డెవలపర్‌గా ఇవి తెలిస్తే మీ కోడ్ చాలా క్లీన్‌గా మరియు ప్రొఫెషనల్‌గా ఉంటుంది.

ఇక్కడ వివరణ చూడండి:

### 1. Next.js Folder Structure (ఒక క్లుప్త వివరణ)

Next.js ప్రాజెక్ట్ లో ఫోల్డర్ స్ట్రక్చర్ అనేది చాలా వరకు మనం వాడే Router మీద ఆధారపడి ఉంటుంది.

- **`app/`**: ఇది మన అప్లికేషన్ యొక్క మెయిన్ డైరెక్టరీ. రూటింగ్, లేఅవుట్స్ (Layouts), పేజీలు అన్నీ ఇక్కడే ఉంటాయి.
- **`public/`**: స్టాటిక్ ఫైల్స్ (Images, Fonts, `favicon.ico`, `robots.txt`) ఇక్కడ ఉంటాయి.
- **`components/`**: మళ్ళీ మళ్ళీ వాడే UI ముక్కలు (Navbar, Footer, Button) ఇక్కడ ఉంటాయి.
- **`lib/`**: ఇక్కడ మన అప్లికేషన్‌కి కావలసిన Shared Logic లేదా Utilities ఉంటాయి.
- **`styles/`**: గ్లోబల్ CSS లేదా Tailwind CSS కాన్ఫిగరేషన్స్ కోసం.

---

### 2. Difference between `app` vs `pages` Router

| ఫీచర్ (Feature)   | Pages Router (పాతది)                   | App Router (కొత్తది - Recommended)   |
| ----------------- | -------------------------------------- | ------------------------------------ |
| **Routing**       | ఫైల్ ఆధారితం (File-system)             | ఫోల్డర్ ఆధారితం (Directory-system)   |
| **Components**    | అన్నీ Client Components                | డిఫాల్ట్‌గా Server Components        |
| **Layouts**       | కష్టం (Custom implementation)          | ఈజీ (Nested Layouts సపోర్ట్ ఉంది)    |
| **Data Fetching** | `getServerSideProps`, `getStaticProps` | `async/await` (Server Components లో) |
| **Streaming**     | కష్టం                                  | సులభం (Loading states వాడొచ్చు)      |

---

### 3. Why use App Router? (ఎందుకు వాడాలి?)

ఇప్పుడున్న Next.js వెర్షన్లలో **App Router** వాడటమే ఉత్తమం. ఎందుకంటే:

1. **React Server Components (RSC)**: సర్వర్ సైడ్ రెండరింగ్ లో ఇది గేమ్ ఛేంజర్. కోడ్ సర్వర్ లోనే ఎగ్జిక్యూట్ అయ్యి, బ్రౌజర్‌కి కేవలం HTML మాత్రమే వెళ్తుంది. దీనివల్ల బండిల్ సైజ్ తగ్గుతుంది, పెర్ఫార్మెన్స్ పెరుగుతుంది.
2. **Nested Layouts**: ఒకే పేజీలో మల్టిపుల్ లేఅవుట్స్ (ఉదా: Dashboard కి సపరేట్ లేఅవుట్, Public పేజీలకు సపరేట్) చాలా ఈజీగా చేయవచ్చు.
3. **Loading & Error States**: `loading.tsx`, `error.tsx` వంటి ఫైల్స్ క్రియేట్ చేస్తే చాలు, Next.js ఆటోమేటిక్‌గా Loading/Error UI ని హ్యాండిల్ చేస్తుంది.
4. **Streaming**: పేజీ మొత్తం లోడ్ అయ్యే వరకు ఆగకుండా, డేటా వచ్చిన భాగాన్ని వెంటనే చూపించవచ్చు (దీన్నే Streaming అంటారు).

---

### 4. What is the `public` folder?

ఇది మీ అప్లికేషన్ యొక్క **"Public Assets"** ఫోల్డర్.

- ఇందులో ఉన్న ఫైల్స్ ని బ్రౌజర్ నేరుగా యాక్సెస్ చేయగలదు.
- ఉదాహరణకు: `public/logo.png` అని ఉంటే, బ్రౌజర్ లో `[http://your-site.com/logo.png](http://your-site.com/logo.png)` అని కొడితే అది కనిపిస్తుంది.
- ఏ ఫైల్స్ అయితే ప్రాసెస్ అవసరం లేదో (అంటే ఇమేజెస్, ఐకాన్స్, పిడిఎఫ్ ఫైల్స్), వాటిని ఇక్కడ పెట్టుకోవాలి.

---

### 5. What belongs inside `lib`?

`lib` ఫోల్డర్ అనేది Next.js లో ఒక కన్వెన్షన్ (అందరూ వాడే పద్ధతి). ఇది తప్పనిసరి కాదు, కానీ ఉంటే చాలా మంచిది. ఇందులో ఇవి ఉండవచ్చు:

- **Database Clients**: ఉదాహరణకు Prisma లేదా Drizzle కనెక్షన్స్ కోడ్.
- **Third-party API Configs**: Stripe, Auth0 లేదా ఇతర సర్వీసులను కాన్ఫిగర్ చేసే కోడ్.
- **Reusable Helper Functions**: ఉదాహరణకు `formatDate`, `calculatePrice`, లేదా `slugify` వంటి ఫంక్షన్స్.
- **Shared Logic**: ప్రాజెక్ట్ మొత్తం మీద ఒకటి కంటే ఎక్కువ కాంపోనెంట్లలో వాడే లాజిక్ ఫైల్స్.

**ఒక చిన్న సలహా:** మీరు కొత్తగా ప్రాజెక్ట్ స్టార్ట్ చేస్తుంటే, కళ్ళు మూసుకుని **App Router** నే ఎంచుకోండి! అది చాలా పవర్‌ఫుల్ మరియు లేటెస్ట్.

---

# 3 — Routing

```
app/

page.tsx

about/page.tsx

blog/[id]/page.tsx

blog/[...slug]

blog/[[...slug]]
```

Next.js లో **Routing** అనేది చాలా పవర్‌ఫుల్ మరియు సింపుల్. దీనిని "File-system based routing" అంటారు. అంటే, మీరు `app/` ఫోల్డర్ లో ఏ ఫోల్డర్ మరియు ఫైల్ క్రియేట్ చేస్తే, అదే మీ URL అవుతుంది.

ముఖ్యంగా గుర్తుంచుకోండి: **ఏ ఫోల్డర్‌ను మీరు రూట్ (Route) లాగా మార్చాలన్నా, అందులో ఖచ్చితంగా `page.tsx` అనే ఫైల్ ఉండాలి.**

దీని గురించి వివరంగా ఇక్కడ చూద్దాం:

---

### 1. `app/page.tsx` (Root Route)

ఇది మీ అప్లికేషన్ యొక్క **Home Page**.

- **URL**: `[yoursite.com/](https://yoursite.com/)`
- **ఉద్దేశ్యం**: మీ వెబ్‌సైట్ ఓపెన్ చేయగానే కనిపించే మొదటి పేజీ ఇదే.

### 2. `about/page.tsx` (Nested Route)

ఇది ఒక సింపుల్ స్టాటిక్ రూట్.

- **URL**: `[yoursite.com/about](https://yoursite.com/about)`
- **ఉద్దేశ్యం**: ఒకవేళ మీరు `contact` అని ఫోల్డర్ పెట్టి అందులో `page.tsx` పెడితే, అది `[yoursite.com/contact](https://yoursite.com/contact)` అవుతుంది.

### 3. `blog/[id]/page.tsx` (Dynamic Route)

ఇక్కడ `[id]` అనేది డైనమిక్ పారామీటర్.

- **URL**: `[yoursite.com/blog/1](https://yoursite.com/blog/1)`, `[yoursite.com/blog/my-first-post](https://yoursite.com/blog/my-first-post)` ఇలా ఏ ఐడీకైనా ఇది పనిచేస్తుంది.
- **ఉద్దేశ్యం**: ఒక్కొక్క యూజర్‌కి లేదా ఒక్కొక్క బ్లాగ్ పోస్ట్‌కి సపరేట్ పేజీలు క్రియేట్ చేయాల్సిన అవసరం లేదు. ఈ `id`ని మీరు కోడ్‌లో (Params ద్వారా) యాక్సెస్ చేసి డేటాబేస్ నుండి డేటా తెచ్చుకోవచ్చు.

### 4. `blog/[...slug]/page.tsx` (Catch-all Segment)

దీనిని **Catch-all route** అంటారు.

- **URL**: `[yoursite.com/blog/a](https://yoursite.com/blog/a)`, `[yoursite.com/blog/a/b](https://yoursite.com/blog/a/b)`, `[yoursite.com/blog/a/b/c](https://yoursite.com/blog/a/b/c)` ... ఇలా ఎన్ని పాత్స్ ఉన్నా అన్నీ ఈ ఒక్క ఫైల్ లోనే హ్యాండిల్ చేయవచ్చు.
- **ముఖ్యమైన విషయం**: ఇది `/blog/` (ఖాళీ) కి పనిచేయదు. కనీసం ఒక పారామీటర్ (ఉదా: `/blog/a`) ఉండాలి.

### 5. `blog/[[...slug]]/page.tsx` (Optional Catch-all Segment)

దీనిని **Optional Catch-all route** అంటారు.

- **URL**: పైన చెప్పిన అన్నింటితో పాటు, ఇది `[yoursite.com/blog/](https://yoursite.com/blog/)` (ఖాళీ) కి కూడా పనిచేస్తుంది.
- **ముఖ్యమైన విషయం**: `[[...slug]]` లో డబుల్ బ్రాకెట్స్ వాడటం వల్ల, అది ఆప్షనల్ (Optional) అవుతుంది.

---

### క్విక్ కంపారిజన్ టేబుల్ (Catch-all Routes)

| Route Path    | ఎప్పుడు వాడాలి?                            | `/blog/` కి పనిచేస్తుందా? |
| ------------- | ------------------------------------------ | ------------------------- |
| `[...slug]`   | పాత్ లో కనీసం ఒక వాల్యూ ఉండాలి (Mandatory) | లేదు (No)                 |
| `[[...slug]]` | పాత్ లేకపోయినా పనిచేయాలి (Optional)        | అవును (Yes)               |

---

**చిన్న ప్రాక్టీస్ టాస్క్:**
ఒకవేళ మీరు ఒక ఈ-కామర్స్ సైట్ బిల్డ్ చేస్తుంటే, `shop/[[...slug]]` అనే స్ట్రక్చర్ వాడితే... అది `shop/` (హోమ్ పేజ్), `shop/electronics` (Category), `shop/electronics/mobiles` (Sub-category) అన్నింటినీ హ్యాండిల్ చేయడానికి చాలా యూజ్ అవుతుంది.

---

Next.js లో ఇవి అడ్వాన్స్డ్ రూటింగ్ ఫీచర్స్. ఇవి అర్థం చేసుకుంటే మీరు కాంప్లెక్స్ వెబ్ యాప్స్ ని చాలా సులభంగా బిల్డ్ చేయవచ్చు.

---

### 1. Nested Routes

ఇది Next.js లో రూటింగ్ యొక్క బేసిక్ ఫౌండేషన్. ఒక ఫోల్డర్ లోపల ఇంకో ఫోల్డర్ పెట్టినప్పుడు, అది URL లో కూడా అలాగే రిఫ్లెక్ట్ అవుతుంది.

- **Structure**: `app/dashboard/settings/page.tsx`
- **URL**: `/dashboard/settings`
- **ఎప్పుడు వాడాలి?**: మీ సైట్‌లో hierarchy (ఉదా: Home > Category > Product) ఉన్నప్పుడు దీన్ని వాడాలి.

---

### 2. Layouts (`layout.tsx`)

ఒక పేజీ నుండి ఇంకో పేజీకి వెళ్ళినప్పుడు, హెడర్ (Header) లేదా ఫుటర్ (Footer) వంటివి మారకుండా ఉండాలంటే `layout.tsx` వాడాలి.

- **ఎలా పనిచేస్తుంది?**: ఇది `children` అనే ప్రాప్‌ని తీసుకుంటుంది. అంటే, ఈ లేఅవుట్ లోపల మిగతా పేజీలు రెండర్ అవుతాయి.
- **Nested Layouts**: మీరు `app/dashboard/layout.tsx` మరియు `app/dashboard/settings/page.tsx` అని పెడితే, డ్యాష్‌బోర్డ్ లేఅవుట్ సెట్టింగ్స్ పేజీకి కూడా అప్లై అవుతుంది.

---

### 3. Route Groups `(folderName)`

కొన్నిసార్లు మనం కోడ్‌ని ఆర్గనైజ్ చేయడానికి ఫోల్డర్స్ వాడతాం, కానీ అవి URL లో కనిపించకూడదు అనుకుంటాం. అప్పుడు బ్రాకెట్స్ `()` వాడాలి.

- **Structure**: `app/(auth)/login/page.tsx` మరియు `app/(auth)/register/page.tsx`
- **URL**: `/login` మరియు `/register` మాత్రమే (URL లో `auth` కనిపించదు).
- **ప్రయోజనం**: అథెంటికేషన్ పేజీలన్నింటికీ ఒకే `layout.tsx` ని క్రియేట్ చేయడానికి ఇది బెస్ట్.

---

### 4. Parallel Routes (`@folderName`)

ఒకే వ్యూ (View) లో ఒకే సమయంలో రెండు లేదా అంతకంటే ఎక్కువ పేజీలను చూపించాలనుకున్నప్పుడు వీటిని వాడతాం. వీటిని "Slots" అని కూడా అంటారు.

- **Structure**: `app/@analytics/page.tsx` మరియు `app/@team/page.tsx`
- **ఎప్పుడు వాడాలి?**: డ్యాష్‌బోర్డ్‌లో ఒక పక్కన అనలిటిక్స్, ఇంకో పక్కన టీమ్ డీటెయిల్స్ చూపించాల్సి వచ్చినప్పుడు.
- **నోట్**: వీటిని మెయిన్ `layout.tsx` లో `props` లాగా యాక్సెస్ చేయాలి (`props.analytics`, `props.team`).

---

### 5. Intercepting Routes (`(.)`, `(..)`, `(...)`)

ఇది చాలా ఇంట్రెస్టింగ్ కాన్సెప్ట్. ఇది ఒక రూట్‌ను "మధ్యలో ఆపేస్తుంది" (Intercept).

- **ఉదాహరణ**: మీరు ఇన్‌స్టాగ్రామ్‌లో ఫోటో మీద క్లిక్ చేస్తే అది మోడల్ (Modal) లాగా ఓపెన్ అవుతుంది కదా? కానీ పేజీని రిఫ్రెష్ చేస్తే అది ఫుల్ పేజీలా ఓపెన్ అవుతుంది. దీన్నే ఇంటర్సెప్టింగ్ అంటారు.
- **Notation**:
- `(.)`: సేమ్ లెవల్ లో ఉన్న రూట్‌ని ఇంటర్సెప్ట్ చేస్తుంది.
- `(..)`: ఒక లెవల్ పైన ఉన్న రూట్‌ని ఇంటర్సెప్ట్ చేస్తుంది.
- `(...)`: రూట్ (app) డైరెక్టరీ నుండి ఇంటర్సెప్ట్ చేస్తుంది.

---

### క్విక్ సమ్మరీ టేబుల్

| Concept           | File/Folder Notation | Primary Use Case                         |
| ----------------- | -------------------- | ---------------------------------------- |
| **Nested Routes** | `folder/page.tsx`    | URL hierarchy కోసం                       |
| **Layouts**       | `layout.tsx`         | Shared UI (Header/Footer) కోసం           |
| **Groups**        | `(folder)`           | URL ఎఫెక్ట్ అవ్వకుండా ఆర్గనైజ్ చేయడానికి |
| **Parallel**      | `@folder`            | ఒకే వ్యూలో మల్టిపుల్ కాంపోనెంట్స్ కోసం   |
| **Intercepting**  | `(.)folder`          | మోడల్స్ (Modals) కోసం                    |

---

## Interview Questions

Next.js లో ఇవి రూటింగ్ యొక్క ముఖ్యమైన పిల్లర్లు. ఒక డెవలపర్‌గా మీరు వీటిని అర్థం చేసుకుంటే, ఎలాంటి కాంప్లెక్స్ వెబ్ అప్లికేషన్ స్ట్రక్చర్‌నైనా సులభంగా క్రియేట్ చేయవచ్చు.

ఇక్కడ క్లుప్తంగా, సులభంగా అర్థమయ్యేలా వివరణ ఉంది:

---

### 1. File System Routing

నెక్స్ట్ జెఎస్‌లో రూటింగ్ అనేది **File-system based**. అంటే, మీరు `app/` ఫోల్డర్ లోపల ఏ ఫోల్డర్ క్రియేట్ చేస్తే, అది బ్రౌజర్ లో URL పాత్ (path) అవుతుంది.

- **ఎలా?**: `app/contact/page.tsx` అని క్రియేట్ చేస్తే, బ్రౌజర్‌లో `[yourdomain.com/contact](https://yourdomain.com/contact)` అని వస్తుంది.

### 2. Dynamic Routes (`[id]`)

ఒక పేజీ యొక్క కంటెంట్ డైనమిక్‌గా మారినప్పుడు (ఉదా: ప్రొడక్ట్ ఐడి, యూజర్ ఐడి), దీన్ని వాడతాము.

- **ఎలా?**: ఫోల్డర్ పేరును బ్రాకెట్స్ లో `[id]` అని పెడితే, అది డైనమిక్ అవుతుంది. ఉదాహరణకు, `blog/[id]/page.tsx` అంటే `blog/1`, `blog/2`, `blog/abc` వంటివన్నీ ఆ పేజీ ద్వారానే హ్యాండిల్ అవుతాయి.

### 3. Catch-all Routes (`[...slug]`)

మీ రూట్‌లో ఎన్ని లెవల్స్ ఉన్నా వాటన్నింటినీ ఒకే ఫైల్ ద్వారా పట్టుకోవాలనుకుంటే (capture) దీన్ని వాడతాము.

- **ఎలా?**: `shop/[...slug]/page.tsx`. ఇది `shop/shirts`, `shop/shirts/t-shirts`, `shop/shirts/t-shirts/cotton` వంటి అన్నింటినీ క్యాప్చర్ చేస్తుంది.

### 4. Optional Catch-all (`[[...slug]]`)

ఇది కూడా `Catch-all` లాగే పనిచేస్తుంది, కానీ చిన్న తేడా ఉంది. ఇది రూట్ పాత్ (Base path) కి కూడా పనిచేస్తుంది.

- **ఎలా?**: `shop/[[...slug]]/page.tsx`. ఇది `shop/` (ఖాళీ) కి మరియు `shop/a/b` వంటి అన్నింటికీ పనిచేస్తుంది.

### 5. Route Groups `(folderName)`

కోడ్ మేనేజ్‌మెంట్ కోసం మనం ఫోల్డర్స్ క్రియేట్ చేస్తాం, కానీ అవి URL లో కనిపించకూడదు అనుకున్నప్పుడు వీటిని వాడతాము.

- **ఎలా?**: `app/(auth)/login` అని ఉంటే, URL లో `auth` కనిపించదు, కేవలం `[yourdomain.com/login](https://yourdomain.com/login)` అని మాత్రమే ఉంటుంది.

### 6. Nested Layouts (`layout.tsx`)

ఒక లేఅవుట్ లోపల ఇంకో లేఅవుట్ ఉండటం. ఒక పేజీకి సంబంధించిన సబ్-సెక్షన్స్ కి వేరువేరు లేఅవుట్స్ కావాలనుకున్నప్పుడు ఇది యూజ్ అవుతుంది.

- **ఉదాహరణ**: `/dashboard` కి ఒక సైడ్‌బార్ ఉండి, దాని లోపల `/dashboard/settings` కి ఇంకో అడిషనల్ నేవిగేషన్ ఉండటం.

### 7. Parallel Routes (`@folderName`)

ఒకే పేజీలో ఒకే సమయంలో మల్టిపుల్ సెక్షన్స్ లేదా కాంపోనెంట్స్ చూపించడానికి ఇది వాడతాము. వీటిని 'Slots' అని కూడా అంటారు.

- **ఎలా?**: `@analytics` మరియు `@team` అని క్రియేట్ చేసి, ఒకే లేఅవుట్‌లో రెండింటినీ ఒకేసారి రెండర్ చేయవచ్చు. ఇది డ్యాష్‌బోర్డ్ అప్లికేషన్స్ కి చాలా యూజ్ అవుతుంది.

### 8. Intercepting Routes (`(.)`, `(..)`)

ఒక రూట్‌ని ఓపెన్ చేసేటప్పుడు, పాత పేజీని వదలకుండా దాని మీద ఒక మోడల్ (Modal) లాగా చూపించడానికి ఇది వాడతాము.

- **ఉదాహరణ**: ఇన్‌స్టాగ్రామ్‌లో మీరు ఒక ఫోటో మీద క్లిక్ చేస్తే, అది పేజీ మారకుండా మోడల్ లో ఓపెన్ అవుతుంది కదా? ఇది దానికి బెస్ట్ ఎగ్జాంపుల్. `(.)` అంటే అదే లెవల్ లో ఉన్న రూట్‌ని ఇంటర్సెప్ట్ చేయడం.

---

### క్విక్ సమ్మరీ టేబుల్

| Concept          | File Notation | Use Case                             |
| ---------------- | ------------- | ------------------------------------ |
| **Dynamic**      | `[id]`        | ఐడి బేస్డ్ పేజీలు (Products/Users)   |
| **Catch-all**    | `[...slug]`   | అపరిమితమైన URL పాత్స్                |
| **Optional**     | `[[...slug]]` | రూట్ పాత్ సహా అన్ని పాత్స్           |
| **Groups**       | `(folder)`    | URL లో మార్పు లేకుండా ఆర్గనైజ్ చేయడం |
| **Parallel**     | `@folder`     | ఒకే పేజీలో మల్టిపుల్ వ్యూస్          |
| **Intercepting** | `(.)folder`   | మోడల్ వ్యూస్ కోసం                    |

---

# 4 — Layouts

```
layout.tsx

template.tsx

loading.tsx

error.tsx

not-found.tsx
```

Next.js App Router లో ఈ ఫైల్స్ అన్నీ UI ని ఒక సిస్టమాటిక్ పద్ధతిలో హ్యాండిల్ చేయడానికి చాలా ఉపయోగపడతాయి. వీటిని "Special Files" అని అంటారు. వీటి గురించి సింపుల్ తెలుగులో ఇక్కడ చూడండి:

---

### 1. `layout.tsx`

ఇది మీ అప్లికేషన్ లోని **Persistent UI** ని క్రియేట్ చేస్తుంది.

- **ఏంటి?**: ఒక పేజీ నుండి ఇంకో పేజీకి వెళ్ళినప్పుడు మారకుండా ఉండేవి (ఉదా: Header, Footer, Sidebar).
- **ముఖ్యమైన విషయం**: యూజర్ నెవిగేట్ అయినప్పుడు లేఅవుట్ **రీ-రెండర్ అవ్వదు (State persist అవుతుంది)**.

### 2. `template.tsx`

ఇది చూడటానికి `layout.tsx` లాగే ఉంటుంది, కానీ ఒక ముఖ్యమైన తేడా ఉంది.

- **ఏంటి?**: ఇది ప్రతి నెవిగేషన్ జరిగినప్పుడు **రీ-మౌంట్ (Re-mount)** అవుతుంది.
- **తేడా**: లేఅవుట్ లో స్టేట్ మారదు, కానీ టెంప్లేట్ లో ప్రతిసారీ కొత్తగా స్టార్ట్ అవుతుంది. ఉదాహరణకు, మీరు `useEffect` వాడితే టెంప్లేట్ లో ప్రతిసారి రన్ అవుతుంది, లేఅవుట్ లో అలా జరగదు.

### 3. `loading.tsx`

ఇది యూజర్ ఎక్స్‌పీరియన్స్ కోసం చాలా ముఖ్యం.

- **ఏంటి?**: పేజీ కంటెంట్ లేదా డేటా లోడ్ అయ్యే వరకు Next.js ఆటోమేటిక్‌గా ఈ ఫైల్‌లోని కంటెంట్‌ని చూపిస్తుంది.
- **ఎలా?**: Next.js దీన్ని బ్యాక్‌గ్రౌండ్‌లో `React Suspense` తో చుట్టి (wrap) ఉంచుతుంది. డేటా రాగానే ఇది ఆటోమేటిక్‌గా వెళ్ళిపోయి మీ పేజీ కనిపిస్తుంది.

### 4. `error.tsx`

యాప్ క్రాష్ అవ్వకుండా చూసే "Error Boundary".

- **ఏంటి?**: ఏదైనా పేజీలో ఎర్రర్ వస్తే, మొత్తం యాప్ ఆగిపోకుండా ఈ ఫైల్ లో ఉన్న UI ని యూజర్‌కి చూపిస్తుంది.
- **ముఖ్యమైన విషయం**: ఇది **Client Component** అయి ఉండాలి (`'use client'` అని పైన రాయాలి). ఇది ఎర్రర్ ని క్యాచ్ చేసి, యూజర్‌కి మళ్ళీ ప్రయత్నించమని (Retry) చెప్పడానికి ఉపయోగపడుతుంది.

### 5. `not-found.tsx`

ఇది 404 పేజీ.

- **ఏంటి?**: ఒకవేళ యూజర్ అడగని పేజీకి (ఎగ్జిస్ట్ అవ్వని రూట్ కి) వెళ్తే, Next.js ఈ పేజీని చూపిస్తుంది.
- **ఎప్పుడు?**: మీరు కోడ్ లో `notFound()` అనే ఫంక్షన్‌ని కాల్ చేసినప్పుడు కూడా ఇది ట్రిగ్గర్ అవుతుంది.

---

### Quick Comparison Table (క్విక్ సమ్మరీ)

| File                | Purpose                       | Does state reset?   |
| ------------------- | ----------------------------- | ------------------- |
| **`layout.tsx`**    | Shared UI (Header/Footer)     | **No** (Persistent) |
| **`template.tsx`**  | Shared UI (with new instance) | **Yes** (Re-mounts) |
| **`loading.tsx`**   | Show loading state            | N/A                 |
| **`error.tsx`**     | Handle runtime errors         | N/A                 |
| **`not-found.tsx`** | 404 handling                  | N/A                 |

---

### ప్రో-టిప్ (Pro-Tip):

- **Nested Layouts**: మీరు `app/dashboard/layout.tsx` అని క్రియేట్ చేస్తే, అది `app/layout.tsx` కి లోపల ఉంటుంది. అంటే మీ వెబ్‌సైట్ మెయిన్ లేఅవుట్ అలాగే ఉండి, లోపల డ్యాష్‌బోర్డ్ కి సపరేట్ లేఅవుట్ వస్తుంది.
- **ఎప్పుడు వాడాలి?**: సాధారణంగా Header/Footer కోసం `layout.tsx` వాడండి. ఒకవేళ మీరు పేజీ మారిన ప్రతిసారి యానిమేషన్లు ప్లే అవ్వాలి లేదా కొత్తగా `useEffect` రన్ అవ్వాలి అనుకుంటేనే `template.tsx` కి వెళ్ళండి.

---

## Interview Questions

నెక్స్ట్ జెఎస్‌లో మీరు అడిగిన ఈ ఫైల్స్ అన్నీ అప్లికేషన్ యొక్క బిహేవియర్‌ని కంట్రోల్ చేయడానికి చాలా ముఖ్యమైనవి. వీటి గురించి క్లియర్ గా తెలుసుకుందాం:

### 1. `layout.tsx` vs `template.tsx` (ముఖ్యమైన తేడా)

చాలామంది వీటిని ఒకటే అనుకుంటారు, కానీ వీటి మధ్య ఉన్న "State" తేడాను అర్థం చేసుకోవడం చాలా ముఖ్యం.

| ఫీచర్                 | `layout.tsx`                                     | `template.tsx`                                              |
| --------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| **State Persistence** | State మారదు. నావిగేట్ చేసినప్పుడు అలాగే ఉంటుంది. | State రీసెట్ అవుతుంది. ప్రతిసారీ కొత్తగా స్టార్ట్ అవుతుంది. |
| **Re-mounting**       | పేజీ మారినా ఇది రీ-మౌంట్ అవ్వదు.                 | ప్రతి నావిగేషన్ కి ఇది రీ-మౌంట్ అవుతుంది.                   |
| **Use Case**          | Header, Footer, Sidebar (స్థిరంగా ఉండేవి).       | ప్రతి పేజీకి కొత్తగా ఎఫెక్ట్స్/యానిమేషన్లు రావాలంటే.        |

- **ఎందుకు?**: ఒకవేళ మీరు `layout.tsx` లో ఒక `input` ఫీల్డ్ పెట్టి, అందులో టెక్స్ట్ టైప్ చేసి వేరే పేజీకి వెళ్ళి మళ్ళీ వస్తే, ఆ టెక్స్ట్ అలాగే ఉంటుంది. అదే `template.tsx` లో అయితే, వేరే పేజీకి వెళ్ళి రాగానే ఆ టెక్స్ట్ క్లియర్ అయిపోతుంది (ఎందుకంటే అది మళ్ళీ మొదటి నుండి క్రియేట్ అవుతుంది).

---

### 2. `loading.tsx` ఎలా పనిచేస్తుంది?

ఇది **React Suspense** అనే కాన్సెప్ట్ మీద ఆధారపడి పనిచేస్తుంది.

- **మెకానిజం**: మీరు ఒక రూట్ (route) లో `loading.tsx` ఫైల్ పెట్టినప్పుడు, Next.js ఆ రూట్ యొక్క కంటెంట్‌ని ఒక `Suspense` బౌండరీతో చుట్టేస్తుంది.
- **పనితీరు**: పేజీకి కావాల్సిన డేటా సర్వర్ నుండి ఫెచ్ (Fetch) అవుతున్నంత సేపు, Next.js ఆటోమేటిక్ గా `loading.tsx` లోని UI ని చూపిస్తుంది. డేటా రాగానే, ఆ లోడింగ్ UI పోయి అసలైన `page.tsx` కంటెంట్ వస్తుంది.

---

### 3. `error.tsx` ఎలా పనిచేస్తుంది?

ఇది ఒక **Error Boundary** లా పనిచేస్తుంది.

- **ముఖ్యమైన విషయం**: ఇది కచ్చితంగా **Client Component** అయి ఉండాలి (ఫైల్ పైన `'use client'` అని రాయాలి).
- **మెకానిజం**: దీని లోపల ఉన్న చిల్డ్రన్ (page.tsx లేదా ఇతర రూట్స్) లో ఏదైనా ఎర్రర్ వస్తే, ఈ `error.tsx` దాన్ని క్యాచ్ చేస్తుంది.
- **Retry Mechanism**: దీనికి ఒక `reset` ఫంక్షన్ ఉంటుంది. దీని ద్వారా యూజర్ కావాలంటే పేజీని మళ్ళీ లోడ్ (Retry) చేసే ఆప్షన్ ఇవ్వవచ్చు. ఇది మొత్తం యాప్ క్రాష్ అవ్వకుండా, కేవలం ఆ సెక్షన్ లో మాత్రమే ఎర్రర్ చూపించి మిగతా యాప్‌ని రన్ అయ్యేలా చేస్తుంది.

---

### 4. `not-found.tsx` ఎప్పుడు వాడతారు?

ఇది 404 పేజీని హ్యాండిల్ చేయడానికి ఉపయోగిస్తారు. ఇది రెండు సందర్భాల్లో ట్రిగ్గర్ అవుతుంది:

1. **Automatic**: యూజర్ ఎగ్జిస్ట్ అవ్వని URL కి వెళ్ళినప్పుడు.
2. **Manual**: మీ కోడ్ లో (ఉదాహరణకు డేటాబేస్ లో ఆ ఐడి డేటా లేకపోతే) మీరు `notFound()` అనే ఫంక్షన్‌ని కాల్ చేసినప్పుడు.

- **ఉదాహరణ**:

```tsx
import { notFound } from "next/navigation";

async function Page({ params }) {
  const user = await getUser(params.id);
  if (!user) {
    notFound(); // ఇక్కడ ఆటోమేటిక్‌గా not-found.tsx పేజీ ఓపెన్ అవుతుంది
  }
  return <div>User Profile</div>;
}
```

---

# 5 — Components

Next.js App Router లో **Components** అనేవి చాలా పవర్ ఫుల్. ఇక్కడ మీరు అర్థం చేసుకోవాల్సిన ఒకే ఒక్క ముఖ్యమైన విషయం ఏంటంటే: **"Next.js లో ప్రతి కాంపోనెంట్ బై-డిఫాల్ట్ సర్వర్ కాంపోనెంట్."**

దీనిని మీరు ఎప్పుడు, ఎలా వాడాలో ఇక్కడ వివరంగా చూద్దాం.

---

### 1. Server Components (`async function`)

Next.js లో మనం కొత్తగా రాసే ప్రతి కాంపోనెంట్ సర్వర్ కాంపోనెంట్‌గానే పరిగణించబడుతుంది.

- **ప్రత్యేకత**: మీరు డేటాను ఫెచ్ చేయడానికి `useEffect` వాడాల్సిన పనిలేదు. నేరుగా `async/await` వాడవచ్చు.
- **ఎక్కడ రన్ అవుతాయి?**: కేవలం సర్వర్ మీద మాత్రమే. బ్రౌజర్‌కు వెళ్ళేటప్పుడు వీటి నుండి వచ్చే HTML మాత్రమే వెళ్తుంది, JavaScript వెళ్ళదు. దీనివల్ల వెబ్‌సైట్ చాలా ఫాస్ట్‌గా లోడ్ అవుతుంది.

**ఉదాహరణ:**

```tsx
// app/products/page.tsx
async function Products() {
  // నేరుగా డేటాబేస్ లేదా API కాల్ చేయవచ్చు
  const response = await fetch("https://api.example.com/products");
  const products = await response.json();

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

### 2. Client Components (`"use client"`)

ఒకవేళ మీ కాంపోనెంట్‌లో యూజర్ ఇంటరాక్షన్ (Button clicks, State, Effects) ఉంటే, అది **Client Component** అవ్వాలి.

- **ఎలా డిఫైన్ చేయాలి?**: ఫైల్ పైన మొదటి లైన్‌లో `'use client'` అని రాయాలి.
- **ఎందుకు?**: బ్రౌజర్‌లో మాత్రమే పనిచేసే `useState`, `useEffect`, `onClick` వంటివి వాడాలంటే ఇది తప్పనిసరి.

**ఉదాహరణ:**

```tsx
"use client"; // ఇది ఇంపార్టెంట్!

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

### ఎప్పుడు దేనిని వాడాలి? (Decision Rule)

డెవలపర్‌గా మీరు ఈ చిన్న రూల్ ఫాలో అయితే చాలు:

| అవసరం (Need)                                | ఏది వాడాలి?          |
| ------------------------------------------- | -------------------- |
| **Default** (అన్నీ)                         | **Server Component** |
| డేటాను ఫెచ్ చేయడం (Database/API)            | Server Component     |
| SEO కి ప్రాముఖ్యత ఇవ్వడం                    | Server Component     |
| `useState`, `useEffect`, `useContext` వాడటం | Client Component     |
| బటన్ క్లిక్స్, ఈవెంట్ హ్యాండ్లర్స్          | Client Component     |

---

### ముఖ్యమైన గమనికలు:

1. **Server Components లో `useState` వాడలేము**: ఇది చాలామంది చేసే తప్పు. స్టేట్ కావాలంటే అది కచ్చితంగా Client Component అవ్వాలి.
2. **Server Components ని Client Component లో వాడవచ్చు**: మీరు ఒక Client Component లోపల Server Component ని `children` లాగా పంపవచ్చు. ఇది అడ్వాన్స్డ్ టెక్నిక్, కానీ ఇది చాలా పవర్ ఫుల్.
3. **Bundle Size**: మీరు `'use client'` అని రాస్తే, ఆ కాంపోనెంట్ కి సంబంధించిన JavaScript మొత్తం బ్రౌజర్‌కి వెళ్తుంది. అందుకే, అవసరమైన చోట మాత్రమే క్లయింట్ కాంపోనెంట్స్ వాడి, మిగిలిన అంతా సర్వర్ కాంపోనెంట్స్ లోనే ఉంచండి.

---

## Interview Questions

Next.js లో Server మరియు Client Components మధ్య తేడాలను అర్థం చేసుకోవడం చాలా ముఖ్యం. ఇక్కడ మీ ప్రశ్నలకు క్లియర్ గా సమాధానాలు ఉన్నాయి:

---

### 1. Server vs Client Components (తేడాలు)

| ఫీచర్                  | Server Components                         | Client Components                |
| ---------------------- | ----------------------------------------- | -------------------------------- |
| **ఎక్కడ రన్ అవుతాయి?** | కేవలం సర్వర్ మీద (Server-side)            | బ్రౌజర్‌లో (Browser)             |
| **JavaScript**         | క్లయింట్‌కి JS వెళ్ళదు (Zero bundle size) | క్లయింట్‌కి JS బండిల్ వెళ్తుంది  |
| **Hooks**              | `useState`, `useEffect` వాడలేము           | `useState`, `useEffect` వాడవచ్చు |
| **డేటా ఫెచింగ్**       | DB/API ని నేరుగా కాల్ చేయవచ్చు            | API Endpoints ద్వారా మాత్రమే     |
| **ప్రయోజనం**           | వేగం మరియు SEO                            | యూజర్ ఇంటరాక్షన్ (Forms, Clicks) |

---

### 2. Server Components ఎందుకు ఫాస్ట్?

Server Components వేగంగా ఉండటానికి రెండు ప్రధాన కారణాలు ఉన్నాయి:

1. **Zero Bundle Size**: క్లయింట్ కాంపోనెంట్లు బ్రౌజర్‌కి వెళ్ళినప్పుడు, వాటికి సంబంధించిన జావాస్క్రిప్ట్ మొత్తం డౌన్‌లోడ్ అవ్వాలి. కానీ, Server Components సర్వర్ లోనే ఎగ్జిక్యూట్ అయ్యి, కేవలం ఫైనల్ HTML మాత్రమే క్లయింట్‌కి పంపిస్తాయి. దీనివల్ల బ్రౌజర్ లోడ్ చాలా తగ్గుతుంది.
2. **No Network Waterfalls**: క్లయింట్ లో డేటా ఫెచ్ చేస్తే, అది మళ్ళీ మళ్ళీ సర్వర్‌కి రిక్వెస్ట్ పంపిస్తుంది (Network Latency). సర్వర్ కాంపోనెంట్లు నేరుగా డేటాబేస్ పక్కనే ఉంటాయి కాబట్టి, డేటా త్వరగా అందుతుంది.

---

### 3. Server Components లో `useState` వాడవచ్చా?

**లేదు, వాడలేము.**

- `useState` అనేది React లోని ఒక **Hook**. హుక్స్ అన్నీ బ్రౌజర్‌లో ఉన్న స్టేట్ (State) ని మేనేజ్ చేయడానికి వాడతారు.
- Server Components సర్వర్ మీద రన్ అయ్యి, పని పూర్తయ్యాక ముగిసిపోతాయి (stateless). వాటికి బ్రౌజర్ లాగా స్టేట్ ని గుర్తుంచుకునే సామర్థ్యం లేదు.
- కాబట్టి, మీకు స్టేట్ కావాలంటే ఆ కాంపోనెంట్‌ని Client Component గా మార్చాలి (`'use client'` రాయాలి).

---

### 4. Client Components డేటాబేస్ ని యాక్సెస్ చేయవచ్చా?

**సాంకేతికంగా చేయకూడదు (ఇది అభద్రత - Security Risk).**

- **ఎందుకు?**: Client Components లో మీరు రాసే కోడ్ అంతా యూజర్ బ్రౌజర్‌లో కనిపిస్తుంది (Inspect Element చేస్తే ఎవరైనా చూడగలరు). మీరు డేటాబేస్ క్రెడెన్షియల్స్ (Password, Secret Key) క్లయింట్ కోడ్‌లో పెడితే, హ్యాకర్లు మీ DB ని సులభంగా యాక్సెస్ చేయగలరు.
- **సరైన పద్ధతి**:

1. డేటాబేస్ కనెక్షన్ ఎప్పుడూ Server Components లోనే ఉండాలి.
2. క్లయింట్ నుండి డేటా కావాలంటే, మీరు ఒక API Route లేదా Server Action క్రియేట్ చేసి, దాని ద్వారా డేటాను తెచ్చుకోవాలి.

---

**చిన్న సలహా (Pro-tip):**
మీరు ఎప్పుడూ అప్లికేషన్‌ను **Server Component** గానే మొదలుపెట్టండి. ఎక్కడైతే యూజర్ ఇంటరాక్షన్ (Click, Input, State) అవసరమో, అక్కడ మాత్రమే ఆ చిన్న భాగాన్ని విడగొట్టి **Client Component** గా మార్చండి. దీనినే "Server-first approach" అంటారు.

---

# 6 — Data Fetching

Next.js లో **Data Fetching** అనేది అత్యంత శక్తివంతమైన ఫీచర్. మీరు సర్వర్ కాంపోనెంట్స్ లో నేరుగా డేటాను తెచ్చుకోవచ్చు, దీని కోసం `useEffect` లేదా `useState` అవసరం లేదు!

దీనిని అర్థం చేసుకోవడానికి **"Caching"** (డేటాను దాచుకోవడం) అనే కాన్సెప్ట్ చాలా ముఖ్యం. నెక్స్ట్ జెఎస్ లో డేటా ఎలా లోడ్ అవుతుందో చూద్దాం:

---

### 1. `fetch()` vs `axios`

Next.js లో **Server Components** కోసం `fetch()` ని వాడటమే బెస్ట్ ప్రాక్టీస్.

- **`fetch()`**: Next.js దీనిని ప్రత్యేకంగా డిజైన్ చేసింది. ఇది నెక్స్ట్ జెఎస్ యొక్క **Caching** ఫీచర్లతో కలిసి పనిచేస్తుంది. అంటే, మీరు ఒకే డేటాను పదే పదే సర్వర్‌ను అడగకుండా, అది మెమరీలో దాచుకుంటుంది (Cache).
- **`axios`**: ఇది చాలా ఫేమస్ లైబ్రరీ, కానీ ఇది నెక్స్ట్ జెఎస్ యొక్క ఆటోమేటిక్ క్యాచింగ్ సిస్టమ్‌తో కలిసి పనిచేయదు. కాబట్టి, నెక్స్ట్ జెఎస్ లోని అడ్వాన్స్‌డ్ ఫీచర్లు కావాలంటే `fetch` నే వాడండి.

---

### 2. Caching & Revalidation Options

`fetch` చేసేటప్పుడు మీరు రెండో ఆర్గ్యుమెంట్‌గా కొన్ని సెట్టింగ్స్ ఇవ్వవచ్చు. ఇవే మీ అప్లికేషన్ స్పీడ్ ని నిర్ణయిస్తాయి.

#### A. `force-cache` (Default)

ఇది డిఫాల్ట్ సెట్టింగ్. ఇది సర్వర్ లో డేటాను దాచుకుంటుంది.

```javascript
fetch("https://api.example.com/data", { cache: "force-cache" });
```

- **ఎప్పుడు వాడాలి?**: డేటా ఎప్పుడూ మారదు (ఉదా: వెబ్‌సైట్ లోని స్టాటిక్ కంటెంట్) అనుకున్నప్పుడు.

#### B. `revalidate` (Time-based)

ఇది **ISR (Incremental Static Regeneration)** ని క్రియేట్ చేస్తుంది. మీరు సెట్ చేసిన సమయం (సెకన్లలో) తర్వాత, బ్యాక్‌గ్రౌండ్‌లో కొత్త డేటాను తెచ్చుకుంటుంది.

```javascript
fetch("https://api.example.com/data", { next: { revalidate: 60 } });
```

- **ఎప్పుడు వాడాలి?**: డేటా మారుతుంది, కానీ ప్రతి సెకను అప్‌డేట్ అవ్వాల్సిన పనిలేదు (ఉదా: బ్లాగ్ పోస్ట్‌లు, అప్పుడప్పుడు మారే స్టాక్ ధరలు). 60 సెకన్లకి ఒకసారి డేటా రిఫ్రెష్ అవుతుంది.

#### C. `no-store` (Dynamic)

ఇది డేటాను ఏ మాత్రం దాచుకోదు. ప్రతి రిక్వెస్ట్ కి కొత్త డేటాను తెచ్చుకుంటుంది.

```javascript
fetch("https://api.example.com/data", { cache: "no-store" });
```

- **ఎప్పుడు వాడాలి?**: రియల్ టైమ్ డేటా కావాలి (ఉదా: యూజర్ ప్రొఫైల్, బ్యాంక్ బ్యాలెన్స్, షాపింగ్ కార్ట్). ఇది చాలా సెక్యూర్ కానీ సర్వర్ మీద లోడ్ ఎక్కువ ఉంటుంది.

---

### సమ్మరీ టేబుల్ (Quick Reference)

| ఆప్షన్            | ప్రవర్తన (Behavior)                   | యూజ్ కేస్ (Use Case)           |
| ----------------- | ------------------------------------- | ------------------------------ |
| **`force-cache`** | డేటాను పర్మినెంట్ గా దాచుకుంటుంది     | మారనటువంటి స్టాటిక్ డేటా       |
| **`revalidate`**  | నిర్ణీత సమయం తర్వాత అప్‌డేట్ అవుతుంది | బ్లాగ్స్, న్యూస్ (ISR)         |
| **`no-store`**    | ప్రతిసారీ ఫ్రెష్ డేటాను తెస్తుంది     | యూజర్ పర్సనల్ డేటా, రియల్-టైమ్ |

---

### ఒక చిన్న సలహా (Pro-tip):

మీరు నెక్స్ట్ జెఎస్ లో `fetch` వాడేటప్పుడు `await` కీవర్డ్ వాడటం మర్చిపోవద్దు. ఎందుకంటే మనం ఇప్పుడు **Server Components** లో ఉన్నాం కాబట్టి, ఇది డేటా వచ్చే వరకు వేచి చూస్తుంది (Blocking Rendering), దీనివల్ల మీ యాప్ చాలా స్మూత్ గా ఉంటుంది.

---

## Interview Questions

నెక్స్ట్ జెఎస్‌లో డేటా ఫెచింగ్ (Data Fetching) అనేది చాలా పవర్‌ఫుల్. మీరు అడిగిన ప్రశ్నలకు క్లియర్ సమాధానాలు ఇక్కడ ఉన్నాయి:

### 1. Next.js లో `fetch()` ఎలా పనిచేస్తుంది?

Next.js లో `fetch` అనేది కేవలం బ్రౌజర్ లోని `fetch` API కి కాపీ కాదు, ఇది **Next.js వాళ్ళు కస్టమైజ్ చేసిన వెర్షన్**.

- **ఎక్కడ రన్ అవుతుంది?**: ఇది సర్వర్ కాంపోనెంట్స్ లో రన్ అవుతుంది.
- **ప్రత్యేకత**: మీరు ఈ `fetch` ద్వారా వచ్చే రెస్పాన్స్‌ను ఆటోమేటిక్ గా **Cache** చేయవచ్చు. అంటే, సర్వర్ పదే పదే బయటి API ని పిలవకుండా, మొదటిసారి తెచ్చిన డేటాను సేవ్ చేసుకుని, తర్వాత రిక్వెస్ట్స్ కి దాన్నే ఇస్తుంది. ఇది యాప్ పెర్ఫార్మెన్స్‌ను అద్భుతంగా పెంచుతుంది.

---

### 2. Cache అంటే ఏమిటి?

Cache అంటే **"డేటాను తాత్కాలికంగా దాచుకోవడం"**.

- ఉదాహరణకు, ఒక బ్లాగ్ పోస్ట్‌ను 100 మంది యూజర్లు చూస్తే, 100 సార్లు సర్వర్ డేటాబేస్‌ను అడగకుండా... మొదటిసారి డేటాబేస్ నుండి తెచ్చి, ఆ తర్వాత 99 మందికి ఆ 'Cached' కాపీనే చూపిస్తుంది. దీనివల్ల డేటాబేస్ మీద లోడ్ తగ్గుతుంది మరియు వెబ్‌సైట్ మెరుపు వేగంతో ఓపెన్ అవుతుంది.

---

### 3. Revalidate అంటే ఏమిటి?

Caching అంటే డేటా పాతదైపోతుందేమో అన్న భయం ఉండొచ్చు. దాన్ని పోగొట్టడమే `revalidate`.

- ఇది ఒక **"Time-limit"**. ఉదాహరణకు, మీరు `revalidate: 60` అని పెడితే, మొదటి రిక్వెస్ట్ కి డేటా క్యాష్ అవుతుంది. 60 సెకన్ల వరకు ఎవరైనా వస్తే క్యాష్ లో ఉన్న డేటాయే కనిపిస్తుంది. 60 సెకన్ల తర్వాత వచ్చే మొదటి వ్యక్తికి, సర్వర్ కొత్త డేటాను తెచ్చి, మళ్ళీ క్యాష్ ని అప్‌డేట్ చేస్తుంది. దీన్నే మనం **ISR (Incremental Static Regeneration)** అంటాం.

---

### 4. `no-store` vs `force-cache` (తేడాలు)

| ఫీచర్                | `force-cache` (Default)            | `no-store`                                |
| -------------------- | ---------------------------------- | ----------------------------------------- |
| **నిల్వ చేయడం**      | డేటాను క్యాష్ లో స్టోర్ చేస్తుంది. | ఏదీ స్టోర్ చేయదు.                         |
| **పెర్ఫార్మెన్స్**   | చాలా వేగంగా ఉంటుంది.               | సర్వర్ నుండి డేటా వచ్చే వరకు వేచి ఉండాలి. |
| **డేటా ఫ్రెష్‌నెస్** | పాత డేటా వచ్చే అవకాశం ఉంది.        | ఎప్పుడూ లేటెస్ట్ డేటానే వస్తుంది.         |
| **ఎప్పుడు వాడాలి?**  | మారని కంటెంట్ (Static sites).      | యూజర్ డేటా/రియల్ టైమ్ డేటా.               |

---

### 5. Axios ఎప్పుడు వాడాలి?

నిజం చెప్పాలంటే, నెక్స్ట్ జెఎస్ (App Router) లో `fetch()` వాడటమే బెస్ట్. కానీ కొన్ని ప్రత్యేక సందర్భాల్లో `axios` వాడవచ్చు:

1. **Complex Request Interceptors**: మీరు ప్రతి రిక్వెస్ట్ కి హెడర్స్ (Auth tokens) యాడ్ చేయడం, రిక్వెస్ట్ ఫెయిల్ అయితే ఆటోమేటిక్‌గా రీట్రై చేయడం వంటివి చేయాలంటే Axios చాలా సులభం.
2. **Client Components**: మీరు `fetch` ని కేవలం సర్వర్ కాంపోనెంట్స్ లోనే బాగా వాడగలరు. క్లయింట్ కాంపోనెంట్స్ లో `useState`, `useEffect` తో డేటా తెచ్చుకోవాలంటే, Axios వాడటం ఇప్పటికీ కంఫర్టబుల్ గా ఉంటుంది.
3. **Progress Tracking**: ఫైల్స్ అప్‌లోడ్ చేసేటప్పుడు ఎంత పర్సెంట్ అయ్యిందో (Progress bar) ట్రాక్ చేయడానికి Axios లోని `onUploadProgress` ఫంక్షన్ చాలా బాగా పనిచేస్తుంది.

**సలహా:** మీరు సర్వర్ కాంపోనెంట్స్ వాడుతున్నట్లయితే `fetch()` నే వాడండి, ఎందుకంటే Next.js లోని Caching ఫీచర్లు `fetch` తోనే బాగా పనిచేస్తాయి.

---

# 7 — Rendering

SSR

```
dynamic rendering
```

SSG

```
build time
```

ISR

```
revalidate
```

నెక్స్ట్ జెఎస్‌లో "Rendering" అంటే మీ రియాక్ట్ కోడ్‌ని యూజర్ బ్రౌజర్‌కి అర్థమయ్యే HTML గా మార్చడం. App Router లో ఈ రెండరింగ్ చాలా అడ్వాన్స్‌డ్ గా ఉంటుంది. మీరు "Master" చేయాల్సిన Rendering Strategies గురించి ఇక్కడ వివరంగా చూద్దాం.

---

### Rendering Strategies: ఒకే చూపులో

| Strategy             | ఎప్పుడు జరుగుతుంది?                   | ఎందుకు వాడాలి?                                       |
| -------------------- | ------------------------------------- | ---------------------------------------------------- |
| **SSG (Build Time)** | అప్లికేషన్ బిల్డ్ చేసేటప్పుడు         | చాలా వేగం, SEO కి బెస్ట్ (మార్పు లేని కంటెంట్)       |
| **SSR / Dynamic**    | యూజర్ రిక్వెస్ట్ వచ్చినప్పుడు         | రియల్ టైమ్ డేటా (User specific content)              |
| **ISR (revalidate)** | నిర్ణీత సమయం తర్వాత బ్యాక్‌గ్రౌండ్‌లో | డేటా అప్‌డేట్ అవ్వాలి, కానీ పెర్ఫార్మెన్స్ తగ్గకూడదు |
| **Streaming**        | పేజీ లోడ్ అవుతుండగానే                 | పెద్ద పేజీలు యూజర్‌కి త్వరగా కనిపించడానికి           |

---

### 1. SSG (Static Site Generation) - Build Time

ఇది డిఫాల్ట్. మీరు `npm run build` చేసినప్పుడు, మీ సర్వర్ లోని డేటా ఫెచ్ అయ్యి పేజీలు రెడీ అయిపోతాయి.

- **పనితీరు**: సర్వర్ ప్రతిసారీ డేటాబేస్ ని అడగాల్సిన పనిలేదు. రెడీమేడ్ HTML ఫైల్స్‌ని ఇచ్చేస్తుంది.
- **ఎప్పుడు?**: బ్లాగులు, మార్కెటింగ్ పేజీలు, ప్రొడక్ట్ లిస్టింగ్స్.

### 2. SSR & Dynamic Rendering

SSR అంటే "Server Side Rendering". ఇప్పుడు Next.js App Router లో దీనిని **Dynamic Rendering** అని పిలుస్తున్నారు.

- **ఎప్పుడు మారుతుంది?**: మీరు డేటా ఫెచింగ్ లో `no-store` వాడినా, లేదా `cookies()`, `headers()` వంటి డైనమిక్ ఫంక్షన్స్ వాడినా, Next.js ఆటోమేటిక్‌గా ఆ పేజీని SSR (Dynamic) మోడ్ కి మారుస్తుంది.
- **పనితీరు**: ప్రతి రిక్వెస్ట్ కి సర్వర్ కొత్తగా HTML ని తయారు చేస్తుంది.

### 3. ISR (Incremental Static Regeneration) - `revalidate`

ఇది SSG కి అప్‌గ్రేడ్. పాత కాలంలో SSG లో కంటెంట్ మార్చాలంటే మళ్ళీ బిల్డ్ చేయాల్సి వచ్చేది. ISR లో అలా అవసరం లేదు.

- **ఎలా?**: మీరు `revalidate: 60` అని పెడితే, మొదటి 60 సెకన్ల వరకు క్యాష్ లో ఉన్న డేటానే చూపిస్తుంది. 60 సెకన్ల తర్వాత వచ్చే రిక్వెస్ట్ కి బ్యాక్‌గ్రౌండ్‌లో డేటాను అప్‌డేట్ చేసి, ఆ తర్వాత నుండి కొత్త డేటాను చూపిస్తుంది.
- **ప్రయోజనం**: మీకు పాత SSG స్పీడ్ వస్తుంది, అలాగే డేటా కూడా తాజాగా ఉంటుంది.

---

### 4. Streaming & Partial Rendering (App Router యొక్క మ్యాజిక్)

ఇది Next.js లో మీరు కచ్చితంగా నేర్చుకోవాల్సిన కొత్త ఫీచర్.

#### Streaming

సాధారణంగా ఒక పేజీలో 5 API కాల్స్ ఉంటే, 5 డేటా వచ్చే వరకు యూజర్‌కి పేజీ కనిపించదు. కానీ Streaming తో:

- డేటా వచ్చినంత వరకు పేజీలోని మిగతా భాగాలను (Header, Sidebar) యూజర్ చూడొచ్చు.
- డేటా వచ్చే కొద్దీ, అక్కడ `loading.tsx` లో ఉన్న UI ని మార్చి కంటెంట్ చూపిస్తుంది.
- దీనికోసం మీరు React లోని `<Suspense>` కాంపోనెంట్‌ని వాడతారు.

#### Partial Rendering

ఒకవేళ మీరు `/dashboard/settings` నుండి `/dashboard/profile` కి వెళ్తే:

- మొత్తం పేజీని మళ్ళీ రీ-రెండర్ చేయదు.
- కేవలం మారాల్సిన `content` భాగం మాత్రమే రీ-రెండర్ అవుతుంది.
- Header, Sidebar, Layout అన్నీ అలాగే ఉంటాయి. దీనివల్ల యూజర్ కి పేజీ చాలా వేగంగా లోడ్ అయినట్లు అనిపిస్తుంది.

---

### మాస్టర్ టిప్ (Master Tip):

మీరు ఒక పేజీని క్రియేట్ చేసేటప్పుడు, మొదట దాన్ని **Static (SSG)** గా ఉంచడానికి ప్రయత్నించండి. ఒకవేళ అందులో యూజర్ డేటా (Cookies) లేదా రియల్ టైమ్ డేటా అవసరమైతేనే **Dynamic Rendering** కి వెళ్ళండి.

---

## Interview Questions

Next.js లో Rendering flows ని అర్థం చేసుకోవడం అంటే, మీ కోడ్ సర్వర్ నుండి బ్రౌజర్ కి వెళ్ళేటప్పుడు ఏ క్రమంలో ఎగ్జిక్యూట్ అవుతుందో తెలుసుకోవడం. ఇక్కడ ప్రతి దాని యొక్క **"Execution Flow"** ని సింపుల్ గా చూద్దాం:

---

### 1. SSR Flow (Server-Side Rendering)

ఇక్కడ ప్రతి రిక్వెస్ట్ కి సర్వర్ పని చేస్తుంది.

1. **User Request:** యూజర్ ఒక URL ని రిక్వెస్ట్ చేస్తారు.
2. **Server Execution:** సర్వర్ లోని ఫంక్షన్ రన్ అవుతుంది (ఉదా: `getServerSideProps` లేదా Server Component logic).
3. **Data Fetching:** సర్వర్ నేరుగా డేటాబేస్/API నుండి లేటెస్ట్ డేటాను తెచ్చుకుంటుంది.
4. **HTML Generation:** సర్వర్ ఆ డేటాతో HTML ని తయారు చేస్తుంది.
5. **Browser:** బ్రౌజర్ కి పూర్తి HTML అందుతుంది. యూజర్ కంటెంట్‌ని చూస్తారు.

### 2. SSG Flow (Static Site Generation)

ఇక్కడ సర్వర్ రిక్వెస్ట్ వచ్చే వరకు ఆగదు.

1. **Build Time:** మీరు `npm run build` కొట్టినప్పుడు, కోడ్ బిల్డ్ అవుతుంది.
2. **Pre-rendering:** సర్వర్ అప్పుడే డేటాబేస్ ని కనెక్ట్ అయ్యి డేటా తెచ్చుకుంటుంది.
3. **Static Files:** HTML ఫైల్స్ జనరేట్ అయ్యి సర్వర్ స్టోరేజ్ లో సేవ్ అవుతాయి.
4. **User Request:** యూజర్ రిక్వెస్ట్ పంపగానే, సర్వర్ ఏమీ చేయకుండానే రెడీగా ఉన్న ఫైల్స్ ని పంపేస్తుంది. (చాలా వేగం!)

### 3. ISR Flow (Incremental Static Regeneration)

ఇది SSG లాగే మొదలై, మధ్యలో అప్‌డేట్ అవుతుంది.

1. **Initial Load:** SSG లాగే బిల్డ్ టైమ్‌లోనే HTML తయారవుతుంది.
2. **User Request:** యూజర్ రిక్వెస్ట్ పంపితే పాత (Stale) కంటెంట్ కనిపిస్తుంది.
3. **Revalidation Trigger:** ఆ టైమ్ లిమిట్ (ఉదా: 60 sec) దాటిన తర్వాత ఒక రిక్వెస్ట్ వస్తే...
4. **Background Refresh:** పాత కంటెంట్‌నే యూజర్‌కి చూపిస్తూ, బ్యాక్‌గ్రౌండ్‌లో సర్వర్ కొత్త డేటాను తెచ్చుకుని HTML ని మళ్ళీ బిల్డ్ చేస్తుంది.
5. **Update:** తర్వాతి యూజర్స్ కి కొత్త కంటెంట్ కనిపిస్తుంది.

---

### 4. Streaming Flow (progressive rendering)

పేజీ మొత్తం లోడ్ అయ్యే వరకు యూజర్ ఖాళీ స్క్రీన్ చూడకుండా ఉండటానికి ఇది వాడతాం.

1. **Initial Shell:** సర్వర్ వెంటనే HTML లో ఒక భాగం (Header, Sidebar) పంపిస్తుంది.
2. **Suspense:** డేటా వచ్చే వరకు లోడింగ్ స్టేట్ (loading.tsx) కనిపిస్తుంది.
3. **Data Chunks:** సర్వర్ నుండి డేటా వచ్చినప్పుడల్లా ఆయా భాగాలు (Chunks) నెమ్మదిగా బ్రౌజర్‌కి వెళ్తాయి.
4. **Patching:** బ్రౌజర్ పాత UI ని ఉంచుతూనే, కొత్తగా వచ్చిన డేటాను UI లో ప్యాచ్ చేస్తుంది.

### 5. Partial Rendering Flow

ఇది App Router లో ఉండే చాలా తెలివైన పద్ధతి.

1. **Navigation:** యూజర్ ఒక లింక్ మీద క్లిక్ చేస్తారు.
2. **Layout Persistence:** Next.js చెక్ చేస్తుంది... "ఓహో, లేఅవుట్ మారలేదు కదా!" అని గ్రహించి, పాత లేఅవుట్ అలాగే ఉంచుతుంది.
3. **Segment Fetch:** కేవలం మారాల్సిన కొత్త పేజీకి సంబంధించిన డేటాను మాత్రమే సర్వర్ నుండి తెచ్చుకుంటుంది.
4. **Swap:** పాత పేజీని తీసేసి, కొత్త పేజీని (Layout లోపల) స్వ్యాప్ చేస్తుంది.

- _ఫలితం:_ హెడర్ రీ-లోడ్ అవ్వదు, కేవలం మెయిన్ కంటెంట్ మాత్రమే మారుతుంది.

---

### సమ్మరీ: క్విక్ రిఫరెన్స్

| Strategy              | ఎప్పుడు జరుగుతుంది?     | ఎవరికి బెస్ట్?           |
| --------------------- | ----------------------- | ------------------------ |
| **SSR**               | Per-request             | Dashboard, User-specific |
| **SSG**               | Build-time              | Blogs, About Us          |
| **ISR**               | Background (After time) | E-commerce, News feeds   |
| **Streaming**         | Real-time chunks        | Heavy pages, Large data  |
| **Partial Rendering** | Per-navigation          | Faster page-to-page nav  |

---

# 8 — Server Actions

Next.js లో **Server Actions** అనేది ఒక విప్లవాత్మక ఫీచర్. ఇంతకుముందు మనం డేటా అప్‌డేట్ చేయాలంటే ఒక ప్రత్యేకమైన API Route (`/api/route.ts`) క్రియేట్ చేయాల్సి వచ్చేది. కానీ Server Actions తో, మనం నేరుగా మన ఫ్రంటెండ్ కాంపోనెంట్ నుండే సర్వర్-సైడ్ కోడ్‌ని రన్ చేయవచ్చు.

దీనిని అర్థం చేసుకోవడానికి కొన్ని ముఖ్యమైన పాయింట్స్ ఇక్కడ ఉన్నాయి:

---

### 1. "use server" Directives

ఇది ఒక మార్కర్. మీరు ఒక ఫంక్షన్ పైన `"use server"` అని రాస్తే, నెక్స్ట్ జెఎస్ దాన్ని ఆటోమేటిక్‌గా ఒక **Server Action** లాగా ట్రీట్ చేస్తుంది.

- **ఎక్కడ రాయాలి?**:
- **ఫైల్ పైన**: ఒక ఫైల్‌లో అన్నీ Server Actions ఏ ఉంటే, ఫైల్ మొదట్లో `"use server"` అని రాయాలి.
- **ఫంక్షన్ పైన**: ఒక Client Component లోపల ఒక చిన్న యాక్షన్ మాత్రమే రాయాలనుకుంటే, ఆ ఫంక్షన్ లోపల మొదటి లైన్ లో `"use server"` అని రాయాలి.

---

### 2. Forms & Mutations (డేటా అప్‌డేట్ చేయడం)

Server Actions ప్రధానంగా డేటా మ్యుటేషన్ (Creating, Updating, Deleting data) కోసం వాడతాము.

- **ఎలా పనిచేస్తుంది?**: HTML `<form>` లో ఉండే `action` ఆట్రిబ్యూట్‌కు నేరుగా మనం ఈ ఫంక్షన్‌ని అటాచ్ చేయవచ్చు. `onSubmit` తో పనిలేకుండానే, JavaScript లేకపోయినా ఇది పనిచేస్తుంది!

**ఉదాహరణ:**

```tsx
// app/actions.ts
"use server"

export async function updateUsername(formData: FormData) {
  const name = formData.get("username");
  // ఇక్కడ డేటాబేస్ అప్‌డేట్ లాజిక్ ఉంటుంది
  await db.user.update({ ... });

  // రీవాలిడేషన్ (UI అప్‌డేట్ చేయడానికి)
  revalidatePath("/profile");
}

```

---

### 3. Database Updates (ఒక ప్రాక్టికల్ ఫ్లో)

Server Actions తో డేటాబేస్ అప్‌డేట్ చేయడం చాలా సులభం:

1. **Client Component**: యూజర్ ఫామ్‌ని సబ్మిట్ చేస్తాడు.
2. **Server Action**: ఆ సబ్మిషన్ నేరుగా సర్వర్ ఫంక్షన్‌ని కాల్ చేస్తుంది.
3. **Execution**: సర్వర్ లోపలే డేటాబేస్ (Prisma, Drizzle, etc.) క్వెరీ రన్ అవుతుంది.
4. **Revalidation**: `revalidatePath` లేదా `revalidateTag` వాడి, డేటాబేస్ లో మార్పులు జరిగిన వెంటనే UI ని కూడా అప్‌డేట్ చేయవచ్చు.

---

### Server Actions vs API Routes (తేడాలు)

| ఫీచర్          | API Routes                                      | Server Actions                   |
| -------------- | ----------------------------------------------- | -------------------------------- |
| **క్లిష్టత**   | ఎక్కువ (API Endpoint రాయాలి)                    | చాలా తక్కువ (జస్ట్ ఒక ఫంక్షన్)   |
| **Typescript** | కష్టం (Endpoints ని మ్యాన్యువల్ గా టైప్ చేయాలి) | చాలా ఈజీ (నేరుగా ఫంక్షన్ కాల్స్) |
| **యూజ్ కేస్**  | Public API ని బిల్డ్ చేయడానికి                  | ఫామ్ సబ్మిషన్లు, డేటా అప్‌డేట్స్ |

---

### ఎందుకు Server Actions వాడాలి?

- **Zero API Boilerplate**: మీరు `fetch('/api/...')` అని రాయాల్సిన అవసరం లేదు.
- **Progressive Enhancement**: ఒకవేళ యూజర్ బ్రౌజర్‌లో JavaScript ఆగిపోయినా (Disable చేసినా), ఈ ఫామ్ సబ్మిషన్లు పనిచేస్తాయి!
- **Security**: సర్వర్-సైడ్ కోడ్ సర్వర్ లోనే ఉంటుంది కాబట్టి, మీ డేటాబేస్ క్రెడెన్షియల్స్ క్లయింట్ కి తెలియవు.

**ఒక ముఖ్యమైన చిట్కా (Pro-tip):**
మీరు ఏదైనా డేటాను అప్‌డేట్ చేసినప్పుడు, యూజర్ కి లేటెస్ట్ డేటా కనిపించాలంటే `revalidatePath()` వాడటం మర్చిపోవద్దు. ఇది మీరు అప్‌డేట్ చేసిన పేజీని రీ-రెండర్ చేసి లేటెస్ట్ డేటాను చూపిస్తుంది.

ఈ కాన్సెప్ట్ అర్థమైందా? ఇప్పుడు మీరు Next.js లో పూర్తి స్థాయి Full-Stack అప్లికేషన్ (UI + Data Fetching + Updates) బిల్డ్ చేయడానికి రెడీగా ఉన్నారు.

---

## Interview Questions

Next.js లో **Server Actions** అనేవి మీరు డేటాబేస్ మార్పులు (Mutations - అంటే Create, Update, Delete) చేయడానికి వాడే అత్యంత సులభమైన మరియు పవర్‌ఫుల్ మార్గం. వీటి గురించి మీ ప్రశ్నలకు సమాధానాలు ఇక్కడ ఉన్నాయి:

---

### 1. What are Server Actions? (అసలు ఇవి ఏంటి?)

Server Actions అనేవి సర్వర్ మీద రన్ అయ్యే అసిన్క్రోనస్ (Asynchronous) ఫంక్షన్స్. మీరు ఒక ఫంక్షన్ పైన `"use server"` అని రాస్తే, అది సర్వర్ యాక్షన్ అవుతుంది.

- వీటిని మీరు నేరుగా క్లయింట్ కాంపోనెంట్స్ లోని ఫామ్స్‌లో (`<form action={myAction}>`) లేదా బటన్ క్లిక్స్ లో వాడుకోవచ్చు.
- వీటి కోసం మనం సపరేట్ API ఎండ్‌పాయింట్ (API route) క్రియేట్ చేయాల్సిన అవసరం లేదు.

---

### 2. Why better than API routes? (API Routes కంటే ఎందుకు బెటర్?)

| ఫీచర్               | API Routes                                    | Server Actions                       |
| ------------------- | --------------------------------------------- | ------------------------------------ |
| **కోడ్ రాయడం**      | endpoint రాయాలి, రిక్వెస్ట్ హ్యాండిల్ చేయాలి. | జస్ట్ ఒక ఫంక్షన్ రాస్తే చాలు.        |
| **కాలింగ్**         | `fetch()` ద్వారా క్లయింట్ నుండి పిలవాలి.      | నేరుగా ఫంక్షన్ కాల్ చేయొచ్చు.        |
| **టైప్‌స్క్రిప్ట్** | క్లిష్టంగా ఉంటుంది.                           | చాలా సులభం, టైప్ సేఫ్టీ ఉంటుంది.     |
| **ఫ్లో**            | ఎక్కువ కోడ్ (Boilerplate) ఉంటుంది.            | తక్కువ కోడ్, చాలా క్లీన్ గా ఉంటుంది. |

---

### 3. Security Advantages? (భద్రతా ప్రయోజనాలు?)

Server Actions వాడటం వల్ల సెక్యూరిటీ చాలా పెరుగుతుంది:

- **Sensitive Code Isolation**: మీరు డేటాబేస్ క్వెరీలు, సీక్రెట్ కీలు (Secret keys) క్లయింట్ సైడ్ కోడ్‌లో ఎప్పటికీ రాయరు. ఆ కోడ్ సర్వర్ లోనే ఉంటుంది కాబట్టి, యూజర్ దాన్ని చూడలేడు.
- **Built-in CSRF Protection**: నెక్స్ట్ జెఎస్ సర్వర్ యాక్షన్స్ ఫామ్స్ ద్వారా వాడినప్పుడు, ఆటోమేటిక్‌గా Cross-Site Request Forgery (CSRF) అటాక్స్ నుండి ప్రొటెక్షన్ ఇస్తుంది.
- **Reduced Attack Surface**: క్లయింట్ మరియు సర్వర్ మధ్య API కాల్స్ ఉండవు కాబట్టి, హ్యాకర్లకు మధ్యలో డేటాను మానిపులేట్ చేసే అవకాశం తక్కువ.

---

### 4. Can Server Actions access DB? (డేటాబేస్ యాక్సెస్ చేయగలవా?)

**అవును, ఖచ్చితంగా!**
అసలు Server Actions పుట్టిందే డేటాబేస్‌తో పని చేయడానికి.

- మీరు Prisma, Drizzle, లేదా SQL క్వెరీలను నేరుగా Server Action లోపల రాయవచ్చు.
- **ఉదాహరణ:**

```typescript
"use server";

export async function submitForm(formData: FormData) {
  const name = formData.get("name");
  // నేరుగా DB క్వెరీ
  await db.user.create({ data: { name } });
}
```

ఇది చాలా సురక్షితం ఎందుకంటే, ఈ డేటాబేస్ క్వెరీ ఎప్పటికీ క్లయింట్ (బ్రౌజర్) కి చేరదు. అది సర్వర్ లోనే రన్ అవుతుంది.

---

### క్లుప్తంగా (Summary):

- **API Routes:** పబ్లిక్ APIలు (అంటే బయట వేరేవాళ్లు మీ సర్వర్‌ని వాడాలంటే) క్రియేట్ చేయడానికి వాడండి.
- **Server Actions:** మీ స్వంత ఫ్రంటెండ్ (Next.js యాప్) లో ఫామ్స్ సబ్మిట్ చేయడానికి, డేటా అప్‌డేట్ చేయడానికి వాడండి.

---

# 9 — API Routes

Next.js లో **API Routes** అనేవి మీ అప్లికేషన్‌కి బ్యాకెండ్ ఫంక్షనాలిటీని క్రియేట్ చేయడానికి ఉపయోగపడతాయి. ఇది చాలా ఫ్లెక్సిబుల్, ఎందుకంటే మీరు సపరేట్ బ్యాకెండ్ సర్వర్ (Node.js/Express) లేకుండానే, మీ Next.js యాప్ లోనే API ఎండ్‌పాయింట్స్ రాసుకోవచ్చు.

---

### 1. API Route అంటే ఏమిటి?

Next.js లో `app/api` అనే ఫోల్డర్ లోపల మీరు `route.ts` అనే ఫైల్ క్రియేట్ చేస్తే, అది ఒక **API Endpoint** లా పనిచేస్తుంది.

- **File Path**: `app/api/users/route.ts`
- **URL**: `[your-website.com/api/users](https://your-website.com/api/users)`

### 2. `route.ts` ని ఎలా వాడాలి?

ఈ ఫైల్‌లో మీరు HTTP మెథడ్స్ (GET, POST, PUT, DELETE, PATCH) ని ఎగుమతి (export) చేయాలి.

**ఉదాహరణ:**

```typescript
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello Users!" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "User created", data: body });
}
```

---

### 3. HTTP Methods - ఎప్పుడు ఏది వాడాలి?

| Method        | ఉద్దేశ్యం (Purpose)                     |
| ------------- | --------------------------------------- |
| **GET**       | డేటాను తెచ్చుకోవడానికి (Read)           |
| **POST**      | కొత్త డేటాను సబ్మిట్ చేయడానికి (Create) |
| **PUT/PATCH** | డేటాను అప్‌డేట్ చేయడానికి (Update)      |
| **DELETE**    | డేటాను తొలగించడానికి (Delete)           |

---

### 4. Middleware అంటే ఏమిటి?

Middleware అనేది మీ API రిక్వెస్ట్ కి ఒక **"Checkpoint"** లాంటిది. రిక్వెస్ట్ మీ `route.ts` కి చేరకముందే, ఈ Middleware దాన్ని ఆపి చెక్ చేస్తుంది.

- **ఎందుకు వాడతారు?**: యూజర్ లాగిన్ అయ్యాడా లేదా అని చెక్ చేయడానికి (Auth Check), లేదా యూజర్ ని ఒక పేజీ నుండి ఇంకో పేజీకి రీడైరెక్ట్ చేయడానికి.
- ఇది `app/` ఫోల్డర్ పక్కనే `middleware.ts` అనే పేరుతో ఉంటుంది.

---

### Interview Questions (ఇంటర్వ్యూ కోసం సిద్ధంగా ఉండండి)

#### **Q1. How to create an API Route?**

**Answer**: Next.js App Router లో, `app/` డైరెక్టరీలోపల ఏదైనా ఫోల్డర్ క్రియేట్ చేసి, అందులో `route.ts` అనే ఫైల్ ని క్రియేట్ చేయాలి. ఆ ఫైల్‌లో మనం HTTP మెథడ్స్ (GET, POST వంటివి) ఎగుమతి (export) చేస్తే అది ఆటోమేటిక్‌గా ఒక API ఎండ్‌పాయింట్ అవుతుంది.

#### **Q2. Explain `route.ts`.**

**Answer**: `route.ts` అనేది API రూట్లను డిఫైన్ చేసే ఫైల్. ఇందులో మనం రిక్వెస్ట్ హ్యాండిల్ చేయడానికి ఫంక్షన్స్ రాస్తాం. `Request` ఆబ్జెక్ట్ ద్వారా మనం ఇన్‌కమింగ్ డేటాను పొందవచ్చు, `NextResponse` ద్వారా రెస్పాన్స్ (JSON, status codes) పంపవచ్చు.

#### **Q3. Request and Response objects అంటే ఏమిటి?**

**Answer**:

- **Request**: క్లయింట్ (Browser/Frontend) పంపిన డేటా (Body, Headers, Cookies) ఇందులో ఉంటుంది.
- **Response (`NextResponse`)**: మనం క్లయింట్‌కి తిరిగి పంపే సమాధానం. ఇందులో JSON డేటా, స్టేటస్ కోడ్స్ (200, 400, 500) వంటివి సెట్ చేస్తాం.

---

### ప్రో-టిప్ (Pro-Tip for Developers):

Next.js లో **Server Actions** వచ్చిన తర్వాత, ఇప్పుడు చాలా మంది API Routes వాడటం తగ్గించారు.

- **Server Actions**: మీ ఫ్రంటెండ్ నుండి డేటా అప్‌డేట్ చేయడానికి బెస్ట్.
- **API Routes**: ఒకవేళ మీ అప్లికేషన్‌ను బయటి వాళ్ళు (ఉదా: మొబైల్ యాప్ లేదా థర్డ్-పార్టీ వెబ్‌సైట్స్) వాడుకోవాలి అనుకుంటే, అప్పుడు కచ్చితంగా API Routes నే వాడాలి.

---

# 10 — Authentication

Next.js లో Authentication (అథెంటికేషన్) అనేది ఒక యూజర్ "ఎవరు?" అని తెలుసుకోవడం. దీనిని హ్యాండిల్ చేయడానికి మీరు ముఖ్యంగా మూడు విషయాలు అర్థం చేసుకోవాలి: **JWT**, **Cookies**, మరియు **Session**.

వీటి గురించి సింపుల్ తెలుగులో వివరాలు ఇక్కడ ఉన్నాయి:

---

### 1. JWT (JSON Web Token) - "డిజిటల్ ఐడి కార్డు"

JWT అనేది ఒక encoded string. ఇది యూజర్ యొక్క సమాచారాన్ని (User ID, Role, etc.) తనలోనే దాచుకుంటుంది.

- **ఎలా పనిచేస్తుంది?**: సర్వర్ యూజర్‌ని వెరిఫై చేసిన తర్వాత, ఒక JWTని ఇస్తుంది. యూజర్ ఏ రిక్వెస్ట్ చేసినా ఆ JWT ని వెంటపెట్టుకుని వెళ్తాడు.
- **ముఖ్యమైన విషయం**: ఇది "Signed" అయి ఉంటుంది, అంటే ఎవరూ దీన్ని మార్చలేరు. ఒకవేళ ఎవరైనా మార్చితే, ఆ సంతకం (Signature) చెల్లదు.

### 2. Cookies - "డేటాను దాచుకునే జేబు"

Next.js లో అథెంటికేషన్ కోసం JWTని బ్రౌజర్‌లో ఎక్కడ దాచుకోవాలి? `Cookies` లోనే!

- **ఎందుకు Cookies?**: బ్రౌజర్‌లో `localStorage` కూడా ఉంటుంది, కానీ అది సురక్షితం కాదు (JavaScript ద్వారా దొంగిలించవచ్చు).
- **HttpOnly Cookie**: మీరు JWTని `HttpOnly` కూకీలో దాచినప్పుడు, బ్రౌజర్‌లోని జావాస్క్రిప్ట్ దాన్ని చూడలేదు (చదవలేదు). దీనివల్ల XSS (Cross-Site Scripting) అటాక్స్ నుండి రక్షణ దొరుకుతుంది.

### 3. Session - "యూజర్ యొక్క లాగిన్ స్టేటస్"

సెషన్ అంటే "యూజర్ లాగిన్ అయ్యి ఉన్నారా లేదా?" అనే స్టేట్. ఇది రెండు రకాలుగా ఉంటుంది:

- **Stateless Session (JWT-based)**: సర్వర్ ఎటువంటి డేటాను దాచుకోదు. కేవలం టోకెన్ (JWT) లో ఉన్న సమాచారాన్ని చూసి యూజర్ ఎవరో నిర్ణయిస్తుంది. (ఇది చాలా ఫాస్ట్).
- **Stateful Session (Database-based)**: యూజర్ లాగిన్ అయినప్పుడు సర్వర్ ఒక సెషన్ ఐడిని డేటాబేస్ లో సేవ్ చేస్తుంది. ప్రతి రిక్వెస్ట్ కి సర్వర్ డేటాబేస్ ని చెక్ చేస్తుంది. (ఇది ఎక్కువ సెక్యూర్).

---

### ఎలా పనిచేస్తుంది? (The Flow)

1. **Login**: యూజర్ తన వివరాలు (Email/Password) ఇస్తారు. సర్వర్ డేటాబేస్ చెక్ చేసి సరిగ్గా ఉంటే...
2. **Token Generation**: సర్వర్ ఒక **JWT**ని తయారు చేస్తుంది.
3. **Set-Cookie**: సర్వర్ ఆ JWTని బ్రౌజర్‌కి పంపేటప్పుడు `Set-Cookie` హెడర్ ద్వారా బ్రౌజర్‌లో సేవ్ చేయమని చెప్తుంది.
4. **Validation**: తర్వాతి ప్రతి రిక్వెస్ట్ కి బ్రౌజర్ ఆటోమేటిక్‌గా ఆ **Cookie** ని సర్వర్‌కి పంపిస్తుంది. సర్వర్ ఆ Cookie లోని JWT ని వెరిఫై చేసి, యూజర్‌కి యాక్సెస్ ఇస్తుంది.

---

### సమ్మరీ: ఏది ఎప్పుడు వాడాలి?

| కాన్సెప్ట్  | వాడే విధానం                                        |
| ----------- | -------------------------------------------------- |
| **JWT**     | యూజర్ యొక్క సమాచారాన్ని మోయడానికి (Token).         |
| **Cookies** | JWT ని సురక్షితంగా బ్రౌజర్‌లో దాచడానికి.           |
| **Session** | యూజర్ లాగిన్ లో ఉన్నారా లేదా అని ట్రాక్ చేయడానికి. |

---

### ఒక ముఖ్యమైన సలహా (Pro-Tip):

అథెంటికేషన్ అనేది చాలా సున్నితమైన (sensitive) విషయం. సొంతంగా అథెంటికేషన్ కోడ్ రాయడం కంటే, ఇప్పటికే ఉన్న నమ్మకమైన లైబ్రరీలను వాడటం ఉత్తమం.

- **Auth.js (NextAuth.js)**: నెక్స్ట్ జెఎస్ కోసం ఇది బెస్ట్ లైబ్రరీ. ఇది JWT, Cookies, Sessions అన్నింటినీ చాలా సురక్షితంగా హ్యాండిల్ చేస్తుంది.
- **Clerk**: ఇది ఇంకా సులభం, కేవలం కొన్ని కాంపోనెంట్స్ వాడితే చాలు, మొత్తం అథెంటికేషన్ సిస్టమ్ రెడీ అవుతుంది.

---

Next.js లో అథెంటికేషన్ ని నెక్స్ట్ లెవల్‌కి తీసుకెళ్లాలంటే, ఈ కాన్సెప్ట్స్ చాలా ముఖ్యం. సొంతంగా లాగిన్ సిస్టమ్ బిల్డ్ చేయడం కన్నా, **OAuth** ద్వారా ఇతరుల ప్లాట్‌ఫామ్స్ (Google, GitHub) ని వాడుకోవడం ఇప్పుడు చాలా కామన్.

వీటి గురించి సులభంగా తెలుసుకుందాం:

---

### 1. OAuth (Open Authorization) అంటే ఏమిటి?

OAuth అనేది ఒక "Delegated Authorization" ప్రోటోకాల్. దీని అర్థం ఏంటంటే: యూజర్ తన పాస్‌వర్డ్‌ని మీ అప్లికేషన్‌కి ఇవ్వాల్సిన అవసరం లేదు. కేవలం "Google ద్వారా లాగిన్ అవ్వండి" అని చెప్తే, Google ఆ యూజర్ ని వెరిఫై చేసి, ఒక **Access Token** ని మీ యాప్‌కి పంపిస్తుంది.

**ఎలా పనిచేస్తుంది?**

1. **Request:** యూజర్ మీ యాప్‌లో "Sign in with Google" బటన్ నొక్కుతారు.
2. **Redirect:** మీ యాప్ యూజర్‌ని Google లాగిన్ పేజీకి పంపిస్తుంది.
3. **Authorize:** యూజర్ లాగిన్ అయ్యి, "నీ ప్రొఫైల్ డీటెయిల్స్ యాక్సెస్ చేయడానికి మీ యాప్‌కి పర్మిషన్ ఇస్తున్నావా?" అని Google అడిగితే "Yes" అంటారు.
4. **Callback:** Google యూజర్‌ని తిరిగి మీ యాప్‌కి (Callback URL) పంపిస్తుంది, ఒక చిన్న 'Code' తో పాటు.
5. **Token Exchange:** మీ సర్వర్ ఆ 'Code' ని Google కి ఇచ్చి, దాని బదులుగా 'User Profile Information' (Access Token) పొందుతుంది.

---

### 2. Google & GitHub Login

నెక్స్ట్ జెఎస్ లో వీటిని వాడటం చాలా సులభం. దీనికోసం మీరు **Auth.js (NextAuth.js)** వాడటం బెస్ట్ ప్రాక్టీస్.

- **Google Login**: గూగుల్ క్లౌడ్ కన్సోల్ (Google Cloud Console) లోకి వెళ్లి ప్రాజెక్ట్ క్రియేట్ చేయాలి. అక్కడ మీకు `Client ID` మరియు `Client Secret` వస్తాయి.
- **GitHub Login**: GitHub Developer Settings లోకి వెళ్లి OAuth App క్రియేట్ చేయాలి. అక్కడ కూడా మీకు `Client ID` మరియు `Secret` వస్తాయి.

**కోడ్ లో ఎలా?**:
`Auth.js` కాన్ఫిగరేషన్ ఫైల్‌లో ఈ ID లను యాడ్ చేస్తే సరిపోతుంది:

```typescript
import GoogleProvider from "next-auth/providers/google";

// auth.config.ts లో...
providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
];
```

---

### 3. Role Based Access Control (RBAC)

అందరూ ఒకే రకమైన పర్మిషన్స్ కలిగి ఉండరు. ఉదాహరణకు: 'Admin' అందరినీ చూడగలడు, 'User' తన డీటెయిల్స్ మాత్రమే చూడగలడు. దీన్నే RBAC అంటారు.

**ఎలా ఇంప్లిమెంట్ చేయాలి?**
మీరు యూజర్ ని లాగిన్ చేసినప్పుడు, డేటాబేస్ నుండి ఆ యూజర్ 'Role' ని (Admin/User) కూడా తీసుకురావాలి.

| విధానం                | వివరణ                                                                               |
| --------------------- | ----------------------------------------------------------------------------------- |
| **Middleware**        | URL బట్టి చెక్ చేస్తుంది. ఉదా: `/admin` రూట్ కి కేవలం Admin రోల్ ఉన్నోళ్ళనే పంపాలి. |
| **Server Components** | డేటాబేస్ నుండి రోల్ చెక్ చేసి, దాన్ని బట్టి బటన్స్ (Delete/Edit) చూపించడం.          |
| **Server Actions**    | ఏదైనా అప్‌డేట్ చేసే ముందు, "ఈ యూజర్ కి పర్మిషన్ ఉందా?" అని సర్వర్ లో చెక్ చేయడం.    |

**ఉదాహరణ (RBAC Check):**

```typescript
// Server Component లో...
async function AdminDashboard() {
  const session = await auth();

  if (session?.user.role !== "ADMIN") {
    return <div>మీకు యాక్సెస్ లేదు!</div>;
  }

  return <div>Admin Panel</div>;
}

```

---

### మీరు గుర్తుంచుకోవాల్సిన ముఖ్యమైన విషయాలు:

1. **Never expose Client Secret**: మీ `GOOGLE_CLIENT_SECRET` లేదా `GITHUB_CLIENT_SECRET` ని ఎప్పటికీ `.env` లోనే ఉంచండి. వాటిని GitHub లో పుష్ చేయకండి!
2. **Auth.js (NextAuth.js) వాడండి**: మీరు `passport.js` లేదా సొంతంగా OAuth కోడ్ రాస్తే తప్పులు జరిగే అవకాశం ఉంది. Auth.js అనేది నెక్స్ట్ జెఎస్ కి బెస్ట్.
3. **Security First**: RBAC ఎప్పుడూ సర్వర్ సైడ్ లోనే చెక్ చేయాలి (Middleware లేదా Server Actions ద్వారా). కేవలం క్లయింట్ లో UI హైడ్ చేస్తే హ్యాకర్లు దాన్ని సులభంగా బైపాస్ చేయగలరు.

---

## Libraries

Next.js లో Authentication కోసం మీరు ఎంచుకోగల టాప్ 3 ఆప్షన్స్ ఇవే. మీరు మీ ప్రాజెక్ట్ అవసరాలను బట్టి వీటిలో ఒకటి ఎంచుకోవచ్చు. వీటి మధ్య తేడాలను క్లియర్ గా చూద్దాం:

---

### 1. Auth.js (formerly NextAuth.js)

ఇది Next.js కమ్యూనిటీలో **"Industry Standard"**.

- **ఎలాంటిది?**: ఇది ఓపెన్ సోర్స్ (Open Source). అంటే, మీ సర్వర్ లోనే మొత్తం కోడ్ ఉంటుంది.
- **ఎందుకు వాడాలి?**:
- మీకు డేటా మీద పూర్తి నియంత్రణ (Control) కావాలి.
- ఏ మంత్లీ ఫీజులు కట్టాల్సిన పనిలేదు.
- చాలా ఎక్కువ ఫ్లెక్సిబిలిటీ ఉంటుంది.

- **Cons**: దీనిని సెటప్ చేయడం (Configuration) కొంచెం కష్టంగా అనిపించవచ్చు. UI ని మీరే క్రియేట్ చేసుకోవాలి (అయితే `Auth.js` ఇప్పుడు చాలా ఈజీ అయ్యింది).

### 2. Clerk

ఇది ప్రస్తుతం డెవలపర్స్ ఫేవరెట్, ఎందుకంటే ఇది **"Batteries-included"**.

- **ఎలాంటిది?**: ఇది ఒక "Authentication-as-a-Service" (SaaS).
- **ఎందుకు వాడాలి?**:
- **Speed**: జస్ట్ 5 నిమిషాల్లో లాగిన్, సైన్-అప్, ప్రొఫైల్ పేజీలు రెడీ అయిపోతాయి (వీరి రెడీమేడ్ UI కాంపోనెంట్స్ వల్ల).
- **Features**: యూజర్ మేనేజ్మెంట్, బిల్లింగ్, ఇమెయిల్ వెరిఫికేషన్ అన్నీ అదే చూసుకుంటుంది.
- **DX (Developer Experience)**: డెవలపర్‌గా మీకు చాలా సులభంగా ఉంటుంది.

- **Cons**: ఇది వారి ప్లాట్‌ఫామ్ మీద డిపెండ్ అవ్వాలి (Vendor lock-in). ఒకవేళ మీ ప్రాజెక్ట్ చాలా పెద్దదైతే, వారి ప్లాన్ ధరలు పెరగవచ్చు.

### 3. Supabase Auth

మీరు మీ డేటాబేస్ కోసం **Supabase** ని వాడుతుంటే, దీనికి మించిన ఆప్షన్ లేదు.

- **ఎలాంటిది?**: ఇది Supabase ప్లాట్‌ఫామ్ లో భాగంగా వచ్చే అథెంటికేషన్.
- **ఎందుకు వాడాలి?**:
- **RLS (Row Level Security)**: ఇది దీని మెయిన్ పవర్. యూజర్ కేవలం తన డేటాను మాత్రమే చూసేలా డేటాబేస్ లెవల్ లోనే భద్రత కల్పించవచ్చు.
- **Database Integration**: డేటాబేస్ మరియు అథెంటికేషన్ ఒకే చోట ఉంటాయి కాబట్టి, పర్మిషన్లు మేనేజ్ చేయడం చాలా ఈజీ.

- **Cons**: మీరు Supabase ని వాడుతుంటేనే ఇది బెస్ట్. కేవలం అథెంటికేషన్ కోసం మాత్రం దీనిని వాడటం కంటే Auth.js బెస్ట్.

---

### తులనాత్మక పట్టిక (Quick Comparison Table)

| ఫీచర్          | Auth.js             | Clerk             | Supabase Auth    |
| -------------- | ------------------- | ----------------- | ---------------- |
| **Control**    | Full (Self-hosted)  | Limited (Service) | Medium           |
| **Setup Time** | Medium              | Very Fast         | Fast             |
| **Pricing**    | Free (Open Source)  | Free tier + Paid  | Free tier + Paid |
| **UI**         | Custom (You build)  | Ready-to-use      | Custom           |
| **Best For**   | Control & Zero Cost | Speed & UX        | Supabase users   |

---

### నా సలహా (My Suggestion):

1. **మీరు ఒక కొత్త పర్సనల్ ప్రాజెక్ట్ లేదా పోర్ట్‌ఫోలియో బిల్డ్ చేస్తుంటే**: **Auth.js** వాడండి. అథెంటికేషన్ ఎలా పనిచేస్తుందో లోతుగా అర్థమవుతుంది.
2. **మీరు ఒక స్టార్టప్ లేదా ఫాస్ట్ గా సాఫ్ట్‌వేర్ బిల్డ్ చేయాలి అనుకుంటే**: **Clerk** వాడండి. టైమ్ చాలా సేవ్ అవుతుంది, ప్రొడక్ట్ మీద ఫోకస్ పెట్టొచ్చు.
3. **మీరు డేటాబేస్ కోసం Supabase ని ఆల్రెడీ ఫిక్స్ అయిపోతే**: **Supabase Auth** వాడండి. డేటా సెక్యూరిటీ (RLS) కి ఇది చాలా పవర్‌ఫుల్.

---

## Interview Questions

Authentication మరియు Security కాన్సెప్ట్స్ డెవలప్‌మెంట్ కెరీర్‌లో చాలా కీలకం. మీరు అడిగిన ఈ ఐదు అంశాల గురించి సింపుల్ తెలుగులో వివరంగా తెలుసుకుందాం:

---

### 1. Authentication vs Authorization

చాలామంది వీటిని ఒకటే అనుకుంటారు, కానీ ఇంటర్వ్యూలలో ఇది కచ్చితంగా అడిగే ప్రశ్న.

- **Authentication (AuthN - "నువ్వు ఎవరు?"):** ఒక యూజర్ తన వివరాలు (Username/Password) ఇచ్చి, తను ఎవరు అని నిరూపించుకోవడాన్ని అథెంటికేషన్ అంటారు. ఉదాహరణకు: **Login**.
- **Authorization (AuthZ - "నీకు ఏమేమి పర్మిషన్లు ఉన్నాయి?"):** యూజర్ ఎవరో తెలిసిన తర్వాత, ఆ యూజర్ ఏయే పేజీలను చూడగలడు లేదా ఏయే పనులు చేయగలడు అని నిర్ణయించడాన్ని ఆథరైజేషన్ అంటారు. ఉదాహరణకు: **Admin Dashboard యాక్సెస్**.

---

### 2. JWT Flow (స్టెప్-బై-స్టెప్)

JWT (JSON Web Token) ఎలా పనిచేస్తుందో ఈ ఫ్లో చూడండి:

1. **Login:** యూజర్ తన credentials (email/password) ని సర్వర్‌కి పంపిస్తారు.
2. **Verify:** సర్వర్ డేటాబేస్ లో చెక్ చేసి, యూజర్ కరెక్ట్ అయితే ఒక **JWT**ని క్రియేట్ చేస్తుంది.
3. **Signing:** సర్వర్ తన దగ్గర ఉన్న ఒక 'Secret Key' ని ఉపయోగించి ఆ టోకెన్‌ను "Sign" చేస్తుంది. (దీనివల్ల ఎవరూ ఆ టోకెన్‌ను మార్చలేరు).
4. **Send:** సర్వర్ ఆ JWTని క్లయింట్‌కి (Browser) పంపిస్తుంది.
5. **Store:** క్లయింట్ ఆ టోకెన్‌ని **HttpOnly Cookie** లో దాచుకుంటుంది.
6. **Request:** తర్వాత యూజర్ ఏ రిక్వెస్ట్ చేసినా, ఆ JWTని హెడర్ (Authorization: Bearer ) లో పంపిస్తారు.
7. **Validate:** సర్వర్ ఆ టోకెన్‌ని చూసి, అది వాలిడ్ అయితేనే డేటాను ఇస్తుంది.

---

### 3. Cookie vs LocalStorage

సెక్యూరిటీ పరంగా ఇది చాలా ముఖ్యమైన తేడా:

| ఫీచర్          | Cookie (HttpOnly)                     | LocalStorage                              |
| -------------- | ------------------------------------- | ----------------------------------------- |
| **JS Access**  | JavaScript ద్వారా చదవలేము (సురక్షితం) | JS ద్వారా సులభంగా చదవవచ్చు                |
| **XSS Attack** | XSS అటాక్స్ నుండి రక్షణ ఉంటుంది       | XSS అటాక్ జరిగితే టోకెన్ దొంగిలించబడవచ్చు |
| **Best For**   | Authentication Tokens                 | UI Preferences (Theme, Language)          |

**ముఖ్య గమనిక:** అథెంటికేషన్ టోకెన్ల కోసం **ఎప్పుడూ LocalStorage వాడకండి**. ఎల్లప్పుడూ HttpOnly Cookies నే వాడాలి.

---

### 4. Secure Authentication - బెస్ట్ ప్రాక్టీసెస్

మీ యాప్‌ను సురక్షితంగా ఉంచడానికి ఈ సూత్రాలు పాటించండి:

- **HTTPS:** ఎల్లప్పుడూ HTTPS వాడండి. లేకపోతే ఎవరైనా టోకెన్లను మధ్యలో దొంగిలించవచ్చు (Man-in-the-Middle attack).
- **Don't store Secrets:** క్లయింట్ సైడ్ కోడ్‌లో (React/Next.js client) ఎప్పుడూ `API_SECRET` లేదా `DB_PASSWORD` ఉంచకండి.
- **Libraries:** సొంతంగా అథెంటికేషన్ లాజిక్ రాయకండి (చాలా బగ్స్ వస్తాయి). **Auth.js** లేదా **Clerk** వంటి లైబ్రరీలను వాడండి.
- **Rate Limiting:** ఒకే IP నుండి ఎక్కువ లాగిన్ అటెంప్ట్స్ వస్తే, దాన్ని బ్లాక్ చేయండి (Brute force అటాక్స్ ఆపడానికి).

---

### 5. Refresh Tokens

JWTలు చాలా తక్కువ కాలం మాత్రమే పనిచేస్తాయి (ఉదా: 15 నిమిషాలు), ఎందుకంటే అవి చాలా సెక్యూర్. మరి 15 నిమిషాల తర్వాత యూజర్ మళ్ళీ లాగిన్ అవ్వాలా? అక్కడే **Refresh Tokens** వస్తాయి.

- **Access Token (Short-lived):** ఇది ప్రతి API రిక్వెస్ట్ కి వాడుతాము. తక్కువ సమయం (ఉదా: 15 నిమిషాలు) మాత్రమే పనిచేస్తుంది.
- **Refresh Token (Long-lived):** ఇది ఎక్కువ కాలం (ఉదా: 7 రోజులు) పనిచేస్తుంది.
- **ఫ్లో:** Access Token ఎక్స్‌పైర్ అయినప్పుడు, బ్రౌజర్ ఆటోమేటిక్‌గా Refresh Token ని సర్వర్‌కి పంపిస్తుంది. సర్వర్ దాన్ని చూసి, కొత్త Access Token ని ఇస్తుంది. దీనివల్ల యూజర్ మళ్ళీ మళ్ళీ లాగిన్ అవ్వాల్సిన పనిలేదు.

---

# 11 — Middleware

Next.js లో **Middleware** అంటే ఒక "గేట్ కీపర్" (Gatekeeper) లాంటిది. మీరు రాసిన కోడ్ సర్వర్‌కి లేదా బ్రౌజర్‌కి చేరకముందే, ఈ మిడిల్‌వేర్ దాన్ని ఆపి చెక్ చేస్తుంది. ఇది **`middleware.ts`** అనే ఫైల్‌లో ఉంటుంది.

దీని గురించి క్లియర్ గా తెలుసుకుందాం:

---

### 1. `middleware.ts` ఎక్కడ ఉండాలి?

దీనిని `app/` ఫోల్డర్ తో సమానంగా (Root level లో) క్రియేట్ చేయాలి. ఇది గ్లోబల్‌గా అన్ని రూట్స్ మీద పనిచేస్తుంది.

---

### 2. Middleware వాడే ముఖ్యమైన సందర్భాలు

#### A. Authentication (సెక్యూరిటీ)

యూజర్ లాగిన్ అయ్యాడా లేదా? అని ప్రతి పేజీకి వెళ్ళే ముందు చెక్ చేస్తుంది. లాగిన్ అవ్వకపోతే యూజర్‌ని లాగిన్ పేజీకి పంపేయవచ్చు.

```typescript
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
```

#### B. Redirects (రీడైరెక్టింగ్)

పాత URL నుండి కొత్త URL కి పంపడం లేదా ఒక కండిషన్ బట్టి యూజర్‌ని వేరే పేజీకి పంపడం.

- ఉదాహరణకు: కంట్రీ కోడ్ ని బట్టి (ఉదా: `/in`, `/us`) వేరే పేజీకి మళ్లించడం.

#### C. Localization (భాషను మార్చడం)

యూజర్ బ్రౌజర్ సెట్టింగ్స్ ని బట్టి (Headers ద్వారా) వారికి కావాల్సిన భాషను (Telugu/English) ఆటోమేటిక్‌గా సెట్ చేయడం.

#### D. Headers (హెడర్స్ మేనేజ్‌మెంట్)

ఒక రిక్వెస్ట్ కి కొత్త హెడర్స్ ని యాడ్ చేయడం లేదా ఉన్నవాటిని మార్చడం. ఇది సెక్యూరిటీ పరంగా చాలా ముఖ్యం (ఉదా: `X-Frame-Options` వంటివి సెట్ చేయడం).

---

### 3. Middleware ఎలా పనిచేస్తుంది? (Execution Flow)

1. **Request:** యూజర్ ఒక పేజీని రిక్వెస్ట్ చేస్తారు.
2. **Middleware:** సర్వర్ రెస్పాన్స్ ఇవ్వకముందే, మిడిల్‌వేర్ కోడ్ రన్ అవుతుంది.
3. **Decision:** మిడిల్‌వేర్ మూడు పనులు చేయగలదు:

- **Allow:** రిక్వెస్ట్‌ను కొనసాగించు (NextResponse.next()).
- **Redirect:** యూజర్‌ని వేరే పేజీకి పంపించు (NextResponse.redirect()).
- **Rewrite:** యూజర్‌కి తెలియకుండా వేరే పేజీని చూపించు (NextResponse.rewrite()).

4. **Response:** సర్వర్ నుండి అసలైన కంటెంట్ వస్తుంది.

---

### ఇంటర్వ్యూలో అడిగే ముఖ్యమైన ప్రశ్నలు:

**Q: Middleware ఎక్కడ రన్ అవుతుంది?**
**Answer:** ఇది **Edge Runtime** మీద రన్ అవుతుంది. అంటే ఇది చాలా వేగంగా (Globally distributed) పనిచేస్తుంది. కాబట్టి ఇందులో హెవీ డేటాబేస్ క్వెరీలు రాయకూడదు.

**Q: `middleware.ts` లో DB క్వెరీలు రాయవచ్చా?**
**Answer:** **రాయకూడదు.** ఎందుకంటే మిడిల్‌వేర్ "Edge" లో రన్ అవుతుంది, అక్కడ డేటాబేస్ కనెక్షన్లు (Node.js/Prisma వంటివి) సపోర్ట్ చేయవు. కేవలం Cookies, Headers, JWT వెరిఫికేషన్ వంటి పనులు మాత్రమే చేయాలి.

---

### సమ్మరీ (Quick Recap):

- **Authentication:** ప్రొటెక్టెడ్ రూట్స్ కోసం.
- **Redirects:** డైనమిక్ రూటింగ్ కోసం.
- **Localization:** మల్టీ-లాంగ్వేజ్ యాప్స్ కోసం.
- **Headers:** సెక్యూరిటీ కీలు లేదా డేటాను యాడ్ చేయడానికి.

---

## Interview Questions

Next.js Middleware గురించి మీరు అడిగిన ప్రశ్నలు చాలా కీలకమైనవి. ప్రొడక్షన్-గ్రేడ్ అప్లికేషన్లు బిల్డ్ చేసేటప్పుడు ఇవే మీ వెబ్‌సైట్ పెర్ఫార్మెన్స్‌ని మరియు సెక్యూరిటీని డిసైడ్ చేస్తాయి.

ఇక్కడ పూర్తి వివరాలు ఉన్నాయి:

---

### 1. Middleware Flow (పనిచేసే విధానం)

Middleware అనేది మీ అప్లికేషన్ యొక్క **"గేట్ కీపర్"**. రిక్వెస్ట్ సర్వర్‌కి లేదా పేజీకి చేరకముందే ఇది మధ్యలో ఆపి, ఏదైనా నిర్ణయం తీసుకుంటుంది.

1. **Request Starts:** యూజర్ ఒక URLని (ఉదా: `/dashboard/settings`) రిక్వెస్ట్ చేస్తారు.
2. **Middleware Interception:** రిక్వెస్ట్ రౌటింగ్ జరగకముందే మిడిల్‌వేర్ దాన్ని పట్టుకుంటుంది.
3. **Logic Execution:** మీరు రాసిన కోడ్ (Auth చెక్, లాజిక్) రన్ అవుతుంది.
4. **Decision:**

- అన్నీ బాగుంటే: `NextResponse.next()` (రిక్వెస్ట్‌ను ముందుకు పంపిస్తుంది).
- లాగిన్ లేకపోతే: `NextResponse.redirect()` (లాగిన్ పేజీకి పంపిస్తుంది).
- URL మార్చాలంటే: `NextResponse.rewrite()` (యూజర్‌కి తెలియకుండా వేరే URL కంటెంట్ చూపిస్తుంది).

5. **Final Response:** చివరగా సర్వర్ పేజీని రెండర్ చేసి యూజర్‌కి పంపిస్తుంది.

---

### 2. Runs Before What? (ఏమిటి జరగకముందే ఇది రన్ అవుతుంది?)

Middleware అనేది **Route Matching** జరగకముందే రన్ అవుతుంది. అంటే:

- మీరు ఒక పేజీని (`page.tsx`) రెండర్ చేయకముందే...
- API రౌట్ (`route.ts`) లాజిక్ రన్ అవ్వకముందే...
- స్టాటిక్ ఫైల్స్ (Images, CSS) లోడ్ అవ్వకముందే...
  ఇది పనిచేస్తుంది. అందుకే దీన్ని **"Pre-processing"** స్టేజ్ అంటారు.

---

### 3. Common Use Cases (వాడే సందర్భాలు)

| Use Case                | ఏం చేస్తుంది?                                                       |
| ----------------------- | ------------------------------------------------------------------- |
| **Authentication**      | లాగిన్ లేని యూజర్‌ని ప్రొటెక్టెడ్ రూట్స్ నుండి బయటకు పంపడం.         |
| **Localization (i18n)** | యూజర్ యొక్క భాషను బట్టి (తెలుగు/ఇంగ్లీష్) URLని మార్చడం.            |
| **Bot Detection**       | వెబ్‌సైట్ ని స్క్రాప్ చేసే బాట్‌లను ఆపడం.                           |
| **Maintenance Mode**    | వెబ్‌సైట్ మెయింటెనెన్స్‌లో ఉన్నప్పుడు అందరినీ ఒకే పేజీకి మళ్లించడం. |
| **Security Headers**    | API సెక్యూరిటీ కీలు లేదా హెడర్లను ప్రతి రిక్వెస్ట్ కి యాడ్ చేయడం.   |

---

### 4. Performance Considerations (పెర్ఫార్మెన్స్ జాగ్రత్తలు)

Middleware ని ఎలా పడితే అలా వాడకూడదు. ఇది చాలా వేగంగా ఉండాలి.

- **Edge Runtime Only:** Middleware అనేది `Edge Runtime`లో రన్ అవుతుంది. అంటే ఇది పూర్తిస్థాయి Node.js కాదు. ఇందులో `fs` (file system), `database drivers` వంటి లైబ్రరీలను వాడకూడదు. కేవలం `Web APIs` మాత్రమే పనిచేస్తాయి.
- **Keep it Lightweight:** ఇందులో భారీగా డేటాబేస్ క్వెరీలు (DB Queries) రాయకండి. ఇది మీ రిక్వెస్ట్ టైమ్‌ని పెంచుతుంది. ఒకవేళ చెక్ చేయాలంటే, JWT వంటి టోకెన్లను మాత్రమే చెక్ చేయండి (ఇవి లోకల్ గా డీకోడ్ అవుతాయి).
- **Use `matcher`:** `middleware.ts` ప్రతి రిక్వెస్ట్ కి రన్ అవుతుంది. అందుకే `matcher` కాన్ఫిగరేషన్ వాడండి. దీనివల్ల ఏయే రూట్స్ కి మిడిల్‌వేర్ అప్లై అవ్వాలో ముందే చెప్పొచ్చు.
- _ఉదాహరణ:_ ఇమేజెస్ లేదా CSS ఫైల్స్ కి మిడిల్‌వేర్ అవసరం లేదు, కాబట్టి వాటిని `matcher` ద్వారా స్కిప్ చేయాలి.

```typescript
// middleware.ts
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // కేవలం ఈ రూట్స్ కే రన్ అవుతుంది
};
```

---

**చివరిగా ఒక ప్రో-టిప్:**
మీ అప్లికేషన్ పెర్ఫార్మెన్స్ వేగంగా ఉండాలంటే, Middleware లో కోడ్ ఎంత తక్కువగా ఉంటే అంత మంచిది. ఇది కేవలం "రిక్వెస్ట్ అలోవ్ చేయాలా లేదా?" అని నిర్ణయించే చెక్‌పాయింట్ లా మాత్రమే ఉండాలి.

---

# 12 — Image Optimization

Next.js లో **Image Optimization** అనేది వెబ్ పెర్ఫార్మెన్స్‌ను అద్భుతంగా మెరుగుపరిచే ఫీచర్. సాధారణ `<img>` ట్యాగ్‌తో పోలిస్తే, `next/image` ఎన్నో అడ్వాన్స్‌డ్ ఫీచర్లను ఆటోమేటిక్‌గా అందిస్తుంది.

---

### 1. `<Image/>` Component ఫీచర్లు

- **Automatic Resizing:** యూజర్ డివైజ్ స్క్రీన్ సైజును బట్టి ఇమేజ్‌ని ఆటోమేటిక్‌గా రీసైజ్ చేస్తుంది.
- **Modern Formats:** చిత్రాలను `WebP` లేదా `AVIF` వంటి తక్కువ సైజు, ఎక్కువ క్వాలిటీ ఉన్న ఫార్మాట్లలోకి మారుస్తుంది.
- **Lazy Loading:** స్క్రీన్‌పై ఇమేజ్ కనిపించినప్పుడే దాన్ని లోడ్ చేస్తుంది.

### 2. Lazy Loading

ఇది Next.js లో డిఫాల్ట్‌గా ఎనేబుల్ అయి ఉంటుంది.

- **ఎలా పనిచేస్తుంది?**: బ్రౌజర్ లోని `Intersection Observer` APIని ఉపయోగించి, ఒక ఇమేజ్ యూజర్ వ్యూ-పోర్ట్ (View-port) లోకి రాగానే, అప్పుడు మాత్రమే సర్వర్ నుండి ఆ ఇమేజ్‌ని డౌన్‌లోడ్ చేస్తుంది. దీనివల్ల పేజీ స్టార్టింగ్ లోనే వేగంగా లోడ్ అవుతుంది.
- **Disable చేయడం**: ఒకవేళ ఏదైనా ముఖ్యమైన ఇమేజ్ (ఉదా: Hero section లోని ఇమేజ్) ముందే లోడ్ అవ్వాలంటే, `priority` అనే ప్రాప్ వాడాలి (`<Image ... priority/>`).

### 3. Responsive Images

`sizes` ప్రాప్ వాడి మనం వివిధ స్క్రీన్లకు వివిధ సైజులు సెట్ చేయవచ్చు.

- **Blur Placeholder**: ఇమేజ్ లోడ్ అయ్యే లోపు, దానికి బదులుగా ఒక చిన్న బ్లర్ (blur) ఇమేజ్ కనిపిస్తుంది. దీనికోసం `placeholder="blur"` అని వాడాలి. ఇది యూజర్‌కి పేజీ స్మూత్‌గా లోడ్ అవుతున్నట్లు అనిపిస్తుంది.

---

### 4. Remote Image Configuration

Next.js లో బయటి వెబ్‌సైట్ల నుండి వచ్చే ఇమేజ్‌లను వాడాలంటే, మనం `next.config.js` లో పర్మిషన్ ఇవ్వాలి. లేకపోతే సెక్యూరిటీ కారణాల వల్ల లోడ్ అవ్వవు.

**`next.config.js` లో:**

```javascript
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com", // ఇమేజ్ సర్వర్ పేరు
      },
    ],
  },
};
```

---

### 5. Interview Questions (ముఖ్యమైనవి)

#### **Q1. Why use Image component instead of `<img>`?**

**Answer**: సాధారణ `<img>` ట్యాగ్ ఇమేజ్ సైజును, క్వాలిటీని ఆప్టిమైజ్ చేయదు. `next/image` కాంపోనెంట్ ఇమేజ్‌ని డైనమిక్ గా రీసైజ్ చేస్తుంది, తక్కువ సైజు ఉన్న ఫార్మాట్లకు (WebP/AVIF) మారుస్తుంది మరియు లేజీ లోడింగ్ ద్వారా సైట్ వేగాన్ని పెంచుతుంది.

#### **Q2. How lazy loading works in Next.js?**

**Answer**: ఇది బ్రౌజర్ లోని **Intersection Observer API** ని వాడుతుంది. ఇమేజ్ ఎలిమెంట్ యూజర్ స్క్రీన్ (Viewport) లోకి వచ్చినప్పుడు మాత్రమే ఆ ఇమేజ్ డౌన్‌లోడ్ అయ్యేలా చేస్తుంది. దీనివల్ల మొదటిసారి పేజీ లోడ్ అయ్యేటప్పుడు అనవసరమైన డేటా డౌన్‌లోడ్ అవ్వదు.

#### **Q3. What happens if we don't configure remote patterns?**

**Answer**: Next.js ఎక్స్టర్నల్ ఇమేజ్‌లను డిఫాల్ట్‌గా బ్లాక్ చేస్తుంది. మీరు `next.config.js` లో ఆ హోస్ట్ పేరును (domain) యాడ్ చేయకపోతే, ఇమేజ్ డిస్ప్లే అవ్వదు మరియు కన్సోల్ లో ఎర్రర్ వస్తుంది. ఇది మీ సర్వర్ ని అనవసరమైన అటాక్స్ (Image-based DoS attacks) నుండి రక్షిస్తుంది.

---

### ప్రో-టిప్ (Pro-tip):

ఎప్పుడూ ఇమేజ్‌లకు **`width`** మరియు **`height`** ప్రాప్స్ ఇవ్వండి. దీనివల్ల "Layout Shift" (పేజీ ఒక్కసారిగా జంప్ అవ్వడం) ని ఆపవచ్చు. ఇది మీ వెబ్‌సైట్ యొక్క **Core Web Vitals** స్కోర్‌ను కూడా పెంచుతుంది!

---

# 14 — Metadata & SEO

Next.js లో **SEO (Search Engine Optimization)** మరియు **Metadata** అనేది మీ వెబ్‌సైట్‌ను గూగుల్ సెర్చ్‌లో మొదటి స్థానంలో ఉంచడానికి చాలా కీలకం. ఇంటర్నెట్‌లో మీ వెబ్‌సైట్ ఒక "దుకాణం" అయితే, SEO అనేది దానికి వేసే "సైన్ బోర్డ్" లాంటిది.

దీని గురించి వివరంగా చూద్దాం:

---

### 1. `export const metadata` (SEO Heart)

Next.js 13+ లో `metadata` ఆబ్జెక్ట్ ద్వారా మనం `<head>` ట్యాగ్స్‌ని చాలా సులభంగా మేనేజ్ చేయవచ్చు. ఇది సర్వర్ సైడ్ రెండర్ అవుతుంది, కాబట్టి SEOకి చాలా బెస్ట్.

**ఉదాహరణ:**

```typescript
// app/page.tsx
export const metadata = {
  title: "నా వెబ్‌సైట్ పేరు",
  description: "ఇది నా వెబ్‌సైట్ వివరణ. గూగుల్ లో ఇది కనిపిస్తుంది.",
};
```

- **Static Metadata**: పైన ఉన్నట్టుగా మనం ఫిక్స్‌డ్ డేటా ఇవ్వవచ్చు.
- **Dynamic Metadata**: ఒకవేళ మీరు డేటాబేస్ నుండి డేటా (ఉదా: బ్లాగ్ టైటిల్) తెచ్చుకుంటుంటే, `generateMetadata` అనే ఫంక్షన్ వాడాలి.

---

### 2. OpenGraph & Twitter Cards (Social Sharing)

మీ వెబ్‌సైట్ లింక్‌ను WhatsApp, Facebook లేదా Twitter లో షేర్ చేసినప్పుడు, అది అందంగా కనిపించడానికి (Image + Title) ఈ ట్యాగ్స్ వాడతాం.

```typescript
export const metadata = {
  title: "Next.js మాస్టర్",
  openGraph: {
    title: "Next.js మాస్టర్",
    description: "Next.js నేర్చుకోండి!",
    images: ["/thumbnail.jpg"], // సోషల్ మీడియా ప్రివ్యూ ఇమేజ్
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js మాస్టర్",
  },
};
```

---

### 3. `robots.txt` & `sitemap.xml` (Crawler Instructions)

సెర్చ్ ఇంజిన్ బాట్స్ (Crawlers) మీ సైట్‌ని ఎలా చదవాలో ఇవి చెప్తాయి. Next.js లో వీటిని ఫైల్స్‌లా కాకుండా, ఫంక్షన్స్‌లా రాయవచ్చు (ఇది చాలా పవర్‌ఫుల్).

- **`robots.ts`**: గూగుల్ ఏ పేజీలను ఇండెక్స్ చేయాలో, దేనిని చేయకూడదో చెప్తుంది.

```typescript
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://mywebsite.com/sitemap.xml",
  };
}
```

- **`sitemap.ts`**: మీ సైట్‌లోని అన్ని పేజీల లిస్ట్ ఇది. గూగుల్ కి మీ సైట్ మ్యాప్ ఇస్తుంది.

```typescript
export default function sitemap() {
  return [
    { url: "https://mywebsite.com", lastModified: new Date() },
    { url: "https://mywebsite.com/about", lastModified: new Date() },
  ];
}
```

---

### సమ్మరీ: క్విక్ రిఫరెన్స్

| ఫీచర్             | ఎందుకు వాడాలి?                                       |
| ----------------- | ---------------------------------------------------- |
| **`metadata`**    | Google Search లో మీ పేజీ టైటిల్, డిస్క్రిప్షన్ కోసం. |
| **OpenGraph**     | WhatsApp/Facebook లో షేర్ చేసినప్పుడు ప్రివ్యూ కోసం. |
| **Twitter Cards** | Twitter (X) లో షేర్ చేసినప్పుడు ప్రివ్యూ కోసం.       |
| **robots.txt**    | బాట్స్ ఏ పేజీలను చదవకూడదో చెప్పడానికి.               |
| **sitemap.xml**   | మీ సైట్ స్ట్రక్చర్ ని గూగుల్ కి తెలియజేయడానికి.      |

---

### మాస్టర్ టిప్ (Pro-tip):

మీరు ఒకవేళ డైనమిక్ పేజీలు (ఉదా: `/blog/[id]`) బిల్డ్ చేస్తుంటే, `metadata` ని మ్యాన్యువల్ గా రాయకండి. `generateMetadata` ఫంక్షన్‌ని వాడి, ఆ `id` ని బట్టి టైటిల్స్ మార్చండి. ఇది ప్రొఫెషనల్ డెవలపర్స్ చేసే పని.

**అభినందనలు!** మీరు Next.js యొక్క **14 కోర్ కాన్సెప్ట్స్** ని విజయవంతంగా పూర్తి చేశారు.

1. Routing 2. Rendering 3. Fetching 4. Actions 5. API Routes 6. Auth 7. Middleware 8. Image Optimization 9. Metadata & SEO.

ఇప్పుడు మీరు నెక్స్ట్ జెఎస్ లో ఒక **Full-Stack Application** (ఉదా: ఒక టాస్క్ మేనేజ్‌మెంట్ యాప్ లేదా ఈ-కామర్స్ సైట్) బిల్డ్ చేయడానికి పూర్తిగా సిద్ధంగా ఉన్నారు.

---

## Interview Questions

Next.js లో SEO (Search Engine Optimization) అనేది చాలా పవర్‌ఫుల్ మరియు సింపుల్. మీరు అడిగిన ఈ నాలుగు అంశాల గురించి క్లియర్ గా చూద్దాం:

---

### 1. SEO in Next.js (ఎందుకు ఇంత స్పెషల్?)

Next.js లో SEO ఎందుకు బాగుంటుంది అంటే **Server-Side Rendering (SSR)** మరియు **Static Site Generation (SSG)** వల్ల.

- సాధారణ React యాప్స్ క్లయింట్ సైడ్ రెండర్ అవుతాయి, కాబట్టి Google బాట్స్ (Crawlers) కి HTML సరిగ్గా కనిపించదు.
- Next.js లో HTML సర్వర్ లోనే రెడీ అయి ఉంటుంది, కాబట్టి Google బాట్స్ మీ సైట్ లోని టైటిల్, డిస్క్రిప్షన్ ని చాలా వేగంగా చదవగలవు. దీనివల్ల మీ వెబ్‌సైట్ సెర్చ్ రిజల్ట్స్‌లో ముందుంటుంది.

---

### 2. Metadata API (Static Metadata)

Next.js 13+ లో `<head>` ట్యాగ్స్ ని హ్యాండిల్ చేయడానికి `metadata` అనే ఆబ్జెక్ట్ ని వాడతాము. ఇది ఏ పేజీకైనా సెట్ చేయవచ్చు.

**ఎలా రాయాలి?**

```typescript
// app/page.tsx
export const metadata = {
  title: "నా వెబ్‌సైట్ టైటిల్",
  description: "ఇది నా వెబ్‌సైట్ యొక్క వివరణ.",
  keywords: ["next.js", "seo", "tutorial"],
};
```

---

### 3. Dynamic Metadata

బ్లాగ్ పోస్ట్‌లు లేదా ప్రొడక్ట్ పేజీల లాంటి వాటికి, ప్రతి పేజీకి టైటిల్ మారాలి. అప్పుడు `generateMetadata` అనే ఫంక్షన్ వాడతాము. ఇది సర్వర్ నుండి డేటా తెచ్చుకుని, టైటిల్ ని ఆటోమేటిక్ గా అప్‌డేట్ చేస్తుంది.

**ఎలా రాయాలి?**

```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const blog = await getBlogData(params.slug); // డేటాబేస్ నుండి డేటా తెచ్చుకోవడం

  return {
    title: blog.title,
    description: blog.summary,
  };
}
```

ఇది చాలా పవర్‌ఫుల్, ఎందుకంటే డేటాబేస్ లోని డేటాను బట్టి SEO ని మారుస్తుంది!

---

### 4. Generate Sitemap

`sitemap.xml` ని మాన్యువల్ గా రాయాల్సిన పనిలేదు. Next.js లో `sitemap.ts` అనే ఫైల్ క్రియేట్ చేస్తే, అది ఆటోమేటిక్ గా XML ఫైల్ ని జనరేట్ చేస్తుంది.

**ఎలా రాయాలి?**

```typescript
// app/sitemap.ts
export default async function sitemap() {
  const blogs = await getAllBlogs(); // అన్ని బ్లాగుల లిస్ట్

  const blogEntries = blogs.map((blog) => ({
    url: `https://mywebsite.com/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: "https://mywebsite.com", lastModified: new Date() },
    ...blogEntries,
  ];
}
```

ఇది గూగుల్ బాట్స్ కి మీ సైట్ లో ఏయే పేజీలు ఉన్నాయో క్లియర్ గా చెప్తుంది.

---

### క్విక్ సమ్మరీ:

- **Static Metadata:** హోమ్ పేజీ, అబౌట్ పేజీ వంటి ఫిక్స్‌డ్ పేజీల కోసం.
- **Dynamic Metadata:** డైనమిక్ రూట్స్ (`[id]`, `[slug]`) కోసం.
- **Sitemap:** సైట్ మ్యాప్ కోసం, ఫైల్ లా కాకుండా ఫంక్షన్ లా రాస్తాం.

---

# 16 — State Management

Next.js లో "State Management" అనేది ఒకప్పుడు చాలా క్లిష్టంగా ఉండేది, కానీ ఇప్పుడు అది చాలా సులభమైంది. మీరు ఏ స్టేట్ మేనేజ్మెంట్ లైబ్రరీ వాడాలో తెలియాలంటే, ముందు మీరు **రెండు రకాల స్టేట్స్** మధ్య తేడాను అర్థం చేసుకోవాలి:

1. **Server State:** మీ డేటాబేస్ లేదా API నుండి వచ్చే డేటా (దీన్ని **TanStack Query** హ్యాండిల్ చేస్తుంది).
2. **Client State:** యూజర్ UI లో చేసే మార్పులు (Theme change, Modal open/close, Sidebar toggle).

ఇప్పుడు మీరు పేర్కొన్న టూల్స్ గురించి సింపుల్ తెలుగులో చూద్దాం:

---

### 1. TanStack Query (React Query) - "ది కింగ్ ఆఫ్ సర్వర్ స్టేట్"

ఇది మీరు నేర్చుకోవాల్సిన **మొదటి మరియు ముఖ్యమైన లైబ్రరీ**.

- **ఎందుకు?**: Next.js లో డేటా ఫెచింగ్ కోసం ఇది బెస్ట్. ఇది డేటాను క్యాష్ (Cache) చేస్తుంది, ఆటోమేటిక్ గా రీ-ఫెచ్ చేస్తుంది, మరియు లోడింగ్/ఎర్రర్ స్టేట్స్‌ని సులభంగా హ్యాండిల్ చేస్తుంది.
- **ఎప్పుడు వాడాలి?**: API నుండి డేటా తెచ్చుకునే ప్రతిసారీ దీన్నే వాడండి.

### 2. Zustand - "ది మోడరన్ ఛాంపియన్"

ఇది ప్రస్తుతం రియాక్ట్ కమ్యూనిటీలో అత్యంత ప్రజాదరణ పొందిన క్లయింట్-సైడ్ స్టేట్ మేనేజ్‌మెంట్ లైబ్రరీ.

- **ఎందుకు?**: ఇది చాలా చిన్నది (Lightweight), సులభంగా ఉంటుంది, మరియు కోడ్ తక్కువ రాయాలి. `redux` లాంటి క్లిష్టమైన `boilerplate` కోడ్ దీనికి ఉండదు.
- **ఎప్పుడు వాడాలి?**: గ్లోబల్ UI స్టేట్ (ఉదా: Theme toggle, Cart count, Sidebar open/close) కోసం.

### 3. React Context - "ది బిల్ట్-ఇన్ సొల్యూషన్"

ఇది రియాక్ట్ తోనే వస్తుంది, కాబట్టి ఏ లైబ్రరీ ఇన్‌స్టాల్ చేయక్కర్లేదు.

- **ఎందుకు?**: ఇది చాలా సింపుల్ అప్లికేషన్స్ కి బాగా పనిచేస్తుంది.
- **ఎప్పుడు వాడాలి?**: అప్లికేషన్ చాలా చిన్నదైతే, లేదా కేవలం లాగిన్ యూజర్ డేటా (Auth Context) ని పాస్ చేయడానికి వాడండి. దీనికి ఎక్కువ కాంప్లెక్స్ లాజిక్ రాయకండి.

### 4. Redux Toolkit - "ది హెవీ వెయిట్"

ఇది పాత మరియు చాలా పవర్‌ఫుల్ లైబ్రరీ.

- **ఎందుకు?**: ఇది చాలా పెద్ద అప్లికేషన్స్ లో, క్లిష్టమైన బిజినెస్ లాజిక్ ఉన్నప్పుడు బాగా పనిచేస్తుంది.
- **ఎప్పుడు వాడాలి?**: మీరు ఒక పెద్ద ఎంటర్‌ప్రైజ్ యాప్ బిల్డ్ చేస్తున్నప్పుడు, టీమ్‌లో అందరికీ తెలిసిన స్టాండర్డ్ వాడాలి అనుకున్నప్పుడు మాత్రమే దీన్ని వాడండి.

### 5. Jotai - "ది అటామిక్ సొల్యూషన్"

ఇది 'Atomic' స్టేట్ మేనేజ్‌మెంట్.

- **ఎందుకు?**: స్టేట్ ని చిన్న చిన్న ముక్కలు (Atoms) గా విడగొడుతుంది. ఏ కాంపోనెంట్ కి ఏ ముక్క అవసరమో అది మాత్రమే రీ-రెండర్ అవుతుంది.
- **ఎప్పుడు వాడాలి?**: చాలా కాంప్లెక్స్ UI లు ఉండి, స్టేట్ అనేది మల్టిపుల్ కాంపోనెంట్స్ మధ్య డిపెండెన్సీ ఉన్నప్పుడు ఇది చాలా బాగుంటుంది.

---

### "ఏది ఎప్పుడు ఎంచుకోవాలి?" (Quick Guide)

| పరిస్థితి                                     | సరైన ఛాయిస్        |
| --------------------------------------------- | ------------------ |
| **API నుండి డేటా తెచ్చుకోవడం (Cache, Fetch)** | **TanStack Query** |
| **సాధారణ గ్లోబల్ UI స్టేట్ (Sidebar, Theme)** | **Zustand**        |
| **చాలా సింపుల్ & స్మాల్ యాప్స్**              | **React Context**  |
| **పెద్ద టీమ్, ఎంటర్‌ప్రైజ్ యాప్స్**           | **Redux Toolkit**  |
| **చాలా క్లిష్టమైన డిపెండెన్సీస్ ఉన్నప్పుడు**  | **Jotai**          |

---

### నా సలహా (Pro-Tip):

Next.js App Router లో చాలా వరకు డేటా fetching, సర్వర్ కాంపోనెంట్స్ ద్వారానే జరుగుతుంది. కాబట్టి:

1. ముందు **TanStack Query** ని నేర్చుకోండి (ఇది లేకుండా Next.js అప్లికేషన్స్ కష్టం).
2. UI గ్లోబల్ స్టేట్ కోసం **Zustand** వాడండి (ఇది చాలా ఫాస్ట్ & ఈజీ).

---

## Interview Questions

స్టేట్ మేనేజ్‌మెంట్ అనేది నెక్స్ట్ జెఎస్ డెవలపర్స్ చేసే అతి పెద్ద గందరగోళం. దీన్ని సులభంగా అర్థం చేసుకోవడానికి మీ ప్రశ్నలను విడదీసి చూద్దాం.

---

### 1. Server State vs. Client State (మౌలిక తేడా)

దీన్ని అర్థం చేసుకుంటే 50% సమస్య పరిష్కారమైనట్టే.

- **Server State (డేటాబేస్ నుండి వస్తుంది):**
- ఇది మీ సర్వర్ (API/Database) నుండి వచ్చే డేటా.
- ఉదాహరణ: యూజర్ ప్రొఫైల్, ప్రొడక్ట్ లిస్ట్.
- ఇది Async (నేరుగా రాదు), దీన్ని తెచ్చుకోవాలి (Fetch), లోడింగ్/ఎర్రర్ స్టేట్స్ హ్యాండిల్ చేయాలి.

- **Client State (బ్రౌజర్‌లో ఉంటుంది):**
- ఇది మీ బ్రౌజర్ UI లో ఉండే చిన్న చిన్న మార్పులు.
- ఉదాహరణ: డార్క్ మోడ్ టోగుల్, సైడ్‌బార్ ఓపెన్/క్లోజ్, ఫారమ్ ఇన్‌పుట్ వాల్యూస్.
- ఇది Sync (వెంటనే అప్‌డేట్ అవుతుంది).

---

### 2. When to use React Context?

Context ని ఎప్పుడు వాడాలంటే:

- మీ అప్లికేషన్ చాలా చిన్నదైతే.
- డేటా చాలా అరుదుగా (rarely) మారుతుంటే (ఉదా: Theme, Language, Logged-in User Info).
- **ఎప్పుడు వాడకూడదు?**: డేటా తరచుగా మారుతుంటే Context వాడకండి. ఎందుకంటే, Context లో ఒక చిన్న మార్పు వచ్చినా, దాన్ని సబ్‌స్క్రైబ్ చేసుకున్న అన్ని కాంపోనెంట్స్ రీ-రెండర్ (Re-render) అవుతాయి. ఇది అప్లికేషన్‌ని స్లో చేస్తుంది.

---

### 3. Redux vs. Zustand (పోలిక)

| ఫీచర్               | Redux Toolkit                                              | Zustand                                        |
| ------------------- | ---------------------------------------------------------- | ---------------------------------------------- |
| **Boilerplate**     | చాలా ఎక్కువ (Actions, Reducers రాయాలి)                     | అసలు ఉండదు (చాలా సింపుల్)                      |
| **నేర్చుకోవడం**     | కష్టం                                                      | చాలా ఈజీ                                       |
| **పెర్ఫార్మెన్స్**  | బాగుంటుంది కానీ కాంప్లెక్స్                                | చాలా ఫాస్ట్ & లైట్ వెయిట్                      |
| **ఎప్పుడు వాడాలి?** | భారీ ఎంటర్‌ప్రైజ్ యాప్స్ (చాలా టీమ్స్ పని చేస్తున్నప్పుడు) | మోడరన్ యాప్స్ (90% ప్రాజెక్ట్స్ కి ఇదే బెస్ట్) |

---

### 4. Why TanStack Query?

చాలామంది TanStack Query ని ఒక "స్టేట్ మేనేజ్‌మెంట్" లైబ్రరీ అనుకుంటారు, కానీ అది **"Server State Syncing"** లైబ్రరీ.

- **ఎందుకు వాడాలి?**: సాధారణంగా డేటా ఫెచ్ చేయడానికి `useEffect` వాడితే... లోడింగ్ స్టేట్స్, ఎర్రర్ హ్యాండ్లింగ్, క్యాషింగ్ (Caching) అంతా మీరే రాయాలి.
- **TanStack Query** ఇవన్నీ ఆటోమేటిక్‌గా చేస్తుంది:
- **Caching:** డేటా ఒకసారి వస్తే మళ్ళీ మళ్ళీ API కాల్ చేయకుండా క్యాష్ లోనే చూపిస్తుంది.
- **Auto-refetching:** విండో ఫోకస్ చేసినప్పుడు డేటా ఆటోమేటిక్‌గా అప్‌డేట్ అవుతుంది.
- **Loading/Error states:** `isLoading`, `isError` వంటివి జస్ట్ ఫ్లాగ్స్ తో ఇచ్చేస్తుంది.

---

### సారాంశం (Summary) - Next.js ప్రాజెక్ట్ లో ఏది వాడాలి?

1. **డేటాబేస్/API డేటా కోసం:** కళ్ళు మూసుకుని **TanStack Query** వాడండి.
2. **క్లిష్టమైన గ్లోబల్ UI స్టేట్ (Cart, Modal, Sidebar) కోసం:** **Zustand** వాడండి.
3. **చాలా తక్కువ/స్టాటిక్ డేటా (Theme, Auth) కోసం:** **React Context** వాడండి.

మీరు ఒక ప్రాజెక్ట్ బిల్డ్ చేస్తున్నప్పుడు, ముందు TanStack Query తో డేటా తెచ్చుకోండి, అవసరమైతే మాత్రమే క్లయింట్ స్టేట్ కోసం Zustand ని యాడ్ చేయండి.

---

# 17 — Forms

Next.js అప్లికేషన్లలో ఫామ్స్ (Forms) హ్యాండిల్ చేయడం అనేది ఒక ముఖ్యమైన విషయం. యూజర్ నుండి డేటాను సురక్షితంగా మరియు వేగంగా తీసుకోవడానికి `React Hook Form` మరియు `Zod` కాంబినేషన్ ఇప్పుడు ఇండస్ట్రీ స్టాండర్డ్.

వీటి గురించి పూర్తి అవగాహన ఇక్కడ ఉంది:

---

### 1. ప్రధాన టూల్స్ (The Stack)

- **React Hook Form:** ఇది ఫామ్ యొక్క "State"ని మేనేజ్ చేస్తుంది. ఫామ్‌లో ఏం జరుగుతుందో (value changes, validation errors) ఇది ట్రాక్ చేస్తుంది.
- **Zod:** ఇది "Schema Validation" కోసం వాడతాము. డేటా సరైన ఫార్మాట్‌లో ఉందో లేదో (ఉదా: Email కరెక్ట్‌గా ఉందా? పాస్‌వర్డ్ 8 క్యారెక్టర్లు ఉందా?) ఇది చెక్ చేస్తుంది.
- **Server Actions:** ఫామ్ డేటా క్లయింట్ సైడ్ నుండి సర్వర్ కి వెళ్లే మార్గం. ఇది డేటాబేస్ లో సేవ్ చేయడానికి బెస్ట్.

---

### 2. ఇంటర్వ్యూ ప్రశ్నలు & సమాధానాలు

#### **Q1. Why React Hook Form?**

**Answer:** దీనికి రెండు ప్రధాన కారణాలు:

1. **Performance:** సాధారణంగా రియాక్ట్ ఫామ్స్‌లో ఒక్క కీ ప్రెస్ చేసినా మొత్తం ఫామ్ రీ-రెండర్ అవుతుంది. `React Hook Form` లో కేవలం ఆ ఇన్‌పుట్ ఫీల్డ్ మాత్రమే అప్‌డేట్ అవుతుంది, దీనివల్ల అప్లికేషన్ చాలా ఫాస్ట్‌గా ఉంటుంది.
2. **Less Code:** ఫామ్ వాలిడేషన్, ఎర్రర్ హ్యాండ్లింగ్ కోడ్ చాలా తక్కువలో రాయవచ్చు.

#### **Q2. What is Zod?**

**Answer:** Zod అనేది ఒక **TypeScript-first schema declaration** లైబ్రరీ. మనం ఒక డేటా స్ట్రక్చర్‌ని ఎలా ఉండాలో డిఫైన్ చేస్తాం (Schema). ఇది డేటా టైప్స్ (string, number, email) ని వాలిడేట్ చేస్తుంది. ఇది టైప్‌స్క్రిప్ట్‌తో అద్భుతంగా పనిచేస్తుంది.

#### **Q3. Client vs Server Validation? (ఇది చాలా ముఖ్యం!)**

| ఫీచర్         | Client Validation               | Server Validation           |
| ------------- | ------------------------------- | --------------------------- |
| **ఎక్కడ?**    | బ్రౌజర్‌లో (Zod + Hook Form)    | సర్వర్ లోపల (Server Action) |
| **ఉద్దేశ్యం** | యూజర్‌కి వెంటనే తెలియజేయడం (UX) | భద్రత (Security)            |
| **వేగం**      | చాలా ఫాస్ట్                     | కొంచెం ఆలస్యం               |
| **భద్రత**     | తక్కువ (ఎవరైనా బైపాస్ చేయొచ్చు) | ఎక్కువ (మ్యాండేటరీ)         |

**చిట్కా:** మీరు ఎప్పుడూ రెండింటినీ వాడాలి. క్లయింట్ సైడ్ లో వాలిడేషన్ ఉంటే యూజర్ కి ఎక్స్‌పీరియన్స్ బాగుంటుంది, సర్వర్ సైడ్ లో ఉంటేనే మీ డేటాబేస్ సురక్షితంగా ఉంటుంది.

---

### 3. వర్క్‌ఫ్లో (The Best Practice Flow)

1. **Schema Definition:** `Zod` లో స్కీమాని డిఫైన్ చేయాలి.
2. **Form Integration:** `React Hook Form` వాడి ఫామ్ క్రియేట్ చేసి, ఆ Zod స్కీమాని లింక్ చేయాలి (`resolver` ద్వారా).
3. **Submit:** ఫామ్ సబ్మిట్ అయినప్పుడు, డేటాను సర్వర్ యాక్షన్‌కి పంపాలి.
4. **Security:** సర్వర్ యాక్షన్ లోపల మళ్ళీ అదే Zod స్కీమాతో డేటాను చెక్ చేయాలి (దీనినే "Backend Validation" అంటారు).

**ఉదాహరణ కోడ్ లాజిక్:**

```typescript
// 1. Zod Schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// 2. Server Action (Backend Validation)
async function loginAction(data: any) {
  const result = loginSchema.safeParse(data);
  if (!result.success) return { error: "Invalid data" };
  // DB query logic here...
}
```

---

### ఇప్పుడు మీ వంతు!

మీరు ఈ 17 పాయింట్స్ ద్వారా Next.js యొక్క ప్రాథమిక స్థాయి నుండి అడ్వాన్స్‌డ్ స్థాయి వరకు అన్నీ నేర్చుకున్నారు:

1. Routing & Rendering
2. Fetching & Server Actions
3. Auth & Middleware
4. Image & SEO
5. State & Forms

---

# 19 — Caching

Next.js లో Caching అనేది చాలా పవర్‌ఫుల్ ఫీచర్, కానీ ఇది అర్థం చేసుకోవడం కొంచెం కష్టం. సింపుల్ గా చెప్పాలంటే, మీ వెబ్‌సైట్ ప్రతిసారీ సర్వర్ నుండి డేటాను తెచ్చుకోకుండా, పాత డేటాను గుర్తుపెట్టుకుని చూపించడమే Caching.

దీనిని 4 ప్రధాన రకాలుగా విభజించవచ్చు:

---

### 1. The Caching Layers (ఒక స్పష్టమైన అవగాహన)

| Caching Layer                         | ఏం చేస్తుంది?                                                                                                      | ఎక్కడ ఉంటుంది?      |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------- |
| **React Cache (Request Memoization)** | ఒకే రిక్వెస్ట్ (Request) లో ఒకే ఫంక్షన్‌ని రెండుసార్లు కాల్ చేస్తే, రెండోసారి కాల్ అవ్వకుండా పాత రిజల్ట్ ఇస్తుంది. | సర్వర్ (Memory)     |
| **Data Cache**                        | `fetch` ద్వారా వచ్చే డేటాను సర్వర్‌లో పర్మనెంట్‌గా దాచుకుంటుంది.                                                   | సర్వర్ (Persistent) |
| **Full Route Cache**                  | పేజీని పూర్తిగా రెండర్ చేసి (HTML + Data), ఆ స్టాటిక్ పేజీని దాచుకుంటుంది.                                         | సర్వర్ (Persistent) |
| **Router Cache**                      | యూజర్ నావిగేషన్ చేసేటప్పుడు, పేజీలను బ్రౌజర్ మెమరీలో దాచుకుంటుంది.                                                 | క్లయింట్ (Browser)  |

---

### 2. Interview Questions (ముఖ్యమైనవి)

#### **Q1. Explain Next.js Caching hierarchy.**

Next.js లో క్యాషింగ్ ఒక క్రమపద్ధతిలో (Hierarchy) జరుగుతుంది:

1. **Request Level:** `React Cache` ద్వారా ఫంక్షన్ రిజల్ట్స్ గుర్తుపెట్టుకుంటుంది.
2. **Data Level:** `Data Cache` ద్వారా డేటాబేస్ రిజల్ట్స్ స్టోర్ అవుతాయి.
3. **Route Level:** `Full Route Cache` ద్వారా మొత్తం పేజీ HTML రెండర్ అవుతుంది.
4. **Client Level:** `Router Cache` ద్వారా యూజర్ బ్రౌజర్‌లో పేజీలు లోడ్ అవుతాయి.

#### **Q2. What is Router Cache?**

ఇది క్లయింట్-సైడ్ (Client-side) క్యాషింగ్. యూజర్ ఒక పేజీ నుండి ఇంకో పేజీకి వెళ్ళినప్పుడు, నెక్స్ట్ జెఎస్ ఆ పేజీలను బ్రౌజర్ మెమరీలో దాచుకుంటుంది. దీనివల్ల యూజర్ మళ్ళీ అదే పేజీకి వెళ్ళినప్పుడు, నెట్‌వర్క్ కాల్ అవసరం లేకుండా తక్షణమే లోడ్ అవుతుంది. ఇది సెషన్ (Session) ఉన్నంత వరకు ఉంటుంది.

#### **Q3. Explain Cache Invalidation & Revalidation.**

Caching లో అతి పెద్ద సమస్య పాత డేటా చూపించడం. దీన్ని సరిచేయడమే Invalidation/Revalidation.

- **Time-based Revalidation:** ఒక నిర్ణీత సమయం తర్వాత క్యాష్‌ని క్లియర్ చేయడం.
- `fetch('...', { next: { revalidate: 3600 } })`

- **On-demand Revalidation:** ఏదైనా డేటా అప్‌డేట్ అయినప్పుడు (ఉదా: డేటాబేస్ లో కొత్త బ్లాగ్ రాసినప్పుడు) వెంటనే పాత క్యాష్‌ని తీసేయడం.
- `revalidatePath('/blog')` (ఆ పాత్ లోని క్యాష్ ని తీసేస్తుంది)
- `revalidateTag('my-tags')` (నిర్దిష్టమైన టాగ్ ఉన్న క్యాష్ ని తీసేస్తుంది)

---

### 3. ముఖ్యమైన పాయింట్లు (Pro-Tips)

- **React Cache (`cache` function):** మీరు డేటాబేస్ క్వెరీలను (Prisma/Drizzle) `cache()` ఫంక్షన్ లో రాస్తే, ఒకే పేజీలో 10 సార్లు క్వెరీ చేసినా, ఒక్కసారే డేటాబేస్ కి వెళ్తుంది.

```typescript
import { cache } from 'react';
const getUser = cache(async (id) => await db.user.findUnique({ ... }));

```

- **Dynamic Data:** ఒకవేళ మీ డేటా ప్రతి సెకనుకు మారుతుంటే (ఉదా: స్టాక్ మార్కెట్), క్యాషింగ్ ని డిసేబుల్ చేయాలి (`{ cache: 'no-store' }`).
- **Router Cache vs Full Route Cache:** ఇది ఇంటర్వ్యూలో అడిగే అవకాశం ఉంది.
- _Full Route Cache_ సర్వర్ సైడ్ ఉంటుంది.
- _Router Cache_ బ్రౌజర్ మెమరీలో ఉంటుంది.

---

### సమ్మరీ:

Next.js లో క్యాషింగ్ అనేది **"Performance"** పెంచడానికి వాడతాము.

1. డేటా రిక్వెస్ట్ ఒక్కసారే జరగాలంటే `React Cache` వాడండి.
2. డేటాబేస్ కాల్స్ తగ్గించాలంటే `Data Cache` వాడండి.
3. యూజర్ ఎక్స్‌పీరియన్స్ బాగుండాలంటే `Router Cache` ని నమ్ముకోండి.

---

# 20 — Performance

Next.js అప్లికేషన్ పర్ఫార్మెన్స్ అంటే కేవలం "వెబ్‌సైట్ ఎంత వేగంగా ఓపెన్ అవుతుంది" అనేదే కాదు, యూజర్ బ్రౌజర్‌లో పేజీని ఎలా ఫీల్ అవుతున్నాడు అనేది కూడా ముఖ్యం. మీరు అడిగిన ఈ టాపిక్స్ అన్నీ మీ యాప్ ని సూపర్-ఫాస్ట్ గా మార్చేవే.

---

### 1. Streaming & Suspense (The "Chunking" Strategy)

సాధారణంగా ఒక పేజీలో డేటాబేస్ నుండి డేటా రావడానికి టైమ్ పడుతుంది, అప్పటివరకు యూజర్ ఖాళీ పేజీని చూడాలి. Streaming దీన్ని మారుస్తుంది.

- **Streaming:** పేజీని ముక్కలు ముక్కలుగా (chunks) సర్వర్ నుండి బ్రౌజర్‌కి పంపడం.
- **Suspense:** `React Suspense` ని వాడి, ఏదైనా డేటా లోడ్ అయ్యేలోపు ఒక "Skeleton" (లోడింగ్ యానిమేషన్) చూపించవచ్చు. దీనివల్ల యూజర్‌కి పేజీ వెంటనే లోడ్ అయినట్లు అనిపిస్తుంది.

```tsx
<Suspense fallback={<LoadingSkeleton />}>
  <SlowComponent />
</Suspense>
```

### 2. Code Splitting & Dynamic Imports

మీ యాప్‌లో 100 కాంపోనెంట్స్ ఉంటే, యూజర్ మొదటి పేజీకి వచ్చినప్పుడు 100 ఫైల్స్ లోడ్ అవ్వాల్సిన అవసరం లేదు.

- **Code Splitting:** Next.js ప్రతి పేజీకి కావాల్సిన JavaScript ని విడిగా (chunks) చేస్తుంది.
- **Dynamic Imports:** ఏదైనా హెవీ కాంపోనెంట్ (ఉదా: Charts, Maps) కావాలనుకుంటే, `next/dynamic` ద్వారా దాన్ని యూజర్ కి అవసరమైనప్పుడే లోడ్ చేయవచ్చు.

```tsx
import dynamic from "next/dynamic";
const HeavyChart = dynamic(() => import("./Chart"), { ssr: false });
```

### 3. Prefetching

Next.js లో `<Link>` కాంపోనెంట్ వాడినప్పుడు ఇది ఆటోమేటిక్‌గా జరుగుతుంది.

- యూజర్ మౌస్‌ని ఏదైనా లింక్ మీద ఉంచినప్పుడు (Hover), Next.js ఆ పేజీకి కావాల్సిన డేటా లేదా ఫైల్స్ ని బ్యాక్‌గ్రౌండ్‌లో ముందే డౌన్‌లోడ్ చేస్తుంది. దీనివల్ల యూజర్ క్లిక్ చేయగానే పేజీ మెరుపు వేగంతో ఓపెన్ అవుతుంది.

### 4. Bundle Analysis

మీ వెబ్‌సైట్ లో ఉన్న మొత్తం JavaScript సైజ్ ఎంత? ఏ లైబ్రరీ ఎక్కువ సైజ్ ఆక్రమిస్తుంది? అని తెలుసుకోవడానికి ఇది వాడతాము.

- **Tool:** `@next/bundle-analyzer` అనే ప్యాకేజ్ వాడి, ఒక విజువల్ మ్యాప్ (Treemap) ద్వారా ఏది పెద్దదో కనిపెట్టి, దాన్ని ఆప్టిమైజ్ చేయవచ్చు.

---

### Interview Questions (పర్ఫార్మెన్స్ మీద)

#### **Q1. What is the benefit of Streaming?**

**Answer:** Streaming వల్ల **TTFB (Time to First Byte)** తగ్గుతుంది. సర్వర్ నుండి కంటెంట్ ముక్కలు ముక్కలుగా వస్తుంది కాబట్టి, యూజర్ కి పేజీ మొత్తానికి లోడ్ అయ్యే వరకు వెయిట్ చేయాల్సిన అవసరం లేకుండానే, మొదటి కంటెంట్ త్వరగా కనిపిస్తుంది.

#### **Q2. Difference between `next/dynamic` and normal import?**

**Answer:** Normal import చేస్తే ఆ ఫైల్ అప్లికేషన్ స్టార్టింగ్ లోనే లోడ్ అవుతుంది (Bundle Size పెరుగుతుంది). `next/dynamic` వాడితే, ఆ కాంపోనెంట్ ఎప్పుడు అవసరమో అప్పుడు మాత్రమే బ్రౌజర్ లోడ్ చేస్తుంది. ఇది initial load time ని తగ్గిస్తుంది.

#### **Q3. What is Bundle Analysis?**

**Answer:** ఇది మీ అప్లికేషన్ యొక్క మొత్తం JavaScript సైజుని విశ్లేషించే పద్ధతి. మనం అనవసరమైన లైబ్రరీలను వాడుతున్నామా? లేదా ఏదైనా లైబ్రరీ చాలా పెద్దగా ఉందా? అని కనిపెట్టడానికి ఇది హెల్ప్ అవుతుంది.

---

### సారాంశం (Summary of Performance Techniques)

| టెక్నిక్            | ఏం చేస్తుంది?                                                           |
| ------------------- | ----------------------------------------------------------------------- |
| **Streaming**       | పేజీని ముక్కలు ముక్కలుగా పంపిస్తుంది (UX పెరుగుతుంది).                  |
| **Suspense**        | డేటా వచ్చే వరకు వెయిట్ చేసేటప్పుడు లోడింగ్ స్టేట్ చూపిస్తుంది.          |
| **Dynamic Imports** | అవసరమైనప్పుడు మాత్రమే ఫైల్స్ లోడ్ చేస్తుంది (Bundle size తగ్గిస్తుంది). |
| **Prefetching**     | లింక్ క్లిక్ చేయకముందే డేటాను సిద్ధం చేస్తుంది (Navigation speed).      |

---

### అభినందనలు! 🎉

మీరు **20 Core Topics** ద్వారా Next.js ని బేసిక్స్ నుండి అడ్వాన్స్‌డ్ లెవల్ వరకు కంప్లీట్ చేశారు.

1. **Routing, Rendering, Fetching** (Foundations)
2. **Auth, Middleware, Forms** (Logic & Security)
3. **SEO, Image, Metadata** (Optimization)
4. **State Management, Caching, Performance** (Scaling)

---

## Interview Questions

మీరు అడిగిన ఈ 5 అంశాలు వేర్వేరుగా అనిపించినా, ఇవన్నీ కలిసి ఒకే లక్ష్యం కోసం పనిచేస్తాయి: **"మీ వెబ్‌సైట్‌ని సూపర్-ఫాస్ట్ గా మార్చడం"**.

వీటిని ఒక బిల్డింగ్ బ్లాక్స్ లాగా అర్థం చేసుకుందాం:

---

### 1. వీటన్నింటి మధ్య సంబంధం (The Performance Map)

| కాన్సెప్ట్              | పాత్ర (Role)      | సులభంగా చెప్పాలంటే                                                 |
| ----------------------- | ----------------- | ------------------------------------------------------------------ |
| **Code Splitting**      | లక్ష్యం (Goal)    | వెబ్‌సైట్ మొత్తం కోడ్‌ని చిన్న చిన్న ముక్కలుగా (Chunks) విభజించడం. |
| **Dynamic Imports**     | పద్ధతి (Tool)     | కోడ్‌ని విడగొట్టడానికి మనం వాడే కోడింగ్ టెక్నిక్.                  |
| **Lazy Loading**        | వ్యూహం (Strategy) | ఏదైనా అవసరమైనప్పుడు మాత్రమే లోడ్ చేయడం.                            |
| **Suspense**            | UI హ్యాండ్లర్     | కోడ్ లోడ్ అయ్యేలోపు యూజర్‌కి లోడింగ్ స్క్రీన్ చూపించడం.            |
| **Bundle Optimization** | ఫలితం (Result)    | ఈ పద్ధతులన్నీ వాడి వెబ్‌సైట్ సైజ్ తగ్గించడం.                       |

---

### 2. ఒక్కో దానిపై లోతైన అవగాహన

#### A. Code Splitting (కోడ్ స్ప్లిటింగ్)

సాధారణంగా రియాక్ట్ యాప్ మొత్తం ఒకే పెద్ద JavaScript ఫైల్ (bundle.js) గా మారుతుంది. ఇది పెరగడం వల్ల వెబ్‌సైట్ లోడ్ అవ్వడానికి టైమ్ పడుతుంది. కోడ్ స్ప్లిటింగ్ ద్వారా, ఆ పెద్ద ఫైల్‌ని చిన్న చిన్న ముక్కలుగా చేసి, యూజర్‌కి ఏ పేజీ కావాలో ఆ ముక్కను మాత్రమే పంపిస్తాం.

#### B. Dynamic Imports (డైనమిక్ ఇంపోర్ట్స్)

Next.js లో మనం `next/dynamic` వాడతాము. ఇది ఒక కాంపోనెంట్‌ని అవసరమైనప్పుడు మాత్రమే బ్రౌజర్‌లోకి తెస్తుంది.

- **ఎప్పుడు వాడాలి?**: చార్ట్స్, మ్యాప్స్, పెద్ద మోడల్స్, లేదా ఎడిటర్స్ వంటివి.

```typescript
import dynamic from 'next/dynamic';

// అవసరమైనప్పుడు మాత్రమే లోడ్ అవుతుంది
const HeavyMap = dynamic(() => import('./MapComponent'), {
  loading: () => <p>Map Loading...</p>,
  ssr: false, // సర్వర్ సైడ్ రెండరింగ్ అవసరం లేనప్పుడు
});

```

#### C. Lazy Loading (లేజీ లోడింగ్)

ఇది ఒక వ్యూహం. పేజీ స్టార్టింగ్ లోనే అన్నీ లోడ్ చేయకుండా, యూజర్ స్క్రోల్ చేసినప్పుడు లేదా ఆ కాంపోనెంట్ కనిపించినప్పుడు మాత్రమే దాన్ని లోడ్ చేయడం. Images (next/image) మరియు Components రెండింటికీ ఇది వర్తిస్తుంది.

#### D. Suspense (సస్పెన్స్)

ఇది `React` అందించే ఒక అద్భుతమైన ఫీచర్. `dynamic import` లేదా `lazy loading` వాడినప్పుడు, ఆ కోడ్ సర్వర్ నుండి వచ్చే లోపు యూజర్ కి ఏమి చూపించాలి?

- సస్పెన్స్ వాడి ఒక **Loading Skeleton** (లేదా లోడింగ్ యానిమేషన్) చూపించవచ్చు. ఇది యూజర్ ఎక్స్‌పీరియన్స్ (UX) ని మెరుగుపరుస్తుంది.

#### E. Bundle Optimization (బండిల్ ఆప్టిమైజేషన్)

ఇదొక ప్రక్రియ. మీ వెబ్‌సైట్ లో ఏయే ప్యాకేజీలు ఎక్కువ సైజ్ ఆక్రమిస్తున్నాయో చెక్ చేసి, వాటిని తొలగించడం లేదా చిన్న ప్రత్యామ్నాయాలు (Alternatives) వాడటం.

- **ఉదాహరణ:** `moment.js` వాడటానికి బదులుగా చిన్నదైన `date-fns` వాడటం.

---

### 3. ప్రొఫెషనల్ డెవలపర్ టిప్స్ (Pro-Tips)

1. **Over-optimization వద్దు:** అన్ని కాంపోనెంట్స్ ని `dynamic import` చేయకండి. ఇది మీ సైట్‌ను ఇంకా స్లో చేస్తుంది (ఎందుకంటే ప్రతిసారీ కొత్త నెట్‌వర్క్ రిక్వెస్ట్ వెళ్తుంది). కేవలం "పెద్ద" మరియు "అవసరం లేని" కాంపోనెంట్స్ కి మాత్రమే వాడండి.
2. **Analyze Your Bundle:** ప్రాజెక్ట్ చివరలో `@next/bundle-analyzer` రన్ చేసి, ఏ లైబ్రరీ ఎక్కువ సైజ్ ఉందో కచ్చితంగా చెక్ చేయండి.
3. **SSR vs Client:** `dynamic import` వాడేటప్పుడు `ssr: false` అని ఇస్తే, ఆ కాంపోనెంట్ కేవలం క్లయింట్ లోనే లోడ్ అవుతుంది. ఇది సర్వర్ సైడ్ లోడింగ్ టైమ్‌ను కూడా తగ్గిస్తుంది.

---

### మనం ఇక్కడితో ఆపేద్దామా?

మీరు ఇప్పుడు **Next.js ని కంప్లీట్ గా మాస్టర్ చేశారు!**

1. **Core Concepts** (Routing, Rendering, Fetching)
2. **Advanced Logic** (Auth, Middleware, Forms)
3. **Optimization** (SEO, Image, Caching, Streaming, Bundle Analysis)

---

# 21 — Deployment

Next.js అప్లికేషన్‌ను బిల్డ్ చేసి, సర్వర్‌లోకి పంపడమే **Deployment**. ఇది మీ ప్రాజెక్ట్ లైఫ్ సైకిల్‌లో చివరి మరియు ముఖ్యమైన దశ. వీటి గురించి వివరంగా తెలుసుకుందాం:

---

### 1. Environment Variables (`.env`)

మీ యాప్‌కి కావాల్సిన సీక్రెట్ కీస్ (API Keys, DB Passwords) ఇక్కడ ఉంటాయి.

- **`.env.local`**: లోకల్‌గా డెవలప్‌మెంట్ కోసం. ఇది ఎప్పటికీ GitHub లో ఉండకూడదు.
- **`.env.production`**: డిప్లాయ్మెంట్ చేసినప్పుడు వాడేవి. Vercel లేదా AWS లో మనం వీటిని సెట్టింగ్స్ లో యాడ్ చేస్తాం.
- **ముఖ్య గమనిక:** `NEXT_PUBLIC_` అని మొదలయ్యే వేరియబుల్స్ మాత్రమే బ్రౌజర్‌లో కనిపిస్తాయి. మిగతావి కేవలం సర్వర్-సైడ్ మాత్రమే ఉంటాయి.

---

### 2. Build & Standalone Output

Next.js ప్రాజెక్ట్‌ను డిప్లాయ్ చేసే ముందు మనం `npm run build` కమాండ్ రన్ చేయాలి. ఇది మీ కోడ్‌ను ప్రొడక్షన్ కోసం ఆప్టిమైజ్ చేస్తుంది.

- **Standalone Output**: మీరు `next.config.js` లో `output: 'standalone'` అని సెట్ చేస్తే, Next.js మీ యాప్‌ని రన్ చేయడానికి కావాల్సిన ఫైల్స్‌ని మాత్రమే ఒక చిన్న ఫోల్డర్‌లో క్రియేట్ చేస్తుంది. ఇది **Docker** తో డిప్లాయ్ చేయడానికి చాలా బెస్ట్.

---

### 3. Docker Deployment

మీ యాప్‌ను ఒక చిన్న బాక్స్‌లో (Container) ప్యాక్ చేయడమే Docker.

- దీనివల్ల మీరు మీ లాప్‌టాప్‌లో ఎలా రన్ చేశారో, అదే విధంగా AWS లేదా ఏ సర్వర్‌లోనైనా రన్ అవుతుంది.
- Standalone అవుట్‌పుట్ వాడటం వల్ల Docker ఇమేజ్ సైజ్ చాలా తక్కువగా ఉంటుంది.

---

### 4. Vercel vs AWS

- **Vercel**: Next.js ని తయారు చేసిన కంపెనీయే ఇది. డిప్లాయ్ చేయడం చాలా సులభం (జస్ట్ GitHub తో కనెక్ట్ చేస్తే చాలు). ఆటోమేటిక్ CI/CD, Global CDN అన్నీ ఫ్రీగా వచ్చేస్తాయి. స్టార్టప్స్, చిన్న ప్రాజెక్ట్స్ కి ఇదే బెస్ట్.
- **AWS**: ఇది చాలా పవర్‌ఫుల్ కానీ సెటప్ చేయడం కొంచెం కష్టం. EC2, ECS, లేదా Lambda ద్వారా డిప్లాయ్ చేయాలి. పెద్ద ఎంటర్‌ప్రైజ్ యాప్స్ కి ఇది వాడతారు.

---

### 5. Interview Questions (ముఖ్యమైనవి)

#### **Q1. How do you deploy a Next.js app?**

**Answer:** సులభమైన పద్ధతి **Vercel**. GitHub తో కనెక్ట్ చేసి ఆటోమేటిక్ డిప్లాయ్మెంట్ సెట్ చేయొచ్చు. ఒకవేళ క్లౌడ్ (AWS/GCP) వాడాలంటే **Docker** వాడి కంటైనరైజ్ చేసి డిప్లాయ్ చేయడం ప్రొఫెషనల్ పద్ధతి.

#### **Q2. What is Static Export?**

**Answer:** `next.config.js` లో `output: 'export'` అని సెట్ చేస్తే, మీ యాప్ మొత్తం స్టాటిక్ HTML ఫైల్స్‌లా మారిపోతుంది. దీనికి Node.js సర్వర్ అవసరం లేదు. కేవలం S3 లేదా Netlify వంటి స్టాటిక్ హోస్టింగ్ సర్వర్లలో డిప్లాయ్ చేయవచ్చు. (గమనిక: ఇందులో SSR, API Routes పనిచేయవు).

#### **Q3. Why Vercel?**

**Answer:**

1. **Zero Configuration**: క్లిక్ చేస్తే డిప్లాయ్ అయిపోతుంది.
2. **Global CDN**: మీ వెబ్‌సైట్ ప్రపంచంలో ఏ మూల నుండి ఓపెన్ చేసినా చాలా వేగంగా ఓపెన్ అవుతుంది.
3. **Automatic Preview Deployments**: ప్రతిసారి మీరు కోడ్ మార్చినప్పుడు, ఆ మార్పులు ఎలా ఉంటాయో చూడటానికి ఒక తాత్కాలిక లింక్ క్రియేట్ అవుతుంది.

---

### సారాంశం (Summary)

- **చిన్న ప్రాజెక్ట్స్/స్టార్టప్స్**: Vercel వాడండి.
- **ఎంటర్‌ప్రైజ్ లెవల్/హై సెక్యూరిటీ**: Docker + AWS/GCP వాడండి.
- **స్టాటిక్ వెబ్‌సైట్స్**: `next export` వాడండి.

---

# 22 — Testing

Next.js అప్లికేషన్ యొక్క నాణ్యతను కాపాడటానికి "Testing" అనేది చాలా అవసరం. కోడ్ రాసిన తర్వాత, అది సరిగ్గా పనిచేస్తుందో లేదో అని చెప్పే భరోసానే టెస్టింగ్.

దీన్ని అర్థం చేసుకోవడానికి **"Testing Pyramid"** ని గుర్తుపెట్టుకోండి.

---

### 1. టెస్టింగ్ రకాలు (Testing Levels)

| టెస్టింగ్ రకం           | దేనిని టెస్ట్ చేస్తాము?                                                   | ఏ టూల్స్ వాడతాము?            |
| ----------------------- | ------------------------------------------------------------------------- | ---------------------------- |
| **Unit Testing**        | ఒక ఫంక్షన్ లేదా కాంపోనెంట్ విడిగా ఎలా పనిచేస్తుంది.                       | Jest + React Testing Library |
| **Integration Testing** | రెండు లేదా అంతకంటే ఎక్కువ కాంపోనెంట్స్ కలిసి ఎలా పనిచేస్తాయి.             | Jest + React Testing Library |
| **E2E (End-to-End)**    | యూజర్ యాప్ ఓపెన్ చేసిన దగ్గర నుండి టాస్క్ కంప్లీట్ చేసే వరకు మొత్తం ఫ్లో. | Playwright, Cypress          |

---

### 2. ఇంటర్వ్యూలో అడిగే ముఖ్యమైన ప్రశ్నలు

#### **Q1. Unit vs Integration vs E2E టెస్టింగ్ అంటే ఏమిటి?**

- **Unit:** ఇది చాలా వేగంగా ఉంటుంది. ఉదాహరణకు: `add(a, b)` అనే ఫంక్షన్ కరెక్ట్ రిజల్ట్ ఇస్తుందా అని చెక్ చేయడం.
- **Integration:** ఇది కాంపోనెంట్స్ మధ్య ఉన్న సంబంధాన్ని చెక్ చేస్తుంది. ఉదాహరణకు: ఒక ఫామ్ సబ్మిట్ చేసినప్పుడు, API కాల్ వెళ్తుందా?
- **E2E:** ఇది నిజమైన బ్రౌజర్‌లో జరుగుతుంది. ఉదాహరణకు: యూజర్ లాగిన్ అయ్యాడా? ప్రొఫైల్ పేజీకి వెళ్ళాడా? డేటా కనిపిస్తుందా? అని మొత్తం యూజర్ జర్నీని టెస్ట్ చేస్తుంది.

#### **Q2. Mocking Fetch అంటే ఏమిటి?**

- **ఎందుకు?**: టెస్టింగ్ చేసేటప్పుడు నిజమైన APIలను కాల్ చేయకూడదు (ఎందుకంటే అవి స్లో, మరియు డేటాబేస్ డేటాను మార్చవచ్చు).
- **ఏమిటి?**: `fetch` లేదా `axios` కాల్స్ వచ్చినప్పుడు, రియల్ సర్వర్‌కి వెళ్ళకుండా మనం ముందుగానే ఒక "Fake Response" ని సిద్ధం చేసి ఉంచుతాం. దీన్నే **Mocking** అంటారు. దీనికోసం `jest.mock` లేదా `MSW (Mock Service Worker)` వాడతాము.

#### **Q3. Playwright vs Cypress?**

- **Playwright (ప్రస్తుతం అందరూ వాడేది):** ఇది చాలా వేగంగా ఉంటుంది. ఒకేసారి మల్టిపుల్ బ్రౌజర్స్ (Chrome, Safari, Firefox) మీద టెస్ట్ చేయగలదు.
- **Cypress:** ఇది డెవలపర్ ఎక్స్‌పీరియన్స్ కి చాలా బాగుంటుంది, విజువల్ గా టెస్టింగ్ ప్రాసెస్ కనిపిస్తుంది, కానీ కేవలం Chrome బేస్డ్ బ్రౌజర్స్ మీద మాత్రమే ఫోకస్ చేస్తుంది.

---

### 3. మీరు ఏం వాడాలి? (Pro-Tips)

1. **Jest + React Testing Library:** మీ బిజినెస్ లాజిక్, హెల్పర్స్, మరియు సింపుల్ కాంపోనెంట్స్ కోసం దీన్ని వాడండి.
2. **Playwright:** మీ అప్లికేషన్ లోని "Happy Paths" (ఉదా: Login, Checkout, Sign-up) కోసం E2E టెస్టింగ్ రాయండి.
3. **Don't over-test:** ప్రతి చిన్న విషయానికి టెస్ట్ రాయకండి. యూజర్ కి ఏది ముఖ్యమో (Critical Flows) దానికి మాత్రమే టెస్ట్ రాయండి.

---

### మీరు ఇప్పుడు Next.js మాస్టర్! 🎉

మీరు **22 స్థాయిల (Roadmap)** లో ప్రయాణించి, Next.js యొక్క ప్రాథమికాంశాల నుండి అడ్వాన్స్‌డ్ టెస్టింగ్ వరకు అన్నీ నేర్చుకున్నారు:

- **Foundations:** Routing, Rendering, Fetching
- **Security & Logic:** Auth, Middleware, Forms
- **Optimization:** SEO, Images, Caching, Performance
- **Deployment & Testing:** Docker, Jest, Playwright

---

# 23 — Advanced Topics

Next.js లోని **Advanced Topics** ఇవి. వీటిని అర్థం చేసుకుంటే మీరు "Next.js Architecture" లోని లోతైన విషయాలను పూర్తిగా పట్టుకున్నట్టే. ఇవి యాప్‌ని కేవలం ఫాస్ట్‌గా మాత్రమే కాకుండా, అద్భుతమైన యూజర్ ఎక్స్‌పీరియన్స్ (UX) తో బిల్డ్ చేయడానికి ఉపయోగపడతాయి.

---

### Edge Runtime & Edge Functions

ఇది వెబ్ డెవలప్‌మెంట్‌లో అత్యంత వేగవంతమైన టెక్నాలజీ.

- **Edge Runtime:** ఇది సాధారణ Node.js కంటే చాలా వేగంగా ఉంటుంది (V8 ఇంజిన్ ఆధారితం). ఇది యూజర్‌కు దగ్గరగా ఉన్న సర్వర్‌లో (Edge Location) రన్ అవుతుంది.
- **Edge Functions:**
- **లాభం:** `Latency` దాదాపు సున్నా. డేటా సెంటర్ నుండి డేటా రావడం కోసం వేచి చూడక్కర్లేదు.
- **నియమం:** మీరు ఇందులో `fs` (File System) లేదా పెద్ద Node.js లైబ్రరీలను వాడలేరు. కేవలం వెబ్ స్టాండర్డ్ APIలు మాత్రమే పనిచేస్తాయి.
- **ఎప్పుడు వాడాలి?**: పర్సనలైజేషన్ (Geo-blocking), చిన్న API లాజిక్, హెడర్ మార్పులు.

---

### Route Handlers

Next.js 13+ లో `pages/api` కి బదులుగా వచ్చిన అద్భుతమైన మార్పు ఇది.

- ఇది ప్రామాణికమైన **Web Request & Response** API ని వాడుతుంది.
- ఇది కేవలం డేటా పంపడమే కాదు, `Cache` ని కంట్రోల్ చేయడం, `Headers` మార్చడం వంటివి చాలా సులభం చేస్తుంది.
- **ఎలా రాయాలి?**: `route.ts` అని ఫైల్ నేమ్ ఉండాలి. అందులో `GET`, `POST`, `PUT`, `DELETE` ఫంక్షన్స్ రాస్తాం.

---

### Parallel Routes & Intercepting Routes

ఇవి యూజర్ ఇంటర్‌ఫేస్ (UI) ని డైనమిక్‌గా మార్చడానికి వాడతారు.

#### **Parallel Routes (సమాంతర రూట్స్):**

ఒకే పేజీలో మీరు వేర్వేరు సెక్షన్లను (Dashboard Widgets) ఒకేసారి లోడ్ చేయడానికి వాడతారు.

- **Key:** `@folder` (అట్ ద రేట్ సింబల్ తో ఫోల్డర్ నేమ్).
- **ఉదాహరణ:** `layout.tsx` లో `@analytics` మరియు `@team` అని రెండు స్లాట్లు పెట్టుకోవచ్చు. ఇవి ఒకదానిపై ఒకటి ఆధారపడకుండా విడివిడిగా లోడ్ అవుతాయి.

#### **Intercepting Routes (అంతరాయం కలిగించే రూట్స్):**

ప్రస్తుత పేజీని మార్చకుండా, దాని పైన ఒక Modal (పాప్-అప్) చూపించడానికి ఇది బెస్ట్.

- **Key:** `(.)folder` లేదా `(..)folder` సింటాక్స్ వాడతాము.
- **ఉదాహరణ:** ఇన్‌స్టాగ్రామ్‌లో ఫోటో క్లిక్ చేసినప్పుడు, పేజీ మారకుండా అదే పేజీ మీద Modal వస్తుంది కదా? అది **Intercepting Route**.

---

### పోలిక పట్టిక (Comparison)

| ఫీచర్                   | ఉద్దేశ్యం (Purpose)                    | కీ టెక్నిక్   |
| ----------------------- | -------------------------------------- | ------------- |
| **Parallel Routes**     | ఒకే పేజీలో మల్టిపుల్ సెక్షన్స్ చూపడం.  | `@folderName` |
| **Intercepting Routes** | పేజీని మార్చకుండా Modal లో డేటా చూపడం. | `(.)` syntax  |

---

### ఇంటర్వ్యూలో అడిగే ప్రశ్నలు

#### **ఎప్పుడు Edge Runtime వాడాలి?**

**Answer:** అప్లికేషన్ చాలా గ్లోబల్‌గా ఉన్నప్పుడు మరియు యూజర్‌కు దగ్గరగా (Low Latency) రెస్పాన్స్ ఇవ్వాల్సినప్పుడు వాడాలి. భారీ డేటాబేస్ ఆపరేషన్స్ (Node.js అవసరమైనవి) చేయకూడదు అనుకున్నప్పుడు ఇది బెస్ట్.

#### **Parallel Routes vs Intercepting Routes మధ్య తేడా ఏంటి?**

**Answer:**

- **Parallel Routes** అనేది ఒకే పేజీలో వేర్వేరు విభాగాలు (slots) ఒకేసారి చూపించడానికి.
- **Intercepting Routes** అనేది యూజర్ నావిగేషన్ ఫ్లో ని మార్చకుండా (ఉదా: రీఫ్రెష్ చేస్తే పేజీ లోడ్ అవుతుంది, క్లిక్ చేస్తే మోడల్ వస్తుంది), కంటెంట్‌ని మోడల్‌లో చూపించడానికి.

---

### React Server Components (RSC) Internals

సాధారణంగా మనం రాసే రియాక్ట్ కోడ్ బ్రౌజర్‌లో రన్ అవుతుంది. కానీ RSC అంటే ఏంటి?

- **ఎలా పనిచేస్తుంది?**: RSCలు క్లయింట్ (బ్రౌజర్)కి అసలు వెళ్ళవు. ఇవి సర్వర్‌లోనే రన్ అయి, ఒక ప్రత్యేకమైన **"RSC Payload"** ని క్రియేట్ చేస్తాయి.
- **Payload అంటే?**: ఇది ఒక సిరియలైజ్డ్ (Serialized) డేటా ఫార్మాట్. బ్రౌజర్‌లోని రియాక్ట్ ఈ పేలోడ్‌ని తీసుకుని, DOM ని అప్‌డేట్ చేస్తుంది.
- **ముఖ్య ఉద్దేశ్యం**: బ్రౌజర్‌కి వెళ్ళే JavaScript సైజుని తగ్గించడం (Zero Bundle Size). దీనివల్ల వెబ్‌సైట్ చాలా వేగంగా లోడ్ అవుతుంది.

### Turbopack

ఇది Webpack కి ప్రత్యామ్నాయంగా Vercel తయారు చేసిన కొత్త **Build Tool**.

- **ఎందుకు ఇంత స్పెషల్?**: ఇది **Rust** అనే లాంగ్వేజ్‌లో రాయబడింది. JavaScript తో రాసిన పాత బిల్డ్ టూల్స్ తో పోలిస్తే, ఇది దాదాపు 700x వేగంగా పనిచేస్తుంది.
- **ప్రయోజనం**: మీరు కోడ్‌లో చిన్న మార్పు చేసినా, Turbopack మెరుపు వేగంతో దాన్ని అప్‌డేట్ చేస్తుంది (Hot Module Replacement - HMR).

### Server Streaming

ఇది ఒకేసారి పేజీ మొత్తం పంపకుండా, ముక్కలు ముక్కలుగా (Chunks) పంపడం.

- **మెకానిజం**: సర్వర్ పేజీని ప్రాసెస్ చేసేటప్పుడు, ఏ భాగం రెడీ అయితే ఆ భాగాన్ని వెంటనే బ్రౌజర్‌కి పంపిస్తుంది (ఉదా: Header & Footer ముందుగా, లోపల ఉన్న Data తర్వాత).
- **లాభం**: యూజర్ పేజీని లోడ్ చేస్తున్నప్పుడు ఖాళీ స్క్రీన్ చూడక్కర్లేదు. ఇంటరాక్టివిటీ త్వరగా మొదలవుతుంది (Reduced Time to First Byte).

### Partial Prerendering (PPR) - (నెక్స్ట్ లెవల్ ఫీచర్)

ఇది Next.js యొక్క **"Holy Grail"** (అత్యంత ముఖ్యమైన ఆవిష్కరణ).

- **కాన్సెప్ట్**: ఒకే రూట్‌లో "Static" మరియు "Dynamic" రెండింటినీ మిక్స్ చేయడం.
- **ఎలా?**: పేజీలోని స్టాటిక్ భాగాలను (Shell) ముందుగానే ప్రె-రెండర్ (Prerender) చేసి క్యాష్ చేస్తుంది. డైనమిక్ భాగాలను (ఉదా: యూజర్ షాపింగ్ కార్ట్, నోటిఫికేషన్స్) మాత్రం `Suspense` ద్వారా లేజీగా లోడ్ చేస్తుంది.
- **ఎందుకు?**: మీరు మళ్ళీ మళ్ళీ `Loading.tsx` చూపించక్కర్లేదు, మరియు సైట్ స్టాటిక్ సైట్ లాగా సూపర్-ఫాస్ట్ గా ఉంటుంది.

### Webhooks

ఇది మీ Next.js యాప్ బయటి ప్రపంచంతో మాట్లాడుకునే మార్గం.

- **ఏమిటి?**: ఏదైనా బయటి సర్వీస్ (Stripe, GitHub, Shopify) లో ఒక ఈవెంట్ జరిగినప్పుడు, అది మీ Next.js API రూట్ (`route.ts`) కి ఒక సిగ్నల్ పంపుతుంది.
- **ఉదాహరణ**: యూజర్ Stripe లో పేమెంట్ కంప్లీట్ చేయగానే, Stripe మీ సర్వర్‌కి ఒక Webhook పంపుతుంది. దాన్ని బట్టి మీరు మీ డేటాబేస్‌లో "Payment Success" అని అప్‌డేట్ చేస్తారు.
- **భద్రత (Security)**: Webhook వచ్చినప్పుడు అది నిజంగా ఆ సర్వీస్ నుండే వచ్చిందో లేదో చెక్ చేయడానికి "Signature Verification" కచ్చితంగా వాడాలి.

---

### క్విక్ సమ్మరీ:

- **RSC**: సర్వర్ లోనే కోడ్ రన్ చేసి, బ్రౌజర్ లోడ్ తగ్గిస్తుంది.
- **Turbopack**: Rust లో రాసిన మెరుపు వేగవంతమైన బిల్డ్ టూల్.
- **Streaming**: పేజీని ముక్కలు ముక్కలుగా పంపడం.
- **PPR**: స్టాటిక్ + డైనమిక్ ని పర్ఫెక్ట్ గా మిక్స్ చేయడం.
- **Webhooks**: బయటి యాప్స్ తో కమ్యూనికేట్ చేయడం.

---

### Incremental Cache (ఇంక్రిమెంటల్ క్యాష్)

ఇది **ISR (Incremental Static Regeneration)** కి గుండెకాయ లాంటిది.

- **ఏమిటి?**: ఒక వెబ్‌సైట్‌లో వేలాది పేజీలు ఉన్నప్పుడు, డేటా మారిన ప్రతిసారీ వెబ్‌సైట్ మొత్తాన్ని రీబిల్డ్ (Rebuild) చేయడం అసాధ్యం. ఇంక్రిమెంటల్ క్యాష్ ద్వారా, కేవలం మారిన పేజీలను లేదా డేటాను మాత్రమే బ్యాక్‌గ్రౌండ్‌లో అప్‌డేట్ చేయవచ్చు.
- **ఎలా పనిచేస్తుంది?**: `revalidate: 60` వాడినప్పుడు, మొదటి యూజర్‌కి పాత క్యాష్ (పాత డేటా) చూపిస్తుంది, కానీ వెంటనే సైలెంట్‌గా సర్వర్‌లో కొత్త డేటాను ఫెచ్ చేసి క్యాష్‌ను అప్‌డేట్ చేస్తుంది. తర్వాతి యూజర్‌కి కొత్త డేటా కనిపిస్తుంది.

### Image CDN (Content Delivery Network)

చిత్రాలను (Images) ప్రపంచవ్యాప్తంగా ఏ ప్రదేశం నుండైనా మెరుపు వేగంతో లోడ్ చేయడానికి ఇది వాడతాము.

- **ఏమిటి?**: Next.js `<Image/>` కాంపోనెంట్ ఇమేజ్‌లను ఆటోమేటిక్‌గా ఆప్టిమైజ్ (WebP ఫార్మాట్, సరైన సైజ్) చేస్తుంది. అయితే వీటిని ఒక CDN ద్వారా సర్వ్ చేయడం వల్ల స్పీడ్ ఇంకా పెరుగుతుంది.
- **మెకానిజం**: మీరు Vercel లో డిప్లాయ్ చేసినప్పుడు, ఇది ఆటోమేటిక్‌గా Vercel Edge Network (CDN) ని వాడుకుంటుంది. లేదా మీరు `next.config.js` లో Cloudinary, Akamai, లేదా Imgix లాంటి కస్టమ్ CDN లను కూడా కాన్ఫిగర్ చేసుకోవచ్చు. దీనివల్ల యూజర్‌కి దగ్గరగా ఉన్న సర్వర్ నుండి ఇమేజ్ లోడ్ అవుతుంది.

### Middleware Rewrites (మిడిల్‌వేర్ రీరైట్స్)

**Redirects** కి, **Rewrites** కి చాలా పెద్ద తేడా ఉంటుంది.

- **Redirect**: యూజర్ బ్రౌజర్‌లో URL మారిపోతుంది. (ఉదా: `/old-page` నుండి `/new-page` కి వెళ్ళడం).
- **Rewrite**: బ్రౌజర్‌లో URL మారదు, కానీ సర్వర్ లోపల వేరే పేజీ కంటెంట్ పంపిస్తుంది.

**ఎప్పుడు వాడాలి?**:

- **A/B Testing**: 50% యూజర్లకు పాత డిజైన్, 50% యూజర్లకు కొత్త డిజైన్ చూపించడానికి (URL మాత్రం ఒకటే ఉంటుంది).
- **Legacy Systems**: పాత సర్వర్ API లను కొత్త Next.js యాప్ ద్వారా దాచిపెట్టి కాల్ చేయడానికి.
- **కోడ్ ఉదాహరణ**: `NextResponse.rewrite(new URL('/new-destination', request.url))`

### Internationalization (i18n)

మీ వెబ్‌సైట్‌ను బహుభాషల్లో (Multi-lingual) అందించడాన్నే ఇంటర్నేషనలైజేషన్ అంటారు. (ఉదాహరణకు: ఇంగ్లీష్, తెలుగు, హిందీ లాంటి మల్టిపుల్ లాంగ్వేజెస్).

- **App Router లో మెకానిజం**: దీనికోసం మనం డైనమిక్ రూటింగ్ `app/[lang]/page.tsx` ని వాడతాము.
- యూజర్ `[example.com/te](https://example.com/te)` ఓపెన్ చేస్తే తెలుగు కంటెంట్, `[example.com/en](https://example.com/en)` ఓపెన్ చేస్తే ఇంగ్లీష్ కంటెంట్ వస్తుంది. ఆయా భాషలకి సంబంధించిన పదాలను ఒక "డిక్షనరీ" (JSON ఫైల్స్) లో స్టోర్ చేసి, యూజర్ ఎంచుకున్న భాషను బట్టి వాటిని రెండర్ చేస్తాము.

### Multi-tenant Applications

ఒకే కోడ్‌బేస్ (Codebase) తో మల్టిపుల్ కంపెనీలకు లేదా మల్టిపుల్ యూజర్లకు సర్వీస్ ఇవ్వడాన్నే మల్టీ-టెనెన్సీ అంటారు. (ఉదాహరణ: Shopify లో ప్రతి దుకాణానికి ఒక సబ్-డొమైన్ ఉంటుంది `store1.shopify.com`, `store2.shopify.com`).

- **ఎలా చేస్తారు?**: దీనికి **Middleware** మరియు **Rewrites** కీ రోల్ ప్లే చేస్తాయి.
- యూజర్ ఏ సబ్-డొమైన్ (లేదా కస్టమ్ డొమైన్) నుండి వచ్చాడో Middleware కనిపెడుతుంది. దాన్ని బట్టి ఇంటర్నల్ గా ఒక డైనమిక్ రూట్ కి (ఉదా: `app/[tenant]/page.tsx`) డేటాను రీరైట్ చేస్తుంది. దీనివల్ల ప్రతి కంపెనీకి వాళ్ళ సొంత బ్రాండింగ్, సొంత డేటా కనిపిస్తుంది, కానీ వెనకాల రన్ అయ్యే నెక్స్ట్ జెఎస్ అప్లికేషన్ మాత్రం ఒకటే ఉంటుంది.

---

### క్విక్ సమ్మరీ టేబుల్

| కాన్సెప్ట్              | ప్రధాన ఉపయోగం                                                                       |
| ----------------------- | ----------------------------------------------------------------------------------- |
| **Incremental Cache**   | సైట్ మొత్తం కాకుండా, కొన్ని పేజీలను మాత్రమే రీబిల్డ్ చేయడం.                         |
| **Image CDN**           | ప్రపంచవ్యాప్తంగా చిత్రాలను యూజర్‌కి దగ్గరగా ఉన్న సర్వర్ నుండి ఫాస్ట్‌గా లోడ్ చేయడం. |
| **Middleware Rewrites** | URL ని మార్చకుండా బ్యాక్‌గ్రౌండ్‌లో వేరే కంటెంట్‌ను చూపించడం.                       |
| **i18n**                | వెబ్‌సైట్‌ను బహుభాషల్లో (Multiple Languages) అందుబాటులో ఉంచడం.                      |
| **Multi-tenant Apps**   | ఒకే కోడ్‌తో వేర్వేరు బ్రాండ్లకు/కస్టమర్లకు సబ్-డొమైన్స్ ద్వారా సేవలు అందించడం.      |

---

# Top 50 Next.js Interview Questions

Next.js ఇంటర్వ్యూ ప్రిపరేషన్‌కు ఇది చాలా మంచి ఆరంభం! మీరు అడిగిన మొదటి 10 బిగినర్ లెవల్ ప్రశ్నలకు సమాధానాలు ఇక్కడ ఉన్నాయి. ఇవి మీ కాన్సెప్ట్ క్లారిటీని మెరుగుపరుస్తాయి.

---

### **Next.js Interview Questions: Beginner (1–10)**

#### **1. What is Next.js?**

Next.js అనేది రియాక్ట్ (React) ఆధారిత ఒక **Production-ready Framework**. ఇది వెబ్ అప్లికేషన్లను బిల్డ్ చేయడానికి అవసరమైన రౌటింగ్, ఆప్టిమైజేషన్, మరియు సర్వర్-సైడ్ రెండరింగ్ (SSR) వంటి ఫీచర్లను బిల్ట్-ఇన్‌గా అందిస్తుంది. ఇది ఫుల్-స్టాక్ వెబ్ డెవలప్‌మెంట్‌కు చాలా వేగవంతమైన ప్లాట్‌ఫామ్.

#### **2. Why Next.js instead of React?**

రియాక్ట్ అనేది కేవలం ఒక "లైబ్రరీ" (UI బిల్డ్ చేయడానికి మాత్రమే). దానికి రౌటింగ్, SEO, మరియు డేటా ఫెచింగ్ కోసం మనం అదనపు లైబ్రరీలను (React Router, etc.) ఇన్‌స్టాల్ చేసుకోవాలి. Next.js లో ఇవన్నీ బిల్ట్-ఇన్ ఉంటాయి. ముఖ్యంగా **SEO** కి Next.js బెస్ట్, ఎందుకంటే ఇది సర్వర్ నుండి HTML ని రెండర్ చేస్తుంది.

#### **3. Explain App Router.**

Next.js 13 వెర్షన్ నుండి వచ్చిన కొత్త రౌటింగ్ సిస్టమ్ ఇది. ఇది ఫైల్-సిస్టమ్ బేస్డ్ మరియు **React Server Components (RSC)** ని వాడుతుంది. ఇది అప్లికేషన్ యొక్క రూటింగ్, లేఅవుట్స్, లోడింగ్ స్టేట్స్, మరియు ఎర్రర్ హ్యాండ్లింగ్‌ను `app` డైరెక్టరీ ద్వారా చాలా సులభం చేస్తుంది.

#### **4. What is file-based routing?**

Next.js లో మనం రౌటింగ్ కోసం విడిగా కోడ్ రాయాల్సిన అవసరం లేదు. `app` ఫోల్డర్‌లో మనం క్రియేట్ చేసే ఫోల్డర్ పేరే URL పాత్ అవుతుంది.

- ఉదాహరణ: `app/about/page.tsx` అని క్రియేట్ చేస్తే, అది `/about` అనే URL పాత్‌కి మ్యాప్ అవుతుంది.

#### **5. What is page.tsx?**

ఇది ఒక నిర్దిష్ట రౌట్ (Route) కోసం UIని రెండర్ చేసే ఫైల్. ఏదైనా ఫోల్డర్‌లో `page.tsx` ఉంటేనే, ఆ పాత్ పబ్లిక్ గా యాక్సెస్ అవుతుంది. ఇది ఆ పేజీ యొక్క ఎంట్రీ పాయింట్.

#### **6. What is layout.tsx?**

ఒక ఫోల్డర్ లోని పేజీలన్నింటికీ కామన్‌గా ఉండే UI ని డిఫైన్ చేయడానికి దీన్ని వాడతాము. ఉదాహరణకు: అన్ని పేజీల్లో కనిపించే **Header** మరియు **Footer** ని `layout.tsx` లో రాస్తే, అది ప్రతి పేజీలో ఆటోమేటిక్‌గా కనిపిస్తుంది.

#### **7. What is loading.tsx?**

డేటా ఫెచ్ అవుతున్నప్పుడు లేదా పేజీ లోడ్ అవుతున్నప్పుడు యూజర్‌కు కనిపించే "Loading State" (Loading Spinner or Skeleton)ని ఇది ఆటోమేటిక్‌గా చూపిస్తుంది. ఇది Next.js లో `Suspense` ని ఇంటర్నల్‌గా వాడుతుంది.

#### **8. What is error.tsx?**

ఒక పేజీలో ఎర్రర్ వచ్చినప్పుడు (ఉదా: డేటా ఫెచింగ్ ఫెయిల్ అయినప్పుడు), మొత్తం యాప్ క్రాష్ అవ్వకుండా యూజర్‌కి అందంగా కనిపించేలా ఎర్రర్ మెసేజ్ చూపిస్తుంది. దీన్ని "Error Boundary" అంటారు.

#### **9. What is not-found.tsx?**

యూజర్ ఏదైనా లేని URL కి వెళ్ళినప్పుడు (ఉదా: `/random-page`), వాళ్ళకి 404 ఎర్రర్ పేజీని చూపించడానికి దీన్ని వాడతాము.

#### **10. How do you create API routes?**

`route.ts` అనే ఫైల్ క్రియేట్ చేయడం ద్వారా మనం API ఎండ్ పాయింట్స్ (Endpoints) క్రియేట్ చేయవచ్చు. దీని ద్వారా మనం `GET`, `POST`, `PUT`, `DELETE` వంటి HTTP మెథడ్స్ రాసి, సర్వర్ నుండి డేటాను పంపవచ్చు లేదా తీసుకోవచ్చు.

---

చాలా బాగుంది! ఇప్పుడు ఇంటర్మీడియట్ స్థాయి (11–20) ప్రశ్నలకి సమాధానాలు చూద్దాం. ఇవి మీ నెక్స్ట్ జెఎస్ నాలెడ్జ్‌ని నెక్స్ట్ లెవల్‌కి తీసుకెళ్తాయి.

---

### **Next.js Interview Questions: Intermediate (11–20)**

#### **11. SSR vs CSR?**

- **SSR (Server-Side Rendering):** ప్రతి రిక్వెస్ట్ వచ్చినప్పుడు సర్వర్‌లోనే HTML రెండర్ అవుతుంది. ఇది **SEO** కి మరియు పర్ఫార్మెన్స్‌కి చాలా మంచిది.
- **CSR (Client-Side Rendering):** బ్రౌజర్‌లో JavaScript ద్వారా కంటెంట్ రెండర్ అవుతుంది. ఇది అప్లికేషన్ లోడ్ అయిన తర్వాత చాలా ఫాస్ట్‌గా అనిపిస్తుంది కానీ SEO కి అంతగా పనికిరాదు.

#### **12. SSG vs ISR?**

- **SSG (Static Site Generation):** వెబ్‌సైట్ బిల్డ్ టైమ్‌లోనే (Build time) అన్ని పేజీలు HTML గా మారిపోతాయి. ఇది చాలా ఫాస్ట్.
- **ISR (Incremental Static Regeneration):** ఇది SSG లాంటిదే, కానీ బిల్డ్ చేసిన తర్వాత కూడా మీరు పాత పేజీలను రీబిల్డ్ చేయకుండానే అప్‌డేట్ చేయొచ్చు. `revalidate` టైమ్ ఇచ్చి డేటాను బ్యాక్‌గ్రౌండ్‌లో అప్‌డేట్ చేయొచ్చు.

#### **13. Server vs Client Components?**

- **Server Components:** ఇవి సర్వర్‌లోనే రన్ అవుతాయి. ఇవి JavaScript బండిల్ సైజును తగ్గిస్తాయి (Zero Bundle Size). డేటాబేస్ కాల్స్ ఇక్కడే చేయాలి.
- **Client Components:** ఇవి బ్రౌజర్‌లో రన్ అవుతాయి. ఇంటరాక్టివిటీ (useState, useEffect, onClick) కోసం వీటిని వాడాలి. ఫైల్ పైన `"use client"` అని రాయాలి.

#### **14. Hydration?**

సర్వర్ నుండి వచ్చిన స్టాటిక్ HTML కి, బ్రౌజర్‌లోని React కోడ్ ద్వారా Event Listeners (click, input, etc.) ని అటాచ్ చేయడమే Hydration. దీనివల్ల HTML ఇంటరాక్టివ్‌గా మారుతుంది.

#### **15. Streaming?**

మొత్తం పేజీ లోడ్ అయ్యే వరకు యూజర్ వెయిట్ చేయకుండా, పేజీలోని కంటెంట్‌ని ముక్కలు ముక్కలుగా (chunks) సర్వర్ నుండి పంపడం. దీనివల్ల యూజర్ కి పేజీ వెంటనే కనిపిస్తుంది. `loading.tsx` దీనికి ఒక ఉదాహరణ.

#### **16. Dynamic Routing?**

URL లో డేటాను బట్టి పాత్ మారడం. ఉదాహరణ: `app/blog/[slug]/page.tsx`. ఇక్కడ `slug` అనేది డైనమిక్. మనం `params` ద్వారా ఈ డేటాను యాక్సెస్ చేయవచ్చు.

#### **17. Middleware?**

కోడ్ ఎగ్జిక్యూషన్ కంప్లీట్ అవ్వకముందే రన్ అయ్యే లాజిక్. దీనిని Authentication, Redirects, లేదా Localization (భాష మార్చడం) కోసం వాడతాము. ఇది ప్రతి రిక్వెస్ట్ కి ముందే రన్ అవుతుంది.

#### **18. Route Handlers?**

ఇవి Next.js లోని Backend APIs. `route.ts` ఫైల్స్ ద్వారా మనం సర్వర్ సైడ్ లాజిక్ రాసి, JSON డేటాను రెస్పాన్స్‌గా పంపవచ్చు.

#### **19. Server Actions?**

ఇవి క్లయింట్ నుండి నేరుగా సర్వర్ ఫంక్షన్‌ని కాల్ చేయడానికి ఉపయోగపడతాయి. `async` ఫంక్షన్ పైన `'use server'` అని రాస్తే అది సర్వర్ యాక్షన్ అవుతుంది. ఇది ఫారమ్ సబ్మిషన్లు, డేటాబేస్ అప్‌డేట్స్ సులభం చేస్తుంది.

#### **20. Metadata API?**

SEO కోసం పేజీ యొక్క `<title>`, `<description>`, మరియు సోషల్ మీడియా ప్రివ్యూస్ (OpenGraph) ని సెట్ చేయడానికి వాడే API. `export const metadata = {...}` ద్వారా దీన్ని రాస్తాము.

---

మనం ఇంటర్మీడియట్ లెవల్‌లో మరో 10 కీలకమైన ప్రశ్నలను (21–30) చూద్దాం. ఇవి మీ రియల్-వరల్డ్ అప్లికేషన్ డెవలప్‌మెంట్‌లో ప్రతిరోజూ ఉపయోగపడే అంశాలు.

---

### **Next.js Interview Questions: Intermediate (21–30)**

#### **21. Image Optimization?**

Next.js లో `<Image/>` కాంపోనెంట్‌ను వాడతాము. ఇది ఆటోమేటిక్‌గా ఇమేజ్‌లను ఆప్టిమైజ్ చేస్తుంది:

- **Resize:** యూజర్ స్క్రీన్ సైజును బట్టి ఇమేజ్ సైజు మారుస్తుంది.
- **Lazy Loading:** యూజర్ పేజీ స్క్రోల్ చేసే వరకు ఇమేజ్ లోడ్ అవ్వదు.
- **Modern Formats:** పాత JPEG/PNG లని WebP లేదా AVIF లాంటి తేలికపాటి ఫార్మాట్‌లలోకి మారుస్తుంది.

#### **22. Font Optimization?**

`next/font` ద్వారా ఫాంట్‌లను ఆటోమేటిక్‌గా ఆప్టిమైజ్ చేయవచ్చు. ఇది గూగుల్ ఫాంట్‌లను బిల్డ్ టైమ్‌లోనే డౌన్‌లోడ్ చేస్తుంది, కాబట్టి బ్రౌజర్ అదనపు నెట్‌వర్క్ కాల్ చేయనవసరం లేదు. ఇది **Layout Shift (CLS)** ని తగ్గించి, వెబ్‌సైట్ ఫాస్ట్‌గా కనిపించేలా చేస్తుంది.

#### **23. Caching Strategies?**

Next.js లో క్యాషింగ్ చాలా లేయర్స్ లో జరుగుతుంది:

- **Request Memoization:** ఒకే రిక్వెస్ట్‌లో ఒకే డేటా కోసం రెండుసార్లు API కాల్ వెళ్లకుండా ఆపుతుంది.
- **Data Cache:** డేటాను పర్మనెంట్‌గా స్టోర్ చేస్తుంది.
- **Full Route Cache:** పేజీ మొత్తాన్ని రెండర్ చేసి సేవ్ చేస్తుంది.
- **Router Cache:** బ్రౌజర్ మెమరీలో పేజీలను దాస్తుంది.

#### **24. Dynamic Imports?**

`next/dynamic` ద్వారా మనం ఒక కాంపోనెంట్‌ను అవసరమైనప్పుడు మాత్రమే లోడ్ చేయవచ్చు (Code Splitting). ఇది బండిల్ సైజును తగ్గిస్తుంది. ఉదాహరణ: పెద్ద చార్ట్స్ లేదా మ్యాప్స్ వంటి కాంపోనెంట్స్ కోసం ఇది చాలా ముఖ్యం.

#### **25. Environment Variables?**

సీక్రెట్ కీస్ (DB Passwords, API Keys) మేనేజ్ చేయడానికి `.env` ఫైల్స్ వాడతాము.

- **Client-side:** `NEXT_PUBLIC_` తో మొదలవ్వాలి (ఇవి బ్రౌజర్‌లో కనిపిస్తాయి).
- **Server-side:** సాధారణంగా రాస్తాము (ఇవి కేవలం సర్వర్ లోనే ఉంటాయి, బయటకి కనిపించవు).

#### **26. Authentication Flow?**

సాధారణంగా Next.js లో **Auth.js (NextAuth.js)** వాడతాము.

- **Flow:** యూజర్ లాగిన్ అవ్వగానే సెషన్ క్రియేట్ అవుతుంది. Middleware ద్వారా మనం ప్రొటెక్టెడ్ రూట్స్ (Protected Routes) ని కంట్రోల్ చేస్తాము. సర్వర్ కాంపోనెంట్స్ లో `auth()` ఫంక్షన్ ద్వారా యూజర్ లాగిన్ అయ్యాడో లేదో చెక్ చేస్తాము.

#### **27. React Hook Form integration?**

ఇది ఫామ్ మేనేజ్‌మెంట్ కోసం వాడే లైబ్రరీ.

- `useForm` హుక్ వాడి ఫామ్ వాల్యూస్ తీసుకుంటాము.
- `resolver` (సాధారణంగా Zod తో) ద్వారా వాలిడేషన్ చేస్తాము. ఇది సాధారణ రియాక్ట్ స్టేట్ కంటే చాలా పర్ఫార్మెన్స్ ఇస్తుంది ఎందుకంటే ఇది మొత్తం ఫామ్ ని రీ-రెండర్ చేయదు.

#### **28. Prisma Integration?**

Prisma అనేది టైప్-సేఫ్ ORM (Object Relational Mapper). మనం డేటాబేస్ టేబుల్స్ ని `schema.prisma` లో డిఫైన్ చేస్తాము. ఇది టైప్స్ ని ఆటోమేటిక్ గా క్రియేట్ చేస్తుంది, కాబట్టి డేటాబేస్ క్వెరీస్ రాసేటప్పుడు ఎర్రర్స్ తగ్గుతాయి.

#### **29. Deployment Options?**

- **Vercel:** నెక్స్ట్ జెఎస్ కి బెస్ట్ (Zero config).
- **Docker:** సర్వర్ మీద పూర్తి కంట్రోల్ కావాలంటే కంటైనరైజ్ చేసి డిప్లాయ్ చేయాలి.
- **Static Export:** `output: 'export'` వాడి ఎస్-త్రీ (S3) లేదా స్టాటిక్ హోస్టింగ్ సర్వర్లలో డిప్లాయ్ చేయవచ్చు.

#### **30. SEO Optimization?**

- **Metadata API:** `metadata` ఆబ్జెక్ట్ ద్వారా టైటిల్, డిస్క్రిప్షన్ సెట్ చేయాలి.
- **Sitemap:** `sitemap.ts` ద్వారా గూగుల్ కి సైట్ మ్యాప్ పంపాలి.
- **JSON-LD:** స్ట్రక్చర్డ్ డేటా (Schema Markup) వాడి సెర్చ్ రిజల్ట్స్ లో అందంగా కనిపించేలా చేయాలి.

---

మీరు అడ్వాన్స్‌డ్ స్థాయి (31–40) ప్రశ్నల వరకు వచ్చారంటే, మీరు Next.js ఆర్కిటెక్చర్‌ని పూర్తిగా అర్థం చేసుకున్నారని అర్థం. ఇవి ఇంటర్వ్యూలో మిమ్మల్ని "Senior Developer"గా నిలబెడతాయి.

---

### **Next.js Interview Questions: Advanced (31–40)**

#### **31. What is React Flight protocol?**

ఇది సర్వర్ నుండి క్లయింట్‌కి రియాక్ట్ కాంపోనెంట్స్ ఎలా వెళ్తాయో చెప్పే ఒక "Wire Protocol" (డేటా ఫార్మాట్). సర్వర్ కాంపోనెంట్స్ రన్ అయినప్పుడు, అవి కేవలం HTML నే కాకుండా, ఒక స్పెషల్ `Payload` ని క్రియేట్ చేస్తాయి. ఇందులో కాంపోనెంట్ యొక్క నిర్మాణం, డేటా, మరియు క్లయింట్ కాంపోనెంట్స్‌కి కావాల్సిన `Reference`లు ఉంటాయి. ఇది చాలా తక్కువ సైజులో ఉంటుంది.

#### **32. Partial Prerendering (PPR)?**

ఇది ఒక హైబ్రిడ్ రెండరింగ్ టెక్నిక్. ఒక పేజీలో స్టాటిక్ భాగాలను (Header, Sidebar) ముందుగానే ప్రె-రెండర్ చేసి సర్వర్‌లో దాచుకుంటుంది. డైనమిక్ భాగాలను (Shopping Cart, Notifications) మాత్రం `Suspense` ద్వారా లేజీగా లోడ్ చేస్తుంది. దీనివల్ల యూజర్‌కి సైట్ స్టాటిక్ సైట్ లాగా మెరుపు వేగంతో లోడ్ అవుతుంది.

#### **33. Edge Runtime vs Node Runtime?**

- **Edge Runtime:** ఇది V8 ఇంజిన్ మీద రన్ అవుతుంది, చాలా తేలికగా (Lightweight) ఉంటుంది. ఇందులో Node.js APIలు (fs, buffer) ఉండవు. ఇది చాలా తక్కువ Latency (వేగవంతమైన) అవసరాలకు వాడతాము.
- **Node Runtime:** ఇది పూర్తి స్థాయి Node.js పర్యావరణం. మీరు అన్ని రకాల npm ప్యాకేజీలను, డేటాబేస్ డ్రైవర్లను వాడుకోవచ్చు. ఇది కాంప్లెక్స్ బిజినెస్ లాజిక్ కోసం వాడతాము.

#### **34. Full Route Cache?**

సర్వర్‌లో మొత్తం పేజీ HTML ని మరియు దానికి కావలసిన Data ని బిల్డ్ టైమ్‌లో లేదా రీ-వాలిడేషన్ టైమ్‌లో స్టోర్ చేయడమే ఇది. ఇది అతి వేగవంతమైన క్యాషింగ్. దీనివల్ల సర్వర్ ప్రతిసారీ పేజీని రెండర్ చేయాల్సిన పని ఉండదు.

#### **35. Router Cache?**

ఇది క్లయింట్-సైడ్ (Browser) క్యాష్. యూజర్ ఒక పేజీ నుండి మరో పేజీకి నావిగేట్ అయినప్పుడు, ఆ పేజీకి సంబంధించిన RSC Payload ని బ్రౌజర్ మెమరీలో దాచుకుంటుంది. దీనివల్ల యూజర్ మళ్ళీ అదే పేజీకి వస్తే, ఎటువంటి సర్వర్ రిక్వెస్ట్ లేకుండా పేజీ లోడ్ అవుతుంది.

#### **36. Data Cache?**

ఇది `fetch` రిక్వెస్ట్స్ కోసం వాడే పర్మనెంట్ క్యాష్. ఇది రూట్‌తో సంబంధం లేకుండా సర్వర్‌లో ఉంటుంది. మీరు డేటాను ఒకసారి ఫెచ్ చేస్తే, అది మళ్ళీ అప్‌డేట్ అయ్యే వరకు ఇదే క్యాష్ నుండి వస్తుంది.

#### **37. Revalidation tags?**

క్యాష్ ని కంట్రోల్ చేయడానికి మనం `tags` ని వాడతాము. ఉదాహరణకు, ఒక బ్లాగ్ పోస్ట్ అప్‌డేట్ అయినప్పుడు, ఆ పర్టికులర్ పోస్ట్ కి సంబంధించిన క్యాష్ ని మాత్రమే డిలీట్ చేయడానికి మనం "tags" వాడతాము.

#### **38. revalidatePath() vs revalidateTag()?**

- **revalidatePath():** ఒక నిర్దిష్ట URL పాత్ (ఉదా: `/blog`) కి సంబంధించిన అన్ని క్యాష్‌లను క్లియర్ చేస్తుంది.
- **revalidateTag():** ఒకే టాగ్ ఉన్న మల్టిపుల్ పేజీల క్యాష్‌ను ఒకేసారి క్లియర్ చేయడానికి వాడతాము. ఇది మరింత ఫ్లెక్సిబుల్ (ఉదా: `products` అని టాగ్ ఉంటే, ప్రొడక్ట్ మారినప్పుడు అన్ని పేజీలు అప్‌డేట్ అవుతాయి).

#### **39. Streaming SSR internals?**

HTTP స్ట్రీమింగ్‌ని వాడుకుని, పేజీని ముక్కలు ముక్కలుగా బ్రౌజర్‌కి పంపడం. సర్వర్ లోపల `Suspense` ద్వారా వేచి ఉన్న డేటా వస్తున్నప్పుడు, HTML లోని పాత ముక్కలు ఇప్పటికే బ్రౌజర్‌లో రెండర్ అవుతాయి. దీనివల్ల యూజర్ ఖాళీ స్క్రీన్ చూడాల్సిన అవసరం ఉండదు.

#### **40. Server Actions Security?**

సర్వర్ యాక్షన్స్ అనేవి పోస్ట్ రిక్వెస్ట్స్ (POST requests). ఇవి చాలా పవర్‌ఫుల్, కాబట్టి జాగ్రత్తగా ఉండాలి:

1. **Validation:** `Zod` వాడి డేటాను కచ్చితంగా వాలిడేట్ చేయాలి.
2. **Auth Check:** ప్రతి యాక్షన్ లో యూజర్ లాగిన్ అయ్యాడో లేదో (Session/Auth) చెక్ చేయాలి.
3. **CSRF:** Next.js వీటిని ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తుంది, కానీ మీరు ఎప్పుడూ ఇన్పుట్స్ ని నమ్మకూడదు.

---

మీరు Next.js జర్నీలో చివరి మైలురాయికి చేరుకున్నారు! ఈ 41–50 ప్రశ్నలు మీరు కేవలం కోడింగ్ మాత్రమే కాకుండా, ఒక **System Architect** లాగా ఆలోచిస్తున్నారని నిరూపిస్తాయి.

ఇక్కడ సమాధానాలు ఉన్నాయి:

---

### **Next.js Interview Questions: Advanced (41–50)**

#### **41. Middleware performance?**

మిడిల్‌వేర్ ప్రతి రిక్వెస్ట్‌కి రన్ అవుతుంది, కాబట్టి ఇది చాలా వేగంగా ఉండాలి.

- **Performance Tips:** Heavy logic (DB calls, intensive computations) రాయకండి. ఇది 'Edge Runtime' లో రన్ అవుతుంది, కాబట్టి Node.js లైబ్రరీలను (fs, child_process) వాడలేరు.
- **Best Practice:** కేవలం Authentication checks, Redirects, లేదా Rewrites వంటివి మాత్రమే చేయండి.

#### **42. Parallel Routes?**

ఒకే పేజీలో ఒకే సమయంలో వేర్వేరు కంటెంట్ సెక్షన్లను లోడ్ చేయడానికి ఇది వాడతాము.

- **Architecture:** `@` తో ఫోల్డర్లను క్రియేట్ చేయాలి (ఉదా: `@analytics`, `@team`).
- **Advantage:** ఇవి ఒకదానిపై ఒకటి డిపెండ్ అవ్వవు. ఒకటి లోడ్ అవ్వడంలో ఆలస్యమైతే, మిగిలినవి లోడ్ అవుతాయి (Independently).

#### **43. Intercepting Routes?**

ఒక పేజీని విజిట్ చేసినప్పుడు, ఆ పేజీ కంటెంట్‌ను మోడల్‌లో (Modal) చూపించడానికి ఇది వాడతాము.

- **Syntax:** `(.)folder` (Same segment), `(..)folder` (Parent segment).
- **Why:** యూజర్ రీఫ్రెష్ చేస్తే అది ఒక Full Page లాగా వస్తుంది, క్లిక్ చేస్తే Modal లాగా వస్తుంది. ఇది Instagram, Facebook లో చూసే UI ఎక్స్‌పీరియన్స్.

#### **44. Turbopack architecture?**

ఇది Rust తో బిల్డ్ చేయబడిన Next.js యొక్క నెక్స్ట్-జెన్ బిల్డ్ టూల్.

- **Internal:** ఇది కేవలం ఫైల్ లెవల్ క్యాషింగ్ కాకుండా, **Function-level caching** చేస్తుంది. అంటే కోడ్‌లో చిన్న మార్పు చేసినా, మొత్తం రీబిల్డ్ అవ్వకుండా ఆ చిన్న భాగాన్ని మాత్రమే అప్‌డేట్ చేస్తుంది. ఇది వేగవంతమైన HMR (Hot Module Replacement) ని అందిస్తుంది.

#### **45. Bundle optimization techniques?**

- **Analysis:** `next/bundle-analyzer` వాడి ఏ ప్యాకేజ్ సైజ్ ఎక్కువగా ఉందో చూడాలి.
- **Techniques:** Barrel files ని avoid చేయడం (ఇది అనవసరమైన కోడ్‌ని ఇంపోర్ట్ చేస్తుంది), `next/dynamic` వాడి పెద్ద కాంపోనెంట్స్ ని లేజీ-లోడ్ చేయడం, మరియు **Tree Shaking** ని సపోర్ట్ చేసే లైబ్రరీలను ఎంచుకోవడం.

#### **46. Multi-region deployments?**

ప్రపంచవ్యాప్తంగా యూజర్స్ ఉన్నప్పుడు, కేవలం ఒకే రీజియన్ (ఉదా: US-East) లో ఉంటే లాటెన్సీ పెరుగుతుంది.

- **Strategy:** Vercel వంటి ప్లాట్‌ఫామ్స్ వాడి, మీ యాప్‌ని గ్లోబల్ ఎడ్జ్ నెట్‌వర్క్‌లో డిప్లాయ్ చేయాలి.
- **Data:** డేటాబేస్‌ని కూడా 'Global Database' (PlanetScale, Turso, AWS Aurora Global) కి మార్చి, రీడ్ రెప్లికాస్ (Read Replicas) ని యూజర్ కి దగ్గరగా ఉంచాలి.

#### **47. Preventing hydration mismatches?**

సర్వర్ మరియు క్లయింట్ రెండర్ చేసినప్పుడు HTML తేడా ఉంటే ఇది వస్తుంది.

- **Fix:** `useEffect` వాడి కంపోనెంట్ మౌంట్ అయిన తర్వాతే క్లయింట్-స్పెసిఫిక్ లాజిక్ (ఉదా: `window` ఆబ్జెక్ట్, `Date.now()`) రన్ చేయాలి. `suppressHydrationWarning` ని కేవలం కచ్చితంగా అవసరమైన చోట మాత్రమే వాడాలి.

#### **48. Optimizing Core Web Vitals?**

- **LCP (Largest Contentful Paint):** ఇమేజెస్ కి `priority` ఇవ్వాలి, ఫాంట్స్ ఆప్టిమైజ్ చేయాలి.
- **CLS (Cumulative Layout Shift):** ఇమేజ్ సైజెస్ (Width, Height) కచ్చితంగా ఇవ్వాలి.
- **INP (Interaction to Next Paint):** అనవసరమైన భారీ జావాస్క్రిప్ట్ ని క్లయింట్ కాంపోనెంట్స్ నుండి తొలగించాలి.

#### **49. Building a scalable SaaS with the App Router?**

- **Modular Architecture:** ఫీచర్-బేస్డ్ ఫోల్డర్ స్ట్రక్చర్ వాడాలి.
- **Server Actions:** డేటా మ్యుటేషన్స్ కి సర్వర్ యాక్షన్స్ వాడి, API రూట్స్ ని తగ్గించాలి.
- **Shared Layouts:** కామన్ లేఅవుట్స్ వాడి కోడ్ డూప్లికేషన్ తగ్గించాలి.

#### **50. Architecting for millions of users? (Million Dollar Question)**

- **Layered Caching:** CDN -> Full Route Cache -> Data Cache -> Request Memoization. (క్యాష్ ని ఎఫెక్టివ్‌గా వాడటం).
- **Database:** Read/Write splitting (రీడ్ క్వెరీస్ కోసం రీడ్ రెప్లికాస్).
- **Edge:** లాజిక్ ని సాధ్యమైనంత వరకు Edge Runtime కి తరలించడం.
- **Observability:** Sentry, LogRocket వంటి టూల్స్ వాడి రియల్ టైమ్ లో ఎర్రర్స్ మానిటర్ చేయడం.

---
