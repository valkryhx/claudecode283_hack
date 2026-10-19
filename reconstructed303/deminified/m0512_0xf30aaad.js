// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { j, $c } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { z } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { wde, a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { pw } from "B:/~BUN/root/chunk-d69870x4.js";
import { F8r, UZo, VA, lKt, Rh } from "B:/~BUN/root/chunk-2efkaa0v.js";
import { av } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { B2, Ba, hjo, rGe, oS, Ine, fde, gv, bbt, j1t, tYs, nYs, _jo, rYs, oYs } from "B:/~BUN/root/chunk-nvgn0qsr.js";
import { hVt, Wnt, E9o as on, cvn as off, uvn as on_3, tkt as off_3, T9o as on_2, pvn as off_2, AL, xL, nkt, rkt, h_e, C9o as on_4, R9o as off_4, mvn } from "B:/~BUN/root/chunk-1d35msqn.js";
import { I6, nb, lM, Pm, Ddt, EIt, TIt } from "B:/~BUN/root/chunk-0x8xex6w.js";
import { e } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { qt, ae, Ee, Z, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { _h } from "B:/~BUN/root/chunk-kad4nq7y.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
class g {
  value = void 0;
  get() {
    let r = lKt(),
      n = $c(),
      wheelFlood = n?.wheelFlood ?? j4r(),
      jediTerm = n ? wde.includes(n.terminal ?? "") : pw.isJetBrainsIdeTerminal(),
      wtSession = n?.wtSession ?? !!a.WT_SESSION,
      p = Rh(),
      s = this.value;
    if (s && s.xtversion === (r ?? "(no reply)") && s.wheelFlood === wheelFlood && s.jediTerm === jediTerm && s.wtSession === wtSession && s.xtermJs === p) return s;
    let platform = "win32";
    return this.value = {
      useDecayCurve: !wheelFlood && (p || platform === "win32" || wtSession),
      useAdaptiveDrain: p,
      base: jediTerm ? 2 : ie(p, wheelFlood, wtSession),
      xtermJs: p,
      wheelFlood: wheelFlood,
      jediTerm: jediTerm,
      termProgram: a.TERM_PROGRAM ?? "unset",
      termProgramVersion: a.TERM_PROGRAM_VERSION ?? "unset",
      xtversion: r ?? "(no reply)",
      wtSession: wtSession,
      scrollSpeedEnv: a.CLAUDE_CODE_SCROLL_SPEED ?? "unset",
      platform: platform
    }, this.value;
  }
  invalidate() {
    this.value = void 0;
  }
}
var E = new z(() => new g());
function yY() {
  return E.of(j().host).get();
}
function j4r() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (a.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (a.TERM_PROGRAM === "vscode") {
    let r = oe(a.TERM_PROGRAM_VERSION);
    if (r !== null) return r >= 1092000 && r < 1105000;
  }
  return lKt()?.startsWith("xterm.js") ?? !1;
}
function oe(r) {
  if (!r) return null;
  let n = /^(\d+)\.(\d+)\.(\d+)/.exec(r);
  if (!n) return null;
  return +n[1] * 1e6 + +n[2] * 1000 + +n[3];
}
function arr(r, n, o) {
  return !n && (r || !0) ? 3 : 1;
}
function ie(r, n, o) {
  let u = arr(r, n, o),
    CLAUDE_CODE_SCROLL_SPEED = a.CLAUDE_CODE_SCROLL_SPEED;
  if (!CLAUDE_CODE_SCROLL_SPEED) return u;
  let p = parseFloat(CLAUDE_CODE_SCROLL_SPEED);
  return Number.isNaN(p) || p <= 0 ? u : Math.min(p, 20);
}
function uVt() {
  E.of(j().host).invalidate();
}
var y = ve(_h(), 1);
var S = Ba(0, "f");
function v9o() {
  if (pw.windowsConsoleSupportsVirtualTerminalSequences()) return gv + bbt + oS;else return gv + S;
  return gv + bbt + oS;
}
function G4r() {
  if (!pw.windowsConsoleSupportsVirtualTerminalSequences()) return gv + S;
  return gv + oS;
}
function Unt(r) {
  return oS + (fde + hjo(1)).repeat(r) + oS;
}
function k9o() {
  if (a.TMUX && VA().get("synchronizedOutput").state === "pending") return;
  return XCe();
}
function Xre() {
  return v({
    beforeTheAnswer: !1
  });
}
function XCe() {
  return v({
    beforeTheAnswer: !0
  });
}
function v({
  beforeTheAnswer: beforeTheAnswer
}) {
  if (a.CLAUDE_BG_BACKEND === "daemon") return $c()?.syncOutput !== !1;
  if (!a.TMUX && a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return !0;
  let n = VA().get("synchronizedOutput");
  if (n.state === "settled") return n.value;
  return beforeTheAnswer && n.likely;
}
function lrr(r = Xre()) {
  if (a.CLAUDE_BG_BACKEND === "daemon") return !1;
  return r && a.TMUX == null && process.env.ZELLIJ == null && !pw.isJetBrainsIdeTerminal() && !Rh() && a.WT_SESSION == null;
}
function Bnt() {
  let r = $c()?.progressReporting;
  if (r !== void 0) return r;
  if (!process.stdout.isTTY) return !1;
  if (a.WT_SESSION) return !1;
  if (a.ConEmuANSI || a.ConEmuPID || a.ConEmuTask) return !0;
  let n = y.coerce(a.TERM_PROGRAM_VERSION);
  if (!n) return !1;
  if (a.TERM_PROGRAM === "ghostty") return av(n.version, "1.2.0");
  if (a.TERM_PROGRAM === "iTerm.app") return av(n.version, "3.6.6");
  return !1;
}
function h(r) {
  if (r != null) return F8r.includes(r);
  return VA().now("extendedKeys");
}
function pVt(r = a.terminal, n = VA()) {
  if (a.TMUX || a.STY || !n.now("extendedKeys")) return !1;
  return r === null || !UZo.includes(r) || n.confirmed("kittyKeyboard");
}
function NLe() {
  return !I6() && (h() || VA().now("kittyKeyboard")) ? _jo : "";
}
function Zvt() {
  return I6() ? "" : oYs;
}
function ekt(r) {
  return h() ? _jo + (r?.legacyKitty ? nYs : tYs) + rYs : "";
}
function fVt(r) {
  return nkt + gv + oS + ekt(r);
}
function Jre() {
  return NLe() + rkt + Zvt();
}
var ivn = 5000;
function mVt() {
  return !0;
}
var drr = lrr(XCe());
function crr(r, startedMs, bytes) {
  let endedMs = performance.now(),
    slowestWrite = r.slowestWrite;
  if (slowestWrite === void 0 || endedMs - startedMs >= slowestWrite.endedMs - slowestWrite.startedMs) r.slowestWrite = {
    startedMs: startedMs,
    endedMs: endedMs,
    bytes: bytes
  };
}
function avn(r, n) {
  if (r.stdoutDead) return;
  let o = performance.now(),
    u = Buffer.byteLength(n);
  try {
    r.stdout.write(n);
  } catch (error) {
    if (r.tolerateDeadStdout && (b(error) === "EIO" || b(error) === "EPIPE")) {
      r.stdoutDead = !0, crr(r, o, u);
      return;
    }
    throw error;
  }
  crr(r, o, u);
}
function V4r(r, n, o = !1, u, i = "") {
  let p = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (n.length === 0) {
    if (i !== "") avn(r, i);
    return;
  }
  let s = !o,
    d = i + (s ? hVt : "");
  for (let c of n) switch (c.type) {
    case "stdout":
      d += c.content;
      break;
    case "clear":
      if (c.count > 0) d += j1t(c.count);
      break;
    case "clearTerminal":
      d += c.altScreen ? v9o() : Unt(c.viewportRows);
      break;
    case "cursorHide":
      d += xL;
      break;
    case "cursorShow":
      d += AL;
      break;
    case "cursorMove":
      d += Ine(c.x, p !== void 0 ? Math.max(-p, Math.min(p, c.y)) : c.y);
      break;
    case "cursorTo":
      d += rGe(c.col);
      break;
    case "carriageReturn":
      d += "\r";
      break;
    case "hyperlink":
      d += Ddt(c.uri);
      break;
    case "styleStr":
      d += c.str;
      break;
  }
  if (s) d += Wnt;
  avn(r, d);
}
function b(r) {
  return r && typeof r === "object" && "code" in r ? String(r.code) : void 0;
}
class $nt {
  _didStopImmediatePropagation = !1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}
import { EventEmitter as se } from "events";
class cVt extends se {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(r, ...n) {
    if (r === "error") return super.emit(r, ...n);
    let o = this.rawListeners(r);
    if (o.length === 0) return !1;
    let u = n[0] instanceof $nt ? n[0] : null;
    for (let i of o) if (i.apply(this, n), u?.didStopImmediatePropagation()) break;
    return !0;
  }
}
function Qvt() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: !1,
    notified: !1,
    trackpadGesture: !1,
    pendingArrowBoost: 0
  };
}
function ue(r) {
  r.bugConfirmed = !0, r.trackpadGesture = !0, r.pendingArrowBoost++;
}
function T(r) {
  r.trackpadGesture = !1, r.pendingArrowBoost = 0;
}
function S9o(r) {
  let pendingArrowBoost = r.pendingArrowBoost;
  return r.pendingArrowBoost = 0, pendingArrowBoost;
}
function W4r(r) {
  if (r.bugConfirmed) return !0;
  if (process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 || process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0) return r.bugConfirmed = !0, !0;
  return !1;
}
var le = 75,
  de = 250,
  z4r = 200;
function w9o(r, n, o, u) {
  if (!yY().jediTerm) return T(r), n;
  let i = null;
  for (let p = 0; p < n.length; p++) {
    let s = n[p];
    if (s.kind !== "key") {
      i?.push(s);
      continue;
    }
    if (s.name === "wheelup" || s.name === "wheeldown") {
      if (o - r.lastWheelTime > z4r) r.lastWheelDownTime = 0, T(r);
      if (r.lastWheelTime = o, s.name === "wheeldown") r.lastWheelDownTime = o;
      if (s.name === "wheelup" && o - r.lastWheelDownTime < de && W4r(r)) {
        i ??= n.slice(0, p), i.push({
          ...s,
          name: "wheeldown"
        });
        continue;
      }
      i?.push(s);
      continue;
    }
    if ((s.name === "up" || s.name === "down") && !s.ctrl && !s.meta && !s.shift && o - r.lastWheelTime < le) {
      if (!r.notified) r.notified = !0, u();
      ue(r), i ??= n.slice(0, p);
      continue;
    }
    i?.push(s);
  }
  return i ?? n;
}
function RL(r, n) {
  if (r === void 0) return;
  if (Number.isInteger(r)) return;
  t(`${n} should be an integer, got ${r}`, {
    level: "warn"
  });
}
function lvn(hidden, label, role, state, preserveWhitespace) {
  if (hidden === void 0 && label === void 0 && role === void 0 && state === void 0 && preserveWhitespace === void 0) return;
  return {
    hidden: hidden,
    label: label,
    role: role,
    state: state,
    preserveWhitespace: preserveWhitespace
  };
}
function ce({
  children: children,
  ref: ref,
  tabIndex: tabIndex,
  autoFocus: autoFocus,
  onClick: onClick,
  onFocus: onFocus,
  onFocusCapture: onFocusCapture,
  onBlur: onBlur,
  onBlurCapture: onBlurCapture,
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
  "aria-hidden": Q,
  "aria-label": ee,
  "aria-role": te,
  "aria-state": re,
  "aria-preserve-whitespace": ne,
  ...style
}) {
  if (RL(style.margin, "margin"), RL(style.marginX, "marginX"), RL(style.marginY, "marginY"), RL(style.marginTop, "marginTop"), RL(style.marginBottom, "marginBottom"), style.marginLeft !== "auto") RL(style.marginLeft, "marginLeft");
  if (style.marginRight !== "auto") RL(style.marginRight, "marginRight");
  return RL(style.padding, "padding"), RL(style.paddingX, "paddingX"), RL(style.paddingY, "paddingY"), RL(style.paddingTop, "paddingTop"), RL(style.paddingBottom, "paddingBottom"), RL(style.paddingLeft, "paddingLeft"), RL(style.paddingRight, "paddingRight"), RL(style.gap, "gap"), RL(style.columnGap, "columnGap"), RL(style.rowGap, "rowGap"), style.flexWrap ??= "nowrap", style.flexDirection ??= "row", style.flexGrow ??= 0, style.flexShrink ??= 1, style.overflowX = style.overflowX ?? style.overflow ?? "visible", style.overflowY = style.overflowY ?? style.overflow ?? "visible", e("ink-box", {
    ref: ref,
    tabIndex: tabIndex,
    autoFocus: autoFocus,
    onClick: onClick,
    onFocus: onFocus,
    onFocusCapture: onFocusCapture,
    onBlur: onBlur,
    onBlurCapture: onBlurCapture,
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
    accessibility: lvn(Q, ee, te, re, ne),
    style: style,
    children: children
  });
}
var vc = ce;
B();
var R = qt({
  stdin: process.stdin,
  internal_eventEmitter: new cVt(),
  setRawMode() {},
  isRawModeSupported: !1,
  internal_querier: null,
  internal_jediTermInput: Qvt()
});
R.displayName = "InternalStdinContext";
var g_e = R;
B();
var Og = qt(null);
B();
function x({
  background: background,
  foreground: foreground
}) {
  return nb(Pm.SET_BG_COLOR, background) + nb(Pm.SET_FG_COLOR, foreground);
}
function w() {
  return nb(Pm.RESET_BG_COLOR) + nb(Pm.RESET_FG_COLOR);
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
          return ekt();
        },
        get off() {
          return Zvt() + NLe();
        }
      };
    case "altScreen":
      return {
        mode: mode,
        on: nkt + gv + oS,
        get off() {
          return rkt + Zvt();
        }
      };
    case "altScreenKeys":
      return {
        mode: mode,
        get on() {
          return ekt();
        },
        get off() {
          return NLe();
        }
      };
  }
}
class jnt {
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
      o = clearKeys ? Zvt() + (n ? "" : NLe()) : "";
    return this.entries.reduce((acc, item) => acc + item.on + (clearKeys && item.mode === "altScreen" ? NLe() : ""), o);
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
            on: mvn(o),
            off: o === "off" ? "" : h_e
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
var _ = qt(new jnt());
_.displayName = "InternalTerminalModesContext";
var gVt = _;
B();
function m(r) {
  let n = "";
  for (let o = 0; o < r.length; o++) {
    let u = r.charCodeAt(o);
    n += u < 32 || u >= 127 && u <= 159 ? " " : r[o];
  }
  return n;
}
var S1 = qt(null),
  Provider = S1.Provider;
function C0() {
  let r = Ee(S1);
  if (!r) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let notifyITerm2 = ae(({
      message: message,
      title: title
    }) => {
      let c = title ? `${title}: ${message}` : message;
      r(lM(nb(Pm.ITERM2, m(c))));
    }, [r]),
    notifyKitty = ae(({
      message: message_2,
      title: title_2,
      id: id
    }) => {
      r(lM(nb(Pm.KITTY, `i=${id}:d=0:p=title`, m(title_2)))), r(lM(nb(Pm.KITTY, `i=${id}:p=body`, m(message_2)))), r(lM(nb(Pm.KITTY, `i=${id}:d=1:a=focus`, "")));
    }, [r]),
    notifyGhostty = ae(({
      message: message_3,
      title: title_3
    }) => {
      r(lM(nb(Pm.GHOSTTY, "notify", m(title_3), m(message_3))));
    }, [r]),
    notifyBell = ae(() => {
      r(B2);
    }, [r]),
    progress = ae((s, d) => {
      if (!Bnt()) return;
      if (!s) {
        r(lM(nb(Pm.ITERM2, EIt.PROGRESS, TIt.CLEAR, "")));
        return;
      }
      let c = Math.max(0, Math.min(100, Math.round(d ?? 0)));
      switch (s) {
        case "completed":
          r(lM(nb(Pm.ITERM2, EIt.PROGRESS, TIt.CLEAR, "")));
          break;
        case "error":
          r(lM(nb(Pm.ITERM2, EIt.PROGRESS, TIt.ERROR, c)));
          break;
        case "indeterminate":
          r(lM(nb(Pm.ITERM2, EIt.PROGRESS, TIt.INDETERMINATE, "")));
          break;
        case "running":
          r(lM(nb(Pm.ITERM2, EIt.PROGRESS, TIt.SET, c)));
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
export { $nt, cVt, yY, j4r, arr, uVt, Qvt, S9o, W4r, z4r, w9o, g_e, v9o, G4r, Unt, RL, k9o, Xre, XCe, lrr, Bnt, pVt, NLe, Zvt, ekt, fVt, Jre, ivn, mVt, drr, crr, avn, V4r, lvn, vc, Og, jnt, gVt, S1, Provider as dvn, C0 };