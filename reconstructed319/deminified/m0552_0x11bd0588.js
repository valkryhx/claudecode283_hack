// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { CSe } from "B:/~BUN/root/chunk-xqymp2nr.js";
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
var Z0e = I();
var TMUX = i.TMUX,
  TMUX_PANE = i.TMUX_PANE;
function Vwr() {
  return !!TMUX;
}
async function Zce() {
  return Vwr();
}
function wfo() {
  return TMUX_PANE || null;
}
function kfo() {
  if (!TMUX) return null;
  return tt(TMUX, ",") || null;
}
async function EJe() {
  return (await ut(CSe, ["-V"])).code === 0;
}
function Goe(e = Z0e) {
  let {
    terminalProbes: terminalProbes
  } = e;
  if (terminalProbes.inITerm2 !== null) return terminalProbes.inITerm2;
  let TERM_PROGRAM = i.TERM_PROGRAM,
    s = !!i.ITERM_SESSION_ID,
    l = i.terminal === "iTerm.app",
    n = TERM_PROGRAM === "iTerm.app" || s || l;
  return terminalProbes.recordInITerm2(n), n;
}
function Qys(e = Z0e) {
  return e.terminalProbes.it2Command;
}
async function oZt(e = Z0e) {
  let o = i.SHELL || "/bin/zsh",
    a = await ut(o, ["-lc", `command -v ${c}`], {
      useCwd: !1,
      timeout: 2000
    }),
    s = a.code === 0 ? a.stdout.split(`
`).map(item => item.trim()).filter(Boolean).at(-1) ?? "" : "",
    l = async m => ut(m, ["session", "list"]),
    n = s || c,
    r = await l(n);
  if (s && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) n = c, r = await l(n);
  if (r.code !== 0) return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (s ? "it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled " + "(Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH).")), !1;
  return e.terminalProbes.recordIt2Command(n), !0;
}
export { Z0e, Vwr, Zce, wfo, kfo, EJe, Goe, Qys, oZt };