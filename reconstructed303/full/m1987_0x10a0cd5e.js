// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  jn,
  Ry
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  Z4
} from "B:/~BUN/root/chunk-9ka04m0y.js";
import {
  ke
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  j5
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  he
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  Oe,
  ew
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  rhe,
  fu
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  us
} from "B:/~BUN/root/chunk-b900np4s.js";
import {
  s,
  n,
  dn
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  rt
} from "B:/~BUN/root/chunk-pw5vpw1q.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  Qc
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  Y1t
} from "B:/~BUN/root/chunk-4bgg5sdy.js";
import {
  mt,
  mv,
  emn
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  kPe
} from "B:/~BUN/root/chunk-d69870x4.js";
import {
  oc
} from "B:/~BUN/root/chunk-t7y4rt40.js";
import {
  qo
} from "B:/~BUN/root/chunk-327wfkv3.js";
import {
  Te
} from "B:/~BUN/root/chunk-smy4yvhm.js";
import {
  ljn,
  z5e
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  s_,
  fS
} from "B:/~BUN/root/chunk-1kwdjsmp.js";
import {
  mE
} from "B:/~BUN/root/chunk-xc1c9t20.js";
import {
  oxe,
  gZ,
  sLn,
  rHn,
  Oq,
  Kf,
  zse,
  Dxe
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  q
} from "B:/~BUN/root/chunk-bf7csy4f.js";
import {
  Se
} from "B:/~BUN/root/chunk-7dpyfa5r.js";
import {
  X_
} from "B:/~BUN/root/chunk-3yw4brjw.js";
import {
  Lr
} from "B:/~BUN/root/chunk-rxj6qxcq.js";
import {
  Qde,
  Zde
} from "B:/~BUN/root/chunk-ttbnzcq8.js";
import {
  ece
} from "B:/~BUN/root/chunk-bjd1w379.js";
import {
  Xe
} from "B:/~BUN/root/chunk-nbjke4gr.js";
import {
  Eo
} from "B:/~BUN/root/chunk-3hxvnq94.js";
import {
  Wr
} from "B:/~BUN/root/chunk-1rb7fvzn.js";
import {
  vk,
  ds
} from "B:/~BUN/root/chunk-xa5s55y7.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  ae,
  gee,
  P,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  ho
} from "B:/~BUN/root/chunk-fqc7tjgr.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
import {
  basename as bn,
  sep as yn
} from "path";
B();
B();

function bt(o) {
  let f = w(36),
    {
      log: d,
      onExit: c,
      onSelect: l
    } = o,
    [p, h] = y(null),
    {
      storageV5: x
    } = Oe(),
    D, _;
  if (f[0] !== d || f[1] !== x) D = () => {
    if (h(null), zse(d)) Dxe(d, {
      storageV5: x
    }).then(h)
  }, _ = [d, x], f[0] = d, f[1] = x, f[2] = D, f[3] = _;
  else D = f[2], _ = f[3];
  P(D, _);
  let E = zse(d) && p === null,
    g = p ?? d,
    V;
  if (f[4] !== g.messages) V = oxe(gZ(sLn(g.messages)), {
    site: "preview"
  }), f[4] = g.messages, f[5] = V;
  else V = f[5];
  let M = V,
    qe;
  if (f[6] !== g) qe = Kf(g) || "", f[6] = g, f[7] = qe;
  else qe = f[7];
  let Fe = qe,
    fe;
  if (f[8] === S) fe = X_(), f[8] = fe;
  else fe = f[8];
  let me = fe,
    z;
  if (f[9] === S) z = {
    context: "Confirmation"
  }, f[9] = z;
  else z = f[9];
  rt("confirm:no", c, z);
  let X;
  if (f[10] !== p || f[11] !== d || f[12] !== l) X = () => {
    l(p ?? d)
  }, f[10] = p, f[11] = d, f[12] = l, f[13] = X;
  else X = f[13];
  let R = X,
    ge;
  if (f[14] === S) ge = {
    context: "Confirmation"
  }, f[14] = ge;
  else ge = f[14];
  if (rt("confirm:yes", R, ge), E) {
    let j;
    if (f[15] === S) j = e(Wr, {
      message: "Loading session\u2026"
    }), f[15] = j;
    else j = f[15];
    let Q;
    if (f[16] === S) Q = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [j, e(n, {
        dimColor: !0,
        children: e(Se, {
          children: e(gt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          })
        })
      })]
    }), f[16] = Q;
    else Q = f[16];
    return Q
  }
  let j;
  if (f[17] === S) j = e(Qde, {
    latchAnnouncementSlot: !1
  }), f[17] = j;
  else j = f[17];
  let Q;
  if (f[18] !== Fe || f[19] !== M) Q = {
    kind: "static",
    messages: M,
    conversationId: Fe
  }, f[18] = Fe, f[19] = M, f[20] = Q;
  else Q = f[20];
  let U;
  if (f[21] === S) U = [], f[21] = U;
  else U = f[21];
  let oe;
  if (f[22] !== Q) oe = e(Zde, {
    source: Q,
    tools: me,
    commands: U,
    screen: "transcript",
    history: "all"
  }), f[22] = Q, f[23] = oe;
  else oe = f[23];
  let O;
  if (f[24] !== g.modified) O = mv(g.modified), f[24] = g.modified, f[25] = O;
  else O = f[25];
  const xe = g.gitBranch ? ` \xB7 ${g.gitBranch}` : "";
  let W;
  if (f[26] !== g.messageCount || f[27] !== O || f[28] !== xe) W = r(n, {
    children: [O, " \xB7", " ", g.messageCount, " messages", xe]
  }), f[26] = g.messageCount, f[27] = O, f[28] = xe, f[29] = W;
  else W = f[29];
  let be;
  if (f[30] === S) be = e(n, {
    dimColor: !0,
    children: r(Se, {
      children: [e(q, {
        chord: "enter",
        action: "resume"
      }), e(gt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel"
      })]
    })
  }), f[30] = be;
  else be = f[30];
  let L;
  if (f[31] !== W) L = r(s, {
    flexShrink: 0,
    flexDirection: "column",
    borderTopDimColor: !0,
    borderBottom: !1,
    borderLeft: !1,
    borderRight: !1,
    borderStyle: "single",
    paddingLeft: 2,
    children: [W, be]
  }), f[31] = W, f[32] = L;
  else L = f[32];
  let Re;
  if (f[33] !== oe || f[34] !== L) Re = r(s, {
    flexDirection: "column",
    children: [j, oe, L]
  }), f[33] = oe, f[34] = L, f[35] = Re;
  else Re = f[35];
  return Re
}
B();

function mo(kt) {
  return kt ? "\u25BC " : "\u25B6 "
}

function go(En) {
  return "  \u25B8 "
}

function wt(o) {
  let R = w(49),
    {
      nodes: d,
      onSelect: c,
      onCancel: l,
      onFocus: p,
      focusNodeId: h,
      visibleOptionCount: x,
      layout: f,
      isDisabled: D,
      hidePromptWhileDisabled: _,
      hideIndexes: E,
      isNodeExpanded: g,
      onExpand: V,
      onCollapse: M,
      getParentPrefix: qe,
      getChildPrefix: Fe,
      onUpFromFirstItem: fe
    } = o,
    me = f === void 0 ? "expanded" : f,
    z = D === void 0 ? !1 : D,
    X = E === void 0 ? !1 : E,
    ge;
  if (R[0] === S) ge = new Set, R[0] = ge;
  else ge = R[0];
  let [j, Q] = y(ge), U = A(!1), oe = A(null), O;
  if (R[1] !== j || R[2] !== g) O = (xe) => {
    if (g) {
      return g(xe)
    }
    return j.has(xe)
  }, R[1] = j, R[2] = g, R[3] = O;
  else O = R[3];
  let W = O,
    be;
  if (R[4] !== W || R[5] !== d) {
    be = [];

    function Be(L, Re, Nt) {
      let lt = !!L.children && L.children.length > 0;
      let Me = W(L.id);
      if (be.push({
          node: L,
          depth: Re,
          isExpanded: Me,
          hasChildren: lt,
          parentId: Nt
        }), lt && Me && L.children) {
        for (const Lt of L.children) Be(Lt, Re + 1, L.id)
      }
    }
    for (const Dt of d) Be(Dt, 0);
    R[4] = W, R[5] = d, R[6] = be
  } else be = R[6];
  let H = be,
    ct = mo,
    _t = go,
    G = qe ?? ct,
    ye = Fe ?? _t,
    re;
  if (R[7] !== ye || R[8] !== G) re = (Ce) => {
    let ze = "";
    if (Ce.hasChildren) ze = G(Ce.isExpanded);
    else if (Ce.depth > 0) ze = ye(Ce.depth);
    return ze + Ce.node.label
  }, R[7] = ye, R[8] = G, R[9] = re;
  else re = R[9];
  let We = re,
    Ye;
  if (R[10] !== We || R[11] !== H) Ye = H.map((Ee) => ({
    label: We(Ee),
    description: Ee.node.description,
    dimDescription: Ee.node.dimDescription ?? !0,
    value: Ee.node.id
  })), R[10] = We, R[11] = H, R[12] = Ye;
  else Ye = R[12];
  let Ze = Ye,
    se;
  if (R[13] !== H) {
    let ut = new Map;
    se = (H.forEach((C) => ut.set(C.node.id, C.node)), ut);
    R[13] = H, R[14] = se
  } else se = R[14];
  let T = se,
    Je;
  if (R[15] !== H) Je = (pt) => H.find((Ie) => Ie.node.id === pt), R[15] = H, R[16] = Je;
  else Je = R[16];
  let Y = Je,
    ft;
  if (R[17] !== Y || R[18] !== M || R[19] !== V) ft = (we, Ft) => {
    let ve = Y(we);
    if (!ve || !ve.hasChildren) {
      return
    }
    if (Ft) {
      if (V) V(we);
      else Q((Pe) => new Set(Pe).add(we))
    } else if (M) M(we);
    else Q((J) => {
      let et = new Set(J);
      return et.delete(we), et
    })
  }, R[17] = Y, R[18] = M, R[19] = V, R[20] = ft;
  else ft = R[20];
  let K = ft,
    $e;
  if (R[21] !== Y || R[22] !== h || R[23] !== z || R[24] !== T || R[25] !== p || R[26] !== K) $e = (de) => {
    if (!h || z) {
      return
    }
    let ee = Y(h);
    if (!ee) {
      return
    }
    if (de.key === "right" && ee.hasChildren) de.preventDefault(), K(h, !0);
    else if (de.key === "left") {
      if (ee.hasChildren && ee.isExpanded) de.preventDefault(), K(h, !1);
      else if (ee.parentId !== void 0) {
        if (de.preventDefault(), U.current = !0, K(ee.parentId, !1), p) {
          let tt = T.get(ee.parentId);
          if (tt) p(tt)
        }
      }
    }
  }, R[21] = Y, R[22] = h, R[23] = z, R[24] = T, R[25] = p, R[26] = K, R[27] = $e;
  else $e = R[27];
  let te = $e,
    nt;
  if (R[28] !== T || R[29] !== c) nt = (F) => {
    let je = T.get(F);
    if (!je) {
      return
    }
    c(je)
  }, R[28] = T, R[29] = c, R[30] = nt;
  else nt = R[30];
  let Ne = nt,
    Le;
  if (R[31] !== T || R[32] !== p) Le = (ot) => {
    if (U.current) {
      U.current = !1;
      return
    }
    if (oe.current === ot) {
      return
    }
    if (oe.current = ot, p) {
      let v = T.get(ot);
      if (v) p(v)
    }
  }, R[31] = T, R[32] = p, R[33] = Le;
  else Le = R[33];
  let st = Le,
    Ue;
  if (R[34] !== h || R[35] !== Ne || R[36] !== st || R[37] !== X || R[38] !== _ || R[39] !== z || R[40] !== me || R[41] !== l || R[42] !== fe || R[43] !== Ze || R[44] !== x) Ue = e(Xe, {
    options: Ze,
    onChange: Ne,
    onFocus: st,
    onCancel: l,
    defaultFocusValue: h,
    visibleOptionCount: x,
    layout: me,
    isDisabled: z,
    hidePromptWhileDisabled: _,
    hideIndexes: X,
    onUpFromFirstItem: fe
  }), R[34] = h, R[35] = Ne, R[36] = st, R[37] = X, R[38] = _, R[39] = z, R[40] = me, R[41] = l, R[42] = fe, R[43] = Ze, R[44] = x, R[45] = Ue;
  else Ue = R[45];
  let ht;
  if (R[46] !== te || R[47] !== Ue) ht = e(s, {
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: te,
    children: Ue
  }), R[46] = te, R[47] = Ue, R[48] = ht;
  else ht = R[48];
  return ht
}

function xo(o, d) {
  let c = o.replace(/\s+/g, " ").trim();
  return mt(c, d)
}
var bo = 2,
  yo = 4,
  So = 2000,
  Sn = 1000,
  Cn = 50000,
  Co = 0.3,
  To = 60000,
  Io = 50,
  wo = 5;

function Tn({
  before: o,
  match: d,
  after: c
}, l) {
  return he.dim(o) + l(d) + he.dim(c)
}

function vo(o) {
  return o.replace(new RegExp(ljn.source + '[^,\\s"]*', "g"), (d) => {
    let c = z5e(d);
    return c ? `PR #${c.prNumber} ${c.prRepository}` : d
  })
}

function Po(o, d, c) {
  let l = o.toLowerCase().indexOf(d.toLowerCase());
  if (l === -1) return null;
  let p = l + d.length,
    h = Math.max(0, l - c),
    x = Math.min(o.length, p + c),
    f = o.slice(h, l),
    D = o.slice(l, p),
    _ = o.slice(p, x);
  return {
    before: (h > 0 ? "\u2026" : "") + f.replace(/\s+/g, " ").trimStart(),
    match: D.trim(),
    after: _.replace(/\s+/g, " ").trimEnd() + (x < o.length ? "\u2026" : "")
  }
}

function vt(o, d, c) {
  let {
    isGroupHeader: l = !1,
    isChild: p = !1,
    forkCount: h = 0
  } = c || {}, x = l && h > 0 ? bo : p ? yo : 0, f = l && h > 0 ? ` (+${h} other ${h===1?"session":"sessions"})` : "", D = o.isSidechain ? " (sidechain)" : "", _ = o.artifactCount !== void 0 && o.artifactCount > 0 ? `  ${fu} ${o.artifactCount}` : "", E = d - x - D.length - f.length - ie(_);
  return `${xo(j5(o),E)}${D}${f}${_}`
}

function Pt(o, d) {
  let {
    isChild: c = !1,
    showProjectPath: l = !1
  } = d || {}, p = c ? "    " : "", h = emn(o), x = l && o.projectPath ? ` \xB7 ${o.projectPath}` : "";
  return p + h + x
}

function lbn({
  logs: o,
  maxHeight: d = 1 / 0,
  forceWidth: c,
  onCancel: l,
  onSelect: p,
  onLogsChanged: h,
  onLoadMore: x,
  initialSearchQuery: f,
  isLoading: D = !1,
  reloadGeneration: _ = 0,
  showAllProjects: E = !1,
  onToggleAllProjects: g,
  currentSessionId: V,
  footerNote: M
}) {
  let {
    storageV5: qe
  } = Oe(), Fe = us(Te()), fe = c === void 0 ? Fe.columns : c, me = qo(l), z = oc(), X = dn(), R = !1, ge = ew(), j = Z(() => (t) => kPe(t, ge.warning), [ge.warning]), Q = Z(() => M === void 0 ? 0 : ie(M.join(" \xB7 ")), [M]), [U, oe] = y(null), [O, xe] = y(!0), [W, be] = y(!1), [L, Re] = y(!1), [Nt, lt] = y(null), [Me, Lt] = y(null), [Be, Dt] = y([]), [H, ct] = y(!1), _t = mE(), [G] = y(() => _t.originalCwd), [ye, re] = y(""), [Ce, ze] = y(0), [We, Ye] = y(new Set), [Ee, Ze] = y(null), [se, ut] = y(1), [C, T] = y(f ? "search" : "list"), [Je, pt] = y(null), {
    query: Ie,
    setQuery: Y,
    cursorOffset: ft,
    handleKeyDown: we,
    handlePaste: Ft
  } = s_({
    isActive: C === "search",
    onExit: () => {
      T("list"), i("tengu_session_search_toggled", {
        enabled: !1
      })
    },
    onExitUp: () => {
      T("list"), i("tengu_session_search_toggled", {
        enabled: !1
      })
    },
    passthroughCtrlKeys: o.length === 0 ? ["n", "a"] : ["n"],
    initialQuery: f || ""
  }), ve = vo(Ie), Pe = gee(ve), [J, et] = y("");
  P(() => {
    if (!Pe) {
      et("");
      return
    }
    return X.setTimeout(() => et(Pe), 300)
  }, [Pe, X]);
  let [K, $e] = y(null), de = !1;
  P(() => {
    Qc().then((a) => oe(a));
    let t = Date.now();
    Y1t(G).then(async (a) => (a.length, a)).then((a) => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: a.length,
        success: !0
      }), Re(a.length > 1), Dt(a), lt(a[0] ?? null);
      let m = a.filter((u) => G === u || G.startsWith(u + yn));
      m.sort((u, N) => N.length - u.length), Lt(m[0] ?? null), ct(!0)
    }).catch(() => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: 0,
        success: !1
      }), ct(!0)
    })
  }, [G]);
  let ee = Z(() => new Map(o.map((t) => [t, Lo(t)])), [o]),
    tt = Z(() => null, [o, ee, !1]),
    te = Z(() => {
      let t = o.filter((a) => {
        let m = Kf(a);
        if (V && m === V) return !0;
        if (a.customTitle ?? a.aiTitle) return !0;
        if (rHn(a.messages)) return !0;
        if (a.firstPrompt || a.customTitle || a.aiTitle) return !0;
        return !1
      });
      if (!O && U) t = t.filter((a) => a.gitBranch === U);
      if (L && !W && !E) {
        let a = Me ?? G;
        t = t.filter((m) => {
          if (m.isAlias) return !0;
          let u = m.projectPath;
          if (u === void 0) return !1;
          let N = null;
          for (let b of Be)
            if (u === b || u.startsWith(b + yn)) {
              if (N === null || b.length > N.length) N = b
            } if (N === null) return u === a;
          return N === a
        })
      }
      return t
    }, [o, V, O, U, L, W, E, G, Me, Be]),
    nt = Z(() => {
      if (!ve) return te;
      let t = ve.toLowerCase();
      return te.filter((a) => {
        let m = j5(a).toLowerCase(),
          u = (a.gitBranch || "").toLowerCase(),
          N = (a.tag || "").toLowerCase(),
          b = a.prNumber ? `pr #${a.prNumber} ${a.prRepository||""}`.toLowerCase() : "";
        return m.includes(t) || u.includes(t) || N.includes(t) || b.includes(t)
      })
    }, [te, ve]);
  P(() => {
    $e(null);
    return
  }, [J, Pe, tt, !1, X]);
  let {
    filteredLogs: F,
    snippets: je
  } = Z(() => {
    let t = new Map,
      a = nt;
    if (K && J && K.query === J) {
      for (let b of K.results)
        if (b.searchableText) {
          let le = Po(b.searchableText, J, Io);
          if (le) t.set(b.log, le)
        } let m = new Set(a.map((b) => b.messages[0]?.uuid)),
        u = new Set(te),
        N = K.results.map((b) => b.log).filter((b) => !m.has(b.messages[0]?.uuid) && u.has(b));
      a = [...a, ...N]
    }
    return {
      filteredLogs: a,
      snippets: t
    }
  }, [nt, K, J, te]), Ne = fe - 2 * vk, Le = Math.max(30, Ne - 4), ot = Z(() => {
    let t = Do(F);
    return Array.from(t.entries()).map(([a, m]) => {
      let u = m[0],
        N = F.indexOf(u),
        b = je.get(u),
        le = b ? Tn(b, j) : null;
      if (m.length === 1) {
        let ne = Pt(u, {
          showProjectPath: E
        });
        return {
          id: `log:${a}:0`,
          value: {
            log: u,
            indexInFiltered: N
          },
          label: vt(u, Le),
          description: le ? `${ne}
  ${le}` : ne,
          dimDescription: !0
        }
      }
      let Dn = m.length - 1,
        _n = m.slice(1).map((ne, Fn) => {
          let kn = F.indexOf(ne),
            jt = je.get(ne),
            Ut = jt ? Tn(jt, j) : null,
            Ht = Pt(ne, {
              isChild: !0,
              showProjectPath: E
            });
          return {
            id: `log:${a}:${Fn+1}`,
            value: {
              log: ne,
              indexInFiltered: kn
            },
            label: vt(ne, Le, {
              isChild: !0
            }),
            description: Ut ? `${Ht}
      ${Ut}` : Ht,
            dimDescription: !0
          }
        }),
        $t = Pt(u, {
          showProjectPath: E
        });
      return {
        id: `group:${a}`,
        value: {
          log: u,
          indexInFiltered: N
        },
        label: vt(u, Le, {
          isGroupHeader: !0,
          forkCount: Dn
        }),
        description: le ? `${$t}
  ${le}` : $t,
        dimDescription: !0,
        children: _n
      }
    })
  }, [F, Le, E, je, j]), v = Ee?.value.log ?? null, st = () => {
    if (!v) return "";
    let t = Kf(v);
    if (!t) return "";
    let a = F.filter((b) => Kf(b) === t);
    if (!(a.length > 1)) return "";
    let u = We.has(t);
    if (a.indexOf(v) > 0 || u) return e(q, {
      chord: "left",
      action: "collapse"
    });
    return e(q, {
      chord: "right",
      action: "expand"
    })
  }, Ue = async () => {
    let t = v ? Kf(v) : void 0;
    if (!v || !t) {
      T("list"), re("");
      return
    }
    if (ye.trim()) {
      if (await Oq(t, ye.trim(), v.fullPath, "user", qe), h) h()
    }
    T("list"), re("")
  }, ht = () => {
    T("list"), Y(""), i("tengu_session_search_toggled", {
      enabled: !1
    })
  }, kt = () => {
    T("search"), i("tengu_session_search_toggled", {
      enabled: !0
    })
  };
  P(() => {
    if (_ === 0) return;
    $e(null)
  }, [_]);
  let En = (t) => {
    Ze(t);
    let a = F.findIndex((m) => Kf(m) === Kf(t.value.log));
    if (a >= 0) ut(a + 1)
  };
  rt("confirm:no", () => {
    T("list"), re("")
  }, {
    context: "Settings",
    isActive: C === "rename"
  });

  function In(t) {
    if (C === "preview") return;
    if (C === "rename");
    else if (C === "search") {
      if (we(t), t.ctrl && t.key === "n") t.preventDefault(), ht();
      else if (t.ctrl && t.key === "a" && g && o.length === 0) t.preventDefault(), g(), i("tengu_session_all_projects_toggled", {
        enabled: E
      })
    } else {
      if (F.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), T("search");
        return
      }
      let a = !t.ctrl && !t.meta,
        m = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && g) t.preventDefault(), g(), i("tengu_session_all_projects_toggled", {
        enabled: E
      });
      else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let u = !O;
        xe(u), i("tengu_session_branch_filter_toggled", {
          enabled: !u
        })
      } else if (t.ctrl && t.key === "w" && L) {
        t.preventDefault();
        let u = !W;
        be(u), i("tengu_session_worktree_filter_toggled", {
          enabled: !u
        })
      } else if (m === "/" && a) t.preventDefault(), T("search"), i("tengu_session_search_toggled", {
        enabled: !0
      });
      else if (t.ctrl && t.key === "r" && v) t.preventDefault(), T("rename"), re(""), i("tengu_session_rename_started", {});
      else if ((t.key === " " && a || t.ctrl && t.key === "v") && v) t.preventDefault(), pt(v), T("preview"), i("tengu_session_preview_opened", {
        messageCount: v.messageCount
      });
      else if (!t.defaultPrevented && a && t.key.length === 1 && t.key !== " ") t.preventDefault(), T("search"), Y(t.key), i("tengu_session_search_toggled", {
        enabled: !0
      })
    }
  }

  function wn(t) {
    if (C === "search") {
      Ft(t);
      return
    }
    let a = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (C === "preview" || C === "rename" || !v || !a) return;
    t.preventDefault(), T("search"), Y(a), i("tengu_session_search_toggled", {
      enabled: !0
    })
  }
  let De = [],
    Rt = !!g && !E && H,
    Mt = Nt ?? G;
  if (Rt) De.push(bn(Mt));
  if (!O && U) De.push(U);
  if (L && !W && !E) {
    let t = Me ?? G;
    if (!(Rt && Mt === t)) De.push(bn(t))
  }
  let vn = !!g && !E && !H,
    Ot = (De.length > 0 || vn) && C !== "search",
    Bt = 3,
    Pn = 5 + Bt + (Ot ? 1 : 0),
    Wt = M !== void 0 && C !== "rename" && Q <= Ne - 2 && d - (5 + Bt + 1) - 3 >= 3,
    Nn = 2 + (Wt ? 1 : 0),
    He = Math.max(1, Math.floor((d - Pn - Nn) / 3)),
    Ln = o.length,
    it = A({
      focusedIndex: -1,
      visible: -1,
      empty: 0
    });
  if (P(() => {
      if (!x) return;
      let t = it.current;
      if (t.focusedIndex !== se || t.visible !== F.length) it.current = {
        focusedIndex: se,
        visible: F.length,
        empty: 0
      };
      let a = He * 2;
      if (se + a >= F.length && it.current.empty < wo) it.current.empty++, x(He * 3)
    }, [se, He, F.length, Ln, x]), o.length === 0 && !g) return null;
  if (C === "preview" && Je) return e(bt, {
    log: Je,
    onExit: () => {
      T("list"), pt(null)
    },
    onSelect: p
  });
  return e(s, {
    flexDirection: "column",
    maxHeight: d - 1,
    onKeyDown: In,
    onPaste: wn,
    children: r(ds, {
      color: "suggestion",
      children: [e(s, {
        flexShrink: 0,
        children: r(n, {
          bold: !0,
          color: "suggestion",
          children: ["Resume session", C === "list" && F.length > He && r(n, {
            dimColor: !0,
            children: [" ", "(", se, " of ", F.length, ")"]
          }), D && e(n, {
            dimColor: !0,
            children: " \xB7 Refreshing\u2026"
          })]
        })
      }), e(fS, {
        query: Ie,
        isFocused: C === "search",
        isTerminalFocused: z,
        cursorOffset: ft
      }), Ot && (De.length > 0 ? e(s, {
        flexShrink: 0,
        paddingLeft: 2,
        children: e(n, {
          dimColor: !0,
          children: e(Se, {
            children: De
          })
        })
      }) : e(s, {
        flexShrink: 0,
        height: 1
      })), e(s, {
        flexShrink: 0,
        children: e(n, {
          children: " "
        })
      }), (C === "search" || C === "list") && Boolean(Ie.trim()) && F.length === 0 && !de && !D && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: r(Eo, {
          children: ['No sessions match "', Ie, '".']
        })
      }), o.length === 0 && C === "list" && !D && !Ie.trim() && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: e(Eo, {
          hint: E ? void 0 : e(q, {
            chord: "ctrl+a",
            action: "show all projects",
            format: {
              modCase: "title",
              charCase: "upper"
            }
          }),
          children: E ? "No conversations found." : "No conversations found in this project."
        })
      }), C === "rename" && v ? r(s, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [e(n, {
          bold: !0,
          children: "Rename session:"
        }), e(s, {
          paddingTop: 1,
          children: e(Lr, {
            value: ye,
            onChange: re,
            onSubmit: Ue,
            placeholder: j5(v, "Enter new session name"),
            columns: Ne - 2,
            cursorOffset: Ce,
            onChangeCursorOffset: ze,
            showCursor: !0,
            focus: !0
          })
        })]
      }) : e(wt, {
        nodes: ot,
        onSelect: (t) => {
          p(t.value.log)
        },
        onFocus: En,
        onCancel: l,
        focusNodeId: Ee?.id,
        visibleOptionCount: He,
        layout: "expanded",
        isDisabled: C === "search",
        hidePromptWhileDisabled: !0,
        hideIndexes: !1,
        isNodeExpanded: (t) => {
          if (C === "search" || !O) return !0;
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          return a ? We.has(a) : !1
        },
        onExpand: (t) => {
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (a) Ye((m) => new Set(m).add(a)), i("tengu_session_group_expanded", {})
        },
        onCollapse: (t) => {
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (a) Ye((m) => {
            let u = new Set(m);
            return u.delete(a), u
          })
        },
        onUpFromFirstItem: kt
      }), Wt && e(s, {
        paddingLeft: 2,
        flexShrink: 0,
        children: e(n, {
          dimColor: !0,
          wrap: "truncate-end",
          children: e(Se, {
            children: M
          })
        })
      }), e(s, {
        paddingLeft: 2,
        children: me.pending ? r(n, {
          dimColor: !0,
          children: ["Press ", me.keyName, " again to exit"]
        }) : C === "rename" ? e(n, {
          dimColor: !0,
          children: r(Se, {
            children: [e(q, {
              chord: "enter",
              action: "save"
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            })]
          })
        }) : C === "search" ? e(n, {
          dimColor: !0,
          children: r(Se, {
            children: [e(n, {
              children: "Type to Search"
            }), o.length === 0 && g && e(q, {
              chord: "ctrl+a",
              action: E ? "only show current repo" : "show all projects",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), e(q, {
              chord: "enter",
              action: "select"
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "clear"
            })]
          })
        }) : e(n, {
          dimColor: !0,
          children: r(Se, {
            children: [g && e(q, {
              chord: "ctrl+a",
              action: E ? "only show current repo" : "show all projects",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), U && e(q, {
              chord: "ctrl+b",
              action: O ? "only show current branch" : "show all branches",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), L && e(q, {
              chord: "ctrl+w",
              action: W ? "only show current worktree" : "show all worktrees",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), v && e(q, {
              chord: "space",
              action: "preview"
            }), v && e(q, {
              chord: "ctrl+r",
              action: "rename",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), e(n, {
              children: "Type to search"
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }), st()]
          })
        })
      })]
    })
  })
}

function No(o) {
  if (o.type !== "user" && o.type !== "assistant") return "";
  let d = "message" in o ? o.message?.content : void 0;
  if (!d) return "";
  let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : void 0;
  if (typeof d === "string") return ece(d, c);
  if (Array.isArray(d)) return d.map((l) => {
    if (typeof l === "string") return l;
    if ("text" in l && typeof l.text === "string") return ece(l.text, c);
    return ""
  }).filter(Boolean).join(" ");
  return ""
}

function Lo(o) {
  let c = (o.messages.length <= So ? o.messages : [...o.messages.slice(0, Sn), ...o.messages.slice(-Sn)]).map(No).filter(Boolean).join(" "),
    p = `${[o.customTitle,o.aiTitle,o.summary,o.firstPrompt,o.gitBranch,o.tag,o.prNumber?`PR #${o.prNumber}`:void 0,o.prRepository].filter(Boolean).join(" ")} ${c}`.trim();
  return p.length > Cn ? p.slice(0, Cn) : p
}

function Do(o) {
  let d = new Map;
  for (let c of o) {
    let l = Kf(c);
    if (l) {
      let p = d.get(l);
      if (p) p.push(c);
      else d.set(l, [c])
    }
  }
  return d.forEach((c) => c.sort((l, p) => new Date(p.modified).getTime() - new Date(l.modified).getTime())), d
}
import {
  lstat as _o
} from "fs/promises";
import {
  posix as Fo,
  sep as ko,
  win32 as Ro
} from "path";

function PZn() {
  return I() === "windows" ? ";" : "&&"
}
async function dbn(o, d, c) {
  let l = ke();
  if (!d || !o.projectPath || o.projectPath === l) return null;
  if (c.some((f) => o.projectPath === f || o.projectPath.startsWith(f + ko))) return null;
  if (!jn(o.projectPath) && !Ry(o.projectPath) && !await Mo(o.projectPath)) return null;
  let h = Kf(o),
    x = Z4(h) ? ` ${h}` : "";
  return `cd ${ho([o.projectPath])} ${PZn()} claude --resume${x}`
}
async function Mo(o) {
  let d = I() === "windows",
    {
      parse: c,
      sep: l
    } = d ? Ro : Fo,
    p = d ? c(o).root.replaceAll("/", l) : c(o).root,
    h = o.slice(c(o).root.length).split(d ? /[\\/]+/ : l).filter(Boolean),
    x = p;
  for (let f of h) {
    x = x === "" || x.endsWith(l) ? x + f : x + l + f;
    try {
      if ((await _o(x)).isSymbolicLink()) return !0
    } catch (D) {
      let _ = k(D);
      return _ !== "ENOENT" && _ !== "ENOTDIR"
    }
  }
  return !0
}
export {
  lbn,
  PZn,
  dbn
};
