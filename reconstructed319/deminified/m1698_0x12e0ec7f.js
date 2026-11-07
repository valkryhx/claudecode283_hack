// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Df } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Txe } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { ps } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Qo } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ks } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { pGn, KV } from "B:/~BUN/root/chunk-r8p1hzqw.js";
import { $Ut, O_t, I_t, upe, D_t } from "B:/~BUN/root/chunk-qt1wryw6.js";
import { mAe, xUt } from "B:/~BUN/root/chunk-sjfczffk.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { iO, yE, V2, Hi, zI, iz, Etn, P7e, gse, NF, zLe, c3, aht } from "B:/~BUN/root/chunk-4xvtrfzh.js";
import { $d } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { G1e, sSi, GB, DPt, al } from "B:/~BUN/root/chunk-27h4st9h.js";
import { To, Zmt, eht, Dks, Lks, l3 } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Kze, qze, uZt, N0t } from "B:/~BUN/root/chunk-rv3pfsrw.js";
import { _1 } from "B:/~BUN/root/chunk-pw7914mv.js";
import { fD } from "B:/~BUN/root/chunk-b7bhhce8.js";
import { t4t } from "B:/~BUN/root/chunk-qb01jdc4.js";
import { _t } from "B:/~BUN/root/chunk-3a409jmn.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { no } from "B:/~BUN/root/chunk-qszgzq5m.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var q = "tengu_violin_lining";
function LUe() {
  return _t(q, {
    safe: !0
  });
}
async function Xhn(e) {
  return xUt(() => mAe(() => D_t(e, async () => {
    if (!LUe()) return zI(e);
    let n = await V2(e);
    if (n === yE && e.trim() !== "") return {
      kind: "too-complex",
      reason: "the parser gave up on the command"
    };
    return n === null ? {
      kind: "simple",
      commands: [],
      bareAssignmentNames: []
    } : iz(e, n);
  })));
}
async function Jhn(e) {
  let n = await V2(e);
  return n !== null && n !== yE && Etn(e, n);
}
import { homedir as W } from "os";
import { basename as J, isAbsolute as O, join as Q, resolve as k } from "path";
var ee = 16,
  B = 64,
  ne = "tengu_nifty_pine";
function P(e) {
  return aht(e) || e === "PWD" || e === "OLDPWD";
}
function G(e) {
  return !/^(?:LANG|LANGUAGE|LC_[A-Z]+)$/i.test(e) && P(e);
}
var te = new Set(["export", "declare", "typeset", "readonly", "local", "unset"]),
  re = new Set([...gse, ...P7e, ...NF, ...zLe, ...c3, "xargs", "parallel"]),
  z = [uZt, Kze, qze],
  se = "tengu_toasty_hammock";
function M(e) {
  return e === "[" || e === "[[" || /^[A-Za-z0-9_.+:~/-]+$/.test(e);
}
async function Qhn(e, n, t, r) {
  let s = t.behavior === "ask" && al(t.decisionReason, KV) !== void 0;
  if (e.name === Me) {
    if (typeof n.command !== "string") return "uncertain";
    let i = await U(n.command, r, s);
    return i === "none" && t.behavior === "ask" && al(t.decisionReason, pGn) !== void 0 ? "uncertain" : i;
  }
  if (e.name !== kt) return "none";
  if (s) return "settings";
  return t.behavior === "ask" && I(t) ? "uncertain" : "none";
}
async function v2t(e, n, t, r = !1) {
  if (e.name !== Me && e.name !== kt || !X7(n, "file") || !(await kGr(e, n, t))) return !1;
  let command = n.command;
  return !(r && e.name === Me && typeof command === "string" && (await gUo(command)));
}
async function kGr(e, n, t) {
  try {
    let command_2 = n.command;
    return e.name === kt && typeof command_2 === "string" ? !t4t(command_2, await G1e(command_2)) : !e.isReadOnly(n, t);
  } catch (r) {
    return a(Error("a served shell line's read-only check threw; the line counts as not read-only", {
      cause: r
    })), !0;
  }
}
function hUo() {
  return {
    paths: [...N0t(), ...fD().flatMap(item => z.map(n => Q(item, n)))],
    globalConfigNames: Txe.map(item => `.claude${item}.json`)
  };
}
var N = {
    simctl: ["launch", "terminate", "uninstall", "get_app_container", "appinfo", "privacy"],
    open: ["-b"],
    defaults: ["read", "read-type", "write", "delete"]
  },
  V = String.raw`(?:[a-z][a-z0-9_-]*\.){2,}claude`,
  regExp = new RegExp(`^${V}$`, "i"),
  ie = /[|`\\(]|\$[{_]|\$BASH|<<|\bfunction\b/;
async function gUo(e) {
  if (ie.test(e)) return !1;
  try {
    let n = await Xhn(e);
    if (n.kind !== "simple" || n.bareAssignmentNames.some(P) || upe(e)) return !1;
    let t = [],
      command_3 = e.replace(new RegExp(String.raw`(^|\s)(${V})(?=$|[\s;&])`, "gi"), (o, l, u) => (t.push(u), `${l}APPID`)),
      s = [],
      i = 0;
    for (let {
      argv: argv,
      envVars: envVars,
      redirects: redirects
    } of n.commands) {
      if (envVars.some(item => P(item.name)) || redirects.some(({
        op: op,
        target: target
      }) => target !== "/dev/null" && !(op === ">&" && (target === "1" || target === "2")))) return !1;
      let d = argv[0],
        p = d === "simctl" ? 0 : (d === "xcrun" || d === "/usr/bin/xcrun") && argv[1] === "simctl" ? 1 : void 0,
        g = p === void 0 ? void 0 : argv[p + 1],
        S = p !== void 0 && g !== void 0 && N.simctl.includes(g) ? p + 1 : void 0,
        h = (d === "defaults" || d === "/usr/bin/defaults") && argv[1] !== void 0 && N.defaults.includes(argv[1]),
        f = d === "open" || d === "/usr/bin/open";
      if (p === void 0 && !h && !f && d !== void 0 && d !== "sleep") return !1;
      for (let [m, y] of argv.entries()) {
        if (!regExp.test(y)) continue;
        s.push(y);
        let E = argv[m - 1];
        if (S !== void 0 && m > S || h && m === 2 || f && E !== void 0 && N.open.includes(E)) i += 1;
      }
    }
    return t.length > 0 && i === s.length && t.toSorted().join(" ") === s.toSorted().join(" ") && !X7({
      command: command_3
    }, "file");
  } catch (n) {
    return a(Error("reading a served shell line's app identifiers threw; the line counts as naming settings", {
      cause: n
    })), !1;
  }
}
function X7(e, n) {
  let command_4 = e.command;
  if (typeof command_4 !== "string") return !0;
  let {
      files: files,
      dirs: dirs
    } = eht(),
    i = n !== "file_or_folder",
    o = n === "own_file",
    l = dirs.flatMap(item => [item, ks(item)]),
    u = hUo(),
    d = i ? u.paths : [],
    p = [...(o ? [] : [...Dks(), "managed-settings"]), ...(i ? u.globalConfigNames : [...Zmt, ...l]), ...[...(o ? [] : files), ...d].flatMap(item => [item, ks(item)])],
    g = Lks(),
    S = i ? [...(o ? [] : Zmt), ...z] : files.map(item => J(item)).filter(item => item.includes("."));
  return ["", "/"].some(item => {
    let m = v(command_4, item);
    if (p.some(_ => m.includes(v(_, item)))) return !0;
    let y = g.some(_ => new RegExp(`${Qo(v(_, item))}(?![a-z0-9_])`).test(m)),
      E = S.some(_ => new RegExp(`(?<![a-z0-9_])${Qo(v(_, item))}(?![a-z0-9_])`).test(m));
    if (!i) return y || E;
    return E && (y || l.some(_ => m.includes(v(_, item)))) || (o ? [] : [...g, ...l]).some(_ => new RegExp(`${Qo(v(_, item))}(?![a-z0-9_-])(?=((?:/+(?:\\.(?![a-z0-9_.-]))?)*))\\1(?!\\.?[a-z0-9_-])`).test(m));
  });
}
function v(e, n) {
  return To(e.normalize("NFKC")).replace(/['"`]/g, "").replaceAll("\\", n);
}
function I(e) {
  let decisionReason = e.decisionReason;
  if (decisionReason?.type === "subcommandResults") {
    for (let t of decisionReason.reasons.values()) if (t.behavior === "ask" && I(t)) return !0;
    return !1;
  }
  if (decisionReason === void 0) return e.blockedPath === void 0;
  if (decisionReason.type === "sandboxOverride") return decisionReason.replaces !== void 0 && I(decisionReason.replaces);
  if (decisionReason.type === "safetyCheck" && !KV(decisionReason)) return pGn(decisionReason) || e.blockedPath === void 0;
  return decisionReason.type === "other";
}
async function U(e, n, t = !1) {
  let r = I_t(),
    {
      result: result,
      fired: fired
    } = await $Ut(r, () => Xhn(e));
  if (result.kind !== "simple") return fired && !r && (await O_t(() => U(e, n, t))) === "settings" ? "settings" : "uncertain";
  let o = result.bareAssignmentNames.some(P) || result.laterLoopPassesDiffer === !0 || upe(e) || (await Jhn(e)),
    l = [n],
    u = !0,
    d = !1,
    p = !1,
    g = !0,
    S = 0,
    h = result.hasLoop !== !1 && _t(se, {
      safe: !0
    });
  for (let f of result.commands) {
    let {
      simple: simple,
      wrapperWords: wrapperWords,
      pathSpelled: pathSpelled,
      doubt: doubt
    } = K(f);
    if (doubt || le(simple) || d) o = !0;
    let w = Z(simple, l);
    if (w !== void 0 && h) o = !0;
    if (w === "unknown") u = !1;else if (w !== void 0) {
      if (l = w, simple.argv.slice(1).some(Y)) u = !1;
    }
    if (w !== void 0 && !X(simple)) u = !1, d = !0;
    let A = sSi(simple);
    if (A.writesUnseen) o = !0;
    if (!A.known && w === void 0 && simple.argv.length > 0) g = !1;
    let C = c => O(c) || c.startsWith("~") ? [n] : l,
      D = [...wrapperWords, ...(A.known && !pathSpelled ? [] : simple.argv.slice(1)), ...simple.envVars.map(item => item.value)].flatMap(item => j(item));
    if (!A.known && w === void 0 && simple.argv.length > 0 && l.some(item => Zhn(".", item))) o = !0;
    if (!u && D.some(item => item !== "" && !O(item) && !item.startsWith("~") && Zhn(item, k(n, ".claude")))) o = !0;
    for (let c of [...D, ...A.landings]) if (c !== "" && C(c).some(item => Zhn(c, item))) o = !0;
    for (let c of A.written) {
      if (S++, S > B) return "uncertain";
      if (Hi(c) || C(c) === l && !u) o = !0;
      for (let R of C(c)) {
        let F = T(c, R);
        if (F === "settings") return "settings";
        if (F === "uncertain") o = !0;
      }
    }
    for (let c of A.copySources) {
      if (S++, S > B) return "uncertain";
      if (C(c).some(item => T(c, item) === "settings")) p = !0;else if (C(c).some(item => fe(c, item))) o = !0;
    }
  }
  if (o || t && !(p && g)) return "uncertain";
  return "none";
}
var b = new Set(["HOME", "CDPATH", "PWD", "OLDPWD"]),
  ae = /^-[^-]*[CD]|^--chd/;
async function yXs(e, n) {
  let t = await Xhn(e);
  if (t.kind !== "simple" || t.hasLoop !== !1) return "unparsed";
  let r = t.bareAssignmentNames.some(item => b.has(item)),
    directories = [n],
    i = !1,
    o = [];
  for (let l of t.commands) {
    if (l.envVars.some(item => b.has(item.name)) || l.argv.some(item => item.includes("=") && b.has(item.split(/\+?=/, 1)[0] ?? ""))) r = !0;
    let {
        simple: simple_2,
        wrapperWords: wrapperWords_2
      } = K(l),
      mayBeElsewhere = i,
      g = Z(simple_2, directories);
    if (g === "unknown" || g !== void 0 && (r || simple_2.argv.slice(1).some(Y))) i = !0;
    if (g !== void 0 && !X(simple_2)) i = !0;
    if (g !== void 0 && g !== "unknown") directories = g;
    let S = wrapperWords_2.some(item => ae.test(item));
    for (let h of [{
      list: l.argv,
      directories: S ? [] : directories,
      mayBeElsewhere: mayBeElsewhere || S
    }, {
      list: [...l.envVars.map(item => item.value), ...l.redirects.filter(item => item.op !== "<<" && item.op !== "<<<").map(item => item.target)],
      directories: directories,
      mayBeElsewhere: mayBeElsewhere
    }]) for (let f of h.list) for (let word of j(f)) o.push({
      word: word,
      directories: h.directories,
      mayBeElsewhere: h.mayBeElsewhere
    });
  }
  return o;
}
function j(e) {
  return [e, ...(e.includes("=") ? [e.slice(e.indexOf("=") + 1)] : []), ...(/^-[^-]./.test(e) ? Array.from({
    length: e.length - 2
  }, (n, t) => e.slice(t + 2)) : [])];
}
function K(simple_3) {
  let [n, ...t] = simple_3.argv;
  if (n === void 0) return {
    simple: simple_3,
    wrapperWords: [],
    pathSpelled: !1,
    doubt: !1
  };
  let r = [iO(n), ...t],
    argv_2 = GB(DPt(r)),
    i = r.length - argv_2.length,
    o = i >= 0 && argv_2.every((item, index) => item === r[i + index]),
    wrapperWords_3 = o ? r.slice(0, i) : r,
    u = o && i === 0 ? n : argv_2[0],
    d = u === void 0 ? void 0 : iO(u);
  return {
    simple: o && i === 0 && n === r[0] ? simple_3 : {
      ...simple_3,
      argv: argv_2,
      text: no(argv_2)
    },
    wrapperWords: wrapperWords_3,
    pathSpelled: n !== r[0] || u !== void 0 && u !== d || wrapperWords_3.some(item => item !== iO(item)),
    doubt: !o || !M(n) || [...wrapperWords_3, ...(u === void 0 ? [] : [u])].some(Hi) || wrapperWords_3.some(item => item.startsWith("-") && item !== "-" && item !== "--" || G(/^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(item)?.[1] ?? "")) || u !== void 0 && d !== void 0 && (!M(u) || d.startsWith("-") || re.has(d))
  };
}
function le(e) {
  let [n, ...t] = e.argv;
  return e.envVars.some(item => G(item.name)) || n !== void 0 && te.has(n) && t.some(item => {
    let s = item.split(/\+?=/, 1)[0] ?? "";
    return Hi(s) || P(s);
  });
}
function T(e, n) {
  let t = _1(e, n, $d(), "write");
  if (t.allowed) return "none";
  if (t.decisionReason?.type === "safetyCheck") {
    if (KV(t.decisionReason)) return "settings";
    return pGn(t.decisionReason) ? "uncertain" : "none";
  }
  if (t.decisionReason?.type !== "other") return "none";
  return Zhn(e, n) ? "settings" : "uncertain";
}
function fe(e, n) {
  let t = _1(e, n, $d(), "write");
  return !t.allowed && t.decisionReason?.type === "safetyCheck" && pGn(t.decisionReason);
}
function Zhn(e, n) {
  let t = k(n, Df(x() === "windows" ? e.replaceAll("\\", "/") : e)),
    r = l3(t, [t]);
  return !r.safe && KV(r);
}
function Z(e, n) {
  let [t, ...r] = e.argv;
  if (t === "popd") return "unknown";
  if (t !== "cd" && t !== "chdir" && t !== "pushd") return;
  let s = [],
    i = !1;
  for (let d of r) {
    if (!i) {
      if (d === "--") {
        i = !0;
        continue;
      }
      if (d.startsWith("-") && d !== "-") continue;
      i = !0;
    }
    s.push(d);
  }
  let o = s[0];
  if (o === void 0) return t === "pushd" ? "unknown" : H(n, [W()]);
  if (s.length > 1 || o === "-" || t === "pushd" && /^[+-]\d+$/.test(o) || Hi(o) || T(o, n[0] ?? W()) === "uncertain") return "unknown";
  let l = Df(o),
    u = O(l) ? [l] : n.map(item => k(item, l));
  return H(n, [...u, ...u.flatMap(ue)]);
}
function X(e) {
  let [n, ...t] = e.argv;
  if (n !== "cd" && n !== "chdir" && n !== "pushd") return !0;
  if (!_t(ne, {
    safe: !0
  })) return !0;
  let r = [],
    s = !1;
  for (let i of t) {
    if (!s) {
      if (i === "--") {
        s = !0;
        continue;
      }
      if (i.startsWith("-") && i !== "-") {
        if (!/^-[qsLP]+$/.test(i)) return !1;
        continue;
      }
      s = !0;
    }
    r.push(i);
  }
  return r.length < 2 && (r[0] === void 0 || !/^[+-]\d+$/.test(r[0]));
}
function Y(e) {
  let n = !1;
  for (let t of e.split(/[\\/]/)) if (t === "..") {
    if (n) return !0;
  } else if (t !== "" && t !== ".") n = !0;
  return !1;
}
function ue(e) {
  try {
    return ps(e).filter(item => item !== e);
  } catch {
    return [];
  }
}
function H(e, n) {
  let t = L([...e, ...n]);
  return t.length > ee ? "unknown" : t;
}
export { LUe, Xhn, Jhn, Qhn, v2t, kGr, hUo, gUo, X7, yXs, Zhn };