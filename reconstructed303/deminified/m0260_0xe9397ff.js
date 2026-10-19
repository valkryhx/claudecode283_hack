// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { L, dS, at, j, ms } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { x, H, d, of } from "B:/~BUN/root/chunk-3aez4b53.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Eh, $p, _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pf, zv } from "B:/~BUN/root/chunk-cw2ph5fw.js";
import { j2s } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { Pl, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { g, m, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Fjo, oo, jh, bmn, Tu, Dl, er } from "B:/~BUN/root/chunk-k9zm82w3.js";
import { Ct } from "B:/~BUN/root/chunk-28dw3zbk.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { Ix, BS, _ge, bge, hJ, kle, mNr, Ce, ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { xe } from "B:/~BUN/root/chunk-8pmnanyd.js";
import { Ti } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { Da } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { Wo } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { Tx } from "B:/~BUN/root/chunk-7ybsx93y.js";
import { OPo } from "B:/~BUN/root/chunk-2ppwmg0p.js";
import { Uve } from "B:/~BUN/root/chunk-jj7se8bh.js";
import { N8e } from "B:/~BUN/root/chunk-6m0qcv81.js";
import { $X } from "B:/~BUN/root/chunk-6n2cf80v.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
import { o, M, T, u, Jc } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { Zt } from "B:/~BUN/root/chunk-ekswf6ps.js";
class ImageSizeError extends Error {
  constructor(e, n) {
    let r,
      s = e[0];
    if (e.length === 1 && s) r = `Image base64 size (${Zt(s.size)}) exceeds API limit (${Zt(n)}). Please resize the image before sending.`;else r = `${e.length} images exceed the API limit (${Zt(n)}): ` + e.map(item => `Image ${item.index}: ${Zt(item.size)}`).join(", ") + ". Please resize these images before sending.";
    super(r);
    this.name = "ImageSizeError";
  }
}
function $8e(e) {
  if (!N(e) || !("source" in e)) return !1;
  let source = e.source;
  if (!N(source)) return !1;
  if (!("type" in source) || source.type !== "base64") return !1;
  return "data" in source && typeof source.data === "string";
}
function qDt(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "image") return !1;
  return $8e(e);
}
function Ge(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "tool_result") return !1;
  return "content" in e && Array.isArray(e.content);
}
function _e(e, index, max_bytes, s) {
  let a = e.source.data.length;
  if (a > max_bytes) i("tengu_image_api_validation_failed", {
    base64_size_bytes: a,
    max_bytes: max_bytes
  }), s.push({
    index: index,
    size: a
  });
}
function Jzn(e, n) {
  let r = [],
    s = 0;
  for (let a of e) {
    if (typeof a !== "object" || a === null) continue;
    if (!("type" in a) || a.type !== "user") continue;
    if (!("message" in a) || typeof a.message !== "object" || a.message === null) continue;
    let y = a.message;
    if (!("content" in y) || !Array.isArray(y.content)) continue;
    for (let h of y.content) {
      if (qDt(h)) {
        _e(h, ++s, n, r);
        continue;
      }
      if (Ge(h)) {
        for (let b of h.content) if (qDt(b)) _e(b, ++s, n, r);
      }
    }
  }
  if (r.length > 0) throw new ImageSizeError(r, n);
}
import { types as V } from "util";
var ye = () => !1;
function NMs(e) {
  ye = e;
}
function Qzn() {
  try {
    return ye();
  } catch (error) {
    return l(error), !1;
  }
}
var content = "[account memory text removed from this conversation]",
  Se = {
    top: {
      plain: new Set(["path", "path_prefix", "cursor", "include_preview", "if_version", "source_item", "name"]),
      text: new Set(["old_str", "new_str", "content", "instruction", "query"])
    },
    op: {
      plain: new Set(["op", "path", "if_version"]),
      text: new Set(["old_str", "new_str", "content"])
    }
  },
  He = new Set(["path", "path_prefix", "cursor", "source_item", "name"]);
function Q(e, n) {
  return $X(e, n, "history");
}
var weakMap = new WeakMap();
function be(e) {
  return e.type === "attachment" && e.attachment.type === "cowork_memory_context" && e.attachment.content === null && e.attachment.anchor !== !0;
}
function GEo(messages, n = Qzn(), r) {
  let s = messages.findLastIndex(be),
    a = n ? messages.length : s;
  if (a < 0) return {
    messages: messages,
    epoch: void 0
  };
  let y = we(messages),
    h = new Set(),
    b = new Set(),
    messages_2 = [],
    E = 0,
    I,
    w = S => {
      E++, I = S.uuid;
    };
  return messages.forEach((item, index) => {
    if (index >= a || index === s) {
      messages_2.push(item);
      return;
    }
    if (item.type === "attachment" && (item.attachment.type === "cowork_memory_context" && item.attachment.anchor !== !0 || item.attachment.type === "account_memory_recall")) {
      w(item);
      return;
    }
    if (item.type === "assistant" && Array.isArray(item.message.content)) {
      let R = new Map();
      for (let P of item.message.content) {
        if (P.type !== "tool_use" || !Q(P.name, r)) continue;
        let input = Arn(P.input),
          q = y.has(P.id);
        if (q && input === P.input) continue;
        R.set(P.id, {
          input: input,
          blankResult: !q
        });
      }
      if (R.size === 0) {
        messages_2.push(item);
        return;
      }
      for (let [P, {
        blankResult: blankResult
      }] of R) if (b.add(P), blankResult) h.add(P);
      w(item), messages_2.push({
        ...item,
        ...(Dn(item.wireToolInputs) && {
          wireToolInputs: Ye(item.wireToolInputs, b)
        }),
        message: {
          ...item.message,
          content: item.message.content.map(item => item.type === "tool_use" && R.has(item.id) ? {
            ...item,
            input: R.get(item.id).input
          } : item)
        }
      });
      return;
    }
    if (item.type === "user" && h.size > 0 && Array.isArray(item.message.content) && item.message.content.some(item => item.type === "tool_result" && h.has(item.tool_use_id))) {
      w(item), messages_2.push({
        ...item,
        message: {
          ...item.message,
          content: item.message.content.map(item => item.type === "tool_result" && h.has(item.tool_use_id) ? {
            ...item,
            content: content
          } : item)
        }
      });
      return;
    }
    messages_2.push(item);
  }), E === 0 ? {
    messages: messages,
    epoch: void 0
  } : {
    messages: messages_2,
    epoch: `${E}:${I}`
  };
}
function FMs(e, n) {
  let r = we(e);
  for (let s = e.length - 1; s >= 0; s--) {
    let a = e[s];
    if (be(a)) return !1;
    if (a.type === "assistant" && Array.isArray(a.message.content) && a.message.content.some(item => item.type === "tool_use" && Q(item.name, n) && (!r.has(item.id) || Arn(item.input) !== item.input))) return !0;
  }
  return !1;
}
function VEo(e) {
  let n = [],
    r = (s, a) => {
      if (typeof s !== "object" || s === null || V.isProxy(s)) return;
      for (let [y, h] of Object.entries(s)) if (Se[a].text.has(y) && typeof h === "string") n.push(h);else if (a === "top" && y === "ops" && Array.isArray(h)) for (let b of h) r(b, "op");
    };
  return r(e, "top"), n;
}
function HMs(e, n) {
  let r = [],
    s = new Set();
  for (let a of e) if (a.type === "assistant" && Array.isArray(a.message.content)) {
    for (let y of a.message.content) if (y.type === "tool_use" && Q(y.name, n)) s.add(y.id), r.push(...VEo(y.input));
  } else if (a.type === "user" && s.size > 0 && Array.isArray(a.message.content)) for (let y of a.message.content) {
    if (y.type !== "tool_result" || !s.has(y.tool_use_id)) continue;
    if (typeof y.content === "string") r.push(y.content);else if (Array.isArray(y.content)) {
      for (let h of y.content) if (h.type === "text") r.push(h.text);
    }
  }
  return r;
}
function we(e) {
  let n = new Set();
  for (let r of e) {
    if (r.type !== "user" || r.toolDenialKind === void 0 || r.toolResultRemedy?.kind !== "memory_paused" || !Array.isArray(r.message.content)) continue;
    let s = r.message.content.filter(item => item.type === "tool_result");
    if (s.length === 1) n.add(s[0].tool_use_id);
  }
  return n;
}
function KDt(e, n, r) {
  return GEo(e, n, r).messages;
}
var $e = 32,
  Ve = Object.freeze({
    content: content
  });
function B(content_2) {
  return content_2 === content ? Ve : Object.freeze({
    content: content_2
  });
}
function Arn(e, n = 0, r = content, s = !1) {
  if (typeof e === "function") return B(r);
  if (typeof e === "string" || V.isStringObject(e)) return n === 0 ? B(r) : r;
  if (typeof e !== "object" || e === null) return e;
  if (V.isProxy(e) || n > 2) return B(r);
  let a = zv(e);
  if (a === Pf) return B(r);
  if (a !== void 0) return a.map(item => Arn(item, n + 1, r, s));
  let y;
  try {
    y = Object.keys(e);
  } catch {
    return B(r);
  }
  if (y.length > $e) return B(r);
  let h = Object.getOwnPropertyNames(e).length !== y.length || Object.getOwnPropertySymbols(e).length > 0,
    b = n === 0 ? "top" : "op",
    v = [],
    E = !1;
  for (let S of y) {
    let A = Object.getOwnPropertyDescriptor(e, S);
    if (A === void 0 || !("value" in A) || typeof A.value === "function") {
      E = !0;
      continue;
    }
    let R = We(b, S, A.value, n, r, s);
    if (R === Te) {
      E = !0;
      continue;
    }
    if (R instanceof Z) {
      E ||= !R.pristine, v.push([S, R.strings]);
      continue;
    }
    E ||= R !== A.value, v.push([S, R]);
  }
  let I = Object.getPrototypeOf(e);
  if (n === 0 && !E && !h && (I === Object.prototype || I === null) && Object.getOwnPropertyNames(e).length === y.length && Object.getOwnPropertySymbols(e).length === 0) return e;
  let w = {};
  for (let [S, value] of v) Object.defineProperty(w, S, {
    value: value,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
  return w;
}
var ze = new Set(["append", "str_replace", "delete"]),
  Te = Symbol("dropped");
class Z {
  strings;
  pristine;
  constructor(e, n) {
    this.strings = e;
    this.pristine = n;
  }
}
function We(e, n, r, s, a, y) {
  let h = Se[e];
  if (h.plain.has(n)) {
    let b = y && He.has(n);
    if (n === "op" ? typeof r === "string" && ze.has(r) : r === null || typeof r === "boolean" || n !== "include_preview" && (typeof r === "string" || typeof r === "number")) return b && (typeof r === "string" || typeof r === "number") ? a : r;
    if (e === "top" && n === "path" && typeof r === "object" && r !== null) return qe(r, a, b);
    return a;
  }
  if (h.text.has(n)) return a;
  if (e === "top" && n === "ops") return !V.isProxy(r) && Array.isArray(r) ? Arn(r, s + 1, a, y) : a;
  return Te;
}
function qe(e, n, r) {
  if (V.isProxy(e)) return n;
  let s = Object.getOwnPropertyNames(e),
    a = Object.getPrototypeOf(e) === Array.prototype && Object.getOwnPropertySymbols(e).length === 0 && Array.isArray(e) && s.length === e.length + 1 && s.every(item => {
      if (item === "length") return !0;
      let v = Object.getOwnPropertyDescriptor(e, item);
      return /^(?:0|[1-9]\d*)$/u.test(item) && Number(item) < e.length && v !== void 0 && "value" in v;
    }),
    y = zv(e);
  if (!Array.isArray(y)) return n;
  let h = [];
  for (let b of y) {
    if (typeof b !== "string") return n;
    h.push(r ? n : b);
  }
  return new Z(h, a && !r);
}
function Ye(e, n) {
  let r = _(Object.keys(e).filter(item => n.has(item)).sort()),
    s = weakMap.get(e);
  if (s === void 0) s = new Map(), weakMap.set(e, s);
  let a = s.get(r);
  if (a === void 0) a = Da(e, (y, h) => n.has(h)), s.set(r, a);
  return a;
}
var Je = 64;
function RMs(e) {
  let n = k();
  if (n.sessionId !== void 0 && n.sessionId !== e.sessionId) n.held.clear(), n.settled.length = 0;
  n.sessionId = e.sessionId, n.reporter = e;
}
function zEo(e) {
  let n = k();
  if (n.reporter?.owner === e) n.reporter = void 0;
}
function AMs(e, n) {
  let r = e.toLowerCase(),
    {
      held: held,
      settled: settled
    } = k();
  if (!held.has(r)) held.set(r, {
    phase: "claimed",
    withheld: !1
  });
  let y = settled.indexOf(r);
  if (y !== -1) settled.splice(y, 1);
  let h;
  try {
    h = n();
  } catch (error) {
    throw ee(r), error;
  }
  if (h instanceof Promise) return h.finally(() => ee(r));
  return ee(r), h;
}
function xMs(e) {
  let n = k().held.get(e.toLowerCase());
  if (n === void 0) return !1;
  return n.withheld = !0, !0;
}
function Ke(e) {
  return k().held.has(e.toLowerCase());
}
function Xe(e) {
  return k().settled.includes(e.toLowerCase());
}
function Qe(e) {
  return e.payload.type === "user" && typeof e.processing_at === "string";
}
function PMs(e) {
  let n = !1;
  if (Ke(e.event_id)) n = "redelivered_in_flight";else if (Xe(e.event_id)) n = "redelivered_settled";else if (Qe(e)) n = "redelivered_after_start";
  if (n !== !1) p("bridge_read_receipt", n);
  return n;
}
function OMs(e) {
  U("queued_note_threw", () => {
    let n = e === void 0 ? void 0 : k().held.get(e.toLowerCase());
    if (n !== void 0) n.phase = "queued";
  });
}
function ee(e) {
  U("settle_threw", () => {
    let n = e.toLowerCase(),
      r = k().held.get(n);
    if (r?.phase === "claimed") te(n, r);
  });
}
function Ee(e) {
  U("settle_threw", () => {
    let n = e.toLowerCase(),
      r = k().held.get(n);
    if (r !== void 0 && r.phase !== "read") te(n, r);
  });
}
function IMs(e) {
  for (let {
    uuid: uuid
  } of e) if (uuid !== void 0) Ee(uuid);
}
function F8e(e) {
  U("read_note_threw", () => {
    let {
      held: held_2
    } = k();
    if (held_2.size === 0) return;
    for (let {
      uuid: uuid_2
    } of e) {
      let s = uuid_2?.toLowerCase(),
        a = s === void 0 ? void 0 : held_2.get(s);
      if (s === void 0 || a === void 0 || a.phase === "read") continue;
      if (a.phase = "read", a.withheld) X(s, "processing"), g("bridge_read_receipt");
    }
  });
}
function MMs() {
  U("settle_threw", () => {
    for (let [e, n] of k().held) if (n.phase === "read") te(e, n);
  });
}
function DMs() {
  U("resend_threw", () => {
    let {
      held: held_3,
      settled: settled_2
    } = k();
    for (let [r, s] of held_3) if (s.phase === "read" && s.withheld) X(r, "processing");
    for (let r of settled_2) X(r, "processed");
  });
}
function LMs(e) {
  let onCommandLifecycle = e.onCommandLifecycle;
  e.onCommandLifecycle = (r, s) => {
    if (onCommandLifecycle?.(r, s), s === "cancelled" || s === "refused") Ee(r);
  };
}
function k() {
  return ms(Fjo).inboundReadReceipts;
}
function te(e, n) {
  let {
    held: held_4,
    settled: settled_3
  } = k();
  if (held_4.delete(e), !n.withheld) return;
  if (settled_3.push(e), settled_3.length > Je) settled_3.shift();
  X(e, "processed");
}
function X(e, n) {
  U("report_threw", () => {
    k().reporter?.report(e, n);
  });
}
function U(e, n) {
  try {
    n();
  } catch (error) {
    m("bridge_read_receipt", e), l(error);
  }
}
class U8e {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static of(e) {
    return new U8e(JSON.stringify(e));
  }
  toJSON() {
    return JSON.parse(this.#e);
  }
}
var Ze = new Set(["content", "_meta", "structuredContent", "structuredContentOmitted", "resourceLinks"]);
function qEo(e, n) {
  if (n.media !== !0) return e;
  if (e instanceof U8e) {
    let s = e.toJSON(),
      a = qEo(s, n);
    return a === s ? e : U8e.of(a);
  }
  if (!N(e)) return e;
  let file = e.file;
  if (N(file) && (e.type === "image" || e.type === "pdf") && typeof file.base64 === "string" && file.base64 !== "") return {
    ...e,
    file: {
      ...file,
      base64: ""
    }
  };
  return e;
}
function $Ms(e, n, r) {
  if (r.mcp_images !== !0) return e;
  let s = h => ve(h, n, (b, v) => b === v ? "" : b);
  if (!(e instanceof U8e)) return s(e);
  let a = e.toJSON(),
    y = s(a);
  return y === a ? e : U8e.of(y);
}
function xrn(e, n) {
  return ve(e, n, (r, s) => r === "" ? s : r);
}
function Prn(e) {
  if (!N(e) || e.type !== "user") return e;
  let toolUseResult = xrn(e.toolUseResult, e.message);
  return toolUseResult === e.toolUseResult ? e : {
    ...e,
    toolUseResult: toolUseResult
  };
}
function ve(e, n, r) {
  let s = N(e) && Object.keys(e).every(item => Ze.has(item)),
    a = s ? e.content : e,
    y = N(n) ? n.content : void 0;
  if (!Array.isArray(a) || !Array.isArray(y)) return e;
  let [h, ...b] = y.filter(item => N(item) && item.type === "tool_result");
  if (b.length > 0 || !N8e(h) || h.content.length !== a.length) return e;
  let v = !1,
    content_3 = a.map((item, index) => {
      let S = h.content[index];
      if (!qDt(item) || !qDt(S)) return item;
      let data = r(item.source.data, S.source.data);
      if (data === item.source.data) return item;
      return v = !0, {
        ...item,
        source: {
          ...item.source,
          data: data
        }
      };
    });
  if (!v) return e;
  return s ? {
    ...e,
    content: content_3
  } : content_3;
}
var et = new Set(["user", "assistant", "attachment", "system"]);
function KAr(e) {
  return N(e) && typeof e.type === "string" && et.has(e.type);
}
var Ie = ["cwd", "gitBranch", "version", "userType", "entrypoint", "promptId"],
  tt = [...Ie, "requestId"];
function nt(e) {
  let n = e.message;
  return e.type === "assistant" && N(n) && typeof n.id === "string" && n.id.length > 0;
}
function UMs(e) {
  if (!KAr(e)) return e;
  let n = nt(e) ? tt : Ie,
    r;
  for (let s of n) if (s in e) r ??= {
    ...e
  }, delete r[s];
  return r ?? e;
}
function Zzn(e, n) {
  if (!KAr(e)) return e;
  let r;
  for (let [s, a] of Object.entries(n)) if (a !== void 0 && e[s] === void 0) r ??= {
    ...e
  }, r[s] = a;
  return r ?? e;
}
function eGn(e) {
  let n = [],
    r = 0;
  while (r < e.length) {
    let s = e[r];
    if (s.type !== "assistant" || s.resumedFromIncompleteThinking !== !0) {
      r++;
      continue;
    }
    let fromIdx = r,
      y = r - 1;
    for (;;) {
      while (y >= 0 && dS(e[y])) y--;
      let E = y >= 0 ? e[y] : void 0;
      if (E?.type !== "assistant") break;
      let I = E.message.id,
        w = y;
      while (y >= 0) {
        let A = e[y];
        if (A.type === "assistant") {
          if (A.message.id === I) w = y, y--;else break;
        } else if (dS(A)) y--;else {
          let R = y;
          while (R >= 0 && (e[R].type !== "assistant" || dS(e[R]))) R--;
          let P = R >= 0 ? e[R] : void 0;
          if (P?.type === "assistant" && P.message.id === I) w = R, y = R - 1;else break;
        }
      }
      fromIdx = w;
      let S = e[w];
      if (S.type !== "assistant" || S.resumedFromIncompleteThinking !== !0) break;
    }
    let toIdx = r,
      b = s.message.id,
      v = r + 1;
    for (;;) {
      let E = v;
      while (E < e.length && dS(e[E])) E++;
      let I = E < e.length ? e[E] : void 0;
      if (I?.type === "assistant") {
        if (I.message.id === b) {
          toIdx = E, v = E + 1;
          continue;
        }
        if (I.resumedFromIncompleteThinking === !0) {
          toIdx = E, b = I.message.id, v = E + 1;
          continue;
        }
        break;
      }
      let w = E;
      while (w < e.length && (e[w].type !== "assistant" || dS(e[w]))) w++;
      let S = w < e.length ? e[w] : void 0;
      if (S?.type === "assistant" && S.message.id === b) {
        toIdx = w, v = w + 1;
        continue;
      }
      break;
    }
    n.push({
      fromIdx: fromIdx,
      toIdx: toIdx
    }), r = v > r ? v : r + 1;
  }
  return n;
}
var tGn = "auto-mode-classifier-error.txt",
  nGn = "auto-mode-dump.",
  rGn = "auto-mode-env-edit-",
  oGn = "auto-mode-builtins-",
  BMs = "auto-mode-classifier-dump",
  jMs = "auto-mode-classifier-system";
function WMs(e) {
  if (typeof e !== "object" || e === null || !("type" in e)) return !1;
  return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}
function Kfe(e) {
  return e?.kind === "self_hosted_pool";
}
function DU(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}
function Iee(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}
var ot = ["anthropic_cloud", "bridge", "snap", "ccs"];
function XAr(e) {
  let n = s => s !== void 0 && s !== null && s !== "";
  if (n(e.self_hosted_runner_pool_id)) return "pool";
  let environment_kind = e.environment_kind;
  if (!n(environment_kind) || ot.includes(environment_kind)) return null;
  return environment_kind === "byoc" ? "byoc" : "unlisted_kind";
}
function cGn(e) {
  return XAr(e) !== null;
}
function B8e(e, n) {
  return e.find(n);
}
var rt = ["policySettings", "flagSettings", "userSettings"];
function jve() {
  let ignoredUntrustedPool,
    n = Wo();
  for (let r = n.length - 1; r >= 0; r--) {
    let source_2 = n[r],
      id = me(source_2)?.remote?.defaultEnvironmentId;
    if (id === void 0) continue;
    if (Iee(id) && !rt.includes(source_2)) {
      ignoredUntrustedPool ??= {
        id: id,
        source: source_2
      };
      continue;
    }
    return {
      id: id,
      source: source_2,
      ignoredUntrustedPool: ignoredUntrustedPool?.id === id ? void 0 : ignoredUntrustedPool
    };
  }
  return {
    id: void 0,
    source: void 0,
    ignoredUntrustedPool: ignoredUntrustedPool
  };
}
function Irn(e) {
  return e.startsWith("ccpool_") ? {
    self_hosted_runner_pool_id: e
  } : {
    environment_id: e
  };
}
var st = f(() => u({
    environments: T(Jc(e => typeof e === "object" && e !== null && !Array.isArray(e))),
    has_more: M().optional().catch(void 0),
    last_id: o().nullable().optional().catch(void 0)
  })),
  limit = 100,
  ne = 10;
function dt(e) {
  if (typeof e === "string" && e.trim().length === 0) return new x("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
  if (typeof e === "string") return new x("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
  return new x("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}
async function LU(e, n, credentials) {
  return po("teleport_environments_list", async () => {
    if (xe() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let a = BS(),
      y = e ?? (await hJ(a));
    if (!y) throw new x(_ge(), "cloud sessions need a sign-in");
    let h = await kle(a);
    if (!h) throw Error("Unable to get organization UUID");
    let b = `${ln().BASE_API_URL}/v1/environment_providers`;
    try {
      let v = [],
        after_id;
      for (let w = 0; w < ne; w++) {
        let S = await mNr(() => Ct.get(b, {
          headers: {
            ...Ix(bge(a) ?? y),
            "x-organization-uuid": h
          },
          params: {
            limit: limit,
            ...(after_id !== void 0 && {
              after_id: after_id
            })
          },
          timeout: 15000
        }), {
          credentials: credentials
        });
        if (S.status !== 200) throw Error(`Failed to fetch environments: HTTP ${S.status}`);
        let A = st().safeParse(S.data);
        if (!A.success) throw dt(S.data);
        v.push(...A.data.environments);
        let last_id = A.data.last_id;
        if (A.data.has_more !== !0 || A.data.environments.length === 0 || typeof last_id !== "string") break;
        if (w === ne - 1) t(`fetchEnvironments: stopped after ${ne} pages (${v.length} environments) although the server reports more; the rest are not listed`, {
          level: "warn"
        });
        after_id = last_id;
      }
      let hasRemoteEnvironment = v.length > 0;
      if (ue().hasRemoteEnvironment !== hasRemoteEnvironment) await Ce(w => w.hasRemoteEnvironment === hasRemoteEnvironment ? w : {
        ...w,
        hasRemoteEnvironment: hasRemoteEnvironment
      }, n);
      return v;
    } catch (error) {
      let E = H(error);
      if (of(error)) t(`fetchEnvironments failed: ${E.message}`, {
        level: "error"
      });else l(E);
      throw E;
    }
  }, ct);
}
function ct(e) {
  return e instanceof x ? "malformed_response" : "error";
}
async function j8e(name = "Default", signal, r) {
  return po("teleport_default_environment_create", async () => {
    if (xe() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let s = BS(),
      a = r ?? (await hJ(s));
    if (!a) throw Error("No access token available");
    let y = await kle(s);
    if (!y) throw Error("Unable to get organization UUID");
    let h = `${ln().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (await Ct.post(h, {
      name: name,
      kind: "anthropic_cloud",
      description: "Default - trusted network access",
      config: {
        environment_type: "anthropic",
        cwd: "/home/user",
        init_script: null,
        environment: {},
        languages: [{
          name: "python",
          version: "3.11"
        }, {
          name: "node",
          version: "20"
        }],
        network_config: {
          allowed_hosts: [],
          allow_default_hosts: !0
        }
      }
    }, {
      headers: {
        ...Ix(a),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": y
      },
      timeout: 15000,
      signal: signal
    })).data;
  });
}
async function uGn(e, credentials_2) {
  if (xe() !== "firstParty") return [];
  let r = BS(),
    s = e ?? (await hJ(r));
  if (!s) return [];
  let a = await kle(r);
  if (!a) return [];
  let y = `${ln().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
  try {
    let h = await mNr(() => Ct.get(y, {
      headers: {
        ...Ix(bge(r) ?? s),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": a
      },
      timeout: 15000
    }), {
      credentials: credentials_2
    });
    if (h.status !== 200) return t(`fetchSelfHostedPools: ${h.status} ${h.statusText}`, {
      level: "error"
    }), p("teleport_self_hosted_pool_list", "non_200"), [];
    return po("teleport_self_hosted_pool_list", async () => (h.data.pools ?? []).map(item => ({
      kind: "self_hosted_pool",
      pool_id: item.pool_id,
      name: item.name,
      created_at: item.created_at,
      alive_runner_count: item.alive_runner_count ?? 0
    })));
  } catch (error) {
    let b = H(error);
    if (of(error)) t(`fetchSelfHostedPools failed: ${b.message}`, {
      level: "error"
    }), p("teleport_self_hosted_pool_list", "api_error");else l(b), p("teleport_self_hosted_pool_list", "unexpected");
    return [];
  }
}
var ut = {
    refusal_fallback_prompt: "choose: retry on fallback model or edit prompt",
    auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)",
    auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them"
  },
  qpt = "dialog:mcp_elicitation";
function iGn(dialog_kind, payload, request_id, s) {
  return {
    tool_name: `dialog:${dialog_kind}`,
    display_tool_name: "Claude needs your input",
    action_description: ut[dialog_kind] ?? `Respond to the ${dialog_kind} dialog to continue`,
    raw_command: void 0,
    tool_use_id: s ?? "",
    request_id: request_id,
    input: {
      dialog_kind: dialog_kind,
      payload: payload
    }
  };
}
import { randomUUID as lt } from "crypto";
function sGn(e, n, events, s) {
  if (jh(n, "sessionId"), !s) return {
    url: `${e}/v1/sessions/${n}/events`,
    body: {
      events: events
    }
  };
  let a = Dl(n);
  return {
    url: `${e}/v1/code/sessions/${encodeURIComponent(a)}/events`,
    body: {
      events: events.map(item => ({
        payload: typeof item.uuid === "string" && item.uuid ? item : {
          ...item,
          uuid: lt()
        }
      }))
    }
  };
}
import { randomUUID as ft } from "crypto";
var VMs = "tengu_woven_harbor",
  aGn = "tengu_drifting_twilight",
  YEo = !0,
  qMs = "tengu_buzzing_river";
var Re = 16;
function YAr(mode, {
  ultraplan: ultraplan,
  isFromSettings = !1
} = {}) {
  return {
    type: "event",
    data: {
      type: "control_request",
      request_id: `set-mode-${ft()}`,
      request: {
        subtype: "set_permission_mode",
        mode: mode,
        ultraplan: ultraplan,
        ...(isFromSettings && {
          from_settings: !0
        })
      }
    }
  };
}
function XEo(e) {
  return {
    envVars: Object.keys(e.environmentVariables ?? {}).length > 0,
    events: e.events.filter(item => !Pe(item)).map(gt)
  };
}
var z = "<redacted>";
function oe(e) {
  if (!Dn(e)) return;
  let {
    seed_bundle_file_id: seed_bundle_file_id,
    environment_variables: environment_variables
  } = e;
  if (seed_bundle_file_id === void 0 && environment_variables === void 0) return;
  return {
    ...e,
    ...(seed_bundle_file_id !== void 0 && {
      seed_bundle_file_id: z
    }),
    ...(environment_variables !== void 0 && {
      environment_variables: Dn(environment_variables) ? Object.fromEntries(Object.keys(environment_variables).map(item => [item, z])) : z
    })
  };
}
function KMs(e) {
  let bind_attestation = e.bind_attestation,
    r = oe(e),
    session_context = oe(e.session_context),
    config = oe(e.config);
  if (!r && !session_context && !config && bind_attestation === void 0) return e;
  return {
    ...(r ?? e),
    ...(session_context && {
      session_context: session_context
    }),
    ...(config && {
      config: config
    }),
    ...(bind_attestation !== void 0 && {
      bind_attestation: Dn(bind_attestation) ? {
        ...bind_attestation,
        signature: z
      } : z
    })
  };
}
var pt = new Set(["set_permission_mode", "set_mcp_permission_mode_override", "set_max_thinking_tokens", "mcp_toggle"]);
function Ae(e) {
  let request = e.data.request;
  return e.data.type === "control_request" && typeof request?.subtype === "string" ? request.subtype : void 0;
}
function Pe(e) {
  if (e.data.type === "user") return !0;
  let n = Ae(e);
  return n !== void 0 && pt.has(n);
}
function gt(e) {
  return Ae(e) ?? String(e.data.type);
}
function lGn(e) {
  let deviceBinding = e.deviceBinding,
    r = deviceBinding ? e.events.filter(item => Pe(item) && !(e.deferFirstPrompt && item.data.type === "user")) : e.events;
  if (deviceBinding && r.length > Re) throw new x(`session create allows at most ${Re} initial events, got ${r.length}`, "session create: too many initial events");
  let environment_variables_2 = deviceBinding ? {} : e.environmentVariables ?? {},
    disallowed_tools = L([...(e.disallowedTools ?? []), ...(deviceBinding ? j2s : [])]);
  return {
    ...(e.title && {
      title: e.title
    }),
    ...e.worker,
    ...JEo(e.persistentVolume),
    events: r.map(item => ({
      payload: item.data
    })),
    ...(e.tags && {
      tags: e.tags
    }),
    ...(!deviceBinding && e.sessionGroupingId && {
      session_grouping_id: e.sessionGroupingId
    }),
    ...(!deviceBinding && e.agentId && {
      agent_id: e.agentId
    }),
    ...(Object.keys(environment_variables_2).length > 0 && {
      environment_variables: environment_variables_2
    }),
    ...(deviceBinding && {
      target_device_id: deviceBinding.deviceUUID,
      bind_attestation: {
        kid: deviceBinding.kid,
        signature: deviceBinding.signature
      },
      bind_attestation_issued_at: deviceBinding.issuedAt,
      ...(e.requestElevatedTier && {
        security_tier: "elevated"
      }),
      ...(e.repositoriesTrusted && {
        repositories_trusted: !0
      })
    }),
    config: {
      sources: e.sources.map(mt),
      outcomes: e.outcomes,
      ...(e.model && {
        model: e.model
      }),
      ...(e.cwd && {
        cwd: e.cwd
      }),
      ...(e.effortLevel && {
        effort_level: e.effortLevel
      }),
      ...(e.seedBundleFileId && {
        seed_bundle_file_id: e.seedBundleFileId
      }),
      ...(e.reuseOutcomeBranches && {
        reuse_outcome_branches: !0
      }),
      ...(e.appendSystemPrompt && {
        append_system_prompt: e.appendSystemPrompt
      }),
      ...(e.customSystemPrompt && {
        custom_system_prompt: e.customSystemPrompt
      }),
      ...(e.appendSubagentSystemPrompt && {
        append_subagent_system_prompt: e.appendSubagentSystemPrompt
      }),
      ...(e.fallbackModel && {
        fallback_model: e.fallbackModel
      }),
      ...(e.maxTurns !== void 0 && {
        max_turns: e.maxTurns
      }),
      ...(e.maxBudgetUsd !== void 0 && e.maxBudgetUsd > 0 && {
        max_budget_usd: e.maxBudgetUsd
      }),
      ...(e.allowedTools && e.allowedTools.length > 0 && {
        allowed_tools: e.allowedTools
      }),
      ...(e.outputSchema && {
        output_schema: e.outputSchema
      }),
      ...(!deviceBinding && e.correlationId && {
        correlation_id: e.correlationId
      }),
      ...(disallowed_tools.length > 0 && {
        disallowed_tools: disallowed_tools
      }),
      ...(e.builtinTools && e.builtinTools.length > 0 && {
        builtin_tools: [...e.builtinTools]
      })
    }
  };
}
function JEo(e) {
  return;
}
function dGn(e, n) {
  let r = e === "v1alpha2" ? n?.session : n;
  if (typeof r?.id !== "string" || r.id === "") return $p("no_session_id");
  if (!bmn(r.id)) return $p("unusable_session_id");
  return Eh({
    ...r,
    title: typeof r.title === "string" ? Ti(r.title) : null
  });
}
function QEo(e, n) {
  return e.title || Ti(n);
}
function mt(e) {
  let {
    allow_unrestricted_git_push: allow_unrestricted_git_push,
    ...r
  } = e;
  return r;
}
function ZEo(e, n) {
  if (e === 401) return `${n || "Claude login not accepted"} \xB7 Run /login, then try again`;
  return;
}
function eTo(e, n) {
  if (n?.type === "not_found_error" && n.resource_type === "session_grouping") return `Project not found: ${e}. Check the id \u2014 a Project you don't have access to looks the same as one that doesn't exist.`;
  switch (n?.reason) {
    case "public_grouping_hosted_only":
      return `${e} is a public Project, and public Projects run on Anthropic-hosted infrastructure only. Drop --environment (and any self-hosted target), or use a private Project.`;
    case "feature_disabled":
      return "Projects are not available for your organization.";
    default:
      return;
  }
}
class ke {
  listener = void 0;
}
var Oe = new at(() => new ke());
function zMs(e, n) {
  try {
    return Oe.peek(e)?.listener?.(n)?.catch(l);
  } catch (error) {
    l(error);
    return;
  }
}
function GMs(e) {
  let n = Oe.of(j());
  return n.listener = e, () => {
    if (n.listener === e) n.listener = void 0;
  };
}
var KEo = "PostCompact [",
  YDt = "This session is being continued from a previous conversation that ran out of context. The summary below covers the earlier portion of the conversation.";
function Ue(e) {
  return e.startsWith(`<${Pl}>`) && e.includes(KEo);
}
function Orn(e) {
  if (typeof e === "string") return Ue(e);
  if (!Array.isArray(e) || e.length !== 1) return !1;
  let n = e[0];
  return Uve(n) && Ue(n.text);
}
function YMs(e) {
  if (e.branchDropped && e.warnMessage) {
    if (i("tengu_bridge_outcome_branch_dropped", {
      reason: c(e.branchDropped)
    }), t(e.warnMessage, {
      level: "warn"
    }), e.branchDropped === "no_evidence") console.warn(e.warnMessage);
  }
  if (e.revisionGuessUsed) i("tengu_bridge_revision_guess_used", {});
}
var Me = {
  no_session_id: {
    debug: "No session ID in response",
    code: "bridge_session_create_bad_response"
  },
  unusable_session_id: {
    debug: "Unusable session ID in response",
    code: "bridge_session_create_unusable_id"
  }
};
async function tTo({
  environmentId: environmentId,
  title: title,
  gitRepoUrl: gitRepoUrl,
  branch: branch,
  defaultBranch: defaultBranch,
  signal: signal_2,
  baseUrl: baseUrl,
  getAccessToken: getAccessToken,
  credentials: credentials_3,
  permissionMode: permissionMode,
  tags: tags
}) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync
    } = await import("B:/~BUN/root/chunk-nnhd4yzs.js"),
    {
      getOrganizationUUID: getOrganizationUUID
    } = await import("B:/~BUN/root/chunk-pkf50x7b.js"),
    {
      getOauthConfig: getOauthConfig
    } = await import("B:/~BUN/root/chunk-69y508b9.js"),
    {
      sessionsApiWire: sessionsApiWire
    } = await import("B:/~BUN/root/chunk-268y702m.js"),
    {
      getMainLoopModel: getMainLoopModel
    } = await import("B:/~BUN/root/chunk-sc0eap70.js"),
    {
      getOriginalCwd: getOriginalCwd
    } = await import("B:/~BUN/root/chunk-amdj78pb.js"),
    {
      default: De
    } = await import("B:/~BUN/root/chunk-rby0y0dm.js"),
    {
      isCcrV2BridgeCreateEnabled: isCcrV2BridgeCreateEnabled
    } = await import("B:/~BUN/root/chunk-xah7gvdb.js"),
    Y = isCcrV2BridgeCreateEnabled() ? "v1alpha2" : "v1",
    O = {
      create_endpoint: c(Y)
    },
    {
      isFirstPartyProvider: isFirstPartyProvider
    } = await import("B:/~BUN/root/chunk-5hdvgynh.js");
  if (!isFirstPartyProvider()) return t("[bridge] Session create skipped on non-firstParty provider"), G("bridge_session_create_3p_provider", O);
  let se = getAccessToken?.() ?? (W() && credentials_3 !== void 0 ? (await getClaudeAIOAuthTokensAsync(credentials_3))?.accessToken : getClaudeAIOAuthTokens()?.accessToken);
  if (!se) return t("[bridge] No access token for session creation"), G("bridge_session_create_no_token", O);
  let ie = await getOrganizationUUID();
  if (!ie) return t("[bridge] No org UUID for session creation"), G("bridge_session_create_no_org", O);
  let {
      sources: sources,
      outcomes: outcomes,
      report: report
    } = await OPo(gitRepoUrl, branch, defaultBranch),
    worker = Irn(environmentId),
    model = getMainLoopModel(),
    cwd = getOriginalCwd(),
    events_2 = permissionMode ? [YAr(permissionMode)] : [],
    Fe = Y === "v1alpha2" ? lGn({
      title: title,
      worker: worker,
      events: events_2,
      sources: sources,
      outcomes: outcomes,
      model: model,
      cwd: cwd,
      reuseOutcomeBranches: !0,
      tags: tags?.length ? tags : void 0
    }) : {
      ...(title !== void 0 && {
        title: title
      }),
      events: events_2,
      session_context: {
        sources: sources,
        outcomes: outcomes,
        model: model,
        cwd: cwd,
        reuse_outcome_branches: !0
      },
      ...worker,
      source: "remote-control",
      ...(tags?.length && {
        tags: tags
      })
    },
    ge = sessionsApiWire(Y, baseUrl ?? getOauthConfig().BASE_API_URL, se),
    headers = {
      ...ge.headers,
      "x-organization-uuid": ie
    },
    F;
  try {
    F = await De.post(ge.url, Fe, {
      headers: headers,
      signal: signal_2,
      validateStatus: C => C < 500
    });
  } catch (error) {
    return t(`[bridge] Session creation request failed: ${d(error)}`), G("bridge_session_create_request_failed", O);
  }
  if (!(F.status === 200 || F.status === 201)) {
    let C = Tx(F.data);
    return t(`[bridge] Session creation failed with status ${F.status}${C ? `: ${C}` : ""}`), G("bridge_session_create_http_error", O);
  }
  let J = dGn(Y, F.data);
  if (!J.ok) return t(`[bridge] ${Me[J.error].debug}`), G(Me[J.error].code, O);
  return YMs(report), g("bridge_session_create", O), Tu(J.value.id);
}
async function Kpt(e, n) {
  return (await Ypt(e, n)).session;
}
async function Ypt(e, n) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens_2,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync_2
    } = await import("B:/~BUN/root/chunk-nnhd4yzs.js"),
    {
      getOauthConfig: getOauthConfig_2
    } = await import("B:/~BUN/root/chunk-69y508b9.js"),
    {
      getCodeSession: getCodeSession
    } = await import("B:/~BUN/root/chunk-cwwq04r2.js"),
    {
      isCcrV2SessionCrudEnabled: isCcrV2SessionCrudEnabled
    } = await import("B:/~BUN/root/chunk-xah7gvdb.js"),
    {
      isFirstPartyProvider: isFirstPartyProvider_2
    } = await import("B:/~BUN/root/chunk-5hdvgynh.js");
  if (!isFirstPartyProvider_2()) return m("bridge_session_get", "bridge_session_get_3p_provider"), {
    session: null,
    notFound: !1
  };
  let v = n?.getAccessToken?.() ?? (W() && n?.credentials !== void 0 ? (await getClaudeAIOAuthTokensAsync_2(n.credentials))?.accessToken : getClaudeAIOAuthTokens_2()?.accessToken);
  if (!v) return t("[bridge] No access token for session fetch"), m("bridge_session_get", "bridge_session_get_no_token"), {
    session: null,
    notFound: !1
  };
  let useV2 = n?.useV2 ?? isCcrV2SessionCrudEnabled(),
    orgUUID;
  if (!useV2) {
    let {
      getOrganizationUUID: getOrganizationUUID_2
    } = await import("B:/~BUN/root/chunk-pkf50x7b.js");
    if (orgUUID = (await getOrganizationUUID_2()) ?? void 0, !orgUUID) return t("[bridge] No org UUID for session fetch"), m("bridge_session_get", "bridge_session_get_no_org"), {
      session: null,
      notFound: !1
    };
  }
  let w = await getCodeSession(n?.baseUrl ?? getOauthConfig_2().BASE_API_URL, v, e, 1e4, {
    useV2: useV2,
    orgUUID: orgUUID
  });
  if (typeof w !== "object") return m("bridge_session_get", w === "invalid" ? "bridge_session_get_invalid_id" : typeof w === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed"), {
    session: null,
    notFound: w === 404
  };
  return g("bridge_session_get"), {
    session: {
      environment_id: w.environment_id,
      title: w.title,
      status: w.status,
      created_at: w.created_at,
      updated_at: w.updated_at,
      connection_status: "connection_status" in w && typeof w.connection_status === "string" ? w.connection_status : void 0,
      tags: w.tags
    },
    notFound: !1
  };
}
async function re(e, n, r, s) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens_3,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync_3
    } = await import("B:/~BUN/root/chunk-nnhd4yzs.js"),
    {
      getOauthConfig: getOauthConfig_3
    } = await import("B:/~BUN/root/chunk-69y508b9.js"),
    {
      updateCodeSession: updateCodeSession
    } = await import("B:/~BUN/root/chunk-cwwq04r2.js"),
    {
      isCcrV2SessionCrudEnabled: isCcrV2SessionCrudEnabled_2
    } = await import("B:/~BUN/root/chunk-xah7gvdb.js"),
    E = s?.getAccessToken?.() ?? (W() && s?.credentials !== void 0 ? (await getClaudeAIOAuthTokensAsync_3(s.credentials))?.accessToken : getClaudeAIOAuthTokens_3()?.accessToken);
  if (!E) return t(`[bridge] No access token for session ${r} update`), "failed";
  let useV2_2 = "client_metadata" in n || isCcrV2SessionCrudEnabled_2(),
    orgUUID_2;
  if (!useV2_2) {
    let {
      getOrganizationUUID: getOrganizationUUID_3
    } = await import("B:/~BUN/root/chunk-pkf50x7b.js");
    if (orgUUID_2 = (await getOrganizationUUID_3()) ?? void 0, !orgUUID_2) return t(`[bridge] No org UUID for session ${r} update`), "failed";
  }
  t(`[bridge] Updating session ${r}: ${e}`);
  let S = await updateCodeSession(s?.baseUrl ?? getOauthConfig_3().BASE_API_URL, E, e, n, 1e4, {
    useV2: useV2_2,
    orgUUID: orgUUID_2
  });
  if (S === "invalid") return m("bridge_session_patch", "bridge_session_patch_invalid_id"), "rejected";else if (typeof S !== "number") return m("bridge_session_patch", "bridge_session_patch_request_failed"), "failed";else if (S === 200) return t(`[bridge] Session ${r} updated successfully`), g("bridge_session_patch"), "landed";else return p("bridge_session_patch", "bridge_session_patch_http_error"), "failed";
}
async function nTo(e, title_2, r) {
  return re(e, {
    title: title_2
  }, "title", r);
}
async function esi(e, n, r) {
  return kJs(e, {
    title: `Couldn't start \u2014 too many sessions are running \xB7 ${n}`,
    reason: "capacity"
  }, r);
}
async function kJs(e, n, r) {
  return re(e, {
    title: n.title,
    client_metadata: {
      desktop_rc_refusal: {
        title: n.title,
        reason: n.reason
      }
    }
  }, "refusal", r);
}
var XMs = "color:";
async function rTo(e, n, r, s) {
  let a = n === "default",
    remove_tags = r.filter(item => a || item !== n).map(item => XMs + item),
    add_tags = a ? void 0 : [XMs + n];
  await re(e, {
    add_tags: add_tags,
    remove_tags: remove_tags
  }, "color tag", s);
}
async function tsi(e, n, r) {
  return !1;
}
function G(e, n) {
  return m("bridge_session_create", e, n), null;
}
function pGn(e) {
  let teleportedSessionIds = oo().teleportedSessionIds;
  if (teleportedSessionIds.add(er(e)), teleportedSessionIds.size > 64) {
    let r = teleportedSessionIds.values().next().value;
    if (r !== void 0) teleportedSessionIds.delete(r);
  }
}
function MC(e) {
  return oo().teleportedSessionIds.has(er(e));
}
function oTo(e) {
  oo().teleportedSessionIds.delete(er(e));
}
export { RMs, zEo, AMs, xMs, PMs, OMs, IMs, F8e, MMs, DMs, LMs, ImageSizeError as H8e, $8e, qDt, Jzn, NMs, Qzn, GEo, FMs, VEo, HMs, KDt, Arn, U8e, qEo, $Ms, xrn, Prn, KAr, UMs, Zzn, eGn, tGn, nGn, rGn, oGn, BMs, jMs, WMs, sGn, qpt, iGn, KEo, YDt, Orn, zMs, GMs, VMs, aGn, YEo, qMs, YAr, XEo, KMs, lGn, JEo, dGn, QEo, ZEo, eTo, Kfe, DU, Iee, XAr, cGn, B8e, jve, Irn, LU, j8e, uGn, YMs, tTo, Kpt, Ypt, nTo, esi, kJs, XMs, rTo, tsi, pGn, MC, oTo };