// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ji, Ga, ne, mk, nt, zr } from "B:/~BUN/root/chunk-nggrknsv.js";
import { hre, Fe } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { ms, K, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { ESt, W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { x, k, G, hV, tz } from "B:/~BUN/root/chunk-3aez4b53.js";
import { je } from "B:/~BUN/root/chunk-89mss1tj.js";
import { z, $n, jn, n_, r_, ul, C$, dC, Eb, $de, ure, R$, Na, pl, ZGe, XS, h0, kI, Qa, Ds, uT, SL, $Q } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Pe, vf } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { XW, izo } from "B:/~BUN/root/chunk-xf0m410v.js";
import { yt } from "B:/~BUN/root/chunk-hz8x9zsh.js";
var regExp = new RegExp("[\\p{M}\\uFF9E\\uFF9F]{32,}", "gu"),
  regExp_2 = new RegExp("[\\p{M}\\uFF9E\\uFF9F]", "u");
var Ue = new Map(),
  oe = [],
  We = new Map();
function Se(e, n) {
  return e !== n && (e + n).normalize("NFD") === n + e;
}
function It(e) {
  let n = Ue.get(e);
  if (n !== void 0) return n;
  let sample = String.fromCodePoint(e),
    i = null;
  if (sample === "\u0334" || Se(sample, "\u0334") || Se("\u0345", sample)) {
    let order = 0,
      o = oe.length;
    while (order < o && i === null) {
      let a = order + o >> 1,
        u = oe[a];
      if (Se(sample, u.sample)) order = a + 1;else if (Se(u.sample, sample)) o = a;else i = u;
    }
    if (i === null) {
      i = {
        order: order,
        sample: sample
      }, oe.splice(order, 0, i);
      for (let a = order + 1; a < oe.length; a++) oe[a].order = a;
    }
  }
  return Ue.set(e, i), i;
}
function Dt(e) {
  let n = We.get(e);
  if (n === void 0) n = Array.from(String.fromCodePoint(e).normalize("NFKD"), r => r.codePointAt(0)), We.set(e, n);
  return n;
}
var Tt = 4096;
function dr(e, n) {
  let r = "";
  for (let i = 0; i < n; i += Tt) r += String.fromCodePoint(...e.subarray(i, Math.min(i + Tt, n)));
  return r;
}
function fr(e) {
  let int32Array = new Int32Array(e.length + 16),
    r = 0;
  for (let a = 0; a < e.length;) {
    let u = e.codePointAt(a);
    a += u > 65535 ? 2 : 1;
    for (let l of Dt(u)) {
      if (r === int32Array.length) {
        let int32Array_2 = new Int32Array(int32Array.length * 2);
        int32Array_2.set(int32Array), int32Array = int32Array_2;
      }
      int32Array[r++] = l, It(l);
    }
  }
  let int16Array = new Int16Array(r);
  for (let a = 0; a < r; a++) int16Array[a] = Ue.get(int32Array[a])?.order ?? -1;
  let s = int32Array.slice(0, r),
    int32Array_3 = new Int32Array(oe.length);
  for (let a = 0; a < r;) {
    let u = a,
      l = !0;
    while (u < r && int16Array[u] >= 0) l &&= u === a || int16Array[u - 1] <= int16Array[u], u++;
    if (l) {
      a = u + 1;
      continue;
    }
    int32Array_3.fill(0);
    for (let d = a; d < u; d++) int32Array_3[int16Array[d]]++;
    let c = a;
    for (let d = 0; d < int32Array_3.length; d++) {
      let p = int32Array_3[d];
      int32Array_3[d] = c, c += p;
    }
    for (let d = a; d < u; d++) s[int32Array_3[int16Array[d]]++] = int32Array[d];
    a = u;
  }
  return dr(s, r);
}
function FWo(e) {
  return e.length < 32 ? e : e.replace(regExp, fr);
}
var Ct = 128;
function Pt(e) {
  if (e < 768) return !0;
  let n = We.get(e);
  if (n === void 0 && !regExp_2.test(String.fromCodePoint(e))) return !0;
  return It((n ?? Dt(e))[0]) === null;
}
function gr(e, n) {
  let r = n;
  if (r < e.length && (e.charCodeAt(r) & 64512) === 56320 && (e.charCodeAt(r - 1) & 64512) === 55296) r++;
  while (r < e.length) {
    let i = e.codePointAt(r);
    if (Pt(i)) break;
    r += i > 65535 ? 2 : 1;
  }
  return Math.min(r, e.length);
}
function pr(e) {
  let n = e.length;
  while (n > 0) {
    if (n--, n > 0 && (e.charCodeAt(n) & 64512) === 56320 && (e.charCodeAt(n - 1) & 64512) === 55296) n--;
    if (Pt(e.codePointAt(n))) return n;
  }
  return 0;
}
function Ft(e, n) {
  let r = FWo(e);
  if (r.length <= Ct) return r.normalize(n);
  let i = [],
    s = "";
  for (let o = 0; o < r.length;) {
    let a = gr(r, o + Ct),
      u = (s + r.slice(o, a)).normalize(n),
      l = a === r.length ? u.length : pr(u);
    i.push(u.slice(0, l)), s = u.slice(l), o = a;
  }
  return i.join("");
}
function z4(e) {
  return Ft(e, "NFKC");
}
function j6s(e) {
  return Ft(e, "NFKD");
}
var hr = /[\x00-\x1f\x7f-\x9f\u2028\u2029]/g,
  QB = 256,
  dJn = /[\x00-\x1f\x7f-\x9f\u2028\u2029<>]/;
function mr(e) {
  return e.length <= 256 && !dJn.test(e);
}
function Q2(e) {
  return e.length > 0 && mr(e);
}
function HZe(e) {
  return e.length <= 256 && /^[A-Za-z0-9_:.-]+$/.test(e);
}
function cJn(e) {
  return e.length <= 256 && /^[\p{L}\p{M}\p{N}_:.-]+$/u.test(e);
}
function HWo(e) {
  return e.length <= 256 && /^(?:\/(?!\.\.?(?:\/|$))[A-Za-z0-9._+@-]+)+$/.test(e);
}
function gR(e) {
  return zd(e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
function zd(e) {
  return e.replace(hr, n => `&#${n.charCodeAt(0)};`);
}
function ZB(e) {
  return e.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Ru(e) {
  return zd(ZB(String(e ?? "")));
}
function p1r(e) {
  return Ru(e).replaceAll('"', "&quot;");
}
function pn(e) {
  return Bun.stripANSI(e);
}
function kDe(e) {
  return mk(pn(mk(String(e))));
}
function u0(e) {
  return e.replace(/[^\n\r\v\f\x85\u2028\u2029]+/g, n => pn(n));
}
var $t = "\\p{Default_Ignorable_Code_Point}\\u2800",
  z_ = `\\p{Cc}\\p{Cf}\\p{Cs}\\p{Co}\\p{Cn}\\u2028\\u2029${$t}`,
  EDe = String.raw`\u00ad\u034f\u061c\u115f\u1160\u17b4\u17b5\u180b-\u180f\u200b-\u200f\u202a-\u202e\u2060-\u206f\u2800\u3164\ufe00-\ufe0f\uffa0\ufff0-\ufffb\uDC00-\uDFFF\uDB40-\uDB43`,
  Ht = String.raw`\u0600-\u0605\u06dd\u070f\u0890\u0891\u08e2`,
  $Ze = `[${EDe}${Ht}\\ufeff]*`,
  regExp_3 = new RegExp(`[${EDe}${Ht}\\ufeff]`);
function xGe(e) {
  return e.replace(/([a-z)])(?=[a-z(\[])/gi, `$1${$Ze}`).replace(/\[_-\]\?/g, `(?:[_-]${$Ze})?`);
}
var regExp_4 = new RegExp(`[${z_}]+`, "gu"),
  ze = "\\u200D\\uFE0E\\uFE0F",
  regExp_5 = new RegExp(`(?:(?![${ze}])[${z_}])+`, "gu"),
  regExp_6 = new RegExp(`(?:(?![${ze}\\n])[${z_}])+`, "gu"),
  regExp_7 = new RegExp(`(?<!\\S)[${ze}]+`, "gu"),
  Sr = /\p{Cs}/gu;
function hI(e, n, r) {
  let i = pn(e.replace(Sr, "\u200B"));
  if (r !== void 0 && "keepSpelledJoiners" in r) {
    let a = new Set();
    if (i.length <= Lr && Mt.test(i)) {
      xe ??= new RegExp("\\p{RGI_Emoji}", "gv");
      for (let u of [xe, regExp_10]) for (let {
        index: index,
        0: c
      } of i.matchAll(u)) for (let d = index; d < index + c.length; d++) a.add(d);
    }
    return i.replace(regExp_4, (u, l) => {
      let c = "";
      for (let d = 0; d < u.length; d++) c += a.has(l + d) ? u.charAt(d) : c.endsWith(n) ? "" : n;
      return c;
    });
  }
  let s = r?.keepNewlines === !0 || r?.keepEmojiJoiners === !0,
    o = i.replace(r?.keepNewlines ? regExp_6 : s ? regExp_5 : regExp_4, n);
  return s ? o.replace(regExp_7, "") : o;
}
var regExp_8 = new RegExp(`[${z_}]`, "u"),
  xr = /(?! )\p{Zs}|[\uFFFC\u{1D159}\u{13441}\u{13442}\u{16FE4}]|^ | $/u,
  pe = "[\\p{M}\\u1160-\\u11FF\\uD7B0-\\uD7FF]",
  regExp_9 = new RegExp(`(?<![\\p{L}\\p{N}\\p{M}])${pe}|${pe}{9}|\\p{Soft_Dotted}\\p{M}*\\u0307|[\\u0131\\u0237]\\p{M}|(?<=[\\p{sc=Latin}\\p{sc=Common}]${pe}*)(?!\\p{sc=Inherited})${pe}`, "u"),
  wr = String.raw`\u0620\u0626\u0628\u062A-\u062E\u0633-\u063F\u0641-\u0647\u0649\u064A\u066E\u066F\u0678-\u0687\u069A-\u06BF\u06C1\u06C2\u06CC\u06CE\u06D0\u06D1\u06FA-\u06FC\u06FF\u0750-\u0758\u075C-\u076A\u076D-\u0770\u0772\u0775-\u0777\u077A-\u077F\u0886\u0889-\u088D\u088F\u08A0-\u08A9\u08AF\u08B0\u08B3-\u08B8\u08BA-\u08C8`,
  Rr = String.raw`\u0620\u0622-\u063F\u0641-\u064A\u066E\u066F\u0671-\u0673\u0675-\u06D3\u06D5\u06EE\u06EF\u06FA-\u06FC\u06FF\u0750-\u077F\u0870-\u0882\u0886\u0889-\u088F\u08A0-\u08AC\u08AE-\u08C8`,
  _r = [2304, 2432, 2688, 2816, 3072, 3200, 3328].map(vr),
  Nt = String.raw`[\u0D9A-\u0DC6]`,
  regExp_10 = new RegExp([..._r, `\\u200D(?<=${Nt}\\u0DCA.)(?=${Nt})`, `\\u200C(?<=[${wr}](?:(?=[\\p{sc=Arabic}\\p{sc=Inherited}])(?!\\p{Default_Ignorable_Code_Point})\\p{Mn}){0,8}.)(?=[${Rr}])`].join("|"), "gu"),
  regExp_11 = new RegExp(`\\u20E3|\\u263A${pe}`, "u"),
  Mt = /[\u200C\u200D\uFE0F\u{E007F}]/u,
  xe;
function vr(e) {
  let n = `[${ke(e + 21)}-${ke(e + 57)}]`,
    r = e === 3328 ? "" : `${ke(e + 60)}?`;
  return `[\\u200C\\u200D](?<=${n}${r}${ke(e + 77)}.)(?=${n})`;
}
function ke(e) {
  return `\\u{${e.toString(16)}}`;
}
function Ke(e) {
  if (!Mt.test(e)) return e;
  return xe ??= new RegExp("\\p{RGI_Emoji}", "gv"), e.replace(xe, "\u263A").replace(regExp_10, "");
}
var Lr = 4096;
function $Wo(e) {
  return Tr(e) && !e.includes("  ") && !regExp_9.test(Ke(e));
}
function Tr(e) {
  return Q2(e) && !regExp_8.test(Ke(e)) && !regExp_11.test(Ke(e)) && !/\uFE0F[\u{1F3FB}-\u{1F3FF}]/u.test(e) && !xr.test(e);
}
var regExp_12 = new RegExp(`[\\p{Cf}\\p{Co}\\p{Cn}\\u2028\\u2029\\u007F-\\u009F${$t}]`, "gu");
function Ir(e) {
  let n = e.replace(/[\p{Cf}\p{Co}\p{Cn}]/gu, "");
  return n = n.replace(/[\u200B-\u200F]/g, "").replace(/[\u202A-\u202E]/g, "").replace(/[\u2066-\u2069]/g, "").replace(/[\uFEFF]/g, "").replace(/[\uE000-\uF8FF]/g, ""), n;
}
function Wf(e) {
  let n = mk(e);
  for (let r = 0; r < 10; r++) {
    let i = Ir(n);
    if (i === n) return n;
    n = i;
  }
  return n;
}
var Dr = /\p{Default_Ignorable_Code_Point}/gu;
function Fc(e) {
  return zr(Wf(e).replace(Dr, ""));
}
function UWo(e) {
  return !/[^\0-\x7f]/.test(e);
}
function UZe(e) {
  if (UWo(e)) return e;
  let n = e,
    r = "",
    i = 0,
    s = 10;
  while (n !== r && i < s) r = n, n = z4(n), n = Wf(n), i++;
  if (i >= s) throw Error(`Unicode sanitization reached maximum iterations (${s}) for input: ${e.slice(0, 100)}`);
  return n;
}
function sP(e) {
  if (typeof e === "string") return UZe(e);
  if (Array.isArray(e)) return e.map(sP);
  if (e !== null && typeof e === "object") {
    let n = {};
    for (let [r, i] of Object.entries(e)) {
      let s = sP(r);
      if (s !== "__proto__") n[s] = sP(i);
    }
    return n;
  }
  return e;
}
function nc(e) {
  return BZe(e.replace(/\\(?=u[0-9a-fA-F]{4})/g, "\\u005c"));
}
function BZe(e) {
  return e.replace(/[^\x20-\x7e]/g, G5);
}
function _n(e) {
  return e.replace(/[\p{Cc}\p{Cf}\u2028\u2029]+/gu, " ");
}
function mL(e) {
  return e.replace(regExp_12, n => Array.from({
    length: n.length
  }, (r, i) => `\\u${n.charCodeAt(i).toString(16).padStart(4, "0")}`).join(""));
}
function z5(e) {
  return mk(pn(e)).replace(regExp_4, " ");
}
function ti(e, n) {
  let r = z5(e);
  if (n?.drop) r = r.replace(n.drop, "");
  if (r = r.replace(/\s+/g, " ").trim(), n?.maxCodeUnits !== void 0) r = ne(r, n.maxCodeUnits).trim();
  return r;
}
function z6s(e) {
  return ti(e) === e;
}
var jZe = 255;
function MA(e) {
  let n = ti(e, {
    drop: /[`<>]/g
  }).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :");
  return ne(n, jZe).trim();
}
var jmn = 2048,
  uJn = /[`\[\]<>]/g;
function Yne(e) {
  let n = ti(e).replace(/\]\(/g, "] (").replace(/!\[/g, "! [").replace(/\]\[/g, "] [").replace(/\]:/g, "] :").replace(/</g, "< ").replace(/\s+/g, " ").trim();
  return ne(n, jmn).trim();
}
function Jbt(e) {
  return e.replace(/[\u007F-\u009F\u2028\u2029\p{Cf}]/gu, G5);
}
function G5(e) {
  return e.split("").map(item => "\\u" + item.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
function e1(e) {
  let n = 0;
  while (n < e.length && e.charCodeAt(n) <= 32) n++;
  let r = e.slice(n),
    i = /^([A-Za-z0-9][A-Za-z0-9+.-]*):\/\//.exec(r),
    s = i?.[1]?.toLowerCase(),
    o = i ? r.slice(i[0].length) : r,
    a = o.indexOf(":"),
    u = o.indexOf("/");
  if (!(s !== void 0 ? s !== "file" : a !== -1 && (u === -1 || a < u) && !/^[A-Za-z]:/.test(o))) {
    let m = i ? he(o) : o;
    return m.includes("@[") || m.startsWith("[");
  }
  let c = he(o),
    d = i ? /^(?:[^@/?#\\[\]]+@)?(\[[0-9A-Fa-f:.]+\])(?::\d*)?(?=\/|$)/.exec(c) : /^[^@:/[\]]+@(\[[0-9A-Fa-f:.]+\])(?=:)/.exec(c),
    p = d !== null && !!TDe(`ssh://${d[1]}/`)?.hostname;
  return /[[\]]/.test(c.slice(p ? d[0].length : 0));
}
function TDe(e) {
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function he(e) {
  return e.replace(/%([0-9A-Fa-f]{2})/g, (n, r) => {
    let i = parseInt(r, 16);
    return i === 0 ? n : String.fromCharCode(i);
  });
}
import { appendFile as Rt, mkdir as qn, rename as Qn, stat as vs, symlink as Ls, unlink as _t } from "fs/promises";
import { dirname as ge, isAbsolute as Ts, join as Q, resolve as or } from "path";
function Eh(value) {
  return {
    ok: !0,
    value: value
  };
}
function $p(error) {
  return {
    ok: !1,
    error: error
  };
}
class ResultError extends Error {
  constructor(value_2) {
    super("Result was an error (see .error)");
    this.name = "ResultError", Object.defineProperty(this, "error", {
      value: value_2,
      enumerable: !1
    });
  }
}
function $6s(e) {
  if (e.ok) return e.value;
  throw new ResultError(e.error);
}
var Bf = {
  home: path => ({
    space: "home",
    path: path
  }),
  workspace: path_2 => ({
    space: "workspace",
    path: path_2
  }),
  system: path_3 => ({
    space: "system",
    path: path_3
  }),
  userNamed: path_4 => ({
    space: "userNamed",
    path: path_4
  })
};
function IWo(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = Reflect.get(e, "code"),
    r = Reflect.get(e, "telemetryCode");
  return n === "Failed" && typeof r === "string" && (tz(r) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(r));
}
function U6s(cause) {
  if (IWo(cause)) {
    if (cause.cause instanceof Error) return cause.cause;
    return Object.assign(new x(yt(cause), "host file operation refused by the storage backend"), {
      code: cause.telemetryCode,
      cause: cause
    });
  }
  return Object.assign(new x(yt(cause), "host file operation could not be performed by the storage backend"), {
    cause: cause
  });
}
var Ve = globalThis.process?.getBuiltinModule?.("async_hooks"),
  Wt = Ve !== void 0,
  Je = Ve ? new Ve.AsyncLocalStorage() : {
    run: (e, n) => n(),
    getStore: () => {
      return;
    }
  };
function Ze({
  writeBatch: writeBatch,
  sizeOf: sizeOf,
  flushIntervalMs = 1000,
  maxBufferSize = 100,
  maxBufferBytes = 1 / 0,
  immediateMode = !1
}) {
  let a = [],
    u = 0,
    l = null,
    c = null;
  function d() {
    if (l) clearTimeout(l), l = null;
  }
  function p(g) {
    try {
      writeBatch(g);
    } catch {}
  }
  function flush() {
    if (c) p(c), c = null;
    if (a.length === 0) return;
    p(a), a = [], u = 0, d();
  }
  function h() {
    if (!l) l = setTimeout(flush, flushIntervalMs);
  }
  function A() {
    if (c) {
      c.push(...a), a = [], u = 0, d();
      return;
    }
    let g = a;
    a = [], u = 0, d(), c = g, setImmediate(() => {
      let y = c;
      if (c = null, y) p(y);
    });
  }
  return {
    write(g) {
      if (immediateMode) {
        p([g]);
        return;
      }
      if (a.push(g), u += sizeOf(g), h(), a.length >= maxBufferSize || u >= maxBufferBytes) A();
    },
    flush: flush,
    dispose() {
      flush();
    }
  };
}
function B6s({
  writeFn: writeFn,
  flushIntervalMs: flushIntervalMs_2,
  maxBufferSize: maxBufferSize_2,
  maxBufferBytes: maxBufferBytes_2,
  immediateMode: immediateMode_2
}) {
  return Ze({
    writeBatch: o => writeFn(o.join("")),
    sizeOf: o => o.length,
    flushIntervalMs: flushIntervalMs_2,
    maxBufferSize: maxBufferSize_2,
    maxBufferBytes: maxBufferBytes_2,
    immediateMode: immediateMode_2
  });
}
function Pr(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]();
}
class Ye {
  #e = new Set();
  #t = !1;
  get drainStarted() {
    return this.#t;
  }
  register(e) {
    let n = Pr(e);
    this.#e.add(n);
    let r = () => {
      this.#e.delete(n);
    };
    return Object.assign(r, {
      [Symbol.dispose]: r
    });
  }
  async drain() {
    this.#t = !0;
    let e = Array.from(this.#e);
    this.#e.clear();
    let r = (await Promise.allSettled(e.map(async item => item()))).find(item => item.status === "rejected");
    if (r !== void 0) throw r.reason;
  }
  async [Symbol.asyncDispose]() {
    await this.drain();
  }
  get sizeForTesting() {
    return this.#e.size;
  }
}
class Gt {
  cleanup = new Ye();
  preExitFlush = new Ye();
}
var Fr = new z(() => new Gt());
function me() {
  return ms(Fr);
}
var qne = 2000;
function bt(e) {
  return me().cleanup.register(e);
}
async function Vbt() {
  await me().cleanup.drain();
}
function Km() {
  return me().cleanup.drainStarted;
}
function mI(e) {
  return me().preExitFlush.register(e);
}
async function sJn() {
  await me().preExitFlush.drain();
}
class zt {
  parsed = new Map();
  lookup(e) {
    return this.parsed.get(e);
  }
  remember(e, n) {
    this.parsed.set(e, n);
  }
  reset() {
    this.parsed.clear();
  }
}
var Kt = new zt();
function Vt(e) {
  let n = Kt.lookup(e);
  if (n !== void 0) return n;
  let r = Nr(e);
  return Kt.remember(e, r), r;
}
function Nr(e) {
  if (!e || e.trim() === "") return null;
  let n = e.split(",").map(item => item.trim()).filter(Boolean);
  if (n.length === 0) return null;
  let isExclusive = n.some(item => item.startsWith("!")),
    i = n.some(item => !item.startsWith("!"));
  if (isExclusive && i) return null;
  let s = n.map(item => item.replace(/^!/, "").toLowerCase());
  return {
    include: isExclusive ? [] : s,
    exclude: isExclusive ? s : [],
    isExclusive: isExclusive
  };
}
function $r(e) {
  let n = [],
    r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) n.push("mcp"), n.push(r[1].toLowerCase());else {
    let o = e.match(/^([^:[]+):/);
    if (o && o[1]) n.push(o[1].trim().toLowerCase());
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) n.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) n.push("1p");
  let s = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (s && s[1]) {
    let o = s[1].trim().toLowerCase();
    if (o.length < 30 && !o.includes(" ")) n.push(o);
  }
  return Array.from(new Set(n));
}
function Hr(e, n) {
  if (!n) return !0;
  if (e.length === 0) return !1;
  if (n.isExclusive) return !e.some(item => n.exclude.includes(item));else return e.some(item => n.include.includes(item));
}
function jt(e, n) {
  if (!n) return !0;
  let r = $r(e);
  return Hr(r, n);
}
import * as E from "fs";
import { appendFile as Vr, chmod as jr, copyFile as Jr, link as Zr, lstat as Xe, mkdir as Yr, open as Y, readdir as Xr, readFile as Zt, readlink as qr, realpath as Qr, rename as ei, rmdir as ni, rm as ri, stat as Yt, symlink as ii, unlink as si } from "fs/promises";
import { homedir as Xt } from "os";
import * as f from "path";
import { realpath as Br } from "fs";
var Mr = e => new Promise((n, r) => {
  Br(e, (i, s) => i === null ? n(s) : r(i));
});
var Ur = 0xffffffffffffffffn;
function gu(e) {
  let n = BigInt(e);
  return n === 0n || n === -1n || n === Ur || n === 1n << 64n;
}
import { writeFileSync as Wr } from "fs";
var wo = (() => {
  let CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS !== void 0) {
    let n = Number(CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS);
    if (!Number.isNaN(n) && n >= 0) return n;
  }
  return 1 / 0;
})();
var Gr = {
  [Symbol.dispose]() {}
};
function Kr() {
  return Gr;
}
var Wh = Kr;
function _(e, n, r) {
  using i = Wh`JSON.stringify(${Ae(e)})`;
  return JSON.stringify(e, n, r);
}
function b$(e) {
  return JSON.stringify(e) + `
`;
}
function Bi(e) {
  return JSON.stringify(e);
}
function iJn(e) {
  using n = Wh`jsonlJoin(${e.length})`;
  let r = "";
  for (let i = 0; i < e.length; i++) r += JSON.stringify(e[i]) + `
`;
  return r;
}
var J = (e, n) => {
  using r = Wh`JSON.parse(${Ae(e)})`;
  return typeof n > "u" ? JSON.parse(e) : JSON.parse(e, n);
};
function jo(e) {
  return JSON.parse(e);
}
function bc(e, n) {
  using r = Wh`structuredClone(${Ae(e)})`;
  return structuredClone(e, n);
}
function LZe(e, n, r) {
  using i = Wh`fs.writeFileSync(${e}, ${Ae(n)})`;
  Wr(e, n, r);
}
function Ae(e) {
  return typeof e === "string" ? e.length : e;
}
var oi = "\u2192";
function ai() {
  return 0;
}
function Vhe() {
  return "r";
}
var ae = /[\\/]+/;
function yjt(e, n) {
  let r = u => u.split(ae).filter(Boolean),
    i = f.resolve(e),
    s = f.resolve(n),
    o = r(i),
    a = r(s);
  return f.parse(i).root === f.parse(s).root && o.length < a.length && o.every((item, index) => item === a[index]);
}
function ui(e) {
  let n = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    n += i;
  }
  let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r;
}
function li(e) {
  let n = f.join(e).replace(/(?<=[^\\/])[\\/]+$/, "");
  if (jn(n) && !Qa(n)) return n;
  return ui(e);
}
var di = li;
function Re(e, n, r) {
  let i = ul(e);
  if (n.length === 0 || i || n.some(item => item === "." || item === "..")) {
    if (r !== void 0 && (n.length > 0 || i)) r(f.join(e, ...n));
    return i ? di(e) : e;
  }
  return f.join(e, ...n);
}
var Ey = "\x00unverified-ancestry",
  NZe = "\x00opaque-link-text";
function Qe(e) {
  return n_(f.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""));
}
function aJn(e, n = !0) {
  return e.includes("\uFFFD") || Qe(e) || n && (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) || /^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e) || e.split(/[\\/]/).some(item => item !== "." && item !== ".." && /[. ]$/.test(item)));
}
function MWo(e) {
  return e !== void 0 && e !== Ey;
}
function lJn(path_5) {
  return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), {
    code: "ELOOP",
    path: path_5
  });
}
function qt(e, n, r = !1, i = !1, s = !1) {
  if (n?.unreadableAncestry !== "unverified") return;
  let o = e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (o === "ENOENT" || o === "ENOTDIR") return;
  if (o === "ENAMETOOLONG" && !r && !i && !s) return;
  return Ey;
}
function te(e) {
  return h0(e);
}
function we(e, n) {
  return n !== void 0 && n.some(item => h0(item) && !R$(e, item) && (nn(e, item) || Na(e)));
}
function Qt(e, n) {
  return n !== void 0 && n.some(item => h0(item) && nn(item, e));
}
function nn(e, n) {
  let r = o => o.length > 1 ? o.replace(/\/+$/, "") : o,
    [i, s] = [r(e), r(n)];
  return i === s || i.startsWith(s === "/" ? s : s + "/");
}
function ue(e, n) {
  return n === void 0 || n.every(item => R$(e, item));
}
function _e(e, n) {
  return n === void 0 || n.every(item => $de(e, item));
}
function en(e, n, r) {
  let i = Na(e) ? ZGe(e) : null;
  if (i === null || !ue(i, n)) return;
  let s = f.join(e);
  if (Na(s) && ure(s) === ure(i)) return s;
  return Re(e, [], r);
}
function rn(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [e.anchor] : void 0;
}
function gI(e) {
  return n_(e) || Ds(e) || pl(e) || XS(e) || jf(W_, e) !== void 0;
}
async function qbt(e) {
  return n_(e) || Ds(e) || pl(e) || XS(e) || (await S$(W_, e)) !== void 0;
}
function DWo(e, n = W_) {
  return n_(e) || Ds(e) || pl(e) || XS(e) || jf(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0;
}
async function Tde(e, n = W_) {
  return n_(e) || Ds(e) || pl(e) || XS(e) || (await S$(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  })) !== void 0;
}
async function LTe(e, n, fsImpl = W_) {
  if (n_(e)) return !0;
  if (Ds(e)) return !0;
  if (pl(e)) {
    let i = ure(e);
    if (i === null || n === null || i !== ure(n)) return !0;
  }
  if (XS(e)) return !0;
  return (await l1r(e, n, {
    fsImpl: fsImpl
  })).verdict !== "clean";
}
async function l1r(e, anchor, {
  fsImpl: fsImpl_2 = W_,
  signal: signal
} = {}) {
  let reaches = await S$(fsImpl_2, e, {
    ...(anchor === null ? {} : {
      anchor: anchor
    }),
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0
  }, signal);
  if (reaches === void 0) return {
    verdict: "clean"
  };
  if (reaches === Ey) return {
    verdict: "unverified"
  };
  return {
    verdict: "network",
    reaches: reaches
  };
}
function jf(e, n, r) {
  return sn(Oe(n, r), i => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow") return e.openDirNoFollowSync(i.path), "ok";
    return e.readlinkSync(i.path);
  });
}
function S$(e, n, r, i, s) {
  return fi(Oe(n, r), i, async o => {
    if (o.kind === "lstat") {
      if (s === void 0) return e.lstat(o.path);
      let a;
      try {
        a = await e.lstatBigint(o.path);
      } catch (error) {
        throw s(o.path, void 0), error;
      }
      return s(o.path, a), a;
    }
    if (o.kind === "opendirNofollow") return await e.openDirNoFollow(o.path), "ok";
    return e.readlink(o.path);
  });
}
function sn(e, n) {
  let r;
  for (;;) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = n(i.value);
    } catch (error) {
      r = {
        errno: k(error)
      };
    }
  }
}
async function fi(e, n, r) {
  let i;
  for (;;) {
    let s = e.next(i);
    if (s.done) return s.value;
    if (n?.aborted === !0) return Ey;
    try {
      i = await r(s.value);
    } catch (error) {
      i = {
        errno: k(error)
      };
    }
  }
}
async function gi(e, n, r, i) {
  let s = Symbol("cut short"),
    o,
    a = n === void 0 ? void 0 : new Promise(l => {
      o = () => l(s), n.addEventListener("abort", o, {
        once: !0
      });
    }),
    u;
  try {
    for (;;) {
      let l = e.next(u);
      if (l.done) return l.value;
      if (n?.aborted === !0) return i;
      let c = r(l.value).catch(p => ({
          errno: k(p)
        })),
        d = await (a === void 0 ? c : Promise.race([c, a]));
      if (d === s) return i;
      u = d;
    }
  } finally {
    if (o !== void 0) n?.removeEventListener("abort", o);
  }
}
function* Oe(e, n) {
  let r = rn(n);
  if (te(e) && !we(e, r)) return e;
  if (jn(e) && !Qa(e) && _e(e, r) || Na(e) && ue(e, r)) return;
  let i = f.resolve(e),
    s = f.parse(i).root,
    o = s,
    a = i.slice(s.length).split(ae).filter(Boolean),
    u = 0,
    l = a.length,
    c = !1,
    d = !1,
    p,
    m = 64,
    h = () => a.some(item => ul(item)),
    A = () => /[. ]$/.test(a[0]);
  while (a.length > 0 && u < m) {
    if (c && ul(a[0])) return Ey;
    let path_6 = f.join(o, a[0]);
    if (Na(path_6) && ue(path_6, r) || te(path_6) && !(we(path_6, r) || Qt(path_6, r))) return Re(path_6, a.slice(1), n?.onCollapsedLanding);
    if (Eb(path_6)) {
      if (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified") return Ey;
      return Re(path_6, a.slice(1), n?.onCollapsedLanding);
    }
    let y = !1;
    if (y && f.dirname(path_6) === "/dev/fd" && a.some((item, index) => index > 0 && (item === ".." || item === "."))) {
      a.shift();
      while (a[0] === "." && a.length > 1) a.shift();
      o = path_6;
      continue;
    }
    let S = y ? {
      errno: "ENOENT"
    } : yield {
      kind: "lstat",
      path: path_6
    };
    if (S === void 0 || typeof S === "string" || "errno" in S) {
      if (n?.launchAncestry && !d && typeof S === "object" && "errno" in S && (S.errno === "EPERM" || S.errno === "EACCES") && yjt(path_6, n.launchAncestry)) {
        c = !0, a.shift(), o = path_6;
        continue;
      }
      if (typeof S === "object" && "errno" in S && (S.errno === "ENOENT" || S.errno === "ENOTDIR")) n?.onOutcome?.({
        kind: "absent",
        at: o,
        remaining: [...a],
        fromLinkTarget: a.length > l,
        ...(S.errno === "ENOTDIR" && {
          notAFolder: !0
        })
      });
      return qt(S, n, u > 0, h(), A());
    }
    let O = S;
    if (d = !0, !O.isSymbolicLink()) {
      a.shift(), o = path_6;
      continue;
    }
    u++;
    let b = path_6 + "\x00" + a.join("\x00");
    if ((p ??= new Set()).has(b)) return;
    p.add(b);
    let F = yield {
      kind: "readlink",
      path: path_6
    };
    if (typeof F !== "string") return qt(F, n, u > 0, h(), A());
    let text = F;
    if (n?.literalLinkText === "opaque" && aJn(text)) return NZe;
    if (!f.isAbsolute(text)) {
      let T = text.split(ae).filter(Boolean);
      if (n?.surfaceNetworkRaw === !0) {
        let R = en((o.endsWith(f.sep) ? o : o + f.sep) + [...T, ...a.slice(1)].join(f.sep), r, n?.onCollapsedLanding);
        if (R !== void 0) return R;
      }
      a.shift(), n?.onHop?.({
        composed: f.resolve(o, text, ...a),
        leaf: a.length === 0,
        text: text
      }), l = Math.min(l, a.length), a = [...T, ...a];
      continue;
    }
    let w = text;
    if (n?.surfaceNetworkRaw === !0 && a.length > 1 && XS(w)) {
      let T = en([w, ...a.slice(1)].join(f.sep), r, n?.onCollapsedLanding);
      if (T !== void 0) return T;
    }
    if (jn(w) && !Qa(w) && _e(w, r) || Na(w) && ue(w, r) || te(w) && !(we(w, r) || a.length > 1 && Qt(w, r))) return a.shift(), Re(w, a, n?.onCollapsedLanding);
    if (n?.surfaceNetworkRaw === !0 && ul(w) && (jn(w) || pl(w) || h0(w) || XS(w))) return a.shift(), a.length === 0 ? w : w + f.sep + a.join(f.sep);
    a.shift();
    let D = f.parse(w).root || f.sep,
      v = f.parse(path_6).root,
      H = /^[\\/]$/.test(D) && v !== "" && !/^[\\/]$/.test(v);
    if (H && (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified")) return Ey;
    n?.onHop?.({
      composed: a.length === 0 ? w : f.resolve(w, ...a),
      leaf: a.length === 0,
      text: text
    }), o = H ? v : D, d = !1, l = Math.min(l, a.length), a = [...w.slice(D.length).split(ae).filter(Boolean), ...a];
  }
  if (a.length > 0 && n?.literalLinkText === "opaque") return NZe;
  if (a.length > 0) return Ey;
  if (u > 0 && XS(o)) return o;
  if (te(o) && !we(o, r)) return o;
  if (a.length === 0) n?.onOutcome?.({
    kind: "resolved",
    path: o
  });
  return;
}
function _o(e, resolvedPath) {
  if (jn(resolvedPath) && !Qa(resolvedPath) || Na(resolvedPath) || kI(resolvedPath)) return {
    resolvedPath: resolvedPath,
    isSymlink: !1,
    isCanonical: !1
  };
  let resolvedPath_2 = jf(e, resolvedPath);
  if (resolvedPath_2 === Ey) return {
    resolvedPath: resolvedPath,
    isSymlink: !1,
    isCanonical: !1
  };
  if (resolvedPath_2 !== void 0) return {
    resolvedPath: resolvedPath_2,
    isSymlink: !0,
    isCanonical: !1
  };
  try {
    let resolvedPath_3 = Kne(e, resolvedPath);
    return {
      resolvedPath: resolvedPath_3,
      isSymlink: resolvedPath_3 !== resolvedPath,
      isCanonical: !0
    };
  } catch (error) {
    return {
      resolvedPath: resolvedPath,
      isSymlink: !1,
      isCanonical: !1
    };
  }
}
function NTe(e) {
  let n = ESt();
  if (n === null) return null;
  try {
    let r = f.resolve(n),
      i = f.resolve(e.cwd()),
      s = f.parse(r).root;
    if (s !== f.parse(i).root) return null;
    let o = r.slice(s.length).split(ae).filter(Boolean),
      a = i.slice(s.length).split(ae).filter(Boolean),
      u = 0;
    while (u < o.length && u < a.length && o[u] === a[u]) u++;
    return u > 0 ? f.join(s, ...o.slice(0, u)) : null;
  } catch {
    return null;
  }
}
function Kne(e, path_7) {
  try {
    return e.realpathSync(path_7);
  } catch (error) {
    let i = k(error);
    if (i !== "EPERM" && i !== "EACCES") throw error;
    let s,
      launchAncestry = NTe(e);
    if (jf(e, path_7, {
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0,
      launchAncestry: launchAncestry,
      onOutcome: u => {
        s = u;
      }
    }) !== void 0 || s === void 0) throw error;
    if (s.kind === "absent") throw Object.assign(Error("ENOENT: no such file or directory"), {
      code: "ENOENT",
      syscall: "realpath",
      path: path_7
    });
    return $n(s.path);
  }
}
var code = "ERR_SYMLINK_TO_NETWORK_PATH";
function JB(e, n, r) {
  let {
      asWritten: asWritten,
      opts: opts
    } = un(e, n, r),
    linksResolvedPath,
    absentAt;
  return cn(jf(e, asWritten, {
    ...opts,
    onOutcome: u => {
      linksResolvedPath = on(u), absentAt = an(u);
    }
  }), n, asWritten), {
    ...ln(asWritten),
    linksResolvedPath: linksResolvedPath,
    absentAt: absentAt
  };
}
async function KW(e, n, r) {
  let {
      asWritten: asWritten_2,
      opts: opts_2,
      ownHost: ownHost
    } = un(e, n, r),
    linksResolvedPath_2,
    absentAt_2,
    identity,
    endStats,
    d = !ownHost,
    p = !1,
    m,
    linksFollowed = [],
    A = {
      ...opts_2,
      onOutcome: g => {
        p = !0, linksResolvedPath_2 = on(g), absentAt_2 = an(g);
        let y = m,
          S = g.kind === "resolved" && y?.path === g.path;
        d = !S, endStats = S ? y.stats : void 0, identity = S && !gu(y.stats.ino) ? {
          dev: y.stats.dev,
          ino: y.stats.ino,
          ctimeNs: y.stats.ctimeNs
        } : void 0;
      }
    };
  if (cn(await S$(e, asWritten_2, A, void 0, r?.fileIdentity === !0 ? (path_8, stats) => {
    if (m = stats === void 0 ? void 0 : {
      path: path_8,
      stats: stats
    }, stats?.isSymbolicLink() === !0) linksFollowed.push(stats);
  } : void 0), n, asWritten_2), !p && m?.stats.isSymbolicLink() === !0) d = !0;
  return {
    ...ln(asWritten_2),
    linksResolvedPath: linksResolvedPath_2,
    absentAt: absentAt_2,
    ...(identity !== void 0 && {
      identity: identity
    }),
    ...(endStats !== void 0 && {
      endStats: endStats
    }),
    ...(r?.fileIdentity === !0 && {
      linksFollowed: linksFollowed
    }),
    ...(r?.fileIdentity === !0 && d && {
      noFileSeen: !0
    })
  };
}
function on(e) {
  return e.kind === "resolved" ? $n(e.path) : void 0;
}
function an(e) {
  return e.kind === "absent" ? {
    at: e.at,
    remaining: e.remaining,
    fromLinkTarget: e.fromLinkTarget,
    ...(e.notAFolder && {
      notAFolder: !0
    })
  } : void 0;
}
function un(e, path_9, r) {
  let i = uT(path_9);
  if (dC(i) || r_(i)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
    code: code,
    path: path_9,
    reason: "unexamined"
  });
  let s = f.isAbsolute(i) ? f.resolve(i) : f.resolve(process.cwd(), i),
    asWritten_3 = uT(s);
  if (dC(asWritten_3) || r_(asWritten_3)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
    code: code,
    path: path_9,
    reason: "unexamined"
  });
  let ownHost_2 = te(asWritten_3) || Na(asWritten_3) || jn(asWritten_3) && !Qa(asWritten_3);
  return {
    asWritten: asWritten_3,
    ownHost: ownHost_2,
    opts: {
      ...(ownHost_2 && {
        anchors: [asWritten_3]
      }),
      surfaceNetworkRaw: !0,
      ...((!ownHost_2 || r?.failClosed) && {
        unreadableAncestry: "unverified",
        launchAncestry: NTe(e)
      })
    }
  };
}
function ln(resolvedPath_4) {
  return {
    resolvedPath: resolvedPath_4,
    isSymlink: !1,
    isCanonical: !1
  };
}
function cn(e, path_10, r) {
  if (e === void 0) return;
  let i = reason => Object.assign(Error("Refusing to read a file whose path could not be vetted (a component that could not be examined, or a symbolic link chain too long to follow)"), {
    code: code,
    path: path_10,
    reason: reason
  });
  if (e === Ey) throw i("unexamined");
  if (te(r) && e === r) return;
  if (!(jn(e) || pl(e) || te(e) || XS(e))) throw i("unexamined");
  throw Object.assign(Error("Refusing to read a file through a symbolic link that leads onto a network share or automount path; replace the link with a regular file to use it"), {
    code: code,
    path: path_10,
    reason: "network"
  });
}
function d1r(e) {
  return k(e) === code;
}
function LWo(e) {
  if (!d1r(e)) return;
  let reason_2 = e.reason;
  return reason_2 === "network" || reason_2 === "unexamined" ? reason_2 : void 0;
}
function Cde(e, n, r) {
  let {
    resolvedPath: resolvedPath_5
  } = _o(e, n);
  if (r.has(resolvedPath_5)) return !0;
  return r.add(resolvedPath_5), !1;
}
var qe = /(^|[\\/])\.\.([\\/]|$)/;
function pi(e, n = "win32") {
  let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
  if (r === "") return e[0];
  if (n === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r;
}
function w$(e, n, r) {
  let anchors = rn(r);
  if (jn(n) && !Qa(n) || Na(n) || kI(n)) {
    if (anchors !== void 0 && (Na(n) && !ue(n, anchors) || jn(n) && !Qa(n) && !_e(n, anchors))) {
      let c = jf(e, n, {
        anchors: anchors,
        surfaceNetworkRaw: r?.surfaceNetworkRaw
      });
      if (c === Ey && r?.surfaceNetworkRaw !== !0) {
        if (r?.surfaceDotDotTargets === !0) throw lJn(n);
        return n;
      }
      return c;
    }
    return n;
  }
  let s = jf(e, n, r?.surfaceNetworkRaw === !0 ? {
    surfaceNetworkRaw: !0,
    anchors: anchors
  } : void 0);
  if (s === Ey && r?.surfaceNetworkRaw !== !0) {
    if (r?.surfaceDotDotTargets === !0) throw lJn(n);
    return;
  }
  if (s !== void 0) return s;
  let o = n,
    a = [],
    u = r?.surfaceDotDotTargets === !0,
    l = c => a.length === 0 ? c : u && qe.test(c) ? [c, ...a].join(f.sep) : f.join(c, ...a);
  while (o !== f.dirname(o)) {
    let c, d;
    try {
      c = e.readlinkSync(o);
    } catch (error) {
      d = k(error);
    }
    if (c !== void 0) {
      if (u && qe.test(c)) return l(f.isAbsolute(c) ? c : f.dirname(o) + f.sep + c);
      let p = f.isAbsolute(c) ? c : f.resolve(f.dirname(o), c);
      if (jn(p) && !Qa(p) || Na(p) || kI(p) || Eb(p) || r?.surfaceNetworkRaw === !0 && ul(p)) return r?.surfaceNetworkRaw === !0 && a.length > 0 ? p + f.sep + a.join(f.sep) : l(p);
      try {
        let m = Kne(e, o);
        return l(m);
      } catch {
        let m = o,
          h = 0,
          A = 64;
        while (h < A) {
          let g;
          try {
            g = e.readlinkSync(m);
          } catch {
            break;
          }
          if (u && qe.test(g)) {
            m = f.isAbsolute(g) ? g : f.dirname(m) + f.sep + g;
            break;
          }
          let y = f.isAbsolute(g) ? u ? pi(g) : g : f.resolve(f.dirname(m), g);
          if (jn(y) && !Qa(y) && _e(y, anchors) || Na(y) && ue(y, anchors) || kI(y) || Eb(y) || r?.surfaceNetworkRaw === !0 && ul(y)) {
            m = y;
            break;
          }
          let S;
          try {
            S = e.lstatSync(y);
          } catch {
            m = y;
            break;
          }
          if (!S.isSymbolicLink()) {
            m = y;
            break;
          }
          m = y, h++;
        }
        if (h >= A && r?.surfaceNetworkRaw === !0) return Ey;
        return r?.surfaceNetworkRaw === !0 && a.length > 0 && (jn(m) && !Qa(m) || Na(m) || kI(m) || Eb(m) || ul(m)) ? m + f.sep + a.join(f.sep) : l(m);
      }
    }
    if (d === "ENOENT") {
      a.unshift(f.basename(o)), o = f.dirname(o);
      continue;
    }
    try {
      let p = Kne(e, o);
      if (p !== o) return l(p);
    } catch (error) {
      if (u) throw error;
    }
    return;
  }
  return;
}
function tn(e) {
  return jn(e) && !Qa(e) || pl(e) || dC(e);
}
function c1r(e) {
  return dn(e, !1) ?? e;
}
function NWo(e) {
  return dn(e, !0);
}
function dn(e, n) {
  if (tn(e)) return e;
  let r = e,
    i = "";
  for (;;) {
    if (!ul(r)) {
      let o = $Q(r);
      if (o !== null) {
        let a = i === "" ? o : o.endsWith(f.sep) ? o + i : o + f.sep + i;
        if (tn(a)) return n ? a : e;
        return a;
      }
      if (n) try {
        return E.lstatSync(r), null;
      } catch (error) {
        if (!G(error)) return null;
      }
    }
    let s = f.dirname(r);
    if (s === r) return e;
    i = i === "" ? f.basename(r) : f.basename(r) + f.sep + i, r = s;
  }
}
function ci(e) {
  return fn(e, "permission");
}
function Ybt(e, n) {
  let r = se();
  return gi(gn(e, "permission"), n, async i => {
    switch (i.kind) {
      case "lstat":
        return r.lstat(i.path);
      case "opendirNofollow":
        return await r.openDirNoFollow(i.path), "ok";
      case "readlink":
        return r.readlink(i.path);
      case "realpath":
        return r === W_ ? $n(await Mr(i.path)) : r.realpath(i.path);
    }
  }, {
    unresolved: !0,
    requested: e,
    spellings: [e],
    stoppedAt: e,
    leafIsSymlink: !1,
    reason: "cut-short"
  });
}
function W5(e) {
  let n = fn(e, "screen");
  return {
    paths: n.spellings,
    vetted: !n.unresolved
  };
}
function fn(e, n) {
  let r = se();
  return sn(gn(e, n), i => {
    switch (i.kind) {
      case "lstat":
        return r.lstatSync(i.path);
      case "opendirNofollow":
        return r.openDirNoFollowSync(i.path), "ok";
      case "readlink":
        return r.readlinkSync(i.path);
      case "realpath":
        return r.realpathSync(i.path);
    }
  });
}
function* gn(e, n) {
  let requested = e;
  if (requested === "~") requested = Xt().normalize("NFC");else if (requested.startsWith("~/")) requested = f.join(Xt().normalize("NFC"), requested.slice(2));
  let i = new Set([requested]),
    s = (landing, leafIsSymlink = !1) => ({
      unresolved: !1,
      requested: requested,
      spellings: Array.from(i),
      landing: landing,
      leafIsSymlink: leafIsSymlink
    });
  if (jn(requested) && !Qa(requested) || Na(requested) || kI(requested)) return s(requested);
  let o = se(),
    launchAncestry_2 = NTe(o),
    u,
    l,
    leafIsSymlink_2 = !1,
    d = !1,
    p = !1,
    m = !1,
    h = [],
    A = new Set(),
    g = R => {
      let L = f.resolve(R);
      if (!A.has(L)) A.add(L), h.push(R);
    },
    stoppedAt = requested,
    S,
    O = function* (R) {
      let L;
      for (;;) {
        let B = R.next(L);
        if (B.done) return B.value;
        let Z = B.value;
        if (stoppedAt = Z.path, Z.kind === "readlink") d = !0;else S = void 0;
        if (L = yield Z, typeof L === "object" && "errno" in L) if (Z.kind === "readlink") p = !0;else S = L.errno, m ||= Z.kind === "opendirNofollow" && L.errno === "ELOOP";
      }
    },
    b = yield* O(Oe(requested, {
      unreadableAncestry: "unverified",
      launchAncestry: launchAncestry_2,
      ...{
        literalLinkText: "opaque"
      },
      onCollapsedLanding: R => {
        u = R;
      },
      onOutcome: R => {
        l = R;
      },
      onHop: ({
        composed: composed,
        leaf: leaf,
        text: text_2
      }) => {
        if (leaf) i.add(composed), leafIsSymlink_2 = !0;
        if (n === "screen" && Qe(text_2)) g(composed);
      }
    })),
    F = n === "permission" && !d && (S === "ENAMETOOLONG" || !1),
    C = () => {
      let R = $n(requested);
      return i.add(R), s(R);
    },
    w = () => F ? C() : {
      unresolved: !0,
      requested: requested,
      spellings: Array.from(i),
      stoppedAt: stoppedAt,
      leafIsSymlink: leafIsSymlink_2,
      reason: d || m ? "past-a-link" : "unexamined"
    },
    ee = 8,
    D = function* () {
      for (let R = 0; R < h.length; R++) {
        if (R >= ee) return !1;
        let L = h[R];
        if (jn(L) && !Qa(L) || Na(L) || kI(L)) {
          i.add(L);
          continue;
        }
        let B = yield* O(Oe(L, {
          unreadableAncestry: "unverified",
          launchAncestry: launchAncestry_2,
          onHop: ({
            composed: composed_2,
            text: text_3
          }) => {
            if (Qe(text_3)) g(composed_2);
          }
        }));
        if (B === Ey || p) return !1;
        if (B !== void 0) i.add(B);
      }
      return !0;
    };
  if (b === Ey || b === NZe) return w();
  if (b !== void 0) {
    if (n === "screen" && !(yield* D())) return w();
    if (u !== void 0) i.add(u);
    return i.delete(b), i.add(b), s(b, leafIsSymlink_2);
  }
  if (l === void 0) {
    if (n === "screen" && !p) return (yield* D()) ? C() : w();
    return w();
  }
  if (l.kind === "absent" && (n === "screen" ? l.remaining.some(item => ul(item)) : d && l.remaining.some(item => C$(item)))) return w();
  let path_11 = l.kind === "absent" ? l.at : l.path,
    H = l.kind === "absent" ? l.remaining.join(f.sep) : "",
    j = $n(H === "" ? path_11 : f.join(path_11, H));
  if (d || path_11 !== f.parse(path_11).root) i.add(j);
  let T = hi(yield {
    kind: "realpath",
    path: path_11
  }, path_11, H);
  if (T !== void 0 && T !== j) i.delete(T), i.add(T);
  if (n === "screen" && !(yield* D())) return w();
  return s(j, leafIsSymlink_2);
}
function hi(e, n, r) {
  if (typeof e !== "string" || e === n) return;
  return r === "" ? e : f.join(e, r);
}
function Xbt(e) {
  return {
    unresolved: !1,
    requested: e,
    spellings: [e],
    landing: e,
    leafIsSymlink: !1
  };
}
function xo(e) {
  return u1r(ci(e));
}
function u1r(e) {
  if (!e.unresolved) return e.spellings;
  let {
    resolvedPath: resolvedPath_6,
    isCanonical: isCanonical,
    isSymlink: isSymlink
  } = _o(se(), e.requested);
  return (isCanonical || isSymlink) && !e.spellings.includes(resolvedPath_6) ? [...e.spellings, resolvedPath_6] : e.spellings;
}
var W_ = {
  cwd() {
    return process.cwd();
  },
  existsSync(e) {
    using n = Wh`fs.existsSync(${e})`;
    return E.existsSync(e);
  },
  async stat(e) {
    return Yt(e);
  },
  async lstat(e) {
    return Xe(e);
  },
  async openDirNoFollow(e) {
    throw Error("openDirNoFollow is a POSIX-only examination probe");
  },
  openDirNoFollowSync(e) {
    throw Error("openDirNoFollowSync is a POSIX-only examination probe");
  },
  async lstatBigint(e) {
    return Xe(e, {
      bigint: !0
    });
  },
  async statBigint(e) {
    return Yt(e, {
      bigint: !0
    });
  },
  async readdir(e) {
    return Xr(e, {
      withFileTypes: !0
    });
  },
  async unlink(e) {
    return si(e);
  },
  async rmdir(e) {
    return ni(e);
  },
  async rm(e, n) {
    return ri(e, n);
  },
  async mkdir(e, n) {
    try {
      await Yr(e, {
        recursive: !0,
        ...n
      });
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  },
  async readFile(e, n) {
    return Zt(e, {
      encoding: n.encoding
    });
  },
  async rename(e, n) {
    return ei(e, n);
  },
  async realpath(e) {
    return $n(await Qr(e));
  },
  async readlink(e) {
    return qr(e);
  },
  async copyFile(e, n) {
    return Jr(e, n);
  },
  async appendFile(e, n, r) {
    if (r?.mode !== void 0) try {
      let i = await Y(e, "ax", r.mode);
      try {
        await i.appendFile(n);
      } finally {
        await i.close();
      }
      return;
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    return Vr(e, n);
  },
  async symlink(e, n, r) {
    return ii(e, n, r);
  },
  async link(e, n) {
    return Zr(e, n);
  },
  async chmod(e, n) {
    return jr(e, n);
  },
  statSync(e) {
    using n = Wh`fs.statSync(${e})`;
    return E.statSync(e);
  },
  lstatSync(e) {
    using n = Wh`fs.lstatSync(${e})`;
    return E.lstatSync(e);
  },
  readFileSync(e, n) {
    using r = Wh`fs.readFileSync(${e})`;
    return E.readFileSync(e, {
      encoding: n.encoding
    });
  },
  readSync(e, n) {
    using r = Wh`fs.readSync(${e}, ${n.length} bytes)`;
    let i = void 0;
    try {
      i = E.openSync(e, "r");
      let s = [],
        bytesRead = 0;
      while (bytesRead < n.length) {
        let u = Buffer.allocUnsafe(Math.min(65536, n.length - bytesRead)),
          l = E.readSync(i, u, 0, u.length, bytesRead);
        if (l === 0) break;
        s.push(u.subarray(0, l)), bytesRead += l;
      }
      return {
        buffer: Buffer.concat(s, bytesRead),
        bytesRead: bytesRead
      };
    } finally {
      if (i !== void 0) E.closeSync(i);
    }
  },
  appendFileSync(e, n, r) {
    using i = Wh`fs.appendFileSync(${e}, ${n.length} chars)`;
    if (r?.mode !== void 0) try {
      let s = E.openSync(e, "ax", r.mode);
      try {
        E.appendFileSync(s, n);
      } finally {
        E.closeSync(s);
      }
      return;
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    E.appendFileSync(e, n);
  },
  unlinkSync(e) {
    using n = Wh`fs.unlinkSync(${e})`;
    E.unlinkSync(e);
  },
  renameSync(e, n) {
    using r = Wh`fs.renameSync(${e} ${oi} ${n})`;
    E.renameSync(e, n);
  },
  readlinkSync(e) {
    using n = Wh`fs.readlinkSync(${e})`;
    return E.readlinkSync(e);
  },
  realpathSync(e) {
    using n = Wh`fs.realpathSync(${e})`;
    return $n(E.realpathSync(e));
  },
  mkdirSync(e, n) {
    using r = Wh`fs.mkdirSync(${e})`;
    let i = {
      recursive: !0
    };
    if (n?.mode !== void 0) i.mode = n.mode;
    try {
      E.mkdirSync(e, i);
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  },
  readdirSync(e) {
    using n = Wh`fs.readdirSync(${e})`;
    return E.readdirSync(e, {
      withFileTypes: !0
    });
  },
  rmSync(e, n) {
    using r = Wh`fs.rmSync(${e})`;
    E.rmSync(e, n);
  },
  createWriteStream(e) {
    return E.createWriteStream(e);
  },
  async readFileBytes(e, n) {
    if (n === void 0) return Zt(e);
    let r = await Y(e, Vhe());
    try {
      if (!(await r.stat()).isFile()) return Buffer.alloc(0);
      return await J2(r, n, "file");
    } finally {
      await r.close();
    }
  },
  async readFileFdGated(e, n) {
    try {
      let r = ai();
      if (r === 0) {
        if (!(await Xe(e)).isFile()) return null;
      }
      let i = await Y(e, E.constants.O_RDONLY | r);
      try {
        let stats_2 = await i.stat();
        if (!stats_2.isFile() || stats_2.size > n) return null;
        let o = Number(stats_2.size),
          a = Buffer.allocUnsafe(o),
          u = 0;
        while (u < o) {
          let {
            bytesRead: bytesRead_2
          } = await i.read(a, u, o - u, u);
          if (bytesRead_2 === 0) break;
          u += bytesRead_2;
        }
        return {
          content: (u < o ? a.subarray(0, u) : a).toString("utf8"),
          stats: stats_2
        };
      } finally {
        await i.close();
      }
    } catch {
      return null;
    }
  }
};
function se() {
  return W_;
}
function vg(e) {
  process.chdir(e);
  try {
    process.cwd();
  } catch {}
}
async function AGe(e, n, r) {
  await using i = typeof e === "string" ? await Y(e, "r") : null;
  let s = typeof e === "string" ? i : e,
    bytesTotal = (await s.stat()).size;
  if (bytesTotal <= n) return null;
  let a = Math.min(bytesTotal - n, r),
    u = Buffer.allocUnsafe(a),
    bytesRead_4 = 0;
  while (bytesRead_4 < a) {
    let {
      bytesRead: bytesRead_3
    } = await s.read(u, bytesRead_4, a - bytesRead_4, n + bytesRead_4);
    if (bytesRead_3 === 0) break;
    bytesRead_4 += bytesRead_3;
  }
  return {
    content: u.toString("utf8", 0, bytesRead_4),
    bytesRead: bytesRead_4,
    bytesTotal: bytesTotal
  };
}
async function J2(e, n, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(),
    s = [],
    o = 0;
  while (o < n) {
    let a = Buffer.allocUnsafe(Math.min(65536, n - o)),
      {
        bytesRead: bytesRead_5
      } = await e.read(a, 0, a.length, i ? o : null);
    if (bytesRead_5 === 0) break;
    s.push(a.subarray(0, bytesRead_5)), o += bytesRead_5;
  }
  return Buffer.concat(s, o);
}
async function mR(e, n) {
  await using r = typeof e === "string" ? await Y(e, "r") : null;
  let i = typeof e === "string" ? r : e,
    bytesTotal_2 = (await i.stat()).size;
  if (bytesTotal_2 === 0) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  let o = Math.max(0, bytesTotal_2 - n),
    a = bytesTotal_2 - o,
    u = Buffer.allocUnsafe(a),
    bytesRead_7 = 0;
  while (bytesRead_7 < a) {
    let {
      bytesRead: bytesRead_6
    } = await i.read(u, bytesRead_7, a - bytesRead_7, o + bytesRead_7);
    if (bytesRead_6 === 0) break;
    bytesRead_7 += bytesRead_6;
  }
  return {
    content: u.toString("utf8", 0, bytesRead_7),
    bytesRead: bytesRead_7,
    bytesTotal: bytesTotal_2
  };
}
async function* Bmn(e, n = 65536) {
  let r = await Y(e, "r"),
    i = Buffer.alloc(n),
    s = 0,
    o = [],
    a = 0;
  try {
    while (!0) {
      let {
        bytesRead: bytesRead_8
      } = await r.read(i, 0, n, s);
      if (bytesRead_8 === 0) break;
      s += bytesRead_8;
      let l = i.subarray(0, bytesRead_8),
        c = 0;
      while (c < bytesRead_8) {
        let d = l.indexOf(10, c);
        if (d === -1) {
          o.push(Buffer.from(l.subarray(c))), a += bytesRead_8 - c;
          break;
        }
        if (a === 0) yield l.subarray(c, d);else yield Buffer.concat([...o, l.subarray(c, d)], a + (d - c)), o = [], a = 0;
        c = d + 1;
      }
    }
  } finally {
    await r.close();
  }
  if (a > 0) yield o.length === 1 ? o[0] : Buffer.concat(o, a);
}
async function* FZe(e) {
  let r = await Y(e, "r");
  try {
    let s = (await r.stat()).size,
      o = Buffer.alloc(0),
      a = Buffer.alloc(4096);
    while (s > 0) {
      let u = Math.min(4096, s);
      s -= u, await r.read(a, 0, u, s);
      let l = Buffer.concat([a.subarray(0, u), o]),
        c = l.indexOf(10);
      if (c === -1) {
        o = l;
        continue;
      }
      o = Buffer.from(l.subarray(0, c));
      let d = l.toString("utf8", c + 1).split(`
`);
      for (let p = d.length - 1; p >= 0; p--) {
        let m = d[p];
        if (m) yield m;
      }
    }
    if (o.length > 0) yield o.toString("utf8");
  } finally {
    await r.close();
  }
}
function hn(text_4) {
  let n = new Int32Array(text_4.length);
  for (let r = 0; r < text_4.length; r++) n[r] = r;
  return {
    text: text_4,
    origin: n
  };
}
function mn(e, n, r) {
  let i = [];
  for (let s of e.text.matchAll(n)) {
    let {
        keep: keep,
        insert: insert,
        keepEnd = 0
      } = r(s),
      l = s.index ?? 0,
      c = s[0].length,
      d = Math.min(Math.max(keep | 0, 0), c),
      p = Math.min(Math.max(keepEnd | 0, 0), c - d);
    i.push([l + d, l + c - p, insert]);
  }
  return ve(e, i);
}
function ve(e, n) {
  if (n.length === 0) return e;
  let {
      text: text_5,
      origin: origin
    } = e,
    s = text_5.length;
  for (let [c, d, p] of n) s += p.length - (d - c);
  let o = new Int32Array(s),
    a = [],
    u = 0,
    l = 0;
  for (let [c, d, p] of n) a.push(text_5.slice(u, c)), o.set(origin.subarray(u, c), l), l += c - u, a.push(p), o.fill(-1, l, l + p.length), l += p.length, u = d;
  return a.push(text_5.slice(u)), o.set(origin.subarray(u), l), {
    text: a.join(""),
    origin: o
  };
}
function et(e, n, r) {
  return {
    text: e.text.slice(n, r),
    origin: e.origin.slice(n, r)
  };
}
function Rde(e, {
  asRewritten = !1
} = {}) {
  let r = e.trimStart(),
    i = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(r);
  if (i) {
    let s = i[1]?.toLowerCase();
    if (s === "file") return null;
    if (s === "http" || s === "https") {
      let o = TDe(r);
      return o?.hostname ? {
        host: o.hostname,
        path: o.pathname
      } : null;
    }
    return yn(_jt(r.slice(i[0].length)), "/");
  }
  return yn(asRewritten ? _jt(r) : r, ":");
}
function En(e, n) {
  let r = e.indexOf("@["),
    i = r === -1 ? 0 : r + 1,
    open = e[i] === "[" ? i : -1,
    close = open === -1 ? -1 : e.indexOf("]", open + 1),
    cut = e.indexOf(n, close === -1 ? 0 : close + 1);
  return {
    open: open,
    close: close,
    cut: cut
  };
}
function yn(e, n) {
  let {
      open: open_2,
      close: close_2,
      cut: cut_2
    } = En(e, n),
    o = open_2 === -1 ? 0 : open_2,
    a = e.indexOf("/");
  if (n === ":" && (cut_2 === -1 || a !== -1 && a < e.indexOf(":"))) return null;
  let path_12 = cut_2 === -1 ? "" : e.slice(n === ":" ? cut_2 + 1 : cut_2);
  if (close_2 !== -1) {
    let p = e.slice(close_2 + 1, cut_2 === -1 ? e.length : cut_2),
      m = e.slice(0, o) + e.slice(o + 1, close_2),
      h = bn(p) !== p ? m : bn(m),
      A = h.slice(h.lastIndexOf("@") + 1),
      g = TDe(`ssh://[${A}]/`)?.hostname;
    return A ? {
      host: g || A,
      path: path_12
    } : null;
  }
  let l = cut_2 === -1 ? e : e.slice(0, cut_2),
    c = l.slice(l.lastIndexOf("@") + 1);
  if (c.startsWith("[")) return null;
  let host = n === "/" ? c.replace(/:\d*$/, "") : c;
  return host ? {
    host: host,
    path: path_12
  } : null;
}
function Sn(e) {
  let {
      text: text_6,
      from: r
    } = mi(e),
    {
      close: close_3,
      cut: cut_3
    } = En(text_6, "/"),
    o = cut_3 === -1 ? text_6.length : cut_3,
    a = [],
    u = (l, c) => {
      let d = text_6.lastIndexOf("@", c - 1);
      if (d >= l) a.push([r(l), r(d)]);
    };
  if (close_3 === -1) u(0, o);else u(0, close_3), u(close_3 + 1, o);
  return a;
}
function _jt(e) {
  return e.replace(/(?:%(?!00)[0-9A-Fa-f]{2})+/g, n => {
    try {
      return decodeURIComponent(n);
    } catch {
      return he(n);
    }
  });
}
function mi(text_7) {
  if (!text_7.includes("%")) return {
    text: text_7,
    from: s => s
  };
  let n = [],
    r = "",
    i = 0;
  for (let s of text_7.matchAll(/(?:%(?!00)[0-9A-Fa-f]{2})+/g)) {
    for (let c = i; c < s.index; c++) n.push(c);
    r += text_7.slice(i, s.index);
    let o, a;
    try {
      o = decodeURIComponent(s[0]), a = Array.from(o, c => {
        let d = c.codePointAt(0);
        return d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
      });
    } catch {
      o = he(s[0]), a = Array.from(o, () => 1);
    }
    let index_2 = s.index,
      l = 0;
    for (let c of a) {
      let d = o.codePointAt(l) > 65535 ? 2 : 1;
      for (let p = 0; p < d; p++) n.push(index_2);
      l += d, index_2 += 3 * c;
    }
    r += o, i = s.index + s[0].length;
  }
  for (let s = i; s <= text_7.length; s++) n.push(s);
  return {
    text: r + text_7.slice(i),
    from: s => n[s]
  };
}
function bn(e) {
  let n = e.indexOf(":"),
    r = e.slice(n + 1);
  if (n === -1 || !/^[ \t\n\v\f\r]*[+-]?\d+$/.test(r)) return e;
  let i = Number.parseInt(r.trim(), 10);
  return i >= 0 && i < 65536 ? e.slice(0, n) : e;
}
var yi = /\s/g,
  bi = /[\n\r\u2028\u2029]/g,
  Ei = /(?:@|%40)(?:\[|%5B)/gi,
  Si = /^(?:\[|%5B)/i,
  ki = /\]|%5D/gi,
  BWo = /(?:^|[^A-Za-z0-9+.-])(?:https?|wss?|ftps?)$/i,
  wn = /(?:^|[^A-Za-z0-9+.-])(?:ssh|git|git\+ssh|ssh\+git)$/i,
  xi = /[,;|&]/g,
  Ai = /(?:^|[^A-Za-z0-9+.-])[A-Za-z][A-Za-z0-9+.-]{0,31}$/,
  wi = /["'`|,;&<>()[\]\\@/?#]|%40|%5B/i,
  Ri = /["'`]/,
  _i = /[;|&\n]/g,
  Oi = 64,
  vi = 2048,
  Li = /[\s"'`]/g;
function tt(e) {
  let n = [],
    r = I(e, Li),
    i = 0;
  for (let s = e.indexOf("://"); s !== -1;) {
    let o = s + 3;
    if (s >= i && wn.test(e.slice(Math.max(0, s - 8), s))) {
      i = Math.min(r(o), o + vi);
      for (let [a, u] of Sn(e.slice(o, i))) n.push([o + a, o + u]);
    }
    s = e.indexOf("://", o);
  }
  return n;
}
function G6s(e) {
  return Rn(e).spans;
}
function Rn(e) {
  let spans = [],
    hostParts = [],
    i = I(e, yi),
    s = I(e, /\//g),
    o = rt(e, Ei),
    a = I(e, ki),
    u = I(e, /\//g),
    l = I(e, _i),
    c = I(e, /[/?#]/g),
    d = I(e, xi),
    p = I(e, /@/g),
    m = I(e, /%40/gi),
    h = I(e, /\[REDACTED|\*\*\*:\*\*\*/g),
    A = I(e, /[:%]/g),
    g = I(e, /["'`,;|&<>{}()]/g),
    y = An(e, !1),
    S = An(e, !0);
  for (let O = e.indexOf("://"); O !== -1;) {
    let start = O + 3,
      bracketClose,
      C = e.indexOf("://", start),
      w = i(start),
      ee = p(start),
      end;
    if (BWo.test(e.slice(Math.max(0, O - 8), O))) {
      let v = Math.min(c(start), w),
        H = Math.min(d(start), v);
      if (end = ee < v ? Math.max(y(start, v), S(ee, v)) : Math.max(y(start, Math.min(s(start), w)), S(start, H)), end <= start) {
        let j = Math.min(v, l(start));
        hostParts.push({
          start: start,
          fieldEnd: Math.min(H, j),
          lastEncodedAt: S(start, j)
        });
      }
    } else {
      let v = Math.min(s(start), w),
        H = Math.min(w, C === -1 ? e.length : C),
        j = wn.test(e.slice(Math.max(0, O - 8), O)),
        T = j ? o(start) : null,
        R = j ? Si.exec(e.slice(start, start + 3)) : null,
        L = [[R !== null ? start + R[0].length : -1, H], [T !== null && T.index < H ? T.index + T[0].length : -1, w]];
      for (let [B, Z] of L) {
        let ie = B === -1 ? w : a(B);
        if (ie < Z) bracketClose = Math.max(bracketClose ?? ie, ie), v = Math.max(v, Math.min(u(ie), w));
      }
      end = Math.max(y(start, v), S(start, v));
    }
    if (end > start) spans.push({
      start: start,
      end: end,
      separatorEnd: end + (e[end] === "@" ? 1 : 3),
      loginEnd: ee <= end ? ee : Math.min(m(start), end),
      bracketClose: bracketClose
    });else {
      let v = h(start);
      if (v > start && v < Math.min(w, s(start), g(start)) && A(start) < v) spans.push({
        start: start,
        end: v,
        separatorEnd: v,
        loginEnd: v
      });
    }
    O = C;
  }
  return {
    spans: spans,
    hostParts: hostParts
  };
}
function On(e, n) {
  let {
    spans: spans_2,
    hostParts: hostParts_2
  } = Rn(e);
  if (spans_2.length === 0 && hostParts_2.length === 0) return [];
  let s = I(e, /[\s"'>}|,;&`)\]]/g),
    o = I(e, /\s/g),
    a = [],
    u = [];
  for (let userinfo of spans_2) a.push({
    start: userinfo.start,
    end: userinfo.end,
    loginEnd: userinfo.loginEnd
  }), u.push({
    ...userinfo,
    userinfo: userinfo
  });
  let l = Le(e, n);
  for (let h of hostParts_2) {
    let A = l(h.start)[0];
    if (A && A.keyStart < h.fieldEnd && e.slice(h.start, A.keyStart).includes("%")) {
      let g = h.lastEncodedAt > A.keyStart ? h.lastEncodedAt : A.valueStart;
      a.push({
        start: h.start,
        end: g,
        loginEnd: g
      }), u.push(g > A.valueStart ? {
        start: h.start,
        end: g,
        userinfo: {
          start: h.start,
          end: g,
          separatorEnd: g + 3,
          loginEnd: g
        }
      } : {
        start: h.start,
        end: g
      });
    }
  }
  if (u.length === 0) return [];
  a.sort((itemA, itemB) => itemA.start - itemB.start);
  let c = Le(e, n),
    d = 0;
  for (let h = 0, A = c(h); A[0] !== void 0;) {
    let g,
      y = null;
    for (let O of A) if (y = O.valueEnd(), y !== null) {
      g = O;
      break;
    }
    if (g === void 0 || y === null) {
      h = A[0].keyStart + 1, A = c(h);
      continue;
    }
    while (d < a.length && a[d].start <= g.keyStart) d++;
    let S = a[d];
    if (S !== void 0 && S.start < y) {
      let O = e[g.valueStart] ?? "",
        end_2 = (O === '"' || O === "'") && y - 1 > g.valueStart && e[y - 1] === O ? Math.max(y, S.end) : o(Math.max(y, S.end, s(S.loginEnd + 1)));
      u.push({
        start: g.valueStart,
        end: end_2
      });
    }
    h = y, A = c(h);
  }
  let p = {
      nextKey: Le(e, n),
      plainKeys: Le(e, n),
      nextLineEnd: I(e, bi),
      span: 0,
      lineEnd: -1,
      resumeAt: 0,
      overflowEnd: Ii(e, () => p.lineEnd)
    },
    m = [];
  for (let h of Pi(u)) {
    let A = m.at(-1);
    m.push(A !== void 0 && h.start < A.end ? xn(e, {
      start: m.pop().start,
      end: Math.max(A.end, h.end)
    }, p) : xn(e, h, p));
  }
  return m.map(item => item.userinfo ? item : Di(e, item));
}
var weakMap = new WeakMap();
function Ti(e) {
  let n = weakMap.get(e);
  if (!n) n = {
    word: new RegExp(e.word, "gi"),
    notTail: new RegExp(`(?!${e.tail})[^]`, "gi"),
    separator: new RegExp(e.separator, "iy"),
    value: new RegExp(e.value, "iy")
  }, weakMap.set(e, n);
  return n;
}
function Le(e, n) {
  let r = n.map(item => {
    let {
        word: word,
        notTail: notTail,
        separator: separator,
        value: value_3
      } = Ti(item),
      l = rt(e, word),
      c = I(e, notTail),
      d = -1,
      p = -1,
      m = -1,
      h = null,
      A = O => {
        if (O !== m) m = O, value_3.lastIndex = O, h = value_3.test(e) ? value_3.lastIndex : null;
        return h;
      },
      g = O => {
        if (O !== d) d = O, separator.lastIndex = O, p = separator.test(e) ? separator.lastIndex : -1;
        return p;
      },
      y = -1,
      S = null;
    return O => {
      if (y !== -1 && O >= y && (S === null || O <= S.keyStart)) return S;
      y = O, S = null;
      for (let b = l(O); b !== null;) {
        let F = b.index + b[0].length,
          valueStart = g(item.tail ? c(F) : F);
        if (valueStart !== -1) {
          S = {
            keyStart: b.index,
            valueStart: valueStart,
            valueEnd: () => A(valueStart)
          };
          break;
        }
        b = l(b.index + 1);
      }
      return S;
    };
  });
  return i => {
    let s = [];
    for (let o of r) {
      let a = o(i);
      if (a && (!s[0] || a.keyStart <= s[0].keyStart)) s = s[0] && a.keyStart === s[0].keyStart ? [...s, a] : [a];
    }
    return s;
  };
}
function xn(e, n, r) {
  if (n.userinfo && Ci(e, n.userinfo, r)) return n;
  let end_3 = n.end;
  r.resumeAt = Math.max(r.resumeAt, n.start);
  for (let s = r.nextKey(r.resumeAt); s[0] !== void 0 && s[0].keyStart < end_3;) {
    let keyStart = s[0].keyStart;
    if (keyStart > r.lineEnd) {
      let c = r.nextLineEnd(keyStart);
      r.span = Oi * (c - r.lineEnd), r.lineEnd = c;
    }
    let a = null,
      u = s[0];
    for (let c of s) if (a = c.valueEnd(), a !== null) {
      u = c;
      break;
    }
    let l = a ?? u.valueStart;
    if (r.span -= l - keyStart, r.span < 0) return {
      start: n.start,
      end: Math.max(end_3, r.overflowEnd(n.start))
    };
    end_3 = Math.max(end_3, l), r.resumeAt = u.valueStart, s = r.nextKey(r.resumeAt);
  }
  return end_3 === n.end ? n : {
    start: n.start,
    end: end_3
  };
}
function Ci(e, n, r) {
  if (e[n.end] !== "@" || wi.test(e.slice(n.start, n.end)) || !Ai.test(e.slice(Math.max(0, n.start - 36), n.start - 3))) return !1;
  for (let i = r.plainKeys(n.start); i[0] !== void 0 && i[0].keyStart < n.end; i = r.plainKeys(i[0].keyStart + 1)) if (i.some(item => item.valueStart === n.end)) return !1;
  return !0;
}
function Ii(e, n) {
  let r = I(e, /["'`]/g),
    i = -1,
    s = e.length;
  return o => {
    if (n() !== i) i = n(), s = r(o) < i ? e.length : i;
    return s;
  };
}
function Di(e, n) {
  let r = e[n.end - 1];
  if (r === void 0 || !Ri.test(r)) return n;
  return (e.slice(n.start, n.end).split(r).length - 1) % 2 === 1 ? {
    start: n.start,
    end: n.end - 1
  } : n;
}
function Pi(e) {
  e.sort((itemA, itemB) => itemA.start - itemB.start || itemB.end - itemA.end);
  let n = [];
  for (let r of e) {
    let i = n.at(-1);
    if (i === void 0 || r.start >= i.end) n.push(r);else n[n.length - 1] = {
      start: i.start,
      end: Math.max(i.end, r.end)
    };
  }
  return n;
}
function I(e, n) {
  let r = rt(e, n);
  return i => r(i)?.index ?? e.length;
}
function rt(e, n) {
  let r = -1,
    i = null;
  return s => {
    if (r === -1 || s < r || i !== null && s > i.index) n.lastIndex = s, i = n.exec(e), r = s;
    return i;
  };
}
function An(e, n) {
  let r = null;
  return (i, s) => {
    if (r === null) {
      r = new Int32Array(e.length + 1);
      let a = -1;
      for (let u = 0; u <= e.length; u++) {
        if (n) {
          if (u >= 3 && e.startsWith("%40", u - 3)) a = u - 3;
        } else if (u >= 1 && e[u - 1] === "@") a = u - 1;
        r[u] = a;
      }
    }
    let o = r[Math.min(s, e.length)];
    return o >= i ? o : -1;
  };
}
var regExp_13 = new RegExp(xGe(String.raw`api[_-]?key|secret|token|password|passwd|credential|bearer|authorization|auth[_-]?header|memory[_-]?request[_-]?mac|cookie|session[_-]?(?:id|key)|connection[_-]?string|(?:private|ssh|encryption|signing|access|deploy|master|license)[_-]?key|client[_-]?secret`), "i"),
  fe = `[\\s\\u0085${EDe}]`,
  re = `(?:${xGe("Bearer|Basic")})[${EDe}]*[\\s\\u0085]+`,
  vn = "[^\\s\\u0085,;&}\\])]+",
  Ln = "(?![\\w\\[({$/+=~!@%^?\\\\-])",
  De = "\\n\\r\\x0b\\x0c\\u0085\\u2028\\u2029",
  q = "[\\s\\u0085]",
  regExp_14 = new RegExp(fe),
  regExp_15 = new RegExp(`(?:[=:]|["']|\\b(?:${xGe("bearer|basic")}))$`, "i"),
  Fi = `\\\\+(?:"[^"${De}]*(?<!\\\\)(?=\\\\+")|'[^'${De}]*(?<!\\\\)(?=\\\\+'))`,
  Tn = `[^\\s\\u0085,;&})"'\\\\]+`,
  value_4 = `"[^"${De}]*"|'[^'${De}]*'|"[^"]*"${Ln}|'[^']*'${Ln}|[^\\s-]{0,4}\\[REDACTED\\]['"\`]?|${re}(?:\\[REDACTED\\]|${vn})|${vn}`,
  Ni = {
    word: "\\b(?:Bearer|Basic)",
    tail: "",
    separator: `${q}+`,
    value: "[A-Za-z0-9+/=._~-]{20,}"
  },
  $i = {
    word: `(?:${regExp_13.source})`,
    tail: "[\\w.-]",
    separator: `["']?${q}*[=:]${q}*`,
    value: value_4
  },
  Hi = {
    word: "\\b(?:AWS|GOOGLE|GCP|GCLOUD|AZURE)_\\w",
    tail: "\\w",
    separator: `${q}*[=:]${q}*`,
    value: value_4
  },
  Mi = [$i, Hi, Ni],
  Ui = ["sk", "ant", "api"].join("-"),
  displayRun = "[\\w=-]",
  U = `${displayRun}{20,}(?:\\.[0-9a-z]{9})?`,
  Wi = "[\\w.-]{0,256}(?![\\w.-])",
  Nn = `${q}*(?!${q})`,
  gt = `(?:${regExp_13.source})${Wi}`,
  Hn = `\\b(?:${xGe("AWS|GOOGLE|GCP|GCLOUD|AZURE")})${$Ze}_\\w+`,
  source_2 = `${gt}(?:${$Ze}["'])?${fe}*[=:]${Nn}(${value_4})`,
  source_3 = `${Hn}${fe}*[=:]${q}*(${value_4})`,
  prefilter = /\\["']/,
  source_4 = `${gt}${$Ze}\\\\+["']${fe}*[=:]${Nn}(${Fi}|${re}${Tn}|${Tn}|\\\\+["'][^\\s\\u0085,;&})"'\\\\]*)`,
  X = `[^\\s\\u0085,;&}\\])"']{0,64}?(?:${gt}|${Hn})`,
  Gi = `(?:${re})?(?:[{[(]{0,8}(?:"${X}"|'${X}')|${X})${fe}*[=:]`,
  Ki = `(?:${re})?(?:[{[(]{0,8}(?:"${X}"|'${X}'|\\\\+"${X}\\\\+"|\\\\+'${X}\\\\+')|${X})${fe}*[=:]`,
  Un = "\\][^\\s\"'>}|,;&`)\\]]*",
  be = "[A-Za-z0-9_-]",
  lt = `${be}{10}${be}*`,
  Cn = `\\.${lt}\\.${lt}`,
  source = `(?<!${be})(?=${be}+${Cn})(?:${be}*?-)??(eyJ${lt}${Cn})`,
  Wn = [{
    id: "url-userinfo",
    source: `:\\/\\/((["'])[^/@\\s]*\\2(?=@)|(?:[^/@\\s"'|,;&\`]+(?=@))|[^/@\\s"'|,;&\`]*["'|,;&\`][^/@\\s]*@)@?`,
    confidence: "low"
  }, {
    id: "gcp-service-account",
    source: "\\b([a-z0-9-]{1,64}@[a-z0-9-]+\\.iam\\.gserviceaccount\\.com)\\b",
    flags: "i",
    confidence: "low"
  }, {
    id: "loose-anthropic-key",
    source: "\\b(sk-ant-?[\\w-]{10,})",
    confidence: "low"
  }, {
    id: "http-auth-scheme",
    source: `\\b${re}([A-Za-z0-9+/=._~-]{20,})`,
    flags: "i",
    confidence: "low"
  }, {
    id: "loose-jwt",
    prefilter: /eyJ/,
    source: source,
    confidence: "low"
  }, {
    id: "sensitive-assign",
    source: source_2,
    flags: "i",
    confidence: "low"
  }, {
    id: "cloud-env-var",
    source: source_3,
    flags: "i",
    confidence: "low"
  }, {
    id: "url-userinfo-tail",
    source: ":\\/\\/(\\[REDACTED\\](?!@|%40[^\\s\"'>}|,;&`)\\]@/]*(?:[\\s\"'>}|,;&`)\\]/]|$))[^\\s\"'>}|,;&`)\\]]*?(?=[\\s\"'>}|,;&`)\\]]|:\\/\\/|$))",
    confidence: "low"
  }, {
    id: "url-userinfo-later-at",
    source: ":\\/\\/(\\[REDACTED\\]@(?:[^\\s:/?#\"'>}|,;&`)\\]]|:(?!\\/\\/)){0,256})(?=@|%40)",
    confidence: "low"
  }, {
    id: "url-userinfo-encoded",
    source: ":\\/\\/((?:\\[REDACTED\\]@)?(?:(?:[^/?#@\\s\"',;&<>|)\\]{}`[]*[\"'`<>{}[\\]][^/?#@\\s,;&|{}\"'`<>[\\]()]*(?=%40))|[^/?#@\\s\"',;&<>|)\\]}`[]+(?=%40)|(?=[^/?#@\\s\"',;&<>|)\\]}`[]*?(?:%|:[^/?#@\\s\"',;&<>|)\\]}`[]))[^/?#@\\s\"',;&<>|)\\]}`[]+(?=\\[REDACTED\\])))",
    confidence: "low"
  }, {
    id: "masked-value-rest",
    source: `\\[REDACTED\\](${Un})`,
    confidence: "low"
  }, {
    id: "sensitive-assign-escaped",
    redactOnly: !0,
    prefilter: prefilter,
    source: source_4,
    flags: "i",
    confidence: "low"
  }, {
    id: "aws-access-token",
    source: "\\b((?:A3T[A-Z0-9]|AKIA|ASIA|ABIA|ACCA)[A-Z2-7]{16})\\b",
    confidence: "high"
  }, {
    id: "gcp-api-key",
    source: "\\b(AIza[\\w-]{35})(?![\\w-])",
    confidence: "high"
  }, {
    id: "google-oauth-client-secret",
    source: "\\bGOCSPX-[\\w-]{28}(?![\\w-])",
    confidence: "high"
  }, {
    id: "azure-ad-client-secret",
    source: `(?:^|[\\\\'"\\x60\\s>=:(,)])([a-zA-Z0-9_~.]{3}\\dQ~[a-zA-Z0-9_~.-]{31,34})(?:$|[\\\\'"\\x60\\s<),])`,
    confidence: "high"
  }, {
    id: "digitalocean-pat",
    source: `\\b(dop_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "digitalocean-access-token",
    source: `\\b(doo_v1_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-api-key",
    source: `\\b(${Ui}03-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-admin-api-key",
    source: `\\b(sk-ant-admin01-[a-zA-Z0-9_\\-]{93}AA)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "anthropic-oauth-token",
    source: `\\b(sk-ant-(?:oat|ort)\\d{2}-[\\w-]{20,})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    run: "[\\w-]",
    confidence: "high"
  }, {
    id: "openai-api-key",
    source: "sk-[A-Za-z0-9_-]{8,200}T3BlbkFJ[A-Za-z0-9_-]{8,200}",
    confidence: "high"
  }, {
    id: "openai-legacy-api-key",
    source: "\\bsk-[a-zA-Z0-9]{48}(?![a-zA-Z0-9])",
    confidence: "high"
  }, {
    id: "huggingface-access-token",
    source: `\\b(hf_[a-zA-Z]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "supabase-secret-key",
    source: "\\bsb_secret_[A-Za-z0-9_-]{20,}",
    confidence: "high"
  }, {
    id: "supabase-access-token",
    source: "\\bsbp_[a-z0-9]{40,}",
    confidence: "high"
  }, {
    id: "github-pat",
    source: "ghp_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-fine-grained-pat",
    source: "github_pat_\\w{82}",
    confidence: "high"
  }, {
    id: "github-app-token",
    source: "(?:ghu|ghs)_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-oauth",
    source: "gho_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "github-refresh-token",
    source: "ghr_[0-9a-zA-Z]{36}",
    confidence: "high"
  }, {
    id: "gitlab-pat",
    source: `glpat-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-deploy-token",
    source: `gldt-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-runner-authentication-token",
    source: `glrt-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-oauth-app-secret",
    source: `gloas-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-pipeline-trigger-token",
    source: `glptt-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-kubernetes-agent-token",
    source: `glagent-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-incoming-mail-token",
    source: `glimt-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-scim-oauth-token",
    source: `glsoat-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-ci-build-token",
    source: `glcbt-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-feed-token",
    source: `glft-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "gitlab-feature-flag-client-token",
    source: `glffct-${U}`,
    displayRun: displayRun,
    confidence: "high"
  }, {
    id: "slack-bot-token",
    source: "xoxb-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*",
    confidence: "high"
  }, {
    id: "slack-user-token",
    source: "xox[a-z](?:-[0-9]{10,13}){3}-[a-zA-Z0-9-]{28,34}",
    confidence: "high"
  }, {
    id: "slack-rotation-token",
    source: "xoxe(?:\\.xox[a-z])?-[0-9]-[A-Za-z0-9-]{28,}",
    confidence: "high"
  }, {
    id: "slack-app-token",
    source: "xapp-\\d-[A-Z0-9]+-\\d+-[a-z0-9]+",
    flags: "i",
    confidence: "high"
  }, {
    id: "slack-workflow-token",
    source: "\\bxwfp-[a-zA-Z0-9-]{20,}",
    confidence: "high"
  }, {
    id: "slack-webhook-url",
    source: "(?:https?://)?hooks\\.slack\\.com/(?:services|workflows|triggers)/[A-Za-z0-9+/_-]{40,}",
    flags: "i",
    confidence: "high"
  }, {
    id: "twilio-api-key",
    source: "SK[0-9a-fA-F]{32}",
    confidence: "high"
  }, {
    id: "sendgrid-api-token",
    source: `\\b(SG\\.[a-zA-Z0-9=_\\-.]{66})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "npm-access-token",
    source: `\\b(npm_[a-zA-Z0-9]{36})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "pypi-upload-token",
    source: "pypi-AgEIcHlwaS5vcmc[\\w-]{50,1000}",
    confidence: "high"
  }, {
    id: "databricks-api-token",
    source: `\\b(dapi[a-f0-9]{32}(?:-\\d)?)(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "hashicorp-tf-api-token",
    source: "[a-zA-Z0-9]{14}\\.atlasv1\\.[a-zA-Z0-9\\-_=]{60,70}",
    confidence: "high"
  }, {
    id: "pulumi-api-token",
    source: `\\b(pul-[a-f0-9]{40})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "postman-api-token",
    source: `\\b(PMAK-[a-fA-F0-9]{24}-[a-fA-F0-9]{34})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-api-key",
    source: `\\b(eyJrIjoi[A-Za-z0-9+/]{70,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-cloud-api-token",
    source: `\\b(glc_[A-Za-z0-9+/]{32,400}={0,3})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "grafana-service-account-token",
    source: `\\b(glsa_[A-Za-z0-9]{32}_[A-Fa-f0-9]{8})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "sentry-user-token",
    source: `\\b(sntryu_[a-f0-9]{64})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "sentry-org-token",
    source: "\\bsntrys_eyJpYXQiO[a-zA-Z0-9+/]{10,200}(?:LCJyZWdpb25fdXJs|InJlZ2lvbl91cmwi|cmVnaW9uX3VybCI6)[a-zA-Z0-9+/]{10,200}={0,2}_[a-zA-Z0-9+/]{43}",
    confidence: "high"
  }, {
    id: "stripe-access-token",
    source: `\\b((?:sk|rk)_(?:test|live|prod)_[a-zA-Z0-9]{10,99})(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
    confidence: "high"
  }, {
    id: "shopify-access-token",
    source: "shpat_[a-fA-F0-9]{32}",
    confidence: "high"
  }, {
    id: "shopify-shared-secret",
    source: "shpss_[a-fA-F0-9]{32}",
    confidence: "high"
  }],
  zi = 64;
function ct(e, n) {
  let r = /-----BEGIN[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi,
    i = /-----END[ A-Z0-9_-]{0,100}?PRIVATE KEY(?: BLOCK)?-----/gi;
  r.lastIndex = n;
  let s = r.exec(e);
  if (!s) return null;
  i.lastIndex = s.index + s[0].length + zi;
  let o = i.exec(e);
  if (!o) return null;
  return {
    start: s.index,
    end: o.index + o[0].length
  };
}
function Vi(e) {
  return ct(e, 0) !== null;
}
function WWo(e) {
  let n = Gn(e);
  if (n.length === 0) return e;
  let r = "",
    i = 0;
  for (let s of n) r += e.slice(i, s.start) + "[REDACTED]", i = s.end;
  return r + e.slice(i);
}
function Gn(e) {
  let n = e.indexOf("-----");
  while (n !== -1) {
    while (e.charCodeAt(n + 5) === 45) n++;
    if ((e.charCodeAt(n + 5) | 32) === 98 && (e.charCodeAt(n + 6) | 32) === 101 && (e.charCodeAt(n + 7) | 32) === 103 && (e.charCodeAt(n + 8) | 32) === 105 && (e.charCodeAt(n + 9) | 32) === 110) break;
    n = e.indexOf("-----", n + 5);
  }
  let r = [];
  if (n === -1) return r;
  for (let i = ct(e, n); i; i = ct(e, i.end)) r.push(i);
  return r;
}
var dt = `(?:[\\x60'"\\s;]|\\\\[nr]|$)`,
  it = "(?=[^a-zA-Z0-9_\\-+=]|$)",
  In = "(?<![a-zA-Z0-9_\\-])";
function Ji() {
  return Wn.map(({
    id: id,
    confidence: confidence,
    source: source_5,
    flags = "",
    displayRun: displayRun_2
  }) => {
    let o = {
        id: id,
        confidence: confidence
      },
      a = flags.replace("g", "") + "g";
    if (confidence !== "high") return {
      ...o,
      re: new RegExp(source_5, a)
    };
    let u = Kn(source_5);
    if (displayRun_2 === void 0) return {
      ...o,
      re: new RegExp(In + u + it, a)
    };
    return {
      ...o,
      prefilter: new RegExp(u, flags.replace("g", "")),
      re: new RegExp(`(?<!${displayRun_2})(?=${displayRun_2}+${it})${displayRun_2}*?${In}(${u})${it}`, a)
    };
  });
}
function ye(e) {
  return Wn.map(item => {
    let r = (item.flags ?? "").replace("g", ""),
      i = {
        id: item.id,
        confidence: item.confidence,
        ...(item.redactOnly === !0 && {
          redactOnly: item.redactOnly
        }),
        ...(item.prefilter !== void 0 && {
          prefilter: item.prefilter
        })
      };
    if (item.run === void 0) return {
      ...i,
      re: new RegExp(item.source, e ? r + "g" : item.flags ?? "")
    };
    return {
      ...i,
      prefilter: new RegExp(Kn(item.source), r),
      re: new RegExp(`(?:(?<!${item.run})|(?<=\\\\[nr]))(?=${item.run}+${dt})${item.run}*?${item.source}`, e ? r + "g" : r)
    };
  });
}
function Kn(e) {
  return e.endsWith(dt) ? e.slice(0, -dt.length) : e;
}
function Te(e, n) {
  if (typeof n !== "string") return "[REDACTED]";
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? n[0] : "",
    i = e.lastIndexOf(n);
  return `${e.slice(0, i)}${r}[REDACTED]${r}${e.slice(i + n.length)}`;
}
function Zi(e) {
  let n = e[1];
  if (typeof n !== "string") return {
    keep: 0,
    insert: "[REDACTED]"
  };
  let r = n.length >= 2 && (n[0] === '"' || n[0] === "'") && n.at(-1) === n[0] ? 1 : 0,
    i = e[0].lastIndexOf(n);
  return {
    keep: i + r,
    insert: "[REDACTED]",
    keepEnd: e[0].length - i - n.length + r
  };
}
function Ne(e) {
  let n = On(e, Mi).map(({
      start: start_2,
      end: end_4
    }) => {
      let a = /^(["'])[^]*\1$/.test(e.slice(start_2, end_4)) ? 1 : 0;
      return [start_2 + a, end_4 - a];
    }),
    r = tt(e),
    i = qi(e);
  return r.length === 0 && i.length === 0 ? n : zn([...n, ...r, ...i]);
}
var st,
  regExp_16 = new RegExp(Un, "y"),
  Xi = 512;
function qi(e) {
  st ??= {
    plain: {
      assign: new RegExp(`${source_2}|${source_3}`, "gi"),
      nextKey: new RegExp(Gi, "iy"),
      valueWithWhitespace: new RegExp(`["']|${re}`, "iy"),
      skipsStrays: !1
    },
    escaped: {
      assign: new RegExp(`${source_2}|${source_3}|${source_4}`, "gi"),
      nextKey: new RegExp(Ki, "iy"),
      valueWithWhitespace: new RegExp(`\\\\*["']|${re}`, "iy"),
      skipsStrays: !0
    }
  };
  let n = Dn(e, st.plain);
  return prefilter.test(e) ? [...n, ...Dn(e, st.escaped)] : n;
}
function Dn(e, {
  assign: assign,
  nextKey: nextKey,
  valueWithWhitespace: valueWithWhitespace,
  skipsStrays: skipsStrays
}) {
  let o = [],
    a,
    u = 0,
    l = regExp_16;
  assign.lastIndex = 0;
  for (let c = assign.exec(e); c !== null; c = assign.exec(e)) {
    let d = c[1] ?? c[2] ?? c[3],
      p = c.index + c[0].length,
      m = p - d.length;
    nextKey.lastIndex = m;
    let h = d.length <= Xi && nextKey.test(e) ? nextKey.lastIndex : void 0;
    if (h !== void 0 && h < p) {
      if (valueWithWhitespace.lastIndex = h, !valueWithWhitespace.test(e)) h = void 0;
    }
    if (skipsStrays && a !== void 0 && c.index >= a && c.index < u && h === void 0) {
      a = void 0, assign.lastIndex = u;
      continue;
    }
    if (a !== void 0 && c.index < a) {
      let A = /^(["'])[^]*\1$/.test(d),
        g = A && u <= m ? 1 : 0;
      l.lastIndex = p, o.push([m + g, !A && l.test(e) ? l.lastIndex : p - g]);
    }
    if (u = p, a = h, a !== void 0) assign.lastIndex = m;
  }
  return o;
}
function zn(e) {
  let n = e.filter(([i, s]) => s > i).sort((itemA, itemB) => itemA[0] - itemB[0]),
    r = [];
  for (let [i, s] of n) {
    let o = r.at(-1);
    if (o !== void 0 && i <= o[1]) o[1] = Math.max(o[1], s);else r.push([i, s]);
  }
  return r;
}
function ce(e, n) {
  let {
      text: text_8,
      origin: origin_2
    } = e,
    s = [],
    o = 0;
  for (let a = 0; a < text_8.length;) {
    let u = origin_2[a];
    while (o < n.length && n[o][1] <= u) o++;
    let l = n[o];
    if (u < 0 || l === void 0 || u < l[0]) {
      a++;
      continue;
    }
    let c = a;
    while (c > 0 && origin_2[c - 1] < 0) c--;
    while (a < text_8.length && (origin_2[a] < 0 || origin_2[a] >= l[0] && origin_2[a] < l[1])) a++;
    let d = s.at(-1);
    if (d !== void 0 && d[1] >= c) d[1] = a;else s.push([c, a, "[REDACTED]"]);
  }
  return ve(e, s);
}
var Qi = 512,
  es = 512;
class Vn {
  testRules = null;
  redactRules = null;
  displayRules = null;
  resultCache = new Map();
  scan(e) {
    this.testRules ??= ye(!1);
    let n = [];
    for (let r of this.testRules) if (r.confidence === "high" && r.prefilter?.test(e) !== !1 && r.re.test(e)) n.push({
      ruleId: r.id,
      label: r.id.split("-").map(item => Os[item] ?? Ga(item)).join(" ")
    });
    if (Vi(e)) n.push({
      ruleId: "private-key",
      label: "Private Key"
    });
    return n;
  }
  redactContext(e, n = !1) {
    this.redactRules ??= ye(!0);
    let r = WWo(e);
    for (let i of this.redactRules) if (i.confidence === "low" && ot(i, n, r)) r = r.replace(i.re, Te);
    return r;
  }
  redactTokens(e) {
    this.redactRules ??= ye(!0);
    let n = e;
    for (let r of this.redactRules) if (r.confidence === "high" && r.prefilter?.test(n) !== !1) n = n.replace(r.re, Te);
    return n;
  }
  trackedByRules(e, n = !1) {
    return this.trackedTokens(this.trackedContext(e, n));
  }
  trackedContext(e, n = !1) {
    let r = ve(hn(e), Gn(e).map(({
      start: start_3,
      end: end_5
    }) => [start_3, end_5, "[REDACTED]"]));
    return this.trackedRules(r, "low", n);
  }
  redactOnlyRules(e) {
    this.redactRules ??= ye(!0);
    let n = e;
    for (let r of this.redactRules) if (r.redactOnly === !0 && ot(r, !0, n)) n = n.replace(r.re, Te);
    return n;
  }
  trackedTokens(e) {
    return this.trackedRules(e, "high");
  }
  trackedRules(e, n, r = !1) {
    this.redactRules ??= ye(!0);
    let i = e;
    for (let s of this.redactRules) if (s.confidence === n && ot(s, r, i.text)) s.re.lastIndex = 0, i = mn(i, s.re, Zi);
    return i;
  }
  redactWithUrlRanges(e) {
    let n = Ne(e);
    return n.length === 0 ? this.redactTokens(this.redactContext(e, !0)) : ce(this.trackedByRules(e, !0), n).text;
  }
  redactTracked(e) {
    return ce(this.trackedByRules(e, !0), Ne(e));
  }
  redact(e) {
    let n = e.length <= Qi;
    if (n) {
      let i = this.resultCache.get(e);
      if (i !== void 0) return i;
    }
    let r = this.redactWithUrlRanges(e);
    if (n) {
      if (this.resultCache.size >= es) this.resultCache.delete(this.resultCache.keys().next().value);
      this.resultCache.set(e, r);
    }
    return r;
  }
  redactForDisplay(e) {
    this.displayRules ??= Ji();
    let n = e;
    for (let r of this.displayRules) {
      if (r.confidence !== "high" || r.prefilter?.test(n) === !1) continue;
      n = n.replace(r.re, rs);
    }
    return n;
  }
}
var P = new Vn();
function Qbt(e) {
  return P.scan(e);
}
function ps(e) {
  return P.redact(e);
}
function wQ(e) {
  return P.redactTokens(P.redactContext(e));
}
function zWo(e) {
  return P.redactContext(e);
}
function pJn(e) {
  return P.redactTokens(e);
}
var regExp_17 = new RegExp(source),
  regExp_18 = new RegExp(source, "g");
var PGe = 16384;
function bjt(e, n) {
  let r = Ne(e);
  if (r.length === 0) return _s(P.redactContext(e, !0), n);
  let i = P.trackedContext(e, !0);
  for (let s = n + 2 * PGe;; s *= 2) {
    if (i.text.length <= s) return ce(P.trackedTokens(i), r).text;
    let o = P.trackedTokens(et(i, 0, s)),
      a = o.text.length - PGe;
    if (a >= n) {
      let u = ne(o.text, a).length,
        l = ce(et(o, 0, u), r);
      if (l.text.length >= n) return l.text;
    }
  }
}
var ts = /[$\x60|;&<>()\s]/,
  ns = /[/.@:~*?\\]/;
function rs(e, n) {
  let r = typeof n === "string" ? n : e;
  if (ts.test(r) || ns.test(r)) return e;
  return Te(e, n);
}
function CDe(e) {
  return P.redactForDisplay(e);
}
function vQ(e, n = ps) {
  if (typeof e === "string") return n(e);
  if (Array.isArray(e)) return e.map(item => vQ(item, n));
  if (e !== null && typeof e === "object") {
    let r = Object.create(null),
      i = Object.entries(e),
      s = n === ps ? is(i.map(([o]) => o)) : void 0;
    for (let [o, [a, u]] of i.entries()) {
      let l = s ? s[o] : a;
      if (typeof u === "string") {
        if (n === ps) {
          r[l] = GWo(a, u);
          continue;
        }
        let c = `${a}: `,
          d = n(c + u);
        r[l] = d.startsWith(c) ? d.slice(c.length) : n(u);
      } else r[l] = vQ(u, n);
    }
    return r;
  }
  return e;
}
function GWo(e, n) {
  let r = `${e}: `,
    i = r + n,
    s = Ne(i);
  if (s.length === 0) {
    let l = ps(i);
    if (l.startsWith(r)) return l.slice(r.length);
    let c = wQ(i);
    return c.startsWith(r) ? P.redactOnlyRules(c.slice(r.length)) : ps(n);
  }
  let o = [];
  for (let [l, c] of s) if (c > r.length) o.push([Math.max(l, r.length), c]);
  let a = P.trackedByRules(i, !0);
  if (a.text.startsWith(r)) return ce(a, o).text.slice(r.length);
  let u = P.trackedByRules(i);
  return u.text.startsWith(r) ? P.redactOnlyRules(ce(u, o).text.slice(r.length)) : ps(n);
}
function is(e) {
  let n = e.map(item => ps(item));
  if (n.every((item, index) => item === e[index])) return n;
  let r = new Set(n.filter((item, index) => item === e[index])),
    i = new Map();
  return n.map((item, index) => {
    if (item === e[index]) return item;
    let a = item,
      u = i.get(item) ?? 2;
    while (r.has(a)) a = `${item} (${u})`, u++;
    return i.set(item, u), r.add(a), a;
  });
}
function Wmn(e) {
  let n = Object.create(null);
  for (let [r, i] of Object.entries(e)) n[r] = regExp_13.test(r) ? "[REDACTED]" : i;
  return n;
}
var sC = "[redacted URL]";
function Pn(e) {
  let n = N(e);
  if (!/%(?:40|3a|5c)/i.test(n)) return e;
  let r = /^(?:https?|wss?|ftp|file):/i.test(n);
  return n.replace(r ? /%(40|3a)/gi : /%(40|3a|5c)/gi, (i, s) => String.fromCharCode(parseInt(s, 16)));
}
function ht(e, n, r) {
  let i = n(e),
    s = Pn(e);
  if (i === r || s === e) return i;
  return i !== null && Pn(i) === n(s) ? i : r;
}
function zmn(e) {
  return ht(e, ss, null);
}
function ss(e) {
  try {
    let n = new URL(e);
    if (!n.host || St(e) || Et(n) || xt(e, n) || Yn(e)) return null;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}
var VWo = /[@:]|\/\//;
function f1r(e) {
  let n = zmn(e);
  if (n === null) return null;
  let {
    protocol: protocol,
    host: host_2,
    pathname: pathname
  } = new URL(n);
  if (!VWo.test(pathname)) return n;
  let o = pathname.replace(/@/g, "%40").replace(/:/g, "%3A").replace(/\/{2,}/g, a => `/${ji("%2F", a.length - 1)}`);
  return `${protocol}//${host_2}${o}`;
}
function fJn(e) {
  let n = [],
    r = 0;
  for (let [i, s] of zn(tt(e))) n.push(e.slice(r, i), "[REDACTED]"), r = s;
  return n.push(e.slice(r)), n.join("").replace(/:\/\/[^/?#]*(@|%40)/g, (i, s) => s === "@" ? "://" : "://[REDACTED]%40");
}
function G_(e) {
  return ht(e, Ce, sC);
}
function Ce(e) {
  if (!e) return e;
  if (He(e) || Zn(e) || St(e)) return sC;
  try {
    let n = new URL(e);
    if (!n.host) throw TypeError("opaque");
    if ((n.username !== "" || n.password !== "") && `${n.pathname}${n.search}${n.hash}`.includes("@") || Et(n) || xt(e, n)) return sC;
    return n.username = "", n.password = "", n.search = "", n.hash = "", n.toString().replace(/\/$/, "");
  } catch {
    let n = N(e),
      r = At(n),
      i = n.slice(r),
      s = wt(i),
      o = i.search(/[?#]/);
    if (s !== -1 && o !== -1 && o < s) return sC;
    let a = s === -1 ? i : i.slice(s + 1),
      u = a.search(/[?#]/);
    if (u !== -1 && a.includes("@", u) && (s !== -1 || !ks(a, u, r !== 0))) return sC;
    let l = nt(nt(s === -1 ? n : n.slice(r + s + 1), "?"), "#"),
      c = l.lastIndexOf("@"),
      d = c === -1 ? l : l.slice(c + 1);
    return le(d) && !le(n) && !/^:\d+\/?$/.test(d.startsWith("[") ? d.slice(d.indexOf("]") + 1) : d.slice(d.indexOf(":"))) ? sC : d;
  }
}
var mt = /^(?:(?:file:\/\/)?[a-z]:(?:\\|\/(?!\/))|\\\\)/i;
function zf(e) {
  return ht(e, os, sC);
}
function os(e) {
  if (He(e) || St(e)) return sC;
  if (mt.test(e)) {
    let s = e.indexOf("?", e.startsWith("\\\\?\\") ? 4 : 0);
    return s === -1 ? e : e.slice(0, s);
  }
  if (Zn(e) && !Ss(e)) return sC;
  let n;
  try {
    n = new URL(e);
  } catch {
    return Ie(e, Fn(e) ? Ce(e) : e);
  }
  if (!n.host) return Ie(e, n.search || n.hash || Fn(e) ? Ce(e) : e);
  if (xt(e, n)) return sC;
  let r = n.username !== "" && kt(n.protocol.slice(0, -1)),
    i = n.username !== "" && !/^[^:]*:\//.test(N(e));
  return Ie(e, r || i || n.password || Me(n.username) || Et(n) || n.search || n.hash ? Ce(e) : e);
}
function WZe(e) {
  return Ie(e, G_(e));
}
function qhe(e, n, r) {
  return n === "" || n === r ? e : e.split(n).join(r);
}
function kQ(e, n) {
  let r = typeof n === "string" || n === void 0 ? [n] : n;
  for (let i of r) {
    let s = as(i),
      o = i && s.length > 0 ? zf(i) : "";
    for (let a of s) e = qhe(e, a, o);
  }
  return hR(e);
}
function as(e) {
  if (!e || !Xn.test(e) || zf(e) === e) return [];
  let n = [e],
    r = At(e),
    i = e.slice(r),
    s = i.indexOf("/");
  for (let o of new Set([i.indexOf("@"), wt(i)])) if (r !== 0 && o !== -1 && (s === -1 || o < s)) n.push(e.slice(0, r) + i.slice(o + 1));
  return n;
}
function us(e) {
  let n = N(e),
    r = At(n),
    i = r !== 0,
    s = n.indexOf("#");
  if (n.includes("?") || s !== -1 && (i || n.includes("@", s))) return !0;
  let o = n.slice(r),
    a = wt(o);
  if (a === -1) return !1;
  let u = n.slice(0, r - 3),
    l = /^(?:ftps?|wss?)$/i.test(u) ? o.slice(0, a).replace(/^[/\\]+/, "") : o.slice(0, a);
  return Me(l) || i && (/https?$/i.test(u) || !l.includes("/") && kt(u));
}
var Gmn = /:|%3a/i;
function Et(e) {
  return !e.hostname.startsWith("[") && /%3a/i.test(e.hostname) && `${e.pathname}${e.search}${e.hash}`.includes("@");
}
function Me(e) {
  return Gmn.test(e);
}
function St(e) {
  let n = N(e),
    r = n.indexOf(":"),
    i = r === -1 ? "" : n.slice(0, r);
  if (!/^[a-z][a-z0-9+.-]*$/i.test(i) || !/(?:ssh|git\+ssh|ssh\+git|git|file)$/i.test(i) || mt.test(n)) return !1;
  let s = n.slice(r + 1),
    o = nt(s.slice(/^\/*/.exec(s)[0].length), "/"),
    a = o.search(/[?#]/);
  if (!(/%40/i.test(o) || a !== -1 && o.includes("@", a))) return !1;
  let u = o.replace(/%([0-9a-f]{2})/gi, (c, d) => String.fromCharCode(parseInt(d, 16))),
    l = u.lastIndexOf("@");
  return l !== -1 && u.slice(0, l).includes(":");
}
function le(e) {
  let n = e.indexOf(":"),
    r = e.indexOf("/");
  return n > 0 && !e.includes("://") && (r === -1 || n < r);
}
function Ie(e, n) {
  let r = (s, o) => {
    let a = N(s);
    return ls(s) || /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\//i.test(a) && o !== s && !o.toLowerCase().startsWith(a.slice(0, a.indexOf("://") + 3).toLowerCase()) || le(s) && (cs(s) || /[\t\n\r]/.test(s) || ds(s, o));
  };
  return n !== e && le(n) && !le(e) || r(e, n) || r(n, n) ? sC : n;
}
function ls(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""),
    r = /^[a-z+\t\n\r]*:[\t\n\r]*\/[\t\n\r]*\//i.exec(n),
    i = r !== null && /^(?:ssh|git|git\+ssh|ssh\+git|file):\/\/$/i.test(r[0].replace(/[\t\n\r]/g, "")) ? r : null;
  if (!i && !le(e)) return !1;
  let s = i ? /^(?:[\w.~+-]+(?::[^@/?#%\s[\]]*)?@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\])?(?::[\w~-]*)?(?:\/|$)/i : /^(?:[\w.~+-]+@)?(?:\w(?:[\w.-]*\w)?|\[[\da-f]*:[\da-f.]*:[\da-f:.]*\]):/i,
    o = i ? n.slice(i[0].length) : e,
    a = i ? o.slice(Math.max(o.indexOf("/"), 0)) : "";
  return !s.test(o) || /(?:@|%40)(?:\[|%5b)/i.test(a);
}
function cs(e) {
  try {
    return new URL(e).host !== "";
  } catch {
    return !1;
  }
}
function ds(e, n) {
  let r = N(e),
    i = r.indexOf(":"),
    s = r.slice(0, i);
  if (i <= 0 || /[/?#]/.test(s) || e.includes("://")) return !1;
  let o = s.lastIndexOf("@"),
    a = r.indexOf("@["),
    u = a !== -1 ? a + 1 : r.startsWith("[") ? 0 : -1,
    l = s.slice(o + 1);
  if (u !== -1) {
    let c = r.indexOf("]", u);
    if (u !== o + 1 || r[c + 1] !== ":" || /[/?#@\\]/.test(r.slice(u + 1, c))) return !0;
    l = r.slice(u, c + 1);
  }
  return n !== e && n !== sC && !n.startsWith(`${l}:`);
}
function Fn(e) {
  return us(e) || fs(e);
}
function fs(e) {
  let n = e.replace(/^[\u0000-\u0020]+/, ""),
    r = n.indexOf("://");
  if (r !== -1 && /[?#]/.test(n)) return !0;
  let i = nt(r === -1 ? n : n.slice(r + 3), "/"),
    s = i.lastIndexOf("@");
  return s !== -1 && (Me(i.slice(0, s)) || r !== -1 && kt(n.slice(0, r)));
}
function kt(e) {
  return !/^(?:ssh|git\+ssh|ssh\+git)$/i.test(e);
}
function N(e) {
  return e.replace(/^[\u0000-\u0020]+/, "").replace(/[\t\n\r]/g, "");
}
var $e = "(^|[^a-z0-9+.-]|%[0-9a-f]{2})",
  gs = "https?|wss?|ftps?",
  Jn = "ssh\\+git|git\\+ssh|ssh|git",
  regExp_19 = new RegExp(`[a-z](?:[a-z0-9+.-]{1,31}:\\/+|:\\/\\/)|(?:https?|ftps?):(?!\\/)|${$e}(?:wss?|file):(?!\\/)|${$e}(?:${Jn}):(?!\\/)(?=[^@/?#\\s]*?(?::|%3a))`, "i");
function He(e, {
  forDestination = !1
} = {}) {
  let r = N(e).replace(/\\/g, "/"),
    i = r.search(/[?#]/),
    s = i === -1 ? r : r.slice(0, i),
    o = (forDestination ? /^[a-z][a-z0-9+.-]*:\/*/i.exec(s) : null) ?? /:\/+/.exec(s);
  if (!o) return !1;
  let a = o.index + o[0].length,
    u = (forDestination ? regExp_19 : /[a-z][a-z0-9+.-]{1,31}:\/+/i).exec(s.slice(a)),
    l = a + (u?.index ?? 0) + (u?.[0].length ?? 0);
  return u !== null && (r.includes("@", l) || /%40/i.test(nt(r.slice(l), "/")));
}
function Zn(e) {
  let n = N(e);
  if (mt.test(n) || /^file:/i.test(n)) return !1;
  return Yn(e);
}
function Yn(e) {
  let n = N(e),
    r = n.search(/[?#]/),
    s = (r === -1 ? n : n.slice(0, r)).indexOf("\\");
  return s !== -1 && n.includes("@", s);
}
function ys(e) {
  let n = N(e),
    r = /(?:ssh|git\+ssh|ssh\+git|git):\/\//i.exec(n);
  if (!r) return !1;
  let i = n.slice(r.index + r[0].length).replace(/%40/gi, "@").replace(/%5b/gi, "["),
    s = i.search(/[/?#]/);
  return s !== -1 && i.includes("@[", s);
}
function bs(e, n) {
  if (!/^(?:ssh|git|git\+ssh|ssh\+git):$/i.test(n.protocol)) return !1;
  let r = Rde(N(e))?.host;
  return r !== void 0 && r.toLowerCase() !== _jt(n.hostname).toLowerCase();
}
function xt(e, n) {
  return He(e, {
    forDestination: !0
  }) || He(n.href, {
    forDestination: !0
  }) || ys(e) || bs(e, n) || n.protocol === "file:" && Es(e);
}
function Es(e) {
  let n = N(e),
    r = n.search(/[?#]/),
    s = (r === -1 ? n : n.slice(0, r)).indexOf("\\"),
    o = n.lastIndexOf("@");
  return s !== -1 && o > s && /:|%3a/i.test(n.slice(s, o));
}
function Ss(e) {
  return /^[\w .+~@\\/-]*$/.test(e) && !/\\(?:[^A-Za-z0-9@]|$)| $|\.[_~+]*\.|(?:^|\/)[_~+]*\.[_~+]*$/.test(e) && !/(?:^|[^\\])@|@[^\\/ ]*(?:[/ ]|$)/.test(e);
}
function At(e) {
  let n = e.indexOf("://");
  return n !== -1 && /^[a-z][a-z0-9+.-]*$/i.test(e.slice(0, n)) ? n + 3 : 0;
}
function wt(e) {
  let n = e.indexOf("@");
  if (n === -1) return -1;
  let r = e.search(/[?#]/);
  if (r !== -1 && r < n && e.lastIndexOf("/", r) !== -1) return -1;
  let i = e.indexOf("/", n);
  return e.lastIndexOf("@", i === -1 ? e.length : i);
}
function ks(e, n, r) {
  let i = e.indexOf("/");
  if (i <= 0 || i > n) return !1;
  let s = e.slice(0, i).replace(/^\[[^\]]*\]/, "");
  return !Me(r ? s.replace(/:\d+$/, "") : s);
}
var xs = /[a-z][a-z0-9+.-]{0,31}:\/\/[^\s'"`<>]+/gi,
  Xn = /[\s'"`<>]/,
  q6s = "whitespace, quotes, backticks or angle brackets";
function K6s(e) {
  return /^https?:\/\//i.test(e) && !Xn.test(e);
}
var As = /(^|[\s'"`<>])([^\s'"`<>]*(?:@|%40)[^\s'"`<>]*)/gi,
  regExp_20 = new RegExp(`${$e}(?:${gs}):(?!\\/\\/)|${$e}(?:${Jn}):(?!\\/\\/)`, "gi");
function Rs(e) {
  let n = e.toLowerCase(),
    r = Math.max(n.lastIndexOf("@"), n.lastIndexOf("%40"));
  for (let i of e.matchAll(regExp_20)) {
    let s = i.index + i[0].length;
    if (r < s) return -1;
    let o = i.index + (i[1] ?? i[2] ?? "").length;
    if (i[2] === void 0) return o;
    let a = n.indexOf(":", s),
      u = Math.min(a === -1 ? r : a, r);
    if (a !== -1 && a < r || n.slice(s, u).includes("%3a")) return o;
  }
  return -1;
}
function hR(e) {
  if (!e) return e;
  return e.replace(xs, n => zf(n)).replace(As, (n, r, i) => {
    let s = Rs(i);
    return s === -1 ? r + i : r + i.slice(0, s) + zf(i.slice(s));
  });
}
function ot(e, n, r) {
  return (n || e.redactOnly !== !0) && (e.prefilter === void 0 || e.prefilter.test(r));
}
function _s(e, n) {
  for (let r = n + 2 * PGe;; r *= 2) {
    if (e.length <= r) return pJn(e);
    let i = pJn(e.slice(0, r)),
      s = i.length - PGe;
    if (s >= n) return ne(i, s);
  }
}
var Os = {
  aws: "AWS",
  gcp: "GCP",
  api: "API",
  pat: "PAT",
  ad: "AD",
  tf: "TF",
  oauth: "OAuth",
  npm: "NPM",
  pypi: "PyPI",
  jwt: "JWT",
  ci: "CI",
  scim: "SCIM",
  github: "GitHub",
  gitlab: "GitLab",
  openai: "OpenAI",
  digitalocean: "DigitalOcean",
  huggingface: "HuggingFace",
  hashicorp: "HashiCorp",
  sendgrid: "SendGrid"
};
var vt = {
    verbose: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
  },
  regExp_21 = new RegExp(`(?!\\t)[${z_}]`, "gu"),
  Is = 10485760,
  er = 1048576,
  Ps = 1e4,
  Fs = 262144,
  Ns = 5000,
  tr = 100,
  $s = hre(e => e());
function Hs(e) {
  return Object.hasOwn(vt, e);
}
function nr(e) {
  return SL(e) ? null : or(e);
}
function rr() {}
var Bs = {
  arm: "v5",
  target: null
};
function Ms(e, n) {
  e.stuck = e.appendSince === n ? "yes" : "no";
}
var Us = {
  sessionId: "",
  fromBackend: !1
};
function ir(e, configHome, r, i) {
  let s = Q(configHome, "debug"),
    o = Q(s, `${e.sessionId}.txt`),
    target;
  if (r === null) target = o;else if (i !== null && r === i) target = Q(i, `${e.sessionId}.txt`);else target = r;
  let arm = !e.fromBackend && target === o ? "v5" : "raw";
  return {
    target: target,
    arm: arm,
    configHome: configHome,
    rotate: arm === "raw" && !(ge(target) === s && target.endsWith(".txt")),
    pointLatest: arm === "raw" && target !== o
  };
}
function Ot(e) {
  return Bf.userNamed(Ts(e) ? e : or(e));
}
function Ws(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT";
}
function Gs(e, n = Wt) {
  return n ? e : void 0;
}
async function sr(e, sessionId, data, i) {
  let s = {
      namespace: "log",
      sessionId: sessionId,
      channel: "debug"
    },
    o = await Je.run(!0, () => e.append(s, [{
      data: data
    }], i ? {
      markLatest: !0
    } : void 0));
  if (o.ok) return "landed";
  return i && o.error.code === "InvalidArgument" && o.error.argument === "opts.markLatest" ? "refused" : "dropped";
}
class ar {
  deps;
  minLevel;
  filter;
  toStderr;
  filePath;
  runtimeDebugEnabled = !1;
  hasFormattedOutput = !1;
  debugFromLaunch;
  storageV5;
  writer = null;
  redirect = null;
  unflushedChunks = [];
  backlog = {
    chain: Promise.resolve(),
    length: 0,
    appendSince: 0,
    stuck: "no",
    droppedCount: 0,
    droppedTotal: 0
  };
  appendOldest = this.appendOldestChunks.bind(this);
  backendLinesLogged = 0;
  exiting = !1;
  exitHandlerRegistered = !1;
  successor = null;
  writtenBytes = -1;
  rotating = !1;
  resolvedLogPath = null;
  overrideDirectory = null;
  rotationTarget = null;
  latestMarked = !1;
  latestRefused = !1;
  constructor(e) {
    this.deps = e;
    if (this.storageV5 = Gs(e.storageV5), e.launchIdentity !== void 0) {
      this.minLevel = e.launchIdentity.minLevel, this.filter = e.launchIdentity.filter, this.toStderr = e.launchIdentity.toStderr, this.filePath = e.launchIdentity.filePath, this.debugFromLaunch = e.launchIdentity.debugFromLaunch;
      return;
    }
    let n = Array.isArray(e.argv) ? e.argv : [],
      r = n.indexOf("--"),
      i = r === -1 ? n : n.slice(0, r),
      s = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = s && Hs(s) ? s : "debug";
    let o = i.find(item => item.startsWith("--debug="));
    this.filter = o ? Vt(o.substring(8)) : null, this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e");
    let a = null;
    for (let u = 0; u < i.length; u++) {
      let l = i[u];
      if (l.startsWith("--debug-file=")) {
        a = nr(l.substring(13));
        break;
      }
      if (l === "--debug-file" && u + 1 < i.length) {
        a = nr(i[u + 1]);
        break;
      }
    }
    this.filePath = a, this.debugFromLaunch = Fe(e.env.DEBUG) || Fe(e.env.DEBUG_SDK) || i.includes("--debug") || i.includes("-d") || this.toStderr || o !== void 0 || this.filePath !== null;
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch;
  }
  drainsSyncAtExit() {
    return !(W() && this.storageV5 !== void 0 && this.deps.syncExitDrain === !1);
  }
  launchIdentity() {
    return {
      minLevel: this.minLevel,
      filter: this.filter,
      toStderr: this.toStderr,
      filePath: this.filePath,
      debugFromLaunch: this.debugFromLaunch,
      isAnt: this.deps.isAnt,
      isTestEnvironment: this.deps.isTestEnvironment
    };
  }
  enableDebugLogging() {
    let e = this.isDebugMode() || this.deps.isAnt;
    return this.runtimeDebugEnabled = !0, e;
  }
  logPath() {
    return this.filePath ?? (this.overrideDirectory !== null && this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ? Q(this.overrideDirectory, `${this.deps.sessionId()}.txt`) : null) ?? this.resolvedLogPath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? this.defaultLogPath();
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return Q(this.deps.configHomeDir(), "debug", `${e}.txt`);
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory;
  }
  isArmed() {
    return this.storageV5 !== void 0;
  }
  log(e, {
    level: level
  } = {
    level: "debug"
  }) {
    if (vt[level] < vt[this.minLevel]) return;
    let r = this.deps.limits?.();
    if (r === void 0) {
      this.emit(e, level);
      return;
    }
    let i = e.length > r.maxMessageLength ? `debug message not logged: it has ${e.length} characters, over this log's fixed limit of ${r.maxMessageLength} per message` : e,
      {
        admitted: admitted,
        leftOutBefore: leftOutBefore
      } = r.admit(i.length);
    if (!admitted) return;
    r.timed(() => {
      if (leftOutBefore > 0) this.emit(`debug messages not logged: ${leftOutBefore} since this log's last line, over its fixed limit on how much it logs at a time`, level);
      this.emit(i, level);
    });
  }
  emit(e, n) {
    if (!this.shouldLog(e)) return;
    let r = ps(e.trim());
    r = r.includes(`
`) ? mL(_(r)) : r.replace(regExp_21, G5);
    let s = `${new Date().toISOString()} [${n.toUpperCase()}] ${r}
`;
    if (this.toStderr) {
      this.deps.writeToStderr(s);
      return;
    }
    this.write(s);
  }
  write(content) {
    let n = this.getWriter(),
      origin_3 = Us;
    if (this.storageV5 !== void 0) {
      if (origin_3 = {
        sessionId: this.deps.sessionId(),
        fromBackend: Je.getStore() === !0
      }, origin_3.fromBackend) this.backendLinesLogged++;
    }
    if (n.write({
      origin: origin_3,
      content: content
    }), this.exiting) n.flush();
  }
  async flush() {
    let backendLinesLogged = this.backendLinesLogged;
    if (this.writer?.flush(), await this.drained(), this.storageV5 !== void 0 && this.successor) return this.successor.flush();
    for (let n = 0; this.backendLinesLogged !== backendLinesLogged && n < 3; n++) backendLinesLogged = this.backendLinesLogged, this.writer?.flush(), await this.drained();
    if (this.backlog.droppedCount > 0 && this.backlog.length === 0 && !this.successor) this.write(""), this.writer?.flush(), await this.drained();
  }
  async drained() {
    if (this.isAppendStuck()) return;
    let e = this.backlog.chain.then(() => !0);
    do if (await je(e, tr)) return; while (!this.isAppendStuck());
  }
  isAppendStuck() {
    let backlog = this.backlog,
      {
        appendSince: appendSince
      } = backlog;
    if (backlog.stuck === "no" && appendSince !== 0 && Date.now() - appendSince >= Ns) backlog.stuck = "suspected", setTimeout(Ms, tr, backlog, appendSince).unref();
    return backlog.stuck === "yes";
  }
  dispose(e) {
    this.redirect = e;
    try {
      this.writer?.dispose();
    } finally {
      this.redirect = null, this.writer = null;
    }
  }
  succeed(e) {
    this.runtimeDebugEnabled = e.runtimeDebugEnabled, this.hasFormattedOutput = e.hasFormattedOutput, this.unflushedChunks = e.unflushedChunks, this.backlog = e.backlog, this.exitHandlerRegistered = e.exitHandlerRegistered, e.successor = this, e.dispose(n => {
      this.write(n);
    });
  }
  handleExit() {
    if (this.successor) {
      this.successor.handleExit();
      return;
    }
    if (this.exiting = !0, this.backlog.droppedCount > 0) try {
      this.write("");
    } catch {}
    this.writer?.flush(), this.drainSync();
  }
  async maybeRotate(e, n, r = Is) {
    let i = W() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0) {
      if (i) {
        let s = await i.stat(Ot(e));
        this.writtenBytes = s.ok && s.value.kind !== "absent" ? s.value.size : 0;
      } else this.writtenBytes = await vs(e).then(s => s.size).catch(() => 0);
    } else this.writtenBytes += n;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = !0;
    try {
      let s = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
      if (i) {
        let o = Ot(e),
          a = Ot(s),
          u = await i.rename(o, a);
        if (!u.ok && !Ws(u.error)) {
          if (await i.delete(a, {
            missingOk: !0
          }), !(await i.rename(o, a)).ok) await i.delete(o, {
            missingOk: !0
          });
        }
      } else try {
        await Qn(e, s);
      } catch (error) {
        if (!G(error)) await _t(s).catch(() => {}), await Qn(e, s).catch(() => _t(e).catch(() => {}));
      }
      this.writtenBytes = 0;
    } finally {
      this.rotating = !1;
    }
  }
  shouldLog(e) {
    if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null) return !1;
    if (!this.deps.isAnt && !this.isDebugMode()) return !1;
    if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u") return !1;
    return jt(e, this.filter);
  }
  resolveDirToFile(e) {
    return this.resolvedLogPath = Q(e, `${this.deps.sessionId()}.txt`), this.resolvedLogPath;
  }
  async appendGroup(e, n, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, n, r);
      return;
    }
    if (e.target === null || !this.writesFiles()) return;
    if (i) await qn(ge(e.target), {
      recursive: !0
    }).catch(() => {});
    let s = e;
    try {
      await Rt(e.target, r);
    } catch (error) {
      if (!hV(error)) throw error;
      if (this.storageV5 === void 0) s = {
        ...e,
        target: this.resolveDirToFile(e.target)
      }, await Rt(s.target, r);else {
        if (this.overrideDirectory = e.target, s = ir(n, e.configHome, e.target, e.target), s.arm === "v5") {
          await this.appendV5AndMark(this.storageV5, n, r);
          return;
        }
        await qn(ge(s.target), {
          recursive: !0
        }).catch(() => {});
        try {
          await Rt(s.target, r);
        } catch {
          return;
        }
      }
    }
    if (s.rotate) {
      if (this.storageV5 !== void 0 && s.target !== this.rotationTarget) this.rotationTarget = s.target, this.writtenBytes = -1;
      await this.maybeRotate(s.target, Buffer.byteLength(r)).catch(rr);
    }
    if (s.pointLatest) this.markLatestSymlink();
  }
  async appendV5AndMark(e, n, r) {
    let i = W(),
      s = i && !this.latestMarked && !this.latestRefused,
      o = await sr(e, n.sessionId, r, s);
    if (o === "refused") this.latestRefused = !0, o = await sr(e, n.sessionId, r, !1), this.log("debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process", {
      level: "warn"
    });
    if (o !== "landed") return;
    if (s && !this.latestRefused) this.latestMarked = !0;else if (!i) this.markLatestSymlink();
  }
  markLatestSymlink() {
    if (!this.latestMarked && this.writesFiles()) this.latestMarked = !0, this.updateLatestSymlink();
  }
  isSessionDiskless() {
    try {
      return this.deps.diskless?.() === !0;
    } catch {
      return !0;
    }
  }
  writesFiles() {
    if (this.isSessionDiskless()) return !1;
    try {
      return this.deps.defaultFile?.() !== !1 || this.filePath !== null || this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR !== void 0;
    } catch {
      return !1;
    }
  }
  async appendOldestChunks() {
    let backlog_2 = this.backlog,
      n = this.unflushedChunks[0],
      r = n?.queued;
    if (r === void 0) return;
    let i = 0,
      s = 0,
      o = !1;
    for (let {
      content: content_2,
      queued: queued
    } of this.unflushedChunks) {
      if (queued === void 0 || queued.owner !== r.owner || queued.decision.arm !== r.decision.arm || queued.decision.target !== r.decision.target || queued.origin.sessionId !== r.origin.sessionId || queued.origin.fromBackend !== r.origin.fromBackend || i > 0 && s + content_2.length > Fs) break;
      i++, s += content_2.length, o ||= queued.needMkdir;
    }
    if (backlog_2.appendSince = Date.now(), await r.owner.appendGroup(r.decision, r.origin, this.unflushedChunks.slice(0, i).map(item => item.content).join(""), o).catch(rr), backlog_2.appendSince = 0, backlog_2.stuck = "no", this.unflushedChunks[0] === n) this.unflushedChunks.splice(0, i), backlog_2.length -= s;
  }
  drainSync() {
    if (this.unflushedChunks.length === 0) return;
    if (this.backlog.length = 0, !this.drainsSyncAtExit() || !this.writesFiles() || this.isAppendStuck()) {
      this.unflushedChunks.length = 0;
      return;
    }
    let e = [];
    for (let n of this.unflushedChunks.splice(0)) {
      if (n.target === null) continue;
      let r = e.at(-1);
      if (r !== void 0 && r.armed === n.armed && (!n.armed || r.target === n.target)) r.parts.push(n);else e.push({
        target: n.target,
        armed: n.armed,
        parts: [n]
      });
    }
    for (let {
      target: target_2,
      armed: armed,
      parts: parts
    } of e) {
      let s = armed ? target_2 : this.logPath(),
        o = parts.map(item => item.content).join("");
      try {
        se().mkdirSync(ge(s));
      } catch {}
      try {
        se().appendFileSync(s, o);
      } catch (error) {
        if (hV(error)) try {
          if (!armed) se().appendFileSync(this.resolveDirToFile(s), o);else {
            let u = (d, p) => {
                try {
                  se().appendFileSync(Q(s, `${d}.txt`), p);
                } catch {}
              },
              l = parts[0]?.sessionId,
              c = "";
            for (let d of parts) {
              if (d.sessionId !== l) u(l, c), l = d.sessionId, c = "";
              c += d.content;
            }
            u(l, c);
          }
        } catch {}
      }
    }
  }
  droppedLineTotal() {
    return this.backlog.droppedTotal;
  }
  takeDroppedNote() {
    let {
      droppedCount: droppedCount
    } = this.backlog;
    if (droppedCount === 0) return "";
    return this.backlog.droppedCount = 0, `${new Date().toISOString()} [WARN] debug messages not logged: ${droppedCount} since the line above, because writes to this log were over 10 s behind, with over 1 MiB waiting
`;
  }
  groupLines(lines) {
    let n = lines[0];
    if (n === void 0) return [];
    let r = this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null,
      i = this.isSessionDiskless();
    if (i && (this.storageV5 === void 0 || r !== null)) return [];
    if (this.storageV5 === void 0) return [{
      decision: {
        target: this.logPath(),
        arm: "raw",
        configHome: "",
        rotate: !0,
        pointLatest: !0
      },
      origin: n.origin,
      lines: lines
    }];
    let s = [];
    for (let o of lines) {
      if (i && o.origin.fromBackend) continue;
      let a = s.at(-1);
      if (a !== void 0 && a.origin.sessionId === o.origin.sessionId && a.origin.fromBackend === o.origin.fromBackend) a.lines.push(o);else s.push({
        decision: i ? Bs : ir(o.origin, this.deps.configHomeDir(), r, this.overrideDirectory),
        origin: o.origin,
        lines: [o]
      });
    }
    return s;
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null,
      armed_2 = this.storageV5 !== void 0;
    if (this.writer = Ze({
      writeBatch: r => {
        if (this.redirect) {
          this.redirect(r.map(item => item.content).join(""));
          return;
        }
        if (this.exiting) {
          for (let o of this.groupLines(r)) this.unflushedChunks.push({
            target: o.decision.target,
            sessionId: o.origin.sessionId,
            armed: armed_2,
            content: this.takeDroppedNote() + o.lines.map(item => item.content).join("")
          });
          this.drainSync();
          return;
        }
        let i = this.writesFiles(),
          backlog_3 = this.backlog;
        this.isAppendStuck();
        for (let o of this.groupLines(r)) {
          if (o.decision.arm === "raw" && !i) continue;
          if (backlog_3.droppedCount > 0 ? backlog_3.length >= er / 2 : backlog_3.length >= er && Date.now() - (this.unflushedChunks[0]?.queued?.at ?? 1 / 0) >= Ps) {
            backlog_3.droppedCount += o.lines.length, backlog_3.droppedTotal += o.lines.length;
            continue;
          }
          let content_3 = this.takeDroppedNote() + o.lines.map(item => item.content).join("");
          if (content_3 === "") continue;
          let u = o.decision.arm === "raw" ? ge(o.decision.target) : null,
            needMkdir = u !== null && (o.origin.fromBackend || e !== u);
          if (u !== null) e = u;
          this.unflushedChunks.push({
            target: o.decision.target,
            sessionId: o.origin.sessionId,
            armed: armed_2,
            content: content_3,
            queued: {
              at: Date.now(),
              owner: this,
              decision: o.decision,
              origin: o.origin,
              needMkdir: needMkdir
            }
          }), backlog_3.length += content_3.length, backlog_3.chain = $s(() => backlog_3.chain.then(this.appendOldest));
        }
      },
      sizeOf: r => r.content.length,
      flushIntervalMs: 1000,
      maxBufferSize: 100,
      immediateMode: this.isDebugMode()
    }), this.deps.registerCleanup(async () => {
      this.writer?.dispose(), await this.drained();
    }), !this.exitHandlerRegistered) this.exitHandlerRegistered = !0, this.deps.onExit(this.handleExit.bind(this));
    return this.writer;
  }
  async updateLatestSymlink() {
    try {
      let e = this.logPath(),
        n = Q(ge(e), "latest");
      await _t(n).catch(() => {}), await Ls(e, n);
    } catch {}
  }
}
class ur {
  instance = void 0;
  init = {};
  defaultFile = !0;
  limits = void 0;
  setInstance(e) {
    this.instance = e;
  }
  setInit(e) {
    this.init = e;
  }
  disableDefaultFile() {
    this.defaultFile = !1;
  }
  setLimits(e) {
    this.limits = e;
  }
}
var Ks = new z(() => new ur());
function Ee() {
  return ms(Ks);
}
function Lt(e, launchIdentity) {
  return new ar({
    argv: process.argv,
    env: process.env,
    sessionId: () => K(),
    configHomeDir: () => Pe(),
    onExit: r => {
      process.on("exit", r);
    },
    registerCleanup: r => {
      bt(r);
    },
    writeToStderr: r => {
      XW(r, {
        mayDrop: !0
      });
    },
    isAnt: launchIdentity?.isAnt ?? !1,
    isTestEnvironment: launchIdentity?.isTestEnvironment ?? !1,
    launchIdentity: launchIdentity,
    storageV5: e.init.storageV5 !== void 0 && e.init.configHome === vf() ? e.init.storageV5 : void 0,
    syncExitDrain: e.init.syncExitDrain,
    diskless: () => de(),
    defaultFile: () => e.defaultFile,
    limits: () => e.limits
  });
}
function G4(e) {
  let n = Ee();
  n.setInit({
    storageV5: e.storageV5,
    configHome: vf(),
    syncExitDrain: e.syncExitDrain
  });
  let instance = n.instance;
  if (instance) {
    let i = Lt(n, instance.launchIdentity());
    n.setInstance(i), i.succeed(instance);
  }
  if (e.syncExitDrain === !1 && !V().drainsSyncAtExit()) t("Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short");
}
function V() {
  let e = Ee(),
    instance_2 = e.instance;
  if (instance_2) return instance_2;
  let r = Lt(e);
  return e.setInstance(r), r;
}
function Vmn() {
  return V().minLevel;
}
function YW() {
  return V().isDebugMode();
}
function V5() {
  return V().toStderr;
}
function qWo() {
  return V().filePath;
}
function KWo() {
  return V().enableDebugLogging();
}
function YWo() {
  let e = Ee(),
    instance_3 = e.instance;
  if (!instance_3) return;
  let r = Lt(e);
  e.setInstance(r), r.succeed(instance_3);
}
function RDe(e) {
  V().hasFormattedOutput = e;
}
function XWo() {
  return V().hasFormattedOutput;
}
async function FTe() {
  await Ee().instance?.flush();
}
function mJn() {
  return de() ? {} : {
    debug_stderr_dropped_total: izo(),
    debug_file_dropped_total: Ee().instance?.droppedLineTotal() ?? 0
  };
}
function t(e, n = {
  level: "debug"
}) {
  V().log(e, n);
}
function V4() {
  return V().logPath();
}
function JWo(e, n) {
  return e === V().defaultLogPath(n);
}
function Xne(e, n) {
  return;
}
export { Eh, $p, $6s, Bf, IWo, U6s, B6s, qne, bt, Vbt, Km, mI, sJn, gu, Wh, _, b$, Bi, iJn, J, jo, bc, LZe, Vhe, yjt, Ey, NZe, aJn, MWo, lJn, gI, qbt, DWo, Tde, LTe, l1r, jf, S$, _o, NTe, Kne, code as Kbt, JB, KW, d1r, LWo, Cde, w$, c1r, NWo, ci, Ybt, W5, Xbt, xo, u1r, W_, se, vg, AGe, J2, mR, Bmn, FZe, FWo, z4, j6s, QB, dJn, Q2, HZe, cJn, HWo, gR, zd, ZB, Ru, p1r, pn, kDe, u0, z_, EDe, $Ze, regExp_3 as W6s, xGe, hI, $Wo, Wf, Fc, UWo, UZe, sP, nc, BZe, _n, mL, z5, ti, z6s, jZe, MA, jmn, uJn, Yne, Jbt, G5, e1, TDe, Rde, _jt, BWo, G6s, regExp_14 as jWo, regExp_15 as V6s, WWo, Qbt, ps, wQ, zWo, pJn, PGe, bjt, CDe, vQ, GWo, Wmn, sC, zmn, VWo, f1r, fJn, G_, zf, WZe, qhe, kQ, Gmn, q6s, K6s, hR, G4, Vmn, YW, V5, qWo, KWo, YWo, RDe, XWo, FTe, mJn, t, V4, JWo, Xne };