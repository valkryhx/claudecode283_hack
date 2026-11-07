// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  rE
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  t9s,
  SK,
  N0,
  Dm
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  s,
  n,
  Ss
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  t,
  _
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  vd
} from "B:/~BUN/root/chunk-7g0t7h3t.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  cV
} from "B:/~BUN/root/chunk-fnf5t6te.js";
import {
  d1,
  xTe,
  z_r
} from "B:/~BUN/root/chunk-qk8tvzkn.js";
import {
  Sf
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  OGt
} from "B:/~BUN/root/chunk-x2k0mb6b.js";
import {
  Y,
  pb
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  cle
} from "B:/~BUN/root/chunk-bdxfgzxk.js";
import {
  fa
} from "B:/~BUN/root/chunk-t99rgr48.js";
import {
  Si
} from "B:/~BUN/root/chunk-w2rkhp43.js";
import {
  gt
} from "B:/~BUN/root/chunk-sx03ea6s.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Jt,
  ue,
  ve,
  O,
  Rps,
  Zt,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
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
  return lt[i]
}
j();
var W = Jt(null);
var at = 4,
  dt = [
    ["select:previous", "select:next"],
    ["confirm:previous", "confirm:next"],
    ["tabs:next", "tabs:previous"]
  ];

function de({
  boundary: i,
  fallback: p = null,
  omit: a,
  max: f = at,
  terse: h = !1,
  format: u
}) {
  let x = vd(),
    {
      focusManager: R,
      rootNode: D
    } = ve(Dm),
    E = ve(W),
    [k, m] = y(0);
  O(() => {
    if (!x || !R) return;
    let v = () => m((I) => I + 1),
      H = R.subscribe(v),
      P = x.keyHandlerRegistry.scopesChanged.subscribe(v);
    return v(), () => {
      H(), P()
    }
  }, [x, R]);
  let b = Z(() => pt({
      ctx: x,
      activeElement: R?.activeElement ?? null,
      boundaryNode: i ? i.current : D ?? null,
      rendered: i ? E : null,
      omit: a,
      max: f,
      terse: h,
      format: u
    }), [x, R, i, D, E, a, f, h, u, k]),
    C = A(null);
  if (O(() => {
      let v = b.fellBack ? "fell_back" : b.hadEntryWithoutDescription ? "no_description" : "ok";
      if (v === C.current) return;
      let H = C.current === null;
      if (C.current = v, H && v === "fell_back") return;
      if (v === "ok") g("keybinding_auto_hints");
      else c("keybinding_auto_hints", v)
    }, [b.fellBack, b.hadEntryWithoutDescription]), b.fellBack) return p;
  return e(n, {
    dimColor: !0,
    italic: !0,
    children: b.text
  })
}

function pt({
  ctx: i,
  activeElement: p,
  boundaryNode: a,
  rendered: f,
  omit: h,
  max: u,
  terse: x,
  format: R
}) {
  let D = {
    fellBack: !0,
    text: "",
    hadEntryWithoutDescription: !1
  };
  if (!i) return D;
  let E = [],
    k = !1,
    m = 0,
    b = a === null ? void 0 : p ?? void 0;
  while (b) {
    let l = b === a,
      o = i.keyHandlerRegistry.decls.get(b);
    if (o) Oe(E, o, m, l);
    if (l) {
      k = !0;
      break
    }
    b = b.parentNode, m++
  }
  if (!k) {
    if (!f) return D;
    let l = f.chain.length - 1,
      o = f.chain;
    for (let d of f.below[l]?.values() ?? [])
      if (d.claimFocus && d.chain.length > o.length) o = d.chain;
    E = [];
    for (let d = o.length - 1; d >= l; d--) {
      let K = o[d];
      if (K) Oe(E, K, o.length - 1 - d, d === l)
    }
  }
  if (!E.some((l) => !l.isBoundary)) return D;
  let C = new Set(h ?? []),
    v = xTe(cV),
    H = !1,
    P = [];
  for (let l of E) {
    if (C.has(l.action) || !l.scope) continue;
    let o = z_r(l.action, l.scope, i.bindings, v);
    if (!o) continue;
    let d = l.hint ?? He(l.action)?.description;
    if (!d) {
      H = !0;
      continue
    }
    P.push({
      action: l.action,
      description: d,
      chord: d1(o),
      depth: l.depth
    })
  }
  let I = new Set,
    M = [];
  for (let l of P) {
    if (I.has(l.description)) continue;
    I.add(l.description);
    let d = dt.find((B) => B.some((w) => w === l.action))?.flatMap((B) => P.find((w) => w.action === B && w.description === l.description) ?? []),
      K = d?.length === 2 ? d : [l];
    M.push({
      text: pb({
        chord: K.map((B) => B.chord),
        action: l.description,
        terse: x,
        format: R
      }),
      depth: l.depth
    })
  }
  M.sort((l, o) => l.depth - o.depth);
  let N = " \xB7 ",
    F = M.slice(0, u).map((l) => l.text);
  if (F.length === 0) return D;
  let T = M.length - F.length;
  return {
    fellBack: !1,
    text: T > 0 ? `${F.join(N)}${N}+${T} more` : F.join(N),
    hadEntryWithoutDescription: H
  }
}

function Oe(i, {
  scope: p,
  entriesRef: a
}, f, h) {
  for (let u of a.current) {
    if (!u.action) continue;
    i.push({
      action: u.action,
      hint: u.hint,
      scope: p,
      depth: f,
      isBoundary: h
    })
  }
}
j();

function n_({
  scope: i,
  bindings: p,
  active: a = !0,
  preemptive: f = !1,
  swallowAll: h = !1,
  claimFocus: u = !1,
  ref: x,
  flexGrow: R = 0,
  flexDirection: D,
  flexShrink: E,
  children: k
}) {
  let m = A(null),
    b = vd(),
    C = A([]);
  C.current = a ? p : [];
  let v = ue((o) => ut(o, C.current), []),
    H = ft(i, a, f, h, C.current),
    P = a && f && Boolean(i),
    I = P && h;
  Zt(() => {
    if (!b) return;
    let o = m.current;
    if (!o) return;
    let {
      decls: d,
      scopesChanged: K,
      preemptiveScopes: B,
      swallowAll: w
    } = b.keyHandlerRegistry, L = {
      scope: i,
      active: a,
      preemptive: f,
      swallowAll: h,
      entriesRef: C
    };
    if (d.set(o, L), P && i) {
      if (Ae(B, i), I) Ae(w, i)
    }
    return K.emit(), () => {
      if (d.delete(o), P && i) {
        if (Pe(B, i), I) Pe(w, i)
      }
      K.emit()
    }
  }, [b, i, P, I, H]);
  let M = ve(W),
    N = Rps(),
    [F] = y(() => new Map),
    T = Z(() => ({
      chain: [...M?.chain ?? [], {
        scope: i,
        entriesRef: C
      }],
      below: [...M?.below ?? [], F]
    }), [M, i, F]);
  for (let o of M?.below ?? []) o.set(N, {
    chain: T.chain,
    claimFocus: u
  });
  O(() => {
    let o = M?.below ?? [];
    for (let d of o) d.set(N, {
      chain: T.chain,
      claimFocus: u
    });
    return () => {
      for (let d of o) d.delete(N)
    }
  }, [M, N, T, u]), Zt(() => {
    if (!u) return;
    let o = m.current;
    if (!o) return;
    let d = N0(o),
      K = !1,
      B = () => {
        if (K) return;
        let w = m.current;
        if (!w) return;
        let L = d.activeElement;
        if (L && SK(L, w)) return;
        K = !0;
        try {
          d.focus(w)
        } finally {
          K = !1
        }
      };
    return d.pushAutoFocusFallback(o), B(), d.subscribe(B)
  }, [u]);
  let q = A(!1);
  Zt(() => {
    return
  }, [i, u, b]);
  let l = ue((o) => {
    if (m.current = o, typeof x === "function") x(o);
    else if (x) x.current = o
  }, [x]);
  return e(Sf, {
    ref: l,
    keybindingScope: i,
    onAction: v,
    tabIndex: u ? -1 : void 0,
    flexGrow: R,
    flexDirection: D,
    flexShrink: E,
    children: e(W, {
      value: T,
      children: k
    })
  })
}

function ut(i, p) {
  for (let a of p) {
    if (a.action !== i.action) continue;
    if (a.chordOnly && !i.isChordCompletion) continue;
    if (a.run() === !1) continue;
    i.consume();
    return
  }
}

function Ae(i, p) {
  i.set(p, (i.get(p) ?? 0) + 1)
}

function Pe(i, p) {
  let a = (i.get(p) ?? 0) - 1;
  if (a <= 0) i.delete(p);
  else i.set(p, a)
}

function ft(i, p, a, f, h) {
  return _([i ?? "", p, a, f, h.map((u) => [u.action ?? "", u.hint ?? "", Boolean(u.chordOnly)])])
}

function Xt() {
  return !1
}

function Wt() {
  return !1
}
var ge = Ut({}),
  Me = fa(!0),
  Be = ge;

function ke(i) {
  let o = S(48),
    {
      title: p,
      titleEnd: a,
      titleSuffix: f,
      subtitle: h,
      isSubtitleDimmed: u,
      children: x,
      onCancel: R,
      color: D,
      hideInputGuide: E,
      hideBorder: k,
      inputGuide: m,
      truncateInputGuide: b,
      isCancelActive: C,
      onInterrupt: v,
      exitOnCtrlCD: H,
      onExit: P
    } = i,
    I = u === void 0 ? !0 : u,
    M = D === void 0 ? "permission" : D,
    N = C === void 0 ? !0 : C,
    F = H === void 0 ? !1 : H,
    T = cle(),
    [q] = y(Xt),
    l = T || q,
    d;
  if (o[0] !== M || o[1] !== l) d = PGt(M, l), o[0] = M, o[1] = l, o[2] = d;
  else d = o[2];
  let K = d,
    B = T ? void 0 : K,
    w = l ? Be : ge,
    L = A(null),
    ie = F || P !== void 0,
    {
      entries: ye,
      exitState: X
    } = OGt(ie ? P : R, v, N),
    oe;
  if (o[3] !== N || o[4] !== R) oe = N ? [{
    action: "confirm:no",
    run: R,
    hint: "cancel"
  }] : [], o[3] = N, o[4] = R, o[5] = oe;
  else oe = o[5];
  let et;
  if (o[6] !== ye || o[7] !== oe) et = [...oe, ...ye], o[6] = ye, o[7] = oe, o[8] = et;
  else et = o[8];
  let he = et,
    G = ve(rE),
    xe = A(null),
    [re, $t] = y(h ? 2 : 1),
    tt;
  if (o[9] !== G || o[10] !== re) tt = () => {
    if (!G || !xe.current) {
      return
    }
    let nt = Ss(xe.current).height;
    if (nt !== re) $t(nt)
  }, o[9] = G, o[10] = re, o[11] = tt;
  else tt = o[11];
  Zt(tt);
  let Re = re + 1 + (E ? 0 : 2),
    it;
  if (o[12] !== G || o[13] !== Re) it = G ? {
    ...G,
    rows: Math.max(0, G.rows - Re)
  } : null, o[12] = G, o[13] = Re, o[14] = it;
  else it = o[14];
  let Ee = it,
    ot;
  if (o[15] !== ie || o[16] !== X || o[17] !== m) ot = typeof m === "function" ? m(X) : X.pending ? r(n, {
    children: ["Press ", X.keyName, " again to ", ie ? "exit" : "cancel"]
  }) : m != null ? m : void 0, o[15] = ie, o[16] = X, o[17] = m, o[18] = ot;
  else ot = o[18];
  let De = ot,
    Se = typeof m === "function" || X.pending || m != null,
    rt;
  if (o[19] !== De || o[20] !== w || o[21] !== E || o[22] !== N || o[23] !== l || o[24] !== Se || o[25] !== b) rt = !E && e(s, {
    marginTop: 1,
    flexShrink: 0,
    children: Se ? e(n, {
      dimColor: !0,
      italic: !0,
      wrap: b ? "truncate" : void 0,
      children: De
    }) : !N ? e(n, {
      dimColor: !0,
      italic: !0,
      children: w
    }) : e(de, {
      boundary: L,
      terse: l,
      format: l ? Me.format : void 0,
      fallback: e(n, {
        dimColor: !0,
        italic: !0,
        children: w
      })
    })
  }), o[19] = De, o[20] = w, o[21] = E, o[22] = N, o[23] = l, o[24] = Se, o[25] = b, o[26] = rt;
  else rt = o[26];
  let Ke = rt;
  const Ne = k || T ? 0 : 1;
  let se;
  if (o[27] !== I || o[28] !== h || o[29] !== p || o[30] !== B || o[31] !== a || o[32] !== f) se = e(s, {
    ref: xe,
    flexDirection: "column",
    children: e(V, {
      title: p,
      titleEnd: a,
      titleSuffix: f,
      subtitle: h,
      isSubtitleDimmed: I,
      color: B
    })
  }), o[27] = I, o[28] = h, o[29] = p, o[30] = B, o[31] = a, o[32] = f, o[33] = se;
  else se = o[33];
  let ce;
  if (o[34] !== Ee || o[35] !== x) ce = e(rE, {
    value: Ee,
    children: x
  }), o[34] = Ee, o[35] = x, o[36] = ce;
  else ce = o[36];
  let le;
  if (o[37] !== se || o[38] !== ce) le = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [se, ce]
  }), o[37] = se, o[38] = ce, o[39] = le;
  else le = o[39];
  let st;
  if (o[40] !== he || o[41] !== Ke || o[42] !== Ne || o[43] !== le) st = r(n_, {
    ref: L,
    scope: "Confirmation",
    claimFocus: !0,
    flexGrow: Ne,
    flexDirection: "column",
    bindings: he,
    children: [le, Ke]
  }), o[40] = he, o[41] = Ke, o[42] = Ne, o[43] = le, o[44] = st;
  else st = o[44];
  let ae = st;
  if (k || T) {
    return ae
  }
  let ct;
  if (o[45] !== ae || o[46] !== K) ct = e(Si, {
    color: K,
    children: ae
  }), o[45] = ae, o[46] = K, o[47] = ct;
  else ct = o[47];
  return ct
}

function IWr(i) {
  let m = S(17),
    {
      title: p,
      titleEnd: a,
      titleSuffix: f,
      subtitle: h,
      isSubtitleDimmed: u,
      color: x,
      insetX: R,
      children: D
    } = i,
    E = x === void 0 ? "permission" : x,
    [k] = y(Wt),
    b;
  if (m[0] !== E || m[1] !== k) b = PGt(E, k), m[0] = E, m[1] = k, m[2] = b;
  else b = m[2];
  let C = b,
    v;
  if (m[3] !== C || m[4] !== u || m[5] !== h || m[6] !== p || m[7] !== a || m[8] !== f) v = e(s, {
    flexDirection: "column",
    flexShrink: 0,
    children: e(V, {
      title: p,
      titleEnd: a,
      titleSuffix: f,
      subtitle: h,
      isSubtitleDimmed: u,
      color: C
    })
  }), m[3] = C, m[4] = u, m[5] = h, m[6] = p, m[7] = a, m[8] = f, m[9] = v;
  else v = m[9];
  let H;
  if (m[10] !== D || m[11] !== v) H = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [v, D]
  }), m[10] = D, m[11] = v, m[12] = H;
  else H = m[12];
  let P;
  if (m[13] !== C || m[14] !== R || m[15] !== H) P = e(Si, {
    color: C,
    insetX: R,
    children: H
  }), m[13] = C, m[14] = R, m[15] = H, m[16] = P;
  else P = m[16];
  return P
}

function V(i) {
  let D = S(13),
    {
      title: p,
      titleEnd: a,
      titleSuffix: f,
      subtitle: h,
      isSubtitleDimmed: u,
      color: x
    } = i,
    R = u === void 0 ? !0 : u,
    E;
  if (D[0] !== x || D[1] !== p || D[2] !== f) E = f == null ? e(n, {
    bold: !0,
    color: x,
    children: p
  }) : r(n, {
    children: [e(n, {
      bold: !0,
      color: x,
      children: p
    }), f]
  }), D[0] = x, D[1] = p, D[2] = f, D[3] = E;
  else E = D[3];
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
  }) : k, D[4] = a, D[5] = k, D[6] = m;
  else m = D[6];
  let b;
  if (D[7] !== R || D[8] !== h) b = h && (R ? e(n, {
    dimColor: !0,
    children: h
  }) : h), D[7] = R, D[8] = h, D[9] = b;
  else b = D[9];
  let C;
  if (D[10] !== m || D[11] !== b) C = r(ne, {
    children: [m, b]
  }), D[10] = m, D[11] = b, D[12] = C;
  else C = D[12];
  return C
}

function PGt(i, p) {
  return i
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
  })
}
export {
  n_,
  ke,
  IWr,
  PGt
};
