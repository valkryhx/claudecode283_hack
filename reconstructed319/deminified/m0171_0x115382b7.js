// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { de } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { tr, x0, BIo } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { $b } from "B:/~BUN/root/chunk-sxvr9rzb.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { L2n, Qxo, vFr, v1s, N2n, Idn } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { un, be, vte } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Ca } from "B:/~BUN/root/chunk-65zedn3n.js";
import { kn } from "B:/~BUN/root/chunk-t7d2hp9h.js";
function u_t(e) {
  return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>");
}
var g = 4000;
function v(e, n = 5) {
  let names = [],
    topFrame;
  for (let l of e.slice(0, g).split(`
`)) {
    let s = l.trim();
    if (!s.startsWith("at ")) continue;
    let a = s.slice(3),
      u = a.indexOf(" (");
    if (topFrame === void 0) {
      let R = u !== -1 ? a.slice(u + 2, -1) : a;
      if (/^(?:node|bun|internal):/.test(R)) topFrame = R;else {
        let E = R.match(/([^/\\]+:\d+:\d+)\)?$/);
        if (E) topFrame = E[1];
      }
    }
    let c = u !== -1 ? a.slice(0, u) : a;
    if (c = c.replace(/^async\s+/, "").replace(/^new\s+/, ""), c.includes("/") || c.includes("\\") || /:\d/.test(c)) continue;
    if (c) names.push(c);
    if (names.length >= n) break;
  }
  return {
    names: names,
    topFrame: topFrame
  };
}
function N(e) {
  try {
    return String(e);
  } catch {
    return "[unstringifiable]";
  }
}
function zm(e) {
  try {
    let n = N(e instanceof Error ? e.message : e),
      t = {
        error_message_hash: kn(u_t(n))
      },
      r = tr(e);
    if (r !== void 0) t.error_code = r;
    if (!(e instanceof Error)) return t;
    let l = x0(e.constructor?.name);
    if (l !== void 0) t.error_constructor = l;
    let stack = e.stack;
    if (typeof stack !== "string") return t;
    let a = {
        name: e.name,
        message: e.message,
        stack: stack
      },
      u = Idn(a),
      c = u.length < stack.length && stack.endsWith(u),
      {
        names: names_2,
        topFrame: topFrame_2
      } = v(u);
    if (names_2.length > 0) t.error_stack_hash = kn(names_2.join("|"));
    let A = stack.length - u.length,
      stack_2 = stack.slice(0, A + g),
      [f] = c ? N2n({
        ...a,
        stack: stack_2
      }, 1) : [];
    if (f !== void 0) {
      let m = v1s(f) ? f.file : vFr(f) ? Qxo(f.file) : void 0,
        S = BIo(m === void 0 ? L2n : `${m}:${f.line}:${f.column}`),
        b = m !== void 0 && BIo(topFrame_2 ?? "") !== S;
      if (S !== void 0 && !b) t.error_top_frame = S;
    }
    return t;
  } catch {
    return {};
  }
}
import { homedir as x } from "os";
import { join as C, sep as D } from "path";
var M = "tengu_ax_screen_reader";
function z9i(e) {
  return o().swapRemoteGateReader(e);
}
class _ {
  #n;
  #a;
  #o;
  #u;
  #t = null;
  #i = null;
  #c = !1;
  #e = [];
  #r = !1;
  #s = 0;
  swapRemoteGateReader(e) {
    let n = this.#t;
    return this.#t = e, n;
  }
  isEnabled() {
    if (this.#n !== void 0) return this.#n;
    let e, n;
    if ($b("--ax-screen-reader")) e = !0, n = "flag";else {
      let CLAUDE_AX_SCREEN_READER = i.CLAUDE_AX_SCREEN_READER;
      if (CLAUDE_AX_SCREEN_READER !== void 0) e = CLAUDE_AX_SCREEN_READER, n = "env";else e = vte("axScreenReader").find(item => Kt(item.source))?.value === !0, n = "settings";
    }
    if (!e) return this.#n = !1;
    let t = this.#t?.(M, !0) ?? !0;
    return this.#a = t ? n : void 0, this.#n = t;
  }
  activationSource() {
    return this.isEnabled() ? this.#a : void 0;
  }
  isArrowNavEnabled() {
    if (this.#o === void 0) this.#o = this.#t?.(w, !1) ?? !1;
    return this.#o;
  }
  isSuggestionNavEnabled() {
    {
      if (!this.isEnabled()) return !1;
      let e = !1;
      return this.#u ??= this.#t?.("tengu_ax_sr_suggestion_nav", e) ?? e, this.#u;
    }
    return !1;
  }
  markAnnouncementWritten(e) {
    if (this.#i === null) this.#i = e;
  }
  endStartupQuiet() {
    this.#c = !0;
  }
  startupQuietOpenedAtMs() {
    return this.#c ? null : this.#i;
  }
  queueAnnouncement(e, n = !1) {
    if (this.#e.push(e), n) this.#r = !0;
    if (this.#e.length > p) this.#e.splice(0, this.#e.length - p);
  }
  drainAnnouncements() {
    return this.#e.splice(0);
  }
  takeHoldRequest() {
    let e = this.#r;
    return this.#r = !1, e;
  }
  startHold(e) {
    this.#s = e;
  }
  endHold() {
    this.#s = 0, this.#r = !1;
  }
  holdActive(e) {
    return e < this.#s;
  }
  reset() {
    this.#n = void 0, this.#a = void 0, this.#o = void 0, this.#u = void 0, this.#i = null, this.#c = !1, this.#e.length = 0, this.#r = !1, this.#s = 0;
  }
}
var T = new W(() => new _());
function o() {
  return T.of(H().host);
}
var w = "tengu_ax_sr_arrow_nav";
function cUt() {
  return o().isArrowNavEnabled();
}
function QMr() {
  return o().isSuggestionNavEnabled();
}
function Rm() {
  return o().isEnabled();
}
function X() {
  {
    let e = o();
    if (e.isEnabled()) {
      let n = e.activationSource();
      return n ? `[Screen Reader Mode: on via ${n}]` : "[Screen Reader Mode: on]";
    }
  }
  return null;
}
function U() {
  {
    if (o().isEnabled() || $b("--ax-screen-reader") || i.CLAUDE_AX_SCREEN_READER !== void 0 || vte("axScreenReader").some(item => Kt(item.source))) return null;
    if (!["projectSettings", "localSettings"].some(item => {
      let a = Kt(item) ? be(item) : null;
      return a?.axScreenReader === !0 || Object.entries(a?.env ?? {}).some(([u, c]) => u.toUpperCase() === "CLAUDE_AX_SCREEN_READER" && Pe(c));
    })) return null;
    let n = "start Claude Code with --ax-screen-reader";
    if (!Kt("userSettings")) return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}.`;
    let t = x(),
      r = Ca(un("userSettings") ?? C(t, ".claude", "settings.json")).replace(/[\t\n]/g, " "),
      l = r.startsWith(t + D) ? `~${r.slice(t.length)}` : r;
    return `Screen reader mode is off: project settings can't turn it on. To turn it on, ${n}, or add "axScreenReader": true to your own settings file at ${l} and restart.`;
  }
  return null;
}
function G9i(e, n) {
  {
    if (!e) return null;
    let t = X();
    if (t !== null) return n(t), k(), t;
    let r = U();
    if (r !== null) n(r);
    return r;
  }
  return null;
}
var F = 3000,
  y = 600000;
function k() {
  o().markAnnouncementWritten(Date.now());
}
function eTo() {
  o().endStartupQuiet();
}
function V9i() {
  {
    let e = o().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let n = Math.min(i.CLAUDE_AX_STARTUP_QUIET_MS ?? F, y),
      t = e + n - Date.now();
    return t > 0 ? t : 0;
  }
  return 0;
}
var O = 0,
  P = 5000;
function K9i() {
  return Math.min(i.CLAUDE_AX_PREPARK_MS ?? O, P);
}
function q9i() {
  return i.CLAUDE_AX_REWRITE_HELD_ANNOUNCEMENT ?? !1;
}
function X3() {
  if (o().isEnabled()) return {
    CLAUDE_AX_SCREEN_READER: "1"
  };
  return {};
}
function Y9i() {
  {
    let e = o();
    if (e.isEnabled()) return {
      screenReaderMode: !0,
      screenReaderActivationSource: de(e.activationSource())
    };
  }
  return {};
}
var p = 16;
function QL(e, n) {
  o().queueAnnouncement(e, n?.hold === !0);
}
function X9i() {
  if (o().takeHoldRequest()) return Math.min(i.CLAUDE_AX_ANNOUNCEMENT_HOLD_MS ?? 1000, 1e4);
  return 0;
}
function J9i(e) {
  o().startHold(Date.now() + e);
}
function f_t() {
  o().endHold();
}
function Q9i() {
  return o().holdActive(Date.now());
}
function Z9i() {
  return o().drainAnnouncements();
}
export { u_t, zm, z9i, cUt, QMr, Rm, G9i, eTo, V9i, K9i, q9i, X3, Y9i, QL, X9i, J9i, f_t, Q9i, Z9i };