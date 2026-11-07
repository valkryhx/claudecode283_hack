// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { Xl } from "B:/~BUN/root/chunk-44q965xg.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { su, kRe, ls } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { g, m } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { uVi } from "B:/~BUN/root/chunk-2x2z0t2k.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { ht } from "B:/~BUN/root/chunk-y1b1g4ac.js";
import { lN } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ka } from "B:/~BUN/root/chunk-tjfmeakx.js";
import { Dpt, J6 } from "B:/~BUN/root/chunk-n3m61sfz.js";
import { xkr, Qze, lLe, sCe } from "B:/~BUN/root/chunk-63tek2rx.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { U, js } from "B:/~BUN/root/chunk-5ha2avah.js";
import { isDeepStrictEqual as w } from "util";
var I = ["betas", "tool_choice", "thinking", "context_management", "output_config", "speed", "temperature", "max_tokens"];
function XFi(e) {
  return {
    model: e.model,
    tools: e.tools.map((n, index) => ({
      key: L(n, index),
      deferred: s0n(n),
      bound: s0n(n),
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
function Tys(e, n = {}) {
  let r = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === !0 ? ne(e.messages) : void 0),
    s = typeof e.system === "string" ? [{
      type: "text",
      text: e.system
    }] : e.system ?? [],
    envelope = {};
  for (let o of I) {
    let c = o === "betas" ? J(e.betas) : o === "context_management" ? Z(e.context_management) : e[o];
    if (c !== void 0) envelope[o] = c;
  }
  return {
    model: e.model,
    envelope: envelope,
    tools: (e.tools ?? []).map((item, index) => {
      let f = item;
      if ("ownership_metadata" in item) {
        let {
          ownership_metadata: ownership_metadata,
          ...l
        } = item;
        f = l;
      }
      return {
        key: L(item, index),
        deferred: item.defer_loading === !0,
        bound: item.defer_loading === !0 && typeof item.name === "string" && r?.has(item.name) === !0,
        cacheControl: P(item),
        body: M(f)
      };
    }),
    system: s.map(item => ({
      preamble: J6(item),
      cacheControl: P(item),
      body: M(item)
    })),
    messages: e.messages.map((item, index, f) => ({
      role: item.role,
      turnScopedSystem: item.role === "system" && index === f.length - 1,
      blocks: typeof item.content === "string" ? [{
        thinking: !1,
        cacheControl: void 0,
        body: {
          type: "text",
          text: item.content
        }
      }] : item.content.map(item => ({
        thinking: item.type === "thinking" || item.type === "redacted_thinking",
        cacheControl: P(item),
        body: lfo(te(M(item)), void 0)
      }))
    }))
  };
}
function o0n(e) {
  return {
    model: e.model,
    tools: e.tools.filter(ee).map(item => item.body),
    system: e.system.filter(item => !item.preamble).map(item => item.body),
    messages: e.messages.filter(item => !item.turnScopedSystem).map(item => ({
      role: item.role,
      content: item.blocks.filter(item => !item.thinking).map(item => item.body)
    }))
  };
}
function JFi(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message";
}
var D = 16;
function Cys(e, n) {
  return e.seeded ? B(e, n) : [...B(e, n), ...G(e, n), ...Y(e, n), ...X(e, n)];
}
function B(e, n) {
  let r = o0n(e),
    s = o0n(n),
    d = [],
    o = u => (d.push(u), d.length < D),
    c = u => new Map([...u.filter(item => !item.deferred), ...u.filter(item => item.bound)].map(item => [item.key, item])),
    f = c(e.tools),
    k = c(n.tools),
    l = [],
    h = !1;
  for (let [id, p] of f) {
    let prev = p.body,
      b = k.get(id);
    if (b === void 0) {
      if (p.deferred) {
        if (!e.seeded) l.push({
          part: "tool",
          id: id,
          kind: "removed",
          prev: prev
        });
        continue;
      }
      if (h = !0, !o({
        part: "tool",
        id: id,
        kind: "removed",
        prev: prev
      })) return d;
    } else if (p.deferred !== b.deferred) {
      h = !0;
      let S = p.deferred ? {
        part: "tool",
        id: id,
        kind: "added",
        next: b.body
      } : {
        part: "tool",
        id: id,
        kind: "removed",
        prev: prev
      };
      if (!o(S)) return d;
    } else if (!w(prev, b.body)) {
      h ||= !p.deferred;
      let next = b.body,
        field = [...Object.keys(prev), ...Object.keys(next)].find(item => !w(QE(prev, item), QE(next, item))) ?? "?";
      if (!o({
        part: "tool",
        id: id,
        kind: "changed",
        field: field,
        prev: prev,
        next: next
      })) return d;
    }
  }
  for (let [id_2, p] of k) if (!f.has(id_2) && !p.deferred) {
    if (h = !0, !o({
      part: "tool",
      id: id_2,
      kind: "added",
      next: p.body
    })) return d;
  }
  if (!h) {
    let u = S => [...S.values()].flatMap(item => item.deferred ? [] : [item.key]),
      p = u(f),
      id_3 = u(k).filter(item => f.has(item)).find((item, index) => p[index] !== item);
    if (id_3 !== void 0) o({
      part: "tool",
      id: id_3,
      kind: "reordered"
    });
  }
  let x = Math.max(r.system.length, s.system.length);
  for (let index_2 = 0; index_2 < x; index_2++) {
    let prev_2 = r.system[index_2],
      next_2 = s.system[index_2],
      kind = prev_2 === void 0 ? "added" : next_2 === void 0 ? "removed" : "changed";
    if (kind !== "changed" || !w(prev_2, next_2)) {
      if (!o({
        part: "system",
        index: index_2,
        kind: kind,
        prev: prev_2,
        next: next_2
      })) return d;
    }
  }
  for (let index_3 = 0; index_3 < r.messages.length; index_3++) {
    let prev_3 = r.messages[index_3],
      next_3 = s.messages[index_3];
    if (next_3 !== void 0 && w(prev_3, next_3)) continue;
    let b = {
      part: "message",
      index: index_3,
      role: prev_3.role,
      kind: next_3 === void 0 ? "removed" : "changed",
      prev: prev_3,
      next: next_3
    };
    if (!o(b)) return d;
  }
  for (let u of l) if (!o(u)) break;
  return d;
}
function G(e, n) {
  let r = [],
    s = Math.min(e.messages.length, n.messages.length);
  for (let index_4 = 0; index_4 < s && r.length < D; index_4++) {
    let o = j(e.messages[index_4]),
      c = j(n.messages[index_4]);
    if (o.length === 0 && c.length === 0) continue;
    if (o.length === c.length && o.every((item, index) => item === c[index])) continue;
    let f = o.slice(0, c.length).every((item, index) => item === c[index]) || c.slice(0, o.length).every((item, index) => item === o[index]);
    r.push({
      part: "thinking",
      index: index_4,
      kind: !f ? "changed" : c.length < o.length ? "dropped" : "added",
      prevCount: o.length,
      nextCount: c.length
    });
  }
  return r;
}
function j(e) {
  return e.blocks.flatMap(item => {
    if (!item.thinking) return [];
    let r = QE(item.body, "signature"),
      s = QE(item.body, "data");
    return [typeof r === "string" ? r : typeof s === "string" ? s : "?"];
  });
}
function Y(e, n) {
  let r = O(e, e.messages.length),
    s = O(n, e.messages.length),
    d = [];
  for (let [o, {
    at: at,
    marker: f
  }] of r) {
    if (d.length >= D) return d;
    let k = s.get(o);
    if (k === void 0) d.push({
      part: "cache",
      at: at,
      kind: "dropped",
      prev: f,
      next: void 0
    });else if (!w(f, k.marker)) d.push({
      part: "cache",
      at: at,
      kind: "changed",
      prev: f,
      next: k.marker
    });
  }
  for (let [o, {
    at: at_2,
    marker: f
  }] of s) {
    if (d.length >= D) return d;
    if (!r.has(o)) d.push({
      part: "cache",
      at: at_2,
      kind: "added",
      prev: void 0,
      next: f
    });
  }
  return d;
}
function O(e, n) {
  let r = new Map();
  for (let s of e.tools) if (s.cacheControl !== void 0) r.set(`tools:${s.key}`, {
    at: {
      segment: "tools",
      key: s.key
    },
    marker: s.cacheControl
  });
  return e.system.forEach((item, index_5) => {
    if (item.cacheControl !== void 0) r.set(`system:${index_5}`, {
      at: {
        segment: "system",
        index: index_5
      },
      marker: item.cacheControl
    });
  }), e.messages.slice(0, n).forEach((item, index_6) => {
    item.blocks.forEach((item, c) => {
      if (item.cacheControl !== void 0) r.set(`messages:${index_6}.${c}`, {
        at: {
          segment: "messages",
          index: index_6,
          block: c
        },
        marker: item.cacheControl
      });
    });
  }), r;
}
function X(e, n) {
  return [["model", e.model, n.model], ["attribution_header", N(e), N(n)], ["deferred_tools", K(e), K(n)], ...I.map(item => [item, e.envelope[item], n.envelope[item]])].filter(([, s, d]) => !w(s, d)).map(([id_4, prev_4, next_4]) => ({
    part: "envelope",
    id: id_4,
    kind: "changed",
    prev: prev_4,
    next: next_4
  }));
}
function J(e) {
  return e && [...e].sort();
}
function Z(e) {
  if (!it(e) || !Array.isArray(e.edits)) return e;
  return {
    ...e,
    edits: e.edits.map(item => {
      if (!it(item) || !it(item.trigger) || !it(item.keep) || item.trigger.type !== "tool_uses" || item.keep.type !== "tool_uses" || typeof item.trigger.value !== "number" || typeof item.keep.value !== "number") return item;
      let triggerLessKeep = item.trigger.value - item.keep.value,
        {
          trigger: trigger,
          keep: keep,
          ...o
        } = item;
      return {
        ...o,
        triggerLessKeep: triggerLessKeep
      };
    })
  };
}
function N(e) {
  for (let n of e.system) {
    let r = QE(n.body, "text");
    if (typeof r === "string" && r.startsWith(Dpt)) return r;
  }
  return "";
}
function K(e) {
  return e.tools.filter(item => item.deferred).map(item => item.key).sort().join(",");
}
function ee(e) {
  return !e.deferred || e.bound;
}
function s0n(e) {
  return QE(e, "defer_loading") === !0;
}
function ne(e) {
  let n = new Set();
  for (let r of e) {
    if (typeof r.content === "string") continue;
    if (r.role === "system") {
      for (let d of r.content) {
        let o = QE(d, "tool"),
          c = QE(d, "type") === "tool_addition" && typeof o === "object" && o !== null ? QE(o, "name") : void 0;
        if (typeof c === "string") n.add(Xl(c));
      }
      continue;
    }
    if (r.role !== "user") continue;
    for (let d of r.content) {
      if (!lLe(d)) continue;
      for (let o of d.content) if (Qze(o)) n.add(Xl(o.tool_name));
    }
  }
  return n;
}
function P(e) {
  return "cache_control" in e ? e.cache_control : void 0;
}
function M(e) {
  if (!("cache_control" in e)) return e;
  let {
    cache_control: cache_control,
    ...r
  } = e;
  return r;
}
function te(e) {
  if (!("safeguards" in e)) return e;
  let {
    safeguards: safeguards,
    ...r
  } = e;
  return r;
}
function QE(e, n) {
  if (e === void 0) return;
  let r = Object(e),
    s;
  for (let d of Object.keys(e)) {
    let o = r[d];
    if (d === n) s = o;
  }
  return s;
}
function C(e) {
  let tool = QE(e, "type") === "tool_addition" ? QE(e, "tool") : void 0;
  if (typeof tool !== "object" || tool === null) return;
  let definition = QE(tool, "definition");
  return typeof definition === "object" && definition !== null ? {
    tool: tool,
    definition: definition
  } : void 0;
}
var server_url = "https://address-not-recorded.invalid";
function i0n(e) {
  return typeof e === "object" && e !== null && typeof QE(e, "server_url") === "string" ? {
    ...e,
    server_url: server_url
  } : e;
}
function QFi(e) {
  let n = C(e)?.definition,
    r = QE(n, "name");
  return typeof r === "string" && QE(n, "input_schema") !== void 0 ? r : void 0;
}
function Ays(e) {
  return C(e) !== void 0;
}
function Dwr(e) {
  return QE(C(e)?.definition, "ownership_metadata");
}
function lfo(e, ownership_metadata_3) {
  let r = C(e);
  if (r === void 0 || ownership_metadata_3 === Dwr(e)) return e;
  let {
      ownership_metadata: ownership_metadata_2,
      ...d
    } = {
      ownership_metadata: void 0,
      ...r.definition
    },
    definition_2 = ownership_metadata_3 === void 0 ? d : {
      ...r.definition,
      ownership_metadata: ownership_metadata_3
    };
  return {
    ...e,
    tool: {
      ...r.tool,
      definition: definition_2
    }
  };
}
function L(e, n) {
  let r = QE(e, "name");
  if (typeof r === "string") return r;
  let s = QE(e, "type");
  return typeof s === "string" ? s : `tools[${n}]`;
}
function a0n(e) {
  let n = QE(e, "type");
  return typeof QE(e, "name") === "string" && QE(e, "defer_loading") === !0 && (n === void 0 || n === "custom") && F(QE(e, "input_schema")) && !("cache_control" in e);
}
function ZFi(e) {
  let n = QE(e, "type"),
    r = QE(e, "description");
  return typeof QE(e, "name") === "string" && (r === void 0 || typeof r === "string") && QE(e, "defer_loading") !== !0 && (n === void 0 || n === "custom") && F(QE(e, "input_schema")) && !("cache_control" in e);
}
var dfo = ["strict", "eager_input_streaming", "citations"];
function cfo(e) {
  return e.some(item => QE(item, "eager_input_streaming") === !0);
}
function Lwr(e, {
  strict: strict,
  eager: eager,
  citations: citations
}) {
  let d = {
    ...e
  };
  if (!strict && "strict" in d) {
    let {
      strict: strict_2,
      ...c
    } = d;
    d = c;
  }
  if (!eager && "eager_input_streaming" in d) {
    let {
      eager_input_streaming: eager_input_streaming,
      ...c
    } = d;
    d = c;
  }
  if (!citations && "citations" in d) {
    let {
      citations: citations_2,
      ...c
    } = d;
    d = c;
  }
  return d;
}
function F(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && QE(e, "type") === "object";
}
function eHi(e) {
  return nt(_(lN(e))).slice(0, 16);
}
function re(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(item => typeof item === "object" && item !== null && typeof item.name === "string" && typeof item.listing === "string" && (typeof item.definition === "object" && item.definition !== null || typeof item.sameAs === "string"));
}
function jze(e, n = new Set()) {
  let r = new Map();
  for (let s of e) {
    if (s.type !== "attachment" || s.attachment?.type !== "deferred_tools_delta" || typeof s.uuid !== "string" || n.has(s.uuid)) continue;
    let d = new Map();
    for (let o of re(s.attachment.surfacedDefinitions)) {
      if ("definition" in o) {
        d.set(o.name, {
          definition: o.definition,
          listing: o.listing,
          definedIn: s.uuid
        });
        continue;
      }
      let c = r.get(o.sameAs)?.get(o.name);
      if (c !== void 0) d.set(o.name, c);
    }
    if (d.size > 0) r.set(s.uuid, d);
  }
  return r;
}
function tHi(e, n = new Set()) {
  let r = new Set();
  for (let s of jze(e, n).values()) for (let d of s.keys()) r.add(d);
  return r;
}
function ufo(e, n) {
  let r = jze(e, n),
    definedByValue = new Map(),
    withdrawn = new Set();
  for (let o of e) {
    if (o.type !== "attachment" || o.attachment?.type !== "deferred_tools_delta" || typeof o.uuid === "string" && n.has(o.uuid)) continue;
    for (let c of js(o.attachment.removedByBlock)) if (definedByValue.has(c)) withdrawn.add(c);
    if (typeof o.uuid !== "string") continue;
    for (let [c, f] of r.get(o.uuid) ?? []) definedByValue.set(c, f), withdrawn.delete(c);
  }
  return {
    definedByValue: definedByValue,
    withdrawn: withdrawn
  };
}
function b0t(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0;
}
function nHi(e, n = new Set()) {
  return new Set(jze(e, n).keys());
}
import { isDeepStrictEqual as V } from "util";
function E(e, n) {
  return Ka(e) && n(e) ? e : Xl(e);
}
function z() {
  if (!su()) return !1;
  return !(i.CLAUDE_CODE_SIMPLE || i.CLAUDE_CODE_DISABLE_ATTACHMENTS);
}
function q0e() {
  let e = kr();
  return e.keptDeferredToolsEnabled ??= z(), e.keptDeferredToolsEnabled;
}
function l0n() {
  return kr().keptDeferredToolsEnabled ?? z();
}
var oe = "tengu_rippling_stream";
function Nwr() {
  return su() && kRe(oe);
}
var ie = 5000;
function R(e) {
  return xkr(e.toolUseId, e.toolName);
}
class W {
  #e = new Map();
  #n = new Set();
  #t = new Map();
  #r = new Map();
  #o = !1;
  #i = 0;
  get(e) {
    return this.#e.get(R(e));
  }
  set(e, n) {
    let r = R(e);
    if (!this.#e.delete(r) && this.#e.size >= ie) {
      let s = this.#e.keys().next().value;
      if (s !== void 0) this.#e.delete(s);
    }
    this.#e.set(r, n), this.#n.add(e.toolName);
  }
  hasTool(e) {
    return this.#n.has(e);
  }
  get size() {
    return this.#e.size;
  }
  noteSpliced(e, n) {
    this.#r.set(e, n);
  }
  splicedInputSchema(e) {
    return this.#r.get(e);
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#t.get(e)) return !1;
    return this.#t.set(e, n), !0;
  }
  get generation() {
    return this.#i;
  }
  noteRetractionFailure() {
    let e = !this.#o;
    return this.#o = !0, e;
  }
  clear() {
    this.#e.clear(), this.#n.clear(), this.#t.clear(), this.#r.clear(), this.#i++;
  }
}
var d0n = new Je(() => new W());
function K$() {
  return d0n.of(H());
}
function Q(e, n, r, s = !0, d) {
  let o = new Set(r.map(item => item.name)),
    kept = new Map();
  for (let h of n) {
    let x = e.get(h),
      u = x?.kind === "sent" && "name" in x.entry.schema ? x.entry.schema.name : void 0,
      p = E(h.toolName, y => o.has(y) || y === u);
    if (kept.has(p)) continue;
    if (x?.kind === "sent" && (s || !x.entry.isMcp)) kept.set(p, x.entry);
  }
  let strippedReferenceKeys = new Set(),
    resolvedAgainstKept = [],
    unrecordedDepartures = [];
  for (let reference of n) {
    let x = e.get(reference);
    if (x?.kind === "stripped") {
      strippedReferenceKeys.add(R(reference));
      continue;
    }
    if (x?.kind === "sent") continue;
    let u = E(reference.toolName, y => o.has(y) || kept.has(y)),
      entry = kept.get(u);
    if (entry) resolvedAgainstKept.push({
      reference: reference,
      entry: entry
    });else if (!o.has(u) && !d?.keeps(u)) unrecordedDepartures.push(reference);
  }
  return {
    kept: kept,
    strippedReferenceKeys: strippedReferenceKeys,
    resolvedAgainstKept: resolvedAgainstKept,
    unrecordedDepartures: unrecordedDepartures
  };
}
function xys(e, n, querySource, {
  keepMcp = !0,
  surfacedOnWire: surfacedOnWire,
  declaredInline: declaredInline
} = {}) {
  try {
    if (!q0e()) return;
    let references = sCe(e, {
      surfacedOnWire: surfacedOnWire
    });
    if (references.length === 0) return;
    let f = K$(),
      generation = f.generation,
      category = ls(querySource),
      writes = A(category, querySource),
      {
        kept: kept_2,
        strippedReferenceKeys: strippedReferenceKeys_2,
        resolvedAgainstKept: resolvedAgainstKept_2,
        unrecordedDepartures: unrecordedDepartures_2
      } = Q(f, references, n, keepMcp, declaredInline);
    if (writes) {
      for (let {
        reference: reference_2,
        entry: entry_2
      } of resolvedAgainstKept_2) f.set(reference_2, {
        kind: "sent",
        entry: entry_2
      });
      for (let b of unrecordedDepartures_2) f.set(b, {
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
    a(error), m("mcp_kept_deferred_tools", "plan_failed");
    return;
  }
}
function rHi(e, n, {
  keepMcp: keepMcp_2 = !0,
  surfacedOnWire: surfacedOnWire_2
} = {}) {
  try {
    let d = K$();
    if (!q0e()) return;
    let {
        kept: kept_3
      } = Q(d, sCe(e, {
        surfacedOnWire: surfacedOnWire_2
      }), n, keepMcp_2),
      c = new Set(n.map(item => item.name));
    return [...kept_3.keys()].filter(item => !c.has(item));
  } catch (error) {
    u0n(error);
    return;
  }
}
function c0n(e) {
  let n = K$(),
    r = e.findLastIndex(s => s.type === "system" && s.subtype === "compact_boundary");
  return new Set(sCe(e.slice(r + 1)).filter(item => n.get(item)?.kind !== "stripped").map(item => item.toolName));
}
function oHi(e) {
  let n = K$(),
    r = new Set();
  for (let s of e?.references ?? []) if (n.get(s)?.kind === "stripped") r.add(R(s));
  return r;
}
function u0n(e) {
  if (a(e), K$().noteRetractionFailure()) m("mcp_kept_deferred_tools", "retraction_failed");
}
function sHi(e, n, r, {
  requestCarriesStructuredOutputs: s,
  requestDeclaresSearchCitations: d
}) {
  try {
    let o = Math.max(n.length - 1, 0),
      c = K$(),
      f = c.generation !== e.generation,
      k = {
        strict: s,
        eager: cfo(n),
        citations: d
      },
      l = [],
      h = [];
    for (let [p, y] of e.kept) {
      let b = n.findIndex(item => "name" in item && ht(item, p)),
        S = n[b];
      if (S !== void 0) {
        if ("defer_loading" in S && S.defer_loading && !f) n[b] = Lwr(y.schema, k);
        continue;
      }
      h.push([p, y]), l.push(Lwr(y.schema, k));
    }
    if (n.splice(o, 0, ...l), !f) {
      for (let [p, {
        schema: schema,
        isMcp: isMcp
      }] of h) if (!isMcp && "input_schema" in schema) c.noteSpliced(p, schema.input_schema);
    }
    if (!e.writes || f) return;
    let x = e.querySource ?? "";
    if (h.length === 0 && e.strippedReferenceKeys.size === 0) c.telemetrySignatureChanged(x, "");else {
      t(`Dynamic tool loading: keeping ${h.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
      let p = `${h.map(([y]) => y).sort().join(",")}|${e.strippedReferenceKeys.size}`;
      if (c.telemetrySignatureChanged(x, p)) {
        let query_source_category = de(e.category);
        g("mcp_kept_deferred_tools", {
          kept_count: h.length,
          kept_mcp_count: U(h, ([, b]) => b.isMcp),
          stripped_reference_count: e.strippedReferenceKeys.size,
          ...(query_source_category !== void 0 && {
            query_source_category: query_source_category
          })
        });
      }
    }
    let u = new Map();
    for (let p of e.references) {
      if (e.strippedReferenceKeys.has(R(p))) continue;
      let y = E(p.toolName, T => r.has(T) || e.kept.has(T)),
        b = r.get(y);
      if (e.kept.has(y) || !b || !("defer_loading" in b.schema) || b.schema.defer_loading !== !0) continue;
      let entry_3 = u.get(y);
      if (entry_3 === void 0) entry_3 = {
        schema: b.schema,
        isMcp: b.isMcp
      }, u.set(y, entry_3);
      c.set(p, {
        kind: "sent",
        entry: entry_3
      });
    }
  } catch (error) {
    a(error), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function Fwr(e, n, r) {
  try {
    let s = r?.strippedReferences ?? new Set();
    if (n.length === 0 && s.size === 0 || !l0n()) return 0;
    let d = K$(),
      o = new Map();
    for (let schema_2 of n) if (a0n(schema_2) && !o.has(schema_2.name)) o.set(schema_2.name, {
      schema: schema_2,
      isMcp: schema_2.name.startsWith("mcp__")
    });
    let surfacedOnWire_3;
    if (r?.surfacedCarrier !== void 0) {
      surfacedOnWire_3 = new Set();
      for (let l of e) {
        if (l.type !== "attachment" || l.attachment.type !== "deferred_tools_delta" || r.surfacedCarrier.nameOnlyAnnouncements.has(l.uuid)) continue;
        let surfacedNames = l.attachment.surfacedNames;
        for (let x of Array.isArray(surfacedNames) ? surfacedNames : []) if (typeof x === "string" && o.has(x)) surfacedOnWire_3.add(x);
      }
      for (let l of surfacedOnWire_3) r.surfacedCarrier.surfacedOnWire.add(l);
    }
    let f = 0,
      k = new Set();
    for (let l of sCe(e, {
      surfacedOnWire: surfacedOnWire_3
    })) {
      let h = d.get(l);
      if (s.has(R(l))) {
        if (h?.kind !== "stripped") d.set(l, {
          kind: "stripped"
        }), f++;
        continue;
      }
      if (h !== void 0) continue;
      let x = E(l.toolName, p => o.has(p)),
        entry_4 = o.get(x);
      if (entry_4 === void 0) continue;
      d.set(l, {
        kind: "sent",
        entry: entry_4
      }), k.add(x), f++;
    }
    if (f > 0) t(`Dynamic tool loading: seeded ${f} tool reference(s) to ${k.size} deferred tool(s) the previous process sent`);
    return f;
  } catch (error) {
    return a(error), m("mcp_kept_deferred_tools", "seed_failed"), 0;
  }
}
function se(e, n) {
  if (V(e, n)) return !0;
  let r = {
    ...e
  };
  for (let s of dfo) if (!(s in n)) delete r[s];
  return V(r, n);
}
function iHi(e, surfacedOnWire_4, r, s, d, o) {
  try {
    if (surfacedOnWire_4.size === 0 || !q0e()) return;
    let c = K$();
    if (c.generation !== o) return;
    if (!A(ls(d), d)) return;
    let f = new Map();
    for (let k of sCe(e, {
      surfacedOnWire: surfacedOnWire_4
    })) {
      if (c.get(k) !== void 0) continue;
      let l = E(k.toolName, u => s?.kept.has(u) === !0 || r.has(u)),
        h = s?.kept.get(l) ?? r.get(l);
      if (!h || !("defer_loading" in h.schema) || h.schema.defer_loading !== !0) continue;
      let entry_5 = f.get(l);
      if (entry_5 === void 0) entry_5 = {
        schema: h.schema,
        isMcp: h.isMcp
      }, f.set(l, entry_5);
      c.set(k, {
        kind: "sent",
        entry: entry_5
      });
    }
  } catch (error) {
    a(error), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function aHi(e, n) {
  try {
    let r = q(n);
    for (let s = 0; s < e.length; s++) {
      let d = r.get(e[s].name);
      if (d !== void 0 && a0n(d)) e[s] = d;
    }
  } catch (error) {
    a(error);
  }
}
function lHi(e, n) {
  try {
    let r = K$();
    if (!e.writes || r.generation !== e.generation) return;
    let s = q(n),
      d = new Map();
    for (let o of e.references) {
      if (e.strippedReferenceKeys.has(R(o))) continue;
      let c = E(o.toolName, h => s.has(h)),
        schema_3 = s.get(c),
        k = r.get(o);
      if (schema_3 === void 0 || k?.kind !== "sent" || se(k.entry.schema, schema_3)) continue;
      let entry_6 = d.get(c);
      if (entry_6 === void 0) entry_6 = {
        schema: schema_3,
        isMcp: k.entry.isMcp
      }, d.set(c, entry_6);
      r.set(o, {
        kind: "sent",
        entry: entry_6
      });
    }
  } catch (error) {
    a(error), m("mcp_kept_deferred_tools", "record_failed");
  }
}
function A(e, n) {
  return e === "main" || e === "subagent" && n !== uVi;
}
function ffo(e) {
  return A(ls(e), e);
}
function q(e) {
  let n = new Map();
  for (let r of e) if ("defer_loading" in r && r.defer_loading === !0 && "name" in r && typeof r.name === "string") if ("cache_control" in r) {
    let {
      cache_control: cache_control_2,
      ...d
    } = r;
    n.set(r.name, d);
  } else n.set(r.name, r);
  return n;
}
export { XFi, Tys, o0n, JFi, Cys, s0n, QE, server_url as Rys, i0n, QFi, Ays, Dwr, lfo, a0n, ZFi, dfo, cfo, Lwr, eHi, jze, tHi, ufo, b0t, nHi, q0e, l0n, Nwr, d0n, K$, xys, rHi, c0n, oHi, u0n, sHi, Fwr, iHi, aHi, lHi, ffo };