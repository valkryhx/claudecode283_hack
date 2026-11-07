// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { rE } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { t9s, SK, N0, Dm } from "B:/~BUN/root/chunk-31b4g6te.js";
import { s, n, Ss } from "B:/~BUN/root/chunk-qey16aan.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { vd } from "B:/~BUN/root/chunk-7g0t7h3t.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { cV } from "B:/~BUN/root/chunk-fnf5t6te.js";
import { d1, xTe, z_r } from "B:/~BUN/root/chunk-qk8tvzkn.js";
import { Sf } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { OGt } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { Y, pb } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { cle } from "B:/~BUN/root/chunk-bdxfgzxk.js";
import { fa } from "B:/~BUN/root/chunk-t99rgr48.js";
import { Si } from "B:/~BUN/root/chunk-w2rkhp43.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ue, ve, O, Rps, Zt, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
j();
var lt = {
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
  ...{},
  ...{}
};
function He(i) {
  if (i.startsWith("command:")) return {
    description: i.slice(8)
  };
  return lt[i];
}
j();
var W = Jt(null);
var at = 4,
  dt = [["select:previous", "select:next"], ["confirm:previous", "confirm:next"], ["tabs:next", "tabs:previous"]];
function de({
  boundary: boundary,
  fallback = null,
  omit: omit,
  max = at,
  terse = !1,
  format: format
}) {
  let ctx = vd(),
    {
      focusManager: focusManager,
      rootNode: rootNode
    } = ve(Dm),
    E = ve(W),
    [k, m] = y(0);
  O(() => {
    if (!ctx || !focusManager) return;
    let v = () => m(I => I + 1),
      H = focusManager.subscribe(v),
      P = ctx.keyHandlerRegistry.scopesChanged.subscribe(v);
    return v(), () => {
      H(), P();
    };
  }, [ctx, focusManager]);
  let b = Z(() => pt({
      ctx: ctx,
      activeElement: focusManager?.activeElement ?? null,
      boundaryNode: boundary ? boundary.current : rootNode ?? null,
      rendered: boundary ? E : null,
      omit: omit,
      max: max,
      terse: terse,
      format: format
    }), [ctx, focusManager, boundary, rootNode, E, omit, max, terse, format, k]),
    C = A(null);
  if (O(() => {
    let v = b.fellBack ? "fell_back" : b.hadEntryWithoutDescription ? "no_description" : "ok";
    if (v === C.current) return;
    let H = C.current === null;
    if (C.current = v, H && v === "fell_back") return;
    if (v === "ok") g("keybinding_auto_hints");else c("keybinding_auto_hints", v);
  }, [b.fellBack, b.hadEntryWithoutDescription]), b.fellBack) return fallback;
  return e(n, {
    dimColor: !0,
    italic: !0,
    children: b.text
  });
}
function pt({
  ctx: ctx_2,
  activeElement: activeElement,
  boundaryNode: boundaryNode,
  rendered: rendered,
  omit: omit_2,
  max: max_2,
  terse: terse_2,
  format: format_2
}) {
  let D = {
    fellBack: !0,
    text: "",
    hadEntryWithoutDescription: !1
  };
  if (!ctx_2) return D;
  let E = [],
    k = !1,
    m = 0,
    b = boundaryNode === null ? void 0 : activeElement ?? void 0;
  while (b) {
    let l = b === boundaryNode,
      o = ctx_2.keyHandlerRegistry.decls.get(b);
    if (o) Oe(E, o, m, l);
    if (l) {
      k = !0;
      break;
    }
    b = b.parentNode, m++;
  }
  if (!k) {
    if (!rendered) return D;
    let l = rendered.chain.length - 1,
      chain = rendered.chain;
    for (let d of rendered.below[l]?.values() ?? []) if (d.claimFocus && d.chain.length > chain.length) chain = d.chain;
    E = [];
    for (let d = chain.length - 1; d >= l; d--) {
      let K = chain[d];
      if (K) Oe(E, K, chain.length - 1 - d, d === l);
    }
  }
  if (!E.some(item => !item.isBoundary)) return D;
  let C = new Set(omit_2 ?? []),
    v = xTe(cV),
    hadEntryWithoutDescription = !1,
    P = [];
  for (let l of E) {
    if (C.has(l.action) || !l.scope) continue;
    let o = z_r(l.action, l.scope, ctx_2.bindings, v);
    if (!o) continue;
    let description = l.hint ?? He(l.action)?.description;
    if (!description) {
      hadEntryWithoutDescription = !0;
      continue;
    }
    P.push({
      action: l.action,
      description: description,
      chord: d1(o),
      depth: l.depth
    });
  }
  let I = new Set(),
    M = [];
  for (let l of P) {
    if (I.has(l.description)) continue;
    I.add(l.description);
    let d = dt.find(item => item.some(item => item === l.action))?.flatMap(B => P.find(item => item.action === B && item.description === l.description) ?? []),
      K = d?.length === 2 ? d : [l];
    M.push({
      text: pb({
        chord: K.map(item => item.chord),
        action: l.description,
        terse: terse_2,
        format: format_2
      }),
      depth: l.depth
    });
  }
  M.sort((itemA, itemB) => itemA.depth - itemB.depth);
  let N = " \xB7 ",
    F = M.slice(0, max_2).map(item => item.text);
  if (F.length === 0) return D;
  let T = M.length - F.length;
  return {
    fellBack: !1,
    text: T > 0 ? `${F.join(N)}${N}+${T} more` : F.join(N),
    hadEntryWithoutDescription: hadEntryWithoutDescription
  };
}
function Oe(i, {
  scope: scope,
  entriesRef: entriesRef
}, depth, isBoundary) {
  for (let u of entriesRef.current) {
    if (!u.action) continue;
    i.push({
      action: u.action,
      hint: u.hint,
      scope: scope,
      depth: depth,
      isBoundary: isBoundary
    });
  }
}
j();
function n_({
  scope: i,
  bindings: bindings,
  active = !0,
  preemptive = !1,
  swallowAll = !1,
  claimFocus = !1,
  ref: ref,
  flexGrow = 0,
  flexDirection: flexDirection,
  flexShrink: flexShrink,
  children: children
}) {
  let m = A(null),
    b = vd(),
    entriesRef_2 = A([]);
  entriesRef_2.current = active ? bindings : [];
  let onAction = ue(o => ut(o, entriesRef_2.current), []),
    H = ft(i, active, preemptive, swallowAll, entriesRef_2.current),
    P = active && preemptive && Boolean(i),
    I = P && swallowAll;
  Zt(() => {
    if (!b) return;
    let current = m.current;
    if (!current) return;
    let {
        decls: decls,
        scopesChanged: scopesChanged,
        preemptiveScopes: preemptiveScopes,
        swallowAll: swallowAll_2
      } = b.keyHandlerRegistry,
      L = {
        scope: i,
        active: active,
        preemptive: preemptive,
        swallowAll: swallowAll,
        entriesRef: entriesRef_2
      };
    if (decls.set(current, L), P && i) {
      if (Ae(preemptiveScopes, i), I) Ae(swallowAll_2, i);
    }
    return scopesChanged.emit(), () => {
      if (decls.delete(current), P && i) {
        if (Pe(preemptiveScopes, i), I) Pe(swallowAll_2, i);
      }
      scopesChanged.emit();
    };
  }, [b, i, P, I, H]);
  let M = ve(W),
    N = Rps(),
    [F] = y(() => new Map()),
    value = Z(() => ({
      chain: [...(M?.chain ?? []), {
        scope: i,
        entriesRef: entriesRef_2
      }],
      below: [...(M?.below ?? []), F]
    }), [M, i, F]);
  for (let o of M?.below ?? []) o.set(N, {
    chain: value.chain,
    claimFocus: claimFocus
  });
  O(() => {
    let o = M?.below ?? [];
    for (let d of o) d.set(N, {
      chain: value.chain,
      claimFocus: claimFocus
    });
    return () => {
      for (let d of o) d.delete(N);
    };
  }, [M, N, value, claimFocus]), Zt(() => {
    if (!claimFocus) return;
    let current_2 = m.current;
    if (!current_2) return;
    let d = N0(current_2),
      K = !1,
      B = () => {
        if (K) return;
        let current_3 = m.current;
        if (!current_3) return;
        let activeElement_2 = d.activeElement;
        if (activeElement_2 && SK(activeElement_2, current_3)) return;
        K = !0;
        try {
          d.focus(current_3);
        } finally {
          K = !1;
        }
      };
    return d.pushAutoFocusFallback(current_2), B(), d.subscribe(B);
  }, [claimFocus]);
  let q = A(!1);
  Zt(() => {
    return;
  }, [i, claimFocus, b]);
  let ref_2 = ue(o => {
    if (m.current = o, typeof ref === "function") ref(o);else if (ref) ref.current = o;
  }, [ref]);
  return e(Sf, {
    ref: ref_2,
    keybindingScope: i,
    onAction: onAction,
    tabIndex: claimFocus ? -1 : void 0,
    flexGrow: flexGrow,
    flexDirection: flexDirection,
    flexShrink: flexShrink,
    children: e(W, {
      value: value,
      children: children
    })
  });
}
function ut(i, p) {
  for (let a of p) {
    if (a.action !== i.action) continue;
    if (a.chordOnly && !i.isChordCompletion) continue;
    if (a.run() === !1) continue;
    i.consume();
    return;
  }
}
function Ae(i, p) {
  i.set(p, (i.get(p) ?? 0) + 1);
}
function Pe(i, p) {
  let a = (i.get(p) ?? 0) - 1;
  if (a <= 0) i.delete(p);else i.set(p, a);
}
function ft(i, p, a, f, h) {
  return _([i ?? "", p, a, f, h.map(item => [item.action ?? "", item.hint ?? "", Boolean(item.chordOnly)])]);
}
function Xt() {
  return !1;
}
function Wt() {
  return !1;
}
var ge = Ut({}),
  Me = fa(!0),
  Be = ge;
function ke(i) {
  let o = S(48),
    {
      title: title,
      titleEnd: titleEnd,
      titleSuffix: titleSuffix,
      subtitle: subtitle,
      isSubtitleDimmed: isSubtitleDimmed,
      children: children_2,
      onCancel: R,
      color: color,
      hideInputGuide: hideInputGuide,
      hideBorder: hideBorder,
      inputGuide: inputGuide,
      truncateInputGuide: truncateInputGuide,
      isCancelActive: isCancelActive,
      onInterrupt: onInterrupt,
      exitOnCtrlCD: exitOnCtrlCD,
      onExit: onExit
    } = i,
    isSubtitleDimmed_2 = isSubtitleDimmed === void 0 ? !0 : isSubtitleDimmed,
    M = color === void 0 ? "permission" : color,
    N = isCancelActive === void 0 ? !0 : isCancelActive,
    F = exitOnCtrlCD === void 0 ? !1 : exitOnCtrlCD,
    T = cle(),
    [q] = y(Xt),
    terse_3 = T || q,
    d;
  if (o[0] !== M || o[1] !== terse_3) d = PGt(M, terse_3), o[0] = M, o[1] = terse_3, o[2] = d;else d = o[2];
  let color_3 = d,
    color_2 = T ? void 0 : color_3,
    children_4 = terse_3 ? Be : ge,
    L = A(null),
    ie = F || onExit !== void 0,
    {
      entries: entries,
      exitState: exitState
    } = OGt(ie ? onExit : R, onInterrupt, N),
    oe;
  if (o[3] !== N || o[4] !== R) oe = N ? [{
    action: "confirm:no",
    run: R,
    hint: "cancel"
  }] : [], o[3] = N, o[4] = R, o[5] = oe;else oe = o[5];
  let et;
  if (o[6] !== entries || o[7] !== oe) et = [...oe, ...entries], o[6] = entries, o[7] = oe, o[8] = et;else et = o[8];
  let bindings_2 = et,
    G = ve(rE),
    ref_3 = A(null),
    [re, $t] = y(subtitle ? 2 : 1),
    tt;
  if (o[9] !== G || o[10] !== re) tt = () => {
    if (!G || !ref_3.current) {
      return;
    }
    let height = Ss(ref_3.current).height;
    if (height !== re) $t(height);
  }, o[9] = G, o[10] = re, o[11] = tt;else tt = o[11];
  Zt(tt);
  let Re = re + 1 + (hideInputGuide ? 0 : 2),
    it;
  if (o[12] !== G || o[13] !== Re) it = G ? {
    ...G,
    rows: Math.max(0, G.rows - Re)
  } : null, o[12] = G, o[13] = Re, o[14] = it;else it = o[14];
  let value_2 = it,
    ot;
  if (o[15] !== ie || o[16] !== exitState || o[17] !== inputGuide) ot = typeof inputGuide === "function" ? inputGuide(exitState) : exitState.pending ? r(n, {
    children: ["Press ", exitState.keyName, " again to ", ie ? "exit" : "cancel"]
  }) : inputGuide != null ? inputGuide : void 0, o[15] = ie, o[16] = exitState, o[17] = inputGuide, o[18] = ot;else ot = o[18];
  let children_3 = ot,
    Se = typeof inputGuide === "function" || exitState.pending || inputGuide != null,
    rt;
  if (o[19] !== children_3 || o[20] !== children_4 || o[21] !== hideInputGuide || o[22] !== N || o[23] !== terse_3 || o[24] !== Se || o[25] !== truncateInputGuide) rt = !hideInputGuide && e(s, {
    marginTop: 1,
    flexShrink: 0,
    children: Se ? e(n, {
      dimColor: !0,
      italic: !0,
      wrap: truncateInputGuide ? "truncate" : void 0,
      children: children_3
    }) : !N ? e(n, {
      dimColor: !0,
      italic: !0,
      children: children_4
    }) : e(de, {
      boundary: L,
      terse: terse_3,
      format: terse_3 ? Me.format : void 0,
      fallback: e(n, {
        dimColor: !0,
        italic: !0,
        children: children_4
      })
    })
  }), o[19] = children_3, o[20] = children_4, o[21] = hideInputGuide, o[22] = N, o[23] = terse_3, o[24] = Se, o[25] = truncateInputGuide, o[26] = rt;else rt = o[26];
  let Ke = rt;
  const flexGrow_2 = hideBorder || T ? 0 : 1;
  let se;
  if (o[27] !== isSubtitleDimmed_2 || o[28] !== subtitle || o[29] !== title || o[30] !== color_2 || o[31] !== titleEnd || o[32] !== titleSuffix) se = e(s, {
    ref: ref_3,
    flexDirection: "column",
    children: e(V, {
      title: title,
      titleEnd: titleEnd,
      titleSuffix: titleSuffix,
      subtitle: subtitle,
      isSubtitleDimmed: isSubtitleDimmed_2,
      color: color_2
    })
  }), o[27] = isSubtitleDimmed_2, o[28] = subtitle, o[29] = title, o[30] = color_2, o[31] = titleEnd, o[32] = titleSuffix, o[33] = se;else se = o[33];
  let ce;
  if (o[34] !== value_2 || o[35] !== children_2) ce = e(rE, {
    value: value_2,
    children: children_2
  }), o[34] = value_2, o[35] = children_2, o[36] = ce;else ce = o[36];
  let le;
  if (o[37] !== se || o[38] !== ce) le = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [se, ce]
  }), o[37] = se, o[38] = ce, o[39] = le;else le = o[39];
  let st;
  if (o[40] !== bindings_2 || o[41] !== Ke || o[42] !== flexGrow_2 || o[43] !== le) st = r(n_, {
    ref: L,
    scope: "Confirmation",
    claimFocus: !0,
    flexGrow: flexGrow_2,
    flexDirection: "column",
    bindings: bindings_2,
    children: [le, Ke]
  }), o[40] = bindings_2, o[41] = Ke, o[42] = flexGrow_2, o[43] = le, o[44] = st;else st = o[44];
  let children_5 = st;
  if (hideBorder || T) {
    return children_5;
  }
  let ct;
  if (o[45] !== children_5 || o[46] !== color_3) ct = e(Si, {
    color: color_3,
    children: children_5
  }), o[45] = children_5, o[46] = color_3, o[47] = ct;else ct = o[47];
  return ct;
}
function IWr(i) {
  let m = S(17),
    {
      title: title_2,
      titleEnd: titleEnd_2,
      titleSuffix: titleSuffix_2,
      subtitle: subtitle_2,
      isSubtitleDimmed: isSubtitleDimmed_3,
      color: color_4,
      insetX: insetX,
      children: children_6
    } = i,
    E = color_4 === void 0 ? "permission" : color_4,
    [k] = y(Wt),
    b;
  if (m[0] !== E || m[1] !== k) b = PGt(E, k), m[0] = E, m[1] = k, m[2] = b;else b = m[2];
  let color_5 = b,
    v;
  if (m[3] !== color_5 || m[4] !== isSubtitleDimmed_3 || m[5] !== subtitle_2 || m[6] !== title_2 || m[7] !== titleEnd_2 || m[8] !== titleSuffix_2) v = e(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: e(V, {
      title: title_2,
      titleEnd: titleEnd_2,
      titleSuffix: titleSuffix_2,
      subtitle: subtitle_2,
      isSubtitleDimmed: isSubtitleDimmed_3,
      color: color_5
    })
  }), m[3] = color_5, m[4] = isSubtitleDimmed_3, m[5] = subtitle_2, m[6] = title_2, m[7] = titleEnd_2, m[8] = titleSuffix_2, m[9] = v;else v = m[9];
  let children_7;
  if (m[10] !== children_6 || m[11] !== v) children_7 = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [v, children_6]
  }), m[10] = children_6, m[11] = v, m[12] = children_7;else children_7 = m[12];
  let P;
  if (m[13] !== color_5 || m[14] !== insetX || m[15] !== children_7) P = e(Si, {
    color: color_5,
    insetX: insetX,
    children: children_7
  }), m[13] = color_5, m[14] = insetX, m[15] = children_7, m[16] = P;else P = m[16];
  return P;
}
function V(i) {
  let D = S(13),
    {
      title: p,
      titleEnd: a,
      titleSuffix: titleSuffix_3,
      subtitle: h,
      isSubtitleDimmed: isSubtitleDimmed_4,
      color: color_6
    } = i,
    R = isSubtitleDimmed_4 === void 0 ? !0 : isSubtitleDimmed_4,
    E;
  if (D[0] !== color_6 || D[1] !== p || D[2] !== titleSuffix_3) E = titleSuffix_3 == null ? e(n, {
    bold: !0,
    color: color_6,
    children: p
  }) : r(n, {
    children: [e(n, {
      bold: !0,
      color: color_6,
      children: p
    }), titleSuffix_3]
  }), D[0] = color_6, D[1] = p, D[2] = titleSuffix_3, D[3] = E;else E = D[3];
  let k = E,
    m;
  if (D[4] !== a || D[5] !== k) m = a ? r(s, {
    justifyContent: "space-between",
    gap: 2,
    children: [k, e(n, {
      dimColor: !0,
      wrap: "truncate-start",
      children: a
    })]
  }) : k, D[4] = a, D[5] = k, D[6] = m;else m = D[6];
  let b;
  if (D[7] !== R || D[8] !== h) b = h && (R ? e(n, {
    dimColor: !0,
    children: h
  }) : h), D[7] = R, D[8] = h, D[9] = b;else b = D[9];
  let C;
  if (D[10] !== m || D[11] !== b) C = r(ne, {
    children: [m, b]
  }), D[10] = m, D[11] = b, D[12] = C;else C = D[12];
  return C;
}
function PGt(i, p) {
  return i;
}
function Ut(i) {
  return r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "confirm",
      ...i
    }), e(gt, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "cancel",
      ...i
    })]
  });
}
export { n_, ke, IWr, PGt };