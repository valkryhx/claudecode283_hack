// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { uv } from "B:/~BUN/root/chunk-0av24qsq.js";
import { pj, ka, szr, XAe, $h, PY, jJ, F_, K8e, zBt, J$o, Q$o, azr, Z$o, zUe } from "B:/~BUN/root/chunk-bpp59nyd.js";
import { q, j, md } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { KJ, a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { ltr, p9r, dM, O_t, om } from "B:/~BUN/root/chunk-4tkwpa6e.js";
import { x_ } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { R_t, Cje, V8r as on, TVt as off, CVt as on_3, tQe as off_3, q8r as on_2, RVt as off_2, gP, hP, nQe, rQe, loe, K8r as on_4, Y8r as off_4, xVt } from "B:/~BUN/root/chunk-p3ewqd1e.js";
import { Uy, bR, Tg, Qqe, Sst, wst } from "B:/~BUN/root/chunk-ky4py1p3.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Vt, se, Pe, X, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
var E = ka(0, "f");
function z8r() {
  if (uv.windowsConsoleSupportsVirtualTerminalSequences()) return F_ + K8e + $h;else return F_ + E;
  return F_ + K8e + $h;
}
function ttr() {
  if (!uv.windowsConsoleSupportsVirtualTerminalSequences()) return F_ + E;
  return F_ + $h;
}
function bVt(r) {
  return $h + (jJ + szr(1)).repeat(r) + $h;
}
class kje {
  _didStopImmediatePropagation = !1;
  didStopImmediatePropagation() {
    return this._didStopImmediatePropagation;
  }
  stopImmediatePropagation() {
    this._didStopImmediatePropagation = !0;
  }
}
import { EventEmitter as ne } from "events";
class v_t extends ne {
  constructor() {
    super();
    this.setMaxListeners(0);
  }
  emit(r, ...n) {
    if (r === "error") return super.emit(r, ...n);
    let o = this.rawListeners(r);
    if (o.length === 0) return !1;
    let u = n[0] instanceof kje ? n[0] : null;
    for (let i of o) if (i.apply(this, n), u?.didStopImmediatePropagation()) break;
    return !0;
  }
}
class g {
  value = void 0;
  get() {
    let r = O_t(),
      n = md(),
      wheelFlood = n?.wheelFlood ?? Qer(),
      jediTerm = n ? KJ.includes(n.terminal ?? "") : uv.isJetBrainsIdeTerminal(),
      wtSession = n?.wtSession ?? !!a.WT_SESSION,
      p = om(),
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
var S = new q(() => new g());
function Uj() {
  return S.of(j().host).get();
}
function Qer() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return !0;
  if (a.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return !0;
  if (a.TERM_PROGRAM === "vscode") {
    let r = oe(a.TERM_PROGRAM_VERSION);
    if (r !== null) return r >= 1092000 && r < 1105000;
  }
  return O_t()?.startsWith("xterm.js") ?? !1;
}
function oe(r) {
  if (!r) return null;
  let n = /^(\d+)\.(\d+)\.(\d+)/.exec(r);
  if (!n) return null;
  return +n[1] * 1e6 + +n[2] * 1000 + +n[3];
}
function Kvn(r, n, o) {
  return !n && (r || !0) ? 3 : 1;
}
function ie(r, n, o) {
  let u = Kvn(r, n, o),
    CLAUDE_CODE_SCROLL_SPEED = a.CLAUDE_CODE_SCROLL_SPEED;
  if (!CLAUDE_CODE_SCROLL_SPEED) return u;
  let p = parseFloat(CLAUDE_CODE_SCROLL_SPEED);
  return Number.isNaN(p) || p <= 0 ? u : Math.min(p, 20);
}
function k_t() {
  S.of(j().host).invalidate();
}
function G8r() {
  if (a.TMUX && dM().get("synchronizedOutput").state === "pending") return;
  return Nue();
}
function E5() {
  return v({
    beforeTheAnswer: !1
  });
}
function Nue() {
  return v({
    beforeTheAnswer: !0
  });
}
function v({
  beforeTheAnswer: beforeTheAnswer
}) {
  if (a.CLAUDE_BG_BACKEND === "daemon") return md()?.syncOutput !== !1;
  if (!a.TMUX && a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return !0;
  let n = dM().get("synchronizedOutput");
  if (n.state === "settled") return n.value;
  return beforeTheAnswer && n.likely;
}
function Yvn(r = E5()) {
  if (a.CLAUDE_BG_BACKEND === "daemon") return !1;
  return r && a.TMUX == null && process.env.ZELLIJ == null && !uv.isJetBrainsIdeTerminal() && !om() && a.WT_SESSION == null;
}
var y = be(ih(), 1);
function Eje() {
  let r = md()?.progressReporting;
  if (r !== void 0) return r;
  if (!process.stdout.isTTY) return !1;
  if (a.WT_SESSION) return !1;
  if (a.ConEmuANSI || a.ConEmuPID || a.ConEmuTask) return !0;
  let n = y.coerce(a.TERM_PROGRAM_VERSION);
  if (!n) return !1;
  if (a.TERM_PROGRAM === "ghostty") return x_(n.version, "1.2.0");
  if (a.TERM_PROGRAM === "iTerm.app") return x_(n.version, "3.6.6");
  return !1;
}
function h(r) {
  if (r != null) return ltr.includes(r);
  return dM().now("extendedKeys");
}
function E_t(r = a.terminal, n = dM()) {
  if (a.TMUX || a.STY || !n.now("extendedKeys")) return !1;
  return r === null || !p9r.includes(r) || n.confirmed("kittyKeyboard");
}
function qbe() {
  return h() || dM().now("kittyKeyboard") ? azr : "";
}
function eQe(r) {
  return h() ? azr + (r?.legacyKitty ? Q$o : J$o) + Z$o : "";
}
function SVt(r) {
  return nQe + F_ + $h + eQe(r);
}
function aoe() {
  return qbe() + rQe + zUe;
}
var wVt = 5000;
function T_t() {
  return !0;
}
var Xvn = Yvn(Nue());
function Jvn(r, startedMs, bytes) {
  let endedMs = performance.now(),
    slowestWrite = r.slowestWrite;
  if (slowestWrite === void 0 || endedMs - startedMs >= slowestWrite.endedMs - slowestWrite.startedMs) r.slowestWrite = {
    startedMs: startedMs,
    endedMs: endedMs,
    bytes: bytes
  };
}
function vVt(r, n) {
  if (r.stdoutDead) return;
  let o = performance.now(),
    u = Buffer.byteLength(n);
  try {
    r.stdout.write(n);
  } catch (error) {
    if (r.tolerateDeadStdout && (b(error) === "EIO" || b(error) === "EPIPE")) {
      r.stdoutDead = !0, Jvn(r, o, u);
      return;
    }
    throw error;
  }
  Jvn(r, o, u);
}
function ntr(r, n, o = !1, u, i = "") {
  let p = u !== void 0 && u > 1 ? u - 1 : void 0;
  if (n.length === 0) {
    if (i !== "") vVt(r, i);
    return;
  }
  let s = !o,
    d = i + (s ? R_t : "");
  for (let c of n) switch (c.type) {
    case "stdout":
      d += c.content;
      break;
    case "clear":
      if (c.count > 0) d += zBt(c.count);
      break;
    case "clearTerminal":
      d += c.altScreen ? z8r() : bVt(c.viewportRows);
      break;
    case "cursorHide":
      d += hP;
      break;
    case "cursorShow":
      d += gP;
      break;
    case "cursorMove":
      d += PY(c.x, p !== void 0 ? Math.max(-p, Math.min(p, c.y)) : c.y);
      break;
    case "cursorTo":
      d += XAe(c.col);
      break;
    case "carriageReturn":
      d += "\r";
      break;
    case "hyperlink":
      d += Qqe(c.uri);
      break;
    case "styleStr":
      d += c.str;
      break;
  }
  if (s) d += Cje;
  vVt(r, d);
}
function b(r) {
  return r && typeof r === "object" && "code" in r ? String(r.code) : void 0;
}
function kVt(hidden, label, role, state, preserveWhitespace) {
  if (hidden === void 0 && label === void 0 && role === void 0 && state === void 0 && preserveWhitespace === void 0) return;
  return {
    hidden: hidden,
    label: label,
    role: role,
    state: state,
    preserveWhitespace: preserveWhitespace
  };
}
function mP(r, n) {
  if (r === void 0) return;
  if (Number.isInteger(r)) return;
  t(`${n} should be an integer, got ${r}`, {
    level: "warn"
  });
}
function ue({
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
  "aria-label": Z,
  "aria-role": ee,
  "aria-state": te,
  "aria-preserve-whitespace": re,
  ...style
}) {
  if (mP(style.margin, "margin"), mP(style.marginX, "marginX"), mP(style.marginY, "marginY"), mP(style.marginTop, "marginTop"), mP(style.marginBottom, "marginBottom"), style.marginLeft !== "auto") mP(style.marginLeft, "marginLeft");
  if (style.marginRight !== "auto") mP(style.marginRight, "marginRight");
  return mP(style.padding, "padding"), mP(style.paddingX, "paddingX"), mP(style.paddingY, "paddingY"), mP(style.paddingTop, "paddingTop"), mP(style.paddingBottom, "paddingBottom"), mP(style.paddingLeft, "paddingLeft"), mP(style.paddingRight, "paddingRight"), mP(style.gap, "gap"), mP(style.columnGap, "columnGap"), mP(style.rowGap, "rowGap"), style.flexWrap ??= "nowrap", style.flexDirection ??= "row", style.flexGrow ??= 0, style.flexShrink ??= 1, style.overflowX = style.overflowX ?? style.overflow ?? "visible", style.overflowY = style.overflowY ?? style.overflow ?? "visible", e("ink-box", {
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
    accessibility: kVt(Q, Z, ee, te, re),
    style: style,
    children: children
  });
}
var zl = ue;
N();
function m(r) {
  let n = "";
  for (let o = 0; o < r.length; o++) {
    let u = r.charCodeAt(o);
    n += u < 32 || u >= 127 && u <= 159 ? " " : r[o];
  }
  return n;
}
var Bj = Vt(null),
  Provider = Bj.Provider;
function vA() {
  let r = Pe(Bj);
  if (!r) throw Error("useTerminalNotification must be used within TerminalWriteProvider");
  let notifyITerm2 = se(({
      message: message,
      title: title
    }) => {
      let c = title ? `${title}: ${message}` : message;
      r(bR(Uy(Tg.ITERM2, m(c))));
    }, [r]),
    notifyKitty = se(({
      message: message_2,
      title: title_2,
      id: id
    }) => {
      r(bR(Uy(Tg.KITTY, `i=${id}:d=0:p=title`, m(title_2)))), r(bR(Uy(Tg.KITTY, `i=${id}:p=body`, m(message_2)))), r(bR(Uy(Tg.KITTY, `i=${id}:d=1:a=focus`, "")));
    }, [r]),
    notifyGhostty = se(({
      message: message_3,
      title: title_3
    }) => {
      r(bR(Uy(Tg.GHOSTTY, "notify", m(title_3), m(message_3))));
    }, [r]),
    notifyBell = se(() => {
      r(pj);
    }, [r]),
    progress = se((s, d) => {
      if (!Eje()) return;
      if (!s) {
        r(bR(Uy(Tg.ITERM2, Sst.PROGRESS, wst.CLEAR, "")));
        return;
      }
      let c = Math.max(0, Math.min(100, Math.round(d ?? 0)));
      switch (s) {
        case "completed":
          r(bR(Uy(Tg.ITERM2, Sst.PROGRESS, wst.CLEAR, "")));
          break;
        case "error":
          r(bR(Uy(Tg.ITERM2, Sst.PROGRESS, wst.ERROR, c)));
          break;
        case "indeterminate":
          r(bR(Uy(Tg.ITERM2, Sst.PROGRESS, wst.INDETERMINATE, "")));
          break;
        case "running":
          r(bR(Uy(Tg.ITERM2, Sst.PROGRESS, wst.SET, c)));
          break;
        case null:
          break;
      }
    }, [r]);
  return X(() => ({
    notifyITerm2: notifyITerm2,
    notifyKitty: notifyKitty,
    notifyGhostty: notifyGhostty,
    notifyBell: notifyBell,
    progress: progress
  }), [notifyITerm2, notifyKitty, notifyGhostty, notifyBell, progress]);
}
function ZJe() {
  return {
    lastWheelTime: 0,
    lastWheelDownTime: 0,
    bugConfirmed: !1,
    notified: !1,
    trackpadGesture: !1,
    pendingArrowBoost: 0
  };
}
function le(r) {
  r.bugConfirmed = !0, r.trackpadGesture = !0, r.pendingArrowBoost++;
}
function T(r) {
  r.trackpadGesture = !1, r.pendingArrowBoost = 0;
}
function j8r(r) {
  let pendingArrowBoost = r.pendingArrowBoost;
  return r.pendingArrowBoost = 0, pendingArrowBoost;
}
function Zer(r) {
  if (r.bugConfirmed) return !0;
  if (process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED !== void 0 || process.env.INTELLIJ_TERMINAL_COMMAND_BLOCKS !== void 0) return r.bugConfirmed = !0, !0;
  return !1;
}
var de = 75,
  pe = 250,
  etr = 200;
function W8r(r, n, o, u) {
  if (!Uj().jediTerm) return T(r), n;
  let i = null;
  for (let p = 0; p < n.length; p++) {
    let s = n[p];
    if (s.kind !== "key") {
      i?.push(s);
      continue;
    }
    if (s.name === "wheelup" || s.name === "wheeldown") {
      if (o - r.lastWheelTime > etr) r.lastWheelDownTime = 0, T(r);
      if (r.lastWheelTime = o, s.name === "wheeldown") r.lastWheelDownTime = o;
      if (s.name === "wheelup" && o - r.lastWheelDownTime < pe && Zer(r)) {
        i ??= n.slice(0, p), i.push({
          ...s,
          name: "wheeldown"
        });
        continue;
      }
      i?.push(s);
      continue;
    }
    if ((s.name === "up" || s.name === "down") && !s.ctrl && !s.meta && !s.shift && o - r.lastWheelTime < de) {
      if (!r.notified) r.notified = !0, u();
      le(r), i ??= n.slice(0, p);
      continue;
    }
    i?.push(s);
  }
  return i ?? n;
}
N();
var R = Vt({
  stdin: process.stdin,
  internal_eventEmitter: new v_t(),
  setRawMode() {},
  isRawModeSupported: !1,
  internal_querier: null,
  internal_jediTermInput: ZJe()
});
R.displayName = "InternalStdinContext";
var ioe = R;
N();
var Xw = Vt(null);
function x({
  background: background,
  foreground: foreground
}) {
  return Uy(Tg.SET_BG_COLOR, background) + Uy(Tg.SET_FG_COLOR, foreground);
}
function w() {
  return Uy(Tg.RESET_BG_COLOR) + Uy(Tg.RESET_FG_COLOR);
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
          return eQe();
        },
        get off() {
          return zUe + qbe();
        }
      };
    case "altScreen":
      return {
        mode: mode,
        on: nQe + F_ + $h,
        off: rQe + zUe
      };
    case "altScreenKeys":
      return {
        mode: mode,
        get on() {
          return eQe();
        },
        get off() {
          return qbe();
        }
      };
  }
}
class Tje {
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
      o = clearKeys ? zUe + (n ? "" : qbe()) : "";
    return this.entries.reduce((acc, item) => acc + item.on + (clearKeys && item.mode === "altScreen" ? qbe() : ""), o);
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
            on: xVt(o),
            off: o === "off" ? "" : loe
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
N();
var _ = Vt(new Tje());
_.displayName = "InternalTerminalModesContext";
var C_t = _;
export { kje, v_t, Uj, Qer, Kvn, k_t, ZJe, j8r, Zer, etr, W8r, ioe, mP, z8r, ttr, bVt, G8r, E5, Nue, Yvn, Eje, E_t, qbe, eQe, SVt, aoe, wVt, T_t, Xvn, Jvn, vVt, ntr, kVt, zl, Xw, Tje, C_t, Bj, Provider as EVt, vA };