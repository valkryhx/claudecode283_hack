// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { q, j, md } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { x_ } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { uv } from "B:/~BUN/root/chunk-0av24qsq.js";
import { ih } from "B:/~BUN/root/chunk-bt3h0syz.js";
import { be } from "B:/~BUN/root/chunk-yv67t8hr.js";
class i {
  reading;
  settled = Me();
  constructor(e) {
    this.reading = e === void 0 ? {
      state: "unasked"
    } : {
      state: "settled",
      value: e.value,
      source: e.source
    };
  }
  get() {
    return this.reading;
  }
  now() {
    return this.reading.state === "settled" && this.reading.value;
  }
  begin() {
    if (this.reading.state !== "unasked") return !1;
    return this.reading = {
      state: "asking"
    }, !0;
  }
  unask() {
    if (this.reading.state === "asking") this.reading = {
      state: "unasked"
    };
  }
  answer(e) {
    if (this.reading.state === "settled") return !1;
    this.reading = {
      state: "settled",
      ...e
    };
    try {
      this.settled.emit(e.value);
    } finally {
      this.settled.clear();
    }
    return !0;
  }
  onSettle(e) {
    if (this.reading.state === "settled") return e(this.reading.value), () => {};
    return this.settled.subscribe(e);
  }
}
var s = {
    extendedKeys: !1,
    synchronizedOutput: !1,
    kittyKeyboard: !0,
    kittyGraphics: !1,
    mousePixels: !1
  },
  rkn = Object.keys(s);
class o {
  readings = new Map();
  answeredYes = new Set();
  listeners = new Map();
  constructor(e) {
    for (let t of rkn) {
      let r = e[t];
      this.readings.set(t, "settled" in r ? {
        state: "settled",
        value: r.settled,
        source: r.source
      } : {
        state: "pending",
        likely: r.likely,
        source: r.source
      });
    }
  }
  get(e) {
    return this.readings.get(e);
  }
  now(e) {
    let t = this.get(e);
    return t.state === "settled" ? t.value : s[e];
  }
  confirmed(e) {
    return this.answeredYes.has(e);
  }
  pending() {
    return rkn.filter(item => this.get(item).state === "pending");
  }
  answer(e, t, r) {
    let n = this.get(e);
    if (n.state === "settled") {
      if (t && n.value) this.answeredYes.add(e);
      return !1;
    }
    if (t) this.answeredYes.add(e);
    return this.settle(e, t, r), !0;
  }
  deadline() {
    for (let e of this.pending()) {
      let t = this.get(e);
      this.settle(e, t.likely, `${t.source}, no answer`);
    }
  }
  onSettle(e, t) {
    let r = this.get(e);
    if (r.state === "settled") return t(r.value), () => {};
    let n = this.listeners.get(e) ?? new Set();
    return this.listeners.set(e, n), n.add(t), () => {
      n.delete(t);
    };
  }
  settle(e, value, source) {
    this.readings.set(e, {
      state: "settled",
      value: value,
      source: source
    });
    let n = this.listeners.get(e);
    this.listeners.delete(e);
    for (let p of n ?? []) p(value);
  }
}
var l = be(ih(), 1);
function oQe(e) {
  if (e === void 0) return null;
  if (/^st(term)?(-|$)/.test(e)) return "st";
  if (/^rxvt(-|$)/.test(e)) return "rxvt";
  return null;
}
var ltr = ["iTerm.app", "kitty", "WezTerm", "ghostty", "tmux", "windows-terminal", "WarpTerminal"],
  p9r = ["windows-terminal"];
function u(e) {
  return oQe(e) === "st";
}
function d() {
  return {
    extendedKeys: E(a.terminal, a.CLAUDE_CODE_SESSION_KIND === "bg"),
    synchronizedOutput: T(),
    kittyKeyboard: b(a.terminal, a.CLAUDE_CODE_SESSION_KIND === "bg"),
    kittyGraphics: m({
      terminal: a.terminal,
      bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(a.TMUX) || Boolean(a.STY),
      forced: a.CLAUDE_CODE_FORCE_TERMINAL_IMAGES
    }),
    mousePixels: y({
      terminal: a.terminal,
      bgWorker: a.CLAUDE_CODE_SESSION_KIND === "bg",
      multiplexed: Boolean(a.TMUX) || Boolean(a.STY)
    })
  };
}
function y(e) {
  if (e.bgWorker) return {
    settled: !1,
    source: "bg worker"
  };
  if (e.multiplexed) return {
    settled: !1,
    source: "env: inside tmux or screen"
  };
  return {
    likely: !1,
    source: `env: terminal=${e.terminal || "unknown"}, not asked yet`
  };
}
var c = ["kitty", "ghostty"],
  g = "0.28.0";
function f9r(e) {
  if (e === null) return !1;
  if (e.startsWith("kitty(")) {
    let t = l.coerce(e.slice(6));
    return t !== null && x_(t.version, g);
  }
  return c.some(item => e === item || e.startsWith(`${item} `));
}
function m(e) {
  if (e.forced) return {
    settled: !0,
    source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES"
  };
  if (e.bgWorker) return {
    settled: !1,
    source: "bg worker"
  };
  if (e.multiplexed) return {
    settled: !1,
    source: "env: inside tmux or screen"
  };
  return {
    likely: !1,
    source: `env: terminal=${e.terminal || "unknown"}, not asked yet`
  };
}
function b(e, t) {
  if (t) return {
    settled: !0,
    source: "bg worker"
  };
  if (e !== null && u(e)) return {
    settled: !1,
    source: `env: terminal=${e}`
  };
  return {
    likely: !0,
    source: "not asked yet"
  };
}
function E(e, t) {
  let source_2 = `env: terminal=${e || "unknown"}`;
  if (t) return {
    settled: !1,
    source: `${source_2}, bg worker`
  };
  if (e !== null && ltr.includes(e)) return {
    settled: !0,
    source: source_2
  };
  if (e !== null && u(e)) return {
    settled: !1,
    source: source_2
  };
  return {
    likely: !1,
    source: source_2
  };
}
function T() {
  if (a.TMUX) return {
    likely: !1,
    source: "env: TMUX (tmux answers for itself)"
  };
  if (a.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return {
    settled: !0,
    source: "env: CLAUDE_CODE_FORCE_SYNC_OUTPUT"
  };
  if (uv.isJetBrainsIdeTerminal()) return {
    settled: !0,
    source: "env: TERMINAL_EMULATOR=JetBrains-JediTerm"
  };
  let e = v();
  if (e) return {
    likely: !0,
    source: `env: ${e}`
  };
  return {
    likely: !1,
    source: "env: no known terminal"
  };
}
function v() {
  let TERM_PROGRAM = a.TERM_PROGRAM,
    TERM = a.TERM;
  if (TERM_PROGRAM === "iTerm.app" || TERM_PROGRAM === "WezTerm" || TERM_PROGRAM === "WarpTerminal" || TERM_PROGRAM === "ghostty" || TERM_PROGRAM === "contour" || TERM_PROGRAM === "vscode" || TERM_PROGRAM === "alacritty" || TERM_PROGRAM === "mintty" || TERM_PROGRAM === "rio" || TERM_PROGRAM === "Tabby") return `TERM_PROGRAM=${TERM_PROGRAM}`;
  if (TERM?.includes("kitty")) return `TERM=${TERM}`;
  if (a.KITTY_WINDOW_ID) return "KITTY_WINDOW_ID";
  if (TERM === "xterm-ghostty") return `TERM=${TERM}`;
  if (TERM?.startsWith("foot")) return `TERM=${TERM}`;
  if (TERM?.includes("alacritty")) return `TERM=${TERM}`;
  if (a.ZED_TERM) return "ZED_TERM";
  if (a.WT_SESSION) return "WT_SESSION";
  if (parseInt(a.VTE_VERSION ?? "", 10) >= 6800) return `VTE_VERSION=${a.VTE_VERSION}`;
  return;
}
class f {
  xtversionName = void 0;
  #e = void 0;
  get capabilities() {
    return this.#e ??= new o(d());
  }
  #t = void 0;
  get imageFiles() {
    return this.#t ??= new i(a.CLAUDE_CODE_FORCE_TERMINAL_IMAGES ? {
      value: !0,
      source: "env: CLAUDE_CODE_FORCE_TERMINAL_IMAGES"
    } : void 0);
  }
  resetCapabilities() {
    this.#e = void 0, this.#t = void 0;
  }
  osc11Responsive = void 0;
  cellPixels = void 0;
  probeEventLogged = !1;
  nativeCursorEnabled = void 0;
}
var h = new q(() => new f());
function hT() {
  return h.of(j().host);
}
function dM() {
  return hT().capabilities;
}
function okn() {
  return dM().now("kittyGraphics");
}
function m9r(e) {
  return dM().onSettle("kittyGraphics", e);
}
function I_t() {
  return hT().imageFiles;
}
function g9r(e) {
  hT().xtversionName = e;
}
function O_t() {
  return hT().xtversionName;
}
function om() {
  if (md()?.isVscodeTerm) return !0;
  if (a.TERM_PROGRAM === "vscode") return !0;
  return hT().xtversionName?.startsWith("xterm.js") ?? !1;
}
function h9r() {
  return hT().xtversionName?.toLowerCase().startsWith("ghostty") ?? !1;
}
export { rkn, oQe, ltr, p9r, f9r, hT, dM, okn, m9r, I_t, g9r, O_t, om, h9r };