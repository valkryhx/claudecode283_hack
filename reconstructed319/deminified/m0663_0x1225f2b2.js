// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { rs } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { sf } from "B:/~BUN/root/chunk-game8aqv.js";
import { JAo } from "B:/~BUN/root/chunk-b91sxvrb.js";
import { Oe, M, je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var y = M(function (k, I) {
  var d = je("os"),
    a = je("tty"),
    i = JAo(),
    {
      env: env
    } = process,
    u;
  if (i("no-color") || i("no-colors") || i("color=false") || i("color=never")) u = 0;else if (i("color") || i("colors") || i("color=true") || i("color=always")) u = 1;
  if ("FORCE_COLOR" in env) if (env.FORCE_COLOR === "true") u = 1;else if (env.FORCE_COLOR === "false") u = 0;else u = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
  function E(level) {
    if (level === 0) return !1;
    return {
      level: level,
      hasBasic: !0,
      has256: level >= 2,
      has16m: level >= 3
    };
  }
  function m(r, n) {
    if (u === 0) return 0;
    if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
    if (i("color=256")) return 2;
    if (r && !n && u === void 0) return 0;
    let e = u || 0;
    if (env.TERM === "dumb") return e;
    {
      let s = d.release().split(".");
      if (Number(s[0]) >= 10 && Number(s[2]) >= 10586) return Number(s[2]) >= 14931 ? 3 : 2;
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some(item => item in env) || env.CI_NAME === "codeship") return 1;
      return e;
    }
    if ("TEAMCITY_VERSION" in env) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    if (env.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in env) {
      let s = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return s >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) return 1;
    if ("COLORTERM" in env) return 1;
    return e;
  }
  function supportsColor(r) {
    let n = m(r, r && r.isTTY);
    return E(n);
  }
  I.exports = {
    supportsColor: supportsColor,
    stdout: E(m(!0, a.isatty(1))),
    stderr: E(m(!0, a.isatty(2)))
  };
});
var L = M(function (H, h) {
  var _ = y(),
    c = JAo();
  function C(r) {
    if (/^\d{3,4}$/.test(r)) {
      let e = /(\d{1,2})(\d{2})/.exec(r) || [];
      return {
        major: 0,
        minor: parseInt(e[1], 10),
        patch: parseInt(e[2], 10)
      };
    }
    let n = (r || "").split(".").map(item => parseInt(item, 10));
    return {
      major: n[0],
      minor: n[1],
      patch: n[2]
    };
  }
  function supportsHyperlink(r) {
    let {
      CI: CI,
      FORCE_HYPERLINK: FORCE_HYPERLINK,
      NETLIFY: NETLIFY,
      TEAMCITY_VERSION: TEAMCITY_VERSION,
      TERM_PROGRAM: TERM_PROGRAM,
      TERM_PROGRAM_VERSION: TERM_PROGRAM_VERSION,
      VTE_VERSION: VTE_VERSION,
      TERM: TERM
    } = process.env;
    if (FORCE_HYPERLINK) return !(FORCE_HYPERLINK.length > 0 && parseInt(FORCE_HYPERLINK, 10) === 0);
    if (c("no-hyperlink") || c("no-hyperlinks") || c("hyperlink=false") || c("hyperlink=never")) return !1;
    if (c("hyperlink=true") || c("hyperlink=always")) return !0;
    if (NETLIFY) return !0;
    if (!_.supportsColor(r)) return !1;
    if (r && !r.isTTY) return !1;
    if ("WT_SESSION" in process.env) return !0;
    return !1;
    if (TERM_PROGRAM) {
      let o = C(TERM_PROGRAM_VERSION || "");
      switch (TERM_PROGRAM) {
        case "iTerm.app":
          if (o.major === 3) return o.minor >= 1;
          return o.major > 3;
        case "WezTerm":
          return o.major >= 20200620;
        case "vscode":
          return o.major > 1 || o.major === 1 && o.minor >= 72;
        case "ghostty":
          return !0;
      }
    }
    switch (TERM) {
      case "alacritty":
        return !0;
    }
  }
  h.exports = {
    supportsHyperlink: supportsHyperlink,
    stdout: supportsHyperlink(process.stdout),
    stderr: supportsHyperlink(process.stderr)
  };
});
var v = Oe(L(), 1);
var A = ["ghostty", "Hyper", "kitty", "alacritty", "iTerm.app", "iTerm2", "WarpTerminal"];
function l6e(r) {
  let n = sf()?.hyperlinks;
  if (n !== void 0) return n;
  let FORCE_HYPERLINK_2 = (r?.env ?? process.env).FORCE_HYPERLINK;
  if (!FORCE_HYPERLINK_2) return;
  return !(rs(FORCE_HYPERLINK_2) || parseInt(FORCE_HYPERLINK_2, 10) === 0);
}
function TS(r) {
  let n = l6e(r);
  if (n !== void 0) return n;
  let e = r?.env ?? process.env;
  if (r?.stdoutSupported ?? v.default.supportsHyperlink(process.stdout)) return !0;
  let TERM_PROGRAM_2 = e.TERM_PROGRAM;
  if (TERM_PROGRAM_2 && A.includes(TERM_PROGRAM_2)) return !0;
  if (e.TERMINAL_EMULATOR === "JetBrains-JediTerm") return !0;
  if (e.WT_SESSION && TERM_PROGRAM_2 !== "tmux" && !e.TMUX) return !0;
  if (TERM_PROGRAM_2 === "tmux") {
    let [f, R] = (e.TERM_PROGRAM_VERSION ?? "").split("."),
      o = parseInt(f ?? "", 10),
      N = parseInt(R ?? "", 10);
    if (o > 3 || o === 3 && N >= 4) return !0;
  }
  let LC_TERMINAL = e.LC_TERMINAL;
  if (LC_TERMINAL && A.includes(LC_TERMINAL)) return !0;
  if (e.TERM?.includes("kitty")) return !0;
  return !1;
}
export { l6e, TS };