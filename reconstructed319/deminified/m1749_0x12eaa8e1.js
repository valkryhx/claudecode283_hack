// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { Q } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { QBt } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { mn } from "B:/~BUN/root/chunk-44q965xg.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { Ga as read } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { sM } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Tie } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { ECr } from "B:/~BUN/root/chunk-79dw4seg.js";
import { lz, HGe, qLe } from "B:/~BUN/root/chunk-tdekz3md.js";
import { s4e } from "B:/~BUN/root/chunk-12nc74pv.js";
import { isAbsolute as m } from "path";
function rules(t) {
  return Kt(t) ? qLe(t) : lz(read(t), t);
}
function d() {
  return {
    sources: j(),
    read: read,
    rules: rules
  };
}
var j = () => {
  let {
      gateProject: gateProject
    } = HGe(),
    e = sM({
      onIndeterminate: "tracked"
    });
  return [...(gateProject ? [["projectSettings", ".claude/settings.json"]] : []), ...(e ? [["localSettings", ".claude/settings.local.json"]] : [])];
};
function zGr(t) {
  if (t === null) return !1;
  if (t.statusLine) return !0;
  if (t.fileSuggestion) return !0;
  if (t.subagentStatusLine) return !0;
  if (!t.hooks) return !1;
  for (let e of Object.values(t.hooks)) if (e.length > 0) return !0;
  return !1;
}
function qUo(t = {
  sources: [["projectSettings", ".claude/settings.json"], ["localSettings", ".claude/settings.local.json"]],
  read: read,
  rules: rules
}, e = Ee()) {
  let s = [];
  for (let [o, c] of t.sources) if (zGr(t.read(o))) s.push(c);
  let r = ECr(e);
  if (r !== null) s.push(Tie(r));
  return s;
}
function a(t) {
  return t.some(item => item.ruleBehavior === "allow" && (item.ruleValue.toolName === Me || item.ruleValue.toolName.startsWith(Me + "(")));
}
var R = /[\x00-\x1f\x7f-\x9f\u2028\u2029]|\p{Cf}/gu,
  g = 60;
function GGr(t) {
  let e = s4e(t).replace(R, "").trim();
  return e.length > g ? `${Q(e, g)}\u2026` : e;
}
var x = new Set([Me, "PowerShell", "Write", "Edit", "MultiEdit", "NotebookEdit", "WebFetch", "WebSearch"]);
function p(t) {
  let {
      toolName: toolName,
      ruleContent: ruleContent
    } = t.ruleValue,
    r = x.has(toolName) || toolName.startsWith("mcp__"),
    o = ruleContent === void 0;
  if (r) return o ? 0 : 1;
  return o ? 2 : 3;
}
function U2t(t = d()) {
  let sources = [],
    s = [];
  for (let [i, n] of t.sources) {
    let u = t.rules(i).filter(item => item.ruleBehavior === "allow");
    if (u.length > 0) sources.push(n), s.push(...u);
  }
  let rawCount = s.length;
  s.sort((itemA, itemB) => p(itemA) - p(itemB));
  let o = new Set(),
    rules_2 = [];
  for (let i of s) {
    let n = GGr(mn(i.ruleValue));
    if (n.length > 0 && !o.has(n)) o.add(n), rules_2.push(n);
  }
  return {
    rules: rules_2,
    sources: sources,
    rawCount: rawCount
  };
}
function f(t) {
  if (m(t) || t.startsWith("~")) return 0;
  if (t.includes("..")) return 1;
  return 2;
}
function B2t(t = d()) {
  let sources_2 = [],
    s = [];
  for (let [i, n] of t.sources) {
    let u = t.read(i)?.permissions?.additionalDirectories ?? [];
    if (u.length > 0) sources_2.push(n), s.push(...u);
  }
  let rawCount_2 = s.length,
    o = new Set(),
    dirs = [];
  for (let i of s) {
    let n = GGr(i);
    if (n.length > 0 && !o.has(n)) o.add(n), dirs.push(n);
  }
  return dirs.sort((itemA, itemB) => f(itemA) - f(itemB)), {
    dirs: dirs,
    sources: sources_2,
    rawCount: rawCount_2
  };
}
function YUo() {
  let t = [],
    e = rules("projectSettings");
  if (a(e)) t.push(".claude/settings.json");
  let s = rules("localSettings");
  if (a(s)) t.push(".claude/settings.local.json");
  return t;
}
function Ok(t, e) {
  if (t.length === 0) return "";
  let s = e === 0 ? void 0 : e;
  if (!s || t.length <= s) {
    if (t.length === 1) return t[0];
    if (t.length === 2) return `${t[0]} and ${t[1]}`;
    let c = t.at(-1);
    return `${t.slice(0, -1).join(", ")}, and ${c}`;
  }
  let r = t.slice(0, s),
    o = t.length - s;
  if (r.length === 1) return `${r[0]} and ${o} more`;
  return `${r.join(", ")}, and ${o} more`;
}
function VGr(t) {
  return !!t?.otelHeadersHelper;
}
function XUo() {
  let t = [],
    e = read("projectSettings");
  if (VGr(e)) t.push(".claude/settings.json");
  let s = read("localSettings");
  if (VGr(s)) t.push(".claude/settings.local.json");
  return t;
}
function dgn() {
  let t = [];
  if (read("projectSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.json");
  if (read("localSettings")?.autoMemoryDirectory !== void 0) t.push(".claude/settings.local.json");
  return t;
}
function KGr(t) {
  return !!t?.apiKeyHelper;
}
function JUo() {
  let t = [],
    e = read("projectSettings");
  if (KGr(e)) t.push(".claude/settings.json");
  let s = read("localSettings");
  if (KGr(s)) t.push(".claude/settings.local.json");
  return t;
}
function qGr(t) {
  return !!(t?.awsAuthRefresh || t?.awsCredentialExport);
}
function QUo() {
  let t = [],
    e = read("projectSettings");
  if (qGr(e)) t.push(".claude/settings.json");
  let s = read("localSettings");
  if (qGr(s)) t.push(".claude/settings.local.json");
  return t;
}
function YGr(t) {
  return !!t?.gcpAuthRefresh;
}
function ZUo() {
  let t = [],
    e = read("projectSettings");
  if (YGr(e)) t.push(".claude/settings.json");
  let s = read("localSettings");
  if (YGr(s)) t.push(".claude/settings.local.json");
  return t;
}
function XGr(t) {
  return !!t?.proxyAuthHelper;
}
function eBo() {
  let t = [],
    e = read("projectSettings");
  if (XGr(e)) t.push(".claude/settings.json");
  let s = read("localSettings");
  if (XGr(s)) t.push(".claude/settings.local.json");
  return t;
}
function S(t) {
  if (!t?.env) return !1;
  return Object.entries(t.env).some(([e, s]) => !QBt(e, s));
}
function cgn() {
  let t = [],
    e = read("projectSettings");
  if (S(e)) t.push(".claude/settings.json");
  let s = read("localSettings");
  if (S(s)) t.push(".claude/settings.local.json");
  return t;
}
export { zGr, qUo, GGr, U2t, B2t, YUo, Ok, VGr, XUo, dgn, KGr, JUo, qGr, QUo, YGr, ZUo, XGr, eBo, cgn };