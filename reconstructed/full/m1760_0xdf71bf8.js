// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Dn,
  qg
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  RK
} from "B:/~BUN/root/chunk-bvn0mpsk.js";
import {
  we
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  p9e,
  O
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ke
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  vne,
  Md
} from "B:/~BUN/root/chunk-ah3egpyh.js";
import {
  As
} from "B:/~BUN/root/chunk-syke822n.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  ze
} from "B:/~BUN/root/chunk-r2yrqvry.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  Xl
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  ie,
  ot,
  nE,
  GBt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Zft
} from "B:/~BUN/root/chunk-zv4xh2j0.js";
import {
  Nme
} from "B:/~BUN/root/chunk-0av24qsq.js";
import {
  gT
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  Dl
} from "B:/~BUN/root/chunk-1223v177.js";
import {
  Yt
} from "B:/~BUN/root/chunk-jdm3bsma.js";
import {
  Wr
} from "B:/~BUN/root/chunk-5r1x61tc.js";
import {
  ve
} from "B:/~BUN/root/chunk-cxqcvpm0.js";
import {
  Xm,
  Vh
} from "B:/~BUN/root/chunk-da79nptg.js";
import {
  eon,
  XLe
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  G_
} from "B:/~BUN/root/chunk-4r6zcwth.js";
import {
  Nfe,
  Q4,
  mZt,
  sB,
  Wp,
  q8,
  Xfe,
  ien
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  F
} from "B:/~BUN/root/chunk-acd2tycn.js";
import {
  ye
} from "B:/~BUN/root/chunk-41008fhm.js";
import {
  Jw
} from "B:/~BUN/root/chunk-gn719r3c.js";
import {
  Qn
} from "B:/~BUN/root/chunk-jcnv9sfw.js";
import {
  TQ,
  CQ
} from "B:/~BUN/root/chunk-msbnb1j7.js";
import {
  Fe
} from "B:/~BUN/root/chunk-bt71g93n.js";
import {
  Cr
} from "B:/~BUN/root/chunk-xpw4e8kb.js";
import {
  ur
} from "B:/~BUN/root/chunk-ehewxxqw.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  VC,
  Go
} from "B:/~BUN/root/chunk-b36qwjxy.js";
import {
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  se,
  f9,
  R,
  X,
  T,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  Yr
} from "B:/~BUN/root/chunk-n0832wgz.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
import {
  basename as hn,
  sep as gn
} from "path";
N();
N();

function Ct(a) {
  let p = w(36),
    {
      log: d,
      onExit: l,
      onSelect: u
    } = a,
    [f, h] = g(null),
    {
      storageV5: b
    } = ke(),
    D, M;
  if (p[0] !== d || p[1] !== b) D = () => {
    if (h(null), q8(d)) Xfe(d, {
      storageV5: b
    }).then(h)
  }, M = [d, b], p[0] = d, p[1] = b, p[2] = D, p[3] = M;
  else D = p[2], M = p[3];
  R(D, M);
  let C = q8(d) && f === null,
    x = f ?? d,
    K;
  if (p[4] !== x.messages) K = Nfe(Q4(ien(x.messages)), {
    site: "preview"
  }), p[4] = x.messages, p[5] = K;
  else K = p[5];
  let De = K,
    qe;
  if (p[6] !== x) qe = Wp(x) || "", p[6] = x, p[7] = qe;
  else qe = p[7];
  let re = qe,
    ae;
  if (p[8] === S) ae = Jw(), p[8] = ae;
  else ae = p[8];
  let Z = ae,
    V;
  if (p[9] === S) V = {
    context: "Confirmation"
  }, p[9] = V;
  else V = p[9];
  ze("confirm:no", l, V);
  let k;
  if (p[10] !== f || p[11] !== d || p[12] !== u) k = () => {
    u(f ?? d)
  }, p[10] = f, p[11] = d, p[12] = u, p[13] = k;
  else k = p[13];
  let Re = k,
    J;
  if (p[14] === S) J = {
    context: "Confirmation"
  }, p[14] = J;
  else J = p[14];
  if (ze("confirm:yes", Re, J), C) {
    let B;
    if (p[15] === S) B = e(ur, {
      message: "Loading session\u2026"
    }), p[15] = B;
    else B = p[15];
    let j;
    if (p[16] === S) j = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [B, e(n, {
        dimColor: !0,
        children: e(ye, {
          children: e(Xe, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          })
        })
      })]
    }), p[16] = j;
    else j = p[16];
    return j
  }
  let B;
  if (p[17] === S) B = e(TQ, {
    latchAnnouncementSlot: !1
  }), p[17] = B;
  else B = p[17];
  let j;
  if (p[18] !== re || p[19] !== De) j = {
    kind: "static",
    messages: De,
    conversationId: re
  }, p[18] = re, p[19] = De, p[20] = j;
  else j = p[20];
  let G;
  if (p[21] === S) G = [], p[21] = G;
  else G = p[21];
  let de;
  if (p[22] !== j) de = e(CQ, {
    source: j,
    tools: Z,
    commands: G,
    screen: "transcript",
    history: "all"
  }), p[22] = j, p[23] = de;
  else de = p[23];
  let H;
  if (p[24] !== x.modified) H = nE(x.modified), p[24] = x.modified, p[25] = H;
  else H = p[25];
  const le = x.gitBranch ? ` \xB7 ${x.gitBranch}` : "";
  let W;
  if (p[26] !== x.messageCount || p[27] !== H || p[28] !== le) W = r(n, {
    children: [H, " \xB7", " ", x.messageCount, " messages", le]
  }), p[26] = x.messageCount, p[27] = H, p[28] = le, p[29] = W;
  else W = p[29];
  let Q;
  if (p[30] === S) Q = e(n, {
    dimColor: !0,
    children: r(ye, {
      children: [e(F, {
        chord: "enter",
        action: "resume"
      }), e(Xe, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel"
      })]
    })
  }), p[30] = Q;
  else Q = p[30];
  let ce;
  if (p[31] !== W) ce = r(s, {
    flexShrink: 0,
    flexDirection: "column",
    borderTopDimColor: !0,
    borderBottom: !1,
    borderLeft: !1,
    borderRight: !1,
    borderStyle: "single",
    paddingLeft: 2,
    children: [W, Q]
  }), p[31] = W, p[32] = ce;
  else ce = p[32];
  let Ye;
  if (p[33] !== de || p[34] !== ce) Ye = r(s, {
    flexDirection: "column",
    children: [B, de, ce]
  }), p[33] = de, p[34] = ce, p[35] = Ye;
  else Ye = p[35];
  return Ye
}
N();

function co(kt) {
  return kt ? "\u25BC " : "\u25B6 "
}

function uo(Sn) {
  return "  \u25B8 "
}

function Lt(a) {
  let k = w(48),
    {
      nodes: d,
      onSelect: l,
      onCancel: u,
      onFocus: f,
      focusNodeId: h,
      visibleOptionCount: b,
      layout: p,
      isDisabled: D,
      hideIndexes: M,
      isNodeExpanded: C,
      onExpand: x,
      onCollapse: K,
      getParentPrefix: De,
      getChildPrefix: qe,
      onUpFromFirstItem: re
    } = a,
    ae = p === void 0 ? "expanded" : p,
    Z = D === void 0 ? !1 : D,
    V = M === void 0 ? !1 : M,
    Re;
  if (k[0] === S) Re = new Set, k[0] = Re;
  else Re = k[0];
  let [J, B] = g(Re), j = T(!1), G = T(null), de;
  if (k[1] !== J || k[2] !== C) de = (H) => {
    if (C) {
      return C(H)
    }
    return J.has(H)
  }, k[1] = J, k[2] = C, k[3] = de;
  else de = k[3];
  let le = de,
    W;
  if (k[4] !== le || k[5] !== d) {
    W = [];

    function Ze(Q, ce, Ye) {
      let Me = !!Q.children && Q.children.length > 0;
      let ct = le(Q.id);
      if (W.push({
          node: Q,
          depth: ce,
          isExpanded: ct,
          hasChildren: Me,
          parentId: Ye
        }), Me && ct && Q.children) {
        for (const ut of Q.children) Ze(ut, ce + 1, Q.id)
      }
    }
    for (const ft of d) Ze(ft, 0);
    k[4] = le, k[5] = d, k[6] = W
  } else W = k[6];
  let U = W,
    Dt = co,
    q = uo,
    Ee = De ?? Dt,
    ee = qe ?? q,
    pt;
  if (k[7] !== ee || k[8] !== Ee) pt = (Ie) => {
    let Oe = "";
    if (Ie.hasChildren) Oe = Ee(Ie.isExpanded);
    else if (Ie.depth > 0) Oe = ee(Ie.depth);
    return Oe + Ie.node.label
  }, k[7] = ee, k[8] = Ee, k[9] = pt;
  else pt = k[9];
  let Be = pt,
    Je;
  if (k[10] !== Be || k[11] !== U) Je = U.map((We) => ({
    label: Be(We),
    description: We.node.description,
    dimDescription: We.node.dimDescription ?? !0,
    value: We.node.id
  })), k[10] = Be, k[11] = U, k[12] = Je;
  else Je = k[12];
  let te = Je,
    mt;
  if (k[13] !== U) {
    let E = new Map;
    mt = (U.forEach((P) => E.set(P.node.id, P.node)), E);
    k[13] = U, k[14] = mt
  } else mt = k[14];
  let A = mt,
    et;
  if (k[15] !== U) et = (Ne) => U.find((tt) => tt.node.id === Ne), k[15] = U, k[16] = et;
  else et = k[16];
  let ue = et,
    ht;
  if (k[17] !== ue || k[18] !== K || k[19] !== x) ht = (Le, $e) => {
    let fe = ue(Le);
    if (!fe || !fe.hasChildren) {
      return
    }
    if ($e) {
      if (x) x(Le);
      else B((z) => new Set(z).add(Le))
    } else if (K) K(Le);
    else B((gt) => {
      let me = new Set(gt);
      return me.delete(Le), me
    })
  }, k[17] = ue, k[18] = K, k[19] = x, k[20] = ht;
  else ht = k[20];
  let ne = ht,
    nt;
  if (k[21] !== ue || k[22] !== h || k[23] !== Z || k[24] !== A || k[25] !== f || k[26] !== ne) nt = (he) => {
    if (!h || Z) {
      return
    }
    let Y = ue(h);
    if (!Y) {
      return
    }
    if (he.key === "right" && Y.hasChildren) he.preventDefault(), ne(h, !0);
    else if (he.key === "left") {
      if (Y.hasChildren && Y.isExpanded) he.preventDefault(), ne(h, !1);
      else if (Y.parentId !== void 0) {
        if (he.preventDefault(), j.current = !0, ne(Y.parentId, !1), f) {
          let ge = A.get(Y.parentId);
          if (ge) f(ge)
        }
      }
    }
  }, k[21] = ue, k[22] = h, k[23] = Z, k[24] = A, k[25] = f, k[26] = ne, k[27] = nt;
  else nt = k[27];
  let je = nt,
    _;
  if (k[28] !== A || k[29] !== l) _ = (rt) => {
    let st = A.get(rt);
    if (!st) {
      return
    }
    l(st)
  }, k[28] = A, k[29] = l, k[30] = _;
  else _ = k[30];
  let xe = _,
    xt;
  if (k[31] !== A || k[32] !== f) xt = (I) => {
    if (j.current) {
      j.current = !1;
      return
    }
    if (G.current === I) {
      return
    }
    if (G.current = I, f) {
      let bt = A.get(I);
      if (bt) f(bt)
    }
  }, k[31] = A, k[32] = f, k[33] = xt;
  else xt = k[33];
  let it = xt,
    He;
  if (k[34] !== h || k[35] !== xe || k[36] !== it || k[37] !== V || k[38] !== Z || k[39] !== ae || k[40] !== u || k[41] !== re || k[42] !== te || k[43] !== b) He = e(Fe, {
    options: te,
    onChange: xe,
    onFocus: it,
    onCancel: u,
    defaultFocusValue: h,
    visibleOptionCount: b,
    layout: ae,
    isDisabled: Z,
    hideIndexes: V,
    onUpFromFirstItem: re
  }), k[34] = h, k[35] = xe, k[36] = it, k[37] = V, k[38] = Z, k[39] = ae, k[40] = u, k[41] = re, k[42] = te, k[43] = b, k[44] = He;
  else He = k[44];
  let yt;
  if (k[45] !== je || k[46] !== He) yt = e(s, {
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: je,
    children: He
  }), k[45] = je, k[46] = He, k[47] = yt;
  else yt = k[47];
  return yt
}

function fo(a, d) {
  let l = a.replace(/\s+/g, " ").trim();
  return ot(l, d)
}
var po = 2,
  mo = 4,
  ho = 2000,
  xn = 1000,
  bn = 50000,
  go = 0.3,
  xo = 60000,
  bo = 50,
  yo = 5;

function yn({
  before: a,
  match: d,
  after: l
}, u) {
  return pe.dim(a) + u(d) + pe.dim(l)
}

function So(a) {
  return a.replace(new RegExp(eon.source + '[^,\\s"]*', "g"), (d) => {
    let l = XLe(d);
    return l ? `PR #${l.prNumber} ${l.prRepository}` : d
  })
}

function Co(a, d, l) {
  let u = a.toLowerCase().indexOf(d.toLowerCase());
  if (u === -1) return null;
  let f = u + d.length,
    h = Math.max(0, u - l),
    b = Math.min(a.length, f + l),
    p = a.slice(h, u),
    D = a.slice(u, f),
    M = a.slice(f, b);
  return {
    before: (h > 0 ? "\u2026" : "") + p.replace(/\s+/g, " ").trimStart(),
    match: D.trim(),
    after: M.replace(/\s+/g, " ").trimEnd() + (b < a.length ? "\u2026" : "")
  }
}

function Pt(a, d, l) {
  let {
    isGroupHeader: u = !1,
    isChild: f = !1,
    forkCount: h = 0
  } = l || {}, b = u && h > 0 ? po : f ? mo : 0, p = u && h > 0 ? ` (+${h} other ${h===1?"session":"sessions"})` : "", D = a.isSidechain ? " (sidechain)" : "", M = a.artifactCount !== void 0 && a.artifactCount > 0 ? `  ${Md} ${a.artifactCount}` : "", C = d - b - D.length - p.length - ie(M);
  return `${fo(p9e(a),C)}${D}${p}${M}`
}

function _t(a, d) {
  let {
    isChild: l = !1,
    showProjectPath: u = !1
  } = d || {}, f = l ? "    " : "", h = GBt(a), b = u && a.projectPath ? ` \xB7 ${a.projectPath}` : "";
  return f + h + b
}

function o2t({
  logs: a,
  maxHeight: d = 1 / 0,
  forceWidth: l,
  onCancel: u,
  onSelect: f,
  onLogsChanged: h,
  onLoadMore: b,
  initialSearchQuery: p,
  isLoading: D = !1,
  reloadGeneration: M = 0,
  showAllProjects: C = !1,
  onToggleAllProjects: x,
  currentSessionId: K
}) {
  let {
    storageV5: De
  } = ke(), qe = As(ve()), re = l === void 0 ? qe.columns : l, ae = Wr(u), Z = Dl(), V = Yt(), k = !1, Re = gT(), J = X(() => (t) => Nme(t, Re.warning), [Re.warning]), [B, j] = g(null), [G, de] = g(!0), [H, le] = g(!1), [W, Q] = g(!1), [ce, Ye] = g(null), [Me, ct] = g(null), [ut, Ze] = g([]), [ft, U] = g(!1), Dt = G_(), [q] = g(() => Dt.originalCwd), [Ee, ee] = g(""), [pt, Ie] = g(0), [Oe, Be] = g(new Set), [Je, We] = g(null), [te, mt] = g(1), [E, P] = g(p ? "search" : "list"), [A, et] = g(null), {
    query: Ne,
    setQuery: tt,
    cursorOffset: ue,
    handleKeyDown: ht,
    handlePaste: Le
  } = Xm({
    isActive: E === "search",
    onExit: () => {
      P("list"), i("tengu_session_search_toggled", {
        enabled: !1
      })
    },
    onExitUp: () => {
      P("list"), i("tengu_session_search_toggled", {
        enabled: !1
      })
    },
    passthroughCtrlKeys: a.length === 0 ? ["n", "a"] : ["n"],
    initialQuery: p || ""
  }), $e = So(Ne), fe = f9($e), [z, gt] = g("");
  R(() => {
    if (!fe) {
      gt("");
      return
    }
    return V.setTimeout(() => gt(fe), 300)
  }, [fe, V]);
  let [me, ne] = g(null), nt = !1;
  R(() => {
    Xl().then((o) => j(o));
    let t = Date.now();
    Zft(q).then(async (o) => (o.length, o)).then((o) => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: o.length,
        success: !0
      }), Q(o.length > 1), Ze(o), Ye(o[0] ?? null);
      let m = o.filter((c) => q === c || q.startsWith(c + gn));
      m.sort((c, L) => L.length - c.length), ct(m[0] ?? null), U(!0)
    }).catch(() => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: 0,
        success: !1
      }), U(!0)
    })
  }, [q]);
  let he = X(() => new Map(a.map((t) => [t, Eo(t)])), [a]),
    Y = X(() => null, [a, he, !1]),
    ge = X(() => {
      let t = a.filter((o) => {
        let m = Wp(o);
        if (K && m === K) return !0;
        if (o.customTitle ?? o.aiTitle) return !0;
        if (mZt(o.messages)) return !0;
        if (o.firstPrompt || o.customTitle || o.aiTitle) return !0;
        return !1
      });
      if (!G && B) t = t.filter((o) => o.gitBranch === B);
      if (W && !H && !C) {
        let o = Me ?? q;
        t = t.filter((m) => {
          if (m.isAlias) return !0;
          let c = m.projectPath;
          if (c === void 0) return !1;
          let L = null;
          for (let y of ut)
            if (c === y || c.startsWith(y + gn)) {
              if (L === null || y.length > L.length) L = y
            } if (L === null) return c === o;
          return L === o
        })
      }
      return t
    }, [a, K, G, B, W, H, C, q, Me, ut]),
    je = X(() => {
      if (!$e) return ge;
      let t = $e.toLowerCase();
      return ge.filter((o) => {
        let m = p9e(o).toLowerCase(),
          c = (o.gitBranch || "").toLowerCase(),
          L = (o.tag || "").toLowerCase(),
          y = o.prNumber ? `pr #${o.prNumber} ${o.prRepository||""}`.toLowerCase() : "";
        return m.includes(t) || c.includes(t) || L.includes(t) || y.includes(t)
      })
    }, [ge, $e]);
  R(() => {
    ne(null);
    return
  }, [z, fe, Y, !1, V]);
  let {
    filteredLogs: _,
    snippets: rt
  } = X(() => {
    let t = new Map,
      o = je;
    if (me && z && me.query === z) {
      for (let y of me.results)
        if (y.searchableText) {
          let be = Co(y.searchableText, z, bo);
          if (be) t.set(y.log, be)
        } let m = new Set(o.map((y) => y.messages[0]?.uuid)),
        c = new Set(ge),
        L = me.results.map((y) => y.log).filter((y) => !m.has(y.messages[0]?.uuid) && c.has(y));
      o = [...o, ...L]
    }
    return {
      filteredLogs: o,
      snippets: t
    }
  }, [je, me, z, ge]), st = re - 2 * VC, xe = Math.max(30, st - 4), xt = X(() => {
    let t = Io(_);
    return Array.from(t.entries()).map(([o, m]) => {
      let c = m[0],
        L = _.indexOf(c),
        y = rt.get(c),
        be = y ? yn(y, J) : null;
      if (m.length === 1) {
        let oe = _t(c, {
          showProjectPath: C
        });
        return {
          id: `log:${o}:0`,
          value: {
            log: c,
            indexInFiltered: L
          },
          label: Pt(c, xe),
          description: be ? `${oe}
  ${be}` : oe,
          dimDescription: !0
        }
      }
      let wn = m.length - 1,
        Nn = m.slice(1).map((oe, Ln) => {
          let Pn = _.indexOf(oe),
            Bt = rt.get(oe),
            Wt = Bt ? yn(Bt, J) : null,
            $t = _t(oe, {
              isChild: !0,
              showProjectPath: C
            });
          return {
            id: `log:${o}:${Ln+1}`,
            value: {
              log: oe,
              indexInFiltered: Pn
            },
            label: Pt(oe, xe, {
              isChild: !0
            }),
            description: Wt ? `${$t}
      ${Wt}` : $t,
            dimDescription: !0
          }
        }),
        Ot = _t(c, {
          showProjectPath: C
        });
      return {
        id: `group:${o}`,
        value: {
          log: c,
          indexInFiltered: L
        },
        label: Pt(c, xe, {
          isGroupHeader: !0,
          forkCount: wn
        }),
        description: be ? `${Ot}
  ${be}` : Ot,
        dimDescription: !0,
        children: Nn
      }
    })
  }, [_, xe, C, rt, J]), I = Je?.value.log ?? null, bt = () => {
    if (!I) return "";
    let t = Wp(I);
    if (!t) return "";
    let o = _.filter((y) => Wp(y) === t);
    if (!(o.length > 1)) return "";
    let c = Oe.has(t);
    if (o.indexOf(I) > 0 || c) return e(F, {
      chord: "left",
      action: "collapse"
    });
    return e(F, {
      chord: "right",
      action: "expand"
    })
  }, it = async () => {
    let t = I ? Wp(I) : void 0;
    if (!I || !t) {
      P("list"), ee("");
      return
    }
    if (Ee.trim()) {
      if (await sB(t, Ee.trim(), I.fullPath, "user", De), h) h()
    }
    P("list"), ee("")
  }, He = () => {
    P("list"), tt(""), i("tengu_session_search_toggled", {
      enabled: !1
    })
  }, yt = () => {
    P("search"), i("tengu_session_search_toggled", {
      enabled: !0
    })
  };
  R(() => {
    if (M === 0) return;
    ne(null)
  }, [M]);
  let kt = (t) => {
    We(t);
    let o = _.findIndex((m) => Wp(m) === Wp(t.value.log));
    if (o >= 0) mt(o + 1)
  };
  ze("confirm:no", () => {
    P("list"), ee("")
  }, {
    context: "Settings",
    isActive: E === "rename"
  });

  function Sn(t) {
    if (E === "preview") return;
    if (E === "rename");
    else if (E === "search") {
      if (ht(t), t.ctrl && t.key === "n") t.preventDefault(), He();
      else if (t.ctrl && t.key === "a" && x && a.length === 0) t.preventDefault(), x(), i("tengu_session_all_projects_toggled", {
        enabled: C
      })
    } else {
      if (_.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), P("search");
        return
      }
      let o = !t.ctrl && !t.meta,
        m = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && x) t.preventDefault(), x(), i("tengu_session_all_projects_toggled", {
        enabled: C
      });
      else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let c = !G;
        de(c), i("tengu_session_branch_filter_toggled", {
          enabled: !c
        })
      } else if (t.ctrl && t.key === "w" && W) {
        t.preventDefault();
        let c = !H;
        le(c), i("tengu_session_worktree_filter_toggled", {
          enabled: !c
        })
      } else if (m === "/" && o) t.preventDefault(), P("search"), i("tengu_session_search_toggled", {
        enabled: !0
      });
      else if (t.ctrl && t.key === "r" && I) t.preventDefault(), P("rename"), ee(""), i("tengu_session_rename_started", {});
      else if ((t.key === " " && o || t.ctrl && t.key === "v") && I) t.preventDefault(), et(I), P("preview"), i("tengu_session_preview_opened", {
        messageCount: I.messageCount
      });
      else if (!t.defaultPrevented && o && t.key.length === 1 && t.key !== " ") t.preventDefault(), P("search"), tt(t.key), i("tengu_session_search_toggled", {
        enabled: !0
      })
    }
  }

  function Cn(t) {
    if (E === "search") {
      Le(t);
      return
    }
    let o = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (E === "preview" || E === "rename" || !I || !o) return;
    t.preventDefault(), P("search"), tt(o), i("tengu_session_search_toggled", {
      enabled: !0
    })
  }
  let Pe = [],
    Ft = !!x && !C && ft,
    Rt = ce ?? q;
  if (Ft) Pe.push(hn(Rt));
  if (!G && B) Pe.push(B);
  if (W && !H && !C) {
    let t = Me ?? q;
    if (!(Ft && Rt === t)) Pe.push(hn(t))
  }
  let Tn = !!x && !C && !ft,
    Mt = (Pe.length > 0 || Tn) && E !== "search",
    En = 8 + (Mt ? 1 : 0),
    In = 2,
    Ue = Math.max(1, Math.floor((d - En - In) / 3)),
    vn = a.length,
    at = T({
      focusedIndex: -1,
      visible: -1,
      empty: 0
    });
  if (R(() => {
      if (!b) return;
      let t = at.current;
      if (t.focusedIndex !== te || t.visible !== _.length) at.current = {
        focusedIndex: te,
        visible: _.length,
        empty: 0
      };
      let o = Ue * 2;
      if (te + o >= _.length && at.current.empty < yo) at.current.empty++, b(Ue * 3)
    }, [te, Ue, _.length, vn, b]), a.length === 0 && !x) return null;
  if (E === "preview" && A) return e(Ct, {
    log: A,
    onExit: () => {
      P("list"), et(null)
    },
    onSelect: f
  });
  return e(s, {
    flexDirection: "column",
    maxHeight: d - 1,
    onKeyDown: Sn,
    onPaste: Cn,
    children: r(Go, {
      color: "suggestion",
      children: [e(s, {
        flexShrink: 0,
        children: r(n, {
          bold: !0,
          color: "suggestion",
          children: ["Resume session", E === "list" && _.length > Ue && r(n, {
            dimColor: !0,
            children: [" ", "(", te, " of ", _.length, ")"]
          }), D && e(n, {
            dimColor: !0,
            children: " \xB7 Refreshing\u2026"
          })]
        })
      }), e(Vh, {
        query: Ne,
        isFocused: E === "search",
        isTerminalFocused: Z,
        cursorOffset: ue
      }), Mt && (Pe.length > 0 ? e(s, {
        flexShrink: 0,
        paddingLeft: 2,
        children: e(n, {
          dimColor: !0,
          children: e(ye, {
            children: Pe
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
      }), (E === "search" || E === "list") && Boolean(Ne.trim()) && _.length === 0 && !nt && !D && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: r(Cr, {
          children: ['No sessions match "', Ne, '".']
        })
      }), a.length === 0 && E === "list" && !D && !Ne.trim() && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: e(Cr, {
          hint: C ? void 0 : e(F, {
            chord: "ctrl+a",
            action: "show all projects",
            format: {
              modCase: "title",
              charCase: "upper"
            }
          }),
          children: C ? "No conversations found." : "No conversations found in this project."
        })
      }), E === "rename" && I ? r(s, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [e(n, {
          bold: !0,
          children: "Rename session:"
        }), e(s, {
          paddingTop: 1,
          children: e(Qn, {
            value: Ee,
            onChange: ee,
            onSubmit: it,
            placeholder: p9e(I, "Enter new session name"),
            columns: st - 2,
            cursorOffset: pt,
            onChangeCursorOffset: Ie,
            showCursor: !0,
            focus: !0
          })
        })]
      }) : e(Lt, {
        nodes: xt,
        onSelect: (t) => {
          f(t.value.log)
        },
        onFocus: kt,
        onCancel: u,
        focusNodeId: Je?.id,
        visibleOptionCount: Ue,
        layout: "expanded",
        isDisabled: E === "search",
        hideIndexes: !1,
        isNodeExpanded: (t) => {
          if (E === "search" || !G) return !0;
          let o = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          return o ? Oe.has(o) : !1
        },
        onExpand: (t) => {
          let o = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (o) Be((m) => new Set(m).add(o)), i("tengu_session_group_expanded", {})
        },
        onCollapse: (t) => {
          let o = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (o) Be((m) => {
            let c = new Set(m);
            return c.delete(o), c
          })
        },
        onUpFromFirstItem: yt
      }), e(s, {
        paddingLeft: 2,
        children: ae.pending ? r(n, {
          dimColor: !0,
          children: ["Press ", ae.keyName, " again to exit"]
        }) : E === "rename" ? e(n, {
          dimColor: !0,
          children: r(ye, {
            children: [e(F, {
              chord: "enter",
              action: "save"
            }), e(Xe, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            })]
          })
        }) : E === "search" ? e(n, {
          dimColor: !0,
          children: r(ye, {
            children: [e(n, {
              children: "Type to Search"
            }), a.length === 0 && x && e(F, {
              chord: "ctrl+a",
              action: C ? "only show current repo" : "show all projects",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), e(F, {
              chord: "enter",
              action: "select"
            }), e(Xe, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "clear"
            })]
          })
        }) : e(n, {
          dimColor: !0,
          children: r(ye, {
            children: [x && e(F, {
              chord: "ctrl+a",
              action: C ? "only show current repo" : "show all projects",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), B && e(F, {
              chord: "ctrl+b",
              action: G ? "only show current branch" : "show all branches",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), W && e(F, {
              chord: "ctrl+w",
              action: H ? "only show current worktree" : "show all worktrees",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), I && e(F, {
              chord: "space",
              action: "preview"
            }), I && e(F, {
              chord: "ctrl+r",
              action: "rename",
              format: {
                modCase: "title",
                charCase: "upper"
              }
            }), e(n, {
              children: "Type to search"
            }), e(Xe, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel"
            }), bt()]
          })
        })
      })]
    })
  })
}

function To(a) {
  if (a.type !== "user" && a.type !== "assistant") return "";
  let d = "message" in a ? a.message?.content : void 0;
  if (!d) return "";
  if (typeof d === "string") return d;
  if (Array.isArray(d)) return d.map((l) => {
    if (typeof l === "string") return l;
    if ("text" in l && typeof l.text === "string") return l.text;
    return ""
  }).filter(Boolean).join(" ");
  return ""
}

function Eo(a) {
  let l = (a.messages.length <= ho ? a.messages : [...a.messages.slice(0, xn), ...a.messages.slice(-xn)]).map(To).filter(Boolean).join(" "),
    f = `${[a.customTitle,a.aiTitle,a.summary,a.firstPrompt,a.gitBranch,a.tag,a.prNumber?`PR #${a.prNumber}`:void 0,a.prRepository].filter(Boolean).join(" ")} ${l}`.trim();
  return f.length > bn ? f.slice(0, bn) : f
}

function Io(a) {
  let d = new Map;
  for (let l of a) {
    let u = Wp(l);
    if (u) {
      let f = d.get(u);
      if (f) f.push(l);
      else d.set(u, [l])
    }
  }
  return d.forEach((l) => l.sort((u, f) => new Date(f.modified).getTime() - new Date(u.modified).getTime())), d
}
import {
  lstat as vo
} from "fs/promises";
import {
  posix as wo,
  sep as No,
  win32 as Lo
} from "path";

function nSn() {
  return O() === "windows" ? ";" : "&&"
}
async function s2t(a, d, l) {
  let u = we();
  if (!d || !a.projectPath || a.projectPath === u) return null;
  if (l.some((p) => a.projectPath === p || a.projectPath.startsWith(p + No))) return null;
  if (!Dn(a.projectPath) && !qg(a.projectPath) && !await Po(a.projectPath)) return null;
  let h = Wp(a),
    b = RK(h) ? ` ${h}` : "";
  return `cd ${Yr([a.projectPath])} ${nSn()} claude --resume${b}`
}
async function Po(a) {
  let d = O() === "windows",
    {
      parse: l,
      sep: u
    } = d ? Lo : wo,
    f = d ? l(a).root.replaceAll("/", u) : l(a).root,
    h = a.slice(l(a).root.length).split(d ? /[\\/]+/ : u).filter(Boolean),
    b = f;
  for (let p of h) {
    b = b === "" || b.endsWith(u) ? b + p : b + u + p;
    try {
      if ((await vo(b)).isSymbolicLink()) return !0
    } catch (D) {
      let M = v(D);
      return M !== "ENOENT" && M !== "ENOTDIR"
    }
  }
  return !0
}
export {
  o2t,
  nSn,
  s2t
};
