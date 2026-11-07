// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  rs
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  sf
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  JAo
} from "B:/~BUN/root/chunk-b91sxvrb.js";
import {
  Oe,
  M,
  je
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
var y = M(function(k, I) {
  var d = je("os"),
    a = je("tty"),
    i = JAo(),
    {
      env: t
    } = process,
    u;
  if (i("no-color") || i("no-colors") || i("color=false") || i("color=never")) u = 0;
  else if (i("color") || i("colors") || i("color=true") || i("color=always")) u = 1;
  if ("FORCE_COLOR" in t)
    if (t.FORCE_COLOR === "true") u = 1;
    else if (t.FORCE_COLOR === "false") u = 0;
  else u = t.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(t.FORCE_COLOR, 10), 3);

  function E(r) {
    if (r === 0) return !1;
    return {
      level: r,
      hasBasic: !0,
      has256: r >= 2,
      has16m: r >= 3
    }
  }

  function m(r, n) {
    if (u === 0) return 0;
    if (i("color=16m") || i("color=full") || i("color=truecolor")) return 3;
    if (i("color=256")) return 2;
    if (r && !n && u === void 0) return 0;
    let e = u || 0;
    if (t.TERM === "dumb") return e;
    {
      let s = d.release().split(".");
      if (Number(s[0]) >= 10 && Number(s[2]) >= 10586) return Number(s[2]) >= 14931 ? 3 : 2;
      return 1
    }
    if ("CI" in t) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((s) => (s in t)) || t.CI_NAME === "codeship") return 1;
      return e
    }
    if ("TEAMCITY_VERSION" in t) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(t.TEAMCITY_VERSION) ? 1 : 0;
    if (t.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in t) {
      let s = parseInt((t.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (t.TERM_PROGRAM) {
        case "iTerm.app":
          return s >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2
      }
    }
    if (/-256(color)?$/i.test(t.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(t.TERM)) return 1;
    if ("COLORTERM" in t) return 1;
    return e
  }

  function S(r) {
    let n = m(r, r && r.isTTY);
    return E(n)
  }
  I.exports = {
    supportsColor: S,
    stdout: E(m(!0, a.isatty(1))),
    stderr: E(m(!0, a.isatty(2)))
  }
});
var L = M(function(H, h) {
  var _ = y(),
    c = JAo();

  function C(r) {
    if (/^\d{3,4}$/.test(r)) {
      let e = /(\d{1,2})(\d{2})/.exec(r) || [];
      return {
        major: 0,
        minor: parseInt(e[1], 10),
        patch: parseInt(e[2], 10)
      }
    }
    let n = (r || "").split(".").map((e) => parseInt(e, 10));
    return {
      major: n[0],
      minor: n[1],
      patch: n[2]
    }
  }

  function T(r) {
    let {
      CI: n,
      FORCE_HYPERLINK: e,
      NETLIFY: s,
      TEAMCITY_VERSION: p,
      TERM_PROGRAM: l,
      TERM_PROGRAM_VERSION: O,
      VTE_VERSION: f,
      TERM: R
    } = process.env;
    if (e) return !(e.length > 0 && parseInt(e, 10) === 0);
    if (c("no-hyperlink") || c("no-hyperlinks") || c("hyperlink=false") || c("hyperlink=never")) return !1;
    if (c("hyperlink=true") || c("hyperlink=always")) return !0;
    if (s) return !0;
    if (!_.supportsColor(r)) return !1;
    if (r && !r.isTTY) return !1;
    if ("WT_SESSION" in process.env) return !0;
    return !1;
    if (l) {
      let o = C(O || "");
      switch (l) {
        case "iTerm.app":
          if (o.major === 3) return o.minor >= 1;
          return o.major > 3;
        case "WezTerm":
          return o.major >= 20200620;
        case "vscode":
          return o.major > 1 || o.major === 1 && o.minor >= 72;
        case "ghostty":
          return !0
      }
    }
    switch (R) {
      case "alacritty":
        return !0
    }
  }
  h.exports = {
    supportsHyperlink: T,
    stdout: T(process.stdout),
    stderr: T(process.stderr)
  }
});
var v = Oe(L(), 1);
var A = ["ghostty", "Hyper", "kitty", "alacritty", "iTerm.app", "iTerm2", "WarpTerminal"];

function l6e(r) {
  let n = sf()?.hyperlinks;
  if (n !== void 0) return n;
  let s = (r?.env ?? process.env).FORCE_HYPERLINK;
  if (!s) return;
  return !(rs(s) || parseInt(s, 10) === 0)
}

function TS(r) {
  let n = l6e(r);
  if (n !== void 0) return n;
  let e = r?.env ?? process.env;
  if (r?.stdoutSupported ?? v.default.supportsHyperlink(process.stdout)) return !0;
  let p = e.TERM_PROGRAM;
  if (p && A.includes(p)) return !0;
  if (e.TERMINAL_EMULATOR === "JetBrains-JediTerm") return !0;
  if (e.WT_SESSION && p !== "tmux" && !e.TMUX) return !0;
  if (p === "tmux") {
    let [f, R] = (e.TERM_PROGRAM_VERSION ?? "").split("."), o = parseInt(f ?? "", 10), N = parseInt(R ?? "", 10);
    if (o > 3 || o === 3 && N >= 4) return !0
  }
  let l = e.LC_TERMINAL;
  if (l && A.includes(l)) return !0;
  if (e.TERM?.includes("kitty")) return !0;
  return !1
}
export {
  l6e,
  TS
};
