// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ml } from "B:/~BUN/root/chunk-game8aqv.js";
import { wr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { $c, wj, iwt, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { ME, dP } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { Sae, wae } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { kr } from "B:/~BUN/root/chunk-dm4rzkqc.js";
import { Me } from "B:/~BUN/root/chunk-9kvvd0hy.js";
import { kt } from "B:/~BUN/root/chunk-86hj8bna.js";
import { accessSync as m, constants as d } from "fs";
import { isAbsolute as p } from "path";
async function b(e) {
  try {
    return m(e, d.X_OK), !0;
  } catch (error) {
    if (x() !== "windows" && p(e) && wr(error)) return !1;
    let {
      code: code
    } = await ut(e, ["--version"], {
      timeout: 1000,
      useCwd: !1
    });
    return code === 0;
  }
}
function a(e, o) {
  let r = [i.CLAUDE_CODE_SHELL, i.SHELL].filter(item => item !== void 0 && (item.includes("bash") || item.includes("zsh"))),
    n = i.SHELL?.includes("bash"),
    s = ["/bin", "/usr/bin", "/usr/local/bin", "/opt/homebrew/bin"],
    h = n ? ["bash", "zsh"] : ["zsh", "bash"],
    [u, f] = n ? [o, e] : [e, o];
  return [...r, u, ...h.flatMap(item => s.map(c => `${c}/${item}`)), f].filter(item => item !== null);
}
async function S() {
  let [e, o] = await Promise.all([$c("zsh"), $c("bash")]),
    r;
  for (let s of a(e, o)) if (await b(s)) {
    r = s;
    break;
  }
  let CLAUDE_CODE_SHELL = i.CLAUDE_CODE_SHELL;
  if (CLAUDE_CODE_SHELL) t(r === CLAUDE_CODE_SHELL ? `Using shell override: ${CLAUDE_CODE_SHELL}` : `CLAUDE_CODE_SHELL="${CLAUDE_CODE_SHELL}" is not a valid bash/zsh path, falling back to detection`);
  if (!r) {
    let s = "No suitable shell found. Claude CLI requires a Posix shell environment. Please ensure you have a valid shell installed and the SHELL environment variable set.";
    throw t(s, {
      level: "error"
    }), Error(s);
  }
  return r;
}
function Qbr() {
  if (ME()) return;
  return a(wj("zsh"), wj("bash")).find(item => {
    try {
      return iwt(item, i.PATH ?? "") !== null;
    } catch {
      return !1;
    }
  });
}
function bLi() {
  return Sae().resolvedBashToolShellPath ?? Qbr();
}
async function SLi() {
  return dP(), zms(Sae());
}
function zms(e) {
  return e.bashToolShellPath ??= S().then(o => (e.resolvedBashToolShellPath = o, o), o => {
    throw e.bashToolShellPath = null, o;
  }), e.bashToolShellPath;
}
var Uf = [Me, kt];
function jk() {
  let CLAUDE_CODE_USE_POWERSHELL_TOOL = i.CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if (x() !== "windows") return CLAUDE_CODE_USE_POWERSHELL_TOOL === !0;
  if (CLAUDE_CODE_USE_POWERSHELL_TOOL !== void 0) return CLAUDE_CODE_USE_POWERSHELL_TOOL;
  if (wae() === null) return !0;
  return v("tengu_cobalt_ridge", !1);
}
function Ll() {
  if (x() !== "windows") return !0;
  return wae() !== null;
}
function Gms() {
  let e = kr();
  return e.bashTeachesHeredocOnStdin ??= i.platform === "darwin" && Qbr() === "/bin/bash" && v("tengu_mossy_anvil", !0), e.bashTeachesHeredocOnStdin;
}
function Zbr(e, o) {
  return Ml() || e || o || !tn() || v("tengu_wiggly_locket", !1) !== !0;
}
var Vms = `Claude Code on Windows requires either Git for Windows (for bash) or PowerShell. Install one of:
  - Git for Windows: https://git-scm.com/downloads/win
  - PowerShell 7: https://aka.ms/powershell
Or set CLAUDE_CODE_GIT_BASH_PATH to your bash.exe location.`;
function p1() {
  return Ll() ? "bash" : "powershell";
}
export { Qbr, bLi, SLi, zms, Uf, jk, Ll, Gms, Zbr, Vms, p1 };