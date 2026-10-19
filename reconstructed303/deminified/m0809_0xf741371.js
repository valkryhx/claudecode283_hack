// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ai } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { vc, Og, gVt, S1 } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { l2t } from "B:/~BUN/root/chunk-hq7vjyyz.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Ee, aBe, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
function Dye(J) {
  let u = w(16),
    {
      children: children,
      mouseTracking: mouseTracking,
      surface: surface
    } = J,
    a = mouseTracking === void 0 ? "full" : mouseTracking,
    L = Ee(Og),
    t = Ee(S1),
    r = Ee(gVt),
    v,
    F;
  if (u[0] !== r || u[1] !== surface || u[2] !== t) v = () => {
    if (!t || !surface) {
      return;
    }
    let A = ai().get(process.stdout);
    let D = r.set("surface", surface);
    if (!A?.keepForNextFrame(D)) t(D);
    return () => {
      let M = r.reset("surface");
      if (!A?.keepForNextFrame(M)) t(M);
    };
  }, F = [t, r, surface], u[0] = r, u[1] = surface, u[2] = t, u[3] = v, u[4] = F;else v = u[3], F = u[4];
  aBe(v, F);
  let N, P;
  if (u[5] !== r || u[6] !== a || u[7] !== t) N = () => {
    let n = ai().get(process.stdout);
    if (!t) {
      return;
    }
    let C = r.set("altScreen") + r.set("mouse", a) + (n?.nativeCursorSeq ?? "");
    if (!n?.keepForNextFrame(C)) t(C);
    return n?.setAltScreenActive(!0, a), () => {
      let O = n?.setAltScreenActive(!1) ?? "";
      n?.clearTextSelection();
      let Q = r.reset("mouse");
      let b = r.reset("altScreen");
      let q = b !== "" && !n?.hasUnmounted;
      let V = q ? r.reassert("extendedKeys") : "";
      let X = q ? n?.nativeCursorSeq ?? "" : "";
      t(O + Q + b + V + X);
    };
  }, P = [t, r, a], u[5] = r, u[6] = a, u[7] = t, u[8] = N, u[9] = P;else N = u[8], P = u[9];
  aBe(N, P);
  const height = L?.rows ?? 24,
    value = a === "full";
  let children_2;
  if (u[10] !== children || u[11] !== value) children_2 = e(l2t, {
    value: value,
    children: children
  }), u[10] = children, u[11] = value, u[12] = children_2;else children_2 = u[12];
  let z;
  if (u[13] !== height || u[14] !== children_2) z = e(vc, {
    flexDirection: "column",
    height: height,
    width: "100%",
    flexShrink: 0,
    children: children_2
  }), u[13] = height, u[14] = children_2, u[15] = z;else z = u[15];
  return z;
}
export { Dye };