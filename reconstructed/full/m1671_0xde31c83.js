// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  we
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  re
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Gpt
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  wt
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  Mn
} from "B:/~BUN/root/chunk-1f9marcm.js";
import {
  he
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  RI
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Ue
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  Ccn
} from "B:/~BUN/root/chunk-mrt797ke.js";
import {
  Yan,
  q3e,
  bHe
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  isAbsolute as m
} from "path";

function S() {
  return {
    sources: j(),
    read: he,
    rules: q3e
  }
}
var j = () => {
  let {
    gateProject: t
  } = Yan(), e = RI({
    onIndeterminate: "tracked"
  });
  return [...t ? [
    ["projectSettings", ".claude/settings.json"]
  ] : [], ...e ? [
    ["localSettings", ".claude/settings.local.json"]
  ] : []]
};

function Own(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks))
    if (e.length > 0) return !0;
  return !1
}

function CZn(t = {
  sources: [
    ["projectSettings", ".claude/settings.json"],
    ["localSettings", ".claude/settings.local.json"]
  ],
  read: he,
  rules: q3e
}, e = we()) {
  let s = [];
  for (let [n, c] of t.sources)
    if (Own(t.read(n))) s.push(c);
  let r = Ccn(e);
  if (r !== null) s.push(bHe(r));
  return s
}

function l(t) {
  return t.some((e) => e.ruleBehavior === "allow" && (e.ruleValue.toolName === Ue || e.ruleValue.toolName.startsWith(Ue + "(")))
}
var R = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  a = 60;

function d(t) {
  let e = wt(t).replace(R, "").trim();
  return e.length > a ? `${re(e,a)}\u2026` : e
}
var x = new Set([Ue, "PowerShell", "Write", "Edit", "MultiEdit", "NotebookEdit", "WebFetch", "WebSearch"]);

function g(t) {
  let {
    toolName: e,
    ruleContent: s
  } = t.ruleValue, r = x.has(e) || e.startsWith("mcp__"), n = s === void 0;
  if (r) return n ? 0 : 1;
  return n ? 2 : 3
}

function PJe(t = S()) {
  let e = [],
    s = [];
  for (let [i, o] of t.sources) {
    let u = t.rules(i).filter((h) => h.ruleBehavior === "allow");
    if (u.length > 0) e.push(o), s.push(...u)
  }
  let r = s.length;
  s.sort((i, o) => g(i) - g(o));
  let n = new Set,
    c = [];
  for (let i of s) {
    let o = d(Mn(i.ruleValue));
    if (o.length > 0 && !n.has(o)) n.add(o), c.push(o)
  }
  return {
    rules: c,
    sources: e,
    rawCount: r
  }
}

function p(t) {
  if (m(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2
}

function IJe(t = S()) {
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
    let o = d(i);
    if (o.length > 0 && !n.has(o)) n.add(o), c.push(o)
  }
  return c.sort((i, o) => p(i) - p(o)), {
    dirs: c,
    sources: e,
    rawCount: r
  }
}

function RZn() {
  let t = [],
    e = q3e("projectSettings");
  if (l(e)) t.push(".claude/settings.json");
  let s = q3e("localSettings");
  if (l(s)) t.push(".claude/settings.local.json");
  return t
}

function BC(t, e) {
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

function Mwn(t) {
  return !!t?.otelHeadersHelper
}

function AZn() {
  let t = [],
    e = he("projectSettings");
  if (Mwn(e)) t.push(".claude/settings.json");
  let s = he("localSettings");
  if (Mwn(s)) t.push(".claude/settings.local.json");
  return t
}

function xZn() {
  let t = [];
  if (he("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if (he("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t
}

function Dwn(t) {
  return !!t?.apiKeyHelper
}

function PZn() {
  let t = [],
    e = he("projectSettings");
  if (Dwn(e)) t.push(".claude/settings.json");
  let s = he("localSettings");
  if (Dwn(s)) t.push(".claude/settings.local.json");
  return t
}

function Lwn(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport)
}

function IZn() {
  let t = [],
    e = he("projectSettings");
  if (Lwn(e)) t.push(".claude/settings.json");
  let s = he("localSettings");
  if (Lwn(s)) t.push(".claude/settings.local.json");
  return t
}

function Nwn(t) {
  return !!t?.gcpAuthRefresh
}

function OZn() {
  let t = [],
    e = he("projectSettings");
  if (Nwn(e)) t.push(".claude/settings.json");
  let s = he("localSettings");
  if (Nwn(s)) t.push(".claude/settings.local.json");
  return t
}

function Hwn(t) {
  return !!t?.proxyAuthHelper
}

function MZn() {
  let t = [],
    e = he("projectSettings");
  if (Hwn(e)) t.push(".claude/settings.json");
  let s = he("localSettings");
  if (Hwn(s)) t.push(".claude/settings.local.json");
  return t
}

function f(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !Gpt(e, s))
}

function DZn() {
  let t = [],
    e = he("projectSettings");
  if (f(e)) t.push(".claude/settings.json");
  let s = he("localSettings");
  if (f(s)) t.push(".claude/settings.local.json");
  return t
}
export {
  Own,
  CZn,
  PJe,
  IJe,
  RZn,
  BC,
  Mwn,
  AZn,
  xZn,
  Dwn,
  PZn,
  Lwn,
  IZn,
  Nwn,
  OZn,
  Hwn,
  MZn,
  DZn
};
