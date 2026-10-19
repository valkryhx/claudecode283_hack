// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { nt } from "B:/~BUN/root/chunk-nggrknsv.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import { Mle } from "B:/~BUN/root/chunk-v6pbq6dm.js";
var c = "it2";
class u {
  inITerm2 = null;
  it2Command = "it2";
  recordInITerm2(e) {
    this.inITerm2 = e;
  }
  recordIt2Command(e) {
    this.it2Command = e;
  }
}
function I() {
  return {
    cachedDetectionResult: null,
    backendsRegistered: !1,
    inProcessFallbackActive: !1,
    TmuxBackendClass: null,
    ITermBackendClass: null,
    tmuxBackend: null,
    itermBackend: null,
    terminalProbes: new u()
  };
}
var Nve = I();
var TMUX = a.TMUX,
  TMUX_PANE = a.TMUX_PANE;
function Gzn() {
  return !!TMUX;
}
async function Xie() {
  return Gzn();
}
function WAr() {
  return TMUX_PANE || null;
}
function zAr() {
  if (!TMUX) return null;
  return nt(TMUX, ",") || null;
}
async function GBe() {
  return (await lt(Mle, ["-V"])).code === 0;
}
function hX(e = Nve) {
  let {
    terminalProbes: terminalProbes
  } = e;
  if (terminalProbes.inITerm2 !== null) return terminalProbes.inITerm2;
  let TERM_PROGRAM = a.TERM_PROGRAM,
    i = !!a.ITERM_SESSION_ID,
    l = a.terminal === "iTerm.app",
    n = TERM_PROGRAM === "iTerm.app" || i || l;
  return terminalProbes.recordInITerm2(n), n;
}
function MEo(e = Nve) {
  return e.terminalProbes.it2Command;
}
async function GDt(e = Nve) {
  let o = a.SHELL || "/bin/zsh",
    s = await lt(o, ["-lc", `command -v ${c}`], {
      useCwd: !1,
      timeout: 2000
    }),
    i = s.code === 0 ? s.stdout.split(`
`).map(item => item.trim()).filter(Boolean).at(-1) ?? "" : "",
    l = async m => lt(m, ["session", "list"]),
    n = i || c,
    r = await l(n);
  if (i && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) n = c, r = await l(n);
  if (r.code !== 0) return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (i ? "it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled " + "(Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH).")), !1;
  return e.terminalProbes.recordIt2Command(n), !0;
}
export { Nve, Gzn, Xie, WAr, zAr, GBe, hX, MEo, GDt };