// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  md
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  mYn
} from "B:/~BUN/root/chunk-vyq5y0zs.js";
import {
  be,
  k,
  Re
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var C = k(function(v, y) {
  var I = Re("os"),
    f = Re("tty"),
    o = mYn(),
    {
      env: t
    } = process,
    u;
  if (o("no-color") || o("no-colors") || o("color=false") || o("color=never")) u = 0;
  else if (o("color") || o("colors") || o("color=true") || o("color=always")) u = 1;
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

  function T(r, n) {
    if (u === 0) return 0;
    if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
    if (o("color=256")) return 2;
    if (r && !n && u === void 0) return 0;
    let e = u || 0;
    if (t.TERM === "dumb") return e;
    {
      let i = I.release().split(".");
      if (Number(i[0]) >= 10 && Number(i[2]) >= 10586) return Number(i[2]) >= 14931 ? 3 : 2;
      return 1
    }
    if ("CI" in t) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((i) => (i in t)) || t.CI_NAME === "codeship") return 1;
      return e
    }
    if ("TEAMCITY_VERSION" in t) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(t.TEAMCITY_VERSION) ? 1 : 0;
    if (t.COLORTERM === "truecolor") return 3;
    if ("TERM_PROGRAM" in t) {
      let i = parseInt((t.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (t.TERM_PROGRAM) {
        case "iTerm.app":
          return i >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2
      }
    }
    if (/-256(color)?$/i.test(t.TERM)) return 2;
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(t.TERM)) return 1;
    if ("COLORTERM" in t) return 1;
    return e
  }

  function N(r) {
    let n = T(r, r && r.isTTY);
    return E(n)
  }
  y.exports = {
    supportsColor: N,
    stdout: E(T(!0, f.isatty(1))),
    stderr: E(T(!0, f.isatty(2)))
  }
});
var L = k(function(H, h) {
  var _ = C(),
    c = mYn();

  function M(r) {
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

  function m(r) {
    let {
      CI: n,
      FORCE_HYPERLINK: e,
      NETLIFY: i,
      TEAMCITY_VERSION: p,
      TERM_PROGRAM: l,
      TERM_PROGRAM_VERSION: d,
      VTE_VERSION: a,
      TERM: R
    } = process.env;
    if (e) return !(e.length > 0 && parseInt(e, 10) === 0);
    if (c("no-hyperlink") || c("no-hyperlinks") || c("hyperlink=false") || c("hyperlink=never")) return !1;
    if (c("hyperlink=true") || c("hyperlink=always")) return !0;
    if (i) return !0;
    if (!_.supportsColor(r)) return !1;
    if (r && !r.isTTY) return !1;
    if ("WT_SESSION" in process.env) return !0;
    return !1;
    if (l) {
      let s = M(d || "");
      switch (l) {
        case "iTerm.app":
          if (s.major === 3) return s.minor >= 1;
          return s.major > 3;
        case "WezTerm":
          return s.major >= 20200620;
        case "vscode":
          return s.major > 1 || s.major === 1 && s.minor >= 72;
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
    supportsHyperlink: m,
    stdout: m(process.stdout),
    stderr: m(process.stderr)
  }
});
var O = be(L(), 1);
var A = ["ghostty", "Hyper", "kitty", "alacritty", "iTerm.app", "iTerm2", "WarpTerminal"];

function Kbe(r) {
  let n = md()?.hyperlinks;
  if (n !== void 0) return n;
  if ("FORCE_HYPERLINK" in (r?.env ?? process.env)) return r?.stdoutSupported ?? O.default.supportsHyperlink(process.stdout);
  return
}

function Ny(r) {
  let n = Kbe(r);
  if (n !== void 0) return n;
  let e = r?.env ?? process.env;
  if (r?.stdoutSupported ?? O.default.supportsHyperlink(process.stdout)) return !0;
  let p = e.TERM_PROGRAM;
  if (p && A.includes(p)) return !0;
  if (e.TERMINAL_EMULATOR === "JetBrains-JediTerm") return !0;
  if (e.WT_SESSION && p !== "tmux" && !e.TMUX) return !0;
  if (p === "tmux") {
    let [a, R] = (e.TERM_PROGRAM_VERSION ?? "").split("."), s = parseInt(a ?? "", 10), S = parseInt(R ?? "", 10);
    if (s > 3 || s === 3 && S >= 4) return !0
  }
  let l = e.LC_TERMINAL;
  if (l && A.includes(l)) return !0;
  if (e.TERM?.includes("kitty")) return !0;
  return !1
}
export {
  Kbe,
  Ny
};
