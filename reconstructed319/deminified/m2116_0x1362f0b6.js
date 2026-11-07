// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { wSe } from "B:/~BUN/root/chunk-smrt7z22.js";
import { jfo, L$i, oue } from "B:/~BUN/root/chunk-076mmgjt.js";
import { r6 } from "B:/~BUN/root/chunk-q1xrynbv.js";
import { eje, Yxt, Hge, Yve, MP } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Cgr, hJt, ccs, yPi, _Pi, bPi, SPi } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { OHr, CVn } from "B:/~BUN/root/chunk-tr26qctc.js";
import { L } from "B:/~BUN/root/chunk-5ha2avah.js";
function hQs(r) {
  return v("tengu_ccr_external_event_record", !1) ? r : void 0;
}
function C(r, l, u) {
  let s = l.flat(),
    m = Cgr(r),
    p = hJt(r, s, m),
    i = new Set(p.map(item => r.slice(item.from, item.to))),
    f = e => {
      let a = m(e),
        o = a(0);
      for (let d of p) {
        if (o !== -1 && o < d.from) o = a(d.from);
        if (o === -1) return !1;
        if (o + e.length <= d.to) return !0;
      }
      return !1;
    };
  if (l.some(item => !item.some(item => i.has(item)) && !item.some(f))) c("sdk_pasted_content", "inline_paste_not_found");
  let _ = eje();
  return SPi(r, bPi(p, _Pi(r, ccs([...p, ...yPi(r, s, m)]), u)), e => ({
    opener: OHr(_),
    body: Hge(e),
    closer: CVn(_)
  }), Hge);
}
function Ist(r, l, u) {
  let s = r ?? "",
    {
      texts: texts,
      problem: problem
    } = jfo(l),
    i = L$i(u);
  if (problem !== void 0) c("sdk_pasted_content", problem);
  if (i.problem !== void 0) c("sdk_pasted_content", i.problem);
  if (texts.length === 0 && i.texts.length === 0) return s;
  let tagged = MP();
  if (problem === void 0 && i.problem === void 0) g("sdk_pasted_content", {
    tagged: tagged,
    ...(i.texts.length > 0 && {
      inline: !0
    })
  });
  if (texts.length === 0 && !tagged) return s;
  let _ = i.texts.map(item => item.trim()).filter(item => item.length >= Yxt).map(item => L([item, oue(`x${item}`).slice(1).trim(), oue(`${item}x`).slice(0, -1).trim(), oue(item).trim()].flatMap(item => [item, wSe(item), r6(item)])).filter(item => item.length >= Yxt)),
    e = t => !tagged ? t : Array.isArray(u) ? C(t, _, i.texts.map(item => item.trim()).filter(item => item !== "" && item.length < Yxt)) : Hge(t),
    text = texts.map(item => tagged ? Yve(item) : `

${item}`).join("");
  if (typeof s === "string") return r6(e(s) + text);
  let o = s.findLastIndex(t => t.type === "text"),
    d = s.map((item, index) => item.type !== "text" ? item : index === o ? {
      ...item,
      text: e(item.text)
    } : tagged ? {
      ...item,
      text: Hge(item.text)
    } : item),
    P = d[o];
  return r6(P?.type !== "text" ? text === "" ? d : [...d, {
    type: "text",
    text: text
  }] : [...d.slice(0, o), {
    ...P,
    text: P.text + text
  }, ...d.slice(o + 1)]);
}
export { hQs, Ist };