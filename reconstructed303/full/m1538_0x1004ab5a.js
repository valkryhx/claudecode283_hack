// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Qr
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  I
} from "B:/~BUN/root/chunk-je1b1drr.js";
import {
  z1o
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  Rr,
  lT
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  Jl,
  Ce,
  ue,
  Sa,
  fg
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  wBr
} from "B:/~BUN/root/chunk-xrp58hm9.js";
import {
  Fd
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  X0,
  Lq,
  l$n,
  dIt,
  NSs,
  cvr,
  X6e,
  J0,
  u$n,
  J$e
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  pXe
} from "B:/~BUN/root/chunk-zayh6xmh.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  MI,
  Tk
} from "B:/~BUN/root/chunk-t7y4rt40.js";
import {
  V
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  gs
} from "B:/~BUN/root/chunk-xc1c9t20.js";
import {
  n,
  zt
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  hd
} from "B:/~BUN/root/chunk-q6bapw2s.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  GZ,
  Zdt
} from "B:/~BUN/root/chunk-0x393xyp.js";
import {
  qt,
  Ee,
  P,
  Z,
  A,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
import {
  resolve as bt,
  sep as De,
  win32 as be
} from "path";
B();
var j = () => ({
  isSidebarOn: J$e(),
  isOwnedByPlugin: u$n()
});

function eqr() {
  let [t, r] = y(j), o = hd(), s = V((i) => i.panelFileView !== null);
  return P(() => {
    let i = () => r((u) => {
      let D = j();
      return u.isSidebarOn === D.isSidebarOn && u.isOwnedByPlugin === D.isOwnedByPlugin ? u : D
    });
    i();
    let a = Jl(i),
      f = X6e(i);
    return () => {
      a(), f()
    }
  }, [o]), t.isSidebarOn && (s || !t.isOwnedByPlugin)
}
B();
var q = 400,
  zer = 150,
  de = 2000,
  v = {
    hunks: new Map,
    skippedLarge: new Set
  };
async function K(t, r, o) {
  try {
    let s = await l$n(t, o, r);
    if (o?.aborted) return null;
    if (s === null) return p("repl_diff_read", "git_diff_failed"), null;
    let i = s.stats.filesCount === 0 ? v : await NSs(o, dIt(s));
    if (o?.aborted) return null;
    if (i === null) p("repl_diff_read", "git_hunks_failed");
    else g("repl_diff_read");
    return {
      result: s,
      hunks: i
    }
  } catch (s) {
    if (o?.aborted) return null;
    return l(s), p("repl_diff_read", "git_diff_threw"), null
  }
}
class X {
  #e = null;
  set(t, r, o, s) {
    this.#e = {
      baseMode: t,
      refreshKey: r,
      round: o,
      at: s
    }
  }
  take(t, r) {
    let o = this.#e;
    if (o === null) return;
    if (r - o.at > de) {
      this.#e = null;
      return
    }
    if (o.baseMode !== t) return;
    return this.#e = null, {
      round: o.round,
      refreshKey: o.refreshKey
    }
  }
  get isPrimed() {
    return this.#e !== null
  }
}
var Y = new z(() => new X);
async function eSn(t, r, o, s) {
  let i = await K(t, r, s);
  if (s?.aborted) return;
  Y.of(t).set(r, o, i && {
    result: i.result,
    baseMode: r,
    hunks: i.hunks ?? v
  }, Date.now())
}

function Ger(t = 0, r = !0, o = "auto") {
  let i = Ee(Tk)?.setTimeout ?? MI,
    a = gs(),
    [f] = y(() => r ? Y.of(a).take(o, Date.now()) : void 0),
    [u, D] = y(f?.round ?? null),
    [k, O] = y(f === void 0),
    U = A(f !== void 0),
    N = A(f !== void 0 && f.refreshKey === t),
    [se, ae] = y(0);
  return P(() => z1o(() => ae((R) => R + 1)), []), P(() => {
    if (!r) return;
    if (N.current) {
      N.current = !1;
      return
    }
    let R = !1,
      C = new AbortController;
    async function G() {
      let b = await K(a, o, C.signal);
      if (R) return;
      if (b !== null) {
        let h = dIt(b.result);
        D((x) => ({
          result: b.result,
          baseMode: o,
          hunks: b.hunks ?? (x !== null && dIt(x.result) === h ? x.hunks : v)
        }))
      }
      U.current = !0, O(!1)
    }
    let _ = i(G, U.current || t !== 0 ? zer : 0);
    return () => {
      R = !0, _(), C.abort()
    }
  }, [t, r, se, o, a]), Z(() => {
    if (!u) return {
      stats: null,
      files: [],
      hunks: new Map,
      loading: r && k,
      source: {
        kind: "working-tree"
      },
      baseMode: o
    };
    let {
      stats: R,
      perFileStats: C,
      source: G
    } = u.result, _ = [];
    for (let [b, h] of C) {
      let x = h.isUntracked,
        W = u.hunks.skippedLarge.has(b),
        fe = h.added + h.removed,
        le = !W && !h.isBinary && fe > q;
      _.push({
        path: b,
        linesAdded: h.added,
        linesRemoved: h.removed,
        isBinary: h.isBinary,
        isLargeFile: W,
        isTruncated: le,
        isUntracked: x,
        preSession: h.preSession
      })
    }
    return _.sort((b, h) => b.path.localeCompare(h.path)), {
      stats: R,
      files: _,
      hunks: u.hunks.hunks,
      loading: !1,
      source: G,
      baseMode: u.baseMode,
      noCommits: u.result.noCommits
    }
  }, [u, k, r, o])
}

function T(t) {
  return {
    stats: null,
    files: [],
    hunks: new Map,
    loading: t,
    source: {
      kind: "working-tree"
    },
    baseMode: "auto"
  }
}

function pe(t) {
  let r = new Set(t.skippedLarge),
    o = new Set(t.restricted),
    s = t.perFileStats.map((i) => {
      let a = r.has(i.path);
      return {
        path: i.path,
        linesAdded: i.added,
        linesRemoved: i.removed,
        isBinary: i.isBinary,
        isLargeFile: a,
        isTruncated: !a && !i.isBinary && i.added + i.removed > q,
        isUntracked: i.isUntracked,
        isRestricted: o.has(i.path)
      }
    }).sort((i, a) => i.path.localeCompare(a.path));
  return {
    stats: t.stats,
    files: s,
    hunks: new Map(t.hunks.map((i) => [i.path, i.hunks])),
    loading: !1,
    source: t.source,
    baseMode: "branch-point"
  }
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
      return
    }
    let i = !1;
    return s.sendControlRequest({
      subtype: "get_workspace_diff"
    }).then((a) => {
      if (i) return;
      g("remote_workspace_diff_fetch"), o({
        data: a.diff ? pe(a.diff) : T(!1),
        notice: null
      })
    }).catch((a) => {
      if (i) return;
      let f = d(a),
        u = f.includes("Unsupported control request subtype") ? "unsupported_subtype" : Lq(a);
      if (u === "unsupported_subtype") p("remote_workspace_diff_fetch", u);
      else m("remote_workspace_diff_fetch", u);
      o({
        data: T(!1),
        notice: u === "unsupported_subtype" ? "The remote workspace is running an older Claude Code version that cannot report workspace changes \u2014 showing per-turn changes only" : a instanceof X0 ? "Timed out fetching workspace changes \u2014 showing per-turn changes only" : u === "disconnected" || u === "not_connected" ? "Lost the connection to the cloud session \u2014 showing per-turn changes only" : u === "not_delivered" ? "Couldn't reach the cloud session \u2014 showing per-turn changes only" : `Couldn't fetch workspace changes: ${f}`
      })
    }), () => {
      i = !0
    }
  }, [t]), r
}

function KVr(t) {
  let r = Ger(0, !t),
    o = ce(t);
  return t ? o : {
    data: r,
    notice: null
  }
}
class J {
  lastLoggedSessionId = null;
  autoOpenPending = !1
}
var HGt = new z(() => new J),
  I3o = new z(() => ({
    lastLoggedSessionId: null
  })),
  tSn = new z(() => He({
    cycled: !1
  }, (t) => {
    t.cycled = !1
  }));
var me = "The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository",
  YVr = "The diff panel isn\u2019t available right now \u2014 run /diff again to see your changes";

function XVr(t) {
  HGt.of(t).autoOpenPending = !0
}

function M3o(t) {
  let r = HGt.of(t),
    o = r.autoOpenPending;
  return r.autoOpenPending = !1, o
}

function Q(t) {
  HGt.of(t).autoOpenPending = !1
}

function nSn() {
  return cvr()
}

function Ver({
  enabled: t,
  fullscreen: r,
  columns: o,
  isThinClient: s,
  isMainFocused: i,
  hasGitRepo: a
}) {
  return t && r && !s && i && o >= GZ && a
}

function JVr(t) {
  let r = ue().diffSidebarOpen;
  if (r === !1) return !1;
  return t >= (r === !0 ? GZ : Zdt) && nSn()
}

function ee(t, r, o, s) {
  let i = o === "diff" ? "convo" : "diff";
  Q(t), r((f) => f.replTab === i && f.panelFileView === null ? f : {
    ...f,
    replTab: i,
    panelFileView: null
  });
  let a = i === "diff";
  if (ue().diffSidebarOpen !== a) Ce((f) => ({
    ...f,
    diffSidebarOpen: a
  }), s);
  return g("repl_tab_switch", {
    tab: c(i)
  }), i
}
async function he(t, r, o, s, i) {
  if (await eSn(t, $Gt(), s), r() === "diff") return;
  ee(t, o, "convo", i)
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
      return t.text
  }
}

function rSn({
  host: t,
  getReplTab: r,
  setAppState: o,
  columns: s,
  trackSequence: i,
  storageV5: a
}) {
  if (r() === "diff") return ee(t, o, "diff", a), {
    status: "hidden"
  };
  if (!J$e()) return {
    status: "refused",
    reason: "unavailable",
    text: YVr
  };
  if (!nSn()) return {
    status: "refused",
    reason: "no-git",
    text: me
  };
  if (s < GZ) return {
    status: "refused",
    reason: "too-narrow",
    text: `Resize your terminal to at least ${GZ} columns to show the diff panel`
  };
  return {
    status: "shown",
    settled: he(t, r, o, i, a).catch(l)
  }
}

function yLe(t, r) {
  Q(t), r((o) => o.replTab === "convo" && o.panelFileView === null ? o : {
    ...o,
    replTab: "convo",
    panelFileView: null
  })
}

function QVr(t, r, o) {
  if (yLe(t, r), ue().diffSidebarOpen !== !1) Ce((s) => ({
    ...s,
    diffSidebarOpen: !1
  }), o);
  g("repl_tab_switch", {
    tab: c("convo")
  })
}
var H = ["session", "uncommitted", "branch"];

function $Gt() {
  let t = Sa().diffSidebarBaseMode;
  return t === "uncommitted" || t === "branch" ? t : "session"
}

function ZVr(t, r) {
  let o = H[(H.indexOf(t) + 1) % H.length] ?? "session";
  return fg((s) => s.diffSidebarBaseMode === o ? s : {
    ...s,
    diffSidebarBaseMode: o
  }, r), g("repl_diff_base_switch", {
    mode: c(o)
  }), o
}

function UGt(t) {
  return pXe(ke(t))
}

function ke(t) {
  let r = Qr(),
    o = I() === "windows",
    s = o ? be.sep : De,
    i = (D) => o ? D.replaceAll("/", s).toLowerCase() : D,
    a = i(t),
    f = i(r);
  if (a.length !== t.length || f.length !== r.length) return t;
  if (a === f) return "";
  let u = f.endsWith(s) ? f : f + s;
  return a.startsWith(u) ? t.slice(u.length) : t
}
B();
import {
  homedir as ne
} from "os";
import {
  isAbsolute as ye,
  sep as Re
} from "path";
import {
  isAbsolute as we,
  win32 as te
} from "path";

function L(t) {
  if (I() === "windows") return te.isAbsolute(t) && te.parse(t).root.length > 1;
  return we(t)
}
var oSn = qt(null);

function QS(t) {
  let a = w(9),
    {
      filePath: r,
      children: o
    } = t,
    s = Ee(oSn),
    i = o ?? r;
  if (M(r) || typeof i === "string" && M(i)) {
    let f;
    if (a[0] === S) f = e(n, {
      dimColor: !0,
      children: wBr
    }), a[0] = f;
    else f = a[0];
    return f
  }
  let f;
  if (a[1] !== s || a[2] !== i) f = s !== null && typeof i === "string" ? Fd(i, s) : i, a[1] = s, a[2] = i, a[3] = f;
  else f = a[3];
  let u = f,
    D;
  if (a[4] !== r) D = L(r) ? J0(r) : null, a[4] = r, a[5] = D;
  else D = a[5];
  let k = D,
    O;
  if (a[6] !== u || a[7] !== k) O = k === null ? e(n, {
    children: u
  }) : e(zt, {
    url: k,
    children: u
  }), a[6] = u, a[7] = k, a[8] = O;
  else O = a[8];
  return O
}

function M(t) {
  let r = Pe(t);
  return ye(r) ? UGt(r) : pXe(r)
}

function Pe(t) {
  if (t === "~") return ne();
  return t.startsWith("~" + Re) ? ne() + t.slice(1) : t
}
export {
  zer,
  eSn,
  Ger,
  KVr,
  HGt,
  I3o,
  tSn,
  YVr,
  XVr,
  M3o,
  nSn,
  Ver,
  JVr,
  D3o,
  L3o,
  rSn,
  yLe,
  QVr,
  $Gt,
  ZVr,
  eqr,
  UGt,
  oSn,
  QS
};
