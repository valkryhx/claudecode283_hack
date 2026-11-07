// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Qo
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  Xt
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  pAr,
  Lse
} from "B:/~BUN/root/chunk-j0enspnr.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  createHash as z
} from "crypto";
var j = 8388608,
  A = 24;
class w {
  shown = new Set;
  toolTexts = new Set;
  shownChars = 0;
  toolTextChars = 0;
  dropped = !1;
  genuine = !1;
  version = 0
}
var y = new W(() => new w);

function SKi(e) {
  let t = y.of(e);
  t.dropped = !0, t.version++
}

function wKi(e) {
  y.of(e).genuine = !0
}

function uAr(e, t) {
  let o = y.of(e);
  if (t.trim() === "" || !R(o.shown, t)) return;
  o.shownChars = T(o, o.shown, o.shownChars + t.length), o.version++
}

function f_o(e, t) {
  let o = y.of(e);
  if (t.trim() === "" || !R(o.toolTexts, t)) return;
  o.toolTextChars = T(o, o.toolTexts, o.toolTextChars + t.length), o.version++
}

function kKi(e) {
  if (e === void 0) return !0;
  let t = y.of(e);
  return t.shown.size > 0 || t.toolTexts.size > 0 || t.genuine || t.dropped
}

function p_o(e) {
  return y.of(e)
}

function T(e, t, o) {
  let n = o;
  while (n > j && t.size > 0) {
    let r = t.values().next().value;
    t.delete(r), n -= r.length, e.dropped = !0
  }
  return n
}

function R(e, t) {
  let o = e.delete(t);
  return e.add(t), !o
}
var S = Object.freeze({
    blocks: Object.freeze([]),
    lines: Object.freeze([]),
    unsearchable: !1,
    toolNames: new Set
  }),
  h = "[account memory text not recorded]";

function Lee(e) {
  return `<${e.length} chars; not recorded>`
}

function MFt(e) {
  return `<not recorded: ${e}>`
}

function ECs(e) {
  return e === "extract_memories" || e === "local_memory_import" || e === "auto_dream"
}

function Knn(e, t, o) {
  if (ECs(t)) return {
    withheld: "memory_operation"
  };
  try {
    let n = e();
    if (n.unsearchable) return {
      withheld: "account_memory_text_not_identified"
    };
    return {
      value: o(n)
    }
  } catch {
    return {
      withheld: "account_memory_redaction_failed"
    }
  }
}

function tbe(e, t, o) {
  let n = e === void 0 ? {
    withheld: "account_memory_text_not_identified"
  } : Knn(e, t, (r) => qnn(o, r));
  return "withheld" in n ? MFt(n.withheld) : n.value
}
var P = /^(?:[-*+>]|\d+[.)]|#{1,6})\s+/;

function TCs({
  rendered: e,
  verbatim: t,
  toolNames: o = S.toolNames,
  unsearchable: n = !1
}) {
  let r = (u) => u.trim() !== "",
    s = L(e.map((u) => u.trim()).filter(r)),
    i = L(t.map((u) => u.trim()).filter(r));
  if (s.length === 0 && i.length === 0 && o.size === 0 && !n) return S;
  let d = (u, l) => l.length - u.length,
    c = (u) => (_(u) ?? `"${u}"`).slice(1, -1),
    f = (u) => L(u.flatMap((l) => {
      let p = Xt(l);
      return [l, p, c(l), c(p), Xt(c(l)), Xt(p), c(c(l))]
    })).sort(d),
    a = f([...s, ...i.filter((u) => u.length >= A)]),
    b = f([...s, ...i].flatMap((u) => u.split(`
`)).flatMap((u) => {
      let l = u.trim(),
        p = l.replace(P, "");
      return [l, p].filter((v) => v.length >= A)
    }));
  return {
    blocks: a,
    lines: b,
    unsearchable: n,
    toolNames: o
  }
}

function wNe(e) {
  let t = p_o(e),
    o = E.get(e);
  if (o !== void 0 && o.version === t.version) return o.keys;
  let n = TCs({
    rendered: [],
    verbatim: [...t.shown, ...t.toolTexts],
    unsearchable: t.dropped
  });
  return E.set(e, {
    version: t.version,
    keys: n
  }), n
}
var E = new WeakMap;

function qnn(e, t) {
  if (t.blocks.length === 0 && t.lines.length === 0) return e;
  let {
    blocks: o,
    lines: n
  } = X(t);
  return K(K(e, o), n)
}
var F = 131072,
  U = 8,
  m = new Map,
  C = new WeakMap;

function X(e) {
  let t = C.get(e);
  if (t !== void 0) return t;
  let o = z("sha256").update(_([e.blocks, e.lines])).digest("hex"),
    n = m.get(o);
  if (n === void 0) {
    if (n = {
        blocks: B(e.blocks),
        lines: B(e.lines)
      }, m.size >= U) m.delete(m.keys().next().value);
    m.set(o, n)
  }
  return C.set(e, n), n
}

function B(e) {
  let t = e.filter((s) => s !== "" && !h.includes(s)).toSorted((s, i) => i.length - s.length).map(Qo),
    o = [],
    n = [],
    r = 0;
  for (let s of t) {
    if (n.length > 0 && r + s.length > F) o.push(new RegExp(n.join("|"), "g")), n = [], r = 0;
    n.push(s), r += s.length + 1
  }
  if (n.length > 0) o.push(new RegExp(n.join("|"), "g"));
  return o
}

function K(e, t) {
  let o = e;
  for (let n of t) o = o.replace(n, h);
  if (o === e) return e;
  for (let n = 0; t.some((r) => o.search(r) !== -1); n++) {
    if (n >= 16) throw Error("account-memory text still matched a search key after 16 replacement rounds");
    for (let r of t) o = o.replace(r, h)
  }
  return o
}

function M(e) {
  return e
}

function fAr(e, t, o = e) {
  let n = new Set;
  for (let r of o) {
    if (r.role !== "assistant" || typeof r.content === "string") continue;
    for (let s of r.content) {
      let i = M(s).id;
      if (N(s, t) && typeof i === "string") n.add(i)
    }
  }
  return e.map((r) => {
    let s = x(r.content, t, n);
    return s === r.content ? r : {
      ...r,
      content: s
    }
  })
}

function vKi(e, t) {
  return O(e, t, new Set)
}

function EKi(e, t) {
  return x(e, t, new Set)
}

function x(e, t, o) {
  if (typeof e === "string") return qnn(e, t);
  let n = O(e, t, o);
  return n.every((r, s) => r === e[s]) ? e : n
}

function O(e, t, o) {
  return e.map((n) => {
    let {
      text: r,
      thinking: s,
      input: i,
      tool_use_id: d,
      content: c
    } = M(n);
    if (n.type === "text" && typeof r === "string" || n.type === "thinking" && typeof s === "string") {
      let a = g(n, t, 0);
      return a === n ? n : a
    }
    if (n.type === "tool_use" || n.type === "server_tool_use") {
      if (N(n, t)) return {
        ...n,
        input: {
          not_recorded: Lee(H(i))
        }
      };
      let a = g(i, t, 0);
      return a === i ? n : {
        ...n,
        input: a
      }
    }
    if (n.type === "tool_result" && c !== void 0 && c !== null) {
      if (typeof d === "string" && o.has(d)) return {
        ...n,
        content: Lee(typeof c === "string" ? c : H(c))
      };
      if (typeof c === "string" || Array.isArray(c)) {
        let a = x(c, t, o);
        return a === c ? n : {
          ...n,
          content: a
        }
      }
    }
    if (D.has(n.type) || I(n)) return n;
    let f = g(n, t, 0);
    return f === n ? n : f
  })
}
var D = new Set(["image", "redacted_thinking", "container_upload"]);

function I(e) {
  let {
    source: t
  } = M(e);
  return e.type === "document" && typeof t === "object" && t !== null && t.type === "base64"
}

function N(e, t) {
  let {
    name: o
  } = M(e);
  return (e.type === "tool_use" || e.type === "server_tool_use") && typeof o === "string" && Lse(o, pAr(t.toolNames), "history")
}
var Y = 6;

function g(e, t, o) {
  if (typeof e === "string") return qnn(e, t);
  if (typeof e !== "object" || e === null) return e;
  if (o >= Y) return h;
  if (Array.isArray(e)) {
    let s = e.map((i) => g(i, t, o + 1));
    return s.every((i, d) => i === e[d]) ? e : s
  }
  let n = !1,
    r = Object.entries(e).map(([s, i]) => {
      let d = qnn(s, t),
        c = g(i, t, o + 1);
      return n ||= c !== i || d !== s, [d, c]
    });
  return n ? Object.fromEntries(r) : e
}

function H(e) {
  try {
    return _(e) ?? ""
  } catch {
    return ""
  }
}
export {
  SKi,
  wKi,
  uAr,
  f_o,
  kKi,
  p_o,
  Lee,
  MFt,
  ECs,
  Knn,
  tbe,
  TCs,
  wNe,
  qnn,
  fAr,
  vKi,
  EKi
};
