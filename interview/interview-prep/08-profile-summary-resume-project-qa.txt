Resume & Project-based Interview Q&A — Profile Summary: Dinesh Santosh Khairnar

Profile & Skills

Q1) Give a 60–90 second overview of your profile.
A) I’m a MERN-focused full stack developer with a strong emphasis on secure, scalable web apps. I’ve built and deployed projects like an Employee Management System (EMS), a Resume Sorting web app, and an AI document Q&A system. My strengths are API design, JWT/RBAC auth, MongoDB data modeling, and OWASP-aligned secure coding.

Q2) What unique value do you bring as a MERN developer with a security focus?
A) I combine rapid product delivery with security-by-default. I design with validation, RBAC, rate limits, and secure headers from day one; use JWT with refresh rotation; and I monitor and harden APIs with logging and least privilege.

Q3) How do you choose between MongoDB and MySQL for a project?
A) If the domain is document-oriented, flexible schema, and needs rapid evolution (EMS, resumes), I prefer MongoDB. For strong relational constraints or complex joins (classic ERP use-cases), MySQL is a fit. I also consider indexing, transactions, and reporting requirements.

Q4) How do you approach aligning with OWASP Top 10 in your projects?
A) Input validation and sanitization, centralized error handling, strict authN/Z, secure headers, rate limiting, safe storage of secrets and tokens, least privilege DB access, and logging for detection/response.

Q5) How do you keep APIs maintainable as they grow?
A) Feature-based modules, clear boundaries (routes/controllers/services/DAOs), OpenAPI docs, consistent error format, request validation schemas, tests, and CI to catch regressions.

Q6) What’s your philosophy on testing?
A) Prioritize integration tests on critical flows (auth, RBAC, CRUD, validation). Use in-memory DBs where possible, and target p95 reliability on core endpoints before adding edge-case tests.

Q7) Which tools do you use daily?
A) VS Code, Git/GitHub, Postman, MongoDB Atlas, Netlify, Render; and for Node: nodemon, dotenv, helmet, joi/zod, express-rate-limit, and morgan/pino.

Q8) What’s one security pitfall you watch for in MERN apps?
A) Storing JWTs in localStorage (XSS risk). For production, I prefer httpOnly, Secure cookies plus refresh rotation and strict CORS.

Internship

Q9) What did you do as a Beta Intern at Miraiyantra Pvt. Ltd.?
A) Contributed to front-end and back-end tasks in a full stack setting, gaining hands-on experience with modern frameworks, API design, and secure coding practices under deadlines.

Q10) One notable contribution during the internship?
A) Improved a REST endpoint by adding validation and pagination, reducing failure rates and response sizes, and making the API more secure and predictable for consumers.

Q11) What did you learn about collaboration?
A) Clear API contracts, small PRs, early feedback, and documenting decisions reduce rework and accelerate delivery.

Q12) How did you handle feedback?
A) Treated it as signal; I iterated quickly, added tests to lock changes, and documented fixes so the team could learn collectively.

Employee Management System (EMS)

Q13) Describe the EMS architecture.
A) React frontend (Netlify) + Node/Express backend (Render) + MongoDB Atlas. JWT auth with RBAC, modular routes/controllers/services, and protected admin endpoints.

Q14) How did you implement secure login and session persistence across tabs?
A) Short-lived access token + refresh token in httpOnly, Secure cookies. Access token for API calls; refresh to reissue silently after tab reloads. Strict CORS and sameSite controls.

Q15) What RBAC rules did you enforce?
A) Admin can manage employees and departments (create/update/delete), view attendance stats; regular users have restricted read access to their own records.

Q16) How did you secure admin endpoints?
A) Auth middleware verifies JWT, then an authorize("admin") middleware checks roles. Inputs are validated, and logs/audits are recorded for admin actions.

Q17) How did you design the employee schema and indexes?
A) Fields for employeeId (unique), name, email (unique), department, status, and audit timestamps. Indexes on employeeId, email, department + status to speed common queries.

Q18) How do you handle pagination and searching employees?
A) Limit/offset or cursor pagination with indexed sort fields; filtered queries on department/status; and optional text search with projections to reduce payload.

Q19) What was your biggest EMS challenge and solution?
A) CORS and cookie credential handling across Netlify/Render. Resolved by explicit allow-listed origin, credentials=true, handling OPTIONS, and aligning secure/sameSite cookie settings.

Q20) How do you prevent mass assignment in EMS updates?
A) Whitelist fields allowed for updates and ignore unknown properties. Validation schemas enforce types and business rules.

Q21) How did you manage configuration and secrets?
A) Environment variables per environment, validated at startup. Secrets not committed; production uses platform secret managers.

Q22) What metrics did you monitor?
A) Request latency, error rates, auth failures, and DB query times. Logs include correlation IDs for debugging.

Q23) How did you structure error handling?
A) Central error middleware maps known errors to consistent JSON, hides internals in prod, and returns actionable messages for clients.

Q24) How would you evolve EMS v2?
A) Add audit logs, soft deletes with restore, bulk ops, department-level permissions, and end-to-end tests. Potentially add Redis caching for hot reads.

Q25) Why MongoDB over MySQL for EMS?
A) Flexible document model fits employee profiles and evolving fields; simpler iteration, with indexes to maintain performance.

Resume Sorting Web App

Q26) How does your resume ranking work?
A) Extracts text, tokenizes, and applies weighted keyword/skill matching against a role profile. Scores candidates and supports filters.

Q27) How do you handle file uploads securely?
A) Validate MIME/size, stream uploads (multer/busboy), store outside web root or object storage, and sanitize filenames. Only authenticated users can upload.

Q28) How do you mitigate injection and parser issues?
A) Validate/sanitize all inputs, restrict file types, and run content extraction in a controlled manner. Avoid passing untrusted strings into query operators.

Q29) How is the data model structured?
A) Collections for users, resumes, and job profiles. Indexes on userId, jobId, and createdAt for efficient lookups and filtering.

Q30) How do you explain ranking fairness?
A) Transparent scoring criteria, weight adjustments, and logs for decisions. Optional human‑in‑the‑loop review for top candidates.

Q31) How do you ensure scalability?
A) Async processing queues for extraction/scoring, pagination in listings, and indexes on frequent filters. Potential background workers for heavy parsing.

Q32) How do you protect the API?
A) JWT auth, role checks (HR vs basic user), rate limiting on upload and search endpoints, and secure headers.

Q33) What would you improve next?
A) Add synonym/semantic matching via embeddings, queue-based processing, and admin dashboards for pipeline health.

Q34) Any production caveats you handled?
A) Preflight CORS with credentials, request size limits, and standardized error responses to simplify frontend handling.

AI Doc Q&A (Ollama + FAISS + LangChain)

Q35) How does the AI QA system work end-to-end?
A) Upload docs → chunk text → embed → store in FAISS → retrieve top‑k by similarity → build context → query Ollama LLM via LangChain → return grounded answers.

Q36) What chunking strategy did you use and why?
A) ~500–800 tokens with 10–20% overlap to maintain context while controlling index size and retrieval latency.

Q37) Why FAISS?
A) It’s a fast, in‑memory vector index that supports similarity search at scale with good performance for local deployments.

Q38) How do you ensure responses are grounded in documents?
A) Use retrieved context windows, limit token budget for generation to retrieved passages, and show source snippets/links.

Q39) How do you handle multi‑document relevance?
A) Merge candidates across docs by similarity score and rerank; deduplicate overlapping chunks before prompt construction.

Q40) What did you use FastAPI for?
A) A thin, fast backend for upload, indexing, and query endpoints with Pydantic validation and async I/O.

Q41) What are next improvements?
A) Hybrid search (BM25 + vectors), better reranking, and persistent vector store for durability.

Student ERP (Java + JDBC + MySQL + Swing)

Q42) Why Java Swing for UI?
A) For a lightweight desktop client with rapid prototyping and full control over UI components without web dependencies.

Q43) How did you structure DB access?
A) DAO pattern with prepared statements to prevent SQL injection, transactions for multi‑step updates, and clear model classes.

Q44) How did you validate inputs?
A) UI‑level constraints and server‑side (DAO) checks, including numeric ranges, required fields, and format validation.

Q45) What would you refactor?
A) Migrate to a REST backend with a modern UI (React) and add role‑based permissions and audit trails.

Security & OWASP

Q46) How do you protect against XSS and CSRF?
A) Sanitize inputs, encode outputs on the frontend, enable CSP via Helmet, avoid dangerous HTML injection, and for cookie‑based auth, add CSRF tokens.

Q47) How do you protect against brute force?
A) Route-specific rate limits, exponential backoff, account lockout thresholds with safe UX, and suspicious‑activity logging.

Q48) How do you handle secret management?
A) Environment variables in dev, platform secrets in prod, no secrets in code, and rotate keys regularly.

Q49) What’s your approach to error messages?
A) Don’t reveal stack traces or internals in production. Return standardized error codes/messages and log details server‑side.

Q50) How do you approach access control reviews?
A) Map resources and actions, define role policies, write explicit checks in middleware, and add tests to prevent privilege escalation.

Deployment & DevOps

Q51) How did you deploy EMS?
A) Backend to Render with environment variables and health checks; frontend to Netlify with CORS allow‑list and environment‑specific configs.

Q52) How do you ensure reliable releases?
A) Small, frequent deploys, feature flags for risky changes, and smoke tests post‑deploy. Rollback plan on failure.

Q53) What monitoring do you add first?
A) Request latency, error rates, auth failures, and DB performance metrics. Structured logs with correlation IDs.

Behavioral & Collaboration

Q54) Tell me about a time you handled conflicting requirements.
A) I clarified priorities with stakeholders, listed risks and trade‑offs, iterated with prototypes, and found a scoped release that met security and delivery goals.

Q55) How do you approach code reviews?
A) Keep PRs small, give constructive feedback focused on correctness, security, and readability, and add tests where behavior changes.

End of Q&A
