// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { qr, Jd, pp, tM } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ple, tln, yle } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { nT } from "B:/~BUN/root/chunk-2swveyqa.js";
import { sa, xae, VL, AV, ZA, UT, qit, Mt, Eee, Zit, h4e, $Ee, qL, k1n, Tee, jEe, LAr, T1n } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { f3t, Jeo } from "B:/~BUN/root/chunk-cph4m8td.js";
import { jwt } from "B:/~BUN/root/chunk-gnzce1c4.js";
import { Ms } from "B:/~BUN/root/chunk-6492v1c5.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var W = be(ple(), 1);
import { lstat as P, open as se, opendir as le, realpath as X } from "fs/promises";
import { join as L } from "path";
var j = 8,
  Y = 4096,
  H = 2000,
  Z = 1024,
  l3t = 20000,
  c3t = 16777216,
  q = 2 * H,
  ae = /^[A-Za-z]:/;
function ue(e) {
  return e.length > 0 && e.length <= Y && Buffer.byteLength(e, "utf8") <= Y && xae(e) && !ae.test(e) && !e.includes("\\") && !tM.test(e) && Jd(e);
}
var ce = /[\x00-\x08\x0A-\x1F\x7F-\x9F]/,
  de = 4,
  ge = 2,
  fe = /\*+/g,
  pe = /\*\*+/g;
function G(e) {
  if (e.length > Z) return "too_long";
  if (ce.test(e) || !Jd(e)) return "control_character";
  return (e.match(fe)?.length ?? 0) > de || (e.match(pe)?.length ?? 0) > ge ? "too_many_wildcards" : null;
}
function me(e) {
  return G(e) === null;
}
function sze(e, t) {
  let n = Zit(e).flatMap(item => item.split("/").map((r, index, o) => ({
    part: r,
    holdsEntries: t || index < o.length - 1
  })));
  return n.some(({
    part: part
  }) => part.length === 0 || VL(part)) ? "filtered" : n.some(({
    part: part_2,
    holdsEntries: holdsEntries
  }) => holdsEntries && Eee.has(part_2)) ? "dependency_dir" : null;
}
var he = /[\p{Cc}\p{Cf}]/gu;
function _e(e) {
  return pp(e).replace(he, "\uFFFD");
}
var Q = ".git";
function rar(e) {
  let t = new Map(),
    n = i => {
      let r = t.get(i);
      if (r === void 0) {
        let s = L(e, i);
        r = P(L(s, Q)).then(() => !0, () => T1n(s)), t.set(i, r);
      }
      return r;
    };
  return async i => {
    let r = i.split("/");
    for (let s = 1; s < r.length; s++) if (await n(r.slice(0, s).join("/"))) return !0;
    return !1;
  };
}
var J = ".gitignore",
  D = 1048576,
  ke = 4 * jwt,
  DKo = () => null;
function K7e(e) {
  return qit(e);
}
function ee(e) {
  return typeof e === "object" && e !== null && "test" in e && typeof e.test === "function";
}
var ye = (() => {
  try {
    let e = W.default().add(["out/", "!keep"]),
      t = "_rules" in e ? e._rules : null;
    return ee(t) && t.test("a/out/", !0, "regex").ignored && !t.test("a/out/x", !0, "regex").ignored && t.test("keep", !0, "regex").unignored;
  } catch {
    return !1;
  }
})();
function z(e, t) {
  return ye && "_rules" in e && ee(e._rules) ? e._rules.test(t, !0, "regex") : e.test(t);
}
function Dwt(e, {
  ignoreCase: t
}) {
  let n = l => t ? l.normalize("NFC") : l,
    i = l => W.default({
      ignorecase: t
    }).add(yle(l.map(n), "dir_sync_folder_ignore")),
    r = i(e),
    s = new Map(),
    o = new Map(),
    a = new Set(),
    p = new Set(),
    k = l => {
      let c = s.get(l);
      if (c !== void 0 || !t || o.size === 0) return c === void 0 ? [] : [c];
      return (o.get(UT(l)) ?? []).flatMap(item => s.get(item) ?? []);
    },
    y = new Map(),
    b = l => {
      if (y.has(l)) return y.get(l);
      let c = l.lastIndexOf("/"),
        up = c > 0 ? b(l.slice(0, c)) : void 0,
        files = k(l),
        g = files.length > 0 ? {
          files: files,
          base: l.length,
          up: up
        } : up;
      return y.set(l, g), g;
    },
    h = (l, c) => {
      let d = c ? "/" : "",
        m = s.size > 0 ? l.lastIndexOf("/") : -1;
      for (let u = m > 0 ? b(l.slice(0, m)) : void 0; u !== void 0; u = u.up) {
        let C = n(l.slice(u.base + 1)) + d,
          M = u.files.map(({
            file: file
          }) => z(file, C));
        if (M.some(item => item.ignored)) return "ignored";
        if (M.some(item => item.unignored) && s.has(l.slice(0, u.base))) return "kept";
      }
      let g = z(r, n(l) + d);
      return g.ignored ? "ignored" : g.unignored ? "kept" : "unsaid";
    },
    S = {
      files: new Map(),
      directories: new Map()
    },
    N = new Set(),
    I = (l, c) => {
      let d = c ? S.directories : S.files,
        m = d.get(l);
      if (m !== void 0) return m;
      let g = h(l, c);
      return d.set(l, g), g;
    },
    F = l => a.has(l) || p.size > 0 && p.has(UT(l)),
    _ = (l, c) => {
      let d = l.lastIndexOf("/");
      if (d !== -1 && !N.has(l.slice(0, d))) for (let g = l.indexOf("/"); g !== -1; g = l.indexOf("/", g + 1)) {
        let u = l.slice(0, g);
        if (F(u) || I(u, !0) === "ignored") return !0;
      }
      let m = F(l) || I(l, c) === "ignored";
      if (c && !m) N.add(l);
      return m;
    },
    f = l => {
      let c = e.length,
        d = l.lastIndexOf("/");
      for (let m = d > 0 ? b(l.slice(0, d)) : void 0; m !== void 0; m = m.up) c += m.files.reduce((acc, {
        ruleCount: ruleCount
      }) => acc + ruleCount, 0);
      return c;
    };
  return {
    ignoresFile: l => _(l, !1),
    ignoresDirectory: l => _(l, !0),
    honourWithin: (l, c) => {
      if (c.length === 0 || s.has(l)) return !0;
      if (f(l) + c.length > q) return !1;
      if (s.set(l, {
        file: i(c),
        ruleCount: c.length
      }), t) {
        let d = UT(l);
        o.set(d, [...(o.get(d) ?? []), l]);
      }
      return S = {
        files: new Map(),
        directories: new Map()
      }, y = new Map(), N = new Set(), !0;
    },
    leaveOut: l => {
      if (a.add(l), t) p.add(UT(l));
      N = new Set();
    }
  };
}
function A(reason) {
  return {
    kind: "unusable",
    reason: reason
  };
}
function V() {
  return {
    kind: "lines",
    lines: [],
    adjusted: []
  };
}
var Re = 120;
function Y7e(e) {
  let t = _e(e),
    n = qr(t, Re);
  return '"' + n + (n.length < t.length ? "\u2026" : "") + '"';
}
function Lwt(e) {
  switch (e.reason) {
    case "unreadable":
      return "cannot be read";
    case "busy":
      return "could not be read just now (it was busy, or in use by another program)";
    case "linked":
      return "is a link or has a second name, so it is not trusted (replace it with a plain file)";
    case "too_large":
      return `is larger than sync honours (over ${String(D / 1048576)} MiB, more than ${H.toLocaleString("en-US")} rules, or a rule longer than ${Z.toLocaleString("en-US")} characters)`;
    case "too_many_rules_above":
      return `holds, together with the .gitignore files above it, more rules than sync applies to one path (${q.toLocaleString("en-US")}; shorten it or one of those above it)`;
    case "malformed":
      return e.fault === "control_character" ? `has a control character in line ${String(e.lineNumber)} (${Y7e(e.rule)}), which no line of a text file holds, so it is not trusted` : `has a rule in line ${String(e.lineNumber)} (${Y7e(e.rule)}) that cannot be read as a pattern (an unclosed bracket, say), so it is not trusted`;
  }
}
var oar = `the .gitignore files in this folder's subdirectories together hold more than sync reads (over ${l3t.toLocaleString("en-US")} rules or ${String(c3t / 1048576)} MiB in all); trim or remove some of them to sync this folder`;
async function Nwt(e) {
  return d3t(e, "");
}
async function d3t(e, t, n) {
  let i = L(e, t, J),
    r;
  try {
    r = await P(i, {
      bigint: !0
    });
  } catch (error) {
    let o = v(error);
    return Hwt(o) ? V() : A(K(o) ? "busy" : "unreadable");
  }
  if (r.isSymbolicLink()) return A("linked");
  if (!r.isFile()) return V();
  if (r.nlink !== 1n) return A("linked");
  if (r.size > BigInt(D)) return A("too_large");
  if (n !== void 0) {
    if (n.remaining -= Number(r.size), n.remaining < 0) return A("too_large");
  }
  try {
    let s = await se(i, sa());
    try {
      let o = await s.stat({
        bigint: !0
      });
      if (!o.isFile() || o.dev !== r.dev || o.ino !== r.ino || o.nlink !== 1n) return A("linked");
      let a = await $Ee(s, D + 1);
      if (a.length > D) return A("too_large");
      if (n !== void 0 && a.length > Number(r.size)) {
        if (n.remaining -= a.length - Number(r.size), n.remaining < 0) return A("too_large");
      }
      return ze(a.toString("utf8").replace(/^\uFEFF/, "").split(/\r?\n/), {
        foldsCase: K7e(e)
      });
    } finally {
      await s.close();
    }
  } catch (error) {
    let o = v(error);
    return A(Hwt(o) || K(o) ? "busy" : "unreadable");
  }
}
var Ie = /^E(?:MFILE|NFILE|AGAIN|BUSY|INTR)$/,
  Ee = /^(?:EUNKNOWN$|UNKNOWN$|Unknown system error)/;
function K(e, t = O()) {
  return e !== void 0 && (Ie.test(e) || t === "windows" && (nT.has(e) || Ee.test(e)));
}
function ne(e) {
  return tln(e) === null && tln(e.normalize("NFC")) === null;
}
var Se = /[[\\]/,
  te = /^\*{2,}$/;
function Ne(e) {
  let t = e.startsWith("/"),
    n = /^[^*?[\\/]*/.exec(t ? e.slice(1) : e)?.[0] ?? "";
  return (t ? "/" : "") + n + "*";
}
function Ae(e) {
  if (e.startsWith("!") || Se.test(e)) return null;
  let t = re(e.replace(/\/$/, "").split("/"));
  return Array.from({
    length: t.length - 1
  }, (n, i) => Fe(t.slice(0, t.length - 1 - i))).filter(item => item.some(item => item !== "")).map(item => (item.length === 1 && item[0] !== "" ? "/" : "") + item.join("/") + "/").find(item => me(item) && ne(item)) ?? null;
}
function re(e) {
  return e.map(item => te.test(item) ? "**" : item).filter((item, index, i) => !(item === "**" && i[index - 1] === "**"));
}
function Fe(e) {
  return e.slice(0, e.findLastIndex(t => !te.test(t)) + 1);
}
var we = "*[]\\ #!";
function Le(e, {
  foldsCase = !0
} = {}) {
  let n = e.startsWith("!"),
    i = n ? e.slice(1) : e,
    r = xe(i),
    s = r.replace(Me, _ => "?".repeat(_.length)),
    o = [],
    a = s !== r,
    p = !1,
    k = !1,
    y = !1,
    b = !1,
    h = 0;
  while (h < s.length) {
    let _ = s[h] ?? "";
    if (_ === "\\" && h + 1 < s.length) {
      let f = s[h + 1] ?? "";
      if (we.includes(f)) y ||= f === "\\", o.push(_ + f);else b ||= f === "/" && (o.length === 0 || h + 2 === s.length || o.at(-1) === "*" && o.at(-2) === "*"), a ||= f === "?", o.push(f);
      h += 2;
      continue;
    }
    if (_ === ie) {
      a = !0, o.push("?"), h += 1;
      continue;
    }
    if (_ === "[") {
      let f = We(s, h);
      if (f === null) {
        p = !0, o.push(s.slice(h));
        break;
      }
      a ||= !f.plain || f.nonAscii, k ||= f.foldsApart, o.push(f.plain && !f.nonAscii ? s.slice(h, f.end) : "?"), h = f.end;
      continue;
    }
    o.push(_), h += 1;
  }
  let S = Oe(o).join("").replace(Pe, "?"),
    N = re(S.split("/")).join("/"),
    I = N === "/**" ? "**" : N,
    widened = a || b || S !== o.join("");
  return {
    line: (n ? "!" : "") + I,
    widened: widened,
    readWider: widened || p || y || foldsCase && k || Be.test(I) || Ge.test(I) || Te.test(r) || foldsCase && oe.test(I) || I.includes("?")
  };
}
function xe(e) {
  let t = e.length;
  while (t > 0 && e[t - 1] === " " && !Ce(e, t - 1)) t -= 1;
  return e.slice(0, t);
}
function Oe(e) {
  let t = r => r === "?" || r === "*",
    n = [],
    i = 0;
  for (let r = 0; r <= e.length; r += 1) {
    if (r < e.length && t(e[r] ?? "")) continue;
    let s = e.slice(i, r);
    if (n.push(...(U(s, o => o === "?") >= 2 ? ["?", "*"] : s)), r < e.length) n.push(e[r] ?? "");
    i = r + 1;
  }
  return n;
}
function Ce(e, t) {
  let n = 0;
  while (n < t && e[t - 1 - n] === "\\") n += 1;
  return n % 2 === 1;
}
var Me = /[\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/,
  Te = /\t$/,
  De = /^[ \t\r]*$/,
  Pe = /^\uFEFF/,
  Be = /\/\*\*\/$/,
  Ge = /\\\*$/;
function We(e, t) {
  let n = e[t + 1] === "!" || e[t + 1] === "^",
    i = t + 1 + (n ? 1 : 0),
    r = e[i] === "]",
    s = je(e, i + (r ? 1 : 0), r);
  if (s === null) return null;
  let o = e.slice(i, s);
  return {
    end: s + 1,
    nonAscii: oe.test(o),
    foldsApart: [...o.replace($e, "")].some(item => Ue.test(item) && !o.includes(item.toLowerCase())),
    plain: !n && !r && !ve.test(o) && !o.includes("[:") && !He(o)
  };
}
var ve = /[\\/*?]/,
  oe = /[^\x00-\x7f]/,
  Ue = /^[A-Z]$/,
  $e = /.-[^\]]/g;
function He(e) {
  let t = null;
  for (let n = 0; n < e.length; n += 1) {
    let i = e[n] === "\\" && n + 1 < e.length,
      r = i ? e[n + 1] ?? "" : e[n] ?? "";
    if (n += i ? 1 : 0, r === "-" && !i && t !== null && n + 1 < e.length) {
      let s = e[n + 1] === "\\" && n + 2 < e.length,
        o = s ? e[n + 2] ?? "" : e[n + 1] ?? "";
      if (t <= "/" && "/" <= o || t > o) return !0;
      n += s ? 2 : 1, t = null;
    } else t = r;
  }
  return !1;
}
function je(e, t, n) {
  let i = n;
  for (let r = t; r < e.length; r += 1) if (e[r] === "\\") r += 1, i = !0;else if (e[r] === "-" && i && r + 1 < e.length && e[r + 1] !== "]") r += e[r + 1] === "\\" ? 2 : 1, i = !1;else if (e[r] === "[" && e[r + 1] === ":") {
    let s = e.indexOf("]", r + 2),
      o = s > r + 2 && e[s - 1] === ":";
    r = o ? s : r, i = !o;
  } else if (e[r] === "]") return r;else i = !0;
  return null;
}
var Ye = /^!\s*$/;
function ze(e, t = {}) {
  let n = e.map((o, index) => ({
    rule: o,
    lineNumber: index + 1
  })).filter(({
    rule: rule
  }) => !De.test(rule) && !rule.startsWith("#") && !Ye.test(rule)).map(item => {
    let fault = G(item.rule);
    if (fault === "too_long" || fault === "control_character") return {
      ...item,
      line: item.rule,
      widened: !1,
      fault: fault
    };
    let {
        line: line,
        widened: widened_2,
        readWider: readWider
      } = Le(item.rule, t),
      widened_3 = item.rule.startsWith("!") ? readWider : widened_2;
    return {
      ...item,
      line: line,
      widened: widened_3,
      fault: G(line)
    };
  });
  if (n.length > H || n.some(({
    fault: fault_2
  }) => fault_2 === "too_long")) return A("too_large");
  let i = n.find(({
    line: line_2,
    fault: fault_3
  }) => fault_3 === "control_character" || !ne(line_2));
  if (i !== void 0) return {
    kind: "unusable",
    reason: "malformed",
    fault: i.fault === "control_character" ? "control_character" : "uncompilable",
    lineNumber: i.lineNumber,
    rule: i.rule
  };
  let r = n.filter(({
      widened: widened_4,
      fault: fault_4
    }) => !widened_4 && fault_4 === null),
    adjusted = n.filter(({
      widened: widened_5,
      fault: fault_5
    }) => widened_5 || fault_5 === "too_many_wildcards").map(({
      rule: rule_2,
      line: line_3,
      lineNumber: lineNumber,
      fault: fault_6
    }) => ({
      lineNumber: lineNumber,
      rule: rule_2,
      appliedAs: rule_2.startsWith("!") ? null : fault_6 === "too_many_wildcards" ? Ae(line_3) ?? Ne(line_3) : line_3,
      why: fault_6 === "too_many_wildcards" ? "wildcards" : "spelling"
    }));
  return {
    kind: "lines",
    lines: [...r.map(({
      line: line_4
    }) => line_4), ...adjusted.flatMap(({
      appliedAs: appliedAs
    }) => appliedAs === null ? [] : [appliedAs])],
    adjusted: adjusted
  };
}
function Hwt(e) {
  return e === "ENOENT" || e === "ENOTDIR";
}
async function Ve(e, t, n, i, r, s) {
  try {
    if (n !== "" && (await X(L(e, n))) !== L(t, n)) return {
      kind: "unreadable"
    };
    let ignoreFile = r !== null && n !== "" ? await d3t(e, n, r) : null,
      a = [];
    for await (let dirent of await le(L(e, n))) {
      if (i.remaining <= 0 || Mt(s)) return {
        kind: "too_many"
      };
      if (i.remaining--, n !== "" && dirent.name === Q) return {
        kind: "nested_repository"
      };
      a.push({
        path: n === "" ? dirent.name : n + "/" + dirent.name,
        dirent: dirent
      });
    }
    if (n !== "" && (await Ke(e, n, a))) return {
      kind: "nested_repository"
    };
    return {
      kind: "entries",
      entries: a.toSorted(Tee),
      ignoreFile: ignoreFile
    };
  } catch {
    return {
      kind: "unreadable"
    };
  }
}
async function Ke(e, t, n) {
  let i = n.filter(({
    dirent: dirent_2
  }) => dirent_2.name === jEe.head || dirent_2.name === jEe.objects || dirent_2.name === jEe.refs);
  if (i.length < 3) return !1;
  let r = i.map(({
    dirent: dirent_3
  }) => ({
    name: dirent_3.name,
    isDirectory: dirent_3.isDirectory(),
    isSymbolicLink: dirent_3.isSymbolicLink(),
    typeKnown: dirent_3.isFile() || dirent_3.isDirectory() || dirent_3.isSymbolicLink()
  }));
  return r.every(item => item.typeKnown) ? LAr(r) : T1n(L(e, t));
}
var ie = "\uFFFD";
function Xe(e, path, n) {
  return !e.includes("/") && !e.includes(ie) && ue(path) && !(AV() && ZA(e)) && k1n({
    path: path
  }) && !(n ? Jeo(path) : f3t(path));
}
async function Ze(e, {
  path: path_2,
  dirent: dirent_4
}) {
  if (dirent_4.isSymbolicLink()) return "symlink";
  if (dirent_4.isDirectory()) return "directory";
  if (dirent_4.isFile() || dirent_4.isFIFO() || dirent_4.isSocket() || dirent_4.isBlockDevice() || dirent_4.isCharacterDevice()) return "other";
  try {
    let i = await P(L(e, path_2));
    return i.isSymbolicLink() ? "symlink" : i.isDirectory() ? "directory" : "other";
  } catch {
    return "unknown";
  }
}
function qe(e, t, n) {
  switch (t) {
    case "directory":
      return n.ignoresDirectory(e);
    case "other":
      return n.ignoresFile(e);
    case "symlink":
    case "unknown":
      return n.ignoresFile(e) || n.ignoresDirectory(e);
  }
}
function Qe({
  path: path_3,
  dirent: dirent_5
}, n, i, r) {
  let reason_2 = sze(dirent_5.name, n === "directory");
  if (reason_2 !== null) return {
    kind: "skip",
    reason: reason_2
  };
  if (qe(path_3, n, i)) return {
    kind: "ignored"
  };
  let reason_3 = r(path_3, !1);
  if (reason_3 !== null) return {
    kind: "skip",
    reason: reason_3
  };
  if (!Xe(dirent_5.name, path_3, n === "directory")) return {
    kind: "skip",
    reason: "unsafe_name"
  };
  switch (n) {
    case "symlink":
      return {
        kind: "skip",
        reason: "symlink"
      };
    case "unknown":
      return {
        kind: "skip",
        reason: "unreadable"
      };
    case "directory":
      return {
        kind: "descend"
      };
    case "other":
      return {
        kind: "candidate"
      };
  }
}
async function Je(e, path_4) {
  try {
    let observedAtMs = Date.now(),
      i = await P(L(e, path_4));
    if (i.isDirectory()) return {
      kind: "skip",
      skipped: {
        path: path_4,
        reason: "changed"
      },
      mayHoldFiles: !0
    };
    let reason_4 = h4e(i);
    if (reason_4 !== null) return {
      kind: "skip",
      skipped: {
        path: path_4,
        reason: reason_4
      },
      mayHoldFiles: i.isSymbolicLink()
    };
    return {
      kind: "file",
      file: {
        path: path_4,
        size: i.size,
        mtimeMs: i.mtimeMs,
        mode: i.mode & 511,
        observedAtMs: observedAtMs,
        ino: i.ino,
        ctimeMs: i.ctimeMs
      }
    };
  } catch (error) {
    return Hwt(v(error)) ? {
      kind: "gone"
    } : {
      kind: "skip",
      skipped: {
        path: path_4,
        reason: "unreadable"
      },
      mayHoldFiles: !0
    };
  }
}
async function sar({
  root: root,
  ignores: ignores,
  withheldOf: withheldOf,
  signal: signal,
  nestedIgnoreFiles = !1,
  maxFiles = jwt,
  maxVisited: o = ke,
  maxNestedIgnoreRules = l3t,
  maxNestedIgnoreBytes: p = c3t
}) {
  let k = [],
    y = [],
    b = [],
    h = [],
    S = [],
    nestedIgnoreFiles_2 = [],
    I = 0,
    F = nestedIgnoreFiles ? {
      remaining: p
    } : null,
    ignoredCount = 0,
    f = {
      remaining: o
    },
    l = await X(root).catch(() => null);
  if (l === null) return {
    ok: !1,
    reason: "root_unreadable"
  };
  let c = [""],
    d = Ms(j, u => Ve(root, l, u, f, F, signal));
  while (c.length > 0) {
    if (Mt(signal)) return {
      ok: !1,
      reason: "aborted"
    };
    let u = c,
      C = await qL(u.map(d), signal);
    if (C === null) return {
      ok: !1,
      reason: "aborted"
    };
    c = [];
    for (let [M, R] of C.entries()) {
      let path_5 = u[M];
      if (R.kind === "unreadable" || R.kind === "nested_repository") {
        if (R.kind === "unreadable" && path_5 === "") return {
          ok: !1,
          reason: "root_unreadable"
        };
        k.push({
          path: path_5,
          reason: withheldOf(path_5, !1) ?? R.kind
        }), b.push(path_5);
        continue;
      }
      if (R.kind === "too_many") return {
        ok: !1,
        reason: Mt(signal) ? "aborted" : "too_many_files"
      };
      let ignoreFile_2 = R.ignoreFile;
      if (ignoreFile_2 !== null && !NCn(ignoreFile_2)) {
        if (I += ignoreFile_2.kind === "lines" ? ignoreFile_2.lines.length : 0, I > maxNestedIgnoreRules || F !== null && F.remaining < 0) return {
          ok: !1,
          reason: "nested_ignores_too_large"
        };
        let read = ignoreFile_2.kind === "lines" && !ignores.honourWithin(path_5, ignoreFile_2.lines) ? {
          kind: "unusable",
          reason: "too_many_rules_above"
        } : ignoreFile_2;
        if (nestedIgnoreFiles_2.push({
          file: path_5 + "/" + J,
          read: read
        }), read.kind === "unusable") {
          ignores.leaveOut(path_5), ignoredCount++, S.push(path_5), b.push(path_5);
          continue;
        }
      }
      for (let E of R.entries) {
        let B = await Ze(root, E),
          T = Qe(E, B, ignores, withheldOf);
        switch (T.kind) {
          case "descend":
            c.push(E.path);
            break;
          case "candidate":
            y.push(E.path);
            break;
          case "skip":
            k.push({
              path: E.path,
              reason: T.reason
            });
            break;
          case "ignored":
            if (ignoredCount++, B === "other") h.push(E.path);else S.push(E.path);
            break;
        }
        if (B !== "other" && (T.kind === "skip" || T.kind === "ignored")) b.push(E.path);
      }
      if (y.length > maxFiles) return {
        ok: !1,
        reason: "too_many_files"
      };
    }
  }
  let m = Ms(j, u => Mt(signal) ? Promise.resolve({
      kind: "gone"
    }) : Je(root, u)),
    g = await qL(y.map(m), signal);
  if (g === null || Mt(signal)) return {
    ok: !1,
    reason: "aborted"
  };
  return {
    ok: !0,
    listing: {
      files: g.flatMap(item => item.kind === "file" ? [item.file] : []).toSorted(Tee),
      skipped: [...k, ...g.flatMap(item => item.kind === "skip" ? [item.skipped] : [])].toSorted(Tee),
      ignoredCount: ignoredCount,
      ignoredFiles: h.toSorted(),
      ignoredDirectories: S.toSorted(),
      unlistedDirectories: [...b, ...g.flatMap(item => item.kind === "skip" && item.mayHoldFiles ? [item.skipped.path] : [])].toSorted(),
      nestedIgnoreFiles: nestedIgnoreFiles_2
    }
  };
}
function NCn(e) {
  return e.kind === "lines" && e.lines.length === 0 && e.adjusted.length === 0;
}
export { l3t, c3t, sze, rar, DKo, K7e, Dwt, Y7e, Lwt, oar, Nwt, d3t, Hwt, sar, NCn };