// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { W4 } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { X3n } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { gyt, LFr } from "B:/~BUN/root/chunk-e4q58xft.js";
import { mge } from "B:/~BUN/root/chunk-hb6x4e3n.js";
var regExp = new RegExp(`^<${W4}[ \\t>]`),
  S = `</${W4}>`,
  C = ["", `
`],
  I = /\sfrom-plugin\s*(?:=\s*(?:"[^"<>]*"|'[^'<>]*'|[^\s>]*))?/gi,
  A = /from-plugin/i;
function B8(e, n) {
  if (typeof e === "string") return h(e, n === mge);
  if (!Array.isArray(e)) return e;
  let t = e;
  for (let o of C) {
    let s = [],
      c = [],
      r = "";
    t.forEach((item, index) => {
      if (item.type === "text") {
        if (c.length > 0) r += o;
        s.push(r.length), c.push(index), r += item.text;
      }
    });
    let l = LFr(r);
    if (l.length === 0) continue;
    let g = t.slice(),
      a = 0;
    c.forEach((item, index) => {
      let f = g[item],
        P = s[index],
        _ = s[index + 1] ?? 1 / 0;
      if (f.type !== "text") return;
      let p = [],
        E = 0;
      for (; a < l.length && l[a] < _; a++) {
        let m = l[a] - P;
        p.push(f.text.slice(E, m), "<\\"), E = m + 1;
      }
      if (p.length > 0) p.push(f.text.slice(E)), g[item] = {
        ...f,
        text: p.join("")
      };
    }), t = g;
  }
  return t;
}
function Mds(e) {
  return h(e, !0);
}
function h(e, n) {
  let t = e.trimEnd(),
    o = t.length - S.length,
    s = X3n.test(e);
  if (!(o > 0 && t.endsWith(S) && (s || n && regExp.test(e)))) return gyt(e);
  let r = B(e.slice(1, o));
  return A.test(O(r)) ? gyt(e) : `<${gyt(r)}${e.slice(o)}`;
}
function B(e) {
  let n = O(e);
  return n.replace(I, "") + e.slice(n.length);
}
function O(e) {
  let n = e.indexOf(">");
  return n < 0 ? e : e.slice(0, n);
}
export { B8, Mds };