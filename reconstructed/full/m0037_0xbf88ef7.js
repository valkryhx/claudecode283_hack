// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
var i = {
  Task: "Agent",
  KillShell: "TaskStop",
  KillBash: "TaskStop",
  ListPeers: "ListAgents",
  Brief: "SendUserMessage",
  ListMcpResources: "ListMcpResourcesTool",
  ReadMcpResource: "ReadMcpResourceTool",
  ReadMcpResourceDir: "ReadMcpResourceDirTool"
};

function jc(e) {
  return Object.hasOwn(i, e) ? i[e] : e
}

function R8e(e) {
  let t = [];
  for (let [n, r] of Object.entries(i))
    if (r === e) t.push(n);
  return t
}
var aYn = "workspace",
  FAe = `mcp__${aYn}__bash`,
  Tgn = `mcp__${aYn}__web_fetch`;

function Zye(e, t) {
  let n = t && Object.hasOwn(t, e) ? t[e] : void 0;
  return n !== void 0 && n !== e ? [e, n] : [e]
}

function DJ(e, t) {
  if (!t) return [];
  let n = [];
  for (let [r, s] of Object.entries(t))
    if (s === e) n.push(r);
  return n
}

function YR(e) {
  return e.includes("*")
}

function EY(e, t) {
  return new RegExp(`^${e.split("*").map((r)=>r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join(".*")}$`, "s").test(t)
}

function A8e(e, t) {
  return EY(e, t)
}

function l(e) {
  return e.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)")
}

function e_e(e, t) {
  let n = e.replaceAll("\\", "\\\\").replace(/[[\]()|+^$]/g, (r) => `\\${r}`);
  if (t?.escapeGlobs) n = n.replaceAll("*", "\\*");
  if (n.startsWith("!") || n.startsWith("#")) n = `\\${n}`;
  return n = n.replace(/\s+$/, (r) => Array.from(r, (s) => `\\${s}`).join("")), n
}

function ZUt(e) {
  return e.replace(/\\([^])/g, (t, n) => Djr(n) ? n : t)
}
var a = /^[\\[\]!#()|+^$*?\s]$/;

function Djr(e) {
  return a.test(e)
}
var c = /^(?:[A-Za-z]:\\|~\\|\\(?![()!#]))/;

function Ljr(e) {
  return c.test(e)
}

function Njr(e) {
  return Hjr(e).replaceAll("\\\\", "\\")
}

function Hjr(e) {
  return e.replaceAll("\\(", "(").replaceAll("\\)", ")")
}

function SUe(e) {
  let t = p(e, "("),
    n = f(e, ")");
  if (t === -1 && n === -1) return {
    kind: "bare"
  };
  let r = e.substring(0, t);
  if (t === -1 || n <= t || n !== e.length - 1 || /[()]/.test(r)) return {
    kind: "malformed"
  };
  return {
    kind: "call",
    toolName: r,
    rawContent: e.substring(t + 1, n)
  }
}

function Jn(e) {
  let t = SUe(e);
  if (t.kind !== "call" || !t.toolName) return {
    toolName: jc(e)
  };
  if (t.rawContent === "" || t.rawContent === "*") return {
    toolName: jc(t.toolName)
  };
  let n = Njr(t.rawContent);
  return {
    toolName: jc(t.toolName),
    ruleContent: n
  }
}

function Mn(e) {
  if (!e.ruleContent) return e.toolName;
  let t = l(e.ruleContent);
  return `${e.toolName}(${t})`
}
var lde = "!";

function u(e) {
  return e.lastIndexOf("(") > e.lastIndexOf(")")
}

function NFo(e) {
  let t = Op([...e]),
    n = t.find(u);
  return n === void 0 ? {
    kind: "rules",
    rules: t
  } : {
    kind: "unclosed",
    rule: n
  }
}

function Cgn(e) {
  return `Error: the --disallowed-tools rule "${e}" has an opening parenthesis that is never closed, so a cloud session would drop it. Close the parenthesis and run the command again.`
}

function Op(e) {
  if (e.length === 0) return [];
  let t = [];
  for (let n of e) {
    if (!n) continue;
    let r = "",
      s = !1;
    for (let o of n) switch (o) {
      case "(":
        s = !0, r += o;
        break;
      case ")":
        s = !1, r += o;
        break;
      case ",":
        if (s) r += o;
        else {
          if (r.trim()) t.push(r.trim());
          r = ""
        }
        break;
      case " ":
        if (s) r += o;
        else if (r.trim()) t.push(r.trim()), r = "";
        break;
      default:
        r += o
    }
    if (r.trim()) t.push(r.trim())
  }
  return t
}

function p(e, t) {
  for (let n = 0; n < e.length; n++)
    if (e[n] === t) {
      let r = 0,
        s = n - 1;
      while (s >= 0 && e[s] === "\\") r++, s--;
      if (r % 2 === 0) return n
    } return -1
}

function f(e, t) {
  for (let n = e.length - 1; n >= 0; n--)
    if (e[n] === t) {
      let r = 0,
        s = n - 1;
      while (s >= 0 && e[s] === "\\") r++, s--;
      if (r % 2 === 0) return n
    } return -1
}
export {
  jc,
  R8e,
  aYn,
  FAe,
  Tgn,
  Zye,
  DJ,
  YR,
  EY,
  A8e,
  e_e,
  ZUt,
  Djr,
  Ljr,
  Njr,
  Hjr,
  SUe,
  Jn,
  Mn,
  lde,
  NFo,
  Cgn,
  Op
};
