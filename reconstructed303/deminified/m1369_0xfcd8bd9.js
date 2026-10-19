// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { ZS } from "B:/~BUN/root/chunk-b900np4s.js";
import { Pg } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { s, n, Ws } from "B:/~BUN/root/chunk-damrp3r8.js";
import { Zl } from "B:/~BUN/root/chunk-ps74es0g.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { gj, hj, Afe, Ojn } from "B:/~BUN/root/chunk-raq9cfnw.js";
import { Ovt } from "B:/~BUN/root/chunk-327wfkv3.js";
import { q, MF } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Ewn, fE } from "B:/~BUN/root/chunk-mhftza1y.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { ds } from "B:/~BUN/root/chunk-xa5s55y7.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Ee, P, Jt, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
B();
B();
var Ge = {
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
function he(o) {
  if (o.startsWith("command:")) return {
    description: o.slice(8)
  };
  return Ge[o];
}
var je = 4,
  Ue = [["select:previous", "select:next"], ["confirm:previous", "confirm:next"], ["tabs:next", "tabs:previous"]];
function re({
  boundary: boundary,
  fallback = null,
  order: order,
  omit: omit,
  max = je,
  maxWidth: maxWidth,
  terse = !1,
  format: format
}) {
  let ctx = Zl(),
    {
      focusManager: focusManager,
      rootNode: rootNode
    } = Ee(Pg),
    S = Ee(Ewn),
    [j, U] = y(0);
  P(() => {
    if (!ctx || !focusManager) return;
    let h = () => U(R => R + 1),
      c = focusManager.subscribe(h),
      F = ctx.keyHandlerRegistry.scopesChanged.subscribe(h);
    return h(), () => {
      c(), F();
    };
  }, [ctx, focusManager]);
  let a = Z(() => Le({
      ctx: ctx,
      activeElement: focusManager?.activeElement ?? null,
      boundaryNode: boundary ? boundary.current : rootNode ?? null,
      rendered: boundary ? S : null,
      order: order,
      omit: omit,
      max: max,
      maxWidth: maxWidth,
      terse: terse,
      format: format
    }), [ctx, focusManager, boundary, rootNode, S, order, omit, max, maxWidth, terse, format, j]),
    m = A(null);
  if (P(() => {
    let h = a.fellBack ? "fell_back" : a.hadEntryWithoutDescription ? "no_description" : "ok";
    if (h === m.current) return;
    let c = m.current === null;
    if (m.current = h, c && h === "fell_back") return;
    if (h === "ok") g("keybinding_auto_hints");else p("keybinding_auto_hints", h);
  }, [a.fellBack, a.hadEntryWithoutDescription]), a.fellBack) return fallback;
  return e(n, {
    dimColor: !0,
    italic: !0,
    children: a.text
  });
}
function Le({
  ctx: ctx_2,
  activeElement: activeElement,
  boundaryNode: boundaryNode,
  rendered: rendered,
  order: order_2,
  omit: omit_2,
  max: max_2,
  maxWidth: maxWidth_2,
  terse: terse_2,
  format: format_2
}) {
  let O = {
    fellBack: !0,
    text: "",
    hadEntryWithoutDescription: !1
  };
  if (!ctx_2) return O;
  let S = [],
    j = !1,
    U = 0,
    a = boundaryNode === null ? void 0 : activeElement ?? void 0;
  while (a) {
    let t = a === boundaryNode,
      i = ctx_2.keyHandlerRegistry.decls.get(a);
    if (i) ye(S, i, U, t);
    if (t) {
      j = !0;
      break;
    }
    a = a.parentNode, U++;
  }
  if (!j) {
    if (!rendered) return O;
    let t = rendered.chain.length - 1,
      chain = rendered.chain;
    for (let l of rendered.below[t]?.values() ?? []) if (l.claimFocus && l.chain.length > chain.length) chain = l.chain;
    S = [];
    for (let l = chain.length - 1; l >= t; l--) {
      let D = chain[l];
      if (D) ye(S, D, chain.length - 1 - l, l === t);
    }
  }
  if (!S.some(item => !item.isBoundary)) return O;
  let m = new Set(omit_2 ?? []),
    h = Afe(gj),
    hadEntryWithoutDescription = !1,
    F = [];
  for (let t of S) {
    if (m.has(t.action) || !t.scope) continue;
    let i = Ojn(t.action, t.scope, ctx_2.bindings, h);
    if (!i) continue;
    let description = t.hint ?? he(t.action)?.description;
    if (!description) {
      hadEntryWithoutDescription = !0;
      continue;
    }
    F.push({
      action: t.action,
      description: description,
      chord: hj(i),
      depth: t.depth
    });
  }
  let R = new Map();
  (order_2 ?? []).forEach((item, index) => R.set(item, index));
  let X = new Set(),
    I = [];
  for (let t of F) {
    if (X.has(t.description)) continue;
    X.add(t.description);
    let l = Ue.find(item => item.some(item => item === t.action))?.flatMap(x => F.find(item => item.action === x && item.description === t.description) ?? []),
      D = l?.length === 2 ? l : [t];
    I.push({
      order: Math.min(...D.map(item => R.get(item.action) ?? 1 / 0)),
      text: MF({
        chord: D.map(item => item.chord),
        action: t.description,
        terse: terse_2,
        format: format_2
      }),
      depth: t.depth
    });
  }
  I.sort((itemA, itemB) => {
    if (itemA.order !== itemB.order) return itemA.order - itemB.order;
    return itemA.depth - itemB.depth;
  });
  let _ = " \xB7 ",
    H = ie(_),
    M = 0,
    b = [];
  for (;;) {
    b = [];
    let t = 0;
    for (let D of I) {
      if (b.length >= max_2) break;
      let x = (b.length === 0 ? 0 : H) + ie(D.text);
      if (maxWidth_2 !== void 0 && t + x + M > maxWidth_2 && b.length > 0) break;
      b.push(D.text), t += x;
    }
    let i = I.length - b.length;
    if (maxWidth_2 === void 0 || i === 0) break;
    let l = ie(`${_}+${i} more`);
    if (l <= M) break;
    M = l;
  }
  if (b.length === 0) return O;
  let W = I.length - b.length;
  return {
    fellBack: !1,
    text: W > 0 ? `${b.join(_)}${_}+${W} more` : b.join(_),
    hadEntryWithoutDescription: hadEntryWithoutDescription
  };
}
function ye(o, {
  scope: scope,
  entriesRef: entriesRef
}, depth, isBoundary) {
  for (let f of entriesRef.current) {
    if (!f.action) continue;
    o.push({
      action: f.action,
      hint: f.hint,
      scope: scope,
      depth: depth,
      isBoundary: isBoundary
    });
  }
}
var children_3 = nt({});
function be(o) {
  let c = w(46),
    {
      title: C,
      titleEnd: E,
      subtitle: u,
      children: children,
      onCancel: f,
      color: color,
      hideInputGuide: hideInputGuide,
      hideBorder: hideBorder,
      inputGuide: inputGuide,
      isCancelActive: isCancelActive,
      onInterrupt: onInterrupt,
      exitOnCtrlCD: exitOnCtrlCD,
      onExit: onExit
    } = o,
    a = color === void 0 ? "permission" : color,
    m = isCancelActive === void 0 ? !0 : isCancelActive,
    h = exitOnCtrlCD === void 0 ? !1 : exitOnCtrlCD,
    F;
  if (c[0] !== a) F = Te(a, !1), c[0] = a, c[1] = F;else F = c[1];
  let color_2 = F,
    X = A(null),
    I = h || onExit !== void 0,
    {
      entries: entries,
      exitState: exitState
    } = Ovt(I ? onExit : f, onInterrupt, m),
    M;
  if (c[2] !== m || c[3] !== f) M = m ? [{
    action: "confirm:no",
    run: f,
    hint: "cancel"
  }] : [], c[2] = m, c[3] = f, c[4] = M;else M = c[4];
  let b;
  if (c[5] !== entries || c[6] !== M) b = [...M, ...entries], c[5] = entries, c[6] = M, c[7] = b;else b = c[7];
  let bindings = b,
    T = Ee(ZS),
    ref = A(null),
    [i, l] = y(u ? 2 : 1),
    D;
  if (c[8] !== T || c[9] !== i) D = () => {
    if (!T || !ref.current) {
      return;
    }
    let height = Ws(ref.current).height;
    if (height !== i) l(height);
  }, c[8] = T, c[9] = i, c[10] = D;else D = c[10];
  Jt(D);
  let K = i + 1 + (hideInputGuide ? 0 : 2),
    Fe;
  if (c[11] !== T || c[12] !== K) Fe = T ? {
    ...T,
    rows: Math.max(0, T.rows - K)
  } : null, c[11] = T, c[12] = K, c[13] = Fe;else Fe = c[13];
  let value = Fe,
    He;
  if (c[14] !== I || c[15] !== exitState || c[16] !== inputGuide) He = typeof inputGuide === "function" ? inputGuide(exitState) : exitState.pending ? r(n, {
    children: ["Press ", exitState.keyName, " again to ", I ? "exit" : "cancel"]
  }) : inputGuide != null ? inputGuide : void 0, c[14] = I, c[15] = exitState, c[16] = inputGuide, c[17] = He;else He = c[17];
  let children_2 = He,
    fe = typeof inputGuide === "function" || exitState.pending || inputGuide != null,
    Me;
  if (c[18] !== children_2 || c[19] !== hideInputGuide || c[20] !== m || c[21] !== fe) Me = !hideInputGuide && e(s, {
    marginTop: 1,
    flexShrink: 0,
    children: fe ? e(n, {
      dimColor: !0,
      italic: !0,
      children: children_2
    }) : !m ? e(n, {
      dimColor: !0,
      italic: !0,
      children: children_3
    }) : e(re, {
      boundary: X,
      terse: !1,
      format: void 0,
      fallback: e(n, {
        dimColor: !0,
        italic: !0,
        children: children_3
      })
    })
  }), c[18] = children_2, c[19] = hideInputGuide, c[20] = m, c[21] = fe, c[22] = Me;else Me = c[22];
  let me = Me;
  const flexGrow = hideBorder ? 0 : 1;
  let Q;
  if (c[23] !== color_2 || c[24] !== C || c[25] !== E) Q = E ? r(s, {
    justifyContent: "space-between",
    gap: 2,
    children: [e(n, {
      bold: !0,
      color: color_2,
      children: C
    }), e(n, {
      dimColor: !0,
      wrap: "truncate-start",
      children: E
    })]
  }) : e(n, {
    bold: !0,
    color: color_2,
    children: C
  }), c[23] = color_2, c[24] = C, c[25] = E, c[26] = Q;else Q = c[26];
  let V;
  if (c[27] !== u) V = u && e(n, {
    dimColor: !0,
    children: u
  }), c[27] = u, c[28] = V;else V = c[28];
  let ee;
  if (c[29] !== Q || c[30] !== V) ee = r(s, {
    ref: ref,
    flexDirection: "column",
    children: [Q, V]
  }), c[29] = Q, c[30] = V, c[31] = ee;else ee = c[31];
  let te;
  if (c[32] !== value || c[33] !== children) te = e(ZS, {
    value: value,
    children: children
  }), c[32] = value, c[33] = children, c[34] = te;else te = c[34];
  let ne;
  if (c[35] !== ee || c[36] !== te) ne = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ee, te]
  }), c[35] = ee, c[36] = te, c[37] = ne;else ne = c[37];
  let Pe;
  if (c[38] !== bindings || c[39] !== me || c[40] !== flexGrow || c[41] !== ne) Pe = r(fE, {
    ref: X,
    scope: "Confirmation",
    claimFocus: !0,
    flexGrow: flexGrow,
    flexDirection: "column",
    bindings: bindings,
    children: [ne, me]
  }), c[38] = bindings, c[39] = me, c[40] = flexGrow, c[41] = ne, c[42] = Pe;else Pe = c[42];
  let children_4 = Pe;
  if (hideBorder) {
    return children_4;
  }
  let Ke;
  if (c[43] !== children_4 || c[44] !== color_2) Ke = e(ds, {
    color: color_2,
    children: children_4
  }), c[43] = children_4, c[44] = color_2, c[45] = Ke;else Ke = c[45];
  return Ke;
}
function Te(o, C) {
  return o;
}
function nt(o) {
  return r(Se, {
    children: [e(q, {
      chord: "enter",
      action: "confirm",
      ...o
    }), e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "cancel",
      ...o
    })]
  });
}
export { be };