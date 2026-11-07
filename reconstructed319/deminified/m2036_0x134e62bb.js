// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Oo } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { VBs } from "B:/~BUN/root/chunk-1g25msn4.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { rr, PT } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { ea, Le, fe, fl, Sy } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { djt as children_2 } from "B:/~BUN/root/chunk-5xx1vfdh.js";
import { Tu } from "B:/~BUN/root/chunk-bkfncj77.js";
import { P$, O$, Xmr, wXt, wRi, kXt, b2, ehr, x9e } from "B:/~BUN/root/chunk-2fedt3ag.js";
import { oRe } from "B:/~BUN/root/chunk-f0zgv0ya.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { XN, jC } from "B:/~BUN/root/chunk-emd6eb45.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { zWe } from "B:/~BUN/root/chunk-05q1awc0.js";
import { ei } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { n, sn } from "B:/~BUN/root/chunk-qey16aan.js";
import { Ic } from "B:/~BUN/root/chunk-c7kw6nqt.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { yce, jMt } from "B:/~BUN/root/chunk-31hh2zwx.js";
import { Jt, ve, O, Z, A, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
import { he } from "B:/~BUN/root/chunk-fet34rqr.js";
import { resolve as bt, sep as be, win32 as ke } from "path";
j();
var q = () => ({
  isSidebarOn: x9e(),
  isOwnedByPlugin: ehr()
});
function PFo() {
  let [t, r] = y(q),
    o = Ic(),
    s = G(i => i.panelFileView !== null);
  return O(() => {
    let i = () => r(p => {
      let D = q();
      return p.isSidebarOn === D.isSidebarOn && p.isOwnedByPlugin === D.isOwnedByPlugin ? p : D;
    });
    i();
    let l = ea(i),
      u = zWe(i);
    return () => {
      l(), u();
    };
  }, [o]), t.isSidebarOn && (s || !t.isOwnedByPlugin);
}
j();
var K = 400,
  Qjr = 150,
  de = 2000,
  v = {
    hunks: new Map(),
    skippedLarge: new Set()
  };
async function z(t, r, o) {
  try {
    let result = await Xmr(t, o, r);
    if (o?.aborted) return null;
    if (result === null) return c("repl_diff_read", "git_diff_failed"), null;
    let hunks = result.stats.filesCount === 0 ? v : await wRi(o, wXt(result));
    if (o?.aborted) return null;
    if (hunks === null) c("repl_diff_read", "git_hunks_failed");else g("repl_diff_read");
    return {
      result: result,
      hunks: hunks
    };
  } catch (error) {
    if (o?.aborted) return null;
    return a(error), c("repl_diff_read", "git_diff_threw"), null;
  }
}
class X {
  #e = null;
  set(baseMode, refreshKey, round, at) {
    this.#e = {
      baseMode: baseMode,
      refreshKey: refreshKey,
      round: round,
      at: at
    };
  }
  take(t, r) {
    let o = this.#e;
    if (o === null) return;
    if (r - o.at > de) {
      this.#e = null;
      return;
    }
    if (o.baseMode !== t) return;
    return this.#e = null, {
      round: o.round,
      refreshKey: o.refreshKey
    };
  }
  get isPrimed() {
    return this.#e !== null;
  }
}
var Y = new W(() => new X());
async function w3n(t, baseMode_2, o, s) {
  let i = await z(t, baseMode_2, s);
  if (s?.aborted) return;
  Y.of(t).set(baseMode_2, o, i && {
    result: i.result,
    baseMode: baseMode_2,
    hunks: i.hunks ?? v
  }, Date.now());
}
function Zjr(t = 0, r = !0, baseMode_3 = "auto") {
  let i = ve(jC)?.setTimeout ?? XN,
    l = ei(),
    [u] = y(() => r ? Y.of(l).take(baseMode_3, Date.now()) : void 0),
    [p, D] = y(u?.round ?? null),
    [k, M] = y(u === void 0),
    U = A(u !== void 0),
    N = A(u !== void 0 && u.refreshKey === t),
    [se, ae] = y(0);
  return O(() => VBs(() => ae(R => R + 1)), []), O(() => {
    if (!r) return;
    if (N.current) {
      N.current = !1;
      return;
    }
    let R = !1,
      abortController = new AbortController();
    async function I() {
      let b = await z(l, baseMode_3, abortController.signal);
      if (R) return;
      if (b !== null) {
        let h = wXt(b.result);
        D(P => ({
          result: b.result,
          baseMode: baseMode_3,
          hunks: b.hunks ?? (P !== null && wXt(P.result) === h ? P.hunks : v)
        }));
      }
      U.current = !0, M(!1);
    }
    let _ = i(I, U.current || t !== 0 ? Qjr : 0);
    return () => {
      R = !0, _(), abortController.abort();
    };
  }, [t, r, se, baseMode_3, l]), Z(() => {
    if (!p) return {
      stats: null,
      files: [],
      hunks: new Map(),
      loading: r && k,
      source: {
        kind: "working-tree"
      },
      baseMode: baseMode_3
    };
    let {
        stats: stats,
        perFileStats: perFileStats,
        source: source
      } = p.result,
      files = [];
    for (let [path, h] of perFileStats) {
      let isUntracked = h.isUntracked,
        isLargeFile = p.hunks.skippedLarge.has(path),
        le = h.added + h.removed,
        isTruncated = !isLargeFile && !h.isBinary && le > K;
      files.push({
        path: path,
        linesAdded: h.added,
        linesRemoved: h.removed,
        isBinary: h.isBinary,
        isLargeFile: isLargeFile,
        isTruncated: isTruncated,
        isUntracked: isUntracked,
        preSession: h.preSession
      });
    }
    return files.sort((itemA, itemB) => itemA.path.localeCompare(itemB.path)), {
      stats: stats,
      files: files,
      hunks: p.hunks.hunks,
      loading: !1,
      source: source,
      baseMode: p.baseMode,
      noCommits: p.result.noCommits
    };
  }, [p, k, r, baseMode_3]);
}
function T(loading) {
  return {
    stats: null,
    files: [],
    hunks: new Map(),
    loading: loading,
    source: {
      kind: "working-tree"
    },
    baseMode: "auto"
  };
}
function pe(t) {
  let r = new Set(t.skippedLarge),
    o = new Set(t.restricted),
    files_2 = t.perFileStats.map(item => {
      let isLargeFile_2 = r.has(item.path);
      return {
        path: item.path,
        linesAdded: item.added,
        linesRemoved: item.removed,
        isBinary: item.isBinary,
        isLargeFile: isLargeFile_2,
        isTruncated: !isLargeFile_2 && !item.isBinary && item.added + item.removed > K,
        isUntracked: item.isUntracked,
        isRestricted: o.has(item.path)
      };
    }).sort((itemA, itemB) => itemA.path.localeCompare(itemB.path));
  return {
    stats: t.stats,
    files: files_2,
    hunks: new Map(t.hunks.map(item => [item.path, item.hunks])),
    loading: !1,
    source: t.source,
    baseMode: "branch-point"
  };
}
function ce(t) {
  let [r, o] = y(() => ({
    data: T(t),
    notice: null
  }));
  return O(() => {
    if (!t) return;
    let s = rr();
    if (!s || !PT("controlChannel")) {
      c("remote_workspace_diff_fetch", "no_channel"), o({
        data: T(!1),
        notice: "Workspace changes aren't available over this connection \u2014 showing per-turn changes only"
      });
      return;
    }
    let i = !1;
    return s.sendControlRequest({
      subtype: "get_workspace_diff"
    }).then(l => {
      if (i) return;
      g("remote_workspace_diff_fetch"), o({
        data: l.diff ? pe(l.diff) : T(!1),
        notice: null
      });
    }).catch(l => {
      if (i) return;
      let u = d(l),
        p = u.includes("Unsupported control request subtype") ? "unsupported_subtype" : O$(l);
      if (p === "unsupported_subtype") c("remote_workspace_diff_fetch", p);else m("remote_workspace_diff_fetch", p);
      o({
        data: T(!1),
        notice: p === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only" : l instanceof P$ ? "Timed out fetching workspace changes \u2014 showing per-turn changes only" : p === "disconnected" || p === "not_connected" ? "Lost the connection to the cloud session \u2014 showing per-turn changes only" : p === "not_delivered" ? "Couldn't reach the cloud session \u2014 showing per-turn changes only" : `Couldn't fetch workspace changes: ${u}`
      });
    }), () => {
      i = !0;
    };
  }, [t]), r;
}
function EFo(t) {
  let data = Zjr(0, !t),
    o = ce(t);
  return t ? o : {
    data: data,
    notice: null
  };
}
class J {
  lastLoggedSessionId = null;
  autoOpenPending = !1;
}
var amn = new W(() => new J()),
  Y5s = new W(() => ({
    lastLoggedSessionId: null
  })),
  k3n = new W(() => he({
    cycled: !1
  }, t => {
    t.cycled = !1;
  }));
var text_2 = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository",
  text = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";
function CFo(t) {
  amn.of(t).autoOpenPending = !0;
}
function X5s(t) {
  let r = amn.of(t),
    autoOpenPending = r.autoOpenPending;
  return r.autoOpenPending = !1, autoOpenPending;
}
function Q(t) {
  amn.of(t).autoOpenPending = !1;
}
function v3n() {
  return kXt();
}
function eWr({
  enabled: enabled,
  fullscreen: fullscreen,
  columns: columns,
  isThinClient: isThinClient,
  isMainFocused: isMainFocused,
  hasGitRepo: hasGitRepo
}) {
  return enabled && fullscreen && !isThinClient && isMainFocused && columns >= yce && hasGitRepo;
}
function RFo(t) {
  let diffSidebarOpen = fe().diffSidebarOpen;
  if (diffSidebarOpen === !1) return !1;
  return t >= (diffSidebarOpen === !0 ? yce : jMt) && v3n();
}
function ee(t, r, o, s) {
  let replTab = o === "diff" ? "convo" : "diff";
  Q(t), r(u => u.replTab === replTab && u.panelFileView === null ? u : {
    ...u,
    replTab: replTab,
    panelFileView: null
  });
  let diffSidebarOpen_2 = replTab === "diff";
  if (fe().diffSidebarOpen !== diffSidebarOpen_2) Le(u => ({
    ...u,
    diffSidebarOpen: diffSidebarOpen_2
  }), s);
  return g("repl_tab_switch", {
    tab: f(replTab)
  }), replTab;
}
async function ge(t, r, o, s, i) {
  if (await w3n(t, lmn(), s), r() === "diff") return;
  ee(t, o, "convo", i);
}
var Se = "Diff panel shown",
  De = "Diff panel hidden",
  J5s = 2000;
function Q5s(t) {
  switch (t.status) {
    case "shown":
      return Se;
    case "hidden":
      return De;
    case "refused":
      return t.text;
  }
}
function E3n({
  host: host,
  getReplTab: getReplTab,
  setAppState: setAppState,
  columns: columns_2,
  trackSequence: trackSequence,
  storageV5: storageV5
}) {
  if (getReplTab() === "diff") return ee(host, setAppState, "diff", storageV5), {
    status: "hidden"
  };
  if (!x9e()) return {
    status: "refused",
    reason: "unavailable",
    text: text
  };
  if (!v3n()) return {
    status: "refused",
    reason: "no-git",
    text: text_2
  };
  if (columns_2 < yce) return {
    status: "refused",
    reason: "too-narrow",
    text: `Resize your terminal to at least ${yce} columns to show the diff panel`
  };
  return {
    status: "shown",
    settled: ge(host, getReplTab, setAppState, trackSequence, storageV5).catch(a)
  };
}
function uYe(t, r) {
  Q(t), r(o => o.replTab === "convo" && o.panelFileView === null ? o : {
    ...o,
    replTab: "convo",
    panelFileView: null
  });
}
function AFo(t, r, o) {
  if (uYe(t, r), fe().diffSidebarOpen !== !1) Le(s => ({
    ...s,
    diffSidebarOpen: !1
  }), o);
  g("repl_tab_switch", {
    tab: f("convo")
  });
}
var H = ["session", "uncommitted", "branch"];
function lmn() {
  let diffSidebarBaseMode = fl().diffSidebarBaseMode;
  return diffSidebarBaseMode === "uncommitted" || diffSidebarBaseMode === "branch" ? diffSidebarBaseMode : "session";
}
function xFo(t, r) {
  let diffSidebarBaseMode_2 = H[(H.indexOf(t) + 1) % H.length] ?? "session";
  return Sy(s => s.diffSidebarBaseMode === diffSidebarBaseMode_2 ? s : {
    ...s,
    diffSidebarBaseMode: diffSidebarBaseMode_2
  }, r), g("repl_diff_base_switch", {
    mode: f(diffSidebarBaseMode_2)
  }), diffSidebarBaseMode_2;
}
function dmn(t) {
  return oRe(we(t));
}
function we(t) {
  let r = Oo(),
    o = x() === "windows",
    s = o ? ke.sep : be,
    i = D => o ? D.replaceAll("/", s).toLowerCase() : D,
    l = i(t),
    u = i(r);
  if (l.length !== t.length || u.length !== r.length) return t;
  if (l === u) return "";
  let p = u.endsWith(s) ? u : u + s;
  return l.startsWith(p) ? t.slice(p.length) : t;
}
j();
import { homedir as ne } from "os";
import { isAbsolute as Re, sep as _e } from "path";
import { isAbsolute as ye, win32 as te } from "path";
function L(t) {
  if (x() === "windows") return te.isAbsolute(t) && te.parse(t).root.length > 1;
  return ye(t);
}
var T3n = Jt(null);
function ub(t) {
  let l = S(9),
    {
      filePath: filePath,
      children: children
    } = t,
    s = ve(T3n),
    i = children ?? filePath;
  if (E(filePath) || typeof i === "string" && E(i)) {
    let u;
    if (l[0] === w) u = e(n, {
      dimColor: !0,
      children: children_2
    }), l[0] = u;else u = l[0];
    return u;
  }
  let u;
  if (l[1] !== s || l[2] !== i) u = s !== null && typeof i === "string" ? Tu(i, s) : i, l[1] = s, l[2] = i, l[3] = u;else u = l[3];
  let children_3 = u,
    D;
  if (l[4] !== filePath) D = L(filePath) ? b2(filePath) : null, l[4] = filePath, l[5] = D;else D = l[5];
  let url = D,
    M;
  if (l[6] !== children_3 || l[7] !== url) M = url === null ? e(n, {
    children: children_3
  }) : e(sn, {
    url: url,
    children: children_3
  }), l[6] = children_3, l[7] = url, l[8] = M;else M = l[8];
  return M;
}
function E(t) {
  let r = xe(t);
  return Re(r) ? dmn(r) : oRe(r);
}
function xe(t) {
  if (t === "~") return ne();
  return t.startsWith("~" + _e) ? ne() + t.slice(1) : t;
}
export { Qjr, w3n, Zjr, EFo, amn, Y5s, k3n, text as TFo, CFo, X5s, v3n, eWr, RFo, J5s, Q5s, E3n, uYe, AFo, lmn, xFo, PFo, dmn, T3n, ub };