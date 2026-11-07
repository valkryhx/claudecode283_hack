// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  bK
} from "B:/~BUN/root/chunk-68y6snsb.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  s,
  NY,
  Ss
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  ve,
  Zt,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
j();

function LG({
  children: R,
  lock: o = "always",
  restartKey: i
}) {
  let [w, {
    isVisible: H
  }, x] = NY(), {
    rows: r,
    columns: c
  } = Re(), m = A(null), [t, u] = y({
    minHeight: 0,
    rows: r,
    columns: c,
    restartKey: i
  }), l = o === "always" && (t.rows !== r || t.columns !== c || t.restartKey !== i), p = (o === "always" || !H) && !l, a = A(0), g = Math.max(t.minHeight, a.current), d = ve(bK) !== null;
  return Zt(() => {
    if (!m.current) return;
    let {
      height: h
    } = Ss(m.current), n = Math.min(h, r);
    if (l) {
      u({
        minHeight: n,
        rows: r,
        columns: c,
        restartKey: i
      });
      return
    }
    if (h > g) {
      if (d && o === "offscreen" && !p && n >= t.minHeight && x()) {
        a.current = n;
        return
      }
      a.current = 0, u((f) => f.minHeight === n ? f : {
        ...f,
        minHeight: n
      })
    }
  }), e(s, {
    minHeight: p ? g : void 0,
    ref: w,
    children: e(s, {
      ref: m,
      flexDirection: "column",
      children: R
    })
  })
}
export {
  LG
};
