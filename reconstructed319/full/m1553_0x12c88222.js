// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  u7
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  yDr
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  Tan
} from "B:/~BUN/root/chunk-jgwwv4gf.js";
import {
  wSe,
  hTo
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  Xbe
} from "B:/~BUN/root/chunk-1ks9vs37.js";
var d = new RegExp(`^<${u7}[ \\t>]`),
  S = `</${u7}>`,
  C = ["", `
`],
  I = /\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi,
  A = /from-plugin/i;

function r6(e, n) {
  if (typeof e === "string") return h(e, n === Xbe);
  if (!Array.isArray(e)) return e;
  let t = e;
  for (let o of C) {
    let s = [],
      l = [],
      r = "";
    t.forEach((i, p) => {
      if (i.type === "text") {
        if (l.length > 0) r += o;
        s.push(r.length), l.push(p), r += i.text
      }
    });
    let a = hTo(r);
    if (a.length === 0) continue;
    let g = t.slice(),
      u = 0;
    l.forEach((i, p) => {
      let c = g[i],
        P = s[p],
        _ = s[p + 1] ?? 1 / 0;
      if (c.type !== "text") return;
      let f = [],
        E = 0;
      for (; u < a.length && a[u] < _; u++) {
        let m = a[u] - P;
        f.push(c.text.slice(E, m), "<\\"), E = m + Tan(c.text, m)
      }
      if (f.length > 0) f.push(c.text.slice(E)), g[i] = {
        ...c,
        text: f.join("")
      }
    }), t = g
  }
  return t
}

function Omi(e) {
  return h(e, !0)
}

function h(e, n) {
  let t = e.trimEnd(),
    o = t.length - S.length,
    s = yDr.test(e);
  if (!(o > 0 && t.endsWith(S) && (s || n && d.test(e)))) return wSe(e);
  let r = B(e.slice(1, o));
  return A.test(O(r)) ? wSe(e) : `<${wSe(r)}${e.slice(o)}`
}

function B(e) {
  let n = O(e);
  return n.replace(I, "") + e.slice(n.length)
}

function O(e) {
  let n = e.indexOf(">");
  return n < 0 ? e : e.slice(0, n)
}
export {
  r6,
  Omi
};
