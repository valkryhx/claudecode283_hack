// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  mre
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  c
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  tUn
} from "B:/~BUN/root/chunk-0av24qsq.js";
import {
  om
} from "B:/~BUN/root/chunk-4tkwpa6e.js";
import {
  x
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  ioe,
  zl,
  Xw,
  Tje,
  Bj
} from "B:/~BUN/root/chunk-e1thvnpv.js";
import {
  mVt,
  gT
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  JJe
} from "B:/~BUN/root/chunk-kss0wzj5.js";
import {
  i
} from "B:/~BUN/root/chunk-728mwbhs.js";
import {
  _,
  p
} from "B:/~BUN/root/chunk-51n463p1.js";
import {
  wt
} from "B:/~BUN/root/chunk-rwwxddqq.js";
import {
  ie,
  Yne,
  YS,
  G$o,
  V$o,
  ozr,
  WJ
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  QJe
} from "B:/~BUN/root/chunk-jpnyq4t7.js";
import {
  Tl
} from "B:/~BUN/root/chunk-rfp59gnb.js";
import {
  C6e
} from "B:/~BUN/root/chunk-e9hrnhar.js";
import {
  bR,
  Zyo,
  Ctn,
  FPt,
  e_o,
  fEr
} from "B:/~BUN/root/chunk-ky4py1p3.js";
import {
  xs
} from "B:/~BUN/root/chunk-p4t9nwg2.js";
import {
  rL,
  uIe,
  FQ,
  Bvn,
  Y_,
  jvn,
  ac,
  Wvn,
  Gvn,
  fIe,
  PH
} from "B:/~BUN/root/chunk-trcn2d68.js";
import {
  A_t,
  n9r
} from "B:/~BUN/root/chunk-jz31jc2e.js";
import {
  _m,
  loe
} from "B:/~BUN/root/chunk-p3ewqd1e.js";
import {
  OKt
} from "B:/~BUN/root/chunk-dczbgj6x.js";
import {
  mIe,
  yP,
  gIe,
  Qvn,
  iS
} from "B:/~BUN/root/chunk-1223v177.js";
import {
  Kbe,
  Ny
} from "B:/~BUN/root/chunk-0rtwbec7.js";
import {
  Yt
} from "B:/~BUN/root/chunk-jdm3bsma.js";
import {
  e
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Xg
} from "B:/~BUN/root/chunk-cev8zjcf.js";
import {
  Vt,
  ad,
  Gp,
  se,
  Pe,
  R,
  sn,
  X,
  RE,
  T,
  g,
  At,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  ya
} from "B:/~BUN/root/chunk-nfc48pcb.js";
import {
  S,
  hn
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();

function dt() {
  return {
    latched: null
  }
}
var oe = Vt(null);

function Re() {
  return Tl() ? "fullscreen" : "inline"
}

function re(o) {
  let m = w(3),
    {
      value: r,
      children: l
    } = o,
    [u] = g(dt);
  const d = r ?? u;
  let f;
  if (m[0] !== l || m[1] !== d) f = e(oe.Provider, {
    value: d,
    children: l
  }), m[0] = l, m[1] = d, m[2] = f;
  else f = m[2];
  return f
}

function cO() {
  let o = Pe(oe);
  if (o === null) return Re();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = Re();
  return o.latched
}

function Js() {
  return cO() === "fullscreen"
}
N();

function Se() {
  return {
    markdownTokens: new Map,
    highlightedCode: new Map,
    structuredDiff: new WeakMap,
    parsedToolResults: new WeakMap
  }
}
var ke = Vt(null);

function Te({
  children: o
}) {
  let r = T(null);
  return r.current ??= Se(), e(ke.Provider, {
    value: r.current,
    children: o
  })
}

function tL() {
  let o = Pe(ke),
    r = T(null);
  if (o) return o;
  return r.current ??= Se(), r.current
}

function yje(o, r, l) {
  if (!r) return;
  if (typeof l !== "object" || l === null) return r.safeParse(l);
  let u = o.parsedToolResults.get(l);
  if (u && mt(u, r)) return u.parsed;
  let d = r.safeParse(l);
  return o.parsedToolResults.set(l, {
    schema: r,
    parsed: d
  }), d
}

function mt(o, r) {
  return o.schema === r
}
import {
  Stream as ht
} from "stream";
import {
  writeSync as Ee
} from "fs";

function ft() {
  if (!process.stdout.isTTY) return;
  try {
    OKt();
    let o = xs().get(process.stdout);
    if (Ee(1, (o?.modes.reset("mousePixels") ?? "") + loe), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount()
    } catch {}
    if (o?.drainStdin(), o?.detachForShutdown(), Gvn(o?.modes ?? new Tje, (r) => Ee(1, r)), !a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) process.title = ""
  } catch {}
}

function yt() {
  xs().get(process.stdout)?.drainStdin()
}
var ne = {
  cleanupTerminalModes: ft,
  drainStdin: yt
};
var gt = (o, r) => {
    let l = xt(r),
      u = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: !0,
        patchConsole: !0,
        ...l
      },
      d = Rt(u.stdout, () => new fIe(u));
    return d.render(o), {
      rerender: d.render,
      unmount() {
        d.unmount()
      },
      waitUntilExit: d.waitUntilExit,
      cleanup: () => xs().delete(u.stdout)
    }
  },
  Ct = async (o, r) => {
    let l = xs();
    while (l.pendingStandaloneRender) await l.pendingStandaloneRender;
    await Promise.resolve();
    let u = gt(o, r);
    return t(`[render] first ink render: ${Math.round(process.uptime()*1000)}ms since process start`), u
  }, le = Ct;
async function we(o = {}) {
  await Promise.resolve();
  let r = xs();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let l = vt(o, "react");
  return {
    render: (u) => l.render(u),
    unmount: () => l.unmount(),
    waitUntilExit: () => l.waitUntilExit()
  }
}

function vt({
  stdout: o = process.stdout,
  stdin: r = process.stdin,
  stderr: l = process.stderr,
  exitOnCtrlC: u = !0,
  patchConsole: d = !0,
  onFrame: m,
  nativeCursor: f,
  isScreenReaderEnabled: h,
  atlasRecorder: b
}, y) {
  let v = xs();
  fEr(ne);
  let C = new fIe({
    stdout: o,
    stdin: r,
    stderr: l,
    exitOnCtrlC: u,
    patchConsole: d,
    onFrame: m,
    nativeCursor: f,
    isScreenReaderEnabled: h,
    atlasRecorder: b
  });
  if (y === "react") v.set(o, C);
  else v.treeRoots.set(o, C);
  return C
}
var xt = (o = {}) => {
    if (o instanceof ht) return {
      stdout: o,
      stdin: process.stdin
    };
    return o
  },
  Rt = (o, r) => {
    let l = xs(),
      u = l.get(o);
    if (!u) fEr(ne), u = r(), l.set(o, u);
    return u
  };

function H8r() {
  let o = xs().get(process.stdout);
  if (!o) return;
  St(o.getStylePool())
}

function Ae() {
  let o = x("tengu_xterm_atlas_reset", !0),
    r = x("tengu_basalt_meadow", !1);
  return {
    autoResetEnabled: o,
    recording: o || r
  }
}

function St(o) {
  let r = o.atlasRecorder;
  if (r.debugTainted) return;
  if (!x("tengu_basalt_meadow", !1)) {
    if (!r.autoResetEnabled) r.recording = !1;
    return
  }
  r.recording = !0;
  let u = r.proactiveResetStats;
  if (i("tengu_render_glyph_cardinality", {
      stylepool_styles: o.size,
      stylepool_overflowed: o.overflowed,
      atlas_glyph_keys: r.size,
      atlas_keys_saturated: r.saturated,
      term_program: c(kt()),
      is_xtermjs: om(),
      session_age_bucket: c(Tt(mre())),
      proactive_reset_count: u.count,
      proactive_reset_last_reason: c(u.lastReason)
    }), !r.stylePoolHealthyReported) r.stylePoolHealthyReported = !0, _("render_stylepool");
  if (o.overflowed && !r.stylePoolCapHitReported) r.stylePoolCapHitReported = !0, p("render_stylepool", "cap_hit")
}

function kt() {
  if (a.CURSOR_TRACE_ID !== void 0) return "cursor";
  switch (a.TERM_PROGRAM) {
    case "vscode":
      return "vscode";
    case "iTerm.app":
      return "iterm";
    case "Apple_Terminal":
      return "apple_terminal";
    case "ghostty":
      return "ghostty";
    case "WezTerm":
      return "wezterm";
    case "tmux":
      return "tmux"
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other"
}

function Tt(o) {
  let r = o / 60000;
  if (r < 5) return "lt_5m";
  if (r < 30) return "5m_30m";
  if (r < 120) return "30m_2h";
  if (r < 480) return "2h_8h";
  return "gt_8h"
}

function j(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return tUn(o) ? r[o] : void 0
}

function Et(o) {
  let r = gT();
  return e(zl, {
    ...o,
    borderColor: j(o.borderColor, r),
    borderTopColor: j(o.borderTopColor, r),
    borderBottomColor: j(o.borderBottomColor, r),
    borderLeftColor: j(o.borderLeftColor, r),
    borderRightColor: j(o.borderRightColor, r),
    backgroundColor: j(o.backgroundColor, r)
  })
}
var s = Et;
N();
N();
var _je = Vt(!1);

function G(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return tUn(o) ? r[o] : void 0
}

function n(o) {
  let r = w(31),
    l, u, d, m, f, h, b, y, v, C, E;
  if (r[0] !== o)({
    color: d,
    backgroundColor: l,
    dimColor: f,
    bold: h,
    italic: b,
    underline: y,
    strikethrough: v,
    inverse: C,
    wrap: E,
    children: u,
    ...m
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m, r[5] = f, r[6] = h, r[7] = b, r[8] = y, r[9] = v, r[10] = C, r[11] = E;
  else l = r[1], u = r[2], d = r[3], m = r[4], f = r[5], h = r[6], b = r[7], y = r[8], v = r[9], C = r[10], E = r[11];
  let P = f === void 0 ? !1 : f,
    k = h === void 0 ? !1 : h,
    M = b === void 0 ? !1 : b,
    F = y === void 0 ? !1 : y,
    A = v === void 0 ? !1 : v,
    I = C === void 0 ? !1 : C,
    L = E === void 0 ? "wrap" : E,
    D = gT(),
    W = Pe(_je),
    U;
  if (r[12] !== d || r[13] !== P || r[14] !== W || r[15] !== D) U = P && !W ? D.inactive : G(d, D), r[12] = d, r[13] = P, r[14] = W, r[15] = D, r[16] = U;
  else U = r[16];
  let B = U,
    H;
  if (r[17] !== l || r[18] !== D) H = G(l, D), r[17] = l, r[18] = D, r[19] = H;
  else H = r[19];
  let z = H,
    te;
  if (r[20] !== k || r[21] !== u || r[22] !== m || r[23] !== I || r[24] !== M || r[25] !== z || r[26] !== B || r[27] !== A || r[28] !== F || r[29] !== L) te = e(ac, {
    color: B,
    backgroundColor: z,
    bold: k,
    italic: M,
    underline: F,
    strikethrough: A,
    inverse: I,
    wrap: L,
    ...m,
    children: u
  }), r[20] = k, r[21] = u, r[22] = m, r[23] = I, r[24] = M, r[25] = z, r[26] = B, r[27] = A, r[28] = F, r[29] = L, r[30] = te;
  else te = r[30];
  return te
}
N();

function bt(o) {
  let h = w(5),
    {
      children: r,
      url: l,
      fallback: u,
      assumeSupport: d
    } = o,
    m = r ?? l;
  if (d ? Kbe() ?? !0 : Ny()) {
    let b;
    if (h[0] !== m || h[1] !== l) b = e(ac, {
      children: e("ink-link", {
        href: l,
        children: m
      })
    }), h[0] = m, h[1] = l, h[2] = b;
    else b = h[2];
    return b
  }
  const b = u ?? m;
  let y;
  if (h[3] !== b) y = e(ac, {
    children: b
  }), h[3] = b, h[4] = y;
  else y = h[4];
  return y
}

function Me(o) {
  if (o.length === 0) return null;
  let r = o[0];
  if (r === "c") return {
    type: "reset"
  };
  if (r === "7") return {
    type: "cursor",
    action: {
      type: "save"
    }
  };
  if (r === "8") return {
    type: "cursor",
    action: {
      type: "restore"
    }
  };
  if (r === "D") return {
    type: "scroll",
    action: {
      type: "index"
    }
  };
  if (r === "M") return {
    type: "scroll",
    action: {
      type: "reverseIndex"
    }
  };
  if (r === "E") return {
    type: "cursor",
    action: {
      type: "nextLine",
      count: 1
    }
  };
  if (r === "H") return null;
  if ("()".includes(r) && o.length >= 2) return null;
  return {
    type: "unknown",
    sequence: `\x1B${o}`
  }
}

function* _e(o) {
  let r = !0;
  for (let l = 0; l < o.length; l++)
    if (o.charCodeAt(l) >= 128) {
      r = !1;
      break
    } if (r) {
    for (let l = 0; l < o.length; l++) yield {
      value: o[l],
      width: 1
    };
    return
  }
  for (let {
      segment: l
    }
    of ya().segment(o)) {
    if (l.length === 1) {
      let u = l.charCodeAt(0);
      if (u >= 32 && u < 127) {
        yield {
          value: l,
          width: 1
        };
        continue
      }
    }
    yield {
      value: l,
      width: Math.max(1, ie(l))
    }
  }
}

function qt(o, r) {
  switch (o) {
    case _m.CURSOR_VISIBLE:
      return {
        type: "cursor", action: r ? {
          type: "show"
        } : {
          type: "hide"
        }
      };
    case _m.ALT_SCREEN_CLEAR:
    case _m.ALT_SCREEN:
      return {
        type: "mode", action: {
          type: "alternateScreen",
          enabled: r
        }
      };
    case _m.BRACKETED_PASTE:
      return {
        type: "mode", action: {
          type: "bracketedPaste",
          enabled: r
        }
      };
    case _m.MOUSE_NORMAL:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "normal" : "off"
        }
      };
    case _m.MOUSE_BUTTON:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "button" : "off"
        }
      };
    case _m.MOUSE_ANY:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "any" : "off"
        }
      };
    case _m.FOCUS_EVENTS:
      return {
        type: "mode", action: {
          type: "focusEvents",
          enabled: r
        }
      };
    default:
      return null
  }
}

function Xt(o) {
  let r = o.slice(2);
  if (r.length === 0) return null;
  let l = r.charCodeAt(r.length - 1),
    u = r.slice(0, -1),
    d = "",
    m = u,
    f = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], m = u.slice(1);
  let h = m.charCodeAt(m.length - 1);
  if (m.length > 0 && !(h >= 48 && h <= 59)) {
    let C = m.match(/([^0-9;:]+)$/);
    if (C) f = C[1], m = m.slice(0, -f.length)
  }
  if (l === YS.SGR && d === "") return {
    type: "sgr",
    params: m
  };
  let b = m === "" ? [] : m.split(/[;:]/).map((C) => C === "" ? 0 : parseInt(C, 10)),
    y = b[0] ?? 1,
    v = b[1] ?? 1;
  if (l === YS.CUU) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "up",
      count: y
    }
  };
  if (l === YS.CUD || l === YS.VPR) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "down",
      count: y
    }
  };
  if (l === YS.CUF || l === YS.HPR) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "forward",
      count: y
    }
  };
  if (l === YS.CUB) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "back",
      count: y
    }
  };
  if (l === YS.CNL) return {
    type: "cursor",
    action: {
      type: "nextLine",
      count: y
    }
  };
  if (l === YS.CPL) return {
    type: "cursor",
    action: {
      type: "prevLine",
      count: y
    }
  };
  if (l === YS.CHA || l === YS.HPA) return {
    type: "cursor",
    action: {
      type: "column",
      col: y
    }
  };
  if (l === YS.CUP || l === YS.HVP) return {
    type: "cursor",
    action: {
      type: "position",
      row: y,
      col: v
    }
  };
  if (l === YS.VPA) return {
    type: "cursor",
    action: {
      type: "row",
      row: y
    }
  };
  if (l === YS.ED) return {
    type: "erase",
    action: {
      type: "display",
      region: G$o[b[0] ?? 0] ?? "toEnd"
    }
  };
  if (l === YS.EL) return {
    type: "erase",
    action: {
      type: "line",
      region: V$o[b[0] ?? 0] ?? "toEnd"
    }
  };
  if (l === YS.ECH) return {
    type: "erase",
    action: {
      type: "chars",
      count: y
    }
  };
  if (l === YS.IL) return {
    type: "edit",
    action: {
      type: "insertLines",
      count: y
    }
  };
  if (l === YS.DL) return {
    type: "edit",
    action: {
      type: "deleteLines",
      count: y
    }
  };
  if (l === YS.ICH) return {
    type: "edit",
    action: {
      type: "insertChars",
      count: y
    }
  };
  if (l === YS.DCH) return {
    type: "edit",
    action: {
      type: "deleteChars",
      count: y
    }
  };
  if (l === YS.SU) return {
    type: "scroll",
    action: {
      type: "up",
      count: y
    }
  };
  if (l === YS.SD) return {
    type: "scroll",
    action: {
      type: "down",
      count: y
    }
  };
  if (l === YS.DECSTBM) return {
    type: "scroll",
    action: {
      type: "setRegion",
      top: y,
      bottom: b[1] ?? 0
    }
  };
  if (l === YS.SCOSC) return {
    type: "cursor",
    action: {
      type: "save"
    }
  };
  if (l === YS.SCORC) return {
    type: "cursor",
    action: {
      type: "restore"
    }
  };
  if (l === YS.DECSCUSR && f === " ") return {
    type: "cursor",
    action: {
      type: "style",
      ...ozr[y] ?? ozr[0]
    }
  };
  if (d === "?" && (l === YS.SM || l === YS.RM)) {
    let C = l === YS.SM,
      E = [];
    for (let P of b) {
      let k = qt(P, C);
      if (k) E.push(k)
    }
    return E.length ? E : {
      type: "unknown",
      sequence: o
    }
  }
  return {
    type: "unknown",
    sequence: o
  }
}

function Qt(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== Yne.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  if (r === 79) return "ss3";
  return "esc"
}
class Y {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? !1, this.tokenizer = WJ({
      forOutput: this.forOutput
    })
  }
  style = A_t();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, !1);
    return this.tail = "", o
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = A_t(), this.inLink = !1, this.linkUrl = void 0
  }
  feed(o) {
    let r = this.tokenizer.feed(o),
      l = [];
    for (let u = 0; u < r.length; u++) {
      let d = r[u];
      if (d.type === "text") {
        let m = this.tail + d.value;
        this.tail = "";
        let f = this.forOutput && u === r.length - 1;
        l.push(...this.processText(m, f))
      } else {
        if (this.tail) l.push(...this.processText(this.tail, !1)), this.tail = "";
        l.push(...this.processSequence(d.value))
      }
    }
    return l
  }
  processText(o, r) {
    let l = this.style;
    if (o.indexOf("\x07") === -1) {
      let m = [..._e(o)];
      return this.holdTail(m, r), m.length > 0 ? [{
        type: "text",
        graphemes: m,
        style: l
      }] : []
    }
    let u = [];
    for (let m of o.split("\x07")) {
      if (m) {
        let f = [..._e(m)];
        if (f.length > 0) u.push({
          type: "text",
          graphemes: f,
          style: l
        })
      }
      u.push({
        type: "bell"
      })
    }
    u.pop();
    let d = u.at(-1);
    if (d?.type === "text") {
      if (this.holdTail(d.graphemes, r), d.graphemes.length === 0) u.pop()
    }
    return u
  }
  holdTail(o, r) {
    if (!r || o.length === 0) return;
    let l = o.at(-1),
      u = l.value.charCodeAt(l.value.length - 1);
    if (u < 32) return;
    if (this.tail = l.value, o.pop(), u >= 55296 && u <= 56319 && o.length > 0) this.tail = o.pop().value + this.tail;
    while (o.length > 0 && this.tail.length <= 64) {
      let d = o.at(-1).value,
        m = d.charCodeAt(d.length - 1),
        f = m >= 56320 && m <= 57343 ? d.codePointAt(d.length - 2) : m;
      if (f === 8205 || f !== void 0 && f >= 127462 && f <= 127487) this.tail = d + this.tail, o.pop();
      else break
    }
  }
  processSequence(o) {
    switch (Qt(o)) {
      case "csi": {
        let l = Xt(o);
        if (!l) return [];
        if (Array.isArray(l)) return l;
        if (l.type === "sgr") return this.style = n9r(l.params, this.style), [];
        return [l]
      }
      case "osc": {
        let l = o.slice(2);
        if (l.endsWith("\x07")) l = l.slice(0, -1);
        else if (l.endsWith("\x1B\\")) l = l.slice(0, -2);
        let u = Zyo(l);
        if (u) {
          if (u.type === "link")
            if (u.action.type === "start") this.inLink = !0, this.linkUrl = u.action.url;
            else this.inLink = !1, this.linkUrl = void 0;
          return [u]
        }
        return []
      }
      case "esc": {
        let l = o.slice(1),
          u = Me(l);
        if (u?.type === "reset") this.style = A_t(), this.inLink = !1, this.linkUrl = void 0;
        return u ? [u] : []
      }
      case "ss3":
        return [{
          type: "unknown",
          sequence: o
        }];
      default:
        return [{
          type: "unknown",
          sequence: o
        }]
    }
  }
}
var Jr = Gp(function(r) {
  let v = w(21),
    {
      children: l,
      dimColor: u,
      italic: d,
      monochrome: m,
      wrap: f
    } = r;
  if (typeof l !== "string") {
    const h = !!u;
    const b = !!d;
    const y = String(l);
    let C;
    if (v[0] !== h || v[1] !== b || v[2] !== y || v[3] !== f) C = e(ac, {
      dim: h,
      italic: b,
      wrap: f,
      children: y
    }), v[0] = h, v[1] = b, v[2] = y, v[3] = f, v[4] = C;
    else C = v[4];
    return C
  }
  if (l === "") {
    return null
  }
  let h, b;
  if (v[5] !== l || v[6] !== u || v[7] !== d || v[8] !== m || v[9] !== f) {
    b = hn;
    P: {
      let E = Fe(l);
      if (E.length === 0) {
        b = null;
        break P
      }
      if (E.length === 1 && !Q(E[0].props) && E[0].props.hyperlink === void 0) {
        b = e(ac, {
          dim: !!u,
          italic: !!d,
          wrap: f,
          children: E[0].text
        });
        break P
      }
      let y;
      if (v[12] !== u || v[13] !== d || v[14] !== m) y = (k, M) => {
        let F = k.props.hyperlink;
        if (u) k.props.dim = !0;
        if (d) k.props.italic = !0;
        if (m) k.props.color = void 0;
        let A = Q(k.props) ? e(de, {
          color: k.props.color,
          backgroundColor: k.props.backgroundColor,
          dim: k.props.dim,
          bold: k.props.bold,
          italic: k.props.italic,
          underline: k.props.underline,
          strikethrough: k.props.strikethrough,
          inverse: k.props.inverse,
          children: k.text
        }, M) : k.text;
        return F ? e(bt, {
          url: F,
          children: A
        }, M) : A
      },
      v[12] = u,
      v[13] = d,
      v[14] = m,
      v[15] = y;
      else y = v[15];h = E.map(y)
    }
    v[5] = l, v[6] = u, v[7] = d, v[8] = m, v[9] = f, v[10] = h, v[11] = b
  } else h = v[10], b = v[11];
  if (b !== hn) return b;
  let I = h;
  const y = !!u,
    C = !!d;
  let L;
  if (v[16] !== I || v[17] !== y || v[18] !== C || v[19] !== f) L = e(ac, {
    dim: y,
    italic: C,
    wrap: f,
    children: I
  }), v[16] = I, v[17] = y, v[18] = C, v[19] = f, v[20] = L;
  else L = v[20];
  return L
});

function Fe(o) {
  let l = new Y().feed(o),
    u = [],
    d;
  for (let m of l) {
    if (m.type === "link") {
      if (m.action.type === "start") d = m.action.url;
      else d = void 0;
      continue
    }
    if (m.type === "text") {
      let f = m.graphemes.map((y) => y.value).join("");
      if (!f) continue;
      let h = oo(m.style);
      if (d) h.hyperlink = d;
      let b = u.at(-1);
      if (b && no(b.props, h)) b.text += f;
      else u.push({
        text: f,
        props: h
      })
    }
  }
  return u
}

function oo(o) {
  return {
    color: Le(o.fg),
    backgroundColor: Le(o.bg),
    dim: o.dim ? !0 : void 0,
    bold: o.bold ? !0 : void 0,
    italic: o.italic ? !0 : void 0,
    underline: o.underline !== "none" ? !0 : void 0,
    strikethrough: o.strikethrough ? !0 : void 0,
    inverse: o.inverse ? !0 : void 0,
    hyperlink: void 0
  }
}
var ro = {
  black: "ansi:black",
  red: "ansi:red",
  green: "ansi:green",
  yellow: "ansi:yellow",
  blue: "ansi:blue",
  magenta: "ansi:magenta",
  cyan: "ansi:cyan",
  white: "ansi:white",
  brightBlack: "ansi:blackBright",
  brightRed: "ansi:redBright",
  brightGreen: "ansi:greenBright",
  brightYellow: "ansi:yellowBright",
  brightBlue: "ansi:blueBright",
  brightMagenta: "ansi:magentaBright",
  brightCyan: "ansi:cyanBright",
  brightWhite: "ansi:whiteBright"
};

function Le(o) {
  switch (o.type) {
    case "named":
      return ro[o.name];
    case "indexed":
      return `ansi256(${o.index})`;
    case "rgb":
      return `rgb(${o.r},${o.g},${o.b})`;
    case "default":
      return
  }
}

function no(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink
}

function Q(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === !0 || o.bold === !0 || o.italic === !0 || o.underline === !0 || o.strikethrough === !0 || o.inverse === !0
}

function de(o) {
  let r = w(14),
    l, u, d, m;
  if (r[0] !== o)({
    bold: l,
    dim: d,
    children: u,
    ...m
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m;
  else l = r[1], u = r[2], d = r[3], m = r[4];
  if (d) {
    let f;
    if (r[5] !== u || r[6] !== m) f = e(ac, {
      ...m,
      dim: !0,
      children: u
    }), r[5] = u, r[6] = m, r[7] = f;
    else f = r[7];
    return f
  }
  if (l) {
    let f;
    if (r[8] !== u || r[9] !== m) f = e(ac, {
      ...m,
      bold: !0,
      children: u
    }), r[8] = u, r[9] = m, r[10] = f;
    else f = r[10];
    return f
  }
  let f;
  if (r[11] !== u || r[12] !== m) f = e(ac, {
    ...m,
    children: u
  }), r[11] = u, r[12] = m, r[13] = f;
  else f = r[13];
  return f
}
N();

function Ve(o) {
  let r = w(37),
    l, u, d, m, f, h, b;
  if (r[0] !== o)({
    onAction: d,
    tabIndex: h,
    autoFocus: l,
    mountSettleMs: b,
    children: u,
    ref: m,
    ...f
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m, r[5] = f, r[6] = h, r[7] = b;
  else l = r[1], u = r[2], d = r[3], m = r[4], f = r[5], h = r[6], b = r[7];
  let y = h === void 0 ? 0 : h,
    v = b === void 0 ? uIe : b,
    [C, E] = g(!1),
    [P, k] = g(!1),
    [M, F] = g(!1),
    A = Yt(),
    I = T(null),
    L;
  if (r[8] !== A) L = () => A.now(), r[8] = A, r[9] = L;
  else L = r[9];
  let [D] = g(L), W, U;
  if (r[10] === S) W = () => () => {
    I.current?.()
  }, U = [], r[10] = W, r[11] = U;
  else W = r[10], U = r[11];
  R(W, U);
  let B;
  if (r[12] !== A || r[13] !== d) B = (H) => {
    if (H.key === "return" || H.key === " ") H.preventDefault(), F(!0), d(), I.current?.(), I.current = A.setTimeout(() => F(!1), 100)
  }, r[12] = A, r[13] = d, r[14] = B;
  else B = r[14];
  let z = B,
    te;
  if (r[15] !== A || r[16] !== v || r[17] !== D || r[18] !== d) te = (ot) => {
    if (ot.isWindowActivation || A.now() - D < v) {
      ot.dropAsStray();
      return
    }
    d()
  }, r[15] = A, r[16] = v, r[17] = D, r[18] = d, r[19] = te;
  else te = r[19];
  let ve = te,
    rt;
  if (r[20] === S) rt = (_l) => E(!0), r[20] = rt;
  else rt = r[20];
  let $o = rt,
    nt;
  if (r[21] === S) nt = (Dl) => E(!1), r[21] = nt;
  else nt = r[21];
  let Zo = nt,
    it;
  if (r[22] === S) it = () => k(!0), r[22] = it;
  else it = r[22];
  let qo = it,
    st;
  if (r[23] === S) st = () => k(!1), r[23] = st;
  else st = r[23];
  let Xo = st,
    lt;
  if (r[24] !== u || r[25] !== M || r[26] !== C || r[27] !== P) {
    let Qo = {
      focused: C,
      hovered: P,
      active: M
    };
    lt = typeof u === "function" ? u(Qo) : u;
    r[24] = u, r[25] = M, r[26] = C, r[27] = P, r[28] = lt
  } else lt = r[28];
  let xe = lt,
    at;
  if (r[29] !== l || r[30] !== xe || r[31] !== ve || r[32] !== z || r[33] !== m || r[34] !== f || r[35] !== y) at = e(zl, {
    ref: m,
    tabIndex: y,
    autoFocus: l,
    onKeyDown: z,
    onClick: ve,
    onFocus: $o,
    onBlur: Zo,
    onMouseEnter: qo,
    onMouseLeave: Xo,
    ...f,
    children: xe
  }), r[29] = l, r[30] = xe, r[31] = ve, r[32] = z, r[33] = m, r[34] = f, r[35] = y, r[36] = at;
  else at = r[36];
  return at
}
var nL = Ve;
N();

function _t() {
  return Pe(Bvn)
}

function SA(o) {
  let {
    children: r,
    fallback: l
  } = o;
  return _t() ? l ?? null : r
}

function iVt(o, r) {
  if (typeof o === "function") {
    o(r);
    return
  }
  if (o) o.current = r
}
N();

function Yw({
  line: o,
  column: r,
  active: l,
  visible: u = !1
}) {
  let d = Pe(jvn),
    m = T(null),
    f = se((h) => {
      m.current = h
    }, []);
  return sn(() => {
    let h = m.current;
    if (l && h) d({
      relativeX: r,
      relativeY: o,
      node: h,
      visible: u
    });
    else d(null, h)
  }), sn(() => () => {
    d(null, m.current)
  }, [d]), f
}

function $e(o) {
  let r = w(30),
    l, u, d, m, f, h, b, y, v;
  if (r[0] !== o)({
    ref: f,
    autoFocus: b,
    disabled: y,
    onKeyDown: d,
    onPaste: m,
    caret: l,
    allowPrintableKeybindings: v,
    children: u,
    ...h
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m, r[5] = f, r[6] = h, r[7] = b, r[8] = y, r[9] = v;
  else l = r[1], u = r[2], d = r[3], m = r[4], f = r[5], h = r[6], b = r[7], y = r[8], v = r[9];
  let C = b === void 0 ? !1 : b,
    E = y === void 0 ? !1 : y,
    P = v === void 0 ? !1 : v;
  const k = l?.line ?? 0,
    M = l?.column ?? 0,
    F = l !== void 0,
    A = l?.visible;
  let I;
  if (r[10] !== k || r[11] !== M || r[12] !== F || r[13] !== A) I = {
    line: k,
    column: M,
    active: F,
    visible: A
  }, r[10] = k, r[11] = M, r[12] = F, r[13] = A, r[14] = I;
  else I = r[14];
  let L = Yw(I),
    D;
  if (r[15] !== L || r[16] !== f) D = (W) => {
    L(W), iVt(f, W)
  }, r[15] = L, r[16] = f, r[17] = D;
  else D = r[17];
  let U = D;
  if (E) {
    let B;
    if (r[18] !== u || r[19] !== U || r[20] !== h) B = e(zl, {
      ref: U,
      ...h,
      children: u
    }), r[18] = u, r[19] = U, r[20] = h, r[21] = B;
    else B = r[21];
    return B
  }
  const B = !P;
  let H;
  if (r[22] !== C || r[23] !== u || r[24] !== d || r[25] !== m || r[26] !== U || r[27] !== h || r[28] !== B) H = e(zl, {
    ref: U,
    tabIndex: 0,
    autoFocus: C,
    textEntry: B,
    onKeyDown: d,
    onPaste: m,
    ...h,
    children: u
  }), r[22] = C, r[23] = u, r[24] = d, r[25] = m, r[26] = U, r[27] = h, r[28] = B, r[29] = H;
  else H = r[29];
  return H
}
var w5 = $e;

function qC(o) {
  let u = w(4),
    {
      count: r
    } = o,
    l = r === void 0 ? 1 : r,
    d;
  if (u[0] !== l) d = `
`.repeat(l), u[0] = l, u[1] = d;
  else d = u[1];
  let m;
  if (u[2] !== d) m = e("ink-text", {
    children: d
  }), u[2] = d, u[3] = m;
  else m = u[3];
  return m
}

function Yc(o) {
  let r = w(9),
    l, u, d;
  if (r[0] !== o)({
    children: u,
    fromLeftEdge: d,
    ...l
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d;
  else l = r[1], u = r[2], d = r[3];
  const m = d ? "stretch" : void 0,
    f = d ? "from-left-edge" : !0;
  let h;
  if (r[4] !== l || r[5] !== u || r[6] !== m || r[7] !== f) h = e(zl, {
    alignSelf: m,
    ...l,
    noSelect: f,
    children: u
  }), r[4] = l, r[5] = u, r[6] = m, r[7] = f, r[8] = h;
  else h = r[8];
  return h
}

function Wbe(o) {
  let u = w(6),
    {
      lines: r,
      width: l
    } = o;
  if (r.length === 0) {
    return null
  }
  let d;
  if (u[0] !== r) d = r.join(`
`), u[0] = r, u[1] = d;
  else d = u[1];
  let m;
  if (u[2] !== r.length || u[3] !== d || u[4] !== l) m = e("ink-raw-ansi", {
    rawText: d,
    rawWidth: l,
    rawHeight: r.length
  }), u[2] = r.length, u[3] = d, u[4] = l, u[5] = m;
  else m = u[5];
  return m
}
N();
N();

function qe(o, r) {
  if (!o?.yogaNode || !r) return null;
  let l = o.yogaNode.getComputedHeight(),
    u = r.rows,
    d = o.yogaNode.getComputedTop(),
    {
      parentNode: m,
      yogaNode: f
    } = o;
  while (m) {
    if (m.yogaNode) d += m.yogaNode.getComputedTop(), f = m.yogaNode;
    if ((m.style.overflowY ?? m.style.overflow) === "scroll" && m.scrollTopRendered === void 0) return null;
    if (m.scrollTop) d -= FQ(m);
    m = m.parentNode
  }
  let h = f.getComputedHeight(),
    b = d + l,
    y = h > u ? 1 : 0,
    v = Math.max(0, h - u) + y,
    C = v + u;
  if (l === 0) return d >= v && d < C;
  return b > v && d < C
}

function HQ() {
  let o = Pe(Xw),
    r = T(null),
    l = T({
      isVisible: !0
    }),
    u = se((y) => {
      r.current = y
    }, []);

  function d() {
    let y = qe(r.current, o);
    if (y === null) return l.current.isVisible;
    if (y !== l.current.isVisible) l.current = {
      isVisible: y
    };
    return y
  }
  let m = T(d);
  m.current = d;
  let f = se(() => m.current(), []),
    h = T(o);
  h.current = o;
  let b = se(() => qe(r.current, h.current), []);
  return sn(() => {
    d()
  }), [u, l.current, f, b]
}
var Uo = 480;

function be(o) {
  return a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, Uo) : o
}

function Ta(o = 16) {
  let r = Pe(iS),
    [l, {
      isVisible: u
    }, d] = HQ(),
    m = mIe(),
    f = T(m),
    h = u;
  if (f.current !== m) f.current = m, h = d();
  let b = !!r && h && o !== null,
    y = o === null ? null : Math.ceil(be(o) / Xg) * Xg,
    v = T(0),
    C = At(b ? r.subscribeKeepAlive : gIe, () => b ? v.current = Math.max(v.current, Math.floor(r.now() / y) * y) : v.current);
  return [l, C]
}
N();
var Wo = () => Pe(Y_),
  ek = Wo;
N();

function pU(o, r) {
  let l = Pe(iS),
    u = T(o);
  u.current = o;
  let d = T(null),
    m = se((h) => () => d.current?.(), []);
  At(m, Qvn);
  let f = l?.setTimeout ?? yP;
  return X(() => {
    let h = (...b) => {
      d.current?.(), d.current = f(() => {
        d.current = null, u.current(...b)
      }, r)
    };
    return h.cancel = () => {
      d.current?.(), d.current = null
    }, h
  }, [f, r])
}
N();
var Xe = () => () => {};

function Pue() {
  let {
    focusManager: o,
    rootNode: r
  } = Pe(Y_), l = At(o?.subscribe ?? Xe, () => o?.activeElement ?? null);
  return X(() => ({
    activeElement: l,
    focusNext: () => {
      if (o && r) o.focusNext(r)
    },
    focusPrevious: () => {
      if (o && r) o.focusPrevious(r)
    },
    focusDirection: (u) => {
      if (o && r) return o.focusDirection(u, r);
      return !1
    },
    focus: (u) => o?.focus(u),
    blur: () => o?.blur(),
    subscribe: o?.subscribe ?? Xe
  }), [l, o, r])
}
N();
var Ho = () => () => {};

function VK(o) {
  let {
    focusManager: r
  } = Pe(Y_);
  return At(r?.subscribe ?? Ho, () => {
    let l = o.current,
      u = r?.activeElement;
    if (!l || !u) return !1;
    return rL(u, l)
  }, () => !1)
}
N();

function ta() {
  return Pe(Wvn) ?? jo
}

function jo() {
  return Date.now()
}
N();

function Hvn(o) {
  let r = Pe(iS),
    l = o === null ? null : Math.ceil(be(o) / Xg) * Xg,
    u = T(null),
    d = X(() => {
      if (!r || l === null) return gIe;
      return (m) => r.subscribeFollower(() => {
        u.current = r.now(), m()
      })
    }, [r, l]);
  return At(d, () => {
    if (!r || l === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / l) * l
  })
}

function Vs(o, r, l) {
  let u = T(o);
  u.current = o;
  let d = Pe(iS),
    m = l?.immediate ?? !1,
    f = T(null),
    h = X(() => !d || r === null ? (b) => (f.current = null, () => {}) : (b) => {
      if (m && f.current === null) u.current();
      return f.current = r, Iue(d, () => u.current(), r)
    }, [d, r, m]);
  At(h, Qvn)
}

function Iue(o, r, l) {
  let u = !1,
    d, m = () => {
      if (u) return;
      try {
        r()
      } finally {
        if (!u) d = o.setTimeout(m, l)
      }
    };
  return d = o.setTimeout(m, l), () => {
    u = !0, d()
  }
}
N();

function od(o) {
  let {
    subscribeLayout: r
  } = Pe(Y_), l = At(r, o), [, u] = RE((d) => d + 1, 0);
  return sn(() => {
    if (!Object.is(o(), l)) u()
  }), l
}
N();

function Fvn(o) {
  let {
    retainFinePointer: r
  } = Pe(Y_);
  R(() => o ? r() : void 0, [o, r])
}
N();

function Qe(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = 0,
    l = o;
  for (;;) {
    let u = l.parentNode;
    if (!u?.yogaNode || !l.yogaNode) return;
    r += l.yogaNode.getComputedTop();
    let d = u.parentNode;
    if (d?.yogaNode !== void 0 && (d.style.overflowY ?? d.style.overflow) === "scroll") return Ko(o, d, {
      top: u.yogaNode.getComputedTop() + r,
      itemTop: u.yogaNode.getComputedTop() + l.yogaNode.getComputedTop(),
      itemHeight: l.yogaNode.getComputedHeight()
    });
    l = u
  }
}

function Ko(o, r, l) {
  let {
    scrollTopRendered: u,
    yogaNode: d
  } = r, m = o.yogaNode?.getComputedHeight();
  if (u === void 0 || !d || !m) return;
  let f = d.getComputedBorder(1),
    h = d.getComputedHeight() - d.getComputedBorder(3),
    b = f + d.getComputedPadding(1),
    y = h - d.getComputedPadding(3),
    v = l.top - u,
    C = l.itemTop - u,
    E = C + l.itemHeight <= b || C >= y,
    P = Math.max(v, f),
    k = Math.min(v + m, h);
  return E || P >= k ? null : {
    first: P - v,
    last: k - v - 1,
    of: m
  }
}

function $vn(o, r) {
  let {
    subscribeFrames: l
  } = Pe(Y_), u = T(null), d = T({
    rows: r,
    lastRows: void 0,
    contentRows: void 0
  }), m = At(se((f) => o ? l(f) : () => {}, [o, l]), se(() => {
    if (!o) return;
    let f = u.current?.yogaNode?.getComputedHeight(),
      h = u.current?.childNodes.reduce((P, k) => P + (k.yogaNode?.getComputedHeight() ?? 0), 0),
      b = Qe(u.current),
      y = d.current,
      v = b === void 0 || b === y.rows || !!b && !!y.rows && b.first === y.rows.first && b.last === y.rows.last && b.of === y.rows.of,
      C = f === void 0 ? void 0 : h;
    if (!(v && C === y.contentRows)) d.current = {
      rows: v ? y.rows : b,
      lastRows: f || y.lastRows,
      contentRows: C
    };
    else if (f) y.lastRows = f;
    return d.current
  }, [o]));
  return [u, m?.rows, m?.lastRows, m?.contentRows]
}
N();

function KC() {
  Pe(ioe);
  let o = xs().get(process.stdout);
  return X(() => {
    if (!o) return {
      copySelection: () => "",
      copySelectionNoClear: () => "",
      getSelectedText: () => "",
      clearSelection: () => {},
      hasSelection: () => !1,
      getState: () => null,
      subscribe: () => () => {},
      moveFocus: () => {},
      setSelectionBgColor: () => {}
    };
    return {
      copySelection: () => o.copySelection(),
      copySelectionNoClear: () => o.copySelectionNoClear(),
      getSelectedText: () => o.getSelectedText(),
      clearSelection: () => o.clearTextSelection(),
      hasSelection: () => o.hasTextSelection(),
      getState: () => o.selection,
      subscribe: (r) => o.subscribeToSelectionChange(r),
      moveFocus: (r) => o.moveSelectionFocus(r),
      setSelectionBgColor: (r) => o.setSelectionBgColor(r)
    }
  }, [o])
}
var Vo = () => () => {},
  zo = () => !1;

function F8r() {
  Pe(ioe);
  let o = xs().get(process.stdout);
  return At(o ? o.subscribeToSelectionChange : Vo, o ? o.hasTextSelection : zo)
}
N();
var V = (o, r, l) => ({
    type: "rgb",
    r: o,
    g: r,
    b: l
  }),
  Go = {
    idle: {
      indicator: V(0, 215, 95),
      status: "Idle",
      statusColor: V(136, 136, 136)
    },
    busy: {
      indicator: V(255, 149, 0),
      status: "Working\u2026",
      statusColor: V(255, 149, 0)
    },
    waiting: {
      indicator: V(95, 135, 255),
      status: "Waiting",
      statusColor: V(95, 135, 255)
    }
  };

function aVt(o, r) {
  let l = Pe(Bj),
    u = T(null);
  R(() => {
    if (o === null) {
      if (u.current !== null && l && FPt()) l(bR(Ctn));
      u.current = null;
      return
    }
    if (u.current = o, !l || !FPt()) return;
    let d = Go[o],
      m = o === "idle" && r !== void 0 ? {
        ...d,
        status: r
      } : d;
    l(bR(e_o(m)))
  }, [o, r, l])
}
N();

function Oue(o) {
  let r = Pe(Bj);
  R(() => {
    if (o === null || !r) return;
    let l = wt(o);
    process.title = l
  }, [o, r])
}
N();
var Yo = () => !1;

function _r(o, r, l) {
  let u = Pe(iS),
    d = typeof o === "function",
    m = d ? o : null,
    f = d ? r : o,
    h = d ? void 0 : r,
    b = T(m);
  b.current = m;
  let y = T(null),
    v = u?.setTimeout ?? yP,
    C = X(() => {
      if (f === null) return gIe;
      let P = (k) => (y.current = null, k(), v(() => {
        if (y.current = P, d) b.current?.();
        else k()
      }, f));
      return P
    }, [v, f, d, h, ...l ?? []]),
    E = At(C, d ? Yo : () => y.current === C);
  if (!d) return E
}
var Jo = (o) => ({
    width: o.yogaNode?.getComputedWidth() ?? 0,
    height: o.yogaNode?.getComputedHeight() ?? 0
  }),
  Xi = Jo;

function zbe(o, r) {
  let l = 0,
    u = o;
  while (u !== void 0 && u !== r) l += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? l : -1
}

function Ce(o, r) {
  let l = ad(re, null, ad(mVt, null, ad(QJe, null, ad(Te, null, o))));
  return r !== void 0 ? ad(JJe, {
    ...r,
    children: l
  }) : l
}

function et() {
  return {
    nativeCursor: PH(),
    atlasRecorder: Ae()
  }
}
async function fU(o, r, l) {
  let u = l?.storageV5 !== void 0 ? C6e(l.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return le(Ce(o, u), r);
  return le(Ce(o, u), {
    ...et(),
    ...r
  })
}
var tt = new WeakMap;
async function d_t(o, r) {
  let l = await we({
      ...et(),
      ...o
    }),
    u = r?.storageV5 !== void 0 ? C6e(r.storageV5) : void 0,
    d = {
      ...l,
      render: (f) => l.render(Ce(f, u))
    },
    m = xs().get(o?.stdout ?? process.stdout);
  if (m) tt.set(m, d);
  return d
}

function Her(o = process.stdout) {
  let r = xs().get(o);
  return r && tt.get(r)
}
export {
  cO,
  Js,
  tL,
  yje,
  H8r,
  s,
  _je,
  n,
  bt,
  Jr,
  nL,
  _t,
  SA,
  iVt,
  Yw,
  w5,
  qC,
  Yc,
  Wbe,
  HQ,
  Ta,
  ek,
  pU,
  Pue,
  VK,
  ta,
  Hvn,
  Vs,
  Iue,
  od,
  Fvn,
  $vn,
  KC,
  F8r,
  aVt,
  Oue,
  _r,
  zbe,
  Xi,
  fU,
  d_t,
  Her
};
