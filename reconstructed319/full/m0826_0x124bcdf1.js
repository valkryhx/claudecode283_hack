// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  jKn
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t,
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  jFt
} from "B:/~BUN/root/chunk-5w7xhbnh.js";
import {
  Jc
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  z1,
  jt
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  o,
  E,
  I,
  oe,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  zd
} from "B:/~BUN/root/chunk-79595s9y.js";
var S = 30000,
  M = "/v2/ccr-sessions/-/chat-project";

function UY() {
  return zd() !== null
}
async function y(e, n, r, i, s) {
  let a = await jt.post(M, {
    op: e,
    ...n
  }, {
    host: jKn() !== void 0 && z1() ? "ccr-gateway" : "api",
    auth: "session-jwt",
    timeout: S,
    validateStatus: () => !0,
    signal: i,
    maxContentLength: s
  });
  if (a.ok && a.status >= 300) throw new Xj(r, a.status, A(a.data), h(a.data));
  return d(a, r)
}

function A2o(e) {
  return e instanceof Xj && e.status === 400 && e.body === "unknown op"
}

function h(e) {
  return e !== null && typeof e === "object" && "error_code" in e && typeof e.error_code === "string" && e.error_code !== "" ? e.error_code : void 0
}

function A(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || typeof e.error !== "string") return e;
  let n = h(e);
  return n === void 0 ? e.error : `${e.error} (${n})`
}

function f(e, n) {
  return {
    auth: "teleport-org",
    timeout: S,
    headers: {
      "anthropic-beta": Jc
    },
    validateStatus: () => !0,
    signal: e,
    credentials: n
  }
}

function m(e, n) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${n}`
}
async function dit(e, n, r) {
  if (UY()) return y("detail", {}, "get project detail", n);
  let i = await jt.get(m(e, "/detail"), f(n, r));
  return d(i, "get project detail")
}
async function S_n(e, n, r, i, s) {
  if (UY()) return y("read-doc", {
    doc_uuid: n
  }, "read doc", r, s);
  let a = await jt.get(m(e, `/docs/${encodeURIComponent(n)}`), {
    ...f(r, i),
    maxContentLength: s
  });
  return d(a, "read doc")
}
async function $7n(e, n, r, i, s) {
  if (UY()) return y("read-file", {
    file_uuid: n
  }, "read file", r, s);
  let a = await jt.get(m(e, `/files/${encodeURIComponent(n)}/extracted`), {
    ...f(r, i),
    maxContentLength: s
  });
  return d(a, "read file")
}
var Gqr = 20971520,
  cit = 262144,
  j = Math.ceil(Gqr * 4 / 3) + 65536;
async function qri(e, n, r, i) {
  if (UY()) return y("read-file-raw", {
    file_uuid: n
  }, "download file", r, j);
  let s = await jt.get(m(e, `/files/${encodeURIComponent(n)}/raw`), {
    ...f(r, i),
    maxContentLength: j
  });
  return d(s, "download file")
}
var D = 4194304;
async function x(e, n, r) {
  if (UY()) throw new Xj("read project memory", 0, "no memory route over the CCR bridge");
  let i = await jt.get(m(e, "/detail?include=melange_memory"), {
    ...f(n, r),
    maxContentLength: D
  });
  return z(d(i, "read project memory").melange_memory)
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
  let r = [],
    i = 0;
  for (let s of n.data.files) {
    let a = H().safeParse(s);
    if (!a.success) {
      i++;
      continue
    }
    let l = a.data;
    r.push({
      path: l.path,
      content: l.content,
      size_bytes: l.size_bytes ?? Buffer.byteLength(l.content, "utf8"),
      updated_at: l.updated_at ?? null,
      truncated: l.truncated === !0
    })
  }
  if (i > 0) c("projects_tool_memory", "entries_dropped", {
    dropped: i
  }), t(`project memory: ${i} entries dropped at parse`, {
    level: "warn"
  });
  else g("projects_tool_memory");
  return {
    files: r,
    truncated: n.data.truncated === !0
  }
}
async function x2o(e, n, r, i, s) {
  if (UY()) return y("write-doc", {
    file_name: n,
    content: r
  }, "create doc", i);
  let a = await jt.post(m(e, "/docs"), {
    file_name: n,
    content: r
  }, f(i, s));
  return d(a, "create doc")
}
async function Yri(e, n, r, i, s, a, l) {
  let b = {
    content: r,
    ...a !== void 0 && {
      base_content_sha256: a
    },
    ...l !== void 0 && {
      max_replaced_content_bytes: l
    }
  };
  if (UY()) return y("update-doc", {
    doc_uuid: n,
    ...b
  }, "update doc", i);
  let k = await jt.patch(m(e, `/docs/${encodeURIComponent(n)}`), b, f(i, s));
  return d(k, "update doc")
}
async function P2o(e, n, r, i) {
  if (UY()) {
    await y("delete-doc", {
      doc_uuid: n
    }, "delete doc", r);
    return
  }
  let s = await jt.delete(m(e, `/docs/${encodeURIComponent(n)}`), void 0, f(r, i));
  d(s, "delete doc")
}
async function Xri(e, n, r, i, s) {
  if (UY()) return w(await y("kb-search", {
    query: n,
    n: r
  }, "search knowledge base", i));
  let a = await jt.get(m(e, `/kb/search?query=${encodeURIComponent(n)}&n=${r}`), f(i, s));
  return w(d(a, "search knowledge base"))
}

function w(e) {
  if (typeof e === "string") try {
    return ee(e)
  } catch {
    return e
  }
  return e
}

function Jri(e, n) {
  if (!n) return e;
  return e.split(n).join("[redacted-oauth-token]")
}
class Xj extends Error {
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
    this.name = "ProjectsApiError"
  }
}

function d(e, n) {
  if (!e.ok) throw new Xj(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new Xj(n, e.status, e.data, jFt(e.data));
  return e.data
}

function B(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0,200)}` : "";
  try {
    return `: ${_(e).slice(0,200)}`
  } catch {
    return `: ${String(e).slice(0,200)}`
  }
}
var P = new Map;

function _Kt(e, n) {
  let r = P.get(e);
  if (r !== void 0) return r;
  let i = x(e, void 0, n).catch((s) => {
    if (P.get(e) === i) P.delete(e);
    throw s
  });
  return P.set(e, i), i
}

function Cga() {
  P.clear()
}
export {
  UY,
  A2o,
  dit,
  S_n,
  $7n,
  Gqr,
  cit,
  qri,
  x2o,
  Yri,
  P2o,
  Xri,
  Jri,
  Xj,
  _Kt,
  Cga
};
