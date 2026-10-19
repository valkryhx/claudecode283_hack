// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Qr } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { z1o } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Rr, lT } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { Jl, Ce, ue, Sa, fg } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { wBr as children_2 } from "B:/~BUN/root/chunk-xrp58hm9.js";
import { Fd } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { X0, Lq, l$n, dIt, NSs, cvr, X6e, J0, u$n, J$e } from "B:/~BUN/root/chunk-k382hx6g.js";
import { pXe } from "B:/~BUN/root/chunk-zayh6xmh.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { MI, Tk } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { V } from "B:/~BUN/root/chunk-tgzmva3g.js";
import { gs } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { n, zt } from "B:/~BUN/root/chunk-damrp3r8.js";
import { hd } from "B:/~BUN/root/chunk-q6bapw2s.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { GZ, Zdt } from "B:/~BUN/root/chunk-0x393xyp.js";
import { qt, Ee, P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { He } from "B:/~BUN/root/chunk-8znbjmp4.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
import { resolve as bt, sep as De, win32 as be } from "path";
B();
var j = () => ({
  isSidebarOn: J$e(),
  isOwnedByPlugin: u$n()
});
function eqr() {
  let [t, r] = y(j),
    o = hd(),
    s = V(i => i.panelFileView !== null);
  return P(() => {
    let i = () => r(u => {
      let D = j();
      return u.isSidebarOn === D.isSidebarOn && u.isOwnedByPlugin === D.isOwnedByPlugin ? u : D;
    });
    i();
    let a = Jl(i),
      f = X6e(i);
    return () => {
      a(), f();
    };
  }, [o]), t.isSidebarOn && (s || !t.isOwnedByPlugin);
}
B();
var q = 400,
  zer = 150,
  de = 2000,
  v = {
    hunks: new Map(),
    skippedLarge: new Set()
  };
async function K(t, r, o) {
  try {
    let result = await l$n(t, o, r);
    if (o?.aborted) return null;
    if (result === null) return p("repl_diff_read", "git_diff_failed"), null;
    let hunks = result.stats.filesCount === 0 ? v : await NSs(o, dIt(result));
    if (o?.aborted) return null;
    if (hunks === null) p("repl_diff_read", "git_hunks_failed");else g("repl_diff_read");
    return {
      result: result,
      hunks: hunks
    };
  } catch (error) {
    if (o?.aborted) return null;
    return l(error), p("repl_diff_read", "git_diff_threw"), null;
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
var Y = new z(() => new X());
async function eSn(t, baseMode_2, o, s) {
  let i = await K(t, baseMode_2, s);
  if (s?.aborted) return;
  Y.of(t).set(baseMode_2, o, i && {
    result: i.result,
    baseMode: baseMode_2,
    hunks: i.hunks ?? v
  }, Date.now());
}
function Ger(t = 0, r = !0, baseMode_3 = "auto") {
  let i = Ee(Tk)?.setTimeout ?? MI,
    a = gs(),
    [f] = y(() => r ? Y.of(a).take(baseMode_3, Date.now()) : void 0),
    [u, D] = y(f?.round ?? null),
    [k, O] = y(f === void 0),
    U = A(f !== void 0),
    N = A(f !== void 0 && f.refreshKey === t),
    [se, ae] = y(0);
  return P(() => z1o(() => ae(R => R + 1)), []), P(() => {
    if (!r) return;
    if (N.current) {
      N.current = !1;
      return;
    }
    let R = !1,
      abortController = new AbortController();
    async function G() {
      let b = await K(a, baseMode_3, abortController.signal);
      if (R) return;
      if (b !== null) {
        let h = dIt(b.result);
        D(x => ({
          result: b.result,
          baseMode: baseMode_3,
          hunks: b.hunks ?? (x !== null && dIt(x.result) === h ? x.hunks : v)
        }));
      }
      U.current = !0, O(!1);
    }
    let _ = i(G, U.current || t !== 0 ? zer : 0);
    return () => {
      R = !0, _(), abortController.abort();
    };
  }, [t, r, se, baseMode_3, a]), Z(() => {
    if (!u) return {
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
      } = u.result,
      files = [];
    for (let [path, h] of perFileStats) {
      let isUntracked = h.isUntracked,
        isLargeFile = u.hunks.skippedLarge.has(path),
        fe = h.added + h.removed,
        isTruncated = !isLargeFile && !h.isBinary && fe > q;
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
      hunks: u.hunks.hunks,
      loading: !1,
      source: source,
      baseMode: u.baseMode,
      noCommits: u.result.noCommits
    };
  }, [u, k, r, baseMode_3]);
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
        isTruncated: !isLargeFile_2 && !item.isBinary && item.added + item.removed > q,
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
  return P(() => {
    if (!t) return;
    let s = Rr();
    if (!s || !lT("controlChannel")) {
      p("remote_workspace_diff_fetch", "no_channel"), o({
        data: T(!1),
        notice: "Workspace changes aren't available over this connection \u2014 showing per-turn changes only"
      });
      return;
    }
    let i = !1;
    return s.sendControlRequest({
      subtype: "get_workspace_diff"
    }).then(a => {
      if (i) return;
      g("remote_workspace_diff_fetch"), o({
        data: a.diff ? pe(a.diff) : T(!1),
        notice: null
      });
    }).catch(a => {
      if (i) return;
      let f = d(a),
        u = f.includes("Unsupported control request subtype") ? "unsupported_subtype" : Lq(a);
      if (u === "unsupported_subtype") p("remote_workspace_diff_fetch", u);else m("remote_workspace_diff_fetch", u);
      o({
        data: T(!1),
        notice: u === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only" : a instanceof X0 ? "Timed out fetching workspace changes \u2014 showing per-turn changes only" : u === "disconnected" || u === "not_connected" ? "Lost the connection to the cloud session \u2014 showing per-turn changes only" : u === "not_delivered" ? "Couldn't reach the cloud session \u2014 showing per-turn changes only" : `Couldn't fetch workspace changes: ${f}`
      });
    }), () => {
      i = !0;
    };
  }, [t]), r;
}
function KVr(t) {
  let data = Ger(0, !t),
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
var HGt = new z(() => new J()),
  I3o = new z(() => ({
    lastLoggedSessionId: null
  })),
  tSn = new z(() => He({
    cycled: !1
  }, t => {
    t.cycled = !1;
  }));
var text_2 = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository",
  text = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";
function XVr(t) {
  HGt.of(t).autoOpenPending = !0;
}
function M3o(t) {
  let r = HGt.of(t),
    autoOpenPending = r.autoOpenPending;
  return r.autoOpenPending = !1, autoOpenPending;
}
function Q(t) {
  HGt.of(t).autoOpenPending = !1;
}
function nSn() {
  return cvr();
}
function Ver({
  enabled: enabled,
  fullscreen: fullscreen,
  columns: columns,
  isThinClient: isThinClient,
  isMainFocused: isMainFocused,
  hasGitRepo: hasGitRepo
}) {
  return enabled && fullscreen && !isThinClient && isMainFocused && columns >= GZ && hasGitRepo;
}
function JVr(t) {
  let diffSidebarOpen = ue().diffSidebarOpen;
  if (diffSidebarOpen === !1) return !1;
  return t >= (diffSidebarOpen === !0 ? GZ : Zdt) && nSn();
}
function ee(t, r, o, s) {
  let replTab = o === "diff" ? "convo" : "diff";
  Q(t), r(f => f.replTab === replTab && f.panelFileView === null ? f : {
    ...f,
    replTab: replTab,
    panelFileView: null
  });
  let diffSidebarOpen_2 = replTab === "diff";
  if (ue().diffSidebarOpen !== diffSidebarOpen_2) Ce(f => ({
    ...f,
    diffSidebarOpen: diffSidebarOpen_2
  }), s);
  return g("repl_tab_switch", {
    tab: c(replTab)
  }), replTab;
}
async function he(t, r, o, s, i) {
  if (await eSn(t, $Gt(), s), r() === "diff") return;
  ee(t, o, "convo", i);
}
var ge = "Diff panel shown",
  Se = "Diff panel hidden",
  D3o = 2000;
function L3o(t) {
  switch (t.status) {
    case "shown":
      return ge;
    case "hidden":
      return Se;
    case "refused":
      return t.text;
  }
}
function rSn({
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
  if (!J$e()) return {
    status: "refused",
    reason: "unavailable",
    text: text
  };
  if (!nSn()) return {
    status: "refused",
    reason: "no-git",
    text: text_2
  };
  if (columns_2 < GZ) return {
    status: "refused",
    reason: "too-narrow",
    text: `Resize your terminal to at least ${GZ} columns to show the diff panel`
  };
  return {
    status: "shown",
    settled: he(host, getReplTab, setAppState, trackSequence, storageV5).catch(l)
  };
}
function yLe(t, r) {
  Q(t), r(o => o.replTab === "convo" && o.panelFileView === null ? o : {
    ...o,
    replTab: "convo",
    panelFileView: null
  });
}
function QVr(t, r, o) {
  if (yLe(t, r), ue().diffSidebarOpen !== !1) Ce(s => ({
    ...s,
    diffSidebarOpen: !1
  }), o);
  g("repl_tab_switch", {
    tab: c("convo")
  });
}
var H = ["session", "uncommitted", "branch"];
function $Gt() {
  let diffSidebarBaseMode = Sa().diffSidebarBaseMode;
  return diffSidebarBaseMode === "uncommitted" || diffSidebarBaseMode === "branch" ? diffSidebarBaseMode : "session";
}
function ZVr(t, r) {
  let diffSidebarBaseMode_2 = H[(H.indexOf(t) + 1) % H.length] ?? "session";
  return fg(s => s.diffSidebarBaseMode === diffSidebarBaseMode_2 ? s : {
    ...s,
    diffSidebarBaseMode: diffSidebarBaseMode_2
  }, r), g("repl_diff_base_switch", {
    mode: c(diffSidebarBaseMode_2)
  }), diffSidebarBaseMode_2;
}
function UGt(t) {
  return pXe(ke(t));
}
function ke(t) {
  let r = Qr(),
    o = I() === "windows",
    s = o ? be.sep : De,
    i = D => o ? D.replaceAll("/", s).toLowerCase() : D,
    a = i(t),
    f = i(r);
  if (a.length !== t.length || f.length !== r.length) return t;
  if (a === f) return "";
  let u = f.endsWith(s) ? f : f + s;
  return a.startsWith(u) ? t.slice(u.length) : t;
}
B();
import { homedir as ne } from "os";
import { isAbsolute as ye, sep as Re } from "path";
import { isAbsolute as we, win32 as te } from "path";
function L(t) {
  if (I() === "windows") return te.isAbsolute(t) && te.parse(t).root.length > 1;
  return we(t);
}
var oSn = qt(null);
function QS(t) {
  let a = w(9),
    {
      filePath: filePath,
      children: children
    } = t,
    s = Ee(oSn),
    i = children ?? filePath;
  if (M(filePath) || typeof i === "string" && M(i)) {
    let f;
    if (a[0] === S) f = e(n, {
      dimColor: !0,
      children: children_2
    }), a[0] = f;else f = a[0];
    return f;
  }
  let f;
  if (a[1] !== s || a[2] !== i) f = s !== null && typeof i === "string" ? Fd(i, s) : i, a[1] = s, a[2] = i, a[3] = f;else f = a[3];
  let children_3 = f,
    D;
  if (a[4] !== filePath) D = L(filePath) ? J0(filePath) : null, a[4] = filePath, a[5] = D;else D = a[5];
  let url = D,
    O;
  if (a[6] !== children_3 || a[7] !== url) O = url === null ? e(n, {
    children: children_3
  }) : e(zt, {
    url: url,
    children: children_3
  }), a[6] = children_3, a[7] = url, a[8] = O;else O = a[8];
  return O;
}
function M(t) {
  let r = Pe(t);
  return ye(r) ? UGt(r) : pXe(r);
}
function Pe(t) {
  if (t === "~") return ne();
  return t.startsWith("~" + Re) ? ne() + t.slice(1) : t;
}
export { zer, eSn, Ger, KVr, HGt, I3o, tSn, text as YVr, XVr, M3o, nSn, Ver, JVr, D3o, L3o, rSn, yLe, QVr, $Gt, ZVr, eqr, UGt, oSn, QS };