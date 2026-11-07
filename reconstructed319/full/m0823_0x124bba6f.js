// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  mc
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  _,
  ds
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  alr,
  Sye,
  His
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  DTs,
  Ght,
  jHn
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  mZt
} from "B:/~BUN/root/chunk-e8znf4zw.js";
import {
  _Ue
} from "B:/~BUN/root/chunk-arzyzazz.js";
import {
  l5e,
  BAt
} from "B:/~BUN/root/chunk-y9cmj6rs.js";
import {
  gNe
} from "B:/~BUN/root/chunk-zect39e3.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
var a = "[conversation summary withheld: it may include account memory]";

function kne(e, o) {
  let s = mZt([...e]).filter((n) => !alr(n) && !(n.type === "system" && ("persist" in n) && n.persist === !1)),
    r = h(e, o);
  return s.map((n) => T(n, r) ? A(n) : n)
}

function h(e, {
  host: o
}) {
  return _Ue(o) || e.some(alr)
}

function T(e, o) {
  if (!o || e.type !== "user") return !1;
  let s = e.message;
  return e.isCompactSummary === !0 || e.repeatsCompactSummary === !0 || jHn(s?.content)
}

function A(e) {
  let o = e.isCompactSummary === !0 ? a : `<${mc}>${a}</${mc}>`,
    {
      modelOnlyText: s,
      ...r
    } = e,
    n = {
      ...r
    };
  for (let t of [...l5e, ...BAt])
    if (t !== "summarizeMetadata") delete n[t];
  return {
    ...n,
    message: {
      ...e.message,
      role: e.message?.role ?? "user",
      content: typeof e.message?.content === "string" ? o : [{
        type: "text",
        text: o
      }]
    }
  }
}

function DPe(e, o) {
  if (!h([], o)) return {
    jsonl: e,
    hits: 0
  };
  let s = 0;
  return {
    jsonl: e.split(`
`).map((n) => {
      let t = 0;
      while (n.charCodeAt(t) === 0 || n.charCodeAt(t) === 65279) t++;
      let u = t > 0 ? n.slice(t) : n;
      if (u.trim() === "") return n;
      let m = C.some((c) => u.includes(c)),
        i;
      try {
        i = ds(u)
      } catch {
        i = void 0
      }
      if (!y(i)) return s++, _({
        type: "line-withheld",
        bytes: Buffer.byteLength(n)
      });
      if (m && i.type === S) {
        let c = B(i);
        if (c !== void 0) return s++, _(c);
        return n
      }
      if (!m || i.type !== "user") return n;
      let l = y(i.message) ? i.message : void 0,
        f = l?.content;
      if (i.isCompactSummary !== !0 && i.repeatsCompactSummary !== !0 && !jHn(f)) return n;
      s++;
      let d = i.isCompactSummary === !0 ? a : `<${mc}>${a}</${mc}>`,
        p = {
          ...i
        };
      delete p.modelOnlyText;
      for (let c of [...l5e, ...BAt])
        if (c !== "summarizeMetadata") delete p[c];
      return p.message = {
        role: "user",
        ...l,
        content: typeof f === "string" ? d : [{
          type: "text",
          text: d
        }]
      }, _(p)
    }).join(`
`),
    hits: s
  }
}
var C = ['"isCompactSummary"', '"repeatsCompactSummary"', DTs, Ght],
  S = "api-request-blob";

function B(e) {
  let o = y(e.message) ? e.message : void 0;
  if (o?.role !== "user") return;
  let {
    content: s
  } = o;
  if (typeof s === "string") return s.includes(Ght) ? {
    ...e,
    message: {
      ...o,
      content: a
    }
  } : void 0;
  if (!Array.isArray(s)) return;
  let r = !1,
    n = s.map((t) => {
      if (gNe(t) && t.text.includes(Ght)) return r = !0, {
        ...t,
        text: a
      };
      return t
    });
  return r ? {
    ...e,
    message: {
      ...o,
      content: n
    }
  } : void 0
}

function y(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e)
}

function SWr(e, o, s = []) {
  let r = {
    keys: L(e.filter((t) => t.trim() !== "").flatMap(His).filter((t) => !a.includes(t))).sort((t, u) => u.length - t.length),
    replaced: L(s.map((t) => t.trim()).filter((t) => t !== "" && !a.includes(t))).sort((t, u) => u.length - t.length),
    hits: 0
  };
  return {
    messages: r.keys.length === 0 && r.replaced.length === 0 ? o : o.flatMap((t) => {
      if (t.role !== "user") return [t];
      let u = x(t.content, r);
      return u === void 0 ? [] : [{
        ...t,
        content: u
      }]
    }),
    keys: r.keys.length + r.replaced.length,
    hits: r.hits
  }
}

function x(e, o) {
  if (typeof e === "string") {
    let r = g(e, o);
    return M(r) ? void 0 : r
  }
  let s = e.flatMap((r) => {
    if (k(r)) {
      let n = g(r.text, o);
      return M(n) ? [] : [{
        ...r,
        text: n
      }]
    }
    if (w(r) && r.content !== void 0) return [{
      ...r,
      content: x(r.content, o) ?? ""
    }];
    return [r]
  });
  return s.length === 0 ? void 0 : s
}

function k(e) {
  return e.type === "text" && "text" in e && typeof e.text === "string"
}

function w(e) {
  return e.type === "tool_result"
}

function g(e, o) {
  let s = e;
  for (let r = 0;; r++) {
    if (r > e.length) return a;
    let n = o.replaced.find((i) => s.includes(i)),
      t = o.keys.find((i) => s.includes(i)),
      u = n !== void 0 && (t === void 0 || n.length >= t.length) ? n : t;
    if (u === void 0) return s;
    let m = s.split(u);
    o.hits += m.length - 1, s = m.join(u === n ? a : "")
  }
}

function M(e) {
  return Sye(e).trim() === ""
}
export {
  kne,
  DPe,
  SWr
};
