// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q, kr } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { yP, iS } from "B:/~BUN/root/chunk-1223v177.js";
import { _, m, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { Gs } from "B:/~BUN/root/chunk-4r6zcwth.js";
import { lr, zv, WWr } from "B:/~BUN/root/chunk-339q6g5w.js";
import { d, O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Va } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { qd, Ee, le, Is, Bu } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { X3n as children_2 } from "B:/~BUN/root/chunk-8hs4bwwk.js";
import { rEr, hR, mB, mtn, dst, Gyo, w$n, btn, Nke, FM } from "B:/~BUN/root/chunk-y39emrp9.js";
import { W } from "B:/~BUN/root/chunk-h23911wn.js";
import { eFe } from "B:/~BUN/root/chunk-3hjtxzqy.js";
import { n, bt } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ba } from "B:/~BUN/root/chunk-vf07m8qt.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { h3, Xqe } from "B:/~BUN/root/chunk-3p1f5rvt.js";
import { Vt, Pe, R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var j = 400,
  dwn = 150,
  de = 2000,
  H = {
    hunks: new Map(),
    skippedLarge: new Set()
  };
async function K(t, r, o) {
  try {
    let result = await mtn(t, o, r);
    if (o?.aborted) return null;
    if (result === null) return p("repl_diff_read", "git_diff_failed"), null;
    let hunks = result.stats.filesCount === 0 ? H : await Gyo(o, dst(result));
    if (o?.aborted) return null;
    if (hunks === null) p("repl_diff_read", "git_hunks_failed");else _("repl_diff_read");
    return {
      result: result,
      hunks: hunks
    };
  } catch (error) {
    if (o?.aborted) return null;
    return d(error), p("repl_diff_read", "git_diff_threw"), null;
  }
}
class z {
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
var Y = new q(() => new z());
async function Q2t(t, baseMode_2, o, s) {
  let i = await K(t, baseMode_2, s);
  if (s?.aborted) return;
  Y.of(t).set(baseMode_2, o, i && {
    result: i.result,
    baseMode: baseMode_2,
    hunks: i.hunks ?? H
  }, Date.now());
}
function uwn(t = 0, r = !0, baseMode_3 = "auto") {
  let i = Pe(iS)?.setTimeout ?? yP,
    a = Gs(),
    [f] = g(() => r ? Y.of(a).take(baseMode_3, Date.now()) : void 0),
    [u, D] = g(f?.round ?? null),
    [k, M] = g(f === void 0),
    L = T(f !== void 0),
    U = T(f !== void 0 && f.refreshKey === t),
    [ae, fe] = g(0);
  return R(() => WWr(() => fe(y => y + 1)), []), R(() => {
    if (!r) return;
    if (U.current) {
      U.current = !1;
      return;
    }
    let y = !1,
      abortController = new AbortController();
    async function G() {
      let b = await K(a, baseMode_3, abortController.signal);
      if (y) return;
      if (b !== null) {
        let h = dst(b.result);
        D(A => ({
          result: b.result,
          baseMode: baseMode_3,
          hunks: b.hunks ?? (A !== null && dst(A.result) === h ? A.hunks : H)
        }));
      }
      L.current = !0, M(!1);
    }
    let P = i(G, L.current || t !== 0 ? dwn : 0);
    return () => {
      y = !0, P(), abortController.abort();
    };
  }, [t, r, ae, baseMode_3, a]), X(() => {
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
        ue = h.added + h.removed,
        isTruncated = !isLargeFile && !h.isBinary && ue > j;
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
function C(loading) {
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
function ce(t) {
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
        isTruncated: !isLargeFile_2 && !item.isBinary && item.added + item.removed > j,
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
function me(t) {
  let [r, o] = g(() => ({
    data: C(t),
    notice: null
  }));
  return R(() => {
    if (!t) return;
    let s = lr();
    if (!s || !zv("controlChannel")) {
      p("remote_workspace_diff_fetch", "no_channel"), o({
        data: C(!1),
        notice: "Workspace changes aren't available over this connection \u2014 showing per-turn changes only"
      });
      return;
    }
    let i = !1;
    return s.sendControlRequest({
      subtype: "get_workspace_diff"
    }).then(a => {
      if (i) return;
      _("remote_workspace_diff_fetch"), o({
        data: a.diff ? ce(a.diff) : C(!1),
        notice: null
      });
    }).catch(a => {
      if (i) return;
      let f = l(a),
        u = f.includes("Unsupported control request subtype") ? "unsupported_subtype" : mB(a);
      if (u === "unsupported_subtype") p("remote_workspace_diff_fetch", u);else m("remote_workspace_diff_fetch", u);
      o({
        data: C(!1),
        notice: u === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only" : a instanceof hR ? "Timed out fetching workspace changes \u2014 showing per-turn changes only" : u === "disconnected" || u === "not_connected" ? "Lost the connection to the cloud session \u2014 showing per-turn changes only" : u === "not_delivered" ? "Couldn't reach the cloud session \u2014 showing per-turn changes only" : `Couldn't fetch workspace changes: ${f}`
      });
    }), () => {
      i = !0;
    };
  }, [t]), r;
}
function oZn(t) {
  let data = uwn(0, !t),
    o = me(t);
  return t ? o : {
    data: data,
    notice: null
  };
}
class J {
  lastLoggedSessionId = null;
  autoOpenPending = !1;
}
var Syt = new q(() => new J()),
  Z2t = new q(() => ({
    cycled: !1
  }));
var text_2 = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository",
  text = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";
function iZn(t) {
  Syt.of(t).autoOpenPending = !0;
}
function K5r(t) {
  let r = Syt.of(t),
    autoOpenPending = r.autoOpenPending;
  return r.autoOpenPending = !1, autoOpenPending;
}
function Q(t) {
  Syt.of(t).autoOpenPending = !1;
}
function eGt() {
  return w$n();
}
function pwn({
  enabled: enabled,
  fullscreen: fullscreen,
  columns: columns,
  isThinClient: isThinClient,
  isMainFocused: isMainFocused,
  hasGitRepo: hasGitRepo
}) {
  return enabled && fullscreen && !isThinClient && isMainFocused && columns >= h3 && hasGitRepo;
}
function aZn(t) {
  let diffSidebarOpen = le().diffSidebarOpen;
  if (diffSidebarOpen === !1) return !1;
  return t >= (diffSidebarOpen === !0 ? h3 : Xqe) && eGt();
}
function Z(t, r, o, s) {
  let replTab = o === "diff" ? "convo" : "diff";
  Q(t), r(f => f.replTab === replTab && f.panelFileView === null ? f : {
    ...f,
    replTab: replTab,
    panelFileView: null
  });
  let diffSidebarOpen_2 = replTab === "diff";
  if (le().diffSidebarOpen !== diffSidebarOpen_2) Ee(f => ({
    ...f,
    diffSidebarOpen: diffSidebarOpen_2
  }), s);
  return _("repl_tab_switch", {
    tab: c(replTab)
  }), replTab;
}
async function ge(t, r, o, s, i) {
  if (await Q2t(t, wyt(), s), r() === "diff") return;
  Z(t, o, "convo", i);
}
var De = "Diff panel shown",
  Se = "Diff panel hidden",
  Y5r = 2000;
function X5r(t) {
  switch (t.status) {
    case "shown":
      return De;
    case "hidden":
      return Se;
    case "refused":
      return t.text;
  }
}
function tGt({
  host: host,
  getReplTab: getReplTab,
  setAppState: setAppState,
  columns: columns_2,
  trackSequence: trackSequence,
  storageV5: storageV5
}) {
  if (getReplTab() === "diff") return Z(host, setAppState, "diff", storageV5), {
    status: "hidden"
  };
  if (!Nke()) return {
    status: "refused",
    reason: "unavailable",
    text: text
  };
  if (!eGt()) return {
    status: "refused",
    reason: "no-git",
    text: text_2
  };
  if (columns_2 < h3) return {
    status: "refused",
    reason: "too-narrow",
    text: `Resize your terminal to at least ${h3} columns to show the diff panel`
  };
  return {
    status: "shown",
    settled: ge(host, getReplTab, setAppState, trackSequence, storageV5).catch(d)
  };
}
function Abe(t, r) {
  Q(t), r(o => o.replTab === "convo" && o.panelFileView === null ? o : {
    ...o,
    replTab: "convo",
    panelFileView: null
  });
}
function lZn(t, r, o) {
  if (Abe(t, r), le().diffSidebarOpen !== !1) Ee(s => ({
    ...s,
    diffSidebarOpen: !1
  }), o);
  _("repl_tab_switch", {
    tab: c("convo")
  });
}
var v = ["session", "uncommitted", "branch"];
function wyt() {
  let diffSidebarBaseMode = Is().diffSidebarBaseMode;
  return diffSidebarBaseMode === "uncommitted" || diffSidebarBaseMode === "branch" ? diffSidebarBaseMode : "session";
}
function cZn(t, r) {
  let diffSidebarBaseMode_2 = v[(v.indexOf(t) + 1) % v.length] ?? "session";
  return Bu(s => s.diffSidebarBaseMode === diffSidebarBaseMode_2 ? s : {
    ...s,
    diffSidebarBaseMode: diffSidebarBaseMode_2
  }, r), _("repl_diff_base_switch", {
    mode: c(diffSidebarBaseMode_2)
  }), diffSidebarBaseMode_2;
}
N();
var ee = () => ({
  isSidebarOn: Nke(),
  isOwnedByPlugin: btn()
});
function dZn() {
  let [t, r] = g(ee),
    o = Ba(),
    s = W(i => i.panelFileView !== null);
  return R(() => {
    let i = () => r(u => {
      let D = ee();
      return u.isSidebarOn === D.isSidebarOn && u.isOwnedByPlugin === D.isOwnedByPlugin ? u : D;
    });
    i();
    let a = qd(i),
      f = rEr(i);
    return () => {
      a(), f();
    };
  }, [o]), t.isSidebarOn && (s || !t.isOwnedByPlugin);
}
N();
import { homedir as oe } from "os";
import { isAbsolute as Re, sep as _e } from "path";
import { resolve as St, sep as be, win32 as ke } from "path";
function te(t) {
  return eFe(we(t));
}
function we(t) {
  let r = kr(),
    o = O() === "windows",
    s = o ? ke.sep : be,
    i = D => o ? D.replaceAll("/", s).toLowerCase() : D,
    a = i(t),
    f = i(r);
  if (a.length !== t.length || f.length !== r.length) return t;
  if (a === f) return "";
  let u = f.endsWith(s) ? f : f + s;
  return a.startsWith(u) ? t.slice(u.length) : t;
}
import { isAbsolute as ye, win32 as ne } from "path";
function I(t) {
  if (O() === "windows") return ne.isAbsolute(t) && ne.parse(t).root.length > 1;
  return ye(t);
}
var nGt = Vt(null);
function Rb(t) {
  let a = w(9),
    {
      filePath: filePath,
      children: children
    } = t,
    s = Pe(nGt),
    i = children ?? filePath;
  if (E(filePath) || typeof i === "string" && E(i)) {
    let f;
    if (a[0] === S) f = e(n, {
      dimColor: !0,
      children: children_2
    }), a[0] = f;else f = a[0];
    return f;
  }
  let f;
  if (a[1] !== s || a[2] !== i) f = s !== null && typeof i === "string" ? Va(i, s) : i, a[1] = s, a[2] = i, a[3] = f;else f = a[3];
  let children_3 = f,
    D;
  if (a[4] !== filePath) D = I(filePath) ? FM(filePath) : null, a[4] = filePath, a[5] = D;else D = a[5];
  let url = D,
    M;
  if (a[6] !== children_3 || a[7] !== url) M = url === null ? e(n, {
    children: children_3
  }) : e(bt, {
    url: url,
    children: children_3
  }), a[6] = children_3, a[7] = url, a[8] = M;else M = a[8];
  return M;
}
function E(t) {
  let r = xe(t);
  return Re(r) ? te(r) : eFe(r);
}
function xe(t) {
  if (t === "~") return oe();
  return t.startsWith("~" + _e) ? oe() + t.slice(1) : t;
}
export { dwn, Q2t, uwn, oZn, Syt, Z2t, text as sZn, iZn, K5r, eGt, pwn, aZn, Y5r, X5r, tGt, Abe, lZn, wyt, cZn, dZn, nGt, Rb };