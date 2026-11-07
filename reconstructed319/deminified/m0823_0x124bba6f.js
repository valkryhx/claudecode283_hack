// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { mc } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { _, ds } from "B:/~BUN/root/chunk-2pp12te6.js";
import { alr, Sye, His } from "B:/~BUN/root/chunk-27h4st9h.js";
import { DTs, Ght, jHn } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { mZt } from "B:/~BUN/root/chunk-e8znf4zw.js";
import { _Ue } from "B:/~BUN/root/chunk-arzyzazz.js";
import { l5e, BAt } from "B:/~BUN/root/chunk-y9cmj6rs.js";
import { gNe } from "B:/~BUN/root/chunk-zect39e3.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
var a = "[conversation summary withheld: it may include account memory]";
function kne(e, o) {
  let s = mZt([...e]).filter(item => !alr(item) && !(item.type === "system" && "persist" in item && item.persist === !1)),
    r = h(e, o);
  return s.map(item => T(item, r) ? A(item) : item);
}
function h(e, {
  host: host
}) {
  return _Ue(host) || e.some(alr);
}
function T(e, o) {
  if (!o || e.type !== "user") return !1;
  let s = e.message;
  return e.isCompactSummary === !0 || e.repeatsCompactSummary === !0 || jHn(s?.content);
}
function A(e) {
  let text = e.isCompactSummary === !0 ? a : `<${mc}>${a}</${mc}>`,
    {
      modelOnlyText: modelOnlyText,
      ...r
    } = e,
    n = {
      ...r
    };
  for (let t of [...l5e, ...BAt]) if (t !== "summarizeMetadata") delete n[t];
  return {
    ...n,
    message: {
      ...e.message,
      role: e.message?.role ?? "user",
      content: typeof e.message?.content === "string" ? text : [{
        type: "text",
        text: text
      }]
    }
  };
}
function DPe(jsonl, o) {
  if (!h([], o)) return {
    jsonl: jsonl,
    hits: 0
  };
  let hits = 0;
  return {
    jsonl: jsonl.split(`
`).map(item => {
      let t = 0;
      while (item.charCodeAt(t) === 0 || item.charCodeAt(t) === 65279) t++;
      let u = t > 0 ? item.slice(t) : item;
      if (u.trim() === "") return item;
      let m = C.some(item => u.includes(item)),
        i;
      try {
        i = ds(u);
      } catch {
        i = void 0;
      }
      if (!y(i)) return hits++, _({
        type: "line-withheld",
        bytes: Buffer.byteLength(item)
      });
      if (m && i.type === S) {
        let c = B(i);
        if (c !== void 0) return hits++, _(c);
        return item;
      }
      if (!m || i.type !== "user") return item;
      let l = y(i.message) ? i.message : void 0,
        f = l?.content;
      if (i.isCompactSummary !== !0 && i.repeatsCompactSummary !== !0 && !jHn(f)) return item;
      hits++;
      let text_2 = i.isCompactSummary === !0 ? a : `<${mc}>${a}</${mc}>`,
        p = {
          ...i
        };
      delete p.modelOnlyText;
      for (let c of [...l5e, ...BAt]) if (c !== "summarizeMetadata") delete p[c];
      return p.message = {
        role: "user",
        ...l,
        content: typeof f === "string" ? text_2 : [{
          type: "text",
          text: text_2
        }]
      }, _(p);
    }).join(`
`),
    hits: hits
  };
}
var C = ['"isCompactSummary"', '"repeatsCompactSummary"', DTs, Ght],
  S = "api-request-blob";
function B(e) {
  let o = y(e.message) ? e.message : void 0;
  if (o?.role !== "user") return;
  let {
    content: content
  } = o;
  if (typeof content === "string") return content.includes(Ght) ? {
    ...e,
    message: {
      ...o,
      content: a
    }
  } : void 0;
  if (!Array.isArray(content)) return;
  let r = !1,
    content_2 = content.map(item => {
      if (gNe(item) && item.text.includes(Ght)) return r = !0, {
        ...item,
        text: a
      };
      return item;
    });
  return r ? {
    ...e,
    message: {
      ...o,
      content: content_2
    }
  } : void 0;
}
function y(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function SWr(e, o, s = []) {
  let r = {
    keys: L(e.filter(item => item.trim() !== "").flatMap(His).filter(item => !a.includes(item))).sort((itemA, itemB) => itemB.length - itemA.length),
    replaced: L(s.map(item => item.trim()).filter(item => item !== "" && !a.includes(item))).sort((itemA, itemB) => itemB.length - itemA.length),
    hits: 0
  };
  return {
    messages: r.keys.length === 0 && r.replaced.length === 0 ? o : o.flatMap(item => {
      if (item.role !== "user") return [item];
      let content_3 = x(item.content, r);
      return content_3 === void 0 ? [] : [{
        ...item,
        content: content_3
      }];
    }),
    keys: r.keys.length + r.replaced.length,
    hits: r.hits
  };
}
function x(e, o) {
  if (typeof e === "string") {
    let r = g(e, o);
    return M(r) ? void 0 : r;
  }
  let s = e.flatMap(item => {
    if (k(item)) {
      let text_3 = g(item.text, o);
      return M(text_3) ? [] : [{
        ...item,
        text: text_3
      }];
    }
    if (w(item) && item.content !== void 0) return [{
      ...item,
      content: x(item.content, o) ?? ""
    }];
    return [item];
  });
  return s.length === 0 ? void 0 : s;
}
function k(e) {
  return e.type === "text" && "text" in e && typeof e.text === "string";
}
function w(e) {
  return e.type === "tool_result";
}
function g(e, o) {
  let s = e;
  for (let r = 0;; r++) {
    if (r > e.length) return a;
    let n = o.replaced.find(item => s.includes(item)),
      t = o.keys.find(item => s.includes(item)),
      u = n !== void 0 && (t === void 0 || n.length >= t.length) ? n : t;
    if (u === void 0) return s;
    let m = s.split(u);
    o.hits += m.length - 1, s = m.join(u === n ? a : "");
  }
}
function M(e) {
  return Sye(e).trim() === "";
}
export { kne, DPe, SWr };