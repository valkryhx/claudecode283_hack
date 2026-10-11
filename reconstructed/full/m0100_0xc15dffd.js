// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  ue
} from "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  ao,
  sP,
  EKr
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  q,
  j
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  a
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  f5n
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import {
  Je
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  pn
} from "B:/~BUN/root/chunk-8j4yaj30.js";
import {
  Jx
} from "B:/~BUN/root/chunk-q42dvn02.js";

function p$e(e) {
  return e.slice(0, 500).replace(/https?:\/\/\S+/gi, "<url>").replace(/\b[\w.+-]+@[\w.-]+\.\w{2,}\b/g, "<email>").replace(/\b(?:sk-ant|sk|pk|ghp|gho|ghs|ghu|github_pat|xox[bpoars])[-_][\w-]{8,}\b/gi, "<key>").replace(/[A-Za-z]:\\[^\s"']*/g, "<path>").replace(/\\\\[^\s"']+/g, "<path>").replace(/(?:[^\s"'\\]+\\){2,}[^\s"']+/g, "<path>").replace(/(?:\/[^\s"':]+){2,}/g, "<path>").replace(/\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi, "<id>").replace(/\breq_[A-Za-z0-9_-]{12,}/g, "<id>").replace(/\b[0-9a-fA-F]{16,}\b/g, "<id>").replace(/\b[A-Za-z0-9+/]{32,}={0,2}/g, "<b64>").replace(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g, "<ip>").replace(/\b\d{4,}\b/g, "<num>")
}

function E(e, t = 5) {
  let n = [],
    i;
  for (let R of e.slice(0, 4000).split(`
`)) {
    let l = R.trim();
    if (!l.startsWith("at ")) continue;
    let s = l.slice(3),
      u = s.indexOf(" (");
    if (i === void 0) {
      let d = u !== -1 ? s.slice(u + 2, -1) : s;
      if (/^(?:node|bun|internal):/.test(d)) i = d;
      else {
        let f = d.match(/([^/\\]+:\d+:\d+)\)?$/);
        if (f) i = f[1]
      }
    }
    let o = u !== -1 ? s.slice(0, u) : s;
    if (o = o.replace(/^async\s+/, "").replace(/^new\s+/, ""), o.includes("/") || o.includes("\\") || /:\d/.test(o)) continue;
    if (o) n.push(o);
    if (n.length >= t) break
  }
  return {
    names: n,
    topFrame: i
  }
}

function S(e) {
  try {
    return String(e)
  } catch {
    return "[unstringifiable]"
  }
}

function Id(e) {
  try {
    let t = S(e instanceof Error ? e.message : e),
      n = {
        error_message_hash: pn(p$e(t))
      },
      i = ao(e);
    if (i !== void 0) n.error_code = i;
    if (!(e instanceof Error)) return n;
    let R = sP(e.constructor?.name);
    if (R !== void 0) n.error_constructor = R;
    if (typeof e.stack !== "string") return n;
    let l = e.stack,
      s = f5n(e),
      u = s.length < l.length && l.endsWith(s),
      {
        names: o,
        topFrame: d
      } = E(s);
    if (o.length > 0) n.error_stack_hash = pn(o.join("|"));
    let f = u && d !== void 0 ? EKr(d) : void 0;
    if (f !== void 0) n.error_top_frame = f;
    return n
  } catch {
    return {}
  }
}
var _ = "tengu_ax_screen_reader";

function fLo(e) {
  return r().swapRemoteGateReader(e)
}
class m {
  #n;
  #o;
  #t;
  #r = null;
  #i = null;
  #a = !1;
  #e = [];
  swapRemoteGateReader(e) {
    let t = this.#r;
    return this.#r = e, t
  }
  isEnabled() {
    if (this.#n !== void 0) return this.#n;
    let e, t;
    if (Jx("--ax-screen-reader")) e = !0, t = "flag";
    else {
      let i = a.CLAUDE_AX_SCREEN_READER;
      if (i !== void 0) e = i, t = "env";
      else e = Je().axScreenReader === !0, t = "settings"
    }
    if (!e) return this.#n = !1;
    let n = this.#r?.(_, !0) ?? !0;
    return this.#o = n ? t : void 0, this.#n = n
  }
  activationSource() {
    return this.isEnabled() ? this.#o : void 0
  }
  isArrowNavEnabled() {
    if (this.#t === void 0) this.#t = this.#r?.(A, !1) ?? !1;
    return this.#t
  }
  markAnnouncementWritten(e) {
    if (this.#i === null) this.#i = e
  }
  endStartupQuiet() {
    this.#a = !0
  }
  startupQuietOpenedAtMs() {
    return this.#a ? null : this.#i
  }
  queueAnnouncement(e) {
    if (this.#e.push(e), this.#e.length > p) this.#e.splice(0, this.#e.length - p)
  }
  drainAnnouncements() {
    return this.#e.splice(0)
  }
  reset() {
    this.#n = void 0, this.#o = void 0, this.#t = void 0, this.#i = null, this.#a = !1, this.#e.length = 0
  }
}
var g = new q(() => new m);

function r() {
  return g.of(j().host)
}
var A = "tengu_ax_sr_arrow_nav";

function qYe() {
  return r().isArrowNavEnabled()
}

function n_() {
  return r().isEnabled()
}

function mLo() {
  {
    let e = r();
    if (e.isEnabled()) {
      let t = e.activationSource();
      return t ? `[Screen Reader Mode: on via ${t}]` : "[Screen Reader Mode: on]"
    }
  }
  return null
}
var h = 3000,
  b = 600000;

function gLo() {
  r().markAnnouncementWritten(Date.now())
}

function N4n() {
  r().endStartupQuiet()
}

function hLo() {
  {
    let e = r().startupQuietOpenedAtMs();
    if (e === null) return 0;
    let t = Math.min(a.CLAUDE_AX_STARTUP_QUIET_MS ?? h, b),
      n = e + t - Date.now();
    return n > 0 ? n : 0
  }
  return 0
}
var v = 50,
  M = 5000;

function yLo() {
  return Math.min(a.CLAUDE_AX_PREPARK_MS ?? v, M)
}

function Mq() {
  if (r().isEnabled()) return {
    CLAUDE_AX_SCREEN_READER: "1"
  };
  return {}
}

function _Lo() {
  {
    let e = r();
    if (e.isEnabled()) return {
      screenReaderMode: !0,
      screenReaderActivationSource: ue(e.activationSource())
    }
  }
  return {}
}
var p = 16;

function pJ(e) {
  r().queueAnnouncement(e)
}

function bLo() {
  return r().drainAnnouncements()
}
export {
  p$e,
  Id,
  fLo,
  qYe,
  n_,
  mLo,
  gLo,
  N4n,
  hLo,
  yLo,
  Mq,
  _Lo,
  pJ,
  bLo
};
