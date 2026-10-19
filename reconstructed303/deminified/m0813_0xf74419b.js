// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { tye } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { pn, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { RMt } from "B:/~BUN/root/chunk-d69870x4.js";
import { Rh } from "B:/~BUN/root/chunk-2efkaa0v.js";
import { E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { g_e, vc, Og, jnt, S1 } from "B:/~BUN/root/chunk-3md9ngvz.js";
import { Xvt, Jwn, ew } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { P5, aT, Y4s, X4s, gjo } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { g, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { J0e } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Jvt } from "B:/~BUN/root/chunk-2jzp4p89.js";
import { sd } from "B:/~BUN/root/chunk-j2ppas05.js";
import { Wmt } from "B:/~BUN/root/chunk-psvhak2h.js";
import { lM, Dws, x$n, B7t, Lws, ygo, ai } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { trr, VVe, fce, b1, Pg, rrr, Uc, orr, irr, qVe, LF } from "B:/~BUN/root/chunk-1jz9m9yh.js";
import { SVt, $9o } from "B:/~BUN/root/chunk-vbtp6nn1.js";
import { qh, h_e } from "B:/~BUN/root/chunk-1d35msqn.js";
import { aRn } from "B:/~BUN/root/chunk-mxxcv7nt.js";
import { gce, MI, KVe, urr, Tk } from "B:/~BUN/root/chunk-t7y4rt40.js";
import { iNe, Ev } from "B:/~BUN/root/chunk-sk7eej8z.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Ig } from "B:/~BUN/root/chunk-25gtd35b.js";
import { qt, Yd, ng, ae, Ee, P, Jt, Z, ny, A, y, Dt, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { ua } from "B:/~BUN/root/chunk-pp80ffk4.js";
import { ie } from "B:/~BUN/root/chunk-t7350kw8.js";
import { S, yn } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
B();
function ft() {
  return {
    latched: null
  };
}
var tVt = qt(null);
function xe() {
  return sd() ? "fullscreen" : "inline";
}
function re(o) {
  let m = w(3),
    {
      value: value,
      children: children
    } = o,
    [u] = y(ft);
  const value_2 = value ?? u;
  let f;
  if (m[0] !== children || m[1] !== value_2) f = e(tVt.Provider, {
    value: value_2,
    children: children
  }), m[0] = children, m[1] = value_2, m[2] = f;else f = m[2];
  return f;
}
function WA() {
  let r = w(2);
  const o = Ee(tVt);
  let l;
  if (r[0] !== o) l = Ynr(o), r[0] = o, r[1] = l;else l = r[1];
  return l;
}
function Ynr(o) {
  if (o === null) return xe();
  if (typeof o === "string") return o;
  if (o.latched === null) o.latched = xe();
  return o.latched;
}
function mi() {
  return WA() === "fullscreen";
}
B();
function Re() {
  return {
    markdownTokens: new Map(),
    highlightedCode: new Map(),
    structuredDiff: new WeakMap(),
    parsedToolResults: new WeakMap()
  };
}
var Se = qt(null);
function ke({
  children: children_2
}) {
  let r = A(null);
  return r.current ??= Re(), e(Se.Provider, {
    value: r.current,
    children: children_2
  });
}
function cz() {
  let o = Ee(Se),
    r = A(null);
  if (o) return o;
  return r.current ??= Re(), r.current;
}
function nVt(o, schema, l) {
  if (!schema) return;
  if (typeof l !== "object" || l === null) return schema.safeParse(l);
  let u = o.parsedToolResults.get(l);
  if (u && yt(u, schema)) return u.parsed;
  let parsed = schema.safeParse(l);
  return o.parsedToolResults.set(l, {
    schema: schema,
    parsed: parsed
  }), parsed;
}
function yt(o, r) {
  return o.schema === r;
}
import { Stream as bt } from "stream";
import { writeSync as Te } from "fs";
function cleanupTerminalModes() {
  if (!process.stdout.isTTY) return;
  try {
    aRn();
    let o = ai().get(process.stdout);
    if (Te(1, (o?.modes.reset("mousePixels") ?? "") + h_e), o?.modes.reset("mouse"), o?.isAltScreenActive) try {
      o.unmount();
    } catch {}
    if (o?.drainStdin(), o?.detachForShutdown(), irr(o?.modes ?? new jnt(), r => Te(1, r)), !a.CLAUDE_CODE_DISABLE_TERMINAL_TITLE) process.title = "";
  } catch {}
}
function drainStdin() {
  ai().get(process.stdout)?.drainStdin();
}
var ne = {
  cleanupTerminalModes: cleanupTerminalModes,
  drainStdin: drainStdin
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
        d.unmount();
      },
      waitUntilExit: d.waitUntilExit,
      cleanup: () => ai().delete(u.stdout)
    };
  },
  vt = async (o, r) => {
    let l = ai();
    while (l.pendingStandaloneRender) await l.pendingStandaloneRender;
    await Promise.resolve();
    let u = Ct(o, r);
    return t(`[render] first ink render: ${Math.round(process.uptime() * 1000)}ms since process start`), u;
  },
  se = vt;
async function we(o = {}) {
  await Promise.resolve();
  let r = ai();
  while (r.pendingStandaloneRender) await r.pendingStandaloneRender;
  let l = xt(o, "react");
  return {
    render: u => l.render(u),
    unmount: () => l.unmount(),
    waitUntilExit: () => l.waitUntilExit()
  };
}
function xt({
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
  let x = ai();
  ygo(ne);
  let v = new qVe({
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
  if (h === "react") x.set(stdout, v);else x.treeRoots.set(stdout, v);
  return v;
}
var Rt = (stdout_2 = {}) => {
    if (stdout_2 instanceof bt) return {
      stdout: stdout_2,
      stdin: process.stdin
    };
    return stdout_2;
  },
  St = (o, r) => {
    let l = ai(),
      u = l.get(o);
    if (!u) ygo(ne), u = r(), l.set(o, u);
    return u;
  };
function _9o() {
  let o = ai().get(process.stdout);
  if (!o) return;
  kt(o.getStylePool());
}
function Pe() {
  let autoResetEnabled = E("tengu_xterm_atlas_reset", !0),
    r = E("tengu_basalt_meadow", !1);
  return {
    autoResetEnabled: autoResetEnabled,
    recording: autoResetEnabled || r
  };
}
function kt(o) {
  let atlasRecorder_2 = o.atlasRecorder;
  if (atlasRecorder_2.debugTainted) return;
  if (!E("tengu_basalt_meadow", !1)) {
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
    term_program: c(Tt()),
    is_xtermjs: Rh(),
    session_age_bucket: c(Et(tye())),
    proactive_reset_count: proactiveResetStats.count,
    proactive_reset_last_reason: c(proactiveResetStats.lastReason)
  }), !atlasRecorder_2.stylePoolHealthyReported) atlasRecorder_2.stylePoolHealthyReported = !0, g("render_stylepool");
  if (o.overflowed && !atlasRecorder_2.stylePoolCapHitReported) atlasRecorder_2.stylePoolCapHitReported = !0, p("render_stylepool", "cap_hit");
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
      return "tmux";
  }
  if (process.env.WT_SESSION !== void 0) return "windows_terminal";
  return "other";
}
function Et(o) {
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
  return RMt(o) ? r[o] : void 0;
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
  });
}
var s = wt;
B();
B();
var Mnt = qt(!1);
function Y(o, r) {
  if (!o) return;
  if (o.startsWith("rgb(") || o.startsWith("#") || o.startsWith("ansi256(") || o.startsWith("ansi:")) return o;
  return RMt(o) ? r[o] : void 0;
}
function n(o) {
  let r = w(32),
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
  let T = dimColor === void 0 ? !1 : dimColor,
    bold_2 = bold === void 0 ? !1 : bold,
    italic_2 = italic === void 0 ? !1 : italic,
    underline_2 = underline === void 0 ? !1 : underline,
    strikethrough_2 = strikethrough === void 0 ? !1 : strikethrough,
    inverse_2 = inverse === void 0 ? !1 : inverse,
    wrap_2 = wrap === void 0 ? "wrap" : wrap,
    _ = ew(),
    W = Ee(Mnt),
    U;
  if (r[12] !== color || r[13] !== T || r[14] !== W || r[15] !== _) U = T && !W ? _.inactive : Y(color, _), r[12] = color, r[13] = T, r[14] = W, r[15] = _, r[16] = U;else U = r[16];
  let color_2 = U,
    H;
  if (r[17] !== backgroundColor || r[18] !== _) H = Y(backgroundColor, _), r[17] = backgroundColor, r[18] = _, r[19] = H;else H = r[19];
  let backgroundColor_2 = H;
  const faintInk = T && !W ? color_2 : void 0;
  let oe;
  if (r[20] !== bold_2 || r[21] !== children_3 || r[22] !== m || r[23] !== inverse_2 || r[24] !== italic_2 || r[25] !== backgroundColor_2 || r[26] !== color_2 || r[27] !== strikethrough_2 || r[28] !== faintInk || r[29] !== underline_2 || r[30] !== wrap_2) oe = e(Uc, {
    color: color_2,
    backgroundColor: backgroundColor_2,
    bold: bold_2,
    faintInk: faintInk,
    italic: italic_2,
    underline: underline_2,
    strikethrough: strikethrough_2,
    inverse: inverse_2,
    wrap: wrap_2,
    ...m,
    children: children_3
  }), r[20] = bold_2, r[21] = children_3, r[22] = m, r[23] = inverse_2, r[24] = italic_2, r[25] = backgroundColor_2, r[26] = color_2, r[27] = strikethrough_2, r[28] = faintInk, r[29] = underline_2, r[30] = wrap_2, r[31] = oe;else oe = r[31];
  return oe;
}
B();
function zt(o) {
  let b = w(5),
    {
      children: children_4,
      url: l,
      fallback: fallback,
      assumeSupport: assumeSupport
    } = o,
    children_5 = children_4 ?? l;
  if (assumeSupport ? iNe() ?? !0 : Ev()) {
    let C;
    if (b[0] !== children_5 || b[1] !== l) C = e(Uc, {
      children: e("ink-link", {
        href: l,
        children: children_5
      })
    }), b[0] = children_5, b[1] = l, b[2] = C;else C = b[2];
    return C;
  }
  const children_6 = fallback ?? children_5;
  let h;
  if (b[3] !== children_6) h = e(Uc, {
    children: children_6
  }), b[3] = children_6, b[4] = h;else h = b[4];
  return h;
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
  };
}
function* Ie(o) {
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
  } of ua().segment(o)) {
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
function Gt(o, enabled) {
  switch (o) {
    case qh.CURSOR_VISIBLE:
      return {
        type: "cursor",
        action: enabled ? {
          type: "show"
        } : {
          type: "hide"
        }
      };
    case qh.ALT_SCREEN_CLEAR:
    case qh.ALT_SCREEN:
      return {
        type: "mode",
        action: {
          type: "alternateScreen",
          enabled: enabled
        }
      };
    case qh.BRACKETED_PASTE:
      return {
        type: "mode",
        action: {
          type: "bracketedPaste",
          enabled: enabled
        }
      };
    case qh.MOUSE_NORMAL:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "normal" : "off"
        }
      };
    case qh.MOUSE_BUTTON:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "button" : "off"
        }
      };
    case qh.MOUSE_ANY:
      return {
        type: "mode",
        action: {
          type: "mouseTracking",
          mode: enabled ? "any" : "off"
        }
      };
    case qh.FOCUS_EVENTS:
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
function Yt(sequence) {
  let r = sequence.slice(2);
  if (r.length === 0) return null;
  let l = r.charCodeAt(r.length - 1),
    u = r.slice(0, -1),
    d = "",
    params = u,
    f = "";
  if (u.length > 0 && "?>=<".includes(u[0])) d = u[0], params = u.slice(1);
  let b = params.charCodeAt(params.length - 1);
  if (params.length > 0 && !(b >= 48 && b <= 59)) {
    let v = params.match(/([^0-9;:]+)$/);
    if (v) f = v[1], params = params.slice(0, -f.length);
  }
  if (l === aT.SGR && d === "") return {
    type: "sgr",
    params: params
  };
  let C = params === "" ? [] : params.split(/[;:]/).map(item => item === "" ? 0 : parseInt(item, 10)),
    h = C[0] ?? 1,
    col = C[1] ?? 1;
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
      col: col
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
      ...(gjo[h] ?? gjo[0])
    }
  };
  if (d === "?" && (l === aT.SM || l === aT.RM)) {
    let v = l === aT.SM,
      k = [];
    for (let T of C) {
      let R = Gt(T, v);
      if (R) k.push(R);
    }
    return k.length ? k : {
      type: "unknown",
      sequence: sequence
    };
  }
  return {
    type: "unknown",
    sequence: sequence
  };
}
function $t(o) {
  if (o.length < 2) return "unknown";
  if (o.charCodeAt(0) !== P5.ESC) return "unknown";
  let r = o.charCodeAt(1);
  if (r === 91) return "csi";
  if (r === 93) return "osc";
  if (r === 79) return "ss3";
  return "esc";
}
class J {
  tokenizer;
  forOutput;
  tail = "";
  constructor(o) {
    this.forOutput = o?.forOutput ?? !1, this.tokenizer = J0e({
      stringsEndAtLineFeed: o?.stringsEndAtLineFeed
    });
  }
  style = SVt();
  inLink = !1;
  linkUrl;
  flush() {
    if (!this.tail) return [];
    let o = this.processText(this.tail, !1);
    return this.tail = "", o;
  }
  reset() {
    this.tail = "", this.tokenizer.reset(), this.style = SVt(), this.inLink = !1, this.linkUrl = void 0;
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
      let graphemes = [...Ie(o)];
      return this.holdTail(graphemes, r), graphemes.length > 0 ? [{
        type: "text",
        graphemes: graphemes,
        style: style
      }] : [];
    }
    let u = [];
    for (let m of o.split("\x07")) {
      if (m) {
        let graphemes_2 = [...Ie(m)];
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
    switch ($t(sequence_2)) {
      case "csi":
        {
          let l = Yt(sequence_2);
          if (!l) return [];
          if (Array.isArray(l)) return l;
          if (l.type === "sgr") return this.style = $9o(l.params, this.style), [];
          return [l];
        }
      case "osc":
        {
          let l = sequence_2.slice(2);
          if (l.endsWith("\x07")) l = l.slice(0, -1);else if (l.endsWith("\x1B\\")) l = l.slice(0, -2);
          let u = Dws(l);
          if (u) {
            if (u.type === "link") if (u.action.type === "start") this.inLink = !0, this.linkUrl = u.action.url;else this.inLink = !1, this.linkUrl = void 0;
            return [u];
          }
          return [];
        }
      case "esc":
        {
          let l = sequence_2.slice(1),
            u = De(l);
          if (u?.type === "reset") this.style = SVt(), this.inLink = !1, this.linkUrl = void 0;
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
var Go = ng(function (r) {
  let x = w(21),
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
    let v;
    if (x[0] !== dim || x[1] !== italic_4 || x[2] !== children_8 || x[3] !== wrap_3) v = e(Uc, {
      dim: dim,
      italic: italic_4,
      wrap: wrap_3,
      children: children_8
    }), x[0] = dim, x[1] = italic_4, x[2] = children_8, x[3] = wrap_3, x[4] = v;else v = x[4];
    return v;
  }
  if (children_7 === "") {
    return null;
  }
  let b, C;
  if (x[5] !== children_7 || x[6] !== dimColor_2 || x[7] !== italic_3 || x[8] !== monochrome || x[9] !== wrap_3) {
    C = yn;
    T: {
      let k = Ue(children_7);
      if (k.length === 0) {
        C = null;
        break T;
      }
      if (k.length === 1 && !ee(k[0].props) && k[0].props.hyperlink === void 0) {
        C = e(Uc, {
          dim: !!dimColor_2,
          italic: !!italic_3,
          wrap: wrap_3,
          children: k[0].text
        });
        break T;
      }
      let h;
      if (x[12] !== dimColor_2 || x[13] !== italic_3 || x[14] !== monochrome) h = (R, M) => {
        let F = R.props.hyperlink;
        if (dimColor_2) R.props.dim = !0;
        if (italic_3) R.props.italic = !0;
        if (monochrome) R.props.color = void 0;
        let children_9 = ee(R.props) ? e(pe, {
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
          children: children_9
        }, M) : children_9;
      }, x[12] = dimColor_2, x[13] = italic_3, x[14] = monochrome, x[15] = h;else h = x[15];
      b = k.map(h);
    }
    x[5] = children_7, x[6] = dimColor_2, x[7] = italic_3, x[8] = monochrome, x[9] = wrap_3, x[10] = b, x[11] = C;
  } else b = x[10], C = x[11];
  if (C !== yn) return C;
  let children_10 = b;
  const dim_2 = !!dimColor_2,
    italic_5 = !!italic_3;
  let L;
  if (x[16] !== children_10 || x[17] !== dim_2 || x[18] !== italic_5 || x[19] !== wrap_3) L = e(Uc, {
    dim: dim_2,
    italic: italic_5,
    wrap: wrap_3,
    children: children_10
  }), x[16] = children_10, x[17] = dim_2, x[18] = italic_5, x[19] = wrap_3, x[20] = L;else L = x[20];
  return L;
});
function Ue(o) {
  let l = new J({
      stringsEndAtLineFeed: !0
    }).feed(o),
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
      let props = Qt(m.style);
      if (d) props.hyperlink = d;
      let C = u.at(-1);
      if (C && to(C.props, props)) C.text += text;else u.push({
        text: text,
        props: props
      });
    }
  }
  return u;
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
  };
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
      return;
  }
}
function to(o, r) {
  return o.color === r.color && o.backgroundColor === r.backgroundColor && o.bold === r.bold && o.dim === r.dim && o.italic === r.italic && o.underline === r.underline && o.strikethrough === r.strikethrough && o.inverse === r.inverse && o.hyperlink === r.hyperlink;
}
function ee(o) {
  return o.color !== void 0 || o.backgroundColor !== void 0 || o.dim === !0 || o.bold === !0 || o.italic === !0 || o.underline === !0 || o.strikethrough === !0 || o.inverse === !0;
}
function pe(o) {
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
    if (r[5] !== children_11 || r[6] !== m) f = e(Uc, {
      ...m,
      dim: !0,
      children: children_11
    }), r[5] = children_11, r[6] = m, r[7] = f;else f = r[7];
    return f;
  }
  if (bold_3) {
    let f;
    if (r[8] !== children_11 || r[9] !== m) f = e(Uc, {
      ...m,
      bold: !0,
      children: children_11
    }), r[8] = children_11, r[9] = m, r[10] = f;else f = r[10];
    return f;
  }
  let f;
  if (r[11] !== children_11 || r[12] !== m) f = e(Uc, {
    ...m,
    children: children_11
  }), r[11] = children_11, r[12] = m, r[13] = f;else f = r[13];
  return f;
}
B();
B();
function dn() {
  let o = Ee(Tk);
  if (!o) throw Error("useClock must be used within a ClockProvider");
  return o;
}
function Ge(o) {
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
    x = mountSettleMs === void 0 ? VVe : mountSettleMs,
    [focused, k] = y(!1),
    [hovered, R] = y(!1),
    [active, F] = y(!1),
    O = dn(),
    I = A(null),
    L;
  if (r[8] !== O) L = () => O.now(), r[8] = O, r[9] = L;else L = r[9];
  let [_] = y(L),
    W,
    U;
  if (r[10] === S) W = () => () => {
    I.current?.();
  }, U = [], r[10] = W, r[11] = U;else W = r[10], U = r[11];
  P(W, U);
  let D;
  if (r[12] !== O || r[13] !== onAction) D = H => {
    if (H.key === "return" || H.key === " ") H.preventDefault(), F(!0), onAction(), I.current?.(), I.current = O.setTimeout(() => F(!1), 100);
  }, r[12] = O, r[13] = onAction, r[14] = D;else D = r[14];
  let onKeyDown = D,
    G;
  if (r[15] !== O || r[16] !== x || r[17] !== _ || r[18] !== onAction) G = oe => {
    if (oe.isWindowActivation || O.now() - _ < x) {
      oe.dropAsStray();
      return;
    }
    onAction();
  }, r[15] = O, r[16] = x, r[17] = _, r[18] = onAction, r[19] = G;else G = r[19];
  let onClick = G,
    it;
  if (r[20] === S) it = Ml => k(!0), r[20] = it;else it = r[20];
  let onFocus = it,
    st;
  if (r[21] === S) st = _l => k(!1), r[21] = st;else st = r[21];
  let onBlur = st,
    lt;
  if (r[22] === S) lt = () => R(!0), r[22] = lt;else lt = r[22];
  let onMouseEnter = lt,
    at;
  if (r[23] === S) at = () => R(!1), r[23] = at;else at = r[23];
  let onMouseLeave = at,
    ut;
  if (r[24] !== children_12 || r[25] !== active || r[26] !== focused || r[27] !== hovered) {
    let qo = {
      focused: focused,
      hovered: hovered,
      active: active
    };
    ut = typeof children_12 === "function" ? children_12(qo) : children_12;
    r[24] = children_12, r[25] = active, r[26] = focused, r[27] = hovered, r[28] = ut;
  } else ut = r[28];
  let children_13 = ut,
    ct;
  if (r[29] !== autoFocus || r[30] !== children_13 || r[31] !== onClick || r[32] !== onKeyDown || r[33] !== ref || r[34] !== f || r[35] !== tabIndex_2) ct = e(vc, {
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
    ...f,
    children: children_13
  }), r[29] = autoFocus, r[30] = children_13, r[31] = onClick, r[32] = onKeyDown, r[33] = ref, r[34] = f, r[35] = tabIndex_2, r[36] = ct;else ct = r[36];
  return ct;
}
var CL = Ge;
B();
function ot() {
  return Ee(trr);
}
function N$(o) {
  let {
    children: children_14,
    fallback: fallback_2
  } = o;
  return ot() ? fallback_2 ?? null : children_14;
}
function Kwn(o, r) {
  if (typeof o === "function") {
    o(r);
    return;
  }
  if (o) o.current = r;
}
B();
function Ek({
  line: o,
  column: r,
  active: active_2,
  visible = !1
}) {
  let d = Ee(rrr),
    m = A(null),
    f = ae(b => {
      m.current = b;
    }, []);
  return Jt(() => {
    let b = m.current;
    if (active_2 && b) d({
      relativeX: r,
      relativeY: o,
      node: b,
      visible: visible
    });else d(null, b);
  }), Jt(() => () => {
    d(null, m.current);
  }, [d]), f;
}
function qe(o) {
  let r = w(30),
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
    k = disabled === void 0 ? !1 : disabled,
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
  let L = Ek(I),
    _;
  if (r[15] !== L || r[16] !== ref_2) _ = W => {
    L(W), Kwn(ref_2, W);
  }, r[15] = L, r[16] = ref_2, r[17] = _;else _ = r[17];
  let ref_3 = _;
  if (k) {
    let D;
    if (r[18] !== children_15 || r[19] !== ref_3 || r[20] !== b) D = e(vc, {
      ref: ref_3,
      ...b,
      children: children_15
    }), r[18] = children_15, r[19] = ref_3, r[20] = b, r[21] = D;else D = r[21];
    return D;
  }
  const textEntry = !T;
  let H;
  if (r[22] !== autoFocus_3 || r[23] !== children_15 || r[24] !== onKeyDown_2 || r[25] !== onPaste || r[26] !== ref_3 || r[27] !== b || r[28] !== textEntry) H = e(vc, {
    ref: ref_3,
    tabIndex: 0,
    autoFocus: autoFocus_3,
    textEntry: textEntry,
    onKeyDown: onKeyDown_2,
    onPaste: onPaste,
    ...b,
    children: children_15
  }), r[22] = autoFocus_3, r[23] = children_15, r[24] = onKeyDown_2, r[25] = onPaste, r[26] = ref_3, r[27] = b, r[28] = textEntry, r[29] = H;else H = r[29];
  return H;
}
var Kre = qe;
function OI(o) {
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
function Iu(o) {
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
  let b;
  if (r[4] !== l || r[5] !== children_17 || r[6] !== alignSelf || r[7] !== noSelect) b = e(vc, {
    alignSelf: alignSelf,
    ...l,
    noSelect: noSelect,
    children: children_17
  }), r[4] = l, r[5] = children_17, r[6] = alignSelf, r[7] = noSelect, r[8] = b;else b = r[8];
  return b;
}
function ILe(o) {
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
B();
B();
function Qe(o, r) {
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
    if (parentNode.scrollTop) d -= fce(parentNode);
    parentNode = parentNode.parentNode;
  }
  let b = yogaNode.getComputedHeight(),
    C = d + l,
    h = b > rows ? 1 : 0,
    x = Math.max(0, b - rows) + h,
    v = x + rows;
  if (l === 0) return d >= x && d < v;
  return C > x && d < v;
}
function y8() {
  let o = Ee(Og),
    r = A(null),
    l = A({
      isVisible: !0
    }),
    u = ae(h => {
      if (r.current = h, h === null && !l.current.isVisible) l.current = {
        isVisible: !0
      };
    }, []);
  function d() {
    let isVisible = Qe(r.current, o);
    if (isVisible === null) return l.current.isVisible;
    if (isVisible !== l.current.isVisible) l.current = {
      isVisible: isVisible
    };
    return isVisible;
  }
  let m = A(d);
  m.current = d;
  let f = ae(() => m.current(), []),
    b = A(o);
  b.current = o;
  let C = ae(() => Qe(r.current, b.current), []);
  return Jt(() => {
    d();
  }), [u, l.current, f, C];
}
var Fo = 480;
function MLe(o) {
  return a.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT ? Math.max(o, Fo) : o;
}
function Aa(o = 16) {
  let r = Ee(Tk),
    [l, {
      isVisible: isVisible_2
    }, d] = y8(),
    m = gce(),
    f = A(m),
    b = isVisible_2;
  if (f.current !== m) f.current = m, b = d();
  let C = !!r && b && o !== null,
    h = o === null ? null : Math.ceil(MLe(o) / Ig) * Ig,
    x = A(0),
    v = Dt(C ? r.subscribeKeepAlive : KVe, () => C ? x.current = Math.max(x.current, Math.floor(r.now() / h) * h) : x.current);
  return [l, v];
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
    m = ae(b => () => d.current?.(), []);
  Dt(m, urr);
  let f = l?.setTimeout ?? MI;
  return Z(() => {
    let b = (...C) => {
      d.current?.(), d.current = f(() => {
        d.current = null, u.current(...C);
      }, r);
    };
    return b.cancel = () => {
      d.current?.(), d.current = null;
    }, b;
  }, [f, r]);
}
B();
var et = () => () => {};
function zCe() {
  let {
      focusManager: focusManager,
      rootNode: rootNode
    } = Ee(Pg),
    activeElement = Dt(focusManager?.subscribe ?? et, () => focusManager?.activeElement ?? null);
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
    subscribe: focusManager?.subscribe ?? et
  }), [activeElement, focusManager, rootNode]);
}
B();
var Bo = () => () => {};
function n7(o) {
  let {
    focusManager: focusManager_2
  } = Ee(Pg);
  return Dt(focusManager_2?.subscribe ?? Bo, () => {
    let current = o.current,
      u = focusManager_2?.activeElement;
    if (!current || !u) return !1;
    return b1(u, current);
  }, () => !1);
}
B();
function xa() {
  return Ee(orr) ?? Uo;
}
function Uo() {
  return Date.now();
}
B();
function Xnr(o) {
  let r = Ee(Tk),
    l = o === null ? null : Math.ceil(MLe(o) / Ig) * Ig,
    u = A(null),
    d = Z(() => {
      if (!r || l === null) return KVe;
      return m => r.subscribeFollower(() => {
        u.current = r.now(), m();
      });
    }, [r, l]);
  return Dt(d, () => {
    if (!r || l === null) return u.current = null, 0;
    if (u.current === null) u.current = r.now();
    return Math.floor(u.current / l) * l;
  });
}
function sa(o, r, l) {
  let u = A(o);
  u.current = o;
  let d = Ee(Tk),
    m = l?.immediate ?? !1,
    f = A(null),
    b = Z(() => !d || r === null ? C => (f.current = null, () => {}) : C => {
      if (m && f.current === null) u.current();
      return f.current = r, GCe(d, () => u.current(), r);
    }, [d, r, m]);
  Dt(b, urr);
}
function GCe(o, r, l) {
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
B();
function Fl(o) {
  let {
      subscribeLayout: subscribeLayout
    } = Ee(Pg),
    l = Dt(subscribeLayout, o),
    [, u] = ny(d => d + 1, 0);
  return Jt(() => {
    if (!Object.is(o(), l)) u();
  }), l;
}
B();
function Jnr(o) {
  let {
    retainFinePointer: retainFinePointer
  } = Ee(Pg);
  P(() => o ? retainFinePointer() : void 0, [o, retainFinePointer]);
}
B();
function tt(o) {
  if (!o?.yogaNode) return;
  if (o.yogaNode.getDisplay() === 1) return null;
  let r = 0,
    l = o;
  for (;;) {
    let parentNode_2 = l.parentNode;
    if (!parentNode_2?.yogaNode || !l.yogaNode) return;
    r += l.yogaNode.getComputedTop();
    let parentNode_3 = parentNode_2.parentNode;
    if (parentNode_3?.yogaNode !== void 0 && (parentNode_3.style.overflowY ?? parentNode_3.style.overflow) === "scroll") return Wo(o, parentNode_3, {
      top: parentNode_2.yogaNode.getComputedTop() + r,
      itemTop: parentNode_2.yogaNode.getComputedTop() + l.yogaNode.getComputedTop(),
      itemHeight: l.yogaNode.getComputedHeight()
    });
    l = parentNode_2;
  }
}
function Wo(o, r, l) {
  let {
      scrollTopRendered: scrollTopRendered,
      yogaNode: yogaNode_2
    } = r,
    m = o.yogaNode?.getComputedHeight();
  if (scrollTopRendered === void 0 || !yogaNode_2 || !m) return;
  let f = yogaNode_2.getComputedBorder(1),
    b = yogaNode_2.getComputedHeight() - yogaNode_2.getComputedBorder(3),
    C = f + yogaNode_2.getComputedPadding(1),
    h = b - yogaNode_2.getComputedPadding(3),
    x = l.top - scrollTopRendered,
    v = l.itemTop - scrollTopRendered,
    k = v + l.itemHeight <= C || v >= h,
    T = Math.max(x, f),
    R = Math.min(x + m, b);
  return k || T >= R ? null : {
    first: T - x,
    last: R - x - 1,
    of: m
  };
}
function Qnr(o, rows_2) {
  let {
      subscribeFrames: subscribeFrames
    } = Ee(Pg),
    u = A(null),
    d = A({
      rows: rows_2,
      lastRows: void 0,
      contentRows: void 0
    }),
    m = Dt(ae(f => o ? subscribeFrames(f) : () => {}, [o, subscribeFrames]), ae(() => {
      if (!o) return;
      let f = u.current?.yogaNode?.getComputedHeight(),
        b = u.current?.childNodes.reduce((T, R) => T + (R.yogaNode?.getComputedHeight() ?? 0), 0),
        C = tt(u.current),
        current_2 = d.current,
        x = C === void 0 || C === current_2.rows || !!C && !!current_2.rows && C.first === current_2.rows.first && C.last === current_2.rows.last && C.of === current_2.rows.of,
        contentRows = f === void 0 ? void 0 : b;
      if (!(x && contentRows === current_2.contentRows)) d.current = {
        rows: x ? current_2.rows : C,
        lastRows: f || current_2.lastRows,
        contentRows: contentRows
      };else if (f) current_2.lastRows = f;
      return d.current;
    }, [o]));
  return [u, m?.rows, m?.lastRows, m?.contentRows];
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
      subscribe: r => o.subscribeToSelectionChange(r),
      moveFocus: r => o.moveSelectionFocus(r),
      setSelectionBgColor: r => o.setSelectionBgColor(r)
    };
  }, [o]);
}
var Ho = () => () => {},
  jo = () => !1;
function Znr(o = !0) {
  Ee(g_e);
  let r = o ? ai().get(process.stdout) : void 0;
  return Dt(r ? r.subscribeToSelectionChange : Ho, r ? r.hasTextSelection : jo);
}
B();
var K = (r_2, g_2, b_2) => ({
    type: "rgb",
    r: r_2,
    g: g_2,
    b: b_2
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
function Ywn(o, status) {
  let l = Ee(S1),
    u = A(null);
  P(() => {
    if (o === null) {
      if (u.current !== null && l && B7t()) l(lM(x$n));
      u.current = null;
      return;
    }
    if (u.current = o, !l || !B7t()) return;
    let d = Vo[o],
      m = o === "idle" && status !== void 0 ? {
        ...d,
        status: status
      } : d;
    l(lM(Lws(m)));
  }, [o, status, l]);
}
B();
function VCe(o) {
  let r = Ee(S1);
  P(() => {
    if (o === null || !r) return;
    let l = pn(o);
    process.title = l;
  }, [o, r]);
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
      let T = R => (h.current = null, R(), x(() => {
        if (h.current = T, d) C.current?.();else R();
      }, f));
      return T;
    }, [x, f, d, b, ...(l ?? [])]),
    k = Dt(v, d ? Ko : () => h.current === v);
  if (!d) return k;
}
var zo = o => ({
    width: o.yogaNode?.getComputedWidth() ?? 0,
    height: o.yogaNode?.getComputedHeight() ?? 0
  }),
  Ws = zo;
function _8(o, r) {
  let l = 0,
    u = o;
  while (u !== void 0 && u !== r) l += u.yogaNode?.getComputedTop() ?? 0, u = u.parentNode;
  return u === r ? l : -1;
}
function be(o, r) {
  let children_18 = Yd(re, null, Yd(Jwn, null, Yd(Jvt, null, Yd(ke, null, o))));
  return r !== void 0 ? Yd(Xvt, {
    ...r,
    children: children_18
  }) : children_18;
}
function rt() {
  return {
    nativeCursor: LF(),
    atlasRecorder: Pe()
  };
}
async function AV(o, r, l) {
  let u = l?.storageV5 !== void 0 ? Wmt(l.storageV5) : void 0;
  if (r !== void 0 && "write" in r) return se(be(o, u), r);
  return se(be(o, u), {
    ...rt(),
    ...r
  });
}
var weakMap = new WeakMap();
async function pce(o, r) {
  let l = await we({
      ...rt(),
      ...o
    }),
    u = r?.storageV5 !== void 0 ? Wmt(r.storageV5) : void 0,
    d = {
      ...l,
      render: f => l.render(be(f, u))
    },
    m = ai().get(o?.stdout ?? process.stdout);
  if (m) weakMap.set(m, d);
  return d;
}
function A4r(o = process.stdout) {
  let r = ai().get(o);
  return r && weakMap.get(r);
}
export { tVt, WA, Ynr, mi, cz, nVt, _9o, s, Mnt, n, zt, Go, dn, CL, ot, N$, Kwn, Ek, Kre, OI, Iu, ILe, y8, MLe, Aa, TR, F$, zCe, n7, xa, Xnr, sa, GCe, Fl, Jnr, Qnr, CR, Znr, Ywn, VCe, Dr, _8, Ws, AV, pce, A4r };