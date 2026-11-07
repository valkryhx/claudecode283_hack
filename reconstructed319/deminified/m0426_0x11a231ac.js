// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { pVe, msn, w5i, hsn, On, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { F, k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { FE } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Q, gY } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { z1t, QJ, _M, g2n, UBs } from "B:/~BUN/root/chunk-1g25msn4.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { PRr } from "B:/~BUN/root/chunk-n0v0c6zt.js";
import { Ug, MXe } from "B:/~BUN/root/chunk-vp8vb7t8.js";
import { Ra } from "B:/~BUN/root/chunk-f7683rey.js";
import { mT, NSe, YJi, YUt, XJi, QFe } from "B:/~BUN/root/chunk-bxk17zm0.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { Qm } from "B:/~BUN/root/chunk-cbjnh04j.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
var oe = 0.02,
  L = he({
    switchedOff: !1
  }, e => {
    e.switchedOff = !1;
  });
function Fdo() {
  if (L.switchedOff || i.CLAUDE_CODE_NORMALIZE_PREFIX_CACHE === !1) return;
  let e = v("tengu_wise_salamander", 0);
  if (typeof e === "number" && e > 0 && e <= 1) return e;
  return i.CLAUDE_CODE_NORMALIZE_PREFIX_CACHE === !0 ? oe : void 0;
}
function j() {
  return Fdo() !== void 0;
}
function Fps() {
  L.switchedOff = !0, pVe();
}
class rbr {
  kept = new WeakMap();
  keeper() {
    return j() ? (e, n) => this.keep(e, n) : (e, n) => n;
  }
  keep(e, copy) {
    if (K(e, copy)) return e;
    let stamp = msn(e),
      generation = hsn(),
      a = this.kept.get(e);
    if (a !== void 0 && a.stamp === stamp && a.generation === generation && K(a.copy, copy)) return a.copy;
    return this.kept.set(e, {
      stamp: stamp,
      generation: generation,
      copy: copy
    }), w5i(copy, e), copy;
  }
}
function K(e, n) {
  return B(e, n, "message", (r, o) => B(r, o, "content", se));
}
function se(e, n) {
  return Array.isArray(e) && Array.isArray(n) && e.length === n.length && e.every((item, index) => {
    let a = n[index];
    return item === a || P(item) && P(a) && B(item, a);
  });
}
function B(e, n, r, o) {
  let a = Reflect.ownKeys(e);
  return a.length === Reflect.ownKeys(n).length && a.every(item => {
    if (!Object.hasOwn(n, item)) return !1;
    let u = Reflect.get(e, item),
      d = Reflect.get(n, item);
    return u === d || item === r && o !== void 0 && P(u) && P(d) && o(u, d);
  });
}
function P(e) {
  return typeof e === "object" && e !== null;
}
import { basename as ce, dirname as Y, join as pe } from "path";
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
    unsettled: new Map(),
    kept: [],
    callsSinceKept: 0
  }));
function G(e, resultChars) {
  l(ie[e], {
    resultChars: resultChars
  });
  let r = w.of(H());
  if (e === "kept_in_conversation") r.counts.kept++, r.kept.push(resultChars), r.kept.splice(0, r.kept.length - W), r.callsSinceKept = 0;else if (e === "saved_as_text") r.counts.saved++;else if (e === "cut_not_saved") r.counts.cut++;
}
function Oce(e, n, r) {
  if (e === void 0) return;
  let o = typeof r === "string" ? r.length : (r ?? []).reduce((acc, item) => acc + (item.type === "text" ? item.text.length : 0), 0);
  if (n !== "kept_in_conversation") {
    G(n, o);
    return;
  }
  let {
    unsettled: unsettled
  } = w.of(H());
  unsettled.set(e, o);
  for (let s of unsettled.keys()) {
    if (unsettled.size <= W) break;
    unsettled.delete(s);
  }
}
function M(e, n) {
  let r = w.peek(H())?.unsettled,
    o = r?.get(e);
  if (o !== void 0) r?.delete(e), G(n, o);
}
function $Di(e) {
  l(e === "http body overflow" ? "tengu_mcp_drive_download_not_read_over_cap" : "tengu_mcp_drive_download_not_read_malformed", {}), w.of(H()).counts.not_read++;
}
function UDi(e) {
  let n = w.peek(H());
  if (n === void 0 || n.kept.length === 0) return;
  let r = n.kept.findLastIndex(o => o >= le && e >= o * 0.9 && e <= o + ue);
  if (r !== -1) {
    let [resultChars_2] = n.kept.splice(r, 1);
    l("tengu_mcp_drive_download_retyped_likely", {
      resultChars: resultChars_2
    }), n.counts.retyped++, n.callsSinceKept = 0;
  } else if (++n.callsSinceKept >= de) n.kept.length = 0;
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
  return Math.min(n, r);
}
var H$ = 2000,
  error = "tool result was not saved";
function V(e) {
  let n = e.charCodeAt(0);
  if (e.length === 1 && n >= 55296 && n <= 57343) return `%u${n.toString(16).toUpperCase()}`;
  return Array.from(Buffer.from(e), r => `%${r.toString(16).toUpperCase().padStart(2, "0")}`).join("");
}
function ge(e) {
  let n = "";
  for (let r of String(e)) {
    let o = /^[A-Za-z0-9_-]$/.test(r) || r === "." && n !== "";
    n += o ? r : V(r);
  }
  if (n === "") return "%";
  return FE(n) ? V(n.charAt(0)) + n.slice(1) : n;
}
function J(e, n) {
  return `${ge(e)}.${n ? "json" : "txt"}`;
}
function _0e(e, n, r) {
  return pe(e, J(n, r));
}
async function Cq(e, n, r, o, a = XJi) {
  let isJson = Array.isArray(e);
  if (isJson) {
    if (e.some(item => !Ra(item) || item.type !== "text")) return {
      error: "Cannot persist tool results containing non-text content"
    };
  }
  let u = Ug();
  if (u !== void 0) {
    let p = Math.min(a, u.maxBytes),
      g,
      c,
      data;
    try {
      g = isJson ? _(e, null, 2) : e, c = gY(g, p), data = Buffer.from(c);
    } catch {
      return {
        error: error
      };
    }
    let x = await MXe(u, {
      leafName: J(n, isJson),
      data: data
    });
    if (x === null) return {
      error: error
    };
    let {
      preview: preview,
      hasMore: hasMore
    } = PTe(c, H$);
    return {
      filepath: x.path,
      originalSize: g.length,
      isJson: isJson,
      preview: preview,
      hasMore: hasMore,
      truncatedAtBytes: c === g ? void 0 : p
    };
  }
  if (r === null) return {
    error: error
  };
  await _M(r, o);
  let filepath = _0e(r, n, isJson),
    h,
    y;
  try {
    h = isJson ? _(e, null, 2) : e, y = gY(h, a);
  } catch (p) {
    let error_2 = b(F(p));
    return t(`Failed to persist tool result to ${filepath}: ${error_2}`, {
      level: "error"
    }), {
      error: error_2
    };
  }
  let truncatedAtBytes = y === h ? void 0 : a,
    S = X() && o !== void 0 ? QJ(Y(filepath), ce(filepath)) : void 0;
  if (X() && o !== void 0 && S !== void 0) {
    let p = await o.write(S, y, {
      precondition: {
        type: "ifAbsent"
      },
      mode: 438 & ~process.umask()
    });
    if (!p.ok && p.error.code !== "AlreadyExists") {
      let error_3 = ke(p.error, filepath);
      return t(`Failed to persist tool result to ${filepath}: ${error_3}`, {
        level: "error"
      }), {
        error: error_3
      };
    }
    if (p.ok) t(`Persisted tool result to ${filepath} (${en(y.length)})`);
  } else {
    let p = Dn();
    try {
      await g2n(Y(filepath), p), await UBs(filepath, p), await p.writeExclusive(filepath, y), t(`Persisted tool result to ${filepath} (${en(y.length)})`);
    } catch (g) {
      if (k(g) !== "EEXIST") return t(`Failed to persist tool result to ${filepath}: ${b(F(g))}`, {
        level: "error"
      }), {
        error: b(F(g))
      };
      let c;
      try {
        c = await p.lstat(filepath);
      } catch {
        return {
          error: "tool result path could not be checked; not persisted"
        };
      }
      if (c?.isSymbolicLink) return {
        error: "tool result path is a link; not persisted"
      };
      if (c?.isFile !== !0) return {
        error: "tool result path is not a regular file; not persisted"
      };
      if (c.nlink > 1) return {
        error: "tool result path has another name; not persisted"
      };
    }
  }
  let {
    preview: preview_2,
    hasMore: hasMore_2
  } = PTe(y, H$);
  return {
    filepath: filepath,
    originalSize: h.length,
    isJson: isJson,
    preview: preview_2,
    hasMore: hasMore_2,
    truncatedAtBytes: truncatedAtBytes
  };
}
function Yye(e) {
  return `${Toe}
${Ups(e)}${I7t}`;
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
`;
  }
  return n += `Preview (first ${en(H$)}):
`, n += e.preview, n += e.hasMore ? `
...
` : `
`, n;
}
var me = "1023 bytes";
function Hdo(e, n) {
  if (Array.isArray(e) && e.some(item => !Ra(item) || item.type !== "text")) return null;
  let r = typeof e === "string" ? e : e.flatMap(item => item.type === "text" && "text" in item && typeof item.text === "string" ? [item.text] : []).join(`
`),
    o = en(r.length),
    a = Math.max(0, n - Z(o, me, "").length),
    s = Q(r, PTe(r, a).preview.length);
  if (s.length === r.length) return null;
  return {
    message: Z(o, en(s.length), s),
    originalSize: r.length
  };
}
function Z(e, n, r) {
  return `${obr}
Output too large (${e}). It could not be saved, so only the first ${n} are shown; the rest was dropped. If the tool can page or filter its results, call it again for the part you need.

${r}
${Hps}`;
}
async function Fft(e, n, r, o, a) {
  return Xye(e.mapToolResultToToolResultBlockParam(n, r), e, o, a);
}
async function Xye(e, n, r, o) {
  let a = await _e(e, n.name, r, H9(n.name, n.maxResultSizeChars, n.persistenceThresholdCeiling, n.skipAggregateToolResultBudget === !0), o);
  return M(e.tool_use_id, "kept_in_conversation"), a;
}
function Bps(e) {
  if (!e) return !0;
  if (typeof e === "string") return e.trim() === "";
  if (!Array.isArray(e)) return !1;
  if (e.length === 0) return !0;
  return e.every(item => Ra(item) && item.type === "text" && "text" in item && (typeof item.text !== "string" || item.text.trim() === ""));
}
async function _e(e, n, r, o, a) {
  let content = e.content;
  if (Bps(content)) return l("tengu_tool_empty_result", {
    toolName: On(n)
  }), {
    ...e,
    content: `(${n} completed with no output)`
  };
  if (!content) return e;
  let thresholdUsed = o ?? YJi;
  if (!Wps(content, thresholdUsed)) return e;
  let d = Ug();
  if (!Re(content) && d?.takesTextInline?.(ibr(content)) === !0) return e;
  let h = await Cq(content, e.tool_use_id, r, a);
  if (Rq(h)) {
    if (d !== void 0) {
      let T = Hdo(content, thresholdUsed);
      if (T === null) return e;
      return l("tengu_tool_result_persisted", {
        toolName: On(n),
        originalSizeBytes: T.originalSize,
        persistedSizeBytes: T.message.length,
        estimatedOriginalTokens: Math.ceil(T.originalSize / NSe),
        estimatedPersistedTokens: Math.ceil(T.message.length / NSe),
        thresholdUsed: thresholdUsed,
        stored: !1
      }), M(e.tool_use_id, "cut_not_saved"), {
        ...e,
        content: T.message
      };
    }
    return e;
  }
  let content_2 = Yye(h);
  return l("tengu_tool_result_persisted", {
    toolName: On(n),
    originalSizeBytes: h.originalSize,
    persistedSizeBytes: content_2.length,
    estimatedOriginalTokens: Math.ceil(h.originalSize / NSe),
    estimatedPersistedTokens: Math.ceil(content_2.length / NSe),
    thresholdUsed: thresholdUsed,
    truncatedAtCap: h.truncatedAtBytes !== void 0
  }), M(e.tool_use_id, "saved_as_text"), {
    ...e,
    content: content_2
  };
}
function PTe(preview_3, n) {
  if (preview_3.length <= n) return {
    preview: preview_3,
    hasMore: !1
  };
  let o = preview_3.slice(0, n).lastIndexOf(`
`),
    a = o > n * 0.5 ? o : n;
  return {
    preview: Q(preview_3, a),
    hasMore: !0
  };
}
function Rq(e) {
  return "error" in e;
}
function sbr() {
  return {
    seenIds: new Set(),
    replacements: new Map()
  };
}
function BDi(e) {
  return {
    seenIds: new Set(e.seenIds),
    replacements: new Map(e.replacements)
  };
}
function jDi(e, n) {
  if (!v("tengu_hawthorn_steeple", !1)) return;
  if (e) return $do(e, n ?? []);
  return sbr();
}
function q(e) {
  if (typeof e !== "string") return !1;
  let n = PRr(e);
  return n.startsWith(Toe) || n === $ps;
}
function jps(e) {
  return !!e && !q(e) && !(typeof e === "string" && e.startsWith(obr));
}
function WDi(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type !== "user" || o.isVirtual || !Array.isArray(o.message.content)) continue;
    for (let a of o.message.content) if (a.type === "tool_result" && a.tool_use_id === n) return !a.is_error && jps(a.content);
  }
  return !1;
}
function Wps(e, n) {
  return !ee(e) && ibr(e) > n;
}
function ee(e) {
  return Array.isArray(e) && e.some(item => Ra(item) && (item.type === "image" || item.type === "document"));
}
var ye = 5000;
function Re(e) {
  return (typeof e === "string" ? [e] : Array.isArray(e) ? e.map(item => Ra(item) && item.type === "text" && "text" in item && typeof item.text === "string" ? item.text : "") : []).some(item => {
    let o = 0;
    for (let a = 0; a < item.length; a++) {
      let s = item.charCodeAt(a);
      if (o = s === 32 || s >= 9 && s <= 13 ? 0 : o + 1, o >= ye) return !0;
    }
    return !1;
  });
}
function ibr(e) {
  if (typeof e === "string") return e.length;
  if (!Array.isArray(e)) return 0;
  return e.reduce((acc, item) => acc + (Ra(item) && item.type === "text" && "text" in item && typeof item.text === "string" ? item.text.length : 0), 0);
}
function Te(e) {
  let n = new Map();
  for (let r of e) {
    if (r.type !== "assistant") continue;
    let content_3 = r.message.content;
    if (!Array.isArray(content_3)) continue;
    for (let a of content_3) if (Ra(a) && a.type === "tool_use") n.set(a.id, a.name);
  }
  return n;
}
function Se(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return [];
  return e.message.content.flatMap(item => {
    if (!Ra(item) || item.type !== "tool_result" || !item.content) return [];
    if (q(item.content)) return [];
    if (ee(item.content)) return [];
    return [{
      toolUseId: item.tool_use_id,
      content: item.content,
      size: ibr(item.content)
    }];
  });
}
function te(e) {
  let n = [],
    r = [],
    o = () => {
      if (r.length > 0) n.push(r);
      r = [];
    },
    a = new Set();
  for (let s of e) if (s.type === "user") r.push(...Se(s));else if (s.type === "assistant") {
    if (!a.has(s.message.id)) o(), a.add(s.message.id);
  }
  return o(), n;
}
function Ee(e, n) {
  return e.reduce((acc, item) => {
    let replacement = n.replacements.get(item.toolUseId);
    if (replacement !== void 0) acc.mustReapply.push({
      ...item,
      replacement: replacement
    });else if (n.seenIds.has(item.toolUseId)) acc.frozen.push(item);else acc.fresh.push(item);
    return acc;
  }, {
    mustReapply: [],
    frozen: [],
    fresh: []
  });
}
function Ce(e, n, r) {
  let o = [...e].sort((itemA, itemB) => itemB.size - itemA.size),
    a = [],
    s = n + e.reduce((acc, item) => acc + item.size, 0);
  for (let u of o) {
    if (s <= r) break;
    a.push(u), s -= u.size;
  }
  return a;
}
function we(e, n) {
  let r = ve.keeper();
  return e.map(item => {
    if (item.type !== "user" || !Array.isArray(item.message.content)) return item;
    let content_4 = item.message.content;
    if (!content_4.some(item => Ra(item) && item.type === "tool_result" && n.has(item.tool_use_id))) return item;
    return r(item, {
      ...item,
      message: {
        ...item.message,
        content: content_4.map(item => {
          if (!Ra(item) || item.type !== "tool_result") return item;
          let content_5 = n.get(item.tool_use_id);
          return content_5 === void 0 ? item : {
            ...item,
            content: content_5
          };
        })
      }
    });
  });
}
var ve = new rbr();
async function xe(e, n, r) {
  let o = await Cq(e.content, e.toolUseId, n, r);
  if (Rq(o)) return null;
  return {
    content: Yye(o),
    originalSize: o.originalSize,
    truncatedAtCap: o.truncatedAtBytes !== void 0
  };
}
function zDi(e) {
  let n = new Set();
  for (let r of e) if (!Number.isFinite(r.maxResultSizeChars) || r.skipAggregateToolResultBudget === !0) {
    n.add(r.name);
    for (let o of r.aliases ?? []) n.add(o);
  }
  return n;
}
async function Ae(messages, n, r, o, a = new Set()) {
  let s = te(messages),
    u = a.size > 0 ? Te(messages) : void 0,
    d = c => u !== void 0 && a.has(u.get(c) ?? ""),
    h = YUt,
    y = new Map(),
    T = [],
    reapplied = 0,
    messagesOverBudget = 0;
  for (let c of s) {
    let {
      mustReapply: mustReapply,
      frozen: frozen,
      fresh: fresh
    } = Ee(c, n);
    if (mustReapply.forEach(item => y.set(item.toolUseId, item.replacement)), reapplied += mustReapply.length, fresh.length === 0) {
      c.forEach(item => n.seenIds.add(item.toolUseId));
      continue;
    }
    fresh.filter(item => d(item.toolUseId)).forEach(item => n.seenIds.add(item.toolUseId));
    let U = fresh.filter(item => !d(item.toolUseId)),
      D = frozen.reduce((acc, item) => acc + (d(item.toolUseId) ? 0 : item.size), 0),
      ne = U.reduce((acc, item) => acc + item.size, 0),
      I = D + ne > h ? Ce(U, D, h) : [],
      re = new Set(I.map(item => item.toolUseId));
    if (c.filter(item => !re.has(item.toolUseId)).forEach(item => n.seenIds.add(item.toolUseId)), I.length === 0) continue;
    messagesOverBudget++, T.push(...I);
  }
  if (y.size === 0 && T.length === 0) return {
    messages: messages,
    newlyReplaced: []
  };
  let O = await Promise.all(T.map(async item => [item, await xe(item, r, o)])),
    newlyReplaced = [],
    replacedSizeBytes = 0;
  for (let [c, R] of O) {
    if (n.seenIds.add(c.toolUseId), R === null) continue;
    replacedSizeBytes += c.size, y.set(c.toolUseId, R.content), n.replacements.set(c.toolUseId, R.content), newlyReplaced.push({
      kind: "tool-result",
      toolUseId: c.toolUseId,
      replacement: R.content
    }), l("tengu_tool_result_persisted_message_budget", {
      originalSizeBytes: R.originalSize,
      persistedSizeBytes: R.content.length,
      estimatedOriginalTokens: Math.ceil(R.originalSize / NSe),
      estimatedPersistedTokens: Math.ceil(R.content.length / NSe),
      truncatedAtCap: R.truncatedAtCap
    });
  }
  if (y.size === 0) return {
    messages: messages,
    newlyReplaced: []
  };
  if (newlyReplaced.length > 0) t(`Per-message budget: persisted ${newlyReplaced.length} tool results across ${messagesOverBudget} over-budget message(s), shed ~${en(replacedSizeBytes)}, ${reapplied} re-applied`), l("tengu_message_level_tool_result_budget_enforced", {
    resultsPersisted: newlyReplaced.length,
    messagesOverBudget: messagesOverBudget,
    replacedSizeBytes: replacedSizeBytes,
    reapplied: reapplied
  });
  return {
    messages: we(messages, y),
    newlyReplaced: newlyReplaced
  };
}
async function GDi(e, n, r, o, a, s) {
  if (!n) return e;
  let u = await Ae(e, n, r, s, a);
  if (u.newlyReplaced.length > 0) o?.(u.newlyReplaced);
  return u.messages;
}
function $do(e, n, r) {
  let o = sbr(),
    a = new Set(te(e).flat().map(item => item.toolUseId));
  for (let s of a) o.seenIds.add(s);
  for (let s of n) if (s.kind === "tool-result" && a.has(s.toolUseId)) o.replacements.set(s.toolUseId, s.replacement);
  if (r) {
    for (let [s, u] of r) if (a.has(s) && !o.replacements.has(s)) o.replacements.set(s, u);
  }
  return o;
}
function abr(e, n, r) {
  if (!e) return;
  return $do(n, r, e.replacements);
}
function ke(e, n) {
  let r = Qm(e);
  if (r === void 0) return `storage write failed: ${e.code}`;
  let o = Error("storage write failed");
  return o.code = r, o.path = n, b(o);
}
function b(e) {
  let n = e;
  if (n.code) switch (n.code) {
    case "ENOENT":
      return `Directory not found: ${n.path ?? "unknown path"}`;
    case "EACCES":
      return `Permission denied: ${n.path ?? "unknown path"}`;
    case "ENOSPC":
      return "No space left on device";
    case "EROFS":
      return "Read-only file system";
    case "EMFILE":
      return "Too many open files";
    case "EEXIST":
      return `File already exists: ${n.path ?? "unknown path"}`;
    default:
      return `${n.code}: ${n.message}`;
  }
  return e.message;
}
async function OTe(e, n, r, {
  threshold = QFe,
  storageV5: storageV5
} = {}) {
  if (e.length <= threshold) return e;
  let s = await Cq(e, `hook-${n}-${r}`, z1t(), storageV5);
  if (Rq(s)) {
    if (Ug() !== void 0) return Hdo(e, threshold)?.message ?? e;
    return l("tengu_hook_output_persisted", {
      source: f(r),
      originalSizeBytes: e.length,
      persistedSizeBytes: 0,
      truncatedFallback: !0
    }), `${Q(e, threshold)}

[Hook ${r} truncated at ${threshold} chars \u2014 persist-to-disk failed: ${s.error}]`;
  }
  let u = Yye(s);
  return l("tengu_hook_output_persisted", {
    source: f(r),
    originalSizeBytes: s.originalSize,
    persistedSizeBytes: u.length,
    truncatedFallback: !1,
    truncatedAtCap: s.truncatedAtBytes !== void 0
  }), u;
}
function lbr(e, n) {
  return n.startsWith(Toe) && n.endsWith(I7t) && n !== e;
}
export { Fdo, Fps, rbr, Oce, $Di, UDi, Toe, I7t, obr, Hps, $ps, H9, H$, _0e, Cq, Yye, Ups, Hdo, Fft, Xye, Bps, PTe, Rq, sbr, BDi, jDi, jps, WDi, Wps, ibr, zDi, GDi, $do, abr, OTe, lbr };