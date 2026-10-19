// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  ir
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
var B8r = !0;
var j8r = () => ir("tengu_agents_md_mod", B8r);
var Aqe = "cc-plugin-agents-md";

function eTn(t, o) {
  let e = new Set([t.path]),
    {
      path: n,
      parent: r
    } = t;
  while (r !== void 0 && !e.has(r)) e.add(r), n = r, r = o.get(r)?.parent;
  return n
}
var _ir = ["project", "local", "user"];
var Lrt = (t) => t.flatMap((o) => o.parts.map((e, n) => ({
  path: e.path,
  kind: "project",
  content: e.content,
  ...n > 0 && {
    parent: o.parts[0]?.path ?? e.path
  }
})));

function JZo(t, o, e) {
  if ((t === "~" || t.startsWith("~/")) && e !== void 0) {
    let r = e.replace(/(?<=.)[\\/]+$/, "");
    return t === "~" ? r : `${r}${c(r)}${t.slice(2)}`
  }
  return /^(?:[A-Za-z]:)?[\\/]/.test(t) ? t : `${o}${c(o)}${t}`
}
var c = (t) => t.includes("\\") ? "\\" : "/";
var x_e = (t) => t.replaceAll("\\", "/").replace(/(?<=.)\/+$/, "");
var tTn = (t, o) => x_e(t).startsWith(`${x_e(o)}/`);
var W8r = (t, o) => x_e(t.path) === x_e(o);
var z8r = (t) => `Contents of ${t.path}:

${t.content}`;

function bir(t, o) {
  let e = new Set(o.map((n) => n.dir));
  return t.filter((n) => !e.has(n.dir))
}
var G8r = (t, o) => [...t ?? [], ...o.map(z8r)];
var Nrt = (t) => t.kind === "project" || t.kind === "local";

function hEt(t) {
  let o = x_e(t),
    e = o.lastIndexOf("/.claude/"),
    n = e === -1 ? o.lastIndexOf("/") : e;
  return n <= 0 ? "/" : o.slice(0, n)
}

function V8r(t, o) {
  let e = new Map(t.map((s) => [s.path, s])),
    n = t.findIndex((s) => Nrt(s) && tTn(hEt(eTn(s, e)), o));
  if (n !== -1) return n;
  let r = t.findLastIndex(Nrt);
  if (r !== -1) return r + 1;
  let i = t.findIndex((s) => s.kind === "memory");
  return i === -1 ? t.length : i
}
var uKt = ["AGENTS.md", ".claude/AGENTS.md"];
var Frt = ["CLAUDE.md", ".claude/CLAUDE.md", "CLAUDE.local.md"];
var Hrt = "main";
var QZo = ["clear", "compact", "resume"];

function Sir(t, o) {
  if (!(Nrt(t) && t.parent === void 0 && Frt.some((i) => x_e(t.path).endsWith(`/${i}`)))) return !1;
  let n = hEt(t.path),
    r = x_e(o);
  return n === r || tTn(r, n)
}
var ZZo = (t) => !_ir.includes(t.kind);

function pKt(t, o) {
  let e = new Set(o.map((i) => x_e(i.path))),
    n = new Set(o.filter(Nrt).map((i) => i.content.trim())),
    r = [];
  for (let i of t) {
    let s = x_e(i.path),
      m = i.content.trim();
    if (!(e.has(s) || m !== "" && n.has(m))) e.add(s), r.push(i)
  }
  return r
}

function wir(t, o) {
  if (o.length === 0) return t;
  let e = [...t],
    n = new Map(o.map((i) => [i.path, i])),
    r = new Map;
  for (let i of o) {
    let s = hEt(eTn(i, n));
    r.set(s, [...r.get(s) ?? [], i])
  }
  for (let [i, s] of r) e.splice(V8r(e, i), 0, ...s);
  return e
}
var $rt = "claude-md-or-agents-md";
var x = {
  none: "managed-only",
  claude: "claude-md",
  "agents-fallback": "claude-md-or-agents-md",
  both: "claude-md-and-agents-md"
};

function ees(t) {
  if (t === void 0) return;
  return (typeof t === "string" ? x[t] : void 0) ?? "claude-md"
}
var nTn = ["claude-md", "claude-md-or-agents-md", "claude-md-and-agents-md", "managed-only"];
var tes = (t) => nTn.find((o) => o === t) ?? $rt;
export {
  B8r,
  j8r,
  Aqe,
  eTn,
  _ir,
  Lrt,
  JZo,
  x_e,
  tTn,
  W8r,
  z8r,
  bir,
  G8r,
  Nrt,
  hEt,
  V8r,
  uKt,
  Frt,
  Hrt,
  QZo,
  Sir,
  ZZo,
  pKt,
  wir,
  $rt,
  ees,
  nTn,
  tes
};
