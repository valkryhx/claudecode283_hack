// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { H, sf } from "B:/~BUN/root/chunk-game8aqv.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { Rwe, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { qE } from "B:/~BUN/root/chunk-apgsnbqk.js";
import { ZR, h_n, sw } from "B:/~BUN/root/chunk-9957329g.js";
import { Ew } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { mZ, Xw, bF, fy, NIt, AXt, xXt, _ls, DRi } from "B:/~BUN/root/chunk-bfwh5k9e.js";
import { SM, zl, S1s, ant, ov, fae, ywe, RT, X1t, Adn, Gta, Vta, k1s, Kta, qta } from "B:/~BUN/root/chunk-1w2vha2y.js";
import { Mhn, mEt, d9s as on, e8n as off, t8n as on_3, u2t as off_3, c9s as on_2, n8n as off_2, _B, bB, f2t, p2t, VPe, u9s as on_4, f9s as off_4, o8n } from "B:/~BUN/root/chunk-pnm80mz6.js";
import { nb } from "B:/~BUN/root/chunk-1s0yt4vj.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Jt, ue, ve, Z, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { Oe } from "B:/~BUN/root/chunk-4qfwb3rf.js";
class E {
  value = void 0;
  get() {
    let r = h_n(),
      n = sf(),
      wheelFlood = n?.wheelFlood ?? S$o(),
      jediTerm = n ? Rwe.includes(n.terminal ?? "") : qE.isJetBrainsIdeTerminal(),
      wtSession = n?.wtSession ?? !!i.WT_SESSION,
      p = sw(),
      a = this.value;
    if (a && a.xtversion === (r ?? "(no reply)") && a.wheelFlood === wheelFlood && a.jediTerm === jediTerm && a.wtSession === wtSession && a.xtermJs === p) return a;
    let platform = "win32";
    return this.value = {
      useDecayCurve: !wheelFlood && (p || platform === "win32" || wtSession),
      useAdaptiveDrain: p,
      base: jediTerm ? 2 : ne(p, wheelFlood, wtSession),
      xtermJs: p,
      wheelFlood: wheelFlood,
      jediTerm: jediTerm,
      termProgram: i.TERM_PROGRAM ?? "unset",
      termProgramVersion: i.TERM_PROGRAM_VERSION ?? "unset",
      xtversion: r ?? "(no reply)",
      wtSession: wtSession,
      scrollSpeedEnv: i.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
      platform: platform
    }, this.value;
  }
  invalidate() {
    this.value = void 0;
  }
}
var g = new W(() => new E());
function q7() {
  return g.of(H().host).get();
}
function S$o() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (i.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (i.TERM_PROGRAM === "vscode") {
    let r = re(i.TERM_PROGRAM_VERSION);
    if (r !== null) return r >= 1092000 && r < 1105000;
  }
  return h_n()?.startsWith("xterm.js") ?? !1;
}
function re(r) {
  if (!r) return null;
  let n = /^(\d+)\.(\d+)\.(\d+)/.exec(r);
  if (!n) return null;
  return +n[1] * 1e6 + +n[2] * 1000 + +n[3];
}
function Gzr(r, n, o) {
  return !n && (r || !0) ? 3 : 1;
}
function ne(r, n, o) {
  let u = Gzr(r, n, o),
    CLAUDE_CODE_SCROLL_SPEED = i.CLAUDE_CODE_SCROLL_SPEED;
  if (!CLAUDE_CODE_SCROLL_SPEED) return u;
  let p = parseFloat(CLAUDE_CODE_SCROLL_SPEED);
  return Number.isNaN(p) || p <= 0 ? u : Math.min(p, 20);
}
function xhn() {
  g.of(H().host).invalidate();
}
var y = Oe(nb(), 1);
var S = zl(0, "f");
function a9s() {
  if (qE.windowsConsoleSupportsVirtualTerminalSequences()) return RT + X1t + ov;else return RT + S;
  return RT + X1t + ov;
}
function v$o() {
  if (!qE.windowsConsoleSupportsVirtualTerminalSequences()) return RT + S;
  return RT + ov;
}
function uEt(r) {
  return ov + (ywe + S1s(1)).repeat(r) + ov;
}
function l9s() {
  if (i.TMUX && ZR().get("synchronizedOutput").state === "pending") return;
  return DUe();
}
function phe() {
  return v({
    beforeTheAnswer: !1
  });
}
function DUe() {
  return v({
    beforeTheAnswer: !0
  });
}
function v({
  beforeTheAnswer: beforeTheAnswer
}) {
  if (i.CLAUDE_BG_BACKEND === "daemon") return sf()?.syncOutput !== !1;
  if (!i.TMUX && i.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return !0;
  let n = ZR().get("synchronizedOutput");
  if (n.state === "settled") return n.value;
  return beforeTheAnswer && n.likely;
}
function Vzr(r = phe()) {
  if (i.CLAUDE_BG_BACKEND === "daemon") return !1;
  return r && i.TMUX == null && process.env.ZELLIJ == null && !qE.isJetBrainsIdeTerminal() && !sw() && i.WT_SESSION == null;
}
function fEt() {
  let r = sf()?.progressReporting;
  if (r !== void 0) return r;
  if (!process.stdout.isTTY) return !1;
  if (i.WT_SESSION) return !1;
  if (i.ConEmuANSI || i.ConEmuPID || i.ConEmuTask) return !0;
  let n = y.coerce(i.TERM_PROGRAM_VERSION);
  if (!n) return !1;
  if (i.TERM_PROGRAM === "ghostty") return Ew(n.version, "1.2.0");
  if (i.TERM_PROGRAM === "iTerm.app") return Ew(n.version, "3.6.6");
  return !1;
}
function h(r) {
  if (r != null) return _ls.includes(r);
  return ZR().now("extendedKeys");
}
function Phn(r = i.terminal, n = ZR()) {
  if (i.TMUX || i.STY || !n.now("extendedKeys")) return !1;
  return r === null || !DRi.includes(r) || n.confirmed("kittyKeyboard");
}
function IYe() {
  return !mZ() && (h() || ZR().now("kittyKeyboard")) ? k1s : "";
}
function l2t() {
  return mZ() ? "" : qta;
}
function d2t(r) {
  return h() ? k1s + (r?.legacyKitty ? Vta : Gta) + Kta : "";
}
function c2t(r) {
  return f2t + RT + ov + d2t(r);
}
function mhe() {
  return IYe() + p2t + l2t();
}
var X5n = 5000;
function Ohn() {
  return !0;
}
var Kzr = Vzr(DUe());
function qzr(r, startedMs, bytes) {
  let endedMs = performance.now(),
    slowestWrite = r.slowestWrite;
  if (slowestWrite === void 0 || endedMs - startedMs >= slowestWrite.endedMs - slowestWrite.startedMs) r.slowestWrite = {
    startedMs: startedMs,
    endedMs: endedMs,
    bytes: bytes
  };
}
function J5n(r, n) {
  if (r.stdoutDead) return;
  let o = performance.now(),
    u = Buffer.byteLength(n);
  try {
    r.stdout.write(n);
  } catch (error) {
    if (r.tolerateDeadStdout && (b(error) === "EIO" || b(error) === "EPIPE")) {
      r.stdoutDead = !0, qzr(r, o, u);
      return;
    }
    throw error;
  }
  qzr(r, o, u);
}
function E$o(r, n, o = !1, u, s = "") {
  let p = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (n.length === 0) {
    if (s !== "") J5n(r, s);
    return;
  }
  let a = !o,
    d = s + (a ? Mhn : "");
  for (let c of n) switch (c.type) {
    case "stdout":
      d += c.content;
      break;
    case "clear":
      if (c.count > 0) d += Adn(c.count);
      break;
    case "clearTerminal":
      d += c.altScreen ? a9s() : uEt(c.viewportRows);
      break;
    case "cursorHide":
      d += bB;
      break;
    case "cursorShow":
      d += _B;
      break;
    case "cursorMove":
      d += fae(c.x, p !== void 0 ? Math.max(-p, Math.min(p, c.y)) : c.y);
      break;
    case "cursorTo":
      d += ant(c.col);
      break;
    case "carriageReturn":
      d += "\r";
      break;
    case "hyperlink":
      d += NIt(c.uri);
      break;
    case "styleStr":
      d += c.str;
      break;
  }
  if (a) d += mEt;
  J5n(r, d);
}
function b(r) {
  return r && typeof r === "object" && "code" in r ? String(r.code) : void 0;
}
class cEt {
  _didStopImmediatePropagation = !1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}
import { EventEmitter as oe } from "events";
class Ahn extends oe {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(r, ...n) {
    if (r === "error") return super.emit(r, ...n);
    let o = this.rawListeners(r);
    if (o.length === 0) return !1;
    let u = n[0] instanceof cEt ? n[0] : null;
    for (let s of o) if (s.apply(this, n), u?.didStopImmediatePropagation()) break;
    return !0;
  }
}
function a2t() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: !1,
    notified: !1,
    trackpadGesture: !1,
    pendingArrowBoost: 0
  };
}
function ie(r) {
  r.bugConfirmed = !0, r.trackpadGesture = !0, r.pendingArrowBoost++;
}
function T(r) {
  r.trackpadGesture = !1, r.pendingArrowBoost = 0;
}
function s9s(r) {
  let pendingArrowBoost = r.pendingArrowBoost;
  return r.pendingArrowBoost = 0, pendingArrowBoost;
}
function w$o(r) {
  if (r.bugConfirmed) return !0;
  if (process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 || process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0) return r.bugConfirmed = !0, !0;
  return !1;
}
var se = 75,
  ae = 250,
  k$o = 200;
function i9s(r, n, o, u) {
  if (!q7().jediTerm) return T(r), n;
  let s = null;
  for (let p = 0; p < n.length; p++) {
    let a = n[p];
    if (a.kind !== "key") {
      s?.push(a);
      continue;
    }
    if (a.name === "wheelup" || a.name === "wheeldown") {
      if (o - r.lastWheelTime > k$o) r.lastWheelDownTime = 0, T(r);
      if (r.lastWheelTime = o, a.name === "wheeldown") r.lastWheelDownTime = o;
      if (a.name === "wheelup" && o - r.lastWheelDownTime < ae && w$o(r)) {
        s ??= n.slice(0, p), s.push({
          ...a,
          name: "wheeldown"
        });
        continue;
      }
      s?.push(a);
      continue;
    }
    if ((a.name === "up" || a.name === "down") && !a.ctrl && !a.meta && !a.shift && o - r.lastWheelTime < se) {
      if (!r.notified) r.notified = !0, u();
      ie(r), s ??= n.slice(0, p);
      continue;
    }
    s?.push(a);
  }
  return s ?? n;
}
function yB(r, n) {
  if (r === void 0) return;
  if (Number.isInteger(r)) return;
  t(`${n} should be an integer, got ${r}`, {
    level: "warn"
  });
}
function Q5n(hidden, label, role, state, preserveWhitespace) {
  if (hidden === void 0 && label === void 0 && role === void 0 && state === void 0 && preserveWhitespace === void 0) return;
  return {
    hidden: hidden,
    label: label,
    role: role,
    state: state,
    preserveWhitespace: preserveWhitespace
  };
}
function de({
  children: children,
  ref: ref,
  tabIndex: tabIndex,
  autoFocus: autoFocus,
  onClick: onClick,
  onFocus: onFocus,
  onBlur: onBlur,
  onMouseEnter: onMouseEnter,
  onMouseLeave: onMouseLeave,
  onPointer: onPointer,
  hoverIgnoresBlankCells: hoverIgnoresBlankCells,
  hoverFollowsPaint: hoverFollowsPaint,
  renderEvent: renderEvent,
  renderComponent: renderComponent,
  drawPending: drawPending,
  elementKey: elementKey,
  elementPlugin: elementPlugin,
  onKeyDown: onKeyDown,
  onKeyDownCapture: onKeyDownCapture,
  onPaste: onPaste,
  onPasteCapture: onPasteCapture,
  onWheel: onWheel,
  onWheelCapture: onWheelCapture,
  keybindingScope: keybindingScope,
  textEntry: textEntry,
  onAction: onAction,
  onActionCapture: onActionCapture,
  "aria-hidden": V,
  "aria-label": z,
  "aria-role": Q,
  "aria-state": ee,
  "aria-preserve-whitespace": te,
  ...style
}) {
  if (yB(style.margin, "margin"), yB(style.marginX, "marginX"), yB(style.marginY, "marginY"), yB(style.marginTop, "marginTop"), yB(style.marginBottom, "marginBottom"), style.marginLeft !== "auto") yB(style.marginLeft, "marginLeft");
  if (style.marginRight !== "auto") yB(style.marginRight, "marginRight");
  return yB(style.padding, "padding"), yB(style.paddingX, "paddingX"), yB(style.paddingY, "paddingY"), yB(style.paddingTop, "paddingTop"), yB(style.paddingBottom, "paddingBottom"), yB(style.paddingLeft, "paddingLeft"), yB(style.paddingRight, "paddingRight"), yB(style.gap, "gap"), yB(style.columnGap, "columnGap"), yB(style.rowGap, "rowGap"), style.flexWrap ??= "nowrap", style.flexDirection ??= "row", style.flexGrow ??= 0, style.flexShrink ??= 1, style.overflowX = style.overflowX ?? style.overflow ?? "visible", style.overflowY = style.overflowY ?? style.overflow ?? "visible", e("ink-box", {
    ref: ref,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    onClick: onClick,
    onFocus: onFocus,
    onBlur: onBlur,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onPointer: onPointer,
    hoverIgnoresBlankCells: hoverIgnoresBlankCells,
    hoverFollowsPaint: hoverFollowsPaint,
    renderEvent: renderEvent,
    renderComponent: renderComponent,
    drawPending: drawPending,
    elementKey: elementKey,
    elementPlugin: elementPlugin,
    onKeyDown: onKeyDown,
    onKeyDownCapture: onKeyDownCapture,
    onPaste: onPaste,
    onPasteCapture: onPasteCapture,
    onWheel: onWheel,
    onWheelCapture: onWheelCapture,
    keybindingScope: keybindingScope,
    textEntry: textEntry,
    onAction: onAction,
    onActionCapture: onActionCapture,
    accessibility: Q5n(V, z, Q, ee, te),
    style: style,
    children: children
  });
}
var Sf = de;
j();
var R = Jt({
  stdin: process.stdin,
  internal_eventEmitter: new Ahn(),
  setRawMode() {},
  isRawModeSupported: !1,
  internal_querier: null,
  internal_jediTermInput: a2t()
});
R.displayName = "InternalStdinContext";
var GPe = R;
j();
var nh = Jt(null);
j();
function x({
  background: background,
  foreground: foreground
}) {
  return Xw(fy.SET_BG_COLOR, background) + Xw(fy.SET_FG_COLOR, foreground);
}
function w() {
  return Xw(fy.RESET_BG_COLOR) + Xw(fy.RESET_FG_COLOR);
}
var f = {
  bracketedPaste: 0,
  themeReports: 0,
  extendedKeys: 0,
  altScreen: 1,
  altScreenKeys: 2,
  mouse: 2,
  mousePixels: 2,
  surface: 3,
  focusEvents: 4
};
function I(mode) {
  switch (mode) {
    case "bracketedPaste":
      return {
        mode: mode,
        on: on,
        off: off
      };
    case "themeReports":
      return {
        mode: mode,
        on: on_2,
        off: off_2
      };
    case "focusEvents":
      return {
        mode: mode,
        on: on_3,
        off: off_3
      };
    case "mousePixels":
      return {
        mode: mode,
        on: on_4,
        off: off_4
      };
    case "extendedKeys":
      return {
        mode: mode,
        get on() {
          return d2t();
        },
        get off() {
          return l2t() + IYe();
        }
      };
    case "altScreen":
      return {
        mode: mode,
        on: f2t + RT + ov,
        get off() {
          return p2t + l2t();
        }
      };
    case "altScreenKeys":
      return {
        mode: mode,
        get on() {
          return d2t();
        },
        get off() {
          return IYe();
        }
      };
  }
}
class pEt {
  entries = [];
  suspended = !1;
  kept;
  get isSuspended() {
    return this.suspended;
  }
  isSet(r) {
    return this.entries.some(item => item.mode === r);
  }
  set(r, n) {
    if (this.isSet(r)) return "";
    let o = this.add(this.entry(r, n));
    if (r === "altScreen") o += this.add(I("altScreenKeys"));
    return this.suspended ? "" : o;
  }
  reset(r) {
    if (!this.isSet(r)) return "";
    let n = r === "altScreen" ? this.remove("altScreenKeys") : "",
      o = this.remove(r);
    if (this.suspended && r === this.kept) return this.kept = void 0, o;
    return this.suspended ? "" : n + o;
  }
  reassert(r) {
    if (this.suspended) return "";
    return this.entries.find(item => item.mode === r)?.on ?? "";
  }
  reassertKeys() {
    if (this.suspended) return "";
    let r = this.isSet("altScreen") ? "altScreenKeys" : "extendedKeys";
    return this.entries.find(item => item.mode === r)?.on ?? "";
  }
  reassertFrom(r) {
    if (this.suspended || !this.isSet(r)) return "";
    return this.entries.filter(item => f[item.mode] >= f[r]).reduce((acc, item) => acc + item.on, "");
  }
  suspend(r) {
    if (this.suspended) return "";
    return this.suspended = !0, this.kept = r, this.entries.reduceRight((acc, item) => item.mode === r ? acc : acc + item.off, "");
  }
  resume({
    clearKeys = !1
  } = {}) {
    if (!this.suspended) return "";
    this.suspended = !1, this.kept = void 0;
    let n = this.isSet("altScreen"),
      o = clearKeys ? l2t() + (n ? "" : IYe()) : "";
    return this.entries.reduce((acc, item) => acc + item.on + (clearKeys && item.mode === "altScreen" ? IYe() : ""), o);
  }
  resetAll() {
    let r = this.suspended ? this.entries.filter(item => item.mode === this.kept) : this.entries;
    return this.entries = [], this.kept = void 0, r.reduceRight((acc, item) => acc + item.off, "");
  }
  entry(mode_2, n) {
    switch (mode_2) {
      case "mouse":
        {
          let o = typeof n === "string" ? n : "off";
          return {
            mode: mode_2,
            on: o8n(o),
            off: o === "off" ? "" : VPe
          };
        }
      case "surface":
        return {
          mode: mode_2,
          on: typeof n === "object" ? x(n) : "",
          off: w()
        };
      default:
        return I(mode_2);
    }
  }
  add(r) {
    let n = this.entries.findIndex(item => f[item.mode] > f[r.mode]);
    if (n === -1) this.entries.push(r);else this.entries.splice(n, 0, r);
    return r.on;
  }
  remove(r) {
    let n = this.entries.findIndex(item => item.mode === r);
    if (n === -1) return "";
    return this.entries.splice(n, 1)[0].off;
  }
}
var _ = Jt(new pEt());
_.displayName = "InternalTerminalModesContext";
var Ihn = _;
j();
function m(r) {
  let n = "";
  for (let o = 0; o < r.length; o++) {
    let u = r.charCodeAt(o);
    n += u < 32 || u >= 127 && u <= 159 ? " " : r[o];
  }
  return n;
}
var wK = Jt(null),
  Provider = wK.Provider;
function QH() {
  let r = ve(wK);
  if (!r) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let notifyITerm2 = ue(({
      message: message,
      title: title
    }) => {
      let c = title ? `${title}: ${message}` : message;
      r(bF(Xw(fy.ITERM2, m(c))));
    }, [r]),
    notifyKitty = ue(({
      message: message_2,
      title: title_2,
      id: id
    }) => {
      r(bF(Xw(fy.KITTY, `i=${id}:d=0:p=title`, m(title_2)))), r(bF(Xw(fy.KITTY, `i=${id}:p=body`, m(message_2)))), r(bF(Xw(fy.KITTY, `i=${id}:d=1:a=focus`, "")));
    }, [r]),
    notifyGhostty = ue(({
      message: message_3,
      title: title_3
    }) => {
      r(bF(Xw(fy.GHOSTTY, "notify", m(title_3), m(message_3))));
    }, [r]),
    notifyBell = ue(() => {
      r(SM);
    }, [r]),
    progress = ue((a, d) => {
      if (!fEt()) return;
      if (!a) {
        r(bF(Xw(fy.ITERM2, AXt.PROGRESS, xXt.CLEAR, "")));
        return;
      }
      let c = Math.max(0, Math.min(100, Math.round(d ?? 0)));
      switch (a) {
        case "completed":
          r(bF(Xw(fy.ITERM2, AXt.PROGRESS, xXt.CLEAR, "")));
          break;
        case "error":
          r(bF(Xw(fy.ITERM2, AXt.PROGRESS, xXt.ERROR, c)));
          break;
        case "indeterminate":
          r(bF(Xw(fy.ITERM2, AXt.PROGRESS, xXt.INDETERMINATE, "")));
          break;
        case "running":
          r(bF(Xw(fy.ITERM2, AXt.PROGRESS, xXt.SET, c)));
          break;
        case null:
          break;
      }
    }, [r]);
  return Z(() => ({
    notifyITerm2: notifyITerm2,
    notifyKitty: notifyKitty,
    notifyGhostty: notifyGhostty,
    notifyBell: notifyBell,
    progress: progress
  }), [notifyITerm2, notifyKitty, notifyGhostty, notifyBell, progress]);
}
export { cEt, yB, Ahn, q7, S$o, Gzr, xhn, a2t, s9s, w$o, k$o, i9s, GPe, a9s, v$o, uEt, l9s, phe, DUe, Vzr, fEt, Phn, IYe, l2t, d2t, c2t, mhe, X5n, Ohn, Kzr, qzr, J5n, E$o, Q5n, Sf, nh, pEt, Ihn, wK, Provider as Z5n, QH };