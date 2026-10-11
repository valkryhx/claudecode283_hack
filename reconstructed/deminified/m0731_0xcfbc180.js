// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { tt } from "B:/~BUN/root/chunk-py7yqpgt.js";
import { Hu } from "B:/~BUN/root/chunk-ewjenbzd.js";
import { homedir as c } from "os";
import { dirname as x, join as r, resolve as C } from "path";
function s() {
  let e = a.SHELL || "",
    i = c(),
    n = r(i, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let cacheFile = r(n, "completion.zsh");
    return {
      name: "zsh",
      rcFile: r(i, ".zshrc"),
      cacheFile: cacheFile,
      completionLine: `[[ -f "${cacheFile}" ]] && source "${cacheFile}"`,
      shellFlag: "zsh"
    };
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let cacheFile_2 = r(n, "completion.bash");
    return {
      name: "bash",
      rcFile: r(i, ".bashrc"),
      cacheFile: cacheFile_2,
      completionLine: `[ -f "${cacheFile_2}" ] && source "${cacheFile_2}"`,
      shellFlag: "bash"
    };
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = a.XDG_CONFIG_HOME || r(i, ".config"),
      cacheFile_3 = r(n, "completion.fish");
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
async function Oer() {
  return;
}
function m(e) {
  let {
    cmd: cmd,
    prefixArgs: prefixArgs
  } = Hu();
  return tt(cmd, [...prefixArgs, "completion", e.shellFlag, "--output", e.cacheFile]);
}
export { Oer };