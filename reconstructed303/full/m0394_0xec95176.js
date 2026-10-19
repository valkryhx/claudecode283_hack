// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  pe
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  H
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  gd,
  Dze,
  P9n
} from "B:/~BUN/root/chunk-a0k8qg0d.js";
import {
  sSt,
  czo,
  ogn,
  hF,
  gk,
  kg,
  pm,
  F,
  at,
  j,
  c2o,
  XVo,
  JVo,
  ZJn,
  Bjr,
  kSt,
  iqo,
  js
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  Ni
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  Ma
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  tp,
  GHt,
  eYn,
  Jo,
  qe,
  dEe,
  On,
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Dx,
  Qb,
  _b,
  bB,
  We,
  xt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Ss,
  bQe,
  B2s
} from "B:/~BUN/root/chunk-ejm0pmyj.js";
import {
  ZO,
  cpn,
  A8n,
  aTe,
  upn
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  ea
} from "B:/~BUN/root/chunk-53tmhe2j.js";
import {
  Ao
} from "B:/~BUN/root/chunk-s6czymtt.js";
import {
  gHs
} from "B:/~BUN/root/chunk-2fccb5hn.js";
import {
  vt,
  yme,
  CK,
  Pn
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  W9e,
  Uj
} from "B:/~BUN/root/chunk-z8fd2x5s.js";
import {
  Ka,
  IMt,
  MMt,
  px
} from "B:/~BUN/root/chunk-00v9f07q.js";
import {
  qwe,
  _ie
} from "B:/~BUN/root/chunk-r81hcemr.js";
import {
  u3,
  dc,
  Ho,
  zCo,
  GCo,
  ime,
  _9e
} from "B:/~BUN/root/chunk-ses0c36n.js";
import {
  Wa,
  ch,
  dD
} from "B:/~BUN/root/chunk-vd11ggb1.js";
import {
  Yzn,
  Vpt,
  N8e,
  qfe
} from "B:/~BUN/root/chunk-6m0qcv81.js";
import {
  DG
} from "B:/~BUN/root/chunk-y59h61rh.js";
import {
  Si
} from "B:/~BUN/root/chunk-bk5b2aym.js";
import {
  pr
} from "B:/~BUN/root/chunk-j1zjtkgf.js";
import {
  b5n
} from "B:/~BUN/root/chunk-m0xdacj9.js";
import {
  co,
  uo,
  si
} from "B:/~BUN/root/chunk-b0487zs4.js";
import {
  Tn
} from "B:/~BUN/root/chunk-f43s8pq0.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  isDeepStrictEqual as w
} from "util";
var Z = ["betas", "tool_choice", "thinking", "context_management", "output_config", "speed", "temperature", "max_tokens"];

function QEs(e) {
  return {
    model: e.model,
    tools: e.tools.map((n, o) => ({
      key: ee(n, o),
      deferred: aen(n),
      bound: aen(n),
      cacheControl: void 0,
      body: n
    })),
    system: e.system.map((n) => ({
      preamble: !1,
      cacheControl: void 0,
      body: n
    })),
    messages: [],
    envelope: {},
    seeded: !0
  }
}

function jyo(e, n = {}) {
  let o = n.boundDeferredToolNames ?? (n.bindReferencedDeferredTools === !0 ? Te(e.messages) : void 0),
    r = typeof e.system === "string" ? [{
      type: "text",
      text: e.system
    }] : e.system ?? [],
    d = {};
  for (let s of Z) {
    let c = s === "betas" ? ge(e.betas) : e[s];
    if (c !== void 0) d[s] = c
  }
  return {
    model: e.model,
    envelope: d,
    tools: (e.tools ?? []).map((s, c) => ({
      key: ee(s, c),
      deferred: s.defer_loading === !0,
      bound: s.defer_loading === !0 && typeof s.name === "string" && o?.has(s.name) === !0,
      cacheControl: U(s),
      body: W(s)
    })),
    system: r.map((s) => ({
      preamble: Uj(s),
      cacheControl: U(s),
      body: W(s)
    })),
    messages: e.messages.map((s, c, u) => ({
      role: s.role,
      turnScopedSystem: s.role === "system" && c === u.length - 1,
      blocks: typeof s.content === "string" ? [{
        thinking: !1,
        cacheControl: void 0,
        body: {
          type: "text",
          text: s.content
        }
      }] : s.content.map((T) => ({
        thinking: T.type === "thinking" || T.type === "redacted_thinking",
        cacheControl: U(T),
        body: _e(W(T))
      }))
    }))
  }
}

function ien(e) {
  return {
    model: e.model,
    tools: e.tools.filter(he).map((n) => n.body),
    system: e.system.filter((n) => !n.preamble).map((n) => n.body),
    messages: e.messages.filter((n) => !n.turnScopedSystem).map((n) => ({
      role: n.role,
      content: n.blocks.filter((o) => !o.thinking).map((o) => o.body)
    }))
  }
}

function ZEs(e) {
  return e.part === "tool" || e.part === "system" || e.part === "message"
}
var N = 16;

function Wyo(e, n) {
  return e.seeded ? q(e, n) : [...q(e, n), ...ue(e, n), ...me(e, n), ...ye(e, n)]
}

function q(e, n) {
  let o = ien(e),
    r = ien(n),
    d = [],
    s = (h) => (d.push(h), d.length < N),
    c = (h) => new Map([...h.filter((R) => !R.deferred), ...h.filter((R) => R.bound)].map((R) => [R.key, R])),
    u = c(e.tools),
    T = c(n.tools),
    y = [],
    f = !1;
  for (let [h, R] of u) {
    let k = R.body,
      x = T.get(h);
    if (x === void 0) {
      if (R.deferred) {
        if (!e.seeded) y.push({
          part: "tool",
          id: h,
          kind: "removed",
          prev: k
        });
        continue
      }
      if (f = !0, !s({
          part: "tool",
          id: h,
          kind: "removed",
          prev: k
        })) return d
    } else if (R.deferred !== x.deferred) {
      f = !0;
      let S = R.deferred ? {
        part: "tool",
        id: h,
        kind: "added",
        next: x.body
      } : {
        part: "tool",
        id: h,
        kind: "removed",
        prev: k
      };
      if (!s(S)) return d
    } else if (!w(k, x.body)) {
      f ||= !R.deferred;
      let S = x.body,
        O = [...Object.keys(k), ...Object.keys(S)].find((C) => !w(ux(k, C), ux(S, C))) ?? "?";
      if (!s({
          part: "tool",
          id: h,
          kind: "changed",
          field: O,
          prev: k,
          next: S
        })) return d
    }
  }
  for (let [h, R] of T)
    if (!u.has(h) && !R.deferred) {
      if (f = !0, !s({
          part: "tool",
          id: h,
          kind: "added",
          next: R.body
        })) return d
    } if (!f) {
    let h = (S) => [...S.values()].flatMap((O) => O.deferred ? [] : [O.key]),
      R = h(u),
      x = h(T).filter((S) => u.has(S)).find((S, O) => R[O] !== S);
    if (x !== void 0) s({
      part: "tool",
      id: x,
      kind: "reordered"
    })
  }
  let b = Math.max(o.system.length, r.system.length);
  for (let h = 0; h < b; h++) {
    let R = o.system[h],
      k = r.system[h],
      x = R === void 0 ? "added" : k === void 0 ? "removed" : "changed";
    if (x !== "changed" || !w(R, k)) {
      if (!s({
          part: "system",
          index: h,
          kind: x,
          prev: R,
          next: k
        })) return d
    }
  }
  for (let h = 0; h < o.messages.length; h++) {
    let R = o.messages[h],
      k = r.messages[h];
    if (k !== void 0 && w(R, k)) continue;
    let x = {
      part: "message",
      index: h,
      role: R.role,
      kind: k === void 0 ? "removed" : "changed",
      prev: R,
      next: k
    };
    if (!s(x)) return d
  }
  for (let h of y)
    if (!s(h)) break;
  return d
}

function ue(e, n) {
  let o = [],
    r = Math.min(e.messages.length, n.messages.length);
  for (let d = 0; d < r && o.length < N; d++) {
    let s = G(e.messages[d]),
      c = G(n.messages[d]);
    if (s.length === 0 && c.length === 0) continue;
    if (s.length === c.length && s.every((T, y) => T === c[y])) continue;
    let u = s.slice(0, c.length).every((T, y) => T === c[y]) || c.slice(0, s.length).every((T, y) => T === s[y]);
    o.push({
      part: "thinking",
      index: d,
      kind: !u ? "changed" : c.length < s.length ? "dropped" : "added",
      prevCount: s.length,
      nextCount: c.length
    })
  }
  return o
}

function G(e) {
  return e.blocks.flatMap((n) => {
    if (!n.thinking) return [];
    let o = ux(n.body, "signature"),
      r = ux(n.body, "data");
    return [typeof o === "string" ? o : typeof r === "string" ? r : "?"]
  })
}

function me(e, n) {
  let o = Q(e, e.messages.length),
    r = Q(n, e.messages.length),
    d = [];
  for (let [s, {
      at: c,
      marker: u
    }] of o) {
    if (d.length >= N) return d;
    let T = r.get(s);
    if (T === void 0) d.push({
      part: "cache",
      at: c,
      kind: "dropped",
      prev: u,
      next: void 0
    });
    else if (!w(u, T.marker)) d.push({
      part: "cache",
      at: c,
      kind: "changed",
      prev: u,
      next: T.marker
    })
  }
  for (let [s, {
      at: c,
      marker: u
    }] of r) {
    if (d.length >= N) return d;
    if (!o.has(s)) d.push({
      part: "cache",
      at: c,
      kind: "added",
      prev: void 0,
      next: u
    })
  }
  return d
}

function Q(e, n) {
  let o = new Map;
  for (let r of e.tools)
    if (r.cacheControl !== void 0) o.set(`tools:${r.key}`, {
      at: {
        segment: "tools",
        key: r.key
      },
      marker: r.cacheControl
    });
  return e.system.forEach((r, d) => {
    if (r.cacheControl !== void 0) o.set(`system:${d}`, {
      at: {
        segment: "system",
        index: d
      },
      marker: r.cacheControl
    })
  }), e.messages.slice(0, n).forEach((r, d) => {
    r.blocks.forEach((s, c) => {
      if (s.cacheControl !== void 0) o.set(`messages:${d}.${c}`, {
        at: {
          segment: "messages",
          index: d,
          block: c
        },
        marker: s.cacheControl
      })
    })
  }), o
}

function ye(e, n) {
  return [
    ["model", e.model, n.model],
    ["attribution_header", X(e), X(n)],
    ["deferred_tools", J(e), J(n)], ...Z.map((r) => [r, e.envelope[r], n.envelope[r]])
  ].filter(([, r, d]) => !w(r, d)).map(([r, d, s]) => ({
    part: "envelope",
    id: r,
    kind: "changed",
    prev: d,
    next: s
  }))
}

function ge(e) {
  return e && [...e].sort()
}

function X(e) {
  for (let n of e.system) {
    let o = ux(n.body, "text");
    if (typeof o === "string" && o.startsWith(W9e)) return o
  }
  return ""
}

function J(e) {
  return e.tools.filter((n) => n.deferred).map((n) => n.key).sort().join(",")
}

function he(e) {
  return !e.deferred || e.bound
}

function aen(e) {
  return ux(e, "defer_loading") === !0
}

function Te(e) {
  let n = new Set;
  for (let o of e) {
    if (typeof o.content === "string") continue;
    if (o.role === "system") {
      for (let d of o.content) {
        let s = ux(d, "tool"),
          c = ux(d, "type") === "tool_addition" && typeof s === "object" && s !== null ? ux(s, "name") : void 0;
        if (typeof c === "string") n.add(gd(c))
      }
      continue
    }
    if (o.role !== "user") continue;
    for (let d of o.content) {
      if (!N8e(d)) continue;
      for (let s of d.content)
        if (Vpt(s)) n.add(gd(s.tool_name))
    }
  }
  return n
}

function U(e) {
  return "cache_control" in e ? e.cache_control : void 0
}

function W(e) {
  if (!("cache_control" in e)) return e;
  let {
    cache_control: n,
    ...o
  } = e;
  return o
}

function _e(e) {
  if (!("safeguards" in e)) return e;
  let {
    safeguards: n,
    ...o
  } = e;
  return o
}

function ux(e, n) {
  if (e === void 0) return;
  return Object.entries(e).find(([o]) => o === n)?.[1]
}

function ee(e, n) {
  let o = ux(e, "name");
  if (typeof o === "string") return o;
  let r = ux(e, "type");
  return typeof r === "string" ? r : `tools[${n}]`
}

function eEr() {
  return a.CLAUDE_CODE_WEBSEARCH_CITATIONS && Ma() && !bB()
}

function len(e) {
  let n = ux(e, "type");
  return typeof ux(e, "name") === "string" && ux(e, "defer_loading") === !0 && (n === void 0 || n === "custom") && ne(ux(e, "input_schema")) && !("cache_control" in e)
}

function eTs(e) {
  let n = ux(e, "type"),
    o = ux(e, "description");
  return typeof ux(e, "name") === "string" && (o === void 0 || typeof o === "string") && ux(e, "defer_loading") !== !0 && (n === void 0 || n === "custom") && ne(ux(e, "input_schema")) && !("cache_control" in e)
}
var v = ["strict", "eager_input_streaming", "citations"];

function L(e) {
  return e.some((n) => ux(n, "eager_input_streaming") === !0)
}

function A(e, {
  strict: n,
  eager: o
}) {
  let r = {
    ...e
  };
  if (!n && "strict" in r) {
    let {
      strict: d,
      ...s
    } = r;
    r = s
  }
  if (!o && "eager_input_streaming" in r) {
    let {
      eager_input_streaming: d,
      ...s
    } = r;
    r = s
  }
  if (!eEr() && "citations" in r) {
    let {
      citations: d,
      ...s
    } = r;
    r = s
  }
  return r
}

function ne(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e) && ux(e, "type") === "object"
}

function tTs(e) {
  return st(_(ZO(e))).slice(0, 16)
}

function Re(e) {
  if (!Array.isArray(e)) return [];
  return e.filter((n) => typeof n === "object" && n !== null && typeof n.name === "string" && typeof n.listing === "string" && (typeof n.definition === "object" && n.definition !== null || typeof n.sameAs === "string"))
}

function Z3e(e, n = new Set) {
  let o = new Map;
  for (let r of e) {
    if (r.type !== "attachment" || r.attachment?.type !== "deferred_tools_delta" || typeof r.uuid !== "string" || n.has(r.uuid)) continue;
    let d = new Map;
    for (let s of Re(r.attachment.surfacedDefinitions)) {
      if ("definition" in s) {
        d.set(s.name, {
          definition: s.definition,
          listing: s.listing,
          definedIn: r.uuid
        });
        continue
      }
      let c = o.get(s.sameAs)?.get(s.name);
      if (c !== void 0) d.set(s.name, c)
    }
    if (d.size > 0) o.set(r.uuid, d)
  }
  return o
}

function nTs(e, n = new Set) {
  let o = new Set;
  for (let r of Z3e(e, n).values())
    for (let d of r.keys()) o.add(d);
  return o
}

function AMt(e, n) {
  return e !== void 0 && Object.hasOwn(e, n) ? e[n] : void 0
}

function rTs(e, n = new Set) {
  return new Set(Z3e(e, n).keys())
}

function $y(e) {
  if (e.name.startsWith(DG)) return "skill_tool";
  let n = String(On(e.name));
  if (n !== e.name) return n;
  if (e.mcpInfo !== void 0) return "mcp_tool";
  if (e.name.startsWith("eval_registered__")) return "eval_registered";
  if (e.uiTableKey !== void 0 || e.name.includes("__")) return "dynamic_tool";
  return e.name
}
var oe = Symbol.for("claude-code.hostOnlyNativeTool");

function oTs(e) {
  return Object.defineProperty(e, oe, {
    value: !0,
    enumerable: !0
  }), e
}

function Wq(e) {
  return oe in e
}
import {
  isDeepStrictEqual as re
} from "util";

function te() {
  if (!tp()) return !1;
  return !(a.CLAUDE_CODE_SIMPLE || a.CLAUDE_CODE_DISABLE_ATTACHMENTS)
}

function TPe() {
  let e = Ao();
  return e.keptDeferredToolsEnabled ??= te(), e.keptDeferredToolsEnabled
}

function zyo() {
  return Ao().keptDeferredToolsEnabled ?? te()
}
var be = 5000;

function P(e) {
  return Yzn(e.toolUseId, e.toolName)
}
class ie {
  #e = new Map;
  #n = new Set;
  #o = new Map;
  #r = !1;
  #t = 0;
  get(e) {
    return this.#e.get(P(e))
  }
  set(e, n) {
    let o = P(e);
    if (!this.#e.delete(o) && this.#e.size >= be) {
      let r = this.#e.keys().next().value;
      if (r !== void 0) this.#e.delete(r)
    }
    this.#e.set(o, n), this.#n.add(e.toolName)
  }
  hasTool(e) {
    return this.#n.has(e)
  }
  get size() {
    return this.#e.size
  }
  telemetrySignatureChanged(e, n) {
    if (n === this.#o.get(e)) return !1;
    return this.#o.set(e, n), !0
  }
  get generation() {
    return this.#t
  }
  noteRetractionFailure() {
    let e = !this.#r;
    return this.#r = !0, e
  }
  clear() {
    this.#e.clear(), this.#n.clear(), this.#o.clear(), this.#t++
  }
}
var uen = new at(() => new ie);

function dG() {
  return uen.of(j())
}

function se(e, n, o, r = !0, d) {
  let s = new Set(o.map((f) => f.name)),
    c = new Map;
  for (let f of n) {
    let b = gd(f.toolName);
    if (c.has(b)) continue;
    let h = e.get(f);
    if (h?.kind === "sent" && (r || !h.entry.isMcp)) c.set(b, h.entry)
  }
  let u = new Set,
    T = [],
    y = [];
  for (let f of n) {
    let b = e.get(f);
    if (b?.kind === "stripped") {
      u.add(P(f));
      continue
    }
    if (b?.kind === "sent") continue;
    let h = gd(f.toolName),
      R = c.get(h);
    if (R) T.push({
      reference: f,
      entry: R
    });
    else if (!s.has(h) && !d?.keeps(h)) y.push(f)
  }
  return {
    kept: c,
    strippedReferenceKeys: u,
    resolvedAgainstKept: T,
    unrecordedDepartures: y
  }
}

function Gyo(e, n, o, {
  keepMcp: r = !0,
  surfacedOnWire: d,
  declaredInline: s
} = {}) {
  try {
    if (!TPe()) return;
    let c = qfe(e, {
      surfacedOnWire: d
    });
    if (c.length === 0) return;
    let u = dG(),
      T = u.generation,
      y = Jo(o),
      f = K(y, o),
      {
        kept: b,
        strippedReferenceKeys: h,
        resolvedAgainstKept: R,
        unrecordedDepartures: k
      } = se(u, c, n, r, s);
    if (f) {
      for (let {
          reference: x,
          entry: S
        }
        of R) u.set(x, {
        kind: "sent",
        entry: S
      });
      for (let x of k) u.set(x, {
        kind: "stripped"
      })
    }
    return {
      references: c,
      kept: b,
      strippedReferenceKeys: h,
      writes: f,
      category: y,
      querySource: o,
      generation: T
    }
  } catch (c) {
    l(c), m("mcp_kept_deferred_tools", "plan_failed");
    return
  }
}

function sTs(e, n, {
  keepMcp: o = !0,
  surfacedOnWire: r
} = {}) {
  try {
    let d = dG();
    if (!TPe()) return;
    let {
      kept: s
    } = se(d, qfe(e, {
      surfacedOnWire: r
    }), n, o), c = new Set(n.map((u) => u.name));
    return [...s.keys()].filter((u) => !c.has(u))
  } catch (d) {
    pen(d);
    return
  }
}

function iTs(e) {
  let n = dG(),
    o = e.findLastIndex((r) => r.type === "system" && r.subtype === "compact_boundary");
  return new Set(qfe(e.slice(o + 1)).filter((r) => n.get(r)?.kind !== "stripped").map((r) => r.toolName))
}

function aTs(e) {
  let n = dG(),
    o = new Set;
  for (let r of e?.references ?? [])
    if (n.get(r)?.kind === "stripped") o.add(P(r));
  return o
}

function pen(e) {
  if (l(e), dG().noteRetractionFailure()) m("mcp_kept_deferred_tools", "retraction_failed")
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
      let k = n.findIndex((S) => ("name" in S) && vt(S, h)),
        x = n[k];
      if (x !== void 0) {
        if ("defer_loading" in x && x.defer_loading && !c) n[k] = A(R.schema, u);
        continue
      }
      y.push([h, R]), T.push(A(R.schema, u))
    }
    if (n.splice(d, 0, ...T), !e.writes || c) return;
    let f = e.querySource ?? "";
    if (y.length === 0 && e.strippedReferenceKeys.size === 0) s.telemetrySignatureChanged(f, "");
    else {
      t(`Dynamic tool loading: keeping ${y.length} departed deferred tool(s) declared; ${e.strippedReferenceKeys.size} reference(s) held stripped`);
      let h = `${y.map(([R])=>R).sort().join(",")}|${e.strippedReferenceKeys.size}`;
      if (s.telemetrySignatureChanged(f, h)) {
        let R = pe(e.category);
        g("mcp_kept_deferred_tools", {
          kept_count: y.length,
          kept_mcp_count: F(y, ([, k]) => k.isMcp),
          stripped_reference_count: e.strippedReferenceKeys.size,
          ...R !== void 0 && {
            query_source_category: R
          }
        })
      }
    }
    let b = new Map;
    for (let h of e.references) {
      if (e.strippedReferenceKeys.has(P(h))) continue;
      let R = gd(h.toolName),
        k = o.get(R);
      if (e.kept.has(R) || !k || !("defer_loading" in k.schema) || k.schema.defer_loading !== !0) continue;
      let x = b.get(R);
      if (x === void 0) x = {
        schema: k.schema,
        isMcp: k.isMcp
      }, b.set(R, x);
      s.set(h, {
        kind: "sent",
        entry: x
      })
    }
  } catch (d) {
    l(d), m("mcp_kept_deferred_tools", "record_failed")
  }
}

function ZUn(e, n, o) {
  try {
    let r = o?.strippedReferences ?? new Set;
    if (n.length === 0 && r.size === 0 || !zyo()) return 0;
    let d = dG(),
      s = new Map;
    for (let y of n)
      if (len(y) && !s.has(y.name)) s.set(y.name, {
        schema: y,
        isMcp: y.name.startsWith("mcp__")
      });
    let c;
    if (o?.surfacedCarrier !== void 0) {
      c = new Set;
      for (let y of e) {
        if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || o.surfacedCarrier.nameOnlyAnnouncements.has(y.uuid)) continue;
        let f = y.attachment.surfacedNames;
        for (let b of Array.isArray(f) ? f : [])
          if (typeof b === "string" && s.has(b)) c.add(b)
      }
      for (let y of c) o.surfacedCarrier.surfacedOnWire.add(y)
    }
    let u = 0,
      T = new Set;
    for (let y of qfe(e, {
        surfacedOnWire: c
      })) {
      let f = d.get(y);
      if (r.has(P(y))) {
        if (f?.kind !== "stripped") d.set(y, {
          kind: "stripped"
        }), u++;
        continue
      }
      if (f !== void 0) continue;
      let b = gd(y.toolName),
        h = s.get(b);
      if (h === void 0) continue;
      d.set(y, {
        kind: "sent",
        entry: h
      }), T.add(b), u++
    }
    if (u > 0) t(`Dynamic tool loading: seeded ${u} tool reference(s) to ${T.size} deferred tool(s) the previous process sent`);
    return u
  } catch (r) {
    return l(r), m("mcp_kept_deferred_tools", "seed_failed"), 0
  }
}

function Se(e, n) {
  if (re(e, n)) return !0;
  let o = {
    ...e
  };
  for (let r of v)
    if (!(r in n)) delete o[r];
  return re(o, n)
}

function dTs(e, n, o, r, d, s) {
  try {
    if (n.size === 0 || !TPe()) return;
    let c = dG();
    if (c.generation !== s) return;
    if (!K(Jo(d), d)) return;
    let u = new Map;
    for (let T of qfe(e, {
        surfacedOnWire: n
      })) {
      if (c.get(T) !== void 0) continue;
      let y = gd(T.toolName),
        f = r?.kept.get(y) ?? o.get(y);
      if (!f || !("defer_loading" in f.schema) || f.schema.defer_loading !== !0) continue;
      let b = u.get(y);
      if (b === void 0) b = {
        schema: f.schema,
        isMcp: f.isMcp
      }, u.set(y, b);
      c.set(T, {
        kind: "sent",
        entry: b
      })
    }
  } catch (c) {
    l(c), m("mcp_kept_deferred_tools", "record_failed")
  }
}

function cTs(e, n) {
  try {
    let o = ae(n);
    for (let r = 0; r < e.length; r++) {
      let d = o.get(e[r].name);
      if (d !== void 0 && len(d)) e[r] = d
    }
  } catch (o) {
    l(o)
  }
}

function uTs(e, n) {
  try {
    let o = dG();
    if (!e.writes || o.generation !== e.generation) return;
    let r = ae(n),
      d = new Map;
    for (let s of e.references) {
      if (e.strippedReferenceKeys.has(P(s))) continue;
      let c = gd(s.toolName),
        u = r.get(c),
        T = o.get(s);
      if (u === void 0 || T?.kind !== "sent" || Se(T.entry.schema, u)) continue;
      let y = d.get(c);
      if (y === void 0) y = {
        schema: u,
        isMcp: T.entry.isMcp
      }, d.set(c, y);
      o.set(s, {
        kind: "sent",
        entry: y
      })
    }
  } catch (o) {
    l(o), m("mcp_kept_deferred_tools", "record_failed")
  }
}

function K(e, n) {
  return e === "main" || e === "subagent" && n !== gHs
}

function Vyo(e) {
  return K(Jo(e), e)
}

function ae(e) {
  let n = new Map;
  for (let o of e)
    if ("defer_loading" in o && o.defer_loading === !0 && "name" in o && typeof o.name === "string")
      if ("cache_control" in o) {
        let {
          cache_control: r,
          ...d
        } = o;
        n.set(o.name, d)
      } else n.set(o.name, o);
  return n
}

function $b(e, n, o) {
  return Pn(e, n, o)
}
var den = "authenticate",
  cen = "complete_authentication";
var qyo = "bypassPermissions not supported in restricted mode";

function pTs(e) {
  return e.restricted && (e.permissionMode === "bypassPermissions" || e.allowDangerouslySkipPermissions) ? qyo : void 0
}

function fTs(e) {
  return e.some((n) => n.startsWith("preset:")) ? new Set : new Set(e)
}

function fen(e, n) {
  let o = [...e, pr].filter((s) => !n.has(s)),
    r = [...n.has(We) ? [] : [Dze], ...n.has(pr) ? [] : [P9n]],
    d = [...[...cpn].map((s) => si(s, b5n)), ...A8n.map((s) => si(Ss, `${s}${b5n}`)), si(aTe, `${upn}${b5n}`)];
  return [...o, ...r, bQe, B2s, ...d]
}
var ke = ["default"];

function tEr(e) {
  let n = e.toLowerCase();
  if (!ke.includes(n)) return null;
  return n
}

function eBn(e) {
  return new Set([...e.filter((n) => n.enablesCodeExecution).map((n) => n.name), xt])
}

function nEr(e) {
  return e.filter((n) => n.isEnabled()).map((n) => n.name)
}

function z9(e, n) {
  let o = [...dc(n), ...xe(e, n)],
    r = GCo(n, o);
  return e.filter((d) => {
    if (de(n, d, o, r) || d.mcpInfo?.effectiveMaxPermission === "blocked") return !1;
    if (!xMt(n, d)) return !0;
    if (ea().claim(`tool_outside_launch_list:${d.name}`)) t(`${$y(d)} is not on this session's --tools list and no deny rule names it; withheld. Name it in --tools to offer it`, {
      level: "warn"
    }), i("tengu_tool_withheld_outside_launch_list", {
      toolName: On($y(d))
    });
    return !1
  })
}

function xMt({
  toolsKeptByLaunchList: e
}, n) {
  return !(e === void 0 || ch(n) || n.mcpInfo !== void 0 || Wq(n) || u3(n) || e.includes(n.name) || n.familyParentToolName !== void 0 && e.includes(n.familyParentToolName))
}

function e5e(e, n, o = dc(e), r) {
  return de(e, n, o, r)
}

function de(e, n, o, r) {
  let d = (s) => r !== void 0 ? _9e(e, r, s) : Ho(e, s, o) !== null;
  if (d(n)) return !0;
  if (n.underlyingV1ToolName && d({
      name: n.underlyingV1ToolName
    })) return !0;
  if (n.mcpInfo === void 0) {
    let s = qwe(n.name);
    if (s !== void 0 && d(s) && s.isEnabled()) return !0
  }
  if (Wq(n) && Ee(e, o)) return !0;
  {
    let {
      APPIFACT_REPL_TOOL_NAME: s
    } = import.meta.require("B:/~BUN/root/chunk-h1h124j8.js");
    if (n.mcpInfo === void 0 && n.name === s && tBn(e, o.filter((c) => c.source !== "toolsNarrowing")) !== null) return !0
  }
  return !1
}

function PMt(e, n) {
  if (!c2o().has(n.name)) return !1;
  if (Ni("hipaa")) return !1;
  let o = dc(e).filter((r) => r.source !== "toolsNarrowing");
  return !e5e(e, n, o)
}

function Ee(e, n) {
  return n.some((o) => o.ruleValue.toolName === We)
}

function tBn(e, n) {
  let o = e.toolAliases?.[We],
    r = [We, ...o !== void 0 ? [o] : []];
  for (let d of r) {
    let s = Ho(e, {
      name: d
    }, n);
    if (s !== null) return s
  }
  return n.find((d) => r.includes(d.ruleValue.toolName) && d.ruleValue.ruleContent !== void 0 && zCo(d.ruleValue.ruleContent)) ?? null
}

function xe(e, {
  restricted: n,
  toolsKeptByLaunchList: o
}) {
  if (!(n === !0 && o === void 0)) return [];
  let r = new Set([...e.filter((d) => d.enablesCodeExecution).map((d) => d.name), xt]);
  return fen(r, new Set).map((d) => ({
    source: "toolsNarrowing",
    ruleBehavior: "deny",
    ruleValue: {
      toolName: d
    }
  }))
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
      return !1
  }
}

function zwe(e, n, o, r, d = ime(o)) {
  let s = r?.mcpInfo;
  if (s === void 0 && co(e) === null) {
    let f = {
      ...r,
      name: e,
      underlyingV1ToolName: _ie(e),
      familyParentToolName: r?.familyParentToolName
    };
    return e5e(o, f, d.rules, d.index) && !PMt(o, f) ? {
      kind: "denied",
      serverName: void 0
    } : {
      kind: "withdrawn"
    }
  }
  let c = s === void 0 ? _9e(o, d.index, {
      name: e
    }) : e5e(o, {
      name: e,
      mcpInfo: s
    }, d.rules, d.index),
    T = le(e, n, s).map(({
      row: f,
      upstream: b
    }) => Oe(f, b, c)),
    y = T.find(OMt) ?? T.find((f) => f.kind === "not_offered" || f.kind === "auth_completed") ?? T[0];
  if (y) return y;
  return c ? {
    kind: "denied",
    serverName: void 0
  } : {
    kind: "not_configured"
  }
}

function mTs(e, n) {
  return le(e, n, void 0).filter(({
    row: o
  }) => o.type === "pending").map(({
    row: o
  }) => o.name)
}

function le(e, n, o) {
  if (o !== void 0) {
    let s = Tn(o.toolName);
    return n.filter((c) => c.name === o.serverName).map((c) => ({
      row: c,
      upstream: s
    }))
  }
  let r = n.map((s) => ({
      row: s,
      prefix: uo(s.name)
    })).filter(({
      prefix: s
    }) => e.startsWith(s)),
    d = Math.max(0, ...r.map(({
      prefix: s
    }) => s.length));
  return r.filter(({
    prefix: s
  }) => s.length === d).map(({
    row: s,
    prefix: c
  }) => ({
    row: s,
    upstream: e.slice(c.length)
  }))
}

function Oe(e, n, o) {
  let r = Ka(e.name);
  if (o) return {
    kind: "denied",
    serverName: r
  };
  if (Ce(e, n)) return {
    kind: "org_blocked",
    serverName: r
  };
  switch (e.type) {
    case "pending":
      return {
        kind: "reconnecting", serverName: r
      };
    case "needs-auth":
      return {
        kind: "needs_auth", serverName: r
      };
    case "failed":
      if (IMt(e.error)) return {
        kind: "policy_blocked",
        serverName: r
      };
      if (MMt(e.error)) return {
        kind: "reserved_address",
        serverName: r
      };
      return px(e) ? {
        kind: "not_configured"
      } : {
        kind: "disconnected",
        serverName: r
      };
    case "disabled":
      return {
        kind: e.config.type === "sdk" ? "switched_off" : "disabled", serverName: r
      };
    case "connected":
    case "cached":
      return n === den || n === cen ? {
        kind: "auth_completed",
        serverName: r
      } : {
        kind: "not_offered",
        serverName: r
      }
  }
}

function Ce(e, n) {
  if (!("toolPermissions" in e.config)) return !1;
  let o = e.config.toolPermissions;
  if (!o) return !1;
  return Object.entries(o).some(([r, d]) => d === "blocked" && Tn(r) === n)
}

function EUe() {
  return tp()
}
class Gwe {
  names;
  recordedOnly;
  recordOrder;
  #e;
  constructor(e, n = {
    only: new Map,
    order: []
  }) {
    this.names = n.names ?? [...e.map((o) => o.name), ...n.only.keys()], this.recordedOnly = n.only, this.recordOrder = n.order, this.#e = new Map(e.map((o) => [o.name, o]))
  }
  has(e) {
    return this.#e.has(e) || this.recordedOnly.has(e)
  }
  keeps(e) {
    return this.has(e) && e !== Wa
  }
  toolFor(e) {
    return this.#e.get(e)
  }
  without(e) {
    return new Gwe([...this.#e.values()].filter((n) => !e.has(n.name)), {
      only: new Map([...this.recordedOnly].filter(([n]) => !e.has(n))),
      order: this.recordOrder.filter((n) => !e.has(n)),
      names: this.names.filter((n) => !e.has(n))
    })
  }
  sourceFor(e) {
    let n = this.#e.get(e),
      o = this.recordedOnly.get(e)?.server;
    if (n !== void 0 || o === void 0) return n;
    return ce(e, o)
  }
}

function Kyo(e) {
  return e ?? js()
}

function Vwe(e) {
  let n = e.declaredTools;
  return n instanceof Gwe ? n : void 0
}

function men(e) {
  let n = e.noChannelTools;
  return n instanceof Gwe ? n : void 0
}

function Yyo(e, n, o) {
  if (n) {
    e.noChannelTools = void 0;
    return
  }
  if (e.noChannelTools === void 0 && !EUe()) return;
  let r = o();
  return e.noChannelTools = r, r
}

function Xyo(e, n, o) {
  let r = new Set([...n, ...e].map((f) => f.name)),
    d = new Map([...o ?? []].filter(([f]) => !r.has(f)));
  if (d.size === 0) return new Gwe(e);
  let s = (f) => f.isMcp === !0 || co(f.name) !== null,
    c = e.findIndex(s),
    u = (f, b) => !s(f) && (f.name === Wa && b === e.length - 1 || c !== -1 && b > c),
    T = [...e.filter(s).map((f) => f.name), ...d.keys()].sort((f, b) => yme({
      name: f
    }, {
      name: b
    })),
    y = [...e.filter((f, b) => !s(f) && !u(f, b)).map((f) => f.name), ...T, ...e.filter(u).map((f) => f.name)];
  return new Gwe(e, {
    only: d,
    order: y,
    names: y
  })
}
var De = new Set(["name", "description", "input_schema", "type", ...v]);
async function gTs({
  recordedToolDescriptions: e,
  recordedToolServers: n,
  recordedToolEntries: o,
  mcpClients: r = [],
  getToolPermissionContext: d
}, s, c) {
  if (e === void 0 || e.has(Si) || !EUe()) return;
  let u = new Set(s.map((h) => h.name)),
    T = [];
  for (let h of e.keys()) {
    let R = o?.get(h),
      k = n?.get(h);
    if (!u.has(h) && c?.has(h) !== !0 && R !== void 0 && k !== void 0 && h.startsWith(uo(k)) && R.name === h && /^[a-zA-Z0-9_-]+$/.test(h) && Object.keys(R).every((x) => De.has(x))) T.push({
      name: h,
      entry: R,
      server: k
    })
  }
  if (T.length === 0) return;
  let y = await d(),
    f = new Map,
    b;
  for (let {
      name: h,
      entry: R,
      server: k
    }
    of T) try {
    if (b ??= ime(y), zwe(h, r, y, ce(h, k), b).kind === "reconnecting") f.set(h, {
      entry: R,
      server: k
    })
  } catch (x) {
    l(H(x))
  }
  return f.size === 0 ? void 0 : f
}
async function hTs(e, n, {
  mcpClients: o,
  getPermissionContext: r,
  byValue: d
}) {
  let s = nBn(e, n, !0);
  if (s.length === 0) return {
    kept: e,
    unread: 0
  };
  let c = Ni("hipaa"),
    u = (R) => c && !V(R, e.sourceFor(R)?.mcpInfo?.serverName),
    T = (R) => d?.has(R) === !0 || u(R),
    y;
  try {
    y = await r()
  } catch (R) {
    l(H(R));
    let k = new Set(s.filter(T));
    return {
      kept: k.size === 0 ? e : e.without(k),
      unread: 0
    }
  }
  let f = 0,
    b, h = new Set(s.filter((R) => {
      if (T(R)) return !0;
      try {
        return b ??= ime(y), OMt(zwe(R, o, y, e.sourceFor(R), b))
      } catch (k) {
        return l(H(k)), f++, !0
      }
    }));
  return {
    kept: h.size === 0 ? e : e.without(h),
    unread: f
  }
}

function TUe(e) {
  if (e.agentId && !e.stickyBetas) return;
  return Kyo(e.stickyBetas)
}

function t5e(e) {
  let n = TUe(e);
  return n === void 0 ? void 0 : Vwe(n)
}

function gen(e) {
  let n = TUe(e);
  return n === void 0 ? void 0 : men(n)
}

function yTs(e, n) {
  if (sSt(e), e.declaredTools !== void 0 || !EUe()) return !1;
  return ogn(e, new Gwe(n)), !0
}

function Pe(e, n, {
  servers: o,
  entries: r
} = we, d) {
  let s = new Map(n.map((S) => [S.name, S])),
    c, u = () => (c ??= CK() ?? null, c ?? void 0),
    T = (S) => {
      let O = u()?.find((C) => vt(C, S))?.underlyingV1ToolName;
      return O === void 0 ? void 0 : s.get(O)
    },
    y = new Map,
    f = new Map,
    b = 0,
    h = 0,
    R = 0,
    k = (S) => {
      return
    },
    x = [...e];
  for (let S of x) {
    let O = s.get(S) ?? k(S) ?? T(S);
    if (O === void 0) {
      let D = r?.get(S),
        M = o?.get(S);
      if (D === void 0 || Ie(S, M, u())) continue;
      if (Me(S, M, u(), n)) f.set(S, {
        entry: D,
        server: M
      });
      else {
        let Y = Ae(S, u(), d);
        if (Y === "launch_omitted") f.set(S, {
          entry: D,
          server: M
        }), R++;
        else if (Y === "gate_off") {
          if (f.set(S, {
              entry: D,
              server: M
            }), b++, Be(S, u())) h++
        }
      }
      continue
    }
    y.set(O.name, O);
    let C = O.underlyingV1ToolName === void 0 ? void 0 : s.get(O.underlyingV1ToolName);
    if (C !== void 0) y.set(C.name, C)
  }
  for (let S of n)
    if (S.underlyingV1ToolName !== void 0 && y.has(S.underlyingV1ToolName)) y.set(S.name, S);
  for (let S of y.keys()) f.delete(S);
  return y.size === 0 && f.size === 0 ? void 0 : {
    held: new Gwe(n.filter((S) => y.has(S.name)), {
      only: f,
      order: x
    }),
    recorded: x.length,
    gateOff: b,
    needsUser: h,
    launchOmitted: R
  }
}

function rEr(e, n, o, {
  latch: r,
  permissionContext: d
}) {
  let s = Vwe(e);
  if (s !== void 0 || e.declaredToolsDecided) return s;
  if (r) sSt(e);
  if (e.declaredTools !== void 0 || !EUe()) return;
  let c = n(),
    u = c === void 0 ? void 0 : Pe(c.names, o, c, d);
  if (u === void 0 || !r) return u?.held;
  return ogn(e, u.held), i("tengu_declared_tool_set_from_record", {
    recorded: u.recorded,
    held: u.held.names.length - u.held.recordedOnly.size,
    heldByName: u.held.recordedOnly.size,
    heldGateOff: u.gateOff,
    heldNeedsUser: u.needsUser,
    heldLaunchOmitted: u.launchOmitted
  }), u.held
}

function Jyo(e, n) {
  if (n === void 0) return {
    tools: e,
    redeclared: []
  };
  let o = new Set(e.map((c) => c.name)),
    r = (c) => o.has(c) || !n.keeps(c) ? void 0 : n.toolFor(c);
  if (n.names.every((c) => r(c) === void 0)) return {
    tools: e,
    redeclared: []
  };
  let d = [...e],
    s = [];
  return n.names.forEach((c, u) => {
    let T = r(c);
    if (!T) return;
    let y = -1;
    for (let f = u - 1; f >= 0 && y === -1; f--) {
      let b = n.names[f];
      y = d.findIndex((h) => h.name === b)
    }
    if (y !== -1) d.splice(y + 1, 0, T);
    else {
      let f = d.findIndex((b) => n.has(b.name));
      d.splice(f === -1 ? 0 : f, 0, T)
    }
    o.add(c), s.push(c)
  }), s.length === 0 ? {
    tools: e,
    redeclared: s
  } : {
    tools: d,
    redeclared: s
  }
}

function _Ts(e, n) {
  let o = Vwe(e);
  if (o === void 0 || n.length === 0) return;
  e.declaredTools = o.without(new Set(n)), i("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !1
  })
}

function bTs(e, n) {
  let o = e === void 0 ? void 0 : men(e);
  return nBn(o, n, !0)
}

function STs(e, n) {
  let o = men(e);
  if (o === void 0 || n.length === 0) return;
  e.noChannelTools = o.without(new Set(n)), i("tengu_declared_tools_dropped_at_compaction", {
    dropped: n.length,
    noDeferredChannel: !0
  })
}

function nBn(e, n, o) {
  if (e === void 0) return [];
  let r = new Set(n.map((d) => d.name));
  return e.names.filter((d) => {
    if (r.has(d) || !e.keeps(d)) return !1;
    let s = e.sourceFor(d)?.mcpInfo;
    return o || !V(d, s?.serverName)
  })
}
var we = {
  servers: void 0,
  entries: void 0
};

function Me(e, n, o, r) {
  if (e === Wa) return !1;
  if (n !== void 0) return !0;
  if (co(e) !== null) return !1;
  if (e === dD && !r.some((d) => vt(d, Si))) return !0;
  return o !== void 0 && $b(o, e) === void 0
}

function Ae(e, n, o) {
  if (o === void 0 || n === void 0) return;
  if (e === Wa || e === dD || co(e) !== null) return;
  let r = n.find((d) => d.name === e);
  if (r === void 0 || r.isMcp === !0) return;
  if (!ve() || Ni("hipaa")) return;
  if (e5e(o, r)) return PMt(o, r) ? "launch_omitted" : void 0;
  if (xMt(o, r)) return o.builtInToolsDisabled === !0 || o.restricted === !0 && fen(eBn([r]), new Set).includes(r.name) ? void 0 : "launch_omitted";
  if (r.isEnabled()) return;
  return "gate_off"
}

function Be(e, n) {
  return n?.find((o) => o.name === e)?.requiresUserInteraction?.() === !0
}
var Ne = "tengu_gleaming_cupcake";

function ve() {
  return E(Ne, !0)
}
var Le = "tengu_joyful_anchor";

function Ie(e, n, o) {
  if (V(e, n)) return !1;
  let r = E(Le, null);
  if (!Array.isArray(r) || r.length === 0) return !1;
  let d = o?.find((s) => vt(s, e));
  return r.some((s) => typeof s === "string" && (s === e || d !== void 0 && vt(d, s)))
}

function ce(e, n) {
  let o = uo(n);
  return {
    mcpInfo: {
      serverName: n,
      toolName: e.startsWith(o) ? e.slice(o.length) : e
    }
  }
}

function V(e, n) {
  return n !== void 0 || co(e) !== null
}

function wTs(e, n, {
  pool: o,
  keptDeferred: r,
  keepMcp: d,
  requestCarriesStructuredOutputs: s,
  recordedEntries: c
}) {
  let u = new Set(Qyo(n, {
    pool: o,
    keptDeferred: r,
    keepMcp: d
  }));
  if (u.size === 0) return [];
  let T = new Set(e.map(I)),
    y = n.recordOrder,
    f = {
      strict: s,
      eager: L(e)
    },
    b = [];
  return y.forEach((h, R) => {
    let k = n.recordedOnly.get(h);
    if (k === void 0 || T.has(h) || !u.has(h)) return;
    let x = c?.get(h) ?? k.entry,
      S = -1;
    for (let O = R - 1; O >= 0 && S === -1; O--) {
      let C = y[O];
      if (T.has(C)) S = e.findIndex((D) => I(D) === C) + 1
    }
    if (S === -1) {
      let O = new Set(y),
        C = e.findIndex((D) => O.has(I(D) ?? ""));
      S = C === -1 ? 0 : C
    }
    e.splice(S, 0, A(x, f)), T.add(h), b.push(h)
  }), b
}

function Qyo(e, {
  pool: n,
  keptDeferred: o,
  keepMcp: r
}) {
  let d = new Set([...n.map((s) => s.name), ...o]);
  return e.recordOrder.filter((s) => {
    let c = e.recordedOnly.get(s);
    return c !== void 0 && !d.has(s) && (r || !V(s, c.server))
  })
}

function I(e) {
  return "name" in e && typeof e.name === "string" ? e.name : void 0
}

function vTs() {
  return TPe()
}

function kTs(e) {
  let n = new Set;
  for (let o of e) {
    let r = I(o);
    if (r !== void 0) n.add(r)
  }
  return n
}

function ETs(e) {
  if (e.deferredLate === 0 && e.redeclared === 0 && e.fromRecord === 0 && e.unclassifiedDepartures === 0) return;
  i("tengu_declared_tool_set_held", {
    deferredLate: e.deferredLate,
    redeclared: e.redeclared,
    fromRecord: e.fromRecord,
    ...e.queryDepth !== void 0 && {
      queryDepth: e.queryDepth
    },
    toolSearchAbsent: e.toolSearchAbsent,
    noDeferredChannel: e.noDeferredChannel,
    unclassifiedDepartures: e.unclassifiedDepartures
  })
}

function B(e, n) {
  return n5e(e) && dEe(n)
}

function n5e(e) {
  return gk(e, Qb) && !z(e)
}

function z(e) {
  return pm(e, Dx) || XVo() || !TPe()
}

function CPe(e, n) {
  return (gk(e, Qb) || eYn() && !pm(e, Qb)) && !z(e) && dEe(n)
}

function TTs(e, n) {
  return rBn(e) && B(e, n)
}

function rBn(e) {
  return gk(e, _b) && !ZJn() && n5e(e)
}

function CTs(e, n) {
  if (ZJn() || pm(e, _b)) return !1;
  if (gk(e, _b)) return CPe(e, n);
  return !gk(e, Qb) && GHt() && CPe(e, n)
}

function oEr(e, n, {
  toolSearchToolFilteredOut: o,
  toolPoolRefreshes: r,
  aheadOfRequest: d
}) {
  return o && (d ? CPe(e, n) : B(e, n)) && (Vwe(e) !== void 0 || r && EUe())
}

function RTs(e, n, o) {
  let r = !gk(e, Qb);
  if (n.includes(Qb) && !z(e)) {
    if (hF(e, Qb), r && n.includes(_b) && !ZJn() && !pm(e, _b)) hF(e, _b)
  }
  let d = B(e, o),
    s = d && rBn(e),
    c = n;
  if (d && !c.includes(Qb)) c = [...c, Qb];
  if (!d && c.includes(Qb)) c = c.filter((u) => u !== Qb);
  if (s && !c.includes(_b)) c = [...c, _b];
  if (!s && c.includes(_b)) c = c.filter((u) => u !== _b);
  return c
}

function ATs(e, n, o, r) {
  if (B(e, o) && dEe(r)) {
    let d = n.includes(Qb) ? n : [...n, Qb],
      s = rBn(e);
    if (s && !d.includes(_b)) return [...d, _b];
    return s ? d : d.filter((c) => c !== _b)
  }
  return n.filter((d) => d !== Qb && d !== _b)
}

function xTs(e, n, {
  mintModel: o,
  retryModel: r,
  advisorEntryMoved: d,
  deferredEntriesMoved: s,
  hasDeferredChannel: c
}) {
  try {
    if (!B(e, o) || dEe(r)) return;
    let u = {
      advisor_entry: d,
      deferred_entries: s,
      announcement_blocks: c && n.some((T) => je(e, T))
    };
    return Object.values(u).some(Boolean) ? u : void 0
  } catch (u) {
    l(H(u));
    return
  }
}

function je(e, n) {
  if (n.type !== "attachment" || n.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(n.uuid)) return !1;
  let o = n.attachment.surfacedNames;
  return Array.isArray(o) && o.some((r) => typeof r === "string" && (e.surfacedOnWire.has(r) || e.definedByValue.has(r)))
}

function PTs(e, n, o, r, d = new Set) {
  if (!r) return;
  let s = !n5e(e);
  for (let c of n) {
    if (c.type !== "attachment" || c.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(c.uuid)) continue;
    let u = c.attachment.surfacedNames;
    if (Array.isArray(u) && u.length > 0 && (s || u.some((T) => typeof T !== "string" || !o.has(T) && !d.has(T)))) e.nameOnlyAnnouncements.add(c.uuid)
  }
}

function Zyo(e, n, o, {
  useToolSearch: r,
  toolSearchAbsent: d,
  blocksEligible: s,
  byValueNames: c = new Set,
  byValueStaysOut: u
}) {
  if (!r && !d) return;
  if (!s) {
    if (!n5e(e)) e.surfacedOnWire.clear(), e.definedByValue.clear();
    else if (u) e.definedByValue.clear();
    return
  }
  e.surfacedOnWire.clear(), e.definedByValue.clear();
  let T = new Set;
  for (let y of o)
    if (y.type === "api_system") {
      for (let f of y.toolRemovals ?? []) e.definedByValue.delete(f);
      for (let f of y.toolAdditions ?? [])
        if (AMt(y.toolDefinitions, f) !== void 0) T.add(f), e.definedByValue.add(f);
        else e.surfacedOnWire.add(f)
    } if (d) return;
  for (let y of n) {
    if (y.type !== "attachment" || y.attachment.type !== "deferred_tools_delta" || e.nameOnlyAnnouncements.has(y.uuid)) continue;
    let f = y.attachment.surfacedNames;
    if (Array.isArray(f) && f.some((b) => typeof b === "string" && !e.surfacedOnWire.has(b) && !T.has(b) && !c.has(b))) e.nameOnlyAnnouncements.add(y.uuid)
  }
}

function OTs(e, n, o, r) {
  if (e_o(e), n === "header_rejected" || n === "block_type_unknown") {
    if (JVo(), n === "header_rejected") {
      if (kSt(Qb), r) Bjr(), kSt(_b)
    }
  } else if (n === "model_unsupported") iqo(qe(o));
  t(`[late-tool-additions] tool_addition rejected (${n}) \u2014 falling back to the ToolSearch announcement (or to inline tools where there is no ToolSearch), sticky-rejecting the beta until /clear or /compact`, {
    level: "warn"
  }), p("mcp_late_tool_additions", `rejected_${n}`)
}

function e_o(e) {
  if (gk(e, Qb)) kg(e, Qb);
  fe(e), e.surfacedOnWire.clear()
}

function fe(e) {
  if (gk(e, _b)) czo(e, _b);
  e.definedByValue.clear()
}

function ITs(e, n) {
  if (fe(e), n === "header_rejected" || n === "unsupported_on_platform") {
    if (Bjr(), n === "header_rejected") kSt(_b)
  }
  t(`[inline-tools] tool_definition rejected (${n}) \u2014 falling back to declaring late tools in tools[] and showing them by reference, off for the rest of this conversation (carried through a compaction; /clear starts afresh)`, {
    level: "warn"
  }), p("mcp_inline_tools", `rejected_${n}`)
}

function MTs(e, n, o, r = [], d = {}) {
  let s = [...e ? [{
    type: "text",
    text: e
  }] : [], ...r.map((c) => ({
    type: "tool_removal",
    tool: {
      type: "tool_reference",
      name: c
    }
  })), ...n.map((c) => {
    let u = AMt(d, c);
    return u === void 0 ? {
      type: "tool_addition",
      tool: {
        type: "tool_reference",
        name: c
      }
    } : {
      type: "tool_addition",
      tool: {
        type: "tool_definition",
        definition: u
      }
    }
  })];
  if (o !== void 0 && s.length > 0) s.push({
    ...s.pop(),
    cache_control: o
  });
  return s
}
export {
  QEs,
  jyo,
  ien,
  ZEs,
  Wyo,
  aen,
  ux,
  eEr,
  len,
  eTs,
  tTs,
  Z3e,
  nTs,
  AMt,
  rTs,
  den,
  cen,
  oTs,
  Wq,
  TPe,
  zyo,
  uen,
  dG,
  Gyo,
  sTs,
  iTs,
  aTs,
  pen,
  lTs,
  ZUn,
  dTs,
  cTs,
  uTs,
  Vyo,
  $y,
  $b,
  qyo,
  pTs,
  fTs,
  fen,
  tEr,
  eBn,
  nEr,
  z9,
  xMt,
  e5e,
  PMt,
  tBn,
  OMt,
  zwe,
  mTs,
  EUe,
  Gwe,
  Kyo,
  Vwe,
  men,
  Yyo,
  Xyo,
  gTs,
  hTs,
  TUe,
  t5e,
  gen,
  yTs,
  rEr,
  Jyo,
  _Ts,
  bTs,
  STs,
  nBn,
  wTs,
  Qyo,
  vTs,
  kTs,
  ETs,
  n5e,
  CPe,
  TTs,
  rBn,
  CTs,
  oEr,
  RTs,
  ATs,
  xTs,
  PTs,
  Zyo,
  OTs,
  e_o,
  ITs,
  MTs
};
