// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { eL } from "B:/~BUN/root/chunk-d4pzq02b.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { s, n, Yc, HQ, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, Pe, sn, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function Hj({
  children: children,
  lock = "always",
  restartKey: restartKey
}) {
  let [ref, {
      isVisible: isVisible
    }, d] = HQ(),
    {
      rows: rows,
      columns: columns
    } = ve(),
    ref_2 = T(null),
    [l, m] = g({
      minHeight: 0,
      rows: rows,
      columns: columns,
      restartKey: restartKey
    }),
    p = lock === "always" && (l.rows !== rows || l.columns !== columns || l.restartKey !== restartKey),
    H = (lock === "always" || !isVisible) && !p,
    x = T(0),
    P = Math.max(l.minHeight, x.current),
    D = Pe(eL) !== null;
  return sn(() => {
    if (!ref_2.current) return;
    let {
        height: height
      } = Xi(ref_2.current),
      minHeight = Math.min(height, rows);
    if (p) {
      m({
        minHeight: minHeight,
        rows: rows,
        columns: columns,
        restartKey: restartKey
      });
      return;
    }
    if (height > P) {
      if (D && lock === "offscreen" && !H && minHeight >= l.minHeight && d()) {
        x.current = minHeight;
        return;
      }
      x.current = 0, m(b => b.minHeight === minHeight ? b : {
        ...b,
        minHeight: minHeight
      });
    }
  }), e(s, {
    minHeight: H ? P : void 0,
    ref: ref,
    children: e(s, {
      ref: ref_2,
      flexDirection: "column",
      children: children
    })
  });
}
N();
N();
function Le(R) {
  let i = w(11),
    {
      children: children_2,
      height: height_2,
      screenReaderLabel: screenReaderLabel
    } = R;
  if (Pe(u)) {
    return children_2;
  }
  const d = screenReaderLabel === void 0;
  let a;
  if (i[0] !== screenReaderLabel || i[1] !== d) a = e(Yc, {
    fromLeftEdge: !0,
    flexShrink: 0,
    children: r(n, {
      "aria-hidden": d,
      "aria-label": screenReaderLabel,
      dimColor: !0,
      children: ["  ", "\u23BF \xA0"]
    })
  }), i[0] = screenReaderLabel, i[1] = d, i[2] = a;else a = i[2];
  let f;
  if (i[3] !== children_2) f = e(s, {
    flexShrink: 1,
    flexGrow: 1,
    children: children_2
  }), i[3] = children_2, i[4] = f;else f = i[4];
  let l;
  if (i[5] !== height_2 || i[6] !== a || i[7] !== f) l = e(y, {
    children: r(s, {
      flexDirection: "row",
      height: height_2,
      overflowY: "hidden",
      children: [a, f]
    })
  }), i[5] = height_2, i[6] = a, i[7] = f, i[8] = l;else l = i[8];
  let children_3 = l;
  if (height_2 !== void 0) {
    return children_3;
  }
  let p;
  if (i[9] !== children_3) p = e(Hj, {
    lock: "offscreen",
    children: children_3
  }), i[9] = children_3, i[10] = p;else p = i[10];
  return p;
}
var u = Vt(!1);
function pje() {
  return Pe(u);
}
function y(R) {
  let o = w(2),
    {
      children: children_4
    } = R,
    c;
  if (o[0] !== children_4) c = e(u.Provider, {
    value: !0,
    children: children_4
  }), o[0] = children_4, o[1] = c;else c = o[1];
  return c;
}
export { Hj, Le, pje };