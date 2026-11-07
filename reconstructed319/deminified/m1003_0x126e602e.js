// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ii } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { Sf, nh, Ihn, wK } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { Lmn } from "B:/~BUN/root/chunk-r2n11d64.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { ve, Eoe, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function _Pe(u) {
  let f = S(16),
    {
      children: children,
      mouseTracking: mouseTracking,
      surface: surface
    } = u,
    i = mouseTracking === void 0 ? "full" : mouseTracking,
    w = ve(nh),
    r = ve(wK),
    t = ve(Ihn),
    M,
    F;
  if (f[0] !== t || f[1] !== surface || f[2] !== r) M = () => {
    if (!r || !surface) {
      return;
    }
    let A = Ii().get(process.stdout);
    let N = t.set("surface", surface);
    if (!A?.keepForNextFrame(N)) r(N);
    return () => {
      let P = t.reset("surface");
      if (!A?.keepForNextFrame(P)) r(P);
    };
  }, F = [r, t, surface], f[0] = t, f[1] = surface, f[2] = r, f[3] = M, f[4] = F;else M = f[3], F = f[4];
  Eoe(M, F);
  let C, L;
  if (f[5] !== t || f[6] !== i || f[7] !== r) C = () => {
    let a = Ii().get(process.stdout);
    if (!r) {
      return;
    }
    let b = (a?.claimHeldAltScreen() ? t.reset("mouse") : "") + t.set("altScreen") + t.set("mouse", i) + (a?.nativeCursorSeq ?? "");
    if (!a?.keepForNextFrame(b)) r(b);
    return a?.setAltScreenActive(!0, i), () => {
      if (!a?.holdAltScreenLeave(() => d(a, t, r))) d(a, t, r);
    };
  }, L = [r, t, i], f[5] = t, f[6] = i, f[7] = r, f[8] = C, f[9] = L;else C = f[8], L = f[9];
  Eoe(C, L);
  const height = w?.rows ?? 24,
    value = i === "full";
  let children_2;
  if (f[10] !== children || f[11] !== value) children_2 = e(Lmn, {
    value: value,
    children: children
  }), f[10] = children, f[11] = value, f[12] = children_2;else children_2 = f[12];
  let q;
  if (f[13] !== height || f[14] !== children_2) q = e(Sf, {
    flexDirection: "column",
    height: height,
    width: "100%",
    flexShrink: 0,
    children: children_2
  }), f[13] = height, f[14] = children_2, f[15] = q;else q = f[15];
  return q;
}
function d(u, m, p) {
  let c = u?.setAltScreenActive(!1) ?? "";
  u?.clearTextSelection();
  let i = m.reset("mouse"),
    w = m.reset("altScreen"),
    r = w !== "" && !u?.hasUnmounted,
    t = r ? m.reassert("extendedKeys") : "",
    f = r ? u?.nativeCursorSeq ?? "" : "";
  p(c + i + w + t + f);
}
export { _Pe };