// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Fe, ws } from "B:/~BUN/root/chunk-rwkgcmm8.js";
import { at, j, K, we, cS, cT, pye, xQ, de, hc } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Da, oi, Pw, YBt, jm, rr, yy } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { dNt } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { nl, sm } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { yi } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { Wle, I_, me, ut } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Yke, Qp, fdn, kc, On, V$t, Ele, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { jd, Ec } from "B:/~BUN/root/chunk-we0fhavr.js";
import { nv } from "B:/~BUN/root/chunk-0n2201tc.js";
import { Ne } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { jc } from "B:/~BUN/root/chunk-183sjefx.js";
import { rDr } from "B:/~BUN/root/chunk-hkh6hras.js";
import { hr } from "B:/~BUN/root/chunk-7gwemd3j.js";
import { Df } from "B:/~BUN/root/chunk-h2myanpn.js";
import { MWn } from "B:/~BUN/root/chunk-1fjjnb3f.js";
import { rFt, E3, Emt, oFt, Ske, iIe, sFt, Fqn, wke, Sxo, wxo, dIr, wi } from "B:/~BUN/root/chunk-yjayxywk.js";
import { fin } from "B:/~BUN/root/chunk-1s3ejbv6.js";
import { jfe } from "B:/~BUN/root/chunk-f3f5k3wx.js";
import { Fv } from "B:/~BUN/root/chunk-2j35ee92.js";
import { GG, H4n } from "B:/~BUN/root/chunk-xpy44yvr.js";
import { Mn } from "B:/~BUN/root/chunk-j0ghr71r.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
function ben() {
  try {
    return dNt();
  } catch (error) {
    return l(H(error)), !0;
  }
}
function Sen() {
  try {
    return nv();
  } catch (error) {
    return l(H(error)), !0;
  }
}
function s_o(n) {
  if (!Df(n)) return;
  let e = Pw(n).slice(0, -`@${oi}`.length);
  for (let [r, s] of hr().builtinPlugins) if (jm(r, e)) return s.enabledFromTrustedSettingsOnly === !0 ? `${r}@${oi}` : void 0;
  return;
}
var zq = n => s_o(n) !== void 0;
import { join as rt } from "path";
var dEr = ["settings.json", "settings.local.json"];
function G9() {
  let n = {};
  if (Wle()) return n;
  for (let e of hc()) for (let r of dEr) {
    let {
      settings: settings
    } = I_(rt(e, ".claude", r));
    if (!settings?.enabledPlugins) continue;
    Object.assign(n, settings.enabledPlugins);
  }
  return n;
}
function cEr() {
  if (Wle()) return {};
  let n = hc(),
    key = `${yi().epoch}\x00${n.join("\x00")}`,
    r = Ne();
  if (r.addDirMarketplacesMemo?.key === key) return r.addDirMarketplacesMemo.value;
  let value = {};
  for (let o of n) for (let i of dEr) {
    let {
      settings: settings_2
    } = I_(rt(o, ".claude", i));
    if (!settings_2?.extraKnownMarketplaces) continue;
    for (let [c, p] of Object.entries(settings_2.extraKnownMarketplaces)) value[c] = Dt(c, p);
  }
  return r.addDirMarketplacesMemo = {
    key: key,
    value: value
  }, value;
}
function Dt(n, e) {
  let source = e.source;
  if (source.source === "url") {
    let {
      headersHelper: headersHelper,
      headers: headers,
      ...i
    } = source;
    if (headersHelper !== void 0) t(`--add-dir marketplace ${yy(n)}: dropping its headersHelper (an --add-dir declaration may not run commands)`, {
      level: "warn"
    });
    return {
      ...e,
      source: {
        ...i,
        ...(headers && {
          headers: MWn(headers, `--add-dir marketplace ${yy(n)}`)
        })
      }
    };
  }
  if (source.source === "settings") return {
    ...e,
    source: {
      ...source,
      plugins: source.plugins.filter(item => {
        let o = typeof item.source === "object" && item.source.source === "command";
        if (o) t(`--add-dir marketplace ${yy(n)}: dropping command-sourced entry ${yy(item.name)}`, {
          level: "warn"
        });
        return !o;
      }).map(({
        headersHelper: headersHelper_2,
        headers: headers_2,
        ...i
      }) => {
        if (headersHelper_2 !== void 0) t(`--add-dir marketplace ${yy(n)}: dropping entry ${yy(i.name)}'s headersHelper (an --add-dir declaration may not run commands)`, {
          level: "warn"
        });
        return {
          ...i,
          ...(headers_2 && {
            headers: MWn(headers_2, `--add-dir marketplace ${yy(n)} entry ${yy(i.name)}`)
          })
        };
      })
    }
  };
  return e;
}
async function r5e() {
  return i_o();
}
function i_o() {
  let n = ut(),
    e = [],
    r = G9();
  for (let [s, o] of Object.entries(r)) {
    if (zq(s)) continue;
    if (s.includes("@") && o) e.push(s);
  }
  if (n.enabledPlugins) for (let [s, o] of Object.entries(n.enabledPlugins)) {
    if (!s.includes("@")) continue;
    let i = zq(s) ? H4n(s) : o,
      u = e.indexOf(s);
    if (i) {
      if (u === -1) e.push(s);
    } else if (u !== -1) e.splice(u, 1);
  }
  return e;
}
function q6() {
  let n = new Map(),
    e = G9();
  for (let [s, o] of Object.entries(e)) {
    if (!s.includes("@")) continue;
    if (zq(s)) continue;
    if (o === !0) n.set(s, "flag");else if (o === !1) n.delete(s);
  }
  let r = [{
    scope: "managed",
    source: "policySettings"
  }, {
    scope: "user",
    source: "userSettings"
  }, {
    scope: "project",
    source: "projectSettings"
  }, {
    scope: "local",
    source: "localSettings"
  }, {
    scope: "flag",
    source: "flagSettings"
  }];
  for (let {
    scope: scope,
    source: source_2
  } of r) {
    let i = me(source_2);
    if (!i?.enabledPlugins) continue;
    for (let [u, c] of Object.entries(i.enabledPlugins)) {
      if (!u.includes("@")) continue;
      if (u in e && e[u] !== c) t(`Plugin ${u} from --add-dir (${e[u]}) overridden by ${source_2} (${c})`);
      if (!GG.includes(source_2) && zq(u)) continue;
      if (c === !0) n.set(u, scope);else if (c === !1) n.delete(u);
    }
  }
  return t(`Found ${n.size} enabled plugins with scopes: ${Array.from(n.entries()).map(([s, o]) => `${s}(${o})`).join(", ")}`), n;
}
function wen(n, e) {
  let r = n.get(e);
  if (r !== void 0 || !YBt(e)) return r;
  let s = rr(e);
  for (let [o, i] of n) if (rr(o) === s) return i;
  return;
}
function st() {
  try {
    let n = Ne();
    return i_o().some(item => !Df(item)) || [...n.pluginsWithHooks].some(item => !Df(item)) || n.loadedModules.some(item => !Fv(item)) || dNt() || nv() || cS().length > 0 || cT().length > 0 || pye().length > 0 || xQ().length > 0;
  } catch (error) {
    return l(H(error)), !0;
  }
}
function RUe() {
  try {
    let n = Ne();
    return (n.hookRegistrationOwed || n.hookRegistrationInFlight !== void 0 || n.hooksUnknownCause !== void 0 || n.hookRegistrationRanBlind || Sen()) && jfe() && st();
  } catch (error) {
    return l(H(error)), !0;
  }
}
function ot() {
  try {
    return Ne().loadedModules.some(item => !Fv(item) && item.hooks("command.run"));
  } catch (error) {
    return l(H(error)), !0;
  }
}
function Nct(n) {
  try {
    return RUe() || ot() || Ne().loadedModules.some(item => !Fv(item) && (item.hooks("prompt.submit") || item.hooks("session.append") && !(n === "queue-record" && jc(item) && rDr(item.matcherFor("session.append"), "door", "queue"))));
  } catch (error) {
    return l(H(error)), !0;
  }
}
function KR(n) {
  return Nct(n) || ben();
}
var d = ve(nl(), 1),
  vt = ve(sm(), 1);
import { createHash as Ft } from "crypto";
var Nt = 61440;
function Bt() {
  return Math.min(a.CLAUDE_CODE_OTEL_CONTENT_MAX_LENGTH ?? Nt, a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0, a.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT ?? 1 / 0);
}
function ZP(content) {
  let e = Bt();
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
  return a.OTEL_LOG_USER_PROMPTS;
}
class ct {
  seenHashes = new Set();
  lastReportedMessage = new Map();
  emittedUserPromptForSessionId = void 0;
}
var dt = new at(() => new ct());
function jTs() {
  let n = dt.of(j());
  n.seenHashes.clear(), n.lastReportedMessage.clear();
}
function fx() {
  if (!(a.ENABLE_BETA_TRACING_DETAILED && Boolean(process.env.BETA_TRACING_ENDPOINT) && !de())) return !1;
  return we() || E("tengu_trace_lantern", !1);
}
function X(n) {
  return Ft("sha256").update(n).digest("hex").slice(0, 12);
}
function Ht(n) {
  return `sp_${X(n)}`;
}
function it(n) {
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
      let u = Y(content_2);
      if (u) systemReminders.push(u);else if (e) contextParts.push(`[USER]
${content_2}`);
    } else if (Array.isArray(content_2)) {
      for (let u of content_2) if (u.type === "text") {
        let c = Y(u.text);
        if (c) systemReminders.push(c);else if (e) contextParts.push(`[USER]
${u.text}`);
      } else if (u.type === "tool_result") {
        if (typeof u.content === "string") {
          let c = Y(u.content);
          if (c) systemReminders.push(c);else if (e) contextParts.push(`[TOOL RESULT: ${u.tool_use_id}]
${u.content}`);
        } else if (e) contextParts.push(`[TOOL RESULT: ${u.tool_use_id}]
${_(u.content)}`);
      }
    }
  }
  return {
    contextParts: contextParts,
    systemReminders: systemReminders
  };
}
function jt(n, e) {
  let {
    systemReminders: systemReminders_2
  } = G(n, !1);
  return {
    contextParts: [e],
    systemReminders: systemReminders_2.map(() => e)
  };
}
function Kt(n, e, r) {
  let s = Fqn(n.map(item => item.message), r, e.map(item => item.message));
  return n.map((item, index) => s[index] === item.message ? item : {
    ...item,
    message: s[index]
  });
}
var Wt = () => iIe(j().host);
function Z(n, e) {
  if (!fx() || !w()) return;
  let {
    content: r,
    truncated: truncated
  } = ZP(`[USER PROMPT]
${Ske(() => iIe(j().host), void 0, e)}`);
  n.setAttributes({
    new_context: r,
    ...(truncated && {
      new_context_truncated: !0,
      new_context_original_length: e.length
    })
  });
}
function pt(n, e, r, s) {
  if (!fx()) return;
  let o = dt.of(j()),
    i = c => r !== void 0 && s === void 0 ? {
      withheld: "account_memory_text_not_identified"
    } : oFt(s ?? Wt, e?.querySource, c),
    u = c => {
      let p = i(g => sFt(c, g));
      return "withheld" in p ? Emt(p.withheld) : p.value;
    };
  if (e?.systemPrompt) {
    let {
        systemPrompt: systemPrompt
      } = e,
      system_prompt_hash = Ht(systemPrompt),
      g,
      m = () => g ??= i(S => sFt(systemPrompt, S));
    if (n.setAttribute("system_prompt_hash", system_prompt_hash), w()) {
      let S = m();
      n.setAttribute("system_prompt_preview", "withheld" in S ? Emt(S.withheld) : S.value.slice(0, 500));
    }
    n.setAttribute("system_prompt_length", e.systemPrompt.length);
    let h = w() ? m() : void 0;
    if (h !== void 0 && "value" in h && !o.seenHashes.has(system_prompt_hash)) {
      o.seenHashes.add(system_prompt_hash);
      let {
        content: S,
        truncated: truncated_2
      } = ZP(h.value);
      wi("system_prompt", {
        system_prompt_hash: system_prompt_hash,
        system_prompt: S,
        system_prompt_length: String(e.systemPrompt.length),
        ...(truncated_2 && {
          system_prompt_truncated: "true"
        })
      });
    }
  }
  if (e?.userSystemPrompt && w()) {
    let c = K();
    if (o.emittedUserPromptForSessionId !== c) {
      o.emittedUserPromptForSessionId = c;
      let {
        content: p,
        truncated: truncated_3
      } = ZP(u(e.userSystemPrompt));
      n.setAttributes({
        user_system_prompt: p,
        ...(truncated_3 && {
          user_system_prompt_truncated: !0,
          user_system_prompt_original_length: e.userSystemPrompt.length
        })
      });
    }
  }
  if (e?.tools) try {
    let p = J(e.tools).map(item => {
      let json = _(item),
        hash = X(json);
      return {
        name: typeof item.name === "string" ? item.name : "unknown",
        hash: hash,
        json: json
      };
    });
    n.setAttribute("tools", _(p.map(({
      name: name,
      hash: hash_2
    }) => ({
      name: name,
      hash: hash_2
    })))), n.setAttribute("tools_count", p.length);
    for (let {
      name: name_2,
      hash: m,
      json: json_2
    } of p) if (!o.seenHashes.has(`tool_${m}`)) {
      o.seenHashes.add(`tool_${m}`);
      let {
        content: S,
        truncated: truncated_4
      } = ZP(json_2);
      wi("tool", {
        tool_name: On(name_2),
        tool_hash: m,
        tool: S,
        ...(truncated_4 && {
          tool_truncated: "true"
        })
      });
    }
  } catch {
    n.setAttribute("tools_parse_error", !0);
  }
  if (r && r.length > 0 && e?.querySource) {
    let querySource = e.querySource,
      p = o.lastReportedMessage.get(querySource),
      g = 0;
    if (p) {
      let f = r[p.index];
      if (f && it(f) === p.hash) g = p.index + 1;
    }
    let m = r.slice(g).filter(item => item.type === "user" || item.type === "api_system");
    if (m.length > 0) {
      let f = w(),
        y = f ? i(M => G(Kt(m, r, M), !0)) : {
          value: G(m, !1)
        },
        {
          contextParts: contextParts_2,
          systemReminders: systemReminders_3
        } = "withheld" in y ? jt(m, Emt(y.withheld)) : y.value;
      if (n.setAttribute("new_context_message_count", m.length), systemReminders_3.length > 0) n.setAttribute("system_reminders_count", systemReminders_3.length);
      if (contextParts_2.length > 0 && f) {
        let M = contextParts_2.join(`

---

`),
          {
            content: W,
            truncated: truncated_5
          } = ZP(M);
        n.setAttributes({
          new_context: W,
          ...(truncated_5 && {
            new_context_truncated: !0,
            new_context_original_length: M.length
          })
        });
      }
      if (systemReminders_3.length > 0 && f) {
        let M = systemReminders_3.join(`

---

`),
          {
            content: W,
            truncated: truncated_6
          } = ZP(M);
        n.setAttributes({
          system_reminders: W,
          ...(truncated_6 && {
            system_reminders_truncated: !0,
            system_reminders_original_length: M.length
          })
        });
      }
    }
    let index_2 = r.length - 1,
      S = r[index_2];
    if (S) o.lastReportedMessage.set(querySource, {
      index: index_2,
      hash: it(S)
    });
  }
}
function ft(n, e) {
  if (!fx() || !w() || !e) return;
  let r = s => Ske(e.accountMemoryKeys, e.querySource, s);
  if (e.modelOutput !== void 0) {
    let {
      content: content_3,
      truncated: truncated_7
    } = ZP(r(e.modelOutput));
    if (n["response.model_output"] = content_3, truncated_7) n["response.model_output_truncated"] = !0, n["response.model_output_original_length"] = e.modelOutput.length;
  }
}
function lt(n, e, r, s = !1) {
  if (!fx() || !kc()) return;
  let {
    content: o,
    truncated: truncated_8
  } = ZP(`[TOOL INPUT: ${e}]
${s ? E3(r) : r}`);
  n.setAttributes({
    tool_input: o,
    ...(truncated_8 && {
      tool_input_truncated: !0,
      tool_input_original_length: r.length
    })
  });
}
function gt(n, e, r, s = !1) {
  if (!fx() || !V$t()) return;
  let {
    content: content_4,
    truncated: truncated_9
  } = ZP(`[TOOL RESULT: ${e}]
${s ? E3(r) : r}`);
  if (n.new_context = content_4, truncated_9) n.new_context_truncated = !0, n.new_context_original_length = r.length;
}
class mt {
  recorder = null;
}
var zt = new z(() => new mt());
function A() {
  return zt.of(j().host).recorder;
}
function WTs() {
  let CLAUDE_CODE_PERFETTO_TRACE = a.CLAUDE_CODE_PERFETTO_TRACE;
  t(`[Perfetto] initializePerfettoTracing called, env value: ${CLAUDE_CODE_PERFETTO_TRACE}`);
}
function AUe() {
  return A() !== null;
}
function lBn(n, e, r) {
  let s = A();
  if (!s) return;
  s.registerAgent(n, e, r);
}
function xUe(n) {
  let e = A();
  if (!e) return;
  e.unregisterAgent(n);
}
function ht(n) {
  let e = A();
  if (!e) return "";
  return e.startLLMRequestSpan(n);
}
function St(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endLLMRequestSpan(n, e);
}
function _t(n, e) {
  let r = A();
  if (!r) return "";
  return r.startToolSpan(n, e);
}
function Tt(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endToolSpan(n, e);
}
function bt(n) {
  let e = A();
  if (!e) return "";
  return e.startUserInputSpan(n);
}
function yt(n, e) {
  let r = A();
  if (!r || !n) return;
  r.endUserInputSpan(n, e);
}
function Et(n, e, r) {
  let s = A();
  if (!s) return;
  s.emitInstant(n, e, r);
}
function At(n) {
  let e = A();
  if (!e) return "";
  return e.startInteractionSpan(n);
}
function It(n) {
  let e = A();
  if (!e || !n) return;
  e.endInteractionSpan(n);
}
var weakMap = new WeakMap(),
  I = d.createContextKey("cc.interaction_state"),
  L = d.createContextKey("cc.tool_state"),
  q = d.createContextKey("cc.blocked_state"),
  Q = d.createContextKey("cc.execution_state"),
  Pt = d.createContextKey("cc.subagent_state"),
  Rt = d.createContextKey("cc.turn_trace_contexts");
class Mt {
  lastSequence = 0;
}
var Vt = new z(() => new Mt());
function a_o() {
  let n = process.env.CLAUDE_CODE_ENHANCED_TELEMETRY_BETA ?? process.env.ENABLE_ENHANCED_TELEMETRY_BETA;
  if (Fe(n)) return !0;
  if (ws(n)) return !1;
  return !1;
}
function cj() {
  return a_o() || fx();
}
function bie() {
  return !1;
}
function dBn(n, e) {
  return;
}
function DMt(n, e) {
  n.setStatus(B(e));
}
function kt(n, e) {
  if (!e) return;
  n.setAttribute("tool_use_id", e), n.setAttribute("gen_ai.tool.call.id", e);
}
function Yt(n) {
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
function CC() {
  return fin();
}
function Gt() {
  let n = {},
    e = K();
  if (O.test(e)) n["session.id"] = e;
  let CLAUDE_CODE_REMOTE_SESSION_ID = a.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (CLAUDE_CODE_REMOTE_SESSION_ID !== void 0 && O.test(CLAUDE_CODE_REMOTE_SESSION_ID)) n["ccr.session.id"] = CLAUDE_CODE_REMOTE_SESSION_ID;
  return n;
}
function Ct() {
  return {
    ...(CC() ? Gt() : rFt()),
    "gen_ai.provider.name": Yt(xe())
  };
}
var Xt = new Set(["rpc.service", "mcp_tool"]);
function U(n) {
  if (!CC()) return n;
  let e = /^a(?:[\w-]{1,63}-)?([0-9a-f]{16})$/.exec(n);
  if (e) return `a${e[1]}`;
  return /^(?:hook-agent-)?[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(n) ? n : void 0;
}
var O = /^[A-Za-z0-9_.-]{1,64}$/,
  xt = {
    [Ec]: /^[a-z][a-z0-9_]{0,39}$/,
    [jd]: /^[A-Za-z][A-Za-z0-9_]{0,39}$/,
    playwright: /^browser_[a-z_]{1,40}$/
  };
function Zt(n) {
  if (n.startsWith("mcp__")) {
    let [, e, ...r] = n.split("__"),
      s = e !== void 0 && Object.hasOwn(xt, e) ? xt[e] : void 0;
    return s !== void 0 && s.test(r.join("__")) && O.test(n) ? n : "mcp_other";
  }
  return !n.includes("__") && O.test(n) ? n : "other";
}
function Jt(n) {
  let e = Yke(n)?.replaceAll(":", ".");
  return e !== void 0 && O.test(e) ? e : void 0;
}
var Qt = /^[A-Za-z][A-Za-z0-9_]{0,47}$/;
function et(error_2, e) {
  let error_class = e?.replace(/[^A-Za-z0-9_]/g, "_");
  return {
    ...(error_2 !== void 0 && !CC() && {
      error: error_2
    }),
    ...(error_class !== void 0 && Qt.test(error_class) && {
      error_class: error_class
    })
  };
}
function l_o(n) {
  return `${n.name} (${n.message.length} chars; text not recorded)`;
}
function B(message) {
  return {
    code: d.SpanStatusCode.ERROR,
    ...(message && !CC() && {
      message: message
    })
  };
}
function b() {
  return d.trace.getTracer("com.anthropic.claude_code.tracing", "1.0.0");
}
function T() {
  return dIr();
}
function k(n) {
  let e = T().getValue(n);
  return e && !e.ended ? e : void 0;
}
function P(n, e) {
  weakMap.set(e.span, e);
  let r = d.trace.setSpan(e.priorContext, e.span).setValue(n, e);
  if (wke.enterWith(r), n === I) Sxo(r);
}
function R(n, e) {
  if (e.ended = !0, n === I && wxo()?.getValue(n) === e) Sxo(void 0);
  if (T().getValue(n) === e) wke.enterWith(e.priorContext);
}
function C(n, e = {}) {
  return {
    ...Ct(),
    "span.type": n,
    ...e
  };
}
function te(n) {
  if (!n) return [];
  return n.linked.flatMap(({
    traceparent: traceparent
  }) => {
    let context = qt(traceparent);
    return context ? [{
      context: context,
      attributes: {
        "link.type": "queued_send"
      }
    }] : [];
  });
}
function wt() {
  return T().getValue(Rt);
}
function cBn() {
  return wt()?.contexts;
}
function uEr() {
  let n = wt();
  if (n) n.contexts = void 0;
}
function Lt(n, e) {
  if (Qp(e)) return;
  let r = e.agentId !== void 0 ? U(e.agentId) : void 0;
  if (r !== void 0) n.setAttribute("agent_id", r);
  let s = e.parentAgentId !== void 0 ? U(e.parentAgentId) : void 0;
  if (s !== void 0) n.setAttribute("parent_agent_id", s);
}
function tt() {
  let n = K();
  return !CC() || O.test(n) ? {
    "gen_ai.conversation.id": n
  } : {};
}
function D(n) {
  switch (n.agentType) {
    case "main":
      return tt();
    case "subagent":
      {
        if (n.isMainSession) return tt();
        let e = U(n.agentId);
        return e !== void 0 ? {
          "gen_ai.conversation.id": e
        } : {};
      }
    case "teammate":
      return {};
  }
}
function ee(n, e) {
  let perfettoSpanId = AUe() ? At(n) : void 0,
    priorContext = T();
  if (!cj()) {
    if (perfettoSpanId) {
      let span = d.trace.getActiveSpan() || b().startSpan("dummy");
      return P(I, {
        span: span,
        startTime: performance.now(),
        attributes: {
          "span.type": "interaction"
        },
        perfettoSpanId: perfettoSpanId,
        priorContext: priorContext
      }), span;
    }
    return d.trace.getActiveSpan() || b().startSpan("dummy");
  }
  let o = b(),
    isPromptHeld = KR(),
    user_prompt = isPromptHeld ? "<REDACTED>" : Ot(n),
    c = ++Vt.of(j().host).lastSequence,
    attributes = C("interaction", {
      "gen_ai.operation.name": "invoke_agent",
      ...tt(),
      user_prompt: user_prompt,
      user_prompt_length: isPromptHeld ? 0 : n.length,
      "interaction.sequence": c
    }),
    g = CC() ? e : void 0,
    m = g?.parent ? F.extract(priorContext, {
      traceparent: g.parent.traceparent
    }, d.defaultTextMapGetter) : priorContext,
    h = m === priorContext && we() && a.TRACEPARENT ? d.propagation.extract(priorContext, {
      traceparent: a.TRACEPARENT,
      tracestate: a.TRACESTATE
    }) : priorContext,
    S = m !== priorContext ? m : h;
  attributes["parent.source"] = m !== priorContext ? "event" : h !== priorContext ? "env" : "none";
  let links = te(g);
  attributes.queued_sends = links.length;
  let span_2 = o.startSpan("claude_code.interaction", {
    attributes: attributes,
    links: links
  }, S);
  if (!CC() && !isPromptHeld) Z(span_2, n);
  return P(I, {
    span: span_2,
    startTime: performance.now(),
    attributes: attributes,
    perfettoSpanId: perfettoSpanId,
    priorContext: priorContext,
    promptHandle: Symbol("interaction prompt"),
    isPromptHeld: isPromptHeld
  }), span_2;
}
function Ot(n) {
  return a.OTEL_LOG_USER_PROMPTS && !CC() ? Ske(() => iIe(j().host), void 0, n) : "<REDACTED>";
}
function ven() {
  return k(I)?.promptHandle;
}
function d_o(n, e, r) {
  let s = k(I);
  if (n === void 0 || s?.promptHandle !== n || s.isPromptHeld !== !0 && r === e) return;
  if (s.isPromptHeld = r === void 0, s.span.setAttributes({
    user_prompt: r === void 0 ? "<REDACTED>" : Ot(r),
    user_prompt_length: r?.length ?? 0
  }), !CC()) Z(s.span, r ?? "<REDACTED>");
}
function uBn(n, e, r) {
  let [contexts, o] = typeof e === "function" ? [void 0, e] : [e, r],
    i = {
      contexts: contexts
    };
  return wke.with(T().setValue(Rt, i), () => {
    let u = T();
    ee(n, contexts);
    let c = T();
    try {
      return wke.with(c, o);
    } finally {
      if (T() === c) wke.enterWith(u);
    }
  });
}
function Kwe() {
  let n = k(I);
  if (!n) return;
  if (n.perfettoSpanId) It(n.perfettoSpanId);
  if (!cj()) {
    R(I, n);
    return;
  }
  let e = Math.max(0, Math.round(performance.now() - n.startTime));
  n.span.setAttributes({
    "interaction.duration_ms": e
  }), n.span.end(), R(I, n);
}
function pEr(model, e, r, s, o, i, u) {
  let perfettoSpanId_2 = AUe() ? ht({
      model: model,
      querySource: i ?? r?.querySource,
      messageId: void 0
    }) : void 0,
    priorContext_2 = T();
  if (!cj()) {
    if (perfettoSpanId_2) {
      let span_3 = d.trace.getActiveSpan() || b().startSpan("dummy");
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
    return d.trace.getActiveSpan() || b().startSpan("dummy");
  }
  let g = b(),
    m = T().getValue(L),
    model_2 = CC() ? Mn(model) : model,
    attributes_2 = C("llm_request", {
      model: model_2,
      "gen_ai.system": "anthropic",
      "gen_ai.request.model": model_2,
      "llm_request.context": m ? "tool" : k(I) ? "interaction" : "standalone",
      speed: o ? "fast" : "normal",
      ...(e && D(e))
    }),
    span_4 = g.startSpan("claude_code.llm_request", {
      attributes: attributes_2
    }, priorContext_2);
  if (r?.querySource && !CC()) span_4.setAttribute("query_source", r.querySource);
  let y = Jt(i ?? r?.querySource);
  if (y !== void 0) span_4.setAttribute("query_source_safe", y);
  if (e && !Qp(e)) {
    if (Lt(span_4, e), !CC()) span_4.setAttributes(fdn(e));
  }
  if (!CC()) pt(span_4, r, s, u);
  return weakMap.set(span_4, {
    span: span_4,
    startTime: performance.now(),
    attributes: attributes_2,
    perfettoSpanId: perfettoSpanId_2,
    priorContext: priorContext_2
  }), span_4;
}
function fEr(n, {
  attempt: attempt,
  clientRequestId: clientRequestId
}) {
  let s = {
    attempt: attempt
  };
  if (clientRequestId !== void 0) s.client_request_id = clientRequestId;
  if (n && cj()) n.addEvent("gen_ai.request.attempt", s);
  Et("LLM Attempt", "api,attempt", s);
}
var F = new vt.W3CTraceContextPropagator();
function qt(traceparent_2) {
  let e = F.extract(d.ROOT_CONTEXT, {
    traceparent: traceparent_2
  }, d.defaultTextMapGetter);
  return d.trace.getSpanContext(e);
}
function ken(n, e) {
  if (!n) return;
  let r = weakMap.get(n);
  if (!r || r.ended) return;
  r.ended = !0;
  let s = Math.max(0, Math.round(performance.now() - r.startTime));
  if (e?.error !== void 0) e = {
    ...e,
    error: Ske(e.accountMemoryKeys ?? (() => iIe(j().host)), e.querySource, e.error)
  };
  if (r.perfettoSpanId) St(r.perfettoSpanId, {
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
  if (!cj()) return;
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
    if (Object.assign(o, et(e.error, e.errorClass)), e.attempt !== void 0) o.attempt = e.attempt;
    if (e.hasToolCall !== void 0) o["response.has_tool_call"] = e.hasToolCall;
    if (e.requestId !== void 0) o.request_id = e.requestId, o["gen_ai.response.id"] = e.requestId;
    if (e.clientRequestId !== void 0) o.client_request_id = e.clientRequestId;
    if (e.ttftMs !== void 0) o.ttft_ms = e.ttftMs;
    if (e.firstContentMs !== void 0) o.first_content_ms = e.firstContentMs;
    if (e.effort !== void 0) o.effort = e.effort;
    if (!CC()) ft(o, e);
  }
  if (r.span.setAttributes(o), e?.stopReason !== void 0) r.span.setAttribute("stop_reason", e.stopReason), r.span.setAttribute("gen_ai.response.finish_reasons", [e.stopReason]);
  if (e?.success === !1) r.span.setStatus(B(e.error));
  if (e?.traceresponse) {
    let context_2 = qt(e.traceresponse);
    if (context_2) r.span.addLink({
      context: context_2,
      attributes: {
        "link.type": "parent_of"
      }
    });
  }
  r.span.end();
}
function zTs(tool_name, e, r, s, o, i = !1) {
  let perfettoSpanId_3 = AUe() ? _t(tool_name, r) : void 0,
    priorContext_3 = T();
  if (!cj()) {
    if (perfettoSpanId_3) {
      let span_5 = d.trace.getActiveSpan() || b().startSpan("dummy");
      return P(L, {
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
    return d.trace.getActiveSpan() || b().startSpan("dummy");
  }
  let p = b(),
    tool_name_safe = Zt(tool_name),
    tool_name_2 = CC() ? tool_name_safe : tool_name,
    h = Ele(tool_name_2),
    attributes_3 = C("tool", {
      tool_name: tool_name_2,
      tool_name_safe: tool_name_safe,
      "gen_ai.operation.name": "execute_tool",
      "gen_ai.tool.name": h?.mcpToolName ?? tool_name_2,
      ...(h && {
        "anthropic.mcp.server.name": h.serverName
      }),
      ...(e && D(e)),
      ...r
    }),
    span_6 = p.startSpan("claude_code.tool", {
      attributes: attributes_3
    }, priorContext_3);
  if (e && !Qp(e)) {
    if (Lt(span_6, e), !CC()) span_6.setAttributes(fdn(e));
  }
  if (kt(span_6, o), s && !CC()) lt(span_6, tool_name, s, i);
  return P(L, {
    span: span_6,
    startTime: performance.now(),
    attributes: attributes_3,
    perfettoSpanId: perfettoSpanId_3,
    priorContext: priorContext_3
  }), span_6;
}
function GTs(n) {
  let perfettoSpanId_4 = AUe() ? bt("tool_permission") : void 0,
    priorContext_4 = T();
  if (!cj()) {
    if (perfettoSpanId_4) {
      let span_7 = d.trace.getActiveSpan() || b().startSpan("dummy");
      return P(q, {
        span: span_7,
        startTime: performance.now(),
        attributes: {
          "span.type": "tool.blocked_on_user"
        },
        perfettoSpanId: perfettoSpanId_4,
        priorContext: priorContext_4
      }), span_7;
    }
    return d.trace.getActiveSpan() || b().startSpan("dummy");
  }
  let s = b(),
    attributes_4 = C("tool.blocked_on_user", D(n)),
    span_8 = s.startSpan("claude_code.tool.blocked_on_user", {
      attributes: attributes_4
    }, priorContext_4);
  return P(q, {
    span: span_8,
    startTime: performance.now(),
    attributes: attributes_4,
    perfettoSpanId: perfettoSpanId_4,
    priorContext: priorContext_4
  }), span_8;
}
function VTs(decision, source_3) {
  let r = k(q);
  if (!r) return;
  if (r.perfettoSpanId) yt(r.perfettoSpanId, {
    decision: decision,
    source: source_3
  });
  if (!cj()) {
    R(q, r);
    return;
  }
  let o = {
    duration_ms: Math.max(0, Math.round(performance.now() - r.startTime))
  };
  if (decision) o.decision = decision;
  if (source_3) o.source = source_3;
  r.span.setAttributes(o), r.span.end(), R(q, r);
}
function qTs(n, e) {
  let priorContext_5 = T();
  if (!cj()) return d.trace.getActiveSpan() || b().startSpan("dummy");
  let s = b(),
    attributes_5 = C("tool.execution", D(n)),
    span_9 = s.startSpan("claude_code.tool.execution", {
      attributes: attributes_5
    }, priorContext_5);
  return kt(span_9, e), P(Q, {
    span: span_9,
    startTime: performance.now(),
    attributes: attributes_5,
    priorContext: priorContext_5
  }), span_9;
}
function c_o(n) {
  if (!cj()) return;
  let e = k(Q);
  if (!e) return;
  let s = {
    duration_ms: Math.max(0, Math.round(performance.now() - e.startTime))
  };
  if (n) {
    if (n.success !== void 0) s.success = n.success;
    if (n.success === !1 && !n.interrupted) s["error.type"] = "tool_error";
    Object.assign(s, et(n.error, n.errorClass));
  }
  if (e.span.setAttributes(s), n?.success === !1) e.span.setStatus(B(n.error));
  e.span.end(), R(Q, e);
}
function PUe(n, e, resultTokens, s = !1) {
  let o = n ? weakMap.get(n) : k(L);
  if (!o || o.ended) return;
  if (o.perfettoSpanId) Tt(o.perfettoSpanId, {
    success: !0,
    resultTokens: resultTokens
  });
  if (!cj()) {
    R(L, o);
    return;
  }
  let u = {
    duration_ms: Math.max(0, Math.round(performance.now() - o.startTime))
  };
  if (e && !0 && !CC()) {
    let c = o.attributes.tool_name || "unknown";
    gt(u, c, e, s);
  }
  if (resultTokens !== void 0) u.result_tokens = resultTokens;
  o.span.setAttributes(u), o.span.end(), R(L, o);
}
function u_o(n) {
  return cj() && V$t() && !CC() && n.isRecording();
}
function KTs(n) {
  if (typeof n === "string") return n;
  if (!Array.isArray(n)) return "";
  return n.map(item => item?.type === "text" ? String(item.text) : `[${String(item?.type ?? "unknown")}]`).join(`
`);
}
function p_o(n, e, r) {
  if (!u_o(n)) return;
  let s = weakMap.get(n);
  if (!s || s.ended) return;
  let o = {};
  for (let [i, u] of Object.entries(r)) if (typeof u === "string") {
    let {
      content: content_5,
      truncated: truncated_10
    } = ZP(u);
    if (o[i] = content_5, truncated_10) o[`${i}_truncated`] = !0, o[`${i}_original_length`] = u.length;
  } else o[i] = u;
  s.span.addEvent(e, o);
}
function f_o(n) {
  if (!cj()) return;
  let e = n.spanContext();
  if (!e.traceId || e.traceId === "00000000000000000000000000000000") return;
  let r = d.trace.setSpan(d.context.active(), n),
    s = {};
  return F.inject(r, s, d.defaultTextMapSetter), s.traceparent;
}
function RPe() {
  if (!cj()) return;
  let n = d.trace.getSpan(T());
  if (!n) return;
  return f_o(n);
}
function YTs(traceparent_3) {
  if (!traceparent_3 || !cj()) return;
  let e = T(),
    r = F.extract(e, {
      traceparent: traceparent_3
    }, d.defaultTextMapGetter);
  return r === e ? void 0 : r;
}
function XTs(n, e) {
  return n === void 0 ? e() : wke.with(n, e);
}
function pBn(n, e) {
  if (!bie()) return;
  return b().startSpan(n, {
    attributes: {
      ...Ct(),
      "span.type": e.spanType,
      ...(CC() ? Da(e.attrs ?? {}, (r, s) => Xt.has(s)) : e.attrs),
      ...(!CC() && e.contentAttrs)
    }
  }, T());
}
async function fBn(n, e, r) {
  let s = pBn(n, e);
  if (!s) return r(void 0);
  let o = d.trace.setSpan(T(), s);
  return wke.with(o, async () => {
    try {
      return await r(s);
    } catch (error) {
      if (!e.isExpectedError?.(error)) {
        let message_2 = error instanceof Error && e.withholdErrorText?.(error) ? l_o(error) : void 0;
        if (error instanceof Error && !CC()) s.recordException(message_2 === void 0 ? error : {
          name: error.name,
          message: message_2
        });
        DMt(s, message_2 ?? (error instanceof Error ? error.message : String(error)));
      }
      throw error;
    } finally {
      s.end();
    }
  });
}
function JTs(n) {
  if (!bie()) return;
  let priorContext_6 = T(),
    agent_id = U(n.agentId),
    parent_agent_id = n.parentAgentId !== void 0 ? U(n.parentAgentId) : void 0,
    attributes_6 = C("subagent.spawn", {
      ...(agent_id !== void 0 && {
        agent_id: agent_id
      }),
      agent_type: CC() && !n.isBuiltIn ? "custom" : n.agentType,
      ...(parent_agent_id !== void 0 && {
        parent_agent_id: parent_agent_id
      })
    }),
    span_10 = b().startSpan("claude_code.subagent.spawn", {
      attributes: attributes_6
    }, priorContext_6);
  return P(Pt, {
    span: span_10,
    startTime: performance.now(),
    attributes: attributes_6,
    priorContext: priorContext_6
  }), span_10;
}
function QTs(n, e) {
  if (!n) return;
  let r = weakMap.get(n);
  if (!r || r.ended) return;
  if (e?.success !== void 0) n.setAttribute("success", e.success);
  if (e?.error) n.setAttributes(et(e.error, e.errorClass)), DMt(n, e.error);
  n.end(), R(Pt, r);
}
function $t() {
  return fx() || bie();
}
function ZTs(hook_event, e, num_hooks, s, o) {
  if (!$t()) return d.trace.getActiveSpan() || b().startSpan("dummy");
  let i = b(),
    priorContext_7 = T(),
    {
      content: c
    } = ZP(s),
    attributes_7 = C("hook", {
      ...D(o),
      hook_event: hook_event,
      hook_name: CC() ? hook_event : e,
      num_hooks: num_hooks,
      ...(kc() && !CC() && {
        hook_definitions: c
      })
    }),
    span_11 = i.startSpan("claude_code.hook", {
      attributes: attributes_7
    }, priorContext_7);
  return weakMap.set(span_11, {
    span: span_11,
    startTime: performance.now(),
    attributes: attributes_7,
    priorContext: priorContext_7
  }), span_11;
}
function eCs(n, e) {
  if (!$t()) return;
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
  if (r.span.setAttributes(o), e && (e.numNonBlockingError ?? 0) > 0) r.span.setStatus(B(`${e.numNonBlockingError} hook(s) failed`));
  r.span.end();
}
export { s_o, zq, dEr, G9, cEr, ZP, ben, Sen, r5e, i_o, q6, wen, RUe, Nct, KR, jTs, fx, WTs, AUe, lBn, xUe, a_o, cj, bie, dBn, DMt, CC, l_o, cBn, uEr, ven, d_o, uBn, Kwe, pEr, fEr, ken, zTs, GTs, VTs, qTs, c_o, PUe, u_o, KTs, p_o, f_o, RPe, YTs, XTs, pBn, fBn, JTs, QTs, ZTs, eCs };