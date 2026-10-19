// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  L
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  gyt
} from "B:/~BUN/root/chunk-e4q58xft.js";
import {
  Wfr,
  Tcs,
  eSe
} from "B:/~BUN/root/chunk-ewvp948s.js";
import {
  B8
} from "B:/~BUN/root/chunk-zg0dbxts.js";
import {
  txe,
  Aat,
  Sse,
  DHe,
  QA
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  KBn,
  r0t,
  Abo,
  TRs,
  CRs,
  RRs,
  ARs
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  oJn,
  Umn
} from "B:/~BUN/root/chunk-qvy7wp4j.js";

function jJo(r) {
  return E("tengu_ccr_external_event_record", !1) ? r : void 0
}

function C(r, c, u) {
  let s = c.flat(),
    f = KBn(r),
    m = r0t(r, s, f),
    i = new Set(m.map((e) => r.slice(e.from, e.to))),
    l = (e) => {
      let a = f(e),
        o = a(0);
      for (let d of m) {
        if (o !== -1 && o < d.from) o = a(d.from);
        if (o === -1) return !1;
        if (o + e.length <= d.to) return !0
      }
      return !1
    };
  if (c.some((e) => !e.some((a) => i.has(a)) && !e.some(l))) p("sdk_pasted_content", "inline_paste_not_found");
  let _ = txe();
  return ARs(r, RRs(m, CRs(r, Abo([...m, ...TRs(r, s, f)]), u)), (e) => ({
    opener: oJn(_),
    body: Sse(e),
    closer: Umn(_)
  }), Sse)
}

function iqe(r, c, u) {
  let s = r ?? "",
    {
      texts: f,
      problem: m
    } = Wfr(c),
    i = Tcs(u);
  if (m !== void 0) p("sdk_pasted_content", m);
  if (i.problem !== void 0) p("sdk_pasted_content", i.problem);
  if (f.length === 0 && i.texts.length === 0) return s;
  let l = QA();
  if (m === void 0 && i.problem === void 0) g("sdk_pasted_content", {
    tagged: l,
    ...i.texts.length > 0 && {
      inline: !0
    }
  });
  if (f.length === 0 && !l) return s;
  let _ = i.texts.map((t) => t.trim()).filter((t) => t.length >= Aat).map((t) => L([t, eSe(`x${t}`).slice(1).trim(), eSe(`${t}x`).slice(0, -1).trim(), eSe(t).trim()].flatMap((n) => [n, gyt(n), B8(n)])).filter((n) => n.length >= Aat)),
    e = (t) => !l ? t : Array.isArray(u) ? C(t, _, i.texts.map((n) => n.trim()).filter((n) => n !== "" && n.length < Aat)) : Sse(t),
    a = f.map((t) => l ? DHe(t) : `

${t}`).join("");
  if (typeof s === "string") return B8(e(s) + a);
  let o = s.findLastIndex((t) => t.type === "text"),
    d = s.map((t, n) => t.type !== "text" ? t : n === o ? {
      ...t,
      text: e(t.text)
    } : l ? {
      ...t,
      text: Sse(t.text)
    } : t),
    P = d[o];
  return B8(P?.type !== "text" ? a === "" ? d : [...d, {
    type: "text",
    text: a
  }] : [...d.slice(0, o), {
    ...P,
    text: P.text + a
  }, ...d.slice(o + 1)])
}
export {
  jJo,
  iqe
};
