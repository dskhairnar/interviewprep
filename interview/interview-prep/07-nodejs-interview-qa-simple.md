Node.js Interview — One‑Liner Answers (Quick Sheet)

Q1) Event loop?  
A) Single‑threaded scheduler for non‑blocking I/O; orchestrates async callbacks across phases.

Q2) Prevent blocking?  
A) Avoid sync CPU work; use async APIs, workers, streams, pagination, and profiling.

Q3) nextTick vs setImmediate?  
A) nextTick runs before the next phase (microtask); setImmediate runs in the check phase after I/O.

Q4) Express structure?  
A) routes → controllers → services → DAOs/models; shared middlewares; env‑based config.

Q5) Middlewares?  
A) Ordered (req, res, next) functions to transform/guard requests or short‑circuit.

Q6) JWT auth?  
A) Issue short‑lived access + refresh (httpOnly, Secure); verify in middleware.

Q7) Refresh tokens?  
A) Store in secure cookies/DB, rotate, detect reuse, revoke on anomaly.

Q8) OWASP hardening?  
A) Validate/sanitize, RBAC, Helmet, CORS allow‑list, rate limits, safe errors, logging.

Q9) CORS config?  
A) Explicit origins, methods, headers, credentials; handle OPTIONS.

Q10) Secure config?  
A) Env vars validated at startup; no secrets in code; use secret managers in prod.

Q11) RBAC?  
A) Map roles/permissions; authorize per route after auth.

Q12) Security headers?  
A) HSTS, noSniff, frameguard/CSP, Referrer‑Policy, Permissions‑Policy (via Helmet).

Q13) Validation?  
A) Schema‑validate body/params/query; reject with 400 using consistent errors.

Q14) REST design?  
A) Noun resources, proper status codes, pagination/filtering, consistent shapes, docs.

Q15) Mongo pagination?  
A) limit/skip for small sets; cursor/seek by _id for scale; ensure indexes.

Q16) EMS indexes?  
A) employeeId, email (unique), department, status; compound (department+status), TTL for tokens.

Q17) NoSQL injection?  
A) Whitelist fields, sanitize, avoid spreading raw client operators.

Q18) Mongo transactions?  
A) session.withTransaction on replica set; retry transient errors.

Q19) Secure uploads?  
A) Validate type/size, stream, random names, store safely, scan/quarantine if needed.

Q20) Streams benefit?  
A) Low memory, backpressure, faster for large I/O.

Q21) Error handling?  
A) Central error middleware, typed errors, safe messages, correlation IDs.

Q22) deps vs devDeps?  
A) Runtime vs build/test; omit dev in prod.

Q23) Logging?  
A) Pino/Winston JSON logs, request IDs, sensible levels, ship to aggregator.

Q24) API tests?  
A) Jest+Supertest, in‑memory Mongo, focus on auth/RBAC/validation.

Q25) Cookie security?  
A) httpOnly, Secure, SameSite, scoped, short TTLs, HTTPS only.

Q26) Rate limiting?  
A) Buckets per IP/user/key; stricter on auth; gateway or express‑rate‑limit.

Q27) XSS mitigations?  
A) Sanitize inputs, escape outputs, CSP, avoid dangerous HTML injection.

Q28) EMS deploy?  
A) Backend: Render; Frontend: Netlify; env vars, CORS allow‑list, logs.

Q29) 401 vs 403?  
A) 401 = unauthenticated; 403 = authenticated but unauthorized.

Q30) Refresh rotation detection?  
A) Track latest token family/version; revoke on old‑token use.

Q31) Env separation?  
A) Separate DBs/keys/config; flags; different logging levels.

Q32) Mongo perf?  
A) Indexes, projections, aggregation, explain(), cache hot reads.

Q33) Typed controllers?  
A) Validate with schema (zod/joi) and infer types; avoid any.

Q34) Graceful shutdown?  
A) Stop new conns, drain in‑flight, close DB, flush logs, exit.

Q35) Helmet?  
A) Middleware that sets secure headers by default.

Q36) Admin endpoint?  
A) auth → authorize('admin') → validate input → do action → log.

Q37) Mass assignment?  
A) Server‑side whitelist of updatable fields only.

Q38) Secure resume upload?  
A) Stream with limits, validate MIME/ext, object storage, signed URLs.

Q39) Monitoring?  
A) p95/p99 latency, error rate, DB metrics, health checks.

Q40) Employee search?  
A) Validated filters, indexed queries, paginate, projections.

Q41) Clustering?  
A) Use cluster/PM2 for CPU‑bound or multi‑core usage; sticky sessions if needed.

Q42) Secret rotation?  
A) Externalize; support multiple signing keys; rotate gradually.

Q43) Audit log?  
A) Append‑only actor/action/target/time; index; protect with RBAC.

Q44) Brute force defense?  
A) Rate limit, backoff, captcha, lockout with safe UX.

Q45) API versioning?  
A) /v1 or headers; deprecate with sunset; document changes.

Q46) Idempotency?  
A) Idempotency keys, upserts, pre‑existence checks.

Q47) Safe error responses?  
A) Generic messages, error codes; hide internals in prod.

Q48) Integrate better‑auth?  
A) Configure provider, sessions, role mapping; harden CORS/CSRF/rate limits.

Q49) Hard bug example?  
A) CORS preflight misconfig; fix OPTIONS, headers, and credentials.

Q50) Why streams again?  
A) To emphasize: they reduce memory and improve throughput for large I/O.
