// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Kae
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  ps
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  af
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  hHr,
  gh,
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  $d
} from "B:/~BUN/root/chunk-y1b1g4ac.js";
import {
  Ett,
  Mpe
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  mt
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  Xi
} from "B:/~BUN/root/chunk-r8p1hzqw.js";
import {
  swe,
  mn
} from "B:/~BUN/root/chunk-44q965xg.js";
import {
  rHe
} from "B:/~BUN/root/chunk-hacd8gcc.js";
import {
  LXi
} from "B:/~BUN/root/chunk-pzs4x0zd.js";
import {
  nbo
} from "B:/~BUN/root/chunk-f0zgv0ya.js";
import {
  ap
} from "B:/~BUN/root/chunk-m749kjym.js";
import {
  AGe,
  jI,
  Aa
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  Kze,
  qze,
  uZt,
  Ifo,
  N0t
} from "B:/~BUN/root/chunk-rv3pfsrw.js";
import {
  b_s,
  Xwr,
  eCe,
  tX,
  O0t
} from "B:/~BUN/root/chunk-8qv1t8b3.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  po
} from "B:/~BUN/root/chunk-67erjrg5.js";
import {
  mme
} from "B:/~BUN/root/chunk-99vcrndq.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  homedir as c,
  tmpdir as w
} from "os";
import {
  basename as f,
  dirname as a,
  isAbsolute as b,
  join as n,
  sep as v
} from "path";
var I = /[\\^$.*+?()[\]{}|]/g,
  H = RegExp(I.source);

function F(e) {
  return e = mme(e), e && H.test(e) ? e.replace(I, "\\$&") : e
}
var h = F;

function fD() {
  return L([af(), n(c(), ".claude"), rHe()].filter((e) => e !== null))
}
var g_s = [AGe, Mpe, Ett, nbo];

function A() {
  return [c(), af() ?? "", rHe() ?? "", ...Kae() ? ["", ""] : [hHr(), gh()], i.CLAUDE_CODE_HOST_CREDS_FILE ?? "", i.TMPDIR ?? "", ...Kae() ? [d("TMPDIR") ?? ""] : [], d("APPDATA") ?? "", d("LOCALAPPDATA") ?? ""].join("\x00")
}
var y_s = po(() => {
    let e = fD(),
      o = L([...Kae() ? [] : [a(hHr())], c()]);
    return Y$([...N0t(), ...e.flatMap((t) => [n(t, Kze), n(t, qze)]), ...o.flatMap((t) => Ifo.map((r) => n(t, r))), ...e.map((t) => n(t, uZt)), ...i.CLAUDE_CODE_HOST_CREDS_FILE ? [S(i.CLAUDE_CODE_HOST_CREDS_FILE)] : []])
  }, A),
  y = po(() => {
    let e = Y$(j()),
      o = [...y_s(), ...Y$([n(c(), ".claude", "state", "unattended-serving-consent.json")]), ...Y$([n(c(), ".claude", "state", "settings-review.json")]), ...Y$(fD().flatMap((t) => [n(t, "state", "device-mcp-consent.json"), n(t, "state", "device-mcp-snapshot.json")])), ...Y$(fD().flatMap((t) => g_s.map((r) => n(t, r)))), ...Y$(fD().flatMap((t) => [Xwr(t), b_s(t), tX(t)]))];
    return Xi([...o.flatMap((t) => [...Tfo(f(t)).flatMap((r) => [{
      literal: n(a(t), r),
      tail: "",
      place: r === f(t)
    }, {
      literal: n(a(t), r),
      tail: ".*",
      place: !1
    }]), ...Cfo(f(t)).map((r) => ({
      literal: a(t),
      tail: `/${r}`,
      place: !1
    }))]), ...Y$([...fD().flatMap((t) => [n(t, "backups"), O0t(t), eCe(t), n(t, "state")]), n(c(), ".claude", "state", "served-calls"), ...x() === "macos" ? [n(c(), "Library", "Keychains")] : [], ...x() === "windows" ? G() : []]).map((t) => ({
      literal: t,
      tail: "/**",
      place: !0
    })), ...Y$(fD().map((t) => LXi(t))).flatMap((t) => [...Tfo("*.key").flatMap((r) => [{
      literal: t,
      tail: `/${r}`,
      place: r === "*.key"
    }, {
      literal: t,
      tail: `/${r}.*`,
      place: !1
    }]), ...Cfo("*.key").map((r) => ({
      literal: t,
      tail: `/${r}`,
      place: !1
    }))]), ...e.map((t) => ({
      literal: t,
      tail: "/claude-resume-*",
      place: !0
    })), ...x() === "macos" ? Y$(["/var/folders"]).map((t) => ({
      literal: t,
      tail: "/*/*/*/claude-resume-*",
      place: !0
    })) : [], ...Kae() ? e.flatMap((t) => [{
      literal: t,
      tail: `/${C}*/.claude/**`,
      place: !0
    }, {
      literal: t,
      tail: `/${C}*/*/claude-resume-*`,
      place: !0
    }]) : []], ({
      literal: t,
      tail: r,
      place: l
    }) => `${t}\x00${r}\x00${l}`)
  }, A),
  CJe = po(() => R(y()), A),
  x0n = po(() => {
    let e = y().filter((t) => t.place),
      o = e.filter((t) => t.tail === "/**").map((t) => `${t.literal}${v}`);
    return R(e.filter((t) => !o.some((r) => t.literal.startsWith(r))))
  }, A);

function R(e) {
  return Xi(e.map(({
    literal: o,
    tail: t
  }) => ({
    literal: o,
    tail: t
  })), ({
    literal: o,
    tail: t
  }) => `${o}\x00${t}`)
}

function G() {
  let {
    local: e,
    roaming: o
  } = k();
  return L([...e.flatMap((t) => [n(t, "Microsoft", "Credentials"), n(t, "Microsoft", "Vault")]), ...o.flatMap((t) => [n(t, "Microsoft", "Credentials"), n(t, "Microsoft", "Vault"), n(t, "Microsoft", "Protect")])])
}

function k() {
  return {
    local: L([d("LOCALAPPDATA"), n(c(), "AppData", "Local")].filter((e) => e !== void 0 && e !== "")),
    roaming: L([d("APPDATA"), n(c(), "AppData", "Roaming")].filter((e) => e !== void 0 && e !== ""))
  }
}

function d(e) {
  let o = ap();
  return o !== void 0 ? o[e] : i[e]
}

function j() {
  let e = L([w(), i.TMPDIR, ...Kae() ? [d("TMPDIR")] : [], "/tmp", "/var/tmp"].filter((o) => o !== void 0 && b(o)).map(S));
  return Kae() ? L(e.map((o) => f(a(o)).startsWith(C) ? a(a(o)) : o)) : e
}
var C = "cc-tenant-";

function Tfo(e) {
  return [e, `.${e}`, `#${e}#`, `.#${e}`].flatMap((o) => [o, `${o}~`])
}

function Cfo(e) {
  let o = e.lastIndexOf("."),
    t = o === -1 ? e : e.slice(0, o),
    r = o === -1 ? "" : e.slice(o);
  return [...["", ".", "#", ".#"].flatMap((l) => [`${l}${e}~*`, ...["BACKUP", "BASE", "LOCAL", "REMOTE"].map((g) => `${l}${t}_${g}_*${r===""?"":`${r}*`}`)]), `#${e}#~*`]
}

function Y$(e) {
  return L(e.flatMap((o) => [o, ...ps(o)]))
}

function __s(e) {
  let o = x(),
    t = o === "linux" || o === "wsl",
    r = new Map;

  function l(s) {
    if (!r.has(s)) r.set(s, e.realpathIfExists(s));
    return r.get(s)
  }
  let g = new Map;

  function T(s, m) {
    let p = g.get(s);
    if (p === void 0) p = e.namesIn(s) ?? [], g.set(s, p);
    let E = new RegExp(`^${h(m).replaceAll("\\*","[^/]*")}$`);
    return p.filter((u) => E.test(u)).map((u) => n(s, u))
  }
  let P = new Set(Y$(fD()).map(S)),
    O = new Set([...P, ...Y$([c()]).map(S)]),
    N = new Set(CJe().filter(({
      tail: s
    }) => s === "/**").flatMap(({
      literal: s
    }) => [s, a(s)]).filter((s) => P.has(a(s))));
  return L(CJe().flatMap(({
    literal: s,
    tail: m
  }) => {
    let p = a(s),
      E = l(p) ?? (N.has(p) ? ((D) => D && n(D, f(p)))(l(a(p))) ?? void 0 : void 0);
    if (!E) return [];
    let u = n(E, f(s));
    if (m === "") return [l(u) ?? u];
    if (m === "/**") return [`${u}/`];
    let M = `${m.startsWith("/")&&O.has(s)?l(s)??u:u}${m}`;
    if (!t) return [M];
    let _ = a(M);
    return T(l(_) ?? _, f(M))
  }))
}

function P0t(e = CJe()) {
  return L(e.map(({
    literal: o,
    tail: t
  }) => `${K(swe(jI(o),{escapeGlobs:!0}))}${t.endsWith("claude-resume-*")?`${t}/**`:t}`))
}

function nLe(e) {
  if (Kae()) return !1;
  let o = mt(e),
    t = o.includes("\\") ? o.replaceAll("\\", "/") : o;
  if (!W(CJe()).test(t)) return !1;
  return Aa(e, B(P0t()), "read", "deny", {
    asSpelledOnly: !0
  }) !== null
}
var W = po((e) => new RegExp(`^(?:${L(e.map(({literal:o,tail:t})=>(t===""||t===".*"?a(o):o).replaceAll("\\","/"))).map(h).join("|")})`, "i")),
  B = po((e) => ({
    ...$d(),
    alwaysDenyRules: {
      hostCredential: e.map((o) => mn({
        toolName: ze,
        ruleContent: o
      }))
    }
  }), (e) => e.join("\x00"));

function K(e) {
  return e === "" || e.startsWith("/") ? `/${e}` : e
}

function S(e) {
  return e.replace(/[\\/]+$/, "") || e
}
export {
  fD,
  g_s,
  y_s,
  CJe,
  x0n,
  Tfo,
  Cfo,
  Y$,
  __s,
  P0t,
  nLe
};
