// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Fe,
  ws
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  at,
  j,
  K,
  Hc
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  z,
  eo
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  p1s,
  wt,
  rJ,
  NMo,
  tt,
  Pln,
  Oln,
  dge,
  qe,
  Sm,
  E,
  ir,
  Il,
  Ldn
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  LXn
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  L_,
  s$o,
  pu
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  Ao
} from "B:/~BUN/root/chunk-s6czymtt.js";
import {
  oIe
} from "B:/~BUN/root/chunk-4yrr52wq.js";
import {
  Pt,
  YD,
  Mn,
  yc,
  XD
} from "B:/~BUN/root/chunk-j0ghr71r.js";
import {
  o,
  T
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var Isn = `# Reporting outcomes

Report what actually happened, not what you intended. When you say something is done, sent, saved, fixed, or verified, that claim must rest on a result you observed in this session \u2014 tool output, the file as it now reads, the page as it now loads \u2014 not on what the step should have produced. If you did not check, say you did not check. If any step failed, was skipped, or came back different from what you expected, say so in the first sentence of your report, before anything else, even when the rest of the work succeeded. Never quietly work around a failure in a way that makes it look resolved; a problem the user can see is recoverable, one your summary hides is not. When you stop before the task is complete, your first line says so plainly and names what is left. Do not describe partial work as done, and do not let a summary read as more certain than the evidence behind it.`;
var W9e = "x-anthropic-billing-header:";

function mFs(e) {
  let n = e.text;
  return typeof n === "string" && n.startsWith(W9e)
}

function Uj(e) {
  let n = e.text;
  return typeof n === "string" && (n.startsWith(W9e) || n === Isn)
}

function vD(e) {
  let n = Bun.hash(_(e));
  return typeof n === "bigint" ? Number(n & 0xffffffffn) : n
}
var Q = new Set(["type", "text", "thinking", "id", "tool_use_id", "name", "input", "source", "content", "cache_control"]);

function S(e, n) {
  if (typeof e === "string") {
    n.push("s", String(e.length), e.slice(0, 32), e.slice(-32));
    return
  }
  switch (e.type) {
    case "text":
    case "image":
    case "document":
    case "search_result":
    case "thinking":
    case "redacted_thinking":
    case "tool_use":
    case "tool_result":
    case "tool_reference":
    case "server_tool_use":
    case "web_search_tool_result":
    case "web_fetch_tool_result":
    case "advisor_tool_result":
    case "code_execution_tool_result":
    case "bash_code_execution_tool_result":
    case "text_editor_code_execution_tool_result":
    case "tool_search_tool_result":
    case "mcp_tool_use":
    case "mcp_tool_result":
    case "mcp_tool_listing":
    case "container_upload":
    case "compaction":
    case "fallback":
    case "browser_state":
      break;
    default: {
      let s = e;
      break
    }
  }
  if (n.push(e.type), "text" in e && typeof e.text === "string") n.push("t", String(e.text.length), e.text.slice(0, 32), e.text.slice(-32));
  if ("thinking" in e && typeof e.thinking === "string") n.push("k", String(e.thinking.length));
  if ("id" in e && typeof e.id === "string") n.push("i", e.id);
  if ("tool_use_id" in e && typeof e.tool_use_id === "string") n.push("u", e.tool_use_id);
  if ("name" in e && typeof e.name === "string") n.push("n", e.name);
  if ("input" in e && e.input !== void 0) n.push("p", _(e.input));
  if ("source" in e && e.source && typeof e.source === "object") {
    let s = e.source;
    if (n.push("m", String(s.type ?? ""), String(s.media_type ?? "")), typeof s.data === "string") n.push(String(s.data.length))
  }
  let r = "content" in e ? e.content : void 0;
  if (Array.isArray(r)) {
    n.push("[", String(r.length));
    for (let s of r) S(s, n);
    n.push("]")
  } else if (typeof r === "string") n.push("c", String(r.length), r.slice(0, 32), r.slice(-32));
  for (let [s, u] of Object.entries(e)) {
    if (Q.has(s) || u === void 0) continue;
    let d = typeof u === "string" ? u : _(u);
    n.push(s, d.length > 256 ? `len:${d.length}` : d)
  }
}
var z9e = -1;

function gFs(e) {
  return e.map((n) => {
    if ((n.type === "api_system" || n.type === "user") && n.ephemeral) return z9e;
    let r = [n.message.role];
    if (n.type === "api_system" && n.outputConfig !== void 0) {
      let d = n.outputConfig.timing;
      r.push(`oc:${n.outputConfig.effort??""}${d?`:${d.now}`:""}`)
    }
    let s = n.message.content;
    if (Array.isArray(s)) {
      r.push(String(s.length));
      for (let d of s) S(d, r)
    } else S(s, r);
    let u = Bun.hash(r.join("|"));
    return typeof u === "bigint" ? Number(u & 0xffffffffn) : u
  })
}
var WU = 300000,
  vx = 3600000;

function GVn(e) {
  if ((e?.cache_creation?.ephemeral_5m_input_tokens ?? 0) > 0) return "5m";
  return (e?.cache_creation?.ephemeral_1h_input_tokens ?? 0) > 0 ? "1h" : void 0
}
var zU = "main";

function vAo(e, n) {
  return !n && (e.startsWith("repl_main_thread") || e === "sdk" || e === "compact")
}
var X = 2000,
  J = 200,
  M = {
    "5m": WU,
    "1h": vx
  };
var hFs = {
  system_prompt_changed: "system prompt changed",
  tools_changed: "tool definitions changed",
  model_changed: "model changed",
  fast_mode_changed: "fast mode toggled",
  cache_scope_or_ttl_changed: "cache scope or TTL changed",
  betas_changed: "beta headers changed",
  effort_changed: "effort changed",
  thinking_mode_changed: "thinking toggled",
  thinking_display_changed: "thinking display changed",
  auto_mode_changed: "auto mode toggled",
  overage_changed: "usage-limit state changed",
  extra_body_changed: "extra request fields changed",
  defer_loading_changed: "deferred tool loading changed",
  messages_rewritten: "earlier messages changed",
  ttl_expired_5m: "idle past the 5m TTL",
  ttl_expired_1h: "idle past the 1h TTL",
  likely_server_side: "prompt unchanged \u2014 likely server-side",
  unknown: "unknown"
};
class A {
  entries = [];
  requests = 0;
  hits = 0;
  misses = 0;
  expectedRebuilds = 0;
  coldStarts = 0;
  cacheReadTokens = 0;
  cacheCreationTokens = 0;
  inputTokens = 0;
  missRecacheTokens = 0;
  lastMissAt = null;
  lastMissAttribution = null;
  missCauses = {};
  pendingAttribution = null;
  dropExpectedAt = null;
  touchedAt = null;
  touch(e) {
    if (this.entries.length > 0) this.touchedAt = Math.max(this.touchedAt ?? 0, e)
  }
  expectDrop(e) {
    this.dropExpectedAt = e
  }
  attribute(e) {
    this.pendingAttribution = e
  }
  record(e) {
    let n = this.entries.at(-1) ?? null,
      r = this.dropExpectedAt;
    this.dropExpectedAt = null;
    let s = this.pendingAttribution;
    this.pendingAttribution = null;
    let u = r !== null && n !== null && e.at - Math.max(n.at, this.touchedAt ?? 0) < M[n.ttl],
      d, p = this.cacheReadTokens + this.cacheCreationTokens > 0 || e.cacheReadTokens + e.cacheCreationTokens > 0;
    if (n === null) d = "cold";
    else if (!p) d = "uncached";
    else if (n.cacheReadTokens + n.cacheCreationTokens === 0 && e.cacheReadTokens + e.cacheCreationTokens > 0) d = "cold";
    else {
      let g = n.inputTokens + n.cacheReadTokens + n.cacheCreationTokens,
        Y = e.inputTokens + e.cacheReadTokens + e.cacheCreationTokens,
        x = Math.min(g, Y),
        Z = x - e.cacheReadTokens;
      d = e.cacheReadTokens < x * 0.95 && Z >= X ? u ? "expected" : "miss" : "hit"
    }
    let b = e.cacheCreationTokens === 0 && n !== null ? n.ttl : e.ttl,
      h = d === "miss" && s !== null ? {
        ...e,
        ttl: b,
        outcome: d,
        attribution: s
      } : {
        ...e,
        ttl: b,
        outcome: d
      };
    if (this.entries.push(h), this.entries.length > J) this.entries.shift();
    switch (this.requests++, this.cacheReadTokens += e.cacheReadTokens, this.cacheCreationTokens += e.cacheCreationTokens, this.inputTokens += e.inputTokens, d) {
      case "hit":
        this.hits++;
        break;
      case "miss":
        this.misses++, this.missRecacheTokens += e.cacheCreationTokens, this.lastMissAt = e.at, this.lastMissAttribution = s;
        for (let g of s?.causes ?? []) this.missCauses[g] = (this.missCauses[g] ?? 0) + 1;
        break;
      case "expected":
        this.expectedRebuilds++;
        break;
      case "cold":
        this.coldStarts++;
        break;
      case "uncached":
        break
    }
    return h
  }
  summary(e) {
    let n = this.cacheReadTokens + this.cacheCreationTokens + this.inputTokens,
      r = this.entries.at(-1) ?? null,
      s = M[r?.ttl ?? "5m"],
      u = this.cacheReadTokens + this.cacheCreationTokens > 0,
      d = r !== null && r.cacheReadTokens + r.cacheCreationTokens > 0,
      p = r !== null ? Math.max(r.at, this.touchedAt ?? 0) : 0;
    return {
      requests: this.requests,
      hits: this.hits,
      misses: this.misses,
      expectedRebuilds: this.expectedRebuilds,
      coldStarts: this.coldStarts,
      hitRatio: n > 0 ? this.cacheReadTokens / n : null,
      cacheWriteTokens: this.cacheCreationTokens,
      missRecacheTokens: this.missRecacheTokens,
      lastMissAt: this.lastMissAt,
      lastMissAttribution: this.lastMissAttribution,
      missCauses: {
        ...this.missCauses
      },
      lastRequest: r,
      cachingObserved: u,
      lastActivityAt: r !== null ? p : null,
      expiresAt: r !== null && d ? p + s : null,
      warm: r !== null && d && e - p < s
    }
  }
}
class P {
  #e = new Map;
  record(e, n) {
    let r = this.#e.get(e);
    if (r === void 0) r = new A, this.#e.set(e, r);
    return r.record(n)
  }
  expectDrop(e, n) {
    this.#e.get(e)?.expectDrop(n)
  }
  attribute(e, n) {
    this.#e.get(e)?.attribute(n)
  }
  touch(e, n) {
    this.#e.get(e)?.touch(n)
  }
  summary(e, n) {
    return (this.#e.get(e) ?? new A).summary(n)
  }
  estimateRecacheTokens(e) {
    let n = this.#e.get(e),
      r = n?.entries.at(-1);
    if (!r) return 0;
    if (n?.dropExpectedAt != null) return null;
    return r.inputTokens + r.cacheReadTokens + r.cacheCreationTokens
  }
  clear(e) {
    if (e === void 0) this.#e.clear();
    else this.#e.delete(e)
  }
}
var kAo = new at(() => new P);

function C() {
  return kAo.of(j())
}

function yFs(e, n) {
  try {
    return C().record(e, n)
  } catch (r) {
    return l(r), null
  }
}

function _Fs(e, n) {
  try {
    C().attribute(e, n)
  } catch (r) {
    l(r)
  }
}

function EOr(e, n) {
  try {
    C().touch(e, n)
  } catch (r) {
    l(r)
  }
}

function B1e(e = zU, n = Date.now()) {
  try {
    C().expectDrop(e, n)
  } catch (r) {
    l(r)
  }
}

function PX(e = zU, n = Date.now()) {
  return C().summary(e, n)
}

function TOr(e = zU) {
  return C().estimateRecacheTokens(e)
}

function bFs() {
  return Hc((e, n) => {
    if (n === "cd" || n === "hydrate") return;
    C().clear()
  })
}
var ee = "tengu_fennel_godwit";

function zVn(e) {
  if (e === void 0) return !1;
  if (L_(qe(e), "opus_5_prompt_bundle", e) !== !0) return !1;
  return !E(ee, !1)
}

function y(e) {
  return !LXn() && L_(e, "opus_5_5_prompt_bundle") === !0
}
var te = new Set(["turn_updates", "bash_output_audience_note", "silent_turn_reminder", "thinking_display_updates"]),
  ne = new Set(["bison_cairn", "larch_cistern"]),
  oe = new Set(["silent_turn_reminder", "quizzical_shore"]),
  re = 64,
  se = "tengu_model_capability_from_client_data",
  O = "tengu_model_capability_off_from_client_data";

function xH(e, n, r, s) {
  if (s !== void 0) return s;
  let u = L_(n, e, r);
  if (u !== void 0) return u;
  let d = te.has(e) && oIe(n) || ne.has(e) && zVn(r) || oe.has(e) && y(n),
    p = Ldn(r);
  if (d) {
    if (p?.data?.[e] !== !1) return !0;
    return k(O, e, p), !1
  }
  if (p?.data?.[e] !== !0) return !1;
  return k(se, e, p), !0
}

function nFs(e, n, r) {
  let s = s$o(n);
  return [...NMo(r, n) ?? [], ...s.keys()].findLast((u) => u.startsWith(e) && s.get(u) !== !1)?.slice(e.length)
}

function k(e, n, r) {
  let s = r.model ?? Mn(tt()),
    u = Ao().clientDataCapabilityLogged ??= new Map,
    d = K(),
    p = u.get(d);
  if (p === void 0) {
    if (p = new Set, u.set(d, p), u.size > re) {
      let g = u.keys().next().value;
      if (g !== void 0) u.delete(g)
    }
  }
  let h = `${e===O?"-":""}${n}:${s}`;
  if (!p.has(h)) p.add(h), i(e, {
    capability: c(n),
    model: wt(s)
  })
}

function ie(e, n) {
  if (ae() !== e) return !1;
  return xH("per_turn_effort", e, n)
}

function ae() {
  try {
    return qe(tt())
  } catch {
    return null
  }
}
p1s(ie);

function rFs(e) {
  return !1
}

function oFs(e) {
  return Pt(e) === "claude-opus-4-8"
}

function sFs(e) {
  return !1
}
var ce = new Set(["claude-opus-4-6", "claude-haiku-4-5", "claude-opus-4-5", "claude-opus-4-1", "claude-opus-4-0", "claude-sonnet-4-5", "claude-sonnet-4-0", "claude-3-7-sonnet", "claude-3-5-sonnet", "claude-3-5-haiku"]);

function w(e) {
  return ce.has(Pt(e))
}

function Psn(e, n) {
  if (n === void 0) return w(e);
  return n.model !== void 0 && w(n.model)
}

function XOe(e) {
  return /-eap($|\[)/i.test(e)
}
var L = "tengu_loggia_roster",
  F = [],
  ue = f(() => T(o().trim())),
  v;

function le() {
  let e = E(L, F),
    n = v;
  if (n !== void 0 && n.raw === e) return n.ids;
  let r = ue().safeParse(e);
  if (!r.success) t(`GrowthBook: ${L} is not a JSON array of model ids; treating it as empty`, {
    level: "warn"
  });
  let s = r.success ? r.data : F;
  return v = {
    raw: e,
    ids: s
  }, s
}

function vOr(e) {
  return le().some((n) => YD(e, n))
}

function kOr(e) {
  let n = m();
  return rJ() ? n.delegationCostsFirstCompiledOnly(e) : n.delegationCostsFirst(e)
}

function D(e) {
  if (e === void 0) return !1;
  let n = qe(e),
    r = L_(n, "lucky_cerf", e);
  if (r === !1) return !1;
  if (rJ()) return r === !0;
  if (xH("lucky_cerf", n, e)) return !0;
  let s = ir("tengu_lucky_cerf", null);
  return Array.isArray(s) && s.some((u) => typeof u === "string" && YD(n, u))
}

function vae(e) {
  let n = m();
  return rJ() ? n.leanRewriteCompiledOnly(e) : n.leanRewrite(e)
}

function Hj(e) {
  return e.leanRewrite ?? vae(e.model)
}

function N(e) {
  if (e === void 0) return !1;
  let n = qe(e),
    r = L_(n, "temporal_hare", e);
  if (r === !1) return !1;
  if (rJ()) return r === !0 && $j(e);
  if (!(r === !0 || Ldn(e)?.data?.temporal_hare === !0)) return Oln(e) && $j(e) && ir("tengu_temporal_hare", !1) === !0;
  if (!$j(e)) return !1;
  return xH("temporal_hare", n, e)
}

function q(e, n) {
  let r = Il()?.[e];
  return typeof r === "object" && r !== null && Object.entries(r).some(([s, u]) => u === !0 && n.includes(s))
}

function iFs(e) {
  return a.CLAUDE_CODE_BASALT_COVE || q("basalt_cove", e)
}
var V = "tengu_thrifty_sonic";

function de() {
  let e = m();
  return rJ() ? e.bashFirstSessionAssignmentCompiledOnly() : e.bashFirstSessionAssignment()
}

function B() {
  let e = Jee(tt()),
    n = qe(e),
    r = L_(n, "thrifty_sonic", e);
  if (r === !1) return "none";
  if (oIe(n) || y(n) || Il()?.[V] === !0 || r) return "forced";
  return Pln(e) ? "cohort" : "none"
}

function Osn() {
  if (a.CLAUDE_CODE_THRIFTY_SONIC !== void 0) return a.CLAUDE_CODE_THRIFTY_SONIC;
  switch (de()) {
    case "forced":
      return !0;
    case "none":
      return !1;
    case "cohort":
      return E(V, !1)
  }
}
var I = "tengu_cozy_teapot";

function H(e) {
  return e === "strict" || e === "relaxed" ? e : void 0
}

function aFs() {
  return a.CLAUDE_CODE_COZY_TEAPOT ?? m().bashFirstSteerVariant()
}

function pe() {
  return H(Il()?.[I]) ?? (y(qe(Jee(tt()))) ? "relaxed" : void 0) ?? H(ir(I, null)) ?? "strict"
}
var me = "tengu_gorse_plover",
  R = "tengu_willow_tern";

function fe(e, n) {
  return e || Il()?.[n] === !0 || E(n, !1)
}

function lFs() {
  let e = Ao();
  return e.bashActFirstEnabled ??= fe(a.CLAUDE_CODE_GORSE_PLOVER, me), e.bashActFirstEnabled
}

function dFs(e) {
  return xH("amber_astrolabe", qe(e), e, a.CLAUDE_CODE_AMBER_ASTROLABE || void 0)
}

function cFs(e) {
  return xH("bison_cairn", qe(e), e, a.CLAUDE_CODE_BISON_CAIRN)
}

function uFs(e) {
  return xH("larch_cistern", qe(e), e, a.CLAUDE_CODE_LARCH_CISTERN || void 0)
}

function wAo() {
  let e = Il()?.[R];
  if (typeof e === "boolean") return e;
  if (e !== void 0) {
    let n = m();
    if (!n.unusableWritingOverrideTold) n.unusableWritingOverrideTold = !0, t(`willow_tern: ignoring non-boolean clientData ${R} value of type ${typeof e}`)
  }
  return
}

function pFs(e) {
  if (a.CLAUDE_CODE_WILLOW_TERN) return !0;
  let n = wAo();
  if (n !== void 0) return n;
  if (e === void 0) return !1;
  let r = qe(e);
  if (oIe(r)) return !0;
  if (L_(r, "opus_5_prompt_bundle", e) !== !0) return !1;
  return E(R, !1)
}

function JOe() {
  return a.CLAUDE_CODE_SIMPLE
}

function he(e) {
  let n = qe(e),
    r = L_(n, "lean_prompt", e);
  if (r !== void 0) return !r;
  if (XOe(e) || n === "claude-mythos-5") return !1;
  if (n.includes("claude-3-") || n.includes("haiku") || n.includes("sonnet") || n === "claude-opus-4-0" || n === "claude-opus-4-1" || n === "claude-opus-4-5" || n === "claude-opus-4-6" || n === "claude-opus-4-7") return !0;
  return !pu()
}

function $j(e) {
  let n = m();
  return rJ() ? n.leanPromptCompiledOnly(e) : n.leanPrompt(e)
}

function bO(e) {
  return e.leanPrompt ?? $j(e.model)
}

function U(e) {
  if (!e) return !1;
  if (Fe(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !0;
  if (ws(a.CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT)) return !1;
  if (!he(e)) return !0;
  if (E("tengu_velvet_tide", !1)) return !0;
  return q("simple_system_prompt", qe(e))
}
var _e = "breezy_horizon";

function Jee(e) {
  if (e === void 0) return;
  let n = m();
  return rJ() ? n.modelForPromptCompiledOnly(e) : n.modelForPrompt(e)
}

function fFs(e) {
  let n = m().modelForPrompt;
  return n.cache.has(e) ? n(e) : void 0
}

function G(e) {
  let n = a.CLAUDE_CODE_BREEZY_HORIZON;
  if (ws(n)) return e;
  let r = Sm(e),
    s = Il()?.[_e],
    u = n ?? (typeof s === "object" && s !== null ? Object.entries(s).find(([h]) => h === r)?.[1] : void 0);
  if (u === void 0) return e;
  let d = n !== void 0 ? "env" : "client_data";
  if (typeof u !== "string" || !ge(u)) return t(`[breezy_horizon] ${d}: ignoring ${String(u)} for ${r}: not a model id`, {
    level: "warn"
  }), e;
  let p = Sm(u);
  if (p === r) {
    if (!XD(yc(u))) t(`[breezy_horizon] ${d}: ${u} names ${r} itself, so it maps nothing`, {
      level: "warn"
    });
    return e
  }
  let b = m().promptModelSwapsLogged;
  if (!b.has(e)) b.add(e), i("tengu_breezy_horizon", {
    from_model: wt(r),
    to_model: wt(p),
    source: c(d)
  });
  return u
}

function ge(e) {
  return dge(e) || !/\s/.test(e) && XOe(e) || XD(yc(e))
}
class W {
  bashFirstSessionAssignment = eo(B);
  bashFirstSessionAssignmentCompiledOnly = eo(B);
  bashFirstSteerVariant = eo(pe);
  leanPrompt = eo(U);
  leanPromptCompiledOnly = eo(U);
  modelForPrompt = eo(G);
  modelForPromptCompiledOnly = eo(G);
  delegationCostsFirst = eo(D);
  delegationCostsFirstCompiledOnly = eo(D);
  leanRewrite = eo(N);
  leanRewriteCompiledOnly = eo(N);
  promptModelSwapsLogged = new Set;
  unusableWritingOverrideTold = !1
}
var Ce = new z(() => new W);

function m() {
  return Ce.of(j().host)
}
export {
  zVn,
  xH,
  nFs,
  rFs,
  oFs,
  sFs,
  Psn,
  XOe,
  vOr,
  kOr,
  vae,
  Hj,
  iFs,
  Osn,
  aFs,
  lFs,
  dFs,
  cFs,
  uFs,
  wAo,
  pFs,
  JOe,
  $j,
  bO,
  Jee,
  fFs,
  Isn,
  W9e,
  mFs,
  Uj,
  vD,
  z9e,
  gFs,
  WU,
  vx,
  GVn,
  zU,
  vAo,
  hFs,
  kAo,
  yFs,
  _Fs,
  EOr,
  B1e,
  PX,
  TOr,
  bFs
};
