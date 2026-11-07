// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { F } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Pe, rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H, z, ye, q, er } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Yi } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { KNt } from "B:/~BUN/root/chunk-fzefftbw.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Te, $V, Yc } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Hbe, pp, b1n, mf, On, zsn, iSe, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { Xd, Rf } from "B:/~BUN/root/chunk-q8eknvfd.js";
import { od, Jh } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { Ae } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { Bf } from "B:/~BUN/root/chunk-sjvfcp1z.js";
import { owo } from "B:/~BUN/root/chunk-2gz7xsvb.js";
import { OZ } from "B:/~BUN/root/chunk-vke7wtay.js";
import { Gnn, i$n, SNe, wCs, kCs, l_o, da } from "B:/~BUN/root/chunk-64qg3pvz.js";
import { ngt } from "B:/~BUN/root/chunk-jv4ech2n.js";
import { Lee, MFt, Knn, tbe, wNe, qnn, fAr } from "B:/~BUN/root/chunk-xfqs9tac.js";
import { vm } from "B:/~BUN/root/chunk-78gy49b7.js";
import { Gn } from "B:/~BUN/root/chunk-zpne314q.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
function GIn() {
  try {
    return KNt();
  } catch (error) {
    return a(F(error)), !0;
  }
}
function rt() {
  try {
    return Ae().loadedModules.some(item => !vm(item) && item.hooks("command.run"));
  } catch (error) {
    return a(F(error)), !0;
  }
}
function uDt(n) {
  try {
    return OZ() || rt() || Ae().loadedModules.some(item => !vm(item) && (item.hooks("prompt.submit") || item.hooks("session.append") && !(n === "queue-record" && Bf(item) && owo(item.matcherFor("session.append"), "door", "queue"))));
  } catch (error) {
    return a(F(error)), !0;
  }
}
function xI(n) {
  return uDt(n) || GIn();
}
var p = Oe(od(), 1),
  At = Oe(Jh(), 1);
import { createHash as Ot } from "crypto";
var wt = 61440;
function Lt() {
  return Math.min(i.CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH ?? wt, i.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, i.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, i.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0);
}
function yL(content) {
  let e = Lt();
  if (content.length <= e) return {
    content: content,
    truncated: !1
  };
  let s = `

[TRUNCATED - Content exceeds ${e >= 1024 ? `${Math.floor(e / 1024)}KB` : `${e} character`} limit]`;
  if (s.length >= e) return {
    content: content.slice(0, e),
    truncated: !0
  };
  return {
    content: content.slice(0, e - s.length) + s,
    truncated: !0
  };
}
function w() {
  return i.OTEL_LOG_USER_PROMPTS;
}
class ot {
  seenHashes = new Set();
  lastReportedMessage = new Map();
  emittedUserPromptForSessionId = void 0;
}
var it = new Je(() => new ot());
function aDi() {
  let n = it.of(H());
  n.seenHashes.clear(), n.lastReportedMessage.clear();
}
function xx() {
  if (!(i.ENABLE_BETA_TRACING_DETAILED && Boolean(process.env.BETA_TRACING_ENDPOINT) && !q())) return !1;
  return ye() || v("tengu_trace_lantern", !1);
}
function X(n) {
  return Ot("sha256").update(n).digest("hex").slice(0, 12);
}
function qt(n) {
  return `sp_${X(n)}`;
}
function st(n) {
  let e = _(n.message.content);
  return `msg_${X(e)}`;
}
function Y(n) {
  return /^<system-reminder>\n?([\s\S]*?)\n?<\/system-reminder>$/.exec(n.trim())?.[1]?.trim() || null;
}
function G(n, e) {
  let contextParts = [],
    systemReminders = [];
  for (let o of n) {
    if (o.type === "api_system") {
      systemReminders.push(o.message.content);
      continue;
    }
    let content_2 = o.message.content;
    if (typeof content_2 === "string") {
      let c = Y(content_2);
      if (c) systemReminders.push(c);else if (e) contextParts.push(`[USER]
${content_2}`);
    } else if (Array.isArray(content_2)) {
      for (let c of content_2) if (c.type === "text") {
        let h = Y(c.text);
        if (h) systemReminders.push(h);else if (e) contextParts.push(`[USER]
${c.text}`);
      } else if (c.type === "tool_result") {
        if (typeof c.content === "string") {
          let h = Y(c.content);
          if (h) systemReminders.push(h);else if (e) contextParts.push(`[TOOL RESULT: ${c.tool_use_id}]
${c.content}`);
        } else if (e) contextParts.push(`[TOOL RESULT: ${c.tool_use_id}]
${_(c.content)}`);
      }
    }
  }
  return {
    contextParts: contextParts,
    systemReminders: systemReminders
  };
}
function Bt(n, e) {
  let {
    systemReminders: systemReminders_2
  } = G(n, !1);
  return {
    contextParts: [e],
    systemReminders: systemReminders_2.map(() => e)
  };
}
function Ut(n, e, r) {
  let s = fAr(n.map(item => item.message), r, e.map(item => item.message));
  return n.map((item, index) => s[index] === item.message ? item : {
    ...item,
    message: s[index]
  });
}
var Nt = () => wNe(H().host);
function Z(n, e) {
  if (!xx() || !w()) return;
  let {
    content: r,
    truncated: truncated
  } = yL(`[USER PROMPT]
${tbe(() => wNe(H().host), void 0, e)}`);
  n.setAttributes({
    new_context: r,
    ...(truncated && {
      new_context_truncated: !0,
      new_context_original_length: e.length
    })
  });
}
function at(n, e, r, s, o) {
  if (!xx()) return;
  let u = it.of(H()),
    c = g => r !== void 0 && s === void 0 ? {
      withheld: "account_memory_text_not_identified"
    } : Knn(s ?? Nt, e?.querySource, g),
    h = g => {
      let d = c(l => qnn(g, l));
      return "withheld" in d ? MFt(d.withheld) : d.value;
    };
  if (e?.systemPrompt) {
    let {
        systemPrompt: systemPrompt
      } = e,
      system_prompt_hash = qt(systemPrompt),
      l,
      m = () => l ??= c(f => qnn(systemPrompt, f));
    if (n.setAttribute("system_prompt_hash", system_prompt_hash), w()) {
      let f = m();
      n.setAttribute("system_prompt_preview", "withheld" in f ? MFt(f.withheld) : f.value.slice(0, 500));
    }
    n.setAttribute("system_prompt_length", e.systemPrompt.length);
    let b = w() ? m() : void 0;
    if (b !== void 0 && "value" in b && !u.seenHashes.has(system_prompt_hash)) {
      u.seenHashes.add(system_prompt_hash);
      let {
        content: f,
        truncated: truncated_2
      } = yL(b.value);
      da("system_prompt", {
        system_prompt_hash: system_prompt_hash,
        system_prompt: f,
        system_prompt_length: String(e.systemPrompt.length),
        ...(truncated_2 && {
          system_prompt_truncated: "true"
        })
      }, o);
    }
  }
  if (e?.userSystemPrompt && w()) {
    let g = z();
    if (u.emittedUserPromptForSessionId !== g) {
      u.emittedUserPromptForSessionId = g;
      let {
        content: d,
        truncated: truncated_3
      } = yL(h(e.userSystemPrompt));
      n.setAttributes({
        user_system_prompt: d,
        ...(truncated_3 && {
          user_system_prompt_truncated: !0,
          user_system_prompt_original_length: e.userSystemPrompt.length
        })
      });
    }
  }
  if (e?.tools) try {
    let d = ee(e.tools).map(item => {
      let json = _(item),
        hash = X(json);
      return {
        name: typeof item.name === "string" ? item.name : "unknown",
        hash: hash,
        json: json
      };
    });
    n.setAttribute("tools", _(d.map(({
      name: name,
      hash: hash_2
    }) => ({
      name: name,
      hash: hash_2
    })))), n.setAttribute("tools_count", d.length);
    for (let {
      name: name_2,
      hash: m,
      json: json_2
    } of d) if (!u.seenHashes.has(`tool_${m}`)) {
      u.seenHashes.add(`tool_${m}`);
      let {
        content: f,
        truncated: truncated_4
      } = yL(json_2);
      da("tool", {
        tool_name: On(name_2),
        tool_hash: m,
        tool: f,
        ...(truncated_4 && {
          tool_truncated: "true"
        })
      }, o);
    }
  } catch {
    n.setAttribute("tools_parse_error", !0);
  }
  if (r && r.length > 0 && e?.querySource) {
    let querySource = e.querySource,
      d = u.lastReportedMessage.get(querySource),
      l = 0;
    if (d) {
      let S = r[d.index];
      if (S && st(S) === d.hash) l = d.index + 1;
    }
    let m = r.slice(l).filter(item => item.type === "user" || item.type === "api_system");
    if (m.length > 0) {
      let S = w(),
        E = S ? c(M => G(Ut(m, r, M), !0)) : {
          value: G(m, !1)
        },
        {
          contextParts: contextParts_2,
          systemReminders: systemReminders_3
        } = "withheld" in E ? Bt(m, MFt(E.withheld)) : E.value;
      if (n.setAttribute("new_context_message_count", m.length), systemReminders_3.length > 0) n.setAttribute("system_reminders_count", systemReminders_3.length);
      if (contextParts_2.length > 0 && S) {
        let M = contextParts_2.join(`

---

`),
          {
            content: j,
            truncated: truncated_5
          } = yL(M);
        n.setAttributes({
          new_context: j,
          ...(truncated_5 && {
            new_context_truncated: !0,
            new_context_original_length: M.length
          })
        });
      }
      if (systemReminders_3.length > 0 && S) {
        let M = systemReminders_3.join(`

---

`),
          {
            content: j,
            truncated: truncated_6
          } = yL(M);
        n.setAttributes({
          system_reminders: j,
          ...(truncated_6 && {
            system_reminders_truncated: !0,
            system_reminders_original_length: M.length
          })
        });
      }
    }
    let index_2 = r.length - 1,
      f = r[index_2];
    if (f) u.lastReportedMessage.set(querySource, {
      index: index_2,
      hash: st(f)
    });
  }
}
function ut(n, e) {
  if (!xx() || !w() || !e) return;
  let r = s => tbe(e.accountMemoryKeys, e.querySource, s);
  if (e.modelOutput !== void 0) {
    let {
      content: content_3,
      truncated: truncated_7
    } = yL(r(e.modelOutput));
    if (n["response.model_output"] = content_3, truncated_7) n["response.model_output_truncated"] = !0, n["response.model_output_original_length"] = e.modelOutput.length;
  }
}
function ct(n, e, r, s = !1) {
  if (!xx() || !mf()) return;
  let {
    content: o,
    truncated: truncated_8
  } = yL(`[TOOL INPUT: ${e}]
${s ? Lee(r) : r}`);
  n.setAttributes({
    tool_input: o,
    ...(truncated_8 && {
      tool_input_truncated: !0,
      tool_input_original_length: r.length
    })
  });
}
function pt(n, e, r, s = !1) {
  if (!xx() || !zsn()) return;
  let {
    content: content_4,
    truncated: truncated_9
  } = yL(`[TOOL RESULT: ${e}]
${s ? Lee(r) : r}`);
  if (n.new_context = content_4, truncated_9) n.new_context_truncated = !0, n.new_context_original_length = r.length;
}
class dt {
  recorder = null;
}
var Dt = new W(() => new dt());
function A() {
  return Dt.of(H().host).recorder;
}
function lDi() {
  let CLAUDE_CODE_PERFETTO_TRACE = i.CLAUDE_CODE_PERFETTO_TRACE;
  t(`[Perfetto] initializePerfettoTracing called, env value: ${CLAUDE_CODE_PERFETTO_TRACE}`);
}
function EXe() {
  return A() !== null;
}
function D_r(n, e, r) {
  let s = A();
  if (!s) return;
  s.registerAgent(n, e, r);
}
function TXe(n) {
  let e = A();
  if (!e) return;
  e.unregisterAgent(n);
}
function ft(n) {
  let e = A();
  if (!e) return "";
  return e.startLLMRequestSpan(n);
}
function gt(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endLLMRequestSpan(n, e);
}
function lt(n, e) {
  let r = A();
  if (!r) return "";
  return r.startToolSpan(n, e);
}
function mt(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endToolSpan(n, e);
}
function ht(n) {
  let e = A();
  if (!e) return "";
  return e.startUserInputSpan(n);
}
function _t(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endUserInputSpan(n, e);
}
function St(n, e, r) {
  let s = A();
  if (!s) return;
  s.emitInstant(n, e, r);
}
function Tt(n) {
  let e = A();
  if (!e) return "";
  return e.startInteractionSpan(n);
}
function bt(n) {
  let e = A();
  if (!e || !n) return;
  e.endInteractionSpan(n);
}
var weakMap = new WeakMap(),
  I = p.createContextKey("cc.interaction_state"),
  L = p.createContextKey("cc.tool_state"),
  B = p.createContextKey("cc.blocked_state"),
  J = p.createContextKey("cc.execution_state"),
  Et = p.createContextKey("cc.subagent_state"),
  It = p.createContextKey("cc.turn_trace_contexts");
class vt {
  lastSequence = 0;
}
var $t = new W(() => new vt());
function ops() {
  let n = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if (Pe(n)) return !0;
  if (rs(n)) return !1;
  return !1;
}
function Tq() {
  return ops() || xx();
}
function Kye() {
  return !1;
}
function L_r(n, e) {
  return;
}
function w7t(n, e) {
  n.setStatus(D(e));
}
function xt(n, e) {
  if (!e) return;
  n.setAttribute("tool_use_id", e), n.setAttribute("gen_ai.tool.call.id", e);
}
function Ft(n) {
  switch (n) {
    case "bedrock":
    case "mantle":
      return "aws.bedrock";
    case "vertex":
      return "gcp.vertex_ai";
    case "firstParty":
    case "anthropicAws":
    case "anthropicGoogleCloud":
    case "foundry":
    case "gateway":
      return "anthropic";
  }
}
function PI() {
  return ngt();
}
function Ht() {
  let n = {},
    e = z();
  if (O.test(e)) n["session.id"] = e;
  let CLAUDE_CODE_REMOTE_SESSION_ID = i.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (CLAUDE_CODE_REMOTE_SESSION_ID !== void 0 && O.test(CLAUDE_CODE_REMOTE_SESSION_ID)) n["ccr.session.id"] = CLAUDE_CODE_REMOTE_SESSION_ID;
  return n;
}
function Rt() {
  return {
    ...(PI() ? Ht() : Gnn()),
    "gen_ai.provider.name": Ft(Te())
  };
}
var Wt = new Set(["rpc.service", "mcp_tool"]),
  O = /^[A-Za-z0-9_.-]{1,64}$/,
  yt = {
    [Rf]: /^[a-z][a-z0-9_]{0,39}$/,
    [Xd]: /^[A-Za-z][A-Za-z0-9_]{0,39}$/,
    playwright: /^browser_[a-z_]{1,40}$/
  };
function Kt(n) {
  if (n.startsWith("mcp__")) {
    let [, e, ...r] = n.split("__"),
      s = e !== void 0 && Object.hasOwn(yt, e) ? yt[e] : void 0;
    return s !== void 0 && s.test(r.join("__")) && O.test(n) ? n : "mcp_other";
  }
  return !n.includes("__") && O.test(n) ? n : "other";
}
function zt(n) {
  let e = Hbe(n)?.replaceAll(":", ".");
  return e !== void 0 && O.test(e) ? e : void 0;
}
var jt = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function tt(error_2, e) {
  let error_class = e?.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    ...(error_2 !== void 0 && !PI() && {
      error: error_2
    }),
    ...(error_class !== void 0 && jt.test(error_class) && {
      error_class: error_class
    })
  };
}
function sps(n) {
  return `${n.name} (${n.message.length} chars; text not recorded)`;
}
function D(message) {
  return {
    code: p.SpanStatusCode.ERROR,
    ...(message && !PI() && {
      message: message
    })
  };
}
function y() {
  return p.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function T() {
  return l_o();
}
function P(n) {
  let e = T().getValue(n);
  return e && !e.ended ? e : void 0;
}
function R(n, e) {
  weakMap.set(e.span, e);
  let r = p.trace.setSpan(e.priorContext, e.span).setValue(n, e);
  if (SNe.enterWith(r), n === I) wCs(r);
}
function C(n, e) {
  if (e.ended = !0, n === I && kCs()?.getValue(n) === e) wCs(void 0);
  if (T().getValue(n) === e) SNe.enterWith(e.priorContext);
}
function k(n, e = {}) {
  return {
    ...Rt(),
    "span.type": n,
    ...e
  };
}
function Vt(n) {
  if (!n) return [];
  return n.linked.flatMap(({
    traceparent: traceparent
  }) => {
    let context = Pt(traceparent);
    return context ? [{
      context: context,
      attributes: {
        "link.type": "queued_send"
      }
    }] : [];
  });
}
function et() {
  return T().getValue(It);
}
function N_r() {
  return et()?.contexts;
}
function Sdo() {
  let n = et();
  return er() && Te() === "firstParty" && $V() && !Yc() ? n?.contexts?.parent?.traceparent ?? n?.fallbackTraceparent : void 0;
}
function wdo() {
  let n = et();
  if (n) n.contexts = void 0;
}
function Ct(n, e) {
  if (pp(e)) return;
  let r = e.agentId !== void 0 ? i$n(e.agentId) : void 0;
  if (r !== void 0) n.setAttribute("agent_id", r);
  let s = e.parentAgentId !== void 0 ? i$n(e.parentAgentId) : void 0;
  if (s !== void 0) n.setAttribute("parent_agent_id", s);
}
function Q() {
  let n = z();
  return !PI() || O.test(n) ? {
    "gen_ai.conversation.id": n
  } : {};
}
function U(n) {
  switch (n.agentType) {
    case "main":
      return Q();
    case "subagent":
      {
        if (n.isMainSession) return Q();
        let e = i$n(n.agentId);
        return e !== void 0 ? {
          "gen_ai.conversation.id": e
        } : {};
      }
    case "teammate":
      return {};
  }
}
function Yt(n, e) {
  let perfettoSpanId = EXe() ? Tt(n) : void 0,
    priorContext = T();
  if (!Tq()) {
    if (perfettoSpanId) {
      let span = p.trace.getActiveSpan() || y().startSpan("dummy");
      return R(I, {
        span: span,
        startTime: performance.now(),
        attributes: {
          "span.type": "interaction"
        },
        perfettoSpanId: perfettoSpanId,
        priorContext: priorContext
      }), span;
    }
    return p.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let o = y(),
    isPromptHeld = xI(),
    user_prompt = isPromptHeld ? "<REDACTED>" : Mt(n),
    h = ++$t.of(H().host).lastSequence,
    attributes = k("interaction", {
      "gen_ai.operation.name": "invoke_agent",
      ...Q(),
      user_prompt: user_prompt,
      user_prompt_length: isPromptHeld ? 0 : n.length,
      "interaction.sequence": h
    }),
    d = PI() ? e : void 0,
    l = d?.parent ? K.extract(priorContext, {
      traceparent: d.parent.traceparent
    }, p.defaultTextMapGetter) : priorContext,
    m = l === priorContext && ye() && i.TRACEPARENT ? p.propagation.extract(priorContext, {
      traceparent: i.TRACEPARENT,
      tracestate: i.TRACESTATE
    }) : priorContext,
    b = l !== priorContext ? l : m;
  attributes["parent.source"] = l !== priorContext ? "event" : m !== priorContext ? "env" : "none";
  let links = Vt(d);
  attributes.queued_sends = links.length;
  let span_2 = o.startSpan("claude_code.interaction", {
    attributes: attributes,
    links: links
  }, b);
  if (!PI() && !isPromptHeld) Z(span_2, n);
  return R(I, {
    span: span_2,
    startTime: performance.now(),
    attributes: attributes,
    perfettoSpanId: perfettoSpanId,
    priorContext: priorContext,
    promptHandle: Symbol("interaction prompt"),
    isPromptHeld: isPromptHeld
  }), span_2;
}
function Mt(n) {
  return i.OTEL_LOG_USER_PROMPTS && !PI() ? tbe(() => wNe(H().host), void 0, n) : "<REDACTED>";
}
function VIn() {
  return P(I)?.promptHandle;
}
function ips(n, e, r) {
  let s = P(I);
  if (n === void 0 || s?.promptHandle !== n || s.isPromptHeld !== !0 && r === e) return;
  if (s.isPromptHeld = r === void 0, s.span.setAttributes({
    user_prompt: r === void 0 ? "<REDACTED>" : Mt(r),
    user_prompt_length: r?.length ?? 0
  }), !PI()) Z(s.span, r ?? "<REDACTED>");
}
function F_r(n, e, r) {
  let [s, o] = typeof e === "function" ? [void 0, e] : [e, r];
  return Gt(s, () => {
    let u = T();
    Yt(n, s);
    let c = T();
    try {
      return SNe.with(c, o);
    } finally {
      if (T() === c) SNe.enterWith(u);
    }
  });
}
function Gt(contexts, e, fallbackTraceparent) {
  let s = {
    contexts: contexts,
    fallbackTraceparent: fallbackTraceparent
  };
  return SNe.with(T().setValue(It, s), e);
}
function f0e() {
  let n = P(I);
  if (!n) return;
  if (n.perfettoSpanId) bt(n.perfettoSpanId);
  if (!Tq()) {
    C(I, n);
    return;
  }
  let e = Math.max(0, Math.round(performance.now() - n.startTime));
  n.span.setAttributes({
    "interaction.duration_ms": e
  }), n.span.end(), C(I, n);
}
function kdo(model, e, r, s, o, u, c) {
  let perfettoSpanId_2 = EXe() ? ft({
      model: model,
      querySource: u ?? r?.querySource,
      messageId: void 0
    }) : void 0,
    priorContext_2 = T();
  if (!Tq()) {
    if (perfettoSpanId_2) {
      let span_3 = p.trace.getActiveSpan() || y().startSpan("dummy");
      return weakMap.set(span_3, {
        span: span_3,
        startTime: performance.now(),
        attributes: {
          model: model
        },
        perfettoSpanId: perfettoSpanId_2,
        priorContext: priorContext_2
      }), span_3;
    }
    return p.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let d = y(),
    l = T().getValue(L),
    model_2 = PI() ? Gn(model) : model,
    attributes_2 = k("llm_request", {
      model: model_2,
      "gen_ai.system": "anthropic",
      "gen_ai.request.model": model_2,
      "llm_request.context": l ? "tool" : P(I) ? "interaction" : "standalone",
      speed: o ? "fast" : "normal",
      ...(e && U(e))
    }),
    span_4 = d.startSpan("claude_code.llm_request", {
      attributes: attributes_2
    }, priorContext_2);
  if (r?.querySource && !PI()) span_4.setAttribute("query_source", r.querySource);
  let S = zt(u ?? r?.querySource);
  if (S !== void 0) span_4.setAttribute("query_source_safe", S);
  if (e && !pp(e)) {
    if (Ct(span_4, e), !PI()) span_4.setAttributes(b1n(e));
  }
  if (!PI()) at(span_4, r, s, c, e);
  return weakMap.set(span_4, {
    span: span_4,
    startTime: performance.now(),
    attributes: attributes_2,
    perfettoSpanId: perfettoSpanId_2,
    priorContext: priorContext_2
  }), span_4;
}
function vdo(n, {
  attempt: attempt,
  clientRequestId: clientRequestId
}) {
  let s = {
    attempt: attempt
  };
  if (clientRequestId !== void 0) s.client_request_id = clientRequestId;
  if (n && Tq()) n.addEvent("gen_ai.request.attempt", s);
  St("LLM Attempt", "api,attempt", s);
}
var K = new At.W3CTraceContextPropagator();
function Pt(traceparent_2) {
  let e = K.extract(p.ROOT_CONTEXT, {
    traceparent: traceparent_2
  }, p.defaultTextMapGetter);
  return p.trace.getSpanContext(e);
}
function KIn(n, e) {
  if (!n) return;
  let r = weakMap.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let s = Math.max(0, Math.round(performance.now() - r.startTime));
  if (e?.error !== void 0) e = {
    ...e,
    error: tbe(e.accountMemoryKeys ?? (() => wNe(H().host)), e.querySource, e.error)
  };
  if (r.perfettoSpanId) gt(r.perfettoSpanId, {
    ttftMs: e?.ttftMs,
    ttltMs: s,
    promptTokens: e?.inputTokens,
    outputTokens: e?.outputTokens,
    cacheReadTokens: e?.cacheReadTokens,
    cacheCreationTokens: e?.cacheCreationTokens,
    success: e?.success,
    error: e?.error,
    requestSetupMs: e?.requestSetupMs,
    attemptStartTimes: e?.attemptStartTimes,
    requestId: e?.requestId,
    clientRequestId: e?.clientRequestId
  });
  if (!Tq()) return;
  let o = {
    duration_ms: s
  };
  if (e) {
    if (e.inputTokens !== void 0) o.input_tokens = e.inputTokens;
    if (e.outputTokens !== void 0) o.output_tokens = e.outputTokens;
    if (e.cacheReadTokens !== void 0) o.cache_read_tokens = e.cacheReadTokens;
    if (e.cacheCreationTokens !== void 0) o.cache_creation_tokens = e.cacheCreationTokens;
    if (e.success !== void 0) o.success = e.success;
    if (e.statusCode !== void 0) o.status_code = e.statusCode;
    if (Object.assign(o, tt(e.error, e.errorClass)), e.attempt !== void 0) o.attempt = e.attempt;
    if (e.hasToolCall !== void 0) o["response.has_tool_call"] = e.hasToolCall;
    if (e.requestId !== void 0) o.request_id = e.requestId, o["gen_ai.response.id"] = e.requestId;
    if (e.clientRequestId !== void 0) o.client_request_id = e.clientRequestId;
    if (e.ttftMs !== void 0) o.ttft_ms = e.ttftMs;
    if (e.firstContentMs !== void 0) o.first_content_ms = e.firstContentMs;
    if (e.effort !== void 0) o.effort = e.effort;
    if (!PI()) ut(o, e);
  }
  if (r.span.setAttributes(o), e?.stopReason !== void 0) r.span.setAttribute("stop_reason", e.stopReason), r.span.setAttribute("gen_ai.response.finish_reasons", [e.stopReason]);
  if (e?.success === !1) r.span.setStatus(D(e.error));
  if (e?.traceresponse) {
    let context_2 = Pt(e.traceresponse);
    if (context_2) r.span.addLink({
      context: context_2,
      attributes: {
        "link.type": "parent_of"
      }
    });
  }
  r.span.end();
}
function dDi(tool_name, e, r, s, o, u = !1) {
  let perfettoSpanId_3 = EXe() ? lt(tool_name, r) : void 0,
    priorContext_3 = T();
  if (!Tq()) {
    if (perfettoSpanId_3) {
      let span_5 = p.trace.getActiveSpan() || y().startSpan("dummy");
      return R(L, {
        span: span_5,
        startTime: performance.now(),
        attributes: {
          "span.type": "tool",
          tool_name: tool_name
        },
        perfettoSpanId: perfettoSpanId_3,
        priorContext: priorContext_3
      }), span_5;
    }
    return p.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let g = y(),
    tool_name_safe = Kt(tool_name),
    tool_name_2 = PI() ? tool_name_safe : tool_name,
    m = iSe(tool_name_2),
    attributes_3 = k("tool", {
      tool_name: tool_name_2,
      tool_name_safe: tool_name_safe,
      "gen_ai.operation.name": "execute_tool",
      "gen_ai.tool.name": m?.mcpToolName ?? tool_name_2,
      ...(m && {
        "anthropic.mcp.server.name": m.serverName
      }),
      ...(e && U(e)),
      ...r
    }),
    span_6 = g.startSpan("claude_code.tool", {
      attributes: attributes_3
    }, priorContext_3);
  if (e && !pp(e)) {
    if (Ct(span_6, e), !PI()) span_6.setAttributes(b1n(e));
  }
  if (xt(span_6, o), s && !PI()) ct(span_6, tool_name, s, u);
  return R(L, {
    span: span_6,
    startTime: performance.now(),
    attributes: attributes_3,
    perfettoSpanId: perfettoSpanId_3,
    priorContext: priorContext_3
  }), span_6;
}
function cDi(n) {
  let perfettoSpanId_4 = EXe() ? ht("tool_permission") : void 0,
    priorContext_4 = T();
  if (!Tq()) {
    if (perfettoSpanId_4) {
      let span_7 = p.trace.getActiveSpan() || y().startSpan("dummy");
      return R(B, {
        span: span_7,
        startTime: performance.now(),
        attributes: {
          "span.type": "tool.blocked_on_user"
        },
        perfettoSpanId: perfettoSpanId_4,
        priorContext: priorContext_4
      }), span_7;
    }
    return p.trace.getActiveSpan() || y().startSpan("dummy");
  }
  let s = y(),
    attributes_4 = k("tool.blocked_on_user", U(n)),
    span_8 = s.startSpan("claude_code.tool.blocked_on_user", {
      attributes: attributes_4
    }, priorContext_4);
  return R(B, {
    span: span_8,
    startTime: performance.now(),
    attributes: attributes_4,
    perfettoSpanId: perfettoSpanId_4,
    priorContext: priorContext_4
  }), span_8;
}
function uDi(decision, source) {
  let r = P(B);
  if (!r) return;
  if (r.perfettoSpanId) _t(r.perfettoSpanId, {
    decision: decision,
    source: source
  });
  if (!Tq()) {
    C(B, r);
    return;
  }
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
  };
  if (decision) o.decision = decision;
  if (source) o.source = source;
  r.span.setAttributes(o), r.span.end(), C(B, r);
}
function fDi(n, e) {
  let priorContext_5 = T();
  if (!Tq()) return p.trace.getActiveSpan() || y().startSpan("dummy");
  let s = y(),
    attributes_5 = k("tool.execution", U(n)),
    span_9 = s.startSpan("claude_code.tool.execution", {
      attributes: attributes_5
    }, priorContext_5);
  return xt(span_9, e), R(J, {
    span: span_9,
    startTime: performance.now(),
    attributes: attributes_5,
    priorContext: priorContext_5
  }), span_9;
}
function aps(n) {
  if (!Tq()) return;
  let e = P(J);
  if (!e) return;
  let s = {
    duration_ms: Math.max(0, Math.round(performance.now() - e.startTime))
  };
  if (n) {
    if (n.success !== void 0) s.success = n.success;
    if (n.success === !1 && !n.interrupted) s["error.type"] = "tool_error";
    Object.assign(s, tt(n.error, n.errorClass));
  }
  if (e.span.setAttributes(s), n?.success === !1) e.span.setStatus(D(n.error));
  e.span.end(), C(J, e);
}
function CXe(n, e, resultTokens, s = !1) {
  let o = n ? weakMap.get(n) : P(L);
  if (!o || o.ended) return;
  if (o.perfettoSpanId) mt(o.perfettoSpanId, {
    success: !0,
    resultTokens: resultTokens
  });
  if (!Tq()) {
    C(L, o);
    return;
  }
  let c = {
    duration_ms: Math.max(0, Math.round(performance.now() - o.startTime))
  };
  if (e && !0 && !PI()) {
    let h = o.attributes.tool_name || "unknown";
    pt(c, h, e, s);
  }
  if (resultTokens !== void 0) c.result_tokens = resultTokens;
  o.span.setAttributes(c), o.span.end(), C(L, o);
}
function lps(n) {
  return Tq() && zsn() && !PI() && n.isRecording();
}
function pDi(n) {
  if (typeof n === "string") return n;
  if (!Array.isArray(n)) return "";
  return n.map(item => item?.type === "text" ? String(item.text) : `[${String(item?.type ?? "unknown")}]`).join(`
`);
}
function dps(n, e, r) {
  if (!lps(n)) return;
  let s = weakMap.get(n);
  if (!s || s.ended) return;
  let o = {};
  for (let [u, c] of Object.entries(r)) if (typeof c === "string") {
    let {
      content: content_5,
      truncated: truncated_10
    } = yL(c);
    if (o[u] = content_5, truncated_10) o[`${u}_truncated`] = !0, o[`${u}_original_length`] = c.length;
  } else o[u] = c;
  s.span.addEvent(e, o);
}
function cps(n) {
  if (!Tq()) return;
  let e = n.spanContext();
  if (!e.traceId || e.traceId === "00000000000000000000000000000000") return;
  let r = p.trace.setSpan(p.context.active(), n),
    s = {};
  return K.inject(r, s, p.defaultTextMapSetter), s.traceparent;
}
function rze() {
  if (!Tq()) return;
  let n = p.trace.getSpan(T());
  if (!n) return;
  return cps(n);
}
function mDi(traceparent_3) {
  if (!traceparent_3 || !Tq()) return;
  let e = T(),
    r = K.extract(e, {
      traceparent: traceparent_3
    }, p.defaultTextMapGetter);
  return r === e ? void 0 : r;
}
function hDi(n, e) {
  return n === void 0 ? e() : SNe.with(n, e);
}
function H_r(n, e) {
  if (!Kye()) return;
  return y().startSpan(n, {
    attributes: {
      ...Rt(),
      "span.type": e.spanType,
      ...(PI() ? Yi(e.attrs ?? {}, (r, s) => Wt.has(s)) : e.attrs),
      ...(!PI() && e.contentAttrs)
    }
  }, T());
}
async function $_r(n, e, r) {
  let s = H_r(n, e);
  if (!s) return r(void 0);
  let o = p.trace.setSpan(T(), s);
  return SNe.with(o, async () => {
    try {
      return await r(s);
    } catch (error) {
      if (!e.isExpectedError?.(error)) {
        let message_2 = error instanceof Error && e.withholdErrorText?.(error) ? sps(error) : void 0;
        if (error instanceof Error && !PI()) s.recordException(message_2 === void 0 ? error : {
          name: error.name,
          message: message_2
        });
        w7t(s, message_2 ?? (error instanceof Error ? error.message : String(error)));
      }
      throw error;
    } finally {
      s.end();
    }
  });
}
function gDi(n) {
  if (!Kye()) return;
  let priorContext_6 = T(),
    agent_id = i$n(n.agentId),
    parent_agent_id = n.parentAgentId !== void 0 ? i$n(n.parentAgentId) : void 0,
    attributes_6 = k("subagent.spawn", {
      ...(agent_id !== void 0 && {
        agent_id: agent_id
      }),
      agent_type: PI() && !n.isBuiltIn ? "custom" : n.agentType,
      ...(parent_agent_id !== void 0 && {
        parent_agent_id: parent_agent_id
      })
    }),
    span_10 = y().startSpan("claude_code.subagent.spawn", {
      attributes: attributes_6
    }, priorContext_6);
  return R(Et, {
    span: span_10,
    startTime: performance.now(),
    attributes: attributes_6,
    priorContext: priorContext_6
  }), span_10;
}
function yDi(n, e) {
  if (!n) return;
  let r = weakMap.get(n);
  if (!r || r.ended) return;
  if (e?.success !== void 0) n.setAttribute("success", e.success);
  if (e?.error) n.setAttributes(tt(e.error, e.errorClass)), w7t(n, e.error);
  n.end(), C(Et, r);
}
function kt() {
  return xx() || Kye();
}
function _Di(hook_event, e, num_hooks, s, o) {
  if (!kt()) return p.trace.getActiveSpan() || y().startSpan("dummy");
  let u = y(),
    priorContext_7 = T(),
    {
      content: h
    } = yL(s),
    attributes_7 = k("hook", {
      ...U(o),
      hook_event: hook_event,
      hook_name: PI() ? hook_event : e,
      num_hooks: num_hooks,
      ...(mf() && !PI() && {
        hook_definitions: h
      })
    }),
    span_11 = u.startSpan("claude_code.hook", {
      attributes: attributes_7
    }, priorContext_7);
  return weakMap.set(span_11, {
    span: span_11,
    startTime: performance.now(),
    attributes: attributes_7,
    priorContext: priorContext_7
  }), span_11;
}
function bDi(n, e) {
  if (!kt()) return;
  let r = weakMap.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
  };
  if (e) {
    if (e.numSuccess !== void 0) o.num_success = e.numSuccess;
    if (e.numBlocking !== void 0) o.num_blocking = e.numBlocking;
    if (e.numNonBlockingError !== void 0) o.num_non_blocking_error = e.numNonBlockingError;
    if (e.numCancelled !== void 0) o.num_cancelled = e.numCancelled;
  }
  if (r.span.setAttributes(o), e && (e.numNonBlockingError ?? 0) > 0) r.span.setStatus(D(`${e.numNonBlockingError} hook(s) failed`));
  r.span.end();
}
export { GIn, uDt, xI, yL, aDi, xx, lDi, EXe, D_r, TXe, ops, Tq, Kye, L_r, w7t, PI, sps, N_r, Sdo, wdo, VIn, ips, F_r, f0e, kdo, vdo, KIn, dDi, cDi, uDi, fDi, aps, CXe, lps, pDi, dps, cps, rze, mDi, hDi, H_r, $_r, gDi, yDi, _Di, bDi };