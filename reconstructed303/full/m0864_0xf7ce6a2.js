// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  lt
} from "B:/~BUN/root/chunk-6ft8yhc8.js";
import {
  Bc
} from "B:/~BUN/root/chunk-c0j3f8cc.js";
import {
  homedir as c
} from "os";
import {
  dirname as v,
  join as n,
  resolve as C
} from "path";

function s() {
  let e = a.SHELL || "",
    i = c(),
    r = n(i, ".claude");
  if (e.endsWith("/zsh") || e.endsWith("/zsh.exe")) {
    let o = n(r, "completion.zsh");
    return {
      name: "zsh",
      rcFile: n(i, ".zshrc"),
      cacheFile: o,
      completionLine: `[[ -f "${o}" ]] && source "${o}"`,
      shellFlag: "zsh"
    }
  }
  if (e.endsWith("/bash") || e.endsWith("/bash.exe")) {
    let o = n(r, "completion.bash");
    return {
      name: "bash",
      rcFile: n(i, ".bashrc"),
      cacheFile: o,
      completionLine: `[ -f "${o}" ] && source "${o}"`,
      shellFlag: "bash"
    }
  }
  if (e.endsWith("/fish") || e.endsWith("/fish.exe")) {
    let o = a.XDG_CONFIG_HOME || n(i, ".config"),
      l = n(r, "completion.fish");
    return {
      name: "fish",
      rcFile: n(o, "fish", "config.fish"),
      cacheFile: l,
      completionLine: `[ -f "${l}" ] && source "${l}"`,
      shellFlag: "fish"
    }
  }
  return null
}
async function E4r() {
  return
}

function m(e) {
  let {
    cmd: i,
    prefixArgs: r
  } = Bc();
  return lt(i, [...r, "completion", e.shellFlag, "--output", e.cacheFile])
}
export {
  E4r
};
