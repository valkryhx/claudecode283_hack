// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { pe } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H } from "B:/~BUN/root/chunk-3aez4b53.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { gd, Dze, P9n } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { sSt, czo, ogn, hF, gk, kg, pm, F, at, j, c2o, XVo, JVo, ZJn, Bjr, kSt, iqo, js } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { Ni } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Ma } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { tp, GHt, eYn, Jo, qe, dEe, On, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { Dx, Qb, _b, bB, We, xt } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Ss, bQe, B2s } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { ZO, cpn, A8n, aTe, upn } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { ea } from "B:/~BUN/root/chunk-53tmhe2j.js";
import { Ao } from "B:/~BUN/root/chunk-s6czymtt.js";
import { gHs } from "B:/~BUN/root/chunk-2fccb5hn.js";
import { vt, yme, CK, Pn } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { W9e, Uj } from "B:/~BUN/root/chunk-z8fd2x5s.js";
import { Ka, IMt, MMt, px } from "B:/~BUN/root/chunk-00v9f07q.js";
import { qwe, _ie } from "B:/~BUN/root/chunk-r81hcemr.js";
import { u3, dc, Ho, zCo, GCo, ime, _9e } from "B:/~BUN/root/chunk-ses0c36n.js";
import { Wa, ch, dD } from "B:/~BUN/root/chunk-vd11ggb1.js";
import { Yzn, Vpt, N8e, qfe } from "B:/~BUN/root/chunk-6m0qcv81.js";
import { DG } from "B:/~BUN/root/chunk-y59h61rh.js";
import { Si } from "B:/~BUN/root/chunk-bk5b2aym.js";
import { pr } from "B:/~BUN/root/chunk-j1zjtkgf.js";
import { b5n } from "B:/~BUN/root/chunk-m0xdacj9.js";
import { co, uo, si } from "B:/~BUN/root/chunk-b0487zs4.js";
import { Tn } from "B:/~BUN/root/chunk-f43s8pq0.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { isDeepStrictEqual as w } from "util";
var Z = ["betas", "tool_choice", "thinking", "context_management", "output_config", "speed", "temperature", "max_tokens"];
function QEs(e) {
  return {
    model: e.model,
    tools: e.tools.map((n, index) => ({
      key: ee(n, index),
      deferred: aen(n),
      bound: aen(n),
      cacheControl: void 0,
      body: n
    })),
    system: e.system.map(n => ({
      preamble: !1,
      cacheControl: void 0,
      body: n
    })),
    messages: [],
    envelope: {},
    seeded: !0
  };
}
function jyo(e, n = {}) {
  let o = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === !0 ? Te(e.messages) : void 0),
    r = typeof e.system === "string" ? [{
      type: "text",
      text: e.system
    }] : e.system ?? [],
    envelope = {};
  for (let s of Z) {
    let c = s === "betas" ? ge(e.betas) : e[s];
    if (c !== void 0) envelope[s] = c;
  }
  return {
    model: e.model,
    envelope: envelope,
    tools: (e.tools ?? []).map((item, index) => ({
      key: ee(item, index),
      deferred: item.defer_loading === !0,
      bound: item.defer_loading === !0 && typeof item.name === "string" && o?.has(item.name) === !0,
      cacheControl: U(item),
      body: W(item)
    })),
    system: r.map(item => ({
      preamble: Uj(item),
      cacheControl: U(item),
      body: W(item)
    })),
    messages: e.messages.map((item, index, u) => ({
      role: item.role,
      turnScopedSystem: item.role === "system" && index === u.length - 1,
      blocks: typeof item.content === "string" ? [{
        thinking: !1,
        cacheControl: void 0,
        body: {
          type: "text",
          text: item.content
        }
      }] : item.content.map(item => ({
        thinking: item.type === "thinking" || item.type === "redacted_thinking",
        cacheControl: U(item),
        body: _e(W(item))
      }))
    }))
  };
}
function ien(e) {
  return {
    model: e.model,
    tools: e.tools.filter(he).map(item => item.body),
    system: e.system.filter(item => !item.preamble).map(item => item.body),
    messages: e.messages.filter(item => !item.turnScopedSystem).map(item => ({
      role: item.role,
      content: item.blocks.filter(item => !item.thinking).map(item => item.body)
    }))
  };
}
function ZEs(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message";
}
var N = 16;
function Wyo(e, n) {
  return e.seeded ? q(e, n) : [...q(e, n), ...ue(e, n), ...me(e, n), ...ye(e, n)];
}
function q(e, n) {
  let o = ien(e),
    r = ien(n),
    d = [],
    s = h => (d.push(h), d.length < N),
    c = h => new Map([...h.filter(item => !item.deferred), ...h.filter(item => item.bound)].map(item => [item.key, item])),
    u = c(e.tools),
    T = c(n.tools),
    y = [],
    f = !1;
  for (let [id, R] of u) {
    let prev = R.body,
      x = T.get(id);
    if (x === void 0) {
      if (R.deferred) {
        if (!e.seeded) y.push({
          part: "tool",
          id: id,
          kind: "removed",
          prev: prev
        });
        continue;
      }
      if (f = !0, !s({
        part: "tool",
        id: id,
        kind: "removed",
        prev: prev
      })) return d;
    } else if (R.deferred !== x.deferred) {
      f = !0;
      let S = R.deferred ? {
        part: "tool",
        id: id,
        kind: "added",
        next: x.body
      } : {
        part: "tool",
        id: id,
        kind: "removed",
        prev: prev
      };
      if (!s(S)) return d;
    } else if (!w(prev, x.body)) {
      f ||= !R.deferred;
      let next = x.body,
        field = [...Object.keys(prev), ...Object.keys(next)].find(item => !w(ux(prev, item), ux(next, item))) ?? "?";
      if (!s({
        part: "tool",
        id: id,
        kind: "changed",
        field: field,
        prev: prev,
        next: next
      })) return d;
    }
  }
  for (let [id_2, R] of T) if (!u.has(id_2) && !R.deferred) {
    if (f = !0, !s({
      part: "tool",
      id: id_2,
      kind: "added",
      next: R.body
    })) return d;
  }
  if (!f) {
    let h = S => [...S.values()].flatMap(item => item.deferred ? [] : [item.key]),
      R = h(u),
      id_3 = h(T).filter(item => u.has(item)).find((item, index) => R[index] !== item);
    if (id_3 !== void 0) s({
      part: "tool",
      id: id_3,
      kind: "reordered"
    });
  }
  let b = Math.max(o.system.length, r.system.length);
  for (let index_2 = 0; index_2 < b; index_2++) {
    let prev_2 = o.system[index_2],
      next_2 = r.system[index_2],
      kind = prev_2 === void 0 ? "added" : next_2 === void 0 ? "removed" : "changed";
    if (kind !== "changed" || !w(prev_2, next_2)) {
      if (!s({
        part: "system",
        index: index_2,
        kind: kind,
        prev: prev_2,
        next: next_2
      })) return d;
    }
  }
  for (let index_3 = 0; index_3 < o.messages.length; index_3++) {
    let prev_3 = o.messages[index_3],
      next_3 = r.messages[index_3];
    if (next_3 !== void 0 && w(prev_3, next_3)) continue;
    let x = {
      part: "message",
      index: index_3,
      role: prev_3.role,
      kind: next_3 === void 0 ? "removed" : "changed",
      prev: prev_3,
      next: next_3
    };
    if (!s(x)) return d;
  }
  for (let h of y) if (!s(h)) break;
  return d;
}
function ue(e, n) {
  let o = [],
    r = Math.min(e.messages.length, n.messages.length);
  for (let index_4 = 0; index_4 < r && o.length < N; index_4++) {
    let s = G(e.messages[index_4]),
      c = G(n.messages[index_4]);
    if (s.length === 0 && c.length === 0) continue;
    if (s.length === c.length && s.every((item, index) => item === c[index])) continue;
    let u = s.slice(0, c.length).every((item, index) => item === c[index]) || c.slice(0, s.length).every((item, index) => item === s[index]);
    o.push({
      part: "thinking",
      index: index_4,
      kind: !u ? "changed" : c.length < s.length ? "dropped" : "added",
      prevCount: s.length,
      nextCount: c.length
    });
  }
  return o;
}
function G(e) {
  return e.blocks.flatMap(item => {
    if (!item.thinking) return [];
    let o = ux(item.body, "signature"),
      r = ux(item.body, "data");
    return [typeof o === "string" ? o : typeof r === "string" ? r : "?"];
  });
}
function me(e, n) {
  let o = Q(e, e.messages.length),
    r = Q(n, e.messages.length),
    d = [];
  for (let [s, {
    at: at_2,
    marker: u
  }] of o) {
    if (d.length >= N) return d;
    let T = r.get(s);
    if (T === void 0) d.push({
      part: "cache",
      at: at_2,
      kind: "dropped",
      prev: u,
      next: void 0
    });else if (!w(u, T.marker)) d.push({
      part: "cache",
      at: at_2,
      kind: "changed",
      prev: u,
      next: T.marker
    });
  }
  for (let [s, {
    at: at_3,
    marker: u
  }] of r) {
    if (d.length >= N) return d;
    if (!o.has(s)) d.push({
      part: "cache",
      at: at_3,
      kind: "added",
      prev: void 0,
      next: u
    });
  }
  return d;
}
function Q(e, n) {
  let o = new Map();
  for (let r of e.tools) if (r.cacheControl !== void 0) o.set(`tools:${r.key}`, {
    at: {
      segment: "tools",
      key: r.key
    },
    marker: r.cacheControl
  });
  return e.system.forEach((item, index_5) => {
    if (item.cacheControl !== void 0) o.set(`system:${index_5}`, {
      at: {
        segment: "system",
        index: index_5
      },
      marker: item.cacheControl
    });
  }), e.messages.slice(0, n).forEach((item, index_6) => {
    item.blocks.forEach((item, c) => {
      if (item.cacheControl !== void 0) o.set(`messages:${index_6}.${c}`, {
        at: {
          segment: "messages",
          index: index_6,
          block: c
        },
        marker: item.cacheControl
      });
    });
  }), o;
}
function ye(e, n) {
  return [["model", e.model, n.model], ["attribution_header", X(e), X(n)], ["deferred_tools", J(e), J(n)], ...Z.map(item => [item, e.envelope[item], n.envelope[item]])].filter(([, r, d]) => !w(r, d)).map(([id_4, prev_4, next_4]) => ({
    part: "envelope",
    id: id_4,
    kind: "changed",
    prev: prev_4,
    next: next_4
  }));
}
function ge(e) {
  return e && [...e].sort();
}
function X(e) {
  for (let n of e.system) {
    let o = ux(n.body, "text");
    if (typeof o === "string" && o.startsWith(W9e)) return o;
  }
  return "";
}
function J(e) {
  return e.tools.filter(item => item.deferred).map(item => item.key).sort().join(",");
}
function he(e) {
  return !e.deferred || e.bound;
}
function aen(e) {
  return ux(e, "defer_loading") === !0;
}
function Te(e) {
  let n = new Set();
  for (let o of e) {
    if (typeof o.content === "string") continue;
    if (o.role === "system") {
      for (let d of o.content) {
        let s = ux(d, "tool"),
          c = ux(d, "type") === "tool_addition" && typeof s === "object" && s !== null ? ux(s, "name") : void 0;
        if (typeof c === "string") n.add(gd(c));
      }
      continue;
    }
    if (o.role !== "user") continue;
    for (let d of o.content) {
      if (!N8e(d)) continue;
      for (let s of d.content) if (Vpt(s)) n.add(gd(s.tool_name));
    }
  }
  return n;
}
function U(e) {
  return "cache_control" in e ? e.cache_control : void 0;
}
function W(e) {
  if (!("cache_control" in e)) return e;
  let {
    cache_control: cache_control,
    ...o
  } = e;
  return o;
}
function _e(e) {
  if (!("safeguards" in e)) return e;
  let {
    safeguards: safeguards,
    ...o
  } = e;
  return o;
}
function ux(e, n) {
  if (e === void 0) return;
  return Object.entries(e).find(([o]) => o === n)?.[1];
}
function ee(e, n) {
  let o = ux(e, "name");
  if (typeof o === "string") return o;
  let r = ux(e, "type");
  return typeof r === "string" ? r : `tools[${n}]`;
}
function eEr() {
  return a.CLAUDE_CODE_WEBSEARCH_CITATIONS && Ma() && !bB();
}
function len(e) {
  let n = ux(e, "type");
  return typeof ux(e, "name") === "string" && ux(e, "defer_loading") === !0 && (n === void 0 || n === "custom") && ne(ux(e, "input_schema")) && !("cache_control" in e);
}
function eTs(e) {
  let n = ux(e, "type"),
    o = ux(e, "description");
  return typeof ux(e, "name") === "string" && (o === void 0 || typeof o === "string") && ux(e, "defer_loading") !== !0 && (n === void 0 || n === "custom") && ne(ux(e, "input_schema")) && !("cache_control" in e);
}
var v = ["strict", "eager_input_streaming", "citations"];
function L(e) {
  return e.some(item => ux(item, "eager_input_streaming") === !0);
}
function A(e, {
  strict: strict,
  eager: eager
}) {
  let r = {
    ...e
  };
  if (!strict && "strict" in r) {
    let {
      strict: strict_2,
      ...s
    } = r;
    r = s;
  }
  if (!eager && "eager_input_streaming" in r) {
    let {
      eager_input_streaming: eager_input_streaming,
      ...s
    } = r;
    r = s;
  }
  if (!eEr() && "citations" in r) {
    let {
      citations: citations,
      ...s
    } = r;
    r = s;
  }
  return r;
}
function ne(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && ux(e, "type") === "object";
}
function tTs(e) {
  return st(_(ZO(e))).slice(0, 16);
}
function Re(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "object" && item !== null && typeof item.name === "string" && typeof item.listing === "string" && (typeof item.definition === "object" && item.definition !== null || typeof item.sameAs === "string"));
}
function Z3e(e, n = new Set()) {
  let o = new Map();
  for (let r of e) {
    if (r.type !== "attachment" || r.attachment?.type !== "deferred_tools_delta" || typeof r.uuid !== "string" || n.has(r.uuid)) continue;
    let d = new Map();
    for (let s of Re(r.attachment.surfacedDefinitions)) {
      if ("definition" in s) {
        d.set(s.name, {
          definition: s.definition,
          listing: s.listing,
          definedIn: r.uuid
        });
        continue;
      }
      let c = o.get(s.sameAs)?.get(s.name);
      if (c !== void 0) d.set(s.name, c);
    }
    if (d.size > 0) o.set(r.uuid, d);
  }
  return o;
}
function nTs(e, n = new Set()) {
  let o = new Set();
  for (let r of Z3e(e, n).values()) for (let d of r.keys()) o.add(d);
  return o;
}
function AMt(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
function rTs(e, n = new Set()) {
  return new Set(Z3e(e, n).keys());
}
function $y(e) {
  if (e.name.startsWith(DG)) return "skill_tool";
  let n = String(On(e.name));
  if (n !== e.name) return n;
  if (e.mcpInfo !== void 0) return "mcp_tool";
  if (e.name.startsWith("eval_registered__")) return "eval_registered";
  if (e.uiTableKey !== void 0 || e.name.includes("__")) return "dynamic_tool";
  return e.name;
}
var oe = Symbol.for("claude-code.hostOnlyNativeTool");
function oTs(e) {
  return Object.defineProperty(e, oe, {
    value: !0,
    enumerable: !0
  }), e;
}
function Wq(e) {
  return oe in e;
}
import { isDeepStrictEqual as re } from "util";
function te() {
  if (!tp()) return !1;
  return !(a.CLAUDE_CODE_SIMPLE || a.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}
function TPe() {
  let e = Ao();
  return e.keptDeferredToolsEnabled ??= te(), e.keptDeferredToolsEnabled;
}
function zyo() {
  return Ao().keptDeferredToolsEnabled ?? te();
}
var be = 5000;
function P(e) {
  return Yzn(e.toolUseId, e.toolName);
}
class ie {
  #e = new Map();
  #n = new Set();
  #o = new Map();
  #r = !1;
  #t = 0;
  get(e) {
    return this.#e.get(P(e));
  }
  set(e, n) {
    let o = P(e);
    if (!this.#e.delete(o) && this.#e.size >= be) {
      let r = this.#e.keys().next().value;
      if (r !== void 0) this.#e.delete(r);
    }
    this.#e.set(o, n), this.#n.add(e.toolName);
  }
  hasTool(e) {
    return this.#n.has(e);
  }
  get size() {
    return this.#e.size;
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#o.get(e)) return !1;
    return this.#o.set(e, n), !0;
  }
  get generation() {
    return this.#t;
  }
  noteRetractionFailure() {
    let e = !this.#r;
    return this.#r = !0, e;
  }
  clear() {
    this.#e.clear(), this.#n.clear(), this.#o.clear(), this.#t++;
  }
}
var uen = new at(() => new ie());
function dG() {
  return uen.of(j());
}
function se(e, n, o, r = !0, d) {
  let s = new Set(o.map(item => item.name)),
    kept = new Map();
  for (let f of n) {
    let b = gd(f.toolName);
    if (kept.has(b)) continue;
    let h = e.get(f);
    if (h?.kind === "sent" && (r || !h.entry.isMcp)) kept.set(b, h.entry);
  }
  let strippedReferenceKeys = new Set(),
    resolvedAgainstKept = [],
    unrecordedDepartures = [];
  for (let reference of n) {
    let b = e.get(reference);
    if (b?.kind === "stripped") {
      strippedReferenceKeys.add(P(reference));
      continue;
    }
    if (b?.kind === "sent") continue;
    let h = gd(reference.toolName),
      entry = kept.get(h);
    if (entry) resolvedAgainstKept.push({
      reference: reference,
      entry: entry
    });else if (!s.has(h) && !d?.keeps(h)) unrecordedDepartures.push(reference);
  }
  return {
    kept: kept,
    strippedReferenceKeys: strippedReferenceKeys,
    resolvedAgainstKept: resolvedAgainstKept,
    unrecordedDepartures: unrecordedDepartures
  };
}
function Gyo(e, n, querySource, {
  keepMcp = !0,
  surfacedOnWire: surfacedOnWire,
  declaredInline: declaredInline
} = {}) {
  try {
    if (!TPe()) return;
    let references = qfe(e, {
      surfacedOnWire: surfacedOnWire
    });
    if (references.length === 0) return;
    let u = dG(),
      generation = u.generation,
      category = Jo(querySource),
      writes = K(category, querySource),
      {
        kept: kept_2,
        strippedReferenceKeys: strippedReferenceKeys_2,
        resolvedAgainstKept: resolvedAgainstKept_2,
        unrecordedDepartures: unrecordedDepartures_2
      } = se(u, references, n, keepMcp, declaredInline);
    if (writes) {
      for (let {
        reference: reference_2,
        entry: entry_2
      } of resolvedAgainstKept_2) u.set(reference_2, {
        kind: "sent",
        entry: entry_2
      });
      for (let x of unrecordedDepartures_2) u.set(x, {
        kind: "stripped"
      });
    }
    return {
      references: references,
      kept: kept_2,
      strippedReferenceKeys: strippedReferenceKeys_2,
      writes: writes,
      category: category,
      querySource: querySource,
      generation: generation
    };
  } catch (error) {
    l(error), m("mcp_kept_deferred_tools", "plan_failed");
    return;
  }
}
function sTs(e, n, {
  keepMcp: keepMcp_2 = !0,
  surfacedOnWire: surfacedOnWire_2
} = {}) {
  try {
    let d = dG();
    if (!TPe()) return;
    let {
        kept: kept_3
      } = se(d, qfe(e, {
        surfacedOnWire: surfacedOnWire_2
      }), n, keepMcp_2),
      c = new Set(n.map(item => item.name));
    return [...kept_3.keys()].filter(item => !c.has(item));
  } catch (error) {
    pen(error);
    return;
  }
}
function iTs(e) {
  let n = dG(),
    o = e.findLastIndex(r => r.type === "system" && r.subtype === "compact_boundary");
  return new Set(qfe(e.slice(o + 1)).filter(item => n.get(item)?.kind !== "stripped").map(item => item.toolName));
}
function aTs(e) {
  let n = dG(),
    o = new Set();
  for (let r of e?.references ?? []) if (n.get(r)?.kind === "stripped") o.add(P(r));
  return o;
}
function pen(e) {
  if (l(e), dG().noteRetractionFailure()) m("mcp_kept_deferred_tools", "retraction_failed");
}
function lTs(e, n, o, {
  requestCarriesStructuredOutputs: r
}) {
  try {
    let d = Math.max(n.length - 1, 0),
      s = dG(),
      c = s.generation !== e.generation,
      u = {
        strict: r,
        eager: L(n)
      },
      T = [],
      y = [];
    for (let [h, R] of e.kept) {
      let k = n.findIndex(item => "name" in item && vt(item, h)),
        x = n[k];
      if (x !== void 0) {
        if ("defer_loading" in x && x.defer_loading && !c) n[k] = A(R.schema, u);
        continue;
      }
      y.push([h, R]), T.push(A(R.schema, u));
    }
    if (n.splice(d, 0, ...T), !e.writes || c) return;
    let f = e.querySource ?? "";
    if (y.length === 0 && e.strippedReferenceKeys.size === 0) s.telemetrySignatureChanged(f, "");else {
      t(`Dynamic tool loading: keeping ${y.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
      let h = `${y.map(([R]) => R).sort().join(",")}|${e.strippedReferenceKeys.size}`;
      if (s.telemetrySignatureChanged(f, h)) {
        let query_source_category = pe(e.category);
        g("mcp_kept_deferred_tools", {
          kept_count: y.length,
          kept_mcp_count: F(y, ([, k]) => k.isMcp),
          stripped_reference_count: e.strippedReferenceKeys.size,
          ...(query_source_category !== void 0 && {
            query_source_category: query_source_category
          })
        });
      }
    }
    let b = new Map();
    for (let h of e.references) {
      if (e.strippedReferenceKeys.has(P(h))) continue;
      let R = gd(h.toolName),
        k = o.get(R);
      if (e.kept.has(R) || !k || !("defer_loading" in k.schema) || k.schema.defer_loading !== !0) continue;
      let entry_3 = b.get(R);
      if (entry_3 === void 0) entry_3 = {
        schema: k.schema,
        isMcp: k.isMcp
      }, b.set(R, entry_3);
      s.set(h, {
        kind: "sent",
        entry: entry_3
      });
    }
  } catch (error) {
    l(error), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function ZUn(e, n, o) {
  try {
    let r = o?.strippedReferences ?? new Set();
    if (n.length === 0 && r.size === 0 || !zyo()) return 0;
    let d = dG(),
      s = new Map();
    for (let schema of n) if (len(schema) && !s.has(schema.name)) s.set(schema.name, {
      schema: schema,
      isMcp: schema.name.startsWith("mcp__")
    });
    let surfacedOnWire_3;
    if (o?.surfacedCarrier !== void 0) {
      surfacedOnWire_3 = new Set();
      for (let y of e) {
        if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || o.surfacedCarrier.nameOnlyAnnouncements.has(y.uuid)) continue;
        let surfacedNames = y.attachment.surfacedNames;
        for (let b of Array.isArray(surfacedNames) ? surfacedNames : []) if (typeof b === "string" && s.has(b)) surfacedOnWire_3.add(b);
      }
      for (let y of surfacedOnWire_3) o.surfacedCarrier.surfacedOnWire.add(y);
    }
    let u = 0,
      T = new Set();
    for (let y of qfe(e, {
      surfacedOnWire: surfacedOnWire_3
    })) {
      let f = d.get(y);
      if (r.has(P(y))) {
        if (f?.kind !== "stripped") d.set(y, {
          kind: "stripped"
        }), u++;
        continue;
      }
      if (f !== void 0) continue;
      let b = gd(y.toolName),
        entry_4 = s.get(b);
      if (entry_4 === void 0) continue;
      d.set(y, {
        kind: "sent",
        entry: entry_4
      }), T.add(b), u++;
    }
    if (u > 0) t(`Dynamic tool loading: seeded ${u} tool reference(s) to ${T.size} deferred tool(s) the previous process sent`);
    return u;
  } catch (error) {
    return l(error), m("mcp_kept_deferred_tools", "seed_failed"), 0;
  }
}
function Se(e, n) {
  if (re(e, n)) return !0;
  let o = {
    ...e
  };
  for (let r of v) if (!(r in n)) delete o[r];
  return re(o, n);
}
function dTs(e, surfacedOnWire_4, o, r, d, s) {
  try {
    if (surfacedOnWire_4.size === 0 || !TPe()) return;
    let c = dG();
    if (c.generation !== s) return;
    if (!K(Jo(d), d)) return;
    let u = new Map();
    for (let T of qfe(e, {
      surfacedOnWire: surfacedOnWire_4
    })) {
      if (c.get(T) !== void 0) continue;
      let y = gd(T.toolName),
        f = r?.kept.get(y) ?? o.get(y);
      if (!f || !("defer_loading" in f.schema) || f.schema.defer_loading !== !0) continue;
      let entry_5 = u.get(y);
      if (entry_5 === void 0) entry_5 = {
        schema: f.schema,
        isMcp: f.isMcp
      }, u.set(y, entry_5);
      c.set(T, {
        kind: "sent",
        entry: entry_5
      });
    }
  } catch (error) {
    l(error), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function cTs(e, n) {
  try {
    let o = ae(n);
    for (let r = 0; r < e.length; r++) {
      let d = o.get(e[r].name);
      if (d !== void 0 && len(d)) e[r] = d;
    }
  } catch (error) {
    l(error);
  }
}
function uTs(e, n) {
  try {
    let o = dG();
    if (!e.writes || o.generation !== e.generation) return;
    let r = ae(n),
      d = new Map();
    for (let s of e.references) {
      if (e.strippedReferenceKeys.has(P(s))) continue;
      let c = gd(s.toolName),
        schema_2 = r.get(c),
        T = o.get(s);
      if (schema_2 === void 0 || T?.kind !== "sent" || Se(T.entry.schema, schema_2)) continue;
      let entry_6 = d.get(c);
      if (entry_6 === void 0) entry_6 = {
        schema: schema_2,
        isMcp: T.entry.isMcp
      }, d.set(c, entry_6);
      o.set(s, {
        kind: "sent",
        entry: entry_6
      });
    }
  } catch (error) {
    l(error), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function K(e, n) {
  return e === "main" || e === "subagent" && n !== gHs;
}
function Vyo(e) {
  return K(Jo(e), e);
}
function ae(e) {
  let n = new Map();
  for (let o of e) if ("defer_loading" in o && o.defer_loading === !0 && "name" in o && typeof o.name === "string") if ("cache_control" in o) {
    let {
      cache_control: cache_control_2,
      ...d
    } = o;
    n.set(o.name, d);
  } else n.set(o.name, o);
  return n;
}
function $b(e, n, o) {
  return Pn(e, n, o);
}
var den = "authenticate",
  cen = "complete_authentication";
var qyo = "bypassPermissions not supported in restricted mode";
function pTs(e) {
  return e.restricted && (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions) ? qyo : void 0;
}
function fTs(e) {
  return e.some(item => item.startsWith("preset:")) ? new Set() : new Set(e);
}
function fen(e, n) {
  let o = [...e, pr].filter(item => !n.has(item)),
    r = [...(n.has(We) ? [] : [Dze]), ...(n.has(pr) ? [] : [P9n])],
    d = [...[...cpn].map(item => si(item, b5n)), ...A8n.map(item => si(Ss, `${item}${b5n}`)), si(aTe, `${upn}${b5n}`)];
  return [...o, ...r, bQe, B2s, ...d];
}
var ke = ["default"];
function tEr(e) {
  let n = e.toLowerCase();
  if (!ke.includes(n)) return null;
  return n;
}
function eBn(e) {
  return new Set([...e.filter(item => item.enablesCodeExecution).map(item => item.name), xt]);
}
function nEr(e) {
  return e.filter(item => item.isEnabled()).map(item => item.name);
}
function z9(e, n) {
  let o = [...dc(n), ...xe(e, n)],
    r = GCo(n, o);
  return e.filter(item => {
    if (de(n, item, o, r) || item.mcpInfo?.effectiveMaxPermission === "blocked") return !1;
    if (!xMt(n, item)) return !0;
    if (ea().claim(`tool_outside_launch_list:${item.name}`)) t(`${$y(item)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`, {
      level: "warn"
    }), i("tengu_tool_withheld_outside_launch_list", {
      toolName: On($y(item))
    });
    return !1;
  });
}
function xMt({
  toolsKeptByLaunchList: toolsKeptByLaunchList
}, n) {
  return !(toolsKeptByLaunchList === void 0 || ch(n) || n.mcpInfo !== void 0 || Wq(n) || u3(n) || toolsKeptByLaunchList.includes(n.name) || n.familyParentToolName !== void 0 && toolsKeptByLaunchList.includes(n.familyParentToolName));
}
function e5e(e, n, o = dc(e), r) {
  return de(e, n, o, r);
}
function de(e, n, o, r) {
  let d = s => r !== void 0 ? _9e(e, r, s) : Ho(e, s, o) !== null;
  if (d(n)) return !0;
  if (n.underlyingV1ToolName && d({
    name: n.underlyingV1ToolName
  })) return !0;
  if (n.mcpInfo === void 0) {
    let s = qwe(n.name);
    if (s !== void 0 && d(s) && s.isEnabled()) return !0;
  }
  if (Wq(n) && Ee(e, o)) return !0;
  {
    let {
      APPIFACT_REPL_TOOL_NAME: APPIFACT_REPL_TOOL_NAME
    } = import.meta.require("B:/~BUN/root/chunk-h1h124j8.js");
    if (n.mcpInfo === void 0 && n.name === APPIFACT_REPL_TOOL_NAME && tBn(e, o.filter(item => item.source !== "toolsNarrowing")) !== null) return !0;
  }
  return !1;
}
function PMt(e, n) {
  if (!c2o().has(n.name)) return !1;
  if (Ni("hipaa")) return !1;
  let o = dc(e).filter(item => item.source !== "toolsNarrowing");
  return !e5e(e, n, o);
}
function Ee(e, n) {
  return n.some(item => item.ruleValue.toolName === We);
}
function tBn(e, n) {
  let o = e.toolAliases?.[We],
    r = [We, ...(o !== void 0 ? [o] : [])];
  for (let name of r) {
    let s = Ho(e, {
      name: name
    }, n);
    if (s !== null) return s;
  }
  return n.find(item => r.includes(item.ruleValue.toolName) && item.ruleValue.ruleContent !== void 0 && zCo(item.ruleValue.ruleContent)) ?? null;
}
function xe(e, {
  restricted: restricted,
  toolsKeptByLaunchList: toolsKeptByLaunchList_2
}) {
  if (!(restricted === !0 && toolsKeptByLaunchList_2 === void 0)) return [];
  let r = new Set([...e.filter(item => item.enablesCodeExecution).map(item => item.name), xt]);
  return fen(r, new Set()).map(d => ({
    source: "toolsNarrowing",
    ruleBehavior: "deny",
    ruleValue: {
      toolName: d
    }
  }));
}
function OMt(e) {
  switch (e.kind) {
    case "policy_blocked":
    case "reserved_address":
    case "org_blocked":
    case "denied":
    case "disabled":
    case "switched_off":
    case "not_configured":
      return !0;
    case "reconnecting":
    case "needs_auth":
    case "disconnected":
    case "auth_completed":
    case "not_offered":
    case "withdrawn":
      return !1;
  }
}
function zwe(name_2, n, o, r, d = ime(o)) {
  let mcpInfo = r?.mcpInfo;
  if (mcpInfo === void 0 && co(name_2) === null) {
    let f = {
      ...r,
      name: name_2,
      underlyingV1ToolName: _ie(name_2),
      familyParentToolName: r?.familyParentToolName
    };
    return e5e(o, f, d.rules, d.index) && !PMt(o, f) ? {
      kind: "denied",
      serverName: void 0
    } : {
      kind: "withdrawn"
    };
  }
  let c = mcpInfo === void 0 ? _9e(o, d.index, {
      name: name_2
    }) : e5e(o, {
      name: name_2,
      mcpInfo: mcpInfo
    }, d.rules, d.index),
    T = le(name_2, n, mcpInfo).map(({
      row: row,
      upstream: upstream
    }) => Oe(row, upstream, c)),
    y = T.find(OMt) ?? T.find(item => item.kind === "not_offered" || item.kind === "auth_completed") ?? T[0];
  if (y) return y;
  return c ? {
    kind: "denied",
    serverName: void 0
  } : {
    kind: "not_configured"
  };
}
function mTs(e, n) {
  return le(e, n, void 0).filter(({
    row: row_2
  }) => row_2.type === "pending").map(({
    row: row_3
  }) => row_3.name);
}
function le(e, n, o) {
  if (o !== void 0) {
    let upstream_2 = Tn(o.toolName);
    return n.filter(item => item.name === o.serverName).map(c => ({
      row: c,
      upstream: upstream_2
    }));
  }
  let r = n.map(s => ({
      row: s,
      prefix: uo(s.name)
    })).filter(({
      prefix: prefix
    }) => e.startsWith(prefix)),
    d = Math.max(0, ...r.map(({
      prefix: prefix_2
    }) => prefix_2.length));
  return r.filter(({
    prefix: prefix_3
  }) => prefix_3.length === d).map(({
    row: row_4,
    prefix: prefix_4
  }) => ({
    row: row_4,
    upstream: e.slice(prefix_4.length)
  }));
}
function Oe(e, n, o) {
  let serverName = Ka(e.name);
  if (o) return {
    kind: "denied",
    serverName: serverName
  };
  if (Ce(e, n)) return {
    kind: "org_blocked",
    serverName: serverName
  };
  switch (e.type) {
    case "pending":
      return {
        kind: "reconnecting",
        serverName: serverName
      };
    case "needs-auth":
      return {
        kind: "needs_auth",
        serverName: serverName
      };
    case "failed":
      if (IMt(e.error)) return {
        kind: "policy_blocked",
        serverName: serverName
      };
      if (MMt(e.error)) return {
        kind: "reserved_address",
        serverName: serverName
      };
      return px(e) ? {
        kind: "not_configured"
      } : {
        kind: "disconnected",
        serverName: serverName
      };
    case "disabled":
      return {
        kind: e.config.type === "sdk" ? "switched_off" : "disabled",
        serverName: serverName
      };
    case "connected":
    case "cached":
      return n === den || n === cen ? {
        kind: "auth_completed",
        serverName: serverName
      } : {
        kind: "not_offered",
        serverName: serverName
      };
  }
}
function Ce(e, n) {
  if (!("toolPermissions" in e.config)) return !1;
  let toolPermissions = e.config.toolPermissions;
  if (!toolPermissions) return !1;
  return Object.entries(toolPermissions).some(([r, d]) => d === "blocked" && Tn(r) === n);
}
function EUe() {
  return tp();
}
class Gwe {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, n = {
    only: new Map(),
    order: []
  }) {
    this.names = n.names ?? [...e.map(item => item.name), ...n.only.keys()], this.recordedOnly = n.only, this.recordOrder = n.order, this.#e = new Map(e.map(item => [item.name, item]));
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e);
  }
  keeps(e) {
    return this.has(e) && e !== Wa;
  }
  toolFor(e) {
    return this.#e.get(e);
  }
  without(e) {
    return new Gwe([...this.#e.values()].filter(item => !e.has(item.name)), {
      only: new Map([...this.recordedOnly].filter(([n]) => !e.has(n))),
      order: this.recordOrder.filter(item => !e.has(item)),
      names: this.names.filter(item => !e.has(item))
    });
  }
  sourceFor(e) {
    let n = this.#e.get(e),
      o = this.recordedOnly.get(e)?.server;
    if (n !== void 0 || o === void 0) return n;
    return ce(e, o);
  }
}
function Kyo(e) {
  return e ?? js();
}
function Vwe(e) {
  let declaredTools = e.declaredTools;
  return declaredTools instanceof Gwe ? declaredTools : void 0;
}
function men(e) {
  let noChannelTools = e.noChannelTools;
  return noChannelTools instanceof Gwe ? noChannelTools : void 0;
}
function Yyo(e, n, o) {
  if (n) {
    e.noChannelTools = void 0;
    return;
  }
  if (e.noChannelTools === void 0 && !EUe()) return;
  let r = o();
  return e.noChannelTools = r, r;
}
function Xyo(e, n, o) {
  let r = new Set([...n, ...e].map(item => item.name)),
    only = new Map([...(o ?? [])].filter(([f]) => !r.has(f)));
  if (only.size === 0) return new Gwe(e);
  let s = f => f.isMcp === !0 || co(f.name) !== null,
    c = e.findIndex(s),
    u = (f, b) => !s(f) && (f.name === Wa && b === e.length - 1 || c !== -1 && b > c),
    T = [...e.filter(s).map(item => item.name), ...only.keys()].sort((f, b) => yme({
      name: f
    }, {
      name: b
    })),
    y = [...e.filter((item, index) => !s(item) && !u(item, index)).map(item => item.name), ...T, ...e.filter(u).map(item => item.name)];
  return new Gwe(e, {
    only: only,
    order: y,
    names: y
  });
}
var De = new Set(["name", "description", "input_schema", "type", ...v]);
async function gTs({
  recordedToolDescriptions: recordedToolDescriptions,
  recordedToolServers: recordedToolServers,
  recordedToolEntries: recordedToolEntries,
  mcpClients = [],
  getToolPermissionContext: getToolPermissionContext
}, s, c) {
  if (recordedToolDescriptions === void 0 || recordedToolDescriptions.has(Si) || !EUe()) return;
  let u = new Set(s.map(item => item.name)),
    T = [];
  for (let name_3 of recordedToolDescriptions.keys()) {
    let entry_7 = recordedToolEntries?.get(name_3),
      server = recordedToolServers?.get(name_3);
    if (!u.has(name_3) && c?.has(name_3) !== !0 && entry_7 !== void 0 && server !== void 0 && name_3.startsWith(uo(server)) && entry_7.name === name_3 && /^[a-zA-Z0-9_-]+$/.test(name_3) && Object.keys(entry_7).every(item => De.has(item))) T.push({
      name: name_3,
      entry: entry_7,
      server: server
    });
  }
  if (T.length === 0) return;
  let y = await getToolPermissionContext(),
    f = new Map(),
    b;
  for (let {
    name: name_4,
    entry: entry_8,
    server: server_2
  } of T) try {
    if (b ??= ime(y), zwe(name_4, mcpClients, y, ce(name_4, server_2), b).kind === "reconnecting") f.set(name_4, {
      entry: entry_8,
      server: server_2
    });
  } catch (error) {
    l(H(error));
  }
  return f.size === 0 ? void 0 : f;
}
async function hTs(kept_4, n, {
  mcpClients: mcpClients_2,
  getPermissionContext: getPermissionContext,
  byValue: byValue
}) {
  let s = nBn(kept_4, n, !0);
  if (s.length === 0) return {
    kept: kept_4,
    unread: 0
  };
  let c = Ni("hipaa"),
    u = R => c && !V(R, kept_4.sourceFor(R)?.mcpInfo?.serverName),
    T = R => byValue?.has(R) === !0 || u(R),
    y;
  try {
    y = await getPermissionContext();
  } catch (error) {
    l(H(error));
    let k = new Set(s.filter(T));
    return {
      kept: k.size === 0 ? kept_4 : kept_4.without(k),
      unread: 0
    };
  }
  let unread = 0,
    b,
    h = new Set(s.filter(item => {
      if (T(item)) return !0;
      try {
        return b ??= ime(y), OMt(zwe(item, mcpClients_2, y, kept_4.sourceFor(item), b));
      } catch (error) {
        return l(H(error)), unread++, !0;
      }
    }));
  return {
    kept: h.size === 0 ? kept_4 : kept_4.without(h),
    unread: unread
  };
}
function TUe(e) {
  if (e.agentId && !e.stickyBetas) return;
  return Kyo(e.stickyBetas);
}
function t5e(e) {
  let n = TUe(e);
  return n === void 0 ? void 0 : Vwe(n);
}
function gen(e) {
  let n = TUe(e);
  return n === void 0 ? void 0 : men(n);
}
function yTs(e, n) {
  if (sSt(e), e.declaredTools !== void 0 || !EUe()) return !1;
  return ogn(e, new Gwe(n)), !0;
}
function Pe(e, n, {
  servers: servers,
  entries: entries
} = we, d) {
  let s = new Map(n.map(item => [item.name, item])),
    c,
    u = () => (c ??= CK() ?? null, c ?? void 0),
    T = S => {
      let O = u()?.find(C => vt(C, S))?.underlyingV1ToolName;
      return O === void 0 ? void 0 : s.get(O);
    },
    y = new Map(),
    only_2 = new Map(),
    gateOff = 0,
    needsUser = 0,
    launchOmitted = 0,
    k = S => {
      return;
    },
    order = [...e];
  for (let S of order) {
    let O = s.get(S) ?? k(S) ?? T(S);
    if (O === void 0) {
      let entry_9 = entries?.get(S),
        server_3 = servers?.get(S);
      if (entry_9 === void 0 || Ie(S, server_3, u())) continue;
      if (Me(S, server_3, u(), n)) only_2.set(S, {
        entry: entry_9,
        server: server_3
      });else {
        let Y = Ae(S, u(), d);
        if (Y === "launch_omitted") only_2.set(S, {
          entry: entry_9,
          server: server_3
        }), launchOmitted++;else if (Y === "gate_off") {
          if (only_2.set(S, {
            entry: entry_9,
            server: server_3
          }), gateOff++, Be(S, u())) needsUser++;
        }
      }
      continue;
    }
    y.set(O.name, O);
    let C = O.underlyingV1ToolName === void 0 ? void 0 : s.get(O.underlyingV1ToolName);
    if (C !== void 0) y.set(C.name, C);
  }
  for (let S of n) if (S.underlyingV1ToolName !== void 0 && y.has(S.underlyingV1ToolName)) y.set(S.name, S);
  for (let S of y.keys()) only_2.delete(S);
  return y.size === 0 && only_2.size === 0 ? void 0 : {
    held: new Gwe(n.filter(item => y.has(item.name)), {
      only: only_2,
      order: order
    }),
    recorded: order.length,
    gateOff: gateOff,
    needsUser: needsUser,
    launchOmitted: launchOmitted
  };
}
function rEr(e, n, o, {
  latch: latch,
  permissionContext: permissionContext
}) {
  let s = Vwe(e);
  if (s !== void 0 || e.declaredToolsDecided) return s;
  if (latch) sSt(e);
  if (e.declaredTools !== void 0 || !EUe()) return;
  let c = n(),
    u = c === void 0 ? void 0 : Pe(c.names, o, c, permissionContext);
  if (u === void 0 || !latch) return u?.held;
  return ogn(e, u.held), i("tengu_declared_tool_set_from_record", {
    recorded: u.recorded,
    held: u.held.names.length - u.held.recordedOnly.size,
    heldByName: u.held.recordedOnly.size,
    heldGateOff: u.gateOff,
    heldNeedsUser: u.needsUser,
    heldLaunchOmitted: u.launchOmitted
  }), u.held;
}
function Jyo(tools, n) {
  if (n === void 0) return {
    tools: tools,
    redeclared: []
  };
  let o = new Set(tools.map(item => item.name)),
    r = c => o.has(c) || !n.keeps(c) ? void 0 : n.toolFor(c);
  if (n.names.every(item => r(item) === void 0)) return {
    tools: tools,
    redeclared: []
  };
  let tools_2 = [...tools],
    redeclared = [];
  return n.names.forEach((item, index) => {
    let T = r(item);
    if (!T) return;
    let y = -1;
    for (let f = index - 1; f >= 0 && y === -1; f--) {
      let b = n.names[f];
      y = tools_2.findIndex(item => item.name === b);
    }
    if (y !== -1) tools_2.splice(y + 1, 0, T);else {
      let f = tools_2.findIndex(item => n.has(item.name));
      tools_2.splice(f === -1 ? 0 : f, 0, T);
    }
    o.add(item), redeclared.push(item);
  }), redeclared.length === 0 ? {
    tools: tools,
    redeclared: redeclared
  } : {
    tools: tools_2,
    redeclared: redeclared
  };
}
function _Ts(e, n) {
  let o = Vwe(e);
  if (o === void 0 || n.length === 0) return;
  e.declaredTools = o.without(new Set(n)), i("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !1
  });
}
function bTs(e, n) {
  let o = e === void 0 ? void 0 : men(e);
  return nBn(o, n, !0);
}
function STs(e, n) {
  let o = men(e);
  if (o === void 0 || n.length === 0) return;
  e.noChannelTools = o.without(new Set(n)), i("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !0
  });
}
function nBn(e, n, o) {
  if (e === void 0) return [];
  let r = new Set(n.map(item => item.name));
  return e.names.filter(item => {
    if (r.has(item) || !e.keeps(item)) return !1;
    let s = e.sourceFor(item)?.mcpInfo;
    return o || !V(item, s?.serverName);
  });
}
var we = {
  servers: void 0,
  entries: void 0
};
function Me(e, n, o, r) {
  if (e === Wa) return !1;
  if (n !== void 0) return !0;
  if (co(e) !== null) return !1;
  if (e === dD && !r.some(item => vt(item, Si))) return !0;
  return o !== void 0 && $b(o, e) === void 0;
}
function Ae(e, n, o) {
  if (o === void 0 || n === void 0) return;
  if (e === Wa || e === dD || co(e) !== null) return;
  let r = n.find(item => item.name === e);
  if (r === void 0 || r.isMcp === !0) return;
  if (!ve() || Ni("hipaa")) return;
  if (e5e(o, r)) return PMt(o, r) ? "launch_omitted" : void 0;
  if (xMt(o, r)) return o.builtInToolsDisabled === !0 || o.restricted === !0 && fen(eBn([r]), new Set()).includes(r.name) ? void 0 : "launch_omitted";
  if (r.isEnabled()) return;
  return "gate_off";
}
function Be(e, n) {
  return n?.find(o => o.name === e)?.requiresUserInteraction?.() === !0;
}
var Ne = "tengu_gleaming_cupcake";
function ve() {
  return E(Ne, !0);
}
var Le = "tengu_joyful_anchor";
function Ie(e, n, o) {
  if (V(e, n)) return !1;
  let r = E(Le, null);
  if (!Array.isArray(r) || r.length === 0) return !1;
  let d = o?.find(s => vt(s, e));
  return r.some(item => typeof item === "string" && (item === e || d !== void 0 && vt(d, item)));
}
function ce(e, serverName_2) {
  let o = uo(serverName_2);
  return {
    mcpInfo: {
      serverName: serverName_2,
      toolName: e.startsWith(o) ? e.slice(o.length) : e
    }
  };
}
function V(e, n) {
  return n !== void 0 || co(e) !== null;
}
function wTs(e, n, {
  pool: pool,
  keptDeferred: keptDeferred,
  keepMcp: keepMcp_3,
  requestCarriesStructuredOutputs: s,
  recordedEntries: recordedEntries
}) {
  let u = new Set(Qyo(n, {
    pool: pool,
    keptDeferred: keptDeferred,
    keepMcp: keepMcp_3
  }));
  if (u.size === 0) return [];
  let T = new Set(e.map(I)),
    recordOrder = n.recordOrder,
    f = {
      strict: s,
      eager: L(e)
    },
    b = [];
  return recordOrder.forEach((item, index) => {
    let k = n.recordedOnly.get(item);
    if (k === void 0 || T.has(item) || !u.has(item)) return;
    let x = recordedEntries?.get(item) ?? k.entry,
      S = -1;
    for (let O = index - 1; O >= 0 && S === -1; O--) {
      let C = recordOrder[O];
      if (T.has(C)) S = e.findIndex(item => I(item) === C) + 1;
    }
    if (S === -1) {
      let O = new Set(recordOrder),
        C = e.findIndex(item => O.has(I(item) ?? ""));
      S = C === -1 ? 0 : C;
    }
    e.splice(S, 0, A(x, f)), T.add(item), b.push(item);
  }), b;
}
function Qyo(e, {
  pool: pool_2,
  keptDeferred: keptDeferred_2,
  keepMcp: keepMcp_4
}) {
  let d = new Set([...pool_2.map(item => item.name), ...keptDeferred_2]);
  return e.recordOrder.filter(item => {
    let c = e.recordedOnly.get(item);
    return c !== void 0 && !d.has(item) && (keepMcp_4 || !V(item, c.server));
  });
}
function I(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0;
}
function vTs() {
  return TPe();
}
function kTs(e) {
  let n = new Set();
  for (let o of e) {
    let r = I(o);
    if (r !== void 0) n.add(r);
  }
  return n;
}
function ETs(e) {
  if (e.deferredLate === 0 && e.redeclared === 0 && e.fromRecord === 0 && e.unclassifiedDepartures === 0) return;
  i("tengu_declared_tool_set_held", {
    deferredLate: e.deferredLate,
    redeclared: e.redeclared,
    fromRecord: e.fromRecord,
    ...(e.queryDepth !== void 0 && {
      queryDepth: e.queryDepth
    }),
    toolSearchAbsent: e.toolSearchAbsent,
    noDeferredChannel: e.noDeferredChannel,
    unclassifiedDepartures: e.unclassifiedDepartures
  });
}
function B(e, n) {
  return n5e(e) && dEe(n);
}
function n5e(e) {
  return gk(e, Qb) && !z(e);
}
function z(e) {
  return pm(e, Dx) || XVo() || !TPe();
}
function CPe(e, n) {
  return (gk(e, Qb) || eYn() && !pm(e, Qb)) && !z(e) && dEe(n);
}
function TTs(e, n) {
  return rBn(e) && B(e, n);
}
function rBn(e) {
  return gk(e, _b) && !ZJn() && n5e(e);
}
function CTs(e, n) {
  if (ZJn() || pm(e, _b)) return !1;
  if (gk(e, _b)) return CPe(e, n);
  return !gk(e, Qb) && GHt() && CPe(e, n);
}
function oEr(e, n, {
  toolSearchToolFilteredOut: toolSearchToolFilteredOut,
  toolPoolRefreshes: toolPoolRefreshes,
  aheadOfRequest: aheadOfRequest
}) {
  return toolSearchToolFilteredOut && (aheadOfRequest ? CPe(e, n) : B(e, n)) && (Vwe(e) !== void 0 || toolPoolRefreshes && EUe());
}
function RTs(e, n, o) {
  let r = !gk(e, Qb);
  if (n.includes(Qb) && !z(e)) {
    if (hF(e, Qb), r && n.includes(_b) && !ZJn() && !pm(e, _b)) hF(e, _b);
  }
  let d = B(e, o),
    s = d && rBn(e),
    c = n;
  if (d && !c.includes(Qb)) c = [...c, Qb];
  if (!d && c.includes(Qb)) c = c.filter(item => item !== Qb);
  if (s && !c.includes(_b)) c = [...c, _b];
  if (!s && c.includes(_b)) c = c.filter(item => item !== _b);
  return c;
}
function ATs(e, n, o, r) {
  if (B(e, o) && dEe(r)) {
    let d = n.includes(Qb) ? n : [...n, Qb],
      s = rBn(e);
    if (s && !d.includes(_b)) return [...d, _b];
    return s ? d : d.filter(item => item !== _b);
  }
  return n.filter(item => item !== Qb && item !== _b);
}
function xTs(e, n, {
  mintModel: mintModel,
  retryModel: retryModel,
  advisorEntryMoved: d,
  deferredEntriesMoved: s,
  hasDeferredChannel: hasDeferredChannel
}) {
  try {
    if (!B(e, mintModel) || dEe(retryModel)) return;
    let u = {
      advisor_entry: d,
      deferred_entries: s,
      announcement_blocks: hasDeferredChannel && n.some(item => je(e, item))
    };
    return Object.values(u).some(Boolean) ? u : void 0;
  } catch (error) {
    l(H(error));
    return;
  }
}
function je(e, n) {
  if (n.type !== "attachment" || n.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(n.uuid)) return !1;
  let surfacedNames_2 = n.attachment.surfacedNames;
  return Array.isArray(surfacedNames_2) && surfacedNames_2.some(item => typeof item === "string" && (e.surfacedOnWire.has(item) || e.definedByValue.has(item)));
}
function PTs(e, n, o, r, d = new Set()) {
  if (!r) return;
  let s = !n5e(e);
  for (let c of n) {
    if (c.type !== "attachment" || c.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(c.uuid)) continue;
    let surfacedNames_3 = c.attachment.surfacedNames;
    if (Array.isArray(surfacedNames_3) && surfacedNames_3.length > 0 && (s || surfacedNames_3.some(item => typeof item !== "string" || !o.has(item) && !d.has(item)))) e.nameOnlyAnnouncements.add(c.uuid);
  }
}
function Zyo(e, n, o, {
  useToolSearch: useToolSearch,
  toolSearchAbsent: toolSearchAbsent,
  blocksEligible: blocksEligible,
  byValueNames = new Set(),
  byValueStaysOut: byValueStaysOut
}) {
  if (!useToolSearch && !toolSearchAbsent) return;
  if (!blocksEligible) {
    if (!n5e(e)) e.surfacedOnWire.clear(), e.definedByValue.clear();else if (byValueStaysOut) e.definedByValue.clear();
    return;
  }
  e.surfacedOnWire.clear(), e.definedByValue.clear();
  let T = new Set();
  for (let y of o) if (y.type === "api_system") {
    for (let f of y.toolRemovals ?? []) e.definedByValue.delete(f);
    for (let f of y.toolAdditions ?? []) if (AMt(y.toolDefinitions, f) !== void 0) T.add(f), e.definedByValue.add(f);else e.surfacedOnWire.add(f);
  }
  if (toolSearchAbsent) return;
  for (let y of n) {
    if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(y.uuid)) continue;
    let surfacedNames_4 = y.attachment.surfacedNames;
    if (Array.isArray(surfacedNames_4) && surfacedNames_4.some(item => typeof item === "string" && !e.surfacedOnWire.has(item) && !T.has(item) && !byValueNames.has(item))) e.nameOnlyAnnouncements.add(y.uuid);
  }
}
function OTs(e, n, o, r) {
  if (e_o(e), n === "header_rejected" || n === "block_type_unknown") {
    if (JVo(), n === "header_rejected") {
      if (kSt(Qb), r) Bjr(), kSt(_b);
    }
  } else if (n === "model_unsupported") iqo(qe(o));
  t(`[late-tool-additions] tool_addition rejected (${n}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`, {
    level: "warn"
  }), p("mcp_late_tool_additions", `rejected_${n}`);
}
function e_o(e) {
  if (gk(e, Qb)) kg(e, Qb);
  fe(e), e.surfacedOnWire.clear();
}
function fe(e) {
  if (gk(e, _b)) czo(e, _b);
  e.definedByValue.clear();
}
function ITs(e, n) {
  if (fe(e), n === "header_rejected" || n === "unsupported_on_platform") {
    if (Bjr(), n === "header_rejected") kSt(_b);
  }
  t(`[inline-tools] tool_definition rejected (${n}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`, {
    level: "warn"
  }), p("mcp_inline_tools", `rejected_${n}`);
}
function MTs(text, n, cache_control_3, r = [], d = {}) {
  let s = [...(text ? [{
    type: "text",
    text: text
  }] : []), ...r.map(c => ({
    type: "tool_removal",
    tool: {
      type: "tool_reference",
      name: c
    }
  })), ...n.map(c => {
    let definition = AMt(d, c);
    return definition === void 0 ? {
      type: "tool_addition",
      tool: {
        type: "tool_reference",
        name: c
      }
    } : {
      type: "tool_addition",
      tool: {
        type: "tool_definition",
        definition: definition
      }
    };
  })];
  if (cache_control_3 !== void 0 && s.length > 0) s.push({
    ...s.pop(),
    cache_control: cache_control_3
  });
  return s;
}
export { QEs, jyo, ien, ZEs, Wyo, aen, ux, eEr, len, eTs, tTs, Z3e, nTs, AMt, rTs, den, cen, oTs, Wq, TPe, zyo, uen, dG, Gyo, sTs, iTs, aTs, pen, lTs, ZUn, dTs, cTs, uTs, Vyo, $y, $b, qyo, pTs, fTs, fen, tEr, eBn, nEr, z9, xMt, e5e, PMt, tBn, OMt, zwe, mTs, EUe, Gwe, Kyo, Vwe, men, Yyo, Xyo, gTs, hTs, TUe, t5e, gen, yTs, rEr, Jyo, _Ts, bTs, STs, nBn, wTs, Qyo, vTs, kTs, ETs, n5e, CPe, TTs, rBn, CTs, oEr, RTs, ATs, xTs, PTs, Zyo, OTs, e_o, ITs, MTs };