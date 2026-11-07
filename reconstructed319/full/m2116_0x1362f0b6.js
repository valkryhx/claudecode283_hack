// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  wSe
} from "B:/~BUN/root/chunk-smrt7z22.js";
import {
  jfo,
  L$i,
  oue
} from "B:/~BUN/root/chunk-076mmgjt.js";
import {
  r6
} from "B:/~BUN/root/chunk-q1xrynbv.js";
import {
  eje,
  Yxt,
  Hge,
  Yve,
  MP
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  Cgr,
  hJt,
  ccs,
  yPi,
  _Pi,
  bPi,
  SPi
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  OHr,
  CVn
} from "B:/~BUN/root/chunk-tr26qctc.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";

function hQs(r) {
  return v("tengu_ccr_external_event_record", !1) ? r : void 0
}

function C(r, l, u) {
  let s = l.flat(),
    m = Cgr(r),
    p = hJt(r, s, m),
    i = new Set(p.map((e) => r.slice(e.from, e.to))),
    f = (e) => {
      let a = m(e),
        o = a(0);
      for (let d of p) {
        if (o !== -1 && o < d.from) o = a(d.from);
        if (o === -1) return !1;
        if (o + e.length <= d.to) return !0
      }
      return !1
    };
  if (l.some((e) => !e.some((a) => i.has(a)) && !e.some(f))) c("sdk_pasted_content", "inline_paste_not_found");
  let _ = eje();
  return SPi(r, bPi(p, _Pi(r, ccs([...p, ...yPi(r, s, m)]), u)), (e) => ({
    opener: OHr(_),
    body: Hge(e),
    closer: CVn(_)
  }), Hge)
}

function Ist(r, l, u) {
  let s = r ?? "",
    {
      texts: m,
      problem: p
    } = jfo(l),
    i = L$i(u);
  if (p !== void 0) c("sdk_pasted_content", p);
  if (i.problem !== void 0) c("sdk_pasted_content", i.problem);
  if (m.length === 0 && i.texts.length === 0) return s;
  let f = MP();
  if (p === void 0 && i.problem === void 0) g("sdk_pasted_content", {
    tagged: f,
    ...i.texts.length > 0 && {
      inline: !0
    }
  });
  if (m.length === 0 && !f) return s;
  let _ = i.texts.map((t) => t.trim()).filter((t) => t.length >= Yxt).map((t) => L([t, oue(`x${t}`).slice(1).trim(), oue(`${t}x`).slice(0, -1).trim(), oue(t).trim()].flatMap((n) => [n, wSe(n), r6(n)])).filter((n) => n.length >= Yxt)),
    e = (t) => !f ? t : Array.isArray(u) ? C(t, _, i.texts.map((n) => n.trim()).filter((n) => n !== "" && n.length < Yxt)) : Hge(t),
    a = m.map((t) => f ? Yve(t) : `

${t}`).join("");
  if (typeof s === "string") return r6(e(s) + a);
  let o = s.findLastIndex((t) => t.type === "text"),
    d = s.map((t, n) => t.type !== "text" ? t : n === o ? {
      ...t,
      text: e(t.text)
    } : f ? {
      ...t,
      text: Hge(t.text)
    } : t),
    P = d[o];
  return r6(P?.type !== "text" ? a === "" ? d : [...d, {
    type: "text",
    text: a
  }] : [...d.slice(0, o), {
    ...P,
    text: P.text + a
  }, ...d.slice(o + 1)])
}
export {
  hQs,
  Ist
};
