// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  ne
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  y_t
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  kDe
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Sn
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  me
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  UM
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  We
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  KVn
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  XGn,
  iae,
  Bee
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  isAbsolute as h
} from "path";

function S() {
  return {
    sources: m(),
    read: me,
    rules: iae
  }
}
var m = () => {
  let {
    gateProject: t
  } = XGn(), e = UM({
    onIndeterminate: "tracked"
  });
  return [...t ? [
    ["projectSettings", ".claude/settings.json"]
  ] : [], ...e ? [
    ["localSettings", ".claude/settings.local.json"]
  ] : []]
};

function krr(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks))
    if (e.length > 0) return !0;
  return !1
}

function eYr(t = {
  sources: [
    ["projectSettings", ".claude/settings.json"],
    ["localSettings", ".claude/settings.local.json"]
  ],
  read: me,
  rules: iae
}, e = ke()) {
  let s = [];
  for (let [n, c] of t.sources)
    if (krr(t.read(n))) s.push(c);
  let r = KVn(e);
  if (r !== null) s.push(Bee(r));
  return s
}

function l(t) {
  return t.some((e) => e.ruleBehavior === "allow" && (e.ruleValue.toolName === We || e.ruleValue.toolName.startsWith(We + "(")))
}
var j = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  a = 60;

function Err(t) {
  let e = kDe(t).replace(j, "").trim();
  return e.length > a ? `${ne(e,a)}\u2026` : e
}
var R = new Set([We, "PowerShell", "Write", "Edit", "MultiEdit", "NotebookEdit", "WebFetch", "WebSearch"]);

function g(t) {
  let {
    toolName: e,
    ruleContent: s
  } = t.ruleValue, r = R.has(e) || e.startsWith("mcp__"), n = s === void 0;
  if (r) return n ? 0 : 1;
  return n ? 2 : 3
}

function ckt(t = S()) {
  let e = [],
    s = [];
  for (let [i, o] of t.sources) {
    let u = t.rules(i).filter((d) => d.ruleBehavior === "allow");
    if (u.length > 0) e.push(o), s.push(...u)
  }
  let r = s.length;
  s.sort((i, o) => g(i) - g(o));
  let n = new Set,
    c = [];
  for (let i of s) {
    let o = Err(Sn(i.ruleValue));
    if (o.length > 0 && !n.has(o)) n.add(o), c.push(o)
  }
  return {
    rules: c,
    sources: e,
    rawCount: r
  }
}

function p(t) {
  if (h(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2
}

function ukt(t = S()) {
  let e = [],
    s = [];
  for (let [i, o] of t.sources) {
    let u = t.read(i)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) e.push(o), s.push(...u)
  }
  let r = s.length,
    n = new Set,
    c = [];
  for (let i of s) {
    let o = Err(i);
    if (o.length > 0 && !n.has(o)) n.add(o), c.push(o)
  }
  return c.sort((i, o) => p(i) - p(o)), {
    dirs: c,
    sources: e,
    rawCount: r
  }
}

function tYr() {
  let t = [],
    e = iae("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = iae("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t
}

function Rb(t, e) {
  if (t.length === 0) return "";
  let s = e === 0 ? void 0 : e;
  if (!s || t.length <= s) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let c = t.at(-1);
    return `${t.slice(0,-1).join(", ")}, and ${c}`
  }
  let r = t.slice(0, s),
    n = t.length - s;
  if (r.length === 1) return `${r[0]} and ${n} more`;
  return `${r.join(", ")}, and ${n} more`
}

function Trr(t) {
  return !!t?.otelHeadersHelper
}

function nYr() {
  let t = [],
    e = me("projectSettings");
  if (Trr(e)) t.push(".claude/settings.json");
  let s = me("localSettings");
  if (Trr(s)) t.push(".claude/settings.local.json");
  return t
}

function _Vt() {
  let t = [];
  if (me("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if (me("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t
}

function Crr(t) {
  return !!t?.apiKeyHelper
}

function rYr() {
  let t = [],
    e = me("projectSettings");
  if (Crr(e)) t.push(".claude/settings.json");
  let s = me("localSettings");
  if (Crr(s)) t.push(".claude/settings.local.json");
  return t
}

function Rrr(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport)
}

function oYr() {
  let t = [],
    e = me("projectSettings");
  if (Rrr(e)) t.push(".claude/settings.json");
  let s = me("localSettings");
  if (Rrr(s)) t.push(".claude/settings.local.json");
  return t
}

function Arr(t) {
  return !!t?.gcpAuthRefresh
}

function sYr() {
  let t = [],
    e = me("projectSettings");
  if (Arr(e)) t.push(".claude/settings.json");
  let s = me("localSettings");
  if (Arr(s)) t.push(".claude/settings.local.json");
  return t
}

function xrr(t) {
  return !!t?.proxyAuthHelper
}

function iYr() {
  let t = [],
    e = me("projectSettings");
  if (xrr(e)) t.push(".claude/settings.json");
  let s = me("localSettings");
  if (xrr(s)) t.push(".claude/settings.local.json");
  return t
}

function f(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !y_t(e, s))
}

function bVt() {
  let t = [],
    e = me("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = me("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t
}
export {
  krr,
  eYr,
  Err,
  ckt,
  ukt,
  tYr,
  Rb,
  Trr,
  nYr,
  _Vt,
  Crr,
  rYr,
  Rrr,
  oYr,
  Arr,
  sYr,
  xrr,
  iYr,
  bVt
};
