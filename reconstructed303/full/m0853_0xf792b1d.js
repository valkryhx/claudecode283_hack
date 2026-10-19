// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  G1r
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  II,
  iVt,
  P4r,
  fce
} from "B:/~BUN/root/chunk-1jz9m9yh.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  vc
} from "B:/~BUN/root/chunk-3md9ngvz.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  uve,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();

function xe(De) {
  return De + 1
}

function K(P) {
  let o = w(28),
    v, x, L, c, f;
  if (o[0] !== P)({
    children: v,
    ref: L,
    stickyScroll: c,
    followGrowth: x,
    ...f
  } = P), o[0] = P, o[1] = v, o[2] = x, o[3] = L, o[4] = c, o[5] = f;
  else v = o[1], x = o[2], L = o[3], c = o[4], f = o[5];
  let r = A(null),
    [, Se] = y(0),
    U;
  if (o[6] === S) U = new Set, o[6] = U;
  else U = o[6];
  let j = A(U),
    Q = A(!1),
    Z;
  if (o[7] === S) Z = () => {
    for (const be of j.current) be()
  }, o[7] = Z;
  else Z = o[7];
  let _ = Z,
    ee;
  if (o[8] === S) ee = function b(W) {
    if (G1r(), II(W), P4r(W), _(), Q.current) {
      return
    }
    Q.current = !0, queueMicrotask(() => {
      Q.current = !1, iVt(W)
    })
  }, o[8] = ee;
  else ee = o[8];
  let b = ee,
    le, re;
  if (o[9] !== c) le = () => ({
    scrollTo(we, Re) {
      let u = r.current;
      if (!u) {
        return
      }
      if (u.stickyScroll = !1, !Re?.preserveHwm) u.scrollHeightHwm = void 0;
      u.pendingScrollDelta = void 0, u.scrollAnchor = void 0, u.scrollTop = Math.max(0, Math.floor(we)), b(u)
    },
    scrollToElement(ke, p, He) {
      let ve = p === void 0 ? 0 : p;
      let h = r.current;
      if (!h) {
        return
      }
      h.stickyScroll = !1, h.scrollHeightHwm = void 0, h.pendingScrollDelta = void 0, h.scrollAnchor = {
        el: ke,
        offset: ve,
        block: He?.block ?? "start"
      }, b(h)
    },
    scrollBy(Me) {
      let i = r.current;
      if (!i) {
        return
      }
      i.stickyScroll = !1, i.scrollHeightHwm = void 0, i.scrollTop = fce(i), i.scrollAnchor = void 0, i.pendingScrollDelta = (i.pendingScrollDelta ?? 0) + Math.floor(Me), b(i)
    },
    scrollToBottom() {
      let s = r.current;
      if (!s) {
        return
      }
      if (s.pendingScrollDelta = void 0, c === !1) {
        s.scrollAnchor = void 0, s.scrollTop = Math.max(0, (s.scrollHeight ?? 0) - (s.scrollViewportHeight ?? 0)), b(s);
        return
      }
      s.stickyScroll = !0, II(s), _(), Se(xe)
    },
    getScrollTop() {
      return r.current?.scrollTop ?? 0
    },
    getPendingDelta() {
      return r.current?.pendingScrollDelta ?? 0
    },
    getScrollHeight() {
      return r.current?.scrollHeight ?? 0
    },
    getFreshScrollHeight() {
      return r.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? r.current?.scrollHeight ?? 0
    },
    getViewportHeight() {
      return r.current?.scrollViewportHeight ?? 0
    },
    getViewportTop() {
      return r.current?.scrollViewportTop ?? 0
    },
    isSticky() {
      let F = r.current;
      if (!F) {
        return !1
      }
      return F.stickyScroll ?? Boolean(F.attributes.stickyScroll)
    },
    subscribe(oe) {
      return j.current.add(oe), () => j.current.delete(oe)
    },
    setClampBounds(te, ne) {
      let g = r.current;
      if (!g) {
        return
      }
      if (g.scrollClampMin === te && g.scrollClampMax === ne) {
        return
      }
      g.scrollClampMin = te, g.scrollClampMax = ne, II(g)
    },
    getDomElement() {
      return r.current
    }
  }), re = [c], o[9] = c, o[10] = le, o[11] = re;
  else le = o[10], re = o[11];
  uve(L, le, re);
  const p = f.flexDirection ?? "row",
    N = f.flexGrow ?? 0,
    X = f.flexShrink ?? 1;
  let M;
  if (o[12] !== f || o[13] !== p || o[14] !== N || o[15] !== X) M = {
    flexWrap: "nowrap",
    flexDirection: p,
    flexGrow: N,
    flexShrink: X,
    selectionScope: !0,
    ...f,
    overflowX: "scroll",
    overflowY: "scroll"
  }, o[12] = f, o[13] = p, o[14] = N, o[15] = X, o[16] = M;
  else M = o[16];
  let D;
  if (o[17] !== c) D = c !== void 0 && {
    stickyScroll: c
  }, o[17] = c, o[18] = D;
  else D = o[18];
  let T;
  if (o[19] !== x) T = x !== void 0 && {
    followGrowth: x
  }, o[19] = x, o[20] = T;
  else T = o[20];
  let E;
  if (o[21] !== v) E = e(vc, {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    width: "100%",
    children: v
  }), o[21] = v, o[22] = E;
  else E = o[22];
  let ce;
  if (o[23] !== D || o[24] !== T || o[25] !== E || o[26] !== M) ce = e("ink-box", {
    ref: r,
    style: M,
    ...D,
    ...T,
    children: E
  }), o[23] = D, o[24] = T, o[25] = E, o[26] = M, o[27] = ce;
  else ce = o[27];
  return ce
}
var BA = K;
export {
  BA
};
