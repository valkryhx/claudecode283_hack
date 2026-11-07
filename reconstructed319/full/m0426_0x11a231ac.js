// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  pVe,
  msn,
  w5i,
  hsn,
  On,
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  F,
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  FE
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q,
  gY
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  z1t,
  QJ,
  _M,
  g2n,
  UBs
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Dn
} from "B:/~BUN/root/chunk-9jpwd6f1.js";
import {
  PRr
} from "B:/~BUN/root/chunk-n0v0c6zt.js";
import {
  Ug,
  MXe
} from "B:/~BUN/root/chunk-vp8vb7t8.js";
import {
  Ra
} from "B:/~BUN/root/chunk-f7683rey.js";
import {
  mT,
  NSe,
  YJi,
  YUt,
  XJi,
  QFe
} from "B:/~BUN/root/chunk-bxk17zm0.js";
import {
  en
} from "B:/~BUN/root/chunk-mdq0dxn3.js";
import {
  Qm
} from "B:/~BUN/root/chunk-cbjnh04j.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";
var oe = 0.02,
  L = he({
    switchedOff: !1
  }, (e) => {
    e.switchedOff = !1
  });

function Fdo() {
  if (L.switchedOff || i.CLAUDE_CODE_NORMALIZE_PREFIX_CACHE === !1) return;
  let e = v("tengu_wise_salamander", 0);
  if (typeof e === "number" && e > 0 && e <= 1) return e;
  return i.CLAUDE_CODE_NORMALIZE_PREFIX_CACHE === !0 ? oe : void 0
}

function j() {
  return Fdo() !== void 0
}

function Fps() {
  L.switchedOff = !0, pVe()
}
class rbr {
  kept = new WeakMap;
  keeper() {
    return j() ? (e, n) => this.keep(e, n) : (e, n) => n
  }
  keep(e, n) {
    if (K(e, n)) return e;
    let r = msn(e),
      o = hsn(),
      a = this.kept.get(e);
    if (a !== void 0 && a.stamp === r && a.generation === o && K(a.copy, n)) return a.copy;
    return this.kept.set(e, {
      stamp: r,
      generation: o,
      copy: n
    }), w5i(n, e), n
  }
}

function K(e, n) {
  return B(e, n, "message", (r, o) => B(r, o, "content", se))
}

function se(e, n) {
  return Array.isArray(e) && Array.isArray(n) && e.length === n.length && e.every((r, o) => {
    let a = n[o];
    return r === a || P(r) && P(a) && B(r, a)
  })
}

function B(e, n, r, o) {
  let a = Reflect.ownKeys(e);
  return a.length === Reflect.ownKeys(n).length && a.every((s) => {
    if (!Object.hasOwn(n, s)) return !1;
    let u = Reflect.get(e, s),
      d = Reflect.get(n, s);
    return u === d || s === r && o !== void 0 && P(u) && P(d) && o(u, d)
  })
}

function P(e) {
  return typeof e === "object" && e !== null
}
import {
  basename as ce,
  dirname as Y,
  join as pe
} from "path";
var ie = {
    kept_in_conversation: "tengu_mcp_drive_download_kept_in_conversation",
    saved_as_text: "tengu_mcp_drive_download_saved_as_text",
    cut_not_saved: "tengu_mcp_drive_download_cut_not_saved",
    save_failed: "tengu_mcp_drive_download_save_failed"
  },
  ae = {
    kept: 0,
    saved: 0,
    cut: 0,
    not_read: 0,
    retyped: 0
  },
  W = 16,
  le = 5000,
  ue = 300,
  de = 3,
  w = new Je(() => ({
    counts: {
      ...ae
    },
    unsettled: new Map,
    kept: [],
    callsSinceKept: 0
  }));

function G(e, n) {
  l(ie[e], {
    resultChars: n
  });
  let r = w.of(H());
  if (e === "kept_in_conversation") r.counts.kept++, r.kept.push(n), r.kept.splice(0, r.kept.length - W), r.callsSinceKept = 0;
  else if (e === "saved_as_text") r.counts.saved++;
  else if (e === "cut_not_saved") r.counts.cut++
}

function Oce(e, n, r) {
  if (e === void 0) return;
  let o = typeof r === "string" ? r.length : (r ?? []).reduce((s, u) => s + (u.type === "text" ? u.text.length : 0), 0);
  if (n !== "kept_in_conversation") {
    G(n, o);
    return
  }
  let {
    unsettled: a
  } = w.of(H());
  a.set(e, o);
  for (let s of a.keys()) {
    if (a.size <= W) break;
    a.delete(s)
  }
}

function M(e, n) {
  let r = w.peek(H())?.unsettled,
    o = r?.get(e);
  if (o !== void 0) r?.delete(e), G(n, o)
}

function $Di(e) {
  l(e === "http body overflow" ? "tengu_mcp_drive_download_not_read_over_cap" : "tengu_mcp_drive_download_not_read_malformed", {}), w.of(H()).counts.not_read++
}

function UDi(e) {
  let n = w.peek(H());
  if (n === void 0 || n.kept.length === 0) return;
  let r = n.kept.findLastIndex((o) => o >= le && e >= o * 0.9 && e <= o + ue);
  if (r !== -1) {
    let [o] = n.kept.splice(r, 1);
    l("tengu_mcp_drive_download_retyped_likely", {
      resultChars: o
    }), n.counts.retyped++, n.callsSinceKept = 0
  } else if (++n.callsSinceKept >= de) n.kept.length = 0
}
var Toe = "<persisted-output>",
  I7t = "</persisted-output>",
  obr = "<truncated-output>",
  Hps = "</truncated-output>",
  $ps = "[Old tool result content cleared]",
  fe = "tengu_velvet_ibis";

function H9(e, n, r = mT, o = !1) {
  if (!Number.isFinite(n)) return n;
  if (o) return Math.min(n, r);
  let s = v(fe, {})?.[e];
  if (typeof s === "number" && Number.isFinite(s) && s > 0) return s;
  return Math.min(n, r)
}
var H$ = 2000,
  z = "tool result was not saved";

function V(e) {
  let n = e.charCodeAt(0);
  if (e.length === 1 && n >= 55296 && n <= 57343) return `%u${n.toString(16).toUpperCase()}`;
  return Array.from(Buffer.from(e), (r) => `%${r.toString(16).toUpperCase().padStart(2,"0")}`).join("")
}

function ge(e) {
  let n = "";
  for (let r of String(e)) {
    let o = /^[A-Za-z0-9_-]$/.test(r) || r === "." && n !== "";
    n += o ? r : V(r)
  }
  if (n === "") return "%";
  return FE(n) ? V(n.charAt(0)) + n.slice(1) : n
}

function J(e, n) {
  return `${ge(e)}.${n?"json":"txt"}`
}

function _0e(e, n, r) {
  return pe(e, J(n, r))
}
async function Cq(e, n, r, o, a = XJi) {
  let s = Array.isArray(e);
  if (s) {
    if (e.some((g) => !Ra(g) || g.type !== "text")) return {
      error: "Cannot persist tool results containing non-text content"
    }
  }
  let u = Ug();
  if (u !== void 0) {
    let p = Math.min(a, u.maxBytes),
      g, c, R;
    try {
      g = s ? _(e, null, 2) : e, c = gY(g, p), R = Buffer.from(c)
    } catch {
      return {
        error: z
      }
    }
    let x = await MXe(u, {
      leafName: J(n, s),
      data: R
    });
    if (x === null) return {
      error: z
    };
    let {
      preview: C,
      hasMore: N
    } = PTe(c, H$);
    return {
      filepath: x.path,
      originalSize: g.length,
      isJson: s,
      preview: C,
      hasMore: N,
      truncatedAtBytes: c === g ? void 0 : p
    }
  }
  if (r === null) return {
    error: z
  };
  await _M(r, o);
  let d = _0e(r, n, s),
    h, y;
  try {
    h = s ? _(e, null, 2) : e, y = gY(h, a)
  } catch (p) {
    let g = b(F(p));
    return t(`Failed to persist tool result to ${d}: ${g}`, {
      level: "error"
    }), {
      error: g
    }
  }
  let T = y === h ? void 0 : a,
    S = X() && o !== void 0 ? QJ(Y(d), ce(d)) : void 0;
  if (X() && o !== void 0 && S !== void 0) {
    let p = await o.write(S, y, {
      precondition: {
        type: "ifAbsent"
      },
      mode: 438 & ~process.umask()
    });
    if (!p.ok && p.error.code !== "AlreadyExists") {
      let g = ke(p.error, d);
      return t(`Failed to persist tool result to ${d}: ${g}`, {
        level: "error"
      }), {
        error: g
      }
    }
    if (p.ok) t(`Persisted tool result to ${d} (${en(y.length)})`)
  } else {
    let p = Dn();
    try {
      await g2n(Y(d), p), await UBs(d, p), await p.writeExclusive(d, y), t(`Persisted tool result to ${d} (${en(y.length)})`)
    } catch (g) {
      if (k(g) !== "EEXIST") return t(`Failed to persist tool result to ${d}: ${b(F(g))}`, {
        level: "error"
      }), {
        error: b(F(g))
      };
      let c;
      try {
        c = await p.lstat(d)
      } catch {
        return {
          error: "tool result path could not be checked; not persisted"
        }
      }
      if (c?.isSymbolicLink) return {
        error: "tool result path is a link; not persisted"
      };
      if (c?.isFile !== !0) return {
        error: "tool result path is not a regular file; not persisted"
      };
      if (c.nlink > 1) return {
        error: "tool result path has another name; not persisted"
      }
    }
  }
  let {
    preview: E,
    hasMore: O
  } = PTe(y, H$);
  return {
    filepath: d,
    originalSize: h.length,
    isJson: s,
    preview: E,
    hasMore: O,
    truncatedAtBytes: T
  }
}

function Yye(e) {
  return `${Toe}
${Ups(e)}${I7t}`
}

function Ups(e) {
  let n = e.truncatedAtBytes === void 0 ? `Output too large (${en(e.originalSize)}). Full output saved to: ${e.filepath}

` : `Output exceeded the ${en(e.truncatedAtBytes)} persist limit; only the first ${en(e.truncatedAtBytes)} were saved to: ${e.filepath}

`;
  if (e.previewEnd !== void 0) {
    let r = Math.max(0, e.originalSize - Buffer.byteLength(e.preview) - Buffer.byteLength(e.previewEnd));
    return `${n}Preview (start and end):
${e.preview}
[\u2026 ${en(r)} omitted \u2026]
${e.previewEnd}
`
  }
  return n += `Preview (first ${en(H$)}):
`, n += e.preview, n += e.hasMore ? `
...
` : `
`, n
}
var me = "1023 bytes";

function Hdo(e, n) {
  if (Array.isArray(e) && e.some((u) => !Ra(u) || u.type !== "text")) return null;
  let r = typeof e === "string" ? e : e.flatMap((u) => u.type === "text" && ("text" in u) && typeof u.text === "string" ? [u.text] : []).join(`
`),
    o = en(r.length),
    a = Math.max(0, n - Z(o, me, "").length),
    s = Q(r, PTe(r, a).preview.length);
  if (s.length === r.length) return null;
  return {
    message: Z(o, en(s.length), s),
    originalSize: r.length
  }
}

function Z(e, n, r) {
  return `${obr}
Output too large (${e}). It could not be saved, so only the first ${n} are shown; the rest was dropped. If the tool can page or filter its results, call it again for the part you need.

${r}
${Hps}`
}
async function Fft(e, n, r, o, a) {
  return Xye(e.mapToolResultToToolResultBlockParam(n, r), e, o, a)
}
async function Xye(e, n, r, o) {
  let a = await _e(e, n.name, r, H9(n.name, n.maxResultSizeChars, n.persistenceThresholdCeiling, n.skipAggregateToolResultBudget === !0), o);
  return M(e.tool_use_id, "kept_in_conversation"), a
}

function Bps(e) {
  if (!e) return !0;
  if (typeof e === "string") return e.trim() === "";
  if (!Array.isArray(e)) return !1;
  if (e.length === 0) return !0;
  return e.every((n) => Ra(n) && n.type === "text" && ("text" in n) && (typeof n.text !== "string" || n.text.trim() === ""))
}
async function _e(e, n, r, o, a) {
  let s = e.content;
  if (Bps(s)) return l("tengu_tool_empty_result", {
    toolName: On(n)
  }), {
    ...e,
    content: `(${n} completed with no output)`
  };
  if (!s) return e;
  let u = o ?? YJi;
  if (!Wps(s, u)) return e;
  let d = Ug();
  if (!Re(s) && d?.takesTextInline?.(ibr(s)) === !0) return e;
  let h = await Cq(s, e.tool_use_id, r, a);
  if (Rq(h)) {
    if (d !== void 0) {
      let T = Hdo(s, u);
      if (T === null) return e;
      return l("tengu_tool_result_persisted", {
        toolName: On(n),
        originalSizeBytes: T.originalSize,
        persistedSizeBytes: T.message.length,
        estimatedOriginalTokens: Math.ceil(T.originalSize / NSe),
        estimatedPersistedTokens: Math.ceil(T.message.length / NSe),
        thresholdUsed: u,
        stored: !1
      }), M(e.tool_use_id, "cut_not_saved"), {
        ...e,
        content: T.message
      }
    }
    return e
  }
  let y = Yye(h);
  return l("tengu_tool_result_persisted", {
    toolName: On(n),
    originalSizeBytes: h.originalSize,
    persistedSizeBytes: y.length,
    estimatedOriginalTokens: Math.ceil(h.originalSize / NSe),
    estimatedPersistedTokens: Math.ceil(y.length / NSe),
    thresholdUsed: u,
    truncatedAtCap: h.truncatedAtBytes !== void 0
  }), M(e.tool_use_id, "saved_as_text"), {
    ...e,
    content: y
  }
}

function PTe(e, n) {
  if (e.length <= n) return {
    preview: e,
    hasMore: !1
  };
  let o = e.slice(0, n).lastIndexOf(`
`),
    a = o > n * 0.5 ? o : n;
  return {
    preview: Q(e, a),
    hasMore: !0
  }
}

function Rq(e) {
  return "error" in e
}

function sbr() {
  return {
    seenIds: new Set,
    replacements: new Map
  }
}

function BDi(e) {
  return {
    seenIds: new Set(e.seenIds),
    replacements: new Map(e.replacements)
  }
}

function jDi(e, n) {
  if (!v("tengu_hawthorn_steeple", !1)) return;
  if (e) return $do(e, n ?? []);
  return sbr()
}

function q(e) {
  if (typeof e !== "string") return !1;
  let n = PRr(e);
  return n.startsWith(Toe) || n === $ps
}

function jps(e) {
  return !!e && !q(e) && !(typeof e === "string" && e.startsWith(obr))
}

function WDi(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type !== "user" || o.isVirtual || !Array.isArray(o.message.content)) continue;
    for (let a of o.message.content)
      if (a.type === "tool_result" && a.tool_use_id === n) return !a.is_error && jps(a.content)
  }
  return !1
}

function Wps(e, n) {
  return !ee(e) && ibr(e) > n
}

function ee(e) {
  return Array.isArray(e) && e.some((n) => Ra(n) && (n.type === "image" || n.type === "document"))
}
var ye = 5000;

function Re(e) {
  return (typeof e === "string" ? [e] : Array.isArray(e) ? e.map((r) => Ra(r) && r.type === "text" && ("text" in r) && typeof r.text === "string" ? r.text : "") : []).some((r) => {
    let o = 0;
    for (let a = 0; a < r.length; a++) {
      let s = r.charCodeAt(a);
      if (o = s === 32 || s >= 9 && s <= 13 ? 0 : o + 1, o >= ye) return !0
    }
    return !1
  })
}

function ibr(e) {
  if (typeof e === "string") return e.length;
  if (!Array.isArray(e)) return 0;
  return e.reduce((n, r) => n + (Ra(r) && r.type === "text" && "text" in r && typeof r.text === "string" ? r.text.length : 0), 0)
}

function Te(e) {
  let n = new Map;
  for (let r of e) {
    if (r.type !== "assistant") continue;
    let o = r.message.content;
    if (!Array.isArray(o)) continue;
    for (let a of o)
      if (Ra(a) && a.type === "tool_use") n.set(a.id, a.name)
  }
  return n
}

function Se(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return [];
  return e.message.content.flatMap((n) => {
    if (!Ra(n) || n.type !== "tool_result" || !n.content) return [];
    if (q(n.content)) return [];
    if (ee(n.content)) return [];
    return [{
      toolUseId: n.tool_use_id,
      content: n.content,
      size: ibr(n.content)
    }]
  })
}

function te(e) {
  let n = [],
    r = [],
    o = () => {
      if (r.length > 0) n.push(r);
      r = []
    },
    a = new Set;
  for (let s of e)
    if (s.type === "user") r.push(...Se(s));
    else if (s.type === "assistant") {
    if (!a.has(s.message.id)) o(), a.add(s.message.id)
  }
  return o(), n
}

function Ee(e, n) {
  return e.reduce((r, o) => {
    let a = n.replacements.get(o.toolUseId);
    if (a !== void 0) r.mustReapply.push({
      ...o,
      replacement: a
    });
    else if (n.seenIds.has(o.toolUseId)) r.frozen.push(o);
    else r.fresh.push(o);
    return r
  }, {
    mustReapply: [],
    frozen: [],
    fresh: []
  })
}

function Ce(e, n, r) {
  let o = [...e].sort((u, d) => d.size - u.size),
    a = [],
    s = n + e.reduce((u, d) => u + d.size, 0);
  for (let u of o) {
    if (s <= r) break;
    a.push(u), s -= u.size
  }
  return a
}

function we(e, n) {
  let r = ve.keeper();
  return e.map((o) => {
    if (o.type !== "user" || !Array.isArray(o.message.content)) return o;
    let a = o.message.content;
    if (!a.some((u) => Ra(u) && u.type === "tool_result" && n.has(u.tool_use_id))) return o;
    return r(o, {
      ...o,
      message: {
        ...o.message,
        content: a.map((u) => {
          if (!Ra(u) || u.type !== "tool_result") return u;
          let d = n.get(u.tool_use_id);
          return d === void 0 ? u : {
            ...u,
            content: d
          }
        })
      }
    })
  })
}
var ve = new rbr;
async function xe(e, n, r) {
  let o = await Cq(e.content, e.toolUseId, n, r);
  if (Rq(o)) return null;
  return {
    content: Yye(o),
    originalSize: o.originalSize,
    truncatedAtCap: o.truncatedAtBytes !== void 0
  }
}

function zDi(e) {
  let n = new Set;
  for (let r of e)
    if (!Number.isFinite(r.maxResultSizeChars) || r.skipAggregateToolResultBudget === !0) {
      n.add(r.name);
      for (let o of r.aliases ?? []) n.add(o)
    } return n
}
async function Ae(e, n, r, o, a = new Set) {
  let s = te(e),
    u = a.size > 0 ? Te(e) : void 0,
    d = (c) => u !== void 0 && a.has(u.get(c) ?? ""),
    h = YUt,
    y = new Map,
    T = [],
    S = 0,
    E = 0;
  for (let c of s) {
    let {
      mustReapply: R,
      frozen: x,
      fresh: C
    } = Ee(c, n);
    if (R.forEach((m) => y.set(m.toolUseId, m.replacement)), S += R.length, C.length === 0) {
      c.forEach((m) => n.seenIds.add(m.toolUseId));
      continue
    }
    C.filter((m) => d(m.toolUseId)).forEach((m) => n.seenIds.add(m.toolUseId));
    let U = C.filter((m) => !d(m.toolUseId)),
      D = x.reduce((m, A) => m + (d(A.toolUseId) ? 0 : A.size), 0),
      ne = U.reduce((m, A) => m + A.size, 0),
      I = D + ne > h ? Ce(U, D, h) : [],
      re = new Set(I.map((m) => m.toolUseId));
    if (c.filter((m) => !re.has(m.toolUseId)).forEach((m) => n.seenIds.add(m.toolUseId)), I.length === 0) continue;
    E++, T.push(...I)
  }
  if (y.size === 0 && T.length === 0) return {
    messages: e,
    newlyReplaced: []
  };
  let O = await Promise.all(T.map(async (c) => [c, await xe(c, r, o)])),
    p = [],
    g = 0;
  for (let [c, R] of O) {
    if (n.seenIds.add(c.toolUseId), R === null) continue;
    g += c.size, y.set(c.toolUseId, R.content), n.replacements.set(c.toolUseId, R.content), p.push({
      kind: "tool-result",
      toolUseId: c.toolUseId,
      replacement: R.content
    }), l("tengu_tool_result_persisted_message_budget", {
      originalSizeBytes: R.originalSize,
      persistedSizeBytes: R.content.length,
      estimatedOriginalTokens: Math.ceil(R.originalSize / NSe),
      estimatedPersistedTokens: Math.ceil(R.content.length / NSe),
      truncatedAtCap: R.truncatedAtCap
    })
  }
  if (y.size === 0) return {
    messages: e,
    newlyReplaced: []
  };
  if (p.length > 0) t(`Per-message budget: persisted ${p.length} tool results across ${E} over-budget message(s), shed ~${en(g)}, ${S} re-applied`), l("tengu_message_level_tool_result_budget_enforced", {
    resultsPersisted: p.length,
    messagesOverBudget: E,
    replacedSizeBytes: g,
    reapplied: S
  });
  return {
    messages: we(e, y),
    newlyReplaced: p
  }
}
async function GDi(e, n, r, o, a, s) {
  if (!n) return e;
  let u = await Ae(e, n, r, s, a);
  if (u.newlyReplaced.length > 0) o?.(u.newlyReplaced);
  return u.messages
}

function $do(e, n, r) {
  let o = sbr(),
    a = new Set(te(e).flat().map((s) => s.toolUseId));
  for (let s of a) o.seenIds.add(s);
  for (let s of n)
    if (s.kind === "tool-result" && a.has(s.toolUseId)) o.replacements.set(s.toolUseId, s.replacement);
  if (r) {
    for (let [s, u] of r)
      if (a.has(s) && !o.replacements.has(s)) o.replacements.set(s, u)
  }
  return o
}

function abr(e, n, r) {
  if (!e) return;
  return $do(n, r, e.replacements)
}

function ke(e, n) {
  let r = Qm(e);
  if (r === void 0) return `storage write failed: ${e.code}`;
  let o = Error("storage write failed");
  return o.code = r, o.path = n, b(o)
}

function b(e) {
  let n = e;
  if (n.code) switch (n.code) {
    case "ENOENT":
      return `Directory not found: ${n.path??"unknown path"}`;
    case "EACCES":
      return `Permission denied: ${n.path??"unknown path"}`;
    case "ENOSPC":
      return "No space left on device";
    case "EROFS":
      return "Read-only file system";
    case "EMFILE":
      return "Too many open files";
    case "EEXIST":
      return `File already exists: ${n.path??"unknown path"}`;
    default:
      return `${n.code}: ${n.message}`
  }
  return e.message
}
async function OTe(e, n, r, {
  threshold: o = QFe,
  storageV5: a
} = {}) {
  if (e.length <= o) return e;
  let s = await Cq(e, `hook-${n}-${r}`, z1t(), a);
  if (Rq(s)) {
    if (Ug() !== void 0) return Hdo(e, o)?.message ?? e;
    return l("tengu_hook_output_persisted", {
      source: f(r),
      originalSizeBytes: e.length,
      persistedSizeBytes: 0,
      truncatedFallback: !0
    }), `${Q(e,o)}

[Hook ${r} truncated at ${o} chars \u2014 persist-to-disk failed: ${s.error}]`
  }
  let u = Yye(s);
  return l("tengu_hook_output_persisted", {
    source: f(r),
    originalSizeBytes: s.originalSize,
    persistedSizeBytes: u.length,
    truncatedFallback: !1,
    truncatedAtCap: s.truncatedAtBytes !== void 0
  }), u
}

function lbr(e, n) {
  return n.startsWith(Toe) && n.endsWith(I7t) && n !== e
}
export {
  Fdo,
  Fps,
  rbr,
  Oce,
  $Di,
  UDi,
  Toe,
  I7t,
  obr,
  Hps,
  $ps,
  H9,
  H$,
  _0e,
  Cq,
  Yye,
  Ups,
  Hdo,
  Fft,
  Xye,
  Bps,
  PTe,
  Rq,
  sbr,
  BDi,
  jDi,
  jps,
  WDi,
  Wps,
  ibr,
  zDi,
  GDi,
  $do,
  abr,
  OTe,
  lbr
};
