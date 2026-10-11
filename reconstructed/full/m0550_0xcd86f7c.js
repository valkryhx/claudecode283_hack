// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  uh,
  m1t
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  Es,
  ro,
  $r
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  y
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  Ct,
  wn
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  mv
} from "B:/~BUN/root/chunk-70qv5h0a.js";
import {
  Unt,
  efo,
  QG
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Nu
} from "B:/~BUN/root/chunk-q5ke49kw.js";
import {
  ab
} from "B:/~BUN/root/chunk-na2t7g12.js";
import {
  Dr
} from "B:/~BUN/root/chunk-c4gqp24s.js";
import {
  at
} from "B:/~BUN/root/chunk-2h7x7bdj.js";
var f = "[Old tool result content cleared]",
  g = "<persisted-output>",
  d = m1t;

function T(e) {
  if (typeof e === "string") return e.includes(uh);
  return Array.isArray(e) && e.some((o) => o.type === "text" && o.text.includes(uh))
}
var Nar = 20000,
  E = 2000,
  R = new Set([at, ...ab, $r, ro, mv, Dr, Ct, wn]);

function A(e) {
  if (!e.content) return 0;
  if (typeof e.content === "string") return Nu(e.content);
  return e.content.reduce((o, n) => {
    if (n.type === "text") return o + Nu(n.text);
    else if (n.type === "image" || n.type === "document") return o + E;
    return o
  }, 0)
}

function M(e) {
  let o = [];
  for (let n of e)
    if (n.type === "assistant" && Array.isArray(n.message.content)) {
      for (let r of n.message.content)
        if (r.type === "tool_use" && R.has(r.name)) o.push(r.id)
    } return o
}

function pto(e, o) {
  let n = [];
  for (let r of e) {
    if (r.type !== "assistant" || !Array.isArray(r.message.content)) continue;
    for (let a of r.message.content)
      if (a.type === "tool_use" && a.name === at && o.has(a.id)) {
        let l = a.input.file_path;
        if (typeof l === "string") n.push(l)
      }
  }
  return n
}

function k(e) {
  if (typeof e !== "string") return !1;
  let o = e.startsWith(d) ? e.slice(d.length) : e;
  return o === f || o.startsWith(g)
}

function Har(e, o) {
  let n = M(e),
    r = Math.max(1, o),
    a = new Set(n.slice(-r)),
    l = new Set(n.filter((p) => !a.has(p)));
  if (l.size === 0) return {
    clearSet: l,
    keepSet: a,
    tokensSaved: 0,
    candidates: []
  };
  let s = 0,
    u = [];
  for (let p of e) {
    if (p.type !== "user" || !Array.isArray(p.message.content)) continue;
    for (let c of p.message.content)
      if (c.type === "tool_result" && l.has(c.tool_use_id) && !k(c.content)) s += A(c), u.push(c)
  }
  return {
    clearSet: l,
    keepSet: a,
    tokensSaved: s,
    candidates: u
  }
}

function Kwt(e, o, n) {
  if (o.size === 0) return [...e];
  return e.map((r) => {
    if (r.type !== "user" || !Array.isArray(r.message.content)) return r;
    let a = !1,
      l = r.message.content.map((s) => {
        if (s.type !== "tool_result" || !o.has(s.tool_use_id)) return s;
        let u = Array.isArray(s.content) && s.content.some((m) => m.type === "image" || m.type === "document"),
          p = u ? f : n?.get(s.tool_use_id) ?? f,
          c = !u && !p.startsWith(d) && T(s.content) ? `${d}${p}` : p;
        if (s.content === c) return s;
        return a = !0, {
          ...s,
          content: c
        }
      });
    return a ? {
      ...r,
      message: {
        ...r.message,
        content: l
      }
    } : r
  })
}
async function fto(e, o, n) {
  let {
    keepSet: r,
    tokensSaved: a,
    candidates: l
  } = Har(e, n.keepRecent);
  if (a < Nar) return null;
  let s = new Set(l.map((c) => c.tool_use_id)),
    u = new Map;
  for (let c of l) {
    let m = c.content ? await n.persist?.(c.content, c.tool_use_id) : null;
    u.set(c.tool_use_id, m ?? f)
  }
  let p = Kwt(e, s, u);
  if (o !== void 0 && Es(o) === "main") QG("tool_result_clear");
  if (i("tengu_time_based_microcompact", {
      toolsCleared: s.size,
      toolsKept: r.size,
      keepRecent: n.keepRecent,
      tokensSaved: a,
      trigger: y("context_hint")
    }), _("compact_micro_keep_recent"), t(`[KEEP-RECENT MC] context_hint trigger, cleared ${s.size} tool results (~${a} tokens), kept last ${r.size}`), Unt(), o) efo(o, n.agentId);
  return {
    messages: p,
    tokensSaved: a,
    clearedIds: s,
    clearedContent: u
  }
}
export {
  Nar,
  pto,
  Har,
  Kwt,
  fto
};
