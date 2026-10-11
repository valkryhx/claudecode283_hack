// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { uh, m1t } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Es, ro, $r } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _ } from "B:/~BUN/root/chunk-51n463p1.js";
import { Ct, wn } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { mv } from "B:/~BUN/root/chunk-70qv5h0a.js";
import { Unt, efo, QG } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Nu } from "B:/~BUN/root/chunk-q5ke49kw.js";
import { ab } from "B:/~BUN/root/chunk-na2t7g12.js";
import { Dr } from "B:/~BUN/root/chunk-c4gqp24s.js";
import { at } from "B:/~BUN/root/chunk-2h7x7bdj.js";
var f = "[Old tool result content cleared]",
  g = "<persisted-output>",
  d = m1t;
function T(e) {
  if (typeof e === "string") return e.includes(uh);
  return Array.isArray(e) && e.some(item => item.type === "text" && item.text.includes(uh));
}
var Nar = 20000,
  E = 2000,
  R = new Set([at, ...ab, $r, ro, mv, Dr, Ct, wn]);
function A(e) {
  if (!e.content) return 0;
  if (typeof e.content === "string") return Nu(e.content);
  return e.content.reduce((acc, item) => {
    if (item.type === "text") return acc + Nu(item.text);else if (item.type === "image" || item.type === "document") return acc + E;
    return acc;
  }, 0);
}
function M(e) {
  let o = [];
  for (let n of e) if (n.type === "assistant" && Array.isArray(n.message.content)) {
    for (let r of n.message.content) if (r.type === "tool_use" && R.has(r.name)) o.push(r.id);
  }
  return o;
}
function pto(e, o) {
  let n = [];
  for (let r of e) {
    if (r.type !== "assistant" || !Array.isArray(r.message.content)) continue;
    for (let a of r.message.content) if (a.type === "tool_use" && a.name === at && o.has(a.id)) {
      let file_path = a.input.file_path;
      if (typeof file_path === "string") n.push(file_path);
    }
  }
  return n;
}
function k(e) {
  if (typeof e !== "string") return !1;
  let o = e.startsWith(d) ? e.slice(d.length) : e;
  return o === f || o.startsWith(g);
}
function Har(e, o) {
  let n = M(e),
    r = Math.max(1, o),
    keepSet = new Set(n.slice(-r)),
    clearSet = new Set(n.filter(item => !keepSet.has(item)));
  if (clearSet.size === 0) return {
    clearSet: clearSet,
    keepSet: keepSet,
    tokensSaved: 0,
    candidates: []
  };
  let tokensSaved = 0,
    candidates = [];
  for (let p of e) {
    if (p.type !== "user" || !Array.isArray(p.message.content)) continue;
    for (let c of p.message.content) if (c.type === "tool_result" && clearSet.has(c.tool_use_id) && !k(c.content)) tokensSaved += A(c), candidates.push(c);
  }
  return {
    clearSet: clearSet,
    keepSet: keepSet,
    tokensSaved: tokensSaved,
    candidates: candidates
  };
}
function Kwt(e, o, n) {
  if (o.size === 0) return [...e];
  return e.map(item => {
    if (item.type !== "user" || !Array.isArray(item.message.content)) return item;
    let a = !1,
      content_2 = item.message.content.map(item => {
        if (item.type !== "tool_result" || !o.has(item.tool_use_id)) return item;
        let u = Array.isArray(item.content) && item.content.some(item => item.type === "image" || item.type === "document"),
          p = u ? f : n?.get(item.tool_use_id) ?? f,
          content = !u && !p.startsWith(d) && T(item.content) ? `${d}${p}` : p;
        if (item.content === content) return item;
        return a = !0, {
          ...item,
          content: content
        };
      });
    return a ? {
      ...item,
      message: {
        ...item.message,
        content: content_2
      }
    } : item;
  });
}
async function fto(e, o, n) {
  let {
    keepSet: keepSet_2,
    tokensSaved: tokensSaved_2,
    candidates: candidates_2
  } = Har(e, n.keepRecent);
  if (tokensSaved_2 < Nar) return null;
  let clearedIds = new Set(candidates_2.map(item => item.tool_use_id)),
    clearedContent = new Map();
  for (let c of candidates_2) {
    let m = c.content ? await n.persist?.(c.content, c.tool_use_id) : null;
    clearedContent.set(c.tool_use_id, m ?? f);
  }
  let messages = Kwt(e, clearedIds, clearedContent);
  if (o !== void 0 && Es(o) === "main") QG("tool_result_clear");
  if (i("tengu_time_based_microcompact", {
    toolsCleared: clearedIds.size,
    toolsKept: keepSet_2.size,
    keepRecent: n.keepRecent,
    tokensSaved: tokensSaved_2,
    trigger: y("context_hint")
  }), _("compact_micro_keep_recent"), t(`[KEEP-RECENT MC] context_hint trigger, cleared ${clearedIds.size} tool results (~${tokensSaved_2} tokens), kept last ${keepSet_2.size}`), Unt(), o) efo(o, n.agentId);
  return {
    messages: messages,
    tokensSaved: tokensSaved_2,
    clearedIds: clearedIds,
    clearedContent: clearedContent
  };
}
export { Nar, pto, Har, Kwt, fto };