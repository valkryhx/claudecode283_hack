// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Na, kI, nu, SL } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { delimiter as l, isAbsolute as u, resolve as o } from "path";
var kir = "CLAUDE_CODE_PLUGIN_DIRS",
  K8r = "Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";
function Eir() {
  let n = (a.CLAUDE_CODE_PLUGIN_DIRS ?? "").split(l).map(item => nu(item.trim())).filter(item => item !== ""),
    i = n.filter(item => !s(item));
  if (i.length > 0) t(`${kir}: skipped ${i.join(", ")}: a plugin folder here is an absolute local path or starts with ~`, {
    level: "warn"
  });
  return n.filter(s).map(item => o(item));
}
function Y8r() {
  let n = Eir();
  if (a.CLAUDE_CODE_PLUGIN_DIRS !== void 0) a.set("CLAUDE_CODE_PLUGIN_DIRS", n.join(l));
  return n;
}
function $$(...n) {
  let i = new Map();
  for (let e of n.flat()) {
    let r = o(e);
    if (!i.has(r)) i.set(r, e);
  }
  return [...i.values()];
}
function P_e(n, i) {
  let e = new Set(i.map(item => o(item)));
  return n.filter(item => !e.has(o(item)));
}
function s(n) {
  return u(n) && !SL(n) && !Na(n) && !kI(n);
}
export { kir, K8r, Eir, Y8r, $$, P_e };