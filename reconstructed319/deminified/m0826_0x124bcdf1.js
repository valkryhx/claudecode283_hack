// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { jKn } from "B:/~BUN/root/chunk-game8aqv.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { jFt } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { Jc } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { z1, jt } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { o, E, I, oe, C, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { zd } from "B:/~BUN/root/chunk-79595s9y.js";
var timeout = 30000,
  M = "/v2/ccr-sessions/-/chat-project";
function UY() {
  return zd() !== null;
}
async function y(op, n, r, signal, maxContentLength) {
  let a = await jt.post(M, {
    op: op,
    ...n
  }, {
    host: jKn() !== void 0 && z1() ? "ccr-gateway" : "api",
    auth: "session-jwt",
    timeout: timeout,
    validateStatus: () => !0,
    signal: signal,
    maxContentLength: maxContentLength
  });
  if (a.ok && a.status >= 300) throw new ProjectsApiError(r, a.status, A(a.data), h(a.data));
  return d(a, r);
}
function A2o(e) {
  return e instanceof ProjectsApiError && e.status === 400 && e.body === "unknown op";
}
function h(e) {
  return e !== null && typeof e === "object" && "error_code" in e && typeof e.error_code === "string" && e.error_code !== "" ? e.error_code : void 0;
}
function A(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || typeof e.error !== "string") return e;
  let n = h(e);
  return n === void 0 ? e.error : `${e.error} (${n})`;
}
function f(signal_2, credentials) {
  return {
    auth: "teleport-org",
    timeout: timeout,
    headers: {
      "anthropic-beta": Jc
    },
    validateStatus: () => !0,
    signal: signal_2,
    credentials: credentials
  };
}
function m(e, n) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${n}`;
}
async function dit(e, n, r) {
  if (UY()) return y("detail", {}, "get project detail", n);
  let i = await jt.get(m(e, "/detail"), f(n, r));
  return d(i, "get project detail");
}
async function S_n(e, doc_uuid, r, i, maxContentLength_2) {
  if (UY()) return y("read-doc", {
    doc_uuid: doc_uuid
  }, "read doc", r, maxContentLength_2);
  let a = await jt.get(m(e, `/docs/${encodeURIComponent(doc_uuid)}`), {
    ...f(r, i),
    maxContentLength: maxContentLength_2
  });
  return d(a, "read doc");
}
async function $7n(e, file_uuid, r, i, maxContentLength_3) {
  if (UY()) return y("read-file", {
    file_uuid: file_uuid
  }, "read file", r, maxContentLength_3);
  let a = await jt.get(m(e, `/files/${encodeURIComponent(file_uuid)}/extracted`), {
    ...f(r, i),
    maxContentLength: maxContentLength_3
  });
  return d(a, "read file");
}
var Gqr = 20971520,
  cit = 262144,
  maxContentLength_4 = Math.ceil(Gqr * 4 / 3) + 65536;
async function qri(e, file_uuid_2, r, i) {
  if (UY()) return y("read-file-raw", {
    file_uuid: file_uuid_2
  }, "download file", r, maxContentLength_4);
  let s = await jt.get(m(e, `/files/${encodeURIComponent(file_uuid_2)}/raw`), {
    ...f(r, i),
    maxContentLength: maxContentLength_4
  });
  return d(s, "download file");
}
var maxContentLength_5 = 4194304;
async function x(e, n, r) {
  if (UY()) throw new ProjectsApiError("read project memory", 0, "no memory route over the CCR bridge");
  let i = await jt.get(m(e, "/detail?include=melange_memory"), {
    ...f(n, r),
    maxContentLength: maxContentLength_5
  });
  return z(d(i, "read project memory").melange_memory);
}
var R = 255,
  F = /^[^\r\n\v\f\u0085\u2028\u2029]*$/,
  H = p(() => u({
    path: o().max(R).regex(F),
    content: o(),
    size_bytes: E().optional().catch(void 0),
    updated_at: o().nullable().optional().catch(void 0),
    truncated: I().optional().catch(void 0)
  })),
  T = p(() => u({
    files: C(oe()),
    truncated: I().optional().catch(void 0)
  }));
function z(e) {
  if (e === void 0 || e === null) return null;
  let n = T().safeParse(e);
  if (!n.success) return c("projects_tool_memory", "parse_failed"), t("project memory: melange_memory did not parse", {
    level: "warn"
  }), null;
  let files = [],
    dropped = 0;
  for (let s of n.data.files) {
    let a = H().safeParse(s);
    if (!a.success) {
      dropped++;
      continue;
    }
    let l = a.data;
    files.push({
      path: l.path,
      content: l.content,
      size_bytes: l.size_bytes ?? Buffer.byteLength(l.content, "utf8"),
      updated_at: l.updated_at ?? null,
      truncated: l.truncated === !0
    });
  }
  if (dropped > 0) c("projects_tool_memory", "entries_dropped", {
    dropped: dropped
  }), t(`project memory: ${dropped} entries dropped at parse`, {
    level: "warn"
  });else g("projects_tool_memory");
  return {
    files: files,
    truncated: n.data.truncated === !0
  };
}
async function x2o(e, file_name, content, i, s) {
  if (UY()) return y("write-doc", {
    file_name: file_name,
    content: content
  }, "create doc", i);
  let a = await jt.post(m(e, "/docs"), {
    file_name: file_name,
    content: content
  }, f(i, s));
  return d(a, "create doc");
}
async function Yri(e, doc_uuid_2, content_2, i, s, base_content_sha256, max_replaced_content_bytes) {
  let b = {
    content: content_2,
    ...(base_content_sha256 !== void 0 && {
      base_content_sha256: base_content_sha256
    }),
    ...(max_replaced_content_bytes !== void 0 && {
      max_replaced_content_bytes: max_replaced_content_bytes
    })
  };
  if (UY()) return y("update-doc", {
    doc_uuid: doc_uuid_2,
    ...b
  }, "update doc", i);
  let k = await jt.patch(m(e, `/docs/${encodeURIComponent(doc_uuid_2)}`), b, f(i, s));
  return d(k, "update doc");
}
async function P2o(e, doc_uuid_3, r, i) {
  if (UY()) {
    await y("delete-doc", {
      doc_uuid: doc_uuid_3
    }, "delete doc", r);
    return;
  }
  let s = await jt.delete(m(e, `/docs/${encodeURIComponent(doc_uuid_3)}`), void 0, f(r, i));
  d(s, "delete doc");
}
async function Xri(e, query, n_2, i, s) {
  if (UY()) return w(await y("kb-search", {
    query: query,
    n: n_2
  }, "search knowledge base", i));
  let a = await jt.get(m(e, `/kb/search?query=${encodeURIComponent(query)}&n=${n_2}`), f(i, s));
  return w(d(a, "search knowledge base"));
}
function w(e) {
  if (typeof e === "string") try {
    return ee(e);
  } catch {
    return e;
  }
  return e;
}
function Jri(e, n) {
  if (!n) return e;
  return e.split(n).join("[redacted-oauth-token]");
}
class ProjectsApiError extends Error {
  action;
  status;
  body;
  errorCode;
  constructor(e, n, r, i) {
    super(`Projects API: ${e} failed (HTTP ${n})${B(r)}`);
    this.action = e;
    this.status = n;
    this.body = r;
    this.errorCode = i;
    this.name = "ProjectsApiError";
  }
}
function d(e, n) {
  if (!e.ok) throw new ProjectsApiError(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new ProjectsApiError(n, e.status, e.data, jFt(e.data));
  return e.data;
}
function B(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${_(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var P = new Map();
function _Kt(e, n) {
  let r = P.get(e);
  if (r !== void 0) return r;
  let i = x(e, void 0, n).catch(s => {
    if (P.get(e) === i) P.delete(e);
    throw s;
  });
  return P.set(e, i), i;
}
function Cga() {
  P.clear();
}
export { UY, A2o, dit, S_n, $7n, Gqr, cit, qri, x2o, Yri, P2o, Xri, Jri, ProjectsApiError as Xj, _Kt, Cga };