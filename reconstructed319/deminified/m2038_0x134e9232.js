// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { ZF } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { ot, s, n, pl } from "B:/~BUN/root/chunk-qey16aan.js";
import { QH } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { Jo } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { ei } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { Wu } from "B:/~BUN/root/chunk-emd6eb45.js";
import { gp } from "B:/~BUN/root/chunk-nyy541yq.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, O, A, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
var d = 500,
  m = 5000;
function kvt() {
  let t = ot(),
    r = QH(),
    o = ei();
  return ue(() => {
    if (!t) return;
    let l = ZF.of(o),
      c = Date.now();
    if (c - l.lastBellAt < d) return;
    l.lastBellAt = c, r.notifyBell();
  }, [t, r, o]);
}
j();
var B = 600;
function p(t, r = B) {
  let o = Wu(),
    [l, c] = pl(t && o ? r : null);
  if (!t || !o) return [l, !0];
  let i = Math.floor(c / r) % 2 === 0;
  return [l, i];
}
function IY({
  isError: isError,
  isNeutral = !1,
  isUnresolved: isUnresolved,
  shouldAnimate: shouldAnimate
}) {
  let c = ot(),
    i = gp(),
    [ref, R] = p(shouldAnimate && !c && !i),
    a = isUnresolved && shouldAnimate && i && !c,
    f = kvt(),
    u = A(null);
  return O(() => {
    if (isUnresolved) u.current ??= Date.now();else if (u.current !== null) {
      if (Date.now() - u.current > m) f();
      u.current = null;
    }
  }, [isUnresolved, f]), e(s, {
    ref: ref,
    minWidth: 2,
    children: e(n, {
      "aria-label": isError && !isNeutral ? "tool error:" : "tool:",
      color: a ? "text" : isUnresolved || isNeutral ? void 0 : isError ? "error" : "success",
      dimColor: isUnresolved && !a || isNeutral,
      children: !shouldAnimate || R || isError || !isUnresolved ? Jo : " "
    })
  });
}
export { kvt, IY };