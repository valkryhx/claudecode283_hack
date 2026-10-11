// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  y,
  bn
} from "B:/~BUN/root/chunk-kks4mj3w.js";

function qde(n) {
  return typeof n === "object" && n !== null && (("name" in n) && n.name === "AbortError" || ("message" in n) && String(n.message).includes("FetchRequestCanceledException"))
}
var rgt = (n) => {
  if (n instanceof Error) return n;
  if (typeof n === "object" && n !== null) {
    try {
      if (Object.prototype.toString.call(n) === "[object Error]") {
        let e = Error(n.message, n.cause ? {
          cause: n.cause
        } : {});
        if (n.stack) e.stack = n.stack;
        if (n.cause && !e.cause) e.cause = n.cause;
        if (n.name) e.name = n.name;
        return e
      }
    } catch {}
    try {
      return Error(JSON.stringify(n))
    } catch {}
  }
  return Error(n)
};
class Wn extends Error {}
class Ot extends Wn {
  constructor(n, e, t, r, o) {
    super(`${Ot.makeMessage(n,e,t)}`);
    this.status = n, this.headers = r, this.requestID = r?.get("request-id"), this.error = e, this.type = o ?? null
  }
  static makeMessage(n, e, t) {
    let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)"
  }
  static generate(n, e, t, r) {
    if (!n || !r) return new Np({
      message: t,
      cause: rgt(e)
    });
    let o = e,
      i = o?.error?.type;
    if (n === 400) return new z9e(n, o, t, r, i);
    if (n === 401) return new V_e(n, o, t, r, i);
    if (n === 403) return new G9e(n, o, t, r, i);
    if (n === 404) return new q_e(n, o, t, r, i);
    if (n === 409) return new V9e(n, o, t, r, i);
    if (n === 422) return new q9e(n, o, t, r, i);
    if (n === 429) return new K9e(n, o, t, r, i);
    if (n >= 500) return new Y9e(n, o, t, r, i);
    return new Ot(n, o, t, r, i)
  }
}
class _u extends Ot {
  constructor({
    message: n
  } = {}) {
    super(void 0, void 0, n || "Request was aborted.", void 0)
  }
}
class Np extends Ot {
  constructor({
    message: n,
    cause: e
  }) {
    super(void 0, void 0, n || "Connection error.", void 0);
    if (e) this.cause = e
  }
}
class Y$ extends Np {
  constructor({
    message: n
  } = {}) {
    super({
      message: n ?? "Request timed out."
    })
  }
}
class ogt extends Wn {
  constructor(n, {
    cause: e
  } = {}) {
    super(n ?? "Retryable error.");
    if (e !== void 0) this.cause = e
  }
}
class z9e extends Ot {}
class V_e extends Ot {}
class G9e extends Ot {}
class q_e extends Ot {}
class V9e extends Ot {}
class q9e extends Ot {}
class K9e extends Ot {}
class Y9e extends Ot {}
class K_e extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name
  }
}
class Tj extends Error {}
class rm extends Error {
  name = "CliUserError"
}
class We extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError"
  }
}
class ul extends We {}

function Ke(n) {
  try {
    return n instanceof We || n instanceof _u || n instanceof Error && (n.name === "AbortError" || ("__CANCEL__" in n) && Boolean(n.__CANCEL__))
  } catch {
    return !1
  }
}
class GD extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    this.name = "ConfigParseError", this.filePath = e, this.defaultConfig = t
  }
}
class X$ extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  constructor(n) {
    super("Shell command failed");
    this.name = "ShellError", this.stdout = n.stdout, this.stderr = n.stderr, this.code = n.code, this.interrupted = n.interrupted, this.hadSandboxViolation = n.hadSandboxViolation ?? !1
  }
}
class bu extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError"
  }
}
class P extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    this.name = "TelemetrySafeError", this.telemetryMessage = e ?? n, this.errorClass = t
  }
}
class Mr extends P {}
var st = (n, e) => {
    try {
      if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) Object.assign(n, {
        telemetryMessage: e
      })
    } catch {}
    return n
  },
  J$ = (n, e) => {
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
  SKr = (n, e) => {
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

function hQ(n) {
  try {
    if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") return n.telemetryMessage
  } catch {}
  return
}

function oP(n, e) {
  return n instanceof Error && n.message === e
}

function te(n) {
  return n instanceof Error ? n : Error(String(n))
}

function l(n) {
  return n instanceof Error ? n.message : String(n)
}

function v(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return
}

function ao(n) {
  return pA(v(n))
}

function pA(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? bn(n) : void 0
}
var f = -2147483648,
  c = 4294967295;

function wKr(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s),
      t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= f && t <= c ? t : void 0
  } catch {
    return
  }
}
var $Be = "did not become reachable within",
  UBe = "exited before it became reachable",
  jjt = "The socket connection was closed unexpectedly";

function Byn(n) {
  return [...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)].filter((e) => !"/\\".includes(n[e.index - 1] ?? ".")).map((e) => e[0])
}

function Ym(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? bn(e) : void 0
}

function Kg(n) {
  return ao(n) ?? Ym(n)
}

function ZY(n) {
  return bn(ao(n)?.toLowerCase() ?? "other")
}

function VD(n) {
  return Ym(n)
}

function yQ(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? bn(n) : void 0
}

function jyn(n) {
  let e = yQ(n);
  return e === void 0 ? void 0 : bn(e.toLowerCase())
}

function sP(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? bn(n) : void 0
}

function Wjt(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? bn(n) : y("unparseable")
}

function a_(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? bn(n) : y("unparseable")
}

function Kde(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? bn(n) : y("nonconforming")
}

function vKr(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"),
    t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return y("unparseable");
  if (e === -1) return bn(t);
  let r = n.slice(e + 1),
    o = pA(r) ?? sP(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return bn(`${t}:${o}`)
}

function kKr(n) {
  return sP(n)
}

function zjt(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? bn(e) : y("unparseable")
}

function EKr(n) {
  return E.test(n) ? bn(n) : void 0
}
var E = /^(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2}$/,
  Sre = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]),
  TKr = new Set(["EACCES", "EPERM", "EROFS"]);

function as(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number"
}

function xK(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause
  }
  return
}

function B(n) {
  return v(n) === "ENOENT"
}

function CKr(n) {
  let e = v(n);
  return e === "ENOENT" || e === "ENOTDIR"
}

function wre(n) {
  return v(n) === "EISDIR"
}

function RKr(n) {
  return v(n) === "E2BIG"
}

function AKr(n) {
  try {
    if (v(n) !== "ECONNRESET") return !1;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return !1;
    let t = e.split(`
`).find((r) => r.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server")
  } catch {
    return !1
  }
}

function xKr(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return
}
var u = new Set(["ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS"]);

function Et(n) {
  return cT(v(n))
}

function cT(n) {
  return n !== void 0 && u.has(n)
}

function QI(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0
}
var a = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);

function gg(n) {
  return R9n(v(n))
}

function R9n(n) {
  return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== void 0 && d(n)
}

function d(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error")
}

function sgt(n, e = "win32") {
  if (e !== "win32") return !1;
  try {
    return as(n) && n.code === "EBADF" && n.syscall === "read"
  } catch {
    return !1
  }
}

function Q$(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || d(n) ? n : void 0
}

function PKr(n) {
  let e = v(n);
  return e !== void 0 && a.has(e)
}

function Pf(n) {
  return igt(v(n))
}

function igt(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || a.has(n))
}

function Zd(n, e) {
  if (e?.(n)) return !0;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return !1;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429
}

function Xs(n) {
  let e = l(n);
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

function BBe(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429
}
export {
  qde,
  rgt,
  Wn,
  Ot,
  _u,
  Np,
  Y$,
  ogt,
  z9e,
  V_e,
  G9e,
  q_e,
  V9e,
  q9e,
  K9e,
  Y9e,
  K_e,
  Tj,
  rm,
  We,
  ul,
  Ke,
  GD,
  X$,
  bu,
  P,
  Mr,
  st,
  J$,
  SKr,
  hQ,
  oP,
  te,
  l,
  v,
  ao,
  pA,
  wKr,
  $Be,
  UBe,
  jjt,
  Byn,
  Ym,
  Kg,
  ZY,
  VD,
  yQ,
  jyn,
  sP,
  Wjt,
  a_,
  Kde,
  vKr,
  kKr,
  zjt,
  EKr,
  Sre,
  TKr,
  as,
  xK,
  B,
  CKr,
  wre,
  RKr,
  AKr,
  xKr,
  Et,
  cT,
  QI,
  gg,
  R9n,
  sgt,
  Q$,
  PKr,
  Pf,
  igt,
  Zd,
  Xs,
  BBe
};
