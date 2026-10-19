// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  tye
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  pn,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  RMt
} from "B:/~BUN/root/chunk-d69870x4.js";
import {
  Rh
} from "B:/~BUN/root/chunk-2efkaa0v.js";
import {
  E
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  g_e,
  vc,
  Og,
  jnt,
  S1
} from "B:/~BUN/root/chunk-3md9ngvz.js";
import {
  Xvt,
  Jwn,
  ew
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  P5,
  aT,
  Y4s,
  X4s,
  gjo
} from "B:/~BUN/root/chunk-nvgn0qsr.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  J0e
} from "B:/~BUN/root/chunk-pjgzz98k.js";
import {
  Jvt
} from "B:/~BUN/root/chunk-2jzp4p89.js";
import {
  sd
} from "B:/~BUN/root/chunk-j2ppas05.js";
import {
  Wmt
} from "B:/~BUN/root/chunk-psvhak2h.js";
import {
  lM,
  Dws,
  x$n,
  B7t,
  Lws,
  ygo,
  ai
} from "B:/~BUN/root/chunk-0x8xex6w.js";
import {
  trr,
  VVe,
  fce,
  b1,
  Pg,
  rrr,
  Uc,
  orr,
  irr,
  qVe,
  LF
} from "B:/~BUN/root/chunk-1jz9m9yh.js";
import {
  SVt,
  $9o
} from "B:/~BUN/root/chunk-vbtp6nn1.js";
import {
  qh,
  h_e
} from "B:/~BUN/root/chunk-1d35msqn.js";
import {
  aRn
} from "B:/~BUN/root/chunk-mxxcv7nt.js";
import {
  gce,
  MI,
  KVe,
  urr,
  Tk
} from "B:/~BUN/root/chunk-t7y4rt40.js";
import {
  iNe,
  Ev
} from "B:/~BUN/root/chunk-sk7eej8z.js";
import {
  e
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Ig
} from "B:/~BUN/root/chunk-25gtd35b.js";
import {
  qt,
  Yd,
  ng,
  ae,
  Ee,
  P,
  Jt,
  Z,
  ny,
  A,
  y,
  Dt,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  ua
} from "B:/~BUN/root/chunk-pp80ffk4.js";
import {
  ie
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  S,
  yn
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();

function ft() {
  return {
    latched: null
  }
}
var tVt = qt(null);

function xe() {
  return sd() ? "fullscreen" : "inline"
}

function re(o) {
  let m = w(3),
    {
      value: r,
      children: l
    } = o,
    [u] = y(ft);
  const d = r ?? u;
  let f;
  if (m[0] !== l || m[1] !== d) f = e(tVt.Provider, {
    value: d,
    children: l
  }), m[0] = l, m[1] = d, m[2] = f;
  else f = m[2];
  return f
}

function WA() {
  let r = w(2);
  const o = Ee(tVt);
  let l;
  if (r[0] !== o) l = Ynr(o), r[0] = o, r[1] = l;
  else l = r[1];
  return l
}

function Ynr(o) {
  if (o === null) return xe();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = xe();
  return o.latched
}

function mi() {
  return WA() === "fullscreen"
}
B();

function Re() {
  return {
    markdownTokens: new Map,
    highlightedCode: new Map,
    structuredDiff: new WeakMap,
    parsedToolResults: new WeakMap
  }
}
var Se = qt(null);

function ke({
  children: o
}) {
  let r = A(null);
  return r.current ??= Re(), e(Se.Provider, {
    value: r.current,
    children: o
  })
}

function cz() {
  let o = Ee(Se),
    r = A(null);
  if (o) return o;
  return r.current ??= Re(), r.current
}

function nVt(o, r, l) {
  if (!r) return;
  if (typeof l !== "object" || l === null) return r.safeParse(l);
  let u = o.parsedToolResults.get(l);
  if (u && yt(u, r)) return u.parsed;
  let d = r.safeParse(l);
  return o.parsedToolResults.set(l, {
    schema: r,
    parsed: d
  }), d
}

function yt(o, r) {
  return o.schema === r
}
import {
  Stream as bt
} from "stream";
import {
  writeSync as Te
} from "fs";

function ht() {
  if (!process.stdout.isTTY) return;
  try {
    aRn();
    let o = ai().get(process.stdout);
    if (Te(1, (o?.modes.reset("mousePixels") ?? "") + h_e), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount()
    } catch {}
    if (o?.drainStdin(), o?.detachForShutdown(), irr(o?.modes ?? new jnt, (r) => Te(1, r)), !a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) process.title = ""
  } catch {}
}

function gt() {
  ai().get(process.stdout)?.drainStdin()
}
var ne = {
  cleanupTerminalModes: ht,
  drainStdin: gt
};
var Ct = (o, r) => {
    let l = Rt(r),
      u = {
        stdout: process.stdout,
        stdin: process.stdin,
        stderr: process.stderr,
        exitOnCtrlC: !0,
        patchConsole: !0,
        ...l
      },
      d = St(u.stdout, () => new qVe(u));
    return d.render(o), {
      rerender: d.render,
      unmount() {
        d.unmount()
      },
      waitUntilExit: d.waitUntilExit,
      cleanup: () => ai().delete(u.stdout)
    }
  },
  vt = async (o, r) => {
    let l = ai();
    while (l.pendingStandaloneRender) await l.pendingStandaloneRender;
    await Promise.resolve();
    let u = Ct(o, r);
    return t(`[render] first ink render: ${Math.round(process.uptime()*1000)}ms since process start`), u
  }, se = vt;
async function we(o = {}) {
  await Promise.resolve();
  let r = ai();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let l = xt(o, "react");
  return {
    render: (u) => l.render(u),
    unmount: () => l.unmount(),
    waitUntilExit: () => l.waitUntilExit()
  }
}

function xt({
  stdout: o = process.stdout,
  stdin: r = process.stdin,
  stderr: l = process.stderr,
  exitOnCtrlC: u = !0,
  patchConsole: d = !0,
  onFrame: m,
  nativeCursor: f,
  isScreenReaderEnabled: b,
  atlasRecorder: C
}, h) {
  let x = ai();
  ygo(ne);
  let v = new qVe({
    stdout: o,
    stdin: r,
    stderr: l,
    exitOnCtrlC: u,
    patchConsole: d,
    onFrame: m,
    nativeCursor: f,
    isScreenReaderEnabled: b,
    atlasRecorder: C
  });
  if (h === "react") x.set(o, v);
  else x.treeRoots.set(o, v);
  return v
}
var Rt = (o = {}) => {
    if (o instanceof bt) return {
      stdout: o,
      stdin: process.stdin
    };
    return o
  },
  St = (o, r) => {
    let l = ai(),
      u = l.get(o);
    if (!u) ygo(ne), u = r(), l.set(o, u);
    return u
  };

function _9o() {
  let o = ai().get(process.stdout);
  if (!o) return;
  kt(o.getStylePool())
}

function Pe() {
  let o = E("tengu_xterm_atlas_reset", !0),
    r = E("tengu_basalt_meadow", !1);
  return {
    autoResetEnabled: o,
    recording: o || r
  }
}

function kt(o) {
  let r = o.atlasRecorder;
  if (r.debugTainted) return;
  if (!E("tengu_basalt_meadow", !1)) {
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
      term_program: c(Tt()),
      is_xtermjs: Rh(),
      session_age_bucket: c(Et(tye())),
      proactive_reset_count: u.count,
      proactive_reset_last_reason: c(u.lastReason)
    }), !r.stylePoolHealthyReported) r.stylePoolHealthyReported = !0, g("render_stylepool");
  if (o.overflowed && !r.stylePoolCapHitReported) r.stylePoolCapHitReported = !0, p("render_stylepool", "cap_hit")
}

function Tt() {
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

function Et(o) {
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
  return RMt(o) ? r[o] : void 0
}

function wt(o) {
  let r = ew();
  return e(vc, {
    ...o,
    borderColor: j(o.borderColor, r),
    borderTopColor: j(o.borderTopColor, r),
    borderBottomColor: j(o.borderBottomColor, r),
    borderLeftColor: j(o.borderLeftColor, r),
    borderRightColor: j(o.borderRightColor, r),
    backgroundColor: j(o.backgroundColor, r)
  })
}
var s = wt;
B();
B();
var Mnt = qt(!1);

function Y(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return RMt(o) ? r[o] : void 0
}

function n(o) {
  let r = w(32),
    l, u, d, m, f, b, C, h, x, v, k;
  if (r[0] !== o)({
    color: d,
    backgroundColor: l,
    dimColor: f,
    bold: b,
    italic: C,
    underline: h,
    strikethrough: x,
    inverse: v,
    wrap: k,
    children: u,
    ...m
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m, r[5] = f, r[6] = b, r[7] = C, r[8] = h, r[9] = x, r[10] = v, r[11] = k;
  else l = r[1], u = r[2], d = r[3], m = r[4], f = r[5], b = r[6], C = r[7], h = r[8], x = r[9], v = r[10], k = r[11];
  let T = f === void 0 ? !1 : f,
    R = b === void 0 ? !1 : b,
    M = C === void 0 ? !1 : C,
    F = h === void 0 ? !1 : h,
    O = x === void 0 ? !1 : x,
    I = v === void 0 ? !1 : v,
    L = k === void 0 ? "wrap" : k,
    _ = ew(),
    W = Ee(Mnt),
    U;
  if (r[12] !== d || r[13] !== T || r[14] !== W || r[15] !== _) U = T && !W ? _.inactive : Y(d, _), r[12] = d, r[13] = T, r[14] = W, r[15] = _, r[16] = U;
  else U = r[16];
  let D = U,
    H;
  if (r[17] !== l || r[18] !== _) H = Y(l, _), r[17] = l, r[18] = _, r[19] = H;
  else H = r[19];
  let z = H;
  const G = T && !W ? D : void 0;
  let oe;
  if (r[20] !== R || r[21] !== u || r[22] !== m || r[23] !== I || r[24] !== M || r[25] !== z || r[26] !== D || r[27] !== O || r[28] !== G || r[29] !== F || r[30] !== L) oe = e(Uc, {
    color: D,
    backgroundColor: z,
    bold: R,
    faintInk: G,
    italic: M,
    underline: F,
    strikethrough: O,
    inverse: I,
    wrap: L,
    ...m,
    children: u
  }), r[20] = R, r[21] = u, r[22] = m, r[23] = I, r[24] = M, r[25] = z, r[26] = D, r[27] = O, r[28] = G, r[29] = F, r[30] = L, r[31] = oe;
  else oe = r[31];
  return oe
}
B();

function zt(o) {
  let b = w(5),
    {
      children: r,
      url: l,
      fallback: u,
      assumeSupport: d
    } = o,
    m = r ?? l;
  if (d ? iNe() ?? !0 : Ev()) {
    let C;
    if (b[0] !== m || b[1] !== l) C = e(Uc, {
      children: e("ink-link", {
        href: l,
        children: m
      })
    }), b[0] = m, b[1] = l, b[2] = C;
    else C = b[2];
    return C
  }
  const C = u ?? m;
  let h;
  if (b[3] !== C) h = e(Uc, {
    children: C
  }), b[3] = C, b[4] = h;
  else h = b[4];
  return h
}

function De(o) {
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

function* Ie(o) {
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
    of ua().segment(o)) {
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

function Gt(o, r) {
  switch (o) {
    case qh.CURSOR_VISIBLE:
      return {
        type: "cursor", action: r ? {
          type: "show"
        } : {
          type: "hide"
        }
      };
    case qh.ALT_SCREEN_CLEAR:
    case qh.ALT_SCREEN:
      return {
        type: "mode", action: {
          type: "alternateScreen",
          enabled: r
        }
      };
    case qh.BRACKETED_PASTE:
      return {
        type: "mode", action: {
          type: "bracketedPaste",
          enabled: r
        }
      };
    case qh.MOUSE_NORMAL:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "normal" : "off"
        }
      };
    case qh.MOUSE_BUTTON:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "button" : "off"
        }
      };
    case qh.MOUSE_ANY:
      return {
        type: "mode", action: {
          type: "mouseTracking",
          mode: r ? "any" : "off"
        }
      };
    case qh.FOCUS_EVENTS:
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

function Yt(o) {
  let r = o.slice(2);
  if (r.length === 0) return null;
  let l = r.charCodeAt(r.length - 1),
    u = r.slice(0, -1),
    d = "",
    m = u,
    f = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], m = u.slice(1);
  let b = m.charCodeAt(m.length - 1);
  if (m.length > 0 && !(b >= 48 && b <= 59)) {
    let v = m.match(/([^0-9;:]+)$/);
    if (v) f = v[1], m = m.slice(0, -f.length)
  }
  if (l === aT.SGR && d === "") return {
    type: "sgr",
    params: m
  };
  let C = m === "" ? [] : m.split(/[;:]/).map((v) => v === "" ? 0 : parseInt(v, 10)),
    h = C[0] ?? 1,
    x = C[1] ?? 1;
  if (l === aT.CUU) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "up",
      count: h
    }
  };
  if (l === aT.CUD || l === aT.VPR) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "down",
      count: h
    }
  };
  if (l === aT.CUF || l === aT.HPR) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "forward",
      count: h
    }
  };
  if (l === aT.CUB) return {
    type: "cursor",
    action: {
      type: "move",
      direction: "back",
      count: h
    }
  };
  if (l === aT.CNL) return {
    type: "cursor",
    action: {
      type: "nextLine",
      count: h
    }
  };
  if (l === aT.CPL) return {
    type: "cursor",
    action: {
      type: "prevLine",
      count: h
    }
  };
  if (l === aT.CHA || l === aT.HPA) return {
    type: "cursor",
    action: {
      type: "column",
      col: h
    }
  };
  if (l === aT.CUP || l === aT.HVP) return {
    type: "cursor",
    action: {
      type: "position",
      row: h,
      col: x
    }
  };
  if (l === aT.VPA) return {
    type: "cursor",
    action: {
      type: "row",
      row: h
    }
  };
  if (l === aT.ED) return {
    type: "erase",
    action: {
      type: "display",
      region: Y4s[C[0] ?? 0] ?? "toEnd"
    }
  };
  if (l === aT.EL) return {
    type: "erase",
    action: {
      type: "line",
      region: X4s[C[0] ?? 0] ?? "toEnd"
    }
  };
  if (l === aT.ECH) return {
    type: "erase",
    action: {
      type: "chars",
      count: h
    }
  };
  if (l === aT.IL) return {
    type: "edit",
    action: {
      type: "insertLines",
      count: h
    }
  };
  if (l === aT.DL) return {
    type: "edit",
    action: {
      type: "deleteLines",
      count: h
    }
  };
  if (l === aT.ICH) return {
    type: "edit",
    action: {
      type: "insertChars",
      count: h
    }
  };
  if (l === aT.DCH) return {
    type: "edit",
    action: {
      type: "deleteChars",
      count: h
    }
  };
  if (l === aT.SU) return {
    type: "scroll",
    action: {
      type: "up",
      count: h
    }
  };
  if (l === aT.SD) return {
    type: "scroll",
    action: {
      type: "down",
      count: h
    }
  };
  if (l === aT.DECSTBM) return {
    type: "scroll",
    action: {
      type: "setRegion",
      top: h,
      bottom: C[1] ?? 0
    }
  };
  if (l === aT.SCOSC) return {
    type: "cursor",
    action: {
      type: "save"
    }
  };
  if (l === aT.SCORC) return {
    type: "cursor",
    action: {
      type: "restore"
    }
  };
  if (l === aT.DECSCUSR && f === " ") return {
    type: "cursor",
    action: {
      type: "style",
      ...gjo[h] ?? gjo[0]
    }
  };
  if (d === "?" && (l === aT.SM || l === aT.RM)) {
    let v = l === aT.SM,
      k = [];
    for (let T of C) {
      let R = Gt(T, v);
      if (R) k.push(R)
    }
    return k.length ? k : {
      type: "unknown",
      sequence: o
    }
  }
  return {
    type: "unknown",
    sequence: o
  }
}

function $t(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== P5.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  if (r === 79) return "ss3";
  return "esc"
}
class J {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? !1, this.tokenizer = J0e({
      stringsEndAtLineFeed: o?.stringsEndAtLineFeed
    })
  }
  style = SVt();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, !1);
    return this.tail = "", o
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = SVt(), this.inLink = !1, this.linkUrl = void 0
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
      let m = [...Ie(o)];
      return this.holdTail(m, r), m.length > 0 ? [{
        type: "text",
        graphemes: m,
        style: l
      }] : []
    }
    let u = [];
    for (let m of o.split("\x07")) {
      if (m) {
        let f = [...Ie(m)];
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
    switch ($t(o)) {
      case "csi": {
        let l = Yt(o);
        if (!l) return [];
        if (Array.isArray(l)) return l;
        if (l.type === "sgr") return this.style = $9o(l.params, this.style), [];
        return [l]
      }
      case "osc": {
        let l = o.slice(2);
        if (l.endsWith("\x07")) l = l.slice(0, -1);
        else if (l.endsWith("\x1B\\")) l = l.slice(0, -2);
        let u = Dws(l);
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
          u = De(l);
        if (u?.type === "reset") this.style = SVt(), this.inLink = !1, this.linkUrl = void 0;
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
var Go = ng(function(r) {
  let x = w(21),
    {
      children: l,
      dimColor: u,
      italic: d,
      monochrome: m,
      wrap: f
    } = r;
  if (typeof l !== "string") {
    const b = !!u;
    const C = !!d;
    const h = String(l);
    let v;
    if (x[0] !== b || x[1] !== C || x[2] !== h || x[3] !== f) v = e(Uc, {
      dim: b,
      italic: C,
      wrap: f,
      children: h
    }), x[0] = b, x[1] = C, x[2] = h, x[3] = f, x[4] = v;
    else v = x[4];
    return v
  }
  if (l === "") {
    return null
  }
  let b, C;
  if (x[5] !== l || x[6] !== u || x[7] !== d || x[8] !== m || x[9] !== f) {
    C = yn;
    T: {
      let k = Ue(l);
      if (k.length === 0) {
        C = null;
        break T
      }
      if (k.length === 1 && !ee(k[0].props) && k[0].props.hyperlink === void 0) {
        C = e(Uc, {
          dim: !!u,
          italic: !!d,
          wrap: f,
          children: k[0].text
        });
        break T
      }
      let h;
      if (x[12] !== u || x[13] !== d || x[14] !== m) h = (R, M) => {
        let F = R.props.hyperlink;
        if (u) R.props.dim = !0;
        if (d) R.props.italic = !0;
        if (m) R.props.color = void 0;
        let O = ee(R.props) ? e(pe, {
          color: R.props.color,
          backgroundColor: R.props.backgroundColor,
          dim: R.props.dim,
          bold: R.props.bold,
          italic: R.props.italic,
          underline: R.props.underline,
          strikethrough: R.props.strikethrough,
          inverse: R.props.inverse,
          children: R.text
        }, M) : R.text;
        return F ? e(zt, {
          url: F,
          children: O
        }, M) : O
      },
      x[12] = u,
      x[13] = d,
      x[14] = m,
      x[15] = h;
      else h = x[15];b = k.map(h)
    }
    x[5] = l, x[6] = u, x[7] = d, x[8] = m, x[9] = f, x[10] = b, x[11] = C
  } else b = x[10], C = x[11];
  if (C !== yn) return C;
  let I = b;
  const h = !!u,
    v = !!d;
  let L;
  if (x[16] !== I || x[17] !== h || x[18] !== v || x[19] !== f) L = e(Uc, {
    dim: h,
    italic: v,
    wrap: f,
    children: I
  }), x[16] = I, x[17] = h, x[18] = v, x[19] = f, x[20] = L;
  else L = x[20];
  return L
});

function Ue(o) {
  let l = new J({
      stringsEndAtLineFeed: !0
    }).feed(o),
    u = [],
    d;
  for (let m of l) {
    if (m.type === "link") {
      if (m.action.type === "start") d = m.action.url;
      else d = void 0;
      continue
    }
    if (m.type === "text") {
      let f = m.graphemes.map((h) => h.value).join("");
      if (!f) continue;
      let b = Qt(m.style);
      if (d) b.hyperlink = d;
      let C = u.at(-1);
      if (C && to(C.props, b)) C.text += f;
      else u.push({
        text: f,
        props: b
      })
    }
  }
  return u
}

function Qt(o) {
  return {
    color: We(o.fg),
    backgroundColor: We(o.bg),
    dim: o.dim ? !0 : void 0,
    bold: o.bold ? !0 : void 0,
    italic: o.italic ? !0 : void 0,
    underline: o.underline !== "none" ? !0 : void 0,
    strikethrough: o.strikethrough ? !0 : void 0,
    inverse: o.inverse ? !0 : void 0,
    hyperlink: void 0
  }
}
var eo = {
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

function We(o) {
  switch (o.type) {
    case "named":
      return eo[o.name];
    case "indexed":
      return `ansi256(${o.index})`;
    case "rgb":
      return `rgb(${o.r},${o.g},${o.b})`;
    case "default":
      return
  }
}

function to(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink
}

function ee(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === !0 || o.bold === !0 || o.italic === !0 || o.underline === !0 || o.strikethrough === !0 || o.inverse === !0
}

function pe(o) {
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
    if (r[5] !== u || r[6] !== m) f = e(Uc, {
      ...m,
      dim: !0,
      children: u
    }), r[5] = u, r[6] = m, r[7] = f;
    else f = r[7];
    return f
  }
  if (l) {
    let f;
    if (r[8] !== u || r[9] !== m) f = e(Uc, {
      ...m,
      bold: !0,
      children: u
    }), r[8] = u, r[9] = m, r[10] = f;
    else f = r[10];
    return f
  }
  let f;
  if (r[11] !== u || r[12] !== m) f = e(Uc, {
    ...m,
    children: u
  }), r[11] = u, r[12] = m, r[13] = f;
  else f = r[13];
  return f
}
B();
B();

function dn() {
  let o = Ee(Tk);
  if (!o) throw Error("useClock must be used within a ClockProvider");
  return o
}

function Ge(o) {
  let r = w(37),
    l, u, d, m, f, b, C;
  if (r[0] !== o)({
    onAction: d,
    tabIndex: b,
    autoFocus: l,
    mountSettleMs: C,
    children: u,
    ref: m,
    ...f
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m, r[5] = f, r[6] = b, r[7] = C;
  else l = r[1], u = r[2], d = r[3], m = r[4], f = r[5], b = r[6], C = r[7];
  let h = b === void 0 ? 0 : b,
    x = C === void 0 ? VVe : C,
    [v, k] = y(!1),
    [T, R] = y(!1),
    [M, F] = y(!1),
    O = dn(),
    I = A(null),
    L;
  if (r[8] !== O) L = () => O.now(), r[8] = O, r[9] = L;
  else L = r[9];
  let [_] = y(L), W, U;
  if (r[10] === S) W = () => () => {
    I.current?.()
  }, U = [], r[10] = W, r[11] = U;
  else W = r[10], U = r[11];
  P(W, U);
  let D;
  if (r[12] !== O || r[13] !== d) D = (H) => {
    if (H.key === "return" || H.key === " ") H.preventDefault(), F(!0), d(), I.current?.(), I.current = O.setTimeout(() => F(!1), 100)
  }, r[12] = O, r[13] = d, r[14] = D;
  else D = r[14];
  let z = D,
    G;
  if (r[15] !== O || r[16] !== x || r[17] !== _ || r[18] !== d) G = (oe) => {
    if (oe.isWindowActivation || O.now() - _ < x) {
      oe.dropAsStray();
      return
    }
    d()
  }, r[15] = O, r[16] = x, r[17] = _, r[18] = d, r[19] = G;
  else G = r[19];
  let Ce = G,
    it;
  if (r[20] === S) it = (Ml) => k(!0), r[20] = it;
  else it = r[20];
  let Yo = it,
    st;
  if (r[21] === S) st = (_l) => k(!1), r[21] = st;
  else st = r[21];
  let Jo = st,
    lt;
  if (r[22] === S) lt = () => R(!0), r[22] = lt;
  else lt = r[22];
  let $o = lt,
    at;
  if (r[23] === S) at = () => R(!1), r[23] = at;
  else at = r[23];
  let Zo = at,
    ut;
  if (r[24] !== u || r[25] !== M || r[26] !== v || r[27] !== T) {
    let qo = {
      focused: v,
      hovered: T,
      active: M
    };
    ut = typeof u === "function" ? u(qo) : u;
    r[24] = u, r[25] = M, r[26] = v, r[27] = T, r[28] = ut
  } else ut = r[28];
  let ve = ut,
    ct;
  if (r[29] !== l || r[30] !== ve || r[31] !== Ce || r[32] !== z || r[33] !== m || r[34] !== f || r[35] !== h) ct = e(vc, {
    ref: m,
    tabIndex: h,
    autoFocus: l,
    onKeyDown: z,
    onClick: Ce,
    onFocus: Yo,
    onBlur: Jo,
    onMouseEnter: $o,
    onMouseLeave: Zo,
    hoverFollowsPaint: !0,
    ...f,
    children: ve
  }), r[29] = l, r[30] = ve, r[31] = Ce, r[32] = z, r[33] = m, r[34] = f, r[35] = h, r[36] = ct;
  else ct = r[36];
  return ct
}
var CL = Ge;
B();

function ot() {
  return Ee(trr)
}

function N$(o) {
  let {
    children: r,
    fallback: l
  } = o;
  return ot() ? l ?? null : r
}

function Kwn(o, r) {
  if (typeof o === "function") {
    o(r);
    return
  }
  if (o) o.current = r
}
B();

function Ek({
  line: o,
  column: r,
  active: l,
  visible: u = !1
}) {
  let d = Ee(rrr),
    m = A(null),
    f = ae((b) => {
      m.current = b
    }, []);
  return Jt(() => {
    let b = m.current;
    if (l && b) d({
      relativeX: r,
      relativeY: o,
      node: b,
      visible: u
    });
    else d(null, b)
  }), Jt(() => () => {
    d(null, m.current)
  }, [d]), f
}

function qe(o) {
  let r = w(30),
    l, u, d, m, f, b, C, h, x;
  if (r[0] !== o)({
    ref: f,
    autoFocus: C,
    disabled: h,
    onKeyDown: d,
    onPaste: m,
    caret: l,
    allowPrintableKeybindings: x,
    children: u,
    ...b
  } = o), r[0] = o, r[1] = l, r[2] = u, r[3] = d, r[4] = m, r[5] = f, r[6] = b, r[7] = C, r[8] = h, r[9] = x;
  else l = r[1], u = r[2], d = r[3], m = r[4], f = r[5], b = r[6], C = r[7], h = r[8], x = r[9];
  let v = C === void 0 ? !1 : C,
    k = h === void 0 ? !1 : h,
    T = x === void 0 ? !1 : x;
  const R = l?.line ?? 0,
    M = l?.column ?? 0,
    F = l !== void 0,
    O = l?.visible;
  let I;
  if (r[10] !== R || r[11] !== M || r[12] !== F || r[13] !== O) I = {
    line: R,
    column: M,
    active: F,
    visible: O
  }, r[10] = R, r[11] = M, r[12] = F, r[13] = O, r[14] = I;
  else I = r[14];
  let L = Ek(I),
    _;
  if (r[15] !== L || r[16] !== f) _ = (W) => {
    L(W), Kwn(f, W)
  }, r[15] = L, r[16] = f, r[17] = _;
  else _ = r[17];
  let U = _;
  if (k) {
    let D;
    if (r[18] !== u || r[19] !== U || r[20] !== b) D = e(vc, {
      ref: U,
      ...b,
      children: u
    }), r[18] = u, r[19] = U, r[20] = b, r[21] = D;
    else D = r[21];
    return D
  }
  const D = !T;
  let H;
  if (r[22] !== v || r[23] !== u || r[24] !== d || r[25] !== m || r[26] !== U || r[27] !== b || r[28] !== D) H = e(vc, {
    ref: U,
    tabIndex: 0,
    autoFocus: v,
    textEntry: D,
    onKeyDown: d,
    onPaste: m,
    ...b,
    children: u
  }), r[22] = v, r[23] = u, r[24] = d, r[25] = m, r[26] = U, r[27] = b, r[28] = D, r[29] = H;
  else H = r[29];
  return H
}
var Kre = qe;

function OI(o) {
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

function Iu(o) {
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
  let b;
  if (r[4] !== l || r[5] !== u || r[6] !== m || r[7] !== f) b = e(vc, {
    alignSelf: m,
    ...l,
    noSelect: f,
    children: u
  }), r[4] = l, r[5] = u, r[6] = m, r[7] = f, r[8] = b;
  else b = r[8];
  return b
}

function ILe(o) {
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
B();
B();

function Qe(o, r) {
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
    if (m.scrollTop) d -= fce(m);
    m = m.parentNode
  }
  let b = f.getComputedHeight(),
    C = d + l,
    h = b > u ? 1 : 0,
    x = Math.max(0, b - u) + h,
    v = x + u;
  if (l === 0) return d >= x && d < v;
  return C > x && d < v
}

function y8() {
  let o = Ee(Og),
    r = A(null),
    l = A({
      isVisible: !0
    }),
    u = ae((h) => {
      if (r.current = h, h === null && !l.current.isVisible) l.current = {
        isVisible: !0
      }
    }, []);

  function d() {
    let h = Qe(r.current, o);
    if (h === null) return l.current.isVisible;
    if (h !== l.current.isVisible) l.current = {
      isVisible: h
    };
    return h
  }
  let m = A(d);
  m.current = d;
  let f = ae(() => m.current(), []),
    b = A(o);
  b.current = o;
  let C = ae(() => Qe(r.current, b.current), []);
  return Jt(() => {
    d()
  }), [u, l.current, f, C]
}
var Fo = 480;

function MLe(o) {
  return a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, Fo) : o
}

function Aa(o = 16) {
  let r = Ee(Tk),
    [l, {
      isVisible: u
    }, d] = y8(),
    m = gce(),
    f = A(m),
    b = u;
  if (f.current !== m) f.current = m, b = d();
  let C = !!r && b && o !== null,
    h = o === null ? null : Math.ceil(MLe(o) / Ig) * Ig,
    x = A(0),
    v = Dt(C ? r.subscribeKeepAlive : KVe, () => C ? x.current = Math.max(x.current, Math.floor(r.now() / h) * h) : x.current);
  return [l, v]
}
B();
var Lo = () => Ee(Pg),
  TR = Lo;
B();

function F$(o, r) {
  let l = Ee(Tk),
    u = A(o);
  u.current = o;
  let d = A(null),
    m = ae((b) => () => d.current?.(), []);
  Dt(m, urr);
  let f = l?.setTimeout ?? MI;
  return Z(() => {
    let b = (...C) => {
      d.current?.(), d.current = f(() => {
        d.current = null, u.current(...C)
      }, r)
    };
    return b.cancel = () => {
      d.current?.(), d.current = null
    }, b
  }, [f, r])
}
B();
var et = () => () => {};

function zCe() {
  let {
    focusManager: o,
    rootNode: r
  } = Ee(Pg), l = Dt(o?.subscribe ?? et, () => o?.activeElement ?? null);
  return Z(() => ({
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
    subscribe: o?.subscribe ?? et
  }), [l, o, r])
}
B();
var Bo = () => () => {};

function n7(o) {
  let {
    focusManager: r
  } = Ee(Pg);
  return Dt(r?.subscribe ?? Bo, () => {
    let l = o.current,
      u = r?.activeElement;
    if (!l || !u) return !1;
    return b1(u, l)
  }, () => !1)
}
B();

function xa() {
  return Ee(orr) ?? Uo
}

function Uo() {
  return Date.now()
}
B();

function Xnr(o) {
  let r = Ee(Tk),
    l = o === null ? null : Math.ceil(MLe(o) / Ig) * Ig,
    u = A(null),
    d = Z(() => {
      if (!r || l === null) return KVe;
      return (m) => r.subscribeFollower(() => {
        u.current = r.now(), m()
      })
    }, [r, l]);
  return Dt(d, () => {
    if (!r || l === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / l) * l
  })
}

function sa(o, r, l) {
  let u = A(o);
  u.current = o;
  let d = Ee(Tk),
    m = l?.immediate ?? !1,
    f = A(null),
    b = Z(() => !d || r === null ? (C) => (f.current = null, () => {}) : (C) => {
      if (m && f.current === null) u.current();
      return f.current = r, GCe(d, () => u.current(), r)
    }, [d, r, m]);
  Dt(b, urr)
}

function GCe(o, r, l) {
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
B();

function Fl(o) {
  let {
    subscribeLayout: r
  } = Ee(Pg), l = Dt(r, o), [, u] = ny((d) => d + 1, 0);
  return Jt(() => {
    if (!Object.is(o(), l)) u()
  }), l
}
B();

function Jnr(o) {
  let {
    retainFinePointer: r
  } = Ee(Pg);
  P(() => o ? r() : void 0, [o, r])
}
B();

function tt(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = 0,
    l = o;
  for (;;) {
    let u = l.parentNode;
    if (!u?.yogaNode || !l.yogaNode) return;
    r += l.yogaNode.getComputedTop();
    let d = u.parentNode;
    if (d?.yogaNode !== void 0 && (d.style.overflowY ?? d.style.overflow) === "scroll") return Wo(o, d, {
      top: u.yogaNode.getComputedTop() + r,
      itemTop: u.yogaNode.getComputedTop() + l.yogaNode.getComputedTop(),
      itemHeight: l.yogaNode.getComputedHeight()
    });
    l = u
  }
}

function Wo(o, r, l) {
  let {
    scrollTopRendered: u,
    yogaNode: d
  } = r, m = o.yogaNode?.getComputedHeight();
  if (u === void 0 || !d || !m) return;
  let f = d.getComputedBorder(1),
    b = d.getComputedHeight() - d.getComputedBorder(3),
    C = f + d.getComputedPadding(1),
    h = b - d.getComputedPadding(3),
    x = l.top - u,
    v = l.itemTop - u,
    k = v + l.itemHeight <= C || v >= h,
    T = Math.max(x, f),
    R = Math.min(x + m, b);
  return k || T >= R ? null : {
    first: T - x,
    last: R - x - 1,
    of: m
  }
}

function Qnr(o, r) {
  let {
    subscribeFrames: l
  } = Ee(Pg), u = A(null), d = A({
    rows: r,
    lastRows: void 0,
    contentRows: void 0
  }), m = Dt(ae((f) => o ? l(f) : () => {}, [o, l]), ae(() => {
    if (!o) return;
    let f = u.current?.yogaNode?.getComputedHeight(),
      b = u.current?.childNodes.reduce((T, R) => T + (R.yogaNode?.getComputedHeight() ?? 0), 0),
      C = tt(u.current),
      h = d.current,
      x = C === void 0 || C === h.rows || !!C && !!h.rows && C.first === h.rows.first && C.last === h.rows.last && C.of === h.rows.of,
      v = f === void 0 ? void 0 : b;
    if (!(x && v === h.contentRows)) d.current = {
      rows: x ? h.rows : C,
      lastRows: f || h.lastRows,
      contentRows: v
    };
    else if (f) h.lastRows = f;
    return d.current
  }, [o]));
  return [u, m?.rows, m?.lastRows, m?.contentRows]
}
B();

function CR() {
  Ee(g_e);
  let o = ai().get(process.stdout);
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
var Ho = () => () => {},
  jo = () => !1;

function Znr(o = !0) {
  Ee(g_e);
  let r = o ? ai().get(process.stdout) : void 0;
  return Dt(r ? r.subscribeToSelectionChange : Ho, r ? r.hasTextSelection : jo)
}
B();
var K = (o, r, l) => ({
    type: "rgb",
    r: o,
    g: r,
    b: l
  }),
  Vo = {
    idle: {
      indicator: K(0, 215, 95),
      status: "Idle",
      statusColor: K(136, 136, 136)
    },
    busy: {
      indicator: K(255, 149, 0),
      status: "Working\u2026",
      statusColor: K(255, 149, 0)
    },
    waiting: {
      indicator: K(95, 135, 255),
      status: "Waiting",
      statusColor: K(95, 135, 255)
    }
  };

function Ywn(o, r) {
  let l = Ee(S1),
    u = A(null);
  P(() => {
    if (o === null) {
      if (u.current !== null && l && B7t()) l(lM(x$n));
      u.current = null;
      return
    }
    if (u.current = o, !l || !B7t()) return;
    let d = Vo[o],
      m = o === "idle" && r !== void 0 ? {
        ...d,
        status: r
      } : d;
    l(lM(Lws(m)))
  }, [o, r, l])
}
B();

function VCe(o) {
  let r = Ee(S1);
  P(() => {
    if (o === null || !r) return;
    let l = pn(o);
    process.title = l
  }, [o, r])
}
B();
var Ko = () => !1;

function Dr(o, r, l) {
  let u = Ee(Tk),
    d = typeof o === "function",
    m = d ? o : null,
    f = d ? r : o,
    b = d ? void 0 : r,
    C = A(m);
  C.current = m;
  let h = A(null),
    x = u?.setTimeout ?? MI,
    v = Z(() => {
      if (f === null) return KVe;
      let T = (R) => (h.current = null, R(), x(() => {
        if (h.current = T, d) C.current?.();
        else R()
      }, f));
      return T
    }, [x, f, d, b, ...l ?? []]),
    k = Dt(v, d ? Ko : () => h.current === v);
  if (!d) return k
}
var zo = (o) => ({
    width: o.yogaNode?.getComputedWidth() ?? 0,
    height: o.yogaNode?.getComputedHeight() ?? 0
  }),
  Ws = zo;

function _8(o, r) {
  let l = 0,
    u = o;
  while (u !== void 0 && u !== r) l += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? l : -1
}

function be(o, r) {
  let l = Yd(re, null, Yd(Jwn, null, Yd(Jvt, null, Yd(ke, null, o))));
  return r !== void 0 ? Yd(Xvt, {
    ...r,
    children: l
  }) : l
}

function rt() {
  return {
    nativeCursor: LF(),
    atlasRecorder: Pe()
  }
}
async function AV(o, r, l) {
  let u = l?.storageV5 !== void 0 ? Wmt(l.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return se(be(o, u), r);
  return se(be(o, u), {
    ...rt(),
    ...r
  })
}
var nt = new WeakMap;
async function pce(o, r) {
  let l = await we({
      ...rt(),
      ...o
    }),
    u = r?.storageV5 !== void 0 ? Wmt(r.storageV5) : void 0,
    d = {
      ...l,
      render: (f) => l.render(be(f, u))
    },
    m = ai().get(o?.stdout ?? process.stdout);
  if (m) nt.set(m, d);
  return d
}

function A4r(o = process.stdout) {
  let r = ai().get(o);
  return r && nt.get(r)
}
export {
  tVt,
  WA,
  Ynr,
  mi,
  cz,
  nVt,
  _9o,
  s,
  Mnt,
  n,
  zt,
  Go,
  dn,
  CL,
  ot,
  N$,
  Kwn,
  Ek,
  Kre,
  OI,
  Iu,
  ILe,
  y8,
  MLe,
  Aa,
  TR,
  F$,
  zCe,
  n7,
  xa,
  Xnr,
  sa,
  GCe,
  Fl,
  Jnr,
  Qnr,
  CR,
  Znr,
  Ywn,
  VCe,
  Dr,
  _8,
  Ws,
  AV,
  pce,
  A4r
};
