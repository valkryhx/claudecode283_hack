// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  s,
  n,
  Iu,
  y8,
  Ws
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  _1
} from "B:/~BUN/root/chunk-9h1egpkt.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  qt,
  Ee,
  Jt,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
B();
B();
B();

function u8({
  children: R,
  lock: t = "always",
  restartKey: o
}) {
  let [c, {
    isVisible: S
  }, d] = y8(), {
    rows: i,
    columns: a
  } = Te(), f = A(null), [l, m] = y({
    minHeight: 0,
    rows: i,
    columns: a,
    restartKey: o
  }), p = t === "always" && (l.rows !== i || l.columns !== a || l.restartKey !== o), H = (t === "always" || !S) && !p, g = A(0), N = Math.max(l.minHeight, g.current), D = Ee(_1) !== null;
  return Jt(() => {
    if (!f.current) return;
    let {
      height: P
    } = Ws(f.current), h = Math.min(P, i);
    if (p) {
      m({
        minHeight: h,
        rows: i,
        columns: a,
        restartKey: o
      });
      return
    }
    if (P > N) {
      if (D && t === "offscreen" && !H && h >= l.minHeight && d()) {
        g.current = h;
        return
      }
      g.current = 0, m((x) => x.minHeight === h ? x : {
        ...x,
        minHeight: h
      })
    }
  }), e(s, {
    minHeight: H ? N : void 0,
    ref: c,
    children: e(s, {
      ref: f,
      flexDirection: "column",
      children: R
    })
  })
}

function ze(R) {
  let i = w(11),
    {
      children: t,
      height: o,
      screenReaderLabel: c
    } = R;
  if (Ee(u)) {
    return t
  }
  const d = c === void 0;
  let a;
  if (i[0] !== c || i[1] !== d) a = e(Iu, {
    fromLeftEdge: !0,
    flexShrink: 0,
    children: r(n, {
      "aria-hidden": d,
      "aria-label": c,
      dimColor: !0,
      children: ["  ", "\u23BF \xA0"]
    })
  }), i[0] = c, i[1] = d, i[2] = a;
  else a = i[2];
  let f;
  if (i[3] !== t) f = e(s, {
    flexShrink: 1,
    flexGrow: 1,
    children: t
  }), i[3] = t, i[4] = f;
  else f = i[4];
  let l;
  if (i[5] !== o || i[6] !== a || i[7] !== f) l = e(b, {
    children: r(s, {
      flexDirection: "row",
      height: o,
      overflowY: "hidden",
      children: [a, f]
    })
  }), i[5] = o, i[6] = a, i[7] = f, i[8] = l;
  else l = i[8];
  let m = l;
  if (o !== void 0) {
    return m
  }
  let p;
  if (i[9] !== m) p = e(u8, {
    lock: "offscreen",
    children: m
  }), i[9] = m, i[10] = p;
  else p = i[10];
  return p
}
var u = qt(!1);

function tnt() {
  return Ee(u)
}

function b(R) {
  let o = w(2),
    {
      children: t
    } = R,
    c;
  if (o[0] !== t) c = e(u.Provider, {
    value: !0,
    children: t
  }), o[0] = t, o[1] = c;
  else c = o[1];
  return c
}
export {
  u8,
  ze,
  tnt
};
