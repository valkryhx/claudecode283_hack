// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { nu } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Whe } from "B:/~BUN/root/chunk-jpdys232.js";
import { xo } from "B:/~BUN/root/chunk-6za2ez23.js";
import { La } from "B:/~BUN/root/chunk-nggrknsv.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { Es } from "B:/~BUN/root/chunk-ek28wssa.js";
import { Wpn, IW } from "B:/~BUN/root/chunk-8z3a373v.js";
import { We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { mO, SK, bi, wK, vK, BOe, Gee, hD, WOe, EX, A9e } from "B:/~BUN/root/chunk-gjdk1btq.js";
import { pd } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { $Ae, igs, ZF, $at, td } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { mo, f9e, m9e, OCo, ICo, PG } from "B:/~BUN/root/chunk-c44qc88s.js";
import { xBe, PBe, EDt, TDt, pD } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { uH } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { JCt } from "B:/~BUN/root/chunk-3j7t8emg.js";
import { ya } from "B:/~BUN/root/chunk-6k93vgm0.js";
import { ho } from "B:/~BUN/root/chunk-fqc7tjgr.js";
var K = "tengu_violin_lining";
function NCe() {
  return ya(K, {
    safe: !0
  });
}
async function R2t(e) {
  if (!NCe()) return wK(e);
  let n = await SK(e);
  if (n === mO && e.trim() !== "") return {
    kind: "too-complex",
    reason: "the parser gave up on the command"
  };
  return n === null ? {
    kind: "simple",
    commands: [],
    bareAssignmentNames: []
  } : vK(e, n);
}
import { homedir as x } from "os";
import { basename as Z, isAbsolute as C, join as X, resolve as b } from "path";
var Y = 16,
  T = 64;
function R(e) {
  return A9e(e) || e === "PWD" || e === "OLDPWD";
}
function M(e) {
  return !/^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i.test(e) && R(e);
}
var q = new Set(["export", "declare", "typeset", "readonly", "local", "unset"]),
  J = new Set([...Gee, ...BOe, ...hD, ...WOe, ...EX, "xargs", "parallel"]),
  B = [EDt, xBe, PBe],
  Q = "tengu_toasty_hammock";
function k(e) {
  return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}
async function A2t(e, n, t, s) {
  let r = t.behavior === "ask" && td(t.decisionReason, IW) !== void 0;
  if (e.name === We) {
    if (typeof n.command !== "string") return "uncertain";
    let d = await te(n.command, s, r);
    return d === "none" && t.behavior === "ask" && td(t.decisionReason, Wpn) !== void 0 ? "uncertain" : d;
  }
  if (e.name !== xt) return "none";
  if (r) return "settings";
  return t.behavior === "ask" && G(t) ? "uncertain" : "none";
}
async function x2t(e, n, t, s = !1) {
  if (e.name !== We && e.name !== xt || !ZQ(n, "file") || !(await nnr(e, n, t))) return !1;
  let command = n.command;
  return !(s && e.name === We && typeof command === "string" && (await RKr(command)));
}
async function nnr(e, n, t) {
  try {
    let command_2 = n.command;
    return e.name === xt && typeof command_2 === "string" ? !JCt(command_2, await $Ae(command_2)) : !e.isReadOnly(n, t);
  } catch (s) {
    return l(Error("a served shell line's read-only check threw; the line counts as not read-only", {
      cause: s
    })), !0;
  }
}
function CKr() {
  return {
    paths: [...TDt(), ...uH().flatMap(item => B.map(n => X(item, n)))],
    globalConfigNames: Whe.map(item => `.claude${item}.json`)
  };
}
var v = {
    simctl: ["launch", "terminate", "uninstall", "get_app_container", "appinfo", "privacy"],
    open: ["-b"],
    defaults: ["read", "read-type", "write", "delete"]
  },
  H = String.raw`(?:[a-z][a-z0-9_-]*\.){2,}claude`,
  regExp = new RegExp(`^${H}$`, "i"),
  ne = /[|`\\(]|\$[{_]|\$BASH|<<|\bfunction\b/;
async function RKr(e) {
  if (ne.test(e)) return !1;
  try {
    let n = await R2t(e);
    if (n.kind !== "simple" || n.bareAssignmentNames.some(R)) return !1;
    let t = [],
      command_3 = e.replace(new RegExp(String.raw`(^|\s)(${H})(?=$|[\s;&])`, "gi"), (o, c, u) => (t.push(u), `${c}APPID`)),
      r = [],
      d = 0;
    for (let {
      argv: argv,
      envVars: envVars,
      redirects: redirects
    } of n.commands) {
      if (envVars.some(item => R(item.name)) || redirects.some(({
        op: op,
        target: target
      }) => target !== "/dev/null" && !(op === ">&" && (target === "1" || target === "2")))) return !1;
      let i = argv[0],
        m = i === "simctl" ? 0 : (i === "xcrun" || i === "/usr/bin/xcrun") && argv[1] === "simctl" ? 1 : void 0,
        y = m === void 0 ? void 0 : argv[m + 1],
        g = m !== void 0 && y !== void 0 && v.simctl.includes(y) ? m + 1 : void 0,
        h = (i === "defaults" || i === "/usr/bin/defaults") && argv[1] !== void 0 && v.defaults.includes(argv[1]),
        a = i === "open" || i === "/usr/bin/open";
      if (m === void 0 && !h && !a && i !== void 0 && i !== "sleep") return !1;
      for (let [p, S] of argv.entries()) {
        if (!regExp.test(S)) continue;
        r.push(S);
        let _ = argv[p - 1];
        if (g !== void 0 && p > g || h && p === 2 || a && _ !== void 0 && v.open.includes(_)) d += 1;
      }
    }
    return t.length > 0 && d === r.length && t.toSorted().join(" ") === r.toSorted().join(" ") && !ZQ({
      command: command_3
    }, "file");
  } catch (n) {
    return l(Error("reading a served shell line's app identifiers threw; the line counts as naming settings", {
      cause: n
    })), !1;
  }
}
function ZQ(e, n) {
  let command_4 = e.command;
  if (typeof command_4 !== "string") return !0;
  let {
      files: files,
      dirs: dirs
    } = m9e(),
    d = n !== "file_or_folder",
    o = n === "own_file",
    c = dirs.flatMap(item => [item, Es(item)]),
    u = CKr(),
    i = d ? u.paths : [],
    m = [...(o ? [] : [...OCo(), "managed-settings"]), ...(d ? u.globalConfigNames : [...f9e, ...c]), ...[...(o ? [] : files), ...i].flatMap(item => [item, Es(item)])],
    y = ICo(),
    g = d ? [...(o ? [] : f9e), ...B] : files.map(item => Z(item)).filter(item => item.includes("."));
  return ["", "/"].some(item => {
    let p = A(command_4, item);
    if (m.some(E => p.includes(A(E, item)))) return !0;
    let S = y.some(E => new RegExp(`${La(A(E, item))}(?![a-z0-9_])`).test(p)),
      _ = g.some(E => new RegExp(`(?<![a-z0-9_])${La(A(E, item))}(?![a-z0-9_])`).test(p));
    if (!d) return S || _;
    return _ && (S || c.some(E => p.includes(A(E, item)))) || (o ? [] : [...y, ...c]).some(E => new RegExp(`${La(A(E, item))}(?![a-z0-9_-])(?=((?:/+(?:\\.(?![a-z0-9_.-]))?)*))\\1(?!\\.?[a-z0-9_-])`).test(p));
  });
}
function A(e, n) {
  return mo(e.normalize("NFKC")).replace(/['"`]/g, "").replaceAll("\\", n);
}
function G(e) {
  let decisionReason = e.decisionReason;
  if (decisionReason?.type === "subcommandResults") {
    for (let t of decisionReason.reasons.values()) if (t.behavior === "ask" && G(t)) return !0;
    return !1;
  }
  if (decisionReason === void 0) return e.blockedPath === void 0;
  if (decisionReason.type === "safetyCheck" && !IW(decisionReason)) return Wpn(decisionReason) || e.blockedPath === void 0;
  return decisionReason.type === "other";
}
async function te(e, n, t = !1) {
  let s = await R2t(e);
  if (s.kind !== "simple") return "uncertain";
  let r = s.bareAssignmentNames.some(R),
    d = [n],
    o = !0,
    c = !1,
    u = !0,
    i = 0,
    m = s.hasLoop !== !1 && ya(Q, {
      safe: !0
    });
  for (let y of s.commands) {
    let {
      simple: simple,
      wrapperWords: wrapperWords,
      pathSpelled: pathSpelled,
      doubt: doubt
    } = z(y);
    if (doubt || se(simple)) r = !0;
    let S = U(simple, d);
    if (S !== void 0 && m) r = !0;
    if (S === "unknown") o = !1;else if (S !== void 0) {
      if (d = S, simple.argv.slice(1).some(j)) o = !1;
    }
    let _ = igs(simple);
    if (_.writesUnseen) r = !0;
    if (!_.known && S === void 0 && simple.argv.length > 0) u = !1;
    let E = f => C(f) || f.startsWith("~") ? [n] : d,
      O = [...wrapperWords, ...(_.known && !pathSpelled ? [] : simple.argv.slice(1)), ...simple.envVars.map(item => item.value)].flatMap(item => V(item));
    if (!_.known && S === void 0 && simple.argv.length > 0 && d.some(item => P2t(".", item))) r = !0;
    if (!o && O.some(item => item !== "" && !C(item) && !item.startsWith("~") && P2t(item, b(n, ".claude")))) r = !0;
    for (let f of [...O, ..._.landings]) if (f !== "" && E(f).some(item => P2t(f, item))) r = !0;
    for (let f of _.written) {
      if (i++, i > T) return "uncertain";
      if (bi(f) || E(f) === d && !o) r = !0;
      for (let w of E(f)) {
        let D = P(f, w);
        if (D === "settings") return "settings";
        if (D === "uncertain") r = !0;
      }
    }
    for (let f of _.copySources) {
      if (i++, i > T) return "uncertain";
      if (E(f).some(item => P(f, item) === "settings")) c = !0;else if (E(f).some(item => oe(f, item))) r = !0;
    }
  }
  if (r || t && !(c && u)) return "uncertain";
  return "none";
}
var N = new Set(["HOME", "CDPATH", "PWD", "OLDPWD"]),
  re = /^-[^-]*[CD]|^--chd/;
async function A8o(e, n) {
  let t = await R2t(e);
  if (t.kind !== "simple" || t.hasLoop !== !1) return "unparsed";
  let s = t.bareAssignmentNames.some(item => N.has(item)),
    directories = [n],
    d = !1,
    o = [];
  for (let c of t.commands) {
    if (c.envVars.some(item => N.has(item.name)) || c.argv.some(item => item.includes("=") && N.has(item.split(/\+?=/, 1)[0] ?? ""))) s = !0;
    let {
        simple: simple_2,
        wrapperWords: wrapperWords_2
      } = z(c),
      mayBeElsewhere = d,
      y = U(simple_2, directories);
    if (y === "unknown" || y !== void 0 && (s || simple_2.argv.slice(1).some(j))) d = !0;
    if (y !== void 0 && y !== "unknown") directories = y;
    let g = wrapperWords_2.some(item => re.test(item));
    for (let h of [{
      list: c.argv,
      directories: g ? [] : directories,
      mayBeElsewhere: mayBeElsewhere || g
    }, {
      list: [...c.envVars.map(item => item.value), ...c.redirects.filter(item => item.op !== "<<" && item.op !== "<<<").map(item => item.target)],
      directories: directories,
      mayBeElsewhere: mayBeElsewhere
    }]) for (let a of h.list) for (let word of V(a)) o.push({
      word: word,
      directories: h.directories,
      mayBeElsewhere: h.mayBeElsewhere
    });
  }
  return o;
}
function V(e) {
  return [e, ...(e.includes("=") ? [e.slice(e.indexOf("=") + 1)] : []), ...(/^-[^-]./.test(e) ? Array.from({
    length: e.length - 2
  }, (n, t) => e.slice(t + 2)) : [])];
}
function z(simple_3) {
  let [n, ...t] = simple_3.argv;
  if (n === void 0) return {
    simple: simple_3,
    wrapperWords: [],
    pathSpelled: !1,
    doubt: !1
  };
  let s = [F(n), ...t],
    argv_2 = ZF($at(s)),
    d = s.length - argv_2.length,
    o = d >= 0 && argv_2.every((item, index) => item === s[d + index]),
    wrapperWords_3 = o ? s.slice(0, d) : s,
    u = o && d === 0 ? n : argv_2[0],
    i = u === void 0 ? void 0 : F(u);
  return {
    simple: o && d === 0 && n === s[0] ? simple_3 : {
      ...simple_3,
      argv: argv_2,
      text: ho(argv_2)
    },
    wrapperWords: wrapperWords_3,
    pathSpelled: n !== s[0] || u !== void 0 && u !== i,
    doubt: !o || !k(n) || [...wrapperWords_3, ...(u === void 0 ? [] : [u])].some(bi) || wrapperWords_3.some(item => item.startsWith("-") && item !== "-" && item !== "--" || M(/^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(item)?.[1] ?? "")) || u !== void 0 && i !== void 0 && (!k(u) || i.startsWith("-") || J.has(i))
  };
}
function F(e) {
  return e.replace(I() === "windows" ? /^.*[\\/]/ : /^.*\//, "");
}
function se(e) {
  let [n, ...t] = e.argv;
  return e.envVars.some(item => M(item.name)) || n !== void 0 && q.has(n) && t.some(item => {
    let r = item.split(/\+?=/, 1)[0] ?? "";
    return bi(r) || R(r);
  });
}
function P(e, n) {
  let t = pD(e, n, pd(), "write");
  if (t.allowed) return "none";
  if (t.decisionReason?.type === "safetyCheck") {
    if (IW(t.decisionReason)) return "settings";
    return Wpn(t.decisionReason) ? "uncertain" : "none";
  }
  if (t.decisionReason?.type !== "other") return "none";
  return P2t(e, n) ? "settings" : "uncertain";
}
function oe(e, n) {
  let t = pD(e, n, pd(), "write");
  return !t.allowed && t.decisionReason?.type === "safetyCheck" && Wpn(t.decisionReason);
}
function P2t(e, n) {
  let t = b(n, nu(I() === "windows" ? e.replaceAll("\\", "/") : e)),
    s = PG(t, [t]);
  return !s.safe && IW(s);
}
function U(e, n) {
  let [t, ...s] = e.argv;
  if (t === "popd") return "unknown";
  if (t !== "cd" && t !== "chdir" && t !== "pushd") return;
  let r = [],
    d = !1;
  for (let i of s) {
    if (!d) {
      if (i === "--") {
        d = !0;
        continue;
      }
      if (i.startsWith("-") && i !== "-") continue;
      d = !0;
    }
    r.push(i);
  }
  let o = r[0];
  if (o === void 0) return t === "pushd" ? "unknown" : W(n, [x()]);
  if (r.length > 1 || o === "-" || t === "pushd" && /^[+-]\d+$/.test(o) || bi(o) || P(o, n[0] ?? x()) === "uncertain") return "unknown";
  let c = nu(o),
    u = C(c) ? [c] : n.map(item => b(item, c));
  return W(n, [...u, ...u.flatMap(ie)]);
}
function j(e) {
  let n = !1;
  for (let t of e.split(/[\\/]/)) if (t === "..") {
    if (n) return !0;
  } else if (t !== "" && t !== ".") n = !0;
  return !1;
}
function ie(e) {
  try {
    return xo(e).filter(item => item !== e);
  } catch {
    return [];
  }
}
function W(e, n) {
  let t = L([...e, ...n]);
  return t.length > Y ? "unknown" : t;
}
export { NCe, R2t, A2t, x2t, nnr, CKr, RKr, ZQ, A8o, P2t };