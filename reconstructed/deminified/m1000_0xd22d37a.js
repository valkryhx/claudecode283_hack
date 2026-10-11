// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ze } from "B:/~BUN/root/chunk-y04k89s2.js";
import { Xit, Mon, wOt, pAr, rNe, dz, Lc } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Bwt } from "B:/~BUN/root/chunk-6bc9abmj.js";
import { stat as _ } from "fs/promises";
var w = 512,
  c = {
    GIT_NO_LAZY_FETCH: "1"
  },
  T = ["filter", "working-tree-encoding", "ident"],
  E = 16,
  y = w * 80 + 262144;
function WCn(e) {
  return `"${e.replace(/["\\\x00-\x1f\x7f]/g, n => {
    switch (n) {
      case '"':
        return "\\\"";
      case "\\":
        return "\\\\";
      case `
`:
        return "\\n";
      case "\r":
        return "\\r";
      case "\t":
        return "\\t";
      default:
        return "\\" + n.charCodeAt(0).toString(8).padStart(3, "0");
    }
  })}"`;
}
async function h(e, t, n, i) {
  if (t.length === 0 || i <= 0 || n?.aborted === !0) return {
    pairs: [],
    spawns: 0
  };
  let r = await Lc(e, ["hash-object", "--stdin-paths"], n, y, c, t.map(WCn).join(`
`) + `
`),
    s = r.stdout.split(`
`).map(item => item.replace(/\r$/, "")).filter(item => /^[0-9a-f]{40}([0-9a-f]{24})?$/.test(item)).slice(0, t.length),
    pairs = t.slice(0, s.length).map((item, index) => [item, s[index]]);
  if (r.code === 0 && s.length === t.length) return {
    pairs: pairs,
    spawns: 1
  };
  let a = await h(e, t.slice(s.length + 1), n, i - 1);
  return {
    pairs: [...pairs, ...a.pairs],
    spawns: 1 + a.spawns
  };
}
async function m(e, t, n) {
  let i = await g(e, t, T, n);
  return i === null ? [] : t.filter(item => i.answered.has(item) && !i.claimed.has(item));
}
var b = 15000;
async function g(e, t, n, i, r = b, s = "worktree") {
  if (t.length === 0) return {
    answered: new Set(),
    claimed: new Set()
  };
  let o = p(i, r),
    a = s === "index",
    l = await Lc(e, [...(a ? ["-c", "core.attributesFile=/dev/null"] : []), "check-attr", "-z", "--stdin", ...(a ? ["--cached"] : []), ...n], o, t.reduce((acc, item) => acc + n.length * (Buffer.byteLength(item) + 2304), 4096), a ? {
      ...c,
      GIT_ATTR_NOSYSTEM: "1"
    } : c, t.join("\x00") + "\x00");
  if (l.code !== 0) return null;
  let d = l.stdout.split("\x00"),
    A = Bwt(d.slice(0, d.length - d.length % 3), 3).flatMap(([path,, f]) => path === void 0 || f === void 0 ? [] : [{
      path: path,
      claimed: f !== "unspecified" && f !== "unset"
    }]);
  return {
    answered: new Set(A.map(item => item.path)),
    claimed: new Set(A.flatMap(item => item.claimed ? [item.path] : []))
  };
}
function lze(e, {
  timeoutMs = b
} = {}) {
  return async (n, i) => {
    let [r, s, o] = await Promise.all([g(e, n, ["filter"], i, timeoutMs), g(e, n, ["filter"], i, timeoutMs, "index"), F(e, n, p(i, timeoutMs))]);
    if (r === null || s === null || o === null) return null;
    return new Set(n.filter(item => r.claimed.has(item) || s.claimed.has(item) || !r.answered.has(item) || !s.answered.has(item) || o.has(item)));
  };
}
var R = {
    GIT_LITERAL_PATHSPECS: "0",
    GIT_GLOB_PATHSPECS: "0",
    GIT_NOGLOB_PATHSPECS: "0",
    GIT_ICASE_PATHSPECS: "0"
  },
  P = /^[0-7]{6} ([0-9a-f]{40}(?:[0-9a-f]{24})?) [0-3]\t(.+)$/s;
function p(e, t = b) {
  return AbortSignal.any([...(e === void 0 ? [] : [e]), AbortSignal.timeout(t)]);
}
async function I(e, t, n) {
  let i = await Lc(e, ["ls-files", "-s", "-z", "--cached", "--", t === "all" ? ":(glob)**/.gitattributes" : ".gitattributes"], n, void 0, {
    ...c,
    ...R
  });
  if (i.code !== 0) return null;
  let r = i.stdout.split("\x00").filter(item => item !== "").map(item => P.exec(item));
  return r.every(item => item !== null) ? r.flatMap(item => item[1] === void 0 || item[2] === void 0 ? [] : [{
    id: item[1],
    path: item[2]
  }]) : null;
}
function x(e) {
  let t = e.split("/").slice(0, -1);
  return [".gitattributes", ...t.map((item, index) => `${t.slice(0, index + 1).join("/")}/.gitattributes`)];
}
async function F(e, t, n) {
  if (t.length === 0) return new Set();
  let i = await I(e, "all", n);
  if (i === null) return null;
  if (i.length === 0) return new Set();
  let r = await Lc(e, ["cat-file", "--batch-check=%(objectname)"], n, i.length * 96 + 4096, c, i.map(item => `${item.id}
`).join(""));
  if (r.code !== 0) return null;
  let s = new Set(r.stdout.split(`
`).filter(item => /^[0-9a-f]{40}([0-9a-f]{24})?$/.test(item))),
    o = new Set(i.filter(item => !s.has(item.id)).map(item => item.path));
  return new Set(o.size === 0 ? [] : t.filter(item => x(item).some(item => o.has(item))));
}
function mar(e, t, n = !1) {
  return e.verdict === "none" && t.verdict === "none" && Xit(e.read, t.read) && Mon(e.read.dir.node, t.read.dir.node) && Mon(e.read.dir.target, t.read.dir.target) && (!n || Mon(e.home, t.home));
}
async function B(e) {
  try {
    let {
      size: size,
      mtimeMs: mtimeMs,
      ctimeMs: ctimeMs,
      ino: ino
    } = await _(e);
    return {
      size: size,
      mtimeMs: mtimeMs,
      ctimeMs: ctimeMs,
      ino: ino
    };
  } catch {
    return;
  }
}
var C = /^[-!]?(?:text|crlf|eol|binary|diff|merge|conflict-marker-size|whitespace|export-ignore|export-subst|delta|encoding|lockable|linguist-[a-z-]*)(?:=.*)?$/,
  v = /^[ \t\r\n]*(?:#|$)/;
function k(e) {
  let t = Ze(e, "\x00");
  if (v.test(t)) return "silent";
  if (wOt.test(t) || pAr.test(t)) return "rules";
  let [, ...n] = t.split(/[ \t\r\n]+/).filter(Boolean);
  return n.length === 0 ? "silent" : n.every(item => C.test(item)) ? n.map(item => item.replace(/^[-!]/, "").replace(/=.*$/s, "")) : "rules";
}
function S(e, t = null) {
  if (e.kind === "unreadable") return "unreadable";
  if (e.kind === "touches") return "rules";
  if (e.bytes === null) return "none";
  let n = e.bytes.toString("utf8").replace(/^\uFEFF/, "").split(`
`).map(k),
    i = n.flatMap(item => Array.isArray(item) ? item : []);
  return n.includes("rules") || i.some(item => t?.has(item) === !0) ? "rules" : i.length > 0 && t === null ? "benign" : "none";
}
async function O(e, t) {
  let i = (await I(e, "root", t))?.filter(s => s.path === ".gitattributes") ?? null;
  if (i === null || i.length === 0) return i === null ? null : new Set();
  let r = await Lc(e, ["cat-file", "--batch"], t, void 0, c, i.map(item => `${item.id}
`).join(""));
  if (r.code !== 0) return null;
  if (/^[0-9a-f]{40}(?:[0-9a-f]{24})? missing$/m.test(r.stdout) || /^\uFEFF?[ \t\r]*"[^"\n]*\\/m.test(r.stdout)) return "missing";
  return new Set([...r.stdout.matchAll(/^\uFEFF?[ \t\r]*"?\[attr\][ \t\r]*([^ \t\r\n"\\]+)/gm)].flatMap(item => item[1] ?? []));
}
function Zeo(e) {
  return async t => {
    let n = await dz(e),
      i = n.kind === "pinned" ? n.layout.GIT_COMMON_DIR ?? n.layout.GIT_DIR : void 0;
    if (i === void 0) return {
      verdict: "unknown",
      read: null
    };
    let read = await rNe(i);
    if (read.kind !== "none") return {
      verdict: read.kind === "unreadable" ? "unreadable" : "rules",
      read: read
    };
    if (read.dir.link) return {
      verdict: "unreadable",
      read: read
    };
    let home = await B(i);
    if (home === void 0) return {
      verdict: "unknown",
      read: read
    };
    let verdict = S(read);
    if (verdict !== "benign") return verdict === "none" ? {
      verdict: "none",
      read: read,
      home: home
    } : {
      verdict: verdict,
      read: read
    };
    let a = await O(e, p(t));
    if (a === null) return {
      verdict: "unknown",
      read: read
    };
    return a === "missing" || S(read, a) === "rules" ? {
      verdict: "rules",
      read: read
    } : {
      verdict: "none",
      read: read,
      home: home
    };
  };
}
function gar(e, t) {
  return async (n, i, r) => {
    if (!(t !== void 0 ? t.has(n) : (await m(e, [n], r)).includes(n))) return null;
    let o = await Lc(e, ["hash-object", "--stdin", "--path", n], r, y, c, i),
      a = o.stdout.trim();
    return o.code === 0 && /^[0-9a-f]{40}([0-9a-f]{24})?$/.test(a) ? a : null;
  };
}
async function eto(e, t, n) {
  return new Set(await m(e, t, n));
}
function tto(e) {
  return async (t, n) => {
    let i = await m(e, t, n),
      r = Bwt([...i], w),
      {
        pairs: pairs_2
      } = await r.reduce(async (acc, item) => {
        let l = await acc,
          d = await h(e, item, n, E - l.spawns);
        return {
          pairs: [...l.pairs, ...d.pairs],
          spawns: l.spawns + d.spawns
        };
      }, Promise.resolve({
        pairs: [],
        spawns: 0
      }));
    return new Map(pairs_2);
  };
}
async function nto(e, t, n, i) {
  return e.kind === "git_blob" && (await n([t], i)).get(t) === e.blobId;
}
export { WCn, lze, mar, Zeo, gar, eto, tto, nto };