// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  rn
} from "B:/~BUN/root/chunk-1ks9vs37.js";
var m2o = !0;
var h2o = () => rn("tengu_agents_md_mod", m2o);
var $Tt = "cc-plugin-agents-md";

function O7n(t, o) {
  let e = new Set([t.path]),
    {
      path: n,
      parent: r
    } = t;
  while (r !== void 0 && !e.has(r)) e.add(r), n = r, r = o.get(r)?.parent;
  return n
}
var Dqr = ["project", "local", "user"];
var UTt = (t) => t.flatMap((o) => o.parts.map((e, n) => ({
  path: e.path,
  kind: "project",
  content: e.content,
  ...n > 0 && {
    parent: o.parts[0]?.path ?? e.path
  }
})));

function Uri(t, o, e) {
  if ((t === "~" || t.startsWith("~/")) && e !== void 0) {
    let r = e.replace(/(?<=.)[\\/]+$/, "");
    return t === "~" ? r : `${r}${c(r)}${t.slice(2)}`
  }
  return /^(?:[A-Za-z]:)?[\\/]/.test(t) ? t : `${o}${c(o)}${t}`
}
var c = (t) => t.includes("\\") ? "\\" : "/";
var wOe = (t) => t.replaceAll("\\", "/").replace(/(?<=.)\/+$/, "");
var I7n = (t, o) => wOe(t).startsWith(`${wOe(o)}/`);
var g2o = (t, o) => wOe(t.path) === wOe(o);
var y2o = (t) => `Contents of ${t.path}:

${t.content}`;

function Lqr(t, o) {
  let e = new Set(o.map((n) => n.dir));
  return t.filter((n) => !e.has(n.dir))
}
var _2o = (t, o) => [...t ?? [], ...o.map(y2o)];
var BTt = (t) => t.kind === "project" || t.kind === "local";

function hKt(t) {
  let o = wOe(t),
    e = o.lastIndexOf("/.claude/"),
    n = e === -1 ? o.lastIndexOf("/") : e;
  return n <= 0 ? "/" : o.slice(0, n)
}

function b2o(t, o) {
  let e = new Map(t.map((s) => [s.path, s])),
    n = t.findIndex((s) => BTt(s) && I7n(hKt(O7n(s, e)), o));
  if (n !== -1) return n;
  let r = t.findLastIndex(BTt);
  if (r !== -1) return r + 1;
  let i = t.findIndex((s) => s.kind === "memory");
  return i === -1 ? t.length : i
}
var g_n = ["AGENTS.md", ".claude/AGENTS.md"];
var jTt = ["CLAUDE.md", ".claude/CLAUDE.md", "CLAUDE.local.md"];
var WTt = "main";
var Bri = ["clear", "compact", "resume"];

function Nqr(t, o) {
  if (!(BTt(t) && t.parent === void 0 && jTt.some((i) => wOe(t.path).endsWith(`/${i}`)))) return !1;
  let n = hKt(t.path),
    r = wOe(o);
  return n === r || I7n(r, n)
}
var jri = (t) => !Dqr.includes(t.kind);

function y_n(t, o) {
  let e = new Set(o.map((i) => wOe(i.path))),
    n = new Set(o.filter(BTt).map((i) => i.content.trim())),
    r = [];
  for (let i of t) {
    let s = wOe(i.path),
      m = i.content.trim();
    if (!(e.has(s) || m !== "" && n.has(m))) e.add(s), r.push(i)
  }
  return r
}

function Fqr(t, o) {
  if (o.length === 0) return t;
  let e = [...t],
    n = new Map(o.map((i) => [i.path, i])),
    r = new Map;
  for (let i of o) {
    let s = hKt(O7n(i, n));
    r.set(s, [...r.get(s) ?? [], i])
  }
  for (let [i, s] of r) e.splice(b2o(e, i), 0, ...s);
  return e
}
var zTt = "claude-md-or-agents-md";
var x = {
  none: "managed-only",
  claude: "claude-md",
  "agents-fallback": "claude-md-or-agents-md",
  both: "claude-md-and-agents-md"
};

function Wri(t) {
  if (t === void 0) return;
  return (typeof t === "string" ? x[t] : void 0) ?? "claude-md"
}
var M7n = ["claude-md", "claude-md-or-agents-md", "claude-md-and-agents-md", "managed-only"];
var zri = (t) => M7n.find((o) => o === t) ?? zTt;
export {
  m2o,
  h2o,
  $Tt,
  O7n,
  Dqr,
  UTt,
  Uri,
  wOe,
  I7n,
  g2o,
  y2o,
  Lqr,
  _2o,
  BTt,
  hKt,
  b2o,
  g_n,
  jTt,
  WTt,
  Bri,
  Nqr,
  jri,
  y_n,
  Fqr,
  zTt,
  Wri,
  M7n,
  zri
};
