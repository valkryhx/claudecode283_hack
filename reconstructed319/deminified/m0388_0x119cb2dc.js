// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Kae } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { ps } from "B:/~BUN/root/chunk-2pp12te6.js";
import { af } from "B:/~BUN/root/chunk-eev762xg.js";
import { hHr, gh, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { $d } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { Ett, Mpe } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { Xi } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { swe, mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { rHe } from "B:/~BUN/root/chunk-hacd8gcc.js";
import { LXi } from "B:/~BUN/root/chunk-pzs4x0zd.js";
import { nbo } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { ap } from "B:/~BUN/root/chunk-m749kjym.js";
import { AGe, jI, Aa } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Kze, qze, uZt, Ifo, N0t } from "B:/~BUN/root/chunk-rv3pfsrw.js";
import { b_s, Xwr, eCe, tX, O0t } from "B:/~BUN/root/chunk-8qv1t8b3.js";
import { ze as toolName } from "B:/~BUN/root/chunk-xwzn0yxv.js";
import { po } from "B:/~BUN/root/chunk-67erjrg5.js";
import { mme } from "B:/~BUN/root/chunk-99vcrndq.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
import { homedir as c, tmpdir as w } from "os";
import { basename as f, dirname as a, isAbsolute as b, join as n, sep as v } from "path";
var I = /[\\^$.*+?()[\]{}|]/g,
  H = RegExp(I.source);
function F(e) {
  return e = mme(e), e && H.test(e) ? e.replace(I, "\\$&") : e;
}
var h = F;
function fD() {
  return L([af(), n(c(), ".claude"), rHe()].filter(item => item !== null));
}
var g_s = [AGe, Mpe, Ett, nbo];
function A() {
  return [c(), af() ?? "", rHe() ?? "", ...(Kae() ? ["", ""] : [hHr(), gh()]), i.CLAUDE_CODE_HOST_CREDS_FILE ?? "", i.TMPDIR ?? "", ...(Kae() ? [d("TMPDIR") ?? ""] : []), d("APPDATA") ?? "", d("LOCALAPPDATA") ?? ""].join("\x00");
}
var y_s = po(() => {
    let e = fD(),
      o = L([...(Kae() ? [] : [a(hHr())]), c()]);
    return Y$([...N0t(), ...e.flatMap(item => [n(item, Kze), n(item, qze)]), ...o.flatMap(item => Ifo.map(r => n(item, r))), ...e.map(item => n(item, uZt)), ...(i.CLAUDE_CODE_HOST_CREDS_FILE ? [S(i.CLAUDE_CODE_HOST_CREDS_FILE)] : [])]);
  }, A),
  y = po(() => {
    let e = Y$(j()),
      o = [...y_s(), ...Y$([n(c(), ".claude", "state", "unattended-serving-consent.json")]), ...Y$([n(c(), ".claude", "state", "settings-review.json")]), ...Y$(fD().flatMap(item => [n(item, "state", "device-mcp-consent.json"), n(item, "state", "device-mcp-snapshot.json")])), ...Y$(fD().flatMap(item => g_s.map(r => n(item, r)))), ...Y$(fD().flatMap(item => [Xwr(item), b_s(item), tX(item)]))];
    return Xi([...o.flatMap(item => [...Tfo(f(item)).flatMap(r => [{
      literal: n(a(item), r),
      tail: "",
      place: r === f(item)
    }, {
      literal: n(a(item), r),
      tail: ".*",
      place: !1
    }]), ...Cfo(f(item)).map(r => ({
      literal: a(item),
      tail: `/${r}`,
      place: !1
    }))]), ...Y$([...fD().flatMap(item => [n(item, "backups"), O0t(item), eCe(item), n(item, "state")]), n(c(), ".claude", "state", "served-calls"), ...(x() === "macos" ? [n(c(), "Library", "Keychains")] : []), ...(x() === "windows" ? G() : [])]).map(t => ({
      literal: t,
      tail: "/**",
      place: !0
    })), ...Y$(fD().map(item => LXi(item))).flatMap(t => [...Tfo("*.key").flatMap(item => [{
      literal: t,
      tail: `/${item}`,
      place: item === "*.key"
    }, {
      literal: t,
      tail: `/${item}.*`,
      place: !1
    }]), ...Cfo("*.key").map(item => ({
      literal: t,
      tail: `/${item}`,
      place: !1
    }))]), ...e.map(t => ({
      literal: t,
      tail: "/claude-resume-*",
      place: !0
    })), ...(x() === "macos" ? Y$(["/var/folders"]).map(t => ({
      literal: t,
      tail: "/*/*/*/claude-resume-*",
      place: !0
    })) : []), ...(Kae() ? e.flatMap(t => [{
      literal: t,
      tail: `/${C}*/.claude/**`,
      place: !0
    }, {
      literal: t,
      tail: `/${C}*/*/claude-resume-*`,
      place: !0
    }]) : [])], ({
      literal: literal,
      tail: tail,
      place: place
    }) => `${literal}\x00${tail}\x00${place}`);
  }, A),
  CJe = po(() => R(y()), A),
  x0n = po(() => {
    let e = y().filter(item => item.place),
      o = e.filter(item => item.tail === "/**").map(item => `${item.literal}${v}`);
    return R(e.filter(item => !o.some(r => item.literal.startsWith(r))));
  }, A);
function R(e) {
  return Xi(e.map(({
    literal: literal_2,
    tail: tail_2
  }) => ({
    literal: literal_2,
    tail: tail_2
  })), ({
    literal: literal_3,
    tail: tail_3
  }) => `${literal_3}\x00${tail_3}`);
}
function G() {
  let {
    local: local,
    roaming: roaming
  } = k();
  return L([...local.flatMap(item => [n(item, "Microsoft", "Credentials"), n(item, "Microsoft", "Vault")]), ...roaming.flatMap(item => [n(item, "Microsoft", "Credentials"), n(item, "Microsoft", "Vault"), n(item, "Microsoft", "Protect")])]);
}
function k() {
  return {
    local: L([d("LOCALAPPDATA"), n(c(), "AppData", "Local")].filter(item => item !== void 0 && item !== "")),
    roaming: L([d("APPDATA"), n(c(), "AppData", "Roaming")].filter(item => item !== void 0 && item !== ""))
  };
}
function d(e) {
  let o = ap();
  return o !== void 0 ? o[e] : i[e];
}
function j() {
  let e = L([w(), i.TMPDIR, ...(Kae() ? [d("TMPDIR")] : []), "/tmp", "/var/tmp"].filter(item => item !== void 0 && b(item)).map(S));
  return Kae() ? L(e.map(item => f(a(item)).startsWith(C) ? a(a(item)) : item)) : e;
}
var C = "cc-tenant-";
function Tfo(e) {
  return [e, `.${e}`, `#${e}#`, `.#${e}`].flatMap(item => [item, `${item}~`]);
}
function Cfo(e) {
  let o = e.lastIndexOf("."),
    t = o === -1 ? e : e.slice(0, o),
    r = o === -1 ? "" : e.slice(o);
  return [...["", ".", "#", ".#"].flatMap(item => [`${item}${e}~*`, ...["BACKUP", "BASE", "LOCAL", "REMOTE"].map(g => `${item}${t}_${g}_*${r === "" ? "" : `${r}*`}`)]), `#${e}#~*`];
}
function Y$(e) {
  return L(e.flatMap(item => [item, ...ps(item)]));
}
function __s(e) {
  let o = x(),
    t = o === "linux" || o === "wsl",
    r = new Map();
  function l(s) {
    if (!r.has(s)) r.set(s, e.realpathIfExists(s));
    return r.get(s);
  }
  let g = new Map();
  function T(s, m) {
    let p = g.get(s);
    if (p === void 0) p = e.namesIn(s) ?? [], g.set(s, p);
    let regExp = new RegExp(`^${h(m).replaceAll("\\*", "[^/]*")}$`);
    return p.filter(item => regExp.test(item)).map(item => n(s, item));
  }
  let P = new Set(Y$(fD()).map(S)),
    O = new Set([...P, ...Y$([c()]).map(S)]),
    N = new Set(CJe().filter(({
      tail: tail_4
    }) => tail_4 === "/**").flatMap(({
      literal: literal_4
    }) => [literal_4, a(literal_4)]).filter(item => P.has(a(item))));
  return L(CJe().flatMap(({
    literal: literal_5,
    tail: tail_5
  }) => {
    let p = a(literal_5),
      E = l(p) ?? (N.has(p) ? (D => D && n(D, f(p)))(l(a(p))) ?? void 0 : void 0);
    if (!E) return [];
    let u = n(E, f(literal_5));
    if (tail_5 === "") return [l(u) ?? u];
    if (tail_5 === "/**") return [`${u}/`];
    let M = `${tail_5.startsWith("/") && O.has(literal_5) ? l(literal_5) ?? u : u}${tail_5}`;
    if (!t) return [M];
    let _ = a(M);
    return T(l(_) ?? _, f(M));
  }));
}
function P0t(e = CJe()) {
  return L(e.map(({
    literal: literal_6,
    tail: tail_6
  }) => `${K(swe(jI(literal_6), {
    escapeGlobs: !0
  }))}${tail_6.endsWith("claude-resume-*") ? `${tail_6}/**` : tail_6}`));
}
function nLe(e) {
  if (Kae()) return !1;
  let o = mt(e),
    t = o.includes("\\") ? o.replaceAll("\\", "/") : o;
  if (!W(CJe()).test(t)) return !1;
  return Aa(e, B(P0t()), "read", "deny", {
    asSpelledOnly: !0
  }) !== null;
}
var W = po(e => new RegExp(`^(?:${L(e.map(({
    literal: literal_7,
    tail: tail_7
  }) => (tail_7 === "" || tail_7 === ".*" ? a(literal_7) : literal_7).replaceAll("\\", "/"))).map(h).join("|")})`, "i")),
  B = po(e => ({
    ...$d(),
    alwaysDenyRules: {
      hostCredential: e.map(o => mn({
        toolName: toolName,
        ruleContent: o
      }))
    }
  }), e => e.join("\x00"));
function K(e) {
  return e === "" || e.startsWith("/") ? `/${e}` : e;
}
function S(e) {
  return e.replace(/[\\/]+$/, "") || e;
}
export { fD, g_s, y_s, CJe, x0n, Tfo, Cfo, Y$, __s, P0t, nLe };