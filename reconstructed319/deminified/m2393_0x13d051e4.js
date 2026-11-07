// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { or, jb } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { lK } from "B:/~BUN/root/chunk-q78ga0zw.js";
import { Ee } from "B:/~BUN/root/chunk-game8aqv.js";
import { one } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Fe, ow } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { DAe, mp } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Zte } from "B:/~BUN/root/chunk-0w2htvr6.js";
import { As } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Rn, s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { Wu } from "B:/~BUN/root/chunk-emd6eb45.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { Qu } from "B:/~BUN/root/chunk-1g25msn4.js";
import { zdn } from "B:/~BUN/root/chunk-t4qpmjt5.js";
import { ct, x_, I2n } from "B:/~BUN/root/chunk-bkfncj77.js";
import { VWe } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { Ws } from "B:/~BUN/root/chunk-x2k0mb6b.js";
import { Re } from "B:/~BUN/root/chunk-qr2xxkqa.js";
import { hyr, Zut } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { rw, cv } from "B:/~BUN/root/chunk-s3r3s87f.js";
import { XR } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { eke } from "B:/~BUN/root/chunk-54ym9nhn.js";
import { uje, Tde, fje, Apr, k9, ug, hye, gye } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { vS } from "B:/~BUN/root/chunk-zk8rd694.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { Jwe, Qwe } from "B:/~BUN/root/chunk-jqf6v8bz.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { bs } from "B:/~BUN/root/chunk-s4zq7e5r.js";
import { So } from "B:/~BUN/root/chunk-r9p4g17h.js";
import { fa } from "B:/~BUN/root/chunk-t99rgr48.js";
import { fv, Si } from "B:/~BUN/root/chunk-w2rkhp43.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { ue, IZ, O, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { no } from "B:/~BUN/root/chunk-qszgzq5m.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { basename as gn, sep as xn } from "path";
j();
j();
function St(o) {
  let f = S(36),
    {
      log: log,
      onExit: onExit,
      onSelect: onSelect
    } = o,
    [u, m] = y(null),
    {
      storageV5: storageV5
    } = Fe(),
    N,
    v;
  if (f[0] !== log || f[1] !== storageV5) N = () => {
    if (m(null), hye(log)) gye(log, {
      storageV5: storageV5
    }).then(m);
  }, v = [log, storageV5], f[0] = log, f[1] = storageV5, f[2] = N, f[3] = v;else N = f[2], v = f[3];
  O(N, v);
  let E = hye(log) && u === null,
    g = u ?? log,
    q;
  if (f[4] !== g.messages) q = uje(Tde(fje(g.messages)), {
    site: "preview"
  }), f[4] = g.messages, f[5] = q;else q = f[5];
  let messages = q,
    xe;
  if (f[6] !== g) xe = ug(g) || "", f[6] = g, f[7] = xe;else xe = f[7];
  let conversationId = xe,
    z;
  if (f[8] === w) z = vS(), f[8] = z;else z = f[8];
  let tools = z,
    _;
  if (f[9] === w) _ = {
    context: "Confirmation"
  }, f[9] = _;else _ = f[9];
  pt("confirm:no", onExit, _);
  let P;
  if (f[10] !== u || f[11] !== log || f[12] !== onSelect) P = () => {
    onSelect(u ?? log);
  }, f[10] = u, f[11] = log, f[12] = onSelect, f[13] = P;else P = f[13];
  let H = P,
    Qe;
  if (f[14] === w) Qe = {
    context: "Confirmation"
  }, f[14] = Qe;else Qe = f[14];
  if (pt("confirm:yes", H, Qe), E) {
    let re;
    if (f[15] === w) re = e(So, {
      message: "Loading session\u2026"
    }), f[15] = re;else re = f[15];
    let U;
    if (f[16] === w) U = r(s, {
      flexDirection: "column",
      padding: 1,
      children: [re, e(n, {
        dimColor: !0,
        children: e(Ce, {
          children: e(gt, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel"
          })
        })
      })]
    }), f[16] = U;else U = f[16];
    return U;
  }
  let re;
  if (f[17] === w) re = e(Jwe, {
    latchAnnouncementSlot: !1
  }), f[17] = re;else re = f[17];
  let source;
  if (f[18] !== conversationId || f[19] !== messages) source = {
    kind: "static",
    messages: messages,
    conversationId: conversationId
  }, f[18] = conversationId, f[19] = messages, f[20] = source;else source = f[20];
  let commands;
  if (f[21] === w) commands = [], f[21] = commands;else commands = f[21];
  let ye;
  if (f[22] !== source) ye = e(Qwe, {
    source: source,
    tools: tools,
    commands: commands,
    screen: "transcript",
    history: "all"
  }), f[22] = source, f[23] = ye;else ye = f[23];
  let X;
  if (f[24] !== g.modified) X = x_(g.modified), f[24] = g.modified, f[25] = X;else X = f[25];
  const J = g.gitBranch ? ` \xB7 ${g.gitBranch}` : "";
  let F;
  if (f[26] !== g.messageCount || f[27] !== X || f[28] !== J) F = r(n, {
    children: [X, " \xB7", " ", g.messageCount, " messages", J]
  }), f[26] = g.messageCount, f[27] = X, f[28] = J, f[29] = F;else F = f[29];
  let Q;
  if (f[30] === w) Q = e(n, {
    dimColor: !0,
    children: r(Ce, {
      children: [e(Y, {
        chord: "enter",
        action: "resume"
      }), e(gt, {
        action: "confirm:no",
        context: "Confirmation",
        fallback: "Esc",
        description: "cancel"
      })]
    })
  }), f[30] = Q;else Q = f[30];
  let Te;
  if (f[31] !== F) Te = r(s, {
    flexShrink: 0,
    flexDirection: "column",
    borderTopDimColor: !0,
    borderBottom: !1,
    borderLeft: !1,
    borderRight: !1,
    borderStyle: "single",
    paddingLeft: 2,
    children: [F, Q]
  }), f[31] = F, f[32] = Te;else Te = f[32];
  let K;
  if (f[33] !== ye || f[34] !== Te) K = r(s, {
    flexDirection: "column",
    children: [re, ye, Te]
  }), f[33] = ye, f[34] = Te, f[35] = K;else K = f[35];
  return K;
}
j();
function fo(ve) {
  let Be = "";
  if (ve.hasChildren) Be = ve.isExpanded ? "\u25BC " : "\u25B6 ";else if (ve.depth > 0) Be = "  \u25B8 ";
  return Be + ve.node.label;
}
function It(o) {
  let _ = S(45),
    {
      nodes: nodes,
      onSelect: onSelect_2,
      onCancel: onCancel,
      onFocus: onFocus,
      focusNodeId: m,
      visibleOptionCount: visibleOptionCount,
      layout: layout,
      isDisabled: isDisabled,
      hidePromptWhileDisabled: hidePromptWhileDisabled,
      hideIndexes: hideIndexes,
      isNodeExpanded: isNodeExpanded,
      onExpand: onExpand,
      onCollapse: onCollapse,
      onUpFromFirstItem: onUpFromFirstItem
    } = o,
    layout_2 = layout === void 0 ? "expanded" : layout,
    isDisabled_2 = isDisabled === void 0 ? !1 : isDisabled,
    hideIndexes_2 = hideIndexes === void 0 ? !1 : hideIndexes,
    P;
  if (_[0] === w) P = new Set(), _[0] = P;else P = _[0];
  let [H, Qe] = y(P),
    re = A(!1),
    U = A(null),
    se;
  if (_[1] !== H || _[2] !== isNodeExpanded) se = ye => {
    if (isNodeExpanded) {
      return isNodeExpanded(ye);
    }
    return H.has(ye);
  }, _[1] = H, _[2] = isNodeExpanded, _[3] = se;else se = _[3];
  let X = se,
    J;
  if (_[4] !== X || _[5] !== nodes) {
    J = [];
    function Ke(node, depth, parentId) {
      let hasChildren = !!node.children && node.children.length > 0;
      let isExpanded = X(node.id);
      if (J.push({
        node: node,
        depth: depth,
        isExpanded: isExpanded,
        hasChildren: hasChildren,
        parentId: parentId
      }), hasChildren && isExpanded && node.children) {
        for (const Le of node.children) Ke(Le, depth + 1, node.id);
      }
    }
    for (const we of nodes) Ke(we, 0);
    _[4] = X, _[5] = nodes, _[6] = J;
  } else J = _[6];
  let V = J,
    _t = fo,
    at;
  if (_[7] !== V) at = V.map(item => ({
    label: _t(item),
    description: item.node.description,
    dimDescription: item.node.dimDescription ?? !0,
    value: item.node.id
  })), _[7] = V, _[8] = at;else at = _[8];
  let options = at,
    Ge;
  if (_[9] !== V) {
    let dt = new Map();
    Ge = (V.forEach(item => dt.set(item.node.id, item.node)), dt);
    _[9] = V, _[10] = Ge;
  } else Ge = _[10];
  let B = Ge,
    lt;
  if (_[11] !== V) lt = ee => V.find(item => item.node.id === ee), _[11] = V, _[12] = lt;else lt = _[12];
  let W = lt,
    ut;
  if (_[13] !== W || _[14] !== onCollapse || _[15] !== onExpand) ut = (De, ft) => {
    let Xe = W(De);
    if (!Xe || !Xe.hasChildren) {
      return;
    }
    if (ft) {
      if (onExpand) onExpand(De);else Qe(mt => new Set(mt).add(De));
    } else if (onCollapse) onCollapse(De);else Qe(Rt => {
      let pe = new Set(Rt);
      return pe.delete(De), pe;
    });
  }, _[13] = W, _[14] = onCollapse, _[15] = onExpand, _[16] = ut;else ut = _[16];
  let Ie = ut,
    T;
  if (_[17] !== W || _[18] !== m || _[19] !== isDisabled_2 || _[20] !== B || _[21] !== onFocus || _[22] !== Ie) T = L => {
    if (!m || isDisabled_2) {
      return;
    }
    let te = W(m);
    if (!te) {
      return;
    }
    if (L.key === "right" && te.hasChildren) L.preventDefault(), Ie(m, !0);else if (L.key === "left") {
      if (te.hasChildren && te.isExpanded) L.preventDefault(), Ie(m, !1);else if (te.parentId !== void 0) {
        if (L.preventDefault(), re.current = !0, Ie(te.parentId, !1), onFocus) {
          let Ye = B.get(te.parentId);
          if (Ye) onFocus(Ye);
        }
      }
    }
  }, _[17] = W, _[18] = m, _[19] = isDisabled_2, _[20] = B, _[21] = onFocus, _[22] = Ie, _[23] = T;else T = _[23];
  let onKeyDown = T,
    ke;
  if (_[24] !== B || _[25] !== onSelect_2) ke = Pt => {
    let ht = B.get(Pt);
    if (!ht) {
      return;
    }
    onSelect_2(ht);
  }, _[24] = B, _[25] = onSelect_2, _[26] = ke;else ke = _[26];
  let onChange = ke,
    Ne;
  if (_[27] !== B || _[28] !== onFocus) Ne = ae => {
    if (re.current) {
      re.current = !1;
      return;
    }
    if (U.current === ae) {
      return;
    }
    if (U.current = ae, onFocus) {
      let G = B.get(ae);
      if (G) onFocus(G);
    }
  }, _[27] = B, _[28] = onFocus, _[29] = Ne;else Ne = _[29];
  let onFocus_2 = Ne,
    children;
  if (_[30] !== m || _[31] !== onChange || _[32] !== onFocus_2 || _[33] !== hideIndexes_2 || _[34] !== hidePromptWhileDisabled || _[35] !== isDisabled_2 || _[36] !== layout_2 || _[37] !== onCancel || _[38] !== onUpFromFirstItem || _[39] !== options || _[40] !== visibleOptionCount) children = e(Ze, {
    options: options,
    onChange: onChange,
    onFocus: onFocus_2,
    onCancel: onCancel,
    defaultFocusValue: m,
    visibleOptionCount: visibleOptionCount,
    layout: layout_2,
    isDisabled: isDisabled_2,
    hidePromptWhileDisabled: hidePromptWhileDisabled,
    hideIndexes: hideIndexes_2,
    onUpFromFirstItem: onUpFromFirstItem
  }), _[30] = m, _[31] = onChange, _[32] = onFocus_2, _[33] = hideIndexes_2, _[34] = hidePromptWhileDisabled, _[35] = isDisabled_2, _[36] = layout_2, _[37] = onCancel, _[38] = onUpFromFirstItem, _[39] = options, _[40] = visibleOptionCount, _[41] = children;else children = _[41];
  let Me;
  if (_[42] !== onKeyDown || _[43] !== children) Me = e(s, {
    tabIndex: 0,
    autoFocus: !0,
    onKeyDown: onKeyDown,
    children: children
  }), _[42] = onKeyDown, _[43] = children, _[44] = Me;else Me = _[44];
  return Me;
}
function mo(o, a) {
  let c = o.replace(/\s+/g, " ").trim();
  return ct(c, a);
}
var ho = 2,
  go = 4,
  xo = 2000,
  bn = 1000,
  yn = 50000,
  bo = 0.3;
var yo = {
    format: {
      modCase: "title",
      charCase: "upper"
    }
  },
  Co = 60000,
  To = 50,
  Eo = 5;
function Sn({
  before: before,
  match: match,
  after: after
}, d) {
  return Se.dim(before) + d(match) + Se.dim(after);
}
function Lo(o) {
  return o.replace(new RegExp(hyr.source + '[^,\\s"]*', "g"), a => {
    let c = Zut(a);
    return c ? `PR #${c.prNumber} ${c.prRepository}` : a;
  });
}
function wo(o, a, c) {
  let d = o.toLowerCase().indexOf(a.toLowerCase());
  if (d === -1) return null;
  let u = d + a.length,
    m = Math.max(0, d - c),
    C = Math.min(o.length, u + c),
    f = o.slice(m, d),
    N = o.slice(d, u),
    v = o.slice(u, C);
  return {
    before: (m > 0 ? "\u2026" : "") + f.replace(/\s+/g, " ").trimStart(),
    match: N.trim(),
    after: v.replace(/\s+/g, " ").trimEnd() + (C < o.length ? "\u2026" : "")
  };
}
function Nt(o, a, c) {
  let {
      isGroupHeader = !1,
      isChild = !1,
      forkCount = 0
    } = c || {},
    C = isGroupHeader && forkCount > 0 ? ho : isChild ? go : 0,
    f = isGroupHeader && forkCount > 0 ? ` (+${forkCount} other ${forkCount === 1 ? "session" : "sessions"})` : "",
    N = o.isSidechain ? " (sidechain)" : "",
    v = o.artifactCount !== void 0 && o.artifactCount > 0 ? `  ${mp} ${o.artifactCount}` : "",
    E = a - C - N.length - f.length - ce(v);
  return `${mo(one(o), E)}${N}${f}${v}`;
}
function vt(o, a) {
  let {
      isChild: isChild_2 = !1,
      showProjectPath = !1
    } = a || {},
    u = isChild_2 ? "    " : "",
    m = I2n(o),
    C = showProjectPath && o.projectPath ? ` \xB7 ${o.projectPath}` : "";
  return u + m + C;
}
function b6n({
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
  footerNote: R
}) {
  let {
      storageV5: storageV5_2
    } = Fe(),
    de = As(Re()),
    z = forceWidth === void 0 ? de.columns : forceWidth,
    be = Ws(onCancel_2),
    _ = !1,
    P = fa(!1),
    H = yo,
    Qe = "show all projects",
    re = 2,
    isTerminalFocused = Wu(),
    se = Rn(),
    ye = !1,
    X = ow(),
    J = Z(() => t => VWe(t, X.warning), [X.warning]),
    F = Z(() => R === void 0 ? 0 : ce(R.join(" \xB7 ")), [R]),
    [Q, Te] = y(null),
    [K, it] = y(!0),
    [Le, Ke] = y(!1),
    [we, V] = y(!1),
    [_t, at] = y(null),
    [le, Ve] = y(null),
    [Ge, dt] = y([]),
    [qe, B] = y(!1),
    lt = XR(),
    [ee] = y(() => lt.originalCwd),
    [value, onChange_2] = y(""),
    [cursorOffset_2, onChangeCursorOffset] = y(0),
    [ft, Xe] = y(new Set()),
    [mt, Rt] = y(null),
    [focusedIndex, Ie] = y(1),
    [T, L] = y(initialSearchQuery ? "search" : "list"),
    [log_3, Ye] = y(null),
    {
      query: query,
      setQuery: setQuery,
      cursorOffset: cursorOffset,
      handleKeyDown: handleKeyDown,
      handlePaste: handlePaste
    } = rw({
      isActive: T === "search",
      onExit: () => {
        L("list"), l("tengu_session_search_toggled", {
          enabled: !1
        });
      },
      onExitUp: () => {
        L("list"), l("tengu_session_search_toggled", {
          enabled: !1
        });
      },
      passthroughCtrlKeys: logs.length === 0 ? ["n", "a"] : ["n"],
      initialQuery: initialSearchQuery || ""
    }),
    Ne = Lo(query),
    ae = IZ(Ne),
    [G, Oe] = y("");
  O(() => {
    if (!ae) {
      Oe("");
      return;
    }
    return se.setTimeout(() => Oe(ae), 300);
  }, [ae, se]);
  let [oe, Me] = y(null),
    ve = !1;
  O(() => {
    Qu().then(i => Te(i));
    let t = Date.now();
    zdn(ee).then(async i => (i.length, i)).then(i => {
      l("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: i.length,
        success: !0
      }), V(i.length > 1), dt(i), at(i[0] ?? null);
      let h = i.filter(item => ee === item || ee.startsWith(item + xn));
      h.sort((itemA, itemB) => itemB.length - itemA.length), Ve(h[0] ?? null), B(!0);
    }).catch(() => {
      l("tengu_worktree_detection", {
        duration_ms: Date.now() - t,
        worktree_count: 0,
        success: !1
      }), B(!0);
    });
  }, [ee]);
  let Be = Z(() => new Map(logs.map(item => [item, vo(item)])), [logs]),
    kt = Z(() => null, [logs, Be, !1]),
    We = Z(() => {
      let t = logs.filter(item => {
        let h = ug(item);
        if (currentSessionId && h === currentSessionId) return !0;
        if (item.customTitle ?? item.aiTitle) return !0;
        if (Apr(item.messages)) return !0;
        if (item.firstPrompt || item.customTitle || item.aiTitle) return !0;
        return !1;
      });
      if (!K && Q) t = t.filter(item => item.gitBranch === Q);
      if (we && !Le && !E) {
        let i = le ?? ee;
        t = t.filter(item => {
          if (item.isAlias) return !0;
          let projectPath = item.projectPath;
          if (projectPath === void 0) return !1;
          let D = null;
          for (let b of Ge) if (projectPath === b || projectPath.startsWith(b + xn)) {
            if (D === null || b.length > D.length) D = b;
          }
          if (D === null) return projectPath === i;
          return D === i;
        });
      }
      return t;
    }, [logs, currentSessionId, K, Q, we, Le, E, ee, le, Ge]),
    Ft = Z(() => {
      if (!Ne) return We;
      let t = Ne.toLowerCase();
      return We.filter(item => {
        let h = one(item).toLowerCase(),
          p = (item.gitBranch || "").toLowerCase(),
          D = (item.tag || "").toLowerCase(),
          b = item.prNumber ? `pr #${item.prNumber} ${item.prRepository || ""}`.toLowerCase() : "";
        return h.includes(t) || p.includes(t) || D.includes(t) || b.includes(t);
      });
    }, [We, Ne]);
  O(() => {
    Me(null);
    return;
  }, [G, ae, kt, !1, se]);
  let {
      filteredLogs: filteredLogs,
      snippets: snippets
    } = Z(() => {
      let snippets_2 = new Map(),
        filteredLogs_2 = Ft;
      if (oe && G && oe.query === G) {
        for (let b of oe.results) if (b.searchableText) {
          let nt = wo(b.searchableText, G, To);
          if (nt) snippets_2.set(b.log, nt);
        }
        let h = new Set(filteredLogs_2.map(item => item.messages[0]?.uuid)),
          p = new Set(We),
          D = oe.results.map(item => item.log).filter(item => !h.has(item.messages[0]?.uuid) && p.has(item));
        filteredLogs_2 = [...filteredLogs_2, ...D];
      }
      return {
        filteredLogs: filteredLogs_2,
        snippets: snippets_2
      };
    }, [Ft, oe, G, We]),
    bt = z - 2 * fv,
    et = Math.max(30, bt - 4),
    nodes_2 = Z(() => {
      let t = _o(filteredLogs);
      return Array.from(t.entries()).map(([i, h]) => {
        let log_2 = h[0],
          D = snippets.get(log_2),
          b = D ? Sn(D, J) : null;
        if (h.length === 1) {
          let fe = vt(log_2, {
            showProjectPath: E
          });
          return {
            id: `log:${i}:0`,
            value: {
              log: log_2
            },
            label: Nt(log_2, et),
            description: b ? `${fe}
  ${b}` : fe,
            dimDescription: !0
          };
        }
        let forkCount_2 = h.length - 1,
          children_2 = h.slice(1).map((fe, index) => {
            let Ht = snippets.get(fe),
              Ut = Ht ? Sn(Ht, J) : null,
              jt = vt(fe, {
                isChild: !0,
                showProjectPath: E
              });
            return {
              id: `log:${i}:${index + 1}`,
              value: {
                log: fe
              },
              label: Nt(fe, et, {
                isChild: !0
              }),
              description: Ut ? `${jt}
      ${Ut}` : jt,
              dimDescription: !0
            };
          }),
          At = vt(log_2, {
            showProjectPath: E
          });
        return {
          id: `group:${i}`,
          value: {
            log: log_2
          },
          label: Nt(log_2, et, {
            isGroupHeader: !0,
            forkCount: forkCount_2
          }),
          description: b ? `${At}
  ${b}` : At,
          dimDescription: !0,
          children: children_2
        };
      });
    }, [filteredLogs, et, E, snippets, J]),
    I = mt?.value.log ?? null,
    Ln = () => {
      if (!I) return "";
      let t = ug(I);
      if (!t) return "";
      let i = filteredLogs.filter(item => ug(item) === t);
      if (!(i.length > 1)) return "";
      let p = ft.has(t);
      if (i.indexOf(I) > 0 || p) return e(Y, {
        chord: "left",
        action: "collapse",
        ...P
      });
      return e(Y, {
        chord: "right",
        action: "expand",
        ...P
      });
    },
    onSubmit = async () => {
      let t = I ? ug(I) : void 0;
      if (!I || !t) {
        L("list"), onChange_2("");
        return;
      }
      if (value.trim()) {
        if (await k9(t, value.trim(), I.fullPath, "user", storageV5_2), onLogsChanged) onLogsChanged();
      }
      L("list"), onChange_2("");
    },
    Dn = () => {
      L("list"), setQuery(""), l("tengu_session_search_toggled", {
        enabled: !1
      });
    },
    onUpFromFirstItem_2 = () => {
      L("search"), l("tengu_session_search_toggled", {
        enabled: !0
      });
    };
  O(() => {
    if (reloadGeneration === 0) return;
    Me(null);
  }, [reloadGeneration]);
  let onFocus_3 = t => {
    Rt(t);
    let i = filteredLogs.findIndex(item => ug(item) === ug(t.value.log));
    if (i >= 0) Ie(i + 1);
  };
  pt("confirm:no", () => {
    L("list"), onChange_2("");
  }, {
    context: "Settings",
    isActive: T === "rename"
  });
  function onKeyDown_2(t) {
    if (T === "preview") return;
    if (T === "rename") ;else if (T === "search") {
      if (handleKeyDown(t), t.ctrl && t.key === "n") t.preventDefault(), Dn();else if (t.ctrl && t.key === "a" && onToggleAllProjects && logs.length === 0) t.preventDefault(), onToggleAllProjects(), l("tengu_session_all_projects_toggled", {
        enabled: E
      });
    } else {
      if (filteredLogs.length === 0 && (t.key === "up" || t.key === "down" || t.key === "return")) {
        t.preventDefault(), L("search");
        return;
      }
      let i = !t.ctrl && !t.meta,
        h = t.key.toLowerCase();
      if (t.ctrl && t.key === "a" && onToggleAllProjects) t.preventDefault(), onToggleAllProjects(), l("tengu_session_all_projects_toggled", {
        enabled: E
      });else if (t.ctrl && t.key === "b") {
        t.preventDefault();
        let p = !K;
        it(p), l("tengu_session_branch_filter_toggled", {
          enabled: !p
        });
      } else if (t.ctrl && t.key === "w" && we) {
        t.preventDefault();
        let p = !Le;
        Ke(p), l("tengu_session_worktree_filter_toggled", {
          enabled: !p
        });
      } else if (h === "/" && i) t.preventDefault(), L("search"), l("tengu_session_search_toggled", {
        enabled: !0
      });else if (t.ctrl && t.key === "r" && I) t.preventDefault(), L("rename"), onChange_2(""), l("tengu_session_rename_started", {});else if ((t.key === " " && i || t.ctrl && t.key === "v") && I) t.preventDefault(), Ye(I), L("preview"), l("tengu_session_preview_opened", {
        messageCount: I.messageCount
      });else if (!t.defaultPrevented && i && t.key.length === 1 && t.key !== " ") t.preventDefault(), L("search"), setQuery(t.key), l("tengu_session_search_toggled", {
        enabled: !0
      });
    }
  }
  function onPaste(t) {
    if (T === "search") {
      handlePaste(t);
      return;
    }
    let i = (t.text.split(/\r\n|\r|\n/, 2)[0] ?? "").trim();
    if (T === "preview" || T === "rename" || !I || !i) return;
    t.preventDefault(), L("search"), setQuery(i), l("tengu_session_search_toggled", {
      enabled: !0
    });
  }
  let children_3 = [],
    Ot = !!onToggleAllProjects && !E && qe,
    Mt = _t ?? ee;
  if (Ot) children_3.push(gn(Mt));
  if (!K && Q) children_3.push(Q);
  if (we && !Le && !E) {
    let t = le ?? ee;
    if (!(Ot && Mt === t)) children_3.push(gn(t));
  }
  let Pn = !!onToggleAllProjects && !E && !qe,
    Bt = (children_3.length > 0 || Pn) && T !== "search",
    Wt = 3,
    kn = 5 + Wt + (Bt ? 1 : 0),
    $t = R !== void 0 && T !== "rename" && F <= bt - 2 && maxHeight - (5 + Wt + 1) - 3 >= 3,
    Fn = 2 + ($t ? 1 : 0),
    visibleOptionCount_2 = Math.max(1, Math.floor((maxHeight - kn - Fn) / 3)),
    On = logs.length,
    tt = A({
      focusedIndex: -1,
      visible: -1,
      empty: 0
    });
  if (O(() => {
    if (!onLoadMore) return;
    let current = tt.current;
    if (current.focusedIndex !== focusedIndex || current.visible !== filteredLogs.length) tt.current = {
      focusedIndex: focusedIndex,
      visible: filteredLogs.length,
      empty: 0
    };
    let i = visibleOptionCount_2 * 2;
    if (focusedIndex + i >= filteredLogs.length && tt.current.empty < Eo) tt.current.empty++, onLoadMore(visibleOptionCount_2 * 3);
  }, [focusedIndex, visibleOptionCount_2, filteredLogs.length, On, onLoadMore]), logs.length === 0 && !onToggleAllProjects) return null;
  if (T === "preview" && log_3) return e(St, {
    log: log_3,
    onExit: () => {
      L("list"), Ye(null);
    },
    onSelect: onSelect_3
  });
  return e(s, {
    flexDirection: "column",
    maxHeight: maxHeight - 1,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    children: r(Tn, {
      isRedesign: !1,
      titleDetail: r(ne, {
        children: [T === "list" && filteredLogs.length > visibleOptionCount_2 && r(n, {
          dimColor: !0,
          children: [" ", "(", focusedIndex, " of ", filteredLogs.length, ")"]
        }), isLoading && e(n, {
          dimColor: !0,
          children: " \xB7 Refreshing\u2026"
        })]
      }),
      children: [e(cv, {
        query: query,
        isFocused: T === "search",
        isTerminalFocused: isTerminalFocused,
        cursorOffset: cursorOffset,
        isSearchLineUnpadded: !0
      }), Bt && (children_3.length > 0 ? e(s, {
        flexShrink: 0,
        paddingLeft: 2,
        children: e(n, {
          dimColor: !0,
          children: e(Ce, {
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
      }), (T === "search" || T === "list") && Boolean(query.trim()) && filteredLogs.length === 0 && !ve && !isLoading && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: r(bs, {
          children: ['No sessions match "', query, '".']
        })
      }), logs.length === 0 && T === "list" && !isLoading && !query.trim() && e(s, {
        paddingLeft: 1,
        marginBottom: 1,
        flexShrink: 0,
        children: e(bs, {
          hint: E ? void 0 : e(Y, {
            chord: "ctrl+a",
            action: "show all projects",
            ...H
          }),
          children: E ? "No conversations found." : "No conversations found in this project."
        })
      }), T === "rename" && I ? r(s, {
        paddingLeft: 2,
        flexDirection: "column",
        children: [e(n, {
          bold: !0,
          children: "Rename session:"
        }), e(s, {
          paddingTop: 1,
          children: e(Ir, {
            value: value,
            onChange: onChange_2,
            onSubmit: onSubmit,
            placeholder: one(I, "Enter new session name"),
            columns: bt - 2,
            cursorOffset: cursorOffset_2,
            onChangeCursorOffset: onChangeCursorOffset,
            showCursor: !0,
            focus: !0
          })
        })]
      }) : e(It, {
        nodes: nodes_2,
        onSelect: t => {
          onSelect_3(t.value.log);
        },
        onFocus: onFocus_3,
        onCancel: onCancel_2,
        focusNodeId: mt?.id,
        visibleOptionCount: visibleOptionCount_2,
        layout: "expanded",
        isDisabled: T === "search",
        hidePromptWhileDisabled: !0,
        hideIndexes: !1,
        isNodeExpanded: t => {
          if (T === "search" || !K) return !0;
          let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          return i ? ft.has(i) : !1;
        },
        onExpand: t => {
          let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (i) Xe(h => new Set(h).add(i)), l("tengu_session_group_expanded", {});
        },
        onCollapse: t => {
          let i = typeof t === "string" && t.startsWith("group:") ? t.substring(6) : null;
          if (i) Xe(h => {
            let p = new Set(h);
            return p.delete(i), p;
          });
        },
        onUpFromFirstItem: onUpFromFirstItem_2
      }), $t && e(s, {
        paddingLeft: 2,
        flexShrink: 0,
        children: e(n, {
          dimColor: !0,
          wrap: "truncate-end",
          children: e(Ce, {
            children: R
          })
        })
      }), e(s, {
        paddingLeft: 2,
        children: be.pending ? r(n, {
          dimColor: !0,
          italic: !1,
          children: ["Press ", be.keyName, " again to exit"]
        }) : T === "rename" ? e(n, {
          dimColor: !0,
          italic: !1,
          children: r(Ce, {
            children: [e(Y, {
              chord: "enter",
              action: "save",
              ...P
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel",
              ...P
            })]
          })
        }) : T === "search" ? e(n, {
          dimColor: !0,
          italic: !1,
          children: r(Ce, {
            children: [e(n, {
              children: "Type to Search"
            }), logs.length === 0 && onToggleAllProjects && e(Y, {
              chord: "ctrl+a",
              action: E ? "only show current repo" : "show all projects",
              ...H
            }), e(Y, {
              chord: "enter",
              action: "select",
              ...P
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "clear",
              ...P
            })]
          })
        }) : e(n, {
          dimColor: !0,
          italic: !1,
          children: r(Ce, {
            children: [onToggleAllProjects && e(Y, {
              chord: "ctrl+a",
              action: E ? "only show current repo" : "show all projects",
              ...H
            }), Q && e(Y, {
              chord: "ctrl+b",
              action: K ? "only show current branch" : "show all branches",
              ...H
            }), we && e(Y, {
              chord: "ctrl+w",
              action: Le ? "only show current worktree" : "show all worktrees",
              ...H
            }), I && e(Y, {
              chord: "space",
              action: "preview",
              ...P
            }), I && e(Y, {
              chord: "ctrl+r",
              action: "rename",
              ...H
            }), e(n, {
              children: "Type to search"
            }), e(gt, {
              action: "confirm:no",
              context: "Confirmation",
              fallback: "Esc",
              description: "cancel",
              format: P.format
            }), Ln()]
          })
        })
      })]
    })
  });
}
function Tn(o) {
  let d = S(5),
    {
      titleDetail: titleDetail,
      children: children_4
    } = o,
    u;
  if (d[0] !== titleDetail) u = e(s, {
    flexShrink: 0,
    children: r(n, {
      bold: !0,
      color: "suggestion",
      children: ["Resume session", titleDetail]
    })
  }), d[0] = titleDetail, d[1] = u;else u = d[1];
  let m;
  if (d[2] !== children_4 || d[3] !== u) m = r(Si, {
    color: "suggestion",
    children: [u, children_4]
  }), d[2] = children_4, d[3] = u, d[4] = m;else m = d[4];
  return m;
}
function No(o) {
  if (o.type !== "user" && o.type !== "assistant") return "";
  let a = "message" in o ? o.message?.content : void 0;
  if (!a) return "";
  let c = o.type === "user" && o.isCompactSummary ? o.modelOnlyText : void 0;
  if (typeof a === "string") return eke(Zte(a, o.type === "user" ? o.pluginPrompt : void 0), c);
  if (Array.isArray(a)) return a.map(item => {
    if (typeof item === "string") return item;
    if ("text" in item && typeof item.text === "string") return eke(item.text, c);
    return "";
  }).filter(Boolean).join(" ");
  return "";
}
function vo(o) {
  let c = (o.messages.length <= xo ? o.messages : [...o.messages.slice(0, bn), ...o.messages.slice(-bn)]).map(No).filter(Boolean).join(" "),
    u = `${[o.customTitle, o.aiTitle, o.summary, o.firstPromptShown ?? o.firstPrompt, o.gitBranch, o.tag, o.prNumber ? `PR #${o.prNumber}` : void 0, o.prRepository].filter(Boolean).join(" ")} ${c}`.trim();
  return u.length > yn ? u.slice(0, yn) : u;
}
function _o(o) {
  let a = new Map();
  for (let c of o) {
    let d = ug(c);
    if (d) {
      let u = a.get(d);
      if (u) u.push(c);else a.set(d, [c]);
    }
  }
  return a.forEach(item => item.sort((itemA, itemB) => new Date(itemB.modified).getTime() - new Date(itemA.modified).getTime())), a;
}
import { lstat as Ro } from "fs/promises";
import { posix as Po, sep as ko, win32 as Fo } from "path";
function D1r() {
  return x() === "windows" ? ";" : "&&";
}
async function S6n(o, a, c) {
  let d = Ee();
  if (!a || !o.projectPath || o.projectPath === d) return null;
  if (c.some(item => o.projectPath === item || o.projectPath.startsWith(item + ko))) return null;
  if (!or(o.projectPath) && !jb(o.projectPath) && !(await Oo(o.projectPath))) return null;
  let m = ug(o),
    C = lK(m) ? ` ${m}` : "";
  return `cd ${no([o.projectPath])} ${D1r()} claude --resume${C}`;
}
async function Oo(o) {
  let a = x() === "windows",
    {
      parse: parse,
      sep: sep
    } = a ? Fo : Po,
    u = a ? parse(o).root.replaceAll("/", sep) : parse(o).root,
    m = o.slice(parse(o).root.length).split(a ? /[\\/]+/ : sep).filter(Boolean),
    C = u;
  for (let f of m) {
    C = C === "" || C.endsWith(sep) ? C + f : C + sep + f;
    try {
      if ((await Ro(C)).isSymbolicLink()) return !0;
    } catch (error) {
      let v = k(error);
      return v !== "ENOENT" && v !== "ENOTDIR";
    }
  }
  return !0;
}
export { b6n, D1r, S6n };