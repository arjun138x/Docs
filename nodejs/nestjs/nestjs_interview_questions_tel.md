# NestJS Interview Questions (Expert Roadmap)

Below is a comprehensive list of **NestJS interview questions only**, organized by topic, from beginner to expert.

---

## [1. Introduction to NestJS](#1-introduction-to-nestjs-1)

1. What is NestJS?
2. Why was NestJS created?
3. What are the advantages of NestJS?
4. Why choose NestJS over Express?
5. How is NestJS different from Express?
6. How is NestJS different from Fastify?
7. What are the core features of NestJS?
8. Explain the architecture of NestJS.
9. What design patterns does NestJS use?
10. What is the philosophy behind NestJS?

---

## [2. Project Structure](#2-project-structure-1)

11. Explain the default project structure.
12. What is `main.ts`?
13. What is `app.module.ts`?
14. What is `app.controller.ts`?
15. What is `app.service.ts`?
16. What is the bootstrap process?
17. How does NestJS initialize an application?
18. What happens when `NestFactory.create()` is called?
19. How do you organize a large NestJS project?
20. What is feature-based architecture?

---

## [3. Modules](#3-modules-1)

21. What is a module?
22. Why do we need modules?
23. What is the purpose of `@Module()`?
24. Explain imports.
25. Explain providers.
26. Explain exports.
27. Explain controllers.
28. What is a root module?
29. What is a feature module?
30. What is a shared module?
31. What is a global module?
32. When should you use `@Global()`?
33. What is a dynamic module?
34. When should dynamic modules be used?
35. Explain `forRoot()`.
36. Explain `forRootAsync()`.
37. Explain `forFeature()`.
38. What is module encapsulation?
39. How do modules communicate?
40. How do you avoid circular module dependencies?

---

## [4. Controllers](#4-controllers-1)

41. What is a controller?
42. What is the responsibility of a controller?
43. Explain `@Controller()`.
44. Explain `@Get()`.
45. Explain `@Post()`.
46. Explain `@Put()`.
47. Explain `@Patch()`.
48. Explain `@Delete()`.
49. Explain `@Options()`.
50. Explain `@Head()`.
51. Explain `@Param()`.
52. Explain `@Query()`.
53. Explain `@Body()`.
54. Explain `@Headers()`.
55. Explain `@Req()`.
56. Explain `@Res()`.
57. Explain `@Session()`.
58. Explain `@Ip()`.
59. Explain `@HostParam()`.
60. How do route parameters work?

---

## [5. Providers & Services](#5-providers--services-1)

61. What is a provider?
62. What is a service?
63. What makes a class injectable?
64. Explain `@Injectable()`.
65. What is dependency injection?
66. Explain inversion of control.
67. How are providers instantiated?
68. Explain provider lifecycle.
69. What are provider scopes?
70. Explain singleton scope.
71. Explain request scope.
72. Explain transient scope.
73. What are custom providers?
74. Explain `useClass`.
75. Explain `useValue`.
76. Explain `useFactory`.
77. Explain `useExisting`.
78. Explain injection tokens.
79. How does Nest resolve dependencies?
80. How does provider resolution work?

---

## [6. Dependency Injection](#6-dependency-injection-1)

81. Explain the DI container.
82. What is the IoC container?
83. How does NestJS build the dependency graph?
84. Explain constructor injection.
85. Explain property injection.
86. What happens if a dependency is missing?
87. What is `forwardRef()`?
88. Why is `forwardRef()` used?
89. Explain circular dependency.
90. How do you solve circular dependencies?

---

## [7. Middleware](#7-middleware-1)

91. What is middleware?
92. Explain middleware execution.
93. Functional middleware vs class middleware.
94. Global middleware.
95. Route middleware.
96. How do you register middleware?
97. What are common middleware use cases?
98. Can middleware access the response?
99. Middleware vs Guard.
100.  Middleware vs Interceptor.

---

## [8. Pipes](#8-pipes-1)

101. What is a pipe?
102. Why are pipes used?
103. Built-in pipes.
104. ValidationPipe.
105. ParseIntPipe.
106. ParseUUIDPipe.
107. ParseBoolPipe.
108. ParseArrayPipe.
109. ParseEnumPipe.
110. DefaultValuePipe.
111. Custom pipes.
112. Global pipes.
113. Pipe execution order.
114. Pipe lifecycle.
115. Validation vs transformation.

---

## [9. DTO](#9-dto-1)

116. What is DTO?
117. Why use DTO?
118. DTO vs Entity.
119. DTO validation.
120. Nested DTO.
121. DTO inheritance.
122. DTO composition.
123. DTO transformation.
124. DTO serialization.
125. DTO best practices.

---

## [10. Validation](#10-validation-1)

126. class-validator.
127. class-transformer.
128. Validation decorators.
129. Custom validators.
130. Nested validation.
131. Conditional validation.
132. Validation groups.
133. Global validation.
134. Sanitization.
135. ValidationPipe options.

---

## [11. Guards](#11-guards-1)

136. What is a Guard?
137. Why use Guards?
138. Guard lifecycle.
139. AuthGuard.
140. JWT Guard.
141. Roles Guard.
142. Permission Guard.
143. Multiple Guards.
144. Global Guard.
145. Guard execution order.
146. Guard vs Middleware.
147. Guard vs Interceptor.
148. Guard vs Pipe.
149. Custom Guards.
150. Can Guards modify requests?

---

## [12. Interceptors](#12-interceptors-1)

151. What is an interceptor?
152. Why use interceptors?
153. Logging interceptor.
154. Response mapping.
155. Timeout interceptor.
156. Cache interceptor.
157. Serialization interceptor.
158. Exception mapping.
159. Multiple interceptors.
160. Global interceptors.
161. Interceptor lifecycle.
162. Interceptor vs middleware.
163. Interceptor vs guard.
164. Interceptor vs filter.
165. RxJS inside interceptors.

---

## [13. Exception Filters](#13-exception-filters-1)

166. What is an Exception Filter?
167. Built-in exceptions.
168. Custom exceptions.
169. Global filters.
170. HTTP exceptions.
171. Exception handling flow.
172. Exception filter lifecycle.
173. Custom error responses.
174. Logging exceptions.
175. Filter vs interceptor.

---

## [14. Authentication](#14-authentication-1)

176. JWT Authentication.
177. Passport integration.
178. Local strategy.
179. JWT strategy.
180. Refresh token implementation.
181. OAuth integration.
182. Session authentication.
183. Cookie authentication.
184. API Key authentication.
185. Multi-factor authentication.

---

## [15. Authorization](#15-authorization-1)

186. RBAC.
187. ABAC.
188. Roles decorator.
189. Claims-based authorization.
190. Permission-based authorization.
191. Custom authorization.
192. Policy-based authorization.
193. CASL integration.
194. Resource ownership.
195. Authorization best practices.

---

## [16. Lifecycle Hooks](#16-lifecycle-hooks-1)

196. OnModuleInit.
197. OnApplicationBootstrap.
198. OnModuleDestroy.
199. BeforeApplicationShutdown.
200. OnApplicationShutdown.

---

## [17. Configuration](#17-configuration-1)

201. ConfigModule.
202. ConfigService.
203. Environment variables.
204. Validation schema.
205. Multiple configuration files.
206. Async configuration.
207. Secret management.
208. Dynamic configuration.
209. Configuration best practices.
210. Production configuration.

---

## [18. Database Integration](#18-database-integration-1)

211. TypeORM integration.
212. Prisma integration.
213. Mongoose integration.
214. Repository pattern.
215. Transactions.
216. Connection pooling.
217. Entity relationships.
218. Lazy loading.
219. Eager loading.
220. Migrations.

---

## [19. Caching](#19-caching-1)

221. CacheModule.
222. Redis cache.
223. Cache interceptors.
224. Cache invalidation.
225. TTL.
226. Distributed caching.
227. Session cache.
228. Permission cache.
229. Cache strategies.
230. Cache best practices.

---

## [20. File Upload](#20-file-upload-1)

231. Multer integration.
232. File validation.
233. Multiple uploads.
234. Streaming uploads.
235. S3 uploads.
236. Presigned URLs.
237. File interceptors.
238. Image processing.
239. Upload security.
240. File storage strategies.

---

## [21. Microservices](#21-microservices-1)

241. What are NestJS Microservices?
242. TCP transport.
243. Redis transport.
244. RabbitMQ transport.
245. Kafka transport.
246. NATS transport.
247. MQTT transport.
248. gRPC integration.
249. Message patterns.
250. Event patterns.

---

## [22. GraphQL](#22-graphql-1)

251. GraphQL module.
252. Code-first approach.
253. Schema-first approach.
254. Resolvers.
255. Queries.
256. Mutations.
257. Subscriptions.
258. DataLoader.
259. Federation.
260. GraphQL authentication.

---

## [23. WebSockets](#23-websockets-1)

261. WebSocket Gateway.
262. Socket.IO integration.
263. Rooms.
264. Namespaces.
265. Authentication.
266. Broadcasting.
267. Scaling WebSockets.
268. Gateway lifecycle.
269. Event handling.
270. WebSocket interceptors.

---

## [24. Testing](#24-testing-1)

271. Unit testing.
272. Integration testing.
273. E2E testing.
274. TestingModule.
275. Mock providers.
276. Mock repositories.
277. Jest integration.
278. Supertest.
279. Test lifecycle.
280. Testing best practices.

---

## [25. Performance](#25-performance-1)

281. Lazy modules.
282. Request scope performance.
283. Memory optimization.
284. Fastify adapter.
285. Compression.
286. Pagination.
287. Streaming responses.
288. Profiling.
289. Performance bottlenecks.
290. Optimization techniques.

---

## [26. Security](#26-security-1)

291. Helmet.
292. CORS.
293. CSRF.
294. XSS prevention.
295. Rate limiting.
296. Input sanitization.
297. Password hashing.
298. JWT security.
299. Secrets management.
300. Security best practices.

---

## [27. Advanced NestJS](#27-advanced-nestjs-1)

301. Execution Context.
302. Reflector.
303. Metadata.
304. Custom decorators.
305. Param decorators.
306. Method decorators.
307. Class decorators.
308. Property decorators.
309. Composite decorators.
310. DiscoveryService.
311. ModuleRef.
312. LazyModuleLoader.
313. Dynamic providers.
314. Async providers.
315. Request context.
316. Execution order of Middleware → Guards → Interceptors → Pipes → Controller → Service → Exception Filters.
317. Request-scoped providers.
318. Async local storage integration.
319. Monorepo support.
320. Building reusable NestJS libraries.

This collection of **320 NestJS-specific interview questions** covers virtually all topics expected in interviews, from junior through senior and architect-level roles. It also serves as a structured study roadmap, since mastering each question means you've covered the corresponding NestJS concept in depth.

---

## 1. Introduction to NestJS

### 1. What is NestJS? (NestJS అంటే ఏమిటి?)

NestJS అనేది స్కేలబుల్ (Scalable), ఎఫిషియంట్ మరియు మెయింటెనబుల్ (Easy to maintain) ఎంటర్‌ప్రైజ్-లెవెల్ బ్యాకెండ్ అప్లికేషన్స్ బిల్డ్ చేయడానికి ఉపయోగపడే ఒక **Node.js ఫ్రేమ్‌వర్క్**. ఇది పూర్తిగా **TypeScript** తో నిర్మించబడింది.

### 2. Why was NestJS created? (NestJS ని ఎందుకు క్రియేట్ చేశారు?)

Node.js లో ExpressJS లేదా Fastify లాంటి టూల్స్ ఉన్నప్పటికీ, వాటిలో ఒక నిర్దిష్టమైన **Architecture (కోడ్ రూల్స్)** ఉండదు. డెవలపర్లు తమకు నచ్చినట్టు ఫోల్డర్ స్ట్రక్చర్ రాసుకుంటారు. దీనివల్ల ప్రాజెక్ట్ పెద్దదయ్యే కొద్దీ కోడ్ మెయింటెనెన్స్ నరకంగా మారుతుంది.

- **ముఖ్య ఉద్దేశం:** Node.js ఎకోసిస్టమ్‌కు ఒక పక్కా ఆర్కిటెక్చరల్ స్ట్రక్చర్ ఇవ్వడం కోసం, యాప్స్ స్కేల్ చేయడానికి డెవలపర్లకి ఒక రెడీమేడ్ ప్లాట్‌ఫారమ్ అందించడం కోసం NestJS క్రియేట్ చేయబడింది.

### 3. What are the advantages of NestJS? (NestJS యొక్క లాభాలు ఏంటి?)

- **Out-of-the-box Architecture:** కోడ్ ఎలా రాయాలో ముందే రూల్స్ (Modules, Controllers, Services) ఉంటాయి.
- **TypeScript Support:** డిఫాల్ట్‌గా టైప్-సేఫ్టీ ఉంటుంది, బగ్స్ చాలా తగ్గుతాయి.
- **Dependency Injection (DI):** కోడ్ రీ-యూజబిలిటీ మరియు టెస్టింగ్ (Unit Testing) చాలా ఈజీ అవుతుంది.
- **Versatility:** REST API, GraphQL, WebSockets, Microservices... ఇలా దేనికైనా ఇన్‌బిల్ట్ సపోర్ట్ ఉంటుంది.

---

### 4. Why choose NestJS over Express? & 5. How is NestJS different from Express?

ఇంటర్వ్యూలలో కన్ఫ్యూజ్ చేయడానికి అడిగే ప్రశ్న ఇది. **నిజానికి NestJS అనేది Express కి ప్రత్యామ్నాయం కాదు, ఇది Express పైన నిర్మించబడిన ఒక లేయర్.**

| ఫీచర్                   | ExpressJS                                                       | NestJS                                                                |
| ----------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------- |
| **రకం**                 | ఇది ఒక మినిమలిస్ట్ **Library/Framework**.                       | ఇది ఒక అడ్వాన్స్‌డ్ **Architectural Framework**.                      |
| **ఆర్కిటెక్చర్**        | ఎలాంటి రూల్స్ లేవు (Unopinionated). డెవలపరే అంతా డిసైడ్ చేయాలి. | పక్కా రూల్స్ ఉన్నాయి (Opinionated). Angular లాంటి స్ట్రక్చర్ ఉంటుంది. |
| **డిజైన్ ప్యాటర్న్స్**  | DI (Dependency Injection) లాంటివి మాన్యువల్‌గా రాసుకోవాలి.      | DI, Singleton, Strategy ప్యాటర్న్స్ ఇన్‌బిల్ట్‌గా వస్తాయి.            |
| **ఎంటర్‌ప్రైజ్ యాప్స్** | పెద్ద ప్రాజెక్ట్స్ మేనేజ్ చేయడం కష్టం.                          | ఎంత పెద్ద ఎంటర్‌ప్రైజ్ యాప్స్ అయినా ఈజీగా స్కేల్ చేయవచ్చు.            |

---

### 6. How is NestJS different from Fastify? (Fastify కి NestJS కి తేడా ఏంటి?)

NestJS అంతర్గతంగా (Under the hood) **Express** ని వాడుకుంటుంది. కానీ మీకు అల్టిమేట్ పర్ఫార్మెన్స్ మరియు హై-స్పీడ్ కావాలి అనుకుంటే, Express స్థానంలో **Fastify** ని కాన్ఫిగర్ చేసుకోవచ్చు.

- **Fastify:** ఇది Express కంటే 2 నుండి 3 రెట్లు వేగంగా రిక్వెస్ట్‌లను ప్రాసెస్ చేయగలదు. NestJS లో `platform-fastify` ని ఒక్క లైన్ కోడ్‌తో మార్చేసి ఈ స్పీడ్‌ని మనం అందుకోవచ్చు.

### 7. What are the core features of NestJS? (ముఖ్యమైన ఫీచర్స్ ఏంటి?)

- **Modules:** యాప్ లాజిక్‌ని విడిభాగాలుగా (e.g., AuthModule, UserModule) విడగొడుతుంది.
- **Controllers:** ఇన్-కమింగ్ HTTP రిక్వెస్ట్‌లను హ్యాండిల్ చేసి రెస్పాన్స్ ఇస్తాయి.
- **Providers/Services:** బిజినెస్ లాజిక్ మరియు డేటాబేస్ ఆపరేషన్స్ ఇక్కడే జరుగుతాయి.
- **Pipes:** డేటా వాలిడేషన్ (Validation) మరియు ట్రాన్స్‌ఫార్మేషన్ కోసం.
- **Guards:** అథెంటికేషన్ మరియు పర్మిషన్స్ (Authorization) చెక్ చేయడానికి.
- **Interceptors:** రిక్వెస్ట్/రెస్పాన్స్ మధ్యలో లాజిక్ మార్చడానికి (e.g., Logging, Caching).

---

### 8. Explain the architecture of NestJS. (NestJS ఆర్కిటెక్చర్ ఎలా ఉంటుంది?)

NestJS ఆర్కిటెక్చర్ పూర్తిగా **Modular (మొడ్యులర్)** పద్ధతిలో ఉంటుంది. ప్రతి ఫీచర్ ఒక స్వతంత్ర బ్లాక్ లాగా పనిచేస్తుంది.

```
                  [ Client Request ]
                          │
                          ▼
                     [ Controller ]  (Routes & Formats)
                          │
                          ▼  (Dependency Injection)
                      [ Service ]    (Business Logic & DB Queries)
                          │
                          ▼
                  [ Database / Cache ]

```

ప్రతి అప్లికేషన్‌లో ఒక **Root Module (`AppModule`)** ఉంటుంది. మిగతా అన్ని మోడ్యూల్స్ దీనికే లింక్ అయి ఉంటాయి.

### 9. What design patterns does NestJS use? (NestJS ఏ ఏ డిజైన్ ప్యాటర్న్స్ వాడుతుంది?)

NestJS ఇంటర్నల్స్ అన్నీ సాఫ్ట్‌వేర్ డిజైన్ ప్యాటర్న్స్ తో నిండి ఉంటాయి:

- **Dependency Injection (DI) / Strategy Pattern:** క్లాస్ ఆబ్జెక్ట్స్ ని మనమే `new` కీవర్డ్ తో క్రియేట్ చేయకుండా సర్వరే ఇంజెక్ట్ చేస్తుంది.
- **Singleton Pattern:** ప్రతి సర్వీస్ యాప్ మొత్తం మీద ఒక్కసారే మెమరీలోకి లోడ్ అవుతుంది.
- **Observer Pattern:** WebSockets మరియు Microservices లో ఈవెంట్ డ్రైవెన్ కోసం వాడతారు.
- **Decorator Pattern:** `@Controller()`, `@Injectable()` లాంటి డెకరేటర్స్ ద్వారా కోడ్‌కు ఎక్స్‌ట్రా పవర్స్ ఇస్తాం.

### 10. What is the philosophy behind NestJS? (NestJS వెనుక ఉన్న ఫిలాసఫీ ఏంటి?)

NestJS ఫిలాసఫీ చాలా సింపుల్: **"డెవలపర్‌కి పూర్తి ఫ్లెక్సిబిలిటీ ఇస్తూనే, ఒక క్రమశిక్షణ గల ఆర్కిటెక్చర్‌ను అందించడం."**
Node.js లో మంచి టూల్స్ ఉన్నా స్ట్రక్చర్ లేదనే లోటును తీరుస్తూ... డెవలపర్లు, టీమ్స్ అందరూ ఒకే స్టాండర్డ్ లో కోడ్ రాసేలా చేసి, టెస్టింగ్ మరియు స్కేలింగ్‌ను సులభతరం చేయడమే NestJS యొక్క అసలైన ఫిలాసఫీ.

---

NestJS యొక్క **Project Structure మరియు Initialization (బూట్‌స్ట్రాప్)** కి సంబంధించిన ఈ ప్రశ్నలు ఇంటర్వ్యూలో మీరు కోడ్ ఫ్లోను ఎంత డీప్‌గా అర్థం చేసుకున్నారో తెలుసుకోవడానికి అడుగుతారు. వీటిని తెలుగులో సులభంగా విశ్లేషించుకుందాం.

---

## 2. Project Structure

### 1. Explain the default project structure. (డిఫాల్ట్ ప్రాజెక్ట్ స్ట్రక్చర్ ఎలా ఉంటుంది?)

NestJS CLI ద్వారా మనం కొత్త ప్రాజెక్ట్ క్రియేట్ చేసినప్పుడు (`nest new project-name`), `src` ఫోల్డర్ లోపల ఈ క్రింది 5 ముఖ్యమైన ఫైల్స్ డిఫాల్ట్‌గా వస్తాయి:

- `main.ts`: అప్లికేషన్ స్టార్ట్ అయ్యే ఎంట్రీ పాయింట్.
- `app.module.ts`: అప్లికేషన్ యొక్క రూట్ మోడ్యూల్.
- `app.controller.ts`: ఒక బేసిక్ రౌట్ (e.g., Hello World) ఉన్న కంట్రోలర్.
- `app.service.ts`: కంట్రోలర్‌కు కావలసిన బిజినెస్ లాజిక్ ఇచ్చే సర్వీస్.
- `app.controller.spec.ts`: టెస్టింగ్ కోసం వాడే ఫైల్.

---

### 2. What is main.ts?

ఇది మన అప్లికేషన్ యొక్క **ఎంట్రీ పాయింట్ (Entry Point)**. ఇక్కడి నుండే Node.js సర్వర్ రన్ అవ్వడం స్టార్ట్ అవుతుంది. ఇందులో `bootstrap()` అనే ఫంక్షన్ ఉంటుంది. దీని లోపలే మనం:

- పోర్ట్ నంబర్ డిఫైన్ చేస్తాం (`app.listen(3000)`).
- గ్లోబల్ పైప్స్, గార్డ్స్, మరియు మిడిల్‌వేర్స్ సెట్ చేస్తాం.
- CORS లేదా Swagger డాక్యుమెంటేషన్‌ను ఎనేబుల్ చేస్తాం.

### 3. What is app.module.ts?

ఇది మన అప్లికేషన్ యొక్క **Root Module**. NestJS లో ప్రతి యాప్‌కు కనీసం ఒక మోడ్యూల్ ఉండాలి. ఈ ఫైల్ లో `@Module()` డెకరేటర్ ఉంటుంది. ఇది మన యాప్‌లో ఏ ఏ కంట్రోలర్స్ ఉన్నాయి, ఏ ఏ సర్వీసెస్ (Providers) ఉన్నాయి, మరియు బయటి నుండి ఏ మోడ్యూల్స్ ఇంపోర్ట్ చేసుకుంటున్నాం అనే పూర్తి మ్యాప్‌ను NestJS కి ఇస్తుంది.

### 4. What is app.controller.ts?

ఇది ఇన్-కమింగ్ HTTP రిక్వెస్ట్‌లను (GET, POST, etc.) తీసుకునే **రౌటింగ్ లేయర్**. దీని పైన `@Controller()` డెకరేటర్ ఉంటుంది. ఇది కేవలం క్లయింట్ పంపిన రిక్వెస్ట్‌ను స్వీకరించి, దాన్ని సర్వీస్‌కు పాస్ చేసి, వచ్చే రెస్పాన్స్‌ను తిరిగి క్లయింట్‌కు పంపే బాధ్యత మాత్రమే తీసుకుంటుంది (ఇందులో బిజినెస్ లాజిక్ రాయకూడదు).

### 5. What is app.service.ts?

ఇది మన అప్లికేషన్ యొక్క **Business Logic Layer**. దీని పైన `@Injectable()` డెకరేటర్ ఉంటుంది. డేటాబేస్ క్వెరీలు రన్ చేయడం, కాల్క్యులేషన్స్ చేయడం, లేదా థర్డ్ పార్టీ APIలను హిట్ చేయడం వంటి అసలైన పనులన్నీ ఈ సర్వీస్ లోపలే జరుగుతాయి.

---

### 6. What is the bootstrap process? & 7. How does NestJS initialize an application?

**Bootstrap Process** అంటే అప్లికేషన్‌ను మెమరీలోకి లోడ్ చేసి రన్ చేసే విధానం.

1. మనం `npm run start` అనగానే, Node.js ఫస్ట్ `main.ts` లోని `bootstrap()` ఫంక్షన్‌ను రన్ చేస్తుంది.
2. అక్కడ `NestFactory.create(AppModule)` పిలవబడుతుంది.
3. NestJS వెంటనే రూట్ మోడ్యూల్ (`AppModule`) లోపలికి వెళ్లి, దానికి లింక్ అయి ఉన్న అన్ని సబ్-మోడ్యూల్స్, కంట్రోలర్స్ మరియు ప్రొవైడర్ల లిస్ట్‌ను ఒక **Dependency Graph** రూపంలో తయారు చేసుకుంటుంది.
4. ఆ గ్రాఫ్ ప్రకారం అన్ని ఆబ్జెక్ట్స్ ని క్రియేట్ చేసి (Dependency Injection పూర్తి చేసి), చివరకు సర్వర్‌ను కాన్ఫిగర్ చేసిన పోర్ట్ పైన లైవ్ చేస్తుంది.

### 8. What happens when NestFactory.create() is called?

`NestFactory.create()` జరిగినప్పుడు బ్యాక్‌గ్రౌండ్‌లో ఈ 3 ముఖ్యమైన పనులు జరుగుతాయి:

- **Application Instance Creation:** అంతర్గతంగా ఉండే HTTP సర్వర్ (Express లేదా Fastify) యొక్క ఇన్‌స్టాన్స్‌ను క్రియేట్ చేస్తుంది.
- **Module Scanning:** రూట్ మోడ్యూల్ నుండి మొదలుపెట్టి యాప్ మొత్తాన్ని స్కాన్ చేస్తుంది.
- **Dependency Resolution:** ప్రతి క్లాస్‌కు కావలసిన డిపెండెన్సీలను (ఉదాహరణకు కంట్రోలర్‌కు కావలసిన సర్వీస్‌ను) ఇన్‌స్టాన్షియేట్ చేసి, వాటిని సింగిల్‌టన్ (Singleton) ఆబ్జెక్ట్స్‌గా రిజిస్టర్ చేస్తుంది.

---

### 9. How do you organize a large NestJS project? & 10. What is feature-based architecture?

ప్రాజెక్ట్ పెద్దదవుతున్నప్పుడు కోడ్‌ను మేనేజ్ చేయడానికి **Feature-based Architecture** (ఫీచర్-బేస్డ్ ఆర్కిటెక్చర్) ఉత్తమమైన పద్ధతి.

इसमें కోడ్‌ను `controllers`, `services` అని విడివిడిగా కాకుండా... ప్రతి బిజినెస్ ఫీచర్‌కు ఒక విడిగా ఫోల్డర్ క్రియేట్ చేస్తాం. ఉదాహరణకు:

```
src/
├── auth/
│   ├── auth.module.ts
│   ├── auth.controller.ts
│   └── auth.service.ts
├── users/
│   ├── users.module.ts
│   ├── users.controller.ts
│   └── users.service.ts
├── main.ts
└── app.module.ts

```

- **లాభం:** `users` కి సంబంధించిన కోడ్ అంతా ఒకే చోట ఉంటుంది. దీనివల్ల రేపు ఏ డెవలపర్ అయినా కోడ్‌ను ఈజీగా వెతకగలడు, అప్‌డేట్ చేయగలడు. ఎంటర్‌ప్రైజ్ యాప్స్ అన్నీ ఈ ఫీచర్-బేస్డ్ పద్ధతిలోనే డిజైన్ చేయబడతాయి.

---

## 3. Modules

NestJS లో **Modules (మోడ్యూల్స్)** కి సంబంధించిన ఈ 20 ప్రశ్నలు ఇంటర్వ్యూలలో మీ ఆర్కిటెక్చరల్ డెప్త్ మరియు కోడ్ ఆర్గనైజేషన్ స్కిల్స్‌ను పట్టుకోవడానికి అడుగుతారు. వీటిని పూర్తి ప్రొడక్షన్ గైడ్ లాగా తెలుగులో క్లియర్ గా నేర్చుకుందాం.

---

### 1. What is a module? & 2. Why do we need modules?

NestJS లో **Module** అనేది ఒక నిర్దిష్ట బిజినెస్ లాజిక్‌కు సంబంధించిన కోడ్‌ను (Controllers, Services, ఎంటిటీస్) ఒక గ్రూప్‌గా కట్టే ఒక లాజికల్ బౌండరీ.

- **ఎందుకు అవసరం?:** అప్లికేషన్‌ను చిన్న చిన్న ముక్కలుగా (Modular గా) విడగొట్టడానికి ఇది ఉపయోగపడుతుంది. దీనివల్ల కోడ్ క్లీన్‌గా ఉంటుంది, మెయింటెనెన్స్ ఈజీ అవుతుంది, మరియు ఒక టీమ్‌లో మల్టిపుల్ డెవలపర్లు వేర్వేరు ఫీచర్స్ పై ఎవరికీ అడ్డురాకుండా పని చేయవచ్చు.

### 3. What is the purpose of @Module()?

`@Module()` అనేది ఒక డెకరేటర్. ఇది ఒక నార్మల్ TypeScript క్లాస్‌ను NestJS మోడ్యూల్‌గా మారుస్తుంది. ఇది ఒక మెటాడేటా ఆబ్జెక్ట్‌ను తీసుకుంటుంది, అందులో 4 ముఖ్యమైన ప్రాపర్టీస్ ఉంటాయి:

| ప్రాపర్టీ         | వివరణ                                                                              |
| ----------------- | ---------------------------------------------------------------------------------- |
| **`imports`**     | ఈ మోడ్యూల్‌కు కావలసిన ఇతర మోడ్యూల్స్ లిస్ట్ (e.g., DatabaseModule).                |
| **`controllers`** | ఈ మోడ్యూల్‌లో రన్ అవ్వాల్సిన ఇన్‌కమింగ్ HTTP రౌట్స్ (Controllers).                 |
| **`providers`**   | NestJS ఇంజెక్టర్ ద్వారా ఇన్‌స్టాన్స్ క్రియేట్ అవ్వాల్సిన సర్వీసెస్, రిపోజిటరీలు.   |
| **`exports`**     | ఈ మోడ్యూల్‌లోని ఏ సర్వీస్‌ను ఇతర మోడ్యూల్స్ వాడుకోవచ్చో చెప్పే విండో (Public API). |

---

### 4. Types of Modules (మోడ్యూల్స్ రకాలు)

- **Root Module:** అప్లికేషన్‌లో స్టార్ట్ అయ్యే మొదటి మోడ్యూల్ (`AppModule`). మిగతా అన్ని మోడ్యూల్స్ దీనితోనే కనెక్ట్ అవుతాయి.
- **Feature Module:** ఒక నిర్దిష్ట ఫీచర్‌కు సంబంధించిన మోడ్యూల్ (ఉదా: `UsersModule`, `OrdersModule`).
- **Shared Module:** ఒకసారి క్రియేట్ చేసి చాలా చోట్ల రీ-యూస్ చేసుకునే మోడ్యూల్. ఉదాహరణకు, `CacheModule` లేదా `ConfigModule` ని క్రియేట్ చేసి, దాన్ని ఎక్కడ కావాలంటే అక్కడ `imports` లో యాడ్ చేసుకుంటాం.
- **Global Module:** ఏ మోడ్యూల్ అయినా సరే ప్రతి చోటా ఇంపోర్ట్ చేసుకోకుండా యాప్ మొత్తం మీద డైరెక్ట్ గా యాక్సెస్ అవ్వాలి అనుకుంటే, దాని పైన **`@Global()`** డెకరేటర్ పెడతాం (ఉదా: `DatabaseModule`).
- _హెచ్చరిక:_ దీన్ని ఎక్కువగా వాడకూడదు, యాప్ ఆర్కిటెక్చర్ కన్ఫ్యూజ్ అవుతుంది. కేవలం కోర్/గ్లోబల్ సర్వీసెస్ కి మాత్రమే వాడాలి.

---

### 5. Dynamic Modules (డైనమిక్ మోడ్యూల్స్ - అడ్వాన్స్‌డ్)

- **What & When to use:** స్టాటిక్ మోడ్యూల్స్ ఎప్పుడూ ఒకేలా పనిచేస్తాయి. కానీ ఒక మోడ్యూల్‌కు రన్‌టైమ్‌లో కాన్ఫిగరేషన్స్ (ఉదాహరణకు: డేటాబేస్ URL, API కీలు) పంపి దాన్ని కస్టమైజ్ చేయాల్సి వచ్చినప్పుడు **Dynamic Modules** వాడుతాం.

#### Methods in Dynamic Modules:

- **`register()` / `forRoot()`:** అప్లికేషన్ స్టార్ట్ అయ్యేటప్పుడు గ్లోబల్‌గా ఒకే ఒక్కసారి కాన్ఫిగరేషన్ సెట్ చేయడానికి వాడుతాం (`ConfigModule.forRoot({ folder: './config' })`).
- **`forRootAsync()`:** ఇది మోస్ట్ ఇంపార్టెంట్ ప్రొడక్షన్ మెథడ్. కాన్ఫిగరేషన్ డేటా ఒకవేళ డేటాబేస్ నుండి లేదా `ConfigService` నుండి అసమకాలీనంగా (Asynchronously) వచ్చాక మోడ్యూల్ లోడ్ అవ్వాలి అనుకుంటే ఇది వాడుతాం.
- **`forFeature()`:** `forRoot` ద్వారా మెయిన్ కనెక్షన్ ఏర్పడ్డాక, ఒక నిర్దిష్ట ఫీచర్ మోడ్యూల్ లోపల స్పెసిఫిక్ ఎంటిటీస్ ని రిజిస్టర్ చేయడానికి వాడుతాం (`TypeOrmModule.forFeature([User])`).

---

### 6. Module Encapsulation & Communication (కమ్యూనికేషన్ రూల్స్)

- **Module Encapsulation:** NestJS లో మోడ్యూల్స్ అన్నీ బై-డిఫాల్ట్ క్లోజ్ అయి ఉంటాయి (Encapsulated). అంటే `UsersModule` లో ఒక `UsersService` ఉంటే, దాన్ని `OrdersModule` నేరుగా వాడుకోలేదు.
- **How they communicate:** `UsersModule` తన `exports` లో `UsersService` ని పెట్టాలి. అప్పుడు `OrdersModule` తన `imports` లో `UsersModule` ని యాడ్ చేసుకుని, తన కంట్రోలర్ లేదా సర్వీస్ లోపల `UsersService` ని ఇంజెక్ట్ చేసుకోవచ్చు.

---

### 7. How to avoid Circular Module Dependencies? (సర్క్యులర్ డిపెండెన్సీ సమస్య)

**Circular Dependency** అంటే `UsersModule` కి `OrdersModule` కావాలి, అదే సమయంలో `OrdersModule` కి `UsersModule` కావాలి. ఇలా రాస్తే NestJS కన్ఫ్యూజ్ అయి యాప్ క్రాష్ అవుతుంది.

```
[UsersModule] ──(ఇంపోర్ట్)──> [OrdersModule]
      ▲                             │
      └─────────(ఇంపోర్ట్)──────────┘  <== CRASH!

```

#### పరిష్కారం (**`forwardRef`** వాడటం):

రెండు మోడ్యూల్స్ లోనూ మరియు వాటి సర్వీసెస్ లోనూ `forwardRef()` అనే ఫంక్షన్ వాడి ఇంపోర్ట్ చేయాలి. దీనివల్ల NestJS రెండు మోడ్యూల్స్ పూర్తిగా లోడ్ అయ్యాక డిపెండెన్సీలను రిజాల్వ్ చేస్తుంది.

```typescript
// users.module.ts లో:
@Module({
  imports: [forwardRef(() => OrdersModule)],
})
export class UsersModule {}

// orders.module.ts లో:
@Module({
  imports: [forwardRef(() => UsersModule)],
})
export class OrdersModule {}
```

సర్వీస్ లోపల ఇంజెక్ట్ చేసేటప్పుడు కూడా `@Inject(forwardRef(() => UsersService))` అని వాడాలి.

---

## 4. Controllers

NestJS లో **Controllers (కంట్రోలర్స్)** అనేవి క్లయింట్ (Frontend) నుండి వచ్చే ఇన్-కమింగ్ HTTP రిక్వెస్ట్‌లను స్వీకరించి, వాటికి సరైన రెస్పాన్స్ ఇచ్చే **రౌటింగ్ లేయర్**.

ఇంటర్వ్యూలలో కంట్రోలర్ యొక్క రెస్పాన్సిబిలిటీస్ మరియు వివిధ డెకరేటర్స్ ఏ సందర్భంలో వాడతాం అనే విషయాలపై ఎక్కువగా ప్రశ్నలు అడుగుతారు. వాటిని పూర్తిగా ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో అర్థం చేసుకుందాం.

---

### 1. Controller & Responsibility

- **What is a Controller?:** ఇది `@Controller()` డెకరేటర్ ఉన్న ఒక సాధారణ TypeScript క్లాస్. ఇది అప్లికేషన్ యొక్క ముఖద్వారం (Entry Window) లాంటిది.
- **Responsibility (బాధ్యత):** దీని పని కేవలం **HTTP రిక్వెస్ట్‌లను స్వీకరించడం, క్లయింట్ పంపిన డేటా ఫార్మాట్ కరెక్ట్‌గా ఉందో లేదో చూడడం (Validation), ఆపై బిజినెస్ లాజిక్ కోసం దాన్ని సర్వీస్‌కు పాస్ చేయడం.** > ⚠️ **ప్రొడక్షన్ రూల్:** కంట్రోలర్ లోపల ఎప్పుడూ డేటాబేస్ క్వెరీలు లేదా హెవీ క్యాలిక్యులేషన్స్ (Business Logic) రాయకూడదు. కంట్రోలర్స్ ఎల్లప్పుడూ లీన్ (Lean/Thin) గా ఉండాలి.

---

### 2. Route & HTTP Method Decorators

- **`@Controller('users')`:** ఇది క్లాస్ లెవెల్ డెకరేటర్. బేస్ రౌట్ ని సెట్ చేస్తుంది. ఉదాహరణకు ఇక్కడ బేస్ రౌట్ `/users` అవుతుంది.
- **`@Get()`:** డేటాని రీడ్ చేయడానికి (Fetch) వాడతాం (`GET /users`).
- **`@Post()`:** కొత్త డేటాని క్రియేట్ చేయడానికి వాడతాం (`POST /users`).
- **`@Put()`:** ఒక రికార్డ్ మొత్తాన్ని పూర్తిగా మార్చడానికి (Replace) వాడతాం.
- **`@Patch()`:** ఒక రికార్డులోని కొన్ని భాగాలను మాత్రమే (Partial Update) అప్‌డేట్ చేయడానికి వాడతాం (ప్రొడక్షన్ లో `PUT` కంటే `PATCH` ఎక్కువగా వాడుతుంటారు).
- **`@Delete()`:** డేటాని డిలీట్ చేయడానికి వాడతాం (`DELETE /users/:id`).
- **`@Options()`:** సర్వర్ ఏ ఏ HTTP మెథడ్స్ ని సపోర్ట్ చేస్తుందో తెలుసుకోవడానికి (ముఖ్యంగా CORS ప్రె-ఫ్లైట్ రిక్వెస్ట్స్ లో వాడుతారు).
- **`@Head()`:** `GET` లాగే పనిచేస్తుంది, కానీ ఇది కేవలం HTTP హెడర్స్ ని మాత్రమే రిటర్న్ చేస్తుంది (Response Body ని ఇవ్వదు. ఫైల్ సైజ్ ఎంత ఉందో క్విక్ గా తెలుసుకోవడానికి ఇది వాడుతారు).

---

### 3. Request Data Decorators (డేటా పట్టుకునే టూల్స్)

క్లయింట్ పంపే రకరకాల డేటాని పట్టుకోవడానికి NestJS ఈ క్రింది డెకరేటర్స్ ని ఇస్తుంది:

- **`@Param()` (Route Parameters):** URL లో ఉండే డైనమిక్ ఐడీలను పట్టుకోవడానికి.
- _ఉదాహరణ:_ URL `/users/101` అయితే, `@Param('id') id: string` ద్వారా `101` ని పట్టుకోవచ్చు.

- **`@Query()` (Query Parameters):** URL చివర `?` తర్వాత ఉండే ఫిల్టర్స్, పేజినేషన్ డేటా పట్టుకోవడానికి.
- _ఉదాహరణ:_ `/users?page=2&limit=10` లో `@Query('page') page: number` అని వాడతాం.

- **`@Body()`:** `POST` లేదా `PATCH` రిక్వెస్ట్స్ లో క్లయింట్ పంపే JSON ఆబ్జెక్ట్‌ను పట్టుకోవడానికి వాడతాం.
- **`@Headers()`:** రిక్వెస్ట్ హెడర్స్ (ఉదా: `Authorization` టోకెన్, `X-Tenant-Id`) చదవడానికి వాడతాం.
- **`@Ip()`:** రిక్వెస్ట్ పంపిన క్లయింట్ యొక్క IP అడ్రస్‌ను నేరుగా తెలుసుకోవడానికి.
- **`@Session()`:** ఎక్స్‌ప్రెస్ సెషన్స్ వాడుతున్నప్పుడు, యూజర్ సెషన్ డేటాని యాక్సెస్ చేయడానికి.
- **`@HostParam()`:** మీ యాప్ మల్టిపుల్ హోస్ట్ నేమ్స్ (HTTP Hosts) ని హ్యాండిల్ చేస్తుంటే, ఆ హోస్ట్ పారామీటర్ ని పట్టుకోవడానికి.

---

### 4. Advanced Request & Response (`@Req()` vs `@Res()`)

- **`@Req()` (Request):** అంతర్గతంగా ఉండే లైబ్రరీ (Express/Fastify) యొక్క ఒరిజినల్ రిక్వెస్ట్ ఆబ్జెక్ట్‌ను ఇస్తుంది.
- **`@Res()` (Response):** ఒరిజినల్ రెస్పాన్స్ ఆబ్జెక్ట్‌ను ఇస్తుంది.
  > ⚠️ **ఇంటర్వ్యూ అలర్ట్:** కంట్రోలర్ లో `@Res()` ని డైరెక్ట్ గా వాడితే, NestJS యొక్క ఇన్‌బిల్ట్ ఫీచర్స్ (Interceptors & HttpCode decorators) ఆ మెథడ్ కి పనిచేయవు. మీరే మాన్యువల్‌గా `res.status(200).send()` అని రాయాల్సి వస్తుంది. కాబట్టి ప్రొడక్షన్ లో అత్యవసరమైతే తప్ప (ఉదా: ఫైల్ డౌన్‌లోడ్ లేదా కుకీస్ సెట్ చేయడం) `@Res()` ని వాడకూడదు. ఒకవేళ వాడినా `@Res({ passthrough: true })` అని వాడటం ఉత్తమం.

---

### 5. How do route parameters work? (రౌట్ పారామీటర్స్ ఎలా పనిచేస్తాయి?)

URL లో ఏ భాగమైనా డైనమిక్‌గా మారే అవకాశం ఉంటే, దాన్ని రౌట్ పారామీటర్ అంటాం. NestJS కంట్రోలర్ లో దీన్ని `:` (Colon) ద్వారా డిఫైన్ చేస్తాం.

```typescript
@Controller("products")
export class ProductsController {
  // క్లయింట్ /products/apple-laptop అని హిట్ చేస్తే, 'slug' లోకి 'apple-laptop' వస్తుంది
  @Get(":slug")
  findOne(@Param("slug") slug: string) {
    return `Fetching product with slug: ${slug}`;
  }

  // మల్టిపుల్ పారామీటర్స్ కూడా వాడవచ్చు: /products/electronics/laptops
  @Get(":category/:subcategory")
  findFiltered(
    @Param("category") cat: string,
    @Param("subcategory") subcat: string,
  ) {
    return `Category: ${cat}, Subcategory: ${subcat}`;
  }
}
```

## 5. Providers & Services

NestJS లో **Providers & Services (డిపెండెన్సీ ఇంజెక్ట్ ఇంజన్)** కి సంబంధించిన ఈ 20 ప్రశ్నలు ఇంటర్వ్యూలలో మీ ఆర్కిటెక్చరల్ డెప్త్‌ను, పర్ఫార్మెన్స్ మేనేజ్‌మెంట్‌ను మరియు టెస్టింగ్ స్కిల్స్‌ను పట్టుకోవడానికి అడుగుతారు. వీటిని ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో క్లియర్ గా విశ్లేషించుకుందాం.

---

### 1. Core Core Concepts (కోర్ కాన్సెప్ట్స్)

- **What is a Provider?:** NestJS లో దాదాపు ప్రతిదీ (Services, Repositories, Factories, Helpers) ఒక ప్రొవైడర్ కావచ్చు. ప్రొవైడర్ యొక్క ముఖ్య లక్షణం: **దీన్ని ఇంకొక క్లాస్ లోకి డిపెండెన్సీగా ఇంజెక్ట్ చేయవచ్చు.**
- **What is a Service?:** సర్వీస్ అనేది ఒక రకమైన ప్రొవైడర్. ఇందులో యాప్ యొక్క అసలైన **Business Logic** మరియు డేటాబేస్ క్వెరీలు ఉంటాయి.
- **What makes a class injectable?:** ఒక క్లాస్ పైన **`@Injectable()`** డెకరేటర్ పెట్టడం ద్వారా NestJS IoC Container కి ఆ క్లాస్ యొక్క లైఫ్ సైకిల్, డిపెండెన్సీలను మేనేజ్ చేసే పవర్స్ లభిస్తాయి.

---

### 2. Dependency Injection (DI) & Inversion of Control (IoC)

- **Inversion of Control (IoC):** సాధారణంగా ఒక క్లాస్ కి ఇంకో క్లాస్ ఆబ్జెక్ట్ కావాలంటే `const service = new MyService()` అని మాన్యువల్‌గా క్రియేట్ చేస్తాం. కానీ ఈ కంట్రోల్‌ను మనం కాకుండా, ఫ్రేమ్‌వర్క్‌కు అప్పగించడాన్నే IoC అంటారు.
- **Dependency Injection (DI):** IoC ని సాధించడానికి వాడే డిజైన్ ప్యాటర్న్ ఇది. కన్స్ట్రక్టర్ ద్వారా క్లాస్‌కు కావలసిన ఆబ్జెక్ట్‌ను NestJS రన్‌టైమ్‌లో ఆటోమేటిక్‌గా ఇంజెక్ట్ చేస్తుంది.

```typescript
@Injectable()
export class OrdersController {
  // NestJS ఆటోమేటిక్‌గా OrdersService ఇన్‌స్టాన్స్‌ను క్రియేట్ చేసి ఇక్కడ ఇంజెక్ట్ చేస్తుంది
  constructor(private readonly ordersService: OrdersService) {}
}
```

---

### 3. Provider Scopes (పర్ఫార్మెన్స్ మరియు మెమరీ మేనేజ్‌మెంట్)

ఇంటర్వ్యూలలో మోస్ట్ ఇంపార్టెంట్ టాపిక్ ఇది. NestJS లో ప్రొవైడర్లు 3 రకాల స్కోప్స్ కలిగి ఉంటారు:

1. **DEFAULT (Singleton Scope - బెస్ట్ పెర్ఫార్మెన్స్):**

- యాప్ మొత్తం మీద ఆ సర్వీస్‌కు **ఒకే ఒక్క ఇన్‌స్టాన్స్ (Single Instance)** క్రియేట్ అవుతుంది. యాప్ స్టార్ట్ అయినప్పుడు మెమరీలోకి వచ్చి, అందరికీ అదే షేర్ అవుతుంది. ప్రొడక్షన్ లో 99% దీన్నే వాడాలి.

2. **REQUEST Scope (రిక్వెస్ట్ స్కోప్):**

- వచ్చే **ప్రతి HTTP రిక్వెస్ట్‌కు ఒక కొత్త ఇన్‌స్టాన్స్** క్రియేట్ అవుతుంది, రిక్వెస్ట్ ముగియగానే మెమరీ నుండి డిలీట్ అవుతుంది.
- _ఎప్పుడు వాడతాం?:_ మల్టీ-టెనెంట్ యాప్స్ (SaaS) లో వచ్చే రిక్వెస్ట్‌ను బట్టి Tenant ID లేదా కరెంట్ యూజర్ లాగ్స్ ట్రాక్ చేయడానికి వాడతాం. (హెచ్చరిక: దీనివల్ల మెమరీ కన్సప్షన్ పెరుగుతుంది).

3. **TRANSIENT Scope (ట్రాన్సియెంట్ స్కోప్):**

- ఈ సర్వీస్‌ను ఏ ఏ క్లాస్ లో ఇంజెక్ట్ చేస్తామో, ఆ **ప్రతి క్లాస్‌కు ఒక విడి కొత్త ఇన్‌స్టాన్స్** లభిస్తుంది (కంపెనీలలో విడివిడిగా వాడే పర్సనల్ డైరీ లాగా).

---

### 4. Custom Providers (కస్టమ్ ప్రొవైడర్స్)

నార్మల్ క్లాస్ కాకుండా, టెస్టింగ్ కోసం లేదా థర్డ్ పార్టీ కనెక్షన్స్ (Redis, Stripe) ని ఇంజెక్ట్ చేయడానికి కస్టమ్ ప్రొవైడర్స్ వాడుతాం. ఇందులో 4 రకాలు ఉన్నాయి:

- **`useValue` (స్టాటిక్ వాల్యూస్ / మోకింగ్):** ఒక కాన్స్టెంట్ ఆబ్జెక్ట్ లేదా మోక్ డేటాని ఇంజెక్ట్ చేయడానికి. టెస్టింగ్ (Unit Testing) లో ఇది చాలా ఉపయోగపడుతుంది.
- **`useClass` (డైనమిక్ క్లాస్ స్విచ్చింగ్):** ఎన్విరాన్మెంట్‌ను బట్టి క్లాస్‌ను మార్చడానికి. ఉదాహరణకు ప్రొడక్షన్ లో `RealLoggerService`, డెవలప్‌మెంట్ లో `DevLoggerService` వాడాలనుకున్నప్పుడు.
- **`useFactory` (అసమకాలీన కనెక్షన్స్ - బెస్ట్ ప్రొడక్షన్ ప్రాక్టీస్):** ఒక ప్రొవైడర్ క్రియేట్ అవ్వడానికి ముందే ఏదైనా డేటాబేస్ లేదా Redis కనెక్షన్ ఓపెన్ అవ్వాలి అనుకుంటే, ఈ ఫ్యాక్టరీ ద్వారా డైనమిక్‌గా ఆబ్జెక్ట్‌ను రిటర్న్ చేయవచ్చు.
- **`useExisting` (అలియాస్ క్రియేషన్):** ముందే ఉన్న ఒక ప్రొవైడర్‌కు కొత్త పేరు (Alias) పెట్టడానికి.

---

### 5. Injection Tokens & Provider Resolution

- **Injection Tokens:** సాధారణంగా క్లాస్ పేరే టోకెన్‌గా పనిచేస్తుంది. కానీ ఇంటర్‌ఫేసెస్ (Interfaces) లేదా కస్టమ్ స్ట్రింగ్స్‌ను డిపెండెన్సీగా వాడాల్సి వచ్చినప్పుడు **`@Inject('CONFIG_TOKEN')`** లాంటి స్ట్రింగ్/సింబల్ టోకెన్స్ వాడుతాం.
- **How Nest Resolves Dependencies?:** NestJS అప్లికేషన్ బూట్ అయ్యేటప్పుడు రూట్ మోడ్యూల్ నుండి ఒక **Dependency Graph** బిల్డ్ చేస్తుంది.

1. ఫస్ట్ కంట్రోలర్ కన్స్ట్రక్టర్‌ను చూస్తుంది.
2. అందులో ఏ ప్రొవైడర్ కావాలో ఐడెంటిఫై చేస్తుంది.
3. ఆ ప్రొవైడర్ ముందే క్రియేట్ అయి ఉంటే (Singleton), డైరెక్ట్ గా ఆ ఇన్‌స్టాన్స్‌ను ఇస్తుంది. లేకపోతే, ఫస్ట్ దాన్ని క్రియేట్ చేసి, ఆపై కంట్రోలర్‌కు బైండ్ చేస్తుంది (దీన్నే Topological Sort ఆధారంగా జరిగే Provider Resolution అంటారు).

---

## 6. Dependency Injection

NestJS లో **Dependency Injection (DI) & Circular Dependency** కి సంబంధించిన ఈ 10 ప్రశ్నలు ఇంటర్వ్యూలలో మీ కోడ్ ఆర్కిటెక్చర్ నాలెడ్జ్ మరియు ట్రబుల్‌షూటింగ్ (Troubleshooting) స్కిల్స్‌ని టెస్ట్ చేయడానికి అడుగుతారు. వీటిని తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. DI Container & IoC Container (కంటైనర్ అంటే ఏమిటి?)

- **IoC (Inversion of Control) Container:** ఇది NestJS అప్లికేషన్ యొక్క బ్యాక్‌బోన్ (Framework Brain). మీ అప్లికేషన్‌లో ఉన్న అన్ని మోడ్యూల్స్, కంట్రోలర్స్, మరియు సర్వీసెస్ యొక్క సమాచారాన్ని (Metadata) ఇది తన వద్ద ఉంచుకుంటుంది.
- **DI Container:** IoC కంటైనర్ లోపల ఉండే ఒక ప్రత్యేకమైన మెకానిజం. రన్‌టైమ్‌లో ఏ క్లాస్‌కు ఏ ఆబ్జెక్ట్ కావాలో వెతికి, వాటిని క్రియేట్ చేసి, కరెక్ట్‌గా సప్లై చేసే బాధ్యత ఈ DI కంటైనర్‌ది.

### 2. How does NestJS build the dependency graph? (డిపెండెన్సీ గ్రాఫ్ ఎలా బిల్డ్ అవుతుంది?)

యాప్ స్టార్ట్ అయినప్పుడు (`NestFactory.create(AppModule)` పిలిచినప్పుడు):

1. NestJS మొదట రూట్ మోడ్యూల్ (`AppModule`) ని స్కాన్ చేస్తుంది.
2. దాని లోపల ఉన్న `imports`, `controllers`, `providers` లిస్ట్‌ను చదువుతుంది.
3. ప్రతి క్లాస్ కన్స్ట్రక్టర్‌ను పరిశీలించి, వాటి మధ్య ఉన్న లింకులను బట్టి ఒక **Topological Tree (Dependency Graph)** ని క్రియేట్ చేస్తుంది.
4. ఈ గ్రాఫ్ ద్వారా ఏ సర్వీస్ మొదట క్రియేట్ అవ్వాలి (Leaf Node), దానిపై ఏది డిపెండ్ అయి ఉందో NestJS కి ఒక స్పష్టమైన మ్యాప్ దొరుకుతుంది.

---

### 3. Constructor Injection vs Property Injection

- **Constructor Injection (డిఫాల్ట్ & బెస్ట్ ప్రాక్టీస్):**
  డిపెండెన్సీలను కన్స్ట్రక్టర్ పారామీటర్స్ ద్వారా ఇంజెక్ట్ చేసే పద్ధతి. NestJS లో 99% దీన్నే వాడతాం. ఇది టైప్-సేఫ్ మరియు టెస్టింగ్ చేయడం చాలా ఈజీ.

```typescript
constructor(private readonly usersService: UsersService) {}

```

- **Property Injection (రైర్ కేస్):**
  కన్స్ట్రక్టర్ లేకుండా నేరుగా క్లాస్ ప్రాపర్టీ పైన **`@Inject()`** వాడటం.
- _ఎప్పుడు వాడతాం?:_ ఒక బేస్ క్లాస్ (Base Class) నుండి ఇంకొక క్లాస్ ఇన్హెరిట్ (`extends`) అయినప్పుడు, కన్స్ట్రక్టర్ లో `super()` అని రాసి పారామీటర్స్ పాస్ చేయడం కష్టమైతే, ఈ ప్రాపర్టీ ఇంజెక్షన్ వాడుతుంటారు.

---

### 4. What happens if a dependency is missing? (డిపెండెన్సీ మిస్ అయితే ఏమవుతుంది?)

ఒకవేళ మీరు ఒక సర్వీస్‌ను కంట్రోలర్‌లో ఇంజెక్ట్ చేసి, కానీ ఆ సర్వీస్‌ను ఏ మోడ్యూల్ యొక్క `providers` లేదా `imports` లిస్ట్‌లో పెట్టడం మర్చిపోతే, NestJS బూట్ అవ్వదు. అది వెంటనే ఈ క్రింది అల్టిమేట్ ఎర్రర్‌ను విసిరి యాప్‌ను ఆపేస్తుంది:

> _“Nest cannot resolve dependencies of the UsersController (?). Please make sure that the argument UsersService at index [0] is available in the UsersModule context.”_

---

### 5. Circular Dependency & forwardRef() (సర్క్యులర్ డిపెండెన్సీ సమస్య)

- **Circular Dependency:** `A` అనే క్లాస్ క్రియేట్ అవ్వడానికి `B` కావాలి, అదే సమయంలో `B` క్రియేట్ అవ్వడానికి `A` కావాలి. దీనివల్ల NestJS ఒక అనంతమైన లూప్ (Infinite Loop) లో ఇరుక్కుపోయి, ఏ ఆబ్జెక్ట్‌ను ముందు క్రియేట్ చేయాలో తెలియక క్రాష్ అవుతుంది.

```
[UsersService] ──(Needs)──> [OrdersService]
       ▲                           │
       └─────────(Needs)───────────┘  <= Circular Loop!

```

- **Why & How to use `forwardRef()`:**
  ఈ సమస్యను పరిష్కరించడానికి NestJS మనకు **`forwardRef()`** (Forward Reference) అనే టూల్‌ను అందిస్తుంది. ఇది NestJS కి: _"ప్రస్తుతానికి ఈ క్లాస్ కంప్లీట్ ఇన్‌స్టాన్స్ కోసం వెతకకు, రెండు క్లాసెస్ పూర్తిగా లోడ్ అయ్యాక నిమ్మళంగా రిజాల్వ్ చెయ్"_ అని చెప్తుంది.

#### 🛠️ పరిష్కారం (కోడింగ్ ఉదాహరణ):

**Step 1: మోడ్యూల్ లెవెల్‌లో లింక్ చేయడం**

```typescript
// users.module.ts
@Module({
  imports: [forwardRef(() => OrdersModule)], // మోడ్యూల్‌ను forwardRef లో చుట్టాలి
})
export class UsersModule {}
```

**Step 2: సర్వీస్ కన్స్ట్రక్టర్ లోపల ఇంజెక్ట్ చేయడం**

```typescript
// users.service.ts
import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { OrdersService } from "../orders/orders.service";

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => OrdersService)) // @Inject టోకెన్‌తో forwardRef వాడాలి
    private readonly ordersService: OrdersService,
  ) {}
}
```

ఇదే విధంగా `orders.service.ts` మరియు `orders.module.ts` లలో కూడా పరస్పరం `forwardRef` రాస్తే సర్క్యులర్ డిపెండెన్సీ సమస్య పూర్తిగా తొలగిపోతుంది.

---

## 7. Middleware

NestJS లో **Middleware (మిడిల్‌వేర్)** కి సంబంధించిన ఈ 10 ప్రశ్నలు ఇంటర్వ్యూలలో చాలా కామన్‌గా అడుగుతుంటారు. ముఖ్యంగా Middleware కి, Guard మరియు Interceptor కి మధ్య ఉన్న సూక్ష్మమైన తేడాలను క్లియర్ గా తెలుసుకోవడం చాలా ముఖ్యం. వీటిని తెలుగులో ఇన్-డెప్త్‌గా విశ్లేషించుకుందాం.

---

### 1. What is middleware? & Execution (మిడిల్‌వేర్ అంటే ఏమిటి?)

NestJS లో **Middleware** అనేది క్లయింట్ పంపిన HTTP రిక్వెస్ట్ రౌట్ కంట్రోలర్ (`Route Handler`) కి చేరడానికి ముందే, మధ్యలో ట్రిగ్గర్ అయ్యే ఒక ఫంక్షన్.

- **Execution Flow:** రిక్వెస్ట్ రాగానే ఫస్ట్ మిడిల్‌వేర్ రన్ అవుతుంది. ఇందులో `req` (Request), `res` (Response) ఆబ్జెక్ట్స్ ఉంటాయి. ఈ ఫంక్షన్ చివరన తప్పనిసరిగా **`next()`** అనే మెథడ్‌ను పిలవాలి. అలా పిలిస్తేనే రిక్వెస్ట్ నెక్స్ట్ లేయర్ (Guard లేదా Controller) కి వెళ్తుంది, లేకపోతే రిక్వెస్ట్ అక్కడే హ్యాంగ్ అయిపోతుంది.

---

### 2. Functional Middleware vs Class-based Middleware

NestJS లో మిడిల్‌వేర్ ను రెండు రకాలుగా రాయవచ్చు:

- **Class-based Middleware:** ఒకవేళ మీ మిడిల్‌వేర్‌కు వేరే ఇతర సర్వీసెస్ డిపెండెన్సీలుగా కావాలి అనుకుంటే (Dependency Injection అవసరమైతే) ఈ పద్ధతి వాడతాం. ఇది `NestMiddleware` ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేస్తుంది.

```typescript
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[Class] Request Mode... ${req.method} ${req.url}`);
    next();
  }
}
```

- **Functional Middleware:** దీనికి ఎలాంటి డిపెండెన్సీ ఇంజెక్షన్ అవసరం లేదు, చాలా సింపుల్ లాజిక్ (ఉదాహరణకు కేవలం ఒక లైన్ లాగ్ రాయడం) అయితే ఒక నార్మల్ ఫంక్షన్ లాగా రాసేయవచ్చు.

```typescript
export function functionalLogger(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`[Function] Request Mode...`);
  next();
}
```

---

### 3. How do you register middleware? (రిజిస్ట్రేషన్ పద్ధతులు)

మిడిల్‌వేర్లను కాన్ఫిగర్ చేయడానికి రెండు మార్గాలు ఉన్నాయి:

- **Route/Module Middleware (ఒక నిర్దిష్ట రౌట్ కోసం):** మోడ్యూల్ క్లాస్ లో `NestModule` ని ఇంప్లిమెంట్ చేసి `configure()` మెథడ్ ద్వారా బైండ్ చేస్తాం.

```typescript
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("users"); // కేవలం /users రౌట్స్ కి మాత్రమే అప్లై అవుతుంది
  }
}
```

- **Global Middleware (యాప్ మొత్తానికి):** యాప్ లోని ప్రతి ఒక్క రౌట్ కి మిడిల్‌వేర్ రన్ అవ్వాలి అనుకుంటే `main.ts` లో రిజిస్టర్ చేస్తాం.

```typescript
// main.ts లో
app.use(functionalLogger);
```

---

### 4. Common Use Cases & Response Access

- **Common Use Cases:** 1. **Request Logging:** వచ్చే ప్రతి రిక్వెస్ట్ యుఆర్ఎల్, టైమ్ లాగ్ చేయడం. 2. **IP Whitelisting / Blacklisting:** కొన్ని ఐపీల నుండి వచ్చే రిక్వెస్ట్‌లను బ్లాక్ చేయడం. 3. **Body Parsing / Cookie Parsing:** క్లయింట్ పంపిన కుకీలను రీడ్ చేయడం.
- **Can middleware access the response?:** అవును, మిడిల్‌వేర్ కు `res` ఆబ్జెక్ట్ యాక్సెస్ ఉంటుంది. కానీ రెస్పాన్స్ బాడీ (Response Body) లోపల ఏ డేటా వెళ్తుందో దాన్ని మార్చలేదు. కేవలం `res.on('finish', ...)` అనే ఈవెంట్ లిజనర్ పెట్టి, రెస్పాన్స్ సక్సెస్ అయిందా లేదా ఫెయిల్ అయిందా అని ట్రాక్ చేయగలదు.

---

### 5. Architectural Comparisons (కీలకమైన పోలికలు)

ఇంటర్వ్యూలలో మిమ్మల్ని కన్ఫ్యూజ్ చేయడానికి అడిగే మోస్ట్ ఇంపార్టెంట్ ఏరియా ఇది.

#### A. Middleware vs Guard

- **Middleware:** దీనికి ఏ రౌట్ హిట్ అవుతుందో, దానికి ఏ పర్మిషన్స్ ఉన్నాయో తెలియదు (`Execution Context` యాక్సెస్ ఉండదు). ఇది కేవలం రిక్వెస్ట్ అబ్జెక్ట్ ని మోడిఫై చేయడానికి లేదా లాగ్ చేయడానికి వాడతాం.
- **Guard:** ఇది అథెంటికేషన్ మరియు ఆథరైజేషన్ (RBAC) కోసం మాత్రమే వాడతాం. దీనికి `Execution Context` యాక్సెస్ ఉంటుంది, కాబట్టి ఏ కంట్రోలర్ మెథడ్ రన్ అవుతుందో దాన్ని బట్టి యాక్సెస్ ఇవ్వాలా వద్దా (`true/false`) అని డిసైడ్ చేస్తుంది.

#### B. Middleware vs Interceptor

- **Middleware:** ఇది రిక్వెస్ట్ ప్రాసెస్ యొక్క **అత్యంత ప్రారంభ దశలో (First Step)** రన్ అవుతుంది. ఇది కంట్రోలర్ ఇచ్చే రెస్పాన్స్ డేటాని మార్చలేదు.
- **Interceptor:** ఇది కంట్రోలర్ కి ముందు మరియు కంట్రోలర్ రెస్పాన్స్ ఇచ్చేసిన తర్వాత (RxJS ఆపరేటర్స్ ద్వారా) కూడా రన్ అవుతుంది. కంట్రోలర్ నుండి వచ్చే **ఫైనల్ రెస్పాన్స్ బాడీని పూర్తిగా మార్చే (Mutate) పవర్** ఒక్క ఇంటర్‌సెప్టర్‌కు మాత్రమే ఉంటుంది.

---

## 8. Pipes

NestJS లో **Pipes (పైప్స్)** కి సంబంధించిన ఈ 15 ప్రశ్నలు ఇంటర్వ్యూలలో డేటా వాలిడేషన్, టైప్ కన్వర్షన్ మరియు సెక్యూరిటీని మీరు ఎలా హ్యాండిల్ చేస్తారో తెలుసుకోవడానికి అడుగుతారు. వీటిని పూర్తి ప్రాక్టికల్ మైండ్ సెట్‌తో తెలుగులో క్లియర్ గా విశ్లేషించుకుందాం.

---

### 1. What is a Pipe? & Why are they used?

NestJS లో **Pipe** అనేది `@Injectable()` డెకరేటర్ ఉండి, `PipeTransform` ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేసే ఒక క్లాస్. క్లయింట్ పంపిన డేటా కంట్రోలర్ రౌట్ హ్యాండ్లర్‌కు చేరడానికి ముందే పైప్స్ మధ్యలో ట్రిగ్గర్ అవుతాయి.

**ముఖ్యంగా ఇవి రెండు పనుల కోసం ఉపయోగపడతాయి:**

1. **Transformation (మార్పిడి):** క్లయింట్ పంపిన డేటాను మనకు కావలసిన ఫార్మాట్‌లోకి మార్చడం (ఉదాహరణకు: స్ట్రింగ్ '5' ని నంబర్ 5 గా మార్చడం).
2. **Validation (ధృవీకరణ):** క్లయింట్ పంపిన డేటా కరెక్ట్‌గా ఉందో లేదో చెక్ చేయడం. ఒకవేళ డేటా తప్పుగా ఉంటే, కంట్రోలర్ వరకు వెళ్లకుండా అక్కడికక్కడే `400 Bad Request` ఎర్రర్‌ను విసిరేయడం.

---

### 2. Built-in Pipes (ఇన్‌బిల్ట్ పైప్స్)

NestJS మనకు రెడీమేడ్‌గా కొన్ని పవర్‌ఫుల్ పైప్స్‌ను అందిస్తుంది:

- **`ParseIntPipe`:** క్లయింట్ పంపిన పారామీటర్ నంబరో కాదో చెక్ చేసి, దాన్ని `number` టైప్‌లోకి మారుస్తుంది.
- _ఉదా:_ `/users/:id` లో `/users/123` వస్తే `123` ఇస్తుంది. ఒకవేళ `/users/abc` అని వస్తే వెంటనే ఎర్రర్ ఇస్తుంది.

- **`ParseUUIDPipe`:** ఐడీ కరెక్ట్ `UUID` (Universally Unique Identifier) ఫార్మాట్‌లో ఉందో లేదో వెరిఫై చేస్తుంది (డేటాబేస్ సెక్యూరిటీకి ఇది చాలా ముఖ్యం).
- **`ParseBoolPipe`:** క్వెరీ పారామీటర్స్‌లో వచ్చే స్ట్రింగ్ `'true'` లేదా `'false'` ని పక్కా బూలియన్ `true/false` గా మారుస్తుంది.
- **`ParseEnumPipe`:** వచ్చే డేటా మనం డిఫైన్ చేసిన `Enum` వాల్యూస్ లోపలే ఉందో లేదో చూస్తుంది.
- **`ParseArrayPipe`:** క్లయింట్ పంపిన కామాలతో కూడిన లిస్ట్ (`1,2,3`) ని అరే (Array) గా మార్చడానికి.
- **`DefaultValuePipe`:** క్లయింట్ ఒకవేళ క్వెరీ పారామీటర్ పంపకపోతే, డిఫాల్ట్ వాల్యూ సెట్ చేయడానికి (ఉదా: పేజినేషన్ లో `page=1`).

---

### 3. The Power of `ValidationPipe` (DTO వాలిడేషన్)

ప్రొడక్షన్ అప్లికేషన్లలో అత్యధికంగా వాడేది **`ValidationPipe`**. ఇది `class-validator` మరియు `class-transformer` లైబ్రరీలపై ఆధారపడి పనిచేస్తుంది.

మనం క్రియేట్ చేసే **DTO (Data Transfer Object)** క్లాస్ లోపల డెకレーటర్స్ పెట్టి, క్లయింట్ పంపే పూర్తి JSON బాడీని ఒక్క లైన్ కోడ్‌తో వాలిడేట్ చేయవచ్చు.

```typescript
// create-user.dto.ts
import { IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail({}, { message: "సరైన ఈమెయిల్ అడ్రస్ ఇవ్వండి!" })
  email: string;

  @MinLength(6, { message: "పాస్‌వర్డ్ కనీసం 6 అక్షరాలు ఉండాలి" })
  password: string;
}
```

---

### 4. Custom Pipes & Global Pipes (రిజిస్ట్రేషన్ మరియు కస్టమైజేషన్)

- **Custom Pipes:** మనకు నచ్చిన సొంత లాజిక్ (ఉదాహరణకు: వచ్చే ప్రతి ఈమెయిల్ ఐడీని ఆటోమేటిక్‌గా లోయర్-కేస్ `lowercase` లోకి మార్చడం) కోసం కంప్లీట్ కంప్లస్టమ్ పైప్స్ రాసుకోవచ్చు.

```typescript
@Injectable()
export class LowercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (typeof value === "string") {
      return value.toLowerCase();
    }
    return value;
  }
}
```

- **Global Pipes:** యాప్‌లోని ప్రతి ఒక్క కంట్రోలర్ రౌట్ కి ఆటోమేటిక్‌గా వాలిడేషన్ జరగాలి అనుకుంటే `main.ts` లో గ్లోబల్ పైప్‌గా రిజిస్టర్ చేస్తాం.

```typescript
// main.ts లో
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true, // DTO లో లేని ఎక్స్‌ట్రా ఫీల్డ్స్ ని ఆటోమేటిక్‌గా ఫిల్టర్ (Strip) చేస్తుంది
    forbidNonWhitelisted: true, // ఎక్స్‌ట్రా ఫీల్డ్స్ పంపితే రిక్వెస్ట్ ని రిజెక్ట్ చేస్తుంది
    transform: true, // ఆటోమేటిక్‌గా టైప్స్ ని మారుస్తుంది (e.g. string to number)
  }),
);
```

---

### 5. Execution Order, Lifecycle & Key Differences

- **Pipe Lifecycle:** పైప్స్ అన్నీ రిక్వెస్ట్ స్కోప్డ్ పద్ధతిలో పనిచేస్తాయి. రిక్వెస్ట్ వచ్చినప్పుడు ఇన్‌స్టాన్స్ క్రియేట్ అయి, మెథడ్ ఎగ్జిక్యూట్ అవ్వగానే క్లోజ్ అవుతాయి (ఒకవేళ గ్లోబల్ పైప్ అయితే యాప్ ఉన్నంతవరకు సింగిల్‌టన్‌గా ఉంటుంది).
- **Pipe Execution Order:** ఒకే రౌట్ పైన మల్టిపుల్ పైప్స్ వాడితే, అవి మనం కోడ్‌లో రాసిన **ఎడమ నుండి కుడికి (Left to Right)** ఆర్డర్ లో రన్ అవుతాయి.

```typescript
@Get(':id')
findOne(@Param('id', DefaultValuePipe, ParseIntPipe) id: number) { ... }

```

- **Validation vs Transformation (ముఖ్యమైన తేడా):**
- **Validation** అనేది కేవలం చెకింగ్ ప్రాసెస్. ఇది డేటాను మార్చదు, రూల్స్ బ్రేక్ అయితే ఎర్రర్ ఇస్తుంది (`true/false` లాగా).
- **Transformation** అనేది మార్పిడి ప్రాసెస్. ఇది ఇన్-పుట్ డేటా యొక్క డేటా టైప్‌ను గాని లేదా ఫార్మాట్‌ను గాని పూర్తిగా మోడిఫై చేసి కంట్రోలర్‌కు కొత్త డేటాను అందిస్తుంది.

---

## 9. DTO

NestJS లో **DTO (Data Transfer Object)** కి సంబంధించిన ఈ 10 ప్రశ్నలు ప్రొడక్షన్-లెవెల్ సెక్యూరిటీ, డేటా వాలిడేషన్ మరియు క్లీన్ ఆర్కిటెక్చర్‌ను డిజైన్ చేయడంలో చాలా ముఖ్యమైనవి. వీటిని తెలుగులో ఇన్-డెప్త్‌గా విశ్లేషించుకుందాం.

---

### 1. What is DTO? & Why use it?

- **What is DTO?:** DTO అంటే **Data Transfer Object**. ఇది క్లయింట్ (Frontend) నుండి నెట్‌వర్క్ ద్వారా మన సర్వర్‌కు డేటా ఎలా రావాలో డిఫైన్ చేసే ఒక ఆబ్జెక్ట్ లేదా స్ట్రక్చర్. NestJS లో దీన్ని మనం సాధారణంగా TypeScript **Classes** ఉపయోగించి రాస్తాం.
- **Why use DTO?:** 1. **Security (రక్షణ):** క్లయింట్ పంపే అన్-వాంటెడ్ లేదా హానికరమైన ఫీల్డ్స్ (ఉదాహరణకు: `isAdmin: true`) మన సిస్టమ్ లోపలికి రాకుండా అడ్డుకుంటుంది.

2. **Strict Typing:** మన కంట్రోలర్‌కు ఖచ్చితంగా ఏ డేటా వస్తుందో ముందే తెలుస్తుంది కాబట్టి కోడ్ రాయడం ఈజీ అవుతుంది.
3. **Auto Validation:** `class-validator` తో కలిపి వాడినప్పుడు డేటా చెకింగ్ ఆటోమేటిక్‌గా జరిగిపోతుంది.

---

### 2. DTO vs Entity (ముఖ్యమైన తేడా)

ఇంటర్వ్యూలలో ఈ రెండింటి మధ్య తేడాను తరచూ అడుగుతుంటారు:

- **DTO:** ఇది **Network Layer** కి సంబంధించింది. క్లయింట్ నుండి సర్వర్‌కు వచ్చే డేటా ఫార్మాట్‌ను మాత్రమే ఇది చూపిస్తుంది. ఇందులో డేటాబేస్ రూల్స్ ఉండవు.
- **Entity:** ఇది **Database Layer** కి సంబంధించింది. మన డేటాబేస్‌లో టేబుల్ స్ట్రక్చర్ మరియు కాలమ్స్ ఎలా ఉండాలో (ఉదాహరణకు: TypeORM లేదా Prisma లో `@Column()`, `@PrimaryGeneratedColumn()`) ఇది డిసైడ్ చేస్తుంది.

---

### 3. Advanced DTO Patterns (Nested, Inheritance & Composition)

- **DTO Validation:** మనం మునుపటి టాపిక్‌లో చూసినట్టు, DTO క్లాస్ ప్రాపర్టీలపై `@IsString()`, `@IsEmail()` లాంటి డెకరేటర్స్ పెట్టి, గ్లోబల్ `ValidationPipe` ఎనేబుల్ చేస్తే ఆటోమేటిక్ వాలిడేషన్ జరుగుతుంది.
- **Nested DTO (ఒక DTO లో ఇంకో DTO):** కొన్నిసార్లు క్లయింట్ పంపే JSON లోపల ఇంకో ఆబ్జెక్ట్ ఉండవచ్చు (ఉదాహరణకు: యూజర్ డేటాతో పాటు అతని అడ్రస్ ఆబ్జెక్ట్). అలాంటప్పుడు `@ValidateNested()` మరియు `Type()` డెకరేటర్స్ వాడాలి.

```typescript
import { IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class AddressDto {
  @IsString()
  city: string;
}

export class CreateUserDto {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => AddressDto) // Nested ఆబ్జెక్ట్ ని కరెక్ట్ గా మ్యాప్ చేయడానికి
  address: AddressDto;
}
```

- **DTO Inheritance (వారసత్వం) & Composition:** ఒకే ఫీల్డ్స్ మళ్లీ మళ్లీ రాయకుండా NestJS మనకు `@nestjs/mapped-types` లేదా `@nestjs/swagger` నుండి కొన్ని యుటిలిటీస్ ఇస్తుంది:
- **`PartialType(CreateUserDto)`:** `CreateUserDto` లోని అన్ని ఫీల్డ్స్‌ను ఆటోమేటిక్‌గా ఆప్షనల్ (`?`) గా మారుస్తుంది (ఇది `UpdateUserDto` కి చాలా ఉపయోగపడుతుంది).
- **`PickType` / `OmitType`:** ఒక DTO నుండి కొన్ని ఫీల్డ్స్ ని మాత్రమే ఎంచుకోవడానికి (`Pick`) లేదా కొన్ని ఫీల్డ్స్ ని వదిలేయడానికి (`Omit`) వాడుతాం.

---

### 4. DTO Transformation & Serialization

- **DTO Transformation:** క్లయింట్ పంపిన డేటాను మనకు నచ్చినట్టు మార్చడం. ఉదాహరణకు, క్లయింట్ పంపే స్ట్రింగ్ ఈమెయిల్ ని ఆటోమేటిక్‌గా లోయర్-కేస్ చేయాలన్నా, లేదా పుట్టిన తేదీ స్ట్రింగ్ ని JavaScript `Date` ఆబ్జెక్ట్‌గా మార్చాలన్నా **`@Transform()`** డెకరేటర్ వాడుతాం.
- **DTO Serialization:** సర్వర్ నుండి క్లయింట్‌కు రెస్పాన్స్ పంపేటప్పుడు కొన్ని సెన్సిటివ్ ఫీల్డ్స్ (ఉదాహరణకు: `password_hash`) వెళ్లకుండా దాచడాన్ని సీరియలైజేషన్ అంటారు. దీనికోసం NestJS లో **`@Exclude()`** మరియు కంట్రోలర్ పైన **`@UseInterceptors(ClassSerializerInterceptor)`** వాడుతాం.

---

### 5. DTO Best Practices (ప్రొడక్షన్ రూల్స్)

1. **Always Use Classes, Not Interfaces:** TypeScript Interfaces అనేవి కంపైల్ అయ్యాక (JavaScript లోకి మారాక) రన్‌టైమ్‌లో కనిపించవు. కానీ Classes రన్‌టైమ్‌లో కూడా ఉంటాయి, కాబట్టి NestJS పైప్స్ వాలిడేషన్ చేయగలుగుతాయి.
2. **Enable Whitelisting:** `main.ts` లో గ్లోబల్ పైప్ కాన్ఫిగరేషన్‌లో `whitelist: true` తప్పకుండా పెట్టాలి. దీనివల్ల DTO లో లేని ఎక్స్‌ట్రా ఫీల్డ్స్ ని NestJS ఆటోమేటిక్‌గా ఫిల్టర్ చేసేస్తుంది.
3. **Keep DTOs Pure:** DTO లోపల కేవలం వాలిడేషన్ డెకరేటర్స్ మాత్రమే ఉండాలి. అందులో ఎలాంటి బిజినెస్ లాజిక్ లేదా డేటాబేస్ కనెక్షన్స్ రాయకూడదు.

---

## 10. Validation

NestJS లో **Validation (డేటా ధృవీకరణ)** అనేది అప్లికేషన్ సెక్యూరిటీకి అత్యంత కీలకమైన భాగం. హ్యాకర్లు లేదా యూజర్లు పంపే తప్పుడు డేటా వల్ల మన డేటాబేస్ క్రాష్ అవ్వకుండా ఉండటానికి NestJS లో వాలిడేషన్ ఎలా చేస్తారో ఈ 10 ప్రశ్నల ద్వారా తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. `class-validator` & `class-transformer` (బ్యాక్‌గ్రౌండ్ ఇంజన్లు)

NestJS లో వాలిడేషన్ అంతా ఈ రెండు పాపులర్ ఓపెన్-సోర్స్ లైబ్రరీలపై ఆధారపడి పనిచేస్తుంది:

- **`class-transformer`:** క్లయింట్ పంపిన సాధారణ జేసన్ ఆబ్జెక్ట్‌ను (Plain JavaScript Object) మనం రాసిన DTO క్లాస్ ఇన్‌స్టాన్స్‌గా మారుస్తుంది.
- **`class-validator`:** ఆ మారిన క్లాస్ ఇన్‌స్టాన్స్ పై మనం పెట్టిన రూల్స్ (డెకరేటర్స్) కరెక్ట్‌గా ఉన్నాయో లేదో చెక్ చేసి, తప్పులు ఉంటే ఎర్రర్స్ లిస్ట్‌ను ఇస్తుంది.

---

### 2. Validation Decorators & Nested Validation

- **Validation Decorators:** `class-validator` మనకు వందలాది రెడీమేడ్ డెకరేటర్స్ ఇస్తుంది.
- `@IsString()`, `@IsNumber()`, `@IsEmail()`, `@IsStrongPassword()`, `@IsNotEmpty()`, `@Min(1)`.

- **Nested Validation:** ఒక DTO క్లాస్ లోపల ఇంకొక ఆబ్జెక్ట్ ఉన్నప్పుడు (ఉదాహరణకు `User` లోపల `Profile` ఆబ్జెక్ట్), లోపల ఉన్న ఆబ్జెక్ట్‌ను కూడా వాలిడేట్ చేయాలి అంటే **`@ValidateNested()`** మరియు **`@Type()`** డెకరేటర్స్ వాడాలి.

---

### 3. Advanced Validation (Conditional, Groups & Custom Validators)

- **Conditional Validation (నిబంధనలతో కూడిన వాలిడేషన్):** ఒక ఫీల్డ్ ఎప్పుడు వాలిడేట్ అవ్వాలి అనేది ఇంకొక ఫీల్డ్ పై ఆధారపడి ఉన్నప్పుడు **`@ValidateIf()`** వాడుతాం.
- _ఉదాహరణ:_ యూజర్ గనుక `receiveNotifications: true` అని పంపితేనే, `email` ఫీల్డ్ తప్పనిసరి (Required) అవ్వాలి అనుకున్నప్పుడు:

```typescript
@ValidateIf(o => o.receiveNotifications === true)
@IsEmail()
email: string;

```

- **Validation Groups (గ్రూప్స్):** ఒకే DTO ని వేర్వేరు సందర్భాల్లో వేర్వేరు రూల్స్ తో వాడటానికి గ్రూప్స్ ఉపయోగపడతాయి. (ఉదాహరణకు: క్రియేట్ చేసేటప్పుడు `password` తప్పనిసరి, కానీ అప్‌డేట్ చేసేటప్పుడు అది ఆప్షనల్ అవ్వాలి అనుకున్నప్పుడు `groups: ['create']` అని సెట్ చేయవచ్చు).
- **Custom Validators (సొంత వాలిడేటర్స్):** ఇన్‌బిల్ట్ డెకరేటర్స్ సరిపోనప్పుడు మనం సొంతంగా రూల్స్ రాసుకోవచ్చు. ఉదాహరణకు, ఒక యూజర్‌నేమ్ లో స్పేసెస్ (` `) ఉండకూడదు అనే రూల్ కోసం `ValidatorConstraintInterface` ని ఉపయోగించి ఒక కస్టమ్ క్లాస్ రాసి, దాన్ని `@Validate(NoSpacesValidator)` లాగా వాడుకోవచ్చు.

---

### 4. Global Validation & ValidationPipe Options

యాప్ లోని ప్రతి కంట్రోలర్‌కు ఆటోమేటిక్‌గా వాలిడేషన్ జరగడానికి `main.ts` లో `app.useGlobalPipes(new ValidationPipe({ ... }))` రాస్తాం. ప్రొడక్షన్ లెవెల్లో ఇందులో వాడే ముఖ్యమైన **Options** ఇవే:

- **`whitelist: true` (మోస్ట్ ఇంపార్టెంట్ సెక్యూరిటీ ఆప్షన్):**
  క్లయింట్ మన DTO లో లేని ఎక్స్‌ట్రా ఫీల్డ్స్ (ఉదాహరణకు హ్యాకర్లు పంపే `role: 'admin'`, `balance: 99999`) పంపితే, వాటిని నిశ్శబ్దంగా ఫిల్టర్ చేసి తొలగిస్తుంది.
- **`forbidNonWhitelisted: true`:**
  ఎక్స్‌ట్రా ఫీల్డ్స్ వస్తే ఊరికే ఫిల్టర్ చేయడమే కాకుండా, వెంటనే రిక్వెస్ట్‌ను రిజెక్ట్ చేసి `400 Bad Request` ఎర్రర్ ఇస్తుంది.
- **`transform: true`:**
  URL రౌట్ పారామీటర్స్ లేదా క్వెరీ పారామీటర్స్ లో వచ్చే స్ట్రింగ్స్ ని ఆటోమేటిక్‌గా వాటి అసలైన టైప్స్ లోకి (ఉదాహరణకు `'5'` ని `5` నంబర్‌గా) మారుస్తుంది.

---

### 5. Sanitization (డేటా ప్రక్షాళన)

**Sanitization** అంటే కేవలం డేటా తప్పు అని ఆపడమే కాకుండా, వచ్చే డేటాను క్లీన్ చేయడం. `class-sanitizer` లేదా `class-transformer` ద్వారా ఇది జరుగుతుంది.

- **`@Trim()`:** యూజర్ తన పేరు టైప్ చేసేటప్పుడు చివరన లేదా మొదట్లో పొరపాటున ఇచ్చిన స్పేసెస్ ని (`"  john  "` -> `"john"`) ఆటోమేటిక్‌గా తీసేస్తుంది.
- **`@ToLowerCase()` / `@ToDate()`:** ఈమెయిల్ ఐడీలను ఆటోమేటిక్‌గా చిన్న అక్షరాల్లోకి మార్చడం లేదా డేట్ స్ట్రింగ్‌ను JavaScript `Date` ఆబ్జెక్ట్‌గా మార్చడం.

---

## 11. Guards

NestJS లో **Guards (గార్డ్స్)** అనేవి అప్లికేషన్ యొక్క **Security Gates** లాంటివి. ఒక రిక్వెస్ట్ కంట్రోలర్ లోపలికి వెళ్ళాలా వద్దా అని డిసైడ్ చేసే పవర్స్ వీటికి ఉంటాయి.

ఇంటర్వ్యూలలో గార్డ్స్ యొక్క లైఫ్ సైకిల్ మరియు Middleware/Interceptor లతో వీటికి ఉన్న తేడాలపై కచ్చితంగా ప్రశ్నలు అడుగుతారు. వాటిని పూర్తిగా ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో అర్థం చేసుకుందాం.

---

### 1. What is a Guard? & Why use them?

- **What is a Guard?:** ఇది `@Injectable()` డెకరేటర్ ఉండి, `CanActivate` ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేసే ఒక క్లాస్. ఇందులో `canActivate()` అనే ఒకే ఒక్క ముఖ్యమైన మెథడ్ ఉంటుంది.
- **Why use Guards?:** **Authentication** (యూజర్ ఎవరో గుర్తుపట్టడం) మరియు **Authorization** (గుర్తుపట్టిన యూజర్‌కి ఆ రౌట్ చూసే పర్మిషన్ ఉందా లేదా అని చెక్ చేయడం) పనులను హ్యాండిల్ చేయడానికి వాడుతాం.
- ఈ `canActivate()` మెథడ్ గనుక **`true`** రిటర్న్ చేస్తేనే కంట్రోలర్ రన్ అవుతుంది. ఒకవేళ **`false`** ఇస్తే, NestJS వెంటనే `403 Forbidden` ఎర్రర్‌ను విసిరి రిక్వెస్ట్‌ను అక్కడే బ్లాక్ చేస్తుంది.

---

### 2. Common Guard Types (ఉదాహరణలు)

- **AuthGuard / JWT Guard:** క్లయింట్ పంపిన HTTP హెడర్ లో `Bearer <token>` ఉందో లేదో చూసి, ఆ JWT టోకెన్ వాలిడ్ అవునో కాదో వెరిఫై చేస్తుంది. టోకెన్ కరెక్ట్ అయితే యూజర్ సమాచారాన్ని `req.user` లో సేవ్ చేస్తుంది.
- **Roles Guard / Permission Guard (RBAC):** టోకెన్ వెరిఫై అయ్యాక, ఆ యూజర్ రోల్ (ఉదా: `ADMIN`, `MANAGER`) చెక్ చేస్తుంది. కేవలం అడ్మిన్ రౌట్ అయితే, అడ్మిన్ కి మాత్రమే యాక్సెస్ ఇస్తుంది (దీనికోసం NestJS `Reflector` ని వాడుతాం).

---

### 3. Execution Order & Registration

- **Global Guard:** యాప్ లోని ప్రతి రౌట్ కి గార్డ్ రన్ అవ్వాలి అనుకుంటే `main.ts` లో `app.useGlobalGuards(new RolesGuard())` లాగా రిజిస్టర్ చేస్తాం.
- **Multiple Guards & Order:** ఒకే రౌట్ పైన మల్టిపుల్ గార్డ్స్ వాడవచ్చు. అవి **టాప్-టు-బాటమ్ (పై నుండి కిందకి)** ఆర్డర్ లో రన్ అవుతాయి.
- _ఉదాహరణ:_ మొదటి గార్డ్ `JwtAuthGuard` (యూజర్ లాగిన్ అయ్యాడా?), రెండో గార్డ్ `RolesGuard` (అతను అడ్మినా?). మొదటిది ఫెయిల్ అయితే రెండో దానికి రిక్వెస్ట్ వెళ్ళదు.

```typescript
@UseGuards(JwtAuthGuard, RolesGuard)
@Get('admin-panel')
getAdminData() {}

```

---

### 4. Guard vs Middleware vs Interceptor vs Pipe (కీలకమైన తేడాలు)

ఇంటర్వ్యూలో మిమ్మల్ని టాప్ 1% డెవలపర్‌గా నిలబెట్టే ముఖ్యమైన **Request Lifecycle** డిఫరెన్సెస్ ఇవే:

```
[Request] ──> Middleware ──> Guard ──> Interceptor (Before) ──> Pipe ──> Controller Handler
                                                                              │
[Response] <── Interceptor (After) <──────────────────────────────────────────┘

```

- **Guard vs Middleware:** Middleware కి ఏ రౌట్ హిట్ అవుతుందో, దానికి ఏ పర్మిషన్స్ ఉన్నాయో తెలియదు (`Execution Context` యాక్సెస్ ఉండదు). కానీ Guard కి `ExecutionContext` యాక్సెస్ ఉంటుంది, కాబట్టి ఏ కంట్రోలర్ మెథడ్ రన్ అవుతుందో దాన్ని బట్టి చాలా ఇంటెలిజెంట్ గా యాక్సెస్ డిసైడ్ చేయగలదు.
- **Guard vs Interceptor:** Guard కేవలం రిక్వెస్ట్‌ను అనుమతించాలా వద్దా (`true/false`) అని మాత్రమే చెప్తుంది. కంట్రోలర్ రన్ అయ్యాక వచ్చే రెస్పాన్స్ డేటాని Guard మార్చలేదు (ఆ పవర్ కేవలం Interceptor కి మాత్రమే ఉంటుంది).
- **Guard vs Pipe:** Guard సెక్యూరిటీని చూసుకుంటుంది (రన్ అవ్వకముందే ఆపుతుంది). Pipe అనేది డేటా ఫార్మాట్ మార్చడానికి (Transformation) మరియు వాలిడేషన్ చేయడానికి ఉపయోగపడుతుంది.

---

### 5. Can Guards modify requests? (గార్డ్స్ రిక్వెస్ట్‌ను మార్చవచ్చా?)

**అవును, మార్చవచ్చు మరియు ప్రొడక్షన్ లో అలా మారుస్తాం కూడా!** `JwtAuthGuard` రన్ అయినప్పుడు, అది టోకెన్‌ను డీకోడ్ చేసి, అందులో ఉన్న యూజర్ ఐడీ లేదా పేలోడ్ ఆబ్జెక్ట్‌ను నేరుగా **`request.user = decodedUser`** అని రిక్వెస్ట్ ఆబ్జెక్ట్‌కు అటాచ్ చేస్తుంది. దీనివల్ల ఆ తర్వాత రన్ అయ్యే కంట్రోలర్ లో మనం `@Req() req` లేదా కస్టమ్ `@CurrentUser()` డెకరేటర్ వాడి లాగిన్ అయిన యూజర్ ఎవరో ఈజీగా తెలుసుకోవచ్చు.

---

## 12. Interceptors

NestJS లో **Interceptors (ఇంటర్‌సెప్టర్స్)** అనేవి అత్యంత శక్తివంతమైన మరియు అడ్వాన్స్‌డ్ ఫీచర్. ఇవి **Aspect-Oriented Programming (AOP)** కాన్సెప్ట్ ఆధారంగా పనిచేస్తాయి.

సింపుల్‌గా చెప్పాలంటే... ఒక HTTP రిక్వెస్ట్ కంట్రోలర్ దగ్గరికి **వెళ్లేటప్పుడు**, మరియు కంట్రోలర్ నుండి రెస్పాన్స్ తిరిగి క్లయింట్ వైపు **వచ్చేటప్పుడు**... ఈ రెండు సమయాల్లోనూ డేటాను పట్టుకుని, మార్చే (Mutate) పవర్స్ ఒక్క ఇంటర్‌సెప్టర్‌కు మాత్రమే ఉంటాయి.

దీనికి సంబంధించిన ఇంటర్వ్యూ ప్రశ్నలను తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. What is an Interceptor? & Why use them?

- **What is an Interceptor?:** ఇది `@Injectable()` డెకరేటర్ ఉండి, `NestInterceptor` ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేసే ఒక క్లాస్. ఇందులో `intercept()` అనే మెథడ్ ఉంటుంది.
- **Why use them?:** 1. కంట్రోలర్ రన్ అవ్వడానికి ముందే రిక్వెస్ట్ లాజిక్‌ను మార్చడానికి.

2. కంట్రోలర్ ఇచ్చిన ఫైనల్ రెస్పాన్స్‌ను క్లయింట్‌కు వెళ్లేముందు పూర్తిగా రీ-ఫార్మాట్ (Transform) చేయడానికి.
3. ఒక మెథడ్ ఎంత టైమ్‌లో ఎగ్జిక్యూట్ అయిందో ట్రాక్ చేయడానికి (Logging & Metrics).
4. ఒక నిర్దిష్ట రౌట్‌కు టైమ్-అవుట్ (Timeout) లేదా క్యాషింగ్ (Caching) అప్లై చేయడానికి.

---

### 2. The Power of RxJS inside Interceptors (RxJS ప్రాముఖ్యత)

ఇంటర్వ్యూలలో కచ్చితంగా అడిగే ప్రశ్న: _"ఇంటర్‌సెప్టర్‌లో `handle()` మరియు RxJS ఎందుకు వాడతాం?"_

```typescript
// logging.interceptor.ts
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("1. [Before...] రిక్వెస్ట్ కంట్రోలర్‌కు వెళ్తోంది...");

    const now = Date.now();

    // next.handle() పిలిస్తేనే కంట్రోలర్ రన్ అవుతుంది.
    // ఆ తర్వాత వచ్చే రెస్పాన్స్‌ను RxJS 'tap' ఆపరేటర్ ద్వారా పట్టుకుంటాం.
    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `3. [After...] రెస్పాన్స్ వచ్చేసింది! పట్టిన సమయం: ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
```

`next.handle()` అనేది ఒక RxJS `Observable` ని రిటర్న్ చేస్తుంది. దీనివల్ల మనం `map`, `catchError`, `timeout` లాంటి పవర్‌ఫుల్ RxJS ఆపరేటర్స్ వాడి రెస్పాన్స్ స్ట్రీమ్‌ను కంట్రోల్ చేయవచ్చు.

---

### 3. Core Use Cases (ప్రొడక్షన్ ఉదాహరణలు)

- **Response Mapping (డేటా రీ-ఫార్మాటింగ్):** మీ కంట్రోలర్ కేవలం `{ id: 1, name: 'John' }` అని రిటర్న్ చేస్తే, దాన్ని గ్లోబల్ స్టాండర్డ్ ఫార్మాట్ లోకి మార్చడానికి:

```typescript
return next
  .handle()
  .pipe(map((data) => ({ success: true, statusCode: 200, result: data })));
```

- **Timeout Interceptor:** ఒకవేళ డేటాబేస్ స్లో కావడం వల్ల రిక్వెస్ట్ 5 సెకన్ల కంటే ఎక్కువ టైమ్ తీసుకుంటే, ఆటోమేటిక్‌గా రిక్వెస్ట్‌ను కట్ చేసి `408 Request Timeout` ఎర్రర్ ఇవ్వడానికి RxJS `timeout()` ఆపరేటర్ వాడుతాం.
- **Cache Interceptor:** ఒకే డేటా పదే పదే అడుగుతుంటే (ఉదా: ప్రొడక్ట్స్ లిస్ట్), ప్రతిసారీ DB కి వెళ్లకుండా రెస్పాన్స్‌ను Redis లేదా మెమరీలో క్యాషే చేసి, సెకండ్ టైమ్ నుండి ఇంటర్‌సెప్టర్ నుండే డైరెక్ట్ గా రెస్పాన్స్ ఇచ్చేయవచ్చు.
- **Serialization Interceptor (`@UseInterceptors(ClassSerializerInterceptor)`):** యూజర్ డేటాను రిటర్న్ చేసేటప్పుడు, పాస్‌వర్డ్ హ్యాష్ వంటి సెнсиటివ్ ఫీల్డ్స్ క్లయింట్‌కు వెళ్లకుండా దాచడానికి (Exclude చేయడానికి) వాడుతాం.
- **Exception Mapping:** కంట్రోలర్ లో ఏదైనా అన్‌-ఎక్స్‌పెక్టెడ్ ఎర్రర్ వస్తే, దాన్ని క్లయింట్‌కు చూపించకుండా ఒక కస్టమ్ మెసేజ్ లేదా లాగ్‌గా మార్చడానికి `catchError()` ఆపరేటర్ వాడుతాం.

---

### 4. Architectural Comparisons & Execution Order

- **Global & Multiple Interceptors:** మనం గార్డ్స్ లాగే వీటిని కూడా గ్లోబల్‌గా లేదా కంట్రోలర్ లెవెల్లో రిజిస్టర్ చేయవచ్చు. మల్టిపుల్ ఇంటర్‌సెప్టర్స్ ఉన్నప్పుడు:
- **Request (Before Phase):** పై నుండి కిందకి (First to Last) రన్ అవుతాయి.
- **Response (After Phase):** కింద నుండి పైకి (Last to First / Onion Architecture లాగా) రివర్స్ ఆర్డర్ లో రన్ అవుతాయి.

#### 💡 Middleware vs Guard vs Interceptor vs Filter (కీలకమైన తేడాలు)

1. **Interceptor vs Middleware:** Middleware అనేది రిక్వెస్ట్ ప్రాసెస్ ప్రారంభంలో రన్ అవుతుంది, దానికి `ExecutionContext` (ఏ రౌట్, ఏ మెథడ్ రన్ అవుతుంది అనే వివరాలు) తెలియదు. అలాగే అది కంట్రోలర్ రెస్పాన్స్‌ను మార్చలేదు. Interceptor కి పూర్తి యాక్సెస్ ఉంటుంది.
2. **Interceptor vs Guard:** Guard పని కేవలం రిక్వెస్ట్‌ను రన్ చేయాలా వద్దా (`true/false`) అని తేల్చడం మాత్రమే. అది డేటాను తాకలేదు. కానీ Interceptor డేటాను మోడిఫై చేయగలదు.
3. **Interceptor vs Exception Filter:** ఇంటర్‌సెప్టర్ సక్సెస్ మరియు ఫెయిల్యూర్ రెండింటినీ చూసుకోగలదు. కానీ **Exception Filter** అనేది కేవలం అప్లికేషన్‌లో ఎర్రర్స్ (Exceptions) వచ్చినప్పుడు మాత్రమే యాక్టివేట్ అయ్యే ఒక ప్రత్యేకమైన లేయర్.

---

## 13. Exception Filters

NestJS లో **Exception Filters (ఎక్సెప్షన్ ఫిల్టర్స్)** అనేవి మీ అప్లికేషన్ యొక్క **Error Handling Layer**. మీ కోడ్‌లో ఎక్కడైనా బగ్ వచ్చినా, లేదా డేటాబేస్ క్రాష్ అయినా... ఆ ఎర్రర్ వల్ల అప్లికేషన్ ఆగిపోకుండా, క్లయింట్‌కు ఒక ప్రాపర్ యూజర్-ఫ్రెండ్లీ రెస్పాన్స్ ఇవ్వడానికి మరియు ఆ ఎర్రర్‌ను బ్యాక్‌గ్రౌండ్‌లో లాగ్ చేయడానికి ఇవి ఉపయోగపడతాయి.

దీనికి సంబంధించిన ఇంటర్వ్యూ ప్రశ్నలను ప్రొడక్షన్ స్టాండర్డ్స్ లో తెలుగులో క్లియర్ గా అర్థం చేసుకుందాం.

---

### 1. What is an Exception Filter? & Flow (ఎక్సెప్షన్ ఫిల్టర్ అంటే ఏమిటి?)

- **What is it?:** ఇది `@Catch()` డెకరేటర్ ఉండి, `ExceptionFilter` ఇంటర్‌ఫేస్‌ను ఇంప్లిమెంట్ చేసే ఒక క్లాస్. ఇందులో `catch()` అనే ఒకే ఒక్క ముఖ్యమైన మెథడ్ ఉంటుంది.
- **Exception Handling Flow:** మీ కంట్రోలర్ లేదా సర్వీస్ లోపల ఎక్కడైనా ఒక ఎర్రర్ (Exception) వచ్చినప్పుడు, NestJS దాన్ని నేరుగా క్లయింట్‌కు పంపదు. అది రిక్వెస్ట్ లైఫ్ సైకిల్ లోని **Exception Zone** కి వెళ్తుంది. అక్కడ మన ఫిల్టర్ ఆ ఎర్రర్‌ను పట్టుకుని (Catch చేసి), దాన్ని అందమైన JSON ఫార్మాట్‌లోకి మార్చి క్లయింట్‌కు పంపుతుంది.

---

### 2. Built-in Exceptions vs Custom Exceptions

- **Built-in Exceptions:** NestJS మనకు రెడీమేడ్‌గా చాలా HTTP ఎక్సెప్షన్స్ ఇస్తుంది. వీటిని వాడుకుంటే సరైన HTTP Status Code ఆటోమేటిక్‌గా వెళ్తుంది:
- `BadRequestException` (Status 400 - తప్పుడు డేటా వస్తే)
- `UnauthorizedException` (Status 401 - టోకెన్ లేకపోతే)
- `ForbiddenException` (Status 403 - పర్మిషన్ లేకపోతే)
- `NotFoundException` (Status 404 - రికార్డ్ దొరకకపోతే)
- `InternalServerErrorException` (Status 500 - సర్వర్ లో ఏదైనా ప్రాబ్లం వస్తే)

- **Custom Exceptions:** ఒకవేళ మీ బిజినెస్ లాజిక్‌కు తగ్గట్టు సొంత ఎర్రర్ కావాలి అనుకుంటే, `HttpException` క్లాస్‌ను `extends` చేసి సొంత క్లాస్ రాసుకోవచ్చు (ఉదాహరణకు: `PaymentFailedException`).

---

### 3. Creating a Custom Global Filter (ప్రొడక్షన్ లెవెల్ కోడింగ్)

కంపెనీలలో ప్రతి ఎర్రర్ కి ఒకే స్టాండర్డ్ జేసన్ రెస్పాన్స్ (Timestamp, URL Path, Error Message) వెళ్లడానికి, మరియు ఎర్రర్‌ను లాగ్ చేయడానికి ఒక **Global Exception Filter** రాస్తాం:

```typescript
// all-exceptions.filter.ts
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch() // ఖాళీగా వదిలేస్తే యాప్ లో వచ్చే ప్రతి ఒక్క ఎర్రర్ ని ఇది క్యాచ్ చేస్తుంది
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // ఎర్రర్ HTTP ఎక్సెప్షనా లేక నార్మల్ కోడ్ బగ్గా అని చెక్ చేయడం
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : "సర్వర్ లోపల ఏదో సమస్య వచ్చింది!";

    // 📝 Logging Exception: ప్రొడక్షన్ లో ఇక్కడే విన్‌స్టన్ (Winston) లేదా పినో (Pino) లో లాగ్ చేస్తాం
    console.error(
      `[Error Log] Path: ${request.url} | Message: ${JSON.stringify(message)}`,
    );

    // 📊 Custom Error Response: క్లయింట్ కి వెళ్లే క్లీన్ ఫార్మాట్
    response.status(status).json({
      success: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error:
        typeof message === "object" ? message["message"] || message : message,
    });
  }
}
```

- **How to register globally?:** దీన్ని యాప్ మొత్తానికి అప్లై చేయడానికి `main.ts` లో ఇలా రాస్తాం:

```typescript
app.useGlobalFilters(new AllExceptionsFilter());
```

---

### 4. Exception Filter Lifecycle (లైఫ్ సైకిల్)

Exception Filter అనేది రిక్వెస్ట్ ప్రాసెస్ యొక్క **అత్యంత చివరి దశ (The Absolute Last Step)** లో మాత్రమే రన్ అవుతుంది. అప్లికేషన్‌లో అంతా సక్సెస్ ఫుల్‌గా నడిస్తే ఈ ఫిల్టర్ మెమరీలో ఉన్నా కూడా అస్సలు ట్రిగ్గర్ అవ్వదు. ఎప్పుడైతే ఏదైనా ఒక లేయర్ (Guard, Pipe, or Controller) లో `throw new Error()` జరుగుతుందో, అప్పుడు మాత్రమే ఇది మేల్కొంటుంది.

---

### 5. Exception Filter vs Interceptor (ముఖ్యమైన తేడా)

ఇంటర్వ్యూలలో కన్ఫ్యూజ్ చేసే ఏరియా: _"ఇంటర్‌సెప్టర్ లో కూడా `catchError()` వాడవచ్చు కదా, మరి ఫిల్టర్ ఎందుకు?"_

- **Interceptor (`catchError`):** ఇది కేవలం ఆ నిర్దిష్ట రౌట్ లేదా కంట్రోలర్ పరిధిలో వచ్చే ఎర్రర్స్ ని మాత్రమే పట్టుకోగలదు. పైగా ఇది ప్రైమరీగా సక్సెస్ రెస్పాన్స్ ట్రాన్స్‌ఫార్మేషన్ కోసం డిజైన్ చేయబడింది.
- **Exception Filter:** ఇది ప్రత్యేకంగా ఎర్రర్స్ కోసం మాత్రమే కేటాయించబడిన లేయర్. మీ అప్లికేషన్ మొత్తంలో ఎక్కడ, ఎలాంటి ఎర్రర్ వచ్చినా (ఇంక్లూడింగ్ గార్డ్స్ లేదా పైప్స్ ఫెయిల్యూర్స్)... వాటన్నింటినీ ఒకే సెంట్రలైజ్డ్ ప్లేస్ లో హ్యాండిల్ చేయగల కెపాసిటీ ఒక్క ఎక్సెప్షన్ ఫిల్టర్‌కు మాత్రమే ఉంటుంది.

---

## 14. Authentication

NestJS లో **Authentication (యూజర్ ఐడెంటిటీని వెరిఫై చేయడం)** అనేది ఇంటర్వ్యూలలో అత్యధికంగా ఇన్-డెప్త్ ప్రశ్నలు అడిగే మోస్ట్ ఇంపార్టెంట్ ఏరియా. కంపెనీలలో ప్రొడక్షన్-రెడీ అథెంటికేషన్‌ను ఎలా డిజైన్ చేస్తారో ఈ 10 ప్రశ్నల ద్వారా తెలుగులో క్లియర్ గా అర్థం చేసుకుందాం.

---

### 1. Passport Integration, Local Strategy & JWT Strategy

NestJS లో అథెంటికేషన్ కోసం అఫీషియల్ గైడ్‌లైన్ ప్రకారం `@nestjs/passport` మరియు `passport` లైబ్రరీలను వాడుతాం. ఇందులో **Strategies** అనే కాన్సెప్ట్ ఉంటుంది.

- **Local Strategy (యూజర్ లాగిన్ స్టేజ్):**
  యూజర్ తన `email/username` మరియు `password` పంపినప్పుడు, డేటాబేస్ లో ఉన్న రికార్డుతో వెరిఫై చేయడానికి దీన్ని వాడుతాం. పాస్‌వర్డ్ కరెక్ట్ అయితే, మన యాప్ ఒక **JWT (JSON Web Token)** ని జనరేట్ చేసి క్లయింట్‌కు ఇస్తుంది.
- **JWT Strategy (మిగతా రౌట్స్ యాక్సెస్ స్టేజ్):**
  యూజర్ లాగిన్ అయిపోయాక, ప్రొఫైల్ చూడాలన్నా లేదా ఆర్డర్ పెట్టాలన్నా ప్రతిసారీ పాస్‌వర్డ్ పంపడు; కేవలం తన JWT టోకెన్‌ను HTTP Header (`Authorization: Bearer <token>`) లో పంపుతాడు. ఈ టోకెన్ వాలిడ్ అవునో కాదో ప్రతి రిక్వెస్ట్ కి ఆటోమేటిక్‌గా వెరిఫై చేసే బాధ్యత JWT Strategy ది.

---

### 2. Refresh Token Implementation (ప్రొడక్షన్ ఆర్కిటెక్చర్)

భద్రతా కారణాల దృష్ట్యా, మెయిన్ `Access Token` ఎక్స్‌పైరీ టైమ్ చాలా తక్కువగా (ఉదా: 15 నిమిషాలు) పెడతాం. అది ఎక్స్‌పైర్ అవ్వగానే యూజర్ మళ్లీ లాగిన్ స్క్రీన్‌కి వెళ్లకుండా బ్యాక్‌గ్రౌండ్‌లోనే కొత్త టోకెన్ తెచ్చుకోవడానికి **Refresh Token** పాటర్న్ వాడుతాం.

- **పనిచేసే విధానం (Flow):**

1. యూజర్ లాగిన్ అయినప్పుడు `accessToken` (Short-lived) మరియు `refreshToken` (Long-lived, ఉదా: 7 రోజులు) రెండింటినీ ఇస్తాం.
2. ఈ Refresh Token యొక్క హాష్ (`crypto.createHash`) ను డేటాబేస్ లో యూజర్ టేబుల్ లో సేవ్ చేస్తాం.
3. Access Token ఎక్స్‌పైర్ కాగానే, ఫ్రంటెండ్ వెళ్ళి `/auth/refresh` ఎండ్‌పాయింట్‌కు Refresh Token ని పంపుతుంది.
4. మన NestJS సర్వర్ DB లోని హాష్ తో వెరిఫై చేసి, అంతా కరెక్ట్ అయితే మళ్లీ ఒక కొత్త Access Token ని ఇస్తుంది.
5. యూజర్ గనుక లాగౌట్ (Logout) అయితే, DB లోని ఆ Refresh Token ని డిలీట్ చేస్తాం. దీనివల్ల హ్యాకర్ల చేతికి ఆ టోకెన్ దొరికినా లాగౌట్ తర్వాత అది వేస్ట్ అయిపోతుంది.

---

### 3. Session, Cookie & API Key Authentication

- **Session Authentication (సాంప్రదాయ పద్ధతి):**
  ఇందులో యూజర్ డేటా సర్వర్ మెమరీలో లేదా Redis లో (Session Store) సేవ్ అవుతుంది. క్లయింట్‌కు కేవలం ఒక `Session ID` మాత్రమే వెళ్తుంది. ఇది మోనోలిత్ యాప్స్ కి ఓకే కానీ, సర్వర్లు స్కేల్ అయినప్పుడు (Distributed Systems) మేనేజ్ చేయడం కష్టం.
- **Cookie-based Authentication (బెస్ట్ సెక్యూరిటీ ప్రాక్టీస్):**
  JWT టోకెన్‌ను నార్మల్ లోకల్ స్టోరేజ్ (Local Storage) లో దాస్తే `XSS (Cross-Site Scripting)` అటాక్స్ ద్వారా హ్యాకర్లు దాన్ని దొంగిలించే ప్రమాదం ఉంది.

  > 🔒 **ప్రొడక్షన్ టిిప్:** JWT ని క్లయింట్‌కు పంపేటప్పుడు **`httpOnly: true`** మరియు **`secure: true`** కుకీస్ (Cookies) రూపంలో పంపాలి. దీనివల్ల ఫ్రంటెండ్ లోని ఏ JavaScript కోడ్ కూడా ఆ టోకెన్‌ను ముట్టుకోలేదు. బ్రౌజరే ఆటోమేటిక్‌గా ప్రతి రిక్వెస్ట్‌కు దాన్ని సర్వర్‌కు అటాచ్ చేస్తుంది.

- **API Key Authentication:**
  ఇది థర్డ్-పార్టీ డెవలపర్లు లేదా ఇతర సర్వీసెస్ (Machine-to-Machine) మన API ని వాడుకోవడానికి ఇచ్చే ఒక యూనిక్ స్ట్రింగ్ (ఉదా: Stripe API Key లాగా). దీన్ని సాధారణంగా ఒక కస్టమ్ గార్డ్ (`ApiKeyGuard`) రాసి వెరిఫై చేస్తాం.

---

### 4. OAuth Integration & Multi-Factor Authentication (MFA)

- **OAuth Integration (Social Login):**
  "Login with Google" లేదా "Login with GitHub" లాంటి ఫీచర్స్ కోసం `passport-google-oauth20` లాంటి స్ట్రాటజీలను వాడుతాం. క్లయింట్ గూగుల్ ద్వారా అథెంటికేట్ అయ్యాక, గూగుల్ ఇచ్చే ప్రొఫైల్ డేటాను (Email, Name) మనకు పంపుతుంది. దాన్ని బట్టి మన సిస్టమ్ లో అకౌంట్ క్రియేట్ లేదా లాగిన్ చేస్తాం.
- **Multi-Factor Authentication (MFA / 2FA):**
  సెక్యూరిటీని నెక్స్ట్ లెవెల్‌కి తీసుకెళ్లడానికి పాస్‌వర్డ్ కొట్టాక మొబైల్ యాప్ (Google Authenticator) లో వచ్చే 6 అంకెల OTP ని అడుగుతాం.
- NestJS లో దీనికోసం `otplib` లైబ్రరీ వాడుతాం.
- ప్రతి యూజర్‌కు ఒక యూనిక్ `MFA Secret` క్రియేట్ చేసి, దాన్ని క్యూఆర్ కోడ్ (QR Code) రూపంలో చూపిస్తాం.
- యూజర్ దాన్ని స్కాన్ చేసాక, రన్ అయ్యే టైమ్ బేస్డ్ OTP (`TOTP`) ని మన సర్వర్ లో వెరిఫై చేసి అథెంటికేషన్ కంప్లీట్ చేస్తాం.

---

## 15. Authorization

NestJS లో **Authorization (పర్మిషన్స్ మేనేజ్‌మెంట్)** అనేది యూజర్ ఎవరో తెలిసాక (Authenticated), అతనికి ఏ ఏ రిసోర్సెస్ యాక్సెస్ చేసే హక్కు ఉందో నిర్ణయించే మోస్ట్ ఇంపార్టెంట్ లేయర్. ఇంటర్వ్యూలలో సింపుల్ రోల్స్ నుండి కాంప్లెక్స్ పాలసీలను ప్రొడక్షన్ లో ఎలా ఇంప్లిమెంట్ చేస్తారు అనే దానిపై ప్రశ్నలు వస్తాయి. వీటిని తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. RBAC vs ABAC (ముఖ్యమైన తేడాలు)

- **RBAC (Role-Based Access Control):**
  యూజర్ యొక్క **పదవి/రోల్** ఆధారంగా యాక్సెస్ ఇవ్వడం. (ఉదా: `ADMIN` అయితే అన్ని రౌట్స్ యాక్సెస్ చేయొచ్చు, `USER` అయితే కేవలం రీడ్ మాత్రమే చేయొచ్చు). ఇది చాలా సింపుల్ యాప్స్ కి సరిపోతుంది.
- **ABAC (Attribute-Based Access Control):**
  ఇది చాలా అడ్వాన్స్‌డ్. కేవలం రోల్ మాత్రమే కాకుండా... యూజర్ ఆట్రిబ్యూట్స్, రిసోర్స్ ఆట్రిబ్యూట్స్ మరియు ఎన్విరాన్మెంట్ కండిషన్స్ అన్నింటినీ చెక్ చేసి యాక్సెస్ ఇస్తుంది.
- _ఉదాహరణ:_ "ఒక `EDITOR` కంపెనీ బ్లాగ్‌ను ఎడిట్ చేయవచ్చు, **కానీ అతను క్రియేట్ చేసిన బ్లాగ్‌ను మాత్రమే ఎడిట్ చేయాలి (Resource Ownership), అది కూడా ఆఫీస్ టైమింగ్స్ (9 AM - 6 PM) లోపల మాత్రమే చేయాలి**."

---

### 2. Implementing RBAC (Roles Decorator & Reflector)

NestJS లో బేసిక్ RBAC ని ఇంప్లిమెంట్ చేయడానికి మనం ఒక కస్టమ్ `@Roles()` డెకరేటర్ మరియు ఒక `RolesGuard` ని క్రియేట్ చేస్తాం. ఇందులో **`Reflector`** అనే క్లాస్ అత్యంత కీలకం. ఇది కంట్రోలర్ మెథడ్ పైన మనం సెట్ చేసిన మెటాడేటా (Metadata) ని రీడ్ చేయడానికి ఉపయోగపడుతుంది.

#### 🛠️ ప్రొడక్షన్ కోడింగ్ స్ట్రక్చర్:

**Step 1: Roles డెకరేటర్ క్రియేట్ చేయడం**

```typescript
// roles.decorator.ts
import { SetMetadata } from "@nestjs/common";
export const Roles = (...roles: string[]) => SetMetadata("roles", roles);
```

**Step 2: Roles Guard రాయడం (Using Reflector)**

```typescript
// roles.guard.ts
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {} // Reflector ని ఇంజెక్ట్ చేయాలి

  canActivate(context: ExecutionContext): boolean {
    // 1. మెథడ్ లేదా క్లాస్ లెవెల్ లో ఉన్న రోల్స్ మెటాడేటాని రీడ్ చేయడం
    const requiredRoles = this.reflector.getAllAndOverride<string[]>("roles", [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true; // ఏ రోల్స్ డిఫైన్ చేయకపోతే యాక్సెస్ ఇవ్వొచ్చు

    // 2. రిక్వెస్ట్ నుండి కరెంట్ యూజర్ రోల్ పట్టుకోవడం (AuthGuard నుండి వస్తుంది)
    const { user } = context.switchToHttp().getRequest();

    // 3. యూజర్ రోల్ కి పర్మిషన్ ఉందో లేదో చెక్ చేయడం
    return requiredRoles.includes(user.role);
  }
}
```

**Step 3: కంట్రోలర్ లో వాడటం**

```typescript
@Controller("products")
@UseGuards(JwtAuthGuard, RolesGuard)
export class ProductsController {
  @Post()
  @Roles("ADMIN", "MANAGER") // కేవలం వీరు మాత్రమే ప్రొడక్ట్ క్రియేట్ చేయగలరు
  create() {
    return "Product Created";
  }
}
```

---

### 3. Claims-based & Permission-based Authorization

- **Permission-based (పర్మిషన్స్):** ప్రాజెక్ట్ పెద్దదవుతున్నప్పుడు కేవలం `ADMIN` లాంటి రోల్స్ సరిపోవు. ఎందుకంటే ఇద్దరు అడ్మిన్స్ కి వేర్వేరు పర్మిషన్స్ ఉండొచ్చు. అందుకని మనం రోల్స్ కి బదులు పక్కా పర్మిషన్ స్ట్రింగ్స్ వాడుతాం (ఉదా: `users:create`, `products:delete`).
- **Claims-based:** యూజర్ యొక్క టోకెన్ (JWT) లోపలే అతని పర్మిషన్స్ లేదా అదనపు రైట్స్ (Claims) ని ముందే పంపించేయడం. గార్డ్ నేరుగా DB కి వెళ్లకుండా టోకెన్ లో ఉన్న క్లెయిమ్స్ చూసి డిసైడ్ చేస్తుంది.

---

### 4. Advanced Authorization with CASL (పాలసీ బేస్డ్ ఆర్కిటెక్చర్)

యాప్‌లో కాంప్లెక్స్ బిజినెస్ రూల్స్ మరియు **Resource Ownership** (నా డేటాని నేను మాత్రమే డిలీట్ చేసుకోవాలి, పక్కవాడిది ముట్టుకోకూడదు) లాంటివి హ్యాండిల్ చేయడానికి NestJS లో **`@casl/ability`** అనే పాపులర్ లైబ్రరీని ఇంటిగ్రేట్ చేస్తాం.

CASL లో మనం రూల్స్ ని ఈ క్రింది విధంగా డిఫైన్ చేస్తాం:

```typescript
// casl-ability.factory.ts లో రూల్స్ డిఫైన్ చేయడం
const { can, cannot, build } = new AbilityBuilder<
  PureAbility<[Action, Subjects]>
>(RequiredRule);

if (user.isAdmin) {
  can(Action.Manage, "all"); // అడ్మిన్ కి అన్ని పవర్స్
} else {
  can(Action.Read, Article);
  // Resource Ownership Rule: యూజర్ ఐడీ మరియు ఆర్టికల్ లోని authorId మ్యాచ్ అయితేనే UPDATE పర్మిషన్ ఇవ్వడం
  can(Action.Update, Article, { authorId: user.id });
}
```

---

### 5. Authorization Best Practices (ప్రొడక్షన్ రూల్స్)

1. **Never Trust the Client:** యూజర్ ఐడీని ఫ్రంటెండ్ నుండి వచ్చే బాడీలో నమ్మి అప్‌డేట్ చేయకూడదు. ఎల్లప్పుడూ JWT టోకెన్ డీకోడ్ చేయగా వచ్చిన `req.user.id` ని మాత్రమే రిసోర్స్ ఓనర్‌షిప్ చెకింగ్ కోసం వాడాలి.
2. **Fail-Safe Defaults (Deny by Default):** మీ గార్డ్స్ లో ఏదైనా కన్ఫ్యూజన్ లేదా ఎర్రర్ వస్తే బై-డిఫాల్ట్ యాక్సెస్ ని రిజెక్ట్ చేయాలి (`return false`), అంతే కానీ పొరపాటున కూడా యాక్సెస్ ఇవ్వకూడదు.
3. **Cache Permissions:** పర్మిషన్స్ చెక్ చేయడానికి ప్రతి రిక్వెస్ట్ కి డేటాబేస్ హిట్ చేయడం వల్ల పర్ఫార్మెన్స్ తగ్గుతుంది. కాబట్టి యూజర్ పర్మిషన్స్ ని **Redis** లో క్యాషే చేయడం లేదా JWT క్లెయిమ్స్ లోనే పంపడం ఉత్తమం.

---

## 16. Lifecycle Hooks

NestJS లో **Lifecycle Hooks (లైఫ్ సైకిల్ హుక్స్)** అనేవి అప్లికేషన్ స్టార్ట్ అయ్యేటప్పుడు (Initialization) మరియు క్లోజ్ అయ్యేటప్పుడు (Shutdown) బ్యాక్‌గ్రౌండ్‌లో జరిగే కొన్ని ప్రాసెస్ లేదా ఈవెంట్స్.

కంపెనీలలో డేటాబేస్ కనెక్షన్స్ ఓపెన్ చేయడం, Redis క్లయింట్‌ను స్టార్ట్ చేయడం, లేదా సర్వర్ క్లోజ్ అయ్యేటప్పుడు మెమరీ లీక్స్ లేకుండా కనెక్షన్స్ క్లీన్ చేయడం వంటి పనుల కోసం ఈ హుక్స్ వాడుతాం. వీటిని పూర్తిగా ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో అర్థం చేసుకుందాం.

---

### 1. Initialization Hooks (యాప్ స్టార్ట్ అయ్యేటప్పుడు)

అప్లికేషన్ బూట్ అయ్యేటప్పుడు ఈ హుక్స్ ఒక పద్ధతి ప్రకారం రన్ అవుతాయి.

- **`OnModuleInit`:**
- **ఎప్పుడు రన్ అవుతుంది?:** NestJS తన డిపెండెన్సీ గ్రాఫ్ ప్రకారం అన్ని మోడ్యూల్స్, కంట్రోలర్స్, మరియు ప్రొవైడర్లను ఇన్‌స్టాన్స్ క్రియేట్ చేసి రిజాల్వ్ చేసిన వెంటనే ఇది రన్ అవుతుంది. అయితే, ఇంకా సర్వర్ నెట్‌వర్క్ పోర్ట్ (ఉదా: 3000) పైన కనెక్షన్స్ తీసుకోవడం స్టార్ట్ చేయదు.
- **Use Case:** ఏదైనా లోకల్ కాన్ఫిగరేషన్ చెక్ చేయడం, లేదా థర్డ్ పార్టీ API కి కనెక్ట్ అవ్వడం.

```typescript
@Injectable()
export class DatabaseService implements OnModuleInit {
  async onModuleInit() {
    console.log(
      "మోడ్యూల్స్ అన్నీ రెడీ అయ్యాయి. డేటాబేస్ కనెక్షన్ ఇనిషియలైజ్ చేస్తున్నాను...",
    );
  }
}
```

- **`OnApplicationBootstrap`:**
- **ఎప్పుడు రన్ అవుతుంది?:** అన్ని మోడ్యూల్స్ లోని `OnModuleInit` లు సక్సెస్ ఫుల్‌గా పూర్తయ్యాక, HTTP సర్వర్ లైవ్ అవ్వడానికి **సరిగ్గా ముందు** ఇది రన్ అవుతుంది.
- **Use Case:** సీడింగ్ (Database Seeding - యాప్ స్టార్ట్ అవ్వగానే డిఫాల్ట్ అడ్మిన్ అకౌంట్ క్రియేట్ చేయడం), లేదా క్యూస్ (Queue Consumers) ని స్టార్ట్ చేయడం.

---

### 2. Shutdown Hooks (యాప్ క్లోజ్ అయ్యేటప్పుడు)

యాప్ స్టాప్ అయినప్పుడు (ఉదాహరణకు: `Ctrl + C` కొట్టినప్పుడు లేదా ప్రొడక్షన్ లో PM2/Docker కంటైనర్ స్టాప్ చేసినప్పుడు) మెమరీ లీక్స్ రాకుండా క్లీన్ అప్ ప్రాసెస్ చేయడానికి ఈ హుక్స్ ఉపయోగపడతాయి.

> ⚠️ **ఇంటర్వ్యూ అలర్ట్:** షట్‌డౌన్ హుక్స్ బై-డిఫాల్ట్ పని చేయవు! వీటిని వాడాలి అంటే `main.ts` లో తప్పనిసరిగా **`app.enableShutdownHooks()`** ని ఎనేబుల్ చేయాలి.

- **`OnModuleDestroy`:**
- **ఎప్పుడు రన్ అవుతుంది?:** యాప్ క్లోజ్ అవ్వడం స్టార్ట్ అవ్వగానే, ఫస్ట్ ఈ హుక్ ట్రిగ్గర్ అవుతుంది.
- **Use Case:** ఈ మోడ్యూల్ కి సంబంధించిన ఇన్-మెమరీ టైమర్స్ (Intervals) లేదా అబ్జర్వబుల్స్ ని అన్-సబ్‌స్క్రైబ్ చేయడం.

- **`BeforeApplicationShutdown`:**
- **ఎప్పుడు రన్ అవుతుంది?:** `OnModuleDestroy` అయిపోయాక, కానీ అన్ని కనెక్షన్స్ పూర్తిగా క్లోజ్ అవ్వడానికి ముందు రన్ అవుతుంది. దీనికి `signal` (ఉదా: `SIGTERM`) పారామీటర్ కూడా వస్తుంది.
- **Use Case:** వచ్చే కొత్త రిక్వెస్ట్‌లను ఆపేసి (Graceful Shutdown), ఆల్రెడీ లైన్ లో ఉన్న పాత రిక్వెస్ట్‌లు పూర్తి అయ్యే వరకు సర్వర్‌ను కాసేపు హోల్డ్ చేయడం.

- **`OnApplicationShutdown`:**
- **ఎప్పుడు రన్ అవుతుంది?:** ఇది **అత్యంత చివరి స్టెప్**. అన్ని కనెక్షన్స్ క్లోజ్ అయిపోయి, యాప్ పూర్తిగా మెమరీ నుండి డిలీట్ అయ్యే ముందు రన్ అవుతుంది.
- **Use Case:** డేటాబేస్ కనెక్షన్స్ (`db.close()`) లేదా Redis క్లయింట్‌ను క్లీన్ గా డిస్‌కనెక్ట్ చేయడం.

---

### 3. Complete Lifecycle Order (మొత్తం ఆర్డర్)

ఇంటర్వ్యూలలో ఈ సీక్వెన్స్ అడిగే అవకాశం ఉంది:

```
[STARTING PHASE]
1. AppModule Scanned & Graph Built
2. OnModuleInit (ప్రతి మోడ్యూల్ లో)
3. OnApplicationBootstrap
4. HTTP Server Listens (యాప్ లైవ్ అవుతుంది)

[SHUTDOWN PHASE]
1. app.close() or Process Signal (SIGTERM)
2. OnModuleDestroy
3. BeforeApplicationShutdown
4. Connections Closed (HTTP server stops accepting)
5. OnApplicationShutdown
6. Process Exits

```

## ఈ లైఫ్ సైకిల్ హుక్స్ ప్రొడక్షన్ లో **Graceful Shutdown** (యాప్ సడన్‌గా ఆగిపోకుండా క్లీన్‌గా క్లోజ్ అవ్వడం) కి చాలా ముఖ్యం.

## 17. Configuration

NestJS లో **Configuration (కాన్ఫిగరేషన్ మేనేజ్‌మెంట్)** అనేది ప్రొడక్షన్-లెవెల్ అప్లికేషన్ బిల్డ్ చేయడానికి అత్యంత ముఖ్యమైన భాగం. మన డేటాబేస్ పాస్‌వర్డ్‌లు, API కీలు మరియు సీక్రెట్స్ లాంటి సెన్సిటివ్ డేటాను కోడ్‌లో పెట్టకుండా, ఎన్విరాన్మెంట్ వేరియబుల్స్ (`.env` files) ద్వారా ఎలా సేఫ్ గా మేనేజ్ చేయాలో ఈ 10 ప్రశ్నల ద్వారా తెలుగులో ఇన్-డెప్త్‌గా నేర్చుకుందాం.

---

### 1. `ConfigModule` & `ConfigService` (బేసిక్ సెటప్)

NestJS లో కాన్ఫిగరేషన్స్ హ్యాండిల్ చేయడానికి `@nestjs/config` అనే అఫీషియల్ ప్యాకేజీని వాడుతాం.

- **`ConfigModule`:** ఇది `.env` ఫైల్‌ని రీడ్ చేసి, అందులో ఉన్న వేరియబుల్స్ అన్నింటినీ Node.js యొక్క `process.env` లోకి లోడ్ చేస్తుంది. సాధారణంగా దీన్ని `AppModule` లో గ్లోబల్‌గా ఇంపోర్ట్ చేస్తాం.
- **`ConfigService`:** లోడ్ అయిన ఎన్విరాన్మెంట్ వేరియబుల్స్ ని మన సర్వీసెస్ లేదా కంట్రోలర్స్ లోపల ఇంజెక్ట్ చేసుకుని, టైప్-సేఫ్‌గా వాడుకోవడానికి ఇది ఉపయోగపడుతుంది.

```typescript
// users.service.ts లో వాడే విధానం
constructor(private configService: ConfigService) {
  const dbUser = this.configService.get<string>('DATABASE_USER');
}

```

---

### 2. Validation Schema (జోడ్ / జాయ్ తో సెక్యూరిటీ)

ప్రొడక్షన్ యాప్స్ లో `.env` ఫైల్ లో డెవలపర్లు ఎవరైనా పొరపాటున ముఖ్యమైన వేరియబుల్ (ఉదాహరణకు: `JWT_SECRET` లేదా `PORT`) రాయడం మర్చిపోతే, యాప్ రన్ అయ్యాక ఎక్కడో ఒకచోట క్రాష్ అవుతుంది.

> 🔒 **ప్రొడクション రూల్:** యాప్ స్టార్ట్ అయ్యేటప్పుడే `.env` లోని డేటా కరెక్ట్‌గా ఉందో లేదో వెరిఫై చేయడానికి **Joi** లేదా **Zod** తో ఒక **Validation Schema** క్రియేట్ చేయాలి. ఒకవేళ ఏ వేరియబుల్ అయినా మిస్ అయితే, యాప్ అస్సలు బూట్ అవ్వకుండా ముందే ఆగిపోతుంది.

```typescript
// app.module.ts
import * as Joi from "joi";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid("development", "production", "test")
          .default("development"),
        PORT: Joi.number().default(3000),
        JWT_SECRET: Joi.string().required(), // ఇది లేకపోతే యాప్ స్టార్ట్ అవ్వదు
      }),
    }),
  ],
})
export class AppModule {}
```

---

### 3. Multiple Configuration Files (కస్టమ్ నేమింగ్ అండ్ నెస్టెడ్ కాన్ఫిగ్స్)

ప్రాజెక్ట్ పెద్దదవుతున్నప్పుడు అన్ని వేరియబుల్స్ ని `configService.get('DB_HOST')` అని కాకుండా, వాటిని గ్రూప్స్ గా విభజించి (e.g., database, jwt, aws) రాయడం మంచి పద్ధతి.

```typescript
// config/database.config.ts
import { registerAs } from "@nestjs/config";

export default registerAs("database", () => ({
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
}));
```

దీన్ని మోడ్యూల్ లో లోడ్ చేసాక, `this.configService.get('database.host')` అని చాలా క్లీన్ గా వాడుకోవచ్చు.

---

### 4. Async Configuration (`forRootAsync` ప్రాముఖ్యత)

ఇది ఇంటర్వ్యూలలో కచ్చితంగా అడిగే మోస్ట్ ఇంపార్టెంట్ ఏరియా. డేటాబేస్ మోడ్యూల్స్ (TypeORM, Mongoose) లేదా Redis మోడ్యూల్స్ కి కనెక్షన్ ఇచ్చేటప్పుడు... వాటికి కావలసిన హోస్ట్, పాస్‌వర్డ్ వివరాలు `ConfigService` నుండి వచ్చేవరకు ఆగాల్సి ఉంటుంది. అందుకోసం మనం **`forRootAsync()`** వాడుతాం.

```typescript
// typeorm ఇంపోర్ట్ చేసేటప్పుడు async పద్ధతి
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: "postgres",
    host: configService.get<string>("database.host"),
    // ... ఇతర కాన్ఫిగరేషన్స్
  }),
});
```

---

### 5. Secret Management & Production Configuration (సీక్రెట్స్ రక్షణ)

- **Secret Management (ప్రొడక్షన్ లో):**
  రియల్-టైమ్ కంపెనీలలో ప్రొడక్షన్ సర్వర్ల యొక్క పాస్‌వర్డ్‌లను ఎప్పుడూ సాధారణ `.env` ఫైల్స్ లో పెట్టరు. వాటి కోసం **AWS Secrets Manager**, **HashiCorp Vault**, లేదా **GCP Secret Manager** లాంటి క్లౌడ్ టూల్స్ వాడుతారు. యాప్ స్టార్ట్ అయ్యేటప్పుడు (Lifecycle Hook లో) ఆ క్లౌడ్ API నుండి సీక్రెట్స్ ని డౌన్‌లోడ్ చేసుకుని `ConfigModule` కి డైనమిక్‌గా సప్లై చేస్తారు.
- **Production Configuration Best Practices:**

1. **`.env` ని Git లో పెట్టకూడదు:** మీ `.env` ఫైల్‌ను పొరపాటున కూడా GitHub/GitLab లో పుష్ చేయకూడదు. `.gitignore` లో దాన్ని యాడ్ చేయాలి. కేవలం `.env.example` ఫైల్‌ని మాత్రమే రిఫరెన్స్ కోసం పుష్ చేయాలి.
2. **Environment Specific Files:** లోకల్ డెవలప్‌మెంట్ కోసం `.env.development`, టెస్టింగ్ కోసం `.env.test`, ప్రొడక్షన్ కోసం ఒరిజినల్ ఎన్విరాన్మెంట్ వేరియబుల్స్ ని సర్వర్ లెవెల్లో కాన్ఫిగర్ చేయాలి.
3. **Type Safety:** ఎల్లప్పుడూ `configService.get<number>('PORT')` లాగా టైప్స్ ని మెన్షన్ చేయడం ద్వారా కోడ్ రాసేటప్పుడు బగ్స్ రాకుండా ఉంటాయి.

---

## 18. Database Integration

NestJS లో **Database Integration (డేటాబేస్ అనుసంధానం)** అనేది ఒక బ్యాకెండ్ డెవలపర్‌కు అత్యంత కీలకమైన విభాగం. ఇంటర్వ్యూలలో ORM టూల్స్, ట్రాన్సాక్షన్స్ (Transactions), మరియు పర్ఫార్మెన్స్ ఆప్టిమైజేషన్ (Eager vs Lazy loading) లపై 100% ప్రశ్నలు అడుగుతారు. వీటిని ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో క్లియర్ గా విశ్లేషించుకుందాం.

---

### 1. ORM Integration (TypeORM, Prisma, Mongoose)

NestJS మనకు నచ్చిన డేటాబేస్ టూల్‌ను వాడుకోవడానికి పూర్తి ఫ్లెక్సిబిలిటీ ఇస్తుంది.

- **TypeORM:** ఇది Node.js ఎకోసిస్టమ్‌లో చాలా కాలంగా ఉన్న మోస్ట్ పాపులర్ ORM. ఇది డెకరేటర్స్ (`@Entity()`, `@Column()`) ఆధారంగా పనిచేస్తుంది. NestJS తో దీనికి ఇన్‌బిల్ట్ సపోర్ట్ (`@nestjs/typeorm`) ఉంది.
- **Prisma:** ఇది ఒక మోడర్న్, నెక్స్ట్-జనరేషన్ ORM. ఇందులో డెకరేటర్స్ ఉండవు, ఒక ప్రత్యేకమైన `schema.prisma` ఫైల్ లో కోడ్ రాస్తాం. ఇది అల్టిమేట్ **Type-Safety** ని ఇస్తుంది. కంపెనీలలో కొత్త ప్రాజెక్ట్స్ కి ప్రైమరీగా దీన్ని ఎక్కువగా ఎంచుకుంటున్నారు.
- **Mongoose:** ఒకవేళ మీది MongoDB (NoSQL) డేటాబేస్ అయితే, NestJS లో `@nestjs/mongoose` ప్యాకేజీ ద్వారా స్కీమాలను డిఫైన్ చేసి వాడుతాం.

---

### 2. Repository Pattern (రిపోజిటరీ ప్యాటర్న్)

రిపోజిటరీ ప్యాటర్న్ అనేది డేటాబేస్ క్వెరీల లాజిక్‌ను, మన బిజినెస్ లాజిక్ (Services) నుండి వేరు చేస్తుంది.

- **లాభం:** రేపు పొద్దున మనం వాడుతున్న డేటాబేస్ లేదా ORM ని మార్చాల్సి వచ్చినా, కేవలం రిపోజిటరీ లేయర్ మారిస్తే సరిపోతుంది, సర్వీస్ లోపల ఉన్న బిజినెస్ లాజిక్‌ను తాకాల్సిన అవసరం లేదు.
- NestJS లో TypeORM వాడేటప్పుడు `Repository<User>` ని సర్వీస్ కన్స్ట్రక్టర్ లోపల **`@InjectRepository(User)`** ద్వారా ఇంజెక్ట్ చేసుకుని `find()`, `save()` మెథడ్స్ వాడుతాం.

---

### 3. Transactions (ట్రాన్సాక్షన్స్ - మోస్ట్ ఇంపార్టెంట్)

**Transaction** అనేది మల్టిపుల్ డేటాబేస్ ఆపరేషన్లను ఒకే యూనిట్‌గా (ACID Properties) రన్ చేసే ప్రక్రియ. అంటే, ఒక ఆర్డర్ క్రియేట్ అయ్యేటప్పుడు:

1. ఆర్డర్ టేబుల్ లో రికార్డ్ పడాలి.
2. యూజర్ అకౌంట్ లో డబ్బులు కట్ అవ్వాలి.
3. ఇన్వెంటరీ టేబుల్ లో స్టాక్ తగ్గాలి.

ఈ మూడింటిలో **ఏ ఒక్కటి ఫెయిల్ అయినా**, జరిగిన మిగతా ఆపరేషన్లు కూడా రద్దు అయిపోవాలి (Rollback).

- **TypeORM లో ఇంప్లిమెంటేషన్:** ప్రొడక్షన్ లో దీనికోసం **`DataSource`** ని ఇంజెక్ట్ చేసి `dataSource.transaction(async manager => { ... })` అనే క్వెరీ రన్నర్ పద్ధతిని వాడుతాం.

---

### 4. Eager Loading vs Lazy Loading (పర్ఫార్మెన్స్ ఆప్టిమైజేషన్)

టేబుల్స్ మధ్య రిలేషన్స్ (ఉదాహరణకు: `User` మరియు అతని `Orders`) ఉన్నప్పుడు డేటాని ఎలా రీడ్ చేయాలి అనే దానికి ఈ రెండు పద్ధతులు ఉన్నాయి:

- **Eager Loading (వెంటనే తెచ్చేయడం):**
  మనం `User` డేటా అడిగినప్పుడే, బ్యాక్‌గ్రౌండ్ లో SQL `JOIN` క్వెరీ రన్ అయి... అతనితో పాటు అతనికి సంబంధించిన అన్ని `Orders` డేటా కూడా ఒకేసారి మెమరీలోకి వచ్చేస్తుంది.
- _ఎప్పుడు వాడాలి?:_ స్క్రీన్ పైన యూజర్ వివరాలతో పాటు కంపల్సరీగా ఆర్డర్స్ లిస్ట్ కూడా ఎప్పుడూ చూపించాల్సి వచ్చినప్పుడు.

- **Lazy Loading (అడిగినప్పుడు మాత్రమే తేవడం):**
  మనం `User` డేటా అడిగితే కేవలం యూజర్ రికార్డ్ మాత్రమే వస్తుంది. ఎప్పుడైనా కోడ్‌లో `await user.orders` అని ప్రత్యేకంగా పిలిచినప్పుడు మాత్రమే సెకండ్ టైమ్ డేటాబేస్ కి వెళ్లి ఆర్డర్స్ డేటా తెస్తుంది.
- _ఎప్పుడు వాడాలి?:_ ఆర్డర్స్ డేటా ప్రతిసారీ అవసరం లేనప్పుడు (ఇది మెమరీని సేవ్ చేస్తుంది).

---

### 5. Connection Pooling (కనెక్షన్ పూలింగ్)

ప్రతి రిక్వెస్ట్ వచ్చినప్పుడు డేటాబేస్‌కు కొత్తగా కనెక్షన్ ఓపెన్ చేసి, రెస్పాన్స్ అయిపోయాక క్లోజ్ చేయడం వల్ల సర్వర్ పై హెవీ లోడ్ పడుతుంది (Latency పెరుగుతుంది).

- **పరిష్కారం:** యాప్ స్టార్ట్ అయ్యేటప్పుడే ఒక 10 లేదా 20 కనెక్షన్స్ ని ముందే ఓపెన్ చేసి ఒక పూల్ (Pool) లాగా ఉంచుతాం. రిక్వెస్ట్ రాగానే పూల్ లో ఉన్న ఒక కనెక్షన్ వాడుకుని, పని పూర్తి కాగానే దాన్ని మళ్లీ పూల్ కి అప్పగిస్తాం. ORM లలో `max: 20` లాంటి కాన్ఫిగరేషన్ ద్వారా దీన్ని సెట్ చేస్తాం.

---

### 6. Migrations (మైగ్రేషన్స్ - ప్రొడక్షన్ రూల్)

లోకల్ డెవలప్‌మెంట్ లో డేటాబేస్ టేబుల్స్ ఆటోమేటిక్‌గా క్రియేట్ అవ్వడానికి `synchronize: true` వాడతాం. కానీ **ప్రొడక్షన్ సర్వర్ లో `synchronize: true` పొరపాటున కూడా వాడకూడదు!** అది ఉన్న డేటాని డిలీట్ చేసే ప్రమాదం ఉంది.

- **Migrations అంటే ఏమిటి?:** ఇది డేటాబేస్ కి ఒక వర్షన్ కంట్రోల్ (Git లాగా) లాంటిది. టేబుల్ స్ట్రక్చర్‌లో మనం చేసే ప్రతి మార్పును (కొత్త కాలమ్ యాడ్ చేయడం లేదా మార్చడం) ఒక SQL స్క్రిప్ట్ ఫైల్‌గా సేవ్ చేస్తాం (e.g., `16725311-CreateUserTable.ts`).
- ప్రొడక్షన్ లో యాప్ డిప్లాయ్ అయ్యేటప్పుడు ఈ మైగ్రేషన్ ఫైల్స్ వరుసగా రన్ అయి, లైవ్ డేటాబేస్ సేఫ్‌గా అప్‌డేట్ అవుతుంది.

---

## 19. Caching

NestJS లో **Caching (క్యాషింగ్)** అనేది మీ అప్లికేషన్ యొక్క పర్ఫార్మెన్స్‌ను 10x పెంచడానికి మరియు డేటాబేస్ పై లోడ్ తగ్గించడానికి ఉపయోగపడే మోస్ట్ ఇంపార్టెంట్ టెక్నిక్.

ఇంటర్వ్యూలలో సింగిల్-సర్వర్ క్యాషింగ్ కి మరియు ప్రొడక్షన్ లో వాడే డిస్ట్రిబ్యూటెడ్ క్యాషింగ్ (Redis) కి మధ్య తేడాలు, మరియు **Cache Invalidation** ని ఎలా హ్యాండిల్ చేస్తారు అనే దానిపై ఇన్-డెప్త్ ప్రశ్నలు అడుగుతారు. వీటిని తెలుగులో క్లియర్ గా విశ్లేషించుకుందాం.

---

### 1. `CacheModule`, TTL & Cache Interceptors

NestJS లో క్యాషింగ్ కోసం `@nestjs/cache-manager` మరియు `cache-manager` ప్యాకేజీలను వాడుతాం.

- **`CacheModule`:** దీన్ని ఇంపోర్ట్ చేయడం ద్వారా మన యాప్‌లో ఇన్-మెమరీ (RAM) క్యాషింగ్ ఎనేబుల్ అవుతుంది.
- **TTL (Time-To-Live):** ఒక డేటాను క్యాషే లోపల ఎంత సమయం ఉంచాలి అని చెప్పే టైమర్ (ఉదాహరణకు: `ttl: 60000` అంటే 60 సెకన్లు). ఆ టైమ్ అయిపోగానే ఆటోమేటిక్‌గా ఆ డేటా క్యాషే నుండి డిలీట్ అవుతుంది.
- **Cache Interceptors (ఆటోమేటిక్ క్యాషింగ్):** కంట్రోలర్ రౌట్ పైన `@UseInterceptors(CacheInterceptor)` అని పెడితే, ఫస్ట్ టైమ్ రిక్వెస్ట్ వచ్చినప్పుడు కంట్రోలర్ రన్ అయి రెస్పాన్స్ ఇస్తుంది, అలాగే ఆ రెస్పాన్స్ క్యాషే లో సేవ్ అవుతుంది. సెకండ్ టైమ్ అదే యుఆర్ఎల్ కి రిక్వెస్ట్ వస్తే, కంట్రోలర్ లోపలికి వెళ్లకుండా ఇంటర్‌సెప్టరే డైరెక్ట్ గా క్యాషే నుండి 1 millisecond లో రెస్పాన్స్ ఇచ్చేస్తుంది.

---

### 2. Distributed Caching with Redis (ప్రొడక్షన్ ఆర్కిటెక్చర్)

సాధారణ ఇన్-మెమరీ క్యాషింగ్ అనేది కేవలం ఒకే సర్వర్ ఉన్నప్పుడు ఓకే. కానీ ప్రొడక్షన్ లో మనం యాప్‌ను మల్టిపుల్ ఇన్‌స్టాన్సెస్ (Docker/Kubernetes/PM2) లో రన్ చేస్తాం (Distributed System).

- **సమస్య:** సర్వర్-1 లో సేవ్ అయిన క్యాషే డేటా సర్వర్-2 కి తెలియదు.
- **పరిష్కారం:** అందరికీ కామన్‌గా ఉండే ఒకే ఒక సెంట్రల్ క్యాషే సర్వర్‌ను పెడతాం, అదే **Redis (REmote DIctionary Server)**.

```
[Client] ───> [Load Balancer]
                   ├───> [NestJS Server 1] ───┐
                   │                          ▼
                   └───> [NestJS Server 2] ───┼─> [ Central REDIS Cache ]
                                              │
                                              ▼
                                        [ Database ]

```

NestJS లో `cache-manager-redis-yet` స్టోర్‌ను `CacheModule.registerAsync()` లో కాన్ఫిగర్ చేసి ప్రొడక్షన్ లో Redis ని వాడుతాం.

---

### 3. Cache Invalidation (క్యాషే క్లీనింగ్ - బిగ్గెస్ట్ ఛాలెంజ్)

> _"Computer Science లో రెండే రెండు కష్టమైన పనులు ఉన్నాయి: ఒకటి Cache Invalidation, రెండోది నేమింగ్ కన్వెన్షన్స్."_

**Cache Invalidation** అంటే డేటాబేస్ లో ఒరిజినల్ డేటా మారినప్పుడు, క్యాషే లో ఉన్న పాత డేటా (Stale Data) ను డిలీట్ చేయడం.

- **ఉదాహరణ:** యూజర్ `/products` హిట్ చేసినప్పుడు ఆ లిస్ట్ క్యాషే లో స్టోర్ అయింది. ఇప్పుడు అడ్మిన్ ఒక కొత్త ప్రొడక్ట్‌ను యాడ్ చేశాడు (`POST /products`).
- **యాక్షన్:** ప్రొడక్ట్ యాడ్ అయిన వెంటనే, మనం కోడ్‌లో `cacheManager.del('products_cache_key')` అని పిలిచి పాత క్యాషేను డిలీట్ చేయాలి. అలా చేయకపోతే క్లయింట్‌కు పాత లిస్టే కనిపిస్తూ ఉంటుంది.

---

### 4. Advanced Use Cases (Session, Permission & Configuration)

- **Session Cache:** యూజర్ సెషన్ ఐడీలు లేదా యాక్టివ్ లాగిన్ స్టేటస్‌ను రిఫరెన్స్ చేయడానికి Redis ని వాడుతాం. యూజర్ లాగౌట్ అవ్వగానే సెషన్ ఇన్వాలిడేట్ అవుతుంది.
- **Permission Cache:** మునుపటి టాపిక్ (Authorization) లో మాట్లాడుకున్నట్టు, ప్రతి రిక్వెస్ట్ కి యూజర్ పర్మిషన్స్ చెక్ చేయడానికి DB కి వెళ్తే యాప్ స్లో అవుతుంది. అందుకని యూజర్ లాగిన్ అవ్వగానే అతని పర్మిషన్స్ లిస్ట్‌ను Redis లో క్యాషే చేసి, గార్డ్ లో అక్కడి నుండే క్విక్ గా వెరిఫై చేస్తాం.

---

### 5. Caching Strategies & Best Practices (ప్రొడక్షన్ రూల్స్)

1. **Cache-Aside (Lazy Loading) స్ట్రాటజీ:**

- రిక్వెస్ట్ రాగానే ఫస్ట్ క్యాషే లో వెతకాలి (Cache Hit అయితే రిటర్న్ చేయాలి).
- ఒకవేళ క్యాషే లో లేకపోతే (Cache Miss), డేటాబేస్ నుండి తెచ్చి, క్యాషే లో సేవ్ చేసి, ఆపై క్లయింట్‌కు ఇవ్వాలి. ప్రొడక్షన్ లో 90% దీన్నే వాడుతాం.

2. **Don't Cache Dynamic/Sensitive Data:** ప్రతి యూజర్‌కు మారే పర్సనల్ డేటా (ఉదా: బ్యాంక్ బ్యాలెన్స్, కార్ట్ ఐటమ్స్) ని ఎప్పుడూ గ్లోబల్ క్యాషే చేయకూడదు. కేవలం అందరికీ ఒకేలా ఉండే స్టాటిక్ డేటా (ఉదా: ప్రొడక్ట్ కాటలాగ్, కాన్ఫిగరేషన్స్) ని మాత్రమే క్యాషే చేయాలి.
3. **Always Set TTL:** ఏ క్యాషే డేటాకైనా సరే కచ్చితంగా ఒక ఎక్స్‌పైరీ టైమ్ (TTL) ఉండాలి. లేకపోతే Redis మెమరీ పూర్తిగా నిండిపోయి సర్వర్ క్రాష్ అవుతుంది (`OOM - Out Of Memory` ఎర్రర్ వస్తుంది).

---

## 20. File Upload

NestJS లో **File Upload (ఫైల్ అప్‌లోడ్ మేనేజ్‌మెంట్)** అనేది రియల్-టైమ్ ప్రాజెక్ట్స్‌లో ఒక కీలకమైన ఫీచర్. ప్రొడక్షన్ యాప్స్‌లో ఫైల్స్‌ను నేరుగా మన సర్వర్‌ లోపల దాచడం పర్ఫార్మెన్స్ మరియు స్కేలబిలిటీ పరంగా చాలా పెద్ద తప్పు.

ఈ 10 ప్రశ్నల ద్వారా సెక్యూర్, స్కేలబుల్ మరియు ప్రొడక్షన్-రెడీ ఫైల్ అప్‌లోడ్ ఆర్కిటెక్చర్‌ను ఎలా బిల్డ్ చేయాlo తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. Multer Integration & File Interceptors

NestJS లో ఫైల్ అప్‌లోడ్స్ అన్నీ `Multer` లైబ్రరీ ఆధారంగా పనిచేస్తాయి. దీనికోసం NestJS మనకు కొన్ని ప్రత్యేకమైన ఇంటర్సెప్టర్స్ మరియు డెకరేటర్స్ అందిస్తుంది:

- **`FileInterceptor()` (సింగిల్ ఫైల్ కోసం):** ఒకే ఒక ఫైల్ (ఉదాహరణకు ప్రొఫైల్ పిక్చర్) అప్‌లోడ్ చేయడానికి వాడతాం. కంట్రోలర్ లోపల ఆ ఫైల్‌ను యాక్సెస్ చేయడానికి `@UploadedFile()` డెకరేటర్ వాడుతాం.
- **`FilesInterceptor()` (మల్టిపుల్ ఫైల్స్ కోసం):** ఒకే ఫీల్డ్ నేమ్‌తో మల్టిపుల్ ఫైల్స్ (ఉదాహరణకు గ్యాలరీ ఇమేజెస్) అప్‌లోడ్ చేయడానికి.
- **`FileFieldsInterceptor()` (మిక్స్డ్ ఫైల్స్ కోసం):** వేర్వేరు ఫీల్డ్ నేమ్స్ ఉన్నప్పుడు (ఉదాహరణకు ఒకే ఫామ్‌లో `avatar` మరియు `background` విడివిడిగా వచ్చినప్పుడు) వాడుతాం.

```typescript
@Post('upload')
@UseInterceptors(FileInterceptor('file')) // 'file' అనేది ఫ్రంటెండ్ నుండి వచ్చే కీ నేమ్
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  return { message: 'ఫైల్ సక్సెస్‌ఫుల్‌గా అప్‌లోడ్ అయింది!' };
}

```

---

### 2. File Validation & Upload Security (అల్టిమేట్ సెక్యూరిటీ రూల్స్)

హ్యాకర్లు పొరపాటున `.exe` లేదా మాల్వేర్ స్క్రిప్ట్ ఫైల్స్ అప్‌లోడ్ చేసి సర్వర్‌ను హ్యాక్ చేయకుండా ఉండటానికి **Strict Validation** చాలా అవసరం. దీనికోసం NestJS మనకు **`ParseFilePipe`** ని అందిస్తుంది.

> 🔒 **ప్రొడక్షన్ సెక్యూరిటీ టిప్:** కేవలం ఫైల్ ఎక్స్‌టెన్షన్ (`.jpg`) ని మాత్రమే నమ్మకూడదు, ఎందుకంటే హ్యాకర్లు ఒక స్క్రిప్ట్ ఫైల్ పేరును `virus.jpg` గా మార్చగలరు. అందుకని ఫైల్ యొక్క అసలైన **Magic Bytes (MimeType)** ని చెక్ చేయాలి.

```typescript
@Post('avatar')
uploadAvatar(
  @UploadedFile(
    new ParseFilePipe({
      validators: [
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 5 }), // గరిష్టంగా 5MB మాత్రమే
        new FileTypeValidator({ fileType: 'image/(jpeg|png)' }), // కేవలం JPEG లేదా PNG మాత్రమే
      ],
    }),
  )
  file: Express.Multer.File,
) {
  return { filename: file.filename };
}

```

---

### 3. File Storage Strategies: Local vs Cloud (S3)

- **Local Storage (సాధారణ పద్ధతి):** ఫైల్స్ ని మన కరెంట్ సర్వర్ లోని `uploads/` ఫోల్డర్ లో సేవ్ చేయడం.
- _సమస్య:_ రేపు పొద్దున మన యాప్ కి ట్రాఫిక్ పెరిగి మల్టిపుల్ సర్వర్లు (Load Balancer) పెట్టినప్పుడు, సర్వర్-1 లో అప్‌లోడ్ అయిన ఇమేజ్ సర్వర్-2 కి కనిపించదు. పైగా డిస్క్ స్పేస్ త్వరగా నిండిపోతుంది.

- **Cloud Storage (S3 Uploads - ప్రొడక్షన్ ఆర్కిటెక్చర్):** ఫైల్స్‌ను మన సర్వర్ లో దాచకుండా నేరుగా **AWS S3 (Simple Storage Service)**, Google Cloud Storage, లేదా DigitalOcean Spaces లాంటి ఆబ్జెక్ట్ స్టోరేజ్‌లకు పంపడం బెస్ట్ ప్రాక్టీస్.
- సర్వర్‌కు ఫైల్ రాగానే `@aws-sdk/client-s3` ని ఉపయోగించి దాన్ని క్లౌడ్‌లోకి పుష్ చేస్తాం. దీనివల్ల మన సర్వర్ పైన ఎలాంటి లోడ్ ఉండదు.

---

### 4. Advanced Production Patterns: Streaming & Presigned URLs

- **Streaming Uploads:** చాలా పెద్ద ఫైల్స్ (ఉదాహరణకు 500MB వీడియోలు) అప్‌లోడ్ అవుతున్నప్పుడు, ఆ ఫైల్ మొత్తాన్ని ఒకేసారి సర్వర్ మెమరీ (RAM) లోకి లోడ్ చేస్తే సర్వర్ క్రాష్ అవుతుంది (Out of Memory). అందుకోసం Node.js **Streams** ని ఉపయోగించి, ఫైల్‌ను ముక్కలు ముక్కలుగా (Chunks) రీడ్ చేస్తూ నేరుగా S3 కి స్ట్రీమ్ చేయాలి.
- **Presigned URLs (టాప్ 1% ఆర్కిటెక్చర్ స్ట్రాటజీ):** ఫైల్ ఫ్రంటెండ్ నుండి మన NestJS సర్వర్‌కు వచ్చి, ఇక్కడి నుండి AWS S3 కి వెళ్లడం వల్ల మన సర్వర్ నెట్‌వర్క్ బ్యాండ్‌విడ్త్ వేస్ట్ అవుతుంది.
- _పరిష్కారం:_ ఫ్రంటెండ్ అడుగుతుంది: "నేను ఒక ఇమేజ్ అప్‌లోడ్ చేయాలి, నాకు పర్మిషన్ ఇవ్వు".
- మన NestJS సర్వర్ AWS S3 తో మాట్లాడి ఒక **సెక్యూర్ డైనమిక్ లింక్ (Presigned URL)** ని జనరేట్ చేసి ఫ్రంటెండ్‌కు ఇస్తుంది (దీని టైమ్ కేవలం 5 నిమిషాలు ఉంటుంది).
- ఇప్పుడు ఫ్రంటెండ్ మన సర్వర్‌తో సంబంధం లేకుండా **నేరుగా AWS S3 కే ఫైల్‌ను అప్‌లోడ్ చేస్తుంది**. దీనివల్ల మన NestJS సర్వర్ పై 0% లోడ్ పడుతుంది.

---

### 5. Image Processing (ఇమేజ్ ఆప్టిమైజేషన్)

యూజర్లు కెమెరాల నుండి 10MB సైజ్ ఉన్న హై-రెజల్యూషన్ ఇమేజెస్ అప్‌లోడ్ చేసినప్పుడు, వాటిని అలాగే సేవ్ చేస్తే స్టోరేజ్ కాస్ట్ పెరుగుతుంది, యాప్ కూడా స్లో అవుతుంది.

- **పరిష్కారం:** NestJS లో **`sharp`** లైబ్రరీని ఇంటిగ్రేట్ చేస్తాం.
- ఫైల్ రాగానే కంట్రోలర్ లేదా కస్టమ్ పైప్ లో `sharp(file.buffer).resize(800, 600).webp().toBuffer()` అని రాసి, దాన్ని తక్కువ సైజ్ ఉన్న `.webp` ఫార్మాట్‌లోకి కంప్రెస్ చేసి ఆప్టిమైజ్ చేసిన తర్వాతే క్లౌడ్ లో సేవ్ చేస్తాం.

---

## 21. Microservices

NestJS లో **Microservices (మైక్రోసర్వీసెస్)** అనేది లార్జ్-స్కేల్ ఎంటర్‌ప్రైజ్ అప్లికేషన్లను డిజైన్ చేయడానికి వాడే అత్యంత అడ్వాన్స్‌డ్ మరియు పవర్‌ఫుల్ ఆర్కిటెక్చర్. ఒకే మోనోలిత్ (Monolith) యాప్ లో అన్నింటినీ పెట్టకుండా, వేర్వేరు సర్వీసెస్ (e.g., AuthService, PaymentService, NotificationService) విడివిడిగా ఉంటూ పరస్పరం ఎలా మాట్లాడుకుంటాయో ఈ 10 ప్రశ్నల ద్వారా తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. What are NestJS Microservices? (మైక్రోసర్వీసెస్ అంటే ఏమిటి?)

NestJS లో మైక్రోసర్వీస్ అనేది సాధారణ HTTP యాప్ లాగా కాకుండా, ఒక కస్టమ్ **Transport Layer** (TCP, MQTT, Redis, Kafka, etc.) ని ఉపయోగించి నెట్‌వర్క్ ద్వారా మెసేజ్‌లను పంపుకునే మరియు స్వీకరించే ఒక అప్లికేషన్.

NestJS లో మైక్రోసర్వీస్ కమ్యూనికేషన్ రెండు ప్రధాన పద్ధతులలో జరుగుతుంది:

1. **Request-Response (మెసేజ్ ప్యాటర్న్ - `@MessagePattern`):** ఇది సింక్రోనస్ (Synchronous) పద్ధతి. ఒక సర్వీస్ ఇంకో సర్వీస్‌కు ఒక రిక్వెస్ట్ పంపి, అది తిరిగి సమాధానం (Response) ఇచ్చే వరకు వేచి ఉంటుంది.
2. **Event-driven (ఈవెంట్ ప్యాటర్న్ - `@EventPattern`):** ఇది అసింక్రోనస్ (Asynchronous) పద్ధతి. ఒక సర్వీస్ కేవలం ఈవెంట్‌ను ఫైర్ చేసి (Fire-and-Forget) వదిలేస్తుంది, రెస్పాన్స్ కోసం వెతకదు. (ఉదాహరణకు: `user_registered` ఈవెంట్ పంపితే, NotificationService మెయిల్ పంపుతుంది, కానీ మెయిల్ వెళ్ళిందా లేదా అని మెయిన్ యాప్ వెయిట్ చేయదు).

---

### 2. Microservice Transporters (రవాణా మార్గాలు)

NestJS మనకు విభిన్న అవసరాల కోసం పలు రకాల ఇన్‌బిల్ట్ ట్రాన్స్‌పోర్టర్లను అందిస్తుంది:

- **TCP (Transmission Control Protocol - డిఫాల్ట్):**
  ఇది NestJS లో అత్యంత సింపుల్ ట్రాన్స్‌పోర్టర్. ఎలాంటి థర్డ్-పార్టీ బ్రోకర్ లేకుండా డైరెక్ట్ గా రెండు సర్వీసెస్ మధ్య రా కనెక్షన్ ఏర్పడుతుంది. లోకల్ లేదా చిన్న ప్రాజెక్ట్స్ కి ఇది బాగుంటుంది.
- **gRPC Integration (గూగుల్ ఆర్పీసీ - హై-పెర్ఫార్మెన్స్):**
  ఇది ప్రొడక్షన్ లో మోస్ట్ పాపులర్. ఇది JSON కి బదులు **Protocol Buffers (`.proto` files)** ని వాడుతుంది. డేటా చాలా తక్కువ బైట్స్‌లో బైనరీ ఫార్మాట్‌లో వెళ్లడం వల్ల ఇది అత్యంత వేగవంతమైన సింక్రోనస్ (Request-Response) కమ్యూనికేషన్‌ను అందిస్తుంది.
- **Redis Transport:**
  Redis ని కేవలం క్యాషింగ్ కోసమే కాకుండా, దాని లోపల ఉండే **Pub/Sub (Publish/Subscribe)** ఫీచర్ ద్వారా సర్వీసెస్ మధ్య మెసేజ్ పాసింగ్ చేయడానికి కూడా వాడుకోవచ్చు.

---

### 3. Advanced Message Brokers (క్యూస్ & స్ట్రీమ్స్)

అప్లికేషన్ చాలా పెద్దదై, మిలియన్ల కొద్దీ మెసేజ్‌లను హ్యాండిల్ చేయాల్సి వచ్చినప్పుడు మెసేజ్ బ్రోకర్లను వాడుతాం:

- **RabbitMQ Transport (మెసేజ్ క్యూ):**
  ఇది ఒక క్లాసిక్, అల్టిమేట్ **Message Broker**. ఒక సర్వీస్ పంపిన మెసేజ్స్ అన్నీ క్యూ (Queue) లో స్టోర్ అవుతాయి. రిసీవ్ చేసుకునే సర్వీస్ డౌన్ అయినా కూడా, అది మళ్లీ ఆన్ అయ్యాక క్యూ నుండి మెసేజ్‌లను సేఫ్‌గా ప్రాసెస్ చేస్తుంది. (డేటా లాస్ అవ్వదు).
- **Apache Kafka Transport (ఈవెంట్ స్ట్రీమింగ్ - బిగ్ డేటా):**
  కాఫ్కా అనేది కేవలం క్యూ కాదు, ఇది ఒక **Distributed Commit Log**. ఇది అత్యధిక మొత్తంలో వచ్చే డేటా స్ట్రీమ్స్ (ఉదాహరణకు: రియల్-టైమ్ ఉబెర్ క్యాబ్ లొకేషన్ ట్రాకింగ్ లేదా లాగ్స్ విశ్లేషణ) ని హ్యాండిల్ చేయడానికి వాడుతారు. ఇది మెసేజ్‌లను హిస్టరీ లాగా స్టోర్ చేసి ఉంచుతుంది.
- **NATS & MQTT Transports:**
- **NATS:** అత్యంత తేలికైన (Lightweight) మరియు క్లౌడ్-నేటివ్ హై-పర్ఫార్మెన్స్ మెッセージంగ్ సిస్టమ్.
- **MQTT:** ఇది **IoT (Internet of Things)** డివైసెస్ కమ్యూనికేషన్స్ కోసం మరియు తక్కువ ఇంటర్నెట్ బ్యాండ్‌విడ్త్ ఉన్న చోట వాడటానికి డిజైన్ చేయబడింది.

---

### 4. Implementation: Message Patterns vs Event Patterns (కోడింగ్ ఉదాహరణ)

మైక్రోసర్వీస్ లో మెసేజ్‌లను రిసీవ్ చేసుకోవడానికి కంట్రోలర్ లోపల డెకరేటర్స్ వాడుతాం.

#### 📡 Microservice Server Side (స్వీకరించే సర్వీస్):

```typescript
// payment.controller.ts
import { Controller } from "@nestjs/common";
import { MessagePattern, EventPattern } from "@nestjs/microservices";

@Controller()
export class PaymentController {
  // 1. Request-Response Pattern (@MessagePattern)
  @MessagePattern({ cmd: "process_payment" })
  handleProcessPayment(data: any): { success: boolean; transactionId: string } {
    console.log("పేమెంట్ రిక్వెస్ట్ వచ్చింది...", data);
    return { success: true, transactionId: "TXN12345" }; // రెస్పాన్స్ తిరిగి పంపుతుంది
  }

  // 2. Event-driven Pattern (@EventPattern)
  @EventPattern("order_created")
  async handleOrderCreated(data: any) {
    console.log(
      "ఆర్డర్ క్రియేట్ అయింది, బ్యాక్‌గ్రౌండ్ లో ఇన్వాయిస్ జనరేట్ చేస్తున్నాను...",
      data,
    );
    // ఇందులో 'return' స్టేట్‌మెంట్ ఉండదు (Fire-and-Forget)
  }
}
```

#### 🚀 Microservice Client Side (మెసేజ్ పంపే మెయిన్ API):

మెయిన్ గేట్‌వే లేదా ఇంకో సర్వీస్ నుండి పైన ఉన్న మెథడ్స్‌ను పిలవడానికి **`ClientProxy`** ని ఇంజెక్ట్ చేసి వాడుతాం.

```typescript
// app.service.ts లో
constructor(@Inject('PAYMENT_SERVICE') private readonly client: ClientProxy) {}

// Message Pattern పిలవడానికి 'send' వాడాలి (ఇది Observable ని ఇస్తుంది, await చేయవచ్చు)
const result = await firstValueFrom(this.client.send({ cmd: 'process_payment' }, { amount: 500 }));

// Event Pattern పిలవడానికి 'emit' వాడాలి
this.client.emit('order_created', { orderId: 99 });

```

---

### 5. Microservices Best Practices (ప్రొడクション రూల్స్)

1. **Monorepo Structure:** మైక్రోసర్వీసెస్ ప్రాజెక్ట్స్ చేసేటప్పుడు NestJS **Monorepo** (`nest new my-project --monorepo`) పద్ధతిని వాడటం బెస్ట్. దీనివల్ల అన్ని సర్వీసెస్ ఒకే రిపోజిటరీ లో ఉంటాయి మరియు DTOs, ఇంటర్‌ఫేసెస్, కామన్ లైబ్రరీలను అందరూ ఈజీగా షేర్ చేసుకోవచ్చు.
2. **Circuit Breaker Pattern:** ఒక మైక్రోసర్వీస్ (e.g., PaymentService) డౌన్ అయితే, దానివల్ల మిగతా సర్వీసెస్ కూడా వెయిట్ చేసి క్రాష్ అవ్వకుండా ఉండటానికి `nestjs-circuit-breaker` లాంటి టూల్స్ వాడి ఫెయిల్యూర్స్ ని స్మార్ట్ గా హ్యాండిల్ చేయాలి.
3. **API Gateway:** క్లయింట్ (Frontend) నేరుగా అన్ని మైక్రోసర్వీసెస్ తో మాట్లాడకూడదు. మధ్యలో ఒక **API Gateway** (NestJS లో నార్మల్ HTTP యాప్) ని పెట్టి, అది మాత్రమే బయటి ప్రపంచానికి ఎండ్‌పాయింట్స్ ఇచ్చి, లోపల మెసేజ్ బ్రోకర్ల ద్వారా మైక్రోసర్వీసెస్ కి రిక్వెస్ట్‌లను రూట్ చేయాలి.

---

## 22. GraphQL

NestJS లో **GraphQL** అనేది REST API లకు ఒక అద్భుతమైన ప్రత్యామ్నాయం. REST లాగా కాకుండా, క్లయింట్‌కు కావలసిన డేటాను మాత్రమే (Over-fetching లేదా Under-fetching లేకుండా) ఒకే ఒక్క ఎండ్‌పాయింట్ (`/graphql`) ద్వారా లాగడానికి ఇది ఉపయోగపడుతుంది.

ఇంటర్వ్యూలలో **Code-first vs Schema-first**, పర్ఫార్మెన్స్ ఆప్టిమైజేషన్ కోసం వాడే **DataLoader**, మరియు మైక్రోసర్వీసెస్ స్టైల్ లో వాడే **Apollo Federation** లపై ఇన్-డెప్త్ ప్రశ్నలు అడుగుతారు. వీటిని తెలుగులో క్లియర్ గా విశ్లేషించుకుందాం.

---

### 1. GraphQL Module, Code-First vs Schema-First

NestJS లో GraphQL ని ఇంటిగ్రేట్ చేయడానికి `@nestjs/graphql` మరియు `@nestjs/apollo` (లేదా Mercurius) ప్యాకేజీలను వాడుతాం. యాప్ బిల్డ్ చేయడానికి రెండు అప్రోచ్‌లు ఉన్నాయి:

- **Code-first approach (ప్రొడクション లో మోస్ట్ ప్రిఫర్డ్):**
  ఇందులో మనం కేవలం TypeScript క్లాసెస్ మరియు డెకరేటర్స్ (`@ObjectType()`, `@Field()`) వాడుతూ కోడ్ రాస్తాం. NestJS ఆటోమేటిక్‌గా ఆ కోడ్‌ను బట్టి వెనుకల ఉండాల్సిన GraphQL SDL (`schema.gql` ఫైల్) ను జనరేట్ చేస్తుంది. ఇది టైప్-సేఫ్ గా ఉండటం వల్ల కంపెనీలలో 90% దీన్నే వాడుతారు.
- **Schema-first approach:**
  ఇందులో మనం మొదట మాన్యువల్‌గా GraphQL రూల్స్ తో ఒక `.graphql` ఫైల్ రాస్తాం. దాన్ని చూసి NestJS ఆటోమేటిక్‌గా TypeScript డెఫినిషన్స్ (Interfaces) ని జనరేట్ చేస్తుంది.

---

### 2. Resolvers, Queries, Mutations & Subscriptions

REST API లో కంట్రోలర్స్ ఎలాగో, GraphQL లో **Resolvers** అలాగ. దీనికోసం `@Resolver()` డెకరేటర్ వాడుతాం. ఇందులో మూడు రకాల ఆపరేషన్స్ ఉంటాయి:

- **Queries (`@Query()`):** డేటాని కేవలం రీడ్ చేయడానికి (REST లో `GET` లాగా).
- **Mutations (`@Mutation()`):** డేటాని క్రియేట్, అప్‌డేట్, లేదా డిలీట్ చేయడానికి (REST లో `POST`, `PUT`, `DELETE` లాగా).
- **Subscriptions (`@Subscription()`):** వెబ్‌సాకెట్స్ (WebSockets) ద్వారా రియల్-టైమ్ డేటా అప్‌డేట్స్ పంపడానికి (ఉదాహరణకు: చాట్ అప్లికేషన్ లో కొత్త మెసేజ్ రాగానే క్లయింట్‌కు పుష్ చేయడం).

#### 🛠️ Code-First Resolver ఉదాహరణ:

```typescript
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: "user" })
  async getUser(@Args("id", { type: () => ID }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }
}
```

---

### 3. DataLoader (N+1 క్వెరీ సమస్యకు ఏకైక పరిష్కారం)

ఇంటర్వ్యూలలో కచ్చితంగా అడిగే **టాప్ 1% ఆర్కిటెక్చరల్ ప్రశ్న** ఇది.

- **సమస్య (N+1 Problem):** మీరు ఒకేసారి 10 మంది యూజర్ల లిస్ట్ అడిగారు, వారితో పాటు వారి `Posts` కూడా కావాలన్నారు. GraphQL ప్రతి యూజర్‌కు విడివిడిగా డేటాబేస్ హిట్ చేస్తుంది. అంటే 1 మెయిన్ క్వెరీ + 10 మంది యూజర్లకు 10 విడి క్వెరీలు = మొత్తం 11 సార్లు DB కి వెళ్తుంది. దీనివల్ల సర్వర్ చాలా స్లో అయిపోతుంది.
- **పరిష్కారం (DataLoader):** ఇది ఒక ఇన్-మెమరీ కాన్సెప్ట్. ఇది ఆ 10 విడి రిక్వెస్ట్‌లను ఒక మిల్లీసెకన్ పాటు హోల్డ్ చేసి (Batching), వాటన్నింటినీ కలిపి ఒకే ఒక్క `SELECT * FROM posts WHERE userId IN (1,2,3...)` అనే ఒకే ఒక క్వెరీగా మార్చి డేటాను తెస్తుంది. దీనివల్ల 11 సార్లు వెళ్లాల్సిన DB కి కేవలం 2 సార్లలోనే పని అయిపోతుంది.

---

### 4. Apollo Federation (మైక్రోసర్వీసెస్ లో GraphQL)

ప్రాజెక్ట్ చాలా పెద్దదై మల్టిపుల్ మైక్రోసర్వీసెస్ ఉన్నప్పుడు, ప్రతి సర్వీస్‌కు ఒక విడివిడి GraphQL ఎండ్‌పాయింట్ ఉంటే ఫ్రంటెండ్ వాళ్లకు కన్ఫ్యూజన్ అవుతుంది.

- **Apollo Federation** ద్వారా మనం అన్ని మైక్రోసర్వీసెస్ లోని విడివిడి గ్రాఫ్‌లను కలిపి, ఒక సెంట్రల్ **Gateway (Supergraph)** ద్వారా క్లయింట్‌కు ఒకే ఒక్క ఎండ్‌పాయింట్‌గా చూపిస్తాం.
- NestJS లో దీనికోసం `@nestjs/apollo` నుండి `GraphQLFederationModule` ని వాడుతాం.

---

### 5. GraphQL Authentication (అథెంటికేషన్ ఎలా చేయాలి?)

GraphQL లో ఒకే ఒక `/graphql` ఎండ్‌పాయింట్ ఉంటుంది కాబట్టి, REST లో వాడే నార్మల్ NestJS `AuthGuard` ఇక్కడ డైరెక్ట్ గా పనిచేయదు. ఎందుకంటే REST గార్డ్ కి `Request/Response` ఆబ్జెక్ట్స్ వచ్చే విధానం వేరు, GraphQL కి వచ్చే విధానం వేరు.

- **పరిష్కారం:** మనం గార్డ్ లోపల **`GqlExecutionContext`** ని ఉపయోగించి కంటెక్స్ట్‌ను మార్చుకోవాలి.

```typescript
@Injectable()
export class GqlAuthGuard extends AuthGuard("jwt") {
  // GraphQL కి తగ్గట్టు రిక్వెస్ట్ ఆబ్జెక్ట్ ని మార్చడం
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req; // ఇది HTTP రిక్వెస్ట్ ని రిటర్న్ చేస్తుంది
  }
}
```

కంట్రోలర్ లాగే ఇక్కడ కూడా రౌట్ మెథడ్ పైన `@UseGuards(GqlAuthGuard)` అని పెట్టి వాడుకోవచ్చు.

---

## 23. WebSockets

NestJS లో **WebSockets** అనేది చాట్ అప్లికేషన్లు, రియల్-టైమ్ నోటిఫికేషన్లు, లైవ్ డ్యాష్‌బోర్డులు లేదా మల్టీప్లేయర్ గేమ్స్ లాంటి **Real-time, Bi-directional (రెండు వైపులా ఒకేసారి జరిగే)** కమ్యూనికేషన్ బిల్డ్ చేయడానికి వాడే అద్భుతమైన ఫీచర్.

ఇంటర్వ్యూలలో నార్మల్ HTTP కి, వెబ్‌సాకెట్స్‌కి మధ్య ఉన్న లైఫ్ సైకిల్ తేడాలు, మరియు ప్రొడక్షన్ లో వెబ్‌సాకెట్స్‌ను ఎలా **Scale** చేస్తారు (Redis Adapter) అనే దానిపై కచ్చితంగా ప్రశ్నలు అడుగుతారు. వీటిని తెలుగులో ఇన్-డెప్త్‌గా విశ్లేషించుకుందాం.

---

### 1. WebSocket Gateway & Socket.IO Integration

NestJS లో వెబ్‌సాకెట్ కనెక్షన్స్ ని హ్యాండిల్ చేసే క్లాస్‌ను **Gateway** అంటారు. దీనికోసం `@WebSocketGateway()` డెకరేటర్ వాడుతాం. NestJS బై-డిఫాల్ట్ **Socket.IO** ని వాడుతుంది (కావాలనుకుంటే రా `ws` ప్యాకేజీకి కూడా మారవచ్చు).

- **`@WebSocketServer()`:** దీని ద్వారా Socket.IO యొక్క మెయిన్ సర్వర్ ఇన్‌స్టాన్స్‌ను క్లాస్ లోపలికి ఇంజెక్ట్ చేస్తాం.
- **`@SubscribeMessage()`:** క్లయింట్ నుండి వచ్చే నిర్దిష్ట ఈవెంట్ మెసేజ్‌లను వినడానికి (Listen చేయడానికి) ఈ డెకరేటర్ వాడుతాం.

#### 🛠️ బేసిక్ గేట్‌వే ఉదాహరణ:

```typescript
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway(3002, { cors: { origin: "*" } }) // పోర్ట్ 3002 లో రన్ అవుతుంది
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage("send_message")
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log(`క్లయింట్ ${client.id} నుండి డేటా వచ్చింది:`, data);

    // Broadcasting: కనెక్ట్ అయిన అందరు యూజర్లకు ఈ మెసేజ్ పంపడం
    this.server.emit("receive_message", data);
  }
}
```

---

### 2. Namespaces & Rooms (యూజర్లను గ్రూప్ చేయడం)

వెబ్‌సాకెట్స్ లో వేలాది మంది యూజర్లు ఉన్నప్పుడు, మెసేజ్‌లు అందరికీ వెళ్లకుండా కంట్రోల్ చేయడానికి రెండు ఫీచర్స్ ఉన్నాయి:

- **Namespaces (నేమ్‌స్పేసెస్):** ఇది ఒకే సర్వర్‌ను విభిన్న కనెక్షన్ మార్గాలుగా విభజించడం (ఉదాహరణకు: `/chat` కి ఒక లాజిక్, `/notifications` కి ఇంకొక లాజిక్). ఇవి విడివిడి ఛానెల్స్ లాగా పనిచేస్తాయి.
- **Rooms (రూమ్స్):** ఇది ఒక నేమ్‌స్పేస్ లోపల ఉండే చిన్న చిన్న గ్రూప్స్.
- _ఉదాహరణ:_ ఒక వాట్సాప్ గ్రూప్ లాగా. ఒక నిర్దిష్ట రూమ్ లో ఉన్న వాళ్లకు మాత్రమే మెసేజ్ వెళ్లాలి అనుకుంటే, క్లయింట్ కనెక్ట్ అవ్వగానే `client.join('room_123')` అని రూమ్ లో వేస్తాం.
- మెసేజ్ పంపేటప్పుడు `this.server.to('room_123').emit('event', data)` అని పంపుతాం.

---

### 3. Gateway Lifecycle Hooks (లైఫ్ సైకిల్)

వెబ్‌సాకెట్ గేట్‌వే కనెక్టివిటీని ట్రాక్ చేయడానికి NestJS మనకు 3 ముఖ్యమైన ఇంటర్ఫేసెస్ ఇస్తుంది:

1. **`OnGatewayInit`:** గేట్‌వే సర్వర్ పూర్తిగా స్టార్ట్ అయి రెడీ అయినప్పుడు `afterInit()` మెథడ్ రన్ అవుతుంది.
2. **`OnGatewayConnection`:** ఎవరైనా ఒక కొత్త యూజర్/ఫ్రంటెండ్ క్లయింట్ కనెక్ట్ అయినప్పుడు `handleConnection(client: Socket)` రన్ అవుతుంది.
3. **`OnGatewayDisconnect`:** యూజర్ ఇంటర్నెట్ పోయినా లేదా బ్రౌజర్ టాబ్ క్లోజ్ చేసినా `handleDisconnect(client: Socket)` రన్ అవుతుంది.

---

### 4. WebSocket Authentication & Interceptors

- **Authentication (సెక్యూరిటీ):** HTTP లాగా ఇక్కడ ప్రతి మెసేజ్ కి గార్డ్ పెట్టడం కంటే... యూజర్ **మొదటిసారి కనెక్ట్ అయ్యేటప్పుడే (Handshake స్టేజ్ లో)** అతని టోకెన్ వెరిఫై చేయడం బెస్ట్ ప్రాక్టీస్.
- `handleConnection` లోపల `client.handshake.headers.authorization` నుండి JWT టోకెన్ తీసుకొని వెరిఫై చేస్తాం. ఒకవేళ టోకెన్ తప్పు అయితే `client.disconnect()` అని కనెక్షన్ కట్ చేస్తాం.

- **WebSocket Interceptors:** వచ్చే వెబ్‌సాకెట్ మెసేజ్ డేటాను కంట్రోలర్ లాగే మార్చడానికి ఇవి ఉపయోగపడతాయి. అయితే ఇక్కడ కూడా `ExecutionContext` ని `context.switchToWs()` పద్ధతిలో మార్చుకోవాల్సి ఉంటుంది.

---

### 5. Scaling WebSockets (ప్రొడక్షన్ లో స్కేలింగ్ - బిగ్గెస్ట్ ఛాలెంజ్)

ఇంటర్వ్యూలలో కచ్చితంగా అడిగే **ఆర్కిటెక్చరల్ ప్రశ్న**: _"మనం అప్లికేషన్‌ను 3 సర్వర్లలో (Docker/Load Balancer) రన్ చేస్తున్నప్పుడు, సర్వర్-1 కి కనెక్ట్ అయిన యూజర్‌కు, సర్వర్-2 కి కనెక్ట్ అయిన యూజర్‌కు చాటింగ్ ఎలా జరుగుతుంది?"_

- **సమస్య:** వెబ్‌సాకెట్ అనేది ఇన్-మెమరీ కనెక్షన్. సర్వర్-1 లో ఉన్న యూజర్ లిస్ట్ సర్వర్-2 కి తెలియదు.
- **పరిష్కారం (Redis Adapter):** NestJS లో దీనికోసం **`@socket.io/redis-adapter`** ని వాడుతాం.
- అన్ని సర్వర్ల వెనుక ఒక సెంట్రల్ **Redis Pub/Sub** ని లింక్ చేస్తాం.
- సర్వర్-1 లో ఒక యూజర్ మెッセージ పంపితే, ఆ సర్వర్ ఆ మెసేజ్‌ను Redis లో పబ్లిష్ చేస్తుంది. Redis వెంటనే ఆ మెసేజ్‌ను మిగతా అన్ని సర్వర్లకు (సర్వర్-2, సర్వర్-3) పాస్ చేస్తుంది. తద్వారా వేర్వేరు సర్వర్లలో ఉన్న యూజర్లు కూడా ఒకరితో ఒకరు రియల్-టైమ్‌లో మాట్లాడుకోగలుగుతారు.

---

## 24. Testing

NestJS లో **Testing (టెస్టింగ్)** అనేది ఎంటర్‌ప్రైజ్-లెవెల్ అప్లికేషన్ల స్టెబిలిటీని మరియు క్వాలిటీని కాపాడటానికి అత్యంత కీలకమైన భాగం. మనం రాసిన కోడ్ లైవ్ ప్రొడక్షన్ లోకి వెళ్ళాక బగ్స్ రాకుండా ముందే అడ్డుకోవడానికి టెస్టింగ్ ఉపయోగపడుతుంది. NestJS బై-డిఫాల్ట్ **Jest** మరియు **Supertest** లైబ్రరీలతో వస్తుంది.

ఈ 10 ప్రశ్నల ద్వారా NestJS లో యూనిట్ టెస్టింగ్ నుండి ఎండ్-టు-ఎండ్ (E2E) టెస్టింగ్ వరకు ప్రొడక్షన్ స్టాండర్డ్స్ లో తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. Types of Testing: Unit, Integration & E2E

- **Unit Testing (యూనిట్ టెస్టింగ్):**
  ఇది ఒక నిర్దిష్టమైన క్లాస్ లేదా ఫంక్షన్‌ను మాత్రమే విడిగా (Isolation లో) టెస్ట్ చేసే ప్రక్రియ. ఉదాహరణకు: `UsersService` ని టెస్ట్ చేసేటప్పుడు, అది డిపెండ్ అయి ఉండే డేటాబేస్ (Repository) ని ఒరిజినల్‌గా వాడకుండా **Mock** (డమ్మీగా) చేసి, కేవలం సర్వీస్ లోని లాజిక్ మాత్రమే కరెక్ట్‌గా పనిచేస్తుందో లేదో చూస్తాం.
- **Integration Testing (ఇంటిగ్రేషన్ టెస్టింగ్):**
  మల్టిపుల్ పార్ట్స్ (ఉదాహరణకు: `Controller` మరియు `Service` కలిసి) ఒకదానితో ఒకటి కరెక్ట్‌గా కమ్యూనికేట్ అవుతున్నాయో లేదో చెక్ చేయడం.
- **E2E Testing (End-to-End Testing):**
  ఇది పూర్తి అప్లికేషన్‌ను ఒక రియల్ యూజర్ లాగా టెస్ట్ చేయడం. అంటే నిజమైన HTTP రిక్వెస్ట్ పంపి (`/users`), అది గార్డ్స్, పైప్స్, కంట్రోలర్, డేటాబేస్ అన్ని లేయర్స్ దాటుకుని సరైన రెస్పాన్స్ ఇస్తుందో లేదో వెరిఫై చేయడం. దీనికోసం **`supertest`** లైబ్రరీ వాడుతాం.

---

### 2. `TestingModule` & Mocking (టెస్టింగ్ ఎన్విరాన్మెంట్)

NestJS లో ఒక క్లాస్‌ను టెస్ట్ చేయడానికి మనం ఒక డమ్మీ మోడ్యూల్ ఎన్విరాన్మెంట్‌ను క్రియేట్ చేయాలి, దాన్నే **`TestingModule`** అంటారు.

#### 🛠️ Unit Testing & Mock Repository ఉదాహరణ:

మనం `UsersService` ని టెస్ట్ చేసేటప్పుడు ఒరిజినల్ డేటాబేస్ కి కనెక్ట్ అవ్వకూడదు. అందుకని దాని రిపోజిటరీని `jest.fn()` తో ఇలా మాక్ (Mock) చేస్తాం:

```typescript
// users.service.spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "./user.entity";

describe("UsersService", () => {
  let service: UsersService;
  let mockRepository;

  beforeEach(async () => {
    // 1. డమ్మీ రిపోజిటరీ మెథడ్స్ ని డిఫైన్ చేయడం
    mockRepository = {
      findOne: jest.fn(),
      save: jest.fn(),
    };

    // 2. TestingModule క్రియేట్ చేయడం
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User), // ఒరిజినల్ రిపోజిటరీ టోకెన్ తీసుకొని
          useValue: mockRepository, // దానికి బదులు మన డమ్మీ మాక్ ని సప్లై చేయడం
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("యూజర్ ఐడీ ఇస్తే కరెక్ట్ యూజర్ ఆబ్జెక్ట్ రిటర్న్ చేయాలి", async () => {
    const mockUser = { id: "1", name: "శ్రీను", email: "srinu@email.com" };

    // findOne పిలిచినప్పుడు 'mockUser' రెస్పాన్స్ ఇవ్వాలని జెస్ట్ కి చెప్పడం
    mockRepository.findOne.mockResolvedValue(mockUser);

    const result = await service.findOne("1");
    expect(result).toEqual(mockUser);
    expect(mockRepository.findOne).toHaveBeenCalledWith("1"); // కరెక్ట్ ఐడీతో పిలిచారో లేదో వెరిఫై చేయడం
  });
});
```

---

### 3. E2E Testing with Supertest (పూర్తి యాప్ చెకింగ్)

E2E టెస్టింగ్ లో మనం ఒరిజినల్ NestJS అప్లికేషన్ ఇన్‌స్టాన్స్‌ను బూట్ చేసి `supertest` ద్వారా వర్చువల్ HTTP రిక్వెస్ట్‌లను పంపుతాం.

```typescript
// users.e2e-spec.ts
import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("UsersController (E2E)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule], // పూర్తి యాప్ మోడ్యూల్ ని ఇంపోర్ట్ చేయడం
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init(); // యాప్ ని స్టార్ట్ చేయడం
  });

  it("/users (GET) -> సక్సెస్ స్టేటస్ 200 ఇవ్వాలి", () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect(200) // HTTP Status 200 ఉండాలి
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true); // రెస్పాన్స్ బాడీ ఒక అరే అయి ఉండాలి
      });
  });

  afterAll(async () => {
    await app.close(); // టెస్ట్ అయిపోయాక యాప్ క్లోజ్ చేయడం
  });
});
```

---

### 4. Test Lifecycle Hooks (జెస్ట్ లైఫ్ సైకిల్)

టెస్ట్ ఫైల్ రన్ అయ్యేటప్పుడు సెటప్ మరియు క్లీన్ అప్ పనులు చేయడానికి Jest మనకు 4 హుక్స్ ఇస్తుంది:

1. **`beforeAll`:** ఈ ఫైల్ లోని అన్ని టెస్ట్‌లు స్టార్ట్ అవ్వడానికి ముందే **ఒక్కసారి మాత్రమే** రన్ అవుతుంది (ఉదా: E2E లో యాప్ లేదా టెస్ట్ DB ని బూట్ చేయడానికి).
2. **`beforeEach`:** ప్రతి ఒక్క `it()` టెస్ట్ కేస్ రన్ అవ్వడానికి ముందే రన్ అవుతుంది (ప్రతి టెస్ట్ కీ ఫ్రెష్ మాక్ స్టేట్ క్రియేట్ చేయడానికి).
3. **`afterEach`:** ప్రతి టెస్ట్ కేస్ పూర్తి కాగానే రన్ అవుతుంది (మాక్స్ ని క్లియర్ చేయడానికి `jest.clearAllMocks()`).
4. **`afterAll`:** అన్ని టెస్ట్‌లు ముగిశాక **చివర్లో ఒక్కసారి** రన్ అవుతుంది (కనెక్షన్స్ క్లోజ్ చేయడానికి).

---

### 5. Testing Best Practices (ప్రొడクション రూల్స్)

1. **Isolate your Unit Tests:** యూనిట్ టెస్ట్‌లలో పొరపాటున కూడా అసలైన డేటాబేస్ ని గాని, లేదా థర్డ్ పార్టీ API లని (ఉదా: Stripe, Twilio) హిట్ చేయకూడదు. వాటిని ఎల్లప్పుడూ 100% మాక్ చేయాలి.
2. **Separate Test Database for E2E:** E2E టెస్టింగ్ లో ఒరిజినల్ ప్రొడక్షన్ లేదా డెవలప్‌మెంట్ డేటాబేస్ వాడకూడదు. టెస్ట్ రన్ అయ్యేటప్పుడు ఒక ప్రత్యేకమైన `test_db` ని క్రియేట్ చేసి, టెస్ట్ అయిపోయాక అందులోని డేటాని క్లీన్ చేయాలి.
3. **AAA Pattern (Arrange, Act, Assert):** ప్రతి టెస్ట్ కేస్ ని మూడు భాగాలుగా రాయండి:

- **Arrange:** డేటా మరియు మాక్స్ ని సిద్ధం చేయడం.
- **Act:** మనం టెస్ట్ చేయాలనుకున్న మెథడ్‌ను పిలవడం.
- **Assert:** వచ్చిన రిజల్ట్ మనం అనుకున్నట్టు ఉందో లేదో చెక్ చేయడం (`expect`).

---

## 25. Performance

NestJS లో **Performance (అప్లికేషన్ వేగం & పర్ఫార్మెన్స్ ఆప్టిమైజేషన్)** అనేది మిలియన్ల కొద్దీ రిక్వెస్ట్‌లను తక్కువ మెమరీ మరియు వేగవంతమైన రెస్పాన్స్ టైమ్‌తో హ్యాండిల్ చేయడానికి అత్యంత కీలకమైన భాగం.

ఇంటర్వ్యూలలో Node.js యొక్క సింగిల్-థ్రెడెడ్ పరిమితులను దాటి NestJS యాప్‌ను ఎలా ఆప్టిమైజ్ చేస్తారు అనే దానిపై అడిగే 10 ప్రధాన ప్రశ్నలను ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో క్లియర్ గా అర్థం చేసుకుందాం.

---

### 1. Fastify Adapter (ఎక్స్‌ప్రెస్ స్థానంలో 2x స్పీడ్)

NestJS బై-డిఫాల్ట్ **Express** ఫ్రేమ్‌వర్క్‌ను వాడుతుంది. కానీ మీకు అత్యధిక పర్ఫార్మెన్స్ మరియు లో-లాటెన్సీ (Low Latency) కావాలి అనుకుంటే, ఎక్స్‌ప్రెస్ స్థానంలో **`Fastify`** అడాప్టర్‌ను వాడుకోవచ్చు.

- **లాభం:** Fastify అనేది ఎక్స్‌ప్రెస్ కంటే **2 నుండి 3 రెట్లు వేగంగా** రిక్వెస్ట్‌లను ప్రాసెస్ చేయగలదు మరియు మెమరీని చాలా సమర్థవంతంగా వాడుకుంటుంది.
- **ఎలా మార్చాలి?:** `main.ts` లో ఇలా సెటప్ చేయాలి:

```typescript
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

const app = await NestFactory.create<NestFastifyApplication>(
  AppModule,
  new FastifyAdapter(),
);
```

---

### 2. Request Scope Performance Impact (హెచ్చరిక)

NestJS లో ప్రొవైడర్స్ (Services) బై-డిఫాల్ట్ **Singleton** (యాప్ మొత్తానికి ఒకే ఒక్క ఇన్‌స్టాన్స్) గా ఉంటాయి. కానీ మనం గనుక `@Injectable({ scope: Scope.REQUEST })` అని పెడితే, **ప్రతి ఒక్క HTTP రిక్వెస్ట్‌కు ఒక కొత్త ఇన్‌స్టాన్స్ మెమరీలో క్రియేట్ అవుతుంది**.

- **💥 పర్ఫార్మెన్స్ దెబ్బతింటుంది:** సెకనుకు 10,000 రిక్వెస్ట్‌లు వస్తే, 10,000 కొత్త ఆబ్జెక్ట్స్ క్రియేట్ అయ్యి గార్బేజ్ కలెక్షన్ (Garbage Collection) పై హెవీ లోడ్ పడుతుంది.
- **ప్రొడక్షన్ రూల్:** అత్యంత తప్పనిసరి అయితే తప్ప (ఉదా: ప్రతి రిక్వెస్ట్ కి మల్టీ-టెనెంట్ DB కనెక్షన్ మార్చడం లాంటివి) `Scope.REQUEST` ని వాడకూడదు. ఎల్లప్పుడూ డిఫాల్ట్ సింగిల్‌టన్ స్కోప్‌నే వాడాలి.

---

### 3. Core Optimization Techniques: Compression & Pagination

- **Compression (డేటా కంప్రెషన్):**
  సర్వర్ నుండి పెద్ద మొత్తంలో JSON రెస్పాన్స్ (ఉదా: 5MB డేటా) క్లయింట్‌కు వెళ్లేటప్పుడు నెట్‌వర్క్ బ్యాండ్‌విడ్త్ ఎక్కువ తీసుకుంటుంది. NestJS లో `compression` మిడిల్‌వేర్ వాడటం వల్ల, ఆ జేసన్ డేటా జిప్ (`Gzip` లేదా `Brotli`) ఫార్మాట్‌లోకి కంప్రెస్ అయి కేవలం 500KB గా మారిపోతుంది. దీనివల్ల ఫ్రంటెండ్‌కు రెస్పాన్స్ చాలా వేగంగా చేరుతుంది.
- **Pagination (పేజినేషన్ - తప్పనిసరి రూల్):**
  డేటాబేస్ లో 1 లక్ష రికార్డులు ఉన్నప్పుడు `SELECT * FROM users` అని మొత్తం డేటాని ఒకేసారి లాగితే సర్వర్ మెమరీ నిండిపోయి క్రాష్ అవుతుంది. అందుకని ఎల్లప్పుడూ **`limit`** మరియు **`offset`** (లేదా Cursor-based pagination) వాడి, ఒక పేజీకి కేవలం 10 లేదా 20 రికార్డులను మాత్రమే ముక్కలు ముక్కలుగా క్లయింట్‌కు పంపాలి.

---

### 4. Memory Optimization & Streaming Responses

- **Memory Optimization:** Node.js లో `Buffer`స్ వాడేటప్పుడు జాగ్రత్తగా ఉండాలి. పెద్ద ఫైల్స్ ని మెమరీలోకి రీడ్ చేయకుండా మునుపటి టాపిక్ లో చెప్పుకున్నట్టు స్ట్రీమ్స్ వాడాలి. అలాగే క్లోజ్ అవ్వని వెబ్‌సాకెట్ కనెక్షన్స్ లేదా అన్-సబ్‌స్క్రైబ్ చేయని RxJS అబ్జెక్ట్స్ వల్ల **Memory Leaks** వస్తాయి. వాటిని లైఫ్ సైకిల్ హుక్స్ ద్వారా క్లీన్ చేయాలి.
- **Streaming Responses:** ఒక పెద్ద రిపోర్ట్ లేదా CSV ఫైల్‌ను జనరేట్ చేసి డౌన్‌లోడ్ ఇచ్చేటప్పుడు, ఫైల్ మొత్తం క్రియేట్ అయ్యే వరకు వెయిట్ చేయకుండా, తయారవుతున్న కొద్దీ **`StreamableFile`** క్లాస్ ఉపయోగించి డేటాను క్లయింట్‌కు స్ట్రీమ్ (ముక్కలు ముక్కలుగా పుష్) చేయాలి.

---

### 5. Profiling & Detecting Performance Bottlenecks

మీ అప్లికేషన్ ఎక్కడ స్లో అవుతుందో (Bottlenecks) కనుగొనడానికి ప్రొడక్షన్ లో ఈ క్రింది పద్ధతులు వాడుతాం:

- **NestJS Devtools:** ఇది NestJS అఫీషియల్ గ్రాఫికల్ టూల్. దీని ద్వారా మీ డిపెండెన్సీ గ్రాఫ్ ఎలా ఉంది, ఏ మోడ్యూల్ ఇనిషియలైజ్ అవ్వడానికి ఎంత టైమ్ పడుతుంది అనేది విజువల్ గా చూడవచ్చు.
- **APM Tools (Application Performance Monitoring):** ప్రొడక్షన్ లో యాప్ రన్ అవుతున్నప్పుడు ఏ డేటాబేస్ క్వెరీ స్లోగా ఉంది, ఏ కంట్రోలర్ ఎక్కువ టైమ్ తీసుకుంటుంది అనేది లైవ్ లో ట్రాక్ చేయడానికి **Datadog, New Relic, లేదా Elastic APM** లాంటి టూల్స్ ఇంటిగ్రేట్ చేస్తాం.
- **Clinic.js / Node.js Profiler:** మీ కోడ్‌లో మెమరీ లీక్స్ ఉన్నాయా లేదా CPU పై లోడ్ ఎక్కువ అవుతుందా అని 'Flameグラフ'ల ద్వారా తెలుసుకోవడానికి క్లినిక్ జేసన్ లాంటి టూల్స్ తో ప్రొఫైలింగ్ చేస్తాం.

---

### 💡 NestJS Performance Cheat-Sheet (టాప్ 1% ప్రొడクション రూల్స్)

1. **క్యాషింగ్ వాడండి:** పదే పదే మారని డేటా కోసం **Redis Cache** వాడటం వల్ల 90% DB లోడ్ తగ్గుతుంది.
2. **డేటాబేస్ ఇండెక్స్:** క్వెరీలు వేగంగా రన్ అవ్వడానికి SQL టేబుల్స్ లో తరచూ వెతికే కాలమ్స్ (e.g., `email`, `status`) పై **Indexes** క్రియేట్ చేయాలి.
3. **Lazy Loading Modules:** లార్జ్ అప్లికేషన్స్ లో (ముఖ్యంగా సర్వర్‌లెస్/AWS Lambda లో డిప్లాయ్ చేసేటప్పుడు) `NestFactory.create` చేసేటప్పుడు అన్ని మోడ్యూల్స్ ఒకేసారి లోడ్ అవ్వకుండా, ఏ రౌట్ హిట్ అయితే ఆ మోడ్యూల్ మాత్రమే లోడ్ అయ్యేలా **Lazy-loaded modules** కాన్సెప్ట్ వాడాలి. దీనివల్ల 'Cold Start' టైమ్ తగ్గుతుంది.

---

## 26. Security

NestJS లో **Security (భద్రత)** అనేది ప్రొడక్షన్ లోకి అప్లికేషన్‌ను తీసుకెళ్లేటప్పుడు అత్యంత కీలకమైన భాగం. హ్యాకర్లు మన API ని డౌన్ చేయకుండా (DDoS), యూజర్ల డేటాను దొంగిలించకుండా (XSS, CSRF) ఎలా కాపాడుకోవాలో ఈ 10 ప్రధాన సెక్యూరిటీ కాన్సెప్ట్స్ ద్వారా తెలుగులో ఇన్-డెప్త్‌గా అర్థం చేసుకుందాం.

---

### 1. Helmet & CORS (ప్రాథమిక రక్షణ గోడలు)

- **Helmet (హెల్మెట్):**
  ఇది ఒక మిడిల్‌వేర్. ఇది మన HTTP రెస్పాన్స్ హెడర్స్ (HTTP Response Headers) ని ఆటోమేటిక్‌గా సెక్యూర్ చేస్తుంది. దీనివల్ల హ్యాకర్లకు మన సర్వర్ వెనుకల `Express` వాడుతున్నామా లేదా NestJS వాడుతున్నామా అనే విషయాలు (e.g., `X-Powered-By` header) తెలియకుండా దాచేస్తుంది.
- _సెటప్:_ `main.ts` లో `app.use(helmet())` అని రాస్తాం.

- **CORS (Cross-Origin Resource Sharing):**
  మన API ని కేవలం మన ఒరిజినల్ ఫ్రంటెండ్ వెబ్‌సైట్ (e.g., `https://my-app.com`) మాత్రమే యాక్సెస్ చేసేలా లాక్ చేయడం.
- _ప్రొడక్షన్ రూల్:_ పొరపాటున కూడా ప్రొడక్షన్ లో `origin: '*'` (అందరికీ యాక్సెస్) ఇవ్వకూడదు. కచ్చితంగా మీ డొమైన్‌ను మాత్రమే వైట్‌లిస్ట్ చేయాలి.

---

### 2. XSS & CSRF Prevention (వెబ్ అటాక్స్ ని అడ్డుకోవడం)

- **XSS (Cross-Site Scripting) Prevention:**
  హ్యాకర్లు ఇన్‌పుట్ ఫీల్డ్స్ ద్వారా (ఉదా: కామెంట్ బాక్స్) ప్రమాదకరమైన JavaScript కోడ్‌ను (`<script>stealTokens()</script>`) డేటాబేస్‌ లోకి పంపకుండా అడ్డుకోవడం.
- _పరిష్కారం:_ మునుపటి వాలిడేషన్ లేయర్ లో చెప్పుకున్నట్టు `class-sanitizer` లేదా `dompurify` వాడి ఇన్‌పుట్ డేటాను పూర్తిగా ప్రక్షాళన (**Input Sanitization**) చేయాలి.

- **CSRF (Cross-Site Request Forgery) Prevention:**
  యూజర్ ఒక నకిలీ వెబ్‌సైట్‌ను ఓపెన్ చేసినప్పుడు, అతని బ్రౌజర్ లో ఆల్రెడీ ఉన్న మన ఒరిజినల్ సైట్ కుకీస్ (Cookies) ని వాడుకుని హ్యాకర్లు దొంగ రిక్వెస్ట్‌లు పంపడాన్ని CSRF అంటారు.
- _పరిష్కారం:_ కుకీస్ వాడేటప్పుడు ఎల్లప్పుడూ **`httpOnly: true`** మరియు **`sameSite: 'strict'`** ఆప్షన్స్ సెట్ చేయాలి. దీనివల్ల థర్డ్-పార్టీ సైట్స్ ఆ కుకీలను వాడుకోలేవు.

---

### 3. Rate Limiting / Throttling (DDoS & బ్రూట్ ఫోర్స్ నుండి రక్షణ)

ఒక హ్యాకర్ లేదా బాట్ (Bot) ఒకే సెకనులో లక్షల రిక్వెస్ట్‌లు పంపి మన సర్వర్‌ను డౌన్ చేయకుండా (DDoS) లేదా పాస్‌వర్డ్‌లను గెస్ చేయకుండా (Brute Force అటాక్) అడ్డుకోవడానికి **Rate Limiting** వాడుతాం.

- NestJS లో దీనికోసం అఫీషియల్ **`@nestjs/throttler`** ప్యాకేజీని వాడుతాం.
- _ఉదాహరణ:_ ఒకే ఐపీ (IP) అడ్రస్ నుండి 1 నిమిషంలో గరిష్టంగా 10 రిక్వెస్ట్‌లు మాత్రమే అనుమతించాలి అని చాలా ఈజీగా సెట్ చేయవచ్చు:

```typescript
ThrottlerModule.forRoot([
  {
    ttl: 60000, // 1 నిమిషం
    limit: 10, // గరిష్టంగా 10 రిక్వెస్ట్‌లు
  },
]);
```

---

### 4. Password Hashing (పాస్‌వర్డ్ రక్షణ)

డేటాబేస్ లో యూజర్ల పాస్‌వర్డ్‌లను ఎప్పుడూ ప్లెయిన్ టెక్స్ట్ (`"password123"`) రూపంలో సేవ్ చేయకూడదు. ఒకవేళ డేటాబేస్ హ్యాక్ అయినా పాస్‌వర్డ్స్ సేఫ్‌గా ఉండటానికి క్రిప్టోగ్రాఫిక్ హ్యాషింగ్ వాడాలి.

- NestJS లో దీనికోసం **`bcrypt`** లేదా **`argon2`** (మోర్ సెక్యూర్) లైబ్రరీలను వాడుతాం.
- యూజర్ రిజిస్టర్ అయ్యేటప్పుడే `await argon2.hash(password)` ద్వారా దాన్ని హ్యాష్ మార్చి DB లో స్టోర్ చేస్తాం. లాగిన్ అప్పుడు `await argon2.verify(hash, plainPassword)` తో చెక్ చేస్తాం.

---

### 5. JWT Security & Secrets Management

- **JWT Security:** 1. టోకెన్లపై సంతకం (Sign) చేయడానికి వాడే `JWT_SECRET` అత్యంత స్ట్రాంగ్‌గా ఉండాలి.

2. టోకెన్ ఎక్స్‌పైరీ టైమ్ (`expiresIn`) ఎల్లప్పుడూ తక్కువగా (ఉదా: 15 నిమిషాలు) ఉండాలి.
3. మునుపటి టాపిక్ లో మాట్లాడుకున్నట్టు టోకెన్‌ను బ్రౌజర్ లోకల్ స్టోరేజ్ లో కాకుండా **HttpOnly Cookie** లో దాచడం అత్యంత సురక్షితం.

- **Secrets Management:**
  మీ డేటాబేస్ పాస్‌వర్డ్‌లు, కీలను కోడ్‌లో లేదా కిట్‌హబ్ (GitHub) లో పెట్టకండి. ప్రొడక్షన్ లో ఎల్లప్పుడూ **AWS Secrets Manager**, **HashiCorp Vault** లేదా ప్రొడక్షన్ ఎన్విరాన్మెంట్ వేరియబుల్స్ ద్వారా మాత్రమే వీటిని యాక్సెస్ చేయాలి.

---

### 💡 NestJS Security Best Practices Cheat-Sheet

1. **`whitelist: true` వాడండి:** DTO లో లేని అదనపు మాలీషియస్ ఫీల్డ్స్‌ను ఫిల్టర్ చేయడానికి గ్లోబల్ వాలిడేషన్ పైప్ లో `whitelist: true` కంపల్సరీ పెట్టాలి.
2. **Disable SQL Injection:** TypeORM లేదా Prisma లాంటి ORM లు బై-డిఫాల్ట్ పారామీటరైజ్డ్ క్వెరీస్ (Parameterized Queries) ని వాడుతాయి కాబట్టి SQL Injection రూట్ లెవెల్లోనే బ్లాక్ అవుతుంది. కానీ మీరు రా SQL క్వెరీలు రాసేటప్పుడు నేరుగా స్ట్రింగ్ కన్కాటినేషన్ (`query + input`) చేయకూడదు.
3. **Leaked Secrets Check:** ప్రాజెక్ట్ కిట్‌హబ్‌లో పుష్ అయ్యే ముందే సీక్రెట్స్ ఏవైనా లీక్ అవుతున్నాయా అని చెక్ చేయడానికి `gitleaks` లాంటి టూల్స్ వాడటం మంచిది.

---

## 27. Advanced NestJS

NestJS లో **Advanced Architecture (అడ్వాన్స్‌డ్ ఆర్కిటెక్చర్)** అనేది మిమ్మల్ని ఒక సాధారణ డెవలపర్ నుండి **టాప్ 1% ఆర్కిటెక్ట్/లీడ్ డెవలపర్‌గా** మార్చే అత్యంత కీలకమైన విభాగం. ఇంటర్వ్యూలలో ఫ్రేమ్‌వర్క్ అంతర్గతంగా ఎలా పనిచేస్తుంది (Internals), మెటాడేటా డ్రైవెన్ ప్రోగ్రామింగ్, మరియు అడ్వాన్స్‌డ్ డిజైన్ ప్యాటర్న్స్ పై అడిగే ప్రశ్నలను ప్రొడక్షన్ మైండ్ సెట్‌తో తెలుగులో క్లియర్ గా విశ్లేషించుకుందాం.

---

### 1. Execution Context, Reflector & Metadata

NestJS ఒక మల్టీ-ప్రోటోకాల్ ఫ్రేమ్‌వర్క్. అంటే మీ కోడ్ HTTP రిక్వెస్ట్ కావచ్చు, Microservice (gRPC/Kafka) కావచ్చు, లేదా WebSockets కావచ్చు—దేనినైనా హ్యాండిల్ చేయగలదు.

- **`ArgumentsHost`:** ఒక కంట్రోలర్ మెథడ్‌కు వస్తున్న ఒరిజినల్ ఆర్గుమెంట్స్ (e.g., `req`, `res`, `next`) ని పట్టుకోవడానికి వాడే క్లాస్.
- **`ExecutionContext`:** ఇది `ArgumentsHost` ని `extends` చేస్తుంది. దీని ద్వారా కరెంట్ రిక్వెస్ట్ ఏ ప్రోటోకాల్ ద్వారా వస్తుందో తెలుసుకోవడమే కాకుండా, ప్రస్తుతం ఏ **కంట్రోలర్ క్లాస్** (`getClass()`) మరియు ఏ **మెథడ్/హ్యాండ్లర్** (`getHandler()`) ఎగ్జిక్యూట్ అవుతున్నాయో తెలుసుకోవచ్చు.
- **Metadata & `Reflector`:** `@SetMetadata()` లేదా కస్టమ్ డెకరేటర్స్ ద్వారా మనం క్లాసెస్ లేదా మెథడ్స్ పైన కొన్ని రూల్స్ (ఉదా: పర్మిషన్స్, రోల్స్) రాస్తాం. రన్-టైమ్ లో గార్డ్స్ లేదా ఇంటర్‌సెప్టర్స్ లోపల `Reflector` క్లాస్ ఉపయోగించి ఆ మెటాడేటాని రీడ్ చేసి డైనమిక్ డిసిషన్స్ తీసుకుంటాం.

---

### 2. Custom Decorators (డెకరేటర్స్ రకాలు)

TypeScript లో డెకరేటర్స్ అనేవి మెటాడేటా యాడ్ చేయడానికి లేదా కోడ్ బిహేవియర్‌ను మార్చడానికి వాడే పవర్‌ఫుల్ ఫీచర్.

- **Param Decorators:** రిక్వెస్ట్ ఆబ్జెక్ట్ నుండి డేటాని ఎక్స్‌ట్రాక్ట్ చేయడానికి వాడతాం (ఉదాహరణకు లాగిన్ అయిన యూజర్ వివరాల కోసం కస్టమ్ `@CurrentUser()` డెకరేటర్).
- **Composite Decorators:** మల్టిపుల్ డెకరేటర్స్ ని కలిపి ఒకే ఒక సింగిల్ డెకరేటర్ గా మార్చడం.
- _ఉదాహరణ:_ ప్రతి రౌట్ పైన `@UseGuards(JwtGuard)`, `@ApiBearerAuth()`, `@Roles('ADMIN')` అని 3 లైన్లు రాయకుండా, వాటన్నింటినీ కలిపి **`@AdminAuth()`** అనే ఒకే ఒక కాంపోజిట్ డెకరేటర్ క్రియేట్ చేయవచ్చు.

```typescript
// admin-auth.decorator.ts
export function AdminAuth() {
  return applyDecorators(
    Roles("ADMIN"),
    UseGuards(JwtAuthGuard, RolesGuard),
    ApiBearerAuth(),
  );
}
```

---

### 3. ModuleRef, LazyModuleLoader & DiscoveryService

- **`ModuleRef`:** సాధారణంగా మనం కన్స్ట్రక్టర్ ద్వారా డిపెండెన్సీ ఇంజెక్షన్ (DI) చేస్తాం. కానీ కొన్నిసార్లు రన్-టైమ్ లో ఒక నిర్దిష్ట ప్రొవైడర్ ఇన్‌స్టాన్స్‌ను డైనమిక్‌గా లోడ్ చేయాల్సి వచ్చినప్పుడు `moduleRef.get(MyService)` పద్ధతిని వాడుతాం.
- **`LazyModuleLoader`:** యాప్ స్టార్ట్ అయ్యేటప్పుడు అన్ని మోడ్యూల్స్ ఒకేసారి లోడ్ అవ్వకుండా (ముఖ్యంగా AWS Lambda సర్వర్‌లెస్ లో కోల్డ్ స్టార్ట్ టైమ్ తగ్గించడానికి), ఏ రౌట్ హిట్ అయితే ఆ మోడ్యూల్ మాత్రమే రన్-టైమ్ లో లోడ్ అయ్యేలా చేయడానికి ఇది ఉపయోగపడుతుంది.
- **`DiscoveryService`:** మీ అప్లికేషన్ లో ఉన్న అన్ని కంట్రోలర్స్, ప్రొవైడర్స్ ని స్కాన్ చేసి, వాటిపై ఏవైనా కస్టమ్ మెటాడేటా డెకరేటర్స్ ఉన్నాయో లేదో రన్-టైమ్ లో వెతికి పట్టుకోవడానికి (ఉదాహరణకు: కస్టమ్ క్రాన్-జాబ్ షెడ్యూలర్ బిల్డ్ చేయడానికి) ఇది ఉపయోగపడుతుంది.

---

### 4. Async Local Storage (ALS) Integration

Node.js/NestJS అనేది సింగిల్-థ్రెడెడ్ ఎన్విరాన్మెంట్. జావా లాంటి ఫ్రేమ్‌వర్క్స్ లో ప్రతి రిక్వెస్ట్ కీ ఒక విడి థ్రెడ్ (`ThreadLocal`) ఉంటుంది కాబట్టి, ఆ రిక్వెస్ట్ పరిధిలో ఉన్న యూజర్ ఐడీని ఎక్కడైనా యాక్సెస్ చేయవచ్చు.

- NestJS లో కంట్రోలర్ నుండి సర్వీస్, సర్వీస్ నుండి రిపోజిటరీ వరకు ప్రతి మెథడ్‌కు `userId` ని పారామీటర్‌గా పాస్ చేయకుండా... రిక్వెస్ట్ స్టార్ట్ అయినప్పటి నుండి ఎండ్ అయ్యే వరకు ఆ రిక్వెస్ట్ స్పెసిఫిక్ డేటాని గ్లోబల్‌గా మెమరీలో ట్రాక్ చేయడానికి **`AsyncLocalStorage`** ని వాడుతాం.
- _Use Case:_ ప్రొడクション లో ప్రతి లాగ్ మెసేజ్ పక్కన కరెంట్ రన్ అవుతున్న `Correlation-ID` లేదా `Transaction-ID` ని ఆటోమేటిక్‌గా ప్రింట్ చేయడానికి ఇది అద్భుతంగా ఉపయోగపడుతుంది.

---

### 5. Absolute Request Lifecycle Execution Order (ఇంటర్వ్యూ గోల్డ్ మైన్)

ఇంటర్వ్యూలలో మిమ్మల్ని సీనియర్ ఆర్కిటెక్ట్‌గా నిర్ధారించే **మోస్ట్ ఇంపార్టెంట్ 100% కన్ఫర్మ్డ్ క్వశ్చన్** ఇది. ఒక HTTP రిక్వెస్ట్ వచ్చినప్పటి నుండి రెస్పాన్స్ వెళ్లేవరకు జరిగే పూర్తి ఆర్డర్:

```
[ Incoming Request ]
        │
        ▼
1. Global Middleware ──> Module Middleware
        │
        ▼
2. Global Guards ──> Controller Guards ──> Route Guards
        │
        ▼
3. Global Interceptors (Before) ──> Controller Interceptors (Before) ──> Route Interceptors (Before)
        │
        ▼
4. Global Pipes ──> Controller Pipes ──> Route Pipes ──> Parameter Pipes
        │
        ▼
5. Controller Handler (Method)
        │
        ▼
6. Service (Business Logic)
        │
        ▼
7. Route Interceptors (After) ──> Controller Interceptors (After) ──> Global Interceptors (After)
        │
        ▼
[ Exception Caught? ] ──► YES ──► Route Filter ──► Controller Filter ──► Global Filter
        │
        ▼
[ Outgoing Response ]

```

---

### 6. Monorepo Support & Building Reusable Libraries

పెద్ద కంపెనీలలో మల్టిపుల్ అప్లికేషన్స్ ఉన్నప్పుడు కోడ్ డూప్లికేషన్ లేకుండా NestJS **Monorepo** ఆర్కిటెక్చర్ వాడుతాం.

- `nest new my-project --monorepo` అని క్రియేట్ చేయడం ద్వారా ఒకే గిట్ రిపోజిటరీ లో మల్టిపుల్ యాప్స్ రన్ చేయవచ్చు.
- **Reusable Libraries:** డేటాబేస్ కనెక్షన్ లాజిక్, కస్టమ్ లాగర్, లేదా అథెంటికేషన్ గార్డ్స్ ని ఒకే ఒక సెంట్రల్ లైబ్రరీ (`nest g lib common-lib`) గా బిల్డ్ చేసి, దాన్ని మన మోనోరెపో లోని అన్ని యాప్స్ కి షేర్ చేయవచ్చు. ఇది మైక్రోసర్వీసెస్ డిజైన్ చేసేటప్పుడు ఎంతో ఉపయోగపడుతుంది.

---
