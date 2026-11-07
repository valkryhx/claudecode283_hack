// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  b,
  Yn
} from "B:/~BUN/root/chunk-drx9cnw1.js";

function k4e(n) {
  return typeof n === "object" && n !== null && (("name" in n) && n.name === "AbortError" || ("message" in n) && String(n.message).includes("FetchRequestCanceledException"))
}
var aun = (n) => {
  if (n instanceof Error) return n;
  if (typeof n === "object" && n !== null) {
    try {
      let e = Object.prototype.toString.call(n);
      if (e === "[object Error]" || e === "[object DOMException]") {
        let t = Error(n.message, n.cause ? {
          cause: n.cause
        } : {});
        if (n.stack) t.stack = n.stack;
        if (n.cause && !t.cause) t.cause = n.cause;
        if (n.name) t.name = n.name;
        return t
      }
    } catch {}
    try {
      return Error(JSON.stringify(n))
    } catch {}
  }
  return Error(n)
};
var xr = (() => {
  class n extends Error {}
  return n
})();
class It extends xr {
  constructor(n, e, t, r, o) {
    super(`${It.makeMessage(n,e,t)}`);
    this.status = n, this.headers = r, this.requestID = r?.get("request-id"), this.workspaceID = r?.get("anthropic-workspace-id"), this.error = e, this.type = o ?? null
  }
  static makeMessage(n, e, t) {
    let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)"
  }
  static generate(n, e, t, r) {
    if (!n || !r) return new lf({
      message: t,
      cause: aun(e)
    });
    let o = e,
      i = o?.error?.type;
    if (n === 400) return new lun(n, o, t, r, i);
    if (n === 401) return new urt(n, o, t, r, i);
    if (n === 403) return new dun(n, o, t, r, i);
    if (n === 404) return new frt(n, o, t, r, i);
    if (n === 409) return new cun(n, o, t, r, i);
    if (n === 422) return new uun(n, o, t, r, i);
    if (n === 429) return new fun(n, o, t, r, i);
    if (n >= 500) return new pun(n, o, t, r, i);
    return new It(n, o, t, r, i)
  }
}
class bf extends It {
  constructor({
    message: n
  } = {}) {
    super(void 0, void 0, n || "Request was aborted.", void 0)
  }
}
class lf extends It {
  constructor({
    message: n,
    cause: e
  }) {
    super(void 0, void 0, n || "Connection error.", void 0);
    if (e) this.cause = e
  }
}
class FC extends lf {
  constructor({
    message: n
  } = {}) {
    super({
      message: n ?? "Request timed out."
    })
  }
}
class pqn extends xr {
  constructor(n, {
    cause: e
  } = {}) {
    super(n ?? "Retryable error.");
    if (e !== void 0) this.cause = e
  }
}
class lun extends It {}
class urt extends It {}
class dun extends It {}
class frt extends It {}
class cun extends It {}
class uun extends It {}
class fun extends It {}
class pun extends It {}
class v4e extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name
  }
}
class ZA extends Error {}
class F_ extends Error {
  name = "CliUserError"
}
class Ke extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError"
  }
}
class du extends Ke {}

function We(n) {
  try {
    return n instanceof Ke || n instanceof bf || n instanceof Error && (n.name === "AbortError" || ("__CANCEL__" in n) && Boolean(n.__CANCEL__))
  } catch {
    return !1
  }
}
class A0 extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    this.name = "ConfigParseError", this.filePath = e, this.defaultConfig = t
  }
}
class ex extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  sandboxViolations;
  sandboxed;
  constructor(n) {
    super("Shell command failed");
    this.name = "ShellError", this.stdout = n.stdout, this.stderr = n.stderr, this.code = n.code, this.interrupted = n.interrupted, this.hadSandboxViolation = n.hadSandboxViolation ?? !1, this.sandboxViolations = n.sandboxViolations, this.sandboxed = n.sandboxed
  }
}
class mm extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError"
  }
}
class R extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    this.name = "TelemetrySafeError", this.telemetryMessage = e ?? n, this.errorClass = t
  }
}
class Sr extends R {}
var qe = (n, e) => {
    try {
      if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) Object.assign(n, {
        telemetryMessage: e
      })
    } catch {}
    return n
  },
  a = ["AggregateError", "Error", "EvalError", "RangeError", "ReferenceError", "SuppressedError", "SyntaxError", "TypeError", "URIError"],
  PKs = new Set(a);

function _Wt(n) {
  try {
    let e = n instanceof Error ? n.name : void 0,
      t = a.find((r) => r === e);
    if (t !== void 0) return t
  } catch {}
  return "a value that is not a built-in error"
}
var Y5 = (n, e) => {
    try {
      if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
        let t = n,
          r = Object.entries(e).filter(([o, i]) => i !== void 0 && !(o in t));
        Object.assign(t, Object.fromEntries(r))
      }
    } catch {}
    return n
  },
  s = Symbol("telemetryChildExitStatus"),
  OKs = (n, e) => {
    try {
      if (e !== void 0 && n !== null && typeof n === "object" && !Object.hasOwn(n, s) && Object.isExtensible(n)) Object.defineProperty(n, s, {
        value: e,
        enumerable: !1,
        writable: !1,
        configurable: !1
      })
    } catch {}
    return n
  };

function aK(n) {
  try {
    if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") return n.telemetryMessage
  } catch {}
  return
}

function PM(n, e) {
  return n instanceof Error && n.message === e
}

function F(n) {
  return n instanceof Error ? n : Error(String(n))
}

function d(n) {
  return n instanceof Error ? n.message : String(n)
}

function k(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return
}

function tr(n) {
  return db(k(n))
}

function db(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? Yn(n) : void 0
}
var l = -2147483648,
  E = 4294967295;

function IKs(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s),
      t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= l && t <= E ? t : void 0
  } catch {
    return
  }
}
var Jwt = "did not become reachable within",
  Qwt = "exited before it became reachable",
  mqn = "The socket connection was closed unexpectedly";

function X$r(n) {
  return [...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)].filter((e) => !"/\\".includes(n[e.index - 1] ?? ".")).map((e) => e[0])
}

function Lh(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? Yn(e) : void 0
}

function kh(n) {
  return tr(n) ?? Lh(n)
}

function mB(n) {
  return Yn(tr(n)?.toLowerCase() ?? "other")
}

function AG(n) {
  return Lh(n)
}

function Bwe(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? Yn(n) : void 0
}

function mun(n) {
  let e = Bwe(n);
  return e === void 0 ? void 0 : Yn(e.toLowerCase())
}

function x0(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? Yn(n) : void 0
}

function hqn(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? Yn(n) : b("unparseable")
}

function Ak(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? Yn(n) : b("unparseable")
}

function A7(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? Yn(n) : b("nonconforming")
}

function MKs(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"),
    t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return b("unparseable");
  if (e === -1) return Yn(t);
  let r = n.slice(e + 1),
    o = db(r) ?? x0(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return Yn(`${t}:${o}`)
}

function DKs(n) {
  return x0(n)
}

function Zwt(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? Yn(e) : b("unparseable")
}

function BIo(n) {
  return p.test(n) ? Yn(n) : void 0
}
var p = /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/,
  tPe = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);

function qae(n) {
  let e = k(n);
  return e === "ENOSPC" || e === "EDQUOT"
}
var LKs = new Set(["EACCES", "EPERM", "EROFS"]);

function ci(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number"
}

function Oj(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause
  }
  return
}

function K(n) {
  return k(n) === "ENOENT"
}

function wr(n) {
  let e = k(n);
  return e === "ENOENT" || e === "ENOTDIR"
}

function WH(n) {
  return k(n) === "EISDIR"
}

function NKs(n) {
  return k(n) === "E2BIG"
}

function FKs(n) {
  try {
    if (k(n) !== "ECONNRESET") return !1;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return !1;
    let t = e.split(`
`).find((r) => r.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server")
  } catch {
    return !1
  }
}

function gqn(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return
}

function hun(n) {
  let e = n.message ? `${n.name}: ${n.message}` : n.name,
    t = n.stack;
  if (!t) return e;
  if (t.startsWith(e)) return t;
  let r = t.split(`
`),
    o = r[0] ?? "",
    i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
  return [e, ...i].join(`
`)
}
var u = new Set(["ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS"]);

function qt(n) {
  return tx(k(n))
}

function tx(n) {
  return n !== void 0 && u.has(n)
}

function nx(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0
}
var c = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);

function H_(n) {
  return jIo(k(n))
}

function jIo(n) {
  return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== void 0 && f(n)
}

function f(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error")
}

function gun(n, e = "win32") {
  if (e !== "win32") return !1;
  try {
    return ci(n) && n.code === "EBADF" && n.syscall === "read"
  } catch {
    return !1
  }
}

function vY(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || f(n) ? n : void 0
}

function yqn(n) {
  let e = k(n);
  return e !== void 0 && c.has(e)
}

function Nh(n) {
  return yun(k(n))
}

function yun(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || c.has(n))
}

function Im(n, e) {
  if (e?.(n)) return !0;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return !1;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429
}

function UN(n) {
  return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message)
}

function Ai(n) {
  let e = d(n);
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return {
    kind: "other",
    message: e
  };
  let t = n,
    r = t.response?.status;
  if (r === 401 || r === 403) return {
    kind: "auth",
    status: r,
    message: e
  };
  if (t.code === "ECONNABORTED") return {
    kind: "timeout",
    status: r,
    message: e
  };
  if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND") return {
    kind: "network",
    status: r,
    message: e
  };
  return {
    kind: "http",
    status: r,
    message: e
  }
}

function Ime(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429
}
export {
  k4e,
  aun,
  xr,
  It,
  bf,
  lf,
  FC,
  pqn,
  lun,
  urt,
  dun,
  frt,
  cun,
  uun,
  fun,
  pun,
  v4e,
  ZA,
  F_,
  Ke,
  du,
  We,
  A0,
  ex,
  mm,
  R,
  Sr,
  qe,
  PKs,
  _Wt,
  Y5,
  OKs,
  aK,
  PM,
  F,
  d,
  k,
  tr,
  db,
  IKs,
  Jwt,
  Qwt,
  mqn,
  X$r,
  Lh,
  kh,
  mB,
  AG,
  Bwe,
  mun,
  x0,
  hqn,
  Ak,
  A7,
  MKs,
  DKs,
  Zwt,
  BIo,
  tPe,
  qae,
  LKs,
  ci,
  Oj,
  K,
  wr,
  WH,
  NKs,
  FKs,
  gqn,
  hun,
  qt,
  tx,
  nx,
  H_,
  jIo,
  gun,
  vY,
  yqn,
  Nh,
  yun,
  Im,
  UN,
  Ai,
  Ime
};
