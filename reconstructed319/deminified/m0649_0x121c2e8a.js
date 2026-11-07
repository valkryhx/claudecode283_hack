// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Ba, HE, Df, jH } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { delimiter as a, isAbsolute as u, resolve as s } from "path";
var Uqr = "CLAUDE_CODE_PLUGIN_DIRS",
  w2o = "Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";
function Bqr() {
  let n = (i.CLAUDE_CODE_PLUGIN_DIRS ?? "").split(a).map(item => Df(item.trim())).filter(item => item !== ""),
    r = n.filter(item => !l(item));
  if (r.length > 0) t(`${Uqr}: skipped ${r.join(", ")}: a plugin folder here is an absolute local path or starts with ~`, {
    level: "warn"
  });
  return n.filter(l).map(item => s(item));
}
function k2o() {
  let n = Bqr();
  if (i.CLAUDE_CODE_PLUGIN_DIRS !== void 0) i.set("CLAUDE_CODE_PLUGIN_DIRS", n.join(a));
  return n;
}
function WG(...n) {
  let r = new Map();
  for (let e of n.flat()) {
    let o = s(e);
    if (!r.has(o)) r.set(o, e);
  }
  return [...r.values()];
}
function kOe(n, r) {
  let e = new Set(r.map(item => s(item)));
  return n.filter(item => !e.has(s(item)));
}
function l(n) {
  return u(n) && !jH(n) && !Ba(n) && !HE(n);
}
export { Uqr, w2o, Bqr, k2o, WG, kOe };