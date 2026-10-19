// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nmn } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { On, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { H, k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Fw } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne, Khe } from "B:/~BUN/root/chunk-nggrknsv.js";
import { X9n, I4, aF, N1o, F1o } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { UD, $We, jGs, I3n, WGs, zGs } from "B:/~BUN/root/chunk-qp0344nb.js";
import { w_, uBe } from "B:/~BUN/root/chunk-6vykeeak.js";
import { Ad } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
import { um } from "B:/~BUN/root/chunk-hz8x9zsh.js";
import { basename as K, dirname as z, join as Y } from "path";
var H9 = "<persisted-output>",
  eMt = "</persisted-output>",
  ckr = "<truncated-output>",
  who = "</truncated-output>",
  J = "[Old tool result content cleared]",
  Z = "tengu_velvet_ibis";
function aie(e, n, r = UD, s = !1) {
  if (!Number.isFinite(n)) return n;
  if (s) return Math.min(n, r);
  let o = E(Z, {})?.[e];
  if (typeof o === "number" && Number.isFinite(o) && o > 0) return o;
  return Math.min(n, r);
}
var cPe = 2000,
  error = "tool result was not saved";
function O(e) {
  let n = e.charCodeAt(0);
  if (e.length === 1 && n >= 55296 && n <= 57343) return `%u${n.toString(16).toUpperCase()}`;
  return Array.from(Buffer.from(e), r => `%${r.toString(16).toUpperCase().padStart(2, "0")}`).join("");
}
function V(e) {
  let n = "";
  for (let r of String(e)) {
    let s = /^[A-Za-z0-9_-]$/.test(r) || r === "." && n !== "";
    n += s ? r : O(r);
  }
  if (n === "") return "%";
  return Fw(n) ? O(n.charAt(0)) + n.slice(1) : n;
}
function N(e, n) {
  return `${V(e)}.${n ? "json" : "txt"}`;
}
function uUe(e, n, r) {
  return Y(e, N(n, r));
}
async function F6(e, n, r, s, a = WGs) {
  let isJson = Array.isArray(e);
  if (isJson) {
    if (e.some(item => !Ad(item) || item.type !== "text")) return {
      error: "Cannot persist tool results containing non-text content"
    };
  }
  let l = w_();
  if (l !== void 0) {
    let p = Math.min(a, l.maxBytes),
      g,
      d,
      data;
    try {
      g = isJson ? _(e, null, 2) : e, d = Khe(g, p), data = Buffer.from(d);
    } catch {
      return {
        error: error
      };
    }
    let C = await uBe(l, {
      leafName: N(n, isJson),
      data: data
    });
    if (C === null) return {
      error: error
    };
    let {
      preview: preview,
      hasMore: hasMore
    } = oct(d, cPe);
    return {
      filepath: C.path,
      originalSize: g.length,
      isJson: isJson,
      preview: preview,
      hasMore: hasMore,
      truncatedAtBytes: d === g ? void 0 : p
    };
  }
  if (r === null) return {
    error: error
  };
  await aF(r, s);
  let filepath = uUe(r, n, isJson),
    h,
    f;
  try {
    h = isJson ? _(e, null, 2) : e, f = Khe(h, a);
  } catch (p) {
    let error_2 = I(H(p));
    return t(`Failed to persist tool result to ${filepath}: ${error_2}`, {
      level: "error"
    }), {
      error: error_2
    };
  }
  let truncatedAtBytes = f === h ? void 0 : a,
    S = W() && s !== void 0 ? I4(z(filepath), K(filepath)) : void 0;
  if (W() && s !== void 0 && S !== void 0) {
    let p = await s.write(S, f, {
      precondition: {
        type: "ifAbsent"
      },
      mode: 438 & ~process.umask()
    });
    if (!p.ok && p.error.code !== "AlreadyExists") {
      let error_3 = le(p.error, filepath);
      return t(`Failed to persist tool result to ${filepath}: ${error_3}`, {
        level: "error"
      }), {
        error: error_3
      };
    }
    if (p.ok) t(`Persisted tool result to ${filepath} (${Zt(f.length)})`);
  } else {
    let p = gn();
    try {
      await N1o(z(filepath), p), await F1o(filepath, p), await p.writeExclusive(filepath, f), t(`Persisted tool result to ${filepath} (${Zt(f.length)})`);
    } catch (g) {
      if (k(g) !== "EEXIST") return t(`Failed to persist tool result to ${filepath}: ${I(H(g))}`, {
        level: "error"
      }), {
        error: I(H(g))
      };
      let d;
      try {
        d = await p.lstat(filepath);
      } catch {
        return {
          error: "tool result path could not be checked; not persisted"
        };
      }
      if (d?.isSymbolicLink) return {
        error: "tool result path is a link; not persisted"
      };
      if (d?.isFile !== !0) return {
        error: "tool result path is not a regular file; not persisted"
      };
      if (d.nlink > 1) return {
        error: "tool result path has another name; not persisted"
      };
    }
  }
  let {
    preview: preview_2,
    hasMore: hasMore_2
  } = oct(f, cPe);
  return {
    filepath: filepath,
    originalSize: h.length,
    isJson: isJson,
    preview: preview_2,
    hasMore: hasMore_2,
    truncatedAtBytes: truncatedAtBytes
  };
}
function uPe(e) {
  let n = `${H9}
`;
  return n += e.truncatedAtBytes === void 0 ? `Output too large (${Zt(e.originalSize)}). Full output saved to: ${e.filepath}

` : `Output exceeded the ${Zt(e.truncatedAtBytes)} persist limit; only the first ${Zt(e.truncatedAtBytes)} were saved to: ${e.filepath}

`, n += `Preview (first ${Zt(cPe)}):
`, n += e.preview, n += e.hasMore ? `
...
` : `
`, n += eMt, n;
}
var q = "1023 bytes";
function ukr(e, n) {
  if (Array.isArray(e) && e.some(item => !Ad(item) || item.type !== "text")) return null;
  let r = typeof e === "string" ? e : e.flatMap(item => item.type === "text" && "text" in item && typeof item.text === "string" ? [item.text] : []).join(`
`),
    s = Zt(r.length),
    a = Math.max(0, n - L(s, q, "").length),
    o = ne(r, oct(r, a).preview.length);
  if (o.length === r.length) return null;
  return {
    message: L(s, Zt(o.length), o),
    originalSize: r.length
  };
}
function L(e, n, r) {
  return `${ckr}
Output too large (${e}). It could not be saved, so only the first ${n} are shown; the rest was dropped. If the tool can page or filter its results, call it again for the part you need.

${r}
${who}`;
}
async function O3e(e, n, r, s, a) {
  return pPe(e.mapToolResultToToolResultBlockParam(n, r), e, s, a);
}
async function pPe(e, n, r, s) {
  return Q(e, n.name, r, aie(n.name, n.maxResultSizeChars, n.persistenceThresholdCeiling, n.skipAggregateToolResultBudget === !0), s);
}
function vho(e) {
  if (!e) return !0;
  if (typeof e === "string") return e.trim() === "";
  if (!Array.isArray(e)) return !1;
  if (e.length === 0) return !0;
  return e.every(item => Ad(item) && item.type === "text" && "text" in item && (typeof item.text !== "string" || item.text.trim() === ""));
}
async function Q(e, n, r, s, a) {
  let content = e.content;
  if (vho(content)) return i("tengu_tool_empty_result", {
    toolName: On(n)
  }), {
    ...e,
    content: `(${n} completed with no output)`
  };
  if (!content) return e;
  let thresholdUsed = s ?? jGs;
  if (!kho(content, thresholdUsed)) return e;
  let u = await F6(content, e.tool_use_id, r, a);
  if (H6(u)) {
    if (w_() !== void 0) {
      let f = ukr(content, thresholdUsed);
      if (f === null) return e;
      return i("tengu_tool_result_persisted", {
        toolName: On(n),
        originalSizeBytes: f.originalSize,
        persistedSizeBytes: f.message.length,
        estimatedOriginalTokens: Math.ceil(f.originalSize / $We),
        estimatedPersistedTokens: Math.ceil(f.message.length / $We),
        thresholdUsed: thresholdUsed,
        stored: !1
      }), {
        ...e,
        content: f.message
      };
    }
    return e;
  }
  let content_2 = uPe(u);
  return i("tengu_tool_result_persisted", {
    toolName: On(n),
    originalSizeBytes: u.originalSize,
    persistedSizeBytes: content_2.length,
    estimatedOriginalTokens: Math.ceil(u.originalSize / $We),
    estimatedPersistedTokens: Math.ceil(content_2.length / $We),
    thresholdUsed: thresholdUsed,
    truncatedAtCap: u.truncatedAtBytes !== void 0
  }), {
    ...e,
    content: content_2
  };
}
function oct(preview_3, n) {
  if (preview_3.length <= n) return {
    preview: preview_3,
    hasMore: !1
  };
  let s = preview_3.slice(0, n).lastIndexOf(`
`),
    a = s > n * 0.5 ? s : n;
  return {
    preview: preview_3.slice(0, a),
    hasMore: !0
  };
}
function H6(e) {
  return "error" in e;
}
function nUn() {
  return {
    seenIds: new Set(),
    replacements: new Map()
  };
}
function Uvs(e) {
  return {
    seenIds: new Set(e.seenIds),
    replacements: new Map(e.replacements)
  };
}
function Bvs(e, n) {
  if (!E("tengu_hawthorn_steeple", !1)) return;
  if (e) return pkr(e, n ?? []);
  return nUn();
}
function v(e) {
  if (typeof e !== "string") return !1;
  let n = e.startsWith(Nmn) ? e.slice(Nmn.length) : e;
  return n.startsWith(H9) || n === J;
}
function jvs(e, n) {
  for (let r = e.length - 1; r >= 0; r--) {
    let s = e[r];
    if (s.type !== "user" || s.isVirtual || !Array.isArray(s.message.content)) continue;
    for (let a of s.message.content) if (a.type === "tool_result" && a.tool_use_id === n) {
      let {
        content: content_3
      } = a;
      return !a.is_error && !!content_3 && !v(content_3) && !(typeof content_3 === "string" && content_3.startsWith(ckr));
    }
  }
  return !1;
}
function kho(e, n) {
  return !F(e) && D(e) > n;
}
function F(e) {
  return Array.isArray(e) && e.some(item => Ad(item) && (item.type === "image" || item.type === "document"));
}
function D(e) {
  if (typeof e === "string") return e.length;
  if (!Array.isArray(e)) return 0;
  return e.reduce((acc, item) => acc + (Ad(item) && item.type === "text" && "text" in item && typeof item.text === "string" ? item.text.length : 0), 0);
}
function ee(e) {
  let n = new Map();
  for (let r of e) {
    if (r.type !== "assistant") continue;
    let content_4 = r.message.content;
    if (!Array.isArray(content_4)) continue;
    for (let a of content_4) if (Ad(a) && a.type === "tool_use") n.set(a.id, a.name);
  }
  return n;
}
function te(e) {
  if (e.type !== "user" || !Array.isArray(e.message.content)) return [];
  return e.message.content.flatMap(item => {
    if (!Ad(item) || item.type !== "tool_result" || !item.content) return [];
    if (v(item.content)) return [];
    if (F(item.content)) return [];
    return [{
      toolUseId: item.tool_use_id,
      content: item.content,
      size: D(item.content)
    }];
  });
}
function G(e) {
  let n = [],
    r = [],
    s = () => {
      if (r.length > 0) n.push(r);
      r = [];
    },
    a = new Set();
  for (let o of e) if (o.type === "user") r.push(...te(o));else if (o.type === "assistant") {
    if (!a.has(o.message.id)) s(), a.add(o.message.id);
  }
  return s(), n;
}
function re(e, n) {
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
function oe(e, n, r) {
  let s = [...e].sort((itemA, itemB) => itemB.size - itemA.size),
    a = [],
    o = n + e.reduce((acc, item) => acc + item.size, 0);
  for (let l of s) {
    if (o <= r) break;
    a.push(l), o -= l.size;
  }
  return a;
}
function se(e, n) {
  return e.map(item => {
    if (item.type !== "user" || !Array.isArray(item.message.content)) return item;
    let content_5 = item.message.content;
    if (!content_5.some(item => Ad(item) && item.type === "tool_result" && n.has(item.tool_use_id))) return item;
    return {
      ...item,
      message: {
        ...item.message,
        content: content_5.map(item => {
          if (!Ad(item) || item.type !== "tool_result") return item;
          let content_6 = n.get(item.tool_use_id);
          return content_6 === void 0 ? item : {
            ...item,
            content: content_6
          };
        })
      }
    };
  });
}
async function ie(e, n, r) {
  let s = await F6(e.content, e.toolUseId, n, r);
  if (H6(s)) return null;
  return {
    content: uPe(s),
    originalSize: s.originalSize,
    truncatedAtCap: s.truncatedAtBytes !== void 0
  };
}
function Wvs(e) {
  let n = new Set();
  for (let r of e) if (!Number.isFinite(r.maxResultSizeChars) || r.skipAggregateToolResultBudget === !0) {
    n.add(r.name);
    for (let s of r.aliases ?? []) n.add(s);
  }
  return n;
}
async function ae(messages, n, r, s, a = new Set()) {
  let o = G(messages),
    l = a.size > 0 ? ee(messages) : void 0,
    u = d => l !== void 0 && a.has(l.get(d) ?? ""),
    h = I3n,
    f = new Map(),
    T = [],
    reapplied = 0,
    messagesOverBudget = 0;
  for (let d of o) {
    let {
      mustReapply: mustReapply,
      frozen: frozen,
      fresh: fresh
    } = re(d, n);
    if (mustReapply.forEach(item => f.set(item.toolUseId, item.replacement)), reapplied += mustReapply.length, fresh.length === 0) {
      d.forEach(item => n.seenIds.add(item.toolUseId));
      continue;
    }
    fresh.filter(item => u(item.toolUseId)).forEach(item => n.seenIds.add(item.toolUseId));
    let w = fresh.filter(item => !u(item.toolUseId)),
      b = frozen.reduce((acc, item) => acc + (u(item.toolUseId) ? 0 : item.size), 0),
      j = w.reduce((acc, item) => acc + item.size, 0),
      B = b + j > h ? oe(w, b, h) : [],
      X = new Set(B.map(item => item.toolUseId));
    if (d.filter(item => !X.has(item.toolUseId)).forEach(item => n.seenIds.add(item.toolUseId)), B.length === 0) continue;
    messagesOverBudget++, T.push(...B);
  }
  if (f.size === 0 && T.length === 0) return {
    messages: messages,
    newlyReplaced: []
  };
  let P = await Promise.all(T.map(async item => [item, await ie(item, r, s)])),
    newlyReplaced = [],
    replacedSizeBytes = 0;
  for (let [d, R] of P) {
    if (n.seenIds.add(d.toolUseId), R === null) continue;
    replacedSizeBytes += d.size, f.set(d.toolUseId, R.content), n.replacements.set(d.toolUseId, R.content), newlyReplaced.push({
      kind: "tool-result",
      toolUseId: d.toolUseId,
      replacement: R.content
    }), i("tengu_tool_result_persisted_message_budget", {
      originalSizeBytes: R.originalSize,
      persistedSizeBytes: R.content.length,
      estimatedOriginalTokens: Math.ceil(R.originalSize / $We),
      estimatedPersistedTokens: Math.ceil(R.content.length / $We),
      truncatedAtCap: R.truncatedAtCap
    });
  }
  if (f.size === 0) return {
    messages: messages,
    newlyReplaced: []
  };
  if (newlyReplaced.length > 0) t(`Per-message budget: persisted ${newlyReplaced.length} tool results across ${messagesOverBudget} over-budget message(s), shed ~${Zt(replacedSizeBytes)}, ${reapplied} re-applied`), i("tengu_message_level_tool_result_budget_enforced", {
    resultsPersisted: newlyReplaced.length,
    messagesOverBudget: messagesOverBudget,
    replacedSizeBytes: replacedSizeBytes,
    reapplied: reapplied
  });
  return {
    messages: se(messages, f),
    newlyReplaced: newlyReplaced
  };
}
async function zvs(e, n, r, s, a, o) {
  if (!n) return e;
  let l = await ae(e, n, r, o, a);
  if (l.newlyReplaced.length > 0) s?.(l.newlyReplaced);
  return l.messages;
}
function pkr(e, n, r) {
  let s = nUn(),
    a = new Set(G(e).flat().map(item => item.toolUseId));
  for (let o of a) s.seenIds.add(o);
  for (let o of n) if (o.kind === "tool-result" && a.has(o.toolUseId)) s.replacements.set(o.toolUseId, o.replacement);
  if (r) {
    for (let [o, l] of r) if (a.has(o) && !s.replacements.has(o)) s.replacements.set(o, l);
  }
  return s;
}
function rUn(e, n, r) {
  if (!e) return;
  return pkr(n, r, e.replacements);
}
function le(e, n) {
  let r = um(e);
  if (r === void 0) return `storage write failed: ${e.code}`;
  let s = Error("storage write failed");
  return s.code = r, s.path = n, I(s);
}
function I(e) {
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
async function Kpe(e, n, r, {
  threshold = zGs,
  storageV5: storageV5
} = {}) {
  if (e.length <= threshold) return e;
  let o = await F6(e, `hook-${n}-${r}`, X9n(), storageV5);
  if (H6(o)) {
    if (w_() !== void 0) return ukr(e, threshold)?.message ?? e;
    return i("tengu_hook_output_persisted", {
      source: c(r),
      originalSizeBytes: e.length,
      persistedSizeBytes: 0,
      truncatedFallback: !0
    }), `${ne(e, threshold)}

[Hook ${r} truncated at ${threshold} chars \u2014 persist-to-disk failed: ${o.error}]`;
  }
  let l = uPe(o);
  return i("tengu_hook_output_persisted", {
    source: c(r),
    originalSizeBytes: o.originalSize,
    persistedSizeBytes: l.length,
    truncatedFallback: !1,
    truncatedAtCap: o.truncatedAtBytes !== void 0
  }), l;
}
function oUn(e, n) {
  return n.startsWith(H9) && n.endsWith(eMt) && n !== e;
}
var rct = "https://claude.com/claude-code",
  $vs = "https://claude.ai";
function ue(e, n) {
  return e?.includes("_staging_") === !0 || n?.includes("staging") === !0;
}
function dkr(e, n) {
  return e?.includes("_local_") === !0 || n?.includes("localhost") === !0;
}
function ZIt(e, n) {
  if (dkr(e, n)) return "http://localhost:4000";
  if (ue(e, n)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}
function lc(e, n, r) {
  let {
      toCompatSessionId: toCompatSessionId
    } = import.meta.require("B:/~BUN/root/chunk-y3dagg1g.js"),
    a = toCompatSessionId(e),
    l = `${ZIt(a, n)}/code/${a}`;
  return r ? `${l}?${new URLSearchParams(r)}` : l;
}
export { rct, $vs, dkr, ZIt, lc, H9, eMt, ckr, who, aie, cPe, uUe, F6, uPe, ukr, O3e, pPe, vho, oct, H6, nUn, Uvs, Bvs, jvs, kho, Wvs, zvs, pkr, rUn, Kpe, oUn };