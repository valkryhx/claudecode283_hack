// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { qw } from "B:/~BUN/root/chunk-syke822n.js";
import { Y_ } from "B:/~BUN/root/chunk-trcn2d68.js";
import { s, n, Xi } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ya } from "B:/~BUN/root/chunk-7nc4t0q7.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { ie } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { JP, UL, hV, hnn } from "B:/~BUN/root/chunk-y355pc11.js";
import { YJe } from "B:/~BUN/root/chunk-5r1x61tc.js";
import { F, GK } from "B:/~BUN/root/chunk-acd2tycn.js";
import { sVt, GC } from "B:/~BUN/root/chunk-txdt16r9.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { Go } from "B:/~BUN/root/chunk-b36qwjxy.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Pe, R, sn, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
N();
var Ie = {
  "confirm:yes": {
    description: "confirm"
  },
  "confirm:no": {
    description: "cancel"
  },
  "confirm:previous": {
    description: "navigate"
  },
  "confirm:next": {
    description: "navigate"
  },
  "confirm:nextField": {
    description: "next field"
  },
  "confirm:previousField": {
    description: "previous field"
  },
  "confirm:toggle": {
    description: "toggle"
  },
  "confirm:cycleMode": {
    description: "cycle mode"
  },
  ...{},
  "select:next": {
    description: "navigate"
  },
  "select:previous": {
    description: "navigate"
  },
  "select:pageUp": {
    description: "page up"
  },
  "select:pageDown": {
    description: "page down"
  },
  "select:first": {
    description: "first"
  },
  "select:last": {
    description: "last"
  },
  "select:accept": {
    description: "select"
  },
  "select:cancel": {
    description: "cancel"
  },
  "abovePrompt:toggle": {
    description: "hide/show plugin panel"
  },
  "abovePrompt:focus": {
    description: "focus plugin buttons, inputs and selects"
  },
  "abovePrompt:next": {
    description: "navigate"
  },
  "abovePrompt:previous": {
    description: "navigate"
  },
  "abovePrompt:press": {
    description: "press / submit / pick"
  },
  "abovePrompt:leave": {
    description: "back to prompt"
  },
  "abovePrompt:highlightNext": {
    description: "next option"
  },
  "abovePrompt:highlightPrevious": {
    description: "previous option"
  },
  "pane:scrollUp": {
    description: "scroll"
  },
  "pane:scrollDown": {
    description: "scroll"
  },
  "pane:pageUp": {
    description: "page up"
  },
  "pane:pageDown": {
    description: "page down"
  },
  "pane:top": {
    description: "top"
  },
  "pane:bottom": {
    description: "bottom"
  },
  "pane:grow": {
    description: "widen / heighten plugin pane"
  },
  "pane:shrink": {
    description: "narrow / shorten plugin pane"
  },
  "pane:close": {
    description: "close plugin pane"
  },
  "pane:next": {
    description: "show next plugin pane"
  },
  "pane:previous": {
    description: "show previous plugin pane"
  },
  "tabs:next": {
    description: "switch tab"
  },
  "tabs:previous": {
    description: "switch tab"
  },
  "app:toggleReplTab": {
    description: "switch tab"
  },
  "app:toggleDiffNoiseFilter": {
    description: "show/hide tests in diff panel"
  },
  "app:diffFileListUp": {
    description: "scroll diff panel file list"
  },
  "app:diffFileListDown": {
    description: "scroll diff panel file list"
  },
  "app:toggleDiffPreSession": {
    description: "show/hide pre-session changes in diff panel"
  },
  "app:cycleDiffBase": {
    description: "switch diff panel base"
  },
  ...{}
};
function me(a) {
  if (a.startsWith("command:")) return {
    description: a.slice(8)
  };
  return Ie[a];
}
var Oe = 4,
  Be = [["select:previous", "select:next"], ["confirm:previous", "confirm:next"], ["tabs:next", "tabs:previous"]];
function oe({
  boundary: boundary,
  fallback = null,
  order: order,
  omit: omit,
  max = Oe,
  maxWidth: maxWidth
}) {
  let ctx = Ya(),
    {
      focusManager: focusManager,
      rootNode: rootNode
    } = Pe(Y_),
    d = Pe(sVt),
    [P, I] = g(0);
  R(() => {
    if (!ctx || !focusManager) return;
    let c = () => I(O => O + 1),
      h = focusManager.subscribe(c),
      K = ctx.keyHandlerRegistry.scopesChanged.subscribe(c);
    return c(), () => {
      h(), K();
    };
  }, [ctx, focusManager]);
  let m = X(() => Te({
      ctx: ctx,
      activeElement: focusManager?.activeElement ?? null,
      boundaryNode: boundary ? boundary.current : rootNode ?? null,
      rendered: boundary ? d : null,
      order: order,
      omit: omit,
      max: max,
      maxWidth: maxWidth
    }), [ctx, focusManager, boundary, rootNode, d, order, omit, max, maxWidth, P]),
    H = T(null);
  if (R(() => {
    let c = m.fellBack ? "fell_back" : m.hadEntryWithoutDescription ? "no_description" : "ok";
    if (c === H.current) return;
    let h = H.current === null;
    if (H.current = c, h && c === "fell_back") return;
    if (c === "ok") _("keybinding_auto_hints");else p("keybinding_auto_hints", c);
  }, [m.fellBack, m.hadEntryWithoutDescription]), m.fellBack) return fallback;
  return e(n, {
    dimColor: !0,
    italic: !0,
    children: m.text
  });
}
function Te({
  ctx: ctx_2,
  activeElement: activeElement,
  boundaryNode: boundaryNode,
  rendered: rendered,
  order: order_2,
  omit: omit_2,
  max: max_2,
  maxWidth: maxWidth_2
}) {
  let A = {
    fellBack: !0,
    text: "",
    hadEntryWithoutDescription: !1
  };
  if (!ctx_2) return A;
  let d = [],
    P = !1,
    I = 0,
    m = boundaryNode === null ? void 0 : activeElement ?? void 0;
  while (m) {
    let t = m === boundaryNode,
      i = ctx_2.keyHandlerRegistry.decls.get(m);
    if (i) he(d, i, I, t);
    if (t) {
      P = !0;
      break;
    }
    m = m.parentNode, I++;
  }
  if (!P) {
    if (!rendered) return A;
    let t = rendered.chain.length - 1,
      chain = rendered.chain;
    for (let o of rendered.below[t]?.values() ?? []) if (o.claimFocus && o.chain.length > chain.length) chain = o.chain;
    d = [];
    for (let o = chain.length - 1; o >= t; o--) {
      let k = chain[o];
      if (k) he(d, k, chain.length - 1 - o, o === t);
    }
  }
  if (!d.some(item => !item.isBoundary)) return A;
  let H = new Set(omit_2 ?? []),
    c = hV(JP),
    hadEntryWithoutDescription = !1,
    K = [];
  for (let t of d) {
    if (H.has(t.action) || !t.scope) continue;
    let i = hnn(t.action, t.scope, ctx_2.bindings, c);
    if (!i) continue;
    let description = t.hint ?? me(t.action)?.description;
    if (!description) {
      hadEntryWithoutDescription = !0;
      continue;
    }
    K.push({
      action: t.action,
      description: description,
      chord: UL(i),
      depth: t.depth
    });
  }
  let O = new Map();
  (order_2 ?? []).forEach((item, index) => O.set(item, index));
  let j = new Set(),
    v = [];
  for (let t of K) {
    if (j.has(t.description)) continue;
    j.add(t.description);
    let o = Be.find(item => item.some(item => item === t.action))?.flatMap(y => K.find(item => item.action === y && item.description === t.description) ?? []),
      k = o?.length === 2 ? o : [t];
    v.push({
      order: Math.min(...k.map(item => O.get(item.action) ?? 1 / 0)),
      text: GK({
        chord: k.map(item => item.chord),
        action: t.description
      }),
      depth: t.depth
    });
  }
  v.sort((itemA, itemB) => {
    if (itemA.order !== itemB.order) return itemA.order - itemB.order;
    return itemA.depth - itemB.depth;
  });
  let l = " \xB7 ",
    U = ie(l),
    W = 0,
    b = [];
  for (;;) {
    b = [];
    let t = 0;
    for (let k of v) {
      if (b.length >= max_2) break;
      let y = (b.length === 0 ? 0 : U) + ie(k.text);
      if (maxWidth_2 !== void 0 && t + y + W > maxWidth_2 && b.length > 0) break;
      b.push(k.text), t += y;
    }
    let i = v.length - b.length;
    if (maxWidth_2 === void 0 || i === 0) break;
    let o = ie(`${l}+${i} more`);
    if (o <= W) break;
    W = o;
  }
  if (b.length === 0) return A;
  let E = v.length - b.length;
  return {
    fellBack: !1,
    text: E > 0 ? `${b.join(l)}${l}+${E} more` : b.join(l),
    hadEntryWithoutDescription: hadEntryWithoutDescription
  };
}
function he(a, {
  scope: scope,
  entriesRef: entriesRef
}, depth, isBoundary) {
  for (let x of entriesRef.current) {
    if (!x.action) continue;
    a.push({
      action: x.action,
      hint: x.hint,
      scope: scope,
      depth: depth,
      isBoundary: isBoundary
    });
  }
}
var children_3 = r(ye, {
  children: [e(F, {
    chord: "enter",
    action: "confirm"
  }), e(Xe, {
    action: "confirm:no",
    context: "Confirmation",
    fallback: "Esc",
    description: "cancel"
  })]
});
function ge(a) {
  let l = w(45),
    {
      title: D,
      titleEnd: C,
      subtitle: u,
      children: children,
      onCancel: x,
      color: color,
      hideInputGuide: hideInputGuide,
      hideBorder: hideBorder,
      inputGuide: inputGuide,
      inputGuideMinHeight: P,
      isCancelActive: isCancelActive,
      onInterrupt: onInterrupt,
      exitOnCtrlCD: exitOnCtrlCD
    } = a,
    color_2 = color === void 0 ? "permission" : color,
    h = isCancelActive === void 0 ? !0 : isCancelActive,
    K = exitOnCtrlCD === void 0 ? !1 : exitOnCtrlCD,
    O = T(null),
    {
      entries: entries,
      exitState: exitState
    } = YJe(K ? void 0 : x, onInterrupt, h),
    U;
  if (l[0] !== h || l[1] !== x) U = h ? [{
    action: "confirm:no",
    run: x,
    hint: "cancel"
  }] : [], l[0] = h, l[1] = x, l[2] = U;else U = l[2];
  let W;
  if (l[3] !== entries || l[4] !== U) W = [...U, ...entries], l[3] = entries, l[4] = U, l[5] = W;else W = l[5];
  let bindings = W,
    E = Pe(qw),
    ref = T(null),
    [t, i] = g(u ? 2 : 1),
    o;
  if (l[6] !== E || l[7] !== t) o = () => {
    if (!E || !ref.current) {
      return;
    }
    let height = Xi(ref.current).height;
    if (height !== t) i(height);
  }, l[6] = E, l[7] = t, l[8] = o;else o = l[8];
  sn(o);
  let y = t + 1 + (hideInputGuide ? 0 : 2),
    B;
  if (l[9] !== E || l[10] !== y) B = E ? {
    ...E,
    rows: Math.max(0, E.rows - y)
  } : null, l[9] = E, l[10] = y, l[11] = B;else B = l[11];
  let value = B,
    Se;
  if (l[12] !== K || l[13] !== exitState || l[14] !== inputGuide) Se = typeof inputGuide === "function" ? inputGuide(exitState) : exitState.pending ? r(n, {
    children: ["Press ", exitState.keyName, " again to ", K ? "exit" : "cancel"]
  }) : inputGuide != null ? inputGuide : void 0, l[12] = K, l[13] = exitState, l[14] = inputGuide, l[15] = Se;else Se = l[15];
  let children_2 = Se,
    ae = typeof inputGuide === "function" || exitState.pending || inputGuide != null,
    Me;
  if (l[16] !== children_2 || l[17] !== hideInputGuide || l[18] !== P || l[19] !== h || l[20] !== ae) Me = !hideInputGuide && e(s, {
    marginTop: 1,
    flexShrink: 0,
    minHeight: P,
    children: ae ? e(n, {
      dimColor: !0,
      italic: !0,
      children: children_2
    }) : !h ? e(n, {
      dimColor: !0,
      italic: !0,
      children: children_3
    }) : e(oe, {
      boundary: O,
      fallback: e(n, {
        dimColor: !0,
        italic: !0,
        children: children_3
      })
    })
  }), l[16] = children_2, l[17] = hideInputGuide, l[18] = P, l[19] = h, l[20] = ae, l[21] = Me;else Me = l[21];
  let ue = Me;
  const flexGrow = hideBorder ? 0 : 1;
  let Q;
  if (l[22] !== color_2 || l[23] !== D || l[24] !== C) Q = C ? r(s, {
    justifyContent: "space-between",
    gap: 2,
    children: [e(n, {
      bold: !0,
      color: color_2,
      children: D
    }), e(n, {
      dimColor: !0,
      wrap: "truncate-start",
      children: C
    })]
  }) : e(n, {
    bold: !0,
    color: color_2,
    children: D
  }), l[22] = color_2, l[23] = D, l[24] = C, l[25] = Q;else Q = l[25];
  let V;
  if (l[26] !== u) V = u && e(n, {
    dimColor: !0,
    children: u
  }), l[26] = u, l[27] = V;else V = l[27];
  let Z;
  if (l[28] !== Q || l[29] !== V) Z = r(s, {
    ref: ref,
    flexDirection: "column",
    children: [Q, V]
  }), l[28] = Q, l[29] = V, l[30] = Z;else Z = l[30];
  let ee;
  if (l[31] !== value || l[32] !== children) ee = e(qw, {
    value: value,
    children: children
  }), l[31] = value, l[32] = children, l[33] = ee;else ee = l[33];
  let te;
  if (l[34] !== Z || l[35] !== ee) te = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [Z, ee]
  }), l[34] = Z, l[35] = ee, l[36] = te;else te = l[36];
  let Ae;
  if (l[37] !== bindings || l[38] !== ue || l[39] !== flexGrow || l[40] !== te) Ae = r(GC, {
    ref: O,
    scope: "Confirmation",
    claimFocus: !0,
    flexGrow: flexGrow,
    flexDirection: "column",
    bindings: bindings,
    children: [te, ue]
  }), l[37] = bindings, l[38] = ue, l[39] = flexGrow, l[40] = te, l[41] = Ae;else Ae = l[41];
  let children_4 = Ae;
  if (hideBorder) {
    return children_4;
  }
  let Ke;
  if (l[42] !== color_2 || l[43] !== children_4) Ke = e(Go, {
    color: color_2,
    children: children_4
  }), l[42] = color_2, l[43] = children_4, l[44] = Ke;else Ke = l[44];
  return Ke;
}
export { ge };