// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { Dn, qg } from "B:/~BUN/root/chunk-54p0h65d.js";
import { RK } from "B:/~BUN/root/chunk-bvn0mpsk.js";
import { we } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { p9e, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { vne, Md } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { As } from "B:/~BUN/root/chunk-syke822n.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { Xl } from "B:/~BUN/root/chunk-339q6g5w.js";
import { ie, ot, nE, GBt } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { Zft } from "B:/~BUN/root/chunk-zv4xh2j0.js";
import { Nme } from "B:/~BUN/root/chunk-0av24qsq.js";
import { gT } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { Dl } from "B:/~BUN/root/chunk-1223v177.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { Wr } from "B:/~BUN/root/chunk-5r1x61tc.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { Xm, Vh } from "B:/~BUN/root/chunk-da79nptg.js";
import { eon, XLe } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { G_ } from "B:/~BUN/root/chunk-4r6zcwth.js";
import { Nfe, Q4, mZt, sB, Wp, q8, Xfe, ien } from "B:/~BUN/root/chunk-3jyp964r.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Jw } from "B:/~BUN/root/chunk-gn719r3c.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { TQ, CQ } from "B:/~BUN/root/chunk-msbnb1j7.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { Cr } from "B:/~BUN/root/chunk-xpw4e8kb.js";
import { ur } from "B:/~BUN/root/chunk-ehewxxqw.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { VC, Go } from "B:/~BUN/root/chunk-b36qwjxy.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { se, f9, R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { Yr } from "B:/~BUN/root/chunk-n0832wgz.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { basename as hn, sep as gn } from "path";
N();
N();
function Ct(a) {
  let p = w(36),
    {
      log: log,
      onExit: onExit,
      onSelect: onSelect
    } = a,
    [f, h] = g(null),
    {
      storageV5: storageV5
    } = ke(),
    D,
    M;
  if (p[0] !== log || p[1] !== storageV5) D = () => {
    if (h(null), q8(log)) Xfe(log, {
      storageV5: storageV5
    }).then(h);
  }, M = [log, storageV5], p[0] = log, p[1] = storageV5, p[2] = D, p[3] = M;else D = p[2], M = p[3];
  R(D, M);
  let C = q8(log) && f === null,
    x = f ?? log,
    K;
  if (p[4] !== x.messages) K = Nfe(Q4(ien(x.messages)), {
    site: "preview"
  }), p[4] = x.messages, p[5] = K;else K = p[5];
  let messages = K,
    qe;
  if (p[6] !== x) qe = Wp(x) || "", p[6] = x, p[7] = qe;else qe = p[7];
  let conversationId = qe,
    ae;
  if (p[8] === S) ae = Jw(), p[8] = ae;else ae = p[8];
  let tools = ae,
    V;
  if (p[9] === S) V = {
    context: "Confirmation"
  }, p[9] = V;else V = p[9];
  ze("confirm:no", onExit, V);
  let k;
  if (p[10] !== f || p[11] !== log || p[12] !== onSelect) k = () => {
    onSelect(f ?? log);
  }, p[10] = f, p[11] = log, p[12] = onSelect, p[13] = k;else k = p[13];
  let Re = k,
    J;
  if (p[14] === S) J = {
    context: "Confirmation"
  }, p[14] = J;else J = p[14];
  if (ze("confirm:yes", Re, J), C) {
    let B;
    if (p[15] === S) B = e(ur, {
      message: "Loading session\u2026"
    }), p[15] = B;else B = p[15];
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
    }), p[16] = j;else j = p[16];
    return j;
  }
  let B;
  if (p[17] === S) B = e(TQ, {
    latchAnnouncementSlot: !1
  }), p[17] = B;else B = p[17];
  let source;
  if (p[18] !== conversationId || p[19] !== messages) source = {
    kind: "static",
    messages: messages,
    conversationId: conversationId
  }, p[18] = conversationId, p[19] = messages, p[20] = source;else source = p[20];
  let commands;
  if (p[21] === S) commands = [], p[21] = commands;else commands = p[21];
  let de;
  if (p[22] !== source) de = e(CQ, {
    source: source,
    tools: tools,
    commands: commands,
    screen: "transcript",
    history: "all"
  }), p[22] = source, p[23] = de;else de = p[23];
  let H;
  if (p[24] !== x.modified) H = nE(x.modified), p[24] = x.modified, p[25] = H;else H = p[25];
  const le = x.gitBranch ? ` \xB7 ${x.gitBranch}` : "";
  let W;
  if (p[26] !== x.messageCount || p[27] !== H || p[28] !== le) W = r(n, {
    children: [H, " \xB7", " ", x.messageCount, " messages", le]
  }), p[26] = x.messageCount, p[27] = H, p[28] = le, p[29] = W;else W = p[29];
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
  }), p[30] = Q;else Q = p[30];
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
  }), p[31] = W, p[32] = ce;else ce = p[32];
  let Ye;
  if (p[33] !== de || p[34] !== ce) Ye = r(s, {
    flexDirection: "column",
    children: [B, de, ce]
  }), p[33] = de, p[34] = ce, p[35] = Ye;else Ye = p[35];
  return Ye;
}
N();
function co(kt) {
  return kt ? "\u25BC " : "\u25B6 ";
}
function uo(Sn) {
  return "  \u25B8 ";
}
function Lt(a) {
  let k = w(48),
    {
      nodes: nodes,
      onSelect: onSelect_2,
      onCancel: onCancel,
      onFocus: onFocus,
      focusNodeId: h,
      visibleOptionCount: visibleOptionCount,
      layout: layout,
      isDisabled: isDisabled,
      hideIndexes: hideIndexes,
      isNodeExpanded: isNodeExpanded,
      onExpand: onExpand,
      onCollapse: onCollapse,
      getParentPrefix: getParentPrefix,
      getChildPrefix: getChildPrefix,
      onUpFromFirstItem: onUpFromFirstItem
    } = a,
    layout_2 = layout === void 0 ? "expanded" : layout,
    isDisabled_2 = isDisabled === void 0 ? !1 : isDisabled,
    hideIndexes_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    Re;
  if (k[0] === S) Re = new Set(), k[0] = Re;else Re = k[0];
  let [J, B] = g(Re),
    j = T(!1),
    G = T(null),
    de;
  if (k[1] !== J || k[2] !== isNodeExpanded) de = H => {
    if (isNodeExpanded) {
      return isNodeExpanded(H);
    }
    return J.has(H);
  }, k[1] = J, k[2] = isNodeExpanded, k[3] = de;else de = k[3];
  let le = de,
    W;
  if (k[4] !== le || k[5] !== nodes) {
    W = [];
    function Ze(node, depth, parentId) {
      let hasChildren = !!node.children && node.children.length > 0;
      let isExpanded = le(node.id);
      if (W.push({
        node: node,
        depth: depth,
        isExpanded: isExpanded,
        hasChildren: hasChildren,
        parentId: parentId
      }), hasChildren && isExpanded && node.children) {
        for (const ut of node.children) Ze(ut, depth + 1, node.id);
      }
    }
    for (const ft of nodes) Ze(ft, 0);
    k[4] = le, k[5] = nodes, k[6] = W;
  } else W = k[6];
  let U = W,
    Dt = co,
    q = uo,
    Ee = getParentPrefix ?? Dt,
    ee = getChildPrefix ?? q,
    pt;
  if (k[7] !== ee || k[8] !== Ee) pt = Ie => {
    let Oe = "";
    if (Ie.hasChildren) Oe = Ee(Ie.isExpanded);else if (Ie.depth > 0) Oe = ee(Ie.depth);
    return Oe + Ie.node.label;
  }, k[7] = ee, k[8] = Ee, k[9] = pt;else pt = k[9];
  let Be = pt,
    Je;
  if (k[10] !== Be || k[11] !== U) Je = U.map(item => ({
    label: Be(item),
    description: item.node.description,
    dimDescription: item.node.dimDescription ?? !0,
    value: item.node.id
  })), k[10] = Be, k[11] = U, k[12] = Je;else Je = k[12];
  let options = Je,
    mt;
  if (k[13] !== U) {
    let E = new Map();
    mt = (U.forEach(item => E.set(item.node.id, item.node)), E);
    k[13] = U, k[14] = mt;
  } else mt = k[14];
  let A = mt,
    et;
  if (k[15] !== U) et = Ne => U.find(item => item.node.id === Ne), k[15] = U, k[16] = et;else et = k[16];
  let ue = et,
    ht;
  if (k[17] !== ue || k[18] !== onCollapse || k[19] !== onExpand) ht = (Le, $e) => {
    let fe = ue(Le);
    if (!fe || !fe.hasChildren) {
      return;
    }
    if ($e) {
      if (onExpand) onExpand(Le);else B(z => new Set(z).add(Le));
    } else if (onCollapse) onCollapse(Le);else B(gt => {
      let me = new Set(gt);
      return me.delete(Le), me;
    });
  }, k[17] = ue, k[18] = onCollapse, k[19] = onExpand, k[20] = ht;else ht = k[20];
  let ne = ht,
    nt;
  if (k[21] !== ue || k[22] !== h || k[23] !== isDisabled_2 || k[24] !== A || k[25] !== onFocus || k[26] !== ne) nt = he => {
    if (!h || isDisabled_2) {
      return;
    }
    let Y = ue(h);
    if (!Y) {
      return;
    }
    if (he.key === "right" && Y.hasChildren) he.preventDefault(), ne(h, !0);else if (he.key === "left") {
      if (Y.hasChildren && Y.isExpanded) he.preventDefault(), ne(h, !1);else if (Y.parentId !== void 0) {
        if (he.preventDefault(), j.current = !0, ne(Y.parentId, !1), onFocus) {
          let ge = A.get(Y.parentId);
          if (ge) onFocus(ge);
        }
      }
    }
  }, k[21] = ue, k[22] = h, k[23] = isDisabled_2, k[24] = A, k[25] = onFocus, k[26] = ne, k[27] = nt;else nt = k[27];
  let onKeyDown = nt,
    _;
  if (k[28] !== A || k[29] !== onSelect_2) _ = rt => {
    let st = A.get(rt);
    if (!st) {
      return;
    }
    onSelect_2(st);
  }, k[28] = A, k[29] = onSelect_2, k[30] = _;else _ = k[30];
  let onChange = _,
    xt;
  if (k[31] !== A || k[32] !== onFocus) xt = I => {
    if (j.current) {
      j.current = !1;
      return;
    }
    if (G.current === I) {
      return;
    }
    if (G.current = I, onFocus) {
      let bt = A.get(I);
      if (bt) onFocus(bt);
    }
  }, k[31] = A, k[32] = onFocus, k[33] = xt;else xt = k[33];
  let onFocus_2 = xt,
    children;
  if (k[34] !== h || k[35] !== onChange || k[36] !== onFocus_2 || k[37] !== hideIndexes_2 || k[38] !== isDisabled_2 || k[39] !== layout_2 || k[40] !== onCancel || k[41] !== onUpFromFirstItem || k[42] !== options || k[43] !== visibleOptionCount) children = e(Fe, {
    options: options,
    onChange: onChange,
    onFocus: onFocus_2,
    onCancel: onCancel,
    defaultFocusValue: h,
    visibleOptionCount: visibleOptionCount,
    layout: layout_2,
    isDisabled: isDisabled_2,
    hideIndexes: hideIndexes_2,
    onUpFromFirstItem: onUpFromFirstItem
  }), k[34] = h, k[35] = onChange, k[36] = onFocus_2, k[37] = hideIndexes_2, k[38] = isDisabled_2, k[39] = layout_2, k[40] = onCancel, k[41] = onUpFromFirstItem, k[42] = options, k[43] = visibleOptionCount, k[44] = children;else children = k[44];
  let yt;
  if (k[45] !== onKeyDown || k[46] !== children) yt = e(s, {
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: children
  }), k[45] = onKeyDown, k[46] = children, k[47] = yt;else yt = k[47];
  return yt;
}
function fo(a, d) {
  let l = a.replace(/\s+/g, " ").trim();
  return ot(l, d);
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
  before: before,
  match: match,
  after: after
}, u) {
  return pe.dim(before) + u(match) + pe.dim(after);
}
function So(a) {
  return a.replace(new RegExp(eon.source + '[^,\\s"]*', "g"), d => {
    let l = XLe(d);
    return l ? `PR #${l.prNumber} ${l.prRepository}` : d;
  });
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
  };
}
function Pt(a, d, l) {
  let {
      isGroupHeader = !1,
      isChild = !1,
      forkCount = 0
    } = l || {},
    b = isGroupHeader && forkCount > 0 ? po : isChild ? mo : 0,
    p = isGroupHeader && forkCount > 0 ? ` (+${forkCount} other ${forkCount === 1 ? "session" : "sessions"})` : "",
    D = a.isSidechain ? " (sidechain)" : "",
    M = a.artifactCount !== void 0 && a.artifactCount > 0 ? `  ${Md} ${a.artifactCount}` : "",
    C = d - b - D.length - p.length - ie(M);
  return `${fo(p9e(a), C)}${D}${p}${M}`;
}
function _t(a, d) {
  let {
      isChild: isChild_2 = !1,
      showProjectPath = !1
    } = d || {},
    f = isChild_2 ? "    " : "",
    h = GBt(a),
    b = showProjectPath && a.projectPath ? ` \xB7 ${a.projectPath}` : "";
  return f + h + b;
}
function o2t({
  logs: logs,
  maxHeight = 1 / 0,
  forceWidth: forceWidth,
  onCancel: onCancel_2,
  onSelect: onSelect_3,
  onLogsChanged: onLogsChanged,
  onLoadMore: onLoadMore,
  initialSearchQuery: initialSearchQuery,
  isLoading = !1,
  reloadGeneration = 0,
  showAllProjects: C = !1,
  onToggleAllProjects: onToggleAllProjects,
  currentSessionId: currentSessionId
}) {
  let {
      storageV5: storageV5_2
    } = ke(),
    qe = As(ve()),
    re = forceWidth === void 0 ? qe.columns : forceWidth,
    ae = Wr(onCancel_2),
    isTerminalFocused = Dl(),
    V = Yt(),
    k = !1,
    Re = gT(),
    J = X(() => t => Nme(t, Re.warning), [Re.warning]),
    [B, j] = g(null),
    [G, de] = g(!0),
    [H, le] = g(!1),
    [W, Q] = g(!1),
    [ce, Ye] = g(null),
    [Me, ct] = g(null),
    [ut, Ze] = g([]),
    [ft, U] = g(!1),
    Dt = G_(),
    [q] = g(() => Dt.originalCwd),
    [value, onChange_2] = g(""),
    [cursorOffset_2, onChangeCursorOffset] = g(0),
    [Oe, Be] = g(new Set()),
    [Je, We] = g(null),
    [focusedIndex, mt] = g(1),
    [E, P] = g(initialSearchQuery ? "search" : "list"),
    [log_3, et] = g(null),
    {
      query: query,
      setQuery: setQuery,
      cursorOffset: cursorOffset,
      handleKeyDown: handleKeyDown,
      handlePaste: handlePaste
    } = Xm({
      isActive: E === "search",
      onExit: () => {
        P("list"), i("tengu_session_search_toggled", {
          enabled: !1
        });
      },
      onExitUp: () => {
        P("list"), i("tengu_session_search_toggled", {
          enabled: !1
        });
      },
      passthroughCtrlKeys: logs.length === 0 ? ["n", "a"] : ["n"],
      initialQuery: initialSearchQuery || ""
    }),
    $e = So(query),
    fe = f9($e),
    [z, gt] = g("");
  R(() => {
    if (!fe) {
      gt("");
      return;
    }
    return V.setTimeout(() => gt(fe), 300);
  }, [fe, V]);
  let [me, ne] = g(null),
    nt = !1;
  R(() => {
    Xl().then(o => j(o));
    let t = Date.now();
    Zft(q).then(async o => (o.length, o)).then(o => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: o.length,
        success: !0
      }), Q(o.length > 1), Ze(o), Ye(o[0] ?? null);
      let m = o.filter(item => q === item || q.startsWith(item + gn));
      m.sort((itemA, itemB) => itemB.length - itemA.length), ct(m[0] ?? null), U(!0);
    }).catch(() => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: 0,
        success: !1
      }), U(!0);
    });
  }, [q]);
  let he = X(() => new Map(logs.map(item => [item, Eo(item)])), [logs]),
    Y = X(() => null, [logs, he, !1]),
    ge = X(() => {
      let t = logs.filter(item => {
        let m = Wp(item);
        if (currentSessionId && m === currentSessionId) return !0;
        if (item.customTitle ?? item.aiTitle) return !0;
        if (mZt(item.messages)) return !0;
        if (item.firstPrompt || item.customTitle || item.aiTitle) return !0;
        return !1;
      });
      if (!G && B) t = t.filter(item => item.gitBranch === B);
      if (W && !H && !C) {
        let o = Me ?? q;
        t = t.filter(item => {
          if (item.isAlias) return !0;
          let projectPath = item.projectPath;
          if (projectPath === void 0) return !1;
          let L = null;
          for (let y of ut) if (projectPath === y || projectPath.startsWith(y + gn)) {
            if (L === null || y.length > L.length) L = y;
          }
          if (L === null) return projectPath === o;
          return L === o;
        });
      }
      return t;
    }, [logs, currentSessionId, G, B, W, H, C, q, Me, ut]),
    je = X(() => {
      if (!$e) return ge;
      let t = $e.toLowerCase();
      return ge.filter(item => {
        let m = p9e(item).toLowerCase(),
          c = (item.gitBranch || "").toLowerCase(),
          L = (item.tag || "").toLowerCase(),
          y = item.prNumber ? `pr #${item.prNumber} ${item.prRepository || ""}`.toLowerCase() : "";
        return m.includes(t) || c.includes(t) || L.includes(t) || y.includes(t);
      });
    }, [ge, $e]);
  R(() => {
    ne(null);
    return;
  }, [z, fe, Y, !1, V]);
  let {
      filteredLogs: filteredLogs,
      snippets: snippets
    } = X(() => {
      let snippets_2 = new Map(),
        filteredLogs_2 = je;
      if (me && z && me.query === z) {
        for (let y of me.results) if (y.searchableText) {
          let be = Co(y.searchableText, z, bo);
          if (be) snippets_2.set(y.log, be);
        }
        let m = new Set(filteredLogs_2.map(item => item.messages[0]?.uuid)),
          c = new Set(ge),
          L = me.results.map(item => item.log).filter(item => !m.has(item.messages[0]?.uuid) && c.has(item));
        filteredLogs_2 = [...filteredLogs_2, ...L];
      }
      return {
        filteredLogs: filteredLogs_2,
        snippets: snippets_2
      };
    }, [je, me, z, ge]),
    st = re - 2 * VC,
    xe = Math.max(30, st - 4),
    nodes_2 = X(() => {
      let t = Io(filteredLogs);
      return Array.from(t.entries()).map(([o, m]) => {
        let log_2 = m[0],
          indexInFiltered = filteredLogs.indexOf(log_2),
          y = snippets.get(log_2),
          be = y ? yn(y, J) : null;
        if (m.length === 1) {
          let oe = _t(log_2, {
            showProjectPath: C
          });
          return {
            id: `log:${o}:0`,
            value: {
              log: log_2,
              indexInFiltered: indexInFiltered
            },
            label: Pt(log_2, xe),
            description: be ? `${oe}
  ${be}` : oe,
            dimDescription: !0
          };
        }
        let forkCount_2 = m.length - 1,
          children_2 = m.slice(1).map((oe, index) => {
            let indexInFiltered_2 = filteredLogs.indexOf(oe),
              Bt = snippets.get(oe),
              Wt = Bt ? yn(Bt, J) : null,
              $t = _t(oe, {
                isChild: !0,
                showProjectPath: C
              });
            return {
              id: `log:${o}:${index + 1}`,
              value: {
                log: oe,
                indexInFiltered: indexInFiltered_2
              },
              label: Pt(oe, xe, {
                isChild: !0
              }),
              description: Wt ? `${$t}
      ${Wt}` : $t,
              dimDescription: !0
            };
          }),
          Ot = _t(log_2, {
            showProjectPath: C
          });
        return {
          id: `group:${o}`,
          value: {
            log: log_2,
            indexInFiltered: indexInFiltered
          },
          label: Pt(log_2, xe, {
            isGroupHeader: !0,
            forkCount: forkCount_2
          }),
          description: be ? `${Ot}
  ${be}` : Ot,
          dimDescription: !0,
          children: children_2
        };
      });
    }, [filteredLogs, xe, C, snippets, J]),
    I = Je?.value.log ?? null,
    bt = () => {
      if (!I) return "";
      let t = Wp(I);
      if (!t) return "";
      let o = filteredLogs.filter(item => Wp(item) === t);
      if (!(o.length > 1)) return "";
      let c = Oe.has(t);
      if (o.indexOf(I) > 0 || c) return e(F, {
        chord: "left",
        action: "collapse"
      });
      return e(F, {
        chord: "right",
        action: "expand"
      });
    },
    onSubmit = async () => {
      let t = I ? Wp(I) : void 0;
      if (!I || !t) {
        P("list"), onChange_2("");
        return;
      }
      if (value.trim()) {
        if (await sB(t, value.trim(), I.fullPath, "user", storageV5_2), onLogsChanged) onLogsChanged();
      }
      P("list"), onChange_2("");
    },
    He = () => {
      P("list"), setQuery(""), i("tengu_session_search_toggled", {
        enabled: !1
      });
    },
    onUpFromFirstItem_2 = () => {
      P("search"), i("tengu_session_search_toggled", {
        enabled: !0
      });
    };
  R(() => {
    if (reloadGeneration === 0) return;
    ne(null);
  }, [reloadGeneration]);
  let onFocus_3 = t => {
    We(t);
    let o = filteredLogs.findIndex(item => Wp(item) === Wp(t.value.log));
    if (o >= 0) mt(o + 1);
  };
  ze("confirm:no", () => {
    P("list"), onChange_2("");
  }, {
    context: "Settings",
    isActive: E === "rename"
  });
  function onKeyDown_2(t) {
    if (E === "preview") return;
    if (E === "rename") ;else if (E === "search") {
      if (handleKeyDown(t), t.ctrl && t.key === "n") t.preventDefault(), He();else if (t.ctrl && t.key === "a" && onToggleAllProjects && logs.length === 0) t.preventDefault(), onToggleAllProjects(), i("tengu_session_all_projects_toggled", {
        enabled: C
      });
    } else {
      if (filteredLogs.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), P("search");
        return;
      }
      let o = !t.ctrl && !t.meta,
        m = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && onToggleAllProjects) t.preventDefault(), onToggleAllProjects(), i("tengu_session_all_projects_toggled", {
        enabled: C
      });else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let c = !G;
        de(c), i("tengu_session_branch_filter_toggled", {
          enabled: !c
        });
      } else if (t.ctrl && t.key === "w" && W) {
        t.preventDefault();
        let c = !H;
        le(c), i("tengu_session_worktree_filter_toggled", {
          enabled: !c
        });
      } else if (m === "/" && o) t.preventDefault(), P("search"), i("tengu_session_search_toggled", {
        enabled: !0
      });else if (t.ctrl && t.key === "r" && I) t.preventDefault(), P("rename"), onChange_2(""), i("tengu_session_rename_started", {});else if ((t.key === " " && o || t.ctrl && t.key === "v") && I) t.preventDefault(), et(I), P("preview"), i("tengu_session_preview_opened", {
        messageCount: I.messageCount
      });else if (!t.defaultPrevented && o && t.key.length === 1 && t.key !== " ") t.preventDefault(), P("search"), setQuery(t.key), i("tengu_session_search_toggled", {
        enabled: !0
      });
    }
  }
  function onPaste(t) {
    if (E === "search") {
      handlePaste(t);
      return;
    }
    let o = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (E === "preview" || E === "rename" || !I || !o) return;
    t.preventDefault(), P("search"), setQuery(o), i("tengu_session_search_toggled", {
      enabled: !0
    });
  }
  let children_3 = [],
    Ft = !!onToggleAllProjects && !C && ft,
    Rt = ce ?? q;
  if (Ft) children_3.push(hn(Rt));
  if (!G && B) children_3.push(B);
  if (W && !H && !C) {
    let t = Me ?? q;
    if (!(Ft && Rt === t)) children_3.push(hn(t));
  }
  let Tn = !!onToggleAllProjects && !C && !ft,
    Mt = (children_3.length > 0 || Tn) && E !== "search",
    En = 8 + (Mt ? 1 : 0),
    In = 2,
    visibleOptionCount_2 = Math.max(1, Math.floor((maxHeight - En - In) / 3)),
    vn = logs.length,
    at = T({
      focusedIndex: -1,
      visible: -1,
      empty: 0
    });
  if (R(() => {
    if (!onLoadMore) return;
    let current = at.current;
    if (current.focusedIndex !== focusedIndex || current.visible !== filteredLogs.length) at.current = {
      focusedIndex: focusedIndex,
      visible: filteredLogs.length,
      empty: 0
    };
    let o = visibleOptionCount_2 * 2;
    if (focusedIndex + o >= filteredLogs.length && at.current.empty < yo) at.current.empty++, onLoadMore(visibleOptionCount_2 * 3);
  }, [focusedIndex, visibleOptionCount_2, filteredLogs.length, vn, onLoadMore]), logs.length === 0 && !onToggleAllProjects) return null;
  if (E === "preview" && log_3) return e(Ct, {
    log: log_3,
    onExit: () => {
      P("list"), et(null);
    },
    onSelect: onSelect_3
  });
  return e(s, {
    flexDirection: "column",
    maxHeight: maxHeight - 1,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    children: r(Go, {
      color: "suggestion",
      children: [e(s, {
        flexShrink: 0,
        children: r(n, {
          bold: !0,
          color: "suggestion",
          children: ["Resume session", E === "list" && filteredLogs.length > visibleOptionCount_2 && r(n, {
            dimColor: !0,
            children: [" ", "(", focusedIndex, " of ", filteredLogs.length, ")"]
          }), isLoading && e(n, {
            dimColor: !0,
            children: " \xB7 Refreshing\u2026"
          })]
        })
      }), e(Vh, {
        query: query,
        isFocused: E === "search",
        isTerminalFocused: isTerminalFocused,
        cursorOffset: cursorOffset
      }), Mt && (children_3.length > 0 ? e(s, {
        flexShrink: 0,
        paddingLeft: 2,
        children: e(n, {
          dimColor: !0,
          children: e(ye, {
            children: children_3
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
      }), (E === "search" || E === "list") && Boolean(query.trim()) && filteredLogs.length === 0 && !nt && !isLoading && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: r(Cr, {
          children: ['No sessions match "', query, '".']
        })
      }), logs.length === 0 && E === "list" && !isLoading && !query.trim() && e(s, {
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
            value: value,
            onChange: onChange_2,
            onSubmit: onSubmit,
            placeholder: p9e(I, "Enter new session name"),
            columns: st - 2,
            cursorOffset: cursorOffset_2,
            onChangeCursorOffset: onChangeCursorOffset,
            showCursor: !0,
            focus: !0
          })
        })]
      }) : e(Lt, {
        nodes: nodes_2,
        onSelect: t => {
          onSelect_3(t.value.log);
        },
        onFocus: onFocus_3,
        onCancel: onCancel_2,
        focusNodeId: Je?.id,
        visibleOptionCount: visibleOptionCount_2,
        layout: "expanded",
        isDisabled: E === "search",
        hideIndexes: !1,
        isNodeExpanded: t => {
          if (E === "search" || !G) return !0;
          let o = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          return o ? Oe.has(o) : !1;
        },
        onExpand: t => {
          let o = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (o) Be(m => new Set(m).add(o)), i("tengu_session_group_expanded", {});
        },
        onCollapse: t => {
          let o = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (o) Be(m => {
            let c = new Set(m);
            return c.delete(o), c;
          });
        },
        onUpFromFirstItem: onUpFromFirstItem_2
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
            }), logs.length === 0 && onToggleAllProjects && e(F, {
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
            children: [onToggleAllProjects && e(F, {
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
  });
}
function To(a) {
  if (a.type !== "user" && a.type !== "assistant") return "";
  let d = "message" in a ? a.message?.content : void 0;
  if (!d) return "";
  if (typeof d === "string") return d;
  if (Array.isArray(d)) return d.map(item => {
    if (typeof item === "string") return item;
    if ("text" in item && typeof item.text === "string") return item.text;
    return "";
  }).filter(Boolean).join(" ");
  return "";
}
function Eo(a) {
  let l = (a.messages.length <= ho ? a.messages : [...a.messages.slice(0, xn), ...a.messages.slice(-xn)]).map(To).filter(Boolean).join(" "),
    f = `${[a.customTitle, a.aiTitle, a.summary, a.firstPrompt, a.gitBranch, a.tag, a.prNumber ? `PR #${a.prNumber}` : void 0, a.prRepository].filter(Boolean).join(" ")} ${l}`.trim();
  return f.length > bn ? f.slice(0, bn) : f;
}
function Io(a) {
  let d = new Map();
  for (let l of a) {
    let u = Wp(l);
    if (u) {
      let f = d.get(u);
      if (f) f.push(l);else d.set(u, [l]);
    }
  }
  return d.forEach(item => item.sort((itemA, itemB) => new Date(itemB.modified).getTime() - new Date(itemA.modified).getTime())), d;
}
import { lstat as vo } from "fs/promises";
import { posix as wo, sep as No, win32 as Lo } from "path";
function nSn() {
  return O() === "windows" ? ";" : "&&";
}
async function s2t(a, d, l) {
  let u = we();
  if (!d || !a.projectPath || a.projectPath === u) return null;
  if (l.some(item => a.projectPath === item || a.projectPath.startsWith(item + No))) return null;
  if (!Dn(a.projectPath) && !qg(a.projectPath) && !(await Po(a.projectPath))) return null;
  let h = Wp(a),
    b = RK(h) ? ` ${h}` : "";
  return `cd ${Yr([a.projectPath])} ${nSn()} claude --resume${b}`;
}
async function Po(a) {
  let d = O() === "windows",
    {
      parse: parse,
      sep: sep
    } = d ? Lo : wo,
    f = d ? parse(a).root.replaceAll("/", sep) : parse(a).root,
    h = a.slice(parse(a).root.length).split(d ? /[\\/]+/ : sep).filter(Boolean),
    b = f;
  for (let p of h) {
    b = b === "" || b.endsWith(sep) ? b + p : b + sep + p;
    try {
      if ((await vo(b)).isSymbolicLink()) return !0;
    } catch (error) {
      let M = v(error);
      return M !== "ENOENT" && M !== "ENOTDIR";
    }
  }
  return !0;
}
export { o2t, nSn, s2t };