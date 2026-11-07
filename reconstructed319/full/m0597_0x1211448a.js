// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Nn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  dt
} from "B:/~BUN/root/chunk-9kvvd0hy.js";
import {
  YP,
  Ge
} from "B:/~BUN/root/chunk-z7bs0q82.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  stripVTControlCharacters as i
} from "util";

function R6t(t, e = 3) {
  let r = t.map((s) => Nn(i(s)).trim()),
    o = r.slice(0, e).join(", "),
    n = r.length - e;
  return n > 0 ? `${o} (${n} more)` : o
}

function aJr(t = Number.POSITIVE_INFINITY) {
  try {
    if (!Ge.isSandboxingEnabled()) return;
    let e = Ge.getDeniesDroppedForAnotherHost();
    if (e.length === 0) return;
    let r = `The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${ze} rule or an ${dt} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;
    return {
      issue: `Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${R6t(e,t)}`,
      fix: e.some((o) => o.endsWith(" from policySettings")) ? `${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.` : r
    }
  } catch (e) {
    YP(e, "deniesOnAnotherHostNotDescribed");
    return
  }
}

function J7o() {
  let t = aJr(3);
  if (t) process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`)
}
export {
  R6t,
  aJr,
  J7o
};
