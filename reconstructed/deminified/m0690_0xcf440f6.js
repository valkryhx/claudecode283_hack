// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { mre } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { tUn } from "B:/~BUN/root/chunk-0av24qsq.js";
import { om } from "B:/~BUN/root/chunk-4tkwpa6e.js";
import { x } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ioe, zl, Xw, Tje, Bj } from "B:/~BUN/root/chunk-e1thvnpv.js";
import { mVt, gT } from "B:/~BUN/root/chunk-1x7a47hz.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { JJe } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, p } from "B:/~BUN/root/chunk-51n463p1.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { ie, Yne, YS, G$o, V$o, ozr, WJ } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { QJe } from "B:/~BUN/root/chunk-jpnyq4t7.js";
import { Tl } from "B:/~BUN/root/chunk-rfp59gnb.js";
import { C6e } from "B:/~BUN/root/chunk-e9hrnhar.js";
import { bR, Zyo, Ctn, FPt, e_o, fEr } from "B:/~BUN/root/chunk-ky4py1p3.js";
import { xs } from "B:/~BUN/root/chunk-p4t9nwg2.js";
import { rL, uIe, FQ, Bvn, Y_, jvn, ac, Wvn, Gvn, fIe, PH } from "B:/~BUN/root/chunk-trcn2d68.js";
import { A_t, n9r } from "B:/~BUN/root/chunk-jz31jc2e.js";
import { _m, loe } from "B:/~BUN/root/chunk-p3ewqd1e.js";
import { OKt } from "B:/~BUN/root/chunk-dczbgj6x.js";
import { mIe, yP, gIe, Qvn, iS } from "B:/~BUN/root/chunk-1223v177.js";
import { Kbe, Ny } from "B:/~BUN/root/chunk-0rtwbec7.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Xg } from "B:/~BUN/root/chunk-cev8zjcf.js";
import { Vt, ad, Gp, se, Pe, R, sn, X, RE, T, g, At, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { ya } from "B:/~BUN/root/chunk-nfc48pcb.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
N();
function dt() {
  return {
    latched: null
  };
}
var oe = Vt(null);
function Re() {
  return Tl() ? "fullscreen" : "inline";
}
function re(o) {
  let m = w(3),
    {
      value: value,
      children: children
    } = o,
    [u] = g(dt);
  const value_2 = value ?? u;
  let f;
  if (m[0] !== children || m[1] !== value_2) f = e(oe.Provider, {
    value: value_2,
    children: children
  }), m[0] = children, m[1] = value_2, m[2] = f;else f = m[2];
  return f;
}
function cO() {
  let o = Pe(oe);
  if (o === null) return Re();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = Re();
  return o.latched;
}
function Js() {
  return cO() === "fullscreen";
}
N();
function Se() {
  return {
    markdownTokens: new Map(),
    highlightedCode: new Map(),
    structuredDiff: new WeakMap(),
    parsedToolResults: new WeakMap()
  };
}
var ke = Vt(null);
function Te({
  children: children_2
}) {
  let r = T(null);
  return r.current ??= Se(), e(ke.Provider, {
    value: r.current,
    children: children_2
  });
}
function tL() {
  let o = Pe(ke),
    r = T(null);
  if (o) return o;
  return r.current ??= Se(), r.current;
}
function yje(o, schema, l) {
  if (!schema) return;
  if (typeof l !== "object" || l === null) return schema.safeParse(l);
  let u = o.parsedToolResults.get(l);
  if (u && mt(u, schema)) return u.parsed;
  let parsed = schema.safeParse(l);
  return o.parsedToolResults.set(l, {
    schema: schema,
    parsed: parsed
  }), parsed;
}
function mt(o, r) {
  return o.schema === r;
}
import { Stream as ht } from "stream";
import { writeSync as Ee } from "fs";
function cleanupTerminalModes() {
  if (!process.stdout.isTTY) return;
  try {
    OKt();
    let o = xs().get(process.stdout);
    if (Ee(1, (o?.modes.reset("mousePixels") ?? "") + loe), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount();
    } catch {}
    if (o?.drainStdin(), o?.detachForShutdown(), Gvn(o?.modes ?? new Tje(), r => Ee(1, r)), !a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) process.title = "";
  } catch {}
}
function drainStdin() {
  xs().get(process.stdout)?.drainStdin();
}
var ne = {
  cleanupTerminalModes: cleanupTerminalModes,
  drainStdin: drainStdin
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
        d.unmount();
      },
      waitUntilExit: d.waitUntilExit,
      cleanup: () => xs().delete(u.stdout)
    };
  },
  Ct = async (o, r) => {
    let l = xs();
    while (l.pendingStandaloneRender) await l.pendingStandaloneRender;
    await Promise.resolve();
    let u = gt(o, r);
    return t(`[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`), u;
  },
  le = Ct;
async function we(o = {}) {
  await Promise.resolve();
  let r = xs();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let l = vt(o, "react");
  return {
    render: u => l.render(u),
    unmount: () => l.unmount(),
    waitUntilExit: () => l.waitUntilExit()
  };
}
function vt({
  stdout = process.stdout,
  stdin = process.stdin,
  stderr = process.stderr,
  exitOnCtrlC = !0,
  patchConsole = !0,
  onFrame: onFrame,
  nativeCursor: nativeCursor,
  isScreenReaderEnabled: isScreenReaderEnabled,
  atlasRecorder: atlasRecorder
}, y) {
  let v = xs();
  fEr(ne);
  let C = new fIe({
    stdout: stdout,
    stdin: stdin,
    stderr: stderr,
    exitOnCtrlC: exitOnCtrlC,
    patchConsole: patchConsole,
    onFrame: onFrame,
    nativeCursor: nativeCursor,
    isScreenReaderEnabled: isScreenReaderEnabled,
    atlasRecorder: atlasRecorder
  });
  if (y === "react") v.set(stdout, C);else v.treeRoots.set(stdout, C);
  return C;
}
var xt = (stdout_2 = {}) => {
    if (stdout_2 instanceof ht) return {
      stdout: stdout_2,
      stdin: process.stdin
    };
    return stdout_2;
  },
  Rt = (o, r) => {
    let l = xs(),
      u = l.get(o);
    if (!u) fEr(ne), u = r(), l.set(o, u);
    return u;
  };
function H8r() {
  let o = xs().get(process.stdout);
  if (!o) return;
  St(o.getStylePool());
}
function Ae() {
  let autoResetEnabled = x("tengu_xterm_atlas_reset", !0),
    r = x("tengu_basalt_meadow", !1);
  return {
    autoResetEnabled: autoResetEnabled,
    recording: autoResetEnabled || r
  };
}
function St(o) {
  let atlasRecorder_2 = o.atlasRecorder;
  if (atlasRecorder_2.debugTainted) return;
  if (!x("tengu_basalt_meadow", !1)) {
    if (!atlasRecorder_2.autoResetEnabled) atlasRecorder_2.recording = !1;
    return;
  }
  atlasRecorder_2.recording = !0;
  let proactiveResetStats = atlasRecorder_2.proactiveResetStats;
  if (i("tengu_render_glyph_cardinality", {
    stylepool_styles: o.size,
    stylepool_overflowed: o.overflowed,
    atlas_glyph_keys: atlasRecorder_2.size,
    atlas_keys_saturated: atlasRecorder_2.saturated,
    term_program: c(kt()),
    is_xtermjs: om(),
    session_age_bucket: c(Tt(mre())),
    proactive_reset_count: proactiveResetStats.count,
    proactive_reset_last_reason: c(proactiveResetStats.lastReason)
  }), !atlasRecorder_2.stylePoolHealthyReported) atlasRecorder_2.stylePoolHealthyReported = !0, _("render_stylepool");
  if (o.overflowed && !atlasRecorder_2.stylePoolCapHitReported) atlasRecorder_2.stylePoolCapHitReported = !0, p("render_stylepool", "cap_hit");
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
      return "tmux";
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other";
}
function Tt(o) {
  let r = o / 60000;
  if (r < 5) return "lt_5m";
  if (r < 30) return "5m_30m";
  if (r < 120) return "30m_2h";
  if (r < 480) return "2h_8h";
  return "gt_8h";
}
function j(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return tUn(o) ? r[o] : void 0;
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
  });
}
var s = Et;
N();
N();
var _je = Vt(!1);
function G(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return tUn(o) ? r[o] : void 0;
}
function n(o) {
  let r = w(31),
    backgroundColor,
    children_3,
    color,
    m,
    dimColor,
    bold,
    italic,
    underline,
    strikethrough,
    inverse,
    wrap;
  if (r[0] !== o) ({
    color: color,
    backgroundColor: backgroundColor,
    dimColor: dimColor,
    bold: bold,
    italic: italic,
    underline: underline,
    strikethrough: strikethrough,
    inverse: inverse,
    wrap: wrap,
    children: children_3,
    ...m
  } = o), r[0] = o, r[1] = backgroundColor, r[2] = children_3, r[3] = color, r[4] = m, r[5] = dimColor, r[6] = bold, r[7] = italic, r[8] = underline, r[9] = strikethrough, r[10] = inverse, r[11] = wrap;else backgroundColor = r[1], children_3 = r[2], color = r[3], m = r[4], dimColor = r[5], bold = r[6], italic = r[7], underline = r[8], strikethrough = r[9], inverse = r[10], wrap = r[11];
  let P = dimColor === void 0 ? !1 : dimColor,
    bold_2 = bold === void 0 ? !1 : bold,
    italic_2 = italic === void 0 ? !1 : italic,
    underline_2 = underline === void 0 ? !1 : underline,
    strikethrough_2 = strikethrough === void 0 ? !1 : strikethrough,
    inverse_2 = inverse === void 0 ? !1 : inverse,
    wrap_2 = wrap === void 0 ? "wrap" : wrap,
    D = gT(),
    W = Pe(_je),
    U;
  if (r[12] !== color || r[13] !== P || r[14] !== W || r[15] !== D) U = P && !W ? D.inactive : G(color, D), r[12] = color, r[13] = P, r[14] = W, r[15] = D, r[16] = U;else U = r[16];
  let color_2 = U,
    H;
  if (r[17] !== backgroundColor || r[18] !== D) H = G(backgroundColor, D), r[17] = backgroundColor, r[18] = D, r[19] = H;else H = r[19];
  let backgroundColor_2 = H,
    te;
  if (r[20] !== bold_2 || r[21] !== children_3 || r[22] !== m || r[23] !== inverse_2 || r[24] !== italic_2 || r[25] !== backgroundColor_2 || r[26] !== color_2 || r[27] !== strikethrough_2 || r[28] !== underline_2 || r[29] !== wrap_2) te = e(ac, {
    color: color_2,
    backgroundColor: backgroundColor_2,
    bold: bold_2,
    italic: italic_2,
    underline: underline_2,
    strikethrough: strikethrough_2,
    inverse: inverse_2,
    wrap: wrap_2,
    ...m,
    children: children_3
  }), r[20] = bold_2, r[21] = children_3, r[22] = m, r[23] = inverse_2, r[24] = italic_2, r[25] = backgroundColor_2, r[26] = color_2, r[27] = strikethrough_2, r[28] = underline_2, r[29] = wrap_2, r[30] = te;else te = r[30];
  return te;
}
N();
function bt(o) {
  let h = w(5),
    {
      children: children_4,
      url: l,
      fallback: fallback,
      assumeSupport: assumeSupport
    } = o,
    children_5 = children_4 ?? l;
  if (assumeSupport ? Kbe() ?? !0 : Ny()) {
    let b;
    if (h[0] !== children_5 || h[1] !== l) b = e(ac, {
      children: e("ink-link", {
        href: l,
        children: children_5
      })
    }), h[0] = children_5, h[1] = l, h[2] = b;else b = h[2];
    return b;
  }
  const children_6 = fallback ?? children_5;
  let y;
  if (h[3] !== children_6) y = e(ac, {
    children: children_6
  }), h[3] = children_6, h[4] = y;else y = h[4];
  return y;
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
  };
}
function* _e(o) {
  let r = !0;
  for (let l = 0; l < o.length; l++) if (o.charCodeAt(l) >= 128) {
    r = !1;
    break;
  }
  if (r) {
    for (let l = 0; l < o.length; l++) yield {
      value: o[l],
      width: 1
    };
    return;
  }
  for (let {
    segment: l
  } of ya().segment(o)) {
    if (l.length === 1) {
      let u = l.charCodeAt(0);
      if (u >= 32 && u < 127) {
        yield {
          value: l,
          width: 1
        };
        continue;
      }
    }
    yield {
      value: l,
      width: Math.max(1, ie(l))
    };
  }
}
function qt(o, enabled) {
  switch (o) {
    case _m.CURSOR_VISIBLE:
      return {
        type: "cursor",
        action: enabled ? {
          type: "show"
        } : {
          type: "hide"
        }
      };
    case _m.ALT_SCREEN_CLEAR:
    case _m.ALT_SCREEN:
      return {
        type: "mode",
        action: {
          type: "alternateScreen",
          enabled: enabled
        }
      };
    case _m.BRACKETED_PASTE:
      return {
        type: "mode",
        action: {
          type: "bracketedPaste",
          enabled: enabled
        }
      };
    case _m.MOUSE_NORMAL:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "normal" : "off"
        }
      };
    case _m.MOUSE_BUTTON:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "button" : "off"
        }
      };
    case _m.MOUSE_ANY:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "any" : "off"
        }
      };
    case _m.FOCUS_EVENTS:
      return {
        type: "mode",
        action: {
          type: "focusEvents",
          enabled: enabled
        }
      };
    default:
      return null;
  }
}
function Xt(sequence) {
  let r = sequence.slice(2);
  if (r.length === 0) return null;
  let l = r.charCodeAt(r.length - 1),
    u = r.slice(0, -1),
    d = "",
    params = u,
    f = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], params = u.slice(1);
  let h = params.charCodeAt(params.length - 1);
  if (params.length > 0 && !(h >= 48 && h <= 59)) {
    let C = params.match(/([^0-9;:]+)$/);
    if (C) f = C[1], params = params.slice(0, -f.length);
  }
  if (l === YS.SGR && d === "") return {
    type: "sgr",
    params: params
  };
  let b = params === "" ? [] : params.split(/[;:]/).map(item => item === "" ? 0 : parseInt(item, 10)),
    y = b[0] ?? 1,
    col = b[1] ?? 1;
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
      col: col
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
      ...(ozr[y] ?? ozr[0])
    }
  };
  if (d === "?" && (l === YS.SM || l === YS.RM)) {
    let C = l === YS.SM,
      E = [];
    for (let P of b) {
      let k = qt(P, C);
      if (k) E.push(k);
    }
    return E.length ? E : {
      type: "unknown",
      sequence: sequence
    };
  }
  return {
    type: "unknown",
    sequence: sequence
  };
}
function Qt(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== Yne.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  if (r === 79) return "ss3";
  return "esc";
}
class Y {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? !1, this.tokenizer = WJ({
      forOutput: this.forOutput
    });
  }
  style = A_t();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, !1);
    return this.tail = "", o;
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = A_t(), this.inLink = !1, this.linkUrl = void 0;
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
        l.push(...this.processText(m, f));
      } else {
        if (this.tail) l.push(...this.processText(this.tail, !1)), this.tail = "";
        l.push(...this.processSequence(d.value));
      }
    }
    return l;
  }
  processText(o, r) {
    let style = this.style;
    if (o.indexOf("\x07") === -1) {
      let graphemes = [..._e(o)];
      return this.holdTail(graphemes, r), graphemes.length > 0 ? [{
        type: "text",
        graphemes: graphemes,
        style: style
      }] : [];
    }
    let u = [];
    for (let m of o.split("\x07")) {
      if (m) {
        let graphemes_2 = [..._e(m)];
        if (graphemes_2.length > 0) u.push({
          type: "text",
          graphemes: graphemes_2,
          style: style
        });
      }
      u.push({
        type: "bell"
      });
    }
    u.pop();
    let d = u.at(-1);
    if (d?.type === "text") {
      if (this.holdTail(d.graphemes, r), d.graphemes.length === 0) u.pop();
    }
    return u;
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
      if (f === 8205 || f !== void 0 && f >= 127462 && f <= 127487) this.tail = d + this.tail, o.pop();else break;
    }
  }
  processSequence(sequence_2) {
    switch (Qt(sequence_2)) {
      case "csi":
        {
          let l = Xt(sequence_2);
          if (!l) return [];
          if (Array.isArray(l)) return l;
          if (l.type === "sgr") return this.style = n9r(l.params, this.style), [];
          return [l];
        }
      case "osc":
        {
          let l = sequence_2.slice(2);
          if (l.endsWith("\x07")) l = l.slice(0, -1);else if (l.endsWith("\x1B\\")) l = l.slice(0, -2);
          let u = Zyo(l);
          if (u) {
            if (u.type === "link") if (u.action.type === "start") this.inLink = !0, this.linkUrl = u.action.url;else this.inLink = !1, this.linkUrl = void 0;
            return [u];
          }
          return [];
        }
      case "esc":
        {
          let l = sequence_2.slice(1),
            u = Me(l);
          if (u?.type === "reset") this.style = A_t(), this.inLink = !1, this.linkUrl = void 0;
          return u ? [u] : [];
        }
      case "ss3":
        return [{
          type: "unknown",
          sequence: sequence_2
        }];
      default:
        return [{
          type: "unknown",
          sequence: sequence_2
        }];
    }
  }
}
var Jr = Gp(function (r) {
  let v = w(21),
    {
      children: children_7,
      dimColor: dimColor_2,
      italic: italic_3,
      monochrome: monochrome,
      wrap: wrap_3
    } = r;
  if (typeof children_7 !== "string") {
    const dim = !!dimColor_2;
    const italic_4 = !!italic_3;
    const children_8 = String(children_7);
    let C;
    if (v[0] !== dim || v[1] !== italic_4 || v[2] !== children_8 || v[3] !== wrap_3) C = e(ac, {
      dim: dim,
      italic: italic_4,
      wrap: wrap_3,
      children: children_8
    }), v[0] = dim, v[1] = italic_4, v[2] = children_8, v[3] = wrap_3, v[4] = C;else C = v[4];
    return C;
  }
  if (children_7 === "") {
    return null;
  }
  let h, b;
  if (v[5] !== children_7 || v[6] !== dimColor_2 || v[7] !== italic_3 || v[8] !== monochrome || v[9] !== wrap_3) {
    b = hn;
    P: {
      let E = Fe(children_7);
      if (E.length === 0) {
        b = null;
        break P;
      }
      if (E.length === 1 && !Q(E[0].props) && E[0].props.hyperlink === void 0) {
        b = e(ac, {
          dim: !!dimColor_2,
          italic: !!italic_3,
          wrap: wrap_3,
          children: E[0].text
        });
        break P;
      }
      let y;
      if (v[12] !== dimColor_2 || v[13] !== italic_3 || v[14] !== monochrome) y = (k, M) => {
        let F = k.props.hyperlink;
        if (dimColor_2) k.props.dim = !0;
        if (italic_3) k.props.italic = !0;
        if (monochrome) k.props.color = void 0;
        let children_9 = Q(k.props) ? e(de, {
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
          children: children_9
        }, M) : children_9;
      }, v[12] = dimColor_2, v[13] = italic_3, v[14] = monochrome, v[15] = y;else y = v[15];
      h = E.map(y);
    }
    v[5] = children_7, v[6] = dimColor_2, v[7] = italic_3, v[8] = monochrome, v[9] = wrap_3, v[10] = h, v[11] = b;
  } else h = v[10], b = v[11];
  if (b !== hn) return b;
  let children_10 = h;
  const dim_2 = !!dimColor_2,
    italic_5 = !!italic_3;
  let L;
  if (v[16] !== children_10 || v[17] !== dim_2 || v[18] !== italic_5 || v[19] !== wrap_3) L = e(ac, {
    dim: dim_2,
    italic: italic_5,
    wrap: wrap_3,
    children: children_10
  }), v[16] = children_10, v[17] = dim_2, v[18] = italic_5, v[19] = wrap_3, v[20] = L;else L = v[20];
  return L;
});
function Fe(o) {
  let l = new Y().feed(o),
    u = [],
    d;
  for (let m of l) {
    if (m.type === "link") {
      if (m.action.type === "start") d = m.action.url;else d = void 0;
      continue;
    }
    if (m.type === "text") {
      let text = m.graphemes.map(item => item.value).join("");
      if (!text) continue;
      let props = oo(m.style);
      if (d) props.hyperlink = d;
      let b = u.at(-1);
      if (b && no(b.props, props)) b.text += text;else u.push({
        text: text,
        props: props
      });
    }
  }
  return u;
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
  };
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
      return;
  }
}
function no(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink;
}
function Q(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === !0 || o.bold === !0 || o.italic === !0 || o.underline === !0 || o.strikethrough === !0 || o.inverse === !0;
}
function de(o) {
  let r = w(14),
    bold_3,
    children_11,
    dim_3,
    m;
  if (r[0] !== o) ({
    bold: bold_3,
    dim: dim_3,
    children: children_11,
    ...m
  } = o), r[0] = o, r[1] = bold_3, r[2] = children_11, r[3] = dim_3, r[4] = m;else bold_3 = r[1], children_11 = r[2], dim_3 = r[3], m = r[4];
  if (dim_3) {
    let f;
    if (r[5] !== children_11 || r[6] !== m) f = e(ac, {
      ...m,
      dim: !0,
      children: children_11
    }), r[5] = children_11, r[6] = m, r[7] = f;else f = r[7];
    return f;
  }
  if (bold_3) {
    let f;
    if (r[8] !== children_11 || r[9] !== m) f = e(ac, {
      ...m,
      bold: !0,
      children: children_11
    }), r[8] = children_11, r[9] = m, r[10] = f;else f = r[10];
    return f;
  }
  let f;
  if (r[11] !== children_11 || r[12] !== m) f = e(ac, {
    ...m,
    children: children_11
  }), r[11] = children_11, r[12] = m, r[13] = f;else f = r[13];
  return f;
}
N();
function Ve(o) {
  let r = w(37),
    autoFocus,
    children_12,
    onAction,
    ref,
    f,
    tabIndex,
    mountSettleMs;
  if (r[0] !== o) ({
    onAction: onAction,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    mountSettleMs: mountSettleMs,
    children: children_12,
    ref: ref,
    ...f
  } = o), r[0] = o, r[1] = autoFocus, r[2] = children_12, r[3] = onAction, r[4] = ref, r[5] = f, r[6] = tabIndex, r[7] = mountSettleMs;else autoFocus = r[1], children_12 = r[2], onAction = r[3], ref = r[4], f = r[5], tabIndex = r[6], mountSettleMs = r[7];
  let tabIndex_2 = tabIndex === void 0 ? 0 : tabIndex,
    v = mountSettleMs === void 0 ? uIe : mountSettleMs,
    [focused, E] = g(!1),
    [hovered, k] = g(!1),
    [active, F] = g(!1),
    A = Yt(),
    I = T(null),
    L;
  if (r[8] !== A) L = () => A.now(), r[8] = A, r[9] = L;else L = r[9];
  let [D] = g(L),
    W,
    U;
  if (r[10] === S) W = () => () => {
    I.current?.();
  }, U = [], r[10] = W, r[11] = U;else W = r[10], U = r[11];
  R(W, U);
  let B;
  if (r[12] !== A || r[13] !== onAction) B = H => {
    if (H.key === "return" || H.key === " ") H.preventDefault(), F(!0), onAction(), I.current?.(), I.current = A.setTimeout(() => F(!1), 100);
  }, r[12] = A, r[13] = onAction, r[14] = B;else B = r[14];
  let onKeyDown = B,
    te;
  if (r[15] !== A || r[16] !== v || r[17] !== D || r[18] !== onAction) te = ot => {
    if (ot.isWindowActivation || A.now() - D < v) {
      ot.dropAsStray();
      return;
    }
    onAction();
  }, r[15] = A, r[16] = v, r[17] = D, r[18] = onAction, r[19] = te;else te = r[19];
  let onClick = te,
    rt;
  if (r[20] === S) rt = _l => E(!0), r[20] = rt;else rt = r[20];
  let onFocus = rt,
    nt;
  if (r[21] === S) nt = Dl => E(!1), r[21] = nt;else nt = r[21];
  let onBlur = nt,
    it;
  if (r[22] === S) it = () => k(!0), r[22] = it;else it = r[22];
  let onMouseEnter = it,
    st;
  if (r[23] === S) st = () => k(!1), r[23] = st;else st = r[23];
  let onMouseLeave = st,
    lt;
  if (r[24] !== children_12 || r[25] !== active || r[26] !== focused || r[27] !== hovered) {
    let Qo = {
      focused: focused,
      hovered: hovered,
      active: active
    };
    lt = typeof children_12 === "function" ? children_12(Qo) : children_12;
    r[24] = children_12, r[25] = active, r[26] = focused, r[27] = hovered, r[28] = lt;
  } else lt = r[28];
  let children_13 = lt,
    at;
  if (r[29] !== autoFocus || r[30] !== children_13 || r[31] !== onClick || r[32] !== onKeyDown || r[33] !== ref || r[34] !== f || r[35] !== tabIndex_2) at = e(zl, {
    ref: ref,
    tabIndex: tabIndex_2,
    autoFocus: autoFocus,
    onKeyDown: onKeyDown,
    onClick: onClick,
    onFocus: onFocus,
    onBlur: onBlur,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    ...f,
    children: children_13
  }), r[29] = autoFocus, r[30] = children_13, r[31] = onClick, r[32] = onKeyDown, r[33] = ref, r[34] = f, r[35] = tabIndex_2, r[36] = at;else at = r[36];
  return at;
}
var nL = Ve;
N();
function _t() {
  return Pe(Bvn);
}
function SA(o) {
  let {
    children: children_14,
    fallback: fallback_2
  } = o;
  return _t() ? fallback_2 ?? null : children_14;
}
function iVt(o, r) {
  if (typeof o === "function") {
    o(r);
    return;
  }
  if (o) o.current = r;
}
N();
function Yw({
  line: o,
  column: r,
  active: active_2,
  visible = !1
}) {
  let d = Pe(jvn),
    m = T(null),
    f = se(h => {
      m.current = h;
    }, []);
  return sn(() => {
    let h = m.current;
    if (active_2 && h) d({
      relativeX: r,
      relativeY: o,
      node: h,
      visible: visible
    });else d(null, h);
  }), sn(() => () => {
    d(null, m.current);
  }, [d]), f;
}
function $e(o) {
  let r = w(30),
    caret,
    children_15,
    onKeyDown_2,
    onPaste,
    ref_2,
    h,
    autoFocus_2,
    disabled,
    allowPrintableKeybindings;
  if (r[0] !== o) ({
    ref: ref_2,
    autoFocus: autoFocus_2,
    disabled: disabled,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    caret: caret,
    allowPrintableKeybindings: allowPrintableKeybindings,
    children: children_15,
    ...h
  } = o), r[0] = o, r[1] = caret, r[2] = children_15, r[3] = onKeyDown_2, r[4] = onPaste, r[5] = ref_2, r[6] = h, r[7] = autoFocus_2, r[8] = disabled, r[9] = allowPrintableKeybindings;else caret = r[1], children_15 = r[2], onKeyDown_2 = r[3], onPaste = r[4], ref_2 = r[5], h = r[6], autoFocus_2 = r[7], disabled = r[8], allowPrintableKeybindings = r[9];
  let autoFocus_3 = autoFocus_2 === void 0 ? !1 : autoFocus_2,
    E = disabled === void 0 ? !1 : disabled,
    P = allowPrintableKeybindings === void 0 ? !1 : allowPrintableKeybindings;
  const line = caret?.line ?? 0,
    column = caret?.column ?? 0,
    active_3 = caret !== void 0,
    visible_2 = caret?.visible;
  let I;
  if (r[10] !== line || r[11] !== column || r[12] !== active_3 || r[13] !== visible_2) I = {
    line: line,
    column: column,
    active: active_3,
    visible: visible_2
  }, r[10] = line, r[11] = column, r[12] = active_3, r[13] = visible_2, r[14] = I;else I = r[14];
  let L = Yw(I),
    D;
  if (r[15] !== L || r[16] !== ref_2) D = W => {
    L(W), iVt(ref_2, W);
  }, r[15] = L, r[16] = ref_2, r[17] = D;else D = r[17];
  let ref_3 = D;
  if (E) {
    let B;
    if (r[18] !== children_15 || r[19] !== ref_3 || r[20] !== h) B = e(zl, {
      ref: ref_3,
      ...h,
      children: children_15
    }), r[18] = children_15, r[19] = ref_3, r[20] = h, r[21] = B;else B = r[21];
    return B;
  }
  const textEntry = !P;
  let H;
  if (r[22] !== autoFocus_3 || r[23] !== children_15 || r[24] !== onKeyDown_2 || r[25] !== onPaste || r[26] !== ref_3 || r[27] !== h || r[28] !== textEntry) H = e(zl, {
    ref: ref_3,
    tabIndex: 0,
    autoFocus: autoFocus_3,
    textEntry: textEntry,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    ...h,
    children: children_15
  }), r[22] = autoFocus_3, r[23] = children_15, r[24] = onKeyDown_2, r[25] = onPaste, r[26] = ref_3, r[27] = h, r[28] = textEntry, r[29] = H;else H = r[29];
  return H;
}
var w5 = $e;
function qC(o) {
  let u = w(4),
    {
      count: count
    } = o,
    l = count === void 0 ? 1 : count,
    children_16;
  if (u[0] !== l) children_16 = `
`.repeat(l), u[0] = l, u[1] = children_16;else children_16 = u[1];
  let m;
  if (u[2] !== children_16) m = e("ink-text", {
    children: children_16
  }), u[2] = children_16, u[3] = m;else m = u[3];
  return m;
}
function Yc(o) {
  let r = w(9),
    l,
    children_17,
    fromLeftEdge;
  if (r[0] !== o) ({
    children: children_17,
    fromLeftEdge: fromLeftEdge,
    ...l
  } = o), r[0] = o, r[1] = l, r[2] = children_17, r[3] = fromLeftEdge;else l = r[1], children_17 = r[2], fromLeftEdge = r[3];
  const alignSelf = fromLeftEdge ? "stretch" : void 0,
    noSelect = fromLeftEdge ? "from-left-edge" : !0;
  let h;
  if (r[4] !== l || r[5] !== children_17 || r[6] !== alignSelf || r[7] !== noSelect) h = e(zl, {
    alignSelf: alignSelf,
    ...l,
    noSelect: noSelect,
    children: children_17
  }), r[4] = l, r[5] = children_17, r[6] = alignSelf, r[7] = noSelect, r[8] = h;else h = r[8];
  return h;
}
function Wbe(o) {
  let u = w(6),
    {
      lines: lines,
      width: l
    } = o;
  if (lines.length === 0) {
    return null;
  }
  let rawText;
  if (u[0] !== lines) rawText = lines.join(`
`), u[0] = lines, u[1] = rawText;else rawText = u[1];
  let m;
  if (u[2] !== lines.length || u[3] !== rawText || u[4] !== l) m = e("ink-raw-ansi", {
    rawText: rawText,
    rawWidth: l,
    rawHeight: lines.length
  }), u[2] = lines.length, u[3] = rawText, u[4] = l, u[5] = m;else m = u[5];
  return m;
}
N();
N();
function qe(o, r) {
  if (!o?.yogaNode || !r) return null;
  let l = o.yogaNode.getComputedHeight(),
    rows = r.rows,
    d = o.yogaNode.getComputedTop(),
    {
      parentNode: parentNode,
      yogaNode: yogaNode
    } = o;
  while (parentNode) {
    if (parentNode.yogaNode) d += parentNode.yogaNode.getComputedTop(), yogaNode = parentNode.yogaNode;
    if ((parentNode.style.overflowY ?? parentNode.style.overflow) === "scroll" && parentNode.scrollTopRendered === void 0) return null;
    if (parentNode.scrollTop) d -= FQ(parentNode);
    parentNode = parentNode.parentNode;
  }
  let h = yogaNode.getComputedHeight(),
    b = d + l,
    y = h > rows ? 1 : 0,
    v = Math.max(0, h - rows) + y,
    C = v + rows;
  if (l === 0) return d >= v && d < C;
  return b > v && d < C;
}
function HQ() {
  let o = Pe(Xw),
    r = T(null),
    l = T({
      isVisible: !0
    }),
    u = se(y => {
      r.current = y;
    }, []);
  function d() {
    let isVisible = qe(r.current, o);
    if (isVisible === null) return l.current.isVisible;
    if (isVisible !== l.current.isVisible) l.current = {
      isVisible: isVisible
    };
    return isVisible;
  }
  let m = T(d);
  m.current = d;
  let f = se(() => m.current(), []),
    h = T(o);
  h.current = o;
  let b = se(() => qe(r.current, h.current), []);
  return sn(() => {
    d();
  }), [u, l.current, f, b];
}
var Uo = 480;
function be(o) {
  return a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, Uo) : o;
}
function Ta(o = 16) {
  let r = Pe(iS),
    [l, {
      isVisible: isVisible_2
    }, d] = HQ(),
    m = mIe(),
    f = T(m),
    h = isVisible_2;
  if (f.current !== m) f.current = m, h = d();
  let b = !!r && h && o !== null,
    y = o === null ? null : Math.ceil(be(o) / Xg) * Xg,
    v = T(0),
    C = At(b ? r.subscribeKeepAlive : gIe, () => b ? v.current = Math.max(v.current, Math.floor(r.now() / y) * y) : v.current);
  return [l, C];
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
    m = se(h => () => d.current?.(), []);
  At(m, Qvn);
  let f = l?.setTimeout ?? yP;
  return X(() => {
    let h = (...b) => {
      d.current?.(), d.current = f(() => {
        d.current = null, u.current(...b);
      }, r);
    };
    return h.cancel = () => {
      d.current?.(), d.current = null;
    }, h;
  }, [f, r]);
}
N();
var Xe = () => () => {};
function Pue() {
  let {
      focusManager: focusManager,
      rootNode: rootNode
    } = Pe(Y_),
    activeElement = At(focusManager?.subscribe ?? Xe, () => focusManager?.activeElement ?? null);
  return X(() => ({
    activeElement: activeElement,
    focusNext: () => {
      if (focusManager && rootNode) focusManager.focusNext(rootNode);
    },
    focusPrevious: () => {
      if (focusManager && rootNode) focusManager.focusPrevious(rootNode);
    },
    focusDirection: u => {
      if (focusManager && rootNode) return focusManager.focusDirection(u, rootNode);
      return !1;
    },
    focus: u => focusManager?.focus(u),
    blur: () => focusManager?.blur(),
    subscribe: focusManager?.subscribe ?? Xe
  }), [activeElement, focusManager, rootNode]);
}
N();
var Ho = () => () => {};
function VK(o) {
  let {
    focusManager: focusManager_2
  } = Pe(Y_);
  return At(focusManager_2?.subscribe ?? Ho, () => {
    let current = o.current,
      u = focusManager_2?.activeElement;
    if (!current || !u) return !1;
    return rL(u, current);
  }, () => !1);
}
N();
function ta() {
  return Pe(Wvn) ?? jo;
}
function jo() {
  return Date.now();
}
N();
function Hvn(o) {
  let r = Pe(iS),
    l = o === null ? null : Math.ceil(be(o) / Xg) * Xg,
    u = T(null),
    d = X(() => {
      if (!r || l === null) return gIe;
      return m => r.subscribeFollower(() => {
        u.current = r.now(), m();
      });
    }, [r, l]);
  return At(d, () => {
    if (!r || l === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / l) * l;
  });
}
function Vs(o, r, l) {
  let u = T(o);
  u.current = o;
  let d = Pe(iS),
    m = l?.immediate ?? !1,
    f = T(null),
    h = X(() => !d || r === null ? b => (f.current = null, () => {}) : b => {
      if (m && f.current === null) u.current();
      return f.current = r, Iue(d, () => u.current(), r);
    }, [d, r, m]);
  At(h, Qvn);
}
function Iue(o, r, l) {
  let u = !1,
    d,
    m = () => {
      if (u) return;
      try {
        r();
      } finally {
        if (!u) d = o.setTimeout(m, l);
      }
    };
  return d = o.setTimeout(m, l), () => {
    u = !0, d();
  };
}
N();
function od(o) {
  let {
      subscribeLayout: subscribeLayout
    } = Pe(Y_),
    l = At(subscribeLayout, o),
    [, u] = RE(d => d + 1, 0);
  return sn(() => {
    if (!Object.is(o(), l)) u();
  }), l;
}
N();
function Fvn(o) {
  let {
    retainFinePointer: retainFinePointer
  } = Pe(Y_);
  R(() => o ? retainFinePointer() : void 0, [o, retainFinePointer]);
}
N();
function Qe(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = 0,
    l = o;
  for (;;) {
    let parentNode_2 = l.parentNode;
    if (!parentNode_2?.yogaNode || !l.yogaNode) return;
    r += l.yogaNode.getComputedTop();
    let parentNode_3 = parentNode_2.parentNode;
    if (parentNode_3?.yogaNode !== void 0 && (parentNode_3.style.overflowY ?? parentNode_3.style.overflow) === "scroll") return Ko(o, parentNode_3, {
      top: parentNode_2.yogaNode.getComputedTop() + r,
      itemTop: parentNode_2.yogaNode.getComputedTop() + l.yogaNode.getComputedTop(),
      itemHeight: l.yogaNode.getComputedHeight()
    });
    l = parentNode_2;
  }
}
function Ko(o, r, l) {
  let {
      scrollTopRendered: scrollTopRendered,
      yogaNode: yogaNode_2
    } = r,
    m = o.yogaNode?.getComputedHeight();
  if (scrollTopRendered === void 0 || !yogaNode_2 || !m) return;
  let f = yogaNode_2.getComputedBorder(1),
    h = yogaNode_2.getComputedHeight() - yogaNode_2.getComputedBorder(3),
    b = f + yogaNode_2.getComputedPadding(1),
    y = h - yogaNode_2.getComputedPadding(3),
    v = l.top - scrollTopRendered,
    C = l.itemTop - scrollTopRendered,
    E = C + l.itemHeight <= b || C >= y,
    P = Math.max(v, f),
    k = Math.min(v + m, h);
  return E || P >= k ? null : {
    first: P - v,
    last: k - v - 1,
    of: m
  };
}
function $vn(o, rows_2) {
  let {
      subscribeFrames: subscribeFrames
    } = Pe(Y_),
    u = T(null),
    d = T({
      rows: rows_2,
      lastRows: void 0,
      contentRows: void 0
    }),
    m = At(se(f => o ? subscribeFrames(f) : () => {}, [o, subscribeFrames]), se(() => {
      if (!o) return;
      let f = u.current?.yogaNode?.getComputedHeight(),
        h = u.current?.childNodes.reduce((P, k) => P + (k.yogaNode?.getComputedHeight() ?? 0), 0),
        b = Qe(u.current),
        current_2 = d.current,
        v = b === void 0 || b === current_2.rows || !!b && !!current_2.rows && b.first === current_2.rows.first && b.last === current_2.rows.last && b.of === current_2.rows.of,
        contentRows = f === void 0 ? void 0 : h;
      if (!(v && contentRows === current_2.contentRows)) d.current = {
        rows: v ? current_2.rows : b,
        lastRows: f || current_2.lastRows,
        contentRows: contentRows
      };else if (f) current_2.lastRows = f;
      return d.current;
    }, [o]));
  return [u, m?.rows, m?.lastRows, m?.contentRows];
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
      subscribe: r => o.subscribeToSelectionChange(r),
      moveFocus: r => o.moveSelectionFocus(r),
      setSelectionBgColor: r => o.setSelectionBgColor(r)
    };
  }, [o]);
}
var Vo = () => () => {},
  zo = () => !1;
function F8r() {
  Pe(ioe);
  let o = xs().get(process.stdout);
  return At(o ? o.subscribeToSelectionChange : Vo, o ? o.hasTextSelection : zo);
}
N();
var V = (r_2, g_2, b_2) => ({
    type: "rgb",
    r: r_2,
    g: g_2,
    b: b_2
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
function aVt(o, status) {
  let l = Pe(Bj),
    u = T(null);
  R(() => {
    if (o === null) {
      if (u.current !== null && l && FPt()) l(bR(Ctn));
      u.current = null;
      return;
    }
    if (u.current = o, !l || !FPt()) return;
    let d = Go[o],
      m = o === "idle" && status !== void 0 ? {
        ...d,
        status: status
      } : d;
    l(bR(e_o(m)));
  }, [o, status, l]);
}
N();
function Oue(o) {
  let r = Pe(Bj);
  R(() => {
    if (o === null || !r) return;
    let l = wt(o);
    process.title = l;
  }, [o, r]);
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
      let P = k => (y.current = null, k(), v(() => {
        if (y.current = P, d) b.current?.();else k();
      }, f));
      return P;
    }, [v, f, d, h, ...(l ?? [])]),
    E = At(C, d ? Yo : () => y.current === C);
  if (!d) return E;
}
var Jo = o => ({
    width: o.yogaNode?.getComputedWidth() ?? 0,
    height: o.yogaNode?.getComputedHeight() ?? 0
  }),
  Xi = Jo;
function zbe(o, r) {
  let l = 0,
    u = o;
  while (u !== void 0 && u !== r) l += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? l : -1;
}
function Ce(o, r) {
  let children_18 = ad(re, null, ad(mVt, null, ad(QJe, null, ad(Te, null, o))));
  return r !== void 0 ? ad(JJe, {
    ...r,
    children: children_18
  }) : children_18;
}
function et() {
  return {
    nativeCursor: PH(),
    atlasRecorder: Ae()
  };
}
async function fU(o, r, l) {
  let u = l?.storageV5 !== void 0 ? C6e(l.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return le(Ce(o, u), r);
  return le(Ce(o, u), {
    ...et(),
    ...r
  });
}
var weakMap = new WeakMap();
async function d_t(o, r) {
  let l = await we({
      ...et(),
      ...o
    }),
    u = r?.storageV5 !== void 0 ? C6e(r.storageV5) : void 0,
    d = {
      ...l,
      render: f => l.render(Ce(f, u))
    },
    m = xs().get(o?.stdout ?? process.stdout);
  if (m) weakMap.set(m, d);
  return d;
}
function Her(o = process.stdout) {
  let r = xs().get(o);
  return r && weakMap.get(r);
}
export { cO, Js, tL, yje, H8r, s, _je, n, bt, Jr, nL, _t, SA, iVt, Yw, w5, qC, Yc, Wbe, HQ, Ta, ek, pU, Pue, VK, ta, Hvn, Vs, Iue, od, Fvn, $vn, KC, F8r, aVt, Oue, _r, zbe, Xi, fU, d_t, Her };