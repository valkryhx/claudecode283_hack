// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { le } from "B:/~BUN/root/chunk-begxsvab.js";
import { Qe } from "B:/~BUN/root/chunk-2f1svh63.js";
var l = {
  Task: "Agent",
  KillShell: "TaskStop",
  KillBash: "TaskStop",
  ListPeers: "ListAgents",
  Brief: "SendUserMessage",
  ListMcpResources: "ListMcpResourcesTool",
  ReadMcpResource: "ReadMcpResourceTool",
  ReadMcpResourceDir: "ReadMcpResourceDirTool"
};
var A = {
  ...l,
  Eval: "REPL"
};
function Xl(e) {
  let n = c();
  return Object.hasOwn(n, e) ? n[e] : e;
}
function PGn(e) {
  return (e === "Eval" || e === "REPL") && Object.hasOwn(c(), e);
}
function $pe(e) {
  let n = [];
  for (let [t, r] of Object.entries(c())) if (r === e) n.push(t);
  return n;
}
var NNr = "workspace",
  owe = `mcp__${NNr}__bash`,
  FNr = `mcp__${NNr}__web_fetch`;
function Upe(e, n) {
  let t = n && Object.hasOwn(n, e) ? n[e] : void 0;
  return t !== void 0 && t !== e ? [e, t] : [e];
}
function h5(e, n) {
  if (!n) return [];
  let t = [];
  for (let [r, o] of Object.entries(n)) if (o === e) t.push(r);
  return t;
}
function dS(e) {
  return e.includes("*");
}
function wC(e, n) {
  return m(e)(n);
}
function m(e) {
  let n = e.split("*"),
    t = n[0] ?? "";
  if (n.length === 1) return i => t === i;
  let r = n.at(-1) ?? "",
    o,
    s = [];
  return i => {
    let u = i.length - r.length;
    if (u < t.length || !i.startsWith(t) || !i.endsWith(r)) return !1;
    o ??= n.slice(1, -1).filter(item => item !== "");
    let f = t.length;
    for (let [a, d] of o.entries()) {
      let g = (s[a] ??= _(d))(i, f, u);
      if (g === -1) return !1;
      f = g + d.length;
    }
    return !0;
  };
}
function OGn(e, n, t) {
  let r = 0,
    o = 0;
  for (;;) {
    let s = p(e, t, r),
      i = p(n, t, o);
    if (e.charAt(s) !== n.charAt(i) || !wC(e.slice(r, s), n.slice(o, i))) return !1;
    if (s === e.length) return !0;
    r = s + 1, o = i + 1;
  }
}
function p(e, n, t) {
  let r = t;
  while (r < e.length && !n.includes(e.charAt(r))) r++;
  return r;
}
function dqe(e, n) {
  return wC(e, n);
}
function HNr(e) {
  return m(e);
}
function b(e) {
  return e.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
function swe(e, n) {
  let t = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, r => `\\${r}`);
  if (n?.escapeGlobs) t = t.replaceAll("*", "\\*");
  if (t.startsWith("!") || t.startsWith("#")) t = `\\${t}`;
  return t = t.replace(/\s+$/, r => Array.from(r, o => `\\${o}`).join("")), t;
}
function IGn(e) {
  return e.replace(/\\([^])/g, (n, t) => MGn(t) ? t : n);
}
var R = /^[\\[\]!#()|+^$*?\s]$/;
function MGn(e) {
  return R.test(e);
}
var E = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;
function mUs(e) {
  return E.test(e);
}
function hUs(e) {
  return gUs(e).replaceAll("\\\\", "\\");
}
function gUs(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")");
}
function mN(e) {
  if (typeof e === "string" && !e.includes("(") && !e.includes(")")) return {
    kind: "bare"
  };
  let n = C(e, "("),
    t = O(e, ")");
  if (n === -1 && t === -1) return {
    kind: "bare"
  };
  let toolName = e.substring(0, n);
  if (n === -1 || t <= n || t !== e.length - 1 || /[()]/.test(toolName)) return {
    kind: "malformed"
  };
  return {
    kind: "call",
    toolName: toolName,
    rawContent: e.substring(n + 1, t)
  };
}
function yr(e) {
  let n = mN(e);
  if (n.kind !== "call" || !n.toolName) return {
    toolName: Xl(e)
  };
  if (n.rawContent === "" || n.rawContent === "*") return {
    toolName: Xl(n.toolName)
  };
  let ruleContent = hUs(n.rawContent);
  return {
    toolName: Xl(n.toolName),
    ruleContent: ruleContent
  };
}
function yUs(e) {
  let n = mN(e);
  return n.kind === "call" && n.toolName ? n.toolName : e;
}
function mn(e) {
  if (!e.ruleContent) return e.toolName;
  let n = b(e.ruleContent);
  return `${e.toolName}(${n})`;
}
var qV = "!";
function lea(e) {
  let n = [];
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    if (r === void 0) continue;
    let o = e[t + 1];
    if (r === qV && o !== void 0 && !o.startsWith(qV) && !o.startsWith("(")) {
      n.push(qV + o), t++;
      continue;
    }
    n.push(r);
  }
  return n;
}
function dea(e) {
  return e.lastIndexOf("(") > e.lastIndexOf(")");
}
function R1t(e) {
  return `Error: the --disallowed-tools rule "${Qe(e, 64)}" has an opening parenthesis that is never closed, so a cloud session would drop it. Close the parenthesis and run the command again.`;
}
function Eu(e) {
  if (e.length === 0) return [];
  let n = [];
  for (let t of e) {
    if (!t) continue;
    let r = "",
      o = !1;
    for (let s of t) switch (s) {
      case "(":
        o = !0, r += s;
        break;
      case ")":
        o = !1, r += s;
        break;
      case ",":
        if (o) r += s;else {
          if (r.trim()) n.push(r.trim());
          r = "";
        }
        break;
      case " ":
        if (o) r += s;else if (r.trim()) n.push(r.trim()), r = "";
        break;
      default:
        if (r || s.trim()) r += s;
    }
    if (r.trim()) n.push(r.trim());
  }
  return n;
}
function C(e, n) {
  for (let t = 0; t < e.length; t++) if (e[t] === n) {
    let r = 0,
      o = t - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return t;
  }
  return -1;
}
function O(e, n) {
  for (let t = e.length - 1; t >= 0; t--) if (e[t] === n) {
    let r = 0,
      o = t - 1;
    while (o >= 0 && e[o] === "\\") r++, o--;
    if (r % 2 === 0) return t;
  }
  return -1;
}
function _(e) {
  if (!e.includes(e.charAt(0), 1)) return (t, r, o) => {
    let s = t.indexOf(e, r);
    return s + e.length > o ? -1 : s;
  };
  let int32Array = new Int32Array(e.length);
  for (let t = 1, r = 0; t < e.length; t++) {
    while (r > 0 && e.charCodeAt(t) !== e.charCodeAt(r)) r = int32Array[r - 1] ?? 0;
    if (e.charCodeAt(t) === e.charCodeAt(r)) r++;
    int32Array[t] = r;
  }
  return (t, r, o) => {
    for (let s = r, i = 0; s < o; s++) {
      while (i > 0 && t.charCodeAt(s) !== e.charCodeAt(i)) i = int32Array[i - 1] ?? 0;
      if (t.charCodeAt(s) === e.charCodeAt(i)) i++;
      if (i === e.length) return s - e.length + 1;
    }
    return -1;
  };
}
function c() {
  return le() ? A : l;
}
export { Xl, PGn, $pe, NNr, owe, FNr, Upe, h5, dS, wC, OGn, dqe, HNr, swe, IGn, MGn, mUs, hUs, gUs, mN, yr, yUs, mn, qV, lea, dea, R1t, Eu };