// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Mw, Ur } from "B:/~BUN/root/chunk-bkfncj77.js";
import { Rn, s, n, Qi } from "B:/~BUN/root/chunk-qey16aan.js";
import { tI } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { xo, phn, ra } from "B:/~BUN/root/chunk-tzwf3sbj.js";
import { Qc, so, ti as selectedValue, Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { $M, Vit, rli } from "B:/~BUN/root/chunk-zr04rj0q.js";
import { Mm } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
var weakMap = new WeakMap();
function h(o, t = "") {
  let a = weakMap.get(o);
  if (a === void 0) a = {
    needsArrow: t.trim() !== "",
    pastes: 0,
    pastesAtArrow: 0
  }, weakMap.set(o, a);
  return a;
}
function R(o, t) {
  h(o).needsArrow = t.trim() !== "";
}
function M(o) {
  let t = h(o);
  t.needsArrow = !1, t.pastesAtArrow = t.pastes;
}
function G(o) {
  h(o).pastes += 1;
}
function _1r(o, t) {
  let a = h(o, t);
  return a.needsArrow || a.pastes > a.pastesAtArrow;
}
j();
var weakMap_2 = new WeakMap();
function O(o, t) {
  weakMap_2.set(o, t);
}
function B(o) {
  return weakMap_2.get(o);
}
function le() {}
function de(A) {
  return A + 1;
}
var N = 60000,
  zme = 1000;
function B6s({
  inactiveSince: inactiveSince,
  contextTokens: contextTokens,
  percentOfFiveHourLimit: percentOfFiveHourLimit,
  trigger: trigger,
  focusedAction: focusedAction,
  offersLookUp: offersLookUp,
  offersSummary: offersSummary,
  ask: ask,
  onDone: onDone
}) {
  let v = re(inactiveSince, trigger === "idle"),
    w = tI(),
    isActive = trigger === "idle",
    [, A] = y(0),
    C = U(w, isActive ? ask : null, A);
  y(() => {
    if (isActive) R(ask, C);
  }), Mm((c, g) => {
    if (g.upArrow || g.downArrow) M(ask), A(se => se + 1);
  }, {
    isActive: isActive
  });
  let q = isActive && C.trim() !== "",
    z = isActive && _1r(ask, C),
    J = Qi(),
    X = Qc(),
    [defaultFocusValue] = y(() => B(ask) ?? "new_conversation"),
    I = () => ra(J, X(), zme),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused
    } = so(),
    {
      refusedWithin: refusedWithin_2,
      noteRefused: noteRefused_2
    } = so(),
    refuseInput = () => {
      let c = I();
      if (c || refusedWithin(xo) || refusedWithin_2(phn)) {
        if (noteRefused(), c) noteRefused_2();
        return !0;
      }
      return !1;
    },
    onChange = c => {
      if (c === "compact" && refuseInput()) return !1;
      if (focusedAction === "new_conversation" && c === "new_conversation" && (I() || refusedWithin(xo))) return noteRefused(), !1;
      return onDone(c);
    },
    onPaste = trigger === "idle" && w !== void 0 ? c => {
      G(ask), A(g => g + 1), rli(w, Vit(w) + c.text.replace(/\r\n?/g, `
`));
    } : void 0,
    children = r(ke, {
      title: "Resume this conversation?",
      color: "warning",
      onCancel: () => onDone("dismiss"),
      inputGuide: r(Ce, {
        children: [z ? e(Y, {
          chord: ["up", "down"],
          action: "pick a row first"
        }) : null, e(Y, {
          chord: "enter",
          action: "confirm"
        }), e(gt, {
          action: "confirm:no",
          context: "Confirmation",
          fallback: "Esc",
          description: isActive ? "dismiss" : "resume"
        })]
      }),
      children: [r(s, {
        flexDirection: "column",
        children: [r(n, {
          children: ["This conversation has been inactive for ", v, " and is", " ", Ur(contextTokens), " tokens long.", " ", percentOfFiveHourLimit >= 100 ? r(ne, {
            children: ["Resuming it will use ", e(n, {
              bold: !0,
              children: "all"
            }), " of your 5-hour usage limit."]
          }) : r(ne, {
            children: ["Resuming it will use about", " ", r(n, {
              bold: !0,
              children: [percentOfFiveHourLimit, "%"]
            }), " of your 5-hour usage limit."]
          })]
        }), q && e(n, {
          dimColor: !0,
          children: "Your unsent message will still be there after you answer."
        })]
      }), e(Ze, {
        options: [{
          value: "resume",
          label: "Resume"
        }, {
          value: "new_conversation",
          label: "Start a new conversation",
          ...(offersLookUp && {
            description: "Claude can look this one up if you refer to it later"
          })
        }, ...(offersSummary ? [{
          value: "compact",
          label: "Resume from summary",
          description: "Claude writes a summary now, and you continue from it"
        }] : [])],
        hideIndexes: trigger === "idle",
        onUpFromFirstItem: trigger === "idle" ? L : void 0,
        ...((offersSummary || focusedAction === "new_conversation") && {
          selectedValue: selectedValue
        }),
        ...(offersSummary && {
          refuseInput: refuseInput
        }),
        ...(focusedAction === "new_conversation" && {
          defaultFocusValue: defaultFocusValue,
          onDownFromLastItem: trigger === "idle" ? L : void 0,
          onFocus: c => {
            if (c !== "dismiss") O(ask, c === "compact" ? "resume" : c);
          }
        }),
        onChange: onChange
      })]
    });
  return onPaste === void 0 ? children : e(s, {
    flexDirection: "column",
    onPaste: onPaste,
    children: children
  });
}
function re(since, t) {
  let a = Rn(),
    [i] = y(() => ({
      since: since,
      text: _(since)
    }));
  if (i.since !== since) i.since = since, i.text = _(since);
  let f = ue(u => {
    if (!t) return () => {};
    let d = a.setTimeout(function l() {
      i.text = _(i.since), u(), d = a.setTimeout(l, N);
    }, N);
    return () => d();
  }, [a, i, t]);
  return At(f, () => i.text, () => i.text);
}
function _(o) {
  return Mw(Math.max(0, Date.now() - o));
}
function U(o, t, a) {
  let i = S(8),
    f;
  if (i[0] !== o) f = o === void 0 ? null : $M(o), i[0] = o, i[1] = f;else f = i[1];
  let u = f,
    d;
  if (i[2] !== t || i[3] !== a || i[4] !== u) d = l => u === null ? le : (() => {
    let b = u.getState().value;
    return u.subscribe(() => {
      let v = u.getState().value;
      if (t !== null && v !== b) R(t, v), a(de);
      b = v, l();
    });
  })(), i[2] = t, i[3] = a, i[4] = u, i[5] = d;else d = i[5];
  let w = d,
    m;
  if (i[6] !== u) m = () => u === null ? "" : u.getState().value, i[6] = u, i[7] = m;else m = i[7];
  return At(w, m);
}
function L() {}
export { _1r, zme, B6s };