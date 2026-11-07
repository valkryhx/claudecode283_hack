// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { AM, FH, lv, SY } from "B:/~BUN/root/chunk-game8aqv.js";
import { d, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { or, Oc, Bb, R7, FIo, Cl, Xv, jb, crt, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t, Zy, _wt, DHr, Og, MH, ZS } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Ds, wT, XAe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Mu, UHe } from "B:/~BUN/root/chunk-x1xft50h.js";
import { yi, Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { un, Jg, be, RKe } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { k3, ap, v3, NX } from "B:/~BUN/root/chunk-m749kjym.js";
import { ac, XP, XQt, Ppt, DI } from "B:/~BUN/root/chunk-0zd0vn8w.js";
import { Ro } from "B:/~BUN/root/chunk-143z690c.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { realpathSync as Mn } from "fs";
import { basename as Cn, join as q } from "path";
var jDt = ["GIT_EXEC_PATH", "DEVELOPER_DIR", "GIT_TEXTDOMAINDIR", "LD_PRELOAD", "LD_LIBRARY_PATH", "LD_AUDIT", "GCONV_PATH", "NLSPATH", "LOCPATH", "PSMODULEPATH", "DYLD_INSERT_LIBRARIES", "DYLD_LIBRARY_PATH", "DYLD_FRAMEWORK_PATH", "DYLD_FALLBACK_LIBRARY_PATH", "DYLD_FALLBACK_FRAMEWORK_PATH", "DYLD_VERSIONED_LIBRARY_PATH", "DYLD_VERSIONED_FRAMEWORK_PATH", "OPENSSL_CONF", "OPENSSL_CONF_INCLUDE", "OPENSSL_MODULES", "OPENSSL_ENGINES"];
import { constants as wn } from "fs";
import { access as yn, lstat as U, open as Bn, readlink as tn, realpath as C, stat as Rn } from "fs/promises";
import { homedir as rn } from "os";
import { basename as _n, dirname as I, isAbsolute as D, join as y, parse as Tn, posix as F, relative as Sn, resolve as M, sep as p, win32 as N } from "path";
function Nhs(n, e, o, i = process.env) {
  let r = Ds(i, "GIT_CONFIG_GLOBAL"),
    s = Ds(i, "XDG_CONFIG_HOME");
  return [...n.filter(item => item !== ""), ...on(o, i), ...(r ? [r] : []), ...Bco(i).flatMap(item => [`${s || `${item}${p}.config`}${p}git${p}config`, `${item}${p}.gitconfig`])].map(item => O0e(e, item));
}
function jLi(n, e, o, i) {
  return [...n.filter(item => item !== ""), ...on(o, i)].map(item => O0e(e, item));
}
function on(n, e) {
  if (Fhs(Ds(e, "GIT_CONFIG_NOSYSTEM"))) return [];
  let o = Ds(e, "GIT_CONFIG_SYSTEM"),
    i = Ds(e, "PROGRAMDATA"),
    r = x() === "windows";
  return [...(o ? [o] : []), ...(r ? [] : ["/etc/gitconfig"]), ...(n === null ? [] : [`${n}${p}etc${p}gitconfig`]), ...(r && i ? [`${i}${p}Git${p}config`] : [])];
}
function Fhs(n) {
  let e = n?.trim().toLowerCase();
  if (e === void 0 || ["", "false", "no", "off"].includes(e)) return !1;
  if (["true", "yes", "on"].includes(e)) return !0;
  return /^[-+]?\d+$/.test(e) && Number(e) !== 0;
}
function sn() {
  return L([Mu(), UHe(), ...DI().map(item => item === "~" || item.startsWith("~/") ? y(rn(), item.slice(1)) : item)]);
}
function an(n, e, o) {
  return o.find(item => !dn(item) && pQt(item, e).verdict === "foreign" && gy(item, n));
}
function ySr(n, e, o, {
  pattern = !1
} = {}) {
  if (n.verdict !== "foreign") return n;
  let r = an(n.spelling, e, o);
  return r === void 0 ? n : W(n.spelling, r, x() === "windows", pattern);
}
async function Eze(n, e, o) {
  if (n.verdict !== "foreign") return n;
  let i = an(n.spelling, e, o);
  return i === void 0 ? n : cn(n.spelling, i, x() === "windows");
}
function Bco(n = process.env) {
  let e = Ds(n, "HOME"),
    o = Ds(n, "HOMEDRIVE"),
    i = Ds(n, "HOMEPATH");
  return L([e, x() === "windows" && o && i ? `${o}${i}` : void 0, rn()].filter(item => Boolean(item)));
}
async function WLi(n, e, o, i = [], r = []) {
  let s = e.GIT_DIR ?? y(o, ".git"),
    u = e.GIT_COMMON_DIR ?? s,
    l = async a => Oc(a) ? null : C(a).catch(g => k(g) === "ENOENT" ? a : null),
    c = await Promise.all([[o, M(n)], [s], [u]].map(async item => [...item, ...(await Promise.all(item.map(l)))]));
  if (c.some(item => item.includes(null))) return null;
  let [trees, w, m] = c.map(item => L(item.filter(item => item !== null))),
    S = async unexamined => {
      if (Dn(unexamined)) return {
        derived: [unexamined]
      };
      let g = await Eze(await Tze(unexamined, o), o, r);
      if (g.verdict === "foreign") return {
        unexamined: unexamined,
        detail: "it names another host than this checkout\u2019s or the owner\u2019s home and temp server"
      };
      if (g.verdict !== "local") return {
        unexamined: unexamined,
        detail: `its route cannot be vouched for (${g.verdict})`
      };
      return v(g.spelling);
    },
    v = unexamined_2 => C(unexamined_2).then(resolved => ({
      resolved: resolved
    }), async g => {
      let T = k(g);
      if (T === "ENOENT" || T === "ENOTDIR") return en(unexamined_2, o);
      let E = await U(unexamined_2).catch(() => null);
      if (E === null || E.isDirectory()) return {
        unexamined: unexamined_2,
        detail: T ?? d(g)
      };
      return E.isSymbolicLink() ? en(unexamined_2, o) : {
        derived: [unexamined_2]
      };
    }),
    O = await Promise.all(i.map(S)),
    f = O.find(item => "unexamined" in item);
  if (f !== void 0) return f;
  let P = O.flatMap(item => "resolved" in item ? [item.resolved] : []).filter(item => D(item)),
    _ = O.flatMap(item => "derived" in item ? item.derived : []).filter(item => D(item)),
    b = L([...i, ...P, ..._]),
    roots = L([...trees, ...w, ...m, ...b]),
    h = x() === "windows" ? [] : await Promise.all(L([...trees, ...w, ...m]).map(l));
  if (h.includes(null)) return null;
  let Z = (unexamined_3, g) => Rn(unexamined_3, {
      bigint: !0
    }).then(T => {
      let E = mn(T);
      return E === void 0 ? [] : [[E, unexamined_3]];
    }, async T => {
      let E = k(T);
      if (E === "ENOENT" || E === "ENOTDIR" && !g) return [];
      if (g) return null;
      let nn = await U(unexamined_3).catch(() => null);
      return nn !== null && !nn.isDirectory() ? [] : {
        unexamined: unexamined_3,
        detail: E ?? d(T)
      };
    }),
    G = await Promise.all([...L(h.filter(item => item !== null)).map(item => Z(item, !0)), ...(x() === "windows" ? [] : L(P).map(item => Z(item, !1)))]);
  if (G.includes(null)) return null;
  let Q = G.find(item => item !== null && !Array.isArray(item));
  if (Q !== void 0) return Q;
  return {
    ids: new Map(G.filter(item => Array.isArray(item)).flat()),
    roots: roots,
    trees: trees,
    fixed: L([...w.flatMap(item => [item, y(item, "config"), y(item, "config.worktree"), y(item, "commondir")]), ...m.flatMap(item => [item, y(item, "config"), y(item, "worktrees")])])
  };
}
async function en(unexamined_4, e) {
  let o = await V(unexamined_4, e);
  return o === null ? {
    unexamined: unexamined_4,
    detail: "it is too deep or too long to resolve"
  } : {
    derived: [unexamined_4, o]
  };
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
        spelling: spelling,
        verdict: verdict
      } = await vn(s, c, e);
    return verdict === "local" ? V(spelling, e, o - 1, i) : n;
  }
  let u = I(n);
  if (u === n) return n;
  let l = await V(u, e, o, i + 1);
  return l === null ? null : y(l, _n(n));
}
var Hhs = 256;
function dDn(n, e) {
  return e > Hhs || n.length > 32767;
}
function Dn(n) {
  return x() === "macos" && gy("/dev/fd", n);
}
async function $hs(n, e) {
  let o = await Promise.all(L(e.filter(item => item !== null)).map(async r => ({
      path: r,
      reachable: await j(r, n)
    }))),
    i = o.find(({
      reachable: reachable
    }) => reachable === !0);
  if (i !== void 0) return i.path;
  return o.some(({
    reachable: reachable_2
  }) => reachable_2 === null) ? null : void 0;
}
function Nn(n) {
  return /^[A-Za-z]:[\\/][^:]*$/.test(n);
}
function cDn(n) {
  return x() === "windows" && !Nn(n);
}
function pQt(n, e, {
  pattern: pattern_2 = !1
} = {}) {
  let i = x() === "windows";
  return W(ln(n, i), e, i, pattern_2);
}
function ln(n, e) {
  return e ? XQt(K(XP(Ppt(n)))) : XQt(n).replace(/^\/\/+/, "/");
}
function Uhs(spelling_2, e, o) {
  let i = x() === "windows";
  if (DHr(spelling_2, i)) return {
    spelling: spelling_2,
    verdict: "opaque"
  };
  let {
      isAbsolute: isAbsolute,
      join: join
    } = i ? N : F,
    u = isAbsolute(spelling_2) ? spelling_2 : join(e, spelling_2);
  return W(i ? K(XP(u)) : u, o, i);
}
async function vn(spelling_3, e, o) {
  let i = x() === "windows";
  if (DHr(spelling_3, i)) return {
    spelling: spelling_3,
    verdict: "opaque"
  };
  let {
      isAbsolute: isAbsolute_2,
      join: join_2
    } = i ? N : F,
    u = isAbsolute_2(spelling_3) ? spelling_3 : join_2(e, spelling_3);
  return cn(i ? K(XP(u)) : u, o, i);
}
async function cn(n, anchor, o) {
  let i = Y(n, anchor, o);
  return "verdict" in i ? i : J(i.spelling, await MH(ZS, i.spelling, {
    anchor: anchor,
    ...B
  }), anchor);
}
function W(n, anchor_2, o, i = !1) {
  let r = Y(n, anchor_2, o, i);
  return "verdict" in r ? r : J(r.spelling, Og(ZS, r.spelling, {
    anchor: anchor_2,
    ...B
  }), anchor_2);
}
async function Tze(n, anchor_3) {
  let o = x() === "windows",
    i = Y(ln(n, o), anchor_3, o);
  return "verdict" in i ? i : J(i.spelling, await MH(ZS, i.spelling, {
    anchor: anchor_3,
    ...B
  }), anchor_3);
}
var B = {
  unreadableAncestry: "unverified",
  literalLinkText: "opaque"
};
function Y(n, e, o, i = !1) {
  if (o) {
    let spelling_4 = N.normalize(n);
    if (/^[\\/]{2}[.?](?:[\\/]|$)/.test(spelling_4)) return {
      spelling: spelling_4,
      verdict: "opaque"
    };
    if (Ks(spelling_4) && R7(spelling_4, e)) return {
      spelling: spelling_4,
      verdict: "foreign"
    };
  }
  let spelling_5 = (o ? N : F).resolve(n);
  if (!o && Bb(spelling_5)) return {
    spelling: spelling_5,
    verdict: "opaque"
  };
  if (WDt(spelling_5, e)) return {
    spelling: spelling_5,
    verdict: "foreign"
  };
  let s = spelling_5.split("/"),
    u = i ? s.findIndex(item => ac(item)) : -1,
    l = u === -1 ? spelling_5 : s.slice(0, u).join("/");
  return !o && l.includes("\\") ? {
    spelling: spelling_5,
    verdict: "opaque"
  } : {
    spelling: spelling_5
  };
}
function WDt(n, e, o = !1) {
  if (x() === "windows") return Ks(n) && R7(n, e);
  let i = n.replace(/^\/{2,}/, "/"),
    r = crt(e);
  return or(i) || crt(i).some(item => !r.includes(item)) || Pn(i) && (o && dn(i) || !gy(i, e) && !gy(e, i)) || FIo(i, e);
}
function J(spelling_6, via, o) {
  if (via === void 0) return {
    spelling: spelling_6,
    verdict: "local"
  };
  if (via === spelling_6) return WDt(spelling_6, o) ? {
    spelling: spelling_6,
    verdict: "foreign"
  } : {
    spelling: spelling_6,
    verdict: "unreadable"
  };
  if (via === Zy) return {
    spelling: spelling_6,
    verdict: "unreadable"
  };
  if (via === _wt) return {
    spelling: spelling_6,
    verdict: "opaque"
  };
  return {
    spelling: spelling_6,
    verdict: "linked",
    via: via
  };
}
function Cze({
  spelling: spelling_7,
  verdict: verdict_2,
  via: via_2
}, i) {
  if (verdict_2 === "foreign") return [spelling_7];
  return x() === "windows" ? L([...bn, ...[spelling_7, i, via_2 ?? ""].filter(or).map(item => N.parse(item).root)]) : ["/"];
}
function dn(n) {
  return Xv(n) || /^\/network(?:\/servers)?$/i.test(F.resolve("/", n));
}
function Pn(n) {
  return jb(n) && !Cl(n);
}
var bn = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ", n => `${n}:\\`);
function K(n) {
  let e = /^[\\/]{2}\.(?:[\\/](.*))?$/s.exec(n);
  if (e === null) return n;
  let o = (e[1] ?? "").split(/[\\/]+/).reduce((acc, item) => {
      if (item === "..") acc.pop();else if (item !== "" && item !== ".") acc.push(item);
      return acc;
    }, []),
    [i = "", ...r] = o;
  if (/^[A-Za-z]:$/.test(i)) return `${i}\\${r.join("\\")}`;
  if (i.toUpperCase() === "UNC" && r.length >= 2) return `\\\\${r.join("\\")}`;
  return `\\\\.\\${o.join("\\")}`;
}
function fn(n) {
  return process.getuid === void 0 || n === process.getuid();
}
async function gn(n) {
  return yn(n, wn.W_OK).then(() => !0, e => !["EACCES", "EROFS", "EPERM"].includes(k(e) ?? ""));
}
async function zLi(n, e) {
  return !e.isDirectory() && e.nlink > 1 && (fn(e.uid) || (await gn(n)));
}
function mn(n) {
  return n.isDirectory() && n.ino !== 0n ? `${n.dev}:${n.ino}` : void 0;
}
var An = 40;
async function j(n, e, o = An, i = {
  secondNames: !0
}) {
  let {
    nestedRoot: nestedRoot,
    replaceable: replaceable,
    lands: lands,
    asksForAnotherHost: asksForAnotherHost
  } = kn(e);
  if (Ln(n, e)) return !0;
  if (x() === "windows" && n !== M(n)) return j(M(n), e, o, i);
  let {
      root: root
    } = Tn(n),
    w = xn(n, root),
    m = root,
    S = !1;
  for (let [v, O] of w.entries()) {
    if (O === "..") {
      if (S) return !0;
      m = I(m);
      continue;
    }
    let f = y(m, O);
    if (replaceable(f) || asksForAnotherHost(f)) return !0;
    let {
      entry: entry,
      alias: alias
    } = await hn(f, e, i.secondNames);
    switch (entry) {
      case null:
        return null;
      case "device":
        return nestedRoot(f);
      case "shared":
        return !0;
      case "shared_if_writable":
        if (await gn(f)) return !0;
        S = alias !== void 0 && alias !== f, m = alias ?? f;
        break;
      case "sealed":
        S = !1, m = f;
        break;
      case "absent":
        return lands(M(f, ...w.slice(v + 1)));
      case "link":
        {
          if (nestedRoot(f)) return !0;
          let b = await tn(f).catch(() => null);
          if (b === null || o === 0) return null;
          let A = In(f, b);
          if (A === null) return !0;
          let h = [O0e(m, A), ...w.slice(v + 1)];
          return j(h.join(p), e, o - 1, i);
        }
      case "entry":
        S = alias !== void 0 && alias !== f, m = alias ?? f;
    }
  }
  return lands(m);
}
function xn(n, e) {
  return n.slice(e.length).split(p === "/" ? /\/+/ : /[\\/]+/).filter(item => item !== "" && item !== ".");
}
function kn(n) {
  let inside = r => n.roots.some(item => gy(item, r)),
    o = r => n.roots.some(item => gy(item, r) && gy(r, item)),
    kept = r => n.fixed.includes(r);
  return {
    inside: inside,
    kept: kept,
    nestedRoot: r => o(r) && !kept(r) && n.roots.some(item => gy(item, r) && !gy(r, item)),
    replaceable: r => inside(r) && !o(r) && !kept(r),
    lands: r => inside(r) && !kept(r),
    asksForAnotherHost: r => n.roots.every(item => WDt(r, item))
  };
}
function Ln(n, e) {
  return !D(n) || cDn(n) || e.roots.every(item => WDt(n, item, !0)) || n.includes("\uFFFD");
}
async function hn(n, e, o) {
  let alias_2;
  return {
    entry: await U(n, {
      bigint: !0
    }).then(s => {
      let u = mn(s);
      return alias_2 = u === void 0 ? void 0 : e.ids.get(u), s.isSymbolicLink() ? "link" : s.isCharacterDevice() ? "device" : o && !s.isDirectory() && s.nlink > 1n ? fn(Number(s.uid)) ? "shared" : "shared_if_writable" : "entry";
    }, s => {
      let u = k(s);
      return u === "ENOENT" || u === "ENOTDIR" ? "absent" : ["EACCES", "EPERM"].includes(u ?? "") ? "sealed" : null;
    }),
    alias: alias_2
  };
}
function In(n, e) {
  let o = x() === "windows",
    i = o ? /^[A-Za-z]:/.exec(n)?.[0] : void 0;
  if (o && /^[A-Za-z]:(?![\\/])/.test(e)) return null;
  let r = i !== void 0 && /^[\\/](?![\\/])/.test(e) ? `${i}${e}` : e;
  return r.includes("\uFFFD") ? null : r;
}
function uDn(n) {
  let e = _Sr(n);
  return e === null ? void 0 : /^gitdir: (.+)$/s.exec(e)?.[1];
}
function _Sr(n) {
  if (n === void 0) return null;
  let e = n.replace(/[\r\n]+$/, "");
  return e === "" || /[\r\n\0\uFFFD]/.test(e) ? null : e;
}
function O0e(n, e) {
  return D(e) ? e : `${n}${p}${e}`;
}
function gy(n, e) {
  if (!D(e)) return !1;
  let o = x(),
    i = o === "macos" || o === "windows",
    r = l => i ? l.normalize("NFC").toLowerCase() : l,
    s = Sn(r(n), r(e)),
    u = s === ".." || s.startsWith(`..${p}`) || s.startsWith("../");
  return s === "" || !u && !D(s);
}
var z = ["projectSettings", "localSettings"],
  Fn = ["CLAUDE_CODE_TMPDIR", "TMPDIR", "TEMP", "TMP"],
  JXe = ["CLAUDE_CONFIG_DIR", "HOME", "USERPROFILE", "HOMEDRIVE", "HOMEPATH", "CLAUDE_CODE_USE_COWORK_PLUGINS"],
  Bhs = ["GIT_CONFIG_GLOBAL", "GIT_CONFIG_SYSTEM"],
  jhs = [...Bhs, ...JXe, ...Fn, "XDG_CONFIG_HOME", "PATH", ...jDt];
function jco() {
  return lv() === void 0 && FH() !== void 0 ? [...z, "flagSettings"] : z;
}
function Hn() {
  let n = jco();
  return yi.filter(item => !n.includes(item) && Kt(item));
}
function GLi(n, e = "unknown") {
  let o = jco().includes("flagSettings") ? FH() : void 0,
    i = o === void 0 ? [] : [X(o, SY())],
    r = [...z.map(l => ({
      tier: l,
      file: un(l)
    })), {
      tier: "localSettings",
      file: Jg()
    }].flatMap(({
      tier: tier,
      file: file
    }) => file === void 0 ? [] : [{
      tier: tier,
      file: file,
      names: X(file, void 0, e)
    }]),
    s = [q(n.workTree, ".claude", "settings.json"), q(n.workTree, ".claude", "settings.local.json")].filter(item => !r.some(({
      file: file_2
    }) => file_2 === item)).map(item => X(item, void 0, e)),
    u = r.map(({
      names: names
    }) => names);
  if ([...i, ...u, ...s].includes(null)) return null;
  return [...i, ...r.filter(({
    tier: tier_2
  }) => !AM() && !RKe(tier_2)).map(({
    names: names_2
  }) => names_2)].flatMap(item => item ?? []);
}
function X(n, e, o = "unknown") {
  let {
    settings: settings,
    errors: errors,
    textRead: textRead
  } = e === void 0 ? XAe(n, new Map()) : {
    ...wT(n, e),
    textRead: void 0
  };
  if (settings === null && errors.length === 0) return [];
  return settings === null || errors.some(item => item.severity !== "warning") ? null : Object.keys(settings.env ?? {});
}
function Gn(n) {
  let e = {};
  for (let o of n) try {
    let i = be(o)?.env;
    if (i) {
      let r = Ro(i, s => typeof s === "string");
      Object.assign(e, NX(r, o));
    }
  } catch {}
  return e;
}
function mQt() {
  let n = ap(),
    e = n === void 0 || JXe.every(item => Ds(process.env, item) === Ds(n, item));
  return {
    ...v3(),
    ...(e ? Gn(Hn()) : {})
  };
}
function bSr(n) {
  let e = ap();
  if (e === void 0) return;
  let o = mQt(),
    i = JXe;
  return n.find(item => {
    let s = Ds(process.env, item);
    return s !== Ds(e, item) && (i.includes(item) || s !== Ds(o, item));
  });
}
function Rze(n) {
  let e = ap();
  if (e === void 0) return n;
  let o = mQt(),
    i = JXe,
    r = new Set(Object.keys(n).filter(item => {
      let u = n[item];
      return u !== void 0 && u !== Ds(e, item) && (i.includes(item.toUpperCase()) || u !== Ds(o, item)) && k3(item, u);
    }));
  if (r.size === 0) return n;
  return {
    ...Ro(n, (s, u) => !r.has(u)),
    ...Object.fromEntries([...r].flatMap(item => {
      let u = Ds(e, item);
      return u === void 0 ? [] : [[item, u]];
    }))
  };
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
  return L([...n, r, s]);
}
function e_e() {
  let n = ap();
  if (n !== void 0 && H.snapshot === n) return H.roots;
  let e = n ?? process.env,
    r = [Ds(e, "HOME") || (x() === "windows" ? Ds(e, "USERPROFILE") || (Ds(e, "HOMEDRIVE") && Ds(e, "HOMEPATH") ? `${Ds(e, "HOMEDRIVE")}${Ds(e, "HOMEPATH")}` : void 0) : void 0), pn(e)].filter(item => item !== void 0 && item !== "").map(item => {
      let l = pQt(item, item);
      if (l.verdict !== "local") return t(`[repositorySettings] start root ${item} cannot be vouched for (${l.verdict}): it exempts nothing`, {
        level: "warn"
      }), {
        roots: [],
        transient: l.verdict === "unreadable"
      };
      try {
        let c = Mn(l.spelling);
        return {
          roots: L([item, l.spelling, c]),
          transient: !1
        };
      } catch {
        return {
          roots: [item, l.spelling],
          transient: !1
        };
      }
    }),
    s = L(r.flatMap(({
      roots: roots_2
    }) => roots_2));
  if (n !== void 0 && !r.some(({
    transient: transient
  }) => transient)) H.snapshot = n, H.roots = s;
  return s;
}
var H = he({
  snapshot: void 0,
  roots: []
}, n => {
  n.snapshot = void 0, n.roots = [];
});
function pn(n) {
  return En(Ds(n, "CLAUDE_CODE_TMPDIR") || void 0) ?? $n(n);
}
function $n(n) {
  let e = i => Ds(n, i) || void 0,
    o = "/tmp";
  return En(e("TEMP") ?? e("TMP"));
}
function En(n) {
  return n !== void 0 && n.length > 1 ? n.replace(/[\\/]+$/, "") : n;
}
export { jDt, Nhs, jLi, Fhs, ySr, Eze, Bco, WLi, Hhs, dDn, $hs, cDn, pQt, Uhs, Tze, WDt, Cze, zLi, uDn, _Sr, O0e, gy, JXe, Bhs, jhs, jco, GLi, mQt, bSr, Rze, Whs, e_e };