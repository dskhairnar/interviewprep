Resume & Projects — One‑Liner Answers (Quick Sheet)

Profile & Skills

Q1) Your 60–90s intro?  
A) MERN full‑stack dev focused on secure, scalable apps; strong in JWT/RBAC, MongoDB, and OWASP practices.

Q2) Your differentiator?  
A) Ship fast with security‑by‑default: validation, RBAC, rate limits, secure headers, and good logging.

Q3) MongoDB vs MySQL?  
A) Mongo for flexible docs and fast iteration; MySQL for strict relations and complex joins.

Q4) OWASP approach?  
A) Validate, sanitize, least privilege, secure headers, rate limits, safe errors, and logging.

Q5) Maintainability?  
A) Feature modules, clean layers, schemas, consistent errors, tests, and CI.

Q6) Testing philosophy?  
A) Focus on auth/RBAC/CRUD/validation integration tests; in‑memory DBs; keep core flows green.

Q7) Daily tools?  
A) VS Code, GitHub, Postman, MongoDB Atlas, Netlify, Render; Node libs: helmet, joi/zod, morgan/pino.

Q8) Common MERN pitfall?  
A) JWT in localStorage (XSS); prefer httpOnly Secure cookies + rotation.

Internship

Q9) Beta Intern work?  
A) Contributed to FE/BE features, APIs, and secure coding under timelines.

Q10) Notable contribution?  
A) Added validation + pagination to an endpoint, cutting failures and payloads.

Q11) Collaboration learning?  
A) Clear contracts, small PRs, early feedback, and docs save time.

Q12) Handling feedback?  
A) Iterate fast, add tests, document learnings.

EMS (Employee Management System)

Q13) Architecture?  
A) React (Netlify) + Express (Render) + MongoDB; JWT + RBAC; modular layers.

Q14) Session persistence?  
A) Access + refresh (httpOnly, Secure cookies); strict CORS and SameSite.

Q15) RBAC rules?  
A) Admin: CRUD employees/departments, view stats; users: read own data.

Q16) Admin security?  
A) auth → authorize('admin') → validate → log/audit.

Q17) Schema/indexes?  
A) employeeId/email unique; department/status indexed; timestamps.

Q18) Search/pagination?  
A) Indexed filters; limit/offset or cursor; projections.

Q19) Biggest challenge?  
A) CORS + cookies across Netlify/Render; fixed with explicit origins and OPTIONS.

Q20) Mass assignment?  
A) Whitelist server‑side fields only.

Q21) Secrets/config?  
A) Env vars per env; validate at startup; use platform secrets.

Q22) Metrics?  
A) Latency, errors, auth failures, DB timings with correlation IDs.

Q23) Errors?  
A) Central handler with safe messages and codes.

Q24) EMS v2?  
A) Audit logs, soft deletes, bulk ops, finer perms, caching.

Q25) Why MongoDB?  
A) Flexible profiles and evolving fields; index for speed.

Resume Sorting Web App

Q26) Ranking method?  
A) Extract text, keyword/skill weights vs role profile; score and filter.

Q27) Secure uploads?  
A) Streamed, limited, validated; stored safely; auth required.

Q28) Injection/parser safety?  
A) Validate/sanitize inputs; restrict file types; safe parsers.

Q29) Data model?  
A) Users, resumes, job profiles; indexes on userId/jobId/createdAt.

Q30) Fairness?  
A) Transparent weights, adjustable scores, optional human review.

Q31) Scalability?  
A) Queues for heavy parsing, pagination, indexes.

Q32) API protection?  
A) JWT, roles, rate limits, security headers.

Q33) Next improvements?  
A) Embeddings, queues, admin health dashboards.

Q34) Prod caveats?  
A) Preflight with creds, request size limits, consistent errors.

AI Doc Q&A

Q35) Flow?  
A) Chunk → embed → FAISS → retrieve → LLM with context → answer.

Q36) Chunking?  
A) ~500–800 tokens with slight overlap for context.

Q37) Why FAISS?  
A) Fast similarity search for local use.

Q38) Grounding?  
A) Limit answers to retrieved snippets; show sources.

Q39) Multi‑doc?  
A) Merge/rerank candidates; dedupe overlaps.

Q40) FastAPI role?  
A) Async endpoints + Pydantic validation.

Q41) Next?  
A) Hybrid search, better reranking, persistent store.

Student ERP (Java)

Q42) Why Swing?  
A) Quick desktop UI without web stack.

Q43) DB access?  
A) DAO + prepared statements; transactions.

Q44) Validation?  
A) UI checks plus server‑side enforcement.

Q45) Refactor?  
A) Move to REST backend + React UI, add RBAC and audits.

Security & OWASP

Q46) XSS/CSRF?  
A) Sanitize, escape, CSP; CSRF tokens for cookie auth.

Q47) Brute force?  
A) Rate limits, backoff, lockouts, logging.

Q48) Secrets?  
A) Env vars, platform secret stores, rotation.

Q49) Errors?  
A) Generic client messages; detailed server logs.

Q50) Access reviews?  
A) Map resources/actions, enforce in middleware, test for escalation.

Deployment & Behavior

Q51) EMS deploy?  
A) Render (API) + Netlify (FE); env vars; CORS allow‑list.

Q52) Reliable releases?  
A) Small deploys, flags, smoke tests, rollback plan.

Q53) First monitoring?  
A) Latency, error rates, auth failures, DB metrics.

Q54) Conflicting requirements?  
A) Negotiate scope with risks/trade‑offs; prototype; deliver MVP.

Q55) Code reviews?  
A) Small PRs; feedback on correctness, security, readability; add tests.
