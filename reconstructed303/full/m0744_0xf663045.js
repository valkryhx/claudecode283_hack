// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Xgn
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  _,
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Xmt
} from "B:/~BUN/root/chunk-7ybsx93y.js";
import {
  vp
} from "B:/~BUN/root/chunk-jpdys232.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  bd
} from "B:/~BUN/root/chunk-rfp1pa77.js";
import {
  YG,
  Gt
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  o,
  v,
  M,
  oe,
  T,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var b = 30000,
  k = "/v2/ccr-sessions/-/chat-project";

function V8() {
  return bd() !== null
}
async function y(e, n, r, i, s) {
  let c = await Gt.post(k, {
    op: e,
    ...n
  }, {
    host: Xgn() !== void 0 && YG() ? "ccr-gateway" : "api",
    auth: "session-jwt",
    timeout: b,
    validateStatus: () => !0,
    signal: i,
    maxContentLength: s
  });
  if (c.ok && c.status >= 300) throw new YY(r, c.status, C(c.data), S(c.data));
  return a(c, r)
}

function Rso(e) {
  return e instanceof YY && e.status === 400 && e.body === "unknown op"
}

function S(e) {
  return e !== null && typeof e === "object" && "error_code" in e && typeof e.error_code === "string" && e.error_code !== "" ? e.error_code : void 0
}

function C(e) {
  if (e === null || typeof e !== "object" || !("error" in e) || typeof e.error !== "string") return e;
  let n = S(e);
  return n === void 0 ? e.error : `${e.error} (${n})`
}

function l(e, n) {
  return {
    auth: "teleport-org",
    timeout: b,
    headers: {
      "anthropic-beta": vp
    },
    validateStatus: () => !0,
    signal: e,
    credentials: n
  }
}

function m(e, n) {
  return `/api/organizations/:orgUUID/projects/${encodeURIComponent(e)}${n}`
}
async function BFe(e, n, r) {
  if (V8()) return y("detail", {}, "get project detail", n);
  let i = await Gt.get(m(e, "/detail"), l(n, r));
  return a(i, "get project detail")
}
async function ics(e, n, r, i) {
  if (V8()) return y("read-doc", {
    doc_uuid: n
  }, "read doc", r);
  let s = await Gt.get(m(e, `/docs/${encodeURIComponent(n)}`), l(r, i));
  return a(s, "read doc")
}
async function acs(e, n, r, i) {
  if (V8()) return y("read-file", {
    file_uuid: n
  }, "read file", r);
  let s = await Gt.get(m(e, `/files/${encodeURIComponent(n)}/extracted`), l(r, i));
  return a(s, "read file")
}
var kMn = 20971520,
  j = Math.ceil(kMn * 4 / 3) + 65536;
async function lcs(e, n, r, i) {
  if (V8()) return y("read-file-raw", {
    file_uuid: n
  }, "download file", r, j);
  let s = await Gt.get(m(e, `/files/${encodeURIComponent(n)}/raw`), {
    ...l(r, i),
    maxContentLength: j
  });
  return a(s, "download file")
}
var A = 4194304;
async function h(e, n, r) {
  if (V8()) throw new YY("read project memory", 0, "no memory route over the CCR bridge");
  let i = await Gt.get(m(e, "/detail?include=melange_memory"), {
    ...l(n, r),
    maxContentLength: A
  });
  return H(a(i, "read project memory").melange_memory)
}
var D = 255,
  R = /^[^\r\n\v\f\u0085\u2028\u2029]*$/,
  E = f(() => u({
    path: o().max(D).regex(R),
    content: o(),
    size_bytes: v().optional().catch(void 0),
    updated_at: o().nullable().optional().catch(void 0),
    truncated: M().optional().catch(void 0)
  })),
  F = f(() => u({
    files: T(oe()),
    truncated: M().optional().catch(void 0)
  }));

function H(e) {
  if (e === void 0 || e === null) return null;
  let n = F().safeParse(e);
  if (!n.success) return p("projects_tool_memory", "parse_failed"), t("project memory: melange_memory did not parse", {
    level: "warn"
  }), null;
  let r = [],
    i = 0;
  for (let s of n.data.files) {
    let c = E().safeParse(s);
    if (!c.success) {
      i++;
      continue
    }
    let d = c.data;
    r.push({
      path: d.path,
      content: d.content,
      size_bytes: d.size_bytes ?? Buffer.byteLength(d.content, "utf8"),
      updated_at: d.updated_at ?? null,
      truncated: d.truncated === !0
    })
  }
  if (i > 0) p("projects_tool_memory", "entries_dropped", {
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
async function Aso(e, n, r, i, s) {
  if (V8()) return y("write-doc", {
    file_name: n,
    content: r
  }, "create doc", i);
  let c = await Gt.post(m(e, "/docs"), {
    file_name: n,
    content: r
  }, l(i, s));
  return a(c, "create doc")
}
async function dcs(e, n, r, i, s, c) {
  let d = {
    content: r,
    ...c !== void 0 && {
      base_content_sha256: c
    }
  };
  if (V8()) return y("update-doc", {
    doc_uuid: n,
    ...d
  }, "update doc", i);
  let x = await Gt.patch(m(e, `/docs/${encodeURIComponent(n)}`), d, l(i, s));
  return a(x, "update doc")
}
async function xso(e, n, r, i) {
  if (V8()) {
    await y("delete-doc", {
      doc_uuid: n
    }, "delete doc", r);
    return
  }
  let s = await Gt.delete(m(e, `/docs/${encodeURIComponent(n)}`), void 0, l(r, i));
  a(s, "delete doc")
}
async function ccs(e, n, r, i, s) {
  if (V8()) return w(await y("kb-search", {
    query: n,
    n: r
  }, "search knowledge base", i));
  let c = await Gt.get(m(e, `/kb/search?query=${encodeURIComponent(n)}&n=${r}`), l(i, s));
  return w(a(c, "search knowledge base"))
}

function w(e) {
  if (typeof e === "string") try {
    return J(e)
  } catch {
    return e
  }
  return e
}

function ucs(e, n) {
  if (!n) return e;
  return e.split(n).join("[redacted-oauth-token]")
}
class YY extends Error {
  action;
  status;
  body;
  errorCode;
  constructor(e, n, r, i) {
    super(`Projects API: ${e} failed (HTTP ${n})${z(r)}`);
    this.action = e;
    this.status = n;
    this.body = r;
    this.errorCode = i;
    this.name = "ProjectsApiError"
  }
}

function a(e, n) {
  if (!e.ok) throw new YY(n, 0, e.reason === "no-auth" ? e.detail : e.reason);
  if (e.status < 200 || e.status >= 300) throw new YY(n, e.status, e.data, Xmt(e.data));
  return e.data
}

function z(e) {
  if (e == null) return "";
  if (typeof e === "string") return e ? `: ${e.slice(0,200)}` : "";
  try {
    return `: ${_(e).slice(0,200)}`
  } catch {
    return `: ${String(e).slice(0,200)}`
  }
}
var P = new Map;

function cAt(e, n) {
  let r = P.get(e);
  if (r !== void 0) return r;
  let i = h(e, void 0, n).catch((s) => {
    if (P.get(e) === i) P.delete(e);
    throw s
  });
  return P.set(e, i), i
}

function qri() {
  P.clear()
}
export {
  V8,
  Rso,
  BFe,
  ics,
  acs,
  kMn,
  lcs,
  Aso,
  dcs,
  xso,
  ccs,
  ucs,
  YY,
  cAt,
  qri
};
