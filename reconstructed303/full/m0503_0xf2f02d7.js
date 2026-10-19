// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  $c
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  DUr
} from "B:/~BUN/root/chunk-28dw3zbk.js";
import {
  ve,
  R,
  Ue
} from "B:/~BUN/root/chunk-ef0msk7r.js";
var M = R(function(v, C) {
  var y = Ue("os"),
    f = Ue("tty"),
    o = DUr(),
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

  function T(r) {
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
    if (o("color=16m") || o("color=full") || o("color=truecolor")) return 3;
    if (o("color=256")) return 2;
    if (r && !n && u === void 0) return 0;
    let e = u || 0;
    if (t.TERM === "dumb") return e;
    {
      let i = y.release().split(".");
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

  function k(r) {
    let n = m(r, r && r.isTTY);
    return T(n)
  }
  C.exports = {
    supportsColor: k,
    stdout: T(m(!0, f.isatty(1))),
    stderr: T(m(!0, f.isatty(2)))
  }
});
var A = R(function(H, L) {
  var h = M(),
    c = DUr();

  function _(r) {
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

  function O(r) {
    let {
      CI: n,
      FORCE_HYPERLINK: e,
      NETLIFY: i,
      TEAMCITY_VERSION: p,
      TERM_PROGRAM: l,
      TERM_PROGRAM_VERSION: I,
      VTE_VERSION: a,
      TERM: E
    } = process.env;
    if (e) return !(e.length > 0 && parseInt(e, 10) === 0);
    if (c("no-hyperlink") || c("no-hyperlinks") || c("hyperlink=false") || c("hyperlink=never")) return !1;
    if (c("hyperlink=true") || c("hyperlink=always")) return !0;
    if (i) return !0;
    if (!h.supportsColor(r)) return !1;
    if (r && !r.isTTY) return !1;
    if ("WT_SESSION" in process.env) return !0;
    return !1;
    if (l) {
      let s = _(I || "");
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
    switch (E) {
      case "alacritty":
        return !0
    }
  }
  L.exports = {
    supportsHyperlink: O,
    stdout: O(process.stdout),
    stderr: O(process.stderr)
  }
});
var d = ve(A(), 1);
var S = ["ghostty", "Hyper", "kitty", "alacritty", "iTerm.app", "iTerm2", "WarpTerminal"];

function iNe(r) {
  let n = $c()?.hyperlinks;
  if (n !== void 0) return n;
  if ("FORCE_HYPERLINK" in (r?.env ?? process.env)) return r?.stdoutSupported ?? d.default.supportsHyperlink(process.stdout);
  return
}

function Ev(r) {
  let n = iNe(r);
  if (n !== void 0) return n;
  let e = r?.env ?? process.env;
  if (r?.stdoutSupported ?? d.default.supportsHyperlink(process.stdout)) return !0;
  let p = e.TERM_PROGRAM;
  if (p && S.includes(p)) return !0;
  if (e.TERMINAL_EMULATOR === "JetBrains-JediTerm") return !0;
  if (e.WT_SESSION && p !== "tmux" && !e.TMUX) return !0;
  if (p === "tmux") {
    let [a, E] = (e.TERM_PROGRAM_VERSION ?? "").split("."), s = parseInt(a ?? "", 10), N = parseInt(E ?? "", 10);
    if (s > 3 || s === 3 && N >= 4) return !0
  }
  let l = e.LC_TERMINAL;
  if (l && S.includes(l)) return !0;
  if (e.TERM?.includes("kitty")) return !0;
  return !1
}
export {
  iNe,
  Ev
};
