// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { xs } from "B:/~BUN/root/chunk-p4t9nwg2.js";
import { zl, Xw, C_t, Bj } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { Jyt } from "B:/~BUN/root/chunk-t7rzs5dc.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Pe, Wke, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function Dre(G) {
  let u = w(16),
    {
      children: children,
      mouseTracking: mouseTracking,
      surface: surface
    } = G,
    c = mouseTracking === void 0 ? "full" : mouseTracking,
    J = Pe(Xw),
    t = Pe(Bj),
    r = Pe(C_t),
    v,
    F;
  if (u[0] !== r || u[1] !== surface || u[2] !== t) v = () => {
    if (!t || !surface) {
      return;
    }
    let A = xs().get(process.stdout);
    let D = r.set("surface", surface);
    if (!A?.keepForNextFrame(D)) t(D);
    return () => {
      let M = r.reset("surface");
      if (!A?.keepForNextFrame(M)) t(M);
    };
  }, F = [t, r, surface], u[0] = r, u[1] = surface, u[2] = t, u[3] = v, u[4] = F;else v = u[3], F = u[4];
  Wke(v, F);
  let P, C;
  if (u[5] !== r || u[6] !== c || u[7] !== t) P = () => {
    let n = xs().get(process.stdout);
    if (!t) {
      return;
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
      t(L + z + O + Q);
    };
  }, C = [t, r, c], u[5] = r, u[6] = c, u[7] = t, u[8] = P, u[9] = C;else P = u[8], C = u[9];
  Wke(P, C);
  const height = J?.rows ?? 24,
    value = c === "full";
  let children_2;
  if (u[10] !== children || u[11] !== value) children_2 = e(Jyt, {
    value: value,
    children: children
  }), u[10] = children, u[11] = value, u[12] = children_2;else children_2 = u[12];
  let j;
  if (u[13] !== height || u[14] !== children_2) j = e(zl, {
    flexDirection: "column",
    height: height,
    width: "100%",
    flexShrink: 0,
    children: children_2
  }), u[13] = height, u[14] = children_2, u[15] = j;else j = u[15];
  return j;
}
export { Dre };