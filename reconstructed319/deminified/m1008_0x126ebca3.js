// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Lxe, XA } from "B:/~BUN/root/chunk-game8aqv.js";
import { f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { KJt } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { sw } from "B:/~BUN/root/chunk-9957329g.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { PRi, gls, Ii } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { GPe, Sf, nh, pEt } from "B:/~BUN/root/chunk-dwg8my6z.js";
import { o2t, B5n, ow } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Wte, BA, $ta, Uta, b1s } from "B:/~BUN/root/chunk-1w2vha2y.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { Rqe } from "B:/~BUN/root/chunk-bkfncj77.js";
import { s2t } from "B:/~BUN/root/chunk-waswqpwd.js";
import { Kd } from "B:/~BUN/root/chunk-p2ta953m.js";
import { xFt } from "B:/~BUN/root/chunk-sc660841.js";
import { Hzr, ost, pke, Dm, Uzr, ep, jzr, zzr, sst, Kj } from "B:/~BUN/root/chunk-31b4g6te.js";
import { Dhn, b9s } from "B:/~BUN/root/chunk-c0m1y3zd.js";
import { zb, VPe } from "B:/~BUN/root/chunk-pnm80mz6.js";
import { wQn } from "B:/~BUN/root/chunk-dsgmffrq.js";
import { hke, XN, KPe, Yzr, jC } from "B:/~BUN/root/chunk-emd6eb45.js";
import { l6e, TS } from "B:/~BUN/root/chunk-y781qzhe.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Lg } from "B:/~BUN/root/chunk-e7wx2kwq.js";
import { Jt, mu, My, ue, ve, O, Zt, Z, G_, A, y, At, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Sa } from "B:/~BUN/root/chunk-63176a0t.js";
import { ce } from "B:/~BUN/root/chunk-w7vsj9wa.js";
import { w, Pn } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
j();
function pt() {
  return {
    latched: null
  };
}
var _hn = Jt(null);
function Ce() {
  return Kd() ? "fullscreen" : "inline";
}
function te(o) {
  let p = S(3),
    {
      value: value,
      children: children
    } = o,
    [u] = y(pt);
  const value_2 = value ?? u;
  let m;
  if (p[0] !== children || p[1] !== value_2) m = e(_hn.Provider, {
    value: value_2,
    children: children
  }), p[0] = children, p[1] = value_2, p[2] = m;else m = p[2];
  return m;
}
function FM() {
  let r = S(2);
  const o = ve(_hn);
  let a;
  if (r[0] !== o) a = Izr(o), r[0] = o, r[1] = a;else a = r[1];
  return a;
}
function Izr(o) {
  if (o === null) return Ce();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = Ce();
  return o.latched;
}
function oa() {
  return FM() === "fullscreen";
}
j();
function xe() {
  return {
    markdownTokens: new Map(),
    highlightedCode: new Map(),
    structuredDiff: new WeakMap(),
    parsedToolResults: new WeakMap()
  };
}
var Re = Jt(null);
function ke({
  children: children_2
}) {
  let r = A(null);
  return r.current ??= xe(), e(Re.Provider, {
    value: r.current,
    children: children_2
  });
}
function LY() {
  let o = ve(Re),
    r = A(null);
  if (o) return o;
  return r.current ??= xe(), r.current;
}
function bhn(o, schema, a) {
  if (!schema) return;
  if (typeof a !== "object" || a === null) return schema.safeParse(a);
  let u = o.parsedToolResults.get(a);
  if (u && mt(u, schema)) return u.parsed;
  let parsed = schema.safeParse(a);
  return o.parsedToolResults.set(a, {
    schema: schema,
    parsed: parsed
  }), parsed;
}
function mt(o, r) {
  return o.schema === r;
}
import { Stream as ht } from "stream";
import { writeSync as Se } from "fs";
function cleanupTerminalModes() {
  if (!process.stdout.isTTY) return;
  try {
    wQn();
    let o = Ii().get(process.stdout);
    if (Se(1, (o?.modes.reset("mousePixels") ?? "") + VPe), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount();
    } catch {}
    if (o?.drainStdin(), o?.detachForShutdown(), zzr(o?.modes ?? new pEt(), r => Se(1, r)), !i.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) process.title = "";
  } catch {}
}
function drainStdin() {
  Ii().get(process.stdout)?.drainStdin();
}
var oe = {
  cleanupTerminalModes: cleanupTerminalModes,
  drainStdin: drainStdin
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
        d.unmount();
      },
      waitUntilExit: d.waitUntilExit,
      cleanup: () => Ii().delete(u.stdout)
    };
  },
  bt = async (o, r) => {
    let a = Ii();
    while (a.pendingStandaloneRender) await a.pendingStandaloneRender;
    await Promise.resolve();
    let u = gt(o, r);
    return t(`[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`), u;
  },
  re = bt;
async function Ee(o = {}) {
  await Promise.resolve();
  let r = Ii();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let a = Ct(o, "react");
  return {
    render: u => a.render(u),
    unmount: () => a.unmount(),
    waitUntilExit: () => a.waitUntilExit()
  };
}
function Ct({
  stdout = process.stdout,
  stdin = process.stdin,
  stderr = process.stderr,
  exitOnCtrlC = !0,
  patchConsole = !0,
  onFrame: onFrame,
  nativeCursor: nativeCursor,
  isScreenReaderEnabled: isScreenReaderEnabled,
  atlasRecorder: atlasRecorder
}, h) {
  let R = Ii();
  gls(oe);
  let x = new sst({
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
  if (h === "react") R.set(stdout, x);else R.treeRoots.set(stdout, x);
  return x;
}
var vt = (stdout_2 = {}) => {
    if (stdout_2 instanceof ht) return {
      stdout: stdout_2,
      stdin: process.stdin
    };
    return stdout_2;
  },
  xt = (o, r) => {
    let a = Ii(),
      u = a.get(o);
    if (!u) gls(oe), u = r(), a.set(o, u);
    return u;
  };
function e9s() {
  let o = Ii().get(process.stdout);
  if (!o) return;
  Rt(o.getStylePool());
}
function Te() {
  let autoResetEnabled = v("tengu_xterm_atlas_reset", !0),
    r = v("tengu_basalt_meadow", !1);
  return {
    autoResetEnabled: autoResetEnabled,
    recording: autoResetEnabled || r
  };
}
function Rt(o) {
  let atlasRecorder_2 = o.atlasRecorder;
  if (atlasRecorder_2.debugTainted) return;
  if (!v("tengu_basalt_meadow", !1)) {
    if (!atlasRecorder_2.autoResetEnabled) atlasRecorder_2.recording = !1;
    return;
  }
  atlasRecorder_2.recording = !0;
  let proactiveResetStats = atlasRecorder_2.proactiveResetStats;
  if (l("tengu_render_glyph_cardinality", {
    stylepool_styles: o.size,
    stylepool_overflowed: o.overflowed,
    atlas_glyph_keys: atlasRecorder_2.size,
    atlas_keys_saturated: atlasRecorder_2.saturated,
    term_program: f(kt()),
    is_xtermjs: sw(),
    session_age_bucket: f(St(Lxe())),
    proactive_reset_count: proactiveResetStats.count,
    proactive_reset_last_reason: f(proactiveResetStats.lastReason)
  }), !atlasRecorder_2.stylePoolHealthyReported) atlasRecorder_2.stylePoolHealthyReported = !0, g("render_stylepool");
  if (o.overflowed && !atlasRecorder_2.stylePoolCapHitReported) atlasRecorder_2.stylePoolCapHitReported = !0, c("render_stylepool", "cap_hit");
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
      return "tmux";
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other";
}
function St(o) {
  let r = o / 60000;
  if (r < 5) return "lt_5m";
  if (r < 30) return "5m_30m";
  if (r < 120) return "30m_2h";
  if (r < 480) return "2h_8h";
  return "gt_8h";
}
function W(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return KJt(o) ? r[o] : void 0;
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
  });
}
var s = Et;
j();
j();
var oEt = Jt(!1);
function G(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return KJt(o) ? r[o] : void 0;
}
function n(o) {
  let r = S(32),
    backgroundColor,
    children_3,
    color,
    p,
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
    ...p
  } = o), r[0] = o, r[1] = backgroundColor, r[2] = children_3, r[3] = color, r[4] = p, r[5] = dimColor, r[6] = bold, r[7] = italic, r[8] = underline, r[9] = strikethrough, r[10] = inverse, r[11] = wrap;else backgroundColor = r[1], children_3 = r[2], color = r[3], p = r[4], dimColor = r[5], bold = r[6], italic = r[7], underline = r[8], strikethrough = r[9], inverse = r[10], wrap = r[11];
  let T = dimColor === void 0 ? !1 : dimColor,
    bold_2 = bold === void 0 ? !1 : bold,
    italic_2 = italic === void 0 ? !1 : italic,
    underline_2 = underline === void 0 ? !1 : underline,
    strikethrough_2 = strikethrough === void 0 ? !1 : strikethrough,
    inverse_2 = inverse === void 0 ? !1 : inverse,
    wrap_2 = wrap === void 0 ? "wrap" : wrap,
    _ = ow(),
    H = ve(oEt),
    B;
  if (r[12] !== color || r[13] !== T || r[14] !== H || r[15] !== _) B = T && !H ? _.inactive : G(color, _), r[12] = color, r[13] = T, r[14] = H, r[15] = _, r[16] = B;else B = r[16];
  let color_2 = B,
    U;
  if (r[17] !== backgroundColor || r[18] !== _) U = G(backgroundColor, _), r[17] = backgroundColor, r[18] = _, r[19] = U;else U = r[19];
  let backgroundColor_2 = U;
  const faintInk = T && !H ? color_2 : void 0;
  let ee;
  if (r[20] !== bold_2 || r[21] !== children_3 || r[22] !== p || r[23] !== inverse_2 || r[24] !== italic_2 || r[25] !== backgroundColor_2 || r[26] !== color_2 || r[27] !== strikethrough_2 || r[28] !== faintInk || r[29] !== underline_2 || r[30] !== wrap_2) ee = e(ep, {
    color: color_2,
    backgroundColor: backgroundColor_2,
    bold: bold_2,
    faintInk: faintInk,
    italic: italic_2,
    underline: underline_2,
    strikethrough: strikethrough_2,
    inverse: inverse_2,
    wrap: wrap_2,
    ...p,
    children: children_3
  }), r[20] = bold_2, r[21] = children_3, r[22] = p, r[23] = inverse_2, r[24] = italic_2, r[25] = backgroundColor_2, r[26] = color_2, r[27] = strikethrough_2, r[28] = faintInk, r[29] = underline_2, r[30] = wrap_2, r[31] = ee;else ee = r[31];
  return ee;
}
j();
j();
function sn(o) {
  let m = S(7),
    {
      children: children_4,
      url: a,
      fallback: fallback,
      assumeSupport: assumeSupport
    } = o,
    children_5 = children_4 ?? a,
    b;
  if (m[0] !== assumeSupport) b = () => assumeSupport ? l6e() ?? !0 : TS(), m[0] = assumeSupport, m[1] = b;else b = m[1];
  if (At(XA, b)) {
    let h;
    if (m[2] !== children_5 || m[3] !== a) h = e(ep, {
      children: e("ink-link", {
        href: a,
        children: children_5
      })
    }), m[2] = children_5, m[3] = a, m[4] = h;else h = m[4];
    return h;
  }
  const children_6 = fallback ?? children_5;
  let R;
  if (m[5] !== children_6) R = e(ep, {
    children: children_6
  }), m[5] = children_6, m[6] = R;else R = m[6];
  return R;
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
  for (let a = 0; a < o.length; a++) if (o.charCodeAt(a) >= 128) {
    r = !1;
    break;
  }
  if (r) {
    for (let a = 0; a < o.length; a++) yield {
      value: o[a],
      width: 1
    };
    return;
  }
  for (let {
    segment: a
  } of Sa().segment(o)) {
    if (a.length === 1) {
      let u = a.charCodeAt(0);
      if (u >= 32 && u < 127) {
        yield {
          value: a,
          width: 1
        };
        continue;
      }
    }
    yield {
      value: a,
      width: Math.max(1, ce(a))
    };
  }
}
function Vt(o, enabled) {
  switch (o) {
    case zb.CURSOR_VISIBLE:
      return {
        type: "cursor",
        action: enabled ? {
          type: "show"
        } : {
          type: "hide"
        }
      };
    case zb.ALT_SCREEN_CLEAR:
    case zb.ALT_SCREEN:
      return {
        type: "mode",
        action: {
          type: "alternateScreen",
          enabled: enabled
        }
      };
    case zb.BRACKETED_PASTE:
      return {
        type: "mode",
        action: {
          type: "bracketedPaste",
          enabled: enabled
        }
      };
    case zb.MOUSE_NORMAL:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "normal" : "off"
        }
      };
    case zb.MOUSE_BUTTON:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "button" : "off"
        }
      };
    case zb.MOUSE_ANY:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "any" : "off"
        }
      };
    case zb.FOCUS_EVENTS:
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
function Kt(sequence) {
  let r = sequence.slice(2);
  if (r.length === 0) return null;
  let a = r.charCodeAt(r.length - 1),
    u = r.slice(0, -1),
    d = "",
    params = u,
    m = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], params = u.slice(1);
  let b = params.charCodeAt(params.length - 1);
  if (params.length > 0 && !(b >= 48 && b <= 59)) {
    let x = params.match(/([^0-9;:]+)$/);
    if (x) m = x[1], params = params.slice(0, -m.length);
  }
  if (a === BA.SGR && d === "") return {
    type: "sgr",
    params: params
  };
  let C = params === "" ? [] : params.split(/[;:]/).map(item => item === "" ? 0 : parseInt(item, 10)),
    h = C[0] ?? 1,
    col = C[1] ?? 1;
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
      col: col
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
      ...(b1s[h] ?? b1s[0])
    }
  };
  if (d === "?" && (a === BA.SM || a === BA.RM)) {
    let x = a === BA.SM,
      E = [];
    for (let T of C) {
      let k = Vt(T, x);
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
function zt(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== Wte.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  return "esc";
}
class Shn {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? !1, this.tokenizer = Rqe({
      stringsEndAtLineFeed: o?.stringsEndAtLineFeed,
      intermediatesRunToFinal: this.forOutput
    });
  }
  style = Dhn();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, !1);
    return this.tail = "", o;
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = Dhn(), this.inLink = !1, this.linkUrl = void 0;
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
        a.push(...this.processText(p, m));
      } else {
        if (this.tail) a.push(...this.processText(this.tail, !1)), this.tail = "";
        a.push(...this.processSequence(d.value));
      }
    }
    return a;
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
    for (let p of o.split("\x07")) {
      if (p) {
        let graphemes_2 = [..._e(p)];
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
    let a = o.at(-1),
      u = a.value.charCodeAt(a.value.length - 1);
    if (u < 32) return;
    if (this.tail = a.value, o.pop(), u >= 55296 && u <= 56319 && o.length > 0) this.tail = o.pop().value + this.tail;
    while (o.length > 0 && this.tail.length <= 64) {
      let d = o.at(-1).value,
        p = d.charCodeAt(d.length - 1),
        m = p >= 56320 && p <= 57343 ? d.codePointAt(d.length - 2) : p;
      if (m === 8205 || m !== void 0 && m >= 127462 && m <= 127487) this.tail = d + this.tail, o.pop();else break;
    }
  }
  processSequence(sequence_2) {
    switch (zt(sequence_2)) {
      case "csi":
        {
          let a = Kt(sequence_2);
          if (!a) return [];
          if (Array.isArray(a)) return a;
          if (a.type === "sgr") return this.style = b9s(a.params, this.style), [];
          return [a];
        }
      case "osc":
        {
          let a = sequence_2.slice(2);
          if (a.endsWith("\x07")) a = a.slice(0, -1);else if (a.endsWith("\x1B\\")) a = a.slice(0, -2);
          let u = PRi(a);
          if (u) {
            if (u.type === "link") if (u.action.type === "start") this.inLink = !0, this.linkUrl = u.action.url;else this.inLink = !1, this.linkUrl = void 0;
            return [u];
          }
          return [];
        }
      case "esc":
        {
          let a = sequence_2.slice(1),
            u = Me(a);
          if (u?.type === "reset") this.style = Dhn(), this.inLink = !1, this.linkUrl = void 0;
          return u ? [u] : [];
        }
      default:
        return [{
          type: "unknown",
          sequence: sequence_2
        }];
    }
  }
}
var qs = My(function (r) {
  let R = S(21),
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
    let x;
    if (R[0] !== dim || R[1] !== italic_4 || R[2] !== children_8 || R[3] !== wrap_3) x = e(ep, {
      dim: dim,
      italic: italic_4,
      wrap: wrap_3,
      children: children_8
    }), R[0] = dim, R[1] = italic_4, R[2] = children_8, R[3] = wrap_3, R[4] = x;else x = R[4];
    return x;
  }
  if (children_7 === "") {
    return null;
  }
  let b, C;
  if (R[5] !== children_7 || R[6] !== dimColor_2 || R[7] !== italic_3 || R[8] !== monochrome || R[9] !== wrap_3) {
    C = Pn;
    T: {
      let E = Fe(children_7);
      if (E.length === 0) {
        C = null;
        break T;
      }
      if (E.length === 1 && !X(E[0].props) && E[0].props.hyperlink === void 0) {
        C = e(ep, {
          dim: !!dimColor_2,
          italic: !!italic_3,
          wrap: wrap_3,
          children: E[0].text
        });
        break T;
      }
      let h;
      if (R[12] !== dimColor_2 || R[13] !== italic_3 || R[14] !== monochrome) h = (k, M) => {
        let L = k.props.hyperlink;
        if (dimColor_2) k.props.dim = !0;
        if (italic_3) k.props.italic = !0;
        if (monochrome) k.props.color = void 0;
        let children_9 = X(k.props) ? e(ae, {
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
          children: children_9
        }, M) : children_9;
      }, R[12] = dimColor_2, R[13] = italic_3, R[14] = monochrome, R[15] = h;else h = R[15];
      b = E.map(h);
    }
    R[5] = children_7, R[6] = dimColor_2, R[7] = italic_3, R[8] = monochrome, R[9] = wrap_3, R[10] = b, R[11] = C;
  } else b = R[10], C = R[11];
  if (C !== Pn) return C;
  let children_10 = b;
  const dim_2 = !!dimColor_2,
    italic_5 = !!italic_3;
  let F;
  if (R[16] !== children_10 || R[17] !== dim_2 || R[18] !== italic_5 || R[19] !== wrap_3) F = e(ep, {
    dim: dim_2,
    italic: italic_5,
    wrap: wrap_3,
    children: children_10
  }), R[16] = children_10, R[17] = dim_2, R[18] = italic_5, R[19] = wrap_3, R[20] = F;else F = R[20];
  return F;
});
function Fe(o) {
  let a = new Shn({
      stringsEndAtLineFeed: !0
    }).feed(o),
    u = [],
    d;
  for (let p of a) {
    if (p.type === "link") {
      if (p.action.type === "start") d = p.action.url;else d = void 0;
      continue;
    }
    if (p.type === "text") {
      let text = p.graphemes.map(item => item.value).join("");
      if (!text) continue;
      let props = $t(p.style);
      if (d) props.hyperlink = d;
      let C = u.at(-1);
      if (C && Xt(C.props, props)) C.text += text;else u.push({
        text: text,
        props: props
      });
    }
  }
  return u;
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
  };
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
      return;
  }
}
function Xt(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink;
}
function X(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === !0 || o.bold === !0 || o.italic === !0 || o.underline === !0 || o.strikethrough === !0 || o.inverse === !0;
}
function ae(o) {
  let r = S(14),
    bold_3,
    children_11,
    dim_3,
    p;
  if (r[0] !== o) ({
    bold: bold_3,
    dim: dim_3,
    children: children_11,
    ...p
  } = o), r[0] = o, r[1] = bold_3, r[2] = children_11, r[3] = dim_3, r[4] = p;else bold_3 = r[1], children_11 = r[2], dim_3 = r[3], p = r[4];
  if (dim_3) {
    let m;
    if (r[5] !== children_11 || r[6] !== p) m = e(ep, {
      ...p,
      dim: !0,
      children: children_11
    }), r[5] = children_11, r[6] = p, r[7] = m;else m = r[7];
    return m;
  }
  if (bold_3) {
    let m;
    if (r[8] !== children_11 || r[9] !== p) m = e(ep, {
      ...p,
      bold: !0,
      children: children_11
    }), r[8] = children_11, r[9] = p, r[10] = m;else m = r[10];
    return m;
  }
  let m;
  if (r[11] !== children_11 || r[12] !== p) m = e(ep, {
    ...p,
    children: children_11
  }), r[11] = children_11, r[12] = p, r[13] = m;else m = r[13];
  return m;
}
j();
j();
function Rn() {
  let o = ve(jC);
  if (!o) throw Error("useClock must be used within a ClockProvider");
  return o;
}
function Ke(o) {
  let r = S(37),
    autoFocus,
    children_12,
    onAction,
    ref,
    m,
    tabIndex,
    mountSettleMs;
  if (r[0] !== o) ({
    onAction: onAction,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    mountSettleMs: mountSettleMs,
    children: children_12,
    ref: ref,
    ...m
  } = o), r[0] = o, r[1] = autoFocus, r[2] = children_12, r[3] = onAction, r[4] = ref, r[5] = m, r[6] = tabIndex, r[7] = mountSettleMs;else autoFocus = r[1], children_12 = r[2], onAction = r[3], ref = r[4], m = r[5], tabIndex = r[6], mountSettleMs = r[7];
  let tabIndex_2 = tabIndex === void 0 ? 0 : tabIndex,
    R = mountSettleMs === void 0 ? ost : mountSettleMs,
    [focused, E] = y(!1),
    [hovered, k] = y(!1),
    [active, L] = y(!1),
    P = Rn(),
    I = A(null),
    F;
  if (r[8] !== P) F = () => P.now(), r[8] = P, r[9] = F;else F = r[9];
  let [_] = y(F),
    H,
    B;
  if (r[10] === w) H = () => () => {
    I.current?.();
  }, B = [], r[10] = H, r[11] = B;else H = r[10], B = r[11];
  O(H, B);
  let D;
  if (r[12] !== P || r[13] !== onAction) D = U => {
    if (U.key === "return" || U.key === " ") U.preventDefault(), L(!0), onAction(), I.current?.(), I.current = P.setTimeout(() => L(!1), 100);
  }, r[12] = P, r[13] = onAction, r[14] = D;else D = r[14];
  let onKeyDown = D,
    z;
  if (r[15] !== P || r[16] !== R || r[17] !== _ || r[18] !== onAction) z = ee => {
    if (ee.isWindowActivation || P.now() - _ < R) {
      ee.dropAsStray();
      return;
    }
    onAction();
  }, r[15] = P, r[16] = R, r[17] = _, r[18] = onAction, r[19] = z;else z = r[19];
  let onClick = z,
    rt;
  if (r[20] === w) rt = cl => E(!0), r[20] = rt;else rt = r[20];
  let onFocus = rt,
    nt;
  if (r[21] === w) nt = dl => E(!1), r[21] = nt;else nt = r[21];
  let onBlur = nt,
    it;
  if (r[22] === w) it = () => k(!0), r[22] = it;else it = r[22];
  let onMouseEnter = it,
    st;
  if (r[23] === w) st = () => k(!1), r[23] = st;else st = r[23];
  let onMouseLeave = st,
    lt;
  if (r[24] !== children_12 || r[25] !== active || r[26] !== focused || r[27] !== hovered) {
    let zo = {
      focused: focused,
      hovered: hovered,
      active: active
    };
    lt = typeof children_12 === "function" ? children_12(zo) : children_12;
    r[24] = children_12, r[25] = active, r[26] = focused, r[27] = hovered, r[28] = lt;
  } else lt = r[28];
  let children_13 = lt,
    at;
  if (r[29] !== autoFocus || r[30] !== children_13 || r[31] !== onClick || r[32] !== onKeyDown || r[33] !== ref || r[34] !== m || r[35] !== tabIndex_2) at = e(Sf, {
    ref: ref,
    tabIndex: tabIndex_2,
    autoFocus: autoFocus,
    onKeyDown: onKeyDown,
    onClick: onClick,
    onFocus: onFocus,
    onBlur: onBlur,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    hoverFollowsPaint: !0,
    ...m,
    children: children_13
  }), r[29] = autoFocus, r[30] = children_13, r[31] = onClick, r[32] = onKeyDown, r[33] = ref, r[34] = m, r[35] = tabIndex_2, r[36] = at;else at = r[36];
  return at;
}
var L0 = Ke;
j();
function ot() {
  return ve(Hzr);
}
function Gj(o) {
  let {
    children: children_14,
    fallback: fallback_2
  } = o;
  return ot() ? fallback_2 ?? null : children_14;
}
function H5n(o, r) {
  if (typeof o === "function") {
    o(r);
    return;
  }
  if (o) o.current = r;
}
j();
function BC({
  line: o,
  column: r,
  active: active_2,
  visible = !1
}) {
  let d = ve(Uzr),
    p = A(null),
    m = ue(b => {
      p.current = b;
    }, []);
  return Zt(() => {
    let b = p.current;
    if (active_2 && b) d({
      relativeX: r,
      relativeY: o,
      node: b,
      visible: visible
    });else d(null, b);
  }), Zt(() => () => {
    d(null, p.current);
  }, [d]), m;
}
function $e(o) {
  let r = S(30),
    caret,
    children_15,
    onKeyDown_2,
    onPaste,
    ref_2,
    b,
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
    ...b
  } = o), r[0] = o, r[1] = caret, r[2] = children_15, r[3] = onKeyDown_2, r[4] = onPaste, r[5] = ref_2, r[6] = b, r[7] = autoFocus_2, r[8] = disabled, r[9] = allowPrintableKeybindings;else caret = r[1], children_15 = r[2], onKeyDown_2 = r[3], onPaste = r[4], ref_2 = r[5], b = r[6], autoFocus_2 = r[7], disabled = r[8], allowPrintableKeybindings = r[9];
  let autoFocus_3 = autoFocus_2 === void 0 ? !1 : autoFocus_2,
    E = disabled === void 0 ? !1 : disabled,
    T = allowPrintableKeybindings === void 0 ? !1 : allowPrintableKeybindings;
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
  let F = BC(I),
    _;
  if (r[15] !== F || r[16] !== ref_2) _ = H => {
    F(H), H5n(ref_2, H);
  }, r[15] = F, r[16] = ref_2, r[17] = _;else _ = r[17];
  let ref_3 = _;
  if (E) {
    let D;
    if (r[18] !== children_15 || r[19] !== ref_3 || r[20] !== b) D = e(Sf, {
      ref: ref_3,
      ...b,
      children: children_15
    }), r[18] = children_15, r[19] = ref_3, r[20] = b, r[21] = D;else D = r[21];
    return D;
  }
  const textEntry = !T;
  let U;
  if (r[22] !== autoFocus_3 || r[23] !== children_15 || r[24] !== onKeyDown_2 || r[25] !== onPaste || r[26] !== ref_3 || r[27] !== b || r[28] !== textEntry) U = e(Sf, {
    ref: ref_3,
    tabIndex: 0,
    autoFocus: autoFocus_3,
    textEntry: textEntry,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    ...b,
    children: children_15
  }), r[22] = autoFocus_3, r[23] = children_15, r[24] = onKeyDown_2, r[25] = onPaste, r[26] = ref_3, r[27] = b, r[28] = textEntry, r[29] = U;else U = r[29];
  return U;
}
var che = $e;
function KN(o) {
  let u = S(4),
    {
      count: count
    } = o,
    a = count === void 0 ? 1 : count,
    children_16;
  if (u[0] !== a) children_16 = `
`.repeat(a), u[0] = a, u[1] = children_16;else children_16 = u[1];
  let p;
  if (u[2] !== children_16) p = e("ink-text", {
    children: children_16
  }), u[2] = children_16, u[3] = p;else p = u[3];
  return p;
}
function Gp(o) {
  let r = S(9),
    a,
    children_17,
    fromLeftEdge;
  if (r[0] !== o) ({
    children: children_17,
    fromLeftEdge: fromLeftEdge,
    ...a
  } = o), r[0] = o, r[1] = a, r[2] = children_17, r[3] = fromLeftEdge;else a = r[1], children_17 = r[2], fromLeftEdge = r[3];
  const alignSelf = fromLeftEdge ? "stretch" : void 0,
    noSelect = fromLeftEdge ? "from-left-edge" : !0;
  let b;
  if (r[4] !== a || r[5] !== children_17 || r[6] !== alignSelf || r[7] !== noSelect) b = e(Sf, {
    alignSelf: alignSelf,
    ...a,
    noSelect: noSelect,
    children: children_17
  }), r[4] = a, r[5] = children_17, r[6] = alignSelf, r[7] = noSelect, r[8] = b;else b = r[8];
  return b;
}
function xYe(o) {
  let u = S(6),
    {
      lines: lines,
      width: a
    } = o;
  if (lines.length === 0) {
    return null;
  }
  let rawText;
  if (u[0] !== lines) rawText = lines.join(`
`), u[0] = lines, u[1] = rawText;else rawText = u[1];
  let p;
  if (u[2] !== lines.length || u[3] !== rawText || u[4] !== a) p = e("ink-raw-ansi", {
    rawText: rawText,
    rawWidth: a,
    rawHeight: lines.length
  }), u[2] = lines.length, u[3] = rawText, u[4] = a, u[5] = p;else p = u[5];
  return p;
}
j();
j();
function qe(o, r) {
  if (!o?.yogaNode || !r) return null;
  let a = o.yogaNode.getComputedHeight(),
    rows = r.rows,
    d = o.yogaNode.getComputedTop(),
    {
      parentNode: parentNode,
      yogaNode: yogaNode
    } = o;
  while (parentNode) {
    if (parentNode.yogaNode) d += parentNode.yogaNode.getComputedTop(), yogaNode = parentNode.yogaNode;
    if ((parentNode.style.overflowY ?? parentNode.style.overflow) === "scroll" && parentNode.scrollTopRendered === void 0) return null;
    if (parentNode.scrollTop) d -= pke(parentNode);
    parentNode = parentNode.parentNode;
  }
  let b = yogaNode.getComputedHeight(),
    C = d + a,
    h = b > rows ? 1 : 0,
    R = Math.max(0, b - rows) + h,
    x = R + rows;
  if (a === 0) return d >= R && d < x;
  return C > R && d < x;
}
function NY() {
  let o = ve(nh),
    r = A(null),
    a = A({
      isVisible: !0
    }),
    u = ue(h => {
      if (r.current = h, h === null && !a.current.isVisible) a.current = {
        isVisible: !0
      };
    }, []);
  function d() {
    let isVisible = qe(r.current, o);
    if (isVisible === null) return a.current.isVisible;
    if (isVisible !== a.current.isVisible) a.current = {
      isVisible: isVisible
    };
    return isVisible;
  }
  let p = A(d);
  p.current = d;
  let m = ue(() => p.current(), []),
    b = A(o);
  b.current = o;
  let C = ue(() => qe(r.current, b.current), []);
  return Zt(() => {
    d();
  }), [u, a.current, m, C];
}
var _o = 480;
function PYe(o) {
  return i.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, _o) : o;
}
function pl(o = 16) {
  let r = ve(jC),
    [a, {
      isVisible: isVisible_2
    }, d] = NY(),
    p = hke(),
    m = A(p),
    b = isVisible_2;
  if (m.current !== p) m.current = p, b = d();
  let C = !!r && b && o !== null,
    h = o === null ? null : Math.ceil(PYe(o) / Lg) * Lg,
    R = A(0),
    x = At(C ? r.subscribeKeepAlive : KPe, () => C ? R.current = Math.max(R.current, Math.floor(r.now() / h) * h) : R.current);
  return [a, x];
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
    p = ue(b => () => d.current?.(), []);
  At(p, Yzr);
  let m = a?.setTimeout ?? XN;
  return Z(() => {
    let b = (...C) => {
      d.current?.(), d.current = m(() => {
        d.current = null, u.current(...C);
      }, r);
    };
    return b.cancel = () => {
      d.current?.(), d.current = null;
    }, b;
  }, [m, r]);
}
j();
var Xe = () => () => {};
function xUe() {
  let {
      focusManager: focusManager,
      rootNode: rootNode
    } = ve(Dm),
    activeElement = At(focusManager?.subscribe ?? Xe, () => focusManager?.activeElement ?? null);
  return Z(() => ({
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
j();
function Qi() {
  return ve(jzr) ?? Io;
}
function Io() {
  return Date.now();
}
j();
function Mzr(o) {
  let r = ve(jC),
    a = o === null ? null : Math.ceil(PYe(o) / Lg) * Lg,
    u = A(null),
    d = Z(() => {
      if (!r || a === null) return KPe;
      return p => r.subscribeFollower(() => {
        u.current = r.now(), p();
      });
    }, [r, a]);
  return At(d, () => {
    if (!r || a === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / a) * a;
  });
}
function sl(o, r, a) {
  let u = A(o);
  u.current = o;
  let d = ve(jC),
    p = a?.immediate ?? !1,
    m = A(null),
    b = Z(() => !d || r === null ? C => (m.current = null, () => {}) : C => {
      if (p && m.current === null) u.current();
      return m.current = r, PUe(d, () => u.current(), r);
    }, [d, r, p]);
  At(b, Yzr);
}
function PUe(o, r, a) {
  let u = !1,
    d,
    p = () => {
      if (u) return;
      try {
        r();
      } finally {
        if (!u) d = o.setTimeout(p, a);
      }
    };
  return d = o.setTimeout(p, a), () => {
    u = !0, d();
  };
}
j();
function Ia(o) {
  let {
      subscribeLayout: subscribeLayout
    } = ve(Dm),
    a = At(subscribeLayout, o),
    [, u] = G_(d => d + 1, 0);
  return Zt(() => {
    if (!Object.is(o(), a)) u();
  }), a;
}
j();
function Dzr(o) {
  let {
    retainFinePointer: retainFinePointer
  } = ve(Dm);
  O(() => o ? retainFinePointer() : void 0, [o, retainFinePointer]);
}
j();
function $5n(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = Qe(o);
  return r && Lo(o, r.box, r.at);
}
function r2t(o) {
  let r = o?.yogaNode && Qe(o);
  if (!r) return;
  return {
    row: r.row,
    rows: o?.yogaNode?.getComputedHeight() ?? 0,
    viewportRows: r.box.scrollViewportHeight
  };
}
function Qe(o) {
  let row = 0,
    a = o;
  for (;;) {
    let parentNode_2 = a.parentNode;
    if (!parentNode_2?.yogaNode || !a.yogaNode) return;
    row += a.yogaNode.getComputedTop();
    let d = parentNode_2.parentNode;
    if (d?.yogaNode !== void 0 && (d.style.overflowY ?? d.style.overflow) === "scroll") return {
      box: d,
      row: row,
      at: {
        top: parentNode_2.yogaNode.getComputedTop() + row,
        itemTop: parentNode_2.yogaNode.getComputedTop() + a.yogaNode.getComputedTop(),
        itemHeight: a.yogaNode.getComputedHeight()
      }
    };
    a = parentNode_2;
  }
}
function Lo(o, r, a) {
  let {
      scrollTopRendered: scrollTopRendered,
      yogaNode: yogaNode_2
    } = r,
    p = o.yogaNode?.getComputedHeight();
  if (scrollTopRendered === void 0 || !yogaNode_2 || !p) return;
  let m = yogaNode_2.getComputedBorder(1),
    b = yogaNode_2.getComputedHeight() - yogaNode_2.getComputedBorder(3),
    C = m + yogaNode_2.getComputedPadding(1),
    h = b - yogaNode_2.getComputedPadding(3),
    R = a.top - scrollTopRendered,
    x = a.itemTop - scrollTopRendered,
    E = x + a.itemHeight <= C || x >= h,
    T = Math.max(R, m),
    k = Math.min(R + p, b);
  return E || T >= k ? null : {
    first: T - R,
    last: k - R - 1,
    of: p
  };
}
function Lzr(o, rows_2) {
  let {
      subscribeFrames: subscribeFrames
    } = ve(Dm),
    u = A(null),
    d = A({
      rows: rows_2,
      lastRows: void 0,
      contentRows: void 0
    }),
    p = At(ue(m => o ? subscribeFrames(m) : () => {}, [o, subscribeFrames]), ue(() => {
      if (!o) return;
      let m = u.current?.yogaNode?.getComputedHeight(),
        b = u.current?.childNodes.reduce((T, k) => T + (k.yogaNode?.getComputedHeight() ?? 0), 0),
        C = $5n(u.current),
        current = d.current,
        R = C === void 0 || C === current.rows || !!C && !!current.rows && C.first === current.rows.first && C.last === current.rows.last && C.of === current.rows.of,
        contentRows = m === void 0 ? void 0 : b;
      if (!(R && contentRows === current.contentRows)) d.current = {
        rows: R ? current.rows : C,
        lastRows: m || current.lastRows,
        contentRows: contentRows
      };else if (m) current.lastRows = m;
      return d.current;
    }, [o]));
  return [u, p?.rows, p?.lastRows, p?.contentRows];
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
      subscribe: r => o.subscribeToSelectionChange(r),
      moveFocus: r => o.moveSelectionFocus(r),
      setSelectionBgColor: r => o.setSelectionBgColor(r)
    };
  }, [o]);
}
var Fo = () => () => {},
  Bo = () => !1;
function Nzr(o = !0) {
  ve(GPe);
  let r = o ? Ii().get(process.stdout) : void 0;
  return At(r ? r.subscribeToSelectionChange : Fo, r ? r.hasTextSelection : Bo);
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
      let T = k => (h.current = null, k(), R(() => {
        if (h.current = T, d) C.current?.();else k();
      }, m));
      return T;
    }, [R, m, d, b, ...(a ?? [])]),
    E = At(x, d ? Ho : () => h.current === x);
  if (!d) return E;
}
var Uo = o => ({
    width: o.yogaNode?.getComputedWidth() ?? 0,
    height: o.yogaNode?.getComputedHeight() ?? 0
  }),
  Ss = Uo;
function qN(o, r) {
  let a = 0,
    u = o;
  while (u !== void 0 && u !== r) a += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? a : -1;
}
function he(o, r) {
  let children_18 = mu(te, null, mu(B5n, null, mu(s2t, null, mu(ke, null, o))));
  return r !== void 0 ? mu(o2t, {
    ...r,
    children: children_18
  }) : children_18;
}
function et() {
  return {
    nativeCursor: Kj(),
    atlasRecorder: Te()
  };
}
async function $G(o, r, a) {
  let u = a?.storageV5 !== void 0 ? xFt(a.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return re(he(o, u), r);
  return re(he(o, u), {
    ...et(),
    ...r
  });
}
var weakMap = new WeakMap();
async function cke(o, r) {
  let a = await Ee({
      ...et(),
      ...o
    }),
    u = r?.storageV5 !== void 0 ? xFt(r.storageV5) : void 0,
    d = {
      ...a,
      render: m => a.render(he(m, u))
    },
    p = Ii().get(o?.stdout ?? process.stdout);
  if (p) weakMap.set(p, d);
  return d;
}
function a$o(o = process.stdout) {
  let r = Ii().get(o);
  return r && weakMap.get(r);
}
export { _hn, FM, Izr, oa, Rn, ot, LY, bhn, e9s, s, oEt, n, sn, Shn, qs, L0, Gj, H5n, BC, che, KN, Gp, xYe, NY, PYe, pl, oE, HG, xUe, Qi, Mzr, sl, PUe, Ia, Dzr, $5n, r2t, Lzr, iI, Nzr, Vr, qN, Ss, $G, cke, a$o };