// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Mme, Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { Po, z, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { T4e } from "B:/~BUN/root/chunk-wt4dg253.js";
import { R, k, K, WH, vY } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { En, or, th, yS, bl, CG, NC, Bb, R7, iK, UH, Ba, Cl, Qxe, Xv, BH, HE, ad, Ks, Jv, jH, pB } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { xWs } from "B:/~BUN/root/chunk-dayhhbfr.js";
import { Ue, af } from "B:/~BUN/root/chunk-eev762xg.js";
import { IN, AWs } from "B:/~BUN/root/chunk-15vbkr6z.js";
import { ib, LH, bG, _s } from "B:/~BUN/root/chunk-jdtvghyw.js";
import { Ht } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { vWs } from "B:/~BUN/root/chunk-bvb659eh.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { appendFile as me, mkdir as Xe, rename as Ze, stat as Gt, symlink as zt, unlink as ye } from "fs/promises";
import { dirname as Y, isAbsolute as Jt, join as H, resolve as ot } from "path";
function Fb(value) {
  return {
    ok: !0,
    value: value
  };
}
function yh(error) {
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
function Fra(e) {
  if (e.ok) return e.value;
  throw new ResultError(e.error);
}
var og = {
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
function Xjs(e) {
  if (typeof e !== "object" || e === null) return !1;
  let n = Reflect.get(e, "code"),
    r = Reflect.get(e, "telemetryCode");
  return n === "Failed" && typeof r === "string" && (vY(r) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(r));
}
function Hra(cause) {
  if (Xjs(cause)) {
    if (cause.cause instanceof Error) return cause.cause;
    return Object.assign(new R(Ht(cause), "host file operation refused by the storage backend"), {
      code: cause.telemetryCode,
      cause: cause
    });
  }
  return Object.assign(new R(Ht(cause), "host file operation could not be performed by the storage backend"), {
    cause: cause
  });
}
var de = globalThis.process?.getBuiltinModule?.("async_hooks"),
  xe = de !== void 0,
  ce = de ? new de.AsyncLocalStorage() : {
    run: (e, n) => n(),
    getStore: () => {
      return;
    }
  };
function fe({
  writeBatch: writeBatch,
  sizeOf: sizeOf,
  flushIntervalMs = 1000,
  maxBufferSize = 100,
  maxBufferBytes = 1 / 0,
  immediateMode = !1
}) {
  let a = [],
    u = 0,
    d = null,
    l = null;
  function g() {
    if (d) clearTimeout(d), d = null;
  }
  function p(f) {
    try {
      writeBatch(f);
    } catch {}
  }
  function flush() {
    if (l) p(l), l = null;
    if (a.length === 0) return;
    p(a), a = [], u = 0, g();
  }
  function x() {
    if (!d) d = setTimeout(flush, flushIntervalMs);
  }
  function E() {
    if (l) {
      l.push(...a), a = [], u = 0, g();
      return;
    }
    let f = a;
    a = [], u = 0, g(), l = f, setImmediate(() => {
      let h = l;
      if (l = null, h) p(h);
    });
  }
  return {
    write(f) {
      if (immediateMode) {
        p([f]);
        return;
      }
      if (a.push(f), u += sizeOf(f), x(), a.length >= maxBufferSize || u >= maxBufferBytes) E();
    },
    flush: flush,
    dispose() {
      flush();
    }
  };
}
function $ra({
  writeFn: writeFn,
  flushIntervalMs: flushIntervalMs_2,
  maxBufferSize: maxBufferSize_2,
  maxBufferBytes: maxBufferBytes_2,
  immediateMode: immediateMode_2
}) {
  return fe({
    writeBatch: s => writeFn(s.join("")),
    sizeOf: s => s.length,
    flushIntervalMs: flushIntervalMs_2,
    maxBufferSize: maxBufferSize_2,
    maxBufferBytes: maxBufferBytes_2,
    immediateMode: immediateMode_2
  });
}
function dt(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]();
}
class re {
  #e = new Set();
  #t = !1;
  get drainStarted() {
    return this.#t;
  }
  register(e) {
    let n = dt(e);
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
class Ee {
  cleanup = new re();
  preExitFlush = new re();
  preExitFlushWaits = new Map();
}
var ct = new W(() => new Ee());
function U() {
  return Po(ct);
}
var x5 = 2000;
function vt(e) {
  return U().cleanup.register(e);
}
async function Ijt() {
  await U().cleanup.drain();
}
function sg() {
  return U().cleanup.drainStarted;
}
function zA(e, mayWaitMs) {
  let {
      preExitFlush: preExitFlush,
      preExitFlushWaits: preExitFlushWaits
    } = U(),
    unregister = preExitFlush.register(e);
  if (mayWaitMs !== void 0) preExitFlushWaits.set(e, {
    mayWaitMs: mayWaitMs,
    unregister: unregister
  });
  let s = () => {
    preExitFlushWaits.delete(e), unregister();
  };
  return Object.assign(s, {
    [Symbol.dispose]: s
  });
}
function Jjs() {
  return Math.max(0, ...Array.from(U().preExitFlushWaits.values(), e => e.mayWaitMs));
}
async function Ura() {
  let {
      preExitFlushWaits: preExitFlushWaits_2
    } = U(),
    n = new re();
  preExitFlushWaits_2.forEach(({
    unregister: unregister_2
  }, index) => {
    unregister_2(), n.register(index);
  }), preExitFlushWaits_2.clear(), await n.drain();
}
async function IHr() {
  let {
    preExitFlush: preExitFlush_2,
    preExitFlushWaits: preExitFlushWaits_3
  } = U();
  preExitFlushWaits_3.clear(), await preExitFlush_2.drain();
}
class Oe {
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
var Le = new Oe();
function Re(e) {
  let n = Le.lookup(e);
  if (n !== void 0) return n;
  let r = ft(e);
  return Le.remember(e, r), r;
}
function ft(e) {
  if (!e || e.trim() === "") return null;
  let n = e.split(",").map(item => item.trim()).filter(Boolean);
  if (n.length === 0) return null;
  let isExclusive = n.some(item => item.startsWith("!")),
    i = n.some(item => !item.startsWith("!"));
  if (isExclusive && i) return null;
  let o = n.map(item => item.replace(/^!/, "").toLowerCase());
  return {
    include: isExclusive ? [] : o,
    exclude: isExclusive ? o : [],
    isExclusive: isExclusive
  };
}
function gt(e) {
  let n = [],
    r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) n.push("mcp"), n.push(r[1].toLowerCase());else {
    let s = e.match(/^([^:[]+):/);
    if (s && s[1]) n.push(s[1].trim().toLowerCase());
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) n.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) n.push("1p");
  let o = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (o && o[1]) {
    let s = o[1].trim().toLowerCase();
    if (s.length < 30 && !s.includes(" ")) n.push(s);
  }
  return Array.from(new Set(n));
}
function pt(e, n) {
  if (!n) return !0;
  if (e.length === 0) return !1;
  if (n.isExclusive) return !e.some(item => n.exclude.includes(item));else return e.some(item => n.include.includes(item));
}
function Fe(e, n) {
  if (!n) return !0;
  let r = gt(e);
  return pt(r, n);
}
import * as m from "fs";
import { appendFile as St, chmod as xt, copyFile as Et, link as Pt, lstat as ge, mkdir as Lt, open as C, readdir as Ot, readFile as Ae, readlink as Rt, realpath as Ft, rename as Dt, rmdir as At, rm as Tt, stat as Te, symlink as Nt, unlink as It } from "fs/promises";
import { homedir as Ne } from "os";
import * as c from "path";
import { realpath as ht } from "fs";
var mt = e => new Promise((n, r) => {
  ht(e, (i, o) => i === null ? n(o) : r(i));
});
var yt = 0xffffffffffffffffn;
function sa(e) {
  let n = BigInt(e);
  return n === 0n || n === -1n || n === yt || n === 1n << 64n;
}
function fY(e, n) {
  return !sa(e.ino) && !sa(n.ino) && e.ino !== n.ino;
}
import { writeFileSync as bt } from "fs";
var Dn = (() => {
  let CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS !== void 0) {
    let n = Number(CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS);
    if (!Number.isNaN(n) && n >= 0) return n;
  }
  return 1 / 0;
})();
var kt = {
  [Symbol.dispose]() {}
};
function wt() {
  return kt;
}
var Hb = wt;
function _(e, n, r) {
  using i = Hb`JSON.stringify(${se(e)})`;
  return JSON.stringify(e, n, r);
}
function AN(e) {
  return JSON.stringify(e) + `
`;
}
function oi(e) {
  return JSON.stringify(e);
}
function RVn(e) {
  using n = Hb`jsonlJoin(${e.length})`;
  let r = "";
  for (let i = 0; i < e.length; i++) r += JSON.stringify(e[i]) + `
`;
  return r;
}
var ee = (e, n) => {
  using r = Hb`JSON.parse(${se(e)})`;
  return typeof n > "u" ? JSON.parse(e) : JSON.parse(e, n);
};
function ds(e) {
  return JSON.parse(e);
}
function Ri(e, n) {
  using r = Hb`structuredClone(${se(e)})`;
  return structuredClone(e, n);
}
function ywt(e, n, r) {
  using i = Hb`fs.writeFileSync(${e}, ${se(n)})`;
  bt(e, n, r);
}
function se(e) {
  return typeof e === "string" ? e.length : e;
}
var _t = "\u2192";
function Ct() {
  return 0;
}
function xae() {
  return "r";
}
var G = /[\\/]+/;
function gcn(e, n) {
  let r = u => u.split(G).filter(Boolean),
    i = c.resolve(e),
    o = c.resolve(n),
    s = r(i),
    a = r(o);
  return c.parse(i).root === c.parse(o).root && s.length < a.length && s.every((item, index) => item === a[index]);
}
function Bt(e) {
  let n = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    n += i;
  }
  let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r;
}
function Wt(e) {
  let n = c.join(e).replace(/(?<=[^\\/])[\\/]+$/, "");
  if (or(n) && !ad(n)) return n;
  return Bt(e);
}
var Mt = Wt;
function ae(e, n, r) {
  let i = bl(e);
  if (n.length === 0 || i || n.some(item => item === "." || item === "..")) {
    if (r !== void 0 && (n.length > 0 || i)) r(c.join(e, ...n));
    return i ? Mt(e) : e;
  }
  return c.join(e, ...n);
}
var Zy = "\x00unverified-ancestry",
  _wt = "\x00opaque-link-text";
function he(e) {
  return th(c.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""));
}
function DHr(e, n = !0) {
  return e.includes("\uFFFD") || he(e) || n && (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) || /^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e) || e.split(/[\\/]/).some(item => item !== "." && item !== ".." && /[. ]$/.test(item)));
}
function sWs(e) {
  return e !== void 0 && e !== Zy;
}
function LHr(path_5) {
  return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), {
    code: "ELOOP",
    path: path_5
  });
}
function Ie(e, n, r = !1, i = !1, o = !1) {
  if (n?.unreadableAncestry !== "unverified") return;
  let s = e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (s === "ENOENT" || s === "ENOTDIR") return;
  if (s === "ENAMETOOLONG" && !r && !i && !o) return;
  return Zy;
}
function V(e) {
  return BH(e);
}
function oe(e, n) {
  return n !== void 0 && n.some(item => BH(item) && !UH(e, item) && (Be(e, item) || Ba(e)));
}
function _e(e, n) {
  return n !== void 0 && n.some(item => BH(item) && Be(item, e));
}
function Be(e, n) {
  let r = s => s.length > 1 ? s.replace(/\/+$/, "") : s,
    [i, o] = [r(e), r(n)];
  return i === o || i.startsWith(o === "/" ? o : o + "/");
}
function J(e, n) {
  return n === void 0 || n.every(item => UH(e, item));
}
function ue(e, n) {
  return n === void 0 || n.every(item => R7(e, item));
}
function Ce(e, n, r) {
  let i = Ba(e) ? Qxe(e) : null;
  if (i === null || !J(i, n)) return;
  let o = c.join(e);
  if (Ba(o) && iK(o) === iK(i)) return o;
  return ae(e, [], r);
}
function We(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [e.anchor] : void 0;
}
function xN(e) {
  return th(e) || Ks(e) || Cl(e) || Xv(e) || Og(ZS, e) !== void 0;
}
async function Mjt(e) {
  return th(e) || Ks(e) || Cl(e) || Xv(e) || (await MH(ZS, e)) !== void 0;
}
function iWs(e, n = ZS) {
  return th(e) || Ks(e) || Cl(e) || Xv(e) || Og(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  }) !== void 0;
}
async function Pwe(e, n = ZS) {
  return th(e) || Ks(e) || Cl(e) || Xv(e) || (await MH(n, e, {
    surfaceNetworkRaw: !0,
    unreadableAncestry: "unverified"
  })) !== void 0;
}
async function u$e(e, n, fsImpl = ZS) {
  if (th(e)) return !0;
  if (Ks(e)) return !0;
  if (Cl(e)) {
    let i = iK(e);
    if (i === null || n === null || i !== iK(n)) return !0;
  }
  if (Xv(e)) return !0;
  return (await JPo(e, n, {
    fsImpl: fsImpl
  })).verdict !== "clean";
}
async function JPo(e, anchor, {
  fsImpl: fsImpl_2 = ZS,
  signal: signal
} = {}) {
  let reaches = await MH(fsImpl_2, e, {
    ...(anchor === null ? {} : {
      anchor: anchor
    }),
    unreadableAncestry: "unverified",
    surfaceNetworkRaw: !0
  }, signal);
  if (reaches === void 0) return {
    verdict: "clean"
  };
  if (reaches === Zy) return {
    verdict: "unverified"
  };
  return {
    verdict: "network",
    reaches: reaches
  };
}
function Og(e, n, r) {
  return Me(le(n, r), i => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow") return e.openDirNoFollowSync(i.path), "ok";
    return e.readlinkSync(i.path);
  });
}
function MH(e, n, r, i, o) {
  return jt(le(n, r), i, async s => {
    if (s.kind === "lstat") {
      if (o === void 0) return e.lstat(s.path);
      let a;
      try {
        a = await e.lstatBigint(s.path);
      } catch (error) {
        throw o(s.path, void 0), error;
      }
      return o(s.path, a), a;
    }
    if (s.kind === "opendirNofollow") return await e.openDirNoFollow(s.path), "ok";
    return e.readlink(s.path);
  });
}
function Me(e, n) {
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
async function jt(e, n, r) {
  let i;
  for (;;) {
    let o = e.next(i);
    if (o.done) return o.value;
    if (n?.aborted === !0) return Zy;
    try {
      i = await r(o.value);
    } catch (error) {
      i = {
        errno: k(error)
      };
    }
  }
}
async function Ut(e, n, r, i, o) {
  let s = Symbol("cut short"),
    a,
    u = n === void 0 ? void 0 : new Promise(l => {
      a = () => l(s), n.addEventListener("abort", a, {
        once: !0
      });
    }),
    d;
  try {
    for (;;) {
      let l = e.next(d);
      if (l.done) return l.value;
      if (n?.aborted === !0 || r?.(l.value) === !1) return o;
      let g = i(l.value).catch(y => ({
          errno: k(y)
        })),
        p = await (u === void 0 ? g : Promise.race([g, u]));
      if (p === s) return o;
      d = p;
    }
  } finally {
    if (a !== void 0) n?.removeEventListener("abort", a);
  }
}
function* le(e, n) {
  let r = We(n);
  if (V(e) && !oe(e, r)) return e;
  if (or(e) && !ad(e) && ue(e, r) || Ba(e) && J(e, r)) return;
  let i = c.resolve(e),
    o = c.parse(i).root,
    s = o,
    a = i.slice(o.length).split(G).filter(Boolean),
    u = 0,
    d = a.length,
    l = !1,
    g = !1,
    p,
    y = 64,
    x = () => a.some(item => bl(item)),
    E = () => /[. ]$/.test(a[0]);
  while (a.length > 0 && u < y) {
    if (l && bl(a[0])) return Zy;
    let path_6 = c.join(s, a[0]);
    if (Ba(path_6) && J(path_6, r) || V(path_6) && !(oe(path_6, r) || _e(path_6, r))) return ae(path_6, a.slice(1), n?.onCollapsedLanding);
    if (Bb(path_6)) {
      if (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified") return Zy;
      return ae(path_6, a.slice(1), n?.onCollapsedLanding);
    }
    let h = !1;
    if (h && c.dirname(path_6) === "/dev/fd" && a.some((item, index) => index > 0 && (item === ".." || item === "."))) {
      a.shift();
      while (a[0] === "." && a.length > 1) a.shift();
      s = path_6;
      continue;
    }
    let b = h ? {
      errno: "ENOENT"
    } : yield {
      kind: "lstat",
      path: path_6
    };
    if (b === void 0 || typeof b === "string" || "errno" in b) {
      if (n?.launchAncestry && !g && typeof b === "object" && "errno" in b && (b.errno === "EPERM" || b.errno === "EACCES") && gcn(path_6, n.launchAncestry)) {
        l = !0, a.shift(), s = path_6;
        continue;
      }
      if (typeof b === "object" && "errno" in b && (b.errno === "ENOENT" || b.errno === "ENOTDIR")) n?.onOutcome?.({
        kind: "absent",
        at: s,
        remaining: [...a],
        fromLinkTarget: a.length > d,
        ...(b.errno === "ENOTDIR" && {
          notAFolder: !0
        })
      });
      return Ie(b, n, u > 0, x(), E());
    }
    let F = b;
    if (g = !0, !F.isSymbolicLink()) {
      a.shift(), s = path_6;
      continue;
    }
    u++;
    let I = path_6 + "\x00" + a.join("\x00");
    if ((p ??= new Set()).has(I)) return;
    p.add(I);
    let P = yield {
      kind: "readlink",
      path: path_6
    };
    if (typeof P !== "string") return Ie(P, n, u > 0, x(), E());
    let text = P;
    if (n?.literalLinkText === "opaque" && DHr(text)) return _wt;
    if (!c.isAbsolute(text)) {
      let L = text.split(G).filter(Boolean);
      if (n?.surfaceNetworkRaw === !0) {
        let T = Ce((s.endsWith(c.sep) ? s : s + c.sep) + [...L, ...a.slice(1)].join(c.sep), r, n?.onCollapsedLanding);
        if (T !== void 0) return T;
      }
      a.shift(), n?.onHop?.({
        composed: c.resolve(s, text, ...a),
        leaf: a.length === 0,
        text: text
      }), d = Math.min(d, a.length), a = [...L, ...a];
      continue;
    }
    let w = text;
    if (n?.surfaceNetworkRaw === !0 && a.length > 1 && Xv(w)) {
      let L = Ce([w, ...a.slice(1)].join(c.sep), r, n?.onCollapsedLanding);
      if (L !== void 0) return L;
    }
    if (or(w) && !ad(w) && ue(w, r) || Ba(w) && J(w, r) || V(w) && !(oe(w, r) || a.length > 1 && _e(w, r))) return a.shift(), ae(w, a, n?.onCollapsedLanding);
    if (n?.surfaceNetworkRaw === !0 && bl(w) && (or(w) || Cl(w) || BH(w) || Xv(w))) return a.shift(), a.length === 0 ? w : w + c.sep + a.join(c.sep);
    a.shift();
    let Q = c.parse(w).root || c.sep,
      M = c.parse(path_6).root,
      A = /^[\\/]$/.test(Q) && M !== "" && !/^[\\/]$/.test(M);
    if (A && (n?.surfaceNetworkRaw === !0 || n?.unreadableAncestry === "unverified")) return Zy;
    n?.onHop?.({
      composed: a.length === 0 ? w : c.resolve(w, ...a),
      leaf: a.length === 0,
      text: text
    }), s = A ? M : Q, g = !1, d = Math.min(d, a.length), a = [...w.slice(Q.length).split(G).filter(Boolean), ...a];
  }
  if (a.length > 0 && n?.literalLinkText === "opaque") return _wt;
  if (a.length > 0) return Zy;
  if (u > 0 && Xv(s)) return s;
  if (V(s) && !oe(s, r)) return s;
  if (a.length === 0) n?.onOutcome?.({
    kind: "resolved",
    path: s
  });
  return;
}
function io(e, resolvedPath) {
  if (or(resolvedPath) && !ad(resolvedPath) || Ba(resolvedPath) || HE(resolvedPath)) return {
    resolvedPath: resolvedPath,
    isSymlink: !1,
    isCanonical: !1
  };
  let resolvedPath_2 = Og(e, resolvedPath);
  if (resolvedPath_2 === Zy) return {
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
    let resolvedPath_3 = bme(e, resolvedPath);
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
function _me(e) {
  let n = T4e();
  if (n === null) return null;
  try {
    let r = c.resolve(n),
      i = c.resolve(e.cwd()),
      o = c.parse(r).root;
    if (o !== c.parse(i).root) return null;
    let s = r.slice(o.length).split(G).filter(Boolean),
      a = i.slice(o.length).split(G).filter(Boolean),
      u = 0;
    while (u < s.length && u < a.length && s[u] === a[u]) u++;
    return u > 0 ? c.join(o, ...s.slice(0, u)) : null;
  } catch {
    return null;
  }
}
function bme(e, path_7) {
  try {
    return e.realpathSync(path_7);
  } catch (error) {
    let i = k(error);
    if (i !== "EPERM" && i !== "EACCES") throw error;
    let o,
      launchAncestry = _me(e);
    if (Og(e, path_7, {
      unreadableAncestry: "unverified",
      surfaceNetworkRaw: !0,
      launchAncestry: launchAncestry,
      onOutcome: u => {
        o = u;
      }
    }) !== void 0 || o === void 0) throw error;
    if (o.kind === "absent") throw Object.assign(Error("ENOENT: no such file or directory"), {
      code: "ENOENT",
      syscall: "realpath",
      path: path_7
    });
    return En(o.path);
  }
}
var code = "ERR_SYMLINK_TO_NETWORK_PATH";
function GA(e, n, r) {
  let {
      asWritten: asWritten,
      opts: opts
    } = $e(e, n, r),
    linksResolvedPath,
    absentAt;
  return ze(Og(e, asWritten, {
    ...opts,
    onOutcome: u => {
      linksResolvedPath = je(u), absentAt = Ve(u);
    }
  }), n, asWritten), {
    ...Ge(asWritten),
    linksResolvedPath: linksResolvedPath,
    absentAt: absentAt
  };
}
async function m0(e, n, r) {
  let {
      asWritten: asWritten_2,
      opts: opts_2,
      ownHost: ownHost
    } = $e(e, n, r),
    linksResolvedPath_2,
    absentAt_2,
    identity,
    endStats,
    g = !ownHost,
    p = !1,
    y,
    linksFollowed = [],
    E = {
      ...opts_2,
      onOutcome: f => {
        p = !0, linksResolvedPath_2 = je(f), absentAt_2 = Ve(f);
        let h = y,
          b = f.kind === "resolved" && h?.path === f.path;
        g = !b, endStats = b ? h.stats : void 0, identity = b && !sa(h.stats.ino) ? {
          dev: h.stats.dev,
          ino: h.stats.ino,
          ctimeNs: h.stats.ctimeNs
        } : void 0;
      }
    };
  if (ze(await MH(e, asWritten_2, E, void 0, r?.fileIdentity === !0 ? (path_8, stats) => {
    if (y = stats === void 0 ? void 0 : {
      path: path_8,
      stats: stats
    }, stats?.isSymbolicLink() === !0) linksFollowed.push(stats);
  } : void 0), n, asWritten_2), !p && y?.stats.isSymbolicLink() === !0) g = !0;
  return {
    ...Ge(asWritten_2),
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
    ...(r?.fileIdentity === !0 && g && {
      noFileSeen: !0
    })
  };
}
function je(e) {
  return e.kind === "resolved" ? En(e.path) : void 0;
}
function Ve(e) {
  return e.kind === "absent" ? {
    at: e.at,
    remaining: e.remaining,
    fromLinkTarget: e.fromLinkTarget,
    ...(e.notAFolder && {
      notAFolder: !0
    })
  } : void 0;
}
function $e(e, path_9, r) {
  let i = Jv(path_9);
  if (NC(i) || yS(i)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
    code: code,
    path: path_9,
    reason: "unexamined"
  });
  let o = c.isAbsolute(i) ? c.resolve(i) : c.resolve(process.cwd(), i),
    asWritten_3 = Jv(o);
  if (NC(asWritten_3) || yS(asWritten_3)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), {
    code: code,
    path: path_9,
    reason: "unexamined"
  });
  let ownHost_2 = V(asWritten_3) || Ba(asWritten_3) || or(asWritten_3) && !ad(asWritten_3);
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
        launchAncestry: _me(e)
      })
    }
  };
}
function Ge(resolvedPath_4) {
  return {
    resolvedPath: resolvedPath_4,
    isSymlink: !1,
    isCanonical: !1
  };
}
function ze(e, path_10, r) {
  if (e === void 0) return;
  let i = reason => Object.assign(Error("Refusing to read a file whose path could not be vetted (a component that could not be examined, or a symbolic link chain too long to follow)"), {
    code: code,
    path: path_10,
    reason: reason
  });
  if (e === Zy) throw i("unexamined");
  if (V(r) && e === r) return;
  if (!(or(e) || Cl(e) || V(e) || Xv(e))) throw i("unexamined");
  throw Object.assign(Error("Refusing to read a file through a symbolic link that leads onto a network share or automount path; replace the link with a regular file to use it"), {
    code: code,
    path: path_10,
    reason: "network"
  });
}
function QPo(e) {
  return k(e) === code;
}
function aWs(e) {
  if (!QPo(e)) return;
  let reason_2 = e.reason;
  return reason_2 === "network" || reason_2 === "unexamined" ? reason_2 : void 0;
}
function Owe(e, n, r) {
  let {
    resolvedPath: resolvedPath_5
  } = io(e, n);
  if (r.has(resolvedPath_5)) return !0;
  return r.add(resolvedPath_5), !1;
}
var pe = /(^|[\\/])\.\.([\\/]|$)/;
function Vt(e, n = "win32") {
  let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
  if (r === "") return e[0];
  if (n === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r;
}
function Tj(e, n, r) {
  let anchors = We(r);
  if (or(n) && !ad(n) || Ba(n) || HE(n)) {
    if (anchors !== void 0 && (Ba(n) && !J(n, anchors) || or(n) && !ad(n) && !ue(n, anchors))) {
      let l = Og(e, n, {
        anchors: anchors,
        surfaceNetworkRaw: r?.surfaceNetworkRaw
      });
      if (l === Zy && r?.surfaceNetworkRaw !== !0) {
        if (r?.surfaceDotDotTargets === !0) throw LHr(n);
        return n;
      }
      return l;
    }
    return n;
  }
  let o = Og(e, n, r?.surfaceNetworkRaw === !0 ? {
    surfaceNetworkRaw: !0,
    anchors: anchors
  } : void 0);
  if (o === Zy && r?.surfaceNetworkRaw !== !0) {
    if (r?.surfaceDotDotTargets === !0) throw LHr(n);
    return;
  }
  if (o !== void 0) return r?.liveRoutesOnly === !0 ? void 0 : o;
  let s = n,
    a = [],
    u = r?.surfaceDotDotTargets === !0,
    d = l => a.length === 0 ? l : u && pe.test(l) ? [l, ...a].join(c.sep) : c.join(l, ...a);
  while (s !== c.dirname(s)) {
    let l, g;
    try {
      l = e.readlinkSync(s);
    } catch (error) {
      g = k(error);
    }
    if (l !== void 0) {
      if (u && pe.test(l)) return d(c.isAbsolute(l) ? l : c.dirname(s) + c.sep + l);
      let p = c.isAbsolute(l) ? l : c.resolve(c.dirname(s), l);
      if (or(p) && !ad(p) || Ba(p) || HE(p) || Bb(p) || r?.surfaceNetworkRaw === !0 && bl(p)) {
        if (r?.liveRoutesOnly === !0) return;
        return r?.surfaceNetworkRaw === !0 && a.length > 0 ? p + c.sep + a.join(c.sep) : d(p);
      }
      try {
        let y = bme(e, s);
        return d(y);
      } catch {
        if (r?.liveRoutesOnly === !0) return;
        let y = s,
          x = 0,
          E = 64;
        while (x < E) {
          let f;
          try {
            f = e.readlinkSync(y);
          } catch {
            break;
          }
          if (u && pe.test(f)) {
            y = c.isAbsolute(f) ? f : c.dirname(y) + c.sep + f;
            break;
          }
          let h = c.isAbsolute(f) ? u ? Vt(f) : f : c.resolve(c.dirname(y), f);
          if (or(h) && !ad(h) && ue(h, anchors) || Ba(h) && J(h, anchors) || HE(h) || Bb(h) || r?.surfaceNetworkRaw === !0 && bl(h)) {
            y = h;
            break;
          }
          let b;
          try {
            b = e.lstatSync(h);
          } catch {
            y = h;
            break;
          }
          if (!b.isSymbolicLink()) {
            y = h;
            break;
          }
          y = h, x++;
        }
        if (x >= E && r?.surfaceNetworkRaw === !0) return Zy;
        return r?.surfaceNetworkRaw === !0 && a.length > 0 && (or(y) && !ad(y) || Ba(y) || HE(y) || Bb(y) || bl(y)) ? y + c.sep + a.join(c.sep) : d(y);
      }
    }
    if (g === "ENOENT") {
      a.unshift(c.basename(s)), s = c.dirname(s);
      continue;
    }
    try {
      let p = bme(e, s);
      if (p !== s) return d(p);
    } catch (error) {
      if (u) throw error;
    }
    return;
  }
  return;
}
function He(e) {
  return or(e) && !ad(e) || Cl(e) || NC(e);
}
function ZPo(e) {
  return Je(e, !1) ?? e;
}
function lWs(e) {
  return Je(e, !0);
}
function Je(e, n) {
  if (He(e)) return e;
  let r = e,
    i = "";
  for (;;) {
    if (!bl(r)) {
      let s = pB(r);
      if (s !== null) {
        let a = i === "" ? s : s.endsWith(c.sep) ? s + i : s + c.sep + i;
        if (He(a)) return n ? a : e;
        return a;
      }
      if (n) try {
        return m.lstatSync(r), null;
      } catch (error) {
        if (!K(error)) return null;
      }
    }
    let o = c.dirname(r);
    if (o === r) return e;
    i = i === "" ? c.basename(r) : c.basename(r) + c.sep + i, r = o;
  }
}
function Ha(e) {
  return qe(e, "permission");
}
function ane(e, n, r) {
  return Ke(e, "permission", n, r);
}
function Ke(e, n, r, i) {
  let o = ie();
  return Ut(Qe(e, n), r, i === void 0 ? void 0 : s => i(s.path), async s => {
    switch (s.kind) {
      case "lstat":
        return o.lstat(s.path);
      case "opendirNofollow":
        return await o.openDirNoFollow(s.path), "ok";
      case "readlink":
        return o.readlink(s.path);
      case "realpath":
        return o === ZS ? En(await mt(s.path)) : o.realpath(s.path);
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
function m7(e) {
  return Ye(qe(e, "screen"));
}
function Ye(e) {
  return {
    paths: e.spellings,
    vetted: !e.unresolved,
    ...(!e.unresolved && e.linkTextClimbs && {
      linkTextClimbs: e.linkTextClimbs
    })
  };
}
async function dWs(e) {
  return Ye(await Ke(e, "screen", void 0));
}
function qe(e, n) {
  let r = ie();
  return Me(Qe(e, n), i => {
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
function* Qe(e, n) {
  let requested = e;
  if (requested === "~") requested = Ne().normalize("NFC");else if (requested.startsWith("~/")) requested = c.join(Ne().normalize("NFC"), requested.slice(2));
  let i = new Set([requested]),
    linkTextClimbs = !1,
    s = (landing, leafIsSymlink = !1) => ({
      unresolved: !1,
      requested: requested,
      spellings: Array.from(i),
      landing: landing,
      leafIsSymlink: leafIsSymlink,
      ...(linkTextClimbs && {
        linkTextClimbs: linkTextClimbs
      })
    });
  if (or(requested) && !ad(requested) || Ba(requested) || HE(requested)) return s(requested);
  let a = ie(),
    launchAncestry_2 = _me(a),
    d,
    l,
    leafIsSymlink_2 = !1,
    p = !1,
    y = !1,
    x = !1,
    E = [],
    f = new Set(),
    h = S => {
      let v = c.resolve(S);
      if (!f.has(v)) f.add(v), E.push(S);
    },
    stoppedAt = requested,
    F,
    I = function* (S) {
      let v;
      for (;;) {
        let N = S.next(v);
        if (N.done) return N.value;
        let j = N.value;
        if (stoppedAt = j.path, j.kind === "readlink") p = !0;else F = void 0;
        if (v = yield j, typeof v === "object" && "errno" in v) if (j.kind === "readlink") y = !0;else F = v.errno, x ||= j.kind === "opendirNofollow" && v.errno === "ELOOP";
      }
    },
    P = yield* I(le(requested, {
      unreadableAncestry: "unverified",
      launchAncestry: launchAncestry_2,
      ...{
        literalLinkText: "opaque"
      },
      onCollapsedLanding: S => {
        d = S;
      },
      onOutcome: S => {
        l = S;
      },
      onHop: ({
        composed: composed,
        leaf: leaf,
        text: text_2
      }) => {
        if (leaf) i.add(composed), leafIsSymlink_2 = !0;
        if (n === "screen" && he(text_2)) linkTextClimbs = !0, h(composed);
      }
    })),
    D = n === "permission" && !p && (F === "ENAMETOOLONG" || !1),
    w = () => {
      let S = En(requested);
      return i.add(S), s(S);
    },
    B = () => D ? w() : {
      unresolved: !0,
      requested: requested,
      spellings: Array.from(i),
      stoppedAt: stoppedAt,
      leafIsSymlink: leafIsSymlink_2,
      reason: p || x ? "past-a-link" : "unexamined"
    },
    Q = 8,
    M = function* () {
      for (let S = 0; S < E.length; S++) {
        if (S >= Q) return !1;
        let v = E[S];
        if (or(v) && !ad(v) || Ba(v) || HE(v)) {
          i.add(v);
          continue;
        }
        let N = yield* I(le(v, {
          unreadableAncestry: "unverified",
          launchAncestry: launchAncestry_2,
          onHop: ({
            composed: composed_2,
            text: text_3
          }) => {
            if (he(text_3)) h(composed_2);
          }
        }));
        if (N === Zy || y) return !1;
        if (N !== void 0) i.add(N);
      }
      return !0;
    };
  if (P === Zy || P === _wt) return B();
  if (P !== void 0) {
    if (n === "screen" && !(yield* M())) return B();
    if (d !== void 0) i.add(d);
    return i.delete(P), i.add(P), s(P, leafIsSymlink_2);
  }
  if (l === void 0) {
    if (n === "screen" && !y) return (yield* M()) ? w() : B();
    return B();
  }
  if (l.kind === "absent" && (n === "screen" ? l.remaining.some(item => bl(item)) : p && l.remaining.some(item => CG(item)))) return B();
  let path_11 = l.kind === "absent" ? l.at : l.path,
    ne = l.kind === "absent" ? l.remaining.join(c.sep) : "",
    L = En(ne === "" ? path_11 : c.join(path_11, ne));
  if (p || path_11 !== c.parse(path_11).root) i.add(L);
  let T = $t(yield {
    kind: "realpath",
    path: path_11
  }, path_11, ne);
  if (T !== void 0 && T !== L) i.delete(T), i.add(T);
  if (n === "screen" && !(yield* M())) return B();
  return s(L, leafIsSymlink_2);
}
function $t(e, n, r) {
  if (typeof e !== "string" || e === n) return;
  return r === "" ? e : c.join(e, r);
}
function Zqe(e) {
  return {
    unresolved: !1,
    requested: e,
    spellings: [e],
    landing: e,
    leafIsSymlink: !1
  };
}
function ps(e) {
  return Int(Ha(e));
}
function Int(e) {
  if (!e.unresolved) return e.spellings;
  let {
    resolvedPath: resolvedPath_6,
    isCanonical: isCanonical,
    isSymlink: isSymlink
  } = io(ie(), e.requested);
  return (isCanonical || isSymlink) && !e.spellings.includes(resolvedPath_6) ? [...e.spellings, resolvedPath_6] : e.spellings;
}
var ZS = {
  cwd() {
    return process.cwd();
  },
  existsSync(e) {
    using n = Hb`fs.existsSync(${e})`;
    return m.existsSync(e);
  },
  async stat(e) {
    return Te(e);
  },
  async lstat(e) {
    return ge(e);
  },
  async openDirNoFollow(e) {
    throw Error("openDirNoFollow is a POSIX-only examination probe");
  },
  openDirNoFollowSync(e) {
    throw Error("openDirNoFollowSync is a POSIX-only examination probe");
  },
  async lstatBigint(e) {
    return ge(e, {
      bigint: !0
    });
  },
  async statBigint(e) {
    return Te(e, {
      bigint: !0
    });
  },
  async readdir(e) {
    return Ot(e, {
      withFileTypes: !0
    });
  },
  async unlink(e) {
    return It(e);
  },
  async rmdir(e) {
    return At(e);
  },
  async rm(e, n) {
    return Tt(e, n);
  },
  async mkdir(e, n) {
    try {
      await Lt(e, {
        recursive: !0,
        ...n
      });
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  },
  async readFile(e, n) {
    return Ae(e, {
      encoding: n.encoding
    });
  },
  async rename(e, n) {
    return Dt(e, n);
  },
  async realpath(e) {
    return En(await Ft(e));
  },
  async readlink(e) {
    return Rt(e);
  },
  async copyFile(e, n) {
    return Et(e, n);
  },
  async appendFile(e, n, r) {
    if (r?.mode !== void 0) try {
      let i = await C(e, "ax", r.mode);
      try {
        await i.appendFile(n);
      } finally {
        await i.close();
      }
      return;
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    return St(e, n);
  },
  async symlink(e, n, r) {
    return Nt(e, n, r);
  },
  async link(e, n) {
    return Pt(e, n);
  },
  async chmod(e, n) {
    return xt(e, n);
  },
  statSync(e) {
    using n = Hb`fs.statSync(${e})`;
    return m.statSync(e);
  },
  lstatSync(e) {
    using n = Hb`fs.lstatSync(${e})`;
    return m.lstatSync(e);
  },
  readFileSync(e, n) {
    using r = Hb`fs.readFileSync(${e})`;
    return m.readFileSync(e, {
      encoding: n.encoding
    });
  },
  readSync(e, n) {
    using r = Hb`fs.readSync(${e}, ${n.length} bytes)`;
    let i = void 0;
    try {
      i = m.openSync(e, "r");
      let o = [],
        bytesRead = 0;
      while (bytesRead < n.length) {
        let u = Buffer.allocUnsafe(Math.min(65536, n.length - bytesRead)),
          d = m.readSync(i, u, 0, u.length, bytesRead);
        if (d === 0) break;
        o.push(u.subarray(0, d)), bytesRead += d;
      }
      return {
        buffer: Buffer.concat(o, bytesRead),
        bytesRead: bytesRead
      };
    } finally {
      if (i !== void 0) m.closeSync(i);
    }
  },
  appendFileSync(e, n, r) {
    using i = Hb`fs.appendFileSync(${e}, ${n.length} chars)`;
    if (r?.mode !== void 0) try {
      let o = m.openSync(e, "ax", r.mode);
      try {
        m.appendFileSync(o, n);
      } finally {
        m.closeSync(o);
      }
      return;
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
    m.appendFileSync(e, n);
  },
  unlinkSync(e) {
    using n = Hb`fs.unlinkSync(${e})`;
    m.unlinkSync(e);
  },
  renameSync(e, n) {
    using r = Hb`fs.renameSync(${e} ${_t} ${n})`;
    m.renameSync(e, n);
  },
  readlinkSync(e) {
    using n = Hb`fs.readlinkSync(${e})`;
    return m.readlinkSync(e);
  },
  realpathSync(e) {
    using n = Hb`fs.realpathSync(${e})`;
    return En(m.realpathSync(e));
  },
  mkdirSync(e, n) {
    using r = Hb`fs.mkdirSync(${e})`;
    let i = {
      recursive: !0
    };
    if (n?.mode !== void 0) i.mode = n.mode;
    try {
      m.mkdirSync(e, i);
    } catch (error) {
      if (k(error) !== "EEXIST") throw error;
    }
  },
  readdirSync(e) {
    using n = Hb`fs.readdirSync(${e})`;
    return m.readdirSync(e, {
      withFileTypes: !0
    });
  },
  rmSync(e, n) {
    using r = Hb`fs.rmSync(${e})`;
    m.rmSync(e, n);
  },
  createWriteStream(e) {
    return m.createWriteStream(e);
  },
  async readFileBytes(e, n) {
    if (n === void 0) return Ae(e);
    let r = await C(e, xae());
    try {
      if (!(await r.stat()).isFile()) return Buffer.alloc(0);
      return await h0(r, n, "file");
    } finally {
      await r.close();
    }
  },
  async readFileFdGated(e, n) {
    try {
      let r = Ct();
      if (r === 0) {
        if (!(await ge(e)).isFile()) return null;
      }
      let i = await C(e, m.constants.O_RDONLY | r);
      try {
        let stats_2 = await i.stat();
        if (!stats_2.isFile() || stats_2.size > n) return null;
        let s = Number(stats_2.size),
          a = Buffer.allocUnsafe(s),
          u = 0;
        while (u < s) {
          let {
            bytesRead: bytesRead_2
          } = await i.read(a, u, s - u, u);
          if (bytesRead_2 === 0) break;
          u += bytesRead_2;
        }
        return {
          content: (u < s ? a.subarray(0, u) : a).toString("utf8"),
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
function ie() {
  return ZS;
}
function Mh(path_12) {
  let n;
  try {
    n = process.cwd();
  } catch {}
  process.chdir(path_12);
  let r;
  try {
    r = process.cwd();
  } catch {
    r = path_12;
  }
  if (!vWs(r)) return n;
  if (n !== void 0) try {
    process.chdir(n), process.cwd();
  } catch {}
  throw Object.assign(new R(`ENOENT: no such file or directory, chdir '${path_12}'`, "ENOENT: no such file or directory"), {
    code: "ENOENT",
    syscall: "chdir",
    path: path_12
  });
}
async function Mnt(e, n, r) {
  await using i = typeof e === "string" ? await C(e, "r") : null;
  let o = typeof e === "string" ? i : e,
    bytesTotal = (await o.stat()).size;
  if (bytesTotal <= n) return null;
  let a = Math.min(bytesTotal - n, r),
    u = Buffer.allocUnsafe(a),
    bytesRead_4 = 0;
  while (bytesRead_4 < a) {
    let {
      bytesRead: bytesRead_3
    } = await o.read(u, bytesRead_4, a - bytesRead_4, n + bytesRead_4);
    if (bytesRead_3 === 0) break;
    bytesRead_4 += bytesRead_3;
  }
  return {
    content: u.toString("utf8", 0, bytesRead_4),
    bytesRead: bytesRead_4,
    bytesTotal: bytesTotal
  };
}
async function h0(e, n, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(),
    o = [],
    s = 0;
  while (s < n) {
    let a = Buffer.allocUnsafe(Math.min(65536, n - s)),
      {
        bytesRead: bytesRead_5
      } = await e.read(a, 0, a.length, i ? s : null);
    if (bytesRead_5 === 0) break;
    o.push(a.subarray(0, bytesRead_5)), s += bytesRead_5;
  }
  return Buffer.concat(o, s);
}
async function gP(e, n) {
  await using r = typeof e === "string" ? await C(e, "r") : null;
  let i = typeof e === "string" ? r : e,
    bytesTotal_2 = (await i.stat()).size;
  if (bytesTotal_2 === 0) return {
    content: "",
    bytesRead: 0,
    bytesTotal: 0
  };
  let s = Math.max(0, bytesTotal_2 - n),
    a = bytesTotal_2 - s,
    u = Buffer.allocUnsafe(a),
    bytesRead_7 = 0;
  while (bytesRead_7 < a) {
    let {
      bytesRead: bytesRead_6
    } = await i.read(u, bytesRead_7, a - bytesRead_7, s + bytesRead_7);
    if (bytesRead_6 === 0) break;
    bytesRead_7 += bytesRead_6;
  }
  return {
    content: u.toString("utf8", 0, bytesRead_7),
    bytesRead: bytesRead_7,
    bytesTotal: bytesTotal_2
  };
}
async function* AVn(e, n = 65536) {
  let r = await C(e, "r"),
    i = Buffer.alloc(n),
    o = 0,
    s = [],
    a = 0;
  try {
    while (!0) {
      let {
        bytesRead: bytesRead_8
      } = await r.read(i, 0, n, o);
      if (bytesRead_8 === 0) break;
      o += bytesRead_8;
      let d = i.subarray(0, bytesRead_8),
        l = 0;
      while (l < bytesRead_8) {
        let g = d.indexOf(10, l);
        if (g === -1) {
          s.push(Buffer.from(d.subarray(l))), a += bytesRead_8 - l;
          break;
        }
        if (a === 0) yield d.subarray(l, g);else yield Buffer.concat([...s, d.subarray(l, g)], a + (g - l)), s = [], a = 0;
        l = g + 1;
      }
    }
  } finally {
    await r.close();
  }
  if (a > 0) yield s.length === 1 ? s[0] : Buffer.concat(s, a);
}
var Z = 256;
class FileChangedDuringReadError extends Error {
  partialRead;
  constructor(e = !1) {
    super("A file changed while it was being read, so the lines read from it may not be its current lines");
    this.partialRead = e;
    this.name = "FileChangedDuringReadError";
  }
}
async function* Iwe(e, n = 65536, {
  onOpen: onOpen,
  strict = !0
} = {}) {
  let o = await C(e, "r");
  try {
    let {
      size: size
    } = await o.stat();
    onOpen?.(size);
    let a = Buffer.allocUnsafe(Math.min(n + Z, size)),
      u = Buffer.allocUnsafe(Math.min(Z, size)),
      d = 0,
      l = size,
      g = 0,
      p = size,
      y,
      x = async (f, h, b) => {
        let F = 0;
        while (F < h) {
          let P = await o.read(f, F, h - F, b + F);
          if (P.bytesRead === 0 || strict && P.bytesRead < h - F) throw new FileChangedDuringReadError(P.bytesRead > 0);
          F += P.bytesRead;
        }
        let I = l + g - b;
        if (!f.subarray(I, I + d).equals(u.subarray(0, d))) throw new FileChangedDuringReadError();
      },
      E = async f => {
        let h = Math.max(p, l + g + d) - f,
          b = Buffer.allocUnsafe(h);
        return await x(b, h, f), b.toString("utf8", 0, p - f);
      };
    while (l > 0) {
      if (d = Math.min(Z, g), a.copy(u, 0, 0, d), g = Math.min(n, l, strict && l === size ? Z : 1 / 0), l -= g, await x(a, g + d, l), strict) y ??= Buffer.from(a.subarray(Math.max(0, g - Z), g));
      let f = a.lastIndexOf(10, g - 1);
      while (f !== -1) {
        let h = l + f + 1;
        if (h < p) yield p <= l + g ? a.toString("utf8", f + 1, p - l) : await E(h);
        p = l + f, f = f === 0 ? -1 : a.lastIndexOf(10, f - 1);
      }
    }
    if (p > 0) yield p <= g ? a.toString("utf8", 0, p) : await E(0);
    if (y !== void 0) l = size - y.length, g = 0, d = y.copy(u), await x(a, d, l);
  } finally {
    await o.close();
  }
}
var ke = {
    verbose: 0,
    debug: 1,
    info: 2,
    warn: 3,
    error: 4
  },
  regExp = new RegExp(`(?!\\t)[${ib}]`, "gu"),
  Yt = 10485760,
  et = 1048576,
  qt = 1e4,
  Qt = 262144,
  Xt = 5000,
  tt = 100,
  Zt = Mme(e => e());
function en(e) {
  return Object.hasOwn(ke, e);
}
function nt(e) {
  return jH(e) ? null : ot(e);
}
function rt() {}
var tn = {
  arm: "v5",
  target: null
};
function nn(e, n) {
  e.stuck = e.appendSince === n ? "yes" : "no";
}
var rn = {
  sessionId: "",
  fromBackend: !1
};
function it(e, configHome, r, i) {
  let o = H(configHome, "debug"),
    s = H(o, `${e.sessionId}.txt`),
    target;
  if (r === null) target = s;else if (i !== null && r === i) target = H(i, `${e.sessionId}.txt`);else target = r;
  let arm = !e.fromBackend && target === s ? "v5" : "raw";
  return {
    target: target,
    arm: arm,
    configHome: configHome,
    rotate: arm === "raw" && !(Y(target) === o && target.endsWith(".txt")),
    pointLatest: arm === "raw" && target !== s
  };
}
function be(e) {
  return og.userNamed(Jt(e) ? e : ot(e));
}
function sn(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT";
}
function on(e, n = xe) {
  return n ? e : void 0;
}
async function st(e, sessionId, data, i) {
  let o = {
      namespace: "log",
      sessionId: sessionId,
      channel: "debug"
    },
    s = await ce.run(!0, () => e.append(o, [{
      data: data
    }], i ? {
      markLatest: !0
    } : void 0));
  if (s.ok) return "landed";
  return i && s.error.code === "InvalidArgument" && s.error.argument === "opts.markLatest" ? "refused" : "dropped";
}
class at {
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
    if (this.storageV5 = on(e.storageV5), e.launchIdentity !== void 0) {
      this.minLevel = e.launchIdentity.minLevel, this.filter = e.launchIdentity.filter, this.toStderr = e.launchIdentity.toStderr, this.filePath = e.launchIdentity.filePath, this.debugFromLaunch = e.launchIdentity.debugFromLaunch;
      return;
    }
    let n = Array.isArray(e.argv) ? e.argv : [],
      r = xWs(),
      i;
    if (r !== void 0) i = r(n);else {
      let u = n.indexOf("--");
      i = u === -1 ? n : n.slice(0, u);
    }
    let o = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = o && en(o) ? o : "debug";
    let s = i.find(item => item.startsWith("--debug="));
    this.filter = s ? Re(s.substring(8)) : null, this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e");
    let a = null;
    for (let u = 0; u < i.length; u++) {
      let d = i[u];
      if (d.startsWith("--debug-file=")) {
        a = nt(d.substring(13));
        break;
      }
      if (d === "--debug-file" && u + 1 < i.length) {
        a = nt(i[u + 1]);
        break;
      }
    }
    this.filePath = a, this.debugFromLaunch = Pe(e.env.DEBUG) || Pe(e.env.DEBUG_SDK) || i.includes("--debug") || i.includes("-d") || this.toStderr || s !== void 0 || this.filePath !== null;
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch;
  }
  mayWrite(e) {
    return this.takesLevel(e) && (this.deps.isAnt || this.isDebugMode());
  }
  drainsSyncAtExit() {
    return !(X() && this.storageV5 !== void 0 && this.deps.syncExitDrain === !1);
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
    return this.filePath ?? (this.overrideDirectory !== null && this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ? H(this.overrideDirectory, `${this.deps.sessionId()}.txt`) : null) ?? this.resolvedLogPath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? this.defaultLogPath();
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return H(this.deps.configHomeDir(), "debug", `${e}.txt`);
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory;
  }
  isArmed() {
    return this.storageV5 !== void 0;
  }
  takesLevel(e) {
    return ke[e] >= ke[this.minLevel];
  }
  log(e, {
    level: level
  } = {
    level: "debug"
  }) {
    if (!this.takesLevel(level)) return;
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
    let r = _s(e.trim());
    r = r.includes(`
`) ? LH(_(r)) : r.replace(regExp, bG);
    let o = `${new Date().toISOString()} [${n.toUpperCase()}] ${r}
`;
    if (this.toStderr) {
      this.deps.writeToStderr(o);
      return;
    }
    this.write(o);
  }
  write(content) {
    let n = this.getWriter(),
      origin = rn;
    if (this.storageV5 !== void 0) {
      if (origin = {
        sessionId: this.deps.sessionId(),
        fromBackend: ce.getStore() === !0
      }, origin.fromBackend) this.backendLinesLogged++;
    }
    if (n.write({
      origin: origin,
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
    do if (await we(e, tt)) return; while (!this.isAppendStuck());
  }
  isAppendStuck() {
    let backlog = this.backlog,
      {
        appendSince: appendSince
      } = backlog;
    if (backlog.stuck === "no" && appendSince !== 0 && Date.now() - appendSince >= Xt) backlog.stuck = "suspected", setTimeout(nn, tt, backlog, appendSince).unref();
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
  async maybeRotate(e, n, r = Yt) {
    let i = X() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0) {
      if (i) {
        let o = await i.stat(be(e));
        this.writtenBytes = o.ok && o.value.kind !== "absent" ? o.value.size : 0;
      } else this.writtenBytes = await Gt(e).then(o => o.size).catch(() => 0);
    } else this.writtenBytes += n;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = !0;
    try {
      let o = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
      if (i) {
        let s = be(e),
          a = be(o),
          u = await i.rename(s, a);
        if (!u.ok && !sn(u.error)) {
          if (await i.delete(a, {
            missingOk: !0
          }), !(await i.rename(s, a)).ok) await i.delete(s, {
            missingOk: !0
          });
        }
      } else try {
        await Ze(e, o);
      } catch (error) {
        if (!K(error)) await ye(o).catch(() => {}), await Ze(e, o).catch(() => ye(e).catch(() => {}));
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
    return Fe(e, this.filter);
  }
  resolveDirToFile(e) {
    return this.resolvedLogPath = H(e, `${this.deps.sessionId()}.txt`), this.resolvedLogPath;
  }
  async appendGroup(e, n, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, n, r);
      return;
    }
    if (e.target === null || !this.writesFiles()) return;
    if (i) await Xe(Y(e.target), {
      recursive: !0
    }).catch(() => {});
    let o = e;
    try {
      await me(e.target, r);
    } catch (error) {
      if (!WH(error)) throw error;
      if (this.storageV5 === void 0) o = {
        ...e,
        target: this.resolveDirToFile(e.target)
      }, await me(o.target, r);else {
        if (this.overrideDirectory = e.target, o = it(n, e.configHome, e.target, e.target), o.arm === "v5") {
          await this.appendV5AndMark(this.storageV5, n, r);
          return;
        }
        await Xe(Y(o.target), {
          recursive: !0
        }).catch(() => {});
        try {
          await me(o.target, r);
        } catch {
          return;
        }
      }
    }
    if (o.rotate) {
      if (this.storageV5 !== void 0 && o.target !== this.rotationTarget) this.rotationTarget = o.target, this.writtenBytes = -1;
      await this.maybeRotate(o.target, Buffer.byteLength(r)).catch(rt);
    }
    if (o.pointLatest) this.markLatestSymlink();
  }
  async appendV5AndMark(e, n, r) {
    let i = X(),
      o = i && !this.latestMarked && !this.latestRefused,
      s = await st(e, n.sessionId, r, o);
    if (s === "refused") this.latestRefused = !0, s = await st(e, n.sessionId, r, !1), this.log("debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process", {
      level: "warn"
    });
    if (s !== "landed") return;
    if (o && !this.latestRefused) this.latestMarked = !0;else if (!i) this.markLatestSymlink();
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
      o = 0,
      s = !1;
    for (let {
      content: content_2,
      queued: queued
    } of this.unflushedChunks) {
      if (queued === void 0 || queued.owner !== r.owner || queued.decision.arm !== r.decision.arm || queued.decision.target !== r.decision.target || queued.origin.sessionId !== r.origin.sessionId || queued.origin.fromBackend !== r.origin.fromBackend || i > 0 && o + content_2.length > Qt) break;
      i++, o += content_2.length, s ||= queued.needMkdir;
    }
    if (backlog_2.appendSince = Date.now(), await r.owner.appendGroup(r.decision, r.origin, this.unflushedChunks.slice(0, i).map(item => item.content).join(""), s).catch(rt), backlog_2.appendSince = 0, backlog_2.stuck = "no", this.unflushedChunks[0] === n) this.unflushedChunks.splice(0, i), backlog_2.length -= o;
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
      let o = armed ? target_2 : this.logPath(),
        s = parts.map(item => item.content).join("");
      try {
        ie().mkdirSync(Y(o));
      } catch {}
      try {
        ie().appendFileSync(o, s);
      } catch (error) {
        if (WH(error)) try {
          if (!armed) ie().appendFileSync(this.resolveDirToFile(o), s);else {
            let u = (g, p) => {
                try {
                  ie().appendFileSync(H(o, `${g}.txt`), p);
                } catch {}
              },
              d = parts[0]?.sessionId,
              l = "";
            for (let g of parts) {
              if (g.sessionId !== d) u(d, l), d = g.sessionId, l = "";
              l += g.content;
            }
            u(d, l);
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
    let o = [];
    for (let s of lines) {
      if (i && s.origin.fromBackend) continue;
      let a = o.at(-1);
      if (a !== void 0 && a.origin.sessionId === s.origin.sessionId && a.origin.fromBackend === s.origin.fromBackend) a.lines.push(s);else o.push({
        decision: i ? tn : it(s.origin, this.deps.configHomeDir(), r, this.overrideDirectory),
        origin: s.origin,
        lines: [s]
      });
    }
    return o;
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null,
      armed_2 = this.storageV5 !== void 0;
    if (this.writer = fe({
      writeBatch: r => {
        if (this.redirect) {
          this.redirect(r.map(item => item.content).join(""));
          return;
        }
        if (this.exiting) {
          for (let s of this.groupLines(r)) this.unflushedChunks.push({
            target: s.decision.target,
            sessionId: s.origin.sessionId,
            armed: armed_2,
            content: this.takeDroppedNote() + s.lines.map(item => item.content).join("")
          });
          this.drainSync();
          return;
        }
        let i = this.writesFiles(),
          backlog_3 = this.backlog;
        this.isAppendStuck();
        for (let s of this.groupLines(r)) {
          if (s.decision.arm === "raw" && !i) continue;
          if (backlog_3.droppedCount > 0 ? backlog_3.length >= et / 2 : backlog_3.length >= et && Date.now() - (this.unflushedChunks[0]?.queued?.at ?? 1 / 0) >= qt) {
            backlog_3.droppedCount += s.lines.length, backlog_3.droppedTotal += s.lines.length;
            continue;
          }
          let content_3 = this.takeDroppedNote() + s.lines.map(item => item.content).join("");
          if (content_3 === "") continue;
          let u = s.decision.arm === "raw" ? Y(s.decision.target) : null,
            needMkdir = u !== null && (s.origin.fromBackend || e !== u);
          if (u !== null) e = u;
          this.unflushedChunks.push({
            target: s.decision.target,
            sessionId: s.origin.sessionId,
            armed: armed_2,
            content: content_3,
            queued: {
              at: Date.now(),
              owner: this,
              decision: s.decision,
              origin: s.origin,
              needMkdir: needMkdir
            }
          }), backlog_3.length += content_3.length, backlog_3.chain = Zt(() => backlog_3.chain.then(this.appendOldest));
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
        n = H(Y(e), "latest");
      await ye(n).catch(() => {}), await zt(e, n);
    } catch {}
  }
}
class ut {
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
var an = new W(() => new ut());
function te() {
  return Po(an);
}
function Se(e, launchIdentity) {
  return new at({
    argv: process.argv,
    env: process.env,
    sessionId: () => z(),
    configHomeDir: () => Ue(),
    onExit: r => {
      process.on("exit", r);
    },
    registerCleanup: r => {
      vt(r);
    },
    writeToStderr: r => {
      IN(r, {
        mayDrop: !0
      });
    },
    isAnt: launchIdentity?.isAnt ?? !1,
    isTestEnvironment: launchIdentity?.isTestEnvironment ?? !1,
    launchIdentity: launchIdentity,
    storageV5: e.init.storageV5 !== void 0 && e.init.configHome === af() ? e.init.storageV5 : void 0,
    syncExitDrain: e.init.syncExitDrain,
    diskless: () => q(),
    defaultFile: () => e.defaultFile,
    limits: () => e.limits
  });
}
function f7(e) {
  let n = te();
  n.setInit({
    storageV5: e.storageV5,
    configHome: af(),
    syncExitDrain: e.syncExitDrain
  });
  let instance = n.instance;
  if (instance) {
    let i = Se(n, instance.launchIdentity());
    n.setInstance(i), i.succeed(instance);
  }
  if (e.syncExitDrain === !1 && !O().drainsSyncAtExit()) t("Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short");
}
function O() {
  let e = te(),
    instance_2 = e.instance;
  if (instance_2) return instance_2;
  let r = Se(e);
  return e.setInstance(r), r;
}
function gwt() {
  return O().minLevel;
}
function Qjs(e) {
  return O().takesLevel(e);
}
function pY() {
  return O().isDebugMode();
}
function Zjs() {
  return O().mayWrite("debug");
}
function ine() {
  return O().toStderr;
}
function eWs() {
  return O().filePath;
}
function tWs() {
  return O().enableDebugLogging();
}
function nWs() {
  let e = te(),
    instance_3 = e.instance;
  if (!instance_3) return;
  let r = Se(e);
  e.setInstance(r), r.succeed(instance_3);
}
function Jqe(e) {
  O().hasFormattedOutput = e;
}
function rWs() {
  return O().hasFormattedOutput;
}
async function c$e() {
  await te().instance?.flush();
}
function MHr() {
  return q() ? {} : {
    debug_stderr_dropped_total: AWs(),
    debug_file_dropped_total: te().instance?.droppedLineTotal() ?? 0
  };
}
function t(e, n = {
  level: "debug"
}) {
  O().log(e, n);
}
function p7() {
  return O().logPath();
}
function oWs(e, n) {
  return e === O().defaultLogPath(n);
}
function yme(e, n) {
  return;
}
export { sa, fY, Fb, yh, Fra, og, Xjs, Hra, $ra, x5, vt, Ijt, sg, zA, Jjs, Ura, IHr, f7, gwt, Qjs, pY, Zjs, ine, eWs, tWs, nWs, Jqe, rWs, c$e, MHr, t, p7, oWs, yme, Hb, _, AN, oi, RVn, ee, ds, Ri, ywt, xae, gcn, Zy, _wt, DHr, sWs, LHr, xN, Mjt, iWs, Pwe, u$e, JPo, Og, MH, io, _me, bme, code as Qqe, GA, m0, QPo, aWs, Owe, Tj, ZPo, lWs, Ha, ane, m7, dWs, Zqe, ps, Int, ZS, ie, Mh, Mnt, h0, gP, AVn, FileChangedDuringReadError as e4e, Iwe };