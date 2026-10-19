// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Pl } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { L } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _, jo } from "B:/~BUN/root/chunk-6za2ez23.js";
import { v0n, Kse, lmo } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { KDt, KEo, YDt, Orn } from "B:/~BUN/root/chunk-fb07w30y.js";
import { EHs } from "B:/~BUN/root/chunk-yjayxywk.js";
import { WFe, _it } from "B:/~BUN/root/chunk-3gsbhf9p.js";
import { Uve } from "B:/~BUN/root/chunk-jj7se8bh.js";
function Qwt(e) {
  return EHs(e) || !1;
}
var a = "[conversation summary withheld: it may include account memory]";
function a8(e, o) {
  let s = KDt([...e]).filter(item => !v0n(item) && !(item.type === "system" && "persist" in item && item.persist === !1)),
    r = h(e, o);
  return s.map(item => T(item, r) ? A(item) : item);
}
function h(e, {
  host: host
}) {
  return Qwt(host) || e.some(v0n);
}
function T(e, o) {
  if (!o || e.type !== "user") return !1;
  let s = e.message;
  return e.isCompactSummary === !0 || e.repeatsCompactSummary === !0 || Orn(s?.content);
}
function A(e) {
  let text = e.isCompactSummary === !0 ? a : `<${Pl}>${a}</${Pl}>`,
    {
      modelOnlyText: modelOnlyText,
      ...r
    } = e,
    n = {
      ...r
    };
  for (let t of [...WFe, ..._it]) if (t !== "summarizeMetadata") delete n[t];
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
function Vye(jsonl, o) {
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
      let m = S.some(item => u.includes(item)),
        i;
      try {
        i = jo(u);
      } catch {
        i = void 0;
      }
      if (!y(i)) return hits++, _({
        type: "line-withheld",
        bytes: Buffer.byteLength(item)
      });
      if (m && i.type === C) {
        let c = B(i);
        if (c !== void 0) return hits++, _(c);
        return item;
      }
      if (!m || i.type !== "user") return item;
      let l = y(i.message) ? i.message : void 0,
        f = l?.content;
      if (i.isCompactSummary !== !0 && i.repeatsCompactSummary !== !0 && !Orn(f)) return item;
      hits++;
      let text_2 = i.isCompactSummary === !0 ? a : `<${Pl}>${a}</${Pl}>`,
        p = {
          ...i
        };
      delete p.modelOnlyText;
      for (let c of [...WFe, ..._it]) if (c !== "summarizeMetadata") delete p[c];
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
var S = ['"isCompactSummary"', '"repeatsCompactSummary"', KEo, YDt],
  C = "api-request-blob";
function B(e) {
  let o = y(e.message) ? e.message : void 0;
  if (o?.role !== "user") return;
  let {
    content: content
  } = o;
  if (typeof content === "string") return content.includes(YDt) ? {
    ...e,
    message: {
      ...o,
      content: a
    }
  } : void 0;
  if (!Array.isArray(content)) return;
  let r = !1,
    content_2 = content.map(item => {
      if (Uve(item) && item.text.includes(YDt)) return r = !0, {
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
function atr(e, o, s = []) {
  let r = {
    keys: L(e.filter(item => item.trim() !== "").flatMap(lmo).filter(item => !a.includes(item))).sort((itemA, itemB) => itemB.length - itemA.length),
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
  return Kse(e).trim() === "";
}
export { Qwt, a8, Vye, atr };