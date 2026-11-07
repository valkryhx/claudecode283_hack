// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Lxe,
  XA
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  KJt
} from "B:/~BUN/root/chunk-apgsnbqk.js";
import {
  sw
} from "B:/~BUN/root/chunk-9957329g.js";
import {
  v
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  PRi,
  gls,
  Ii
} from "B:/~BUN/root/chunk-bfwh5k9e.js";
import {
  GPe,
  Sf,
  nh,
  pEt
} from "B:/~BUN/root/chunk-dwg8my6z.js";
import {
  o2t,
  B5n,
  ow
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  Wte,
  BA,
  $ta,
  Uta,
  b1s
} from "B:/~BUN/root/chunk-1w2vha2y.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  Rqe
} from "B:/~BUN/root/chunk-bkfncj77.js";
import {
  s2t
} from "B:/~BUN/root/chunk-waswqpwd.js";
import {
  Kd
} from "B:/~BUN/root/chunk-p2ta953m.js";
import {
  xFt
} from "B:/~BUN/root/chunk-sc660841.js";
import {
  Hzr,
  ost,
  pke,
  Dm,
  Uzr,
  ep,
  jzr,
  zzr,
  sst,
  Kj
} from "B:/~BUN/root/chunk-31b4g6te.js";
import {
  Dhn,
  b9s
} from "B:/~BUN/root/chunk-c0m1y3zd.js";
import {
  zb,
  VPe
} from "B:/~BUN/root/chunk-pnm80mz6.js";
import {
  wQn
} from "B:/~BUN/root/chunk-dsgmffrq.js";
import {
  hke,
  XN,
  KPe,
  Yzr,
  jC
} from "B:/~BUN/root/chunk-emd6eb45.js";
import {
  l6e,
  TS
} from "B:/~BUN/root/chunk-y781qzhe.js";
import {
  e
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  Lg
} from "B:/~BUN/root/chunk-e7wx2kwq.js";
import {
  Jt,
  mu,
  My,
  ue,
  ve,
  O,
  Zt,
  Z,
  G_,
  A,
  y,
  At,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  Sa
} from "B:/~BUN/root/chunk-63176a0t.js";
import {
  ce
} from "B:/~BUN/root/chunk-w7vsj9wa.js";
import {
  w,
  Pn
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();

function pt() {
  return {
    latched: null
  }
}
var _hn = Jt(null);

function Ce() {
  return Kd() ? "fullscreen" : "inline"
}

function te(o) {
  let p = S(3),
    {
      value: r,
      children: a
    } = o,
    [u] = y(pt);
  const d = r ?? u;
  let m;
  if (p[0] !== a || p[1] !== d) m = e(_hn.Provider, {
    value: d,
    children: a
  }), p[0] = a, p[1] = d, p[2] = m;
  else m = p[2];
  return m
}

function FM() {
  let r = S(2);
  const o = ve(_hn);
  let a;
  if (r[0] !== o) a = Izr(o), r[0] = o, r[1] = a;
  else a = r[1];
  return a
}

function Izr(o) {
  if (o === null) return Ce();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = Ce();
  return o.latched
}

function oa() {
  return FM() === "fullscreen"
}
j();

function xe() {
  return {
    markdownTokens: new Map,
    highlightedCode: new Map,
    structuredDiff: new WeakMap,
    parsedToolResults: new WeakMap
  }
}
var Re = Jt(null);

function ke({
  children: o
}) {
  let r = A(null);
  return r.current ??= xe(), e(Re.Provider, {
    value: r.current,
    children: o
  })
}

function LY() {
  let o = ve(Re),
    r = A(null);
  if (o) return o;
  return r.current ??= xe(), r.current
}

function bhn(o, r, a) {
  if (!r) return;
  if (typeof a !== "object" || a === null) return r.safeParse(a);
  let u = o.parsedToolResults.get(a);
  if (u && mt(u, r)) return u.parsed;
  let d = r.safeParse(a);
  return o.parsedToolResults.set(a, {
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
  writeSync as Se
} from "fs";

function ft() {
  if (!process.stdout.isTTY) return;
  try {
    wQn();
    let o = Ii().get(process.stdout);
    if (Se(1, (o?.modes.reset("mousePixels") ?? "") + VPe), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount()
    } catch {}
    if (o?.drainStdin(), o?.detachForShutdown(), zzr(o?.modes ?? new pEt, (r) => Se(1, r)), !i.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) process.title = ""
  } catch {}
}

function yt() {
  Ii().get(process.stdout)?.drainStdin()
}
var oe = {
  cleanupTerminalModes: ft,
  drainStdin: yt
};
var gt = (o, r) => {
    let a = vt(r),
      u = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: !0,
        patchConsole: !0,
        ...a
      },
      d = xt(u.stdout, () => new sst(u));
    return d.render(o), {
      rerender: d.render,
      unmount() {
        d.unmount()
      },
      waitUntilExit: d.waitUntilExit,
      cleanup: () => Ii().delete(u.stdout)
    }
  },
  bt = async (o, r) => {
    let a = Ii();
    while (a.pendingStandaloneRender) await a.pendingStandaloneRender;
    await Promise.resolve();
    let u = gt(o, r);
    return t(`[render] first ink render: ${Math.round(process.uptime()*1000)}ms since process start`), u
  }, re = bt;
async function Ee(o = {}) {
  await Promise.resolve();
  let r = Ii();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let a = Ct(o, "react");
  return {
    render: (u) => a.render(u),
    unmount: () => a.unmount(),
    waitUntilExit: () => a.waitUntilExit()
  }
}

function Ct({
  stdout: o = process.stdout,
  stdin: r = process.stdin,
  stderr: a = process.stderr,
  exitOnCtrlC: u = !0,
  patchConsole: d = !0,
  onFrame: p,
  nativeCursor: m,
  isScreenReaderEnabled: b,
  atlasRecorder: C
}, h) {
  let R = Ii();
  gls(oe);
  let x = new sst({
    stdout: o,
    stdin: r,
    stderr: a,
    exitOnCtrlC: u,
    patchConsole: d,
    onFrame: p,
    nativeCursor: m,
    isScreenReaderEnabled: b,
    atlasRecorder: C
  });
  if (h === "react") R.set(o, x);
  else R.treeRoots.set(o, x);
  return x
}
var vt = (o = {}) => {
    if (o instanceof ht) return {
      stdout: o,
      stdin: process.stdin
    };
    return o
  },
  xt = (o, r) => {
    let a = Ii(),
      u = a.get(o);
    if (!u) gls(oe), u = r(), a.set(o, u);
    return u
  };

function e9s() {
  let o = Ii().get(process.stdout);
  if (!o) return;
  Rt(o.getStylePool())
}

function Te() {
  let o = v("tengu_xterm_atlas_reset", !0),
    r = v("tengu_basalt_meadow", !1);
  return {
    autoResetEnabled: o,
    recording: o || r
  }
}

function Rt(o) {
  let r = o.atlasRecorder;
  if (r.debugTainted) return;
  if (!v("tengu_basalt_meadow", !1)) {
    if (!r.autoResetEnabled) r.recording = !1;
    return
  }
  r.recording = !0;
  let u = r.proactiveResetStats;
  if (l("tengu_render_glyph_cardinality", {
      stylepool_styles: o.size,
      stylepool_overflowed: o.overflowed,
      atlas_glyph_keys: r.size,
      atlas_keys_saturated: r.saturated,
      term_program: f(kt()),
      is_xtermjs: sw(),
      session_age_bucket: f(St(Lxe())),
      proactive_reset_count: u.count,
      proactive_reset_last_reason: f(u.lastReason)
    }), !r.stylePoolHealthyReported) r.stylePoolHealthyReported = !0, g("render_stylepool");
  if (o.overflowed && !r.stylePoolCapHitReported) r.stylePoolCapHitReported = !0, c("render_stylepool", "cap_hit")
}

function kt() {
  if (i.CURSOR_TRACE_ID !== void 0) return "cursor";
  switch (i.TERM_PROGRAM) {
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

function St(o) {
  let r = o / 60000;
  if (r < 5) return "lt_5m";
  if (r < 30) return "5m_30m";
  if (r < 120) return "30m_2h";
  if (r < 480) return "2h_8h";
  return "gt_8h"
}

function W(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return KJt(o) ? r[o] : void 0
}

function Et(o) {
  let r = ow();
  return e(Sf, {
    ...o,
    borderColor: W(o.borderColor, r),
    borderTopColor: W(o.borderTopColor, r),
    borderBottomColor: W(o.borderBottomColor, r),
    borderLeftColor: W(o.borderLeftColor, r),
    borderRightColor: W(o.borderRightColor, r),
    backgroundColor: W(o.backgroundColor, r)
  })
}
var s = Et;
j();
j();
var oEt = Jt(!1);

function G(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return KJt(o) ? r[o] : void 0
}

function n(o) {
  let r = S(32),
    a, u, d, p, m, b, C, h, R, x, E;
  if (r[0] !== o)({
    color: d,
    backgroundColor: a,
    dimColor: m,
    bold: b,
    italic: C,
    underline: h,
    strikethrough: R,
    inverse: x,
    wrap: E,
    children: u,
    ...p
  } = o), r[0] = o, r[1] = a, r[2] = u, r[3] = d, r[4] = p, r[5] = m, r[6] = b, r[7] = C, r[8] = h, r[9] = R, r[10] = x, r[11] = E;
  else a = r[1], u = r[2], d = r[3], p = r[4], m = r[5], b = r[6], C = r[7], h = r[8], R = r[9], x = r[10], E = r[11];
  let T = m === void 0 ? !1 : m,
    k = b === void 0 ? !1 : b,
    M = C === void 0 ? !1 : C,
    L = h === void 0 ? !1 : h,
    P = R === void 0 ? !1 : R,
    I = x === void 0 ? !1 : x,
    F = E === void 0 ? "wrap" : E,
    _ = ow(),
    H = ve(oEt),
    B;
  if (r[12] !== d || r[13] !== T || r[14] !== H || r[15] !== _) B = T && !H ? _.inactive : G(d, _), r[12] = d, r[13] = T, r[14] = H, r[15] = _, r[16] = B;
  else B = r[16];
  let D = B,
    U;
  if (r[17] !== a || r[18] !== _) U = G(a, _), r[17] = a, r[18] = _, r[19] = U;
  else U = r[19];
  let K = U;
  const z = T && !H ? D : void 0;
  let ee;
  if (r[20] !== k || r[21] !== u || r[22] !== p || r[23] !== I || r[24] !== M || r[25] !== K || r[26] !== D || r[27] !== P || r[28] !== z || r[29] !== L || r[30] !== F) ee = e(ep, {
    color: D,
    backgroundColor: K,
    bold: k,
    faintInk: z,
    italic: M,
    underline: L,
    strikethrough: P,
    inverse: I,
    wrap: F,
    ...p,
    children: u
  }), r[20] = k, r[21] = u, r[22] = p, r[23] = I, r[24] = M, r[25] = K, r[26] = D, r[27] = P, r[28] = z, r[29] = L, r[30] = F, r[31] = ee;
  else ee = r[31];
  return ee
}
j();
j();

function sn(o) {
  let m = S(7),
    {
      children: r,
      url: a,
      fallback: u,
      assumeSupport: d
    } = o,
    p = r ?? a,
    b;
  if (m[0] !== d) b = () => d ? l6e() ?? !0 : TS(), m[0] = d, m[1] = b;
  else b = m[1];
  if (At(XA, b)) {
    let h;
    if (m[2] !== p || m[3] !== a) h = e(ep, {
      children: e("ink-link", {
        href: a,
        children: p
      })
    }), m[2] = p, m[3] = a, m[4] = h;
    else h = m[4];
    return h
  }
  const h = u ?? p;
  let R;
  if (m[5] !== h) R = e(ep, {
    children: h
  }), m[5] = h, m[6] = R;
  else R = m[6];
  return R
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
  for (let a = 0; a < o.length; a++)
    if (o.charCodeAt(a) >= 128) {
      r = !1;
      break
    } if (r) {
    for (let a = 0; a < o.length; a++) yield {
      value: o[a],
      width: 1
    };
    return
  }
  for (let {
      segment: a
    }
    of Sa().segment(o)) {
    if (a.length === 1) {
      let u = a.charCodeAt(0);
      if (u >= 32 && u < 127) {
        yield {
          value: a,
          width: 1
        };
        continue
      }
    }
    yield {
      value: a,
      width: Math.max(1, ce(a))
    }
  }
}

function Vt(o, r) {
  switch (o) {
    case zb.CURSOR_VISIBLE:
      return {
        type: "cursor", action: r ? {
          type: "show"
        } : {
          type: "hide"
        }
      };
    case zb.ALT_SCREEN_CLEAR:
    case zb.ALT_SCREEN:
      return {
        type: "mode", action: {
          type: "alternateScreen",
          enabled: r
        }
      };
    case zb.BRACKETED_PASTE:
      return {
        type: "mode", action: {
          type: "bracketedPaste",
          enabled: r
        }
      };
    case zb.MOUSE_NORMAL:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "normal" : "off"
        }
      };
    case zb.MOUSE_BUTTON:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "button" : "off"
        }
      };
    case zb.MOUSE_ANY:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "any" : "off"
        }
      };
    case zb.FOCUS_EVENTS:
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

function Kt(o) {
  let r = o.slice(2);
  if (r.length === 0) return null;
  let a = r.charCodeAt(r.length - 1),
    u = r.slice(0, -1),
    d = "",
    p = u,
    m = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], p = u.slice(1);
  let b = p.charCodeAt(p.length - 1);
  if (p.length > 0 && !(b >= 48 && b <= 59)) {
    let x = p.match(/([^0-9;:]+)$/);
    if (x) m = x[1], p = p.slice(0, -m.length)
  }
  if (a === BA.SGR && d === "") return {
    type: "sgr",
    params: p
  };
  let C = p === "" ? [] : p.split(/[;:]/).map((x) => x === "" ? 0 : parseInt(x, 10)),
    h = C[0] ?? 1,
    R = C[1] ?? 1;
  if (a === BA.CUU) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "up",
      count: h
    }
  };
  if (a === BA.CUD || a === BA.VPR) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "down",
      count: h
    }
  };
  if (a === BA.CUF || a === BA.HPR) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "forward",
      count: h
    }
  };
  if (a === BA.CUB) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "back",
      count: h
    }
  };
  if (a === BA.CNL) return {
    type: "cursor",
    action: {
      type: "nextLine",
      count: h
    }
  };
  if (a === BA.CPL) return {
    type: "cursor",
    action: {
      type: "prevLine",
      count: h
    }
  };
  if (a === BA.CHA || a === BA.HPA) return {
    type: "cursor",
    action: {
      type: "column",
      col: h
    }
  };
  if (a === BA.CUP || a === BA.HVP) return {
    type: "cursor",
    action: {
      type: "position",
      row: h,
      col: R
    }
  };
  if (a === BA.VPA) return {
    type: "cursor",
    action: {
      type: "row",
      row: h
    }
  };
  if (a === BA.ED) return {
    type: "erase",
    action: {
      type: "display",
      region: $ta[C[0] ?? 0] ?? "toEnd"
    }
  };
  if (a === BA.EL) return {
    type: "erase",
    action: {
      type: "line",
      region: Uta[C[0] ?? 0] ?? "toEnd"
    }
  };
  if (a === BA.ECH) return {
    type: "erase",
    action: {
      type: "chars",
      count: h
    }
  };
  if (a === BA.IL) return {
    type: "edit",
    action: {
      type: "insertLines",
      count: h
    }
  };
  if (a === BA.DL) return {
    type: "edit",
    action: {
      type: "deleteLines",
      count: h
    }
  };
  if (a === BA.ICH) return {
    type: "edit",
    action: {
      type: "insertChars",
      count: h
    }
  };
  if (a === BA.DCH) return {
    type: "edit",
    action: {
      type: "deleteChars",
      count: h
    }
  };
  if (a === BA.SU) return {
    type: "scroll",
    action: {
      type: "up",
      count: h
    }
  };
  if (a === BA.SD) return {
    type: "scroll",
    action: {
      type: "down",
      count: h
    }
  };
  if (a === BA.DECSTBM) return {
    type: "scroll",
    action: {
      type: "setRegion",
      top: h,
      bottom: C[1] ?? 0
    }
  };
  if (a === BA.SCOSC) return {
    type: "cursor",
    action: {
      type: "save"
    }
  };
  if (a === BA.SCORC) return {
    type: "cursor",
    action: {
      type: "restore"
    }
  };
  if (a === BA.DECSCUSR && m === " ") return {
    type: "cursor",
    action: {
      type: "style",
      ...b1s[h] ?? b1s[0]
    }
  };
  if (d === "?" && (a === BA.SM || a === BA.RM)) {
    let x = a === BA.SM,
      E = [];
    for (let T of C) {
      let k = Vt(T, x);
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

function zt(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== Wte.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  return "esc"
}
class Shn {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? !1, this.tokenizer = Rqe({
      stringsEndAtLineFeed: o?.stringsEndAtLineFeed,
      intermediatesRunToFinal: this.forOutput
    })
  }
  style = Dhn();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, !1);
    return this.tail = "", o
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = Dhn(), this.inLink = !1, this.linkUrl = void 0
  }
  feed(o) {
    let r = this.tokenizer.feed(o),
      a = [];
    for (let u = 0; u < r.length; u++) {
      let d = r[u];
      if (d.type === "text") {
        let p = this.tail + d.value;
        this.tail = "";
        let m = this.forOutput && u === r.length - 1;
        a.push(...this.processText(p, m))
      } else {
        if (this.tail) a.push(...this.processText(this.tail, !1)), this.tail = "";
        a.push(...this.processSequence(d.value))
      }
    }
    return a
  }
  processText(o, r) {
    let a = this.style;
    if (o.indexOf("\x07") === -1) {
      let p = [..._e(o)];
      return this.holdTail(p, r), p.length > 0 ? [{
        type: "text",
        graphemes: p,
        style: a
      }] : []
    }
    let u = [];
    for (let p of o.split("\x07")) {
      if (p) {
        let m = [..._e(p)];
        if (m.length > 0) u.push({
          type: "text",
          graphemes: m,
          style: a
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
    let a = o.at(-1),
      u = a.value.charCodeAt(a.value.length - 1);
    if (u < 32) return;
    if (this.tail = a.value, o.pop(), u >= 55296 && u <= 56319 && o.length > 0) this.tail = o.pop().value + this.tail;
    while (o.length > 0 && this.tail.length <= 64) {
      let d = o.at(-1).value,
        p = d.charCodeAt(d.length - 1),
        m = p >= 56320 && p <= 57343 ? d.codePointAt(d.length - 2) : p;
      if (m === 8205 || m !== void 0 && m >= 127462 && m <= 127487) this.tail = d + this.tail, o.pop();
      else break
    }
  }
  processSequence(o) {
    switch (zt(o)) {
      case "csi": {
        let a = Kt(o);
        if (!a) return [];
        if (Array.isArray(a)) return a;
        if (a.type === "sgr") return this.style = b9s(a.params, this.style), [];
        return [a]
      }
      case "osc": {
        let a = o.slice(2);
        if (a.endsWith("\x07")) a = a.slice(0, -1);
        else if (a.endsWith("\x1B\\")) a = a.slice(0, -2);
        let u = PRi(a);
        if (u) {
          if (u.type === "link")
            if (u.action.type === "start") this.inLink = !0, this.linkUrl = u.action.url;
            else this.inLink = !1, this.linkUrl = void 0;
          return [u]
        }
        return []
      }
      case "esc": {
        let a = o.slice(1),
          u = Me(a);
        if (u?.type === "reset") this.style = Dhn(), this.inLink = !1, this.linkUrl = void 0;
        return u ? [u] : []
      }
      default:
        return [{
          type: "unknown",
          sequence: o
        }]
    }
  }
}
var qs = My(function(r) {
  let R = S(21),
    {
      children: a,
      dimColor: u,
      italic: d,
      monochrome: p,
      wrap: m
    } = r;
  if (typeof a !== "string") {
    const b = !!u;
    const C = !!d;
    const h = String(a);
    let x;
    if (R[0] !== b || R[1] !== C || R[2] !== h || R[3] !== m) x = e(ep, {
      dim: b,
      italic: C,
      wrap: m,
      children: h
    }), R[0] = b, R[1] = C, R[2] = h, R[3] = m, R[4] = x;
    else x = R[4];
    return x
  }
  if (a === "") {
    return null
  }
  let b, C;
  if (R[5] !== a || R[6] !== u || R[7] !== d || R[8] !== p || R[9] !== m) {
    C = Pn;
    T: {
      let E = Fe(a);
      if (E.length === 0) {
        C = null;
        break T
      }
      if (E.length === 1 && !X(E[0].props) && E[0].props.hyperlink === void 0) {
        C = e(ep, {
          dim: !!u,
          italic: !!d,
          wrap: m,
          children: E[0].text
        });
        break T
      }
      let h;
      if (R[12] !== u || R[13] !== d || R[14] !== p) h = (k, M) => {
        let L = k.props.hyperlink;
        if (u) k.props.dim = !0;
        if (d) k.props.italic = !0;
        if (p) k.props.color = void 0;
        let P = X(k.props) ? e(ae, {
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
        return L ? e(sn, {
          url: L,
          children: P
        }, M) : P
      },
      R[12] = u,
      R[13] = d,
      R[14] = p,
      R[15] = h;
      else h = R[15];b = E.map(h)
    }
    R[5] = a, R[6] = u, R[7] = d, R[8] = p, R[9] = m, R[10] = b, R[11] = C
  } else b = R[10], C = R[11];
  if (C !== Pn) return C;
  let I = b;
  const h = !!u,
    x = !!d;
  let F;
  if (R[16] !== I || R[17] !== h || R[18] !== x || R[19] !== m) F = e(ep, {
    dim: h,
    italic: x,
    wrap: m,
    children: I
  }), R[16] = I, R[17] = h, R[18] = x, R[19] = m, R[20] = F;
  else F = R[20];
  return F
});

function Fe(o) {
  let a = new Shn({
      stringsEndAtLineFeed: !0
    }).feed(o),
    u = [],
    d;
  for (let p of a) {
    if (p.type === "link") {
      if (p.action.type === "start") d = p.action.url;
      else d = void 0;
      continue
    }
    if (p.type === "text") {
      let m = p.graphemes.map((h) => h.value).join("");
      if (!m) continue;
      let b = $t(p.style);
      if (d) b.hyperlink = d;
      let C = u.at(-1);
      if (C && Xt(C.props, b)) C.text += m;
      else u.push({
        text: m,
        props: b
      })
    }
  }
  return u
}

function $t(o) {
  return {
    color: Be(o.fg),
    backgroundColor: Be(o.bg),
    dim: o.dim ? !0 : void 0,
    bold: o.bold ? !0 : void 0,
    italic: o.italic ? !0 : void 0,
    underline: o.underline !== "none" ? !0 : void 0,
    strikethrough: o.strikethrough ? !0 : void 0,
    inverse: o.inverse ? !0 : void 0,
    hyperlink: void 0
  }
}
var qt = {
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

function Be(o) {
  switch (o.type) {
    case "named":
      return qt[o.name];
    case "indexed":
      return `ansi256(${o.index})`;
    case "rgb":
      return `rgb(${o.r},${o.g},${o.b})`;
    case "default":
      return
  }
}

function Xt(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink
}

function X(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === !0 || o.bold === !0 || o.italic === !0 || o.underline === !0 || o.strikethrough === !0 || o.inverse === !0
}

function ae(o) {
  let r = S(14),
    a, u, d, p;
  if (r[0] !== o)({
    bold: a,
    dim: d,
    children: u,
    ...p
  } = o), r[0] = o, r[1] = a, r[2] = u, r[3] = d, r[4] = p;
  else a = r[1], u = r[2], d = r[3], p = r[4];
  if (d) {
    let m;
    if (r[5] !== u || r[6] !== p) m = e(ep, {
      ...p,
      dim: !0,
      children: u
    }), r[5] = u, r[6] = p, r[7] = m;
    else m = r[7];
    return m
  }
  if (a) {
    let m;
    if (r[8] !== u || r[9] !== p) m = e(ep, {
      ...p,
      bold: !0,
      children: u
    }), r[8] = u, r[9] = p, r[10] = m;
    else m = r[10];
    return m
  }
  let m;
  if (r[11] !== u || r[12] !== p) m = e(ep, {
    ...p,
    children: u
  }), r[11] = u, r[12] = p, r[13] = m;
  else m = r[13];
  return m
}
j();
j();

function Rn() {
  let o = ve(jC);
  if (!o) throw Error("useClock must be used within a ClockProvider");
  return o
}

function Ke(o) {
  let r = S(37),
    a, u, d, p, m, b, C;
  if (r[0] !== o)({
    onAction: d,
    tabIndex: b,
    autoFocus: a,
    mountSettleMs: C,
    children: u,
    ref: p,
    ...m
  } = o), r[0] = o, r[1] = a, r[2] = u, r[3] = d, r[4] = p, r[5] = m, r[6] = b, r[7] = C;
  else a = r[1], u = r[2], d = r[3], p = r[4], m = r[5], b = r[6], C = r[7];
  let h = b === void 0 ? 0 : b,
    R = C === void 0 ? ost : C,
    [x, E] = y(!1),
    [T, k] = y(!1),
    [M, L] = y(!1),
    P = Rn(),
    I = A(null),
    F;
  if (r[8] !== P) F = () => P.now(), r[8] = P, r[9] = F;
  else F = r[9];
  let [_] = y(F), H, B;
  if (r[10] === w) H = () => () => {
    I.current?.()
  }, B = [], r[10] = H, r[11] = B;
  else H = r[10], B = r[11];
  O(H, B);
  let D;
  if (r[12] !== P || r[13] !== d) D = (U) => {
    if (U.key === "return" || U.key === " ") U.preventDefault(), L(!0), d(), I.current?.(), I.current = P.setTimeout(() => L(!1), 100)
  }, r[12] = P, r[13] = d, r[14] = D;
  else D = r[14];
  let K = D,
    z;
  if (r[15] !== P || r[16] !== R || r[17] !== _ || r[18] !== d) z = (ee) => {
    if (ee.isWindowActivation || P.now() - _ < R) {
      ee.dropAsStray();
      return
    }
    d()
  }, r[15] = P, r[16] = R, r[17] = _, r[18] = d, r[19] = z;
  else z = r[19];
  let ge = z,
    rt;
  if (r[20] === w) rt = (cl) => E(!0), r[20] = rt;
  else rt = r[20];
  let Wo = rt,
    nt;
  if (r[21] === w) nt = (dl) => E(!1), r[21] = nt;
  else nt = r[21];
  let jo = nt,
    it;
  if (r[22] === w) it = () => k(!0), r[22] = it;
  else it = r[22];
  let Vo = it,
    st;
  if (r[23] === w) st = () => k(!1), r[23] = st;
  else st = r[23];
  let Ko = st,
    lt;
  if (r[24] !== u || r[25] !== M || r[26] !== x || r[27] !== T) {
    let zo = {
      focused: x,
      hovered: T,
      active: M
    };
    lt = typeof u === "function" ? u(zo) : u;
    r[24] = u, r[25] = M, r[26] = x, r[27] = T, r[28] = lt
  } else lt = r[28];
  let be = lt,
    at;
  if (r[29] !== a || r[30] !== be || r[31] !== ge || r[32] !== K || r[33] !== p || r[34] !== m || r[35] !== h) at = e(Sf, {
    ref: p,
    tabIndex: h,
    autoFocus: a,
    onKeyDown: K,
    onClick: ge,
    onFocus: Wo,
    onBlur: jo,
    onMouseEnter: Vo,
    onMouseLeave: Ko,
    hoverFollowsPaint: !0,
    ...m,
    children: be
  }), r[29] = a, r[30] = be, r[31] = ge, r[32] = K, r[33] = p, r[34] = m, r[35] = h, r[36] = at;
  else at = r[36];
  return at
}
var L0 = Ke;
j();

function ot() {
  return ve(Hzr)
}

function Gj(o) {
  let {
    children: r,
    fallback: a
  } = o;
  return ot() ? a ?? null : r
}

function H5n(o, r) {
  if (typeof o === "function") {
    o(r);
    return
  }
  if (o) o.current = r
}
j();

function BC({
  line: o,
  column: r,
  active: a,
  visible: u = !1
}) {
  let d = ve(Uzr),
    p = A(null),
    m = ue((b) => {
      p.current = b
    }, []);
  return Zt(() => {
    let b = p.current;
    if (a && b) d({
      relativeX: r,
      relativeY: o,
      node: b,
      visible: u
    });
    else d(null, b)
  }), Zt(() => () => {
    d(null, p.current)
  }, [d]), m
}

function $e(o) {
  let r = S(30),
    a, u, d, p, m, b, C, h, R;
  if (r[0] !== o)({
    ref: m,
    autoFocus: C,
    disabled: h,
    onKeyDown: d,
    onPaste: p,
    caret: a,
    allowPrintableKeybindings: R,
    children: u,
    ...b
  } = o), r[0] = o, r[1] = a, r[2] = u, r[3] = d, r[4] = p, r[5] = m, r[6] = b, r[7] = C, r[8] = h, r[9] = R;
  else a = r[1], u = r[2], d = r[3], p = r[4], m = r[5], b = r[6], C = r[7], h = r[8], R = r[9];
  let x = C === void 0 ? !1 : C,
    E = h === void 0 ? !1 : h,
    T = R === void 0 ? !1 : R;
  const k = a?.line ?? 0,
    M = a?.column ?? 0,
    L = a !== void 0,
    P = a?.visible;
  let I;
  if (r[10] !== k || r[11] !== M || r[12] !== L || r[13] !== P) I = {
    line: k,
    column: M,
    active: L,
    visible: P
  }, r[10] = k, r[11] = M, r[12] = L, r[13] = P, r[14] = I;
  else I = r[14];
  let F = BC(I),
    _;
  if (r[15] !== F || r[16] !== m) _ = (H) => {
    F(H), H5n(m, H)
  }, r[15] = F, r[16] = m, r[17] = _;
  else _ = r[17];
  let B = _;
  if (E) {
    let D;
    if (r[18] !== u || r[19] !== B || r[20] !== b) D = e(Sf, {
      ref: B,
      ...b,
      children: u
    }), r[18] = u, r[19] = B, r[20] = b, r[21] = D;
    else D = r[21];
    return D
  }
  const D = !T;
  let U;
  if (r[22] !== x || r[23] !== u || r[24] !== d || r[25] !== p || r[26] !== B || r[27] !== b || r[28] !== D) U = e(Sf, {
    ref: B,
    tabIndex: 0,
    autoFocus: x,
    textEntry: D,
    onKeyDown: d,
    onPaste: p,
    ...b,
    children: u
  }), r[22] = x, r[23] = u, r[24] = d, r[25] = p, r[26] = B, r[27] = b, r[28] = D, r[29] = U;
  else U = r[29];
  return U
}
var che = $e;

function KN(o) {
  let u = S(4),
    {
      count: r
    } = o,
    a = r === void 0 ? 1 : r,
    d;
  if (u[0] !== a) d = `
`.repeat(a), u[0] = a, u[1] = d;
  else d = u[1];
  let p;
  if (u[2] !== d) p = e("ink-text", {
    children: d
  }), u[2] = d, u[3] = p;
  else p = u[3];
  return p
}

function Gp(o) {
  let r = S(9),
    a, u, d;
  if (r[0] !== o)({
    children: u,
    fromLeftEdge: d,
    ...a
  } = o), r[0] = o, r[1] = a, r[2] = u, r[3] = d;
  else a = r[1], u = r[2], d = r[3];
  const p = d ? "stretch" : void 0,
    m = d ? "from-left-edge" : !0;
  let b;
  if (r[4] !== a || r[5] !== u || r[6] !== p || r[7] !== m) b = e(Sf, {
    alignSelf: p,
    ...a,
    noSelect: m,
    children: u
  }), r[4] = a, r[5] = u, r[6] = p, r[7] = m, r[8] = b;
  else b = r[8];
  return b
}

function xYe(o) {
  let u = S(6),
    {
      lines: r,
      width: a
    } = o;
  if (r.length === 0) {
    return null
  }
  let d;
  if (u[0] !== r) d = r.join(`
`), u[0] = r, u[1] = d;
  else d = u[1];
  let p;
  if (u[2] !== r.length || u[3] !== d || u[4] !== a) p = e("ink-raw-ansi", {
    rawText: d,
    rawWidth: a,
    rawHeight: r.length
  }), u[2] = r.length, u[3] = d, u[4] = a, u[5] = p;
  else p = u[5];
  return p
}
j();
j();

function qe(o, r) {
  if (!o?.yogaNode || !r) return null;
  let a = o.yogaNode.getComputedHeight(),
    u = r.rows,
    d = o.yogaNode.getComputedTop(),
    {
      parentNode: p,
      yogaNode: m
    } = o;
  while (p) {
    if (p.yogaNode) d += p.yogaNode.getComputedTop(), m = p.yogaNode;
    if ((p.style.overflowY ?? p.style.overflow) === "scroll" && p.scrollTopRendered === void 0) return null;
    if (p.scrollTop) d -= pke(p);
    p = p.parentNode
  }
  let b = m.getComputedHeight(),
    C = d + a,
    h = b > u ? 1 : 0,
    R = Math.max(0, b - u) + h,
    x = R + u;
  if (a === 0) return d >= R && d < x;
  return C > R && d < x
}

function NY() {
  let o = ve(nh),
    r = A(null),
    a = A({
      isVisible: !0
    }),
    u = ue((h) => {
      if (r.current = h, h === null && !a.current.isVisible) a.current = {
        isVisible: !0
      }
    }, []);

  function d() {
    let h = qe(r.current, o);
    if (h === null) return a.current.isVisible;
    if (h !== a.current.isVisible) a.current = {
      isVisible: h
    };
    return h
  }
  let p = A(d);
  p.current = d;
  let m = ue(() => p.current(), []),
    b = A(o);
  b.current = o;
  let C = ue(() => qe(r.current, b.current), []);
  return Zt(() => {
    d()
  }), [u, a.current, m, C]
}
var _o = 480;

function PYe(o) {
  return i.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, _o) : o
}

function pl(o = 16) {
  let r = ve(jC),
    [a, {
      isVisible: u
    }, d] = NY(),
    p = hke(),
    m = A(p),
    b = u;
  if (m.current !== p) m.current = p, b = d();
  let C = !!r && b && o !== null,
    h = o === null ? null : Math.ceil(PYe(o) / Lg) * Lg,
    R = A(0),
    x = At(C ? r.subscribeKeepAlive : KPe, () => C ? R.current = Math.max(R.current, Math.floor(r.now() / h) * h) : R.current);
  return [a, x]
}
j();
var Do = () => ve(Dm),
  oE = Do;
j();

function HG(o, r) {
  let a = ve(jC),
    u = A(o);
  u.current = o;
  let d = A(null),
    p = ue((b) => () => d.current?.(), []);
  At(p, Yzr);
  let m = a?.setTimeout ?? XN;
  return Z(() => {
    let b = (...C) => {
      d.current?.(), d.current = m(() => {
        d.current = null, u.current(...C)
      }, r)
    };
    return b.cancel = () => {
      d.current?.(), d.current = null
    }, b
  }, [m, r])
}
j();
var Xe = () => () => {};

function xUe() {
  let {
    focusManager: o,
    rootNode: r
  } = ve(Dm), a = At(o?.subscribe ?? Xe, () => o?.activeElement ?? null);
  return Z(() => ({
    activeElement: a,
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
  }), [a, o, r])
}
j();

function Qi() {
  return ve(jzr) ?? Io
}

function Io() {
  return Date.now()
}
j();

function Mzr(o) {
  let r = ve(jC),
    a = o === null ? null : Math.ceil(PYe(o) / Lg) * Lg,
    u = A(null),
    d = Z(() => {
      if (!r || a === null) return KPe;
      return (p) => r.subscribeFollower(() => {
        u.current = r.now(), p()
      })
    }, [r, a]);
  return At(d, () => {
    if (!r || a === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / a) * a
  })
}

function sl(o, r, a) {
  let u = A(o);
  u.current = o;
  let d = ve(jC),
    p = a?.immediate ?? !1,
    m = A(null),
    b = Z(() => !d || r === null ? (C) => (m.current = null, () => {}) : (C) => {
      if (p && m.current === null) u.current();
      return m.current = r, PUe(d, () => u.current(), r)
    }, [d, r, p]);
  At(b, Yzr)
}

function PUe(o, r, a) {
  let u = !1,
    d, p = () => {
      if (u) return;
      try {
        r()
      } finally {
        if (!u) d = o.setTimeout(p, a)
      }
    };
  return d = o.setTimeout(p, a), () => {
    u = !0, d()
  }
}
j();

function Ia(o) {
  let {
    subscribeLayout: r
  } = ve(Dm), a = At(r, o), [, u] = G_((d) => d + 1, 0);
  return Zt(() => {
    if (!Object.is(o(), a)) u()
  }), a
}
j();

function Dzr(o) {
  let {
    retainFinePointer: r
  } = ve(Dm);
  O(() => o ? r() : void 0, [o, r])
}
j();

function $5n(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = Qe(o);
  return r && Lo(o, r.box, r.at)
}

function r2t(o) {
  let r = o?.yogaNode && Qe(o);
  if (!r) return;
  return {
    row: r.row,
    rows: o?.yogaNode?.getComputedHeight() ?? 0,
    viewportRows: r.box.scrollViewportHeight
  }
}

function Qe(o) {
  let r = 0,
    a = o;
  for (;;) {
    let u = a.parentNode;
    if (!u?.yogaNode || !a.yogaNode) return;
    r += a.yogaNode.getComputedTop();
    let d = u.parentNode;
    if (d?.yogaNode !== void 0 && (d.style.overflowY ?? d.style.overflow) === "scroll") return {
      box: d,
      row: r,
      at: {
        top: u.yogaNode.getComputedTop() + r,
        itemTop: u.yogaNode.getComputedTop() + a.yogaNode.getComputedTop(),
        itemHeight: a.yogaNode.getComputedHeight()
      }
    };
    a = u
  }
}

function Lo(o, r, a) {
  let {
    scrollTopRendered: u,
    yogaNode: d
  } = r, p = o.yogaNode?.getComputedHeight();
  if (u === void 0 || !d || !p) return;
  let m = d.getComputedBorder(1),
    b = d.getComputedHeight() - d.getComputedBorder(3),
    C = m + d.getComputedPadding(1),
    h = b - d.getComputedPadding(3),
    R = a.top - u,
    x = a.itemTop - u,
    E = x + a.itemHeight <= C || x >= h,
    T = Math.max(R, m),
    k = Math.min(R + p, b);
  return E || T >= k ? null : {
    first: T - R,
    last: k - R - 1,
    of: p
  }
}

function Lzr(o, r) {
  let {
    subscribeFrames: a
  } = ve(Dm), u = A(null), d = A({
    rows: r,
    lastRows: void 0,
    contentRows: void 0
  }), p = At(ue((m) => o ? a(m) : () => {}, [o, a]), ue(() => {
    if (!o) return;
    let m = u.current?.yogaNode?.getComputedHeight(),
      b = u.current?.childNodes.reduce((T, k) => T + (k.yogaNode?.getComputedHeight() ?? 0), 0),
      C = $5n(u.current),
      h = d.current,
      R = C === void 0 || C === h.rows || !!C && !!h.rows && C.first === h.rows.first && C.last === h.rows.last && C.of === h.rows.of,
      x = m === void 0 ? void 0 : b;
    if (!(R && x === h.contentRows)) d.current = {
      rows: R ? h.rows : C,
      lastRows: m || h.lastRows,
      contentRows: x
    };
    else if (m) h.lastRows = m;
    return d.current
  }, [o]));
  return [u, p?.rows, p?.lastRows, p?.contentRows]
}
j();

function iI() {
  ve(GPe);
  let o = Ii().get(process.stdout);
  return Z(() => {
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
var Fo = () => () => {},
  Bo = () => !1;

function Nzr(o = !0) {
  ve(GPe);
  let r = o ? Ii().get(process.stdout) : void 0;
  return At(r ? r.subscribeToSelectionChange : Fo, r ? r.hasTextSelection : Bo)
}
j();
var Ho = () => !1;

function Vr(o, r, a) {
  let u = ve(jC),
    d = typeof o === "function",
    p = d ? o : null,
    m = d ? r : o,
    b = d ? void 0 : r,
    C = A(p);
  C.current = p;
  let h = A(null),
    R = u?.setTimeout ?? XN,
    x = Z(() => {
      if (m === null) return KPe;
      let T = (k) => (h.current = null, k(), R(() => {
        if (h.current = T, d) C.current?.();
        else k()
      }, m));
      return T
    }, [R, m, d, b, ...a ?? []]),
    E = At(x, d ? Ho : () => h.current === x);
  if (!d) return E
}
var Uo = (o) => ({
    width: o.yogaNode?.getComputedWidth() ?? 0,
    height: o.yogaNode?.getComputedHeight() ?? 0
  }),
  Ss = Uo;

function qN(o, r) {
  let a = 0,
    u = o;
  while (u !== void 0 && u !== r) a += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? a : -1
}

function he(o, r) {
  let a = mu(te, null, mu(B5n, null, mu(s2t, null, mu(ke, null, o))));
  return r !== void 0 ? mu(o2t, {
    ...r,
    children: a
  }) : a
}

function et() {
  return {
    nativeCursor: Kj(),
    atlasRecorder: Te()
  }
}
async function $G(o, r, a) {
  let u = a?.storageV5 !== void 0 ? xFt(a.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return re(he(o, u), r);
  return re(he(o, u), {
    ...et(),
    ...r
  })
}
var tt = new WeakMap;
async function cke(o, r) {
  let a = await Ee({
      ...et(),
      ...o
    }),
    u = r?.storageV5 !== void 0 ? xFt(r.storageV5) : void 0,
    d = {
      ...a,
      render: (m) => a.render(he(m, u))
    },
    p = Ii().get(o?.stdout ?? process.stdout);
  if (p) tt.set(p, d);
  return d
}

function a$o(o = process.stdout) {
  let r = Ii().get(o);
  return r && tt.get(r)
}
export {
  _hn,
  FM,
  Izr,
  oa,
  Rn,
  ot,
  LY,
  bhn,
  e9s,
  s,
  oEt,
  n,
  sn,
  Shn,
  qs,
  L0,
  Gj,
  H5n,
  BC,
  che,
  KN,
  Gp,
  xYe,
  NY,
  PYe,
  pl,
  oE,
  HG,
  xUe,
  Qi,
  Mzr,
  sl,
  PUe,
  Ia,
  Dzr,
  $5n,
  r2t,
  Lzr,
  iI,
  Nzr,
  Vr,
  qN,
  Ss,
  $G,
  cke,
  a$o
};
