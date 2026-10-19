// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b, xn } from "B:/~BUN/root/chunk-jthpk6wv.js";
function zDe(n) {
  return typeof n === "object" && n !== null && ("name" in n && n.name === "AbortError" || "message" in n && String(n.message).includes("FetchRequestCanceledException"));
}
var aWt = n => {
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
        return t;
      }
    } catch {}
    try {
      return Error(JSON.stringify(n));
    } catch {}
  }
  return Error(n);
};
var Zn = (() => {
  class n extends Error {}
  return n;
})();
class Mt extends Zn {
  constructor(n, e, t, r, o) {
    super(`${Mt.makeMessage(n, e, t)}`);
    this.status = n, this.headers = r, this.requestID = r?.get("request-id"), this.workspaceID = r?.get("anthropic-workspace-id"), this.error = e, this.type = o ?? null;
  }
  static makeMessage(n, e, t) {
    let r = e?.message ? typeof e.message === "string" ? e.message : JSON.stringify(e.message) : e ? JSON.stringify(e) : t;
    if (n && r) return `${n} ${r}`;
    if (n) return `${n} status code (no body)`;
    if (r) return r;
    return "(no status code or body)";
  }
  static generate(n, e, message, r) {
    if (!n || !r) return new zu({
      message: message,
      cause: aWt(e)
    });
    let o = e,
      i = o?.error?.type;
    if (n === 400) return new lWt(n, o, message, r, i);
    if (n === 401) return new t2e(n, o, message, r, i);
    if (n === 403) return new dWt(n, o, message, r, i);
    if (n === 404) return new n2e(n, o, message, r, i);
    if (n === 409) return new cWt(n, o, message, r, i);
    if (n === 422) return new uWt(n, o, message, r, i);
    if (n === 429) return new pWt(n, o, message, r, i);
    if (n >= 500) return new fWt(n, o, message, r, i);
    return new Mt(n, o, message, r, i);
  }
}
class Au extends Mt {
  constructor({
    message: message_2
  } = {}) {
    super(void 0, void 0, message_2 || "Request was aborted.", void 0);
  }
}
class zu extends Mt {
  constructor({
    message: message_3,
    cause: cause
  }) {
    super(void 0, void 0, message_3 || "Connection error.", void 0);
    if (cause) this.cause = cause;
  }
}
class cC extends zu {
  constructor({
    message: message_4
  } = {}) {
    super({
      message: message_4 ?? "Request timed out."
    });
  }
}
class Shn extends Zn {
  constructor(n, {
    cause: cause_2
  } = {}) {
    super(n ?? "Retryable error.");
    if (cause_2 !== void 0) this.cause = cause_2;
  }
}
class lWt extends Mt {}
class t2e extends Mt {}
class dWt extends Mt {}
class n2e extends Mt {}
class cWt extends Mt {}
class uWt extends Mt {}
class pWt extends Mt {}
class fWt extends Mt {}
class GDe extends Error {
  constructor(n) {
    super(n);
    this.name = this.constructor.name;
  }
}
class pT extends Error {}
class nh extends Error {
  name = "CliUserError";
}
class AbortError extends Error {
  constructor(n) {
    super(n);
    this.name = "AbortError";
  }
}
class kd extends AbortError {}
function Ve(n) {
  try {
    return n instanceof AbortError || n instanceof Au || n instanceof Error && (n.name === "AbortError" || "__CANCEL__" in n && Boolean(n.__CANCEL__));
  } catch {
    return !1;
  }
}
class ConfigParseError extends Error {
  filePath;
  defaultConfig;
  constructor(n, e, t) {
    super(n);
    this.name = "ConfigParseError", this.filePath = e, this.defaultConfig = t;
  }
}
class ShellError extends Error {
  stdout;
  stderr;
  code;
  interrupted;
  hadSandboxViolation;
  constructor(n) {
    super("Shell command failed");
    this.name = "ShellError", this.stdout = n.stdout, this.stderr = n.stderr, this.code = n.code, this.interrupted = n.interrupted, this.hadSandboxViolation = n.hadSandboxViolation ?? !1;
  }
}
class TeleportOperationError extends Error {
  formattedMessage;
  constructor(n, e) {
    super(n);
    this.formattedMessage = e;
    this.name = "TeleportOperationError";
  }
}
class TelemetrySafeError extends Error {
  telemetryMessage;
  errorClass;
  constructor(n, e, t) {
    super(n);
    this.name = "TelemetrySafeError", this.telemetryMessage = e ?? n, this.errorClass = t;
  }
}
class Nr extends TelemetrySafeError {}
var Ye = (n, telemetryMessage) => {
    try {
      if (n !== null && typeof n === "object" && !("telemetryMessage" in n) && Object.isExtensible(n)) Object.assign(n, {
        telemetryMessage: telemetryMessage
      });
    } catch {}
    return n;
  },
  gV = (n, e) => {
    try {
      if (n !== null && typeof n === "object" && Object.isExtensible(n)) {
        let t = n,
          r = Object.entries(e).filter(([o, i]) => i !== void 0 && !(o in t));
        Object.assign(t, Object.fromEntries(r));
      }
    } catch {}
    return n;
  },
  s = Symbol("telemetryChildExitStatus"),
  _qo = (n, value) => {
    try {
      if (value !== void 0 && n !== null && typeof n === "object" && !Object.hasOwn(n, s) && Object.isExtensible(n)) Object.defineProperty(n, s, {
        value: value,
        enumerable: !1,
        writable: !1,
        configurable: !1
      });
    } catch {}
    return n;
  };
function d1(n) {
  try {
    if (n !== null && typeof n === "object" && "telemetryMessage" in n && typeof n.telemetryMessage === "string") return n.telemetryMessage;
  } catch {}
  return;
}
function _P(n, e) {
  return n instanceof Error && n.message === e;
}
function H(n) {
  return n instanceof Error ? n : Error(String(n));
}
function d(n) {
  return n instanceof Error ? n.message : String(n);
}
function k(n) {
  if (n && typeof n === "object" && "code" in n && typeof n.code === "string") return n.code;
  return;
}
function Fr(n) {
  return pS(k(n));
}
function pS(n) {
  return n && /^[A-Z][A-Z0-9_]{0,63}$/.test(n) ? xn(n) : void 0;
}
var f = -2147483648,
  l = 4294967295;
function bqo(n) {
  try {
    if (n === null || typeof n !== "object") return;
    let e = Object.getOwnPropertyDescriptor(n, s),
      t = e !== void 0 && Object.hasOwn(e, "value") ? e.value : void 0;
    return typeof t === "number" && Number.isInteger(t) && t >= f && t <= l ? t : void 0;
  } catch {
    return;
  }
}
var _et = "did not become reachable within",
  bet = "exited before it became reachable",
  whn = "The socket connection was closed unexpectedly";
function yQn(n) {
  return [...n.matchAll(/\bE\d?[A-Z]{2,14}\b/g)].filter(item => !"/\\".includes(n[item.index - 1] ?? ".")).map(item => item[0]);
}
function Cm(n) {
  let e = n?.name;
  return typeof e === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(e) ? xn(e) : void 0;
}
function Tg(n) {
  return Fr(n) ?? Cm(n);
}
function eY(n) {
  return xn(Fr(n)?.toLowerCase() ?? "other");
}
function P$(n) {
  return Cm(n);
}
function Ude(n) {
  return n !== void 0 && /^[A-Z][A-Za-z0-9_]{0,63}$/.test(n) ? xn(n) : void 0;
}
function _Qn(n) {
  let e = Ude(n);
  return e === void 0 ? void 0 : xn(e.toLowerCase());
}
function wL(n) {
  return typeof n === "string" && /^[A-Z][a-zA-Z]{0,63}$/.test(n) ? xn(n) : void 0;
}
function vhn(n) {
  return typeof n === "string" && /^[a-z][a-z_]{0,39}$/.test(n) ? xn(n) : b("unparseable");
}
function Tb(n) {
  return /^[a-z][a-z0-9_]{0,39}$/.test(n) ? xn(n) : b("unparseable");
}
function nCe(n) {
  if (typeof n !== "string") return;
  return /^[A-Za-z][A-Za-z0-9_-]{0,63}$/.test(n) ? xn(n) : b("nonconforming");
}
function Sqo(n) {
  if (n === void 0) return;
  let e = n.indexOf(":"),
    t = e === -1 ? n : n.slice(0, e);
  if (!/^[a-z][a-z0-9_]{0,39}$/.test(t)) return b("unparseable");
  if (e === -1) return xn(t);
  let r = n.slice(e + 1),
    o = pS(r) ?? wL(r) ?? (r === "string" || r === "non-error" ? r : "Error");
  return xn(`${t}:${o}`);
}
function wqo(n) {
  return wL(n);
}
function khn(n) {
  let e = n?.constructor?.name;
  return typeof e === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(e) ? xn(e) : b("unparseable");
}
function tWr(n) {
  return E.test(n) ? xn(n) : void 0;
}
var E = /^(?:<user-code>|(?:[\w$.\-<>[\]]{1,72}\.(?:[cm]?[jt]sx?|json|node|wasm|exe)|node:internal(?:\/[a-z0-9_-]{1,40}){1,4}|node:[a-z0-9_]{1,30}(?:\/(?:promises|web|consumers|posix|win32|types|strict|reporters))?|bun:[a-z0-9_]{1,20}|internal:[a-z0-9_-]{1,30}(?:\/[a-z0-9_-]{1,40}){0,3}|<anonymous>|\[eval\](?:-wrapper)?|native|unknown|cli|claude|ws|undici|node-fetch|isomorphic-fetch|vercel_fetch|utf-8-validate)(?::\d{1,8}){2})$/,
  bye = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EMFILE"]);
function vqo(n) {
  let e = k(n);
  return e === "ENOSPC" || e === "EDQUOT";
}
var kqo = new Set(["EACCES", "EPERM", "EROFS"]);
function Ts(n) {
  return n !== null && typeof n === "object" && "errno" in n && typeof n.errno === "number";
}
function ez(n, e, t = 5) {
  let r = n;
  for (let o = 0; o < t; o++) {
    if (!(r instanceof Error)) return;
    if (e(r)) return r;
    r = r.cause;
  }
  return;
}
function G(n) {
  return k(n) === "ENOENT";
}
function qi(n) {
  let e = k(n);
  return e === "ENOENT" || e === "ENOTDIR";
}
function hV(n) {
  return k(n) === "EISDIR";
}
function Eqo(n) {
  return k(n) === "E2BIG";
}
function Tqo(n) {
  try {
    if (k(n) !== "ECONNRESET") return !1;
    let e = n instanceof Error ? n.stack : void 0;
    if (typeof e !== "string") return !1;
    let t = e.split(`
`).find(item => item.trim().startsWith("at "));
    return t !== void 0 && t.includes("node:_http_server");
  } catch {
    return !1;
  }
}
function bQn(n) {
  if (n && typeof n === "object" && "path" in n && typeof n.path === "string") return n.path;
  return;
}
function mWt(n) {
  let e = n.message ? `${n.name}: ${n.message}` : n.name,
    t = n.stack;
  if (!t) return e;
  if (t.startsWith(e)) return t;
  let r = t.split(`
`),
    o = r[0] ?? "",
    i = o === n.name || o.startsWith(`${n.name}:`) ? r.slice(1) : r;
  return [e, ...i].join(`
`);
}
var u = new Set(["ENOENT", "EACCES", "EPERM", "ENOTDIR", "ELOOP", "ENAMETOOLONG", "EROFS"]);
function Wt(n) {
  return HA(k(n));
}
function HA(n) {
  return n !== void 0 && u.has(n);
}
function bP(n) {
  let e = n instanceof Error ? n.cause : void 0;
  if (typeof e !== "object" || e === null || !("telemetryCode" in e)) return;
  return typeof e.telemetryCode === "string" ? e.telemetryCode : void 0;
}
var a = new Set(["ENOSPC", "EDQUOT", "ENFILE", "EIO"]);
function o_(n) {
  return nWr(k(n));
}
function nWr(n) {
  return n === "EDEADLK" || n === "EINTR" || n === "ENXIO" || n === "ENODEV" || n === "ECANCELED" || n === "ENEEDAUTH" || n === "ESTALE" || n === "EUNKNOWN" || n === "ENOMEM" || n !== void 0 && c(n);
}
function c(n) {
  return n === "UNKNOWN" || n.startsWith("Unknown system error");
}
function gWt(n, e = "win32") {
  if (e !== "win32") return !1;
  try {
    return Ts(n) && n.code === "EBADF" && n.syscall === "read";
  } catch {
    return !1;
  }
}
function tz(n) {
  if (typeof n !== "string") return;
  return /^E[A-Z0-9]+$/.test(n) || c(n) ? n : void 0;
}
function Cqo(n) {
  let e = k(n);
  return e !== void 0 && a.has(e);
}
function fm(n) {
  return hWt(k(n));
}
function hWt(n) {
  return n !== void 0 && (u.has(n) || n === "EISDIR" || a.has(n));
}
function of(n, e) {
  if (e?.(n)) return !0;
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return !1;
  let t = n.response?.status;
  return t === void 0 || t === 401 || t === 403 || t === 429;
}
function gre(n) {
  return n instanceof Error && /maxContentLength size of .* exceeded/.test(n.message);
}
function pi(n) {
  let message_5 = d(n);
  if (!n || typeof n !== "object" || !("isAxiosError" in n) || !n.isAxiosError) return {
    kind: "other",
    message: message_5
  };
  let t = n,
    status = t.response?.status;
  if (status === 401 || status === 403) return {
    kind: "auth",
    status: status,
    message: message_5
  };
  if (t.code === "ECONNABORTED") return {
    kind: "timeout",
    status: status,
    message: message_5
  };
  if (t.code === "ECONNREFUSED" || t.code === "ENOTFOUND") return {
    kind: "network",
    status: status,
    message: message_5
  };
  return {
    kind: "http",
    status: status,
    message: message_5
  };
}
function Sye(n) {
  return n !== void 0 && n >= 400 && n < 500 && n !== 408 && n !== 409 && n !== 429;
}
export { zDe, aWt, Zn, Mt, Au, zu, cC, Shn, lWt, t2e, dWt, n2e, cWt, uWt, pWt, fWt, GDe, pT, nh, AbortError as Ke, kd, Ve, ConfigParseError as yP, ShellError as mV, TeleportOperationError as ap, TelemetrySafeError as x, Nr, Ye, gV, _qo, d1, _P, H, d, k, Fr, pS, bqo, _et, bet, whn, yQn, Cm, Tg, eY, P$, Ude, _Qn, wL, vhn, Tb, nCe, Sqo, wqo, khn, tWr, bye, vqo, kqo, Ts, ez, G, qi, hV, Eqo, Tqo, bQn, mWt, Wt, HA, bP, o_, nWr, gWt, tz, Cqo, fm, hWt, of, gre, pi, Sye };