// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, Iu, y8, Ws } from "B:/~BUN/root/chunk-damrp3r8.js";
import { _1 } from "B:/~BUN/root/chunk-9h1egpkt.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, Ee, Jt, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
B();
function u8({
  children: children,
  lock = "always",
  restartKey: restartKey
}) {
  let [ref, {
      isVisible: isVisible
    }, d] = y8(),
    {
      rows: rows,
      columns: columns
    } = Te(),
    ref_2 = A(null),
    [l, m] = y({
      minHeight: 0,
      rows: rows,
      columns: columns,
      restartKey: restartKey
    }),
    p = lock === "always" && (l.rows !== rows || l.columns !== columns || l.restartKey !== restartKey),
    H = (lock === "always" || !isVisible) && !p,
    g = A(0),
    N = Math.max(l.minHeight, g.current),
    D = Ee(_1) !== null;
  return Jt(() => {
    if (!ref_2.current) return;
    let {
        height: height
      } = Ws(ref_2.current),
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
    if (height > N) {
      if (D && lock === "offscreen" && !H && minHeight >= l.minHeight && d()) {
        g.current = minHeight;
        return;
      }
      g.current = 0, m(x => x.minHeight === minHeight ? x : {
        ...x,
        minHeight: minHeight
      });
    }
  }), e(s, {
    minHeight: H ? N : void 0,
    ref: ref,
    children: e(s, {
      ref: ref_2,
      flexDirection: "column",
      children: children
    })
  });
}
function ze(R) {
  let i = w(11),
    {
      children: children_2,
      height: height_2,
      screenReaderLabel: screenReaderLabel
    } = R;
  if (Ee(u)) {
    return children_2;
  }
  const d = screenReaderLabel === void 0;
  let a;
  if (i[0] !== screenReaderLabel || i[1] !== d) a = e(Iu, {
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
  if (i[5] !== height_2 || i[6] !== a || i[7] !== f) l = e(b, {
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
  if (i[9] !== children_3) p = e(u8, {
    lock: "offscreen",
    children: children_3
  }), i[9] = children_3, i[10] = p;else p = i[10];
  return p;
}
var u = qt(!1);
function tnt() {
  return Ee(u);
}
function b(R) {
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
export { u8, ze, tnt };