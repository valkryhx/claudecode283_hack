// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { jn, Ry } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { Z4 } from "B:/~BUN/root/chunk-9ka04m0y.js";
import { ke } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { j5 } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Oe, ew } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { rhe, fu } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { us } from "B:/~BUN/root/chunk-b900np4s.js";
import { s, n, dn } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Qc } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { Y1t } from "B:/~BUN/root/chunk-4bgg5sdy.js";
import { mt, mv, emn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { kPe } from "B:/~BUN/root/chunk-d69870x4.js";
import { oc } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { qo } from "B:/~BUN/root/chunk-327wfkv3.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { ljn, z5e } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { s_, fS } from "B:/~BUN/root/chunk-1kwdjsmp.js";
import { mE } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { oxe, gZ, sLn, rHn, Oq, Kf, zse, Dxe } from "B:/~BUN/root/chunk-9grc6xh0.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { X_ } from "B:/~BUN/root/chunk-3yw4brjw.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { Qde, Zde } from "B:/~BUN/root/chunk-ttbnzcq8.js";
import { ece } from "B:/~BUN/root/chunk-bjd1w379.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Eo } from "B:/~BUN/root/chunk-3hxvnq94.js";
import { Wr } from "B:/~BUN/root/chunk-1rb7fvzn.js";
import { vk, ds } from "B:/~BUN/root/chunk-xa5s55y7.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, gee, P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { ho } from "B:/~BUN/root/chunk-fqc7tjgr.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
import { basename as bn, sep as yn } from "path";
B();
B();
function bt(o) {
  let f = w(36),
    {
      log: log,
      onExit: onExit,
      onSelect: onSelect
    } = o,
    [p, h] = y(null),
    {
      storageV5: storageV5
    } = Oe(),
    D,
    _;
  if (f[0] !== log || f[1] !== storageV5) D = () => {
    if (h(null), zse(log)) Dxe(log, {
      storageV5: storageV5
    }).then(h);
  }, _ = [log, storageV5], f[0] = log, f[1] = storageV5, f[2] = D, f[3] = _;else D = f[2], _ = f[3];
  P(D, _);
  let E = zse(log) && p === null,
    g = p ?? log,
    V;
  if (f[4] !== g.messages) V = oxe(gZ(sLn(g.messages)), {
    site: "preview"
  }), f[4] = g.messages, f[5] = V;else V = f[5];
  let messages = V,
    qe;
  if (f[6] !== g) qe = Kf(g) || "", f[6] = g, f[7] = qe;else qe = f[7];
  let conversationId = qe,
    fe;
  if (f[8] === S) fe = X_(), f[8] = fe;else fe = f[8];
  let tools = fe,
    z;
  if (f[9] === S) z = {
    context: "Confirmation"
  }, f[9] = z;else z = f[9];
  rt("confirm:no", onExit, z);
  let X;
  if (f[10] !== p || f[11] !== log || f[12] !== onSelect) X = () => {
    onSelect(p ?? log);
  }, f[10] = p, f[11] = log, f[12] = onSelect, f[13] = X;else X = f[13];
  let R = X,
    ge;
  if (f[14] === S) ge = {
    context: "Confirmation"
  }, f[14] = ge;else ge = f[14];
  if (rt("confirm:yes", R, ge), E) {
    let j;
    if (f[15] === S) j = e(Wr, {
      message: "Loading session\u2026"
    }), f[15] = j;else j = f[15];
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
    }), f[16] = Q;else Q = f[16];
    return Q;
  }
  let j;
  if (f[17] === S) j = e(Qde, {
    latchAnnouncementSlot: !1
  }), f[17] = j;else j = f[17];
  let source;
  if (f[18] !== conversationId || f[19] !== messages) source = {
    kind: "static",
    messages: messages,
    conversationId: conversationId
  }, f[18] = conversationId, f[19] = messages, f[20] = source;else source = f[20];
  let commands;
  if (f[21] === S) commands = [], f[21] = commands;else commands = f[21];
  let oe;
  if (f[22] !== source) oe = e(Zde, {
    source: source,
    tools: tools,
    commands: commands,
    screen: "transcript",
    history: "all"
  }), f[22] = source, f[23] = oe;else oe = f[23];
  let O;
  if (f[24] !== g.modified) O = mv(g.modified), f[24] = g.modified, f[25] = O;else O = f[25];
  const xe = g.gitBranch ? ` \xB7 ${g.gitBranch}` : "";
  let W;
  if (f[26] !== g.messageCount || f[27] !== O || f[28] !== xe) W = r(n, {
    children: [O, " \xB7", " ", g.messageCount, " messages", xe]
  }), f[26] = g.messageCount, f[27] = O, f[28] = xe, f[29] = W;else W = f[29];
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
  }), f[30] = be;else be = f[30];
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
  }), f[31] = W, f[32] = L;else L = f[32];
  let Re;
  if (f[33] !== oe || f[34] !== L) Re = r(s, {
    flexDirection: "column",
    children: [j, oe, L]
  }), f[33] = oe, f[34] = L, f[35] = Re;else Re = f[35];
  return Re;
}
B();
function mo(kt) {
  return kt ? "\u25BC " : "\u25B6 ";
}
function go(En) {
  return "  \u25B8 ";
}
function wt(o) {
  let R = w(49),
    {
      nodes: nodes,
      onSelect: onSelect_2,
      onCancel: onCancel,
      onFocus: onFocus,
      focusNodeId: h,
      visibleOptionCount: visibleOptionCount,
      layout: layout,
      isDisabled: isDisabled,
      hidePromptWhileDisabled: hidePromptWhileDisabled,
      hideIndexes: hideIndexes,
      isNodeExpanded: isNodeExpanded,
      onExpand: onExpand,
      onCollapse: onCollapse,
      getParentPrefix: getParentPrefix,
      getChildPrefix: getChildPrefix,
      onUpFromFirstItem: onUpFromFirstItem
    } = o,
    layout_2 = layout === void 0 ? "expanded" : layout,
    isDisabled_2 = isDisabled === void 0 ? !1 : isDisabled,
    hideIndexes_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    ge;
  if (R[0] === S) ge = new Set(), R[0] = ge;else ge = R[0];
  let [j, Q] = y(ge),
    U = A(!1),
    oe = A(null),
    O;
  if (R[1] !== j || R[2] !== isNodeExpanded) O = xe => {
    if (isNodeExpanded) {
      return isNodeExpanded(xe);
    }
    return j.has(xe);
  }, R[1] = j, R[2] = isNodeExpanded, R[3] = O;else O = R[3];
  let W = O,
    be;
  if (R[4] !== W || R[5] !== nodes) {
    be = [];
    function Be(node, depth, parentId) {
      let hasChildren = !!node.children && node.children.length > 0;
      let isExpanded = W(node.id);
      if (be.push({
        node: node,
        depth: depth,
        isExpanded: isExpanded,
        hasChildren: hasChildren,
        parentId: parentId
      }), hasChildren && isExpanded && node.children) {
        for (const Lt of node.children) Be(Lt, depth + 1, node.id);
      }
    }
    for (const Dt of nodes) Be(Dt, 0);
    R[4] = W, R[5] = nodes, R[6] = be;
  } else be = R[6];
  let H = be,
    ct = mo,
    _t = go,
    G = getParentPrefix ?? ct,
    ye = getChildPrefix ?? _t,
    re;
  if (R[7] !== ye || R[8] !== G) re = Ce => {
    let ze = "";
    if (Ce.hasChildren) ze = G(Ce.isExpanded);else if (Ce.depth > 0) ze = ye(Ce.depth);
    return ze + Ce.node.label;
  }, R[7] = ye, R[8] = G, R[9] = re;else re = R[9];
  let We = re,
    Ye;
  if (R[10] !== We || R[11] !== H) Ye = H.map(item => ({
    label: We(item),
    description: item.node.description,
    dimDescription: item.node.dimDescription ?? !0,
    value: item.node.id
  })), R[10] = We, R[11] = H, R[12] = Ye;else Ye = R[12];
  let options = Ye,
    se;
  if (R[13] !== H) {
    let ut = new Map();
    se = (H.forEach(item => ut.set(item.node.id, item.node)), ut);
    R[13] = H, R[14] = se;
  } else se = R[14];
  let T = se,
    Je;
  if (R[15] !== H) Je = pt => H.find(item => item.node.id === pt), R[15] = H, R[16] = Je;else Je = R[16];
  let Y = Je,
    ft;
  if (R[17] !== Y || R[18] !== onCollapse || R[19] !== onExpand) ft = (we, Ft) => {
    let ve = Y(we);
    if (!ve || !ve.hasChildren) {
      return;
    }
    if (Ft) {
      if (onExpand) onExpand(we);else Q(Pe => new Set(Pe).add(we));
    } else if (onCollapse) onCollapse(we);else Q(J => {
      let et = new Set(J);
      return et.delete(we), et;
    });
  }, R[17] = Y, R[18] = onCollapse, R[19] = onExpand, R[20] = ft;else ft = R[20];
  let K = ft,
    $e;
  if (R[21] !== Y || R[22] !== h || R[23] !== isDisabled_2 || R[24] !== T || R[25] !== onFocus || R[26] !== K) $e = de => {
    if (!h || isDisabled_2) {
      return;
    }
    let ee = Y(h);
    if (!ee) {
      return;
    }
    if (de.key === "right" && ee.hasChildren) de.preventDefault(), K(h, !0);else if (de.key === "left") {
      if (ee.hasChildren && ee.isExpanded) de.preventDefault(), K(h, !1);else if (ee.parentId !== void 0) {
        if (de.preventDefault(), U.current = !0, K(ee.parentId, !1), onFocus) {
          let tt = T.get(ee.parentId);
          if (tt) onFocus(tt);
        }
      }
    }
  }, R[21] = Y, R[22] = h, R[23] = isDisabled_2, R[24] = T, R[25] = onFocus, R[26] = K, R[27] = $e;else $e = R[27];
  let onKeyDown = $e,
    nt;
  if (R[28] !== T || R[29] !== onSelect_2) nt = F => {
    let je = T.get(F);
    if (!je) {
      return;
    }
    onSelect_2(je);
  }, R[28] = T, R[29] = onSelect_2, R[30] = nt;else nt = R[30];
  let onChange = nt,
    Le;
  if (R[31] !== T || R[32] !== onFocus) Le = ot => {
    if (U.current) {
      U.current = !1;
      return;
    }
    if (oe.current === ot) {
      return;
    }
    if (oe.current = ot, onFocus) {
      let v = T.get(ot);
      if (v) onFocus(v);
    }
  }, R[31] = T, R[32] = onFocus, R[33] = Le;else Le = R[33];
  let onFocus_2 = Le,
    children;
  if (R[34] !== h || R[35] !== onChange || R[36] !== onFocus_2 || R[37] !== hideIndexes_2 || R[38] !== hidePromptWhileDisabled || R[39] !== isDisabled_2 || R[40] !== layout_2 || R[41] !== onCancel || R[42] !== onUpFromFirstItem || R[43] !== options || R[44] !== visibleOptionCount) children = e(Xe, {
    options: options,
    onChange: onChange,
    onFocus: onFocus_2,
    onCancel: onCancel,
    defaultFocusValue: h,
    visibleOptionCount: visibleOptionCount,
    layout: layout_2,
    isDisabled: isDisabled_2,
    hidePromptWhileDisabled: hidePromptWhileDisabled,
    hideIndexes: hideIndexes_2,
    onUpFromFirstItem: onUpFromFirstItem
  }), R[34] = h, R[35] = onChange, R[36] = onFocus_2, R[37] = hideIndexes_2, R[38] = hidePromptWhileDisabled, R[39] = isDisabled_2, R[40] = layout_2, R[41] = onCancel, R[42] = onUpFromFirstItem, R[43] = options, R[44] = visibleOptionCount, R[45] = children;else children = R[45];
  let ht;
  if (R[46] !== onKeyDown || R[47] !== children) ht = e(s, {
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: children
  }), R[46] = onKeyDown, R[47] = children, R[48] = ht;else ht = R[48];
  return ht;
}
function xo(o, d) {
  let c = o.replace(/\s+/g, " ").trim();
  return mt(c, d);
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
  before: before,
  match: match,
  after: after
}, l) {
  return he.dim(before) + l(match) + he.dim(after);
}
function vo(o) {
  return o.replace(new RegExp(ljn.source + '[^,\\s"]*', "g"), d => {
    let c = z5e(d);
    return c ? `PR #${c.prNumber} ${c.prRepository}` : d;
  });
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
  };
}
function vt(o, d, c) {
  let {
      isGroupHeader = !1,
      isChild = !1,
      forkCount = 0
    } = c || {},
    x = isGroupHeader && forkCount > 0 ? bo : isChild ? yo : 0,
    f = isGroupHeader && forkCount > 0 ? ` (+${forkCount} other ${forkCount === 1 ? "session" : "sessions"})` : "",
    D = o.isSidechain ? " (sidechain)" : "",
    _ = o.artifactCount !== void 0 && o.artifactCount > 0 ? `  ${fu} ${o.artifactCount}` : "",
    E = d - x - D.length - f.length - ie(_);
  return `${xo(j5(o), E)}${D}${f}${_}`;
}
function Pt(o, d) {
  let {
      isChild: isChild_2 = !1,
      showProjectPath = !1
    } = d || {},
    p = isChild_2 ? "    " : "",
    h = emn(o),
    x = showProjectPath && o.projectPath ? ` \xB7 ${o.projectPath}` : "";
  return p + h + x;
}
function lbn({
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
  showAllProjects: E = !1,
  onToggleAllProjects: onToggleAllProjects,
  currentSessionId: currentSessionId,
  footerNote: M
}) {
  let {
      storageV5: storageV5_2
    } = Oe(),
    Fe = us(Te()),
    fe = forceWidth === void 0 ? Fe.columns : forceWidth,
    me = qo(onCancel_2),
    isTerminalFocused = oc(),
    X = dn(),
    R = !1,
    ge = ew(),
    j = Z(() => t => kPe(t, ge.warning), [ge.warning]),
    Q = Z(() => M === void 0 ? 0 : ie(M.join(" \xB7 ")), [M]),
    [U, oe] = y(null),
    [O, xe] = y(!0),
    [W, be] = y(!1),
    [L, Re] = y(!1),
    [Nt, lt] = y(null),
    [Me, Lt] = y(null),
    [Be, Dt] = y([]),
    [H, ct] = y(!1),
    _t = mE(),
    [G] = y(() => _t.originalCwd),
    [value, onChange_2] = y(""),
    [cursorOffset_2, onChangeCursorOffset] = y(0),
    [We, Ye] = y(new Set()),
    [Ee, Ze] = y(null),
    [focusedIndex, ut] = y(1),
    [C, T] = y(initialSearchQuery ? "search" : "list"),
    [log_3, pt] = y(null),
    {
      query: query,
      setQuery: setQuery,
      cursorOffset: cursorOffset,
      handleKeyDown: handleKeyDown,
      handlePaste: handlePaste
    } = s_({
      isActive: C === "search",
      onExit: () => {
        T("list"), i("tengu_session_search_toggled", {
          enabled: !1
        });
      },
      onExitUp: () => {
        T("list"), i("tengu_session_search_toggled", {
          enabled: !1
        });
      },
      passthroughCtrlKeys: logs.length === 0 ? ["n", "a"] : ["n"],
      initialQuery: initialSearchQuery || ""
    }),
    ve = vo(query),
    Pe = gee(ve),
    [J, et] = y("");
  P(() => {
    if (!Pe) {
      et("");
      return;
    }
    return X.setTimeout(() => et(Pe), 300);
  }, [Pe, X]);
  let [K, $e] = y(null),
    de = !1;
  P(() => {
    Qc().then(a => oe(a));
    let t = Date.now();
    Y1t(G).then(async a => (a.length, a)).then(a => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: a.length,
        success: !0
      }), Re(a.length > 1), Dt(a), lt(a[0] ?? null);
      let m = a.filter(item => G === item || G.startsWith(item + yn));
      m.sort((itemA, itemB) => itemB.length - itemA.length), Lt(m[0] ?? null), ct(!0);
    }).catch(() => {
      i("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: 0,
        success: !1
      }), ct(!0);
    });
  }, [G]);
  let ee = Z(() => new Map(logs.map(item => [item, Lo(item)])), [logs]),
    tt = Z(() => null, [logs, ee, !1]),
    te = Z(() => {
      let t = logs.filter(item => {
        let m = Kf(item);
        if (currentSessionId && m === currentSessionId) return !0;
        if (item.customTitle ?? item.aiTitle) return !0;
        if (rHn(item.messages)) return !0;
        if (item.firstPrompt || item.customTitle || item.aiTitle) return !0;
        return !1;
      });
      if (!O && U) t = t.filter(item => item.gitBranch === U);
      if (L && !W && !E) {
        let a = Me ?? G;
        t = t.filter(item => {
          if (item.isAlias) return !0;
          let projectPath = item.projectPath;
          if (projectPath === void 0) return !1;
          let N = null;
          for (let b of Be) if (projectPath === b || projectPath.startsWith(b + yn)) {
            if (N === null || b.length > N.length) N = b;
          }
          if (N === null) return projectPath === a;
          return N === a;
        });
      }
      return t;
    }, [logs, currentSessionId, O, U, L, W, E, G, Me, Be]),
    nt = Z(() => {
      if (!ve) return te;
      let t = ve.toLowerCase();
      return te.filter(item => {
        let m = j5(item).toLowerCase(),
          u = (item.gitBranch || "").toLowerCase(),
          N = (item.tag || "").toLowerCase(),
          b = item.prNumber ? `pr #${item.prNumber} ${item.prRepository || ""}`.toLowerCase() : "";
        return m.includes(t) || u.includes(t) || N.includes(t) || b.includes(t);
      });
    }, [te, ve]);
  P(() => {
    $e(null);
    return;
  }, [J, Pe, tt, !1, X]);
  let {
      filteredLogs: filteredLogs,
      snippets: snippets
    } = Z(() => {
      let snippets_2 = new Map(),
        filteredLogs_2 = nt;
      if (K && J && K.query === J) {
        for (let b of K.results) if (b.searchableText) {
          let le = Po(b.searchableText, J, Io);
          if (le) snippets_2.set(b.log, le);
        }
        let m = new Set(filteredLogs_2.map(item => item.messages[0]?.uuid)),
          u = new Set(te),
          N = K.results.map(item => item.log).filter(item => !m.has(item.messages[0]?.uuid) && u.has(item));
        filteredLogs_2 = [...filteredLogs_2, ...N];
      }
      return {
        filteredLogs: filteredLogs_2,
        snippets: snippets_2
      };
    }, [nt, K, J, te]),
    Ne = fe - 2 * vk,
    Le = Math.max(30, Ne - 4),
    nodes_2 = Z(() => {
      let t = Do(filteredLogs);
      return Array.from(t.entries()).map(([a, m]) => {
        let log_2 = m[0],
          indexInFiltered = filteredLogs.indexOf(log_2),
          b = snippets.get(log_2),
          le = b ? Tn(b, j) : null;
        if (m.length === 1) {
          let ne = Pt(log_2, {
            showProjectPath: E
          });
          return {
            id: `log:${a}:0`,
            value: {
              log: log_2,
              indexInFiltered: indexInFiltered
            },
            label: vt(log_2, Le),
            description: le ? `${ne}
  ${le}` : ne,
            dimDescription: !0
          };
        }
        let forkCount_2 = m.length - 1,
          children_2 = m.slice(1).map((ne, index) => {
            let indexInFiltered_2 = filteredLogs.indexOf(ne),
              jt = snippets.get(ne),
              Ut = jt ? Tn(jt, j) : null,
              Ht = Pt(ne, {
                isChild: !0,
                showProjectPath: E
              });
            return {
              id: `log:${a}:${index + 1}`,
              value: {
                log: ne,
                indexInFiltered: indexInFiltered_2
              },
              label: vt(ne, Le, {
                isChild: !0
              }),
              description: Ut ? `${Ht}
      ${Ut}` : Ht,
              dimDescription: !0
            };
          }),
          $t = Pt(log_2, {
            showProjectPath: E
          });
        return {
          id: `group:${a}`,
          value: {
            log: log_2,
            indexInFiltered: indexInFiltered
          },
          label: vt(log_2, Le, {
            isGroupHeader: !0,
            forkCount: forkCount_2
          }),
          description: le ? `${$t}
  ${le}` : $t,
          dimDescription: !0,
          children: children_2
        };
      });
    }, [filteredLogs, Le, E, snippets, j]),
    v = Ee?.value.log ?? null,
    st = () => {
      if (!v) return "";
      let t = Kf(v);
      if (!t) return "";
      let a = filteredLogs.filter(item => Kf(item) === t);
      if (!(a.length > 1)) return "";
      let u = We.has(t);
      if (a.indexOf(v) > 0 || u) return e(q, {
        chord: "left",
        action: "collapse"
      });
      return e(q, {
        chord: "right",
        action: "expand"
      });
    },
    onSubmit = async () => {
      let t = v ? Kf(v) : void 0;
      if (!v || !t) {
        T("list"), onChange_2("");
        return;
      }
      if (value.trim()) {
        if (await Oq(t, value.trim(), v.fullPath, "user", storageV5_2), onLogsChanged) onLogsChanged();
      }
      T("list"), onChange_2("");
    },
    ht = () => {
      T("list"), setQuery(""), i("tengu_session_search_toggled", {
        enabled: !1
      });
    },
    onUpFromFirstItem_2 = () => {
      T("search"), i("tengu_session_search_toggled", {
        enabled: !0
      });
    };
  P(() => {
    if (reloadGeneration === 0) return;
    $e(null);
  }, [reloadGeneration]);
  let onFocus_3 = t => {
    Ze(t);
    let a = filteredLogs.findIndex(item => Kf(item) === Kf(t.value.log));
    if (a >= 0) ut(a + 1);
  };
  rt("confirm:no", () => {
    T("list"), onChange_2("");
  }, {
    context: "Settings",
    isActive: C === "rename"
  });
  function onKeyDown_2(t) {
    if (C === "preview") return;
    if (C === "rename") ;else if (C === "search") {
      if (handleKeyDown(t), t.ctrl && t.key === "n") t.preventDefault(), ht();else if (t.ctrl && t.key === "a" && onToggleAllProjects && logs.length === 0) t.preventDefault(), onToggleAllProjects(), i("tengu_session_all_projects_toggled", {
        enabled: E
      });
    } else {
      if (filteredLogs.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), T("search");
        return;
      }
      let a = !t.ctrl && !t.meta,
        m = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && onToggleAllProjects) t.preventDefault(), onToggleAllProjects(), i("tengu_session_all_projects_toggled", {
        enabled: E
      });else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let u = !O;
        xe(u), i("tengu_session_branch_filter_toggled", {
          enabled: !u
        });
      } else if (t.ctrl && t.key === "w" && L) {
        t.preventDefault();
        let u = !W;
        be(u), i("tengu_session_worktree_filter_toggled", {
          enabled: !u
        });
      } else if (m === "/" && a) t.preventDefault(), T("search"), i("tengu_session_search_toggled", {
        enabled: !0
      });else if (t.ctrl && t.key === "r" && v) t.preventDefault(), T("rename"), onChange_2(""), i("tengu_session_rename_started", {});else if ((t.key === " " && a || t.ctrl && t.key === "v") && v) t.preventDefault(), pt(v), T("preview"), i("tengu_session_preview_opened", {
        messageCount: v.messageCount
      });else if (!t.defaultPrevented && a && t.key.length === 1 && t.key !== " ") t.preventDefault(), T("search"), setQuery(t.key), i("tengu_session_search_toggled", {
        enabled: !0
      });
    }
  }
  function onPaste(t) {
    if (C === "search") {
      handlePaste(t);
      return;
    }
    let a = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (C === "preview" || C === "rename" || !v || !a) return;
    t.preventDefault(), T("search"), setQuery(a), i("tengu_session_search_toggled", {
      enabled: !0
    });
  }
  let children_3 = [],
    Rt = !!onToggleAllProjects && !E && H,
    Mt = Nt ?? G;
  if (Rt) children_3.push(bn(Mt));
  if (!O && U) children_3.push(U);
  if (L && !W && !E) {
    let t = Me ?? G;
    if (!(Rt && Mt === t)) children_3.push(bn(t));
  }
  let vn = !!onToggleAllProjects && !E && !H,
    Ot = (children_3.length > 0 || vn) && C !== "search",
    Bt = 3,
    Pn = 5 + Bt + (Ot ? 1 : 0),
    Wt = M !== void 0 && C !== "rename" && Q <= Ne - 2 && maxHeight - (5 + Bt + 1) - 3 >= 3,
    Nn = 2 + (Wt ? 1 : 0),
    visibleOptionCount_2 = Math.max(1, Math.floor((maxHeight - Pn - Nn) / 3)),
    Ln = logs.length,
    it = A({
      focusedIndex: -1,
      visible: -1,
      empty: 0
    });
  if (P(() => {
    if (!onLoadMore) return;
    let current = it.current;
    if (current.focusedIndex !== focusedIndex || current.visible !== filteredLogs.length) it.current = {
      focusedIndex: focusedIndex,
      visible: filteredLogs.length,
      empty: 0
    };
    let a = visibleOptionCount_2 * 2;
    if (focusedIndex + a >= filteredLogs.length && it.current.empty < wo) it.current.empty++, onLoadMore(visibleOptionCount_2 * 3);
  }, [focusedIndex, visibleOptionCount_2, filteredLogs.length, Ln, onLoadMore]), logs.length === 0 && !onToggleAllProjects) return null;
  if (C === "preview" && log_3) return e(bt, {
    log: log_3,
    onExit: () => {
      T("list"), pt(null);
    },
    onSelect: onSelect_3
  });
  return e(s, {
    flexDirection: "column",
    maxHeight: maxHeight - 1,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    children: r(ds, {
      color: "suggestion",
      children: [e(s, {
        flexShrink: 0,
        children: r(n, {
          bold: !0,
          color: "suggestion",
          children: ["Resume session", C === "list" && filteredLogs.length > visibleOptionCount_2 && r(n, {
            dimColor: !0,
            children: [" ", "(", focusedIndex, " of ", filteredLogs.length, ")"]
          }), isLoading && e(n, {
            dimColor: !0,
            children: " \xB7 Refreshing\u2026"
          })]
        })
      }), e(fS, {
        query: query,
        isFocused: C === "search",
        isTerminalFocused: isTerminalFocused,
        cursorOffset: cursorOffset
      }), Ot && (children_3.length > 0 ? e(s, {
        flexShrink: 0,
        paddingLeft: 2,
        children: e(n, {
          dimColor: !0,
          children: e(Se, {
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
      }), (C === "search" || C === "list") && Boolean(query.trim()) && filteredLogs.length === 0 && !de && !isLoading && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: r(Eo, {
          children: ['No sessions match "', query, '".']
        })
      }), logs.length === 0 && C === "list" && !isLoading && !query.trim() && e(s, {
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
            value: value,
            onChange: onChange_2,
            onSubmit: onSubmit,
            placeholder: j5(v, "Enter new session name"),
            columns: Ne - 2,
            cursorOffset: cursorOffset_2,
            onChangeCursorOffset: onChangeCursorOffset,
            showCursor: !0,
            focus: !0
          })
        })]
      }) : e(wt, {
        nodes: nodes_2,
        onSelect: t => {
          onSelect_3(t.value.log);
        },
        onFocus: onFocus_3,
        onCancel: onCancel_2,
        focusNodeId: Ee?.id,
        visibleOptionCount: visibleOptionCount_2,
        layout: "expanded",
        isDisabled: C === "search",
        hidePromptWhileDisabled: !0,
        hideIndexes: !1,
        isNodeExpanded: t => {
          if (C === "search" || !O) return !0;
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          return a ? We.has(a) : !1;
        },
        onExpand: t => {
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (a) Ye(m => new Set(m).add(a)), i("tengu_session_group_expanded", {});
        },
        onCollapse: t => {
          let a = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (a) Ye(m => {
            let u = new Set(m);
            return u.delete(a), u;
          });
        },
        onUpFromFirstItem: onUpFromFirstItem_2
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
            }), logs.length === 0 && onToggleAllProjects && e(q, {
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
            children: [onToggleAllProjects && e(q, {
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
  });
}
function No(o) {
  if (o.type !== "user" && o.type !== "assistant") return "";
  let d = "message" in o ? o.message?.content : void 0;
  if (!d) return "";
  let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : void 0;
  if (typeof d === "string") return ece(d, c);
  if (Array.isArray(d)) return d.map(item => {
    if (typeof item === "string") return item;
    if ("text" in item && typeof item.text === "string") return ece(item.text, c);
    return "";
  }).filter(Boolean).join(" ");
  return "";
}
function Lo(o) {
  let c = (o.messages.length <= So ? o.messages : [...o.messages.slice(0, Sn), ...o.messages.slice(-Sn)]).map(No).filter(Boolean).join(" "),
    p = `${[o.customTitle, o.aiTitle, o.summary, o.firstPrompt, o.gitBranch, o.tag, o.prNumber ? `PR #${o.prNumber}` : void 0, o.prRepository].filter(Boolean).join(" ")} ${c}`.trim();
  return p.length > Cn ? p.slice(0, Cn) : p;
}
function Do(o) {
  let d = new Map();
  for (let c of o) {
    let l = Kf(c);
    if (l) {
      let p = d.get(l);
      if (p) p.push(c);else d.set(l, [c]);
    }
  }
  return d.forEach(item => item.sort((itemA, itemB) => new Date(itemB.modified).getTime() - new Date(itemA.modified).getTime())), d;
}
import { lstat as _o } from "fs/promises";
import { posix as Fo, sep as ko, win32 as Ro } from "path";
function PZn() {
  return I() === "windows" ? ";" : "&&";
}
async function dbn(o, d, c) {
  let l = ke();
  if (!d || !o.projectPath || o.projectPath === l) return null;
  if (c.some(item => o.projectPath === item || o.projectPath.startsWith(item + ko))) return null;
  if (!jn(o.projectPath) && !Ry(o.projectPath) && !(await Mo(o.projectPath))) return null;
  let h = Kf(o),
    x = Z4(h) ? ` ${h}` : "";
  return `cd ${ho([o.projectPath])} ${PZn()} claude --resume${x}`;
}
async function Mo(o) {
  let d = I() === "windows",
    {
      parse: parse,
      sep: sep
    } = d ? Ro : Fo,
    p = d ? parse(o).root.replaceAll("/", sep) : parse(o).root,
    h = o.slice(parse(o).root.length).split(d ? /[\\/]+/ : sep).filter(Boolean),
    x = p;
  for (let f of h) {
    x = x === "" || x.endsWith(sep) ? x + f : x + sep + f;
    try {
      if ((await _o(x)).isSymbolicLink()) return !0;
    } catch (error) {
      let _ = k(error);
      return _ !== "ENOENT" && _ !== "ENOTDIR";
    }
  }
  return !0;
}
export { lbn, PZn, dbn };