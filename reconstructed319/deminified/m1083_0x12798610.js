// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bK } from "B:/~BUN/root/chunk-68y6snsb.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { s, NY, Ss } from "B:/~BUN/root/chunk-qey16aan.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { ve, Zt, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
function LG({
  children: children,
  lock = "always",
  restartKey: restartKey
}) {
  let [ref, {
      isVisible: isVisible
    }, x] = NY(),
    {
      rows: rows,
      columns: columns
    } = Re(),
    ref_2 = A(null),
    [t, u] = y({
      minHeight: 0,
      rows: rows,
      columns: columns,
      restartKey: restartKey
    }),
    l = lock === "always" && (t.rows !== rows || t.columns !== columns || t.restartKey !== restartKey),
    p = (lock === "always" || !isVisible) && !l,
    a = A(0),
    g = Math.max(t.minHeight, a.current),
    d = ve(bK) !== null;
  return Zt(() => {
    if (!ref_2.current) return;
    let {
        height: height
      } = Ss(ref_2.current),
      minHeight = Math.min(height, rows);
    if (l) {
      u({
        minHeight: minHeight,
        rows: rows,
        columns: columns,
        restartKey: restartKey
      });
      return;
    }
    if (height > g) {
      if (d && lock === "offscreen" && !p && minHeight >= t.minHeight && x()) {
        a.current = minHeight;
        return;
      }
      a.current = 0, u(f => f.minHeight === minHeight ? f : {
        ...f,
        minHeight: minHeight
      });
    }
  }), e(s, {
    minHeight: p ? g : void 0,
    ref: ref,
    children: e(s, {
      ref: ref_2,
      flexDirection: "column",
      children: children
    })
  });
}
export { LG };