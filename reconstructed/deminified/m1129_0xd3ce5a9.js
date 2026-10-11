// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { dp } from "B:/~BUN/root/chunk-zksmb712.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Dt } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { Fl } from "B:/~BUN/root/chunk-ejjy06g8.js";
import { o, E, M, ae, C, u } from "B:/~BUN/root/chunk-n8qdr73v.js";
var timeout = 30000,
  h = "/v2/ccr-sessions/-/chat-project";
function N7() {
  return Fl() !== null;
}
async function g(op, n, r, signal, maxContentLength) {
  let a = await Dt.post(h, {
    op: op,
    ...n
  }, {
    auth: "session-jwt",
    timeout: timeout,
    validateStatus: () => !0,
    signal: signal,
    maxContentLength: maxContentLength
  });
  if (a.ok && a.status >= 300) throw new ProjectsApiError(r, a.status, x(a.data));
  return c(a, r);
}
function x(e) {
  return e !== null && typeof e === "object" && "error" in e && typeof e.error === "string" ? e.error : e;
}
function d(signal_2, credentials) {
  return {
    auth: "teleport-org",
    timeout: timeout,
    headers: {
      "anthropic-beta": dp
    },
    validateStatus: () => !0,
    signal: signal_2,
    credentials: credentials
  };
}
function l(e, n) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${n}`;
}
async function $we(e, n, r) {
  if (N7()) return g("detail", {}, "get project detail", n);
  let i = await Dt.get(l(e, "/detail"), d(n, r));
  return c(i, "get project detail");
}
async function vao(e, doc_uuid, r, i) {
  if (N7()) return g("read-doc", {
    doc_uuid: doc_uuid
  }, "read doc", r);
  let s = await Dt.get(l(e, `/docs/${encodeURIComponent(doc_uuid)}`), d(r, i));
  return c(s, "read doc");
}
async function kao(e, file_uuid, r, i) {
  if (N7()) return g("read-file", {
    file_uuid: file_uuid
  }, "read file", r);
  let s = await Dt.get(l(e, `/files/${encodeURIComponent(file_uuid)}/extracted`), d(r, i));
  return c(s, "read file");
}
var fOn = 20971520,
  maxContentLength_2 = Math.ceil(fOn * 4 / 3) + 65536;
async function Bfr(e, file_uuid_2, r, i) {
  if (N7()) return g("read-file-raw", {
    file_uuid: file_uuid_2
  }, "download file", r, maxContentLength_2);
  let s = await Dt.get(l(e, `/files/${encodeURIComponent(file_uuid_2)}/raw`), {
    ...d(r, i),
    maxContentLength: maxContentLength_2
  });
  return c(s, "download file");
}
var maxContentLength_3 = 4194304;
async function S(e, n, r) {
  if (N7()) throw new ProjectsApiError("read project memory", 0, "no memory route over the CCR bridge");
  let i = await Dt.get(l(e, "/detail?include=melange_memory"), {
    ...d(n, r),
    maxContentLength: maxContentLength_3
  });
  return F(c(i, "read project memory").melange_memory);
}
var A = 255,
  D = /^[^\r\n\v\f\u0085\u2028\u2029]*$/,
  R = f(() => u({
    path: o().max(A).regex(D),
    content: o(),
    size_bytes: E().optional().catch(void 0),
    updated_at: o().nullable().optional().catch(void 0),
    truncated: M().optional().catch(void 0)
  })),
  H = f(() => u({
    files: C(ae()),
    truncated: M().optional().catch(void 0)
  }));
function F(e) {
  if (e === void 0 || e === null) return null;
  let n = H().safeParse(e);
  if (!n.success) return p("projects_tool_memory", "parse_failed"), t("project memory: melange_memory did not parse", {
    level: "warn"
  }), null;
  let files = [],
    dropped = 0;
  for (let s of n.data.files) {
    let a = R().safeParse(s);
    if (!a.success) {
      dropped++;
      continue;
    }
    let m = a.data;
    files.push({
      path: m.path,
      content: m.content,
      size_bytes: m.size_bytes ?? Buffer.byteLength(m.content, "utf8"),
      updated_at: m.updated_at ?? null,
      truncated: m.truncated === !0
    });
  }
  if (dropped > 0) p("projects_tool_memory", "entries_dropped", {
    dropped: dropped
  }), t(`project memory: ${dropped} entries dropped at parse`, {
    level: "warn"
  });else _("projects_tool_memory");
  return {
    files: files,
    truncated: n.data.truncated === !0
  };
}
async function jfr(e, file_name, content, i, s) {
  if (N7()) return g("write-doc", {
    file_name: file_name,
    content: content
  }, "create doc", i);
  let a = await Dt.post(l(e, "/docs"), {
    file_name: file_name,
    content: content
  }, d(i, s));
  return c(a, "create doc");
}
async function Eao(e, n, content_2, i, s) {
  let a = await Dt.patch(l(e, `/docs/${encodeURIComponent(n)}`), {
    content: content_2
  }, d(i, s));
  return c(a, "update doc");
}
async function Wfr(e, doc_uuid_2, r, i) {
  if (N7()) {
    await g("delete-doc", {
      doc_uuid: doc_uuid_2
    }, "delete doc", r);
    return;
  }
  let s = await Dt.delete(l(e, `/docs/${encodeURIComponent(doc_uuid_2)}`), void 0, d(r, i));
  c(s, "delete doc");
}
async function Tao(e, query, n_2, i, s) {
  if (N7()) return j(await g("kb-search", {
    query: query,
    n: n_2
  }, "search knowledge base", i));
  let a = await Dt.get(l(e, `/kb/search?query=${encodeURIComponent(query)}&n=${n_2}`), d(i, s));
  return j(c(a, "search knowledge base"));
}
function j(e) {
  if (typeof e === "string") try {
    return J(e);
  } catch {
    return e;
  }
  return e;
}
function Cao(e, n) {
  if (!n) return e;
  return e.split(n).join("[redacted-oauth-token]");
}
class ProjectsApiError extends Error {
  action;
  status;
  body;
  constructor(e, n, r) {
    super(`Projects API: ${e} failed (HTTP ${n})${T(r)}`);
    this.action = e;
    this.status = n;
    this.body = r;
    this.name = "ProjectsApiError";
  }
}
function c(e, n) {
  if (!e.ok) throw new ProjectsApiError(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new ProjectsApiError(n, e.status, e.data);
  return e.data;
}
function T(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0, 200)}` : "";
  try {
    return `: ${b(e).slice(0, 200)}`;
  } catch {
    return `: ${String(e).slice(0, 200)}`;
  }
}
var y = new Map();
function _tt(e, n) {
  let r = y.get(e);
  if (r !== void 0) return r;
  let i = S(e, void 0, n).catch(s => {
    if (y.get(e) === i) y.delete(e);
    throw s;
  });
  return y.set(e, i), i;
}
function K4o() {
  y.clear();
}
export { N7, $we, vao, kao, fOn, Bfr, jfr, Eao, Wfr, Tao, Cao, ProjectsApiError as ytt, _tt, K4o };