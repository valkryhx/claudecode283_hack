// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  AM,
  FH,
  lv,
  SY
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  d,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  or,
  Oc,
  Bb,
  R7,
  FIo,
  Cl,
  Xv,
  jb,
  crt,
  Ks
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  t,
  Zy,
  _wt,
  DHr,
  Og,
  MH,
  ZS
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  Ds,
  wT,
  XAe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Mu,
  UHe
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  yi,
  Kt
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  un,
  Jg,
  be,
  RKe
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  k3,
  ap,
  v3,
  NX
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  ac,
  XP,
  XQt,
  Ppt,
  DI
} from "B:/~BUN/root/chunk-0zd0vn8w.js";
import {
  Ro
} from "B:/~BUN/root/chunk-143z690c.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
import {
  realpathSync as Mn
} from "fs";
import {
  basename as Cn,
  join as q
} from "path";
var jDt = ["GIT_EXEC_PATH", "DEVELOPER_DIR", "GIT_TEXTDOMAINDIR", "LD_PRELOAD", "LD_LIBRARY_PATH", "LD_AUDIT", "GCONV_PATH", "NLSPATH", "LOCPATH", "PSMODULEPATH", "DYLD_INSERT_LIBRARIES", "DYLD_LIBRARY_PATH", "DYLD_FRAMEWORK_PATH", "DYLD_FALLBACK_LIBRARY_PATH", "DYLD_FALLBACK_FRAMEWORK_PATH", "DYLD_VERSIONED_LIBRARY_PATH", "DYLD_VERSIONED_FRAMEWORK_PATH", "OPENSSL_CONF", "OPENSSL_CONF_INCLUDE", "OPENSSL_MODULES", "OPENSSL_ENGINES"];
import {
  constants as wn
} from "fs";
import {
  access as yn,
  lstat as U,
  open as Bn,
  readlink as tn,
  realpath as C,
  stat as Rn
} from "fs/promises";
import {
  homedir as rn
} from "os";
import {
  basename as _n,
  dirname as I,
  isAbsolute as D,
  join as y,
  parse as Tn,
  posix as F,
  relative as Sn,
  resolve as M,
  sep as p,
  win32 as N
} from "path";

function Nhs(n, e, o, i = process.env) {
  let r = Ds(i, "GIT_CONFIG_GLOBAL"),
    s = Ds(i, "XDG_CONFIG_HOME");
  return [...n.filter((u) => u !== ""), ...on(o, i), ...r ? [r] : [], ...Bco(i).flatMap((u) => [`${s||`${u}${p}.config`}${p}git${p}config`, `${u}${p}.gitconfig`])].map((u) => O0e(e, u))
}

function jLi(n, e, o, i) {
  return [...n.filter((r) => r !== ""), ...on(o, i)].map((r) => O0e(e, r))
}

function on(n, e) {
  if (Fhs(Ds(e, "GIT_CONFIG_NOSYSTEM"))) return [];
  let o = Ds(e, "GIT_CONFIG_SYSTEM"),
    i = Ds(e, "PROGRAMDATA"),
    r = x() === "windows";
  return [...o ? [o] : [], ...r ? [] : ["/etc/gitconfig"], ...n === null ? [] : [`${n}${p}etc${p}gitconfig`], ...r && i ? [`${i}${p}Git${p}config`] : []]
}

function Fhs(n) {
  let e = n?.trim().toLowerCase();
  if (e === void 0 || ["", "false", "no", "off"].includes(e)) return !1;
  if (["true", "yes", "on"].includes(e)) return !0;
  return /^[-+]?\d+$/.test(e) && Number(e) !== 0
}

function sn() {
  return L([Mu(), UHe(), ...DI().map((n) => n === "~" || n.startsWith("~/") ? y(rn(), n.slice(1)) : n)])
}

function an(n, e, o) {
  return o.find((i) => !dn(i) && pQt(i, e).verdict === "foreign" && gy(i, n))
}

function ySr(n, e, o, {
  pattern: i = !1
} = {}) {
  if (n.verdict !== "foreign") return n;
  let r = an(n.spelling, e, o);
  return r === void 0 ? n : W(n.spelling, r, x() === "windows", i)
}
async function Eze(n, e, o) {
  if (n.verdict !== "foreign") return n;
  let i = an(n.spelling, e, o);
  return i === void 0 ? n : cn(n.spelling, i, x() === "windows")
}

function Bco(n = process.env) {
  let e = Ds(n, "HOME"),
    o = Ds(n, "HOMEDRIVE"),
    i = Ds(n, "HOMEPATH");
  return L([e, x() === "windows" && o && i ? `${o}${i}` : void 0, rn()].filter((r) => Boolean(r)))
}
async function WLi(n, e, o, i = [], r = []) {
  let s = e.GIT_DIR ?? y(o, ".git"),
    u = e.GIT_COMMON_DIR ?? s,
    l = async (a) => Oc(a) ? null : C(a).catch((g) => k(g) === "ENOENT" ? a : null), c = await Promise.all([
      [o, M(n)],
      [s],
      [u]
    ].map(async (a) => [...a, ...await Promise.all(a.map(l))]));
  if (c.some((a) => a.includes(null))) return null;
  let [R, w, m] = c.map((a) => L(a.filter((g) => g !== null))), S = async (a) => {
    if (Dn(a)) return {
      derived: [a]
    };
    let g = await Eze(await Tze(a, o), o, r);
    if (g.verdict === "foreign") return {
      unexamined: a,
      detail: "it names another host than this checkout\u2019s or the owner\u2019s home and temp server"
    };
    if (g.verdict !== "local") return {
      unexamined: a,
      detail: `its route cannot be vouched for (${g.verdict})`
    };
    return v(g.spelling)
  }, v = (a) => C(a).then((g) => ({
    resolved: g
  }), async (g) => {
    let T = k(g);
    if (T === "ENOENT" || T === "ENOTDIR") return en(a, o);
    let E = await U(a).catch(() => null);
    if (E === null || E.isDirectory()) return {
      unexamined: a,
      detail: T ?? d(g)
    };
    return E.isSymbolicLink() ? en(a, o) : {
      derived: [a]
    }
  }), O = await Promise.all(i.map(S)), f = O.find((a) => ("unexamined" in a));
  if (f !== void 0) return f;
  let P = O.flatMap((a) => ("resolved" in a) ? [a.resolved] : []).filter((a) => D(a)),
    _ = O.flatMap((a) => ("derived" in a) ? a.derived : []).filter((a) => D(a)),
    b = L([...i, ...P, ..._]),
    A = L([...R, ...w, ...m, ...b]),
    h = x() === "windows" ? [] : await Promise.all(L([...R, ...w, ...m]).map(l));
  if (h.includes(null)) return null;
  let Z = (a, g) => Rn(a, {
      bigint: !0
    }).then((T) => {
      let E = mn(T);
      return E === void 0 ? [] : [
        [E, a]
      ]
    }, async (T) => {
      let E = k(T);
      if (E === "ENOENT" || E === "ENOTDIR" && !g) return [];
      if (g) return null;
      let nn = await U(a).catch(() => null);
      return nn !== null && !nn.isDirectory() ? [] : {
        unexamined: a,
        detail: E ?? d(T)
      }
    }),
    G = await Promise.all([...L(h.filter((a) => a !== null)).map((a) => Z(a, !0)), ...x() === "windows" ? [] : L(P).map((a) => Z(a, !1))]);
  if (G.includes(null)) return null;
  let Q = G.find((a) => a !== null && !Array.isArray(a));
  if (Q !== void 0) return Q;
  return {
    ids: new Map(G.filter((a) => Array.isArray(a)).flat()),
    roots: A,
    trees: R,
    fixed: L([...w.flatMap((a) => [a, y(a, "config"), y(a, "config.worktree"), y(a, "commondir")]), ...m.flatMap((a) => [a, y(a, "config"), y(a, "worktrees")])])
  }
}
async function en(n, e) {
  let o = await V(n, e);
  return o === null ? {
    unexamined: n,
    detail: "it is too deep or too long to resolve"
  } : {
    derived: [n, o]
  }
}
var On = 8;
async function V(n, e, o = On, i = 0) {
  if (dDn(n, i)) return null;
  let r = await C(n).catch(() => null);
  if (r !== null) return r;
  let s = o > 0 ? await tn(n).catch(() => null) : null;
  if (s !== null) {
    let c = await C(I(n)).catch(() => I(n)),
      {
        spelling: R,
        verdict: w
      } = await vn(s, c, e);
    return w === "local" ? V(R, e, o - 1, i) : n
  }
  let u = I(n);
  if (u === n) return n;
  let l = await V(u, e, o, i + 1);
  return l === null ? null : y(l, _n(n))
}
var Hhs = 256;

function dDn(n, e) {
  return e > Hhs || n.length > 32767
}

function Dn(n) {
  return x() === "macos" && gy("/dev/fd", n)
}
async function $hs(n, e) {
  let o = await Promise.all(L(e.filter((r) => r !== null)).map(async (r) => ({
      path: r,
      reachable: await j(r, n)
    }))),
    i = o.find(({
      reachable: r
    }) => r === !0);
  if (i !== void 0) return i.path;
  return o.some(({
    reachable: r
  }) => r === null) ? null : void 0
}

function Nn(n) {
  return /^[A-Za-z]:[\\/][^:]*$/.test(n)
}

function cDn(n) {
  return x() === "windows" && !Nn(n)
}

function pQt(n, e, {
  pattern: o = !1
} = {}) {
  let i = x() === "windows";
  return W(ln(n, i), e, i, o)
}

function ln(n, e) {
  return e ? XQt(K(XP(Ppt(n)))) : XQt(n).replace(/^\/\/+/, "/")
}

function Uhs(n, e, o) {
  let i = x() === "windows";
  if (DHr(n, i)) return {
    spelling: n,
    verdict: "opaque"
  };
  let {
    isAbsolute: r,
    join: s
  } = i ? N : F, u = r(n) ? n : s(e, n);
  return W(i ? K(XP(u)) : u, o, i)
}
async function vn(n, e, o) {
  let i = x() === "windows";
  if (DHr(n, i)) return {
    spelling: n,
    verdict: "opaque"
  };
  let {
    isAbsolute: r,
    join: s
  } = i ? N : F, u = r(n) ? n : s(e, n);
  return cn(i ? K(XP(u)) : u, o, i)
}
async function cn(n, e, o) {
  let i = Y(n, e, o);
  return "verdict" in i ? i : J(i.spelling, await MH(ZS, i.spelling, {
    anchor: e,
    ...B
  }), e)
}

function W(n, e, o, i = !1) {
  let r = Y(n, e, o, i);
  return "verdict" in r ? r : J(r.spelling, Og(ZS, r.spelling, {
    anchor: e,
    ...B
  }), e)
}
async function Tze(n, e) {
  let o = x() === "windows",
    i = Y(ln(n, o), e, o);
  return "verdict" in i ? i : J(i.spelling, await MH(ZS, i.spelling, {
    anchor: e,
    ...B
  }), e)
}
var B = {
  unreadableAncestry: "unverified",
  literalLinkText: "opaque"
};

function Y(n, e, o, i = !1) {
  if (o) {
    let c = N.normalize(n);
    if (/^[\\/]{2}[.?](?:[\\/]|$)/.test(c)) return {
      spelling: c,
      verdict: "opaque"
    };
    if (Ks(c) && R7(c, e)) return {
      spelling: c,
      verdict: "foreign"
    }
  }
  let r = (o ? N : F).resolve(n);
  if (!o && Bb(r)) return {
    spelling: r,
    verdict: "opaque"
  };
  if (WDt(r, e)) return {
    spelling: r,
    verdict: "foreign"
  };
  let s = r.split("/"),
    u = i ? s.findIndex((c) => ac(c)) : -1,
    l = u === -1 ? r : s.slice(0, u).join("/");
  return !o && l.includes("\\") ? {
    spelling: r,
    verdict: "opaque"
  } : {
    spelling: r
  }
}

function WDt(n, e, o = !1) {
  if (x() === "windows") return Ks(n) && R7(n, e);
  let i = n.replace(/^\/{2,}/, "/"),
    r = crt(e);
  return or(i) || crt(i).some((s) => !r.includes(s)) || Pn(i) && (o && dn(i) || !gy(i, e) && !gy(e, i)) || FIo(i, e)
}

function J(n, e, o) {
  if (e === void 0) return {
    spelling: n,
    verdict: "local"
  };
  if (e === n) return WDt(n, o) ? {
    spelling: n,
    verdict: "foreign"
  } : {
    spelling: n,
    verdict: "unreadable"
  };
  if (e === Zy) return {
    spelling: n,
    verdict: "unreadable"
  };
  if (e === _wt) return {
    spelling: n,
    verdict: "opaque"
  };
  return {
    spelling: n,
    verdict: "linked",
    via: e
  }
}

function Cze({
  spelling: n,
  verdict: e,
  via: o
}, i) {
  if (e === "foreign") return [n];
  return x() === "windows" ? L([...bn, ...[n, i, o ?? ""].filter(or).map((r) => N.parse(r).root)]) : ["/"]
}

function dn(n) {
  return Xv(n) || /^\/network(?:\/servers)?$/i.test(F.resolve("/", n))
}

function Pn(n) {
  return jb(n) && !Cl(n)
}
var bn = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ", (n) => `${n}:\\`);

function K(n) {
  let e = /^[\\/]{2}\.(?:[\\/](.*))?$/s.exec(n);
  if (e === null) return n;
  let o = (e[1] ?? "").split(/[\\/]+/).reduce((s, u) => {
      if (u === "..") s.pop();
      else if (u !== "" && u !== ".") s.push(u);
      return s
    }, []),
    [i = "", ...r] = o;
  if (/^[A-Za-z]:$/.test(i)) return `${i}\\${r.join("\\")}`;
  if (i.toUpperCase() === "UNC" && r.length >= 2) return `\\\\${r.join("\\")}`;
  return `\\\\.\\${o.join("\\")}`
}

function fn(n) {
  return process.getuid === void 0 || n === process.getuid()
}
async function gn(n) {
  return yn(n, wn.W_OK).then(() => !0, (e) => !["EACCES", "EROFS", "EPERM"].includes(k(e) ?? ""))
}
async function zLi(n, e) {
  return !e.isDirectory() && e.nlink > 1 && (fn(e.uid) || await gn(n))
}

function mn(n) {
  return n.isDirectory() && n.ino !== 0n ? `${n.dev}:${n.ino}` : void 0
}
var An = 40;
async function j(n, e, o = An, i = {
  secondNames: !0
}) {
  let {
    nestedRoot: r,
    replaceable: s,
    lands: u,
    asksForAnotherHost: l
  } = kn(e);
  if (Ln(n, e)) return !0;
  if (x() === "windows" && n !== M(n)) return j(M(n), e, o, i);
  let {
    root: R
  } = Tn(n), w = xn(n, R), m = R, S = !1;
  for (let [v, O] of w.entries()) {
    if (O === "..") {
      if (S) return !0;
      m = I(m);
      continue
    }
    let f = y(m, O);
    if (s(f) || l(f)) return !0;
    let {
      entry: P,
      alias: _
    } = await hn(f, e, i.secondNames);
    switch (P) {
      case null:
        return null;
      case "device":
        return r(f);
      case "shared":
        return !0;
      case "shared_if_writable":
        if (await gn(f)) return !0;
        S = _ !== void 0 && _ !== f, m = _ ?? f;
        break;
      case "sealed":
        S = !1, m = f;
        break;
      case "absent":
        return u(M(f, ...w.slice(v + 1)));
      case "link": {
        if (r(f)) return !0;
        let b = await tn(f).catch(() => null);
        if (b === null || o === 0) return null;
        let A = In(f, b);
        if (A === null) return !0;
        let h = [O0e(m, A), ...w.slice(v + 1)];
        return j(h.join(p), e, o - 1, i)
      }
      case "entry":
        S = _ !== void 0 && _ !== f, m = _ ?? f
    }
  }
  return u(m)
}

function xn(n, e) {
  return n.slice(e.length).split(p === "/" ? /\/+/ : /[\\/]+/).filter((o) => o !== "" && o !== ".")
}

function kn(n) {
  let e = (r) => n.roots.some((s) => gy(s, r)),
    o = (r) => n.roots.some((s) => gy(s, r) && gy(r, s)),
    i = (r) => n.fixed.includes(r);
  return {
    inside: e,
    kept: i,
    nestedRoot: (r) => o(r) && !i(r) && n.roots.some((s) => gy(s, r) && !gy(r, s)),
    replaceable: (r) => e(r) && !o(r) && !i(r),
    lands: (r) => e(r) && !i(r),
    asksForAnotherHost: (r) => n.roots.every((s) => WDt(r, s))
  }
}

function Ln(n, e) {
  return !D(n) || cDn(n) || e.roots.every((o) => WDt(n, o, !0)) || n.includes("\uFFFD")
}
async function hn(n, e, o) {
  let i;
  return {
    entry: await U(n, {
      bigint: !0
    }).then((s) => {
      let u = mn(s);
      return i = u === void 0 ? void 0 : e.ids.get(u), s.isSymbolicLink() ? "link" : s.isCharacterDevice() ? "device" : o && !s.isDirectory() && s.nlink > 1n ? fn(Number(s.uid)) ? "shared" : "shared_if_writable" : "entry"
    }, (s) => {
      let u = k(s);
      return u === "ENOENT" || u === "ENOTDIR" ? "absent" : ["EACCES", "EPERM"].includes(u ?? "") ? "sealed" : null
    }),
    alias: i
  }
}

function In(n, e) {
  let o = x() === "windows",
    i = o ? /^[A-Za-z]:/.exec(n)?.[0] : void 0;
  if (o && /^[A-Za-z]:(?![\\/])/.test(e)) return null;
  let r = i !== void 0 && /^[\\/](?![\\/])/.test(e) ? `${i}${e}` : e;
  return r.includes("\uFFFD") ? null : r
}

function uDn(n) {
  let e = _Sr(n);
  return e === null ? void 0 : /^gitdir: (.+)$/s.exec(e)?.[1]
}

function _Sr(n) {
  if (n === void 0) return null;
  let e = n.replace(/[\r\n]+$/, "");
  return e === "" || /[\r\n\0\uFFFD]/.test(e) ? null : e
}

function O0e(n, e) {
  return D(e) ? e : `${n}${p}${e}`
}

function gy(n, e) {
  if (!D(e)) return !1;
  let o = x(),
    i = o === "macos" || o === "windows",
    r = (l) => i ? l.normalize("NFC").toLowerCase() : l,
    s = Sn(r(n), r(e)),
    u = s === ".." || s.startsWith(`..${p}`) || s.startsWith("../");
  return s === "" || !u && !D(s)
}
var z = ["projectSettings", "localSettings"],
  Fn = ["CLAUDE_CODE_TMPDIR", "TMPDIR", "TEMP", "TMP"],
  JXe = ["CLAUDE_CONFIG_DIR", "HOME", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "CLAUDE_CODE_USE_COWORK_PLUGINS"],
  Bhs = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"],
  jhs = [...Bhs, ...JXe, ...Fn, "XDG_CONFIG_HOME", "PATH", ...jDt];

function jco() {
  return lv() === void 0 && FH() !== void 0 ? [...z, "flagSettings"] : z
}

function Hn() {
  let n = jco();
  return yi.filter((e) => !n.includes(e) && Kt(e))
}

function GLi(n, e = "unknown") {
  let o = jco().includes("flagSettings") ? FH() : void 0,
    i = o === void 0 ? [] : [X(o, SY())],
    r = [...z.map((l) => ({
      tier: l,
      file: un(l)
    })), {
      tier: "localSettings",
      file: Jg()
    }].flatMap(({
      tier: l,
      file: c
    }) => c === void 0 ? [] : [{
      tier: l,
      file: c,
      names: X(c, void 0, e)
    }]),
    s = [q(n.workTree, ".claude", "settings.json"), q(n.workTree, ".claude", "settings.local.json")].filter((l) => !r.some(({
      file: c
    }) => c === l)).map((l) => X(l, void 0, e)),
    u = r.map(({
      names: l
    }) => l);
  if ([...i, ...u, ...s].includes(null)) return null;
  return [...i, ...r.filter(({
    tier: l
  }) => !AM() && !RKe(l)).map(({
    names: l
  }) => l)].flatMap((l) => l ?? [])
}

function X(n, e, o = "unknown") {
  let {
    settings: i,
    errors: r,
    textRead: s
  } = e === void 0 ? XAe(n, new Map) : {
    ...wT(n, e),
    textRead: void 0
  };
  if (i === null && r.length === 0) return [];
  return i === null || r.some((u) => u.severity !== "warning") ? null : Object.keys(i.env ?? {})
}

function Gn(n) {
  let e = {};
  for (let o of n) try {
    let i = be(o)?.env;
    if (i) {
      let r = Ro(i, (s) => typeof s === "string");
      Object.assign(e, NX(r, o))
    }
  } catch {}
  return e
}

function mQt() {
  let n = ap(),
    e = n === void 0 || JXe.every((o) => Ds(process.env, o) === Ds(n, o));
  return {
    ...v3(),
    ...e ? Gn(Hn()) : {}
  }
}

function bSr(n) {
  let e = ap();
  if (e === void 0) return;
  let o = mQt(),
    i = JXe;
  return n.find((r) => {
    let s = Ds(process.env, r);
    return s !== Ds(e, r) && (i.includes(r) || s !== Ds(o, r))
  })
}

function Rze(n) {
  let e = ap();
  if (e === void 0) return n;
  let o = mQt(),
    i = JXe,
    r = new Set(Object.keys(n).filter((s) => {
      let u = n[s];
      return u !== void 0 && u !== Ds(e, s) && (i.includes(s.toUpperCase()) || u !== Ds(o, s)) && k3(s, u)
    }));
  if (r.size === 0) return n;
  return {
    ...Ro(n, (s, u) => !r.has(u)),
    ...Object.fromEntries([...r].flatMap((s) => {
      let u = Ds(e, s);
      return u === void 0 ? [] : [
        [s, u]
      ]
    }))
  }
}

function Whs() {
  let n = sn(),
    e = ap();
  if (e === void 0) return n;
  let o = pn(e);
  if (o === void 0) return n;
  let i = Cn(Mu()),
    r = q(o, i),
    s = r;
  return L([...n, r, s])
}

function e_e() {
  let n = ap();
  if (n !== void 0 && H.snapshot === n) return H.roots;
  let e = n ?? process.env,
    r = [Ds(e, "HOME") || (x() === "windows" ? Ds(e, "USERPROFILE") || (Ds(e, "HOMEDRIVE") && Ds(e, "HOMEPATH") ? `${Ds(e,"HOMEDRIVE")}${Ds(e,"HOMEPATH")}` : void 0) : void 0), pn(e)].filter((u) => u !== void 0 && u !== "").map((u) => {
      let l = pQt(u, u);
      if (l.verdict !== "local") return t(`[repositorySettings] start root ${u} cannot be vouched for (${l.verdict}): it exempts nothing`, {
        level: "warn"
      }), {
        roots: [],
        transient: l.verdict === "unreadable"
      };
      try {
        let c = Mn(l.spelling);
        return {
          roots: L([u, l.spelling, c]),
          transient: !1
        }
      } catch {
        return {
          roots: [u, l.spelling],
          transient: !1
        }
      }
    }),
    s = L(r.flatMap(({
      roots: u
    }) => u));
  if (n !== void 0 && !r.some(({
      transient: u
    }) => u)) H.snapshot = n, H.roots = s;
  return s
}
var H = he({
  snapshot: void 0,
  roots: []
}, (n) => {
  n.snapshot = void 0, n.roots = []
});

function pn(n) {
  return En(Ds(n, "CLAUDE_CODE_TMPDIR") || void 0) ?? $n(n)
}

function $n(n) {
  let e = (i) => Ds(n, i) || void 0,
    o = "/tmp";
  return En(e("TEMP") ?? e("TMP"))
}

function En(n) {
  return n !== void 0 && n.length > 1 ? n.replace(/[\\/]+$/, "") : n
}
export {
  jDt,
  Nhs,
  jLi,
  Fhs,
  ySr,
  Eze,
  Bco,
  WLi,
  Hhs,
  dDn,
  $hs,
  cDn,
  pQt,
  Uhs,
  Tze,
  WDt,
  Cze,
  zLi,
  uDn,
  _Sr,
  O0e,
  gy,
  JXe,
  Bhs,
  jhs,
  jco,
  GLi,
  mQt,
  bSr,
  Rze,
  Whs,
  e_e
};
