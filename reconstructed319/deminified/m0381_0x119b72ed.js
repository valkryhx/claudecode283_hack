// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { sy, H, Po } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { R, F, d, Im } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Fb, yh, t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Op, bw } from "B:/~BUN/root/chunk-jxvayzd7.js";
import { n7i } from "B:/~BUN/root/chunk-5az22yft.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { pd } from "B:/~BUN/root/chunk-838fxqce.js";
import { g, m, c, ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ta } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { ejs, _o, Nb, dVn, Jf, Ld, jn } from "B:/~BUN/root/chunk-rr294jrm.js";
import { Wt } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { Ovo, oH, Kx, nS, nSe, oSe, Hfe, Wvo, Le, fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { p } from "B:/~BUN/root/chunk-z6138ats.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { Yi } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { $o } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { PO } from "B:/~BUN/root/chunk-xc0c1vfp.js";
import { AD } from "B:/~BUN/root/chunk-5w7xhbnh.js";
import { JCs } from "B:/~BUN/root/chunk-3aa152x8.js";
import { iLe } from "B:/~BUN/root/chunk-076mmgjt.js";
import { lLe } from "B:/~BUN/root/chunk-63tek2rx.js";
import { $r } from "B:/~BUN/root/chunk-xbnyqyft.js";
import { Lse } from "B:/~BUN/root/chunk-j0enspnr.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { o, I, C, u, Ep } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
import { Je } from "B:/~BUN/root/chunk-9wbhv9z5.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
class ImageSizeError extends Error {
  constructor(e, n) {
    let r,
      s = e[0];
    if (e.length === 1 && s) r = `Image base64 size (${en(s.size)}) exceeds API limit (${en(n)}). Please resize the image before sending.`;else r = `${e.length} images exceed the API limit (${en(n)}): ` + e.map(item => `Image ${item.index}: ${en(item.size)}`).join(", ") + ". Please resize these images before sending.";
    super(r);
    this.name = "ImageSizeError";
  }
}
function rue(e) {
  if (!D(e) || !("source" in e)) return !1;
  let source = e.source;
  if (!D(source)) return !1;
  if (!("type" in source) || source.type !== "base64") return !1;
  return "data" in source && typeof source.data === "string";
}
function fZt(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "image") return !1;
  return rue(e);
}
function Ke(e) {
  if (typeof e !== "object" || e === null) return !1;
  if (!("type" in e) || e.type !== "tool_result") return !1;
  return "content" in e && Array.isArray(e.content);
}
function _e(e, index, max_bytes, s) {
  let i = e.source.data.length;
  if (i > max_bytes) l("tengu_image_api_validation_failed", {
    base64_size_bytes: i,
    max_bytes: max_bytes
  }), s.push({
    index: index,
    size: i
  });
}
function ekr(e, n) {
  let r = [],
    s = 0;
  for (let i of e) {
    if (typeof i !== "object" || i === null) continue;
    if (!("type" in i) || i.type !== "user") continue;
    if (!("message" in i) || typeof i.message !== "object" || i.message === null) continue;
    let y = i.message;
    if (!("content" in y) || !Array.isArray(y.content)) continue;
    for (let h of y.content) {
      if (fZt(h)) {
        _e(h, ++s, n, r);
        continue;
      }
      if (Ke(h)) {
        for (let w of h.content) if (fZt(w)) _e(w, ++s, n, r);
      }
    }
  }
  if (r.length > 0) throw new ImageSizeError(r, n);
}
import { types as ze } from "util";
var Q = () => !1;
function qHi(e) {
  Q = e;
}
function tkr() {
  try {
    return Q();
  } catch (error) {
    return a(error), !1;
  }
}
function YHi() {
  return Q();
}
var content = "[account memory text removed from this conversation]",
  he = {
    top: {
      plain: new Set(["path", "path_prefix", "cursor", "include_preview", "if_version", "source_item", "name"]),
      text: new Set(["old_str", "new_str", "content", "instruction", "query"])
    },
    op: {
      plain: new Set(["op", "path", "if_version"]),
      text: new Set(["old_str", "new_str", "content"])
    }
  },
  qe = new Set(["path", "path_prefix", "cursor", "source_item", "name"]);
function Z(e, n) {
  return Lse(e, n, "history");
}
var weakMap = new WeakMap();
function pZt(e) {
  return e.type === "attachment" && e.attachment.type === "cowork_memory_context" && e.attachment.content === null && e.attachment.anchor !== !0;
}
function P_s(messages, n = tkr(), r) {
  let s = messages.findLastIndex(pZt),
    i = n ? messages.length : s;
  if (i < 0) return {
    messages: messages,
    epoch: void 0
  };
  let y = Se(messages),
    h = new Set(),
    w = new Set(),
    messages_2 = [],
    b = 0,
    v,
    x = S => {
      b++, v = S.uuid;
    };
  return messages.forEach((item, index) => {
    if (index >= i || index === s) {
      messages_2.push(item);
      return;
    }
    if (item.type === "attachment" && (item.attachment.type === "cowork_memory_context" && item.attachment.anchor !== !0 || item.attachment.type === "account_memory_recall")) {
      x(item);
      return;
    }
    if (item.type === "assistant" && Array.isArray(item.message.content)) {
      let E = new Map();
      for (let P of item.message.content) {
        if (P.type !== "tool_use" || !Z(P.name, r)) continue;
        let input = N0n(P.input),
          B = y.has(P.id);
        if (B && input === P.input) continue;
        E.set(P.id, {
          input: input,
          blankResult: !B
        });
      }
      if (E.size === 0) {
        messages_2.push(item);
        return;
      }
      for (let [P, {
        blankResult: blankResult
      }] of E) if (w.add(P), blankResult) h.add(P);
      x(item), messages_2.push({
        ...item,
        ...(it(item.wireToolInputs) && {
          wireToolInputs: tt(item.wireToolInputs, w)
        }),
        message: {
          ...item.message,
          content: item.message.content.map(item => item.type === "tool_use" && E.has(item.id) ? {
            ...item,
            input: E.get(item.id).input
          } : item)
        }
      });
      return;
    }
    if (item.type === "user" && h.size > 0 && Array.isArray(item.message.content) && item.message.content.some(item => item.type === "tool_result" && h.has(item.tool_use_id))) {
      x(item), messages_2.push({
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
  }), b === 0 ? {
    messages: messages,
    epoch: void 0
  } : {
    messages: messages_2,
    epoch: `${b}:${v}`
  };
}
function XHi(e, n) {
  let r = Se(e);
  for (let s = e.length - 1; s >= 0; s--) {
    let i = e[s];
    if (pZt(i)) return !1;
    if (i.type === "assistant" && Array.isArray(i.message.content) && i.message.content.some(item => item.type === "tool_use" && Z(item.name, n) && (!r.has(item.id) || N0n(item.input) !== item.input))) return !0;
  }
  return !1;
}
function O_s(e) {
  let n = [],
    r = (s, i) => {
      if (typeof s !== "object" || s === null || pd(s)) return;
      for (let [y, h] of Object.entries(s)) if (he[i].text.has(y) && typeof h === "string") n.push(h);else if (i === "top" && y === "ops" && Array.isArray(h)) for (let w of h) r(w, "op");
    };
  return r(e, "top"), n;
}
function JHi(e, n) {
  let r = [],
    s = new Set();
  for (let i of e) if (i.type === "assistant" && Array.isArray(i.message.content)) {
    for (let y of i.message.content) if (y.type === "tool_use" && Z(y.name, n)) s.add(y.id), r.push(...O_s(y.input));
  } else if (i.type === "user" && s.size > 0 && Array.isArray(i.message.content)) for (let y of i.message.content) {
    if (y.type !== "tool_result" || !s.has(y.tool_use_id)) continue;
    if (typeof y.content === "string") r.push(y.content);else if (Array.isArray(y.content)) {
      for (let h of y.content) if (h.type === "text") r.push(h.text);
    }
  }
  return r;
}
function Se(e) {
  let n = new Set();
  for (let r of e) {
    if (r.type !== "user" || r.toolDenialKind === void 0 || r.toolResultRemedy?.kind !== "memory_paused" || !Array.isArray(r.message.content)) continue;
    let s = r.message.content.filter(item => item.type === "tool_result");
    if (s.length === 1) n.add(s[0].tool_use_id);
  }
  return n;
}
function mZt(e, n, r) {
  return P_s(e, n, r).messages;
}
var Ye = 32,
  Xe = Object.freeze({
    content: content
  });
function G(content_2) {
  return content_2 === content ? Xe : Object.freeze({
    content: content_2
  });
}
function N0n(e, n = 0, r = content, s = !1) {
  if (typeof e === "function") return G(r);
  if (typeof e === "string" || ze.isStringObject(e)) return n === 0 ? G(r) : r;
  if (typeof e !== "object" || e === null) return e;
  if (pd(e) || n > 2) return G(r);
  let i = bw(e);
  if (i === Op) return G(r);
  if (i !== void 0) return i.map(item => N0n(item, n + 1, r, s));
  let y;
  try {
    y = Object.keys(e);
  } catch {
    return G(r);
  }
  if (y.length > Ye) return G(r);
  let h = Object.getOwnPropertyNames(e).length !== y.length || Object.getOwnPropertySymbols(e).length > 0,
    w = n === 0 ? "top" : "op",
    T = [],
    b = !1;
  for (let S of y) {
    let A = Object.getOwnPropertyDescriptor(e, S);
    if (A === void 0 || !("value" in A) || typeof A.value === "function") {
      b = !0;
      continue;
    }
    let E = Ze(w, S, A.value, n, r, s);
    if (E === Ee) {
      b = !0;
      continue;
    }
    if (E instanceof ee) {
      b ||= !E.pristine, T.push([S, E.strings]);
      continue;
    }
    b ||= E !== A.value, T.push([S, E]);
  }
  let v = Object.getPrototypeOf(e);
  if (n === 0 && !b && !h && (v === Object.prototype || v === null) && Object.getOwnPropertyNames(e).length === y.length && Object.getOwnPropertySymbols(e).length === 0) return e;
  let x = {};
  for (let [S, value] of T) Object.defineProperty(x, S, {
    value: value,
    enumerable: !0,
    writable: !0,
    configurable: !0
  });
  return x;
}
var Qe = new Set(["append", "str_replace", "delete"]),
  Ee = Symbol("dropped");
class ee {
  strings;
  pristine;
  constructor(e, n) {
    this.strings = e;
    this.pristine = n;
  }
}
function Ze(e, n, r, s, i, y) {
  let h = he[e];
  if (h.plain.has(n)) {
    let w = y && qe.has(n);
    if (n === "op" ? typeof r === "string" && Qe.has(r) : r === null || typeof r === "boolean" || n !== "include_preview" && (typeof r === "string" || typeof r === "number")) return w && (typeof r === "string" || typeof r === "number") ? i : r;
    if (e === "top" && n === "path" && typeof r === "object" && r !== null) return et(r, i, w);
    return i;
  }
  if (h.text.has(n)) return i;
  if (e === "top" && n === "ops") return !pd(r) && Array.isArray(r) ? N0n(r, s + 1, i, y) : i;
  return Ee;
}
function et(e, n, r) {
  if (pd(e)) return n;
  let s = Object.getOwnPropertyNames(e),
    i = Object.getPrototypeOf(e) === Array.prototype && Object.getOwnPropertySymbols(e).length === 0 && Array.isArray(e) && s.length === e.length + 1 && s.every(item => {
      if (item === "length") return !0;
      let T = Object.getOwnPropertyDescriptor(e, item);
      return /^(?:0|[1-9]\d*)$/u.test(item) && Number(item) < e.length && T !== void 0 && "value" in T;
    }),
    y = bw(e);
  if (!Array.isArray(y)) return n;
  let h = [];
  for (let w of y) {
    if (typeof w !== "string") return n;
    h.push(r ? n : w);
  }
  return new ee(h, i && !r);
}
function tt(e, n) {
  let r = _(Object.keys(e).filter(item => n.has(item)).sort()),
    s = weakMap.get(e);
  if (s === void 0) s = new Map(), weakMap.set(e, s);
  let i = s.get(r);
  if (i === void 0) i = Yi(e, (y, h) => n.has(h)), s.set(r, i);
  return i;
}
var nt = 64;
function UHi(e) {
  let n = O();
  if (n.sessionId !== void 0 && n.sessionId !== e.sessionId) n.held.clear(), n.settled.length = 0;
  n.sessionId = e.sessionId, n.reporter = e;
}
function A_s(e) {
  let n = O();
  if (n.reporter?.owner === e) n.reporter = void 0;
}
function BHi(e, n) {
  let r = e.toLowerCase(),
    {
      held: held,
      settled: settled
    } = O();
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
    throw te(r), error;
  }
  if (h instanceof Promise) return h.finally(() => te(r));
  return te(r), h;
}
function jHi(e) {
  let n = O().held.get(e.toLowerCase());
  if (n === void 0) return !1;
  return n.withheld = !0, !0;
}
function ot(e) {
  return O().held.has(e.toLowerCase());
}
function rt(e) {
  return O().settled.includes(e.toLowerCase());
}
function st(e) {
  return e.payload.type === "user" && typeof e.processing_at === "string";
}
function WHi(e) {
  let n = !1;
  if (ot(e.event_id)) n = "redelivered_in_flight";else if (rt(e.event_id)) n = "redelivered_settled";else if (st(e)) n = "redelivered_after_start";
  if (n !== !1) c("bridge_read_receipt", n);
  return n;
}
function x_s(e) {
  j("queued_note_threw", () => {
    let n = e === void 0 ? void 0 : O().held.get(e.toLowerCase());
    if (n !== void 0) n.phase = "queued";
  });
}
function te(e) {
  j("settle_threw", () => {
    let n = e.toLowerCase(),
      r = O().held.get(n);
    if (r?.phase === "claimed") ne(n, r);
  });
}
function we(e) {
  j("settle_threw", () => {
    let n = e.toLowerCase(),
      r = O().held.get(n);
    if (r !== void 0 && r.phase !== "read") ne(n, r);
  });
}
function zHi(e) {
  for (let {
    uuid: uuid
  } of e) if (uuid !== void 0) we(uuid);
}
function jpt(e) {
  j("read_note_threw", () => {
    let {
      held: held_2
    } = O();
    if (held_2.size === 0) return;
    for (let {
      uuid: uuid_2
    } of e) {
      let s = uuid_2?.toLowerCase(),
        i = s === void 0 ? void 0 : held_2.get(s);
      if (s === void 0 || i === void 0 || i.phase === "read") continue;
      if (i.phase = "read", i.withheld) Y(s, "processing"), g("bridge_read_receipt");
    }
  });
}
function GHi() {
  j("settle_threw", () => {
    for (let [e, n] of O().held) if (n.phase === "read") ne(e, n);
  });
}
function VHi() {
  j("resend_threw", () => {
    let {
      held: held_3,
      settled: settled_2
    } = O();
    for (let [r, s] of held_3) if (s.phase === "read" && s.withheld) Y(r, "processing");
    for (let r of settled_2) Y(r, "processed");
  });
}
function KHi(e) {
  iLe(e, (n, r) => {
    if (r === "cancelled" || r === "refused") we(n);
  });
}
function O() {
  return Po(ejs).inboundReadReceipts;
}
function ne(e, n) {
  let {
    held: held_4,
    settled: settled_3
  } = O();
  if (held_4.delete(e), !n.withheld) return;
  if (settled_3.push(e), settled_3.length > nt) settled_3.shift();
  Y(e, "processed");
}
function Y(e, n) {
  j("report_threw", () => {
    O().reporter?.report(e, n);
  });
}
function j(e, n) {
  try {
    n();
  } catch (error) {
    m("bridge_read_receipt", e), a(error);
  }
}
class Yze {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static of(e) {
    return new Yze(JSON.stringify(e));
  }
  toJSON() {
    return JSON.parse(this.#e);
  }
}
var at = new Set(["content", "_meta", "structuredContent", "structuredContentOmitted", "resourceLinks"]);
function I_s(e, n) {
  if (n.media !== !0) return e;
  if (e instanceof Yze) {
    let s = e.toJSON(),
      i = I_s(s, n);
    return i === s ? e : Yze.of(i);
  }
  if (!D(e)) return e;
  let file = e.file;
  if (D(file) && (e.type === "image" || e.type === "pdf") && typeof file.base64 === "string" && file.base64 !== "") return {
    ...e,
    file: {
      ...file,
      base64: ""
    }
  };
  return e;
}
function M_s(e) {
  if (e instanceof Yze) {
    let r = e.toJSON(),
      s = M_s(r);
    return s === r ? e : Yze.of(s);
  }
  if (!D(e)) return e;
  let n = Ie(e);
  for (let r of ["content", "structuredContent"]) {
    let s = n[r],
      i = D(s) ? Ie(s) : s;
    if (i !== s) n = {
      ...n,
      [r]: i
    };
  }
  return n;
}
function Ie(e) {
  let n = {};
  if (typeof e.originalFile === "string" && e.originalFile !== "" && e.originalFile !== e.content) n.originalFile = null;
  if (e.type === "update" && Array.isArray(e.structuredPatch) && e.structuredPatch.length > 0) n.structuredPatch = [];
  for (let r of ["original_file", "updated_file"]) if (typeof e[r] === "string" && e[r] !== "") n[r] = "";
  return Object.keys(n).length > 0 ? {
    ...e,
    ...n
  } : e;
}
function QHi(e, n, r) {
  if (r.mcp_images !== !0) return e;
  let s = h => Re(h, n, (w, T) => w === T ? "" : w);
  if (!(e instanceof Yze)) return s(e);
  let i = e.toJSON(),
    y = s(i);
  return y === i ? e : Yze.of(y);
}
function F0n(e, n) {
  return Re(e, n, (r, s) => r === "" ? s : r);
}
function H0n(e) {
  if (!D(e) || e.type !== "user") return e;
  let toolUseResult = F0n(e.toolUseResult, e.message);
  return toolUseResult === e.toolUseResult ? e : {
    ...e,
    toolUseResult: toolUseResult
  };
}
function Re(e, n, r) {
  let s = D(e) && Object.keys(e).every(item => at.has(item)),
    i = s ? e.content : e,
    y = D(n) ? n.content : void 0;
  if (!Array.isArray(i) || !Array.isArray(y)) return e;
  let [h, ...w] = y.filter(item => D(item) && item.type === "tool_result");
  if (w.length > 0 || !lLe(h) || h.content.length !== i.length) return e;
  let T = !1,
    content_3 = i.map((item, index) => {
      let S = h.content[index];
      if (!fZt(item) || !fZt(S)) return item;
      let data = r(item.source.data, S.source.data);
      if (data === item.source.data) return item;
      return T = !0, {
        ...item,
        source: {
          ...item.source,
          data: data
        }
      };
    });
  if (!T) return e;
  return s ? {
    ...e,
    content: content_3
  } : content_3;
}
var dt = new Set(["user", "assistant", "attachment", "system"]);
function Mfo(e) {
  return D(e) && typeof e.type === "string" && dt.has(e.type);
}
var ve = ["cwd", "gitBranch", "version", "userType", "entrypoint", "promptId"],
  ct = [...ve, "requestId"];
function Dfo(e) {
  let n = e.message;
  return e.type === "assistant" && D(n) && typeof n.id === "string" && n.id.length > 0;
}
function ZHi(e, n) {
  if (!Mfo(e)) return e;
  let r = Dfo(e) && n?.() !== !0 ? ct : ve,
    s;
  for (let i of r) if (i in e) s ??= {
    ...e
  }, delete s[i];
  return s ?? e;
}
function nkr(e, n) {
  if (!Mfo(e)) return e;
  let r;
  for (let [s, i] of Object.entries(n)) if (i !== void 0 && e[s] === void 0) r ??= {
    ...e
  }, r[s] = i;
  return r ?? e;
}
function rkr(e) {
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
      while (y >= 0 && sy(e[y])) y--;
      let b = y >= 0 ? e[y] : void 0;
      if (b?.type !== "assistant") break;
      let v = b.message.id,
        x = y;
      while (y >= 0) {
        let A = e[y];
        if (A.type === "assistant") {
          if (A.message.id === v) x = y, y--;else break;
        } else if (sy(A)) y--;else {
          let E = y;
          while (E >= 0 && (e[E].type !== "assistant" || sy(e[E]))) E--;
          let P = E >= 0 ? e[E] : void 0;
          if (P?.type === "assistant" && P.message.id === v) x = E, y = E - 1;else break;
        }
      }
      fromIdx = x;
      let S = e[x];
      if (S.type !== "assistant" || S.resumedFromIncompleteThinking !== !0) break;
    }
    let toIdx = r,
      w = s.message.id,
      T = r + 1;
    for (;;) {
      let b = T;
      while (b < e.length && sy(e[b])) b++;
      let v = b < e.length ? e[b] : void 0;
      if (v?.type === "assistant") {
        if (v.message.id === w) {
          toIdx = b, T = b + 1;
          continue;
        }
        if (v.resumedFromIncompleteThinking === !0) {
          toIdx = b, w = v.message.id, T = b + 1;
          continue;
        }
        break;
      }
      let x = b;
      while (x < e.length && (e[x].type !== "assistant" || sy(e[x]))) x++;
      let S = x < e.length ? e[x] : void 0;
      if (S?.type === "assistant" && S.message.id === w) {
        toIdx = x, T = x + 1;
        continue;
      }
      break;
    }
    n.push({
      fromIdx: fromIdx,
      toIdx: toIdx
    }), r = T > r ? T : r + 1;
  }
  return n;
}
var xe = /@sha256:[0-9a-f]{64}$/;
function hZt(e) {
  return xe.test(e);
}
function r$i(e) {
  let [n, ...r] = e.suggestions ?? [],
    s = r.length === 0 && n?.type === "addRules" && n.behavior === "allow" && n.rules.length === 1 ? n.rules[0] : void 0;
  return s?.toolName === $r && s.ruleContent !== void 0 && xe.test(s.ruleContent) ? s.ruleContent : void 0;
}
var o$i = "userSettings";
var xJe = "effort_medium_nudge",
  PJe = "program_use_case_question",
  gZt = "auto_default_nudge",
  dkr = "ultraplan_choice",
  yZt = "cost_threshold",
  qoe = "autocompact_offer",
  $0n = "auto_mode_server_fallback",
  oLe = "auto_mode_end_offer",
  _Zt = "resume_return",
  b_e = "enum_prompt",
  KZ = "cold_resume_quota",
  Xze = "newer_model_offer",
  ckr = "fullscreen_upsell";
var D_s = null;
var bZt = null,
  L_s = zpt();
function zpt() {
  return null;
}
var Gpt = null;
function rCe(e) {
  return e?.kind === "self_hosted_pool";
}
function Q$(e) {
  return e.kind === "self_hosted_pool" ? e.pool_id : e.environment_id;
}
function zW(e) {
  return e !== void 0 && e.startsWith("ccpool_");
}
var ut = ["anthropic_cloud", "bridge", "snap", "ccs"];
function Nfo(e) {
  let n = s => s !== void 0 && s !== null && s !== "";
  if (n(e.self_hosted_runner_pool_id)) return "pool";
  let environment_kind = e.environment_kind;
  if (!n(environment_kind) || ut.includes(environment_kind)) return null;
  return environment_kind === "byoc" ? "byoc" : "unlisted_kind";
}
function gkr(e) {
  return Nfo(e) !== null;
}
function sLe(e, n) {
  return e.find(n);
}
var lt = ["policySettings", "flagSettings", "userSettings"];
function Q6() {
  let ignoredUntrustedPool,
    n = $o();
  for (let r = n.length - 1; r >= 0; r--) {
    let source_2 = n[r],
      id = be(source_2)?.remote?.defaultEnvironmentId;
    if (id === void 0) continue;
    if (zW(id) && !lt.includes(source_2)) {
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
function U0n(e) {
  return e.startsWith("ccpool_") ? {
    self_hosted_runner_pool_id: e
  } : {
    environment_id: e
  };
}
var ft = p(() => u({
    environments: C(Ep(e => typeof e === "object" && e !== null && !Array.isArray(e))),
    has_more: I().optional().catch(void 0),
    last_id: o().nullable().optional().catch(void 0)
  })),
  limit = 100,
  oe = 10;
function gt(e) {
  if (typeof e === "string" && e.trim().length === 0) return new R("The cloud environments service returned an empty response (HTTP 200 with no body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with an empty body");
  if (typeof e === "string") return new R("The cloud environments service returned a response in an unexpected format (HTTP 200 with a non-JSON body). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 with a non-JSON body");
  return new R("The cloud environments service returned a response in an unexpected format (HTTP 200 without a usable environments list). This is usually temporary \u2014 try again in a moment.", "fetchEnvironments: HTTP 200 JSON body without a valid environments array");
}
async function GW(e, n, credentials) {
  return ao("teleport_environments_list", async () => {
    if (Te() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let profile = nS(),
      fallbackToken = e ?? (await oSe(profile));
    if (!fallbackToken) throw new R(nSe(), "cloud sessions need a sign-in");
    let h = await Hfe(profile);
    if (!h) throw Error("Unable to get organization UUID");
    let w = `${nn().BASE_API_URL}/v1/environment_providers`;
    try {
      let T = [],
        after_id;
      for (let x = 0; x < oe; x++) {
        let S = await Wvo(P => Wt.get(w, {
          headers: {
            ...Kx(P),
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
          profile: profile,
          fallbackToken: fallbackToken,
          credentials: credentials
        });
        if (S.status !== 200) throw Error(`Failed to fetch environments: HTTP ${S.status}`);
        let A = ft().safeParse(S.data);
        if (!A.success) throw gt(S.data);
        T.push(...A.data.environments);
        let last_id = A.data.last_id;
        if (A.data.has_more !== !0 || A.data.environments.length === 0 || typeof last_id !== "string") break;
        if (x === oe - 1) t(`fetchEnvironments: stopped after ${oe} pages (${T.length} environments) although the server reports more; the rest are not listed`, {
          level: "warn"
        });
        after_id = last_id;
      }
      let hasRemoteEnvironment = T.length > 0;
      if (fe().hasRemoteEnvironment !== hasRemoteEnvironment) await Le(x => x.hasRemoteEnvironment === hasRemoteEnvironment ? x : {
        ...x,
        hasRemoteEnvironment: hasRemoteEnvironment
      }, n);
      return T;
    } catch (error) {
      let b = F(error);
      if (Im(error, Ae)) t(`fetchEnvironments failed: ${b.message}`, {
        level: "error"
      });else a(b);
      throw b;
    }
  }, mt);
}
function Ae(e) {
  return e instanceof oH;
}
function mt(e) {
  return e instanceof R ? "malformed_response" : "error";
}
async function Vpt(name = "Default", signal, r) {
  return ao("teleport_default_environment_create", async () => {
    if (Te() !== "firstParty") throw Error("Remote environments are only available on the first-party Anthropic API provider.");
    let s = nS(),
      i = r ?? (await oSe(s));
    if (!i) throw Error("No access token available");
    let y = await Hfe(s);
    if (!y) throw Error("Unable to get organization UUID");
    let h = `${nn().BASE_API_URL}/v1/environment_providers/cloud/create`;
    return (await Wt.post(h, {
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
        ...Kx(i),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": y
      },
      timeout: 15000,
      signal: signal
    })).data;
  });
}
async function ykr(e, credentials_2) {
  if (Te() !== "firstParty") return [];
  let profile_2 = nS(),
    fallbackToken_2 = e ?? (await oSe(profile_2));
  if (!fallbackToken_2) return [];
  let i = await Hfe(profile_2);
  if (!i) return [];
  let y = `${nn().BASE_API_URL}/v1/code/runners/self-hosted/pools`;
  try {
    let h = await Wvo(w => Wt.get(y, {
      headers: {
        ...Kx(w),
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "x-organization-uuid": i
      },
      timeout: 15000
    }), {
      profile: profile_2,
      fallbackToken: fallbackToken_2,
      credentials: credentials_2
    });
    if (h.status !== 200) return t(`fetchSelfHostedPools: ${h.status} ${h.statusText}`, {
      level: "error"
    }), c("teleport_self_hosted_pool_list", "non_200"), [];
    return ao("teleport_self_hosted_pool_list", async () => (h.data.pools ?? []).map(item => ({
      kind: "self_hosted_pool",
      pool_id: item.pool_id,
      name: item.name,
      created_at: item.created_at,
      alive_runner_count: item.alive_runner_count ?? 0
    })));
  } catch (error) {
    let w = F(error);
    if (Im(error, Ae)) t(`fetchSelfHostedPools failed: ${w.message}`, {
      level: "error"
    }), c("teleport_self_hosted_pool_list", "api_error");else a(w), c("teleport_self_hosted_pool_list", "unexpected");
    return [];
  }
}
var _t = {
  refusal_fallback_prompt: "choose: retry on fallback model or edit prompt",
  auto_mode_server_fallback: "acknowledge the classifier billing notice (Enter continues in auto mode)",
  auto_mode_outside_reads: "choose: keep allowing reads outside the working directories, or block them"
};
function ukr(e, n) {
  return e === b_e && typeof n.source === "string" ? n.source : void 0;
}
var F0t = "dialog:mcp_elicitation";
function fkr(dialog_kind, payload, request_id, s) {
  return {
    tool_name: `dialog:${dialog_kind}`,
    display_tool_name: "Claude needs your input",
    action_description: _t[dialog_kind] ?? (dialog_kind === b_e && typeof payload.title === "string" ? payload.title : `Respond to the ${dialog_kind} dialog to continue`),
    raw_command: void 0,
    tool_use_id: s ?? "",
    request_id: request_id,
    input: {
      dialog_kind: dialog_kind,
      payload: payload
    }
  };
}
import { randomUUID as yt } from "crypto";
function lkr(e, n, events, s, device_attestation) {
  if (Nb(n, "sessionId"), !s) return {
    url: `${e}/v1/sessions/${n}/events`,
    body: {
      events: events
    }
  };
  let y = Ld(n);
  return {
    url: `${e}/v1/code/sessions/${encodeURIComponent(y)}/events`,
    body: {
      events: events.map(item => ({
        payload: typeof item.uuid === "string" && item.uuid ? item : {
          ...item,
          uuid: yt()
        },
        ...(device_attestation && {
          device_attestation: device_attestation
        })
      }))
    }
  };
}
import { randomUUID as ht } from "crypto";
var a$i = "tengu_woven_harbor",
  pkr = "tengu_drifting_twilight",
  N_s = !0,
  l$i = "tengu_buzzing_river";
var Pe = 16;
function Lfo(mode, {
  ultraplan: ultraplan,
  isFromSettings = !1
} = {}) {
  return {
    type: "event",
    data: {
      type: "control_request",
      request_id: `set-mode-${ht()}`,
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
function F_s(e) {
  return {
    envVars: Object.keys(e.environmentVariables ?? {}).length > 0,
    events: e.events.filter(item => !ke(item)).map(Et)
  };
}
var W = "<redacted>";
function re(e) {
  if (!it(e)) return;
  let {
    seed_bundle_file_id: seed_bundle_file_id,
    environment_variables: environment_variables
  } = e;
  if (seed_bundle_file_id === void 0 && environment_variables === void 0) return;
  return {
    ...e,
    ...(seed_bundle_file_id !== void 0 && {
      seed_bundle_file_id: W
    }),
    ...(environment_variables !== void 0 && {
      environment_variables: it(environment_variables) ? Object.fromEntries(Object.keys(environment_variables).map(item => [item, W])) : W
    })
  };
}
function d$i(e) {
  let bind_attestation = e.bind_attestation,
    r = re(e),
    session_context = re(e.session_context),
    config = re(e.config);
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
      bind_attestation: it(bind_attestation) ? {
        ...bind_attestation,
        signature: W
      } : W
    })
  };
}
var St = new Set(["set_permission_mode", "set_mcp_permission_mode_override", "set_max_thinking_tokens", "mcp_toggle"]);
function Oe(e) {
  let request = e.data.request;
  return e.data.type === "control_request" && typeof request?.subtype === "string" ? request.subtype : void 0;
}
function ke(e) {
  if (e.data.type === "user") return !0;
  let n = Oe(e);
  return n !== void 0 && St.has(n);
}
function Et(e) {
  return Oe(e) ?? String(e.data.type);
}
function mkr(e) {
  let deviceBinding = e.deviceBinding,
    r = deviceBinding ? e.events.filter(item => ke(item) && !(e.deferFirstPrompt && item.data.type === "user")) : e.events;
  if (deviceBinding && r.length > Pe) throw new R(`session create allows at most ${Pe} initial events, got ${r.length}`, "session create: too many initial events");
  let environment_variables_2 = deviceBinding ? {} : e.environmentVariables ?? {},
    disallowed_tools = L([...(e.disallowedTools ?? []), ...(deviceBinding ? n7i : [])]);
  return {
    ...(e.title && {
      title: e.title
    }),
    ...e.worker,
    ...H_s(e.persistentVolume, e.persistentVolumeFromSessionId),
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
      sources: e.sources.map(wt),
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
      ...(e.programUseCaseId && {
        program_use_case_id: e.programUseCaseId
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
      }),
      ...(e.autofixOnPrCreate !== void 0 && {
        autofix_on_pr_create: e.autofixOnPrCreate
      })
    }
  };
}
function H_s(e, n) {
  return;
}
function hkr(e, n) {
  let r = e === "v1alpha2" ? n?.session : n;
  if (typeof r?.id !== "string" || r.id === "") return yh("no_session_id");
  if (!dVn(r.id)) return yh("unusable_session_id");
  return Fb({
    ...r,
    title: typeof r.title === "string" ? ta(r.title) : null
  });
}
function $_s(e, n) {
  return e.title || ta(n);
}
function wt(e) {
  let {
    allow_unrestricted_git_push: allow_unrestricted_git_push,
    ...r
  } = e;
  return r;
}
function U_s(e, n) {
  if (e === 401) return `${n || "Claude login not accepted"} \xB7 Run /login, then try again`;
  return;
}
function B_s(e, n) {
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
var okr = "auto-mode-classifier-error.txt",
  skr = "auto-mode-dump.",
  ikr = "auto-mode-env-edit-",
  akr = "auto-mode-builtins-",
  e$i = "auto-mode-classifier-dump",
  t$i = "auto-mode-classifier-system";
function n$i(e) {
  if (typeof e !== "object" || e === null || !("type" in e)) return !1;
  return e.type === "auto-mode-classifier-dump" || e.type === "auto-mode-classifier-system";
}
function c$i(e) {
  if (e.branchDropped && e.warnMessage) {
    if (l("tengu_bridge_outcome_branch_dropped", {
      reason: f(e.branchDropped)
    }), t(e.warnMessage, {
      level: "warn"
    }), e.branchDropped === "no_evidence") console.warn(e.warnMessage);
  }
  if (e.revisionGuessUsed) l("tengu_bridge_revision_guess_used", {});
}
var Ce = {
  no_session_id: {
    debug: "No session ID in response",
    code: "bridge_session_create_bad_response"
  },
  unusable_session_id: {
    debug: "Unusable session ID in response",
    code: "bridge_session_create_unusable_id"
  }
};
async function j_s({
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
    } = await import("B:/~BUN/root/chunk-zcjq31as.js"),
    {
      loginToHandOn: loginToHandOn
    } = await import("B:/~BUN/root/chunk-9y0wnw7e.js"),
    {
      readHostSessionsBearer: readHostSessionsBearer,
      recoverHostSessionsBearer: recoverHostSessionsBearer
    } = await import("B:/~BUN/root/chunk-qk0ahq1k.js"),
    {
      bearerOf: bearerOf
    } = await import("B:/~BUN/root/chunk-hbeq156p.js"),
    {
      getOrganizationUUID: getOrganizationUUID
    } = await import("B:/~BUN/root/chunk-92frxbpz.js"),
    {
      getOauthConfig: getOauthConfig
    } = await import("B:/~BUN/root/chunk-nyvj6bfd.js"),
    {
      sessionsApiWire: sessionsApiWire
    } = await import("B:/~BUN/root/chunk-xc64vz5b.js"),
    {
      getMainLoopModel: getMainLoopModel
    } = await import("B:/~BUN/root/chunk-fna5wq6d.js"),
    {
      getOriginalCwd: getOriginalCwd
    } = await import("B:/~BUN/root/chunk-vtqz71wt.js"),
    {
      default: Be
    } = await import("B:/~BUN/root/chunk-mj4h9fmj.js"),
    {
      isCcrV2BridgeCreateEnabled: isCcrV2BridgeCreateEnabled
    } = await import("B:/~BUN/root/chunk-n0wh7j50.js"),
    K = isCcrV2BridgeCreateEnabled() ? "v1alpha2" : "v1",
    N = {
      create_endpoint: f(K)
    },
    {
      isFirstPartyProvider: isFirstPartyProvider
    } = await import("B:/~BUN/root/chunk-rwm37q80.js");
  if (!isFirstPartyProvider()) return t("[bridge] Session create skipped on non-firstParty provider"), V("bridge_session_create_3p_provider", N);
  let J = getAccessToken?.() ?? ie(readHostSessionsBearer, X() && credentials_3 !== void 0 ? loginToHandOn(await getClaudeAIOAuthTokensAsync(credentials_3))?.accessToken : loginToHandOn(getClaudeAIOAuthTokens())?.accessToken);
  if (!J) return t("[bridge] No access token for session creation"), V("bridge_session_create_no_token", N);
  let ae = await getOrganizationUUID();
  if (!ae) return t("[bridge] No org UUID for session creation"), V("bridge_session_create_no_org", N);
  let {
      sources: sources,
      outcomes: outcomes,
      report: report
    } = await JCs(gitRepoUrl, branch, defaultBranch),
    worker = U0n(environmentId),
    model = getMainLoopModel(),
    cwd = getOriginalCwd(),
    events_2 = permissionMode ? [Lfo(permissionMode)] : [],
    $e = K === "v1alpha2" ? mkr({
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
    me = sessionsApiWire(K, baseUrl ?? getOauthConfig().BASE_API_URL, J),
    headers = {
      ...me.headers,
      "x-organization-uuid": ae
    },
    U;
  try {
    U = await Be.post(me.url, $e, {
      headers: headers,
      signal: signal_2,
      validateStatus: M => M < 500
    });
  } catch (error) {
    return t(`[bridge] Session creation request failed: ${d(error)}`), V("bridge_session_create_request_failed", N);
  }
  if (!(U.status === 200 || U.status === 201)) {
    if (U.status === 401) recoverHostSessionsBearer(bearerOf(U.config?.headers?.get?.("Authorization")) ?? J, PO(U.config) ? "withheld" : "refused").catch(() => {});
    let M = AD(U.data);
    return t(`[bridge] Session creation failed with status ${U.status}${M ? `: ${M}` : ""}`), V("bridge_session_create_http_error", N);
  }
  let z = hkr(K, U.data);
  if (!z.ok) return t(`[bridge] ${Ce[z.error].debug}`), V(Ce[z.error].code, N);
  return c$i(report), g("bridge_session_create", N), Jf(z.value.id);
}
async function H0t(e, n) {
  return (await $0t(e, n)).session;
}
async function $0t(e, n) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens_2,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync_2
    } = await import("B:/~BUN/root/chunk-zcjq31as.js"),
    {
      loginToHandOn: loginToHandOn_2
    } = await import("B:/~BUN/root/chunk-9y0wnw7e.js"),
    {
      readHostSessionsBearer: readHostSessionsBearer_2,
      recoverHostSessionsBearer: recoverHostSessionsBearer_2
    } = await import("B:/~BUN/root/chunk-qk0ahq1k.js"),
    {
      getOauthConfig: getOauthConfig_2
    } = await import("B:/~BUN/root/chunk-nyvj6bfd.js"),
    {
      getCodeSession: getCodeSession
    } = await import("B:/~BUN/root/chunk-145aree3.js"),
    {
      isCcrV2SessionCrudEnabled: isCcrV2SessionCrudEnabled
    } = await import("B:/~BUN/root/chunk-n0wh7j50.js"),
    {
      isFirstPartyProvider: isFirstPartyProvider_2
    } = await import("B:/~BUN/root/chunk-rwm37q80.js");
  if (!isFirstPartyProvider_2()) return m("bridge_session_get", "bridge_session_get_3p_provider"), {
    session: null,
    notFound: !1
  };
  let x = n?.getAccessToken?.() ?? ie(readHostSessionsBearer_2, X() && n?.credentials !== void 0 ? loginToHandOn_2(await getClaudeAIOAuthTokensAsync_2(n.credentials))?.accessToken : loginToHandOn_2(getClaudeAIOAuthTokens_2())?.accessToken);
  if (!x) return t("[bridge] No access token for session fetch"), m("bridge_session_get", "bridge_session_get_no_token"), {
    session: null,
    notFound: !1
  };
  let useV2 = n?.useV2 ?? isCcrV2SessionCrudEnabled(),
    orgUUID;
  if (!useV2) {
    let {
      getOrganizationUUID: getOrganizationUUID_2
    } = await import("B:/~BUN/root/chunk-92frxbpz.js");
    if (orgUUID = (await getOrganizationUUID_2()) ?? void 0, !orgUUID) return t("[bridge] No org UUID for session fetch"), m("bridge_session_get", "bridge_session_get_no_org"), {
      session: null,
      notFound: !1
    };
  }
  let E = await getCodeSession(n?.baseUrl ?? getOauthConfig_2().BASE_API_URL, x, e, 1e4, {
    useV2: useV2,
    orgUUID: orgUUID
  });
  if (typeof E !== "object") {
    if (E === 401) recoverHostSessionsBearer_2(x).catch(() => {});
    return m("bridge_session_get", E === "invalid" ? "bridge_session_get_invalid_id" : typeof E === "number" ? "bridge_session_get_http_error" : "bridge_session_get_request_failed"), {
      session: null,
      notFound: E === 404
    };
  }
  return g("bridge_session_get"), {
    session: {
      environment_id: E.environment_id,
      title: E.title,
      status: E.status,
      created_at: E.created_at,
      updated_at: E.updated_at,
      connection_status: "connection_status" in E && typeof E.connection_status === "string" ? E.connection_status : void 0,
      tags: E.tags
    },
    notFound: !1
  };
}
async function se(e, n, r, s) {
  let {
      getClaudeAIOAuthTokens: getClaudeAIOAuthTokens_3,
      getClaudeAIOAuthTokensAsync: getClaudeAIOAuthTokensAsync_3
    } = await import("B:/~BUN/root/chunk-zcjq31as.js"),
    {
      loginToHandOn: loginToHandOn_3
    } = await import("B:/~BUN/root/chunk-9y0wnw7e.js"),
    {
      readHostSessionsBearer: readHostSessionsBearer_3,
      recoverHostSessionsBearer: recoverHostSessionsBearer_3
    } = await import("B:/~BUN/root/chunk-qk0ahq1k.js"),
    {
      getOauthConfig: getOauthConfig_3
    } = await import("B:/~BUN/root/chunk-nyvj6bfd.js"),
    {
      updateCodeSession: updateCodeSession
    } = await import("B:/~BUN/root/chunk-145aree3.js"),
    {
      isCcrV2SessionCrudEnabled: isCcrV2SessionCrudEnabled_2
    } = await import("B:/~BUN/root/chunk-n0wh7j50.js"),
    {
      isFirstPartyProvider: isFirstPartyProvider_3
    } = await import("B:/~BUN/root/chunk-rwm37q80.js");
  if (!isFirstPartyProvider_3()) return m("bridge_session_patch", "bridge_session_patch_3p_provider"), "rejected";
  let A = s?.getAccessToken?.() ?? ie(readHostSessionsBearer_3, X() && s?.credentials !== void 0 ? loginToHandOn_3(await getClaudeAIOAuthTokensAsync_3(s.credentials))?.accessToken : loginToHandOn_3(getClaudeAIOAuthTokens_3())?.accessToken);
  if (!A) return t(`[bridge] No access token for session ${r} update`), "failed";
  let useV2_2 = "client_metadata" in n || isCcrV2SessionCrudEnabled_2(),
    orgUUID_2;
  if (!useV2_2) {
    let {
      getOrganizationUUID: getOrganizationUUID_3
    } = await import("B:/~BUN/root/chunk-92frxbpz.js");
    if (orgUUID_2 = (await getOrganizationUUID_3()) ?? void 0, !orgUUID_2) return t(`[bridge] No org UUID for session ${r} update`), "failed";
  }
  t(`[bridge] Updating session ${r}: ${e}`);
  let k = await updateCodeSession(s?.baseUrl ?? getOauthConfig_3().BASE_API_URL, A, e, n, 1e4, {
    useV2: useV2_2,
    orgUUID: orgUUID_2
  });
  if (k === "invalid") return m("bridge_session_patch", "bridge_session_patch_invalid_id"), "rejected";else if (typeof k !== "number") return m("bridge_session_patch", "bridge_session_patch_request_failed"), "failed";else if (k === 200) return t(`[bridge] Session ${r} updated successfully`), g("bridge_session_patch"), "landed";else {
    if (k === 401) recoverHostSessionsBearer_3(A).catch(() => {});
    return c("bridge_session_patch", "bridge_session_patch_http_error"), "failed";
  }
}
async function W_s(e, title_2, r) {
  return se(e, {
    title: title_2
  }, "title", r);
}
async function ySa(e, n, r) {
  return kca(e, {
    title: `Couldn't start \u2014 too many sessions are running \xB7 ${n}`,
    reason: "capacity"
  }, r);
}
async function kca(e, n, r) {
  return se(e, {
    title: n.title,
    client_metadata: {
      desktop_rc_refusal: {
        title: n.title,
        reason: n.reason
      }
    }
  }, "refusal", r);
}
async function z_s(e, n, r, s) {
  await se(e, Ovo(n, r), "color tag", s);
}
async function _Sa(e, n, r) {
  return !1;
}
function V(e, n) {
  return m("bridge_session_create", e, n), null;
}
function ie(e, n) {
  return n === void 0 ? void 0 : e() ?? n;
}
function B0n(e) {
  let teleportedSessionIds = _o().teleportedSessionIds;
  if (teleportedSessionIds.add(jn(e)), teleportedSessionIds.size > 64) {
    let r = teleportedSessionIds.values().next().value;
    if (r !== void 0) teleportedSessionIds.delete(r);
  }
}
function Dx(e) {
  return _o().teleportedSessionIds.has(jn(e));
}
function Ffo(e) {
  _o().teleportedSessionIds.delete(jn(e));
}
class Ue {
  listener = void 0;
}
var De = new Je(() => new Ue());
function s$i(e, n) {
  try {
    return De.peek(e)?.listener?.(n)?.catch(a);
  } catch (error) {
    a(error);
    return;
  }
}
function i$i(e) {
  let n = De.of(H());
  return n.listener = e, () => {
    if (n.listener === e) n.listener = void 0;
  };
}
export { UHi, A_s, BHi, jHi, WHi, x_s, zHi, jpt, GHi, VHi, KHi, ImageSizeError as Wpt, rue, fZt, ekr, qHi, tkr, YHi, pZt, P_s, XHi, O_s, JHi, mZt, N0n, Yze, I_s, M_s, QHi, F0n, H0n, Mfo, Dfo, ZHi, nkr, rkr, okr, skr, ikr, akr, e$i, t$i, n$i, hZt, r$i, o$i, lkr, xJe, PJe, gZt, dkr, yZt, qoe, $0n, oLe, _Zt, b_e, KZ, Xze, ckr, D_s, bZt, L_s, zpt, Gpt, ukr, F0t, fkr, s$i, i$i, a$i, pkr, N_s, l$i, Lfo, F_s, d$i, mkr, H_s, hkr, $_s, U_s, B_s, rCe, Q$, zW, Nfo, gkr, sLe, Q6, U0n, GW, Vpt, ykr, c$i, j_s, H0t, $0t, W_s, ySa, kca, z_s, _Sa, B0n, Dx, Ffo };