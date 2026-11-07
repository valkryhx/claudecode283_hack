// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { ut } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { zc } from "B:/~BUN/root/chunk-wt8tyqt4.js";
import { homedir as s } from "os";
import { dirname as v, join as r, resolve as C } from "path";
function a() {
  let e = i.SHELL || "",
    n = s(),
    l = r(n, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let cacheFile = r(l, "completion.zsh");
    return {
      name: "zsh",
      rcFile: r(n, ".zshrc"),
      cacheFile: cacheFile,
      completionLine: `[[ -f "${cacheFile}" ]] && source "${cacheFile}"`,
      shellFlag: "zsh"
    };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let cacheFile_2 = r(l, "completion.bash");
    return {
      name: "bash",
      rcFile: r(n, ".bashrc"),
      cacheFile: cacheFile_2,
      completionLine: `[ -f "${cacheFile_2}" ] && source "${cacheFile_2}"`,
      shellFlag: "bash"
    };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = i.XDG_CONFIG_HOME || r(n, ".config"),
      cacheFile_3 = r(l, "completion.fish");
    return {
      name: "fish",
      rcFile: r(o, "fish", "config.fish"),
      cacheFile: cacheFile_3,
      completionLine: `[ -f "${cacheFile_3}" ] && source "${cacheFile_3}"`,
      shellFlag: "fish"
    };
  }
  return null;
}
async function t$o() {
  return;
}
function m(e) {
  let {
    cmd: cmd,
    prefixArgs: prefixArgs
  } = zc();
  return ut(cmd, [...prefixArgs, "completion", e.shellFlag, "--output", e.cacheFile]);
}
export { t$o };