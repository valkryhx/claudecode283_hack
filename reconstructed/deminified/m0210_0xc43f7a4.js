// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { _n, OR } from "B:/~BUN/root/chunk-msy8grqx.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, xC, j } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { On } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
var S = new q(() => new Set());
function y(e, r) {
  return `${e}_${r}`;
}
var B = /_(\d+)$/;
function cNe(e) {
  let r = B.exec(e);
  return r ? e.slice(0, -r[0].length) : void 0;
}
function x(e, r, a) {
  let i = _n(r, e.name);
  if (i === void 0 || !OR(i)) return null;
  let l = u => (p("batch_tools", u, {
    tool_name: On(i.name),
    isMcp: !1
  }), [{
    type: "tool_use",
    id: y(e.id, 0),
    name: i.name,
    input: e.input,
    ...(e.caller !== void 0 && {
      caller: e.caller
    })
  }]);
  try {
    let u = i.inputSchema.safeParse(e.input);
    if (!u.success) return {
      synthetics: l("parse_failed"),
      decomposed: !1
    };
    let {
      v1Tool: v1Tool,
      entries: entries
    } = i.perEntryHookInputs(u.data);
    if (entries.length === 0) return {
      synthetics: l("zero_entries"),
      decomposed: !1
    };
    return {
      decomposed: !0,
      synthetics: entries.map((item, index) => {
        let input = item;
        try {
          input = a(v1Tool, item);
        } catch (error) {
          if (error instanceof Error && error.name === "ZodError") t(`batch entry normalize rejected input: ${error}`, {
            level: "error"
          });else d(error);
        }
        return {
          type: "tool_use",
          id: y(e.id, index),
          name: v1Tool.name,
          input: input,
          ...(e.caller !== void 0 && {
            caller: e.caller
          })
        };
      })
    };
  } catch {
    return {
      synthetics: l("per_entry_threw"),
      decomposed: !1
    };
  }
}
function isn(e) {
  let r;
  for (let a of e) if (OR(a)) r ??= new Set(), r.add(a.underlyingV1ToolName);
  if (r === void 0) return e;
  return e.filter(item => !r.has(item.name));
}
function lat(e, r, a) {
  let i,
    batchToolUses = [];
  for (let u = 0; u < e.length; u++) {
    let n = e[u];
    if (n.type !== "tool_use") {
      i?.push(n);
      continue;
    }
    let o = x(n, r, a);
    if (o === null) {
      i?.push(n);
      continue;
    }
    if (i ??= e.slice(0, u), i.push(...o.synthetics), o.decomposed) batchToolUses.push({
      id: n.id,
      name: n.name
    }), _("batch_tools", {
      tool_name: On(n.name),
      isMcp: !1
    });
  }
  return {
    content: i ?? e,
    batchToolUses: batchToolUses
  };
}
function bEo(e, r, a) {
  if (r === void 0 || r.length === 0) return e;
  let i = new Map();
  for (let o of r) if (!i.has(o.id)) i.set(o.id, o);
  let l = new Map();
  for (let o of i.values()) {
    let s = _n(a, o.name);
    if (s === void 0 || !OR(s)) continue;
    let c = [],
      m;
    for (let f of e) if (f.type === "tool_use" && cNe(f.id) === o.id) m ??= f, c.push(f.input);
    try {
      l.set(o.id, {
        type: "tool_use",
        id: o.id,
        name: o.name,
        input: s.reassemble(c),
        ...(m?.caller !== void 0 && {
          caller: m.caller
        })
      });
    } catch {
      let f = S.of(j().host);
      if (!f.has(o.id)) f.add(o.id), p("batch_tools", "reassemble_threw", {
        tool_name: On(o.name),
        isMcp: !1
      });
    }
  }
  let u = new Set(),
    n = [];
  for (let o of e) {
    if (o.type === "tool_use") {
      let s = cNe(o.id);
      if (s !== void 0 && l.has(s)) {
        if (!u.has(s)) u.add(s), n.push(l.get(s));
        continue;
      }
    }
    n.push(o);
  }
  return n;
}
function SEo(e, r) {
  let a = !1;
  for (let n of e) {
    if (n.type === "assistant") {
      for (let o of n.message.content) if (o.type === "tool_use") {
        let s = _n(r, o.name);
        if (s !== void 0 && OR(s)) a = !0;
      }
    }
    if (n.type === "user" && !a) {
      if (Array.isArray(n.message.content) && n.message.content.some(item => item.type === "tool_result" && cNe(item.tool_use_id) !== void 0)) a = !0;
    }
  }
  if (!a) return e;
  let i = new Map();
  for (let n of e) {
    if (n.type !== "assistant") continue;
    for (let o of n.message.content) if (o.type === "tool_use") i.set(o.id, o);
  }
  let l = new Map();
  for (let n of e) {
    if (n.type !== "user" || !Array.isArray(n.message.content)) continue;
    for (let o of n.message.content) {
      if (o.type !== "tool_result") continue;
      let s = cNe(o.tool_use_id);
      if (s === void 0 || !i.has(s)) continue;
      let c = l.get(s);
      if (c === void 0) c = new Map(), l.set(s, c);
      if (!c.has(o.tool_use_id)) c.set(o.tool_use_id, o);
    }
  }
  if (l.size === 0) return e;
  let u = new Set();
  return e.flatMap(item => {
    if (item.type !== "user" || !Array.isArray(item.message.content)) return [item];
    let o = !1,
      content = [];
    for (let c of item.message.content) {
      if (c.type !== "tool_result") {
        content.push(c);
        continue;
      }
      let m = cNe(c.tool_use_id),
        f = m !== void 0 ? l.get(m) : void 0;
      if (m === void 0 || f === void 0) {
        content.push(c);
        continue;
      }
      if (o = !0, u.has(m)) continue;
      u.add(m);
      let h = i.get(m),
        g = _n(r, h.name),
        T = g !== void 0 && OR(g) ? g : void 0;
      content.push(R(T, m, E(T, h.input, m, f)));
    }
    if (!o) return [item];
    if (content.length === 0) return [];
    return [{
      ...item,
      message: {
        ...item.message,
        content: content
      }
    }];
  });
}
function E(e, r, a, i) {
  let l;
  if (e !== void 0) try {
    let n = e.inputSchema.safeParse(r);
    if (n.success) l = e.perEntryHookInputs(n.data).entries;
  } catch {}
  let length = l?.length ?? 0;
  for (let n of i.keys()) {
    let o = B.exec(n);
    if (o) length = Math.max(length, Number(o[1]) + 1);
  }
  if (length > 1000) length = l?.length ?? i.size;
  return Array.from({
    length: length
  }, (n, o) => {
    let result = i.get(y(a, o));
    return result !== void 0 ? {
      input: l?.[o],
      result: result
    } : {
      input: l?.[o],
      error: "no result"
    };
  });
}
function R(e, tool_use_id, a) {
  let i = [],
    text = "",
    u = !1,
    n = s => {
      if (s.length > 0) text = text === "" ? s : `${text}
${s}`;
    },
    o = () => {
      if (text !== "") i.push({
        type: "text",
        text: text
      }), text = "";
    };
  for (let [s, c] of a.entries()) {
    let m = c.result === void 0 || c.result.is_error === !0;
    if (m) u = !0;
    if (n(`--- entry ${s + 1}${m ? " (error)" : ""} ---`), c.result !== void 0) {
      let content_2 = c.result.content;
      if (typeof content_2 === "string") n(content_2);else if (Array.isArray(content_2)) for (let h of content_2) if (h.type === "text") n(h.text);else o(), i.push(h);
    } else n(`[entry ${s + 1} error: ${c.error ?? "no result"}]`);
  }
  if (a.length === 1 && e !== void 0) n(`<system-reminder>Tip: ${e.name} accepts multiple entries in one call (\`${e.entryFieldName}: [{...}, {...}]\`). Batching related operations into a single call is faster than issuing them as separate or parallel calls. No action needed for this result.</system-reminder>`);
  return o(), {
    type: "tool_result",
    tool_use_id: tool_use_id,
    content: i.length === 1 && i[0]?.type === "text" ? i[0].text : i,
    ...(u && {
      is_error: !0
    })
  };
}
var k = new Map();
function Dae(e) {
  return k.get(e);
}
function asn(e) {
  return e.map(Dae).filter(item => item !== void 0).filter(item => item.isEnabled());
}
function wEo(e, r) {
  return r.find(item => item.underlyingV1ToolName === e)?.name ?? e;
}
function F9(e) {
  for (let [r, a] of k) if (a.name === e) return r;
  return;
}
var b = new q(() => Me());
function w() {
  return b.of(j().host);
}
var GEe = xC(w);
function lsn(agentId) {
  return {
    setMode(mode) {
      GEe.emit({
        kind: "agent-mode",
        agentId: agentId,
        mode: mode
      });
    },
    setRetryStatus(retryStatus) {
      GEe.emit({
        kind: "agent-retry-status",
        agentId: agentId,
        retryStatus: retryStatus
      });
    },
    setTurnEffort(turnEffort, turnModel = null) {
      GEe.emit({
        kind: "agent-turn-effort",
        agentId: agentId,
        turnEffort: turnEffort,
        turnModel: turnModel
      });
    }
  };
}
var csn = "Running SessionStart hooks\u2026",
  VEe = {
    setSpinnerMessage(message) {
      GEe.emit({
        kind: "main-message",
        message: message
      });
    },
    setSpinnerColors(color, shimmerColor) {
      GEe.emit({
        kind: "main-colors",
        color: color,
        shimmerColor: shimmerColor
      });
    }
  };
export { cNe, isn, lat, bEo, SEo, Dae, asn, wEo, F9, GEe, lsn, csn, VEe };