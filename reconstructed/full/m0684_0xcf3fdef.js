// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  xs
} from "B:/~BUN/root/chunk-p4t9nwg2.js";
import {
  zl,
  Xw,
  C_t,
  Bj
} from "B:/~BUN/root/chunk-e1thvnpv.js";
import {
  Jyt
} from "B:/~BUN/root/chunk-t7rzs5dc.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Pe,
  Wke,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();

function Dre(G) {
  let u = w(16),
    {
      children: p,
      mouseTracking: x,
      surface: m
    } = G,
    c = x === void 0 ? "full" : x,
    J = Pe(Xw),
    t = Pe(Bj),
    r = Pe(C_t),
    v, F;
  if (u[0] !== r || u[1] !== m || u[2] !== t) v = () => {
    if (!t || !m) {
      return
    }
    let A = xs().get(process.stdout);
    let D = r.set("surface", m);
    if (!A?.keepForNextFrame(D)) t(D);
    return () => {
      let M = r.reset("surface");
      if (!A?.keepForNextFrame(M)) t(M)
    }
  }, F = [t, r, m], u[0] = r, u[1] = m, u[2] = t, u[3] = v, u[4] = F;
  else v = u[3], F = u[4];
  Wke(v, F);
  let P, C;
  if (u[5] !== r || u[6] !== c || u[7] !== t) P = () => {
    let n = xs().get(process.stdout);
    if (!t) {
      return
    }
    let q = r.set("altScreen") + r.set("mouse", c) + (n?.nativeCursorSeq ?? "");
    if (!n?.keepForNextFrame(q)) t(q);
    return n?.setAltScreenActive(!0, c), () => {
      n?.setAltScreenActive(!1), n?.clearTextSelection();
      let L = r.reset("mouse");
      let z = r.reset("altScreen");
      let W = z !== "" && !n?.hasUnmounted;
      let O = W ? r.reassert("extendedKeys") : "";
      let Q = W ? n?.nativeCursorSeq ?? "" : "";
      t(L + z + O + Q)
    }
  }, C = [t, r, c], u[5] = r, u[6] = c, u[7] = t, u[8] = P, u[9] = C;
  else P = u[8], C = u[9];
  Wke(P, C);
  const d = J?.rows ?? 24,
    k = c === "full";
  let f;
  if (u[10] !== p || u[11] !== k) f = e(Jyt, {
    value: k,
    children: p
  }), u[10] = p, u[11] = k, u[12] = f;
  else f = u[12];
  let j;
  if (u[13] !== d || u[14] !== f) j = e(zl, {
    flexDirection: "column",
    height: d,
    width: "100%",
    flexShrink: 0,
    children: f
  }), u[13] = d, u[14] = f, u[15] = j;
  else j = u[15];
  return j
}
export {
  Dre
};
