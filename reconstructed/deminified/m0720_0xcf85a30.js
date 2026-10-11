// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { b8n } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { YC, g_t, Ber, FQ } from "B:/~BUN/root/chunk-trcn2d68.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { zl } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { aae, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function Se(Te) {
  return Te + 1;
}
function K(A) {
  let o = w(28),
    children,
    followGrowth,
    ref,
    stickyScroll,
    f;
  if (o[0] !== A) ({
    children: children,
    ref: ref,
    stickyScroll: stickyScroll,
    followGrowth: followGrowth,
    ...f
  } = A), o[0] = A, o[1] = children, o[2] = followGrowth, o[3] = ref, o[4] = stickyScroll, o[5] = f;else children = o[1], followGrowth = o[2], ref = o[3], stickyScroll = o[4], f = o[5];
  let ref_2 = T(null),
    [, be] = g(0),
    U;
  if (o[6] === S) U = new Set(), o[6] = U;else U = o[6];
  let P = T(U),
    j = T(!1),
    Z;
  if (o[7] === S) Z = () => {
    for (const xe of P.current) xe();
  }, o[7] = Z;else Z = o[7];
  let _ = Z,
    ee;
  if (o[8] === S) ee = function x(Q) {
    if (b8n(), YC(Q), Ber(Q), _(), j.current) {
      return;
    }
    j.current = !0, queueMicrotask(() => {
      j.current = !1, g_t(Q);
    });
  }, o[8] = ee;else ee = o[8];
  let x = ee,
    le,
    re;
  if (o[9] !== stickyScroll) le = () => ({
    scrollTo(we, Re) {
      let current = ref_2.current;
      if (!current) {
        return;
      }
      if (current.stickyScroll = !1, !Re?.preserveHwm) current.scrollHeightHwm = void 0;
      current.pendingScrollDelta = void 0, current.scrollAnchor = void 0, current.scrollTop = Math.max(0, Math.floor(we)), x(current);
    },
    scrollToElement(el, p, He) {
      let offset = p === void 0 ? 0 : p;
      let current_2 = ref_2.current;
      if (!current_2) {
        return;
      }
      current_2.stickyScroll = !1, current_2.scrollHeightHwm = void 0, current_2.pendingScrollDelta = void 0, current_2.scrollAnchor = {
        el: el,
        offset: offset,
        block: He?.block ?? "start"
      }, x(current_2);
    },
    scrollBy(Me) {
      let current_3 = ref_2.current;
      if (!current_3) {
        return;
      }
      current_3.stickyScroll = !1, current_3.scrollHeightHwm = void 0, current_3.scrollTop = FQ(current_3), current_3.scrollAnchor = void 0, current_3.pendingScrollDelta = (current_3.pendingScrollDelta ?? 0) + Math.floor(Me), x(current_3);
    },
    scrollToBottom() {
      let current_4 = ref_2.current;
      if (!current_4) {
        return;
      }
      if (current_4.pendingScrollDelta = void 0, stickyScroll === !1) {
        current_4.scrollAnchor = void 0, current_4.scrollTop = Math.max(0, (current_4.scrollHeight ?? 0) - (current_4.scrollViewportHeight ?? 0)), x(current_4);
        return;
      }
      current_4.stickyScroll = !0, YC(current_4), _(), be(Se);
    },
    getScrollTop() {
      return ref_2.current?.scrollTop ?? 0;
    },
    getPendingDelta() {
      return ref_2.current?.pendingScrollDelta ?? 0;
    },
    getScrollHeight() {
      return ref_2.current?.scrollHeight ?? 0;
    },
    getFreshScrollHeight() {
      return ref_2.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? ref_2.current?.scrollHeight ?? 0;
    },
    getViewportHeight() {
      return ref_2.current?.scrollViewportHeight ?? 0;
    },
    getViewportTop() {
      return ref_2.current?.scrollViewportTop ?? 0;
    },
    isSticky() {
      let current_5 = ref_2.current;
      if (!current_5) {
        return !1;
      }
      return current_5.stickyScroll ?? Boolean(current_5.attributes.stickyScroll);
    },
    subscribe(oe) {
      return P.current.add(oe), () => P.current.delete(oe);
    },
    setClampBounds(te, ne) {
      let current_6 = ref_2.current;
      if (!current_6) {
        return;
      }
      if (current_6.scrollClampMin === te && current_6.scrollClampMax === ne) {
        return;
      }
      current_6.scrollClampMin = te, current_6.scrollClampMax = ne, YC(current_6);
    },
    getDomElement() {
      return ref_2.current;
    }
  }), re = [stickyScroll], o[9] = stickyScroll, o[10] = le, o[11] = re;else le = o[10], re = o[11];
  aae(ref, le, re);
  const flexDirection = f.flexDirection ?? "row",
    flexGrow = f.flexGrow ?? 0,
    flexShrink = f.flexShrink ?? 1;
  let style;
  if (o[12] !== f || o[13] !== flexDirection || o[14] !== flexGrow || o[15] !== flexShrink) style = {
    flexWrap: "nowrap",
    flexDirection: flexDirection,
    flexGrow: flexGrow,
    flexShrink: flexShrink,
    selectionScope: !0,
    ...f,
    overflowX: "scroll",
    overflowY: "scroll"
  }, o[12] = f, o[13] = flexDirection, o[14] = flexGrow, o[15] = flexShrink, o[16] = style;else style = o[16];
  let D;
  if (o[17] !== stickyScroll) D = stickyScroll !== void 0 && {
    stickyScroll: stickyScroll
  }, o[17] = stickyScroll, o[18] = D;else D = o[18];
  let B;
  if (o[19] !== followGrowth) B = followGrowth !== void 0 && {
    followGrowth: followGrowth
  }, o[19] = followGrowth, o[20] = B;else B = o[20];
  let children_2;
  if (o[21] !== children) children_2 = e(zl, {
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    width: "100%",
    children: children
  }), o[21] = children, o[22] = children_2;else children_2 = o[22];
  let ce;
  if (o[23] !== D || o[24] !== B || o[25] !== children_2 || o[26] !== style) ce = e("ink-box", {
    ref: ref_2,
    style: style,
    ...D,
    ...B,
    children: children_2
  }), o[23] = D, o[24] = B, o[25] = children_2, o[26] = style, o[27] = ce;else ce = o[27];
  return ce;
}
var dE = K;
export { dE };